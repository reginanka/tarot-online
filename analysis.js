/**
 * analysis.js — automated reading synthesis for tarot-online
 * Provides deep synthesis: Major vs Minor balance, Elemental Alchemy & Interactions,
 * Court cards, Numerology clusters, Reversals, Arcana transitions, Combinations,
 * and Spread-specific position dynamics (Celtic Cross, Relationships, Career, 3-Cards, etc.).
 */
(function (global) {
  'use strict';

  const ELEMENT_META = {
    fire:  { uk: 'Вогонь', en: 'Fire',  suit_uk: 'Жезли', suit_en: 'Wands', emoji: '🔥' },
    water: { uk: 'Вода',   en: 'Water', suit_uk: 'Кубки', suit_en: 'Cups',  emoji: '💧' },
    air:   { uk: 'Повітря',en: 'Air',   suit_uk: 'Мечі',  suit_en: 'Swords', emoji: '💨' },
    earth: { uk: 'Земля',  en: 'Earth', suit_uk: 'Пентаклі', suit_en: 'Pentacles', emoji: '🌱' },
  };

  const COMBOS = [
    {
      ids: ['m06', 'm15'], // Lovers + Devil
      names_en: ['The Lovers', 'The Devil'],
      text_uk: 'Виявлено комбінацію Закохані + Диявол — залежні стосунки, спокуса або болісний вибір між миттєвою пристрастю та справжньою цінністю.',
      text_en: 'Combination The Lovers + The Devil detected — codependent relationship, temptation, or a sharp choice between raw passion and true value.',
    },
    {
      ids: ['m16', 'm10'], // Tower + Wheel
      names_en: ['The Tower', 'Wheel of Fortune'],
      text_uk: 'Виявлено комбінацію Вежа + Колесо Фортуни — раптові незворотні зміни, форс-мажорний поворот долі, який руйнує старе заради нового циклу.',
      text_en: 'Combination The Tower + Wheel of Fortune detected — sudden irreversible changes, a fateful twist breaking old structures.',
    },
    {
      ids: ['m13', 'm20'], // Death + Judgement
      names_en: ['Death', 'Judgement'],
      text_uk: 'Виявлено комбінацію Смерть + Суд — глибока трансформація та остаточне закриття великого життєвого розділу; кардинальне переродження.',
      text_en: 'Combination Death + Judgement detected — profound transformation and definitive closure of a major life chapter; full rebirth.',
    },
    {
      ids: ['s03', 'm19'], // 3 of Swords + Sun
      names_en: ['Three of Swords', 'The Sun'],
      text_uk: 'Виявлено комбінацію Трійка Мечів + Сонце — очищення через біль та вихід із душевної кризи до абсолютної ясності й зцілення.',
      text_en: 'Combination Three of Swords + The Sun detected — healing through pain and breakthrough from crisis into clarity.',
    },
    {
      ids: ['m18', 'm02'], // Moon + High Priestess
      names_en: ['The Moon', 'The High Priestess'],
      text_uk: 'Виявлено комбінацію Місяць + Верховна Жриця — посилена інтуїція, розкриття глибинних підсвідомих таємниць або застереження щодо самообману.',
      text_en: 'Combination The Moon + The High Priestess detected — heightened intuition, unveiling of deep secrets, or warning against illusion.',
    },
    {
      ids: ['m01', 'm07'], // Magician + Chariot
      names_en: ['The Magician', 'The Chariot'],
      text_uk: 'Виявлено комбінацію Маг + Колісниця — потужний вектор реалізації: намір і майстерність підкріплені рішучим швидким рухом до мети.',
      text_en: 'Combination The Magician + The Chariot detected — unstoppable momentum: intention and skill backed by swift, decisive drive.',
    },
    {
      ids: ['m03', 'm04'], // Empress + Emperor
      names_en: ['The Empress', 'The Emperor'],
      text_uk: 'Виявлено союз Імператриця + Імператор — абсолютна гармонія творчого потенціалу та чіткої структури (ідеальний союз форми й наповнення).',
      text_en: 'Combination The Empress + The Emperor detected — balance of fertile creativity and solid structure.',
    },
    {
      ids: ['m09', 'm18'], // Hermit + Moon
      names_en: ['The Hermit', 'The Moon'],
      text_uk: 'Виявлено комбінацію Пустельник + Місяць — глибокий період пошуку відповідей наодинці з собою, розплутування ілюзій і страхів.',
      text_en: 'Combination The Hermit + The Moon detected — a solitary quest for truth, navigating illusions and facing inner fears.',
    }
  ];

  const MISSING_BY_CATEGORY = {
    "Кар'єра та Фінанси": {
      earth: {
        uk: 'Брак Землі у фінансово-робочому контексті — ідеям бракує практичного заземлення, бюджетного прорахунку та дисципліни.',
        en: 'Missing Earth in career & finance — ideas lack concrete grounding, budgeting, and tangible discipline.',
      },
      water: {
        uk: 'Брак Води в роботі — сухий прагматизм, емоційне вигорання або відсутність психологічного контакту в команді.',
        en: 'Missing Water in work — cold pragmatism, emotional burnout, or lack of team rapport.',
      },
      fire: {
        uk: 'Брак Вогню в проєктах — дефіцит сміливості, натхнення та первинного імпульсу; ризик застрягнути в рутині.',
        en: 'Missing Fire in projects — deficit of drive, inspiration, and bold initiative; risk of stalling.',
      },
      air: {
        uk: 'Брак Повітря в бізнесі — відсутність чіткої стратегії, слабка комунікація чи аналітичний прорахунок дій.',
        en: 'Missing Air in business — lack of clear strategy, weak communication, or neglected analysis.',
      },
    },
    'Кохання та Стосунки': {
      earth: {
        uk: 'Брак Землі в стосунках — романтичні мрії без спільної опори, реальних планів на побут чи стабільних зобов’язань.',
        en: 'Missing Earth in relationships — romantic dreams without shared roots, daily life stability, or commitments.',
      },
      water: {
        uk: 'Брак Води в любові — емоційна відстороненість, брак ніжності, спроба вирішувати почуття суто логікою чи контролем.',
        en: 'Missing Water in love — emotional detachment, coldness, trying to manage feelings through pure logic.',
      },
      fire: {
        uk: 'Брак Вогню в парі — згасання пристрасті, побутова рутина, відсутність живого інтересу та ініціативи.',
        en: 'Missing Fire in a couple — fading passion, routine, absence of spark and adventurous drive.',
      },
      air: {
        uk: 'Брак Повітря в стосунках — замовчування образ, нерозуміння, відсутність чесного прямого діалогу.',
        en: 'Missing Air in relationships — unspoken grievances, misunderstanding, lack of candid communication.',
      },
    },
    'Психологія': {
      earth: {
        uk: 'Брак Землі — відчуття втрати опори, відрив від тіла, хаотичність у щоденному ритмі.',
        en: 'Missing Earth — loss of ground, disconnection from physical body, chaotic routine.',
      },
      water: {
        uk: 'Брак Води — придушення або ігнорування власних почуттів; блокування емоційного проживання.',
        en: 'Missing Water — suppression or denial of feelings; blocked emotional release.',
      },
      fire: {
        uk: 'Брак Вогню — внутрішня апатія, виснаження внутрішнього «хочу», зниження життєвого тонусу.',
        en: 'Missing Fire — internal apathy, drained enthusiasm, loss of vital drive.',
      },
      air: {
        uk: 'Брак Повітря — труднощі з об’єктивною оцінкою себе, плутанина в думках, зацикленість на переживаннях.',
        en: 'Missing Air — difficulty objectively assessing situations, mental fog, getting stuck in loops.',
      },
    },
    "Духовність та Здоров'я": {
      earth: {
        uk: 'Брак Землі — нехтування сигналами фізичного тіла, потреба в режимі сну, харчуванні та заземленні.',
        en: 'Missing Earth — ignoring bodily signals; need for stable rest, nutrition, and physical grounding.',
      },
      water: {
        uk: 'Брак Води — сухість духу, ігнорування інтуїтивних підказок та потреби в душевному очищенні.',
        en: 'Missing Water — spiritual dryness, ignoring intuitive guidance and emotional cleansing.',
      },
      fire: {
        uk: 'Брак Вогню — спад вітальної сили, відсутність духовного ентузіазму та внутрішнього вогника.',
        en: 'Missing Fire — drop in vitality, lack of spiritual enthusiasm and inner light.',
      },
      air: {
        uk: 'Брак Повітря — брак ясності свідомості, відсутність духовних орієнтирів та чітких усвідомлень.',
        en: 'Missing Air — lack of mental clarity, obscured spiritual direction and deeper awareness.',
      },
    },
  };

  const MISSING_DEFAULT = {
    earth: {
      uk: 'У розкладі відсутня стихія Землі — бракує заземлення, терпіння та матеріальної фіксації результату.',
      en: 'No Earth element in spread — missing grounding, patience, and tangible manifestation.',
    },
    water: {
      uk: 'У розкладі відсутня стихія Води — емоційна сфера заблокована або відсунута на другий план.',
      en: 'No Water element in spread — emotional realm is muted or pushed aside.',
    },
    fire: {
      uk: 'У розкладі відсутня стихія Вогню — не вистачає драйву, пристрасті та рішучої ініціативи.',
      en: 'No Fire element in spread — lacking drive, passion, and decisive initiative.',
    },
    air: {
      uk: 'У розкладі відсутня стихія Повітря — бракує ясності думки, комунікації та системного аналізу.',
      en: 'No Air element in spread — lacking clear thinking, communication, and systematic insight.',
    },
  };

  const DOMINANT_TEXT = {
    fire: {
      uk: 'Домінує Вогонь (Жезли) — розклад заряджений на активні дії, пристрасть, сміливість та імпульсивні кроки.',
      en: 'Fire (Wands) dominates — spread is charged with dynamic action, passion, boldness, and impulsive drive.',
    },
    water: {
      uk: 'Домінує Вода (Кубки) — у фокусі глибинні почуття, інтуїція, сердечні зв’язки та внутрішні переживання.',
      en: 'Water (Cups) dominates — focal point is deep emotion, intuition, heart connections, and inner feelings.',
    },
    air: {
      uk: 'Домінує Повітря (Мечі) — час аналітики, ментальної ясності, пошуку істини або гострих інтелектуальних рішень.',
      en: 'Air (Swords) dominates — period of analysis, mental clarity, truth-seeking, or sharp intellectual choices.',
    },
    earth: {
      uk: 'Домінує Земля (Пентаклі) — акцент на матеріальних опорах, стабільності, здоров’ї, практичних плодах та терпінні.',
      en: 'Earth (Pentacles) dominates — focus on material foundations, stability, practical results, and patience.',
    },
  };

  // Elemental interactions (Alchemy of pairs)
  const ELEMENT_INTERACTIONS = {
    'fire-air': {
      uk: 'Взаємодія Вогню та Повітря: роздування полум’я — ідеї стрімко заряджаються ентузіазмом і переходять у дію. Стережіться поспішного вигорання.',
      en: 'Fire + Air interaction: fan the flame — ideas rapidly turn into action. Guard against burnout.',
    },
    'water-earth': {
      uk: 'Взаємодія Води та Землі: родючий ґрунт — почуття та творчі задуми отримують надійну матеріальну форму і довгострокову стабільність.',
      en: 'Water + Earth interaction: fertile soil — emotions and creative ideas gain steady material form and lasting security.',
    },
    'fire-water': {
      uk: 'Взаємодія Вогню та Води: кипіння та пара — пристрасть стикається з чутливістю. Можливий внутрішній конфлікт між бажанням тиснути вперед і потребою в паузі.',
      en: 'Fire + Water interaction: steam and tension — passion clashes with sensitivity. Balance drive with emotional vulnerability.',
    },
    'air-earth': {
      uk: 'Взаємодія Повітря та Землі: тверезий прагматизм — холодний розрахунок і чітке планування. Важливо не втратити живе натхнення за цифрами й правилами.',
      en: 'Air + Earth interaction: pragmatic realism — careful logic and solid structures. Avoid over-dry rigidity.',
    },
    'fire-earth': {
      uk: 'Взаємодія Вогню та Землі: загартування форми — амбіції зустрічаються з матеріальною реальністю; енергія дає стійкий довговічний результат.',
      en: 'Fire + Earth interaction: shaping clay — high ambition meets physical discipline to build lasting achievements.',
    },
    'air-water': {
      uk: 'Взаємодія Повітря та Води: хвилі думок — розум намагається аналізувати почуття. Остерігайтеся накручування тривог і довіртеся первинному відчуттю.',
      en: 'Air + Water interaction: churning currents — intellect rationalizing deep feelings. Avoid overthinking instincts.',
    },
  };

  function isMajor(card) {
    if (!card) return false;
    const id = String(card.id || '');
    if (id.startsWith('m')) return true;
    return card.type_en === 'Major Arcana' || card.type === 'Старший Аркан';
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

  function getNumberRank(card) {
    if (!card || isMajor(card)) return null;
    const id = String(card.id || '');
    const num = parseInt(id.slice(1), 10);
    if (num >= 1 && num <= 10) return num;
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

  /**
   * Clean and normalize card summary meaning without duplicate names or broken prefixes
   */
  function cleanCardMeaning(c, isRev, lang) {
    if (!c) return '';
    let raw = isRev
      ? (lang === 'uk' ? (c.meaning_reversed || c.meaning_upright || '') : (c.meaning_reversed_en || c.meaning_upright_en || ''))
      : (lang === 'uk' ? (c.meaning_upright || '') : (c.meaning_upright_en || ''));
    if (!raw) return '';

    let firstPart = raw.split(/\n+/)[0].trim();
    // Normalize dashes and apostrophes for clean regex matching
    firstPart = firstPart.replace(/^[^—–\-:]{2,40}[—–\-:]\s*/i, '');
    firstPart = firstPart.replace(/^[\s—–\-:,]+/, '');

    const cut = firstPart.search(/[.!?](\s|$)/);
    if (cut > 15 && cut < 180) {
      firstPart = firstPart.slice(0, cut + 1);
    } else if (firstPart.length > 140) {
      firstPart = firstPart.slice(0, 137).replace(/\s+\S*$/, '') + '…';
    }

    // Capitalize first letter cleanly
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
    const courtCounts = { page: 0, knight: 0, queen: 0, king: 0 };
    const numberCounts = {};

    cards.forEach((c) => {
      if (isMajor(c)) {
        majorCount++;
      } else {
        const cr = getCourtRank(c);
        if (cr) courtCounts[cr]++;
        const nr = getNumberRank(c);
        if (nr) numberCounts[nr] = (numberCounts[nr] || 0) + 1;
      }

      if (c.reversed) reversedCount++;

      const el = elementOf(c);
      if (el && elements[el] !== undefined) {
        elements[el]++;
      }
    });

    const majorPct = n ? (majorCount / n) * 100 : 0;
    const reversedPct = n ? (reversedCount / n) * 100 : 0;

    const totalEl = elements.fire + elements.water + elements.air + elements.earth;
    let dominant = null;
    let dominantPct = 0;
    let secondary = null;
    let secondaryPct = 0;

    const sortedEl = Object.entries(elements).sort((a, b) => b[1] - a[1]);
    if (totalEl > 0 && sortedEl[0][1] > 0) {
      dominant = sortedEl[0][0];
      dominantPct = (sortedEl[0][1] / totalEl) * 100;
      if (sortedEl[1] && sortedEl[1][1] > 0 && sortedEl[1][1] >= 2) {
        secondary = sortedEl[1][0];
        secondaryPct = (sortedEl[1][1] / totalEl) * 100;
      }
    }

    const missing = [];
    if (n >= 4) {
      for (const k of ['fire', 'water', 'air', 'earth']) {
        if (elements[k] === 0) missing.push(k);
      }
    }

    const totalCourts = courtCounts.page + courtCounts.knight + courtCounts.queen + courtCounts.king;

    return {
      n,
      majorCount,
      majorPct,
      reversedCount,
      reversedPct,
      elements,
      totalEl,
      dominant,
      dominantPct,
      secondary,
      secondaryPct,
      missing,
      courtCounts,
      totalCourts,
      numberCounts,
      first: cards[0] || null,
      last: cards[n - 1] || null,
      category: spread && spread.category,
      category_en: spread && spread.category_en,
      cards,
    };
  }

  function enhanceContext(ctx) {
    const cards = ctx.cards;
    ctx.cardAt = (i) => cards[i] || null;
    ctx.isMajorAt = (i) => isMajor(cards[i]);
    ctx.isRevAt = (i) => !!(cards[i] && cards[i].reversed);
    ctx.elAt = (i) => elementOf(cards[i]);
    ctx.countMajors = (idxs) => idxs.filter((i) => isMajor(cards[i])).length;
    ctx.countRev = (idxs) => idxs.filter((i) => cards[i] && cards[i].reversed).length;
    ctx.pickVariant = (variants, lang) => {
      if (!variants || !variants.length) return null;
      const v = variants[Math.floor(Math.random() * variants.length)];
      return lang === 'uk' ? v.uk : v.en;
    };
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

  function analyzeMajorShare(ctx, lang) {
    const p = ctx.majorPct;
    const uk = lang === 'uk';
    if (ctx.n === 1) {
      if (isMajor(ctx.first)) {
        return uk
          ? 'Єдина карта — Старший Аркан: акцент на доленосному, символічному уроці моменту, що виходить за межі побутової рутини.'
          : 'The single card is a Major Arcana: emphasis on a fateful, symbolic lesson extending beyond everyday routine.';
      }
      return uk
        ? 'Єдина карта — Молодший Аркан: відповідь лежить у площині конкретних щоденних дій і вашого безпосереднього вибору.'
        : 'The single card is a Minor Arcana: the answer lies in concrete everyday actions and your immediate choice.';
    }
    if (p < 25 || ctx.majorCount === 0) {
      return uk
        ? `Старших Арканів мало (${ctx.majorCount} з ${ctx.n}, ~${Math.round(p)}%) — ситуація цілком керована вашими щоденними рішеннями та практичними діями.`
        : `Few Major Arcana (${ctx.majorCount} of ${ctx.n}, ~${Math.round(p)}%) — the situation is largely in your hands and shaped by practical decisions.`;
    }
    if (p <= 55) {
      return uk
        ? `Гармонійний баланс Старших і Молодших Арканів (${ctx.majorCount} з ${ctx.n}, ~${Math.round(p)}%) — особистий вибір діє в синергії із зовнішніми обставинами.`
        : `Balanced mix of Major and Minor Arcana (${ctx.majorCount} of ${ctx.n}, ~${Math.round(p)}%) — your personal choices align with unfolding outer circumstances.`;
    }
    return uk
      ? `Висока частка Старших Арканів (${ctx.majorCount} з ${ctx.n}, ~${Math.round(p)}%) — глибокий трансформаційний період; ситуація несе кармічний або доленосний характер.`
      : `High share of Major Arcana (${ctx.majorCount} of ${ctx.n}, ~${Math.round(p)}%) — a profound transformative phase; larger archetypal forces are at work.`;
  }

  function analyzeCourtCards(ctx, lang) {
    if (ctx.n < 4 || ctx.totalCourts === 0) return null;
    const uk = lang === 'uk';
    const c = ctx.courtCounts;
    const total = ctx.totalCourts;

    if (total >= 3) {
      if (c.king + c.queen >= 2) {
        return uk
          ? `Багато фігурних карт зрілості (${total} придворних карт) — сильний вплив авторитетів, керівників чи наставників, або потреба взяти ситуацію під зрілий особистий контроль.`
          : `High presence of mature court cards (${total} court cards) — strong influence of leaders or mentors, or a call to step into mature leadership.`;
      }
      if (c.knight + c.page >= 2) {
        return uk
          ? `Присутність молодих придворних енергій (${total} карт) — період навчання, швидких новин, динамічних викликів та перевірки на гнучкість.`
          : `Dynamic court energies present (${total} court cards) — time of fast news, learning curves, and active challenges.`;
      }
      return uk
        ? `Багато придворних карт (${total} з ${ctx.n}) — розвиток подій значною мірою залежить від соціального оточення, домовленостей та ролей інших людей.`
        : `Multiple court cards (${total} of ${ctx.n}) — the outcome strongly depends on interpersonal dynamics and surrounding people.`;
    }
    return null;
  }

  function analyzeNumberClusters(ctx, lang) {
    if (ctx.n < 5) return null;
    const uk = lang === 'uk';
    const nums = ctx.numberCounts;

    const pairs = Object.entries(nums).filter(([_, count]) => count >= 2);
    if (!pairs.length) return null;

    // Pick most prominent
    pairs.sort((a, b) => b[1] - a[1]);
    const [rankStr, count] = pairs[0];
    const rank = parseInt(rankStr, 10);

    const MEANINGS_UK = {
      1: `Повторення Тузів (${count}) — надзвичайно потужний імпульс для нових починань і свіжих можливостей.`,
      2: `Акцент на Двійках (${count}) — тема вибору, партнерства та пошуку внутрішнього балансу.`,
      3: `Акцент на Трійках (${count}) — перші помітні плоди праці, співпраця та розширення горизонтів.`,
      4: `Акцент на Четвірках (${count}) — фокус на стабільності, захисті накопиченого ресурсу та закріпленні кордонів.`,
      5: `Акцент на П'ятірках (${count}) — період кризи зростання, перевірки на міцність та подолання суперечностей.`,
      6: `Акцент на Шістках (${count}) — відновлення гармонії, взаємна підтримка, подарунки долі та вихід на світлу смугу.`,
      7: `Акцент на Сімках (${count}) — самоаналіз, переоцінка стратегії, терпіння та подолання внутрішніх викликів.`,
      8: `Акцент на Вісімках (${count}) — висока інтенсивність, активна праця, швидкість або фокус на майстерності.`,
      9: `Акцент на Дев'ятках (${count}) — кульмінаційний етап, передфінальна фаза, самодостатність та глибока рефлексія.`,
      10: `Повторення Десяток (${count}) — повне завершення великого життєвого циклу та готовність до переходу на новий рівень.`,
    };

    const MEANINGS_EN = {
      1: `Aces cluster (${count}) — powerful impulse for brand new beginnings and fresh potentials.`,
      2: `Twos cluster (${count}) — central theme of choice, partnership, and finding balance.`,
      3: `Threes cluster (${count}) — first visible fruits of labor, teamwork, and expanding horizons.`,
      4: `Fours cluster (${count}) — focus on stability, consolidation, and protecting safe boundaries.`,
      5: `Fives cluster (${count}) — period of growth crisis, testing resilience, and resolving friction.`,
      6: `Sixes cluster (${count}) — restoring harmony, mutual support, and emerging into calmer waters.`,
      7: `Sevens cluster (${count}) — inner assessment, refining tactics, and patient perseverance.`,
      8: `Eights cluster (${count}) — high intensity, focused craftsmanship, or swift forward pace.`,
      9: `Nines cluster (${count}) — culmination, penultimate stage, autonomy, and deep reflection.`,
      10: `Tens cluster (${count}) — complete closure of a major cycle and readiness for a higher tier.`,
    };

    return uk ? MEANINGS_UK[rank] : MEANINGS_EN[rank];
  }

  function analyzeElements(ctx, lang) {
    const lines = [];
    const uk = lang === 'uk';

    // Dominant element
    if (ctx.dominant && ctx.dominantPct >= 35 && ctx.totalEl >= 2) {
      const t = DOMINANT_TEXT[ctx.dominant];
      if (t) lines.push(uk ? t.uk : t.en);
    }

    // Elemental pair alchemy (Dominant + Secondary)
    if (ctx.dominant && ctx.secondary && ctx.dominant !== ctx.secondary) {
      const pairKey1 = `${ctx.dominant}-${ctx.secondary}`;
      const pairKey2 = `${ctx.secondary}-${ctx.dominant}`;
      const interaction = ELEMENT_INTERACTIONS[pairKey1] || ELEMENT_INTERACTIONS[pairKey2];
      if (interaction) {
        lines.push(uk ? interaction.uk : interaction.en);
      }
    }

    // Missing elements
    if (ctx.n >= 4 && ctx.missing.length) {
      const table = MISSING_BY_CATEGORY[ctx.category] || MISSING_DEFAULT;
      ctx.missing.forEach((el) => {
        const row = (table[el] || MISSING_DEFAULT[el]);
        if (row) lines.push(uk ? row.uk : row.en);
      });
    }

    return lines;
  }

  function analyzeSequence(ctx, lang) {
    if (ctx.n < 3 || !ctx.first || !ctx.last) return null;
    const uk = lang === 'uk';
    const startMaj = isMajor(ctx.first);
    const endMaj = isMajor(ctx.last);
    let typeLine = null;

    if (!startMaj && endMaj) {
      typeLine = uk
        ? 'Вектор розкладу (Молодший → Старший): побутова ситуація переростає у важливий стратегічний або доленосний досвід.'
        : 'Spread vector (Minor → Major): everyday beginnings escalate into a strategic or fateful milestone.';
    } else if (startMaj && !endMaj) {
      typeLine = uk
        ? 'Вектор розкладу (Старший → Молодший): глобальний процес переходить у площину конкретних практичних кроків і щоденного втілення.'
        : 'Spread vector (Major → Minor): a high-level spiritual process grounds into concrete practical steps.';
    }

    const e1 = elementOf(ctx.first);
    const e2 = elementOf(ctx.last);
    let elLine = null;
    if (e1 && e2 && e1 !== e2) {
      const a = ELEMENT_META[e1];
      const b = ELEMENT_META[e2];
      elLine = uk
        ? `Динаміка стихій: ${a.uk} ${a.emoji} → ${b.uk} ${b.emoji} — вихідний імпульс змінює свою природу у фіналі розкладу.`
        : `Elemental transition: ${a.en} ${a.emoji} → ${b.en} ${b.emoji} — the initial spark evolves in quality towards the outcome.`;
    }

    if (!typeLine && !elLine) return null;
    return [typeLine, elLine].filter(Boolean).join(' ');
  }

  function analyzeReversed(ctx, lang) {
    const uk = lang === 'uk';
    const p = ctx.reversedPct;
    if (ctx.reversedCount === 0) {
      return uk
        ? 'Усі карти прямі — енергія тече вільно, відсутній глибокий внутрішній саботаж, події розвиваються природним шляхом.'
        : 'All cards upright — energy flows freely with minimal internal resistance; events develop naturally.';
    }
    if (p > 50) {
      return uk
        ? `Більшість карт перевернуті (${ctx.reversedCount} з ${ctx.n}, ~${Math.round(p)}%) — сильний внутрішній опір, неприйняття ситуації або затримки через сумніви.`
        : `Majority of cards reversed (${ctx.reversedCount} of ${ctx.n}, ~${Math.round(p)}%) — notable internal resistance, doubt, or blocked flow.`;
    }
    return uk
      ? `Помірний рівень перевернутих карт (${ctx.reversedCount} з ${ctx.n}, ~${Math.round(p)}%) — локальні затримки чи точки внутрішнього опрацювання без повної зупинки.`
      : `Moderate reversed presence (${ctx.reversedCount} of ${ctx.n}, ~${Math.round(p)}%) — localized doubts or internal checkpoints rather than a roadblock.`;
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

  function actionVector(ctx, lang) {
    const uk = lang === 'uk';
    const cat = ctx.category || '';
    const highRev = ctx.reversedPct > 50;
    const noEarth = ctx.missing.includes('earth');
    const noFire = ctx.missing.includes('fire');
    const noWater = ctx.missing.includes('water');
    const noAir = ctx.missing.includes('air');

    if (cat === "Кар'єра та Фінанси" || cat === 'Career & Finance') {
      if (noEarth) {
        return uk
          ? 'Вектор дії (Кар’єра): не залишайте плани в теорії — складіть календар із дедлайнами та зафіксуйте бюджет на найближчий тиждень.'
          : 'Action vector (Career): ground your ideas — draft a timeline with milestones and budget for the upcoming week.';
      }
      if (highRev) {
        return uk
          ? 'Вектор дії (Кар’єра): зніміть внутрішній перфекціонізм і страх критики. Почніть з одного базового кроку без зайвого тиску.'
          : 'Action vector (Career): ease internal perfectionism and fear of mistakes. Begin with one steady, low-pressure step.';
      }
      if (noFire) {
        return uk
          ? 'Вектор дії (Кар’єра): поверніть мотивацію через швидку 30-хвилинну дію, яка дасть швидкий надихаючий результат.'
          : 'Action vector (Career): reignite motivation with a swift 30-minute task that delivers instant momentum.';
      }
      return uk
        ? 'Вектор дії (Кар’єра): оберіть головний робочий пріоритет та завершіть одну ключову задачу до кінця тижня.'
        : 'Action vector (Career): select one prime priority and bring one tangible deliverable to completion this week.';
    }

    if (cat === 'Кохання та Стосунки' || cat === 'Love & Relationships') {
      if (noWater) {
        return uk
          ? 'Вектор дії (Стосунки): говоріть від серця — поділіться справжніми почуттями та вразливістю замість сухого з’ясування стосунків.'
          : 'Action vector (Relationships): speak from the heart — express genuine vulnerability instead of analytical debates.';
      }
      if (noAir) {
        return uk
          ? 'Вектор дії (Стосунки): ініціюйте спокійний, відкритий діалог без претензій — ясність розвіє більшість прихованих сумнівів.'
          : 'Action vector (Relationships): initiate a calm, honest conversation — clarity dispels hidden doubts.';
      }
      if (highRev) {
        return uk
          ? 'Вектор дії (Стосунки): відпустіть образу та контроль — трансформація контакту починається з вашої внутрішньої готовності прийняти партнера.'
          : 'Action vector (Relationships): release old resentment and overcontrol — intimacy begins with open inner acceptance.';
      }
      return uk
        ? 'Вектор дії (Стосунки): тримайте гармонію між чуйністю та чіткими особистими кордонами.'
        : 'Action vector (Relationships): maintain harmony between loving empathy and healthy personal boundaries.';
    }

    if (cat === 'Психологія' || cat === 'Psychology') {
      return uk
        ? 'Вектор дії (Психологія): зверніть увагу на повторюваний патерн поведінки і спробуйте відреагувати на знайомий тригер по-новому.'
        : 'Action vector (Psychology): notice repeating behavioral triggers and consciously choose a new response pattern.';
    }

    if (cat === "Духовність та Здоров'я" || cat === 'Spirituality & Health') {
      return uk
        ? 'Вектор дії (Здоров’я та Дух): відновіть зв’язок із тілом — регулярний сон, заземлюючі практики та увага до рівня енергії.'
        : 'Action vector (Health & Spirit): reconnect with physical wellness — restful sleep, gentle grounding, and respecting body limits.';
    }

    // Universal default
    if (noEarth && ctx.n >= 4) {
      return uk
        ? 'Вектор дії: переведіть внутрішні усвідомлення в один конкретний фізичний крок протягом 24–48 годин.'
        : 'Action vector: anchor these insights into one concrete, real-world action within 24–48 hours.';
    }

    return uk
      ? 'Вектор дії: визначте головний урок із розкладу і зробіть один простий крок для зміцнення своєї позиції.'
      : 'Action vector: define the primary insight from the cards and take one steady step to solidify your path.';
  }

  // ─── Spread-specific Rules Registry ───────────────────────────────────────
  // Positions for Celtic Cross (0-based):
  // 0 Heart, 1 Obstacle, 2 Subconscious, 3 Past, 4 Conscious,
  // 5 Near Future, 6 Self, 7 Environment, 8 Hopes/Fears, 9 Outcome

  const SPREAD_RULES = {
    'celtic-cross': [
      // 1. Central Cross Elemental & Polarity dynamic (Heart + Obstacle)
      {
        id: 'cc_cross_elements',
        when: (ctx) => ctx.n >= 10,
        text: (ctx, lang) => {
          const uk = lang === 'uk';
          const e1 = ctx.elAt(0);
          const e2 = ctx.elAt(1);
          const rev1 = ctx.isRevAt(0);
          const rev2 = ctx.isRevAt(1);
          const maj1 = ctx.isMajorAt(0);
          const maj2 = ctx.isMajorAt(1);

          const m1 = ELEMENT_META[e1] || { uk: 'стихія', en: 'element' };
          const m2 = ELEMENT_META[e2] || { uk: 'стихія', en: 'element' };

          if (rev2) {
            return uk
              ? `Ядро ситуації: Перешкода перевернута (${ctx.nameAt(1, 'uk')}) — опір є переважно внутрішнім (страх, старі звички або невпевненість). Подолавши внутрішній бар'єр, ви розблокуєте серце справи.`
              : `Core dynamic: Obstacle is reversed (${ctx.nameAt(1, 'en')}) — resistance is primarily internal (fear, old patterns, or doubt). Clearing inner hesitation resolves the outer block.`;
          }

          if (maj2 && !maj1) {
            return uk
              ? `Ядро ситуації: Перешкода очолюється Старшим Арканом (${ctx.nameAt(1, 'uk')}), тоді як Серце є побутовим — зовнішні або глибинні уроки вимагають мудрості та адаптації, а не простого натиску.`
              : `Core dynamic: Obstacle carries a Major Arcana (${ctx.nameAt(1, 'en')}) over a Minor Heart — deeper archetypal lessons call for adaptability rather than sheer force.`;
          }

          if (e1 && e2 && e1 === e2) {
            return uk
              ? `Ядро ситуації: Серце і Перешкода належать до однієї стихії (${m1.uk}) — надлишок однієї якості (забагато пристрасті, забагато аналізу або забагато емоцій) створює напругу. Потрібен баланс.`
              : `Core dynamic: Heart and Obstacle share the same element (${m1.en}) — an excess of one energy type creates tension. Seek balance.`;
          }

          if ((e1 === 'fire' && e2 === 'water') || (e1 === 'water' && e2 === 'fire')) {
            return uk
              ? `Ядро ситуації: Конфлікт Вогню та Води в центрі — емоційні переживання чи сумніви гальмують активний порив, або навпаки, поспіх заважає почути серце.`
              : `Core dynamic: Fire vs Water tension at the core — emotional sensitivity dampens direct action, or impulsive pace overrides heartfelt feelings.`;
          }

          if ((e1 === 'air' && e2 === 'earth') || (e1 === 'earth' && e2 === 'air')) {
            return uk
              ? `Ядро ситуації: Взаємодія Повітря і Землі в центрі — ідеї потребують конкретного прорахунку, а практичні справи — свіжого погляду.`
              : `Core dynamic: Air meets Earth at the core — ideas require grounded execution, and tangible tasks need mental clarity.`;
          }

          return uk
            ? `Ядро ситуації: Взаємодія Серця (${m1.uk}) та Перешкоди (${m2.uk}) показує головну точку напруги, де народжується особистий ріст.`
            : `Core dynamic: Interaction between Heart (${m1.en}) and Obstacle (${m2.en}) highlights the pivotal growth zone.`;
        },
      },

      // 2. Vertical Psychological Axis (Conscious vs Subconscious)
      {
        id: 'cc_vertical_mind_soul',
        when: (ctx) => ctx.n >= 10,
        text: (ctx, lang) => {
          const uk = lang === 'uk';
          const subEl = ctx.elAt(2);
          const conEl = ctx.elAt(4);
          const subRev = ctx.isRevAt(2);
          const conRev = ctx.isRevAt(4);
          const subMaj = ctx.isMajorAt(2);
          const conMaj = ctx.isMajorAt(4);

          if (subEl && conEl && subEl !== conEl) {
            const mSub = ELEMENT_META[subEl] || { uk: 'стихія', en: 'element' };
            const mCon = ELEMENT_META[conEl] || { uk: 'стихія', en: 'element' };
            return uk
              ? `Вісь психіки (Підсвідомість ↔ Свідомість): Підсвідомість звучить у стихії ${mSub.uk}, тоді як розум діє в стихії ${mCon.uk}. Ви можете логічно пояснювати вибір, тоді як глибше відчуття прагне іншого. Синхронізуйте думки з інтуїцією.`
              : `Psychological Axis (Subconscious ↔ Conscious): Subconscious operates in ${mSub.en}, while the conscious mind operates in ${mCon.en}. Align mental rationale with deep intuition.`;
          }

          if (subMaj && !conMaj) {
            return uk
              ? `Вісь психіки: Підсвідомість містить сильний Старший Аркан (${ctx.nameAt(2, 'uk')}) — глибинні внутрішні прагнення набагато сильніші за щоденні раціональні плани.`
              : `Psychological Axis: Strong Major Arcana in Subconscious (${ctx.nameAt(2, 'en')}) — deep hidden motives outweigh conscious day-to-day thinking.`;
          }

          if (conRev) {
            return uk
              ? `Вісь психіки: Свідомість у перевернутому положенні — суб’єктивні тривоги чи ментальні фільтри можуть спотворювати бачення фактів. Потрібна пауза для ясності.`
              : `Psychological Axis: Conscious position reversed — mental anxieties or biased assumptions may blur current facts.`;
          }

          return null;
        },
      },

      // 3. Horizontal Time Axis (Past -> Near Future)
      {
        id: 'cc_horizontal_timeline',
        when: (ctx) => ctx.n >= 10,
        text: (ctx, lang) => {
          const uk = lang === 'uk';
          const pMaj = ctx.isMajorAt(3);
          const fMaj = ctx.isMajorAt(5);
          const pRev = ctx.isRevAt(3);
          const fRev = ctx.isRevAt(5);

          if (pRev && !fRev) {
            return uk
              ? `Лінія часу (Минуле → Майбутнє): Напруга або незавершені уроки минулого залишаються позаду — найближче майбутнє відкриває прямий, конструктивний розвиток подій.`
              : `Timeline (Past → Future): Past tensions and old blocks are being released — the near future offers clearer, forward-moving momentum.`;
          }

          if (fMaj) {
            return uk
              ? `Лінія часу: У найближчому майбутньому з’являється Старший Аркан (${ctx.nameAt(5, 'uk')}) — попереду важливий переломний момент або знакова подія.`
              : `Timeline: Major Arcana arriving in Near Future (${ctx.nameAt(5, 'en')}) — a pivotal milestone is rapidly approaching.`;
          }

          return null;
        },
      },

      // 4. Staff Dynamics (Self vs Environment)
      {
        id: 'cc_self_and_environment',
        when: (ctx) => ctx.n >= 10,
        text: (ctx, lang) => {
          const uk = lang === 'uk';
          const selfRev = ctx.isRevAt(6);
          const envMaj = ctx.isMajorAt(7);
          const envEl = ctx.elAt(7);
          const selfEl = ctx.elAt(6);

          if (envMaj) {
            return uk
              ? `Баланс сил (Я та Оточення): Оточення представлене Старшим Арканом (${ctx.nameAt(7, 'uk')}) — зовнішні чинники, люди або правила мають вагомий вплив. Обирайте співпрацю та дипломатію замість прямої конфронтації.`
              : `Balance of Power (Self & Environment): Strong Major Arcana in Environment (${ctx.nameAt(7, 'en')}) — outer factors hold significant weight. Seek diplomacy over confrontation.`;
          }

          if (selfRev) {
            return uk
              ? `Баланс сил: Ставлення до себе перевернуте — ви можете недооцінювати власну силу або брати на себе зайву провину. Укріпіть внутрішню самооцінку.`
              : `Balance of Power: Self-perception reversed — you may be underestimating your abilities. Bolster your inner self-worth.`;
          }

          if (selfEl && envEl && selfEl === envEl) {
            const m = ELEMENT_META[selfEl] || { uk: 'стихія', en: 'element' };
            return uk
              ? `Баланс сил: Ви та ваше оточення перебуваєте в єдиній стихії (${m.uk}) — є спільна мова та спільний темп для руху вперед.`
              : `Balance of Power: You and your environment resonate in the same element (${m.en}) — unified rhythm for progress.`;
          }

          return null;
        },
      },

      // 5. Psychological Alignment: Hopes/Fears vs Outcome
      {
        id: 'cc_hopes_vs_outcome_alignment',
        when: (ctx) => ctx.n >= 10,
        text: (ctx, lang) => {
          const uk = lang === 'uk';
          const hMaj = ctx.isMajorAt(8);
          const oMaj = ctx.isMajorAt(9);
          const hRev = ctx.isRevAt(8);
          const oRev = ctx.isRevAt(9);

          if (!oRev && hRev) {
            return uk
              ? 'Звірка очікувань: Тривоги у позиції «Надії та страхи» перебільшені — реальний Підсумок розкладу є стабільнішим і сприятливішим, ніж малюють побоювання.'
              : 'Expectation check: Fears in Hopes & Fears appear amplified — the actual Outcome is more grounded and constructive than anticipated.';
          }

          if (oMaj) {
            return uk
              ? `Звірка очікувань: Кінцевий підсумок увінчаний Старшим Арканом (${ctx.nameAt(9, 'uk')}) — результат матиме фундаментальне довгострокове значення.`
              : `Expectation check: Final outcome is anchored by a Major Arcana (${ctx.nameAt(9, 'en')}) — results carry lasting significance.`;
          }

          return null;
        },
      },

      // 6. Core Synthesis Key (Formatted neatly with sublines)
      {
        id: 'cc_core_synthesis',
        when: (ctx) => ctx.n >= 10,
        text: (ctx, lang) => {
          const uk = lang === 'uk';
          const heart = ctx.labelAt(0, lang);
          const obs = ctx.labelAt(1, lang);
          const near = ctx.labelAt(5, lang);
          const out = ctx.labelAt(9, lang);
          const hope = ctx.labelAt(8, lang);

          if (uk) {
            return (
              'Ключ розкладу:\n' +
              '• Суть зараз: ' + heart + '\n' +
              '• Перешкода / виклик: ' + obs + '\n' +
              '• Найближчий розвиток: ' + near + '\n' +
              '• Надії та страхи: ' + hope + '\n' +
              '• Ймовірний підсумок: ' + out
            );
          }
          return (
            'Celtic Cross Key:\n' +
            '• Core reality: ' + heart + '\n' +
            '• Obstacle / challenge: ' + obs + '\n' +
            '• Near development: ' + near + '\n' +
            '• Hopes & fears: ' + hope + '\n' +
            '• Likely outcome: ' + out
          );
        },
      },

      // 7. Tactical synthesis advice
      {
        id: 'cc_final_synthesis_advice',
        when: (ctx) => ctx.n >= 10,
        text: (ctx, lang) => {
          const uk = lang === 'uk';
          const obsMaj = ctx.isMajorAt(1);
          const outMaj = ctx.isMajorAt(9);
          const revCount = ctx.reversedCount;

          if (obsMaj) {
            return uk
              ? 'Головний фокус: Не бійтеся трансформацій у перешкоді — розгляньте виклик як можливість вийти на новий рівень зрілості.'
              : 'Main focus: Embrace the obstacle’s lesson — view the challenge as an invitation to a higher level of maturity.';
          }
          if (outMaj) {
            return uk
              ? 'Головний фокус: Орієнтуйтеся на велику мету підсумку, не розпилюючись на тимчасові хвилювання середини шляху.'
              : 'Main focus: Keep your eyes on the broader outcome rather than getting lost in temporary mid-way noise.';
          }
          if (revCount >= 4) {
            return uk
              ? 'Головний фокус: Зробіть ревізію внутрішніх установок — ситуація вирівняється, щойно ви відпустите бажання все контролювати.'
              : 'Main focus: Reset internal expectations — clarity arrives once the urge to overcontrol is released.';
          }
          return uk
            ? 'Головний фокус: Від суті ситуації зробіть один виважений крок до найближчого майбутнього, спираючись на отримані ресурси.'
            : 'Main focus: From the core, take one measured step towards the near future, grounded in your current resources.';
        },
      }
    ],

    // Rules for Three Cards Spread (3 cards: Past/Present/Future or Mind/Body/Spirit)
    'three-cards': [
      {
        id: 'three_card_bridge',
        when: (ctx) => ctx.n === 3,
        text: (ctx, lang) => {
          const uk = lang === 'uk';
          const e0 = ctx.elAt(0);
          const e1 = ctx.elAt(1);
          const e2 = ctx.elAt(2);
          if (e0 && e1 && e2) {
            const m0 = ELEMENT_META[e0]?.uk || '';
            const m1 = ELEMENT_META[e1]?.uk || '';
            const m2 = ELEMENT_META[e2]?.uk || '';
            return uk
              ? `Стихійна динаміка тріади (${m0} → ${m1} → ${m2}): показує, як первинний досвід трансформується через теперішній стан у результат.`
              : `Triad elemental flow: reveals how the initial state evolves through the present into the final result.`;
          }
          return null;
        }
      }
    ],

    // Rules for Relationships Spread (6 cards)
    'relationships': [
      {
        id: 'rel_polarity',
        when: (ctx) => ctx.n >= 6,
        text: (ctx, lang) => {
          const uk = lang === 'uk';
          const p1Maj = ctx.isMajorAt(0);
          const p2Maj = ctx.isMajorAt(3);
          if (p1Maj && p2Maj) {
            return uk
              ? 'У стосунках діють глибокі кармічні зв’язки: обидві сторони проходять важливі внутрішні уроки зрілості.'
              : 'Deep karmic bond in relationship: both individuals are learning pivotal growth lessons.';
          }
          return null;
        }
      }
    ]
  };

  function runSpreadRules(ctx, lang) {
    const slug = (ctx.spread && ctx.spread.slug) || '';
    const rules = SPREAD_RULES[slug];
    if (!rules || !rules.length) return [];
    const out = [];

    for (const rule of rules) {
      try {
        if (rule.when(ctx)) {
          let text = null;
          if (typeof rule.text === 'function') {
            text = rule.text(ctx, lang);
          } else {
            text = ctx.pickVariant(rule.variants, lang);
          }
          if (text) out.push(text);
        }
      } catch (e) {
        // Continue on non-fatal rule error
      }
    }
    return out;
  }

  /**
   * Main analysis function
   * @param {Array} cards - dealt cards
   * @param {Object} spread - spread configuration
   * @param {'uk'|'en'} lang - language code
   * @returns {{ paragraphs: string[], specific: string[], stats: object }}
   */
  function analyzeReading(cards, spread, lang) {
    if (!cards || !cards.length) {
      return { paragraphs: [], specific: [], stats: null };
    }
    const ctx = enhanceContext(buildContext(cards, spread || {}));
    ctx.spread = spread || {};

    const paragraphs = [];

    // 1. Major Arcana Share
    paragraphs.push(analyzeMajorShare(ctx, lang));

    // 2. Court Cards Influence
    const courtText = analyzeCourtCards(ctx, lang);
    if (courtText) paragraphs.push(courtText);

    // 3. Numerology Clusters
    const numText = analyzeNumberClusters(ctx, lang);
    if (numText) paragraphs.push(numText);

    // 4. Elemental Alchemy & Dominance
    const elLines = analyzeElements(ctx, lang);
    elLines.forEach((l) => paragraphs.push(l));

    // 5. Spread Sequence & Transitions
    const seq = analyzeSequence(ctx, lang);
    if (seq) paragraphs.push(seq);

    // 6. Reversals & Psychic Resistance
    paragraphs.push(analyzeReversed(ctx, lang));

    // 7. Notable Combos
    analyzeCombos(ctx, lang).forEach((l) => paragraphs.push(l));

    // 8. Action Vector
    paragraphs.push(actionVector(ctx, lang));

    // Spread-specific deep rules
    const specific = runSpreadRules(ctx, lang);

    return {
      paragraphs: paragraphs.filter(Boolean),
      specific: specific.filter(Boolean),
      stats: {
        majorCount: ctx.majorCount,
        majorPct: Math.round(ctx.majorPct),
        reversedCount: ctx.reversedCount,
        reversedPct: Math.round(ctx.reversedPct),
        dominant: ctx.dominant,
        dominantPct: Math.round(ctx.dominantPct),
        secondary: ctx.secondary,
        secondaryPct: Math.round(ctx.secondaryPct),
        missing: ctx.missing.slice(),
        totalCourts: ctx.totalCourts,
        n: ctx.n,
        slug: (spread && spread.slug) || null,
        specificCount: specific.length,
      },
    };
  }

  global.TarotAnalysis = {
    analyzeReading,
    buildContext,
    cleanCardMeaning,
    isMajor,
    elementOf,
    SPREAD_RULES,
  };
})(typeof window !== 'undefined' ? window : globalThis);
