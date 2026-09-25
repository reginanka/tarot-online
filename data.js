/**
 * data.js — spreads + UI translations only.
 * Card data lives in cards.js (single source of truth).
 */

const spreadsData = [
    // 🌟 Універсальні
    { 
        id: 16, slug: 'celtic-cross', 
        title: 'Кельтський хрест', title_en: 'Celtic Cross',
        cards_count: 10,
        query_types: [], category: 'Універсальні', category_en: 'Universal',
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
        cards_count: 7,
        query_types: ['choice'], category: 'Універсальні', category_en: 'Universal',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Допомагає зважити два варіанти вибору та побачити наслідки кожного з них.', 
        short_description_en: 'Helps weigh two choice options and see the consequences of each.',
        intro_text: 'Коли ви стоїте на роздоріжжі, цей розклад допомагає вийти за межі емоцій і тверезо оцінити обидва шляхи. Він не приймає рішення за вас, але показує, що чекає на вас при виборі варіанту А або варіанту Б, а також дає загальну пораду для ситуації.',
        intro_text_en: 'When you stand at a crossroads, this spread helps you go beyond emotions and soberly evaluate both paths. It doesn\'t make the decision for you, but it shows what awaits you when choosing option A or option B, and provides general advice for the situation.',
        positions: [
            { name: 'Ситуація', name_en: 'The Situation', description: 'Суть вибору, перед яким ви стоїте', description_en: 'The essence of the choice you face' },
            { name: 'Варіант А', name_en: 'Option A', description: 'Перший шлях і його характер', description_en: 'The first path and its nature' },
            { name: 'Наслідки А', name_en: 'Outcome of A', description: 'До чого веде варіант А', description_en: 'Where option A leads' },
            { name: 'Варіант Б', name_en: 'Option B', description: 'Другий шлях і його характер', description_en: 'The second path and its nature' },
            { name: 'Наслідки Б', name_en: 'Outcome of B', description: 'До чого веде варіант Б', description_en: 'Where option B leads' },
            { name: 'Порада', name_en: 'Advice', description: 'Що варто врахувати при виборі', description_en: 'What to consider when choosing' },
            { name: 'Ймовірний результат', name_en: 'Likely Result', description: 'Загальний підсумок рішення', description_en: 'Overall outcome of the decision' }
        ]
    },
    { 
        id: 17, slug: 'horseshoe', 
        title: 'Підкова', title_en: 'Horseshoe',
        cards_count: 7,
        query_types: [], category: 'Універсальні', category_en: 'Universal',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Аналіз розвитку подій, що розкриває приховані фактори та майбутні виклики.', 
        short_description_en: 'Event development analysis that reveals hidden factors and future challenges.',
        intro_text: 'Розклад "Підкова" ідеально підходить для аналізу будь-якої заплутаної ситуації. Сім карт утворюють арку, що веде від минулого через сьогодення до майбутнього, висвітлюючи ваші сильні сторони, труднощі та найкращий шлях до вирішення.',
        intro_text_en: 'The "Horseshoe" spread is perfectly suited for analyzing any confusing situation. Seven cards form an arc leading from the past through the present to the future, highlighting your strengths, difficulties, and the best path to a solution.',
        positions: [
            { name: 'Минуле', name_en: 'The Past', description: 'Події, що вплинули на ситуацію', description_en: 'Events that influenced the situation' },
            { name: 'Теперішнє', name_en: 'The Present', description: 'Поточний стан справ', description_en: 'Current state of affairs' },
            { name: 'Приховані фактори', name_en: 'Hidden Factors', description: 'Те, що ще не видно явно', description_en: 'What is not yet clearly visible' },
            { name: 'Перешкоди', name_en: 'Obstacles', description: 'Виклики на шляху', description_en: 'Challenges on the path' },
            { name: 'Оточення', name_en: 'Environment', description: 'Вплив людей і обставин', description_en: 'Influence of people and circumstances' },
            { name: 'Порада', name_en: 'Advice', description: 'Найкращий спосіб діяти', description_en: 'The best way to act' },
            { name: 'Результат', name_en: 'Outcome', description: 'Ймовірний розвиток подій', description_en: 'Likely development of events' }
        ]
    },
    { 
        id: 20, slug: 'pentagram', 
        title: 'Пентаграма', title_en: 'Pentagram',
        cards_count: 5,
        query_types: [], category: 'Універсальні', category_en: 'Universal',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Магічний аналіз ситуації за п\'ятьма стихіями: Воля, Емоції, Розум, Матерія та Дух.', 
        short_description_en: 'Magical situation analysis by five elements: Will, Emotions, Intellect, Matter, and Spirit.',
        intro_text: 'Пентаграма аналізує проблему на різних рівнях буття. Це допомагає зрозуміти, чи перебуваєте ви в гармонії зі стихіями, де саме стався збій — у думках, емоціях чи діях — і як відновити баланс для досягнення цілі.',
        intro_text_en: 'The Pentagram analyzes a problem at different levels of existence. This helps you understand if you are in harmony with the elements, where exactly the failure occurred — in thoughts, emotions, or actions — and how to restore balance to achieve your goal.',
        positions: [
            { name: 'Дух', name_en: 'Spirit', description: 'Вища мета, сенс і духовний аспект', description_en: 'Higher purpose, meaning and spiritual aspect' },
            { name: 'Повітря (Розум)', name_en: 'Air (Mind)', description: 'Думки, ідеї та комунікація', description_en: 'Thoughts, ideas and communication' },
            { name: 'Вогонь (Воля)', name_en: 'Fire (Will)', description: 'Енергія, дії та наміри', description_en: 'Energy, actions and intentions' },
            { name: 'Вода (Емоції)', name_en: 'Water (Emotions)', description: 'Почуття та внутрішній стан', description_en: 'Feelings and inner state' },
            { name: 'Земля (Матерія)', name_en: 'Earth (Matter)', description: 'Практичний результат і ресурси', description_en: 'Practical outcome and resources' }
        ]
    },
    { 
        id: 21, slug: 'simple-cross', 
        title: 'Простий хрест', title_en: 'Simple Cross',
        cards_count: 5,
        query_types: [], category: 'Універсальні', category_en: 'Universal',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Швидкий та ефективний аналіз основних впливів на будь-яке ваше запитання.', 
        short_description_en: 'Quick and effective analysis of the main influences on any of your questions.',
        intro_text: 'Якщо вам потрібна швидка відповідь без зайвих деталей, "Простий хрест" виділить головне: вашу позицію, перешкоду, основу ситуації та ймовірний результат.',
        intro_text_en: 'If you need a quick answer without unnecessary details, the "Simple Cross" will highlight the essentials: your position, the obstacle, the foundation of the situation, and the likely outcome.',
        positions: [
            { name: 'Центр', name_en: 'Center', description: 'Суть ситуації або ваша позиція', description_en: 'Core of the situation or your position' },
            { name: 'Перешкода', name_en: 'Obstacle', description: 'Що стоїть на шляху', description_en: 'What stands in the way' },
            { name: 'Основа', name_en: 'Foundation', description: 'Коріння та підґрунтя подій', description_en: 'Roots and foundation of events' },
            { name: 'Минуле / Вплив', name_en: 'Past / Influence', description: 'Що вже вплинуло на розвиток', description_en: 'What has already influenced the development' },
            { name: 'Результат', name_en: 'Outcome', description: 'Ймовірний підсумок', description_en: 'Likely outcome' }
        ]
    },

    // 💖 Кохання та Стосунки
    { 
        id: 26, slug: 'relationships', 
        title: 'Стосунки', title_en: 'Relationships',
        cards_count: 6,
        query_types: [], category: 'Кохання та Стосунки', category_en: 'Love & Relationships',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Детальний розбір взаємин, почуттів та думок обох партнерів.', 
        short_description_en: 'Detailed breakdown of relationships, feelings, and thoughts of both partners.',
        intro_text: 'Цей розклад дає можливість подивитися на стосунки з обох боків. Ви дізнаєтесь, що кожен із партнерів думає, відчуває та як діє, а також побачите перспективу союзу на найближчий час.',
        intro_text_en: 'This spread provides an opportunity to look at a relationship from both sides. You will find out what each partner thinks, feels, and how they act, as well as see the prospect of the union for the near future.',
        positions: [
            { name: 'Ви: думки', name_en: 'You: Thoughts', description: 'Що ви думаєте про стосунки', description_en: 'What you think about the relationship' },
            { name: 'Ви: почуття', name_en: 'You: Feelings', description: 'Ваші справжні емоції', description_en: 'Your true emotions' },
            { name: 'Ви: дії', name_en: 'You: Actions', description: 'Як ви проявляєтесь у союзі', description_en: 'How you show up in the relationship' },
            { name: 'Партнер: думки', name_en: 'Partner: Thoughts', description: 'Що думає партнер', description_en: 'What the partner thinks' },
            { name: 'Партнер: почуття', name_en: 'Partner: Feelings', description: 'Почуття партнера', description_en: 'The partner\'s feelings' },
            { name: 'Перспектива', name_en: 'Outlook', description: 'Розвиток стосунків у найближчий час', description_en: 'Relationship development in the near future' }
        ]
    },
    { 
        id: 25, slug: 'love-triangle', 
        title: 'Кохання (Любовний трикутник)', title_en: 'Love Triangle',
        cards_count: 3,
        query_types: [], category: 'Кохання та Стосунки', category_en: 'Love & Relationships',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Аналіз динаміки стосунків між трьома людьми або вибір між двома партнерами.', 
        short_description_en: 'Analysis of relationship dynamics between three people or a choice between two partners.',
        intro_text: 'Складна ситуація в коханні потребує ясності. Три карти висвітлюють приховані мотиви, почуття сторін та допомагають зрозуміти, до чого веде це заплутане коло.',
        intro_text_en: 'A complex situation in love requires clarity. Three cards highlight hidden motives, feelings of the parties, and help you understand where this tangled circle is leading.',
        positions: [
            { name: 'Ви', name_en: 'You', description: 'Ваша роль і почуття в ситуації', description_en: 'Your role and feelings in the situation' },
            { name: 'Перша особа', name_en: 'First person', description: 'Позиція та мотиви першої сторони', description_en: 'Position and motives of the first party' },
            { name: 'Друга особа', name_en: 'Second person', description: 'Позиція та мотиви другої сторони', description_en: 'Position and motives of the second party' }
        ]
    },

    // 💼 Кар'єра та Фінанси
    { 
        id: 1, slug: 'career', 
        title: 'Робота та кар\'єра', title_en: 'Career & Work',
        cards_count: 6,
        query_types: [], category: 'Кар\'єра та Фінанси', category_en: 'Career & Finance',
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
        cards_count: 6,
        query_types: [], category: 'Кар\'єра та Фінанси', category_en: 'Career & Finance',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Аналіз грошового потоку, ризиків та можливостей для стабільності.', 
        short_description_en: 'Analysis of cash flow, risks and opportunities for stability.',
        intro_text: 'Розклад допомагає побачити реальну картину ваших фінансів: звідки приходять гроші, куди вони йдуть і що може загрожувати стабільності. Він дає практичні підказки для зміцнення матеріального становища.',
        intro_text_en: 'The spread helps you see the real picture of your finances: where money comes from, where it goes, and what may threaten stability. It gives practical tips for strengthening your material situation.',
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
        cards_count: 3,
        query_types: [], category: 'Короткі (Швидкі)', category_en: 'Quick Reads',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Класичний швидкий розклад: минуле, теперішнє, майбутнє.', 
        short_description_en: 'Classic quick spread: past, present, future.',
        intro_text: 'Три карти дають чітку часову лінію розвитку ситуації. Ідеально, коли потрібна швидка відповідь без зайвої складності.',
        intro_text_en: 'Three cards give a clear timeline of the situation. Ideal when you need a quick answer without extra complexity.',
        positions: [
            { name: 'Минуле', name_en: 'Past', description: 'Що вже вплинуло на ситуацію', description_en: 'What has already influenced the situation' },
            { name: 'Теперішнє', name_en: 'Present', description: 'Поточний стан справ', description_en: 'Current state of affairs' },
            { name: 'Майбутнє', name_en: 'Future', description: 'Ймовірний розвиток подій', description_en: 'Likely development of events' }
        ]
    },
    { 
        id: 23, slug: 'yes-no', 
        title: 'Так чи Ні', title_en: 'Yes or No',
        cards_count: 3,
        query_types: ['yesno'], category: 'Короткі (Швидкі)', category_en: 'Quick Reads',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Конкретна відповідь на конкретне питання через аналіз сприятливих та заважаючих факторів.', 
        short_description_en: 'A specific answer to a specific question through the analysis of favorable and hindering factors.',
        intro_text: 'Коли вам потрібне чітке "так" або "ні", цей розклад допоможе зважити сили за і проти. Третя карта виступає порадою або вказує на вирішальний фактор.',
        intro_text_en: 'When you need a clear "yes" or "no", this spread helps you weigh the pros and cons. The third card acts as advice or indicates a decisive factor.',
        positions: [
            { name: 'За (Так)', name_en: 'For (Yes)', description: 'Фактори на користь позитивної відповіді', description_en: 'Factors in favor of a positive answer' },
            { name: 'Проти (Ні)', name_en: 'Against (No)', description: 'Фактори, що вказують на негативну відповідь', description_en: 'Factors pointing to a negative answer' },
            { name: 'Порада / Ключ', name_en: 'Advice / Key', description: 'Вирішальний фактор або рекомендація', description_en: 'Decisive factor or recommendation' }
        ]
    },
    { 
        id: 27, slug: 'daily-path', 
        title: 'Щоденний шлях', title_en: 'Daily Path',
        cards_count: 4,
        query_types: ['forecast'], category: 'Короткі (Швидкі)', category_en: 'Quick Reads',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Розклад дня, що допомагає сфокусуватися на головному та уникнути помилок.', 
        short_description_en: 'Daily layout helping you focus on the essentials and avoid mistakes.',
        intro_text: 'Цей розклад — ваш особистий навігатор на день. Він показує основну енергію дня, можливі перешкоди та те, де сьогодні варто шукати ресурс.',
        intro_text_en: 'This spread is your personal navigator for the day. It shows the main energy of the day, potential obstacles, and where you should look for resources today.',
        positions: [
            { name: 'Енергія дня', name_en: 'Day Energy', description: 'Головна тема та настрій дня', description_en: 'Main theme and mood of the day' },
            { name: 'Перешкода', name_en: 'Obstacle', description: 'Що може завадити сьогодні', description_en: 'What may hinder you today' },
            { name: 'Ресурс', name_en: 'Resource', description: 'Де шукати підтримку та силу', description_en: 'Where to look for support and strength' },
            { name: 'Порада', name_en: 'Advice', description: 'Як найкраще провести день', description_en: 'How to best spend the day' }
        ]
    },
    { 
        id: 22, slug: 'one-card', 
        title: 'Одна карта', title_en: 'One Card',
        cards_count: 1,
        query_types: [], category: 'Короткі (Швидкі)', category_en: 'Quick Reads',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Миттєва порада або основна енергія моменту.', 
        short_description_en: 'Instant advice or the core energy of the moment.',
        intro_text: 'Максимально лаконічний розклад. Витягніть одну карту як натхнення на день або пряму відповідь на запитання.',
        intro_text_en: 'The most concise spread. Draw one card as inspiration for the day or a direct answer to a question.',
        positions: [
            { name: 'Результат', name_en: 'Result', description: 'Головна відповідь або енергія моменту', description_en: 'Main answer or energy of the moment' }
        ]
    },

    // 📅 Прогнози
    { 
        id: 6, slug: 'week-ahead', 
        title: 'Тиждень попереду', title_en: 'Week Ahead',
        cards_count: 7,
        query_types: ['forecast'], category: 'Прогнози', category_en: 'Forecasts',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Прогноз на кожен день тижня, що допомагає планувати справи та відпочинок.', 
        short_description_en: 'Forecast for each day of the week, helping you plan tasks and rest.',
        intro_text: 'Сім карт на сім днів тижня. Дозволяє побачити ритм вашого життя на найближчий тиждень і бути готовим до будь-яких поворотів.',
        intro_text_en: 'Seven cards for the seven days of the week. Allows you to see the rhythm of your life for the coming week and be ready for any turns.',
        positions: [
            { name: 'Пн', name_en: 'Mon', description: 'Енергія та події понеділка', description_en: 'Monday energy and events' },
            { name: 'Вт', name_en: 'Tue', description: 'Енергія та події вівторка', description_en: 'Tuesday energy and events' },
            { name: 'Ср', name_en: 'Wed', description: 'Енергія та події середи', description_en: 'Wednesday energy and events' },
            { name: 'Чт', name_en: 'Thu', description: 'Енергія та події четверга', description_en: 'Thursday energy and events' },
            { name: 'Пт', name_en: 'Fri', description: 'Енергія та події п\'ятниці', description_en: 'Friday energy and events' },
            { name: 'Сб', name_en: 'Sat', description: 'Енергія та події суботи', description_en: 'Saturday energy and events' },
            { name: 'Нд', name_en: 'Sun', description: 'Енергія та події неділі', description_en: 'Sunday energy and events' }
        ]
    },
    { 
        id: 7, slug: 'year-ahead', 
        title: 'Рік попереду', title_en: 'Year Ahead',
        cards_count: 12,
        query_types: ['forecast'], category: 'Прогнози', category_en: 'Forecasts',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Глобальний прогноз на рік: одна карта на кожен місяць.', 
        short_description_en: 'Global forecast for the year: one card for each month.',
        intro_text: 'Цей розклад дає загальну панораму майбутнього року. Ви зможете побачити ключові акценти кожного місяця та краще розподілити свої сили.',
        intro_text_en: 'This spread provides a general panorama of the year ahead. You can see the key highlights of each month and better distribute your energy.',
        positions: [
            { name: 'Січень', name_en: 'January', description: 'Ключова енергія січня', description_en: 'Key energy of January' },
            { name: 'Лютий', name_en: 'February', description: 'Ключова енергія лютого', description_en: 'Key energy of February' },
            { name: 'Березень', name_en: 'March', description: 'Ключова енергія березня', description_en: 'Key energy of March' },
            { name: 'Квітень', name_en: 'April', description: 'Ключова енергія квітня', description_en: 'Key energy of April' },
            { name: 'Травень', name_en: 'May', description: 'Ключова енергія травня', description_en: 'Key energy of May' },
            { name: 'Червень', name_en: 'June', description: 'Ключова енергія червня', description_en: 'Key energy of June' },
            { name: 'Липень', name_en: 'July', description: 'Ключова енергія липня', description_en: 'Key energy of July' },
            { name: 'Серпень', name_en: 'August', description: 'Ключова енергія серпня', description_en: 'Key energy of August' },
            { name: 'Вересень', name_en: 'September', description: 'Ключова енергія вересня', description_en: 'Key energy of September' },
            { name: 'Жовтень', name_en: 'October', description: 'Ключова енергія жовтня', description_en: 'Key energy of October' },
            { name: 'Листопад', name_en: 'November', description: 'Ключова енергія листопада', description_en: 'Key energy of November' },
            { name: 'Грудень', name_en: 'December', description: 'Ключова енергія грудня', description_en: 'Key energy of December' }
        ]
    },
    { 
        id: 9, slug: 'birthday', 
        title: 'День народження', title_en: 'Birthday',
        cards_count: 3,
        query_types: ['forecast'], category: 'Прогнози', category_en: 'Forecasts',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Особливий розклад для переходу в новий особистий рік: підсумок та перспектива.', 
        short_description_en: 'A special spread for the transition into a new personal year: summary and perspective.',
        intro_text: 'День народження — це точка сили. Цей розклад допоможе відпустити минулий досвід, визначити вашу головну енергію зараз та побачити вектор розвитку на майбутнє.',
        intro_text_en: 'A birthday is a point of power. This spread helps you release past experiences, define your main energy now, and see the vector of development for the future.',
        positions: [
            { name: 'Минуле', name_en: 'Past', description: 'Уроки та досвід минулого року', description_en: 'Lessons and experience of the past year' },
            { name: 'Енергія', name_en: 'Energy', description: 'Головна сила вашого нового року', description_en: 'Main force of your new year' },
            { name: 'Майбутнє', name_en: 'Future', description: 'Вектор розвитку на рік вперед', description_en: 'Development vector for the year ahead' }
        ]
    },

    // 🧘 Духовність та Здоров'я
    { 
        id: 5, slug: 'seven-chakras', 
        title: 'Сім чакр', title_en: 'Seven Chakras',
        cards_count: 7,
        query_types: [], category: 'Духовність та Здоров\'я', category_en: 'Spirituality & Health',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Діагностика енергетичних центрів і балансу тіла, емоцій та духу.', 
        short_description_en: 'Diagnostics of energy centers and the balance of body, emotions and spirit.',
        intro_text: 'Сім карт відповідають семи чакрам. Розклад показує, де енергія тече вільно, а де є блоки, і допомагає зрозуміти, на якому рівні потребує уваги ваше самопочуття.',
        intro_text_en: 'Seven cards correspond to the seven chakras. The spread shows where energy flows freely and where there are blocks, and helps understand at which level your well-being needs attention.',
        positions: [
            { name: 'Муладхара', name_en: 'Muladhara', description: 'Коріння, безпека, базові потреби', description_en: 'Root, safety, basic needs' },
            { name: 'Свадхістана', name_en: 'Svadhisthana', description: 'Емоції, творчість, задоволення', description_en: 'Emotions, creativity, pleasure' },
            { name: 'Маніпура', name_en: 'Manipura', description: 'Воля, сила, особиста влада', description_en: 'Will, strength, personal power' },
            { name: 'Анахата', name_en: 'Anahata', description: 'Любов, співчуття, стосунки', description_en: 'Love, compassion, relationships' },
            { name: 'Вішудха', name_en: 'Vishuddha', description: 'Самовираження, правда, голос', description_en: 'Self-expression, truth, voice' },
            { name: 'Аджна', name_en: 'Ajna', description: 'Інтуїція, бачення, ясність', description_en: 'Intuition, vision, clarity' },
            { name: 'Сахасрара', name_en: 'Sahasrara', description: 'Духовність, єдність, вищий сенс', description_en: 'Spirituality, unity, higher meaning' }
        ]
    },
    { 
        id: 3, slug: 'spiritual', 
        title: 'Духовний розвиток', title_en: 'Spiritual Growth',
        cards_count: 6,
        query_types: [], category: 'Духовність та Здоров\'я', category_en: 'Spirituality & Health',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Карта внутрішнього шляху: де ви зараз і куди рухається ваша душа.', 
        short_description_en: 'Map of the inner path: where you are now and where your soul is moving.',
        intro_text: 'Розклад для тих, хто шукає глибший сенс. Він показує поточний духовний стан, перешкоди на шляху, ресурси та наступний крок у розвитку.',
        intro_text_en: 'A spread for those seeking deeper meaning. It shows the current spiritual state, obstacles on the path, resources and the next step in development.',
        positions: [
            { name: 'Поточний стан', name_en: 'Current State', description: 'Де ви зараз на духовному шляху', description_en: 'Where you are now on the spiritual path' },
            { name: 'Урок', name_en: 'Lesson', description: 'Головний урок цього етапу', description_en: 'Main lesson of this stage' },
            { name: 'Перешкода', name_en: 'Obstacle', description: 'Що блокує зростання', description_en: 'What blocks growth' },
            { name: 'Ресурс', name_en: 'Resource', description: 'Що підтримує і надихає', description_en: 'What supports and inspires' },
            { name: 'Порада', name_en: 'Advice', description: 'Практичний крок вперед', description_en: 'Practical step forward' },
            { name: 'Наступний етап', name_en: 'Next Stage', description: 'Куди веде ваш шлях', description_en: 'Where your path leads' }
        ]
    },
    { 
        id: 24, slug: 'mind-body-spirit', 
        title: 'Розум-Тіло-Дух', title_en: 'Mind-Body-Spirit',
        cards_count: 3,
        query_types: [], category: 'Духовність та Здоров\'я', category_en: 'Spirituality & Health',
        difficulty: 'Легка', difficulty_en: 'Easy',
        short_description: 'Швидкий огляд балансу розуму, тіла та духу.', 
        short_description_en: 'Quick overview of the balance of mind, body and spirit.',
        intro_text: 'Три карти показують стан трьох ключових рівнів вашого буття. Допомагає зрозуміти, де потрібна увага для відновлення гармонії.',
        intro_text_en: 'Three cards show the state of three key levels of your being. Helps understand where attention is needed to restore harmony.',
        positions: [
            { name: 'Розум', name_en: 'Mind', description: 'Думки, фокус і ментальний стан', description_en: 'Thoughts, focus and mental state' },
            { name: 'Тіло', name_en: 'Body', description: 'Фізичний стан і енергія тіла', description_en: 'Physical state and body energy' },
            { name: 'Дух', name_en: 'Spirit', description: 'Духовний стан і зв\'язок із сенсом', description_en: 'Spiritual state and connection to meaning' }
        ]
    },
    { 
        id: 13, slug: 'health', 
        title: 'Здоров\'я', title_en: 'Health',
        cards_count: 6,
        query_types: [], category: 'Духовність та Здоров\'я', category_en: 'Spirituality & Health',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Символічний огляд факторів, що впливають на самопочуття (не медична діагностика).', 
        short_description_en: 'Symbolic overview of factors affecting well-being (not medical diagnosis).',
        intro_text: 'Цей розклад не замінює консультацію лікаря. Він показує символічні впливи на ваше самопочуття: внутрішні ресурси, стресори, поради щодо турботи про себе.',
        intro_text_en: 'This spread does not replace a doctor\'s consultation. It shows symbolic influences on your well-being: inner resources, stressors, advice on self-care.',
        positions: [
            { name: 'Поточний стан', name_en: 'Current State', description: 'Загальний стан самопочуття зараз', description_en: 'Overall state of well-being now' },
            { name: 'Сильний бік', name_en: 'Strength', description: 'Що підтримує здоров\'я', description_en: 'What supports health' },
            { name: 'Слабке місце', name_en: 'Weak Spot', description: 'Зона, що потребує уваги', description_en: 'Area that needs attention' },
            { name: 'Причина дискомфорту', name_en: 'Cause of Discomfort', description: 'Ймовірне джерело напруги', description_en: 'Likely source of tension' },
            { name: 'Порада', name_en: 'Advice', description: 'Як краще дбати про себе', description_en: 'How to better care for yourself' },
            { name: 'Перспектива', name_en: 'Outlook', description: 'Тенденція розвитку самопочуття', description_en: 'Trend of well-being development' }
        ]
    },

    // 🧠 Психологія
    { 
        id: 11, slug: 'secrets', 
        title: 'Розкриття таємниці', title_en: 'Secrets revealed',
        cards_count: 6,
        query_types: ['causes'], category: 'Психологія', category_en: 'Psychology',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Що приховано від свідомості: мотиви, тіні та невидимі впливи.', 
        short_description_en: 'What is hidden from consciousness: motives, shadows and invisible influences.',
        intro_text: 'Розклад допомагає витягнути на світло те, що зазвичай залишається в тіні: неусвідомлені мотиви, приховані страхи та фактори, які керують ситуацією з-за лаштунків.',
        intro_text_en: 'The spread helps bring to light what usually stays in the shadow: unconscious motives, hidden fears and factors that drive the situation from behind the scenes.',
        positions: [
            { name: 'Поверхня', name_en: 'Surface', description: 'Те, що видно всім', description_en: 'What is visible to everyone' },
            { name: 'Приховане', name_en: 'Hidden', description: 'Що залишається поза увагою', description_en: 'What remains out of sight' },
            { name: 'Мотив', name_en: 'Motive', description: 'Справжня рушійна сила', description_en: 'The true driving force' },
            { name: 'Страх', name_en: 'Fear', description: 'Що блокує або стримує', description_en: 'What blocks or holds back' },
            { name: 'Ключ', name_en: 'Key', description: 'Як розкрити таємницю', description_en: 'How to reveal the secret' },
            { name: 'Правда', name_en: 'Truth', description: 'Суть, яка стає ясною', description_en: 'The essence that becomes clear' }
        ]
    },
    { 
        id: 12, slug: 'detective', 
        title: 'Детектив', title_en: 'Detective',
        cards_count: 6,
        query_types: ['causes'], category: 'Психологія', category_en: 'Psychology',
        difficulty: 'Середня', difficulty_en: 'Medium',
        short_description: 'Пошук відповідей: факти, причини та логіка подій.', 
        short_description_en: 'Search for answers: facts, causes and logic of events.',
        intro_text: 'Коли ситуація виглядає як загадка, цей розклад збирає «докази»: що відомо, що приховано, хто впливає і який висновок можна зробити.',
        intro_text_en: 'When a situation looks like a puzzle, this spread gathers the "evidence": what is known, what is hidden, who influences and what conclusion can be drawn.',
        positions: [
            { name: 'Факт 1', name_en: 'Fact 1', description: 'Відомий і очевидний факт', description_en: 'Known and obvious fact' },
            { name: 'Факт 2', name_en: 'Fact 2', description: 'Другий важливий факт', description_en: 'Second important fact' },
            { name: 'Прихований фактор', name_en: 'Hidden Factor', description: 'Те, що не на поверхні', description_en: 'What is not on the surface' },
            { name: 'Хто/що впливає', name_en: 'Who/What Influences', description: 'Ключовий вплив на ситуацію', description_en: 'Key influence on the situation' },
            { name: 'Мотив', name_en: 'Motive', description: 'Чому події розвиваються саме так', description_en: 'Why events unfold this way' },
            { name: 'Висновок', name_en: 'Conclusion', description: 'Підсумок розслідування', description_en: 'Conclusion of the investigation' }
        ]
    },
    { 
        id: 28, slug: 'shadow-work', 
        title: 'Тіньова робота', title_en: 'Shadow Work',
        cards_count: 5,
        query_types: ['causes'], category: 'Психологія', category_en: 'Psychology',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Робота з тінню: неприйняті частини себе та шлях до інтеграції.', 
        short_description_en: 'Working with the shadow: rejected parts of the self and the path to integration.',
        intro_text: 'Тінь — це те, що ми витісняємо. Цей розклад м\'яко висвітлює відкинуті аспекти особистості, показує, як вони впливають на життя, і дає шлях до прийняття.',
        intro_text_en: 'The shadow is what we repress. This spread gently illuminates rejected aspects of the personality, shows how they affect life, and offers a path to acceptance.',
        positions: [
            { name: 'Тінь', name_en: 'The Shadow', description: 'Відкинута або неприйнята частина себе', description_en: 'Rejected or unaccepted part of the self' },
            { name: 'Як проявляється', name_en: 'How it shows', description: 'Як тінь впливає на повсякденне життя', description_en: 'How the shadow affects everyday life' },
            { name: 'Корінь', name_en: 'Root', description: 'Звідки взялося це витіснення', description_en: 'Where this repression comes from' },
            { name: 'Дар тіні', name_en: 'Gift of the Shadow', description: 'Сила, яку можна інтегрувати', description_en: 'Strength that can be integrated' },
            { name: 'Шлях інтеграції', name_en: 'Path of Integration', description: 'Як прийняти і використати цю частину', description_en: 'How to accept and use this part' }
        ]
    },

    // 📜 Глибокі (Складні)
    { 
        id: 4, slug: 'tree-of-life', 
        title: 'Дерево життя', title_en: 'Tree of Life',
        cards_count: 10,
        query_types: [], category: 'Глибокі (Складні)', category_en: 'Deep Contexts',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Монументальний езотеричний розклад на 10 позицій за моделлю Сефірот.', 
        short_description_en: 'A monumental esoteric spread with 10 positions based on the Sephiroth model.',
        intro_text: 'Дерево Життя кабали — карта шляху душі. Десять сефірот описують різні рівні буття: від матеріального світу до вищої свідомості.',
        intro_text_en: 'The Kabbalistic Tree of Life is a map of the soul\'s path. Ten sephiroth describe different levels of being: from the material world to higher consciousness.',
        positions: [
            { name: 'Кетер', name_en: 'Kether', description: 'Вища воля, джерело, початок', description_en: 'Higher will, source, beginning' },
            { name: 'Хокма', name_en: 'Chokmah', description: 'Мудра ідея, імпульс, одкровення', description_en: 'Wise idea, impulse, revelation' },
            { name: 'Біна', name_en: 'Binah', description: 'Розуміння, форма, структура', description_en: 'Understanding, form, structure' },
            { name: 'Хесед', name_en: 'Chesed', description: 'Милосердя, розширення, щедрість', description_en: 'Mercy, expansion, generosity' },
            { name: 'Гебура', name_en: 'Geburah', description: 'Сила, обмеження, дисципліна', description_en: 'Strength, limitation, discipline' },
            { name: 'Тіфарет', name_en: 'Tiphareth', description: 'Гармонія, серце, баланс', description_en: 'Harmony, heart, balance' },
            { name: 'Нецах', name_en: 'Netzach', description: 'Емоції, бажання, перемога', description_en: 'Emotions, desire, victory' },
            { name: 'Год', name_en: 'Hod', description: 'Інтелект, комунікація, аналіз', description_en: 'Intellect, communication, analysis' },
            { name: 'Йєсод', name_en: 'Yesod', description: 'Підсвідомість, фундамент, сни', description_en: 'Subconscious, foundation, dreams' },
            { name: 'Малкут', name_en: 'Malkuth', description: 'Матеріальний результат, прояв', description_en: 'Material result, manifestation' }
        ]
    },
    { 
        id: 14, slug: 'tetraktys', 
        title: 'Тетрактіс', title_en: 'Tetraktys',
        cards_count: 10,
        query_types: [], category: 'Глибокі (Складні)', category_en: 'Deep Contexts',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Піфагорійська піраміда з 10 карт: від єдності до множинності прояву.', 
        short_description_en: 'Pythagorean pyramid of 10 cards: from unity to multiplicity of manifestation.',
        intro_text: 'Тетрактіс — священна піраміда чисел. Чотири рівні (1+2+3+4=10) описують, як ідея спускається від єдиного джерела до конкретного прояву в житті.',
        intro_text_en: 'The Tetraktys is a sacred pyramid of numbers. Four levels (1+2+3+4=10) describe how an idea descends from a single source to concrete manifestation in life.',
        positions: [
            { name: 'Єдність', name_en: 'Unity', description: 'Джерело, вища ідея, точка відліку', description_en: 'Source, higher idea, starting point' },
            { name: 'Дуальність А', name_en: 'Duality A', description: 'Перша полярність / сила', description_en: 'First polarity / force' },
            { name: 'Дуальність Б', name_en: 'Duality B', description: 'Друга полярність / сила', description_en: 'Second polarity / force' },
            { name: 'Тріада 1', name_en: 'Triad 1', description: 'Перший аспект прояву', description_en: 'First aspect of manifestation' },
            { name: 'Тріада 2', name_en: 'Triad 2', description: 'Другий аспект прояву', description_en: 'Second aspect of manifestation' },
            { name: 'Тріада 3', name_en: 'Triad 3', description: 'Третій аспект прояву', description_en: 'Third aspect of manifestation' },
            { name: 'Матерія 1', name_en: 'Matter 1', description: 'Конкретний прояв 1', description_en: 'Concrete manifestation 1' },
            { name: 'Матерія 2', name_en: 'Matter 2', description: 'Конкретний прояв 2', description_en: 'Concrete manifestation 2' },
            { name: 'Матерія 3', name_en: 'Matter 3', description: 'Конкретний прояв 3', description_en: 'Concrete manifestation 3' },
            { name: 'Матерія 4', name_en: 'Matter 4', description: 'Конкретний прояв 4 / підсумок', description_en: 'Concrete manifestation 4 / summary' }
        ]
    },
    { 
        id: 8, slug: 'astro-wheel', 
        title: 'Астрологічне коло', title_en: 'Astrological Circle',
        cards_count: 12,
        query_types: [], category: 'Глибокі (Складні)', category_en: 'Deep Contexts',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Синергія Таро та астрології: прогноз за 12 астрологічними будинками.', 
        short_description_en: 'Synergy of Tarot and astrology: forecast by the 12 astrological houses.',
        intro_text: 'Один із найповніших прогнозів. 12 карт відповідають 12 сферам життя (сім\'я, кар\'єра, подорожі тощо), даючи цілісний огляд вашої долі на поточний період.',
        intro_text_en: 'One of the most complete forecasts. Twelve cards correspond to twelve spheres of life (family, career, travel, etc.), providing a holistic view of your destiny for the current period.',
        positions: [
            { name: '1 дім', name_en: '1st House', description: 'Особистість, «я», зовнішній образ', description_en: 'Personality, self, outer image' },
            { name: '2 дім', name_en: '2nd House', description: 'Ресурси, гроші, цінності', description_en: 'Resources, money, values' },
            { name: '3 дім', name_en: '3rd House', description: 'Спілкування, навчання, близьке оточення', description_en: 'Communication, learning, close environment' },
            { name: '4 дім', name_en: '4th House', description: 'Дім, сім\'я, коріння', description_en: 'Home, family, roots' },
            { name: '5 дім', name_en: '5th House', description: 'Творчість, любов, діти, задоволення', description_en: 'Creativity, love, children, pleasure' },
            { name: '6 дім', name_en: '6th House', description: 'Робота, здоров\'я, щоденні справи', description_en: 'Work, health, daily affairs' },
            { name: '7 дім', name_en: '7th House', description: 'Партнерства, шлюб, відкриті стосунки', description_en: 'Partnerships, marriage, open relationships' },
            { name: '8 дім', name_en: '8th House', description: 'Трансформація, спільні ресурси, кризи', description_en: 'Transformation, shared resources, crises' },
            { name: '9 дім', name_en: '9th House', description: 'Подорожі, філософія, вища освіта', description_en: 'Travel, philosophy, higher education' },
            { name: '10 дім', name_en: '10th House', description: 'Кар\'єра, статус, суспільне визнання', description_en: 'Career, status, public recognition' },
            { name: '11 дім', name_en: '11th House', description: 'Друзі, спільноти, майбутні цілі', description_en: 'Friends, communities, future goals' },
            { name: '12 дім', name_en: '12th House', description: 'Підсвідомість, таємниці, завершення', description_en: 'Subconscious, secrets, endings' }
        ]
    },
    { 
        id: 18, slug: 'golden-dawn', 
        title: 'Golden Dawn', title_en: 'Golden Dawn',
        cards_count: 15,
        query_types: [], category: 'Глибокі (Складні)', category_en: 'Deep Contexts',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Складна аналітична система ордена "Золотої Зорі" на 15 карт.', 
        short_description_en: 'Complex analytical system of the Golden Dawn order with 15 cards.',
        intro_text: 'Шедевр західного окультизму. Розклад для досвідчених практикуючих, що дозволяє вивчити розвиток події в найдрібніших деталях та часових рамках.',
        intro_text_en: 'A masterpiece of Western occultism. A spread for experienced practitioners, allowing the study of an event\'s development in the smallest details and timeframes.',
        positions: [
            { name: 'Знак питання', name_en: 'Significator', description: 'Ключова карта / сутність питання', description_en: 'Key card / essence of the question' },
            { name: 'Покриття', name_en: 'Covering', description: 'Що покриває ситуацію зараз', description_en: 'What covers the situation now' },
            { name: 'Хрест', name_en: 'Crossing', description: 'Перешкода або вплив, що перетинає шлях', description_en: 'Obstacle or influence crossing the path' },
            { name: 'Основа', name_en: 'Foundation', description: 'Підґрунтя подій', description_en: 'Foundation of events' },
            { name: 'Минуле', name_en: 'Past', description: 'Недавнє минуле', description_en: 'Recent past' },
            { name: 'Корона', name_en: 'Crown', description: 'Можливе / те, що може статись', description_en: 'Possible / what may come to pass' },
            { name: 'Майбутнє', name_en: 'Future', description: 'Найближче майбутнє', description_en: 'Near future' },
            { name: 'Ви', name_en: 'You', description: 'Ваша позиція в ситуації', description_en: 'Your position in the situation' },
            { name: 'Оточення', name_en: 'Environment', description: 'Вплив середовища', description_en: 'Environmental influence' },
            { name: 'Надії/Страхи', name_en: 'Hopes/Fears', description: 'Внутрішні очікування та побоювання', description_en: 'Inner expectations and fears' },
            { name: 'Результат 1', name_en: 'Outcome 1', description: 'Перший шар підсумку', description_en: 'First layer of the outcome' },
            { name: 'Результат 2', name_en: 'Outcome 2', description: 'Другий шар підсумку', description_en: 'Second layer of the outcome' },
            { name: 'Результат 3', name_en: 'Outcome 3', description: 'Третій шар підсумку', description_en: 'Third layer of the outcome' },
            { name: 'Порада', name_en: 'Advice', description: 'Рекомендована дія', description_en: 'Recommended action' },
            { name: 'Фінал', name_en: 'Final', description: 'Кінцевий синтез відповіді', description_en: 'Final synthesis of the answer' }
        ]
    },
    { 
        id: 19, slug: 'romany', 
        title: 'Romany', title_en: 'Romany',
        cards_count: 21,
        query_types: [], category: 'Глибокі (Складні)', category_en: 'Deep Contexts',
        difficulty: 'Висока', difficulty_en: 'High',
        short_description: 'Великий розклад циганського ворожіння на цілісний життєвий шлях.', 
        short_description_en: 'A great Gypsy fortune-telling spread for a holistic life path.',
        intro_text: 'Легендарний розклад на 21 карту. Три ряди по сім карт описують ваше минуле, теперішнє та майбутнє, створюючи монументальну картину вашої подорожі.',
        intro_text_en: 'The legendary 21-card spread. Three rows of seven cards describe your past, present, and future, creating a monumental picture of your journey.',
        positions: [
            { name: 'Минуле 1', name_en: 'Past 1', description: 'Коріння минулого', description_en: 'Roots of the past' },
            { name: 'Минуле 2', name_en: 'Past 2', description: 'Ключова подія минулого', description_en: 'Key event of the past' },
            { name: 'Минуле 3', name_en: 'Past 3', description: 'Вплив минулого на характер', description_en: 'Past influence on character' },
            { name: 'Минуле 4', name_en: 'Past 4', description: 'Урок минулого', description_en: 'Lesson of the past' },
            { name: 'Минуле 5', name_en: 'Past 5', description: 'Люди з минулого', description_en: 'People from the past' },
            { name: 'Минуле 6', name_en: 'Past 6', description: 'Незавершене з минулого', description_en: 'Unresolved from the past' },
            { name: 'Минуле 7', name_en: 'Past 7', description: 'Підсумок минулого ряду', description_en: 'Summary of the past row' },
            { name: 'Теперішнє 1', name_en: 'Present 1', description: 'Поточна ситуація', description_en: 'Current situation' },
            { name: 'Теперішнє 2', name_en: 'Present 2', description: 'Ваші думки зараз', description_en: 'Your thoughts now' },
            { name: 'Теперішнє 3', name_en: 'Present 3', description: 'Ваші почуття зараз', description_en: 'Your feelings now' },
            { name: 'Теперішнє 4', name_en: 'Present 4', description: 'Дії та вибір зараз', description_en: 'Actions and choices now' },
            { name: 'Теперішнє 5', name_en: 'Present 5', description: 'Оточення зараз', description_en: 'Environment now' },
            { name: 'Теперішнє 6', name_en: 'Present 6', description: 'Приховані фактори зараз', description_en: 'Hidden factors now' },
            { name: 'Теперішнє 7', name_en: 'Present 7', description: 'Підсумок теперішнього ряду', description_en: 'Summary of the present row' },
            { name: 'Майбутнє 1', name_en: 'Future 1', description: 'Найближча тенденція', description_en: 'Nearest trend' },
            { name: 'Майбутнє 2', name_en: 'Future 2', description: 'Можливості попереду', description_en: 'Opportunities ahead' },
            { name: 'Майбутнє 3', name_en: 'Future 3', description: 'Виклики попереду', description_en: 'Challenges ahead' },
            { name: 'Майбутнє 4', name_en: 'Future 4', description: 'Люди в майбутньому', description_en: 'People in the future' },
            { name: 'Майбутнє 5', name_en: 'Future 5', description: 'Порада на майбутнє', description_en: 'Advice for the future' },
            { name: 'Майбутнє 6', name_en: 'Future 6', description: 'Довгострокова перспектива', description_en: 'Long-term perspective' },
            { name: 'Майбутнє 7', name_en: 'Future 7', description: 'Підсумок майбутнього ряду', description_en: 'Summary of the future row' }
        ]
    }
];


