/**
 * analysis.js — automated reading synthesis for tarot-online
 * Uses: Major % , elements dominant/missing, reversed %, sequence, combos, category advice
 */
(function (global) {
  'use strict';

  const ELEMENT_META = {
    fire:  { uk: 'Вогонь', en: 'Fire',  suit_uk: 'Жезли', suit_en: 'Wands' },
    water: { uk: 'Вода',   en: 'Water', suit_uk: 'Кубки', suit_en: 'Cups' },
    air:   { uk: 'Повітря',en: 'Air',   suit_uk: 'Мечі',  suit_en: 'Swords' },
    earth: { uk: 'Земля',  en: 'Earth', suit_uk: 'Пентаклі', suit_en: 'Pentacles' },
  };

  // Pairs by card id (Major Arcana ids from cards.js: m06 Lovers, m15 Devil, etc.)
  // Also match by name_en fallback
  const COMBOS = [
    {
      ids: ['m06', 'm15'], // Lovers + Devil
      names_en: ['The Lovers', 'The Devil'],
      text_uk: 'Виявлено комбінацію Закохані + Диявол — залежні стосунки, спокуса або вибір між пристрастю та справжніми почуттями.',
      text_en: 'Combination The Lovers + The Devil detected — dependent relationship, temptation, or a choice between passion and true feelings.',
    },
    {
      ids: ['m16', 'm10'], // Tower + Wheel
      names_en: ['The Tower', 'Wheel of Fortune'],
      text_uk: 'Виявлено комбінацію Вежа + Колесо Фортуни — раптові незворотні зміни, форс-мажорний поворот подій.',
      text_en: 'Combination The Tower + Wheel of Fortune detected — sudden irreversible change, a fateful turn of events.',
    },
    {
      ids: ['m13', 'm20'], // Death + Judgement
      names_en: ['Death', 'Judgement'],
      text_uk: 'Виявлено комбінацію Смерть + Суд — повна трансформація, закриття великого життєвого етапу.',
      text_en: 'Combination Death + Judgement detected — complete transformation, closing of a major life chapter.',
    },
    {
      ids: ['s03', 'm19'], // 3 of Swords + Sun
      names_en: ['Three of Swords', 'The Sun'],
      text_uk: 'Виявлено комбінацію Трійка Мечів + Сонце — очищення через біль, вихід із кризи до ясності.',
      text_en: 'Combination Three of Swords + The Sun detected — cleansing through pain, emerging from crisis into clarity.',
    },
    {
      ids: ['m18', 'm02'], // Moon + High Priestess
      names_en: ['The Moon', 'The High Priestess'],
      text_uk: 'Виявлено комбінацію Місяць + Верховна Жриця — прихована інформація, таємниці, сильна інтуїція або ілюзії.',
      text_en: 'Combination The Moon + The High Priestess detected — hidden information, secrets, strong intuition or illusions.',
    },
  ];

  const MISSING_BY_CATEGORY = {
    // category UA keys from data.js
    "Кар'єра та Фінанси": {
      earth: {
        uk: 'У питаннях роботи та фінансів відсутність Землі — брак реальних дій, заземлення та грошового підґрунтя.',
        en: 'In career & finance, missing Earth means lack of practical action, grounding, and material foundation.',
      },
      water: {
        uk: 'Відсутність Води — холодний розрахунок, брак емпатії в колективі, сухий прагматизм.',
        en: 'Missing Water — cold calculation, little empathy in the team, dry pragmatism.',
      },
      fire: {
        uk: 'Відсутність Вогню — брак мотивації та енергії для старту, пасивність.',
        en: 'Missing Fire — lack of motivation and energy to start, passivity.',
      },
      air: {
        uk: 'Відсутність Повітря — немає чіткого плану, слабша комунікація, необдумані кроки.',
        en: 'Missing Air — no clear plan, weaker communication, impulsive steps.',
      },
    },
    'Кохання та Стосунки': {
      earth: {
        uk: 'Відсутність Землі в стосунках — ідеалізація без спільного побуту чи стабільних зобов’язань.',
        en: 'Missing Earth in relationships — idealization without shared practical life or stable commitments.',
      },
      water: {
        uk: 'Відсутність Води — емоційний голод, відстороненість, сухість у почуттях.',
        en: 'Missing Water — emotional hunger, detachment, dryness in feelings.',
      },
      fire: {
        uk: 'Відсутність Вогню — брак пристрасті, застій, рутина.',
        en: 'Missing Fire — lack of passion, stagnation, routine.',
      },
      air: {
        uk: 'Відсутність Повітря — нерозуміння, брак діалогу, замовчування проблем.',
        en: 'Missing Air — misunderstanding, lack of dialogue, problems left unspoken.',
      },
    },
    'Психологія': {
      earth: {
        uk: 'Відсутність Землі — втрата зв’язку з тілом і браком дисципліни.',
        en: 'Missing Earth — disconnect from the body and lack of discipline.',
      },
      water: {
        uk: 'Відсутність Води — придушення почуттів, блокада емоційної сфери.',
        en: 'Missing Water — suppressed feelings, blocked emotional sphere.',
      },
      fire: {
        uk: 'Відсутність Вогню — апатія, брак життєвого тонусу та натхнення.',
        en: 'Missing Fire — apathy, low life energy and inspiration.',
      },
      air: {
        uk: 'Відсутність Повітря — важко раціонально оцінити ситуацію, хаос у думках.',
        en: 'Missing Air — hard to assess the situation rationally, mental clutter.',
      },
    },
    "Духовність та Здоров'я": {
      earth: {
        uk: 'Відсутність Землі — відрив від тіла, брак режиму та практичної турботи про себе.',
        en: 'Missing Earth — detachment from the body, lack of routine and practical self-care.',
      },
      water: {
        uk: 'Відсутність Води — емоційна сухість, ігнорування внутрішніх сигналів.',
        en: 'Missing Water — emotional dryness, ignoring inner signals.',
      },
      fire: {
        uk: 'Відсутність Вогню — спад енергії, слабке внутрішнє «хочу».',
        en: 'Missing Fire — low energy, weak inner drive.',
      },
      air: {
        uk: 'Відсутність Повітря — плутанина в цілях і сенсах, брак ясності.',
        en: 'Missing Air — confusion in goals and meaning, lack of clarity.',
      },
    },
  };

  // fallback for other categories
  const MISSING_DEFAULT = {
    earth: {
      uk: 'У розкладі немає стихії Землі — бракує практичних кроків і матеріальної опори.',
      en: 'No Earth in the spread — practical steps and material support are weak.',
    },
    water: {
      uk: 'У розкладі немає стихії Води — емоційна сфера приглушена або ігнорується.',
      en: 'No Water in the spread — the emotional sphere is muted or ignored.',
    },
    fire: {
      uk: 'У розкладі немає стихії Вогню — мало драйву, імпульсу та ініціативи.',
      en: 'No Fire in the spread — little drive, impulse, and initiative.',
    },
    air: {
      uk: 'У розкладі немає стихії Повітря — слабша ясність думки та комунікація.',
      en: 'No Air in the spread — weaker mental clarity and communication.',
    },
  };

  const DOMINANT_TEXT = {
    fire: {
      uk: 'Домінує Вогонь (Жезли) — висока динаміка, пристрасть, імпульсивність, готовність до ризику.',
      en: 'Fire (Wands) dominates — high dynamics, passion, impulsiveness, readiness for risk.',
    },
    water: {
      uk: 'Домінує Вода (Кубки) — емоції, інтуїція, чутливість, прихильність.',
      en: 'Water (Cups) dominates — emotions, intuition, sensitivity, attachment.',
    },
    air: {
      uk: 'Домінує Повітря (Мечі) — аналітика, роздуми, комунікація; можливі конфлікти ідей.',
      en: 'Air (Swords) dominates — analysis, reflection, communication; possible clashes of ideas.',
    },
    earth: {
      uk: 'Домінує Земля (Пентаклі) — практичність, стабільність, матеріальний фокус, повільніший темп.',
      en: 'Earth (Pentacles) dominates — practicality, stability, material focus, slower pace.',
    },
  };

  function isMajor(card) {
    return card && (card.type_en === 'Major Arcana' || card.type === 'Старший Аркан');
  }

  function elementOf(card) {
    if (!card) return null;
    if (card.element) return card.element;
    // fallback from suit
    const s = (card.suit_en || card.suit || '').toLowerCase();
    if (s.includes('wand') || s.includes('жезл')) return 'fire';
    if (s.includes('cup') || s.includes('кубк')) return 'water';
    if (s.includes('sword') || s.includes('меч')) return 'air';
    if (s.includes('pent') || s.includes('пента')) return 'earth';
    return null;
  }

  function buildContext(cards, spread) {
    const n = cards.length;
    let majorCount = 0;
    let reversedCount = 0;
    const elements = { fire: 0, water: 0, air: 0, earth: 0 };
    let minorWithElement = 0;

    cards.forEach((c) => {
      if (isMajor(c)) majorCount++;
      if (c.reversed) reversedCount++;
      const el = elementOf(c);
      if (el && elements[el] !== undefined) {
        elements[el]++;
        if (!isMajor(c)) minorWithElement++;
      }
    });

    const majorPct = n ? (majorCount / n) * 100 : 0;
    const reversedPct = n ? (reversedCount / n) * 100 : 0;

    // dominant among cards that have element (prefer minors if enough, else all)
    const pool = elements;
    const totalEl = pool.fire + pool.water + pool.air + pool.earth;
    let dominant = null;
    let dominantPct = 0;
    if (totalEl > 0) {
      for (const k of Object.keys(pool)) {
        const p = (pool[k] / totalEl) * 100;
        if (p > dominantPct) {
          dominantPct = p;
          dominant = k;
        }
      }
    }

    const missing = [];
    if (n >= 4) {
      for (const k of ['fire', 'water', 'air', 'earth']) {
        if (pool[k] === 0) missing.push(k);
      }
    }

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
      missing,
      first: cards[0] || null,
      last: cards[n - 1] || null,
      category: spread && spread.category,
      category_en: spread && spread.category_en,
      cards,
    };
  }

  function analyzeMajorShare(ctx, lang) {
    const p = ctx.majorPct;
    const uk = lang === 'uk';
    if (ctx.n === 1) {
      if (isMajor(ctx.first)) {
        return uk
          ? 'Єдина карта — Старший Аркан: акцент на символічному, доленосному значенні моменту, а не на дрібній рутині.'
          : 'The single card is a Major Arcana: the moment carries symbolic, fateful weight rather than everyday routine.';
      }
      return uk
        ? 'Єдина карта — Молодший Аркан: ситуація більше про конкретні дії та повсякденний вибір.'
        : 'The single card is a Minor Arcana: the situation is more about concrete actions and everyday choice.';
    }
    if (p < 20 || ctx.majorCount === 0) {
      return uk
        ? `Старших Арканів мало (${ctx.majorCount} з ${ctx.n}, ~${Math.round(p)}%) — ситуація переважно побутова і залежить від ваших щоденних рішень.`
        : `Few Major Arcana (${ctx.majorCount} of ${ctx.n}, ~${Math.round(p)}%) — mostly everyday situation, driven by your daily choices.`;
    }
    if (p <= 50) {
      return uk
        ? `Баланс Старших і Молодших Арканів (${ctx.majorCount} з ${ctx.n}, ~${Math.round(p)}%) — і особистий вибір, і зовнішні обставини відіграють роль.`
        : `Balance of Major and Minor Arcana (${ctx.majorCount} of ${ctx.n}, ~${Math.round(p)}%) — both personal choice and outer circumstances matter.`;
    }
    return uk
      ? `Висока частка Старших Арканів (${ctx.majorCount} з ${ctx.n}, ~${Math.round(p)}%) — доленосний період, події більшого масштабу, на які важче вплинути лише рутиною.`
      : `High share of Major Arcana (${ctx.majorCount} of ${ctx.n}, ~${Math.round(p)}%) — a fateful phase; larger-scale events harder to steer by routine alone.`;
  }

  function analyzeElements(ctx, lang) {
    const lines = [];
    const uk = lang === 'uk';
    if (ctx.dominant && ctx.dominantPct >= 40 && ctx.totalEl >= 2) {
      const t = DOMINANT_TEXT[ctx.dominant];
      lines.push(uk ? t.uk : t.en);
    }
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
        ? 'Вектор арканів: від Молодших до Старших — побутова ситуація може вирости у стратегічну чи доленосну.'
        : 'Arcana vector: Minor → Major — an everyday situation may grow into something strategic or fateful.';
    } else if (startMaj && !endMaj) {
      typeLine = uk
        ? 'Вектор арканів: від Старших до Молодших — великий процес завершується конкретними кроками і «приземленням».'
        : 'Arcana vector: Major → Minor — a larger process settles into concrete steps and grounding.';
    }

    const e1 = elementOf(ctx.first);
    const e2 = elementOf(ctx.last);
    let elLine = null;
    if (e1 && e2 && e1 !== e2) {
      const a = ELEMENT_META[e1];
      const b = ELEMENT_META[e2];
      elLine = uk
        ? `Динаміка стихій: ${a.uk} → ${b.uk} — енергія старту змінює якість на фініші.`
        : `Element dynamics: ${a.en} → ${b.en} — the starting energy shifts quality by the end.`;
    }
    if (!typeLine && !elLine) return null;
    return [typeLine, elLine].filter(Boolean).join(' ');
  }

  function analyzeReversed(ctx, lang) {
    const uk = lang === 'uk';
    const p = ctx.reversedPct;
    if (ctx.reversedCount === 0) {
      return uk
        ? 'Немає перевернутих карт — енергія тече вільніше, менше внутрішніх «гальм».'
        : 'No reversed cards — energy flows more freely, fewer inner brakes.';
    }
    if (p > 50) {
      return uk
        ? `Більшість карт перевернуті (${ctx.reversedCount} з ${ctx.n}, ~${Math.round(p)}%) — сильний внутрішній опір, блокування або спроба йти всупереч природному ходу.`
        : `Most cards reversed (${ctx.reversedCount} of ${ctx.n}, ~${Math.round(p)}%) — strong inner resistance, blockage, or acting against the natural flow.`;
    }
    return uk
      ? `Частина карт перевернута (${ctx.reversedCount} з ${ctx.n}, ~${Math.round(p)}%) — локальні затримки чи внутрішні сумніви, але не повне блокування.`
      : `Some cards reversed (${ctx.reversedCount} of ${ctx.n}, ~${Math.round(p)}%) — local delays or doubts, not a full block.`;
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
    const highMajor = ctx.majorPct > 50;
    const highRev = ctx.reversedPct > 50;
    const noEarth = ctx.missing.includes('earth');
    const noFire = ctx.missing.includes('fire');
    const noWater = ctx.missing.includes('water');
    const noAir = ctx.missing.includes('air');

    if (cat === "Кар'єра та Фінанси" || cat === 'Career & Finance') {
      if (highMajor && noEarth) {
        return uk
          ? 'Вектор дії (Кар’єра): не тримайтеся лише за старі схеми. Зафіксуйте конкретний план кроків і матеріальні опори — інакше зміни залишаться «в повітрі».'
          : 'Action vector (Career): don’t cling only to old patterns. Write a concrete action plan and material anchors — or changes stay “in the air”.';
      }
      if (highRev) {
        return uk
          ? 'Вектор дії (Кар’єра): спочатку зніміть внутрішній опір (страх змін, перфекціонізм). Потім один чіткий робочий крок на тиждень.'
          : 'Action vector (Career): first ease inner resistance (fear of change, perfectionism). Then one clear work step per week.';
      }
      if (noFire) {
        return uk
          ? 'Вектор дії (Кар’єра): поверніть мотивацію через маленький старт — задача на 25–40 хвилин, без ідеального плану.'
          : 'Action vector (Career): restore motivation with a small start — a 25–40 min task, no perfect plan needed.';
      }
      return uk
        ? 'Вектор дії (Кар’єра): поєднайте ясність пріоритету з одним вимірюваним результатом цього тижня.'
        : 'Action vector (Career): pair a clear priority with one measurable result this week.';
    }

    if (cat === 'Кохання та Стосунки' || cat === 'Love & Relationships') {
      if (noWater) {
        return uk
          ? 'Вектор дії (Стосунки): додайте емоційну чесність — назвіть почуття вголос, а не лише «вирішуйте питання».'
          : 'Action vector (Relationships): add emotional honesty — name feelings out loud, don’t only “solve issues”.';
      }
      if (noAir) {
        return uk
          ? 'Вектор дії (Стосунки): відновіть діалог. Одна спокійна розмова без звинувачень змінює більше, ніж мовчанка.'
          : 'Action vector (Relationships): restore dialogue. One calm talk without blame changes more than silence.';
      }
      if (highRev) {
        return uk
          ? 'Вектор дії (Стосунки): перевірте, де ви самі блокуєте близькість (контроль, образа, очікування). Зміна починається з вашого боку.'
          : 'Action vector (Relationships): check where you block closeness (control, resentment, expectations). Change starts on your side.';
      }
      return uk
        ? 'Вектор дії (Стосунки): тримайте баланс «почуття + ясні домовленості», без крайнощів.'
        : 'Action vector (Relationships): keep a balance of feelings and clear agreements, without extremes.';
    }

    if (cat === 'Психологія' || cat === 'Psychology') {
      return uk
        ? 'Вектор дії (Психологія): зафіксуйте один патерн, який повторюється, і одну маленьку поведінкову зміну на 7 днів.'
        : 'Action vector (Psychology): note one repeating pattern and one small behavioral change for 7 days.';
    }

    if (cat === "Духовність та Здоров'я" || cat === 'Spirituality & Health') {
      return uk
        ? 'Вектор дії (Здоров’я / дух): поверніть тілу режим (сон, рух, паузи) і не ігноруйте сигнали втоми.'
        : 'Action vector (Health / spirit): restore body rhythm (sleep, movement, pauses) and don’t ignore fatigue signals.';
    }

    // universal
    if (highMajor && highRev) {
      return uk
        ? 'Вектор дії: великі зміни вже в полі — менше боротьби з процесом, більше опори на те, що можете контролювати сьогодні.'
        : 'Action vector: big change is already in the field — less fighting the process, more focus on what you can control today.';
    }
    if (noEarth && ctx.n >= 4) {
      return uk
        ? 'Вектор дії: переведіть висновки в один конкретний крок у календарі (дата, дія, результат).'
        : 'Action vector: turn insights into one concrete calendar step (date, action, result).';
    }
    return uk
      ? 'Вектор дії: оберіть один пріоритет із розкладу і зробіть наступний мінімальний крок протягом 24–48 годин.'
      : 'Action vector: pick one priority from the spread and take the next minimal step within 24–48 hours.';
  }


  // ─── helpers on positions (0-based) ───────────────────────────────────────
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
    return ctx;
  }

  // ─── Spread-specific rules registry ───────────────────────────────────────
  // Celtic Cross positions (0-based):
  // 0 Heart, 1 Obstacle, 2 Subconscious, 3 Past, 4 Conscious,
  // 5 Near Future, 6 Self, 7 Environment, 8 Hopes/Fears, 9 Outcome

  const SPREAD_RULES = {
    'celtic-cross': [
      {
        id: 'cc_timeline_majors',
        when: (ctx) => ctx.n >= 10 && ctx.countMajors([3, 5, 9]) >= 2,
        variants: [
          {
            uk: 'У лінії часу (Минуле → Найближче майбутнє → Підсумок) багато Старших Арканів — зовнішні події сильні, «людський фактор» сам по собі ситуацію мало розверне.',
            en: 'On the timeline (Past → Near Future → Outcome) Major Arcana dominate — outer events are strong; willpower alone rarely turns the situation.',
          },
          {
            uk: 'Ключові точки часу позначені Старшими Арканами: зміни вже «вписані» в хід подій. Краще підлаштувати стратегію, ніж боротися з течією в лоб.',
            en: 'Key time points carry Major Arcana: change is already written into the flow. Adapt strategy rather than fight the current head-on.',
          },
        ],
      },
      {
        id: 'cc_mind_vs_heart',
        when: (ctx) => {
          if (ctx.n < 10) return false;
          const c = ctx.elAt(4); // conscious
          const s = ctx.elAt(2); // subconscious
          return (c === 'air' && s === 'water') || (c === 'water' && s === 'air');
        },
        variants: [
          {
            uk: 'Свідомість і підсвідомість у різних стихіях (розум ↔ почуття): ви можете логічно «пояснювати» вибір, тоді як глибше рішення вже прийняте емоційно — або навпаки.',
            en: 'Conscious and subconscious sit in different elements (mind ↔ feeling): you may justify a choice logically while the deeper decision is already emotional — or the reverse.',
          },
          {
            uk: 'Розрив між тим, що ви собі кажете (Свідомість), і тим, що відчуваєте насправді (Підсвідомість). Варто назвати емоцію вголос — тоді розум і серце швидше зійдуться.',
            en: 'A gap between what you tell yourself (Conscious) and what you actually feel (Subconscious). Name the emotion out loud — mind and heart align faster.',
          },
        ],
      },
      {
        id: 'cc_obstacle_reversed',
        when: (ctx) => ctx.n >= 10 && ctx.isRevAt(1),
        variants: [
          {
            uk: 'Перешкода (позиція 2) перевернута — блок часто внутрішній: страх, звичка або відмова бачити проблему прямо. Зовнішній «ворог» може бути лише проекцією.',
            en: 'The Obstacle (position 2) is reversed — the block is often internal: fear, habit, or refusal to face the issue. An outer “enemy” may be a projection.',
          },
          {
            uk: 'Перевернута перешкода: опір уже слабшає, але ви ще тримаєтесь за стару рамку. Один чесний крок назустріч проблемі знімає більше напруги, ніж контроль.',
            en: 'Reversed obstacle: resistance is already easing, but you still cling to an old frame. One honest step toward the problem releases more tension than control.',
          },
        ],
      },
      {
        id: 'cc_hopes_vs_outcome',
        when: (ctx) => {
          if (ctx.n < 10) return false;
          const hMaj = ctx.isMajorAt(8);
          const oMaj = ctx.isMajorAt(9);
          const hRev = ctx.isRevAt(8);
          const oRev = ctx.isRevAt(9);
          // conflict signals: both major but opposite orientation, or hope reversed + outcome upright major
          return (hMaj && oMaj && hRev !== oRev) || (hRev && oMaj && !oRev);
        },
        variants: [
          {
            uk: 'Надії/страхи і Підсумок звучать у різному тоні: те, чого ви боїтесь або жадаєте, не збігається з ймовірним фіналом. Перевірте, чи не тримаєте сценарій «як має бути».',
            en: 'Hopes/Fears and Outcome speak in different tones: what you fear or crave does not match the likely ending. Check whether you are clinging to a “should be” script.',
          },
          {
            uk: 'Між очікуванням (позиція 9) і результатом (позиція 10) є напруга. Зменшіть прогноз «все або нічого» — тоді підсумок легше прийняти і використати.',
            en: 'Tension sits between expectation (position 9) and result (position 10). Soften all-or-nothing forecasts — the outcome becomes easier to accept and use.',
          },
        ],
      },
      {
        id: 'cc_heart_to_outcome_vector',
        when: (ctx) => {
          if (ctx.n < 10) return false;
          const startMaj = ctx.isMajorAt(0);
          const endMaj = ctx.isMajorAt(9);
          return startMaj !== endMaj; // meaningful shift
        },
        variants: [
          {
            uk: 'Від «Серця ситуації» до «Підсумку» змінюється рівень арканів: ситуація не стоїть на місці — або побутове виростає в доленосне, або велика тема сходить у конкретні кроки.',
            en: 'From Heart of the Matter to Outcome the arcana level shifts: the situation is not static — either the everyday grows fateful, or a big theme settles into concrete steps.',
          },
          {
            uk: 'Вектор розкладу (центр → фінал) показує рух якості події. Дивіться не лише на окремі карти, а на те, куди «вирулює» історія.',
            en: 'The spread vector (center → finale) shows how the event’s quality moves. Read not only single cards, but where the story is steering.',
          },
        ],
      },
      {
        id: 'cc_environment_pressure',
        when: (ctx) => ctx.n >= 10 && (ctx.isMajorAt(7) || ctx.isRevAt(7)),
        variants: [
          {
            uk: 'Оточення (позиція 8) активне: люди, правила або фон подій тиснуть на розвиток. Частина рішення — не «перемагати всіх», а змінити дистанцію чи коло впливу.',
            en: 'Environment (position 8) is active: people, rules, or context press on the development. Part of the solution is not “beating everyone”, but changing distance or circle of influence.',
          },
          {
            uk: 'Сильний акцент на оточенні: підтримка або тиск ззовні помітно фарбує підсумок. Варто явно визначити, хто в ресурсі, а хто в відтоці енергії.',
            en: 'Strong environment accent: outer support or pressure clearly colors the outcome. Name who is a resource and who drains energy.',
          },
        ],
      },
      {
        id: 'cc_self_reversed',
        when: (ctx) => ctx.n >= 10 && ctx.isRevAt(6),
        variants: [
          {
            uk: 'Ставлення до себе перевернуте — самооцінка або роль у ситуації зараз спотворені. Перш ніж тиснути на зовнішнє, вирівняйте внутрішню позицію.',
            en: 'Self-Perception is reversed — self-worth or your role in the situation is distorted. Before pushing outward, steady your inner stance.',
          },
        ],
      },
      {
        id: 'cc_action',
        when: (ctx) => ctx.n >= 10,
        // always fires once as spread-specific advice (soft)
        variants: [
          {
            uk: 'Специфіка Кельтського хреста: зберіть три відповіді — (1) що є суттю зараз, (2) що реально блокує, (3) який наступний крок у найближчому майбутньому. Без цього розклад лишається «красивою картою».',
            en: 'Celtic Cross focus: answer three points — (1) what is the core now, (2) what truly blocks, (3) the next step in the near future. Without that the spread stays a “pretty map”.',
          },
          {
            uk: 'Практичний акцент хреста: зіставте Підсвідомість і Свідомість, потім перевірте, чи Підсумок не суперечить вашим Надіям/страхам. Там, де суперечність — там точка росту.',
            en: 'Practical Cross focus: align Subconscious and Conscious, then check whether Outcome conflicts with Hopes/Fears. Where they clash — that is the growth edge.',
          },
        ],
      },
    ],
  };

  function runSpreadRules(ctx, lang) {
    const slug = (ctx.spread && ctx.spread.slug) || '';
    const rules = SPREAD_RULES[slug];
    if (!rules || !rules.length) return [];
    const out = [];
    for (const rule of rules) {
      try {
        if (rule.when(ctx)) {
          const text = ctx.pickVariant(rule.variants, lang);
          if (text) out.push(text);
        }
      } catch (e) {
        // ignore broken rule
      }
    }
    return out;
  }

  /**
   * @param {Array} cards - dealt cards (with reversed, type, element, id, name…)
   * @param {Object} spread - spread object from spreadsData
   * @param {'uk'|'en'} lang
   * @returns {{ paragraphs: string[], specific: string[], stats: object }}
   */
  function analyzeReading(cards, spread, lang) {
    if (!cards || !cards.length) {
      return { paragraphs: [], specific: [], stats: null };
    }
    const ctx = enhanceContext(buildContext(cards, spread || {}));
    ctx.spread = spread || {};

    const paragraphs = [];

    paragraphs.push(analyzeMajorShare(ctx, lang));

    const elLines = analyzeElements(ctx, lang);
    elLines.forEach((l) => paragraphs.push(l));

    const seq = analyzeSequence(ctx, lang);
    if (seq) paragraphs.push(seq);

    paragraphs.push(analyzeReversed(ctx, lang));

    analyzeCombos(ctx, lang).forEach((l) => paragraphs.push(l));

    paragraphs.push(actionVector(ctx, lang));

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
        missing: ctx.missing.slice(),
        n: ctx.n,
        slug: (spread && spread.slug) || null,
        specificCount: specific.length,
      },
    };
  }

  global.TarotAnalysis = {
    analyzeReading,
    buildContext,
    isMajor,
    elementOf,
    SPREAD_RULES,
  };
})(typeof window !== 'undefined' ? window : globalThis);
