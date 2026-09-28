// Curated spreads that actually have position-specific JSON files in data/spreads/
const CURATED_SPREAD_SLUGS = new Set(['celtic-cross', 'one-card', 'three-cards', 'yes-no', 'love-triangle']);

// Global storage for dynamic data
window.allTarotCards = [];
window.TarotPositions = {
    loadedSpreads: {},
    _loading: {},
    async loadSpread(spreadSlug) {
        if (!spreadSlug) return null;
        // If not a curated spread with an actual JSON file, skip network call
        if (!CURATED_SPREAD_SLUGS.has(spreadSlug)) return null;

        if (this.loadedSpreads[spreadSlug]) return this.loadedSpreads[spreadSlug];
        if (this._loading[spreadSlug]) return this._loading[spreadSlug];

        this._loading[spreadSlug] = (async () => {
            try {
                const res = await fetch('data/spreads/' + spreadSlug + '.json?v=1.8');
                const contentType = res.headers.get('content-type') || '';
                if (res.ok && contentType.includes('application/json')) {
                    this.loadedSpreads[spreadSlug] = await res.json();
                    console.log('Loaded spread data for', spreadSlug);
                }
            } catch(e) {
                console.warn('Could not load spread data for ' + spreadSlug + ':', e);
            } finally {
                delete this._loading[spreadSlug];
            }
            return this.loadedSpreads[spreadSlug];
        })();

        return this._loading[spreadSlug];
    },
    getPositionMeaning(card, spread, index, lang) {
        if (!card) return '';
        const state = card.reversed ? 'reversed' : 'upright';
        const l = (lang === 'uk' || lang === 'ua') ? 'ua' : 'en';

        // 1. Try to get curated position text from loaded spread JSON
        if (spread && spread.slug && this.loadedSpreads[spread.slug]) {
            const spreadData = this.loadedSpreads[spread.slug];
            const posData = spreadData[card.id] || spreadData[String(card.id)];
            if (posData) {
                let meaningObj = null;
                const posNum = index + 1;
                const namedKeys = ['yes', 'no', 'advice'];
                const namedKey = namedKeys[index];

                if (posData[posNum] && posData[posNum][state]) {
                    meaningObj = posData[posNum][state];
                } else if (namedKey && posData[namedKey] && posData[namedKey][state]) {
                    meaningObj = posData[namedKey][state];
                } else if (posData[state]) {
                    meaningObj = posData[state];
                }

                if (meaningObj) {
                    const raw = meaningObj[l] || meaningObj['uk'] || meaningObj['ua'] || meaningObj['en'];
                    if (raw && typeof raw === 'string') {
                        return raw.trim();
                    }
                }
            }
        }

        // 2. Concise fallback snippet for spreads without custom JSON
        const rawFallback = card.reversed
            ? (l === 'ua' ? (card.meaning_reversed || card.meaning_upright || '') : (card.meaning_reversed_en || card.meaning_upright_en || ''))
            : (l === 'ua' ? (card.meaning_upright || '') : (card.meaning_upright_en || ''));
        if (!rawFallback) return '';

        let firstPart = rawFallback.split(/\n+/)[0].trim();
        firstPart = firstPart.replace(/^[^a-zA-Zа-яА-ЯіІїЇєЄ\-]{2,40}[\-:]\s*/i, '').replace(/^[\s\-:,]+/, '');
        const cut = firstPart.search(/[.!?](\s|$)/);
        if (cut > 15 && cut < 180) firstPart = firstPart.slice(0, cut + 1);
        else if (firstPart.length > 140) firstPart = firstPart.slice(0, 137).replace(/\s+\S*$/, '') + '...';
        if (firstPart.length > 0) firstPart = firstPart.charAt(0).toUpperCase() + firstPart.slice(1);
        return firstPart.trim();
    }
};

window.initDynamicData = async function() {
    try {
        const res = await fetch('data/cards.json');
        window.allTarotCards = await res.json();
        console.log('Cards loaded');

        // Preload the curated spreads immediately so they are instantly ready
        const curatedSpreads = ['celtic-cross', 'one-card', 'three-cards', 'yes-no', 'love-triangle'];
        curatedSpreads.forEach(slug => {
            window.TarotPositions.loadSpread(slug);
        });

        // Preload card images silently
        setTimeout(() => {
            window.allTarotCards.forEach(c => {
                if(c.image) { const img = new Image(); img.src = c.image; }
            });
        }, 100);
    } catch(e) {
        console.error('Failed to load cards.json:', e);
    }
};
