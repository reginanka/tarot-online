// Spreads Data - All 28 Spreads (Enriched with detailed bilingual descriptions)
const spreadsData = [
    // 🌟 Універсальні
    { 
        id: 16, slug: 'celtic-cross', 
        title: 'Кельтський хрест', title_en: 'Celtic Cross',
        cards_count: 10, category: 'Універсальні', category_en: 'Universal',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Найстаріший та найвідоміший розклад для всебічного аналізу будь-якої ситуації чи життєвого етапу.', 
        short_description_en: 'The oldest and most famous spread for a comprehensive analysis of any situation or life stage.',
        intro_text: 'Кельтський хрест — це універсальний інструмент, який дозволяє зазирнути в саму суть проблеми. Він розглядає подію в динаміці: від коріння в минулому до ймовірного результату, враховуючи ваші надії, страхи та вплив оточення. Цей розклад дає глибоке розуміння того, що насправді відбувається у вашому житті зараз.',
        intro_text_en: 'The Celtic Cross is a universal tool that allows you to look into the very essence of a problem. It examines events in dynamics: from roots in the past to the likely outcome, considering your hopes, fears, and the influence of the environment. This spread provides a deep understanding of what is truly happening in your life right now.',
        positions: [
            { name: 'Серце ситуації', name_en: 'Heart of the matter', description: 'Суть того, що відбувається', description_en: 'The core of what is happening' },
            { name: 'Перешкода', name_en: 'The Obstacle', description: 'Що заважає розвитку', description_en: 'What hinders development' },
            { name: 'Підсвідомість', name_en: 'The Subconscious', description: 'Глибокі наміри та коріння', description_en: 'Deeper intentions and roots' },
            { name: 'Минуле', name_en: 'The Past', description: 'Події, що призвели до цього', description_en: 'Events leading up to this' },
            { name: 'Свідомість', name_en: 'The Conscious', description: 'Ваші думки та цілі', description_en: 'Your thoughts and goals' },
            { name: 'Найближче майбутнє', name_en: 'Near Future', description: 'Наступний крок ситуації', description_en: 'The next step in the situation' },
            { name: 'Ставлення до себе', name_en: 'Self-Perception', description: 'Ваш внутрішній стан', description_en: 'Your internal state' },
            { name: 'Оточення', name_en: 'Environment', description: 'Вплив зовнішніх факторів', description_en: 'Influence of external factors' },
            { name: 'Надії та страхи', name_en: 'Hopes and Fears', description: 'Що вас турбує або надихає', description_en: 'What worries or inspires you' },
            { name: 'Кінцевий підсумок', name_en: 'The Final Outcome', description: 'Ймовірний розвиток подій', description_en: 'Likely development of events' }
        ]
    },
    { 
        id: 10, slug: 'decision', 
        title: 'Прийняття рішення', title_en: 'Decision Making',
        cards_count: 7, category: 'Універсальні', category_en: 'Universal',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Допомагає зважити два варіанти вибору та побачити наслідки кожного з них.', 
        short_description_en: 'Helps weigh two choice options and see the consequences of each.',
        intro_text: 'Коли ви стоїте на роздоріжжі, цей розклад допомагає вийти за межі емоцій і тверезо оцінити обидва шляхи. Він не приймає рішення за вас, але показує, що чекає на вас при виборі варіанту А або варіанту Б, а також дає загальну пораду для ситуації.',
        intro_text_en: 'When you stand at a crossroads, this spread helps you go beyond emotions and soberly evaluate both paths. It doesn\'t make the decision for you, but it shows what awaits you when choosing option A or option B, and provides general advice for the situation.',
        positions: Array(7).fill(0).map((_, i) => ({ name: `Карта ${i+1}`, name_en: `Card ${i+1}` }))
    },
    { 
        id: 17, slug: 'horseshoe', 
        title: 'Підкова', title_en: 'Horseshoe',
        cards_count: 7, category: 'Універсальні', category_en: 'Universal',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Аналіз розвитку подій, що розкриває приховані фактори та майбутні виклики.', 
        short_description_en: 'Event development analysis that reveals hidden factors and future challenges.',
        intro_text: 'Розклад "Підкова" ідеально підходить для аналізу будь-якої заплутаної ситуації. Сім карт утворюють арку, що веде від минулого через сьогодення до майбутнього, висвітлюючи ваші сильні сторони, труднощі та найкращий шлях до вирішення.',
        intro_text_en: 'The "Horseshoe" spread is perfectly suited for analyzing any confusing situation. Seven cards form an arc leading from the past through the present to the future, highlighting your strengths, difficulties, and the best path to a solution.',
        positions: Array(7).fill(0).map((_, i) => ({ name: `Крок ${i+1}`, name_en: `Step ${i+1}` }))
    },
    { 
        id: 20, slug: 'pentagram', 
        title: 'Пентаграма', title_en: 'Pentagram',
        cards_count: 5, category: 'Універсальні', category_en: 'Universal',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Магічний аналіз ситуації за п\'ятьма стихіями: Воля, Емоції, Розум, Матерія та Дух.', 
        short_description_en: 'Magical situation analysis by five elements: Will, Emotions, Intellect, Matter, and Spirit.',
        intro_text: 'Пентаграма аналізує проблему на різних рівнях буття. Це допомагає зрозуміти, чи перебуваєте ви в гармонії зі стихіями, де саме стався збій — у думках, емоціях чи діях — і як відновити баланс для досягнення цілі.',
        intro_text_en: 'The Pentagram analyzes a problem at different levels of existence. This helps you understand if you are in harmony with the elements, where exactly the failure occurred — in thoughts, emotions, or actions — and how to restore balance to achieve your goal.',
        positions: Array(5).fill(0).map((_, i) => ({ name: `Стихія ${i+1}`, name_en: `Element ${i+1}` }))
    },
    { 
        id: 21, slug: 'simple-cross', 
        title: 'Простий хрест', title_en: 'Simple Cross',
        cards_count: 5, category: 'Універсальні', category_en: 'Universal',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Швидкий та ефективний аналіз основних впливів на будь-яке ваше запитання.', 
        short_description_en: 'Quick and effective analysis of the main influences on any of your questions.',
        intro_text: 'Якщо вам потрібна швидка відповідь без зайвих деталей, "Простий хрест" виділить головне: вашу позицію, перешкоду, основу ситуації та ймовірний результат.',
        intro_text_en: 'If you need a quick answer without unnecessary details, the "Simple Cross" will highlight the essentials: your position, the obstacle, the foundation of the situation, and the likely outcome.',
        positions: Array(5).fill(0).map((_, i) => ({ name: `Вплив ${i+1}`, name_en: `Influence ${i+1}` }))
    },

    // 💖 Кохання та Стосунки
    { 
        id: 26, slug: 'relationships', 
        title: 'Стосунки', title_en: 'Relationships',
        cards_count: 6, category: 'Кохання та Стосунки', category_en: 'Love & Relationships',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Детальний розбір взаємин, почуттів та думок обох партнерів.', 
        short_description_en: 'Detailed breakdown of relationships, feelings, and thoughts of both partners.',
        intro_text: 'Цей розклад дає можливість подивитися на стосунки з обох боків. Ви дізнаєтесь, що кожен із партнерів думає, відчуває та як діє, а також побачите перспективу союзу на найближчий час.',
        intro_text_en: 'This spread provides an opportunity to look at a relationship from both sides. You will find out what each partner thinks, feels, and how they act, as well as see the prospect of the union for the near future.',
        positions: Array(6).fill(0).map((_, i) => ({ name: `Позиція ${i+1}`, name_en: `Position ${i+1}` }))
    },
    { 
        id: 25, slug: 'love-triangle', 
        title: 'Кохання (Любовний трикутник)', title_en: 'Love Triangle',
        cards_count: 3, category: 'Кохання та Стосунки', category_en: 'Love & Relationships',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Аналіз динаміки стосунків між трьома людьми або вибір між двома партнерами.', 
        short_description_en: 'Analysis of relationship dynamics between three people or a choice between two partners.',
        intro_text: 'Складна ситуація в коханні потребує ясності. Три карти висвітлюють приховані мотиви, почуття сторін та допомагають зрозуміти, до чого веде це заплутане коло.',
        intro_text_en: 'A complex situation in love requires clarity. Three cards highlight hidden motives, feelings of the parties, and help you understand where this tangled circle is leading.',
        positions: Array(3).fill(0).map((_, i) => ({ name: `Позиція ${i+1}`, name_en: `Position ${i+1}` }))
    },

    // 💼 Кар'єра та Фінанси
    { 
        id: 1, slug: 'career', 
        title: 'Робота та кар\'єра', title_en: 'Career & Work',
        cards_count: 6, category: 'Кар\'єра та Фінанси', category_en: 'Career & Finance',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Допомагає оцінити професійний шлях, сильні сторони та реальні перспективи розвитку.', 
        short_description_en: 'Helps evaluate your professional path, strengths, and realistic development prospects.',
        intro_text: 'Цей розклад створений для питань про роботу, покликання, зміну сфери або внутрішню незадоволеність професійним шляхом. Шість позицій утворюють карту професійного руху: від того, де ви перебуваєте зараз, до того, що допоможе вийти на наступний рівень.',
        intro_text_en: 'This spread is designed for questions about work, vocation, career changes, or inner dissatisfaction with your professional path. Six positions form a map of professional movement: from where you are now to what will help you reach the next level.',
        positions: [
            { name: 'Поточний стан', name_en: 'Current State', description: 'Що відбувається у вашій роботі зараз', description_en: 'What is happening in your work now' },
            { name: 'Внутрішній ресурс', name_en: 'Inner Resource', description: 'Ваш талант, який варто задіяти', description_en: 'Your talent that should be utilized' },
            { name: 'Перешкода', name_en: 'The Obstacle', description: 'Що стримує розвиток або успіх', description_en: 'What holds back development or success' },
            { name: 'Можливість', name_en: 'Opportunity', description: 'Де відкривається новий шанс', description_en: 'Where a new chance is opening up' },
            { name: 'Порада', name_en: 'Advice', description: 'Який крок буде найдоречнішим', description_en: 'Which step would be most appropriate' },
            { name: 'Перспектива', name_en: 'Perspective', description: 'До чого веде поточний курс', description_en: 'Where the current course leads' }
        ] 
    },
    { 
        id: 2, slug: 'finance', 
        title: 'Фінанси та гроші', title_en: 'Finance & Money',
        cards_count: 6, category: 'Кар\'єра та Фінанси', category_en: 'Career & Finance',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Показує стан фінансів, джерела прибутку, ризики та майбутню фінансову тенденцію.', 
        short_description_en: 'Shows financial status, income sources, risks, and future financial trends.',
        intro_text: 'Розклад допомагає тверезо подивитися на грошову ситуацію. Він висвітлює джерела поповнення бюджету, витіки ресурсів та дає пораду, як покращити матеріальне становище.',
        intro_text_en: 'The spread helps you take a sober look at your financial situation. It highlights budget sources, resource leaks, and provides advice on how to improve your financial position.',
        positions: [
            { name: 'Поточний стан', name_en: 'Current State', description: 'Ваше фінансове становище зараз', description_en: 'Your financial situation now' },
            { name: 'Джерело доходу', name_en: 'Income Source', description: 'Звідки приходять гроші', description_en: 'Where the money comes from' },
            { name: 'Витік ресурсу', name_en: 'Resource Leak', description: 'Куди невиправдано йдуть кошти', description_en: 'Where funds are being spent unnecessarily' },
            { name: 'Ризик', name_en: 'Risk', description: 'Можливі втрати або загрози', description_en: 'Potential losses or threats' },
            { name: 'Порада', name_en: 'Advice', description: 'Як діяти для стабільності', description_en: 'How to act for stability' },
            { name: 'Фінансова перспектива', name_en: 'Financial Perspective', description: 'До чого готуватися в майбутньому', description_en: 'What to prepare for in the future' }
        ]
    },

    // ⚡ Короткі (Швидкі)
    { 
        id: 15, slug: 'three-cards', 
        title: 'Три карти', title_en: 'Three Cards',
        cards_count: 3, category: 'Короткі (Швидкі)', category_en: 'Quick Reads',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Класичний розклад для аналізу ситуації через час: Минуле, Теперішнє, Майбутнє.', 
        short_description_en: 'A classic spread for situational analysis through time: Past, Present, Future.',
        intro_text: 'Найпопулярніший розклад у світі. Три карти дають чітку лінійну картину: що було початком, в якій фазі ви зараз і куди все рухається. Ідеально для швидких відповідей на будь-які запитання.',
        intro_text_en: 'The most popular spread in the world. Three cards provide a clear linear picture: what was the beginning, what phase you are in now, and where everything is going. Ideal for quick answers to any questions.',
        positions: [{ name: 'Минуле', name_en: 'Past' }, { name: 'Теперішнє', name_en: 'Present' }, { name: 'Майбутнє', name_en: 'Future' }] 
    },
    { 
        id: 23, slug: 'yes-no', 
        title: 'Так чи Ні', title_en: 'Yes or No',
        cards_count: 3, category: 'Короткі (Швидкі)', category_en: 'Quick Reads',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Конкретна відповідь на конкретне питання через аналіз сприятливих та заважаючих факторів.', 
        short_description_en: 'A specific answer to a specific question through the analysis of favorable and hindering factors.',
        intro_text: 'Коли вам потрібне чітке "так" або "ні", цей розклад допоможе зважити сили за і проти. Третя карта виступає порадою або вказує на вирішальний фактор.',
        intro_text_en: 'When you need a clear "yes" or "no", this spread helps you weigh the pros and cons. The third card acts as advice or indicates a decisive factor.',
        positions: Array(3).fill(0).map((_, i) => ({ name: `Вплив ${i+1}`, name_en: `Influence ${i+1}` })) 
    },
    { 
        id: 27, slug: 'daily-path', 
        title: 'Щоденний шлях', title_en: 'Daily Path',
        cards_count: 4, category: 'Короткі (Швидкі)', category_en: 'Quick Reads',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Розклад дня, що допомагає сфокусуватися на головному та уникнути помилок.', 
        short_description_en: 'Daily layout helping you focus on the essentials and avoid mistakes.',
        intro_text: 'Цей розклад — ваш особистий навігатор на день. Він показує основну енергію дня, можливі перешкоди та те, де сьогодні варто шукати ресурс.',
        intro_text_en: 'This spread is your personal navigator for the day. It shows the main energy of the day, potential obstacles, and where you should look for resources today.',
        positions: Array(4).fill(0).map((_, i) => ({ name: `Аспект ${i+1}`, name_en: `Aspect ${i+1}` })) 
    },
    { 
        id: 22, slug: 'one-card', 
        title: 'Одна карта', title_en: 'One Card',
        cards_count: 1, category: 'Короткі (Швидкі)', category_en: 'Quick Reads',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Миттєва порада або основна енергія моменту.', 
        short_description_en: 'Instant advice or the core energy of the moment.',
        intro_text: 'Максимально лаконічний розклад. Витягніть одну карту як натхнення на день або пряму відповідь на запитання.',
        intro_text_en: 'The most concise spread possible. Pull one card as inspiration for the day or a direct answer to a question.',
        positions: [{ name: 'Результат', name_en: 'Result' }] 
    },

    // 🔮 Прогнози
    { 
        id: 6, slug: 'week-ahead', 
        title: 'Тиждень попереду', title_en: 'Week Ahead',
        cards_count: 7, category: 'Прогнози', category_en: 'Forecasts',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Прогноз на кожен день тижня, що допомагає планувати справи та відпочинок.', 
        short_description_en: 'Forecast for each day of the week, helping you plan tasks and rest.',
        intro_text: 'Сім карт на сім днів тижня. Дозволяє побачити ритм вашого життя на найближчий тиждень і бути готовим до будь-яких поворотів.',
        intro_text_en: 'Seven cards for the seven days of the week. Allows you to see the rhythm of your life for the coming week and be ready for any turns.',
        positions: Array(7).fill(0).map((_, i) => ({ name: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'][i], name_en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i] })) 
    },
    { 
        id: 7, slug: 'year-ahead', 
        title: 'Рік попереду', title_en: 'Year Ahead',
        cards_count: 12, category: 'Прогнози', category_en: 'Forecasts',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Глобальний прогноз на рік: одна карта на кожен місяць.', 
        short_description_en: 'Global forecast for the year: one card for each month.',
        intro_text: 'Цей розклад дає загальну панораму майбутнього року. Ви зможете побачити ключові акценти кожного місяця та краще розподілити свої сили.',
        intro_text_en: 'This spread provides a general panorama of the year ahead. You can see the key highlights of each month and better distribute your energy.',
        positions: Array(12).fill(0).map((_, i) => ({ name: `Місяць ${i+1}`, name_en: `Month ${i+1}` })) 
    },
    { 
        id: 9, slug: 'birthday', 
        title: 'День народження', title_en: 'Birthday',
        cards_count: 3, category: 'Прогнози', category_en: 'Forecasts',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Особливий розклад для переходу в новий особистий рік: підсумок та перспектива.', 
        short_description_en: 'A special spread for the transition into a new personal year: summary and perspective.',
        intro_text: 'День народження — це точка сили. Цей розклад допоможе відпустити минулий досвід, визначити вашу головну енергію зараз та побачити вектор розвитку на майбутнє.',
        intro_text_en: 'A birthday is a point of power. This spread helps you release past experiences, define your main energy now, and see the vector of development for the future.',
        positions: [{ name: 'Минуле', name_en: 'Past' }, { name: 'Енергія', name_en: 'Energy' }, { name: 'Майбутнє', name_en: 'Future' }] 
    },

    // 🧘 Духовність та Здоров'я
    { 
        id: 5, slug: 'seven-chakras', 
        title: 'Сім чакр', title_en: 'Seven Chakras',
        cards_count: 7, category: 'Духовність та Здоров\'я', category_en: 'Spirituality & Health',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Діагностика енергетичного балансу семи основних центрів людини.', 
        short_description_en: 'Diagnostics of the energetic balance of the seven main human centers.',
        intro_text: 'Розклад для тих, хто займається саморозвитком. Кожна карта відповідає одній із семи чакр, показуючи стан ваших енергетичних потоків та вказуючи на можливі блоки.',
        intro_text_en: 'A spread for those involved in self-development. Each card corresponds to one of the seven chakras, showing the state of your energy flows and indicating potential blocks.',
        positions: [{ name: 'Муладхара', name_en: 'Muladhara' }, { name: 'Свадхістана', name_en: 'Svadhisthana' }, { name: 'Маніпура', name_en: 'Manipura' }, { name: 'Анахата', name_en: 'Anahata' }, { name: 'Вішудха', name_en: 'Vishuddha' }, { name: 'Аджна', name_en: 'Ajna' }, { name: 'Сахасрара', name_en: 'Sahasrara' }] 
    },
    { 
        id: 3, slug: 'spiritual', 
        title: 'Духовний розвиток', title_en: 'Spiritual Growth',
        cards_count: 6, category: 'Духовність та Здоров\'я', category_en: 'Spirituality & Health',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Для глибокого осмислення внутрішнього шляху та пошуку сенсу.', 
        short_description_en: 'For deep consideration of the inner path and finding meaning.',
        intro_text: 'Коли ви шукаєте відповіді на екзистенційні запитання, духовний розклад допоможе зрозуміти ваші уроки та напрямок еволюції вашої душі.',
        intro_text_en: 'When searching for answers to existential questions, a spiritual spread helps you understand your lessons and the direction of your soul\'s evolution.',
        positions: Array(6).fill(0).map((_, i) => ({ name: `Аспект ${i+1}`, name_en: `Aspect ${i+1}` })) 
    },
    { 
        id: 24, slug: 'mind-body-spirit', 
        title: 'Розум-Тіло-Дух', title_en: 'Mind-Body-Spirit',
        cards_count: 3, category: 'Духовність та Здоров\'я', category_en: 'Spirituality & Health',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Аналіз гармонії трьох основних стовпів вашого буття.', 
        short_description_en: 'Analysis of the harmony of the three main pillars of your existence.',
        intro_text: 'Чи перебувають у злагоді ваші думки, фізичний стан та духовні переконання? Три карти висвітлять кожен із цих рівнів та підкажуть, де потрібна увага.',
        intro_text_en: 'Are your thoughts, physical state, and spiritual beliefs in harmony? Three cards will highlight each of these levels and suggest where attention is needed.',
        positions: [{ name: 'Розум', name_en: 'Mind' }, { name: 'Тіло', name_en: 'Body' }, { name: 'Дух', name_en: 'Spirit' }] 
    },
    { 
        id: 13, slug: 'health', 
        title: 'Здоров\'я', title_en: 'Health',
        cards_count: 6, category: 'Духовність та Здоров\'я', category_en: 'Spirituality & Health',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Аналіз фізичного та енергетичного стану вашого організму.', 
        short_description_en: 'Analysis of the physical and energetic state of your body.',
        intro_text: 'Розклад фокусується на вашому загальному самопочутті, вказуючи на причини нездужання та даючи поради щодо відновлення життєвих сил.',
        intro_text_en: 'The spread focuses on your overall well-being, pointing to the causes of illness and providing advice on restoring vitality.',
        positions: Array(6).fill(0).map((_, i) => ({ name: `Аспект ${i+1}`, name_en: `Aspect ${i+1}` })) 
    },

    // 🧠 Психологія
    { 
        id: 11, slug: 'secrets', 
        title: 'Розкриття таємниці', title_en: 'Secrets revealed',
        cards_count: 6, category: 'Психологія', category_en: 'Psychology',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Для пошуку прихованої правди та розуміння того, що замовчується.', 
        short_description_en: 'For finding hidden truth and understanding what is being left unsaid.',
        intro_text: 'Цей розклад використовується, коли ви відчуваєте недомовленість або хочете дізнатися про справжні, але приховані наміри людей у певній ситуації.',
        intro_text_en: 'This spread is used when you feel something is left unsaid or you want to know the true but hidden intentions of people in a certain situation.',
        positions: Array(6).fill(0).map((_, i) => ({ name: `Карта ${i+1}`, name_en: `Card ${i+1}` })) 
    },
    { 
        id: 12, slug: 'detective', 
        title: 'Детектив', title_en: 'Detective',
        cards_count: 6, category: 'Психологія', category_en: 'Psychology',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Психологічне розслідування складної ситуації через аналіз фактів та мотивів.', 
        short_description_en: 'Psychological investigation of a complex situation through the analysis of facts and motives.',
        intro_text: 'Розклад-розслідування, що дозволяє поєднати розрізнені факти в єдину картину та розібрати психологічні підвалини будь-якої заплутаної події.',
        intro_text_en: 'Investigation spread that allows you to combine scattered facts into a single picture and breakdown the psychological underpinnings of any tangled event.',
        positions: Array(6).fill(0).map((_, i) => ({ name: `Факт ${i+1}`, name_en: `Fact ${i+1}` })) 
    },
    { 
        id: 28, slug: 'shadow-work', 
        title: 'Тіньова робота', title_en: 'Shadow Work',
        cards_count: 5, category: 'Психологія', category_en: 'Psychology',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Робота з прихованими реакціями та підсвідомими частинами особистості.', 
        short_description_en: 'Working with hidden reactions and subconscious parts of the personality.',
        intro_text: 'Тіньова робота дозволяє зустрітися зі своїми страхами, запереченнями та прихованими бажаннями. Глибокий інструмент для внутрішньої трансформації.',
        intro_text_en: 'Shadow work allows you to meet your fears, denials, and hidden desires. A deep tool for inner transformation.',
        positions: Array(5).fill(0).map((_, i) => ({ name: `Аспект ${i+1}`, name_en: `Aspect ${i+1}` })) 
    },

    // 📜 Глибокі (Складні)
    { 
        id: 4, slug: 'tree-of-life', 
        title: 'Дерево життя', title_en: 'Tree of Life',
        cards_count: 10, category: 'Глибокі (Складні)', category_en: 'Deep Contexts',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Монументальний езотеричний розклад на 10 позицій за моделлю сефірот.', 
        short_description_en: 'A monumental esoteric spread with 10 positions based on the Sephiroth model.',
        intro_text: 'Масштабний розклад, що описує втілення ідеї в реальність. Через десять сефір ви побачите, як ваш задум проходить через усі рівні буття.',
        intro_text_en: 'A large-scale spread describing the embodiment of an idea into reality. Through the ten Sephiroth, you see how your intent passes through all levels of existence.',
        positions: Array(10).fill(0).map((_, i) => ({ name: `Сефіра ${i+1}`, name_en: `Sephirah ${i+1}` })) 
    },
    { 
        id: 14, slug: 'tetraktys', 
        title: 'Тетрактіс', title_en: 'Tetraktys',
        cards_count: 10, category: 'Глибокі (Складні)', category_en: 'Deep Contexts',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Піфагорійський трикутник, що розкриває ситуацію на чотирьох рівнях космосу.', 
        short_description_en: 'Pythagorean triangle revealing the situation on four levels of the cosmos.',
        intro_text: 'Давньогрецький спосіб пізнання світу через число 10. Розклад розкриває творчий потенціал, емоційний фон, інтелектуальну складову та матеріальний прояв ситуації.',
        intro_text_en: 'An ancient Greek way of knowing the world through the number 10. The spread reveals creative potential, emotional background, intellectual component, and the material manifestation of a situation.',
        positions: Array(10).fill(0).map((_, i) => ({ name: `Рівень ${i+1}`, name_en: `Level ${i+1}` })) 
    },
    { 
        id: 8, slug: 'astro-wheel', 
        title: 'Астрологічне коло', title_en: 'Astrological Circle',
        cards_count: 12, category: 'Глибокі (Складні)', category_en: 'Deep Contexts',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Синергія Таро та астрології: прогноз за 12 астрологічними будинками.', 
        short_description_en: 'Synergy of Tarot and astrology: forecast by the 12 astrological houses.',
        intro_text: 'Один із найповніших прогнозів. 12 карт відповідають 12 сферам життя (сім\'я, кар\'єра, подорожі тощо), даючи цілісний огляд вашої долі на поточний період.',
        intro_text_en: 'One of the most complete forecasts. Twelve cards correspond to twelve spheres of life (family, career, travel, etc.), providing a holistic view of your destiny for the current period.',
        positions: Array(12).fill(0).map((_, i) => ({ name: `Дім ${i+1}`, name_en: `House ${i+1}` })) 
    },
    { 
        id: 18, slug: 'golden-dawn', 
        title: 'Golden Dawn', title_en: 'Golden Dawn',
        cards_count: 15, category: 'Глибокі (Складні)', category_en: 'Deep Contexts',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Складна аналітична система ордена "Золотої Зорі" на 15 карт.', 
        short_description_en: 'Complex analytical system of the Golden Dawn order with 15 cards.',
        intro_text: 'Шедевр західного окультизму. Розклад для досвідчених практикуючих, що дозволяє вивчити розвиток події в найдрібніших деталях та часових рамках.',
        intro_text_en: 'A masterpiece of Western occultism. A spread for experienced practitioners, allowing the study of an event\'s development in the smallest details and timeframes.',
        positions: Array(15).fill(0).map((_, i) => ({ name: `Позиція ${i+1}`, name_en: `Position ${i+1}` })) 
    },
    { 
        id: 19, slug: 'romany', 
        title: 'Romany', title_en: 'Romany',
        cards_count: 21, category: 'Глибокі (Складні)', category_en: 'Deep Contexts',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Великий розклад циганського ворожіння на цілісний життєвий шлях.', 
        short_description_en: 'A great Gypsy fortune-telling spread for a holistic life path.',
        intro_text: 'Легендарний розклад на 21 карту. Три ряди по сім карт описують ваше минуле, теперішнє та майбутнє, створюючи монументальну картину вашої подорожі.',
        intro_text_en: 'The legendary 21-card spread. Three rows of seven cards describe your past, present, and future, creating a monumental picture of your journey.',
        positions: Array(21).fill(0).map((_, i) => ({ name: `Карта ${i+1}`, name_en: `Card ${i+1}` })) 
    }
];

// Local images base directory
const IMG_BASE = './images/cards/';

const tarotCards = [
    {
        id: 'm0',
        name: 'Дурень', name_en: 'The Fool',
        image: IMG_BASE + 'm00.webp',
        type: 'Старший Аркан', type_en: 'Major Arcana',
        meaning_upright: 'Дурень символізує нові починання, віру в життя та спонтанність. Це заклик довіритися Всесвіту і зробити крок у невідоме з відкритим серцем. Карта говорить про невинність, чистоту намірів і відсутність страху перед майбутнім.',
        meaning_upright_en: 'The Fool represents new beginnings, faith in the future, and innocence. It is a call to trust the Universe and take a step into the unknown with an open heart. The card speaks of innocence, purity of intention, and an absence of fear for the future.',
        meaning_reversed: 'Перевернутий Дурень попереджає про безрозсудність, недбалість і ризик прийняти поспішне рішення. Це може означати страх перед змінами або, навпаки, занадто велику наївність, яка веде до помилок.',
        meaning_reversed_en: 'Reversed: Recklessness, risk-taking, and inconsiderateness. It can mean fear of change or, conversely, too much naivety leading to mistakes.',
    },
    {
        id: 'm1',
        name: 'Маг', name_en: 'The Magician',
        image: IMG_BASE + 'm01.webp',
        type: 'Старший Аркан', type_en: 'Major Arcana',
        meaning_short: 'Воля, майстерність, здатність перетворювати ідеї на реальність.',
        meaning_short_en: 'Will, mastery, ability to turn ideas into reality.',
        meaning_upright: 'Маг володіє всіма інструментами (стихіями) для реалізації своїх цілей. Він уособлює концентрацію, силу волі та майстерність. Це знак того, що у вас є все необхідне для успіху, потрібно лише діяти впевнено.',
        meaning_upright_en: 'The Magician symbols power, skill, and focused action. It is a sign that you have everything you need for success, you just need to act confidently.',
        meaning_reversed: 'У перевернутому положенні Маг може вказувати на маніпуляції, приховані наміри або невикористаний потенціал. Також це може быть знак невпевненості у власних силах або затримки в реалізації планів.',
        meaning_reversed_en: 'Reversed: Manipulation, poor planning, untapped talents. It can also signify self-doubt or delays in acting on plans.',
    },
    { id: 'm2', name: 'Жриця', name_en: 'The High Priestess', type_en: 'Major Arcana', image: IMG_BASE + 'm02.webp', meaning_upright: 'Жриця — це голос інтуїції та зв\'язок із прихованим світом. Вона закликає дослухатися до внутрішнього голосу, звернути увагу на сни та знаки.', meaning_upright_en: 'The High Priestess is the voice of intuition. She calls you to listen to your inner voice and pay attention to dreams and signs.', meaning_reversed: 'Перевернута Жриця говорить про поверхневість, ігнорування інтуїції або розкриття секретів.', meaning_reversed_en: 'Reversed: Secrets, disconnected from intuition, withdrawal.' },
    { id: 'm3', name: 'Імператриця', name_en: 'The Empress', type_en: 'Major Arcana', image: IMG_BASE + 'm03.webp', meaning_upright: 'Імператриця — символ процвітання, творчості та турботи. Вона вказує на гармонію з природою, матеріальний добробут та успішний розвиток ідей.', meaning_upright_en: 'The Empress symbols fertility, femininity, beauty, nature, and abundance.', meaning_reversed: 'Може означати творчий застій, надмірну опіку або фінансові труднощі.', meaning_reversed_en: 'Reversed: Creative block, dependence on others.' },
    { id: 'm4', name: 'Імператор', name_en: 'The Emperor', type_en: 'Major Arcana', image: IMG_BASE + 'm04.webp', meaning_upright: 'Імператор уособлює порядок, логіку та стабільність. Він говорить про необхідність структурованого підходу.', meaning_upright_en: 'The Emperor represents order, establishment, structure, and authority.', meaning_reversed: 'Може вказувати на тиранію, жорсткість або повну відсутність порядку.', meaning_reversed_en: 'Reversed: Domination, excessive control, lack of discipline.' },
    { id: 'm5', name: 'Ієрофант', name_en: 'The Hierophant', type_en: 'Major Arcana', image: IMG_BASE + 'm05.webp', meaning_upright: 'Шлях до знань через традиції, віру та навчання. Він символізує духовне наставництво.', meaning_upright_en: 'The Hierophant: Spiritual wisdom, conformity, tradition, institutions.', meaning_reversed: 'Закликає до перегляду застарілих норм або пошуку власного нетрадиційного шляху.', meaning_reversed_en: 'Reversed: Personal beliefs, freedom, challenging the status quo.' },
    { id: 'm6', name: 'Закохані', name_en: 'The Lovers', type_en: 'Major Arcana', image: IMG_BASE + 'm06.webp', meaning_upright: 'Говорить про важливий вибір, заснований на почуттях і цінностях. Символізує гармонійні стосунки.', meaning_upright_en: 'The Lovers symbols love, harmony, relationships, values alignment, choices.', meaning_reversed: 'Вказує на конфлікт цінностей, невірний вибір або дисбаланс у стосунках.', meaning_reversed_en: 'Reversed: Self-love, disharmony, imbalance, misalignment of values.' },
    { id: 'm7', name: 'Колісниця', name_en: 'The Chariot', type_en: 'Major Arcana', image: IMG_BASE + 'm07.webp', meaning_upright: 'Символізує тріумф, отриманий завдяки самовладанню та наполегливості. Це знак того, що ви здатні подолати перешкоди.', meaning_upright_en: 'The Chariot symbols control, will power, victory, assertion, determination.', meaning_reversed: 'Вказує на втрату контролю, агресію або поразку через поспіх.', meaning_reversed_en: 'Reversed: Lack of control, opposition, lack of direction.' },
    { id: 'm8', name: 'Справедливість', name_en: 'Justice', type_en: 'Major Arcana', image: IMG_BASE + 'm08.webp', meaning_upright: 'Говорить про те, що ви отримаєте те, на що заслуговуєте. Карта істини та відповідальності.', meaning_upright_en: 'Justice symbols fairness, truth, cause and effect, law.', meaning_reversed: 'Вказує на несправедливість, упередженість або спроби уникнути відповідальності.', meaning_reversed_en: 'Reversed: Injustice, lack of accountability, dishonesty.' },
    { id: 'm9', name: 'Відлюдник', name_en: 'The Hermit', type_en: 'Major Arcana', image: IMG_BASE + 'm09.webp', meaning_upright: 'Закликає до усамітнення для пошуку істини всередині себе. Час рефлексії та переоцінки цінностей.', meaning_upright_en: 'The Hermit symbols soul-searching, introspection, being alone, inner guidance.', meaning_reversed: 'Може вказувати на болісну самотність, ізоляцію або відмову чути поради.', meaning_reversed_en: 'Reversed: Isolation, loneliness, withdrawal.' },
    { id: 'm10', name: 'Колесо Фортуни', name_en: 'Wheel of Fortune', type_en: 'Major Arcana', image: IMG_BASE + 'm10.webp', meaning_upright: 'Нагадує, що все минає і все змінюється. Це знак удачі та нового циклу.', meaning_upright_en: 'Wheel of Fortune: Good luck, karma, life cycles, destiny, a turning point.', meaning_reversed: 'Може означати період невдач, опір змінам або повернення старих проблем.', meaning_reversed_en: 'Reversed: Bad luck, resistance to change, breaking cycles.' },
    { id: 'm11', name: 'Сила', name_en: 'Strength', type_en: 'Major Arcana', image: IMG_BASE + 'm11.webp', meaning_upright: 'Перемога духу над інстинктами. Говорить про терпіння, співчуття та м\'яке приборкання внутрішнього звіра.', meaning_upright_en: 'Strength: Courage, persuasion, influence, compassion.', meaning_reversed: 'Вказує на брак впевненості, зловживання силою або напади гніву.', meaning_reversed_en: 'Reversed: Inner weakness, self-doubt, lack of self-discipline.' },
    { id: 'm12', name: 'Повішений', name_en: 'The Hanged Man', type_en: 'Major Arcana', image: IMG_BASE + 'm12.webp', meaning_upright: 'Закликає подивитися на ситуацію под іншим кутом. Час духовного прозріння та паузи.', meaning_upright_en: 'The Hanged Man: Pause, surrender, letting go, new perspectives.', meaning_reversed: 'Вказує на даремні жертви, егоїзм або нескінченні зволікання.', meaning_reversed_en: 'Reversed: Delays, resistance, stalling, indecision.' },
    { id: 'm13', name: 'Смерть', name_en: 'Death', type_en: 'Major Arcana', image: IMG_BASE + 'm13.webp', meaning_upright: 'Не фізичний кінець, а завершення етапу. Необхідне очищення для появи чогось нового.', meaning_upright_en: 'Death symbols endings, change, transformation, transition.', meaning_reversed: 'Говорить про страх змін, чіпляння за минуле та застій.', meaning_reversed_en: 'Reversed: Resistance to change, inability to release past.' },
    { id: 'm14', name: 'Помірність', name_en: 'Temperance', type_en: 'Major Arcana', image: IMG_BASE + 'm14.webp', meaning_upright: 'Закликає до пошуку золотої середини. Карта гармонії, спокою та поступового зцілення.', meaning_upright_en: 'Temperance: Balance, moderation, patience, purpose.', meaning_reversed: 'Вказує на дисбаланс, надмірність або конфлікти.', meaning_reversed_en: 'Reversed: Imbalance, excess, self-healing, re-alignment.' },
    { id: 'm15', name: 'Диявол', name_en: 'The Devil', type_en: 'Major Arcana', image: IMG_BASE + 'm15.webp', meaning_upright: 'Символізує те, що нас обмежує: шкідливі звички, токсичні стосунки або страхи.', meaning_upright_en: 'The Devil symbols attachment, addiction, restriction, sexuality.', meaning_reversed: 'Шлях до звільнення. Ви починаєте усвідомлювати свої залежності та шукати вихід.', meaning_reversed_en: 'Reversed: Releasing limiting beliefs, detachment, freedom.' },
    { id: 'm16', name: 'Вежа', name_en: 'The Tower', type_en: 'Major Arcana', image: IMG_BASE + 'm16.webp', meaning_upright: 'Карта раптових і болісних змін, які руйнують те, що було неміцним. Очищення через кризу.', meaning_upright_en: 'The Tower symbols sudden change, upheaval, chaos, revelation.', meaning_reversed: 'Ви намагаєтеся уникнути неминучого краху, або потрясіння буде не таким масштабним.', meaning_reversed_en: 'Reversed: Personal transformation, fear of change, avoiding disaster.' },
    { id: 'm17', name: 'Зірка', name_en: 'The Star', type_en: 'Major Arcana', image: IMG_BASE + 'm17.webp', meaning_upright: 'Символ надії, віри в майбутнє та душевного спокою. Період відновлення та натхнення.', meaning_upright_en: 'The Star symbols hope, faith, purpose, renewal, spirituality.', meaning_reversed: 'Вказує на втрату віри, песимізм або творчу кризу.', meaning_reversed_en: 'Reversed: Lack of faith, despair, self-trust.' },
    { id: 'm18', name: 'Місяць', name_en: 'The Moon', type_en: 'Major Arcana', image: IMG_BASE + 'm18.webp', meaning_upright: 'Уособлює світ снів, підсвідомих страхів та ілюзій. Довіряйте інтуїції.', meaning_upright_en: 'The Moon symbols illusion, fear, anxiety, subconscious, intuition.', meaning_reversed: 'Означає прояснення ситуації, подолання страхів та викриття брехні.', meaning_reversed_en: 'Reversed: Release of fear, repressed emotion, inner confusion.' },
    { id: 'm19', name: 'Сонце', name_en: 'The Sun', type_en: 'Major Arcana', image: IMG_BASE + 'm19.webp', meaning_upright: 'Обіцяє тріумф, щастя, здоров\'я та повну ясність. Час, коли все виходить.', meaning_upright_en: 'The Sun symbols positivity, fun, warmth, success, vitality.', meaning_reversed: 'Сонце залишається позитивним, хоча світло може быть дещо приглушеним.', meaning_reversed_en: 'Reversed: Inner child, feeling down, overly optimistic.' },
    { id: 'm20', name: 'Суд', name_en: 'Judgement', type_en: 'Major Arcana', image: IMG_BASE + 'm20.webp', meaning_upright: 'Момент істини, коли ви оцінюєте минуле. Карта духовного пробудження та прощення.', meaning_upright_en: 'Judgement symbols judgement, rebirth, inner calling, absolution.', meaning_reversed: 'Говорить про страх осуду, ігнорування внутрішнього клику або нездатність відпустити минуле.', meaning_reversed_en: 'Reversed: Self-doubt, inner critic, ignoring the call.' },
    { id: 'm21', name: 'Світ', name_en: 'The World', type_en: 'Major Arcana', image: IMG_BASE + 'm21.webp', meaning_upright: 'Карта завершеності та тріумфу. Ви досягли мети і відчуваєте гармонію.', meaning_upright_en: 'The World symbols completion, integration, accomplishment, travel.', meaning_reversed: 'Означає незавершеність, затримки або відсутність почуття задоволення.', meaning_reversed_en: 'Reversed: Seeking closure, short-cuts, delays.' }
];

const suitsData = [
    { id: 'w', name: 'Жезли', name_en: 'Wands', key: 'w', element: 'Вогонь', element_en: 'Fire' },
    { id: 'c', name: 'Кубки', name_en: 'Cups', key: 'c', element: 'Вода', element_en: 'Water' },
    { id: 's', name: 'Мечі', name_en: 'Swords', key: 's', element: 'Повітря', element_en: 'Air' },
    { id: 'p', name: 'Пентаклі', name_en: 'Pentacles', key: 'p', element: 'Земля', element_en: 'Earth' }
];

const ranksUa = ['Туз', 'Двійка', 'Трійка', 'Четвірка', 'П\'ятірка', 'Шістка', 'Сімка', 'Вісімка', 'Дев\'ятка', 'Десятка', 'Паж', 'Лицар', 'Королева', 'Король'];
const ranksEn = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'];

const suitThemes = {
    'Жезли': { 
        upright: 'це карта натхнення, ініціативи та життєвої сили.', 
        upright_en: 'is a card of inspiration, initiative, and vitality.',
        reversed: 'це показник того, що енергія розпорошується.', 
        reversed_en: 'indicates that energy is being scattered.',
        general: 'Масть Жезлів відповідає стихії Вогню.',
        general_en: 'The suit of Wands corresponds to the element of Fire.'
    },
    'Кубки': { 
        upright: 'це карта емоційного наповнення, любові та інтуїтивних прозрінь.', 
        upright_en: 'is a card of emotional fulfillment, love, and intuitive insights.',
        reversed: 'це знак емоційного дисбалансу або розчарування.', 
        reversed_en: 'is a sign of emotional imbalance or disappointment.',
        general: 'Масть Кубків відповідає стихії Води.',
        general_en: 'The suit of Cups corresponds to the element of Water.'
    },
    'Мечі': { 
        upright: 'це карта ясного розуму, стратегії та іноді — конфлікту.', 
        upright_en: 'is a card of a clear mind, strategy, and sometimes – conflict.',
        reversed: 'це знак заплутаності, інтелектуального тупика.', 
        reversed_en: 'is a sign of confusion or an intellectual dead end.',
        general: 'Масть Мечів відповідає стихії Повітря.',
        general_en: 'The suit of Swords corresponds to the element of Air.'
    },
    'Пентаклі': { 
        upright: 'це карта матеріальної стабільності, праці та реальних результатів.', 
        upright_en: 'is a card of material stability, work, and real results.',
        reversed: 'це знак фінансових труднощів, невпевненості.', 
        reversed_en: 'is a sign of financial difficulties or insecurity.',
        general: 'Масть Пентаклів відповідає стихії Землі.',
        general_en: 'The suit of Pentacles corresponds to the element of Earth.'
    }
};

function generateMinorArcana() {
    const minor = [];
    suitsData.forEach(suit => {
        const theme = suitThemes[suit.name];
        ranksUa.forEach((rank, i) => {
            const num = (i + 1).toString().padStart(2, '0');
            const rankEn = ranksEn[i];
            minor.push({
                id: `${suit.id}${i + 1}`,
                name: `${rank} ${suit.name}`,
                name_en: `${rankEn} of ${suit.name_en}`,
                image: IMG_BASE + `${suit.key}${num}.webp`,
                type: 'Молодший Аркан',
                type_en: 'Minor Arcana',
                suit: suit.name,
                suit_en: suit.name_en,
                meaning_upright: `${rank} ${suit.name} — ${theme.upright}`,
                meaning_upright_en: `${rankEn} of ${suit.name_en} — ${theme.upright_en}`,
                meaning_reversed: `Перевернутий ${rank} ${suit.name} — ${theme.reversed}`,
                meaning_reversed_en: `Reversed ${rankEn} of ${suit.name_en} — ${theme.reversed_en}`,
                keywords: [suit.name, rank, suit.element]
            });
        });
    });
    return minor;
}

const allTarotCards = [...tarotCards, ...generateMinorArcana()];

const uiTranslations = {
    uk: {
        navHome: 'Головна',
        navSpreads: 'Розклади',
        heroTitle: 'Онлайн Таро',
        heroDesc: 'Зрозумій минуле, усвідом теперішнє та зазирни в майбутнє.',
        heroBadge1: '28 перевірених методик гадання',
        heroBadge2: 'Знайди свій шлях прямо зараз',
        btnSelectSpread: 'Обрати розклад',
        btnHowItWorks: 'Як це працює',
        popularTitle: 'Популярні короткі розклади',
        popularDesc: 'Оберіть швидкий розклад, щоб отримати миттєву відповідь на ваше питання.',
        tryIt: 'Спробувати',
        howItWorksTitle: 'Як це працює',
        step1Title: 'Оберіть розклад',
        step1Desc: 'Виберіть підходящу методику гадання з нашого каталогу',
        step2Title: 'Задайте питання',
        step2Desc: 'Впишіть свій запит у вікно для максимальної зосередженості',
        step3Title: 'Отримайте відповідь',
        step3Desc: 'Карти відкриються автоматично з детальним тлумаченням',
        catalogTitle: 'Каталог Розкладів',
        all: 'Всі',
        start: 'Почати',
        backToCatalog: 'Назад до каталогу',
        aboutSpread: 'Про розклад',
        cardPositions: 'Позиції карт',
        details: 'Деталі',
        cardCount: 'Кількість карт',
        difficulty: 'Складність',
        startReading: 'Розпочати гадання',
        focusTitle: 'Зосередьтесь на питанні',
        focusDesc: 'Подумайте про своє запитання, поки карти тасуються...',
        shuffling: 'Тасування колоди...',
        yourQuestion: 'Ваш запит',
        generalPrediction: 'Загальний прогноз',
        upright: 'пряма',
        reversed: 'перевернута',
        resultTitle: 'Результат розкладу',
        meaningInSpread: 'Значення у розкладі',
        copyResult: 'Копіювати результат',
        newReading: 'Новий розклад',
        copySuccess: 'Результат скопійовано!',
        footerDesc: 'Сучасний сервіс онлайн-гадання на картах Таро для глибокого самопізнання.',
        footerNav: 'Навігація',
        footerInfo: 'Інформація',
        privacy: 'Політика конфіденційності',
        terms: 'Умови користування',
        footerConnect: 'Зв\'язок',
        developedBy: 'Розробка:',
        rights: 'Всі права захищені',
        enterQuestionPrompt: 'Введіть ваше запитання або тему (необов\'язково):',
        askAI: 'Тлумачення від ШІ (Лея)',
        privacyTitle: 'Політика конфіденційності',
        privacyContent: [
            'Ваша конфіденційність важлива для нас. Цей сервіс створений для приватного використання.',
            'Ми не збираємо та не зберігаємо ваші запитання або результати гадання на наших серверах. Усі дані обробляються виключно у вашому браузері.',
            'Ми використовуємо локальне сховище (localStorage) лише для збереження ваших налаштувань мови.',
            'Ми не передаємо жодну інформацію третім сторонам.'
        ],
        termsTitle: 'Умови користування',
        termsContent: [
            'Використовуючи цей сайт, ви погоджуєтесь з наступними умовами:',
            'Цей сервіс призначений виключно для розважальних цілей. Карти Таро надають символічну інформацію для роздумів, а не прямі керівництва до дії.',
            'Результати гадання не повинні сприйматися як професійна медична, юридична або фінансова консультація.',
            'Адміністрація сайту не несе відповідальності за рішення, прийняті на основі отриманих результатів.',
            'Користування сервісом дозволено особам, які досягли 18 років.'
        ],
        navCards: 'Карти Таро',
        cardsPageTitle: 'Карти Таро',
        cardsPageDesc: 'Всі 78 карт з зображеннями, назвами та значеннями.'
    },
    en: {
        navHome: 'Home',
        navSpreads: 'Spreads',
        heroTitle: 'Online Tarot',
        heroDesc: 'Understand the past, embrace the present, and gaze into the future.',
        heroBadge1: '28 professional reading layouts',
        heroBadge2: 'Find your path right now',
        btnSelectSpread: 'Choose Spread',
        btnHowItWorks: 'How It Works',
        popularTitle: 'Popular Short Spreads',
        popularDesc: 'Choose a quick spread to get an instant answer to your question.',
        tryIt: 'Try Now',
        howItWorksTitle: 'How It Works',
        step1Title: 'Select Spread',
        step1Desc: 'Choose a suitable reading method from our catalog',
        step2Title: 'Ask Your Question',
        step2Desc: 'Enter your request in the field for maximum focus',
        step3Title: 'Get Your Answer',
        step3Desc: 'Cards will reveal automatically with a detailed reading',
        catalogTitle: 'Spread Catalog',
        all: 'All',
        start: 'Start',
        backToCatalog: 'Back to Catalog',
        aboutSpread: 'About Spread',
        cardPositions: 'Card Positions',
        details: 'Details',
        cardCount: 'Card Count',
        difficulty: 'Difficulty',
        startReading: 'Start Reading',
        focusTitle: 'Focus on your question',
        focusDesc: 'Think about your question while the cards are shuffling...',
        shuffling: 'Shuffling the deck...',
        yourQuestion: 'Your question',
        generalPrediction: 'General prediction',
        upright: 'upright',
        reversed: 'reversed',
        resultTitle: 'Spread Result',
        meaningInSpread: 'Meaning in spread',
        copyResult: 'Copy Result',
        newReading: 'New Reading',
        copySuccess: 'Result copied!',
        footerDesc: 'Modern online Tarot reading service for deep self-discovery.',
        footerNav: 'Navigation',
        footerInfo: 'Information',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        footerConnect: 'Connect',
        developedBy: 'Developed by:',
        rights: 'All rights reserved',
        enterQuestionPrompt: 'Enter your question or topic (optional):',
        askAI: 'Ask AI (Leia Interpretation)',
        privacyTitle: 'Privacy Policy',
        privacyContent: [
            'Your privacy is important to us. This service is designed for private use.',
            'We do not collect or store your questions or reading results on our servers. All data is processed exclusively in your browser.',
            'We use local storage (localStorage) only to save your language preferences.',
            'We do not share any information with third parties.'
        ],
        termsTitle: 'Terms of Use',
        termsContent: [
            'By using this site, you agree to the following terms:',
            'This service is for entertainment purposes only. Tarot cards provide symbolic information for reflection, not direct instructions for action.',
            'Reading results should not be taken as professional medical, legal, or financial advice.',
            'The site administration is not responsible for decisions made based on the results obtained.',
            'Use of the service is permitted for persons who have reached the age of 18.'
        ],
        navCards: 'Tarot Cards',
        cardsPageTitle: 'Tarot Cards',
        cardsPageDesc: 'All 78 cards with images, names and meanings.'
    }
};