// allTarotCards is defined in cards.js (loaded before this file)

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
        meaningInPosition: 'Значення у позиції',
        fullCardDetails: 'Повний опис карти (символіка, сфери)',
        hideCardDetails: 'Приховати повний опис',
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
        synthesisDisclaimer: 'Цей синтез згенеровано автоматично. Для отримання розгорнутого персонального прогнозу скопіюйте результат кнопкою «Копіювати результат», перейдіть у чат кнопкою «Тлумачення від ШІ (Лея)» та вставте його туди.',
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

        filterAll: 'Всі',
        filterBySize: 'За розміром',
        filterByQuery: 'За типом запиту',
        sizeQuick: 'Швидкі',
        sizeMedium: 'Середні',
        sizeDeep: 'Глибокі',
        sizeQuickHint: '1–4 карти',
        sizeMediumHint: '5–7 карт',
        sizeDeepHint: '10–21 карта',
        queryYesNo: 'Так / Ні',
        queryChoice: 'Вибір з двох',
        queryCauses: 'Аналіз причин',
        queryForecast: 'Прогноз на період',
        noSpreadsFound: 'Розкладів не знайдено',
        navCards: 'Карти Таро',
        cardsPageTitle: 'Карти Таро',
        cardsPageDesc: 'Всі 78 карт з зображеннями, назвами та значеннями.',
        pwaInstallTitle: 'Встановити Таро',
        pwaInstallDesc: 'Додати на головний екран',
        pwaInstallYes: 'Так',
        pwaInstallBlocked: 'Ваш браузер зараз блокує автоматичне встановлення. Скористайтеся меню браузера ("Додати на головний екран" або значок встановлення в адресному рядку).'
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
        meaningInPosition: 'Meaning in position',
        fullCardDetails: 'Full card details (symbolism, spheres)',
        hideCardDetails: 'Hide full description',
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
        synthesisDisclaimer: 'This synthesis is generated automatically. For a detailed personalized reading, copy the result using the “Copy Result” button, open the chat via “Ask AI (Leia)”, and paste it there.',
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

        filterAll: 'All',
        filterBySize: 'By size',
        filterByQuery: 'By query type',
        sizeQuick: 'Quick',
        sizeMedium: 'Medium',
        sizeDeep: 'Deep',
        sizeQuickHint: '1–4 cards',
        sizeMediumHint: '5–7 cards',
        sizeDeepHint: '10–21 cards',
        queryYesNo: 'Yes / No',
        queryChoice: 'Two options',
        queryCauses: 'Cause analysis',
        queryForecast: 'Period forecast',
        noSpreadsFound: 'No spreads found',
        navCards: 'Tarot Cards',
        cardsPageTitle: 'Tarot Cards',
        cardsPageDesc: 'All 78 cards with images, names and meanings.',
        pwaInstallTitle: 'Install Tarot',
        pwaInstallDesc: 'Add to Home Screen',
        pwaInstallYes: 'Yes',
        pwaInstallBlocked: 'Your browser is currently blocking automatic installation. Please use the browser menu ("Add to Home Screen" or the install icon in the address bar).'
    }
};
