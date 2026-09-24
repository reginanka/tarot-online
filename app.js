// ============================================================
// 🔮 HuggingFace Transformers — lazy ES-module import via CDN
// ============================================================
let _pipelineImport = null;
async function getPipelineFn() {
    if (!_pipelineImport) {
        const mod = await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3/dist/transformers.min.js');
        _pipelineImport = mod.pipeline;
    }
    return _pipelineImport;
}

// ============================================================
// 🌐 AI Localization
// ============================================================
const aiLocalization = {
    uk: {
        systemPrompt: "Ти — таємнича, мудра та досвідчена ворожка Таро. Твоє завдання — взяти текстовий результат розкладу, який надав користувач, проаналізувати його та написати глибоке, художнє, містичне передбачення українською мовою. Звертайся до користувача на 'ти'. Текст має бути суцільним, плавним і поетичним (не повторюй карти списком 1, 2, 3, а сплітай їх у єдину історію). Наприкінці дай короткою строкою філософську пораду.",
        loadingModel: "🔮 ШІ налаштовується на ваше інформаційне поле... Завантаження: ",
        generating: "✨ Розшифровую знаки долі та читаю карти...",
        buttonText: "🔮 Локальне ШІ-ворожіння",
        resultHeader: "🌟 Пророцтво локального ШІ",
        errorText: "⚠️ Помилка завантаження моделі. Перевірте з'єднання та спробуйте ще раз."
    },
    en: {
        systemPrompt: "You are a mysterious, wise, and experienced Tarot reader. Your task is to take the textual tarot reading result provided by the user, analyze it, and write a deep, artistic, mystical prediction in English. Address the user as 'you'. The text should be continuous, smooth, and poetic (do not list cards as 1, 2, 3, but weave them into a single story). At the end, provide a brief philosophical advice.",
        loadingModel: "🔮 AI is tuning into your information field... Downloading: ",
        generating: "✨ Deciphering the signs of fate and reading the cards...",
        buttonText: "🔮 Local AI Interpretation",
        resultHeader: "🌟 Local AI Prophecy",
        errorText: "⚠️ Model loading failed. Please check your connection and try again."
    }
};

// ============================================================
// Pipeline cache — singleton outside Vue to survive re-renders
// ============================================================
let cachedPipeline = null;

const { createApp, ref, computed, onMounted } = Vue;

createApp({
    setup() {
        const lang = ref(localStorage.getItem('tarot-lang') || (navigator.language.startsWith('uk') ? 'uk' : 'en'));
        const t = computed(() => uiTranslations[lang.value]);

        // ── AI reactive state ──────────────────────────────────
        const aiLoading       = ref(false);  // model is downloading
        const aiProgress      = ref(0);      // 0–100 %
        const aiGenerating    = ref(false);  // inference running
        const aiReadingResult = ref('');     // text shown by typewriter
        const aiError         = ref(false);  // error flag

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

        const filteredSpreads = computed(() => {
            if (activeCategoryUa.value === 'Всі') return spreads.value;
            return spreads.value.filter(s => s.category === activeCategoryUa.value);
        });

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
                // reset AI state
                aiReadingResult.value = '';
                aiError.value = false;
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


        // ============================================================
        // 🔮 AI METHODS
        // ============================================================

        /** Build the same reading-text that copyReading() produces */
        const buildReadingText = () => {
            const l = lang.value;
            const spreadTitle = l === 'uk' ? selectedSpread.value.title : selectedSpread.value.title_en;
            const resultText  = t.value.resultTitle;
            const questionLabel = t.value.yourQuestion;

            const cardLines = readingResult.value.cards.map((c, i) => {
                const posName  = l === 'uk'
                    ? (selectedSpread.value.positions[i]?.name    || '')
                    : (selectedSpread.value.positions[i]?.name_en || '');
                const cardName = l === 'uk' ? c.name : c.name_en;
                const orient   = c.reversed ? t.value.reversed : t.value.upright;
                return `${i + 1}. ${posName}: ${cardName} (${orient})`;
            }).join('\n');

            return `🔮 ${resultText.toUpperCase()} 🔮\n\n${t.value.navSpreads}: ${spreadTitle}\n${questionLabel}: ${userQuestion.value}\n\n${cardLines}`;
        };

        /** Animate text display one char at a time */
        const typewriterEffect = (fullText) => {
            aiReadingResult.value = '';
            let i = 0;
            const interval = setInterval(() => {
                if (i < fullText.length) {
                    // Add 1–2 chars per tick for a natural feel
                    aiReadingResult.value += fullText.slice(i, i + 2);
                    i += 2;
                } else {
                    clearInterval(interval);
                }
            }, 25);
        };

        /** Main entry-point called by the UI button */
        const runLocalAI = async () => {
            if (aiLoading.value || aiGenerating.value) return;

            const loc = aiLocalization[lang.value] || aiLocalization.uk;
            aiError.value      = false;
            aiReadingResult.value = '';

            try {
                // ── 1. Load / reuse pipeline ────────────────────────
                if (!cachedPipeline) {
                    aiLoading.value  = true;
                    aiProgress.value = 0;

                    const pipelineFn = await getPipelineFn();

                    cachedPipeline = await pipelineFn(
                        'text-generation',
                        'onnx-community/Qwen2.5-0.5B-Instruct',
                        {
                            progress_callback: (progress) => {
                                if (progress.total && progress.loaded) {
                                    aiProgress.value = Math.round((progress.loaded / progress.total) * 100);
                                }
                            }
                        }
                    );
                    aiLoading.value  = false;
                    aiProgress.value = 100;
                }

                // ── 2. Build prompt ─────────────────────────────────
                aiGenerating.value = true;
                const readingText  = buildReadingText();
                const messages = [
                    { role: 'system',  content: loc.systemPrompt },
                    { role: 'user',    content: readingText }
                ];

                // ── 3. Run inference ────────────────────────────────
                const output = await cachedPipeline(messages, {
                    max_new_tokens: 250,
                    temperature: 0.7,
                    do_sample: true
                });

                // ── 4. Extract assistant reply ──────────────────────
                const generated = output?.[0]?.generated_text;
                let assistantText = '';
                if (Array.isArray(generated)) {
                    // Chat format: array of message objects
                    const last = generated[generated.length - 1];
                    assistantText = last?.content || last?.text || JSON.stringify(last);
                } else if (typeof generated === 'string') {
                    assistantText = generated;
                }

                aiGenerating.value = false;

                // ── 5. Typewriter display ───────────────────────────
                typewriterEffect(assistantText.trim());

            } catch (err) {
                console.error('[LocalAI] Error:', err);
                aiLoading.value    = false;
                aiGenerating.value = false;
                aiError.value      = true;
                cachedPipeline     = null; // reset so user can retry
            }
        };


        return {
            lang, t, currentView, mobileMenuOpen, activeCategory, categories, filteredSpreads, quickSpreads,
            selectedSpread, selectedCard, userQuestion, cards,
            readingStep, readingResult, showResults, copySuccess,
            navigateTo, openSpread, startReading, switchLanguage, setCategory,
            copyReading, startNewReading, scrollToSection, copyAndGoToAI,
            getCardWord, openCard, closeCard,
            selectedCardIndex, prevCard, nextCard,
            // AI
            aiLoading, aiProgress, aiGenerating, aiReadingResult, aiError,
            aiLocalization, runLocalAI
        };
    }
}).mount('#app');
