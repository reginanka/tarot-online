/**
 * analysis.js — automated reading synthesis for tarot-online
 * Produces a unified, deep, non-redundant synthesis without duplicate blocks or emojis.
 */
(function (global) {
  'use strict';

  const ELEMENT_META = {
    fire:  { uk: 'Вогонь', en: 'Fire',  suit_uk: 'Жезли', suit_en: 'Wands' },
    water: { uk: 'Вода',   en: 'Water', suit_uk: 'Кубки', suit_en: 'Cups' },
    air:   { uk: 'Повітря',en: 'Air',   suit_uk: 'Мечі',  suit_en: 'Swords' },
    earth: { uk: 'Земля',  en: 'Earth', suit_uk: 'Пентаклі', suit_en: 'Pentacles' },
  };

  const COMBOS = [
    {
      ids: ['m06', 'm15'],
      names_en: ['The Lovers', 'The Devil'],
      text_uk: 'Знакова комбінація: Закохані + Диявол — залежні стосунки, спокуса або вибір між пристрастю та справжньою цінністю.',
      text_en: 'Key combination: The Lovers + The Devil — codependency, temptation, or a choice between raw passion and true value.',
    },
    {
      ids: ['m16', 'm10'],
      names_en: ['The Tower', 'Wheel of Fortune'],
      text_uk: 'Знакова комбінація: Вежа + Колесо Фортуни — раптові незворотні зміни, форс-мажорний поворот долі, що руйнує старе заради нового циклу.',
      text_en: 'Key combination: The Tower + Wheel of Fortune — sudden irreversible turn of events breaking old structures for a new cycle.',
    },
    {
      ids: ['m13', 'm20'],
      names_en: ['Death', 'Judgement'],
      text_uk: 'Знакова комбінація: Смерть + Суд — глибока трансформація та остаточне закриття великого життєвого розділу; кардинальне переродження.',
      text_en: 'Key combination: Death + Judgement — profound transformation and definitive closure of a major life chapter.',
    },
    {
      ids: ['s03', 'm19'],
      names_en: ['Three of Swords', 'The Sun'],
      text_uk: 'Знакова комбінація: Трійка Мечів + Сонце — очищення через біль та вихід із душевної кризи до ясності й зцілення.',
      text_en: 'Key combination: Three of Swords + The Sun — breakthrough from crisis into clarity and healing.',
    },
    {
      ids: ['m18', 'm02'],
      names_en: ['The Moon', 'The High Priestess'],
      text_uk: 'Знакова комбінація: Місяць + Верховна Жриця — посилена інтуїція, розкриття глибинних підсвідомих таємниць або застереження щодо самообману.',
      text_en: 'Key combination: The Moon + The High Priestess — heightened intuition and uncovering hidden truths.',
    },
    {
      ids: ['m01', 'm07'],
      names_en: ['The Magician', 'The Chariot'],
      text_uk: 'Знакова комбінація: Маг + Колісниця — намір і майстерність підкріплені рішучим швидким рухом до мети.',
      text_en: 'Key combination: The Magician + The Chariot — intention and skill backed by swift, decisive momentum.',
    },
    {
      ids: ['m03', 'm04'],
      names_en: ['The Empress', 'The Emperor'],
      text_uk: 'Знакова комбінація: Імператриця + Імператор — абсолютна гармонія творчого потенціалу та чіткої структури.',
      text_en: 'Key combination: The Empress + The Emperor — balance of creative flow and solid structure.',
    },
    {
      ids: ['m09', 'm18'],
      names_en: ['The Hermit', 'The Moon'],
      text_uk: 'Знакова комбінація: Пустельник + Місяць — глибокий період пошуку відповідей наодинці з собою, подолання ілюзій і страхів.',
      text_en: 'Key combination: The Hermit + The Moon — a solitary quest for truth, navigating illusions.',
    }
  ];

  function isMajor(card) {
    if (!card) return false;
    const id = String(card.id || '');
    if (id.startsWith('m')) return true;
    return card.type_en === 'Major Arcana' || card.type === 'Старший Аркан';
  }

  function getNumberRank(card) {
    if (!card || isMajor(card)) return null;
    const id = String(card.id || '');
    const num = parseInt(id.slice(1), 10);
    if (num >= 1 && num <= 10) return num;
    return null;
  }

  function getCourtRank(card) {
    if (!card || isMajor(card)) return null;
    const id = String(card.id || '');
    const num = parseInt(id.slice(1), 10);
    if (num === 11) return 'page';
    if (num === 12) return 'knight';
    if (num === 13) return 'queen';
    if (num === 14) return 'king';
    return null;
  }

  function elementOf(card) {
    if (!card) return null;
    if (card.element) return card.element.toLowerCase();
    const s = (card.suit_en || card.suit || '').toLowerCase();
    if (s.includes('wand') || s.includes('жезл')) return 'fire';
    if (s.includes('cup') || s.includes('кубк')) return 'water';
    if (s.includes('sword') || s.includes('меч')) return 'air';
    if (s.includes('pent') || s.includes('пента')) return 'earth';
    return null;
  }

  function cleanCardMeaning(c, isRev, lang) {
    if (!c) return '';
    let raw = isRev
      ? (lang === 'uk' ? (c.meaning_reversed || c.meaning_upright || '') : (c.meaning_reversed_en || c.meaning_upright_en || ''))
      : (lang === 'uk' ? (c.meaning_upright || '') : (c.meaning_upright_en || ''));
    if (!raw) return '';

    let firstPart = raw.split(/\n+/)[0].trim();
    firstPart = firstPart.replace(/^[^—–\-:]{2,40}[—–\-:]\s*/i, '');
    firstPart = firstPart.replace(/^[\s—–\-:,]+/, '');

    const cut = firstPart.search(/[.!?](\s|$)/);
    if (cut > 15 && cut < 180) {
      firstPart = firstPart.slice(0, cut + 1);
    } else if (firstPart.length > 140) {
      firstPart = firstPart.slice(0, 137).replace(/\s+\S*$/, '') + '…';
    }

    if (firstPart.length > 0) {
      firstPart = firstPart.charAt(0).toUpperCase() + firstPart.slice(1);
    }
    return firstPart.trim();
  }

  function buildContext(cards, spread) {
    const n = cards.length;
    let majorCount = 0;
    let reversedCount = 0;
    const elements = { fire: 0, water: 0, air: 0, earth: 0 };
    const numberCounts = {};
    const courtCounts = { page: 0, knight: 0, queen: 0, king: 0 };

    cards.forEach((c) => {
      if (isMajor(c)) {
        majorCount++;
      } else {
        const nr = getNumberRank(c);
        if (nr) numberCounts[nr] = (numberCounts[nr] || 0) + 1;
        const cr = getCourtRank(c);
        if (cr) courtCounts[cr]++;
      }

      if (c.reversed) reversedCount++;

      const el = elementOf(c);
      if (el && elements[el] !== undefined) {
        elements[el]++;
      }
    });

    const majorPct = n ? (majorCount / n) * 100 : 0;
    const reversedPct = n ? (reversedCount / n) * 100 : 0;
    const totalCourts = courtCounts.page + courtCounts.knight + courtCounts.queen + courtCounts.king;

    return {
      n,
      majorCount,
      majorPct,
      reversedCount,
      reversedPct,
      elements,
      numberCounts,
      courtCounts,
      totalCourts,
      first: cards[0] || null,
      last: cards[n - 1] || null,
      category: spread && spread.category,
      category_en: spread && spread.category_en,
      cards,
      spread: spread || {}
    };
  }

  function enhanceContext(ctx) {
    const cards = ctx.cards;
    ctx.cardAt = (i) => cards[i] || null;
    ctx.isMajorAt = (i) => isMajor(cards[i]);
    ctx.isRevAt = (i) => !!(cards[i] && cards[i].reversed);
    ctx.elAt = (i) => elementOf(cards[i]);
    ctx.nameAt = (i, lang) => {
      const c = cards[i];
      if (!c) return lang === 'uk' ? 'Карта' : 'Card';
      const n = lang === 'uk' ? (c.name || c.name_en) : (c.name_en || c.name);
      const rev = c.reversed ? (lang === 'uk' ? '(перевернута)' : '(reversed)') : (lang === 'uk' ? '(пряма)' : '(upright)');
      return (n || '?') + ' ' + rev;
    };
    ctx.shortMeaningAt = (i, lang) => {
      const c = cards[i];
      if (!c) return '';
      return cleanCardMeaning(c, !!c.reversed, lang);
    };
    ctx.labelAt = (i, lang) => {
      const name = ctx.nameAt(i, lang);
      const sense = ctx.shortMeaningAt(i, lang);
      if (!sense) return name;
      return name + ' — ' + sense;
    };
    return ctx;
  }

  // ─── CELTIC CROSS SYNTHESIS ────────────────────────────────────────────────
  function synthesizeCelticCross(ctx, lang) {
    const uk = lang === 'uk';
    const items = [];

    // 1. Ядро ситуації (Позиція 1 Серце + Позиція 2 Перешкода)
    const e1 = ctx.elAt(0);
    const e2 = ctx.elAt(1);
    const m1 = ELEMENT_META[e1] || { uk: 'стихія', en: 'element' };
    const m2 = ELEMENT_META[e2] || { uk: 'стихія', en: 'element' };
    const rev2 = ctx.isRevAt(1);
    const maj1 = ctx.isMajorAt(0);
    const maj2 = ctx.isMajorAt(1);

    let coreText = '';
    if (rev2) {
      coreText = uk
        ? `Ядро ситуації: Перешкода перевернута (${ctx.nameAt(1, 'uk')}) — опір є переважно внутрішнім: страх змін, невпевненість або старі звички. Подолавши внутрішній бар'єр, ви розблокуєте серце справи.`
        : `Core situation: The Obstacle is reversed (${ctx.nameAt(1, 'en')}) — resistance is primarily internal: fear of change, hesitation, or habit. Clearing inner friction unlocks the core matter.`;
    } else if (maj2 && !maj1) {
      coreText = uk
        ? `Ядро ситуації: Перешкода очолюється Старшим Арканом (${ctx.nameAt(1, 'uk')}), тоді як Серце є побутовим — зовнішні чинники та принципові обставини вимагають мудрості та адаптації, а не простого натиску.`
        : `Core situation: Obstacle carries a Major Arcana (${ctx.nameAt(1, 'en')}) over a Minor Heart — deeper external conditions demand adaptability rather than sheer force.`;
    } else if (e1 && e2 && e1 === e2) {
      coreText = uk
        ? `Ядро ситуації: Серце і Перешкода належать до однієї стихії (${m1.uk}) — надлишок однієї якості (забагато пристрасті, забагато аналізу або забагато емоцій) створює напругу. Потрібен баланс між діями та роздумами.`
        : `Core situation: Heart and Obstacle share the same element (${m1.en}) — an excess of one energy type creates tension. Seek balance.`;
    } else if ((e1 === 'fire' && e2 === 'water') || (e1 === 'water' && e2 === 'fire')) {
      coreText = uk
        ? `Ядро ситуації: Взаємодія Вогню та Води в центрі — емоційні переживання чи сумніви гальмують активний порив, або навпаки, поспіх заважає почути серце.`
        : `Core situation: Fire meets Water at the core — emotional sensitivity dampens direct action, or impulsive pace overrides heartfelt intuition.`;
    } else if ((e1 === 'fire' && e2 === 'air') || (e1 === 'air' && e2 === 'fire')) {
      coreText = uk
        ? `Ядро ситуації: Взаємодія Вогню та Повітря в центрі — ідеї стрімко заряджаються ентузіазмом. Важливо спрямувати цю енергію в одне русло, уникаючи поспіху.`
        : `Core situation: Fire meets Air at the core — ideas rapidly charge with passion. Channel this energy with focused intent.`;
    } else if ((e1 === 'water' && e2 === 'earth') || (e1 === 'earth' && e2 === 'water')) {
      coreText = uk
        ? `Ядро ситуації: Взаємодія Води та Землі в центрі — ситуація має міцну основу для поступового, стабільного та родючого розвитку.`
        : `Core situation: Water meets Earth at the core — fertile ground for steady, gradual development.`;
    } else {
      coreText = uk
        ? `Ядро ситуації: Взаємодія Серця (${m1.uk}) та Перешкоди (${m2.uk}) показує головну точку напруги, де закладено потенціал для зростання.`
        : `Core situation: Heart (${m1.en}) meets Obstacle (${m2.en}) marking the pivotal zone of growth.`;
    }
    items.push(coreText);

    // 2. Вісь психіки (Підсвідомість 3 ↔ Свідомість 5)
    const subEl = ctx.elAt(2);
    const conEl = ctx.elAt(4);
    const subRev = ctx.isRevAt(2);
    const conRev = ctx.isRevAt(4);
    const mSub = ELEMENT_META[subEl] || { uk: 'стихія', en: 'element' };
    const mCon = ELEMENT_META[conEl] || { uk: 'стихія', en: 'element' };

    let mindText = '';
    if (subEl && conEl && subEl !== conEl) {
      mindText = uk
        ? `Вісь психіки (Підсвідомість ↔ Свідомість): Підсвідомість звучить у стихії ${mSub.uk}, тоді як розум діє в стихії ${mCon.uk}. Ви можете раціонально пояснювати вибір, тоді як глибше відчуття прагне іншого. Синхронізуйте логіку з інтуїцією.`
        : `Psychological axis (Subconscious ↔ Conscious): Subconscious resonates in ${mSub.en}, while the conscious mind operates in ${mCon.en}. Align mental rationale with deep intuition.`;
    } else if (conRev) {
      mindText = uk
        ? `Вісь психіки: Свідомість у перевернутому положенні — суб’єктивні тривоги чи ментальні фільтри можуть спотворювати бачення фактів. Потрібна пауза для ясності думок.`
        : `Psychological axis: Conscious position reversed — mental anxieties or assumptions may blur objective facts.`;
    } else {
      mindText = uk
        ? `Вісь психіки: Внутрішні прагнення та усвідомлені цілі узгоджені між собою, що створює стабільну психологічну опору.`
        : `Psychological axis: Inner desires and conscious focus are aligned, providing steady inner support.`;
    }

    // Вплітаємо нумерологічні акценти без окремого заголовка
    const repeated = Object.entries(ctx.numberCounts).filter(([_, c]) => c >= 2);
    if (repeated.length) {
      repeated.sort((a, b) => b[1] - a[1]);
      const rank = parseInt(repeated[0][0], 10);
      const numAddUk = {
        1: ` Акцент на Тузах свідчить про потужний первинний імпульс для нових починань.`,
        2: ` Акцент на Двійках підкреслює тему вибору та пошуку партнерського балансу.`,
        3: ` Акцент на Трійках вказує на перші помітні результати та розширення горизонтів.`,
        4: ` Повторення Четвірок акцентує потребу в стабільності та захисті накопиченого ресурсу.`,
        5: ` Акцент на П'ятірках відображає кризу росту та необхідність подолання суперечностей.`,
        6: ` Акцент на Шістках приносить гармонізацію та вихід на світлу смугу.`,
        7: ` Акцент на Сімках вимагає терпіння та переоцінки поточної тактики.`,
        8: ` Акцент на Вісімках вказує на високу швидкість процесів та інтенсивну працю.`,
        9: ` Наявність Дев'яток підкреслює кульмінаційний етап, що вимагає самодостатності та рефлексії.`,
        10: ` Повторення Десяток віщує повне завершення великого життєвого циклу.`
      };
      if (numAddUk[rank]) {
        mindText += numAddUk[rank];
      }
    }
    items.push(mindText);

    // 3. Лінія часу (Минуле 4 → Найближче майбутнє 6)
    const pRev = ctx.isRevAt(3);
    const fMaj = ctx.isMajorAt(5);
    let timeText = '';
    if (pRev) {
      timeText = uk
        ? `Лінія часу (Минуле → Найближче майбутнє): Напруга або незавершені уроки минулого залишаються позаду — найближче майбутнє відкриває прямий, конструктивний розвиток подій.`
        : `Timeline (Past → Near Future): Past tensions and old blocks are being released — the near future offers clearer, forward-moving momentum.`;
    } else if (fMaj) {
      timeText = uk
        ? `Лінія часу: У найближчому майбутньому з’являється Старший Аркан (${ctx.nameAt(5, 'uk')}) — попереду важливий переломний момент або знакова подія.`
        : `Timeline: Major Arcana arriving in Near Future (${ctx.nameAt(5, 'en')}) — a pivotal milestone is rapidly approaching.`;
    } else {
      timeText = uk
        ? `Лінія часу: Ситуація плавно переходить від закладеного в минулому фундаменту до практичних кроків найближчого періоду.`
        : `Timeline: The situation progresses smoothly from past foundations toward near-term practical steps.`;
    }
    items.push(timeText);

    // 4. Баланс сил (Я та Оточення 7 vs 8)
    const envMaj = ctx.isMajorAt(7);
    const selfRev = ctx.isRevAt(6);
    let powerText = '';
    if (envMaj) {
      powerText = uk
        ? `Баланс сил (Я та Оточення): Оточення представлене Старшим Арканом (${ctx.nameAt(7, 'uk')}) — зовнішні чинники та люди мають вагомий вплив. Обирайте співпрацю та дипломатію замість прямої конфронтації.`
        : `Balance of power (Self & Environment): Strong Major Arcana in Environment (${ctx.nameAt(7, 'en')}) — outer factors hold significant weight. Seek diplomacy over confrontation.`;
    } else if (selfRev) {
      powerText = uk
        ? `Баланс сил: Ставлення до себе перевернуте — ви можете недооцінювати власні ресурси. Укріпіть внутрішню самооцінку перед прийняттям рішень.`
        : `Balance of power: Self-perception is reversed — you may underestimate your strengths. Reclaim confidence before deciding.`;
    } else {
      powerText = uk
        ? `Баланс сил: Між вашим внутрішнім станом та зовнішнім середовищем є здоровий баланс, що дає змогу вільно реалізовувати плани.`
        : `Balance of power: Healthy equilibrium between your stance and the surrounding environment.`;
    }
    items.push(powerText);

    // 5. Звірка очікувань (Надії/Страхи 9 ↔ Підсумок 10)
    const hRev = ctx.isRevAt(8);
    const oMaj = ctx.isMajorAt(9);
    const oRev = ctx.isRevAt(9);
    let expText = '';
    if (oMaj) {
      expText = uk
        ? `Звірка очікувань: Кінцевий підсумок увінчаний Старшим Арканом (${ctx.nameAt(9, 'uk')}) — результат матиме фундаментальне довгострокове значення і перевершить внутрішні побоювання.`
        : `Expectation check: The outcome is anchored by a Major Arcana (${ctx.nameAt(9, 'en')}) — results carry lasting significance beyond immediate doubts.`;
    } else if (!oRev && hRev) {
      expText = uk
        ? `Звірка очікувань: Тривоги у позиції «Надії та страхи» перебільшені — реальний Підсумок розкладу є набагато стабільнішим і сприятливішим, ніж малюють побоювання.`
        : `Expectation check: Fears in Hopes & Fears are amplified — the actual Outcome is more grounded and constructive than anticipated.`;
    } else {
      expText = uk
        ? `Звірка очікувань: Підсумок розкладу гармонійно підсумовує докладені зусилля та розкриває практичний результат ситуації.`
        : `Expectation check: The outcome reflects your invested efforts and clarifies the tangible result.`;
    }
    items.push(expText);

    // 6. Ключ розкладу
    const heart = ctx.labelAt(0, lang);
    const obs = ctx.labelAt(1, lang);
    const near = ctx.labelAt(5, lang);
    const out = ctx.labelAt(9, lang);
    const hope = ctx.labelAt(8, lang);

    const keyText = uk
      ? 'Ключ розкладу:\n' +
        '• Суть зараз: ' + heart + '\n' +
        '• Перешкода / виклик: ' + obs + '\n' +
        '• Найближчий розвиток: ' + near + '\n' +
        '• Надії та страхи: ' + hope + '\n' +
        '• Ймовірний підсумок: ' + out
      : 'Celtic Cross key:\n' +
        '• Core reality: ' + heart + '\n' +
        '• Obstacle / challenge: ' + obs + '\n' +
        '• Near development: ' + near + '\n' +
        '• Hopes & fears: ' + hope + '\n' +
        '• Likely outcome: ' + out;
    items.push(keyText);

    // 7. Головний фокус / Вектор дій
    let focusText = '';
    if (maj2 && !maj1) {
      focusText = uk
        ? 'Головний фокус: Не бійтеся трансформацій у перешкоді — розгляньте виклик як можливість вийти на новий рівень зрілості.'
        : 'Main focus: Embrace the obstacle’s lesson — view the challenge as an invitation to mature.';
    } else if (oMaj) {
      focusText = uk
        ? 'Головний фокус: Орієнтуйтеся на велику мету підсумку, не розпилюючись на тимчасові хвилювання середини шляху.'
        : 'Main focus: Keep your eyes on the broader outcome rather than temporary mid-way noise.';
    } else if (ctx.reversedCount >= 4) {
      focusText = uk
        ? 'Головний фокус: Зробіть ревізію внутрішніх установок — ситуація вирівняється, щойно ви відпустите бажання все контролювати.'
        : 'Main focus: Reset internal expectations — clarity arrives once overcontrol is released.';
    } else {
      focusText = uk
        ? 'Головний фокус: Від суті ситуації зробіть один виважений крок до найближчого майбутнього, спираючись на наявні ресурси.'
        : 'Main focus: From the core, take one measured step towards the near future, grounded in current resources.';
    }
    items.push(focusText);

    return items;
  }

  // ─── GENERAL FALLBACK SPREAD SYNTHESIS ────────────────────────────────────
  function synthesizeGeneralSpread(ctx, lang) {
    const uk = lang === 'uk';
    const items = [];

    // Arcana & general tone
    if (ctx.majorPct > 50) {
      items.push(uk
        ? `Рівень процесу: Висока концентрація Старших Арканів (${ctx.majorCount} з ${ctx.n}) — ситуація несе доленосний, трансформаційний характер.`
        : `Process level: High concentration of Major Arcana (${ctx.majorCount} of ${ctx.n}) — deep transformative phase.`);
    } else {
      items.push(uk
        ? `Рівень процесу: Перевага Молодших Арканів — розвиток подій повністю залежить від ваших щоденних практичних рішень.`
        : `Process level: Minor Arcana dominate — the outcome is directly in your hands and shaped by daily choices.`);
    }

    // Flow from start to finish
    if (ctx.first && ctx.last && ctx.n >= 3) {
      const e1 = elementOf(ctx.first);
      const e2 = elementOf(ctx.last);
      if (e1 && e2 && e1 !== e2) {
        const m1 = ELEMENT_META[e1]?.uk || '';
        const m2 = ELEMENT_META[e2]?.uk || '';
        items.push(uk
          ? `Динаміка розкладу (${m1} → ${m2}): вихідна енергія змінює свою якість на шляху до завершення.`
          : `Spread dynamics: energy evolves from start to finish.`);
      }
    }

    // Combos
    analyzeCombos(ctx, lang).forEach(c => items.push(c));

    // Summary advice
    items.push(uk
      ? 'Головний фокус: Визначте провідний висновок із розкладу та зробіть наступний конкретний крок протягом 24–48 годин.'
      : 'Main focus: Identify the key insight and take the next practical step within 24–48 hours.');

    return items;
  }

  function analyzeCombos(ctx, lang) {
    const uk = lang === 'uk';
    const ids = new Set(ctx.cards.map((c) => c.id));
    const names = new Set(ctx.cards.map((c) => (c.name_en || '').toLowerCase()));
    const out = [];

    COMBOS.forEach((combo) => {
      const byId = combo.ids.every((id) => ids.has(id));
      const byName = combo.names_en.every((n) => names.has(n.toLowerCase()));
      if (byId || byName) out.push(uk ? combo.text_uk : combo.text_en);
    });
    return out;
  }

  function analyzeReading(cards, spread, lang) {
    if (!cards || !cards.length) {
      return { items: [], paragraphs: [], specific: [], stats: null };
    }
    const ctx = enhanceContext(buildContext(cards, spread || {}));
    const slug = (spread && spread.slug) || '';

    let items = [];
    if (slug === 'celtic-cross' && cards.length >= 10) {
      items = synthesizeCelticCross(ctx, lang);
    } else {
      items = synthesizeGeneralSpread(ctx, lang);
    }

    return {
      items: items.filter(Boolean),
      paragraphs: items.filter(Boolean), // backward compatibility
      specific: [],
      stats: {
        majorCount: ctx.majorCount,
        majorPct: Math.round(ctx.majorPct),
        reversedCount: ctx.reversedCount,
        reversedPct: Math.round(ctx.reversedPct),
        n: ctx.n,
        slug: slug,
      },
    };
  }

  global.TarotAnalysis = {
    analyzeReading,
    buildContext,
    cleanCardMeaning,
    isMajor,
    elementOf,
  };
})(typeof window !== 'undefined' ? window : globalThis);
