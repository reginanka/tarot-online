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

  /**
   * @param {Array} cards - dealt cards (with reversed, type, element, id, name…)
   * @param {Object} spread - spread object from spreadsData
   * @param {'uk'|'en'} lang
   * @returns {{ paragraphs: string[], stats: object }}
   */
  function analyzeReading(cards, spread, lang) {
    if (!cards || !cards.length) {
      return { paragraphs: [], stats: null };
    }
    const ctx = buildContext(cards, spread || {});
    const paragraphs = [];

    paragraphs.push(analyzeMajorShare(ctx, lang));

    const elLines = analyzeElements(ctx, lang);
    elLines.forEach((l) => paragraphs.push(l));

    const seq = analyzeSequence(ctx, lang);
    if (seq) paragraphs.push(seq);

    paragraphs.push(analyzeReversed(ctx, lang));

    analyzeCombos(ctx, lang).forEach((l) => paragraphs.push(l));

    paragraphs.push(actionVector(ctx, lang));

    return {
      paragraphs: paragraphs.filter(Boolean),
      stats: {
        majorCount: ctx.majorCount,
        majorPct: Math.round(ctx.majorPct),
        reversedCount: ctx.reversedCount,
        reversedPct: Math.round(ctx.reversedPct),
        dominant: ctx.dominant,
        dominantPct: Math.round(ctx.dominantPct),
        missing: ctx.missing.slice(),
        n: ctx.n,
      },
    };
  }

  global.TarotAnalysis = { analyzeReading, buildContext, isMajor, elementOf };
})(typeof window !== 'undefined' ? window : globalThis);
