const { createApp, ref, computed, onMounted } = Vue;

createApp({
    setup() {
        const lang = ref(localStorage.getItem('tarot-lang') || (navigator.language.startsWith('uk') ? 'uk' : 'en'));
        const t = computed(() => uiTranslations[lang.value]);

        const currentView = ref('home');
        const mobileMenuOpen = ref(false);
        const activeCategoryUa = ref('Всі');
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
        
        const categories = computed(() => {
            const cats = ['Всі', 'Універсальні', 'Кохання та Стосунки', 'Кар\'єра та Фінанси', 'Короткі (Швидкі)', 'Прогнози', 'Духовність та Здоров\'я', 'Психологія', 'Глибокі (Складні)'];
            if (lang.value === 'uk') return cats;
            const enMapping = {
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
            return cats.map(c => enMapping[c] || c);
        });

        const activeCategory = computed(() => {
            if (lang.value === 'uk') return activeCategoryUa.value;
            const enMapping = {
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
            return enMapping[activeCategoryUa.value] || activeCategoryUa.value;
        });

        const setCategory = (cat) => {
            if (lang.value === 'en') {
                const uaMapping = {
                    'All': 'Всі',
                    'Universal': 'Універсальні',
                    'Love & Relationships': 'Кохання та Стосунки',
                    'Career & Finance': 'Кар\'єра та Фінанси',
                    'Quick Reads': 'Короткі (Швидкі)',
                    'Forecasts': 'Прогнози',
                    'Spirituality & Health': 'Духовність та Здоров\'я',
                    'Psychology': 'Психологія',
                    'Deep Spreads': 'Глибокі (Складні)'
                };
                activeCategoryUa.value = uaMapping[cat] || 'Всі';
            } else {
                activeCategoryUa.value = cat;
            }
        };

        const filteredSpreads = computed(() => {
            if (activeCategoryUa.value === 'Всі') return spreads.value;
            return spreads.value.filter(s => s.category === activeCategoryUa.value);
        });

        const quickSpreads = computed(() => {
            return spreads.value.filter(s => s.category === 'Короткі (Швидкі)');
        });

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
                        currentView.value = view === 'reading' ? 'reading' : 'spread-detail';
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
            
            selectedCardsArr.forEach((card, index) => {
                setTimeout(() => {
                    if (readingResult.value.cards[index]) {
                        readingResult.value.cards[index].revealed = true;
                    }
                    if (index === selectedCardsArr.length - 1) {
                        showResults.value = true;
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
                copySuccess.value = true;
                setTimeout(() => { copySuccess.value = false; }, 3000);
            } catch (err) {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                copySuccess.value = true;
                setTimeout(() => { copySuccess.value = false; }, 3000);
            }
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

        return {
            lang, t, currentView, mobileMenuOpen, activeCategory, categories, filteredSpreads, quickSpreads,
            selectedSpread, selectedCard, userQuestion, cards,
            readingStep, readingResult, showResults, copySuccess,
            navigateTo, openSpread, startReading, switchLanguage, setCategory,
            copyReading, startNewReading, scrollToSection, copyAndGoToAI,
            getCardWord
        };
    }
}).mount('#app');
