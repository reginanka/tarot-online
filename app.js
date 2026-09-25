const { createApp, ref, computed, onMounted } = Vue;

createApp({
    setup() {
        const lang = ref(localStorage.getItem('tarot-lang') || (navigator.language.startsWith('uk') ? 'uk' : 'en'));
        const t = computed(() => uiTranslations[lang.value]);

        const currentView = ref('home');
        const mobileMenuOpen = ref(false);
        const activeCategoryUa = ref('Всі');
        const activeSize = ref('all');      // all | quick | medium | deep
        const activeQueryType = ref('all'); // all | yesno | choice | causes | forecast
        const selectedSpread = ref(null);
        const selectedCard = ref(null);
        const userQuestion = ref('');
        
        const readingStep = ref('focus');
        const readingResult = ref({ cards: [] });
        const showResults = ref(false);
        const copySuccess = ref(false);

        // Accessing constants from data.js
        const spreads = ref(spreadsData);
        const cards = ref(allTarotCards);
        
        // Single source of truth for category name mapping
        const CATEGORY_UA_KEYS = ['Всі', 'Універсальні', 'Кохання та Стосунки', 'Кар\'єра та Фінанси', 'Короткі (Швидкі)', 'Прогнози', 'Духовність та Здоров\'я', 'Психологія', 'Глибокі (Складні)'];
        const CATEGORY_UA_TO_EN = {
            'Всі': 'All',
            'Універсальні': 'Universal',
            'Кохання та Стосунки': 'Love & Relationships',
            'Кар\'єра та Фінанси': 'Career & Finance',
            'Короткі (Швидкі)': 'Quick Reads',
            'Прогнози': 'Forecasts',
            'Духовність та Здоров\'я': 'Spirituality & Health',
            'Психологія': 'Psychology',
            'Глибокі (Складні)': 'Deep Spreads'
        };
        const CATEGORY_EN_TO_UA = Object.fromEntries(
            Object.entries(CATEGORY_UA_TO_EN).map(([ua, en]) => [en, ua])
        );

        const categories = computed(() => {
            if (lang.value === 'uk') return CATEGORY_UA_KEYS;
            return CATEGORY_UA_KEYS.map(c => CATEGORY_UA_TO_EN[c] || c);
        });

        const activeCategory = computed(() => {
            if (lang.value === 'uk') return activeCategoryUa.value;
            return CATEGORY_UA_TO_EN[activeCategoryUa.value] || activeCategoryUa.value;
        });

        const setCategory = (cat) => {
            activeCategoryUa.value = lang.value === 'en'
                ? (CATEGORY_EN_TO_UA[cat] || 'Всі')
                : cat;
        };

        const getSpreadSize = (s) => {
            const n = s.cards_count || 0;
            if (n <= 4) return 'quick';
            if (n <= 7) return 'medium';
            return 'deep'; // 8+ (10–21 grand spreads)
        };

        const filteredSpreads = computed(() => {
            return spreads.value.filter(s => {
                const byCat = activeCategoryUa.value === 'Всі' || s.category === activeCategoryUa.value;
                const bySize = activeSize.value === 'all' || getSpreadSize(s) === activeSize.value;
                const types = s.query_types || [];
                const byQuery = activeQueryType.value === 'all' || types.includes(activeQueryType.value);
                return byCat && bySize && byQuery;
            });
        });

        const sizeFilters = computed(() => {
            if (lang.value === 'uk') {
                return [
                    { id: 'all', label: t.value.filterAll },
                    { id: 'quick', label: t.value.sizeQuick, hint: t.value.sizeQuickHint },
                    { id: 'medium', label: t.value.sizeMedium, hint: t.value.sizeMediumHint },
                    { id: 'deep', label: t.value.sizeDeep, hint: t.value.sizeDeepHint },
                ];
            }
            return [
                { id: 'all', label: t.value.filterAll },
                { id: 'quick', label: t.value.sizeQuick, hint: t.value.sizeQuickHint },
                { id: 'medium', label: t.value.sizeMedium, hint: t.value.sizeMediumHint },
                { id: 'deep', label: t.value.sizeDeep, hint: t.value.sizeDeepHint },
            ];
        });

        const queryFilters = computed(() => [
            { id: 'all', label: t.value.filterAll },
            { id: 'yesno', label: t.value.queryYesNo },
            { id: 'choice', label: t.value.queryChoice },
            { id: 'causes', label: t.value.queryCauses },
            { id: 'forecast', label: t.value.queryForecast },
        ]);

        const setSizeFilter = (id) => { activeSize.value = id; };
        const setQueryFilter = (id) => { activeQueryType.value = id; };
        const resetExtraFilters = () => {
            activeSize.value = 'all';
            activeQueryType.value = 'all';
        };

        const quickSpreads = computed(() => {
            return spreads.value.filter(s => s.category === 'Короткі (Швидкі)');
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

            const text = `🔮 ${resultText.toUpperCase()} 🔮\n\n${t.value.navSpreads}: ${spreadTitle}\n${questionLabel}: ${userQuestion.value}\n\n${cardLines}`;
            
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
            activeSize, activeQueryType, sizeFilters, queryFilters, setSizeFilter, setQueryFilter, resetExtraFilters,
            selectedSpread, selectedCard, userQuestion, cards,
            readingStep, readingResult, showResults, copySuccess,
            navigateTo, openSpread, startReading, switchLanguage, setCategory,
            copyReading, startNewReading, scrollToSection, copyAndGoToAI,
            getCardWord, openCard, closeCard,
            selectedCardIndex, prevCard, nextCard
        };
    }
}).mount('#app');
