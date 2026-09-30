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
    const id = String(card.id || '');
    if (id.startsWith('w')) return 'fire';
    if (id.startsWith('c')) return 'water';
    if (id.startsWith('s')) return 'air';
    if (id.startsWith('p')) return 'earth';
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

  function getSmartCardSynthesis(card, lang) {
    if (!card) return '';
    const uk = lang === 'uk' || lang === 'ua';
    const isRev = !!card.reversed;
    
    let raw = isRev
      ? (uk ? (card.meaning_reversed || card.meaning_upright || '') : (card.meaning_reversed_en || card.meaning_upright_en || ''))
      : (uk ? (card.meaning_upright || '') : (card.meaning_upright_en || ''));
      
    if (!raw) return '';

    const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
    let firstPara = lines[0] || '';
    firstPara = firstPara.replace(/^[^—–\-:]{2,50}[—–\-:]\s*/i, '');
    
    let loveLine = '';
    let workLine = '';
    let financeLine = '';
    
    let inSpheres = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.toLowerCase().startsWith('сфери:') || line.toLowerCase().startsWith('spheres:')) {
        inSpheres = true;
        continue;
      }
      if (inSpheres) {
        if (line.includes('Нюанси в розкладах') || line.includes('Додаткові рівні') || line.includes('Nuances') || line.includes('Additional levels')) {
          break;
        }
        if (line.includes('Любов') || line.includes('Love')) {
          loveLine = line.replace(/^\s*[•\-*]\s*/, '').trim();
        } else if (line.includes('Робота') || line.includes('Work') || line.includes('Career') || line.includes('кар’єр') || line.includes('кар\'єр')) {
          workLine = line.replace(/^\s*[•\-*]\s*/, '').trim();
        } else if (line.includes('Фінанси') || line.includes('Finance')) {
          financeLine = line.replace(/^\s*[•\-*]\s*/, '').trim();
        }
      }
    }
    
    function stripLabel(str) {
      if (!str) return '';
      return str.replace(/^[^:]+:\s*/, '').trim();
    }
    
    function toSentenceMiddleLocal(str) {
      if (!str) return '';
      let res = str.trim();
      if (res.length > 0) {
        const firstChar = res.charAt(0);
        if (firstChar === 'Я' && (res.length === 1 || res.charAt(1) === ' ')) {
          // keep
        } else if (firstChar === 'I' && (res.length === 1 || res.charAt(1) === ' ')) {
          // keep
        } else if (res.length > 1 && res.charAt(1) === res.charAt(1).toUpperCase() && res.charAt(1) !== ' ') {
          // keep
        } else {
          res = firstChar.toLowerCase() + res.slice(1);
        }
      }
      while (res.endsWith('.')) {
        res = res.slice(0, -1);
      }
      return res.trim();
    }
    
    const loveVal = stripLabel(loveLine);
    const workVal = stripLabel(workLine);
    const finVal = stripLabel(financeLine);
    
    let res = firstPara;
    if (uk) {
      let sphereAdditions = [];
      if (loveVal) sphereAdditions.push('у сфері стосунків це проявляється як ' + toSentenceMiddleLocal(loveVal));
      if (workVal) sphereAdditions.push('у професійній діяльності це несе ' + toSentenceMiddleLocal(workVal));
      if (finVal) sphereAdditions.push('у плані фінансів провіщає ' + toSentenceMiddleLocal(finVal));
      
      if (sphereAdditions.length > 0) {
        res += ' Зокрема, ' + sphereAdditions.join('; ') + '.';
      }
    } else {
      let sphereAdditions = [];
      if (loveVal) sphereAdditions.push('in relationships this manifests as ' + toSentenceMiddleLocal(loveVal));
      if (workVal) sphereAdditions.push('in career it brings ' + toSentenceMiddleLocal(workVal));
      if (finVal) sphereAdditions.push('in terms of finances it promises ' + toSentenceMiddleLocal(finVal));
      
      if (sphereAdditions.length > 0) {
        res += ' Specifically, ' + sphereAdditions.join('; ') + '.';
      }
    }
    
    res = res.replace(/\.\./g, '.').replace(/\s+/g, ' ').trim();
    return res;
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
      if (!c) return lang === 'uk' ? '«Карта»' : '"Card"';
      let n = lang === 'uk' ? (c.name || c.name_en) : (c.name_en || c.name);
      
      // Safety suit check for Ukrainian
      if (lang === 'uk' && n) {
        if (n.endsWith('Жезли')) n = n.replace(/Жезли$/, 'Жезлів');
        else if (n.endsWith('Кубки')) n = n.replace(/Кубки$/, 'Кубків');
        else if (n.endsWith('Мечі')) n = n.replace(/Мечі$/, 'Мечів');
        else if (n.endsWith('Пентаклі')) n = n.replace(/Пентаклі$/, 'Пентаклів');
      }

      const rev = c.reversed ? (lang === 'uk' ? '(перевернута)' : '(reversed)') : (lang === 'uk' ? '(пряма)' : '(upright)');
      return lang === 'uk' ? `«${n}» (${rev.replace(/[()]/g, '')})` : `"${n}" (${rev.replace(/[()]/g, '')})`;
    };
    ctx.cardTitleAt = (i, lang) => {
      const c = cards[i];
      if (!c) return lang === 'uk' ? '«Карта»' : '"Card"';
      let n = lang === 'uk' ? (c.name || c.name_en) : (c.name_en || c.name);
      if (lang === 'uk' && n) {
        if (n.endsWith('Жезли')) n = n.replace(/Жезли$/, 'Жезлів');
        else if (n.endsWith('Кубки')) n = n.replace(/Кубки$/, 'Кубків');
        else if (n.endsWith('Мечі')) n = n.replace(/Мечі$/, 'Мечів');
        else if (n.endsWith('Пентаклі')) n = n.replace(/Пентаклі$/, 'Пентаклів');
      }
      return lang === 'uk' ? `«${n}»` : `"${n}"`;
    };
    ctx.shortMeaningAt = (i, lang) => {
      const c = cards[i];
      if (!c) return '';
      if (typeof TarotPositions !== 'undefined' && TarotPositions.getPositionMeaning) {
        const pm = TarotPositions.getPositionMeaning(c, ctx.spread, i, lang);
        if (pm) return pm;
      }
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

  // ─── THREE CARDS SYNTHESIS (Минуле, Теперішнє, Майбутнє) ────────────────────
  function synthesizeThreeCards(ctx, lang) {
    const uk = lang === 'uk';

    const name1 = ctx.nameAt(0, lang);
    const name2 = ctx.nameAt(1, lang);
    const name3 = ctx.nameAt(2, lang);

    const m1Text = getSmartCardSynthesis(ctx.cardAt(0), lang);
    const m2Text = getSmartCardSynthesis(ctx.cardAt(1), lang);
    const m3Text = getSmartCardSynthesis(ctx.cardAt(2), lang);

    const maj1 = ctx.isMajorAt(0);
    const maj2 = ctx.isMajorAt(1);
    const maj3 = ctx.isMajorAt(2);

    const rev1 = ctx.isRevAt(0);
    const rev2 = ctx.isRevAt(1);
    const rev3 = ctx.isRevAt(2);

    const e1 = ctx.elAt(0);
    const e2 = ctx.elAt(1);
    const e3 = ctx.elAt(2);
    const m1 = ELEMENT_META[e1] || (uk ? { uk: 'стихія', suit_uk: 'Аркани' } : { en: 'element', suit_en: 'Arcana' });
    const m2 = ELEMENT_META[e2] || (uk ? { uk: 'стихія', suit_uk: 'Аркани' } : { en: 'element', suit_en: 'Arcana' });
    const m3 = ELEMENT_META[e3] || (uk ? { uk: 'стихія', suit_uk: 'Аркани' } : { en: 'element', suit_en: 'Arcana' });

    function toSentenceMiddle(str) {
      if (!str) return '';
      let res = str.trim();
      if (res.length > 0) {
        const firstChar = res.charAt(0);
        if (firstChar === 'Я' && (res.length === 1 || res.charAt(1) === ' ')) {
          // keep 'Я'
        } else if (firstChar === 'I' && (res.length === 1 || res.charAt(1) === ' ')) {
          // keep 'I'
        } else if (res.length > 1 && res.charAt(1) === res.charAt(1).toUpperCase() && res.charAt(1) !== ' ') {
          // keep acronyms
        } else {
          res = firstChar.toLowerCase() + res.slice(1);
        }
      }
      while (res.endsWith('.')) {
        res = res.slice(0, -1);
      }
      return res.trim();
    }

    const clean1 = toSentenceMiddle(m1Text);
    const clean2 = toSentenceMiddle(m2Text);
    const clean3 = toSentenceMiddle(m3Text);

    const lead = uk
      ? `Тріада розгортає живу лінію часу: вихідний досвід минулого (${name1}) переосмислюється через теперішній вибір (${name2}) та спрямовує вас до майбутньої перспективи (${name3}).`
      : `This triad traces a clear temporal flow: foundational past lessons (${name1}) inform present choices (${name2}), shaping the emerging horizon (${name3}).`;

    const sections = [];

    // Еволюція від минулого до майбутнього
    const timelineBody = uk
      ? `У минулому було закладено першопричину ситуації: ${clean1}. Зараз головний виклик або фокус уваги полягає в наступному: ${clean2}. Перспектива вказує на ймовірний розвиток: ${clean3}. Якщо цей вектор вам відгукується — підтримуйте його; якщо ні — ви маєте повну силу скоригувати курс вже сьогодні.`
      : `The root of the situation was seeded in the past: ${clean1}. In the present, your central anchor or focus unfolds as: ${clean2}. Ahead, the trajectory points toward: ${clean3}. If this path aligns with your intent, sustain it; otherwise, you possess full agency to adjust course today.`;

    sections.push({
      title: uk ? "Взаємозв'язок часу" : 'Temporal Flow',
      body: timelineBody
    });

    // 4. Динаміка та вектор
    let dynamicText = '';
    if (maj1 && maj2 && maj3) {
      dynamicText = uk
        ? `Усі три карти є Старшими Арканами. Це вказує на надзвичайно глибокий, кармічний перехід у вашому житті, де особисті уроки та внутрішня зрілість мають вирішальне значення.`
        : `All three cards are Major Arcana, indicating an exceptionally deep, karmic transition where inner maturity plays a decisive role.`;
    } else if (!maj1 && !maj2 && !maj3) {
      dynamicText = uk
        ? `Розклад сформований виключно Молодшими Арканами — хід подій повністю підвладний вашій волі, щоденним рішенням та гнучкості. Жодних фатальних перешкод немає.`
        : `The spread consists entirely of Minor Arcana — events are fully responsive to your daily choices and tactical adaptability.`;
    } else {
      dynamicText = uk
        ? `Поєднання Старших та Молодших Арканів свідчить про баланс між життєвими уроками та можливістю діяти практично й послідовно.`
        : `The blend of Major and Minor Arcana reflects a balance between life milestones and tactical daily steps.`;
    }
    sections.push({
      title: uk ? 'Вектор процесу' : 'Process Dynamics',
      body: dynamicText
    });

    // 5. Стихійний зв'язок
    let elemText = '';
    if (e1 && e2 && e3 && e1 === e2 && e2 === e3) {
      elemText = uk
        ? `Домінування однієї стихії (${m1.uk || 'стихії'}) свідчить про сильний фокус у якійсь одній сфері життя. Варто звернути увагу й на інші аспекти, щоб зберегти баланс.`
        : `The dominance of a single element (${m1.en || 'element'}) reveals concentrated focus in one area of life. Balance this with broader perspectives.`;
    } else if (e1 && e2 && e3) {
      elemText = uk
        ? `Енергія природно перетікає від вихідного стану через сьогодення до нового результату (${m1.uk || 'стихія'} → ${m2.uk || 'стихія'} → ${m3.uk || 'стихія'}), показуючи гармонійну еволюцію обставин.`
        : `Energy flows naturally from the initial state through the present to the outcome (${m1.en || 'element'} → ${m2.en || 'element'} → ${m3.en || 'element'}).`;
    }
    if (elemText) {
      sections.push({
        title: uk ? 'Стихійний потік' : 'Elemental Flow',
        body: elemText
      });
    }

    // 6. Головний фокус (порада)
    let guidance = '';
    if (rev3) {
      guidance = uk
        ? `Карта майбутнього застерігає від поспіху. Сповільніть хід подій, тверезо переоцініть свої плани та усуньте приховані суперечності вже зараз.`
        : `The future card cautions against rushing. Slow down, reevaluate your trajectory, and address hidden frictions right now.`;
    } else if (rev2) {
      guidance = uk
        ? `Знайдіть внутрішню згоду та розберіться із сумнівами в теперішньому моменті, перш ніж робити наступний важливий крок.`
        : `Restore inner alignment and resolve present hesitation before taking the next significant leap.`;
    } else {
      guidance = uk
        ? `Спирайтеся на набутий досвід як на міцний фундамент. Тверезо оцінюйте теперішнє та впевнено робіть крок назустріч бажаному майбутньому.`
        : `Build upon lived experience as a steady anchor. Assess the present clearly and step confidently into your future.`;
    }

    // 7. Комбінації
    const combos = analyzeCombos(ctx, lang);
    if (combos.length > 0) {
      sections.push({
        title: uk ? 'Особливе поєднання' : 'Card Synergy',
        body: combos.join(' ')
      });
    }

    const items = [lead, ...sections.map(s => (s.title ? `${s.title}: ${s.body}` : s.body)), guidance];

    return {
      lead,
      sections,
      guidance,
      items
    };
  }

  // ─── BIRTHDAY SPREAD SYNTHESIS (День народження: Уроки, Енергія, Вектор) ────
  function synthesizeBirthday(ctx, lang) {
    const uk = lang === 'uk';
    const items = [];

    const name1 = ctx.nameAt(0, lang);
    const name2 = ctx.nameAt(1, lang);
    const name3 = ctx.nameAt(2, lang);

    function getCardDescriptionSnippet(card, isRev, l) {
      if (!card) return '';
      const isUk = l === 'uk' || l === 'ua';
      const raw = isRev
        ? (isUk ? (card.meaning_reversed || card.meaning_upright || '') : (card.meaning_reversed_en || card.meaning_upright_en || ''))
        : (isUk ? (card.meaning_upright || '') : (card.meaning_upright_en || ''));
      if (!raw) return '';

      const firstBlock = raw.split(/\n\s*\n/)[0].trim();
      let text = firstBlock.replace(/^[^\—–\-:]{2,50}[—–\-:]\s*/i, '');
      text = text.replace(/^[\s—–\-:,]+/, '');

      const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
      let snippet = sentences[0] || '';
      if (sentences.length > 1 && (snippet.length + sentences[1].length < 240)) {
        snippet += ' ' + sentences[1];
      }
      snippet = snippet.replace(/\s+/g, ' ').trim();
      if (snippet.length > 0) {
        snippet = snippet.charAt(0).toUpperCase() + snippet.slice(1);
      }
      if (!/[.!?]$/.test(snippet)) snippet += '.';
      return snippet;
    }

    const m1Text = getCardDescriptionSnippet(ctx.cardAt(0), ctx.isRevAt(0), lang);
    const m2Text = getCardDescriptionSnippet(ctx.cardAt(1), ctx.isRevAt(1), lang);
    const m3Text = getCardDescriptionSnippet(ctx.cardAt(2), ctx.isRevAt(2), lang);

    const maj1 = ctx.isMajorAt(0);
    const maj2 = ctx.isMajorAt(1);
    const maj3 = ctx.isMajorAt(2);

    const rev1 = ctx.isRevAt(0);
    const rev2 = ctx.isRevAt(1);
    const rev3 = ctx.isRevAt(2);

    // 1. Уроки минулого року
    const p1 = uk
      ? `Підсумок минулого року — ${name1}. ${m1Text} Цей досвід став вашою головною школою за минулі 12 місяців: усе пережите сформувало внутрішню мудрість, яку варто взяти у новий життєвий рік як надійний фундамент.`
      : `Past year reflection — ${name1}. ${m1Text} This experience served as your primary classroom over the last 12 months, forging inner wisdom to carry into your new year as a solid foundation.`;
    items.push(p1);

    // 2. Головна енергія року
    const p2 = uk
      ? `Головна енергія та опора року — ${name2}. ${m2Text} Це ваш ключовий внутрішній ресурс у моменті переходу. Саме на цю силу варто спиратися, коли виникатимуть сумніви або потреба у прийнятті важливих рішень.`
      : `Core energy and grounding — ${name2}. ${m2Text} This represents your central inner resource at this threshold. Lean on this strength whenever doubts arise or important decisions must be made.`;
    items.push(p2);

    // 3. Вектор розвитку на майбутнє
    const p3 = uk
      ? `Вектор розвитку на майбутнє — ${name3}. ${m3Text} Це головний тренд і компас ваших наступних 12 місяців. Спрямуйте сюди максимум уваги, адже саме тут відкриваються найбільші можливості для зростання.`
      : `Forward trajectory — ${name3}. ${m3Text} This defines the primary trend and compass for your coming 12 months. Direct your focus here, as this is where your greatest growth opportunities lie.`;
    items.push(p3);

    // 4. Масштаб особистого року (Старші та Молодші Аркани)
    let scaleText = '';
    if (ctx.majorCount === 3) {
      scaleText = uk
        ? `Масштаб особистого року: Усі три карти є Старшими Арканами. Це вказує на надзвичайно важливий, доленосний рік у вашому житті. На вас чекає фундаментальна трансформація світогляду та події, які визначать ваш шлях на багато років уперед.`
        : `Scale of your personal year: All three cards are Major Arcana. This signals a watershed, milestone year in your life. Expect profound shifts that will shape your trajectory for years to come.`;
    } else if (ctx.majorCount === 2) {
      scaleText = uk
        ? `Масштаб особистого року: Присутність двох Старших Арканів свідчить про значні, якісні зміни у житті. Цей рік принесе вагомі поворотні моменти, де кармічні уроки тісно переплітатимуться з вашими практичними рішеннями.`
        : `Scale of your personal year: Two Major Arcana indicate a high-impact year with substantial shifts. Milestone life lessons will directly interact with your practical day-to-day choices.`;
    } else if (ctx.majorCount === 1) {
      scaleText = uk
        ? `Масштаб особистого року: Один Старший Аркан задає головний вектор внутрішнього розвитку, тоді як більша частина подій року розвиватиметься у зрозумілому, практичному руслі під вашим особистим контролем.`
        : `Scale of your personal year: A single Major Arcana anchors the deeper spiritual theme, while most events will unfold in a pragmatic, steady manner under your direct control.`;
    } else {
      scaleText = uk
        ? `Масштаб особистого року: Усі три карти — Молодші Аркани. Це рік практичної розбудови, гнучкості та послідовних кроків. Жодних непереборних зовнішніх фатальних обставин немає: успіх вашого року повністю у ваших руках і щоденних звичках.`
        : `Scale of your personal year: All cards are Minor Arcana. This is a year of grounded building, flexibility, and steady execution. No overwhelming external fate dictates your path: your success rests firmly on daily habits and clear choices.`;
    }
    items.push(scaleText);

    // 5. Стихійна атмосфера року
    let elemText = '';
    const elCounts = ctx.elements || { fire: 0, water: 0, air: 0, earth: 0 };
    let dominantEl = null;
    ['fire', 'water', 'air', 'earth'].forEach(el => {
      if ((elCounts[el] || 0) >= 2) dominantEl = el;
    });

    if (dominantEl === 'fire') {
      elemText = uk
        ? 'Провідна стихія року — Вогонь: Рік активних дій, високої мотивації, сміливих починань та кар\'єрного зростання. Час брати ініціативу й сміливо втілювати свої задуми.'
        : 'Dominant element of the year — Fire: A year of dynamic action, high motivation, bold beginnings, and career advancement. Time to take initiative and pursue ambitions.';
    } else if (dominantEl === 'water') {
      elemText = uk
        ? 'Провідна стихія року — Вода: Рік емоційного оновлення, щирих почуттів, творчого натхнення та зміцнення важливих взаємин. Довіряйте серцю та інтуїції.'
        : 'Dominant element of the year — Water: A year of emotional renewal, genuine feelings, creative inspiration, and deepening relationships. Trust your intuition and heart.';
    } else if (dominantEl === 'air') {
      elemText = uk
        ? 'Провідна стихія року — Повітря: Рік інтелектуального прориву, навчання, нових ідей та ментальної ясності. Час ухвалювати виважені стратегічні рішення.'
        : 'Dominant element of the year — Air: A year of intellectual breakthrough, study, fresh ideas, and mental clarity. Time to make thoughtful strategic choices.';
    } else if (dominantEl === 'earth') {
      elemText = uk
        ? 'Провідна стихія року — Земля: Рік матеріальної стабільності, фінансового зміцнення, турботи про здоров\'я та затишок. Час будувати міцний життєвий фундамент.'
        : 'Dominant element of the year — Earth: A year of tangible stability, financial consolidation, health, and comfort. Time to construct a durable life foundation.';
    } else {
      elemText = uk
        ? 'Стихійний баланс року: У розкладі поєдналися різні стихії. Це провіщає гармонійний та різнобічний рік, де внутрішній стан, практичні справи та свіжі враження органічно доповнюватимуть один одного.'
        : 'Elemental balance of the year: Different elements harmonize in this spread. This promises a well-rounded year where emotions, practical matters, and new experiences naturally complement each other.';
    }
    items.push(elemText);

    // 6. Напуття на новий персональний рік
    let blessingText = '';
    if (rev2) {
      blessingText = uk
        ? `Напуття на новий рік: Зверніть увагу на карту вашої енергії (${name2}) — перш ніж братися за підкорення нових вершин, відновіть внутрішній ресурс, позбудьтеся виснажливих сумнівів і дайте собі час на якісний відпочинок.`
        : `Guidance for the new year: Pay special attention to your energy card (${name2}) — before pursuing ambitious milestones, restore your inner reserves, release self-doubt, and allow yourself restorative rest.`;
    } else if (rev3) {
      blessingText = uk
        ? `Напуття на новий рік: Вектор майбутнього (${name3}) застерігає від метушні та поспіху. Не намагайтеся отримати все одразу — рухайтеся до нових цілей планомірно, вивіряючи кожен крок.`
        : `Guidance for the new year: The trajectory card (${name3}) cautions against rush. Do not force immediate results — advance toward your goals deliberately, testing each step.`;
    } else if (rev1 && !rev2 && !rev3) {
      blessingText = uk
        ? `Напуття на новий рік: Остаточно відпустіть старі жалі та переживання минулого року. Він повністю виконав своє навчальне завдання — тепер ваш погляд має бути спрямований виключно вперед.`
        : `Guidance for the new year: Fully release past regrets and old baggage. The past year fulfilled its teaching purpose — your vision should now be oriented purely forward.`;
    } else {
      blessingText = uk
        ? `Напуття на новий рік: Карти розкладу перебувають у прямій позиції — це чисте зелене світло для вашого нового життєвого циклу. Сміливо вірте у власні сили, спирайтеся на набутий досвід і крокуйте у свій новий рік із радістю та впевненістю!`
        : `Guidance for the new year: The cards stand upright — a clear green light for your new cycle. Trust your capabilities, build on your lived experience, and step into your new year with joy and confidence!`;
    }
    items.push(blessingText);

    // 7. Знакові комбінації
    analyzeCombos(ctx, lang).forEach(c => items.push(c));

    return items;
  }

  // ─── MIND, BODY, SPIRIT SYNTHESIS (Розум, Тіло, Дух) ───────────────────────
  function synthesizeMindBodySpirit(ctx, lang) {
    const uk = lang === 'uk';

    const title0 = ctx.cardTitleAt(0, lang);
    const title1 = ctx.cardTitleAt(1, lang);
    const title2 = ctx.cardTitleAt(2, lang);

    const rev0 = ctx.isRevAt(0);
    const rev1 = ctx.isRevAt(1);
    const rev2 = ctx.isRevAt(2);

    let lead = '';
    const sections = [];
    let guidance = '';

    if (uk) {
      // 1. ДІАГНОСТИКА СТАНУ ТА РЕСУРСУ (LEAD)
      if (!rev0 && !rev1 && !rev2) {
        lead = `Усі три сфери вашого єства перебувають у гармонійній згоді: розум (${title0}) забезпечує тверезе бачення, тіло (${title1}) має достатній запас енергії, а внутрішній дух (${title2}) дає спокійну впевненість. Між вашими намірами та фізичними силами немає внутрішнього тертя — це стан чистого та збалансованого ресурсу.`;
      } else if (rev1 && !rev0) {
        lead = `Між вашими намірами та фізичним ресурсом виник відчутний дисонанс: поки розум (${title0}) налаштований на активність і контроль, тіло (${title1}) сигналізує про виснаження й потребу в перепочинку. Спроба рухатися вперед суто на силі волі загрожує вигорянням — найперше, що зараз потрібно, це дати фізичному організму простір для відновлення.`;
      } else if (rev0 && !rev1) {
        lead = `Фізичний організм (${title1}) та внутрішній стрижень зберігають міцність, проте головний витік сил відбувається в думках (${title0}). Фонова тривожність, ментальний шум або надмірний контроль забирають левову частку життєвої сили. Щойно ви звільните голову від нав'язливих сценаріїв — енергетичний баланс швидко повернеться.`;
      } else if (rev2) {
        lead = `Функціонально ви тримаєтеся зібрано й виконуєте щоденні завдання, проте душевний стан (${title2}) вказує на внутрішню втому або рух «на автопілоті». Коли слабшає живий зв'язок із власними щирими бажаннями, навіть звичні справи починають здаватися порожніми.`;
      } else {
        lead = `Ваш внутрішній простір проходить фазу глибокого переналаштування: системи розуму, тіла та духу (${title0}, ${title1}, ${title2}) вимагають сповільнення й дбайливого ставлення. Зараз не варто форсувати події — дайте всім трьом рівням час прийти до спільного знаменника.`;
      }

      // 2. ВЗАЄМОЗВ'ЯЗОК КАРТ ТА СТИХІЙНА АТМОСФЕРА (SECTIONS)
      const elCounts = ctx.elements || { fire: 0, water: 0, air: 0, earth: 0 };
      let dominantEl = null;
      ['fire', 'water', 'air', 'earth'].forEach(el => {
        if ((elCounts[el] || 0) >= 2) dominantEl = el;
      });

      let elBody = '';
      if (dominantEl === 'fire') {
        elBody = 'У розкладі переважає стихія Вогню — високий темп, імпульсивність і бажання швидких зрушень. Це потужний внутрішній двигун, проте без регулярних пауз він швидко веде до вигоряння.';
      } else if (dominantEl === 'water') {
        elBody = 'Переважання Води свідчить про високу чутливість: ваше самопочуття зараз прямо залежить від психологічного клімату навколо, тепла та відчуття внутрішньої безпеки.';
      } else if (dominantEl === 'air') {
        elBody = 'Акцент стихії Повітря говорить про перевантаження інформацією та роздумами. Необхідно заземлити думки через прості фізичні дії, прогулянки та контакт із тілом.';
      } else if (dominantEl === 'earth') {
        elBody = 'Земна енергія дає надійну точку опори: стан найкраще стабілізується через базовий комфорт, якісний сон, повноцінне харчування та неспішний ритм.';
      } else {
        elBody = 'Стихії розкладу розподілені рівномірно: інтелектуальна тверезість, фізичні сили та чутливість гармонійно доповнюють одне одного.';
      }

      sections.push({
        title: 'Взаємодія енергій',
        body: elBody
      });

      const combos = analyzeCombos(ctx, lang);
      if (combos.length > 0) {
        sections.push({
          title: 'Особливе поєднання',
          body: combos.join(' ')
        });
      }

      // 3. НАПУТТЯ ТА ПРАКТИЧНИЙ ОРІЄНТИР (GUIDANCE)
      if (rev1) {
        guidance = 'Почніть відновлення суто з тіла. Відкладіть складні роздуми, мінімізуйте нетермінові справи й дайте собі виспатися без почуття провини. Щойно відпочине фізичний організм — одразу проясняться думки.';
      } else if (rev0) {
        guidance = 'Оголосіть ментальний карантин. Припиніть прокручувати в голові тривожні сценарії та обмежте потік новин. Прогулянки на свіжому повітрі або спокійна фізична діяльність повернуть спокій швидше за будь-які роздуми.';
      } else if (rev2) {
        guidance = 'Зробіть щось виключно заради спонтанної радості, а не за розкладом. Навіть маленька приємність для душі розіб\'є заціпеніння автопілота й поверне відчуття живої енергії.';
      } else {
        guidance = 'Спирайтеся на внутрішній спокій і рухайтеся вперед у власному природному темпі. Щоденна увага до свого самопочуття допоможе зберегти цю гармонію надовго.';
      }

    } else {
      // English
      if (!rev0 && !rev1 && !rev2) {
        lead = `All three layers of your being exist in natural alignment: the mind (${title0}) provides clarity, the body (${title1}) maintains steady vitality, and your inner spirit (${title2}) holds firm grounding. There is no inner friction — a phase of genuine balance and resourcefulness.`;
      } else if (rev1 && !rev0) {
        lead = `A clear friction has emerged between mental drive and physical capacity: while the mind (${title0}) pushes for speed and control, the body (${title1}) signals exhaustion and pleads for rest. Forcing forward purely on willpower invites burnout — your primary duty right now is granting your body restorative space.`;
      } else if (rev0 && !rev1) {
        lead = `Your physical foundation (${title1}) and inner fortitude remain intact, yet your energy leaks through mental chatter (${title0}). Background anxiety and overthinking drain your stamina. Quieting unnecessary contemplation will swiftly restore harmony.`;
      } else if (rev2) {
        lead = `Functionally you remain composed and productive, but your spirit card (${title2}) reveals numbness and movement on autopilot. Without heartfelt inspiration, even routine tasks begin to feel burdensome.`;
      } else {
        lead = `Your inner landscape is undergoing deep recalibration: mind, body, and spirit (${title0}, ${title1}, ${title2}) require measured pacing and gentle self-compassion. Allow all three layers to align naturally.`;
      }

      const elCounts = ctx.elements || { fire: 0, water: 0, air: 0, earth: 0 };
      let dominantEl = null;
      ['fire', 'water', 'air', 'earth'].forEach(el => {
        if ((elCounts[el] || 0) >= 2) dominantEl = el;
      });

      let elBody = '';
      if (dominantEl === 'fire') {
        elBody = 'Fire energy dominates — high urgency, passion, and ambition. Harness this spark, but interlace deliberate pauses to prevent emotional depletion.';
      } else if (dominantEl === 'water') {
        elBody = 'Water prevails — strong emotional sensitivity. Your well-being directly reflects psychological comfort and feelings of warmth and safety.';
      } else if (dominantEl === 'air') {
        elBody = 'Air energy signals an overload of thoughts and mental analysis. Ground your energy through physical movement, fresh air, and tangible contact with reality.';
      } else if (dominantEl === 'earth') {
        elBody = 'Earth provides a steady anchor: recovery thrives on comfortable rest, nourishing food, and measured daily pacing.';
      } else {
        elBody = 'The elements are balanced evenly: mental clarity, physical endurance, and intuitive depth complement each other smoothly.';
      }

      sections.push({
        title: 'Elemental Interplay',
        body: elBody
      });

      const combos = analyzeCombos(ctx, lang);
      if (combos.length > 0) {
        sections.push({
          title: 'Card Synergy',
          body: combos.join(' ')
        });
      }

      if (rev1) {
        guidance = 'Center your recovery in the body first. Postpone complex planning, reduce non-essential duties, and allow yourself unhurried rest without guilt. Once the body replenishes, clarity will return effortlessly.';
      } else if (rev0) {
        guidance = 'Declare a mental detox. Step away from ruminating on worst-case scenarios and limit news feeds. Physical motion or hands-on tasks will quiet the mind faster than more thinking.';
      } else if (rev2) {
        guidance = 'Engage in something purely for spontaneous joy rather than duty. A simple pleasure for the soul will dissolve autopilot numbness and reawaken your spark.';
      } else {
        guidance = 'Trust your calm foundation and move forward at your natural tempo. Consistent self-care will sustain this balanced baseline.';
      }
    }

    const items = [lead, ...sections.map(s => (s.title ? `${s.title}: ${s.body}` : s.body)), guidance];

    return {
      lead,
      sections,
      guidance,
      items
    };
  }

  // ─── GENERAL FALLBACK SPREAD SYNTHESIS ────────────────────────────────────
  function synthesizeGeneralSpread(ctx, lang) {
    const uk = lang === 'uk';
    let lead = '';
    const sections = [];
    let guidance = '';

    if (uk) {
      if (ctx.majorPct >= 66) {
        lead = `У розкладі переважають Старші Аркани (${ctx.majorCount} з ${ctx.n}) — ситуація носить поворотний, доленосний характер. Події виходять за межі побутових дрібниць і вимагають внутрішньої зрілості та довіри до власного життєвого шляху.`;
      } else if (ctx.majorCount === 0) {
        lead = `Розклад сформований Молодшими Арканами — розвиток подій повністю перебуває у ваших руках і залежить від щоденних практичних виборів, гнучкості та послідовних дій. Жодних фатальних перешкод немає.`;
      } else {
        lead = `Гармонійне поєднання Старших та Молодших Арканів: важливі життєві уроки знаходять своє пряме й відчутне втілення у конкретних повсякденних справах.`;
      }

      if (ctx.first && ctx.last && ctx.n >= 3) {
        const name1 = ctx.nameAt(0, lang);
        const nameEnd = ctx.nameAt(ctx.n - 1, lang);
        const e1 = elementOf(ctx.first);
        const e2 = elementOf(ctx.last);
        const m1 = ELEMENT_META[e1]?.uk || 'початковий імпульс';
        const m2 = ELEMENT_META[e2]?.uk || 'фінальний результат';
        
        sections.push({
          title: 'Динаміка розгортання',
          body: `Траєкторія розкладу веде від вихідної енергії карти ${name1} (${m1}) до підсумкового стану карти ${nameEnd} (${m2}), створюючи шлях від початкового імпульсу до якісного практичного результату.`
        });
      }

      const elCounts = ctx.elements || { fire: 0, water: 0, air: 0, earth: 0 };
      let dominantEl = null;
      let maxElCount = 0;
      ['fire', 'water', 'air', 'earth'].forEach(el => {
        if ((elCounts[el] || 0) > maxElCount) {
          maxElCount = elCounts[el];
          dominantEl = el;
        }
      });

      if (maxElCount >= 2 && dominantEl) {
        const elDescriptions = {
          fire: 'Провідна стихія — Вогонь: ситуація потребує рішучості, сміливої ініціативи та активних дій.',
          water: 'Провідна стихія — Вода: головний ключ до порозуміння лежить через емоційну щирість та інтуїцію.',
          air: 'Провідна стихія — Повітря: успіх принесе інтелектуальна тверезість, чітка стратегія та відвертий діалог.',
          earth: 'Провідна стихія — Земля: найважливіше зараз — матеріальна стабільність, практичний розрахунок і терпіння.'
        };
        sections.push({
          title: 'Стихійна опора',
          body: elDescriptions[dominantEl]
        });
      }

      const combos = analyzeCombos(ctx, lang);
      if (combos.length > 0) {
        sections.push({
          title: 'Особливе поєднання',
          body: combos.join(' ')
        });
      }

      if (ctx.reversedCount > ctx.n / 2) {
        guidance = 'Більшість карт закликає звернути увагу всередину себе. Звільніться від старих страхів або гіперконтролю — ситуація вирівняється, щойно ви відпустите внутрішній спротив.';
      } else {
        guidance = 'Спирайтеся на наявні ресурси та зберігайте впевненість у власних силах. Рухайтеся вперед послідовно, довіряючи природному розвитку подій.';
      }
    } else {
      // English
      if (ctx.majorPct >= 66) {
        lead = `Major Arcana dominate (${ctx.majorCount} of ${ctx.n}) — this is a watershed, transformative phase touching profound life milestones rather than trivial routines.`;
      } else if (ctx.majorCount === 0) {
        lead = `Minor Arcana shape this reading — the outcome rests fully in your hands, governed by conscious daily decisions, adaptability, and steady practical steps.`;
      } else {
        lead = `A balanced interplay of Major and Minor Arcana: essential personal lessons find their direct expression through tangible daily choices.`;
      }

      if (ctx.first && ctx.last && ctx.n >= 3) {
        const name1 = ctx.nameAt(0, lang);
        const nameEnd = ctx.nameAt(ctx.n - 1, lang);
        sections.push({
          title: 'Progression Flow',
          body: `The trajectory unfolds from the opening energy of ${name1} toward the resolution of ${nameEnd}, guiding you from initial spark to grounded culmination.`
        });
      }

      if (ctx.reversedCount > ctx.n / 2) {
        guidance = 'Most cards urge an internal reset. Release overcontrol and lingering apprehension — clarity will arrive as soon as internal friction softens.';
      } else {
        guidance = 'Lean on your existing foundation and trust your capabilities. Advance with calm confidence, honoring your natural pace.';
      }
    }

    const items = [lead, ...sections.map(s => (s.title ? `${s.title}: ${s.body}` : s.body)), guidance];

    return {
      lead,
      sections,
      guidance,
      items
    };
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

  // ─── YES/NO CARD POLARITY (−2 … +2) ─────────────────────────────────────────
  // +2 = strong Yes, +1 = mild Yes, 0 = neutral, −1 = mild No, −2 = strong No
  // Reversed cards flip the sign of the base bias.
  const YES_BIAS = {
    // Major Arcana
    m00:  1,  // Fool
    m01:  2,  // Magician
    m02:  1,  // High Priestess
    m03:  2,  // Empress
    m04:  1,  // Emperor
    m05:  0,  // Hierophant
    m06:  1,  // Lovers
    m07:  2,  // Chariot
    m08:  2,  // Strength
    m09:  0,  // Hermit
    m10:  1,  // Wheel of Fortune
    m11:  0,  // Justice
    m12: -1,  // Hanged Man
    m13: -1,  // Death
    m14:  1,  // Temperance
    m15: -2,  // Devil
    m16: -2,  // Tower
    m17:  2,  // Star
    m18: -1,  // Moon
    m19:  2,  // Sun
    m20:  1,  // Judgement
    m21:  2,  // World

    // Wands (Fire) — generally active / yes-leaning
    w01:  2, w02:  0, w03:  2, w04:  2, w05: -1,
    w06:  2, w07:  1, w08:  2, w09: -1, w10: -2,
    w11:  1, w12:  1, w13:  1, w14:  2,

    // Cups (Water) — emotional / mostly yes
    c01:  2, c02:  1, c03:  2, c04: -1, c05: -2,
    c06:  2, c07:  0, c08: -1, c09:  2, c10:  2,
    c11:  1, c12:  1, c13:  2, c14:  1,

    // Swords (Air) — conflict / mostly no or mixed
    s01:  0, s02:  0, s03: -2, s04: -1, s05: -2,
    s06:  1, s07: -1, s08: -2, s09: -2, s10: -2,
    s11:  0, s12: -1, s13:  0, s14:  1,

    // Pentacles (Earth) — material / mixed-stable
    p01:  2, p02:  0, p03:  2, p04: -1, p05: -2,
    p06:  1, p07:  0, p08:  1, p09:  2, p10:  2,
    p11:  1, p12:  1, p13:  1, p14:  2,
  };

  function getCardPolarity(card) {
    if (!card) return 0;
    const id = String(card.id || '');
    const base = YES_BIAS[id] !== undefined ? YES_BIAS[id] : 0;
    return card.reversed ? -base : base;
  }

  // ─── YES OR NO SYNTHESIS ─────────────────────────────────────────────────────
  function synthesizeYesNo(ctx, lang) {
    const uk = lang === 'uk';
    const items = [];
    const cleanEnd = (str) => (str ? str.replace(/[.,\s]+$/, '') : '');

    const forCard = ctx.cardAt(0);
    const againstCard = ctx.cardAt(1);
    const keyCard = ctx.cardAt(2);

    const polFor = getCardPolarity(forCard);       // −2…+2
    const polAgainst = getCardPolarity(againstCard);
    const polKey = getCardPolarity(keyCard);

    // Score model:
    // • "За" contributes its polarity directly (positive card → more Yes)
    // • "Проти" contributes the inverse (negative card in Against → stronger No)
    // • Key has 0.75 weight and can tip a close result
    const yesScore = polFor;
    const noScore = -polAgainst;          // e.g. Devil upright in Against → noScore = +2
    const keyScore = polKey * 0.75;
    const totalScore = yesScore + noScore + keyScore;

    const majFor = ctx.isMajorAt(0);
    const majAgainst = ctx.isMajorAt(1);
    const majKey = ctx.isMajorAt(2);
    const revFor = ctx.isRevAt(0);
    const revAgainst = ctx.isRevAt(1);
    const revKey = ctx.isRevAt(2);

    // ── 1. Чітка відповідь ────────────────────────────────────────────────────
    let verdictUk, verdictEn, balanceUk, balanceEn;

    if (totalScore >= 2.5) {
      verdictUk = 'Чітке Так';
      verdictEn = 'Clear Yes';
      balanceUk = `Сили «За» значно переважають (рахунок ${totalScore.toFixed(1)}). Карта-ключ (${ctx.nameAt(2, 'uk')}) підтверджує позитивний вектор.`;
      balanceEn = `"Yes" forces clearly dominate (score ${totalScore.toFixed(1)}). The key card (${ctx.nameAt(2, 'en')}) confirms the positive direction.`;
    } else if (totalScore >= 1.0) {
      verdictUk = 'Так, але з умовами';
      verdictEn = 'Yes, but with conditions';
      balanceUk = `Перевага на боці «Так» (рахунок ${totalScore.toFixed(1)}), проте є нюанси. Карта-ключ (${ctx.nameAt(2, 'uk')}) вказує на умову, яку варто врахувати.`;
      balanceEn = `"Yes" has the edge (score ${totalScore.toFixed(1)}), yet nuances remain. The key card (${ctx.nameAt(2, 'en')}) points to a condition to consider.`;
    } else if (totalScore > -1.0) {
      verdictUk = 'Невизначено — залежить від вас';
      verdictEn = 'Undetermined — depends on you';
      balanceUk = `Сили майже врівноважені (рахунок ${totalScore.toFixed(1)}). Однозначна відповідь залежить від вашого наступного кроку. Карта-ключ (${ctx.nameAt(2, 'uk')}) є вирішальним фактором.`;
      balanceEn = `Forces are nearly balanced (score ${totalScore.toFixed(1)}). The clear answer depends on your next step. The key card (${ctx.nameAt(2, 'en')}) is decisive.`;
    } else if (totalScore > -2.5) {
      verdictUk = 'Скоріше Ні, але є шанс';
      verdictEn = 'More likely No, but a chance remains';
      balanceUk = `Перевага на боці «Ні» (рахунок ${totalScore.toFixed(1)}). Карта-ключ (${ctx.nameAt(2, 'uk')}) пропонує шлях, який може пом’якшити або змінити ситуацію.`;
      balanceEn = `"No" has the edge (score ${totalScore.toFixed(1)}). The key card (${ctx.nameAt(2, 'en')}) offers a path that may soften or reverse the outcome.`;
    } else {
      verdictUk = 'Чітке Ні';
      verdictEn = 'Clear No';
      balanceUk = `Сили «Проти» значно переважають (рахунок ${totalScore.toFixed(1)}). Карта-ключ (${ctx.nameAt(2, 'uk')}) підтверджує наявність суттєвих перешкод.`;
      balanceEn = `"No" forces clearly dominate (score ${totalScore.toFixed(1)}). The key card (${ctx.nameAt(2, 'en')}) confirms significant obstacles.`;
    }

    // We no longer push verdict to items because we want to render it in a beautiful highlighted panel
    // in index.html above the bullet points!
    
    // ── 2. Чинники «За» (без дослівного дублювання опису карти) ─────────────
    let forExtraUk = '';
    let forExtraEn = '';
    if (polFor >= 2) {
      forExtraUk = 'Сильна підтримка — ця енергія активно працює на позитивний результат.';
      forExtraEn = 'Strong support — this energy actively works toward a positive outcome.';
    } else if (polFor >= 1) {
      forExtraUk = 'Помірна, але реальна підтримка на користь «Так».';
      forExtraEn = 'Moderate but real support for a "Yes".';
    } else if (polFor === 0) {
      forExtraUk = 'Нейтральний фактор — сам по собі не схиляє шальку.';
      forExtraEn = 'Neutral factor — does not tip the scale by itself.';
    } else if (polFor >= -1) {
      forExtraUk = 'Слабка або суперечлива підтримка; варто перевірити, чи справді цей фактор на вашому боці.';
      forExtraEn = 'Weak or mixed support; question whether this factor truly works in your favor.';
    } else {
      forExtraUk = 'Цей фактор виглядає швидше як прихований ризик, ніж як справжня підтримка.';
      forExtraEn = 'This factor looks more like a hidden risk than genuine support.';
    }
    if (majFor) {
      forExtraUk += ' Старший Аркан підсилює вагу цього чинника.';
      forExtraEn += ' A Major Arcana increases the weight of this factor.';
    }
    if (revFor && YES_BIAS[forCard && forCard.id] > 0) {
      forExtraUk += ' Перевернуте положення послаблює або спотворює позитивну енергію.';
      forExtraEn += ' The reversed position weakens or distorts the positive energy.';
    }

    function getCardAdvice(card, lang) {
      if (!card) return '';
      const uk = lang === 'uk' || lang === 'ua';
      const isRev = !!card.reversed;
      let raw = isRev
        ? (uk ? (card.meaning_reversed || card.meaning_upright || '') : (card.meaning_reversed_en || card.meaning_upright_en || ''))
        : (uk ? (card.meaning_upright || '') : (card.meaning_upright_en || ''));
      if (!raw) return '';
      const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
      for (const line of lines) {
        if (line.includes('Як порада:') || line.includes('As advice:')) {
          return line.replace(/^\s*[•\-*]\s*(Як порада:|As advice:)\s*/i, '').trim();
        }
      }
      let firstPara = lines[0] || '';
      firstPara = firstPara.replace(/^[^—–\-:]{2,50}[—–\-:]\s*/i, '');
      return firstPara.split('.')[0] + '.';
    }

    function getCardWarning(card, lang) {
      if (!card) return '';
      const uk = lang === 'uk' || lang === 'ua';
      const isRev = !!card.reversed;
      let raw = isRev
        ? (uk ? (card.meaning_reversed || card.meaning_upright || '') : (card.meaning_reversed_en || card.meaning_upright_en || ''))
        : (uk ? (card.meaning_upright || '') : (card.meaning_upright_en || ''));
      if (!raw) return '';
      const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
      for (const line of lines) {
        if (line.includes('Як попередження:') || line.includes('As warning:')) {
          return line.replace(/^\s*[•\-*]\s*(Як попередження:|As warning:)\s*/i, '').trim();
        }
      }
      let firstPara = lines[0] || '';
      firstPara = firstPara.replace(/^[^—–\-:]{2,50}[—–\-:]\s*/i, '');
      return firstPara.split('.')[0] + '.';
    }

    function getCardKeywords(card, lang) {
      if (!card) return '';
      const uk = lang === 'uk' || lang === 'ua';
      const isRev = !!card.reversed;
      let raw = isRev
        ? (uk ? (card.meaning_reversed || card.meaning_upright || '') : (card.meaning_reversed_en || card.meaning_upright_en || ''))
        : (uk ? (card.meaning_upright || '') : (card.meaning_upright_en || ''));
      if (!raw) return '';
      const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
      for (const line of lines) {
        if ((uk && line.includes('Ключові слова')) || (!uk && line.includes('Keywords'))) {
          const parts = line.split(':');
          if (parts.length > 1) {
            const list = parts.slice(1).join(':').split(',').map(s => s.trim().replace(/[.;]+$/, '')).filter(Boolean);
            return list.slice(0, 5).join(', ');
          }
        }
      }
      return '';
    }

    function getCardNuance(card, lang) {
      if (!card) return '';
      const uk = lang === 'uk' || lang === 'ua';
      const isRev = !!card.reversed;
      let raw = isRev
        ? (uk ? (card.meaning_reversed || card.meaning_upright || '') : (card.meaning_reversed_en || card.meaning_upright_en || ''))
        : (uk ? (card.meaning_upright || '') : (card.meaning_upright_en || ''));
      if (!raw) return '';
      const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
      for (const line of lines) {
        if ((uk && line.includes('Нюанси в розкладах')) || (!uk && line.includes('Nuances in spreads'))) {
          const parts = line.split(':');
          if (parts.length > 1) {
            return parts.slice(1).join(':').trim();
          }
        }
      }
      return '';
    }

    const advice0 = getCardAdvice(forCard, lang);
    const warning1 = getCardWarning(againstCard, lang);
    const advice2 = getCardAdvice(keyCard, lang);
    const warning2 = getCardWarning(keyCard, lang);

    const kw0 = getCardKeywords(forCard, lang);
    const kwText0Uk = kw0 ? `Ключові теми чинника: ${kw0}. ` : '';
    const kwText0En = kw0 ? `Key themes of this factor: ${kw0}. ` : '';

    items.push(uk
      ? `Чинники «За»: ${ctx.nameAt(0, 'uk')}. ${forExtraUk} ${kwText0Uk}Рекомендація: ${advice0}`
      : `Factors for "Yes": ${ctx.nameAt(0, 'en')}. ${forExtraEn} ${kwText0En}Recommendation: ${advice0}`);

    // ── 3. Чинники «Проти» ───────────────────────────────────────────────────
    let againstExtraUk = '';
    let againstExtraEn = '';
    // polAgainst high positive → weak obstacle; low/negative → strong obstacle
    if (polAgainst <= -2) {
      againstExtraUk = 'Серйозна перешкода — цей фактор реально блокує або ускладнює шлях.';
      againstExtraEn = 'Serious obstacle — this factor genuinely blocks or complicates the path.';
    } else if (polAgainst <= -1) {
      againstExtraUk = 'Відчутна перешкода, яку не варто ігнорувати.';
      againstExtraEn = 'A tangible obstacle that should not be ignored.';
    } else if (polAgainst === 0) {
      againstExtraUk = 'Нейтральний або слабкий опір — навряд чи стане вирішальним.';
      againstExtraEn = 'Neutral or weak resistance — unlikely to be decisive.';
    } else if (polAgainst >= 1) {
      againstExtraUk = 'Перешкода виглядає слабкою або навіть містить приховану можливість.';
      againstExtraEn = 'The obstacle appears weak or even contains a hidden opportunity.';
    } else {
      againstExtraUk = 'Цей фактор у позиції «Проти» працює слабко.';
      againstExtraEn = 'This factor in the "Against" position has little force.';
    }
    if (majAgainst) {
      againstExtraUk += ' Старший Аркан робить цю перешкоду принциповою.';
      againstExtraEn += ' A Major Arcana makes this obstacle fundamental.';
    }
    if (revAgainst && YES_BIAS[againstCard && againstCard.id] < 0) {
      againstExtraUk += ' Перевернуте положення пом’якшує негативний вплив.';
      againstExtraEn += ' The reversed position softens the negative impact.';
    }

    const kw1 = getCardKeywords(againstCard, lang);
    const kwText1Uk = kw1 ? `Ключові ризики або теми перешкоди: ${kw1}. ` : '';
    const kwText1En = kw1 ? `Key risks or themes of this obstacle: ${kw1}. ` : '';

    items.push(uk
      ? `Чинники «Проти»: ${ctx.nameAt(1, 'uk')}. ${againstExtraUk} ${kwText1Uk}Застереження: ${warning1}`
      : `Factors against: ${ctx.nameAt(1, 'en')}. ${againstExtraEn} ${kwText1En}Warning: ${warning1}`);

    // ── 4. Порада / Ключ ─────────────────────────────────────────────────────
    let keyExtraUk = '';
    let keyExtraEn = '';
    if (polKey >= 1) {
      keyExtraUk = 'Дотримуйтесь цієї поради — вона підсилює шанси на позитивний результат.';
      keyExtraEn = 'Follow this advice — it strengthens the chances of a positive outcome.';
    } else if (polKey <= -1) {
      keyExtraUk = 'Карта-ключ застерігає: без врахування цього фактора бажаний результат під питанням.';
      keyExtraEn = 'The key card warns: without addressing this factor the desired outcome is in doubt.';
    } else {
      keyExtraUk = 'Ключ вказує на важливий нюанс, який варто свідомо врахувати у рішенні.';
      keyExtraEn = 'The key points to an important nuance to consciously include in your decision.';
    }
    if (majKey) {
      keyExtraUk += ' Старший Аркан у ключі підкреслює принципову важливість цієї рекомендації.';
      keyExtraEn += ' A Major Arcana in the key position underlines the fundamental importance of this guidance.';
    }

    const kw2 = getCardKeywords(keyCard, lang);
    const kwText2Uk = kw2 ? `Опорні орієнтири карти: ${kw2}. ` : '';
    const kwText2En = kw2 ? `Key anchor points of this card: ${kw2}. ` : '';

    items.push(uk
      ? `Порада / Ключ: ${ctx.nameAt(2, 'uk')}. ${keyExtraUk} ${kwText2Uk}Порада ключа: ${advice2}`
      : `Advice / Key: ${ctx.nameAt(2, 'en')}. ${keyExtraEn} ${kwText2En}Advice of the key: ${advice2}`);

    // ── 5. Знакові комбінації ─────────────────────────────────────────────────
    analyzeCombos(ctx, lang).forEach((c) => items.push(c));

    // ── 6. Головний фокус ────────────────────────────────────────────────────
    let focusText;
    const nuance2 = getCardNuance(keyCard, lang);
    const nuanceSuffixUk = nuance2 ? ` Важливий нюанс ситуації: ${nuance2}` : '';
    const nuanceSuffixEn = nuance2 ? ` Important situational nuance: ${nuance2}` : '';

    if (totalScore >= 2.5) {
      focusText = uk
        ? `Головний фокус: Зелене світло для дій. Сили «За» повністю домінують — сфокусуйтеся на активному втіленні задуманого без зайвих сумнівів.${nuanceSuffixUk}`
        : `Main focus: Green light to act. "Yes" forces dominate completely — focus on actively implementing your plan without second-guessing.${nuanceSuffixEn}`;
    } else if (totalScore >= 1.0) {
      focusText = uk
        ? `Головний фокус: Позитивний вектор відкритий, проте вимагає уважності. Зосередьтеся на тому, щоб тримати під контролем ризики «${ctx.nameAt(1, 'uk')}», спираючись на силу «${ctx.nameAt(0, 'uk')}».${nuanceSuffixUk}`
        : `Main focus: The positive vector is open, yet requires mindful navigation. Focus on managing the risks of "${ctx.nameAt(1, 'en')}" by leaning into the strength of "${ctx.nameAt(0, 'en')}".${nuanceSuffixEn}`;
    } else if (totalScore > -1.0) {
      focusText = uk
        ? `Головний фокус: Переломна точка рівноваги. Однозначної зумовленості немає — підсумок вирішить ваша особиста ініціатива та вибір наступного кроку. Не займайте пасивну позицію.${nuanceSuffixUk}`
        : `Main focus: A critical balance point. There is no rigid outcome — your personal initiative and chosen next step will tip the scale. Avoid taking a passive stance.${nuanceSuffixEn}`;
    } else if (totalScore > -2.5) {
      focusText = uk
        ? `Головний фокус: Не форсуйте події завчасно. Опір обставин наразі відчутний. Спершу нейтралізуйте або пом’якшіть чинники ризику («${ctx.nameAt(1, 'uk')}»), і лише після цього рухайтеся далі.${nuanceSuffixUk}`
        : `Main focus: Do not force events prematurely. Resistance is currently tangible. First neutralize or soften the risk factors ("${ctx.nameAt(1, 'en')}") before making decisive moves.${nuanceSuffixEn}`;
    } else {
      focusText = uk
        ? `Головний фокус: Свідома пауза та перегляд плану. Прямий штурм зараз призведе до марної втрати енергії. Збережіть ресурси та зачекайте на зміну обставин.${nuanceSuffixUk}`
        : `Main focus: Conscious pause and reassessment. Forcing forward right now risks unnecessary depletion. Conserve resources and wait for favorable shifts.${nuanceSuffixEn}`;
    }
    items.push(focusText);

    return {
      items: items,
      verdict: uk ? verdictUk : verdictEn,
      balance: uk ? balanceUk : balanceEn,
      score: totalScore
    };
  }

  function getCardAlchemicalInsight(card, lang) {
    if (!card) return '';
    const uk = lang === 'uk';
    
    const id = String(card.id || '');
    const rev = !!card.reversed;

    if (id.startsWith('m')) {
      const majorThemes = {
        m00: { uk: 'імпульс чистого потенціалу, свободи та готовності до ризику', en: 'impulse of pure potential, freedom and risk-readiness' },
        m01: { uk: 'активна воля, концентрація сили та маніфестація наміру', en: 'active will, focus of power and manifestation of intent' },
        m02: { uk: 'пасивне знання, інтуїція та глибокі підсвідомі таємниці', en: 'passive knowledge, intuition and deep subconscious secrets' },
        m03: { uk: 'родючість, достаток, творче творення та безумовна любов', en: 'fertility, abundance, creative creation and unconditional love' },
        m04: { uk: 'структура, стабільність, контроль та батьківський захист', en: 'structure, stability, control and paternal protection' },
        m05: { uk: 'духовне наставництво, традиції, навчання та пошук сенсу', en: 'spiritual mentorship, traditions, learning and search for meaning' },
        m06: { uk: 'вибір серця, союзи, гармонія та взаємне тяжіння', en: 'choice of the heart, alliances, harmony and mutual attraction' },
        m07: { uk: 'стрімкий рух, сила волі, перемога та рішучий тріумф', en: 'swift movement, willpower, victory and decisive triumph' },
        m08: { uk: 'внутрішня стійкість, м\'яка сила та приборкання пристрастей', en: 'inner resilience, gentle strength and taming of passions' },
        m09: { uk: 'глибокий самоаналіз, мудрість усамітнення та пошук істини', en: 'deep self-analysis, wisdom of solitude and quest for truth' },
        m10: { uk: 'циклічність долі, несподівані повороти та фактор удачі', en: 'cyclicality of fate, unexpected turns and the luck factor' },
        m11: { uk: 'об\'єктивна справедливість, чесність, кармічний баланс та закон', en: 'objective justice, honesty, karmic balance and law' },
        m12: { uk: 'зміна перспективи, добровільна жертва та пауза для переосмислення', en: 'change of perspective, voluntary sacrifice and pause for rethinking' },
        m13: { uk: 'неминуче закриття старого циклу та глибоке переродження', en: 'inevitable closure of the old cycle and deep rebirth' },
        m14: { uk: 'золота середина, баланс емоцій, спокійна інтеграція та помірність', en: 'golden mean, emotional balance, calm integration and temperance' },
        m15: { uk: 'спокуса, матеріальна залежність, тіньові аспекти та пристрасть', en: 'temptation, material dependence, shadow aspects and passion' },
        m16: { uk: 'руйнування застарілих ілюзій, раптове очищення та інсайт', en: 'destruction of outdated illusions, sudden clearing and insight' },
        m17: { uk: 'вища надія, натхнення, зцілення та далекі гарні перспективи', en: 'higher hope, inspiration, healing and distant bright prospects' },
        m18: { uk: 'сфера підсвідомих страхів, ілюзій, сновидінь та інтуїтивного пошуку', en: 'sphere of subconscious fears, illusions, dreams and intuitive search' },
        m19: { uk: 'ясність розуму, тріумф, життєрадісність та повний успіх', en: 'mental clarity, triumph, vitality and complete success' },
        m20: { uk: 'пробудження, покликання, звільнення від минулого та важливі висновки', en: 'awakening, calling, liberation from the past and major conclusions' },
        m21: { uk: 'повна гармонія, завершення великого циклу та розширення кордонів', en: 'complete harmony, completion of a major cycle and expansion of boundaries' },
      };
      const theme = majorThemes[id];
      if (theme) {
        let tText = uk ? theme.uk : theme.en;
        if (rev) {
          tText = uk ? `необхідність переоцінки теми ${tText}` : `need to re-evaluate themes of ${tText}`;
        }
        return tText;
      }
    }

    const suit = id.charAt(0); // w, c, s, p
    const num = parseInt(id.slice(1), 10);

    const elementsMeta = {
      w: { uk: 'активної стихії Вогню (ділові починання, пристрасть, соціальний рух)', en: 'active element of Fire (career drive, passion, social momentum)' },
      c: { uk: 'чутливої стихії Води (емоції, підсвідомість, стосунки, емпатія)', en: 'sensitive element of Water (emotions, subconscious, relationships, empathy)' },
      s: { uk: 'динамічної стихії Повітря (думки, логіка, конфлікти, бар\'єри розуму)', en: 'dynamic element of Air (thoughts, logic, conflicts, mental barriers)' },
      p: { uk: 'стабільної стихії Землі (матеріальний світ, фінанси, здоров\'я, надійність)', en: 'stable element of Earth (material world, finances, health, reliability)' },
    };

    const numberMeta = {
      1: { uk: 'початок нового імпульсу та чистий потенціал у цій сфері', en: 'beginning of a new impulse and pure potential in this area' },
      2: { uk: 'необхідність вибору, балансування чи пошук партнерства', en: 'need for choice, balancing, or seeking partnership' },
      3: { uk: 'перші реальні результати, самовираження та впевнене зростання', en: 'first real results, self-expression and confident growth' },
      4: { uk: 'період фіксації, стабільності, але також ризик застою', en: 'period of fixation, stability, but also a risk of stagnation' },
      5: { uk: 'ситуація кризи, виклику, подолання труднощів або тимчасової втрати', en: 'situation of crisis, challenge, overcoming difficulties, or temporary loss' },
      6: { uk: 'відновлення гармонії, отримання підтримки чи заслужена перемога', en: 'restoring harmony, receiving support, or well-deserved victory' },
      7: { uk: 'час стратегічного планування, оцінки перспектив та терпіння', en: 'time for strategic planning, assessing prospects, and patience' },
      8: { uk: 'необхідність дисципліни, майстерності чи швидкого руху вперед', en: 'need for discipline, mastery, or swift forward movement' },
      9: { uk: 'накопичення досвіду, самодостатність та наближення до фіналу', en: 'accumulation of experience, self-sufficiency and approaching the finale' },
      10: { uk: 'завершення великого етапу, надлишок енергії чи остаточний підсумок', en: 'completion of a major phase, excess energy or final outcome' },
      11: { uk: 'енергія Пажа — прихід нових новин, відкритість до навчання та перші кроки у сфері', en: 'energy of the Page — arrival of news, openness to learning and first steps' },
      12: { uk: 'енергія Лицаря — активні дії, швидкий рух та рішучий напір', en: 'energy of the Knight — active steps, swift movement and decisive drive' },
      13: { uk: 'енергія Королеви — зрілість емоцій, вміння планувати та внутрішня підтримка', en: 'energy of the Queen — emotional maturity, ability to plan and inner support' },
      14: { uk: 'енергія Короля — авторитет, повний контроль над ситуацією та стратегічне управління', en: 'energy of the King — authority, full control over the situation and strategic management' },
    };

    const el = elementsMeta[suit];
    const nm = numberMeta[num];

    if (el && nm) {
      if (uk) {
        return `${nm.uk} через призму ${el.uk}`;
      } else {
        return `${nm.en} through the lens of ${el.en}`;
      }
    }

    return '';
  }

  function getCardSphereMeaning(card, sphereKey, lang) {
    if (!card) return '';
    const uk = lang === 'uk' || lang === 'ua';
    const isRev = !!card.reversed;
    
    let text = '';
    if (isRev) {
      text = uk ? (card.meaning_reversed || card.meaning_upright || '') 
                : (card.meaning_reversed_en || card.meaning_upright_en || '');
    } else {
      text = uk ? (card.meaning_upright || '') 
                : (card.meaning_upright_en || '');
    }
    
    if (!text) return '';

    const lines = text.split(/\r?\n/);
    
    let keyword = '';
    if (uk) {
      if (sphereKey === 'love') keyword = 'Любов';
      else if (sphereKey === 'work') keyword = 'Робота';
      else if (sphereKey === 'money') keyword = 'Фінанси';
      else if (sphereKey === 'health') keyword = 'Здоров';
      else if (sphereKey === 'spirit') keyword = 'Духов';
    } else {
      if (sphereKey === 'love') keyword = 'Love';
      else if (sphereKey === 'work') keyword = 'Work';
      else if (sphereKey === 'money') keyword = 'Financ';
      else if (sphereKey === 'health') keyword = 'Health';
      else if (sphereKey === 'spirit') keyword = 'Spirit';
    }

    if (keyword) {
      for (let line of lines) {
        line = line.trim();
        if (line.includes(keyword) && (line.startsWith('•') || line.startsWith('-') || line.startsWith('*') || line.includes(':'))) {
          const colonIdx = line.indexOf(':');
          if (colonIdx !== -1) {
            let content = line.slice(colonIdx + 1).trim();
            content = content.replace(/[.;!?,\s]+$/, '');
            if (content) {
              return content;
            }
          }
        }
      }
    }

    // Fallback to general concise first sentence
    let firstPart = text.split(/\n+/)[0].trim();
    firstPart = firstPart.replace(/^[^a-zA-Zа-яА-ЯіІїЇєЄ\-]{2,40}[\-:]\s*/i, '').replace(/^[\s\-:,]+/, '');
    const cut = firstPart.search(/[.!?](\s|$)/);
    if (cut > 15 && cut < 180) firstPart = firstPart.slice(0, cut + 1);
    else if (firstPart.length > 140) firstPart = firstPart.slice(0, 137).replace(/\s+\S*$/, '') + '...';
    return firstPart.trim().replace(/[.;!?,\s]+$/, '');
  }

  // ─── DAILY PATH SYNTHESIS (Енергія, Перешкода, Ресурс, Порада) ──────────────
  function synthesizeDailyPath(ctx, lang) {
    const uk = lang === 'uk';
    const items = [];

    const eCard = ctx.cardAt(0); // Energy
    const oCard = ctx.cardAt(1); // Obstacle
    const rCard = ctx.cardAt(2); // Resource
    const aCard = ctx.cardAt(3); // Advice

    const majE = ctx.isMajorAt(0);
    const majO = ctx.isMajorAt(1);
    const majR = ctx.isMajorAt(2);
    const majA = ctx.isMajorAt(3);

    const revE = ctx.isRevAt(0);
    const revO = ctx.isRevAt(1);
    const revR = ctx.isRevAt(2);
    const revA = ctx.isRevAt(3);

    const eMean = getCardSphereMeaning(eCard, 'work', lang);
    const oMean = getCardSphereMeaning(oCard, 'work', lang);
    const rMean = getCardSphereMeaning(rCard, 'spirit', lang);
    const aMean = getCardSphereMeaning(aCard, 'work', lang);

    const cleanMeaning = (str) => {
      if (!str) return '';
      return str.trim().replace(/[.;!?,\s]+$/, '');
    };

    const lowercaseFirst = (str) => {
      const cleaned = cleanMeaning(str);
      if (!cleaned) return '';
      return cleaned.charAt(0).toLowerCase() + cleaned.slice(1);
    };

    // 1. Загальний тон та атмосфера дня
    let atmosphere = '';
    const eC = lowercaseFirst(eMean);
    const mainEnergyUk = eC ? ` — вона приносить такі ключові теми: ${eC}` : '';
    const mainEnergyEn = eC ? ` — bringing the following themes: ${eC}` : '';

    if (ctx.majorCount >= 2) {
      atmosphere = uk
        ? `Атмосфера дня: Сьогодні знаменний день із потужними внутрішніми змінами. Провідна енергія дня задається картою ${ctx.nameAt(0, 'uk')}${mainEnergyUk}.`
        : `Atmosphere of the day: Today is a significant day of powerful internal shifts. The leading energy is set by ${ctx.nameAt(0, 'en')}${mainEnergyEn}.`;
    } else if (majE) {
      atmosphere = uk
        ? `Атмосфера дня: Провідна тема дня задається Старшим Арканом ${ctx.nameAt(0, 'uk')}. Це час важливих усвідомлень, коли на перший план виходять такі аспекти: ${eC}. Буденні турботи відступають на другий план.`
        : `Atmosphere of the day: The day's theme is set by a Major Arcana ${ctx.nameAt(0, 'en')}. This is a time for deep realizations, bringing these aspects to the forefront: ${eC}.`;
    } else {
      atmosphere = uk
        ? `Атмосфера дня: Практичний та динамічний день під знаком ${ctx.nameAt(0, 'uk')}. Енергія дня спрямовує вашу увагу на такі питання: ${eC}.`
        : `Atmosphere of the day: A practical and dynamic day under the sign of ${ctx.nameAt(0, 'en')}. Today's energy directs your attention to: ${eC}.`;
    }
    items.push(atmosphere);

    // 2. Взаємодія Енергії та Перешкоди
    let dynamics = '';
    const oC = lowercaseFirst(oMean);

    if (revO) {
      const obsMeanUk = oC ? `, яка вказує на такі внутрішні блоки: ${oC}` : '';
      const obsMeanEn = oC ? `, pointing to these internal blocks: ${oC}` : '';
      dynamics = uk
        ? `Динаміка дня: Перешкода дня виражена картою ${ctx.nameAt(1, 'uk')}${obsMeanUk}. Це вказує, що труднощі мають переважно внутрішній характер (сумніви, лінощі або занепокоєння), які ви цілком здатні контролювати.`
        : `Dynamics of the day: The obstacle is represented by ${ctx.nameAt(1, 'en')}${obsMeanEn}. This suggests the challenge is primarily internal (self-doubt, inertia, or anxiety) which you are fully capable of controlling.`;
    } else {
      const obsMeanUk = oC ? `, що несе з собою такі труднощі: ${oC}` : '';
      const obsMeanEn = oC ? `, bringing the following difficulties: ${oC}` : '';
      dynamics = uk
        ? `Динаміка дня: Головним викликом сьогодні є ${ctx.nameAt(1, 'uk')}${obsMeanUk}. Сприймайте це як робоче завдання, яке вимагає уваги, а не як непереборну стіну.`
        : `Dynamics of the day: The main challenge today is ${ctx.nameAt(1, 'en')}${obsMeanEn}. View this as a practical task requiring attention, not an insurmountable wall.`;
    }
    items.push(dynamics);

    // 3. Спирання на Ресурс
    let resourceText = '';
    const rC = lowercaseFirst(rMean);

    if (revR) {
      const resMeanUk = rC ? `, яка символізує такі прагнення або стани: ${rC}` : '';
      const resMeanEn = rC ? `, embodying: ${rC}` : '';
      resourceText = uk
        ? `Джерело сили: Ваш потенціал сьогодні прихований у карті ${ctx.nameAt(2, 'uk')}${resMeanUk}. Щоб розблокувати цей ресурс, вам доведеться діяти нестандартно або звернутися до свого минулого досвіду.`
        : `Source of strength: Your potential today is hidden in ${ctx.nameAt(2, 'en')}${resMeanEn}. To unlock this resource, you will need to act unconventionally or draw from past experiences.`;
    } else {
      const resMeanUk = rC ? `, що приносить такі сили: ${rC}` : '';
      const resMeanEn = rC ? `, bringing these strengths: ${rC}` : '';
      resourceText = uk
        ? `Джерело сили: Ваша головна опора сьогодні — це ${ctx.nameAt(2, 'uk')}${resMeanUk}. Спирайтеся на цю енергію, вона дасть вам необхідний прилив сил.`
        : `Source of strength: Your main anchor today is ${ctx.nameAt(2, 'en')}${resMeanEn}. Lean on this energy, it will provide the necessary boost of power.`;
    }
    items.push(resourceText);

    // 4. Порада
    let adviceText = '';
    const aC = lowercaseFirst(aMean);

    if (revA) {
      const advMeanUk = aC ? ` Уникайте поспіху або надмірності в таких аспектах: ${aC}.` : '';
      const advMeanEn = aC ? ` Avoid haste or excess in these aspects: ${aC}.` : '';
      adviceText = uk
        ? `Порада дня: Карта ${ctx.nameAt(3, 'uk')} у перевернутому стані радить сповільнитися, утриматися від імпульсивних рішень та проявити обережність.${advMeanUk}`
        : `Advice of the day: The card ${ctx.nameAt(3, 'en')} in its reversed state suggests slowing down, avoiding impulsive decisions, and exercising caution.${advMeanEn}`;
    } else {
      const advMeanUk = aC ? ` — ${aC}` : '';
      const advMeanEn = aC ? ` — ${aC}` : '';
      adviceText = uk
        ? `Порада дня: Довіртеся рекомендації ${ctx.nameAt(3, 'uk')}${advMeanUk}. Це найкращий тактичний крок для досягнення гармонії та продуктивності сьогодні.`
        : `Advice of the day: Trust the guidance of ${ctx.nameAt(3, 'en')}${advMeanEn}. This is the best tactical step to achieve harmony and productivity today.`;
    }
    items.push(adviceText);

    // 5. Головний фокус дня
    let focusText = '';
    if (majA) {
      focusText = uk
        ? `Головний фокус дня: Керуйтеся вищою мудрістю карти ${ctx.nameAt(3, 'uk')} — сьогоднішні дії закладають довготривалий фундамент.`
        : `Main focus of the day: Be guided by the higher wisdom of ${ctx.nameAt(3, 'en')} — today's actions lay a lasting foundation.`;
    } else if (majO) {
      focusText = uk
        ? `Головний фокус дня: Пройдіть уроки карти ${ctx.nameAt(1, 'uk')} усвідомлено. Подолання цього виклику принесе вам цінний життєвий досвід.`
        : `Main focus of the day: Go through the lessons of ${ctx.nameAt(1, 'en')} mindfully. Overcoming this challenge will bring you valuable life experience.`;
    } else {
      focusText = uk
        ? `Головний фокус дня: Проведіть день усвідомлено, поєднуючи енергію ${ctx.nameAt(0, 'uk')} з дієвою порадою карти ${ctx.nameAt(3, 'uk')}.`
        : `Main focus of the day: Spend your day mindfully, combining the energy of ${ctx.nameAt(0, 'en')} with the active guidance of ${ctx.nameAt(3, 'en')}.`;
    }
    items.push(focusText);

    return items;
  }

  // ─── LOVE TRIANGLE SYNTHESIS (Ви, Перша особа, Друга особа, Динаміка стосунків) ───
  function synthesizeLoveTriangle(ctx, lang) {
    const uk = lang === 'uk';
    const items = [];

    const yCard = ctx.cardAt(0); // You
    const fCard = ctx.cardAt(1); // First person
    const sCard = ctx.cardAt(2); // Second person
    const dCard = ctx.cardAt(3); // Dynamics

    const majY = ctx.isMajorAt(0);
    const majF = ctx.isMajorAt(1);
    const majS = ctx.isMajorAt(2);
    const majD = ctx.isMajorAt(3);

    const revY = ctx.isRevAt(0);
    const revF = ctx.isRevAt(1);
    const revS = ctx.isRevAt(2);
    const revD = ctx.isRevAt(3);

    const yMean = getCardSphereMeaning(yCard, 'love', lang);
    const fMean = getCardSphereMeaning(fCard, 'love', lang);
    const sMean = getCardSphereMeaning(sCard, 'love', lang);
    const dMean = getCardSphereMeaning(dCard, 'love', lang);

    const lowercaseFirst = (str) => {
      if (!str) return '';
      return str.trim().charAt(0).toLowerCase() + str.trim().slice(1).replace(/[.;!?,\s]+$/, '');
    };

    // 1. Ваша позиція та стан у трикутнику
    let yourState = '';
    const yC = lowercaseFirst(yMean);
    if (majY) {
      yourState = uk
        ? `Ваша роль: Карта ${ctx.nameAt(0, 'uk')} вказує на те, що цей вибір чи стан є для вас доленосним життєвим уроком. Ваша позиція характеризується такими внутрішніми процесами: ${yC}.`
        : `Your role: The card ${ctx.nameAt(0, 'en')} indicates that this choice or situation is a milestone life lesson for you. Your position is characterized by these processes: ${yC}.`;
    } else if (revY) {
      yourState = uk
        ? `Ваша роль: Карта ${ctx.nameAt(0, 'uk')} вказує на внутрішню напругу, невизначеність або приховані мотиви. Ваш поточний стан описується як: ${yC}.`
        : `Your role: The card ${ctx.nameAt(0, 'en')} points to inner tension, uncertainty, or hidden motives. Your current state is described as: ${yC}.`;
    } else {
      yourState = uk
        ? `Ваша роль: Ви проявляєтеся під впливом карти ${ctx.nameAt(0, 'uk')}. Ця енергія визначає ваші теперішні прагнення та емоції: ${yC}.`
        : `Your role: You express yourself under the influence of ${ctx.nameAt(0, 'en')}. This energy defines your present desires and emotions: ${yC}.`;
    }
    items.push(yourState);

    // 2. Аналіз першої особи
    let firstPerson = '';
    const fC = lowercaseFirst(fMean);
    if (revF) {
      const obsMeanUk = fC ? `, яка уособлює такі приховані складнощі чи блокування: ${fC}` : '';
      const obsMeanEn = fC ? `, pointing to these hidden complications or blocks: ${fC}` : '';
      firstPerson = uk
        ? `Позиція першої особи: Карта ${ctx.nameAt(1, 'uk')}${obsMeanUk}. Її реальний вплив у ситуації наразі є обмеженим або ускладненим.`
        : `Position of the first person: The card ${ctx.nameAt(1, 'en')}${obsMeanEn}. Their real influence in the situation is currently limited or complicated.`;
    } else {
      const obsMeanUk = fC ? `, яка відображає такі наміри та мотиви: ${fC}` : '';
      const obsMeanEn = fC ? `, representing these intentions and motives: ${fC}` : '';
      firstPerson = uk
        ? `Позиція першої особи: Цю сторону описує карта ${ctx.nameAt(1, 'uk')}${obsMeanUk}. Це визначає її активну роль у теперішніх взаєминах.`
        : `Position of the first person: This party is described by ${ctx.nameAt(1, 'en')}${obsMeanEn}. This defines their active role in the current relationship.`;
    }
    items.push(firstPerson);

    // 3. Аналіз другої особи
    let secondPerson = '';
    const sC = lowercaseFirst(sMean);
    if (revS) {
      const resMeanUk = sC ? `, яка вказує на внутрішню кризу або такі закриті стани: ${sC}` : '';
      const resMeanEn = sC ? `, pointing to an internal crisis or these guarded states: ${sC}` : '';
      secondPerson = uk
        ? `Позиція другої особи: Карта ${ctx.nameAt(2, 'uk')}${resMeanUk}. Це створює дистанцію або додаткові перешкоди у спілкуванні.`
        : `Position of the second person: The card ${ctx.nameAt(2, 'en')}${resMeanEn}. This creates distance or additional barriers in communication.`;
    } else {
      const resMeanUk = sC ? `, яка уособлює такі прагнення та життєву позицію: ${sC}` : '';
      const resMeanEn = sC ? `, embodying these desires and life stance: ${sC}` : '';
      secondPerson = uk
        ? `Позиція другої особи: Цю сторону представляє карта ${ctx.nameAt(2, 'uk')}${resMeanUk}. Це визначає її поведінку та очікування від союзу.`
        : `Position of the second person: This party is represented by ${ctx.nameAt(2, 'en')}${resMeanEn}. This shapes their behavior and expectations of the union.`;
    }
    items.push(secondPerson);

    // 4. Динаміка та перспектива стосунків
    let dynamicsText = '';
    const dC = lowercaseFirst(dMean);
    if (majD) {
      const advMeanUk = dC ? `, що несе з собою такі доленосні зміни: ${dC}` : '';
      const advMeanEn = dC ? `, bringing these destiny-shaping changes: ${dC}` : '';
      dynamicsText = uk
        ? `Динаміка стосунків: Карта ${ctx.nameAt(3, 'uk')}${advMeanUk}. На вас чекає важливий поворотний момент у союзі.`
        : `Relationship dynamics: The card ${ctx.nameAt(3, 'en')}${advMeanEn}. A major turning point in the union lies ahead.`;
    } else {
      const advMeanUk = dC ? `, яка вказує на такі найближчі тенденції розвитку: ${dC}` : '';
      const advMeanEn = dC ? `, pointing to these near development trends: ${dC}` : '';
      dynamicsText = uk
        ? `Динаміка стосунків: Вектор руху визначається картою ${ctx.nameAt(3, 'uk')}${advMeanUk}. Це задає тон усьому подальшому спілкуванню.`
        : `Relationship dynamics: The vector is guided by ${ctx.nameAt(3, 'en')}${advMeanEn}. This sets the tone for all future communication.`;
    }
    items.push(dynamicsText);

    // 5. Головний фокус розкладу
    let focusText = '';
    if (majD) {
      focusText = uk
        ? `Головний фокус розкладу: Спрямуйте увагу на перспективу карти ${ctx.nameAt(3, 'uk')} — ситуація вимагає глобального переосмислення та сміливості прийняти доленосні зміни.`
        : `Main focus: Focus on the outlook of ${ctx.nameAt(3, 'en')} — the situation calls for global realignment and the courage to accept destiny-shaping changes.`;
    } else if (revY) {
      focusText = uk
        ? `Головний фокус розкладу: Карта вашого стану ${ctx.nameAt(0, 'uk')} закликає спочатку розібратися зі своїми внутрішніми сумнівами та ілюзіями, перш ніж вимагати визначеності від партнерів.`
        : `Main focus: The card of your state ${ctx.nameAt(0, 'en')} advises sorting out your own doubts and illusions first before expecting clarity from partners.`;
    } else {
      focusText = uk
        ? `Головний фокус розкладу: Збалансуйте інтереси всіх сторін. Ключ до вирішення лежить у поєднанні ваших прагнень із реальними діями, які диктує загальна динаміка союзу.`
        : `Main focus: Balance the interests of all parties. The key to resolution lies in aligning your desires with the practical actions dictated by the union's overall dynamics.`;
    }
    items.push(focusText);

    return items;
  }

  function cleanRoboticPrefix(str) {
    if (!str) return '';
    return str
      .replace(/^(Рівень процесу|Стихійна динаміка|Взаємодія тріади|Головний орієнтир|Головний фокус|Вектор процесу|Стихійний зв'язок|Звірка очікувань|Напуття на новий рік|Динаміка стосунків|Позиція першої особи|Позиція другої особи|Ваша роль|Process level|Elemental balance|Triad dynamic|Core guidance|Main focus|Process vector|Expectation check|Relationship dynamics)\s*[:—–\-]\s*/i, '')
      .trim();
  }

  function analyzeReading(cards, spread, lang) {
    if (!cards || !cards.length || cards.length < 3 || (spread && spread.cards_count < 3)) {
      return { lead: '', sections: [], guidance: '', items: [], paragraphs: [], specific: [], stats: null };
    }
    const ctx = enhanceContext(buildContext(cards, spread || {}));
    const slug = (spread && spread.slug) || '';

    let res = null;
    let yesNoVerdictObj = null;

    if (slug === 'celtic-cross' && cards.length >= 10) {
      res = synthesizeCelticCross(ctx, lang);
    } else if (slug === 'three-cards' && cards.length === 3) {
      res = synthesizeThreeCards(ctx, lang);
    } else if (slug === 'mind-body-spirit' && cards.length === 3) {
      res = synthesizeMindBodySpirit(ctx, lang);
    } else if (slug === 'birthday' && cards.length === 3) {
      res = synthesizeBirthday(ctx, lang);
    } else if (slug === 'yes-no' && cards.length === 3) {
      yesNoVerdictObj = synthesizeYesNo(ctx, lang);
      res = yesNoVerdictObj ? yesNoVerdictObj.items : [];
    } else if (slug === 'daily-path' && cards.length === 4) {
      res = synthesizeDailyPath(ctx, lang);
    } else if (slug === 'love-triangle' && cards.length === 4) {
      res = synthesizeLoveTriangle(ctx, lang);
    } else {
      res = synthesizeGeneralSpread(ctx, lang);
    }

    let lead = '';
    let sections = [];
    let guidance = '';
    let items = [];

    if (Array.isArray(res)) {
      items = res;
    } else if (res && typeof res === 'object') {
      if (Array.isArray(res.items)) items = res.items;
      if (res.lead) lead = res.lead;
      if (Array.isArray(res.sections)) sections = res.sections;
      if (res.guidance) guidance = res.guidance;
    }

    // Normalization if lead or guidance not explicitly set
    if (!lead && items.length > 0) {
      lead = cleanRoboticPrefix(items[0]);
    }
    if (!guidance && items.length > 1) {
      const last = items[items.length - 1];
      if (/орієнтир|порада|фокус|напуття|guidance|advice|focus/i.test(last)) {
        guidance = cleanRoboticPrefix(last);
      }
    }
    if (!sections.length && items.length > 1) {
      const startIdx = 1;
      const endIdx = guidance ? items.length - 1 : items.length;
      const middle = items.slice(startIdx, endIdx);
      sections = middle.map(it => {
        const colon = it.indexOf(':');
        if (colon > 0 && colon < 45) {
          return {
            title: it.slice(0, colon).trim(),
            body: cleanRoboticPrefix(it.slice(colon + 1).trim())
          };
        }
        return { title: '', body: cleanRoboticPrefix(it) };
      });
    }

    lead = cleanRoboticPrefix(lead);
    guidance = cleanRoboticPrefix(guidance);
    const cleanItems = items.map(cleanRoboticPrefix).filter(Boolean);

    return {
      lead,
      sections,
      guidance,
      items: cleanItems,
      paragraphs: cleanItems, // backward compatibility
      specific: [],
      stats: {
        majorCount: ctx.majorCount,
        majorPct: Math.round(ctx.majorPct),
        reversedCount: ctx.reversedCount,
        reversedPct: Math.round(ctx.reversedPct),
        n: ctx.n,
        slug: slug,
      },
      yesNo: yesNoVerdictObj ? {
        verdict: yesNoVerdictObj.verdict,
        balance: yesNoVerdictObj.balance,
        score: yesNoVerdictObj.score
      } : null
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
