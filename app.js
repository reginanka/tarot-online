const { createApp, ref, computed, onMounted } = Vue;

createApp({
    setup() {
        const lang = ref(localStorage.getItem('tarot-lang') || (navigator.language.startsWith('uk') ? 'uk' : 'en'));
        const t = computed(() => uiTranslations[lang.value]);

        const currentView = ref('home');
        const mobileMenuOpen = ref(false);
        const selectedSpread = ref(null);
        const selectedCard = ref(null);
        const userQuestion = ref('');
        const readingStep = ref('focus');
        const readingResult = ref({ cards: [] });
        const showResults = ref(false);
        const copySuccess = ref(false);

        // Accessing constants from data.js / cards.js
        const spreads = ref(spreadsData);
        const cards = ref(allTarotCards);

        // Unified catalog filter (single-select)
        // kind: 'all' | 'size' | 'query' | 'category'
        const activeFilter = ref({ kind: 'all', id: 'all' });

        const getSpreadSize = (s) => {
            const n = s.cards_count || 0;
            if (n <= 4) return 'quick';
            if (n <= 7) return 'medium';
            return 'deep';
        };

        // Thematic categories (без «Короткі / Прогнози / Глибокі» — їх замінюють size/query)
        const THEME_UA = [
            'Універсальні',
            'Кохання та Стосунки',
            'Кар\'єра та Фінанси',
            'Духовність та Здоров\'я',
            'Психологія',
        ];
        const THEME_UA_TO_EN = {
            'Універсальні': 'Universal',
            'Кохання та Стосунки': 'Love & Relationships',
            'Кар\'єра та Фінанси': 'Career & Finance',
            'Духовність та Здоров\'я': 'Spirituality & Health',
            'Психологія': 'Psychology',
        };

        const catalogFilters = computed(() => {
            const uk = lang.value === 'uk';
            const list = [
                { kind: 'all', id: 'all', label: uk ? 'Всі' : 'All' },
                { kind: 'size', id: 'quick', label: uk ? 'Швидкі (1–4 карти)' : 'Quick (1–4 cards)' },
                { kind: 'size', id: 'medium', label: uk ? 'Середні (5–7 карт)' : 'Medium (5–7 cards)' },
                { kind: 'size', id: 'deep', label: uk ? 'Глибокі (10–21 карта)' : 'Deep (10–21 cards)' },
                { kind: 'query', id: 'forecast', label: uk ? 'Прогноз на період' : 'Period forecast' },
            ];
            for (const cat of THEME_UA) {
                list.push({
                    kind: 'category',
                    id: cat,
                    label: uk ? cat : (THEME_UA_TO_EN[cat] || cat),
                });
            }
            list.push(
                { kind: 'query', id: 'yesno', label: uk ? 'Так / Ні' : 'Yes / No' },
                { kind: 'query', id: 'choice', label: uk ? 'Вибір з двох' : 'Two options' },
                { kind: 'query', id: 'causes', label: uk ? 'Аналіз причин' : 'Cause analysis' },
            );
            return list;
        });

        const activeFilterKey = computed(() => {
            const f = activeFilter.value;
            return f.kind + ':' + f.id;
        });

        const setCatalogFilter = (item) => {
            activeFilter.value = { kind: item.kind, id: item.id };
        };

        const filteredSpreads = computed(() => {
            const f = activeFilter.value;
            if (f.kind === 'all') return spreads.value;
            if (f.kind === 'size') {
                return spreads.value.filter(s => getSpreadSize(s) === f.id);
            }
            if (f.kind === 'query') {
                return spreads.value.filter(s => (s.query_types || []).includes(f.id));
            }
            if (f.kind === 'category') {
                return spreads.value.filter(s => s.category === f.id);
            }
            return spreads.value;
        });

        // backward-compat aliases (home / other places)
        const categories = catalogFilters;
        const activeCategory = computed(() => {
            const f = activeFilter.value;
            if (f.kind === 'all') return lang.value === 'uk' ? 'Всі' : 'All';
            const match = catalogFilters.value.find(x => x.kind === f.kind && x.id === f.id);
            return match ? match.label : (lang.value === 'uk' ? 'Всі' : 'All');
        });
        const setCategory = (label) => {
            const item = catalogFilters.value.find(x => x.label === label);
            if (item) setCatalogFilter(item);
            else activeFilter.value = { kind: 'all', id: 'all' };
        };


        const quickSpreads = computed(() => {
            return spreads.value.filter(s => s.category === 'Короткі (Швидкі)');
        });

        const readingAnalysis = computed(() => {
            if (!showResults.value || !readingResult.value?.cards?.length || !selectedSpread.value) {
                return { paragraphs: [], stats: null };
            }
            if (typeof TarotAnalysis === 'undefined' || !TarotAnalysis.analyzeReading) {
                return { paragraphs: [], stats: null };
            }
            return TarotAnalysis.analyzeReading(
                readingResult.value.cards,
                selectedSpread.value,
                lang.value
            );
        });


        let isInitialLoad = true;

        const syncHashToState = () => {
            const hash = window.location.hash.slice(1);
            if (!hash) {
                currentView.value = 'home';
                return;
            }
            
            const params = new URLSearchParams(hash);
            const view = params.get('view') || 'home';
            const id = params.get('id');

            if (view === 'spread-detail' || view === 'reading') {
                if (id) {
                    const spread = spreads.value.find(s => s.id == id);
                    if (spread) {
                        selectedSpread.value = spread;
                        // Якщо це перше завантаження сторінки з view=reading —
                        // стан гадання не збережено, тому повертаємось на spread-detail
                        if (view === 'reading' && isInitialLoad) {
                            currentView.value = 'spread-detail';
                            window.location.hash = `view=spread-detail&id=${spread.id}`;
                        } else {
                            currentView.value = view === 'reading' ? 'reading' : 'spread-detail';
                        }
                        return;
                    }
                }
                currentView.value = 'catalog';
            } else if (['catalog', 'privacy', 'terms', 'cards'].includes(view)) {
                currentView.value = view;
            } else {
                currentView.value = 'home';
            }
        };

        const navigateTo = (view, updateHash = true) => {
            currentView.value = view;
            window.scrollTo(0, 0);
            
            if (updateHash) {
                if (view === 'home') {
                    window.location.hash = '';
                } else if (view === 'spread-detail' && selectedSpread.value) {
                    window.location.hash = `view=spread-detail&id=${selectedSpread.value.id}`;
                } else if (view === 'reading' && selectedSpread.value) {
                    window.location.hash = `view=reading&id=${selectedSpread.value.id}`;
                } else {
                    window.location.hash = `view=${view}`;
                }
            }
        };

        const openSpread = (spread) => {
            selectedSpread.value = spread;
            navigateTo('spread-detail');
        };

        const switchLanguage = (newLang) => {
            lang.value = newLang;
            localStorage.setItem('tarot-lang', newLang);
        };

        const startReading = (spread) => {
            selectedSpread.value = spread;
            const question = prompt(t.value.enterQuestionPrompt);
            userQuestion.value = question || t.value.generalPrediction;
            readingStep.value = 'focus';
            showResults.value = false;
            copySuccess.value = false;
            navigateTo('reading');
            
            setTimeout(() => {
                performShuffleAndDeal();
            }, 3000);
        };

        const performShuffleAndDeal = () => {
            let deck = [...cards.value];
            for (let i = deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }

            const selectedCardsArr = deck.slice(0, selectedSpread.value.cards_count).map((card, index) => ({
                ...card,
                revealed: false,
                reversed: Math.random() > 0.7,
                positionIndex: index
            }));

            readingResult.value = { cards: selectedCardsArr };
            readingStep.value = 'reveal';
            showResults.value = false;

            // Reveal cards one by one; after the last card show results
            selectedCardsArr.forEach((_, index) => {
                setTimeout(() => {
                    // Create a new array reference so Vue reliably updates
                    const updated = readingResult.value.cards.map((c, i) =>
                        i === index ? { ...c, revealed: true } : c
                    );
                    readingResult.value = { cards: updated };

                    if (index === selectedCardsArr.length - 1) {
                        // Small delay so the last flip animation finishes
                        setTimeout(() => {
                            showResults.value = true;
                        }, 350);
                    }
                }, index * 300);
            });
        };

        const copyReading = async () => {
            const l = lang.value;
            const spreadTitle = l === 'uk' ? selectedSpread.value.title : selectedSpread.value.title_en;
            const resultText = t.value.resultTitle;
            const questionLabel = t.value.yourQuestion;
            
            const cardLines = readingResult.value.cards.map((c, i) => {
                const posName = l === 'uk' ? (selectedSpread.value.positions[i]?.name || '') : (selectedSpread.value.positions[i]?.name_en || '');
                const cardName = l === 'uk' ? c.name : c.name_en;
                const orientation = c.reversed ? t.value.reversed : t.value.upright;
                return `${i+1}. ${posName}: ${cardName} (${orientation})`;
            }).join('\n');

            let analysisBlock = '';
            const analysis = readingAnalysis.value;
            if (analysis) {
                const parts = [];
                if (analysis.paragraphs && analysis.paragraphs.length) {
                    const title = l === 'uk' ? 'Загальний огляд' : 'General overview';
                    parts.push(title + ':\n' + analysis.paragraphs.map(p => '• ' + p).join('\n'));
                }
                if (analysis.specific && analysis.specific.length) {
                    const title2 = l === 'uk' ? 'Специфіка розкладу' : 'Spread specifics';
                    parts.push(title2 + ':\n' + analysis.specific.map(p => '• ' + p).join('\n'));
                }
                if (parts.length) analysisBlock = '\n\n' + parts.join('\n\n');
            }

            const text = `🔮 ${resultText.toUpperCase()} 🔮\n\n${t.value.navSpreads}: ${spreadTitle}\n${questionLabel}: ${userQuestion.value}\n\n${cardLines}${analysisBlock}`;
            
            try {
                await navigator.clipboard.writeText(text);
            } catch (err) {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }

            copySuccess.value = true;
            setTimeout(() => { copySuccess.value = false; }, 3000);
        };

        const copyAndGoToAI = async () => {
            await copyReading();
            window.open('https://surl.lt/ygtinw', '_blank');
        };

        const startNewReading = () => {
            if (selectedSpread.value) {
                readingStep.value = 'focus';
                showResults.value = false;
                copySuccess.value = false;
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                setTimeout(() => {
                    performShuffleAndDeal();
                }, 3000);
            } else {
                navigateTo('catalog');
            }
        };

        const scrollToSection = (id) => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        };

        // Встановлюємо початковий стан одразу, щоб уникнути блимання
        syncHashToState();
        isInitialLoad = false;

        onMounted(() => {
            window.addEventListener('hashchange', () => {
                syncHashToState();
            });
        });

        const getCardWord = (count, currentLang) => {
            if (currentLang === 'en') {
                return count === 1 ? 'card' : 'cards';
            }
            const mod10 = count % 10;
            const mod100 = count % 100;
            if (mod100 >= 11 && mod100 <= 14) return 'карт';
            if (mod10 === 1) return 'карта';
            if (mod10 >= 2 && mod10 <= 4) return 'карти';
            return 'карт';
        };


        const openCard = (card) => {
            selectedCard.value = card;
            document.body.style.overflow = 'hidden';
            // Focus the modal so keyboard arrows work
            Vue.nextTick(() => {
                const el = document.querySelector('[ref="cardModalRef"], [data-modal="card"]');
                if (el) el.focus();
            });
        };

        const closeCard = () => {
            selectedCard.value = null;
            document.body.style.overflow = '';
        };

        const selectedCardIndex = computed(() => {
            if (!selectedCard.value) return -1;
            return cards.value.findIndex(c => c.id === selectedCard.value.id);
        });

        const prevCard = () => {
            if (!selectedCard.value) return;
            const idx = selectedCardIndex.value;
            const newIdx = idx <= 0 ? cards.value.length - 1 : idx - 1;
            selectedCard.value = cards.value[newIdx];
            // scroll modal content back to top
            Vue.nextTick(() => {
                const panel = document.querySelector('.card-modal-image-wrap')?.closest('.overflow-y-auto');
                if (panel) panel.scrollTop = 0;
            });
        };

        const nextCard = () => {
            if (!selectedCard.value) return;
            const idx = selectedCardIndex.value;
            const newIdx = idx >= cards.value.length - 1 ? 0 : idx + 1;
            selectedCard.value = cards.value[newIdx];
            Vue.nextTick(() => {
                const panel = document.querySelector('.card-modal-image-wrap')?.closest('.overflow-y-auto');
                if (panel) panel.scrollTop = 0;
            });
        };


        return {
            lang, t, currentView, mobileMenuOpen, activeCategory, categories, filteredSpreads, quickSpreads,
            catalogFilters, activeFilter, activeFilterKey, setCatalogFilter,
            selectedSpread, selectedCard, userQuestion, cards,
            readingStep, readingResult, showResults, copySuccess, readingAnalysis,
            navigateTo, openSpread, startReading, switchLanguage, setCategory,
            copyReading, startNewReading, scrollToSection, copyAndGoToAI,
            getCardWord, openCard, closeCard,
            selectedCardIndex, prevCard, nextCard
        };
    }
}).mount('#app');
