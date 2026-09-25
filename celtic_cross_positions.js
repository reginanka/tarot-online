/**
 * celtic_cross_positions.js — Position-specific interpretations for Celtic Cross & Spreads
 */
(function (global) {
  'use strict';

  const CELTIC_CROSS_DATA = {
  "m00": {
    "1": {
      "upright": {
        "ua": "Початок нового етапу, крок у невідомість, чистий аркуш. Ситуація вимагає спонтанності, відкритості та готовності ризикнути без гарантій.",
        "en": "A fresh start, a leap into the unknown, a blank slate. The situation calls for spontaneity, openness, and a willingness to take a risk without guarantees."
      },
      "reversed": {
        "ua": "Бездумні дії, необдуманий ризик, хаос або незрілість. Ситуація застрягла через легковажність або страх зробити вирішальний крок.",
        "en": "Reckless actions, ill-considered risk, chaos or immaturity. The situation is stuck due to carelessness or fear of taking the decisive step."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: дурень символізує нові починання, абсолютну віру в життя та спонтанність.",
        "en": "The obstacle is an external challenge or excess: the Fool represents new beginnings, absolute faith in life, and spontaneity."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: перевернутий Дурень попереджає про безрозсудність, недбалість і ризик прийняти поспішне рішення.",
        "en": "Internal friction or resistance: the reversed Fool warns of recklessness, carelessness, and the risk of making a hasty decision."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: дурень символізує нові починання, абсолютну віру в життя та спонтанність.",
        "en": "Deep inner drive and subconscious root: the Fool represents new beginnings, absolute faith in life, and spontaneity."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: перевернутий Дурень попереджає про безрозсудність, недбалість і ризик прийняти поспішне рішення.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: the reversed Fool warns of recklessness, carelessness, and the risk of making a hasty decision."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: дурень символізує нові починання, абсолютну віру в життя та спонтанність.",
        "en": "Past foundation leading to the current moment: the Fool represents new beginnings, absolute faith in life, and spontaneity."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: перевернутий Дурень попереджає про безрозсудність, недбалість і ризик прийняти поспішне рішення.",
        "en": "Unresolved past patterns or fading residue: the reversed Fool warns of recklessness, carelessness, and the risk of making a hasty decision."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: дурень символізує нові починання, абсолютну віру в життя та спонтанність.",
        "en": "Conscious goals and rational focus: the Fool represents new beginnings, absolute faith in life, and spontaneity."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: перевернутий Дурень попереджає про безрозсудність, недбалість і ризик прийняти поспішне рішення.",
        "en": "Mental confusion or conflicting conscious assumptions: the reversed Fool warns of recklessness, carelessness, and the risk of making a hasty decision."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: дурень символізує нові починання, абсолютну віру в життя та спонтанність.",
        "en": "Upcoming development and next step: the Fool represents new beginnings, absolute faith in life, and spontaneity."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: перевернутий Дурень попереджає про безрозсудність, недбалість і ризик прийняти поспішне рішення.",
        "en": "Temporary slowdown or cautionary phase ahead: the reversed Fool warns of recklessness, carelessness, and the risk of making a hasty decision."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: дурень символізує нові починання, абсолютну віру в життя та спонтанність.",
        "en": "Your self-perception and personal stance: the Fool represents new beginnings, absolute faith in life, and spontaneity."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: перевернутий Дурень попереджає про безрозсудність, недбалість і ризик прийняти поспішне рішення.",
        "en": "Self-doubt or need to regain inner balance: the reversed Fool warns of recklessness, carelessness, and the risk of making a hasty decision."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: дурень символізує нові починання, абсолютну віру в життя та спонтанність.",
        "en": "Outer environment and surrounding circumstances: the Fool represents new beginnings, absolute faith in life, and spontaneity."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: перевернутий Дурень попереджає про безрозсудність, недбалість і ризик прийняти поспішне рішення.",
        "en": "External pressure, friction, or lack of support around you: the reversed Fool warns of recklessness, carelessness, and the risk of making a hasty decision."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: дурень символізує нові починання, абсолютну віру в життя та спонтанність.",
        "en": "Primary hopes and inner aspiration for the outcome: the Fool represents new beginnings, absolute faith in life, and spontaneity."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: перевернутий Дурень попереджає про безрозсудність, недбалість і ризик прийняти поспішне рішення.",
        "en": "Underlying fears, apprehension, or anxiety: the reversed Fool warns of recklessness, carelessness, and the risk of making a hasty decision."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: дурень символізує нові починання, абсолютну віру в життя та спонтанність.",
        "en": "Final outcome and resolution of the matter: the Fool represents new beginnings, absolute faith in life, and spontaneity."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: перевернутий Дурень попереджає про безрозсудність, недбалість і ризик прийняти поспішне рішення.",
        "en": "Outcome requires further patience and integration: the reversed Fool warns of recklessness, carelessness, and the risk of making a hasty decision."
      }
    }
  },
  "m01": {
    "1": {
      "upright": {
        "ua": "Усі ресурси та інструменти у ваших руках. Ситуація під повним контролем, час проявляти ініціативу, діяти та втілювати задуми.",
        "en": "All the resources and tools are in your hands. The situation is fully under control — it's time to take initiative, act, and bring your ideas to life."
      },
      "reversed": {
        "ua": "Маніпуляції, невикористаний потенціал, брак навичок або обман. Ситуація гальмується через нечесність або невпевненість у власних силах.",
        "en": "Manipulation, untapped potential, lack of skill or deception. The situation is held back by dishonesty or a lack of confidence in your own abilities."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: маг володіє всіма інструментами (стихіями) для реалізації своїх цілей.",
        "en": "The obstacle is an external challenge or excess: the Magician possesses all the tools (elements) to realize his goals."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: у перевернутому положенні Маг може вказувати на маніпуляції, приховані наміри або невикористаний потенціал.",
        "en": "Internal friction or resistance: in the reversed position, the Magician may indicate manipulation, hidden intentions, or untapped potential."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: маг володіє всіма інструментами (стихіями) для реалізації своїх цілей.",
        "en": "Deep inner drive and subconscious root: the Magician possesses all the tools (elements) to realize his goals."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: у перевернутому положенні Маг може вказувати на маніпуляції, приховані наміри або невикористаний потенціал.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: in the reversed position, the Magician may indicate manipulation, hidden intentions, or untapped potential."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: маг володіє всіма інструментами (стихіями) для реалізації своїх цілей.",
        "en": "Past foundation leading to the current moment: the Magician possesses all the tools (elements) to realize his goals."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: у перевернутому положенні Маг може вказувати на маніпуляції, приховані наміри або невикористаний потенціал.",
        "en": "Unresolved past patterns or fading residue: in the reversed position, the Magician may indicate manipulation, hidden intentions, or untapped potential."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: маг володіє всіма інструментами (стихіями) для реалізації своїх цілей.",
        "en": "Conscious goals and rational focus: the Magician possesses all the tools (elements) to realize his goals."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: у перевернутому положенні Маг може вказувати на маніпуляції, приховані наміри або невикористаний потенціал.",
        "en": "Mental confusion or conflicting conscious assumptions: in the reversed position, the Magician may indicate manipulation, hidden intentions, or untapped potential."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: маг володіє всіма інструментами (стихіями) для реалізації своїх цілей.",
        "en": "Upcoming development and next step: the Magician possesses all the tools (elements) to realize his goals."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: у перевернутому положенні Маг може вказувати на маніпуляції, приховані наміри або невикористаний потенціал.",
        "en": "Temporary slowdown or cautionary phase ahead: in the reversed position, the Magician may indicate manipulation, hidden intentions, or untapped potential."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: маг володіє всіма інструментами (стихіями) для реалізації своїх цілей.",
        "en": "Your self-perception and personal stance: the Magician possesses all the tools (elements) to realize his goals."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: у перевернутому положенні Маг може вказувати на маніпуляції, приховані наміри або невикористаний потенціал.",
        "en": "Self-doubt or need to regain inner balance: in the reversed position, the Magician may indicate manipulation, hidden intentions, or untapped potential."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: маг володіє всіма інструментами (стихіями) для реалізації своїх цілей.",
        "en": "Outer environment and surrounding circumstances: the Magician possesses all the tools (elements) to realize his goals."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: у перевернутому положенні Маг може вказувати на маніпуляції, приховані наміри або невикористаний потенціал.",
        "en": "External pressure, friction, or lack of support around you: in the reversed position, the Magician may indicate manipulation, hidden intentions, or untapped potential."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: маг володіє всіма інструментами (стихіями) для реалізації своїх цілей.",
        "en": "Primary hopes and inner aspiration for the outcome: the Magician possesses all the tools (elements) to realize his goals."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: у перевернутому положенні Маг може вказувати на маніпуляції, приховані наміри або невикористаний потенціал.",
        "en": "Underlying fears, apprehension, or anxiety: in the reversed position, the Magician may indicate manipulation, hidden intentions, or untapped potential."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: маг володіє всіма інструментами (стихіями) для реалізації своїх цілей.",
        "en": "Final outcome and resolution of the matter: the Magician possesses all the tools (elements) to realize his goals."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: у перевернутому положенні Маг може вказувати на маніпуляції, приховані наміри або невикористаний потенціал.",
        "en": "Outcome requires further patience and integration: in the reversed position, the Magician may indicate manipulation, hidden intentions, or untapped potential."
      }
    }
  },
  "m02": {
    "1": {
      "upright": {
        "ua": "Таємниця, сильна інтуїція, приховати мотиви або очікування. Головні чинники ситуації поки не очевидні, варто довіритися внутрішньому чуттю.",
        "en": "Mystery, strong intuition, hidden motives or expectations. The key factors of the situation aren't obvious yet — trust your inner sense."
      },
      "reversed": {
        "ua": "Прихована правда виходить наяв, ігнорування інтуїції, плітки або поверхневе сприйняття того, що відбувається.",
        "en": "A hidden truth comes to light, ignoring your intuition, gossip, or a superficial grasp of what's really happening."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: це голос інтуїції та глибокий зв’язок із прихованим світом.",
        "en": "The obstacle is an external challenge or excess: the High Priestess is the voice of intuition and a deep connection with the hidden world."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: перевернута Жриця говорить про поверхневість, ігнорування інтуїції або розкриття секретів.",
        "en": "Internal friction or resistance: the reversed High Priestess speaks of superficiality, ignoring intuition, or the revelation of secrets."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: це голос інтуїції та глибокий зв’язок із прихованим світом.",
        "en": "Deep inner drive and subconscious root: the High Priestess is the voice of intuition and a deep connection with the hidden world."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: перевернута Жриця говорить про поверхневість, ігнорування інтуїції або розкриття секретів.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: the reversed High Priestess speaks of superficiality, ignoring intuition, or the revelation of secrets."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: це голос інтуїції та глибокий зв’язок із прихованим світом.",
        "en": "Past foundation leading to the current moment: the High Priestess is the voice of intuition and a deep connection with the hidden world."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: перевернута Жриця говорить про поверхневість, ігнорування інтуїції або розкриття секретів.",
        "en": "Unresolved past patterns or fading residue: the reversed High Priestess speaks of superficiality, ignoring intuition, or the revelation of secrets."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: це голос інтуїції та глибокий зв’язок із прихованим світом.",
        "en": "Conscious goals and rational focus: the High Priestess is the voice of intuition and a deep connection with the hidden world."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: перевернута Жриця говорить про поверхневість, ігнорування інтуїції або розкриття секретів.",
        "en": "Mental confusion or conflicting conscious assumptions: the reversed High Priestess speaks of superficiality, ignoring intuition, or the revelation of secrets."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: це голос інтуїції та глибокий зв’язок із прихованим світом.",
        "en": "Upcoming development and next step: the High Priestess is the voice of intuition and a deep connection with the hidden world."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: перевернута Жриця говорить про поверхневість, ігнорування інтуїції або розкриття секретів.",
        "en": "Temporary slowdown or cautionary phase ahead: the reversed High Priestess speaks of superficiality, ignoring intuition, or the revelation of secrets."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: це голос інтуїції та глибокий зв’язок із прихованим світом.",
        "en": "Your self-perception and personal stance: the High Priestess is the voice of intuition and a deep connection with the hidden world."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: перевернута Жриця говорить про поверхневість, ігнорування інтуїції або розкриття секретів.",
        "en": "Self-doubt or need to regain inner balance: the reversed High Priestess speaks of superficiality, ignoring intuition, or the revelation of secrets."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: це голос інтуїції та глибокий зв’язок із прихованим світом.",
        "en": "Outer environment and surrounding circumstances: the High Priestess is the voice of intuition and a deep connection with the hidden world."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: перевернута Жриця говорить про поверхневість, ігнорування інтуїції або розкриття секретів.",
        "en": "External pressure, friction, or lack of support around you: the reversed High Priestess speaks of superficiality, ignoring intuition, or the revelation of secrets."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: це голос інтуїції та глибокий зв’язок із прихованим світом.",
        "en": "Primary hopes and inner aspiration for the outcome: the High Priestess is the voice of intuition and a deep connection with the hidden world."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: перевернута Жриця говорить про поверхневість, ігнорування інтуїції або розкриття секретів.",
        "en": "Underlying fears, apprehension, or anxiety: the reversed High Priestess speaks of superficiality, ignoring intuition, or the revelation of secrets."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: це голос інтуїції та глибокий зв’язок із прихованим світом.",
        "en": "Final outcome and resolution of the matter: the High Priestess is the voice of intuition and a deep connection with the hidden world."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: перевернута Жриця говорить про поверхневість, ігнорування інтуїції або розкриття секретів.",
        "en": "Outcome requires further patience and integration: the reversed High Priestess speaks of superficiality, ignoring intuition, or the revelation of secrets."
      }
    }
  },
  "m03": {
    "1": {
      "upright": {
        "ua": "Розквіт, достаток, активний розвиток, турбота та матеріалізація ідей. Ситуація розвивається природно й дає рясні плоди.",
        "en": "Flourishing, abundance, active growth, nurturing, and ideas taking material form. The situation is developing naturally and bearing rich fruit."
      },
      "reversed": {
        "ua": "Застій у розвитку, матеріальні втрати, надмірний контроль або брак турбувальної енергії. Ситуація потребує відновлення ресурсів.",
        "en": "Stalled growth, material losses, excessive control, or a lack of nurturing energy. The situation needs its resources restored."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: символ процвітання, творчості, турботи та матеріального достатку.",
        "en": "The obstacle is an external challenge or excess: the Empress is a symbol of prosperity, creativity, care, and material abundance."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: може означати творчий застій, надмірну опіку, залежність від інших або фінансові труднощі.",
        "en": "Internal friction or resistance: may mean creative stagnation, excessive care, dependence on others, or financial difficulties."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: символ процвітання, творчості, турботи та матеріального достатку.",
        "en": "Deep inner drive and subconscious root: the Empress is a symbol of prosperity, creativity, care, and material abundance."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: може означати творчий застій, надмірну опіку, залежність від інших або фінансові труднощі.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: may mean creative stagnation, excessive care, dependence on others, or financial difficulties."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: символ процвітання, творчості, турботи та матеріального достатку.",
        "en": "Past foundation leading to the current moment: the Empress is a symbol of prosperity, creativity, care, and material abundance."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: може означати творчий застій, надмірну опіку, залежність від інших або фінансові труднощі.",
        "en": "Unresolved past patterns or fading residue: may mean creative stagnation, excessive care, dependence on others, or financial difficulties."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: символ процвітання, творчості, турботи та матеріального достатку.",
        "en": "Conscious goals and rational focus: the Empress is a symbol of prosperity, creativity, care, and material abundance."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: може означати творчий застій, надмірну опіку, залежність від інших або фінансові труднощі.",
        "en": "Mental confusion or conflicting conscious assumptions: may mean creative stagnation, excessive care, dependence on others, or financial difficulties."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: символ процвітання, творчості, турботи та матеріального достатку.",
        "en": "Upcoming development and next step: the Empress is a symbol of prosperity, creativity, care, and material abundance."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: може означати творчий застій, надмірну опіку, залежність від інших або фінансові труднощі.",
        "en": "Temporary slowdown or cautionary phase ahead: may mean creative stagnation, excessive care, dependence on others, or financial difficulties."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: символ процвітання, творчості, турботи та матеріального достатку.",
        "en": "Your self-perception and personal stance: the Empress is a symbol of prosperity, creativity, care, and material abundance."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: може означати творчий застій, надмірну опіку, залежність від інших або фінансові труднощі.",
        "en": "Self-doubt or need to regain inner balance: may mean creative stagnation, excessive care, dependence on others, or financial difficulties."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: символ процвітання, творчості, турботи та матеріального достатку.",
        "en": "Outer environment and surrounding circumstances: the Empress is a symbol of prosperity, creativity, care, and material abundance."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: може означати творчий застій, надмірну опіку, залежність від інших або фінансові труднощі.",
        "en": "External pressure, friction, or lack of support around you: may mean creative stagnation, excessive care, dependence on others, or financial difficulties."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: символ процвітання, творчості, турботи та матеріального достатку.",
        "en": "Primary hopes and inner aspiration for the outcome: the Empress is a symbol of prosperity, creativity, care, and material abundance."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: може означати творчий застій, надмірну опіку, залежність від інших або фінансові труднощі.",
        "en": "Underlying fears, apprehension, or anxiety: may mean creative stagnation, excessive care, dependence on others, or financial difficulties."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: символ процвітання, творчості, турботи та матеріального достатку.",
        "en": "Final outcome and resolution of the matter: the Empress is a symbol of prosperity, creativity, care, and material abundance."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: може означати творчий застій, надмірну опіку, залежність від інших або фінансові труднощі.",
        "en": "Outcome requires further patience and integration: may mean creative stagnation, excessive care, dependence on others, or financial difficulties."
      }
    }
  },
  "m04": {
    "1": {
      "upright": {
        "ua": "Структура, порядок, дисципліна, авторитет і стабільність. Ситуація вимагає чіткої системи, контролю та слідування плану.",
        "en": "Structure, order, discipline, authority, and stability. The situation calls for a clear system, control, and sticking to a plan."
      },
      "reversed": {
        "ua": "Втрата контролю, деспотизм, жорсткі рамки або відсутність організації. Ситуація руйнується через хаос або надмірну тиранію.",
        "en": "Loss of control, tyranny, rigid constraints, or lack of organization. The situation is falling apart from chaos or excessive authoritarianism."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: імператор уособлює порядок, логіку, стабільність і авторитет.",
        "en": "The obstacle is an external challenge or excess: the Emperor embodies order, logic, stability, and authority."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: може вказувати на тиранію, жорсткість, надмірний контроль або повну відсутність порядку.",
        "en": "Internal friction or resistance: may indicate tyranny, rigidity, excessive control, or a complete lack of order."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: імператор уособлює порядок, логіку, стабільність і авторитет.",
        "en": "Deep inner drive and subconscious root: the Emperor embodies order, logic, stability, and authority."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: може вказувати на тиранію, жорсткість, надмірний контроль або повну відсутність порядку.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: may indicate tyranny, rigidity, excessive control, or a complete lack of order."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: імператор уособлює порядок, логіку, стабільність і авторитет.",
        "en": "Past foundation leading to the current moment: the Emperor embodies order, logic, stability, and authority."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: може вказувати на тиранію, жорсткість, надмірний контроль або повну відсутність порядку.",
        "en": "Unresolved past patterns or fading residue: may indicate tyranny, rigidity, excessive control, or a complete lack of order."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: імператор уособлює порядок, логіку, стабільність і авторитет.",
        "en": "Conscious goals and rational focus: the Emperor embodies order, logic, stability, and authority."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: може вказувати на тиранію, жорсткість, надмірний контроль або повну відсутність порядку.",
        "en": "Mental confusion or conflicting conscious assumptions: may indicate tyranny, rigidity, excessive control, or a complete lack of order."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: імператор уособлює порядок, логіку, стабільність і авторитет.",
        "en": "Upcoming development and next step: the Emperor embodies order, logic, stability, and authority."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: може вказувати на тиранію, жорсткість, надмірний контроль або повну відсутність порядку.",
        "en": "Temporary slowdown or cautionary phase ahead: may indicate tyranny, rigidity, excessive control, or a complete lack of order."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: імператор уособлює порядок, логіку, стабільність і авторитет.",
        "en": "Your self-perception and personal stance: the Emperor embodies order, logic, stability, and authority."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: може вказувати на тиранію, жорсткість, надмірний контроль або повну відсутність порядку.",
        "en": "Self-doubt or need to regain inner balance: may indicate tyranny, rigidity, excessive control, or a complete lack of order."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: імператор уособлює порядок, логіку, стабільність і авторитет.",
        "en": "Outer environment and surrounding circumstances: the Emperor embodies order, logic, stability, and authority."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: може вказувати на тиранію, жорсткість, надмірний контроль або повну відсутність порядку.",
        "en": "External pressure, friction, or lack of support around you: may indicate tyranny, rigidity, excessive control, or a complete lack of order."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: імператор уособлює порядок, логіку, стабільність і авторитет.",
        "en": "Primary hopes and inner aspiration for the outcome: the Emperor embodies order, logic, stability, and authority."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: може вказувати на тиранію, жорсткість, надмірний контроль або повну відсутність порядку.",
        "en": "Underlying fears, apprehension, or anxiety: may indicate tyranny, rigidity, excessive control, or a complete lack of order."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: імператор уособлює порядок, логіку, стабільність і авторитет.",
        "en": "Final outcome and resolution of the matter: the Emperor embodies order, logic, stability, and authority."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: може вказувати на тиранію, жорсткість, надмірний контроль або повну відсутність порядку.",
        "en": "Outcome requires further patience and integration: may indicate tyranny, rigidity, excessive control, or a complete lack of order."
      }
    }
  },
  "m05": {
    "1": {
      "upright": {
        "ua": "Слідування традиціям, моральні принципи, навчання, пошук мудрого наставника або взаємодія з офіційними інституціями.",
        "en": "Following tradition, moral principles, learning, seeking a wise mentor, or dealing with official institutions."
      },
      "reversed": {
        "ua": "Бунт проти правил, застарілі догми, фальшиві авторитети або відмова відповідати суспільним очікуванням.",
        "en": "Rebelling against the rules, outdated dogma, false authority, or refusing to meet social expectations."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: шлях до знань через традиції, віру, навчання та духовне наставництво.",
        "en": "The obstacle is an external challenge or excess: the Hierophant is the path to knowledge through traditions, faith, learning, and spiritual mentorship."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: закликає до перегляду застарілих норм або пошуку власного нетрадиційного шляху.",
        "en": "Internal friction or resistance: calls for a review of outdated norms or the search for one’s own non-traditional path."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: шлях до знань через традиції, віру, навчання та духовне наставництво.",
        "en": "Deep inner drive and subconscious root: the Hierophant is the path to knowledge through traditions, faith, learning, and spiritual mentorship."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: закликає до перегляду застарілих норм або пошуку власного нетрадиційного шляху.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: calls for a review of outdated norms or the search for one’s own non-traditional path."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: шлях до знань через традиції, віру, навчання та духовне наставництво.",
        "en": "Past foundation leading to the current moment: the Hierophant is the path to knowledge through traditions, faith, learning, and spiritual mentorship."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: закликає до перегляду застарілих норм або пошуку власного нетрадиційного шляху.",
        "en": "Unresolved past patterns or fading residue: calls for a review of outdated norms or the search for one’s own non-traditional path."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: шлях до знань через традиції, віру, навчання та духовне наставництво.",
        "en": "Conscious goals and rational focus: the Hierophant is the path to knowledge through traditions, faith, learning, and spiritual mentorship."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: закликає до перегляду застарілих норм або пошуку власного нетрадиційного шляху.",
        "en": "Mental confusion or conflicting conscious assumptions: calls for a review of outdated norms or the search for one’s own non-traditional path."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: шлях до знань через традиції, віру, навчання та духовне наставництво.",
        "en": "Upcoming development and next step: the Hierophant is the path to knowledge through traditions, faith, learning, and spiritual mentorship."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: закликає до перегляду застарілих норм або пошуку власного нетрадиційного шляху.",
        "en": "Temporary slowdown or cautionary phase ahead: calls for a review of outdated norms or the search for one’s own non-traditional path."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: шлях до знань через традиції, віру, навчання та духовне наставництво.",
        "en": "Your self-perception and personal stance: the Hierophant is the path to knowledge through traditions, faith, learning, and spiritual mentorship."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: закликає до перегляду застарілих норм або пошуку власного нетрадиційного шляху.",
        "en": "Self-doubt or need to regain inner balance: calls for a review of outdated norms or the search for one’s own non-traditional path."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: шлях до знань через традиції, віру, навчання та духовне наставництво.",
        "en": "Outer environment and surrounding circumstances: the Hierophant is the path to knowledge through traditions, faith, learning, and spiritual mentorship."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: закликає до перегляду застарілих норм або пошуку власного нетрадиційного шляху.",
        "en": "External pressure, friction, or lack of support around you: calls for a review of outdated norms or the search for one’s own non-traditional path."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: шлях до знань через традиції, віру, навчання та духовне наставництво.",
        "en": "Primary hopes and inner aspiration for the outcome: the Hierophant is the path to knowledge through traditions, faith, learning, and spiritual mentorship."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: закликає до перегляду застарілих норм або пошуку власного нетрадиційного шляху.",
        "en": "Underlying fears, apprehension, or anxiety: calls for a review of outdated norms or the search for one’s own non-traditional path."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: шлях до знань через традиції, віру, навчання та духовне наставництво.",
        "en": "Final outcome and resolution of the matter: the Hierophant is the path to knowledge through traditions, faith, learning, and spiritual mentorship."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: закликає до перегляду застарілих норм або пошуку власного нетрадиційного шляху.",
        "en": "Outcome requires further patience and integration: calls for a review of outdated norms or the search for one’s own non-traditional path."
      }
    }
  },
  "m06": {
    "1": {
      "upright": {
        "ua": "Важливий вибір серцем, гармонійний союз, партнерство, щирий зв'язок і необхідність узгодити свої цінності.",
        "en": "An important choice of the heart, a harmonious union, partnership, a genuine connection, and the need to align your values."
      },
      "reversed": {
        "ua": "Внутрішній конфлікт, неправильний вибір, розлад у стосунках або нездатність прийняти остаточне рішення.",
        "en": "Inner conflict, a wrong choice, discord in a relationship, or an inability to make a final decision."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: закохані говорять про важливий вибір, заснований на почуттях і цінностях.",
        "en": "The obstacle is an external challenge or excess: the Lovers speak of an important choice based on feelings and values."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: вказує на конфлікт цінностей, невірний вибір або дисбаланс у стосунках.",
        "en": "Internal friction or resistance: indicates a conflict of values, wrong choice, or imbalance in relationships."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: закохані говорять про важливий вибір, заснований на почуттях і цінностях.",
        "en": "Deep inner drive and subconscious root: the Lovers speak of an important choice based on feelings and values."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: вказує на конфлікт цінностей, невірний вибір або дисбаланс у стосунках.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: indicates a conflict of values, wrong choice, or imbalance in relationships."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: закохані говорять про важливий вибір, заснований на почуттях і цінностях.",
        "en": "Past foundation leading to the current moment: the Lovers speak of an important choice based on feelings and values."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: вказує на конфлікт цінностей, невірний вибір або дисбаланс у стосунках.",
        "en": "Unresolved past patterns or fading residue: indicates a conflict of values, wrong choice, or imbalance in relationships."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: закохані говорять про важливий вибір, заснований на почуттях і цінностях.",
        "en": "Conscious goals and rational focus: the Lovers speak of an important choice based on feelings and values."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: вказує на конфлікт цінностей, невірний вибір або дисбаланс у стосунках.",
        "en": "Mental confusion or conflicting conscious assumptions: indicates a conflict of values, wrong choice, or imbalance in relationships."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: закохані говорять про важливий вибір, заснований на почуттях і цінностях.",
        "en": "Upcoming development and next step: the Lovers speak of an important choice based on feelings and values."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: вказує на конфлікт цінностей, невірний вибір або дисбаланс у стосунках.",
        "en": "Temporary slowdown or cautionary phase ahead: indicates a conflict of values, wrong choice, or imbalance in relationships."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: закохані говорять про важливий вибір, заснований на почуттях і цінностях.",
        "en": "Your self-perception and personal stance: the Lovers speak of an important choice based on feelings and values."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: вказує на конфлікт цінностей, невірний вибір або дисбаланс у стосунках.",
        "en": "Self-doubt or need to regain inner balance: indicates a conflict of values, wrong choice, or imbalance in relationships."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: закохані говорять про важливий вибір, заснований на почуттях і цінностях.",
        "en": "Outer environment and surrounding circumstances: the Lovers speak of an important choice based on feelings and values."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: вказує на конфлікт цінностей, невірний вибір або дисбаланс у стосунках.",
        "en": "External pressure, friction, or lack of support around you: indicates a conflict of values, wrong choice, or imbalance in relationships."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: закохані говорять про важливий вибір, заснований на почуттях і цінностях.",
        "en": "Primary hopes and inner aspiration for the outcome: the Lovers speak of an important choice based on feelings and values."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: вказує на конфлікт цінностей, невірний вибір або дисбаланс у стосунках.",
        "en": "Underlying fears, apprehension, or anxiety: indicates a conflict of values, wrong choice, or imbalance in relationships."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: закохані говорять про важливий вибір, заснований на почуттях і цінностях.",
        "en": "Final outcome and resolution of the matter: the Lovers speak of an important choice based on feelings and values."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: вказує на конфлікт цінностей, невірний вибір або дисбаланс у стосунках.",
        "en": "Outcome requires further patience and integration: indicates a conflict of values, wrong choice, or imbalance in relationships."
      }
    }
  },
  "m07": {
    "1": {
      "upright": {
        "ua": "Стрімкий рух уперед, подолання перешкод завдяки силі волі, цілеспрямованість та впевнений успіх.",
        "en": "Rapid forward momentum, overcoming obstacles through willpower, focus, and confident success."
      },
      "reversed": {
        "ua": "Втрата керування, конфлікти, затримки в дорозі або відсутність чіткого напрямку руху.",
        "en": "Loss of control, conflicts, delays along the way, or a lack of clear direction."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: колісниця символізує тріумф, отриманий завдяки самовладанню, наполегливості та силі волі.",
        "en": "The obstacle is an external challenge or excess: the Chariot symbolizes triumph achieved through self-control, perseverance, and willpower."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: вказує на втрату контролю, агресію, поразку через поспіх або відсутність напрямку.",
        "en": "Internal friction or resistance: indicates loss of control, aggression, defeat due to haste or lack of direction."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: колісниця символізує тріумф, отриманий завдяки самовладанню, наполегливості та силі волі.",
        "en": "Deep inner drive and subconscious root: the Chariot symbolizes triumph achieved through self-control, perseverance, and willpower."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: вказує на втрату контролю, агресію, поразку через поспіх або відсутність напрямку.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: indicates loss of control, aggression, defeat due to haste or lack of direction."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: колісниця символізує тріумф, отриманий завдяки самовладанню, наполегливості та силі волі.",
        "en": "Past foundation leading to the current moment: the Chariot symbolizes triumph achieved through self-control, perseverance, and willpower."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: вказує на втрату контролю, агресію, поразку через поспіх або відсутність напрямку.",
        "en": "Unresolved past patterns or fading residue: indicates loss of control, aggression, defeat due to haste or lack of direction."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: колісниця символізує тріумф, отриманий завдяки самовладанню, наполегливості та силі волі.",
        "en": "Conscious goals and rational focus: the Chariot symbolizes triumph achieved through self-control, perseverance, and willpower."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: вказує на втрату контролю, агресію, поразку через поспіх або відсутність напрямку.",
        "en": "Mental confusion or conflicting conscious assumptions: indicates loss of control, aggression, defeat due to haste or lack of direction."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: колісниця символізує тріумф, отриманий завдяки самовладанню, наполегливості та силі волі.",
        "en": "Upcoming development and next step: the Chariot symbolizes triumph achieved through self-control, perseverance, and willpower."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: вказує на втрату контролю, агресію, поразку через поспіх або відсутність напрямку.",
        "en": "Temporary slowdown or cautionary phase ahead: indicates loss of control, aggression, defeat due to haste or lack of direction."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: колісниця символізує тріумф, отриманий завдяки самовладанню, наполегливості та силі волі.",
        "en": "Your self-perception and personal stance: the Chariot symbolizes triumph achieved through self-control, perseverance, and willpower."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: вказує на втрату контролю, агресію, поразку через поспіх або відсутність напрямку.",
        "en": "Self-doubt or need to regain inner balance: indicates loss of control, aggression, defeat due to haste or lack of direction."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: колісниця символізує тріумф, отриманий завдяки самовладанню, наполегливості та силі волі.",
        "en": "Outer environment and surrounding circumstances: the Chariot symbolizes triumph achieved through self-control, perseverance, and willpower."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: вказує на втрату контролю, агресію, поразку через поспіх або відсутність напрямку.",
        "en": "External pressure, friction, or lack of support around you: indicates loss of control, aggression, defeat due to haste or lack of direction."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: колісниця символізує тріумф, отриманий завдяки самовладанню, наполегливості та силі волі.",
        "en": "Primary hopes and inner aspiration for the outcome: the Chariot symbolizes triumph achieved through self-control, perseverance, and willpower."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: вказує на втрату контролю, агресію, поразку через поспіх або відсутність напрямку.",
        "en": "Underlying fears, apprehension, or anxiety: indicates loss of control, aggression, defeat due to haste or lack of direction."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: колісниця символізує тріумф, отриманий завдяки самовладанню, наполегливості та силі волі.",
        "en": "Final outcome and resolution of the matter: the Chariot symbolizes triumph achieved through self-control, perseverance, and willpower."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: вказує на втрату контролю, агресію, поразку через поспіх або відсутність напрямку.",
        "en": "Outcome requires further patience and integration: indicates loss of control, aggression, defeat due to haste or lack of direction."
      }
    }
  },
  "m08": {
    "1": {
      "upright": {
        "ua": "Внутрішня стійкість, м'яка сила, терпіння, приборкання емоцій та впевнене подолання викликів без агресії.",
        "en": "Inner resilience, gentle strength, patience, mastering your emotions, and confidently facing challenges without aggression."
      },
      "reversed": {
        "ua": "Сумніви в собі, слабкість, спалахи гніву або відсутність самоконтролю під тиском обставин.",
        "en": "Self-doubt, weakness, outbursts of anger, or a loss of self-control under pressure."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: справедливість говорить про те, що ви отримаєте те, на що заслуговуєте.",
        "en": "The obstacle is an external challenge or excess: justice says that you will get what you deserve."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: вказує на несправедливість, упередженість, спроби уникнути відповідальності або дисбаланс.",
        "en": "Internal friction or resistance: indicates injustice, bias, attempts to avoid responsibility, or imbalance."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: справедливість говорить про те, що ви отримаєте те, на що заслуговуєте.",
        "en": "Deep inner drive and subconscious root: justice says that you will get what you deserve."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: вказує на несправедливість, упередженість, спроби уникнути відповідальності або дисбаланс.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: indicates injustice, bias, attempts to avoid responsibility, or imbalance."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: справедливість говорить про те, що ви отримаєте те, на що заслуговуєте.",
        "en": "Past foundation leading to the current moment: justice says that you will get what you deserve."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: вказує на несправедливість, упередженість, спроби уникнути відповідальності або дисбаланс.",
        "en": "Unresolved past patterns or fading residue: indicates injustice, bias, attempts to avoid responsibility, or imbalance."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: справедливість говорить про те, що ви отримаєте те, на що заслуговуєте.",
        "en": "Conscious goals and rational focus: justice says that you will get what you deserve."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: вказує на несправедливість, упередженість, спроби уникнути відповідальності або дисбаланс.",
        "en": "Mental confusion or conflicting conscious assumptions: indicates injustice, bias, attempts to avoid responsibility, or imbalance."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: справедливість говорить про те, що ви отримаєте те, на що заслуговуєте.",
        "en": "Upcoming development and next step: justice says that you will get what you deserve."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: вказує на несправедливість, упередженість, спроби уникнути відповідальності або дисбаланс.",
        "en": "Temporary slowdown or cautionary phase ahead: indicates injustice, bias, attempts to avoid responsibility, or imbalance."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: справедливість говорить про те, що ви отримаєте те, на що заслуговуєте.",
        "en": "Your self-perception and personal stance: justice says that you will get what you deserve."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: вказує на несправедливість, упередженість, спроби уникнути відповідальності або дисбаланс.",
        "en": "Self-doubt or need to regain inner balance: indicates injustice, bias, attempts to avoid responsibility, or imbalance."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: справедливість говорить про те, що ви отримаєте те, на що заслуговуєте.",
        "en": "Outer environment and surrounding circumstances: justice says that you will get what you deserve."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: вказує на несправедливість, упередженість, спроби уникнути відповідальності або дисбаланс.",
        "en": "External pressure, friction, or lack of support around you: indicates injustice, bias, attempts to avoid responsibility, or imbalance."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: справедливість говорить про те, що ви отримаєте те, на що заслуговуєте.",
        "en": "Primary hopes and inner aspiration for the outcome: justice says that you will get what you deserve."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: вказує на несправедливість, упередженість, спроби уникнути відповідальності або дисбаланс.",
        "en": "Underlying fears, apprehension, or anxiety: indicates injustice, bias, attempts to avoid responsibility, or imbalance."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: справедливість говорить про те, що ви отримаєте те, на що заслуговуєте.",
        "en": "Final outcome and resolution of the matter: justice says that you will get what you deserve."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: вказує на несправедливість, упередженість, спроби уникнути відповідальності або дисбаланс.",
        "en": "Outcome requires further patience and integration: indicates injustice, bias, attempts to avoid responsibility, or imbalance."
      }
    }
  },
  "m09": {
    "1": {
      "upright": {
        "ua": "Потреба в самоті, глибокий аналіз, переоцінка цінностей, пошук істини та переключення уваги всередину себе.",
        "en": "A need for solitude, deep reflection, reassessing your values, seeking the truth, and turning your attention inward."
      },
      "reversed": {
        "ua": "Ізоляція, самотність, упертість, ігнорування розумних порад або страх відриву від суспільства.",
        "en": "Isolation, loneliness, stubbornness, ignoring sound advice, or a fear of disconnecting from others."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: відлюдник закликає до усамітнення для пошуку істини всередині себе.",
        "en": "The obstacle is an external challenge or excess: the Hermit calls for solitude to seek the truth within oneself."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: може вказувати на болісну самотність, ізоляцію, відмову чути поради або страх бути наодинці.",
        "en": "Internal friction or resistance: may indicate painful loneliness, isolation, refusal to hear advice, or fear of being alone."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: відлюдник закликає до усамітнення для пошуку істини всередині себе.",
        "en": "Deep inner drive and subconscious root: the Hermit calls for solitude to seek the truth within oneself."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: може вказувати на болісну самотність, ізоляцію, відмову чути поради або страх бути наодинці.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: may indicate painful loneliness, isolation, refusal to hear advice, or fear of being alone."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: відлюдник закликає до усамітнення для пошуку істини всередині себе.",
        "en": "Past foundation leading to the current moment: the Hermit calls for solitude to seek the truth within oneself."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: може вказувати на болісну самотність, ізоляцію, відмову чути поради або страх бути наодинці.",
        "en": "Unresolved past patterns or fading residue: may indicate painful loneliness, isolation, refusal to hear advice, or fear of being alone."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: відлюдник закликає до усамітнення для пошуку істини всередині себе.",
        "en": "Conscious goals and rational focus: the Hermit calls for solitude to seek the truth within oneself."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: може вказувати на болісну самотність, ізоляцію, відмову чути поради або страх бути наодинці.",
        "en": "Mental confusion or conflicting conscious assumptions: may indicate painful loneliness, isolation, refusal to hear advice, or fear of being alone."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: відлюдник закликає до усамітнення для пошуку істини всередині себе.",
        "en": "Upcoming development and next step: the Hermit calls for solitude to seek the truth within oneself."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: може вказувати на болісну самотність, ізоляцію, відмову чути поради або страх бути наодинці.",
        "en": "Temporary slowdown or cautionary phase ahead: may indicate painful loneliness, isolation, refusal to hear advice, or fear of being alone."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: відлюдник закликає до усамітнення для пошуку істини всередині себе.",
        "en": "Your self-perception and personal stance: the Hermit calls for solitude to seek the truth within oneself."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: може вказувати на болісну самотність, ізоляцію, відмову чути поради або страх бути наодинці.",
        "en": "Self-doubt or need to regain inner balance: may indicate painful loneliness, isolation, refusal to hear advice, or fear of being alone."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: відлюдник закликає до усамітнення для пошуку істини всередині себе.",
        "en": "Outer environment and surrounding circumstances: the Hermit calls for solitude to seek the truth within oneself."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: може вказувати на болісну самотність, ізоляцію, відмову чути поради або страх бути наодинці.",
        "en": "External pressure, friction, or lack of support around you: may indicate painful loneliness, isolation, refusal to hear advice, or fear of being alone."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: відлюдник закликає до усамітнення для пошуку істини всередині себе.",
        "en": "Primary hopes and inner aspiration for the outcome: the Hermit calls for solitude to seek the truth within oneself."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: може вказувати на болісну самотність, ізоляцію, відмову чути поради або страх бути наодинці.",
        "en": "Underlying fears, apprehension, or anxiety: may indicate painful loneliness, isolation, refusal to hear advice, or fear of being alone."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: відлюдник закликає до усамітнення для пошуку істини всередині себе.",
        "en": "Final outcome and resolution of the matter: the Hermit calls for solitude to seek the truth within oneself."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: може вказувати на болісну самотність, ізоляцію, відмову чути поради або страх бути наодинці.",
        "en": "Outcome requires further patience and integration: may indicate painful loneliness, isolation, refusal to hear advice, or fear of being alone."
      }
    }
  },
  "m10": {
    "1": {
      "upright": {
        "ua": "Неминучі зміни, новий цикл, удача, поворотний момент, який залежить від зовнішніх обставин та долі.",
        "en": "Inevitable change, a new cycle, good luck, a turning point that depends on external circumstances and fate."
      },
      "reversed": {
        "ua": "Спротив змінам, тимчасова смуга невдач, повторення старих помилок або відчуття втрати контролю.",
        "en": "Resistance to change, a temporary run of bad luck, repeating old mistakes, or a sense of losing control."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: колесо Фортуни нагадує, що все минає і все змінюється.",
        "en": "The obstacle is an external challenge or excess: the Wheel of Fortune reminds that everything passes and everything changes."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: може означати період невдач, опір змінам або повернення старих проблем.",
        "en": "Internal friction or resistance: may mean a period of failures, resistance to change, or the return of old problems."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: колесо Фортуни нагадує, що все минає і все змінюється.",
        "en": "Deep inner drive and subconscious root: the Wheel of Fortune reminds that everything passes and everything changes."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: може означати період невдач, опір змінам або повернення старих проблем.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: may mean a period of failures, resistance to change, or the return of old problems."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: колесо Фортуни нагадує, що все минає і все змінюється.",
        "en": "Past foundation leading to the current moment: the Wheel of Fortune reminds that everything passes and everything changes."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: може означати період невдач, опір змінам або повернення старих проблем.",
        "en": "Unresolved past patterns or fading residue: may mean a period of failures, resistance to change, or the return of old problems."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: колесо Фортуни нагадує, що все минає і все змінюється.",
        "en": "Conscious goals and rational focus: the Wheel of Fortune reminds that everything passes and everything changes."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: може означати період невдач, опір змінам або повернення старих проблем.",
        "en": "Mental confusion or conflicting conscious assumptions: may mean a period of failures, resistance to change, or the return of old problems."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: колесо Фортуни нагадує, що все минає і все змінюється.",
        "en": "Upcoming development and next step: the Wheel of Fortune reminds that everything passes and everything changes."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: може означати період невдач, опір змінам або повернення старих проблем.",
        "en": "Temporary slowdown or cautionary phase ahead: may mean a period of failures, resistance to change, or the return of old problems."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: колесо Фортуни нагадує, що все минає і все змінюється.",
        "en": "Your self-perception and personal stance: the Wheel of Fortune reminds that everything passes and everything changes."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: може означати період невдач, опір змінам або повернення старих проблем.",
        "en": "Self-doubt or need to regain inner balance: may mean a period of failures, resistance to change, or the return of old problems."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: колесо Фортуни нагадує, що все минає і все змінюється.",
        "en": "Outer environment and surrounding circumstances: the Wheel of Fortune reminds that everything passes and everything changes."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: може означати період невдач, опір змінам або повернення старих проблем.",
        "en": "External pressure, friction, or lack of support around you: may mean a period of failures, resistance to change, or the return of old problems."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: колесо Фортуни нагадує, що все минає і все змінюється.",
        "en": "Primary hopes and inner aspiration for the outcome: the Wheel of Fortune reminds that everything passes and everything changes."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: може означати період невдач, опір змінам або повернення старих проблем.",
        "en": "Underlying fears, apprehension, or anxiety: may mean a period of failures, resistance to change, or the return of old problems."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: колесо Фортуни нагадує, що все минає і все змінюється.",
        "en": "Final outcome and resolution of the matter: the Wheel of Fortune reminds that everything passes and everything changes."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: може означати період невдач, опір змінам або повернення старих проблем.",
        "en": "Outcome requires further patience and integration: may mean a period of failures, resistance to change, or the return of old problems."
      }
    }
  },
  "m11": {
    "1": {
      "upright": {
        "ua": "Об'єктивність, закон, відповідальність за свої дії, прийняття зваженого та чесного рішення, юридичні справи.",
        "en": "Objectivity, the law, accountability for your actions, making a balanced and honest decision, legal matters."
      },
      "reversed": {
        "ua": "Несправедливість, упередженість, ухилення від відповідальності, нечесні суди або порушення балансу.",
        "en": "Injustice, bias, avoiding responsibility, an unfair judgment, or a loss of balance."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: це перемога духу над інстинктами.",
        "en": "The obstacle is an external challenge or excess: strength is the victory of the spirit over instincts."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: вказує на брак впевненості, зловживання силою, напади гніву або слабкість духу.",
        "en": "Internal friction or resistance: indicates lack of confidence, abuse of power, outbursts of anger, or weakness of spirit."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: це перемога духу над інстинктами.",
        "en": "Deep inner drive and subconscious root: strength is the victory of the spirit over instincts."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: вказує на брак впевненості, зловживання силою, напади гніву або слабкість духу.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: indicates lack of confidence, abuse of power, outbursts of anger, or weakness of spirit."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: це перемога духу над інстинктами.",
        "en": "Past foundation leading to the current moment: strength is the victory of the spirit over instincts."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: вказує на брак впевненості, зловживання силою, напади гніву або слабкість духу.",
        "en": "Unresolved past patterns or fading residue: indicates lack of confidence, abuse of power, outbursts of anger, or weakness of spirit."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: це перемога духу над інстинктами.",
        "en": "Conscious goals and rational focus: strength is the victory of the spirit over instincts."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: вказує на брак впевненості, зловживання силою, напади гніву або слабкість духу.",
        "en": "Mental confusion or conflicting conscious assumptions: indicates lack of confidence, abuse of power, outbursts of anger, or weakness of spirit."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: це перемога духу над інстинктами.",
        "en": "Upcoming development and next step: strength is the victory of the spirit over instincts."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: вказує на брак впевненості, зловживання силою, напади гніву або слабкість духу.",
        "en": "Temporary slowdown or cautionary phase ahead: indicates lack of confidence, abuse of power, outbursts of anger, or weakness of spirit."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: це перемога духу над інстинктами.",
        "en": "Your self-perception and personal stance: strength is the victory of the spirit over instincts."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: вказує на брак впевненості, зловживання силою, напади гніву або слабкість духу.",
        "en": "Self-doubt or need to regain inner balance: indicates lack of confidence, abuse of power, outbursts of anger, or weakness of spirit."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: це перемога духу над інстинктами.",
        "en": "Outer environment and surrounding circumstances: strength is the victory of the spirit over instincts."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: вказує на брак впевненості, зловживання силою, напади гніву або слабкість духу.",
        "en": "External pressure, friction, or lack of support around you: indicates lack of confidence, abuse of power, outbursts of anger, or weakness of spirit."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: це перемога духу над інстинктами.",
        "en": "Primary hopes and inner aspiration for the outcome: strength is the victory of the spirit over instincts."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: вказує на брак впевненості, зловживання силою, напади гніву або слабкість духу.",
        "en": "Underlying fears, apprehension, or anxiety: indicates lack of confidence, abuse of power, outbursts of anger, or weakness of spirit."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: це перемога духу над інстинктами.",
        "en": "Final outcome and resolution of the matter: strength is the victory of the spirit over instincts."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: вказує на брак впевненості, зловживання силою, напади гніву або слабкість духу.",
        "en": "Outcome requires further patience and integration: indicates lack of confidence, abuse of power, outbursts of anger, or weakness of spirit."
      }
    }
  },
  "m12": {
    "1": {
      "upright": {
        "ua": "Пауза, зміна кута зору, необхідність чимось пожертвувати заради більшого, вимушене очікування.",
        "en": "A pause, a shift in perspective, the need to sacrifice something for a greater gain, forced waiting."
      },
      "reversed": {
        "ua": "Марні жертви, зависання в невизначеності, упертість та небажання бачити реальний стан речей.",
        "en": "Pointless sacrifice, being stuck in limbo, stubbornness, and an unwillingness to see things as they really are."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: повішений закликає подивитися на ситуацію під іншим кутом.",
        "en": "The obstacle is an external challenge or excess: the Hanged Man calls to look at the situation from a different angle."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: вказує на даремні жертви, егоїзм, нескінченні зволікання або опір необхідній паузі.",
        "en": "Internal friction or resistance: indicates useless sacrifices, selfishness, endless delays, or resistance to a necessary pause."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: повішений закликає подивитися на ситуацію під іншим кутом.",
        "en": "Deep inner drive and subconscious root: the Hanged Man calls to look at the situation from a different angle."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: вказує на даремні жертви, егоїзм, нескінченні зволікання або опір необхідній паузі.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: indicates useless sacrifices, selfishness, endless delays, or resistance to a necessary pause."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: повішений закликає подивитися на ситуацію під іншим кутом.",
        "en": "Past foundation leading to the current moment: the Hanged Man calls to look at the situation from a different angle."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: вказує на даремні жертви, егоїзм, нескінченні зволікання або опір необхідній паузі.",
        "en": "Unresolved past patterns or fading residue: indicates useless sacrifices, selfishness, endless delays, or resistance to a necessary pause."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: повішений закликає подивитися на ситуацію під іншим кутом.",
        "en": "Conscious goals and rational focus: the Hanged Man calls to look at the situation from a different angle."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: вказує на даремні жертви, егоїзм, нескінченні зволікання або опір необхідній паузі.",
        "en": "Mental confusion or conflicting conscious assumptions: indicates useless sacrifices, selfishness, endless delays, or resistance to a necessary pause."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: повішений закликає подивитися на ситуацію під іншим кутом.",
        "en": "Upcoming development and next step: the Hanged Man calls to look at the situation from a different angle."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: вказує на даремні жертви, егоїзм, нескінченні зволікання або опір необхідній паузі.",
        "en": "Temporary slowdown or cautionary phase ahead: indicates useless sacrifices, selfishness, endless delays, or resistance to a necessary pause."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: повішений закликає подивитися на ситуацію під іншим кутом.",
        "en": "Your self-perception and personal stance: the Hanged Man calls to look at the situation from a different angle."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: вказує на даремні жертви, егоїзм, нескінченні зволікання або опір необхідній паузі.",
        "en": "Self-doubt or need to regain inner balance: indicates useless sacrifices, selfishness, endless delays, or resistance to a necessary pause."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: повішений закликає подивитися на ситуацію під іншим кутом.",
        "en": "Outer environment and surrounding circumstances: the Hanged Man calls to look at the situation from a different angle."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: вказує на даремні жертви, егоїзм, нескінченні зволікання або опір необхідній паузі.",
        "en": "External pressure, friction, or lack of support around you: indicates useless sacrifices, selfishness, endless delays, or resistance to a necessary pause."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: повішений закликає подивитися на ситуацію під іншим кутом.",
        "en": "Primary hopes and inner aspiration for the outcome: the Hanged Man calls to look at the situation from a different angle."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: вказує на даремні жертви, егоїзм, нескінченні зволікання або опір необхідній паузі.",
        "en": "Underlying fears, apprehension, or anxiety: indicates useless sacrifices, selfishness, endless delays, or resistance to a necessary pause."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: повішений закликає подивитися на ситуацію під іншим кутом.",
        "en": "Final outcome and resolution of the matter: the Hanged Man calls to look at the situation from a different angle."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: вказує на даремні жертви, егоїзм, нескінченні зволікання або опір необхідній паузі.",
        "en": "Outcome requires further patience and integration: indicates useless sacrifices, selfishness, endless delays, or resistance to a necessary pause."
      }
    }
  },
  "m13": {
    "1": {
      "upright": {
        "ua": "Глибока трансформація, остаточне завершення старого етапу та неминуче вивільнення місця для нового.",
        "en": "Deep transformation, the definitive end of an old phase, and the inevitable clearing of space for something new."
      },
      "reversed": {
        "ua": "Судомне чіпляння за минуле, страх змін, затягнута агонія або болісний застій.",
        "en": "Desperately clinging to the past, fear of change, a drawn-out agony, or a painful state of stagnation."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: не фізичний кінець, а завершення етапу.",
        "en": "The obstacle is an external challenge or excess: death is not a physical end, but the completion of a stage."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: говорить про страх змін, чіпляння за минуле та застій.",
        "en": "Internal friction or resistance: speaks of fear of change, clinging to the past, and stagnation."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: не фізичний кінець, а завершення етапу.",
        "en": "Deep inner drive and subconscious root: death is not a physical end, but the completion of a stage."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: говорить про страх змін, чіпляння за минуле та застій.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: speaks of fear of change, clinging to the past, and stagnation."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: не фізичний кінець, а завершення етапу.",
        "en": "Past foundation leading to the current moment: death is not a physical end, but the completion of a stage."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: говорить про страх змін, чіпляння за минуле та застій.",
        "en": "Unresolved past patterns or fading residue: speaks of fear of change, clinging to the past, and stagnation."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: не фізичний кінець, а завершення етапу.",
        "en": "Conscious goals and rational focus: death is not a physical end, but the completion of a stage."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: говорить про страх змін, чіпляння за минуле та застій.",
        "en": "Mental confusion or conflicting conscious assumptions: speaks of fear of change, clinging to the past, and stagnation."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: не фізичний кінець, а завершення етапу.",
        "en": "Upcoming development and next step: death is not a physical end, but the completion of a stage."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: говорить про страх змін, чіпляння за минуле та застій.",
        "en": "Temporary slowdown or cautionary phase ahead: speaks of fear of change, clinging to the past, and stagnation."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: не фізичний кінець, а завершення етапу.",
        "en": "Your self-perception and personal stance: death is not a physical end, but the completion of a stage."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: говорить про страх змін, чіпляння за минуле та застій.",
        "en": "Self-doubt or need to regain inner balance: speaks of fear of change, clinging to the past, and stagnation."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: не фізичний кінець, а завершення етапу.",
        "en": "Outer environment and surrounding circumstances: death is not a physical end, but the completion of a stage."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: говорить про страх змін, чіпляння за минуле та застій.",
        "en": "External pressure, friction, or lack of support around you: speaks of fear of change, clinging to the past, and stagnation."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: не фізичний кінець, а завершення етапу.",
        "en": "Primary hopes and inner aspiration for the outcome: death is not a physical end, but the completion of a stage."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: говорить про страх змін, чіпляння за минуле та застій.",
        "en": "Underlying fears, apprehension, or anxiety: speaks of fear of change, clinging to the past, and stagnation."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: не фізичний кінець, а завершення етапу.",
        "en": "Final outcome and resolution of the matter: death is not a physical end, but the completion of a stage."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: говорить про страх змін, чіпляння за минуле та застій.",
        "en": "Outcome requires further patience and integration: speaks of fear of change, clinging to the past, and stagnation."
      }
    }
  },
  "m14": {
    "1": {
      "upright": {
        "ua": "Гармонія, баланс, знаходження компромісу, терпіння, поступовий та спокійний розвиток подій.",
        "en": "Harmony, balance, finding a compromise, patience, and a gradual, calm unfolding of events."
      },
      "reversed": {
        "ua": "Дисбаланс, крайності, поспіх, надмірності або відсутність внутрішньої міри.",
        "en": "Imbalance, extremes, rushing, excess, or a lack of inner moderation."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: помірність закликає до пошуку золотої середини.",
        "en": "The obstacle is an external challenge or excess: temperance calls for the search for the golden mean."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: вказує на дисбаланс, надмірність або конфлікти.",
        "en": "Internal friction or resistance: indicates imbalance, excess, or conflicts."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: помірність закликає до пошуку золотої середини.",
        "en": "Deep inner drive and subconscious root: temperance calls for the search for the golden mean."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: вказує на дисбаланс, надмірність або конфлікти.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: indicates imbalance, excess, or conflicts."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: помірність закликає до пошуку золотої середини.",
        "en": "Past foundation leading to the current moment: temperance calls for the search for the golden mean."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: вказує на дисбаланс, надмірність або конфлікти.",
        "en": "Unresolved past patterns or fading residue: indicates imbalance, excess, or conflicts."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: помірність закликає до пошуку золотої середини.",
        "en": "Conscious goals and rational focus: temperance calls for the search for the golden mean."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: вказує на дисбаланс, надмірність або конфлікти.",
        "en": "Mental confusion or conflicting conscious assumptions: indicates imbalance, excess, or conflicts."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: помірність закликає до пошуку золотої середини.",
        "en": "Upcoming development and next step: temperance calls for the search for the golden mean."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: вказує на дисбаланс, надмірність або конфлікти.",
        "en": "Temporary slowdown or cautionary phase ahead: indicates imbalance, excess, or conflicts."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: помірність закликає до пошуку золотої середини.",
        "en": "Your self-perception and personal stance: temperance calls for the search for the golden mean."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: вказує на дисбаланс, надмірність або конфлікти.",
        "en": "Self-doubt or need to regain inner balance: indicates imbalance, excess, or conflicts."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: помірність закликає до пошуку золотої середини.",
        "en": "Outer environment and surrounding circumstances: temperance calls for the search for the golden mean."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: вказує на дисбаланс, надмірність або конфлікти.",
        "en": "External pressure, friction, or lack of support around you: indicates imbalance, excess, or conflicts."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: помірність закликає до пошуку золотої середини.",
        "en": "Primary hopes and inner aspiration for the outcome: temperance calls for the search for the golden mean."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: вказує на дисбаланс, надмірність або конфлікти.",
        "en": "Underlying fears, apprehension, or anxiety: indicates imbalance, excess, or conflicts."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: помірність закликає до пошуку золотої середини.",
        "en": "Final outcome and resolution of the matter: temperance calls for the search for the golden mean."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: вказує на дисбаланс, надмірність або конфлікти.",
        "en": "Outcome requires further patience and integration: indicates imbalance, excess, or conflicts."
      }
    }
  },
  "m15": {
    "1": {
      "upright": {
        "ua": "Залежність, спокуса, токсичні прив'язаності, матеріальні спокуси, обмеження свободи або ілюзії.",
        "en": "Addiction, temptation, toxic attachments, material seduction, restricted freedom, or illusion."
      },
      "reversed": {
        "ua": "Звільнення від залежностей, усвідомлення пасток, подолання тіньових сторін або скидання кайданів.",
        "en": "Freedom from addiction, recognizing the traps you've fallen into, confronting your shadow side, or breaking free of your chains."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: шкідливі звички, токсичні стосунки, страхи, матеріальні прив’язаності або ілюзію безвиході.",
        "en": "The obstacle is an external challenge or excess: bad habits, toxic relationships, fears, material attachments, or the illusion of no way out."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: шлях до звільнення.",
        "en": "Internal friction or resistance: the path to liberation."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: шкідливі звички, токсичні стосунки, страхи, матеріальні прив’язаності або ілюзію безвиході.",
        "en": "Deep inner drive and subconscious root: bad habits, toxic relationships, fears, material attachments, or the illusion of no way out."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: шлях до звільнення.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: the path to liberation."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: шкідливі звички, токсичні стосунки, страхи, матеріальні прив’язаності або ілюзію безвиході.",
        "en": "Past foundation leading to the current moment: bad habits, toxic relationships, fears, material attachments, or the illusion of no way out."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: шлях до звільнення.",
        "en": "Unresolved past patterns or fading residue: the path to liberation."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: шкідливі звички, токсичні стосунки, страхи, матеріальні прив’язаності або ілюзію безвиході.",
        "en": "Conscious goals and rational focus: bad habits, toxic relationships, fears, material attachments, or the illusion of no way out."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: шлях до звільнення.",
        "en": "Mental confusion or conflicting conscious assumptions: the path to liberation."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: шкідливі звички, токсичні стосунки, страхи, матеріальні прив’язаності або ілюзію безвиході.",
        "en": "Upcoming development and next step: bad habits, toxic relationships, fears, material attachments, or the illusion of no way out."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: шлях до звільнення.",
        "en": "Temporary slowdown or cautionary phase ahead: the path to liberation."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: шкідливі звички, токсичні стосунки, страхи, матеріальні прив’язаності або ілюзію безвиході.",
        "en": "Your self-perception and personal stance: bad habits, toxic relationships, fears, material attachments, or the illusion of no way out."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: шлях до звільнення.",
        "en": "Self-doubt or need to regain inner balance: the path to liberation."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: шкідливі звички, токсичні стосунки, страхи, матеріальні прив’язаності або ілюзію безвиході.",
        "en": "Outer environment and surrounding circumstances: bad habits, toxic relationships, fears, material attachments, or the illusion of no way out."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: шлях до звільнення.",
        "en": "External pressure, friction, or lack of support around you: the path to liberation."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: шкідливі звички, токсичні стосунки, страхи, матеріальні прив’язаності або ілюзію безвиході.",
        "en": "Primary hopes and inner aspiration for the outcome: bad habits, toxic relationships, fears, material attachments, or the illusion of no way out."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: шлях до звільнення.",
        "en": "Underlying fears, apprehension, or anxiety: the path to liberation."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: шкідливі звички, токсичні стосунки, страхи, матеріальні прив’язаності або ілюзію безвиході.",
        "en": "Final outcome and resolution of the matter: bad habits, toxic relationships, fears, material attachments, or the illusion of no way out."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: шлях до звільнення.",
        "en": "Outcome requires further patience and integration: the path to liberation."
      }
    }
  },
  "m16": {
    "1": {
      "upright": {
        "ua": "Раптовий крах ілюзій, руйнування застарілих структур, шокова подія, яка очищує простір для правди.",
        "en": "A sudden collapse of illusions, the destruction of outdated structures, a shocking event that clears the ground for the truth."
      },
      "reversed": {
        "ua": "Уникнення неминучого вибуху, затягнута криза, прихована руйнація або страх змін.",
        "en": "Avoiding an inevitable blow-up, a drawn-out crisis, hidden destruction, or fear of change."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: карта раптових і болісних змін, які руйнують те, що було неміцним.",
        "en": "The obstacle is an external challenge or excess: the Tower is a card of sudden and painful changes that destroy what was unstable."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: ви намагаєтеся уникнути неминучого краху, або потрясіння буде не таким масштабним.",
        "en": "Internal friction or resistance: you are trying to avoid the inevitable collapse, or the upheaval will not be so large-scale."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: карта раптових і болісних змін, які руйнують те, що було неміцним.",
        "en": "Deep inner drive and subconscious root: the Tower is a card of sudden and painful changes that destroy what was unstable."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: ви намагаєтеся уникнути неминучого краху, або потрясіння буде не таким масштабним.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: you are trying to avoid the inevitable collapse, or the upheaval will not be so large-scale."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: карта раптових і болісних змін, які руйнують те, що було неміцним.",
        "en": "Past foundation leading to the current moment: the Tower is a card of sudden and painful changes that destroy what was unstable."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: ви намагаєтеся уникнути неминучого краху, або потрясіння буде не таким масштабним.",
        "en": "Unresolved past patterns or fading residue: you are trying to avoid the inevitable collapse, or the upheaval will not be so large-scale."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: карта раптових і болісних змін, які руйнують те, що було неміцним.",
        "en": "Conscious goals and rational focus: the Tower is a card of sudden and painful changes that destroy what was unstable."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: ви намагаєтеся уникнути неминучого краху, або потрясіння буде не таким масштабним.",
        "en": "Mental confusion or conflicting conscious assumptions: you are trying to avoid the inevitable collapse, or the upheaval will not be so large-scale."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: карта раптових і болісних змін, які руйнують те, що було неміцним.",
        "en": "Upcoming development and next step: the Tower is a card of sudden and painful changes that destroy what was unstable."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: ви намагаєтеся уникнути неминучого краху, або потрясіння буде не таким масштабним.",
        "en": "Temporary slowdown or cautionary phase ahead: you are trying to avoid the inevitable collapse, or the upheaval will not be so large-scale."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: карта раптових і болісних змін, які руйнують те, що було неміцним.",
        "en": "Your self-perception and personal stance: the Tower is a card of sudden and painful changes that destroy what was unstable."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: ви намагаєтеся уникнути неминучого краху, або потрясіння буде не таким масштабним.",
        "en": "Self-doubt or need to regain inner balance: you are trying to avoid the inevitable collapse, or the upheaval will not be so large-scale."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: карта раптових і болісних змін, які руйнують те, що було неміцним.",
        "en": "Outer environment and surrounding circumstances: the Tower is a card of sudden and painful changes that destroy what was unstable."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: ви намагаєтеся уникнути неминучого краху, або потрясіння буде не таким масштабним.",
        "en": "External pressure, friction, or lack of support around you: you are trying to avoid the inevitable collapse, or the upheaval will not be so large-scale."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: карта раптових і болісних змін, які руйнують те, що було неміцним.",
        "en": "Primary hopes and inner aspiration for the outcome: the Tower is a card of sudden and painful changes that destroy what was unstable."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: ви намагаєтеся уникнути неминучого краху, або потрясіння буде не таким масштабним.",
        "en": "Underlying fears, apprehension, or anxiety: you are trying to avoid the inevitable collapse, or the upheaval will not be so large-scale."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: карта раптових і болісних змін, які руйнують те, що було неміцним.",
        "en": "Final outcome and resolution of the matter: the Tower is a card of sudden and painful changes that destroy what was unstable."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: ви намагаєтеся уникнути неминучого краху, або потрясіння буде не таким масштабним.",
        "en": "Outcome requires further patience and integration: you are trying to avoid the inevitable collapse, or the upheaval will not be so large-scale."
      }
    }
  },
  "m17": {
    "1": {
      "upright": {
        "ua": "Надія, натхнення, віра в майбутнє, зцілення, чітке бачення перспективи та духовний підйом.",
        "en": "Hope, inspiration, faith in the future, healing, a clear vision of what's ahead, and a spiritual lift."
      },
      "reversed": {
        "ua": "Зневіра, песимізм, втрачені ідеали, розчарування або завищені нереалістичні очікування.",
        "en": "Discouragement, pessimism, lost ideals, disappointment, or unrealistically high expectations."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: символ надії, віри в майбутнє та душевного спокою.",
        "en": "The obstacle is an external challenge or excess: the Star is a symbol of hope, faith in the future, and peace of mind."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: вказує на втрату віри, песимізм або творчу кризу.",
        "en": "Internal friction or resistance: indicates loss of faith, pessimism, or creative crisis."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: символ надії, віри в майбутнє та душевного спокою.",
        "en": "Deep inner drive and subconscious root: the Star is a symbol of hope, faith in the future, and peace of mind."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: вказує на втрату віри, песимізм або творчу кризу.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: indicates loss of faith, pessimism, or creative crisis."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: символ надії, віри в майбутнє та душевного спокою.",
        "en": "Past foundation leading to the current moment: the Star is a symbol of hope, faith in the future, and peace of mind."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: вказує на втрату віри, песимізм або творчу кризу.",
        "en": "Unresolved past patterns or fading residue: indicates loss of faith, pessimism, or creative crisis."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: символ надії, віри в майбутнє та душевного спокою.",
        "en": "Conscious goals and rational focus: the Star is a symbol of hope, faith in the future, and peace of mind."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: вказує на втрату віри, песимізм або творчу кризу.",
        "en": "Mental confusion or conflicting conscious assumptions: indicates loss of faith, pessimism, or creative crisis."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: символ надії, віри в майбутнє та душевного спокою.",
        "en": "Upcoming development and next step: the Star is a symbol of hope, faith in the future, and peace of mind."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: вказує на втрату віри, песимізм або творчу кризу.",
        "en": "Temporary slowdown or cautionary phase ahead: indicates loss of faith, pessimism, or creative crisis."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: символ надії, віри в майбутнє та душевного спокою.",
        "en": "Your self-perception and personal stance: the Star is a symbol of hope, faith in the future, and peace of mind."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: вказує на втрату віри, песимізм або творчу кризу.",
        "en": "Self-doubt or need to regain inner balance: indicates loss of faith, pessimism, or creative crisis."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: символ надії, віри в майбутнє та душевного спокою.",
        "en": "Outer environment and surrounding circumstances: the Star is a symbol of hope, faith in the future, and peace of mind."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: вказує на втрату віри, песимізм або творчу кризу.",
        "en": "External pressure, friction, or lack of support around you: indicates loss of faith, pessimism, or creative crisis."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: символ надії, віри в майбутнє та душевного спокою.",
        "en": "Primary hopes and inner aspiration for the outcome: the Star is a symbol of hope, faith in the future, and peace of mind."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: вказує на втрату віри, песимізм або творчу кризу.",
        "en": "Underlying fears, apprehension, or anxiety: indicates loss of faith, pessimism, or creative crisis."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: символ надії, віри в майбутнє та душевного спокою.",
        "en": "Final outcome and resolution of the matter: the Star is a symbol of hope, faith in the future, and peace of mind."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: вказує на втрату віри, песимізм або творчу кризу.",
        "en": "Outcome requires further patience and integration: indicates loss of faith, pessimism, or creative crisis."
      }
    }
  },
  "m18": {
    "1": {
      "upright": {
        "ua": "Невизначеність, страхи, ілюзії, приховані вороги, плутанина або сильна робота підсвідомості.",
        "en": "Uncertainty, fears, illusions, hidden enemies, confusion, or the subconscious working hard beneath the surface."
      },
      "reversed": {
        "ua": "Розвіювання ілюзій, виходу з туману, подолання страхів або викриття обману.",
        "en": "Illusions dissolving, coming out of the fog, overcoming fears, or deception being exposed."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: місяць уособлює світ снів, підсвідомих страхів та ілюзій.",
        "en": "The obstacle is an external challenge or excess: the Moon embodies the world of dreams, subconscious fears, and illusions."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: означає прояснення ситуації, подолання страхів та викриття брехні.",
        "en": "Internal friction or resistance: means clarification of the situation, overcoming fears, and exposure of lies."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: місяць уособлює світ снів, підсвідомих страхів та ілюзій.",
        "en": "Deep inner drive and subconscious root: the Moon embodies the world of dreams, subconscious fears, and illusions."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: означає прояснення ситуації, подолання страхів та викриття брехні.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: means clarification of the situation, overcoming fears, and exposure of lies."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: місяць уособлює світ снів, підсвідомих страхів та ілюзій.",
        "en": "Past foundation leading to the current moment: the Moon embodies the world of dreams, subconscious fears, and illusions."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: означає прояснення ситуації, подолання страхів та викриття брехні.",
        "en": "Unresolved past patterns or fading residue: means clarification of the situation, overcoming fears, and exposure of lies."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: місяць уособлює світ снів, підсвідомих страхів та ілюзій.",
        "en": "Conscious goals and rational focus: the Moon embodies the world of dreams, subconscious fears, and illusions."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: означає прояснення ситуації, подолання страхів та викриття брехні.",
        "en": "Mental confusion or conflicting conscious assumptions: means clarification of the situation, overcoming fears, and exposure of lies."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: місяць уособлює світ снів, підсвідомих страхів та ілюзій.",
        "en": "Upcoming development and next step: the Moon embodies the world of dreams, subconscious fears, and illusions."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: означає прояснення ситуації, подолання страхів та викриття брехні.",
        "en": "Temporary slowdown or cautionary phase ahead: means clarification of the situation, overcoming fears, and exposure of lies."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: місяць уособлює світ снів, підсвідомих страхів та ілюзій.",
        "en": "Your self-perception and personal stance: the Moon embodies the world of dreams, subconscious fears, and illusions."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: означає прояснення ситуації, подолання страхів та викриття брехні.",
        "en": "Self-doubt or need to regain inner balance: means clarification of the situation, overcoming fears, and exposure of lies."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: місяць уособлює світ снів, підсвідомих страхів та ілюзій.",
        "en": "Outer environment and surrounding circumstances: the Moon embodies the world of dreams, subconscious fears, and illusions."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: означає прояснення ситуації, подолання страхів та викриття брехні.",
        "en": "External pressure, friction, or lack of support around you: means clarification of the situation, overcoming fears, and exposure of lies."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: місяць уособлює світ снів, підсвідомих страхів та ілюзій.",
        "en": "Primary hopes and inner aspiration for the outcome: the Moon embodies the world of dreams, subconscious fears, and illusions."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: означає прояснення ситуації, подолання страхів та викриття брехні.",
        "en": "Underlying fears, apprehension, or anxiety: means clarification of the situation, overcoming fears, and exposure of lies."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: місяць уособлює світ снів, підсвідомих страхів та ілюзій.",
        "en": "Final outcome and resolution of the matter: the Moon embodies the world of dreams, subconscious fears, and illusions."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: означає прояснення ситуації, подолання страхів та викриття брехні.",
        "en": "Outcome requires further patience and integration: means clarification of the situation, overcoming fears, and exposure of lies."
      }
    }
  },
  "m19": {
    "1": {
      "upright": {
        "ua": "Ясність, радість, успіх, процвітання, життєва енергія, повне розуміння ситуації та визнання.",
        "en": "Clarity, joy, success, prosperity, vital energy, a full understanding of the situation, and recognition."
      },
      "reversed": {
        "ua": "Тимчасові хмари, засліплення успіхом, ейфорія або незначна затримка на шляху до щастя.",
        "en": "A temporary cloud, being blinded by success, euphoria, or a minor delay on the way to happiness."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: сонце обіцяє тріумф, щастя, здоров’я та повну ясність.",
        "en": "The obstacle is an external challenge or excess: the Sun promises triumph, happiness, health, and complete clarity."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: сонце залишається позитивним, хоча світло може бути дещо приглушеним.",
        "en": "Internal friction or resistance: the Sun remains positive, although the light may be somewhat dimmed."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: сонце обіцяє тріумф, щастя, здоров’я та повну ясність.",
        "en": "Deep inner drive and subconscious root: the Sun promises triumph, happiness, health, and complete clarity."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: сонце залишається позитивним, хоча світло може бути дещо приглушеним.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: the Sun remains positive, although the light may be somewhat dimmed."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: сонце обіцяє тріумф, щастя, здоров’я та повну ясність.",
        "en": "Past foundation leading to the current moment: the Sun promises triumph, happiness, health, and complete clarity."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: сонце залишається позитивним, хоча світло може бути дещо приглушеним.",
        "en": "Unresolved past patterns or fading residue: the Sun remains positive, although the light may be somewhat dimmed."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: сонце обіцяє тріумф, щастя, здоров’я та повну ясність.",
        "en": "Conscious goals and rational focus: the Sun promises triumph, happiness, health, and complete clarity."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: сонце залишається позитивним, хоча світло може бути дещо приглушеним.",
        "en": "Mental confusion or conflicting conscious assumptions: the Sun remains positive, although the light may be somewhat dimmed."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: сонце обіцяє тріумф, щастя, здоров’я та повну ясність.",
        "en": "Upcoming development and next step: the Sun promises triumph, happiness, health, and complete clarity."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: сонце залишається позитивним, хоча світло може бути дещо приглушеним.",
        "en": "Temporary slowdown or cautionary phase ahead: the Sun remains positive, although the light may be somewhat dimmed."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: сонце обіцяє тріумф, щастя, здоров’я та повну ясність.",
        "en": "Your self-perception and personal stance: the Sun promises triumph, happiness, health, and complete clarity."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: сонце залишається позитивним, хоча світло може бути дещо приглушеним.",
        "en": "Self-doubt or need to regain inner balance: the Sun remains positive, although the light may be somewhat dimmed."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: сонце обіцяє тріумф, щастя, здоров’я та повну ясність.",
        "en": "Outer environment and surrounding circumstances: the Sun promises triumph, happiness, health, and complete clarity."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: сонце залишається позитивним, хоча світло може бути дещо приглушеним.",
        "en": "External pressure, friction, or lack of support around you: the Sun remains positive, although the light may be somewhat dimmed."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: сонце обіцяє тріумф, щастя, здоров’я та повну ясність.",
        "en": "Primary hopes and inner aspiration for the outcome: the Sun promises triumph, happiness, health, and complete clarity."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: сонце залишається позитивним, хоча світло може бути дещо приглушеним.",
        "en": "Underlying fears, apprehension, or anxiety: the Sun remains positive, although the light may be somewhat dimmed."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: сонце обіцяє тріумф, щастя, здоров’я та повну ясність.",
        "en": "Final outcome and resolution of the matter: the Sun promises triumph, happiness, health, and complete clarity."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: сонце залишається позитивним, хоча світло може бути дещо приглушеним.",
        "en": "Outcome requires further patience and integration: the Sun remains positive, although the light may be somewhat dimmed."
      }
    }
  },
  "m20": {
    "1": {
      "upright": {
        "ua": "Пробудження, важливе рішення, заклик до дій, підбиття підсумків, перехід на якісно новий рівень.",
        "en": "Awakening, an important decision, a call to action, taking stock, and moving up to a whole new level."
      },
      "reversed": {
        "ua": "Каяття, самокритика, ігнорування заклику до змін, затягування неминучого рішення.",
        "en": "Regret, self-criticism, ignoring the call to change, or dragging out an inevitable decision."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: момент істини, коли ви оцінюєте минуле.",
        "en": "The obstacle is an external challenge or excess: judgement is the moment of truth when you evaluate the past."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: говорить про страх осуду, ігнорування внутрішнього поклику або нездатність відпустити минуле.",
        "en": "Internal friction or resistance: speaks of fear of judgement, ignoring the inner call, or inability to let go of the past."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: момент істини, коли ви оцінюєте минуле.",
        "en": "Deep inner drive and subconscious root: judgement is the moment of truth when you evaluate the past."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: говорить про страх осуду, ігнорування внутрішнього поклику або нездатність відпустити минуле.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: speaks of fear of judgement, ignoring the inner call, or inability to let go of the past."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: момент істини, коли ви оцінюєте минуле.",
        "en": "Past foundation leading to the current moment: judgement is the moment of truth when you evaluate the past."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: говорить про страх осуду, ігнорування внутрішнього поклику або нездатність відпустити минуле.",
        "en": "Unresolved past patterns or fading residue: speaks of fear of judgement, ignoring the inner call, or inability to let go of the past."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: момент істини, коли ви оцінюєте минуле.",
        "en": "Conscious goals and rational focus: judgement is the moment of truth when you evaluate the past."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: говорить про страх осуду, ігнорування внутрішнього поклику або нездатність відпустити минуле.",
        "en": "Mental confusion or conflicting conscious assumptions: speaks of fear of judgement, ignoring the inner call, or inability to let go of the past."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: момент істини, коли ви оцінюєте минуле.",
        "en": "Upcoming development and next step: judgement is the moment of truth when you evaluate the past."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: говорить про страх осуду, ігнорування внутрішнього поклику або нездатність відпустити минуле.",
        "en": "Temporary slowdown or cautionary phase ahead: speaks of fear of judgement, ignoring the inner call, or inability to let go of the past."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: момент істини, коли ви оцінюєте минуле.",
        "en": "Your self-perception and personal stance: judgement is the moment of truth when you evaluate the past."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: говорить про страх осуду, ігнорування внутрішнього поклику або нездатність відпустити минуле.",
        "en": "Self-doubt or need to regain inner balance: speaks of fear of judgement, ignoring the inner call, or inability to let go of the past."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: момент істини, коли ви оцінюєте минуле.",
        "en": "Outer environment and surrounding circumstances: judgement is the moment of truth when you evaluate the past."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: говорить про страх осуду, ігнорування внутрішнього поклику або нездатність відпустити минуле.",
        "en": "External pressure, friction, or lack of support around you: speaks of fear of judgement, ignoring the inner call, or inability to let go of the past."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: момент істини, коли ви оцінюєте минуле.",
        "en": "Primary hopes and inner aspiration for the outcome: judgement is the moment of truth when you evaluate the past."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: говорить про страх осуду, ігнорування внутрішнього поклику або нездатність відпустити минуле.",
        "en": "Underlying fears, apprehension, or anxiety: speaks of fear of judgement, ignoring the inner call, or inability to let go of the past."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: момент істини, коли ви оцінюєте минуле.",
        "en": "Final outcome and resolution of the matter: judgement is the moment of truth when you evaluate the past."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: говорить про страх осуду, ігнорування внутрішнього поклику або нездатність відпустити минуле.",
        "en": "Outcome requires further patience and integration: speaks of fear of judgement, ignoring the inner call, or inability to let go of the past."
      }
    }
  },
  "m21": {
    "1": {
      "upright": {
        "ua": "Завершення циклу, триумф, досягнення цілі, цілісність, гармонія та відкриття нових горизонтів.",
        "en": "The completion of a cycle, triumph, achieving a goal, wholeness, harmony, and new horizons opening up."
      },
      "reversed": {
        "ua": "Незавершені справи, брак останнього кроку, обмеження або затримка перед фінальним успіхом.",
        "en": "Unfinished business, missing the last step, limitations, or a delay right before final success."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: карта завершеності та тріумфу.",
        "en": "The obstacle is an external challenge or excess: the World is a card of completion and triumph."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: означає незавершеність, затримки або відсутність почуття задоволення.",
        "en": "Internal friction or resistance: means incompleteness, delays, or lack of a sense of satisfaction."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: карта завершеності та тріумфу.",
        "en": "Deep inner drive and subconscious root: the World is a card of completion and triumph."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: означає незавершеність, затримки або відсутність почуття задоволення.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: means incompleteness, delays, or lack of a sense of satisfaction."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: карта завершеності та тріумфу.",
        "en": "Past foundation leading to the current moment: the World is a card of completion and triumph."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: означає незавершеність, затримки або відсутність почуття задоволення.",
        "en": "Unresolved past patterns or fading residue: means incompleteness, delays, or lack of a sense of satisfaction."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: карта завершеності та тріумфу.",
        "en": "Conscious goals and rational focus: the World is a card of completion and triumph."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: означає незавершеність, затримки або відсутність почуття задоволення.",
        "en": "Mental confusion or conflicting conscious assumptions: means incompleteness, delays, or lack of a sense of satisfaction."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: карта завершеності та тріумфу.",
        "en": "Upcoming development and next step: the World is a card of completion and triumph."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: означає незавершеність, затримки або відсутність почуття задоволення.",
        "en": "Temporary slowdown or cautionary phase ahead: means incompleteness, delays, or lack of a sense of satisfaction."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: карта завершеності та тріумфу.",
        "en": "Your self-perception and personal stance: the World is a card of completion and triumph."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: означає незавершеність, затримки або відсутність почуття задоволення.",
        "en": "Self-doubt or need to regain inner balance: means incompleteness, delays, or lack of a sense of satisfaction."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: карта завершеності та тріумфу.",
        "en": "Outer environment and surrounding circumstances: the World is a card of completion and triumph."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: означає незавершеність, затримки або відсутність почуття задоволення.",
        "en": "External pressure, friction, or lack of support around you: means incompleteness, delays, or lack of a sense of satisfaction."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: карта завершеності та тріумфу.",
        "en": "Primary hopes and inner aspiration for the outcome: the World is a card of completion and triumph."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: означає незавершеність, затримки або відсутність почуття задоволення.",
        "en": "Underlying fears, apprehension, or anxiety: means incompleteness, delays, or lack of a sense of satisfaction."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: карта завершеності та тріумфу.",
        "en": "Final outcome and resolution of the matter: the World is a card of completion and triumph."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: означає незавершеність, затримки або відсутність почуття задоволення.",
        "en": "Outcome requires further patience and integration: means incompleteness, delays, or lack of a sense of satisfaction."
      }
    }
  },
  "w01": {
    "1": {
      "upright": {
        "ua": "Спалах натхнення, новий імпульс, потужний потенціал для старту, пристрасть і драйв.",
        "en": "A burst of inspiration, a new impulse, strong potential for a fresh start, passion and drive."
      },
      "reversed": {
        "ua": "Втрата енергії, фальстарт, брак мотивації, затримка реалізації або вигорання.",
        "en": "Loss of energy, a false start, lack of motivation, delayed execution, or burnout."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: чиста іскра вогняної енергії.",
        "en": "The obstacle is an external challenge or excess: the Ace of Wands is a pure spark of fiery energy."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: затримки старту, брак енергії, творча криза або ідея, реалізована невчасно.",
        "en": "Internal friction or resistance: delays at the start, lack of energy, creative crisis, or an idea realized at the wrong time."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: чиста іскра вогняної енергії.",
        "en": "Deep inner drive and subconscious root: the Ace of Wands is a pure spark of fiery energy."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: затримки старту, брак енергії, творча криза або ідея, реалізована невчасно.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: delays at the start, lack of energy, creative crisis, or an idea realized at the wrong time."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: чиста іскра вогняної енергії.",
        "en": "Past foundation leading to the current moment: the Ace of Wands is a pure spark of fiery energy."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: затримки старту, брак енергії, творча криза або ідея, реалізована невчасно.",
        "en": "Unresolved past patterns or fading residue: delays at the start, lack of energy, creative crisis, or an idea realized at the wrong time."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: чиста іскра вогняної енергії.",
        "en": "Conscious goals and rational focus: the Ace of Wands is a pure spark of fiery energy."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: затримки старту, брак енергії, творча криза або ідея, реалізована невчасно.",
        "en": "Mental confusion or conflicting conscious assumptions: delays at the start, lack of energy, creative crisis, or an idea realized at the wrong time."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: чиста іскра вогняної енергії.",
        "en": "Upcoming development and next step: the Ace of Wands is a pure spark of fiery energy."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: затримки старту, брак енергії, творча криза або ідея, реалізована невчасно.",
        "en": "Temporary slowdown or cautionary phase ahead: delays at the start, lack of energy, creative crisis, or an idea realized at the wrong time."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: чиста іскра вогняної енергії.",
        "en": "Your self-perception and personal stance: the Ace of Wands is a pure spark of fiery energy."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: затримки старту, брак енергії, творча криза або ідея, реалізована невчасно.",
        "en": "Self-doubt or need to regain inner balance: delays at the start, lack of energy, creative crisis, or an idea realized at the wrong time."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: чиста іскра вогняної енергії.",
        "en": "Outer environment and surrounding circumstances: the Ace of Wands is a pure spark of fiery energy."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: затримки старту, брак енергії, творча криза або ідея, реалізована невчасно.",
        "en": "External pressure, friction, or lack of support around you: delays at the start, lack of energy, creative crisis, or an idea realized at the wrong time."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: чиста іскра вогняної енергії.",
        "en": "Primary hopes and inner aspiration for the outcome: the Ace of Wands is a pure spark of fiery energy."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: затримки старту, брак енергії, творча криза або ідея, реалізована невчасно.",
        "en": "Underlying fears, apprehension, or anxiety: delays at the start, lack of energy, creative crisis, or an idea realized at the wrong time."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: чиста іскра вогняної енергії.",
        "en": "Final outcome and resolution of the matter: the Ace of Wands is a pure spark of fiery energy."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: затримки старту, брак енергії, творча криза або ідея, реалізована невчасно.",
        "en": "Outcome requires further patience and integration: delays at the start, lack of energy, creative crisis, or an idea realized at the wrong time."
      }
    }
  },
  "w02": {
    "1": {
      "upright": {
        "ua": "Планування майбутнього, розширення кордонів, вибір напрямку, аналіз перспектив.",
        "en": "Planning for the future, expanding your horizons, choosing a direction, weighing your prospects."
      },
      "reversed": {
        "ua": "Нерішучість, страх невідомості, погане планування або обмеженість вибору.",
        "en": "Indecision, fear of the unknown, poor planning, or limited options."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: людина на роздоріжжі.",
        "en": "The obstacle is an external challenge or excess: the Two of Wands is a person at a crossroads."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: страх зробити крок, надмірна обережність або очікування без руху вперед.",
        "en": "Internal friction or resistance: fear of taking a step, excessive caution, or waiting without moving forward."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: людина на роздоріжжі.",
        "en": "Deep inner drive and subconscious root: the Two of Wands is a person at a crossroads."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: страх зробити крок, надмірна обережність або очікування без руху вперед.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: fear of taking a step, excessive caution, or waiting without moving forward."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: людина на роздоріжжі.",
        "en": "Past foundation leading to the current moment: the Two of Wands is a person at a crossroads."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: страх зробити крок, надмірна обережність або очікування без руху вперед.",
        "en": "Unresolved past patterns or fading residue: fear of taking a step, excessive caution, or waiting without moving forward."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: людина на роздоріжжі.",
        "en": "Conscious goals and rational focus: the Two of Wands is a person at a crossroads."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: страх зробити крок, надмірна обережність або очікування без руху вперед.",
        "en": "Mental confusion or conflicting conscious assumptions: fear of taking a step, excessive caution, or waiting without moving forward."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: людина на роздоріжжі.",
        "en": "Upcoming development and next step: the Two of Wands is a person at a crossroads."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: страх зробити крок, надмірна обережність або очікування без руху вперед.",
        "en": "Temporary slowdown or cautionary phase ahead: fear of taking a step, excessive caution, or waiting without moving forward."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: людина на роздоріжжі.",
        "en": "Your self-perception and personal stance: the Two of Wands is a person at a crossroads."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: страх зробити крок, надмірна обережність або очікування без руху вперед.",
        "en": "Self-doubt or need to regain inner balance: fear of taking a step, excessive caution, or waiting without moving forward."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: людина на роздоріжжі.",
        "en": "Outer environment and surrounding circumstances: the Two of Wands is a person at a crossroads."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: страх зробити крок, надмірна обережність або очікування без руху вперед.",
        "en": "External pressure, friction, or lack of support around you: fear of taking a step, excessive caution, or waiting without moving forward."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: людина на роздоріжжі.",
        "en": "Primary hopes and inner aspiration for the outcome: the Two of Wands is a person at a crossroads."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: страх зробити крок, надмірна обережність або очікування без руху вперед.",
        "en": "Underlying fears, apprehension, or anxiety: fear of taking a step, excessive caution, or waiting without moving forward."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: людина на роздоріжжі.",
        "en": "Final outcome and resolution of the matter: the Two of Wands is a person at a crossroads."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: страх зробити крок, надмірна обережність або очікування без руху вперед.",
        "en": "Outcome requires further patience and integration: fear of taking a step, excessive caution, or waiting without moving forward."
      }
    }
  },
  "w03": {
    "1": {
      "upright": {
        "ua": "Перші результати, впевнений прогрес, відкриті горизонти, партнерство та вихід на новий рівень.",
        "en": "First results, steady progress, open horizons, partnership, and moving up to a new level."
      },
      "reversed": {
        "ua": "Затримки в справах, розчарування в результатах, відсутність довгострокового бачення.",
        "en": "Delays, disappointment with the results, or a lack of long-term vision."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: надійний фундамент уже закладено, перші результати видно.",
        "en": "The obstacle is an external challenge or excess: a solid foundation has already been laid, the first results are visible."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: затримки у справах, невдале партнерство або невміння делегувати.",
        "en": "Internal friction or resistance: delays in matters, failed partnerships, or inability to delegate."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: надійний фундамент уже закладено, перші результати видно.",
        "en": "Deep inner drive and subconscious root: a solid foundation has already been laid, the first results are visible."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: затримки у справах, невдале партнерство або невміння делегувати.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: delays in matters, failed partnerships, or inability to delegate."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: надійний фундамент уже закладено, перші результати видно.",
        "en": "Past foundation leading to the current moment: a solid foundation has already been laid, the first results are visible."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: затримки у справах, невдале партнерство або невміння делегувати.",
        "en": "Unresolved past patterns or fading residue: delays in matters, failed partnerships, or inability to delegate."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: надійний фундамент уже закладено, перші результати видно.",
        "en": "Conscious goals and rational focus: a solid foundation has already been laid, the first results are visible."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: затримки у справах, невдале партнерство або невміння делегувати.",
        "en": "Mental confusion or conflicting conscious assumptions: delays in matters, failed partnerships, or inability to delegate."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: надійний фундамент уже закладено, перші результати видно.",
        "en": "Upcoming development and next step: a solid foundation has already been laid, the first results are visible."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: затримки у справах, невдале партнерство або невміння делегувати.",
        "en": "Temporary slowdown or cautionary phase ahead: delays in matters, failed partnerships, or inability to delegate."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: надійний фундамент уже закладено, перші результати видно.",
        "en": "Your self-perception and personal stance: a solid foundation has already been laid, the first results are visible."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: затримки у справах, невдале партнерство або невміння делегувати.",
        "en": "Self-doubt or need to regain inner balance: delays in matters, failed partnerships, or inability to delegate."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: надійний фундамент уже закладено, перші результати видно.",
        "en": "Outer environment and surrounding circumstances: a solid foundation has already been laid, the first results are visible."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: затримки у справах, невдале партнерство або невміння делегувати.",
        "en": "External pressure, friction, or lack of support around you: delays in matters, failed partnerships, or inability to delegate."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: надійний фундамент уже закладено, перші результати видно.",
        "en": "Primary hopes and inner aspiration for the outcome: a solid foundation has already been laid, the first results are visible."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: затримки у справах, невдале партнерство або невміння делегувати.",
        "en": "Underlying fears, apprehension, or anxiety: delays in matters, failed partnerships, or inability to delegate."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: надійний фундамент уже закладено, перші результати видно.",
        "en": "Final outcome and resolution of the matter: a solid foundation has already been laid, the first results are visible."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: затримки у справах, невдале партнерство або невміння делегувати.",
        "en": "Outcome requires further patience and integration: delays in matters, failed partnerships, or inability to delegate."
      }
    }
  },
  "w04": {
    "1": {
      "upright": {
        "ua": "Стабільність, святкування, гармонія в домі, завершення важливого етапу, відчуття безпеки.",
        "en": "Stability, celebration, harmony at home, the completion of an important stage, a sense of security."
      },
      "reversed": {
        "ua": "Тимчасові непорозуміння в родині/колективі, відкладене свято, відчуття нестабільності.",
        "en": "Temporary friction within the family or team, a postponed celebration, a sense of instability."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: одна з найпозитивніших карт.",
        "en": "The obstacle is an external challenge or excess: the Four of Wands is one of the most positive cards."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: відкладений відпочинок, нестабільність у домівці або зірване свято.",
        "en": "Internal friction or resistance: delayed rest, instability at home, or a ruined celebration."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: одна з найпозитивніших карт.",
        "en": "Deep inner drive and subconscious root: the Four of Wands is one of the most positive cards."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: відкладений відпочинок, нестабільність у домівці або зірване свято.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: delayed rest, instability at home, or a ruined celebration."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: одна з найпозитивніших карт.",
        "en": "Past foundation leading to the current moment: the Four of Wands is one of the most positive cards."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: відкладений відпочинок, нестабільність у домівці або зірване свято.",
        "en": "Unresolved past patterns or fading residue: delayed rest, instability at home, or a ruined celebration."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: одна з найпозитивніших карт.",
        "en": "Conscious goals and rational focus: the Four of Wands is one of the most positive cards."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: відкладений відпочинок, нестабільність у домівці або зірване свято.",
        "en": "Mental confusion or conflicting conscious assumptions: delayed rest, instability at home, or a ruined celebration."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: одна з найпозитивніших карт.",
        "en": "Upcoming development and next step: the Four of Wands is one of the most positive cards."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: відкладений відпочинок, нестабільність у домівці або зірване свято.",
        "en": "Temporary slowdown or cautionary phase ahead: delayed rest, instability at home, or a ruined celebration."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: одна з найпозитивніших карт.",
        "en": "Your self-perception and personal stance: the Four of Wands is one of the most positive cards."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: відкладений відпочинок, нестабільність у домівці або зірване свято.",
        "en": "Self-doubt or need to regain inner balance: delayed rest, instability at home, or a ruined celebration."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: одна з найпозитивніших карт.",
        "en": "Outer environment and surrounding circumstances: the Four of Wands is one of the most positive cards."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: відкладений відпочинок, нестабільність у домівці або зірване свято.",
        "en": "External pressure, friction, or lack of support around you: delayed rest, instability at home, or a ruined celebration."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: одна з найпозитивніших карт.",
        "en": "Primary hopes and inner aspiration for the outcome: the Four of Wands is one of the most positive cards."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: відкладений відпочинок, нестабільність у домівці або зірване свято.",
        "en": "Underlying fears, apprehension, or anxiety: delayed rest, instability at home, or a ruined celebration."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: одна з найпозитивніших карт.",
        "en": "Final outcome and resolution of the matter: the Four of Wands is one of the most positive cards."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: відкладений відпочинок, нестабільність у домівці або зірване свято.",
        "en": "Outcome requires further patience and integration: delayed rest, instability at home, or a ruined celebration."
      }
    }
  },
  "w05": {
    "1": {
      "upright": {
        "ua": "Конкуренція, суперництво, розбіжності думок, боротьба за лідерство, хаотична активність.",
        "en": "Competition, rivalry, clashing opinions, a struggle for leadership, chaotic activity."
      },
      "reversed": {
        "ua": "Уникнення конфлікту, виснажливі суперечки, завершення протистояння або брудна гра.",
        "en": "Avoiding conflict, exhausting arguments, a standoff coming to an end, or underhanded tactics."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: боротьба амбіцій, суперечки, внутрішній або зовнішній конфлікт.",
        "en": "The obstacle is an external challenge or excess: the Five of Wands is a clash of ambitions, arguments, internal or external conflict."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: уникнення конфлікту, капітуляція або хаос без мети.",
        "en": "Internal friction or resistance: avoiding conflict, capitulation, or purposeless chaos."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: боротьба амбіцій, суперечки, внутрішній або зовнішній конфлікт.",
        "en": "Deep inner drive and subconscious root: the Five of Wands is a clash of ambitions, arguments, internal or external conflict."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: уникнення конфлікту, капітуляція або хаос без мети.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: avoiding conflict, capitulation, or purposeless chaos."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: боротьба амбіцій, суперечки, внутрішній або зовнішній конфлікт.",
        "en": "Past foundation leading to the current moment: the Five of Wands is a clash of ambitions, arguments, internal or external conflict."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: уникнення конфлікту, капітуляція або хаос без мети.",
        "en": "Unresolved past patterns or fading residue: avoiding conflict, capitulation, or purposeless chaos."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: боротьба амбіцій, суперечки, внутрішній або зовнішній конфлікт.",
        "en": "Conscious goals and rational focus: the Five of Wands is a clash of ambitions, arguments, internal or external conflict."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: уникнення конфлікту, капітуляція або хаос без мети.",
        "en": "Mental confusion or conflicting conscious assumptions: avoiding conflict, capitulation, or purposeless chaos."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: боротьба амбіцій, суперечки, внутрішній або зовнішній конфлікт.",
        "en": "Upcoming development and next step: the Five of Wands is a clash of ambitions, arguments, internal or external conflict."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: уникнення конфлікту, капітуляція або хаос без мети.",
        "en": "Temporary slowdown or cautionary phase ahead: avoiding conflict, capitulation, or purposeless chaos."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: боротьба амбіцій, суперечки, внутрішній або зовнішній конфлікт.",
        "en": "Your self-perception and personal stance: the Five of Wands is a clash of ambitions, arguments, internal or external conflict."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: уникнення конфлікту, капітуляція або хаос без мети.",
        "en": "Self-doubt or need to regain inner balance: avoiding conflict, capitulation, or purposeless chaos."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: боротьба амбіцій, суперечки, внутрішній або зовнішній конфлікт.",
        "en": "Outer environment and surrounding circumstances: the Five of Wands is a clash of ambitions, arguments, internal or external conflict."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: уникнення конфлікту, капітуляція або хаос без мети.",
        "en": "External pressure, friction, or lack of support around you: avoiding conflict, capitulation, or purposeless chaos."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: боротьба амбіцій, суперечки, внутрішній або зовнішній конфлікт.",
        "en": "Primary hopes and inner aspiration for the outcome: the Five of Wands is a clash of ambitions, arguments, internal or external conflict."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: уникнення конфлікту, капітуляція або хаос без мети.",
        "en": "Underlying fears, apprehension, or anxiety: avoiding conflict, capitulation, or purposeless chaos."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: боротьба амбіцій, суперечки, внутрішній або зовнішній конфлікт.",
        "en": "Final outcome and resolution of the matter: the Five of Wands is a clash of ambitions, arguments, internal or external conflict."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: уникнення конфлікту, капітуляція або хаос без мети.",
        "en": "Outcome requires further patience and integration: avoiding conflict, capitulation, or purposeless chaos."
      }
    }
  },
  "w06": {
    "1": {
      "upright": {
        "ua": "Публічний успіх, перемога, визнання заслуг, гордість за досягнення, підтримка оточуючих.",
        "en": "Public success, victory, recognition for your merits, pride in your achievements, support from others."
      },
      "reversed": {
        "ua": "Падіння з п'єдесталу, неприйняття суспільством, запізнілий успіх або падіння самооцінки.",
        "en": "A fall from grace, rejection by others, delayed success, or a blow to your self-esteem."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: карта переможця. Ви отримуєте заслужену славу, лідерство, публічний успіх. Ваші досягнення визнають інші. Це тріумф після боротьби,…",
        "en": "The obstacle is an external challenge or excess: the Six of Wands is the card of the winner."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: марнославство, нестабільна популярність або падіння з вершини.",
        "en": "Internal friction or resistance: vanity, unstable popularity, or a fall from the top."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: карта переможця. Ви отримуєте заслужену славу, лідерство, публічний успіх. Ваші досягнення визнають інші. Це тріумф після боротьби,…",
        "en": "Deep inner drive and subconscious root: the Six of Wands is the card of the winner."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: марнославство, нестабільна популярність або падіння з вершини.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: vanity, unstable popularity, or a fall from the top."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: карта переможця. Ви отримуєте заслужену славу, лідерство, публічний успіх. Ваші досягнення визнають інші. Це тріумф після боротьби,…",
        "en": "Past foundation leading to the current moment: the Six of Wands is the card of the winner."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: марнославство, нестабільна популярність або падіння з вершини.",
        "en": "Unresolved past patterns or fading residue: vanity, unstable popularity, or a fall from the top."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: карта переможця. Ви отримуєте заслужену славу, лідерство, публічний успіх. Ваші досягнення визнають інші. Це тріумф після боротьби,…",
        "en": "Conscious goals and rational focus: the Six of Wands is the card of the winner."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: марнославство, нестабільна популярність або падіння з вершини.",
        "en": "Mental confusion or conflicting conscious assumptions: vanity, unstable popularity, or a fall from the top."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: карта переможця. Ви отримуєте заслужену славу, лідерство, публічний успіх. Ваші досягнення визнають інші. Це тріумф після боротьби,…",
        "en": "Upcoming development and next step: the Six of Wands is the card of the winner."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: марнославство, нестабільна популярність або падіння з вершини.",
        "en": "Temporary slowdown or cautionary phase ahead: vanity, unstable popularity, or a fall from the top."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: карта переможця. Ви отримуєте заслужену славу, лідерство, публічний успіх. Ваші досягнення визнають інші. Це тріумф після боротьби,…",
        "en": "Your self-perception and personal stance: the Six of Wands is the card of the winner."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: марнославство, нестабільна популярність або падіння з вершини.",
        "en": "Self-doubt or need to regain inner balance: vanity, unstable popularity, or a fall from the top."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: карта переможця. Ви отримуєте заслужену славу, лідерство, публічний успіх. Ваші досягнення визнають інші. Це тріумф після боротьби,…",
        "en": "Outer environment and surrounding circumstances: the Six of Wands is the card of the winner."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: марнославство, нестабільна популярність або падіння з вершини.",
        "en": "External pressure, friction, or lack of support around you: vanity, unstable popularity, or a fall from the top."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: карта переможця. Ви отримуєте заслужену славу, лідерство, публічний успіх. Ваші досягнення визнають інші. Це тріумф після боротьби,…",
        "en": "Primary hopes and inner aspiration for the outcome: the Six of Wands is the card of the winner."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: марнославство, нестабільна популярність або падіння з вершини.",
        "en": "Underlying fears, apprehension, or anxiety: vanity, unstable popularity, or a fall from the top."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: карта переможця. Ви отримуєте заслужену славу, лідерство, публічний успіх. Ваші досягнення визнають інші. Це тріумф після боротьби,…",
        "en": "Final outcome and resolution of the matter: the Six of Wands is the card of the winner."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: марнославство, нестабільна популярність або падіння з вершини.",
        "en": "Outcome requires further patience and integration: vanity, unstable popularity, or a fall from the top."
      }
    }
  },
  "w07": {
    "1": {
      "upright": {
        "ua": "Захист своїх позицій, відстоювання інтересів під тиском, стійкість і твердість переконань.",
        "en": "Defending your position, standing up for your interests under pressure, resilience and conviction."
      },
      "reversed": {
        "ua": "Капітуляція, відчуття безсилля, капітуляція перед пресингом або програшна позиція.",
        "en": "Surrender, a sense of powerlessness, giving in to pressure, or a losing position."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: вам доводиться захищати свої позиції чи переконання від нападків ззовні.",
        "en": "The obstacle is an external challenge or excess: you have to defend your position or beliefs from outside attacks."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: виснаження від постійної боротьби, нездатність дати відсіч або поразка.",
        "en": "Internal friction or resistance: exhaustion from constant struggle, inability to fight back, or defeat."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: вам доводиться захищати свої позиції чи переконання від нападків ззовні.",
        "en": "Deep inner drive and subconscious root: you have to defend your position or beliefs from outside attacks."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: виснаження від постійної боротьби, нездатність дати відсіч або поразка.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: exhaustion from constant struggle, inability to fight back, or defeat."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: вам доводиться захищати свої позиції чи переконання від нападків ззовні.",
        "en": "Past foundation leading to the current moment: you have to defend your position or beliefs from outside attacks."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: виснаження від постійної боротьби, нездатність дати відсіч або поразка.",
        "en": "Unresolved past patterns or fading residue: exhaustion from constant struggle, inability to fight back, or defeat."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: вам доводиться захищати свої позиції чи переконання від нападків ззовні.",
        "en": "Conscious goals and rational focus: you have to defend your position or beliefs from outside attacks."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: виснаження від постійної боротьби, нездатність дати відсіч або поразка.",
        "en": "Mental confusion or conflicting conscious assumptions: exhaustion from constant struggle, inability to fight back, or defeat."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: вам доводиться захищати свої позиції чи переконання від нападків ззовні.",
        "en": "Upcoming development and next step: you have to defend your position or beliefs from outside attacks."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: виснаження від постійної боротьби, нездатність дати відсіч або поразка.",
        "en": "Temporary slowdown or cautionary phase ahead: exhaustion from constant struggle, inability to fight back, or defeat."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: вам доводиться захищати свої позиції чи переконання від нападків ззовні.",
        "en": "Your self-perception and personal stance: you have to defend your position or beliefs from outside attacks."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: виснаження від постійної боротьби, нездатність дати відсіч або поразка.",
        "en": "Self-doubt or need to regain inner balance: exhaustion from constant struggle, inability to fight back, or defeat."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: вам доводиться захищати свої позиції чи переконання від нападків ззовні.",
        "en": "Outer environment and surrounding circumstances: you have to defend your position or beliefs from outside attacks."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: виснаження від постійної боротьби, нездатність дати відсіч або поразка.",
        "en": "External pressure, friction, or lack of support around you: exhaustion from constant struggle, inability to fight back, or defeat."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: вам доводиться захищати свої позиції чи переконання від нападків ззовні.",
        "en": "Primary hopes and inner aspiration for the outcome: you have to defend your position or beliefs from outside attacks."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: виснаження від постійної боротьби, нездатність дати відсіч або поразка.",
        "en": "Underlying fears, apprehension, or anxiety: exhaustion from constant struggle, inability to fight back, or defeat."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: вам доводиться захищати свої позиції чи переконання від нападків ззовні.",
        "en": "Final outcome and resolution of the matter: you have to defend your position or beliefs from outside attacks."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: виснаження від постійної боротьби, нездатність дати відсіч або поразка.",
        "en": "Outcome requires further patience and integration: exhaustion from constant struggle, inability to fight back, or defeat."
      }
    }
  },
  "w08": {
    "1": {
      "upright": {
        "ua": "Швидкий розвиток подій, новини, стрімкі зміни, рішення надходять негайно.",
        "en": "Fast-moving events, news, rapid change, decisions arriving without delay."
      },
      "reversed": {
        "ua": "Затримки, хаос у комунікаціях, поспішні й помилкові рішення, скасування планів.",
        "en": "Delays, communication breakdowns, rushed and mistaken decisions, cancelled plans."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: події розвиваються стрімко.",
        "en": "The obstacle is an external challenge or excess: events are developing rapidly."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: затримки, скасовані плани або інформація, яка запізнюється.",
        "en": "Internal friction or resistance: delays, cancelled plans, or information that arrives too late."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: події розвиваються стрімко.",
        "en": "Deep inner drive and subconscious root: events are developing rapidly."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: затримки, скасовані плани або інформація, яка запізнюється.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: delays, cancelled plans, or information that arrives too late."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: події розвиваються стрімко.",
        "en": "Past foundation leading to the current moment: events are developing rapidly."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: затримки, скасовані плани або інформація, яка запізнюється.",
        "en": "Unresolved past patterns or fading residue: delays, cancelled plans, or information that arrives too late."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: події розвиваються стрімко.",
        "en": "Conscious goals and rational focus: events are developing rapidly."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: затримки, скасовані плани або інформація, яка запізнюється.",
        "en": "Mental confusion or conflicting conscious assumptions: delays, cancelled plans, or information that arrives too late."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: події розвиваються стрімко.",
        "en": "Upcoming development and next step: events are developing rapidly."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: затримки, скасовані плани або інформація, яка запізнюється.",
        "en": "Temporary slowdown or cautionary phase ahead: delays, cancelled plans, or information that arrives too late."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: події розвиваються стрімко.",
        "en": "Your self-perception and personal stance: events are developing rapidly."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: затримки, скасовані плани або інформація, яка запізнюється.",
        "en": "Self-doubt or need to regain inner balance: delays, cancelled plans, or information that arrives too late."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: події розвиваються стрімко.",
        "en": "Outer environment and surrounding circumstances: events are developing rapidly."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: затримки, скасовані плани або інформація, яка запізнюється.",
        "en": "External pressure, friction, or lack of support around you: delays, cancelled plans, or information that arrives too late."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: події розвиваються стрімко.",
        "en": "Primary hopes and inner aspiration for the outcome: events are developing rapidly."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: затримки, скасовані плани або інформація, яка запізнюється.",
        "en": "Underlying fears, apprehension, or anxiety: delays, cancelled plans, or information that arrives too late."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: події розвиваються стрімко.",
        "en": "Final outcome and resolution of the matter: events are developing rapidly."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: затримки, скасовані плани або інформація, яка запізнюється.",
        "en": "Outcome requires further patience and integration: delays, cancelled plans, or information that arrives too late."
      }
    }
  },
  "w09": {
    "1": {
      "upright": {
        "ua": "Готовність до оборони, настороженість, досвід минулих поразок, стійкість перед фінальним ривком.",
        "en": "Readiness to defend, wariness, lessons from past setbacks, resilience before the final push."
      },
      "reversed": {
        "ua": "Втрата пильності, виснаження, паранойя, небажання захищати власні кордони.",
        "en": "Dropping your guard, exhaustion, paranoia, or an unwillingness to defend your own boundaries."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: людина готова до труднощів через минулі помилки.",
        "en": "The obstacle is an external challenge or excess: a person is prepared for difficulties due to past mistakes."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: параноя, хронічна підозрілість або нездатність довіряти.",
        "en": "Internal friction or resistance: paranoia, chronic suspicion, or inability to trust."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: людина готова до труднощів через минулі помилки.",
        "en": "Deep inner drive and subconscious root: a person is prepared for difficulties due to past mistakes."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: параноя, хронічна підозрілість або нездатність довіряти.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: paranoia, chronic suspicion, or inability to trust."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: людина готова до труднощів через минулі помилки.",
        "en": "Past foundation leading to the current moment: a person is prepared for difficulties due to past mistakes."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: параноя, хронічна підозрілість або нездатність довіряти.",
        "en": "Unresolved past patterns or fading residue: paranoia, chronic suspicion, or inability to trust."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: людина готова до труднощів через минулі помилки.",
        "en": "Conscious goals and rational focus: a person is prepared for difficulties due to past mistakes."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: параноя, хронічна підозрілість або нездатність довіряти.",
        "en": "Mental confusion or conflicting conscious assumptions: paranoia, chronic suspicion, or inability to trust."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: людина готова до труднощів через минулі помилки.",
        "en": "Upcoming development and next step: a person is prepared for difficulties due to past mistakes."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: параноя, хронічна підозрілість або нездатність довіряти.",
        "en": "Temporary slowdown or cautionary phase ahead: paranoia, chronic suspicion, or inability to trust."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: людина готова до труднощів через минулі помилки.",
        "en": "Your self-perception and personal stance: a person is prepared for difficulties due to past mistakes."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: параноя, хронічна підозрілість або нездатність довіряти.",
        "en": "Self-doubt or need to regain inner balance: paranoia, chronic suspicion, or inability to trust."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: людина готова до труднощів через минулі помилки.",
        "en": "Outer environment and surrounding circumstances: a person is prepared for difficulties due to past mistakes."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: параноя, хронічна підозрілість або нездатність довіряти.",
        "en": "External pressure, friction, or lack of support around you: paranoia, chronic suspicion, or inability to trust."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: людина готова до труднощів через минулі помилки.",
        "en": "Primary hopes and inner aspiration for the outcome: a person is prepared for difficulties due to past mistakes."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: параноя, хронічна підозрілість або нездатність довіряти.",
        "en": "Underlying fears, apprehension, or anxiety: paranoia, chronic suspicion, or inability to trust."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: людина готова до труднощів через минулі помилки.",
        "en": "Final outcome and resolution of the matter: a person is prepared for difficulties due to past mistakes."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: параноя, хронічна підозрілість або нездатність довіряти.",
        "en": "Outcome requires further patience and integration: paranoia, chronic suspicion, or inability to trust."
      }
    }
  },
  "w10": {
    "1": {
      "upright": {
        "ua": "Перевантаження, надмірна відповідальність, важкий тягар, працювати на межі можливостей.",
        "en": "Being overloaded, excessive responsibility, a heavy burden, working right at your limit."
      },
      "reversed": {
        "ua": "Скидання тягаря, делегування, занепад сил через перевтому або відмова від чужих зобов'язань.",
        "en": "Putting the burden down, delegating, running out of strength from overwork, or refusing obligations that aren't yours."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: ви взяли на себе занадто багато відповідальності чи обов’язків.",
        "en": "The obstacle is an external challenge or excess: you have taken on too much responsibility or obligations."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: скидання зайвого тягаря, делегування або відмова від непосильної ноші.",
        "en": "Internal friction or resistance: shedding excess burdens, delegating, or refusing an unbearable load."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: ви взяли на себе занадто багато відповідальності чи обов’язків.",
        "en": "Deep inner drive and subconscious root: you have taken on too much responsibility or obligations."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: скидання зайвого тягаря, делегування або відмова від непосильної ноші.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: shedding excess burdens, delegating, or refusing an unbearable load."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: ви взяли на себе занадто багато відповідальності чи обов’язків.",
        "en": "Past foundation leading to the current moment: you have taken on too much responsibility or obligations."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: скидання зайвого тягаря, делегування або відмова від непосильної ноші.",
        "en": "Unresolved past patterns or fading residue: shedding excess burdens, delegating, or refusing an unbearable load."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: ви взяли на себе занадто багато відповідальності чи обов’язків.",
        "en": "Conscious goals and rational focus: you have taken on too much responsibility or obligations."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: скидання зайвого тягаря, делегування або відмова від непосильної ноші.",
        "en": "Mental confusion or conflicting conscious assumptions: shedding excess burdens, delegating, or refusing an unbearable load."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: ви взяли на себе занадто багато відповідальності чи обов’язків.",
        "en": "Upcoming development and next step: you have taken on too much responsibility or obligations."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: скидання зайвого тягаря, делегування або відмова від непосильної ноші.",
        "en": "Temporary slowdown or cautionary phase ahead: shedding excess burdens, delegating, or refusing an unbearable load."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: ви взяли на себе занадто багато відповідальності чи обов’язків.",
        "en": "Your self-perception and personal stance: you have taken on too much responsibility or obligations."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: скидання зайвого тягаря, делегування або відмова від непосильної ноші.",
        "en": "Self-doubt or need to regain inner balance: shedding excess burdens, delegating, or refusing an unbearable load."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: ви взяли на себе занадто багато відповідальності чи обов’язків.",
        "en": "Outer environment and surrounding circumstances: you have taken on too much responsibility or obligations."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: скидання зайвого тягаря, делегування або відмова від непосильної ноші.",
        "en": "External pressure, friction, or lack of support around you: shedding excess burdens, delegating, or refusing an unbearable load."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: ви взяли на себе занадто багато відповідальності чи обов’язків.",
        "en": "Primary hopes and inner aspiration for the outcome: you have taken on too much responsibility or obligations."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: скидання зайвого тягаря, делегування або відмова від непосильної ноші.",
        "en": "Underlying fears, apprehension, or anxiety: shedding excess burdens, delegating, or refusing an unbearable load."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: ви взяли на себе занадто багато відповідальності чи обов’язків.",
        "en": "Final outcome and resolution of the matter: you have taken on too much responsibility or obligations."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: скидання зайвого тягаря, делегування або відмова від непосильної ноші.",
        "en": "Outcome requires further patience and integration: shedding excess burdens, delegating, or refusing an unbearable load."
      }
    }
  },
  "w11": {
    "1": {
      "upright": {
        "ua": "Захоплюючі новини, цікава пропозиція, допитливість, бажання вчитися та пробувати нове.",
        "en": "Exciting news, an interesting offer, curiosity, a desire to learn and try new things."
      },
      "reversed": {
        "ua": "Ненадійні новини, незрілість, нестача енергії для втілення ідей, забудькуватість.",
        "en": "Unreliable news, immaturity, not enough energy to follow through on ideas, forgetfulness."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: молода енергія, вісник гарних новин або пропозицій.",
        "en": "The obstacle is an external challenge or excess: the Page of Wands is young energy, a messenger of good news or proposals."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: порожні обіцянки, затримка новин або нереалізований ентузіазм.",
        "en": "Internal friction or resistance: empty promises, delayed news, or unrealized enthusiasm."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: молода енергія, вісник гарних новин або пропозицій.",
        "en": "Deep inner drive and subconscious root: the Page of Wands is young energy, a messenger of good news or proposals."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: порожні обіцянки, затримка новин або нереалізований ентузіазм.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: empty promises, delayed news, or unrealized enthusiasm."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: молода енергія, вісник гарних новин або пропозицій.",
        "en": "Past foundation leading to the current moment: the Page of Wands is young energy, a messenger of good news or proposals."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: порожні обіцянки, затримка новин або нереалізований ентузіазм.",
        "en": "Unresolved past patterns or fading residue: empty promises, delayed news, or unrealized enthusiasm."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: молода енергія, вісник гарних новин або пропозицій.",
        "en": "Conscious goals and rational focus: the Page of Wands is young energy, a messenger of good news or proposals."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: порожні обіцянки, затримка новин або нереалізований ентузіазм.",
        "en": "Mental confusion or conflicting conscious assumptions: empty promises, delayed news, or unrealized enthusiasm."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: молода енергія, вісник гарних новин або пропозицій.",
        "en": "Upcoming development and next step: the Page of Wands is young energy, a messenger of good news or proposals."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: порожні обіцянки, затримка новин або нереалізований ентузіазм.",
        "en": "Temporary slowdown or cautionary phase ahead: empty promises, delayed news, or unrealized enthusiasm."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: молода енергія, вісник гарних новин або пропозицій.",
        "en": "Your self-perception and personal stance: the Page of Wands is young energy, a messenger of good news or proposals."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: порожні обіцянки, затримка новин або нереалізований ентузіазм.",
        "en": "Self-doubt or need to regain inner balance: empty promises, delayed news, or unrealized enthusiasm."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: молода енергія, вісник гарних новин або пропозицій.",
        "en": "Outer environment and surrounding circumstances: the Page of Wands is young energy, a messenger of good news or proposals."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: порожні обіцянки, затримка новин або нереалізований ентузіазм.",
        "en": "External pressure, friction, or lack of support around you: empty promises, delayed news, or unrealized enthusiasm."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: молода енергія, вісник гарних новин або пропозицій.",
        "en": "Primary hopes and inner aspiration for the outcome: the Page of Wands is young energy, a messenger of good news or proposals."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: порожні обіцянки, затримка новин або нереалізований ентузіазм.",
        "en": "Underlying fears, apprehension, or anxiety: empty promises, delayed news, or unrealized enthusiasm."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: молода енергія, вісник гарних новин або пропозицій.",
        "en": "Final outcome and resolution of the matter: the Page of Wands is young energy, a messenger of good news or proposals."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: порожні обіцянки, затримка новин або нереалізований ентузіазм.",
        "en": "Outcome requires further patience and integration: empty promises, delayed news, or unrealized enthusiasm."
      }
    }
  },
  "w12": {
    "1": {
      "upright": {
        "ua": "Азарт, рішучість, імпульсивні дії, поїздка, швидка зміна обставин, жага пригод.",
        "en": "Excitement, determination, impulsive action, a trip, fast-changing circumstances, a thirst for adventure."
      },
      "reversed": {
        "ua": "Хаотичність, спалахи гніву, ризикованість, непослідовність чи перервані плани.",
        "en": "Chaotic behavior, flashes of anger, recklessness, inconsistency, or interrupted plans."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: стрімка дія, енергійність, часом імпульсивність та егоїзм.",
        "en": "The obstacle is an external challenge or excess: the Knight of Wands is swift action, energy, sometimes impulsiveness and selfishness."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: непередбачуваність, ризикова поведінка або конфлікти через поспіх.",
        "en": "Internal friction or resistance: unpredictability, risky behavior, or conflicts due to haste."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: стрімка дія, енергійність, часом імпульсивність та егоїзм.",
        "en": "Deep inner drive and subconscious root: the Knight of Wands is swift action, energy, sometimes impulsiveness and selfishness."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: непередбачуваність, ризикова поведінка або конфлікти через поспіх.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: unpredictability, risky behavior, or conflicts due to haste."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: стрімка дія, енергійність, часом імпульсивність та егоїзм.",
        "en": "Past foundation leading to the current moment: the Knight of Wands is swift action, energy, sometimes impulsiveness and selfishness."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: непередбачуваність, ризикова поведінка або конфлікти через поспіх.",
        "en": "Unresolved past patterns or fading residue: unpredictability, risky behavior, or conflicts due to haste."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: стрімка дія, енергійність, часом імпульсивність та егоїзм.",
        "en": "Conscious goals and rational focus: the Knight of Wands is swift action, energy, sometimes impulsiveness and selfishness."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: непередбачуваність, ризикова поведінка або конфлікти через поспіх.",
        "en": "Mental confusion or conflicting conscious assumptions: unpredictability, risky behavior, or conflicts due to haste."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: стрімка дія, енергійність, часом імпульсивність та егоїзм.",
        "en": "Upcoming development and next step: the Knight of Wands is swift action, energy, sometimes impulsiveness and selfishness."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: непередбачуваність, ризикова поведінка або конфлікти через поспіх.",
        "en": "Temporary slowdown or cautionary phase ahead: unpredictability, risky behavior, or conflicts due to haste."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: стрімка дія, енергійність, часом імпульсивність та егоїзм.",
        "en": "Your self-perception and personal stance: the Knight of Wands is swift action, energy, sometimes impulsiveness and selfishness."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: непередбачуваність, ризикова поведінка або конфлікти через поспіх.",
        "en": "Self-doubt or need to regain inner balance: unpredictability, risky behavior, or conflicts due to haste."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: стрімка дія, енергійність, часом імпульсивність та егоїзм.",
        "en": "Outer environment and surrounding circumstances: the Knight of Wands is swift action, energy, sometimes impulsiveness and selfishness."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: непередбачуваність, ризикова поведінка або конфлікти через поспіх.",
        "en": "External pressure, friction, or lack of support around you: unpredictability, risky behavior, or conflicts due to haste."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: стрімка дія, енергійність, часом імпульсивність та егоїзм.",
        "en": "Primary hopes and inner aspiration for the outcome: the Knight of Wands is swift action, energy, sometimes impulsiveness and selfishness."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: непередбачуваність, ризикова поведінка або конфлікти через поспіх.",
        "en": "Underlying fears, apprehension, or anxiety: unpredictability, risky behavior, or conflicts due to haste."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: стрімка дія, енергійність, часом імпульсивність та егоїзм.",
        "en": "Final outcome and resolution of the matter: the Knight of Wands is swift action, energy, sometimes impulsiveness and selfishness."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: непередбачуваність, ризикова поведінка або конфлікти через поспіх.",
        "en": "Outcome requires further patience and integration: unpredictability, risky behavior, or conflicts due to haste."
      }
    }
  },
  "w13": {
    "1": {
      "upright": {
        "ua": "Впевненість, харизма, незалежність, підприємливість, яскрава енергетика та лідерство.",
        "en": "Confidence, charisma, independence, initiative, vibrant energy, and leadership."
      },
      "reversed": {
        "ua": "Ревнощі, егоїзм, маніпулятивність, вигорання або владність, що шкодить справі.",
        "en": "Jealousy, selfishness, manipulation, burnout, or a controlling attitude that undermines the goal."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: яскрава, незалежна, оптимістична жінка.",
        "en": "The obstacle is an external challenge or excess: the Queen of Wands is a bright, independent, optimistic woman."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: надмірна вимогливість, ревнощі або втрата впевненості в собі.",
        "en": "Internal friction or resistance: excessive demandingness, jealousy, or loss of self-confidence."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: яскрава, незалежна, оптимістична жінка.",
        "en": "Deep inner drive and subconscious root: the Queen of Wands is a bright, independent, optimistic woman."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: надмірна вимогливість, ревнощі або втрата впевненості в собі.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: excessive demandingness, jealousy, or loss of self-confidence."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: яскрава, незалежна, оптимістична жінка.",
        "en": "Past foundation leading to the current moment: the Queen of Wands is a bright, independent, optimistic woman."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: надмірна вимогливість, ревнощі або втрата впевненості в собі.",
        "en": "Unresolved past patterns or fading residue: excessive demandingness, jealousy, or loss of self-confidence."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: яскрава, незалежна, оптимістична жінка.",
        "en": "Conscious goals and rational focus: the Queen of Wands is a bright, independent, optimistic woman."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: надмірна вимогливість, ревнощі або втрата впевненості в собі.",
        "en": "Mental confusion or conflicting conscious assumptions: excessive demandingness, jealousy, or loss of self-confidence."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: яскрава, незалежна, оптимістична жінка.",
        "en": "Upcoming development and next step: the Queen of Wands is a bright, independent, optimistic woman."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: надмірна вимогливість, ревнощі або втрата впевненості в собі.",
        "en": "Temporary slowdown or cautionary phase ahead: excessive demandingness, jealousy, or loss of self-confidence."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: яскрава, незалежна, оптимістична жінка.",
        "en": "Your self-perception and personal stance: the Queen of Wands is a bright, independent, optimistic woman."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: надмірна вимогливість, ревнощі або втрата впевненості в собі.",
        "en": "Self-doubt or need to regain inner balance: excessive demandingness, jealousy, or loss of self-confidence."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: яскрава, незалежна, оптимістична жінка.",
        "en": "Outer environment and surrounding circumstances: the Queen of Wands is a bright, independent, optimistic woman."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: надмірна вимогливість, ревнощі або втрата впевненості в собі.",
        "en": "External pressure, friction, or lack of support around you: excessive demandingness, jealousy, or loss of self-confidence."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: яскрава, незалежна, оптимістична жінка.",
        "en": "Primary hopes and inner aspiration for the outcome: the Queen of Wands is a bright, independent, optimistic woman."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: надмірна вимогливість, ревнощі або втрата впевненості в собі.",
        "en": "Underlying fears, apprehension, or anxiety: excessive demandingness, jealousy, or loss of self-confidence."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: яскрава, незалежна, оптимістична жінка.",
        "en": "Final outcome and resolution of the matter: the Queen of Wands is a bright, independent, optimistic woman."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: надмірна вимогливість, ревнощі або втрата впевненості в собі.",
        "en": "Outcome requires further patience and integration: excessive demandingness, jealousy, or loss of self-confidence."
      }
    }
  },
  "w14": {
    "1": {
      "upright": {
        "ua": "Бачення перспективи, авторитет, рішуче керівництво, підприємницький дух і масштабні цілі.",
        "en": "A vision for the future, authority, decisive leadership, an entrepreneurial spirit, and big goals."
      },
      "reversed": {
        "ua": "Декларативний стиль управління, імпульсивні рішення, самодурство або втрата впливу.",
        "en": "A dictatorial leadership style, impulsive decisions, arbitrary behavior, or a loss of influence."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: зрілий, харизматичний чоловік із палкою вдачею.",
        "en": "The obstacle is an external challenge or excess: the King of Wands is a mature, charismatic man with a fiery nature."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: авторитаризм, вибуховий характер або зловживання владою.",
        "en": "Internal friction or resistance: authoritarianism, explosive temper, or abuse of power."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: зрілий, харизматичний чоловік із палкою вдачею.",
        "en": "Deep inner drive and subconscious root: the King of Wands is a mature, charismatic man with a fiery nature."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: авторитаризм, вибуховий характер або зловживання владою.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: authoritarianism, explosive temper, or abuse of power."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: зрілий, харизматичний чоловік із палкою вдачею.",
        "en": "Past foundation leading to the current moment: the King of Wands is a mature, charismatic man with a fiery nature."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: авторитаризм, вибуховий характер або зловживання владою.",
        "en": "Unresolved past patterns or fading residue: authoritarianism, explosive temper, or abuse of power."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: зрілий, харизматичний чоловік із палкою вдачею.",
        "en": "Conscious goals and rational focus: the King of Wands is a mature, charismatic man with a fiery nature."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: авторитаризм, вибуховий характер або зловживання владою.",
        "en": "Mental confusion or conflicting conscious assumptions: authoritarianism, explosive temper, or abuse of power."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: зрілий, харизматичний чоловік із палкою вдачею.",
        "en": "Upcoming development and next step: the King of Wands is a mature, charismatic man with a fiery nature."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: авторитаризм, вибуховий характер або зловживання владою.",
        "en": "Temporary slowdown or cautionary phase ahead: authoritarianism, explosive temper, or abuse of power."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: зрілий, харизматичний чоловік із палкою вдачею.",
        "en": "Your self-perception and personal stance: the King of Wands is a mature, charismatic man with a fiery nature."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: авторитаризм, вибуховий характер або зловживання владою.",
        "en": "Self-doubt or need to regain inner balance: authoritarianism, explosive temper, or abuse of power."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: зрілий, харизматичний чоловік із палкою вдачею.",
        "en": "Outer environment and surrounding circumstances: the King of Wands is a mature, charismatic man with a fiery nature."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: авторитаризм, вибуховий характер або зловживання владою.",
        "en": "External pressure, friction, or lack of support around you: authoritarianism, explosive temper, or abuse of power."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: зрілий, харизматичний чоловік із палкою вдачею.",
        "en": "Primary hopes and inner aspiration for the outcome: the King of Wands is a mature, charismatic man with a fiery nature."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: авторитаризм, вибуховий характер або зловживання владою.",
        "en": "Underlying fears, apprehension, or anxiety: authoritarianism, explosive temper, or abuse of power."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: зрілий, харизматичний чоловік із палкою вдачею.",
        "en": "Final outcome and resolution of the matter: the King of Wands is a mature, charismatic man with a fiery nature."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: авторитаризм, вибуховий характер або зловживання владою.",
        "en": "Outcome requires further patience and integration: authoritarianism, explosive temper, or abuse of power."
      }
    }
  },
  "c01": {
    "1": {
      "upright": {
        "ua": "Переповнення почуттями, відкриття серця, нове кохання, натхнення, емоційне оновлення.",
        "en": "Overflowing feelings, an open heart, new love, inspiration, emotional renewal."
      },
      "reversed": {
        "ua": "Емоційне виснаження, блоки в почуттях, розчарування, несправджені надії.",
        "en": "Emotional exhaustion, blocked feelings, disappointment, unfulfilled hopes."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: початок закоханості, щира радість, гармонія, творче натхнення.",
        "en": "The obstacle is an external challenge or excess: the Ace of Cups is the beginning of falling in love, sincere joy, harmony, creative inspiration."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: пригнічені емоції, нереалізований творчий потенціал або порожнеча всередині.",
        "en": "Internal friction or resistance: suppressed emotions, unrealized creative potential, or inner emptiness."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: початок закоханості, щира радість, гармонія, творче натхнення.",
        "en": "Deep inner drive and subconscious root: the Ace of Cups is the beginning of falling in love, sincere joy, harmony, creative inspiration."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: пригнічені емоції, нереалізований творчий потенціал або порожнеча всередині.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: suppressed emotions, unrealized creative potential, or inner emptiness."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: початок закоханості, щира радість, гармонія, творче натхнення.",
        "en": "Past foundation leading to the current moment: the Ace of Cups is the beginning of falling in love, sincere joy, harmony, creative inspiration."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: пригнічені емоції, нереалізований творчий потенціал або порожнеча всередині.",
        "en": "Unresolved past patterns or fading residue: suppressed emotions, unrealized creative potential, or inner emptiness."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: початок закоханості, щира радість, гармонія, творче натхнення.",
        "en": "Conscious goals and rational focus: the Ace of Cups is the beginning of falling in love, sincere joy, harmony, creative inspiration."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: пригнічені емоції, нереалізований творчий потенціал або порожнеча всередині.",
        "en": "Mental confusion or conflicting conscious assumptions: suppressed emotions, unrealized creative potential, or inner emptiness."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: початок закоханості, щира радість, гармонія, творче натхнення.",
        "en": "Upcoming development and next step: the Ace of Cups is the beginning of falling in love, sincere joy, harmony, creative inspiration."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: пригнічені емоції, нереалізований творчий потенціал або порожнеча всередині.",
        "en": "Temporary slowdown or cautionary phase ahead: suppressed emotions, unrealized creative potential, or inner emptiness."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: початок закоханості, щира радість, гармонія, творче натхнення.",
        "en": "Your self-perception and personal stance: the Ace of Cups is the beginning of falling in love, sincere joy, harmony, creative inspiration."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: пригнічені емоції, нереалізований творчий потенціал або порожнеча всередині.",
        "en": "Self-doubt or need to regain inner balance: suppressed emotions, unrealized creative potential, or inner emptiness."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: початок закоханості, щира радість, гармонія, творче натхнення.",
        "en": "Outer environment and surrounding circumstances: the Ace of Cups is the beginning of falling in love, sincere joy, harmony, creative inspiration."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: пригнічені емоції, нереалізований творчий потенціал або порожнеча всередині.",
        "en": "External pressure, friction, or lack of support around you: suppressed emotions, unrealized creative potential, or inner emptiness."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: початок закоханості, щира радість, гармонія, творче натхнення.",
        "en": "Primary hopes and inner aspiration for the outcome: the Ace of Cups is the beginning of falling in love, sincere joy, harmony, creative inspiration."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: пригнічені емоції, нереалізований творчий потенціал або порожнеча всередині.",
        "en": "Underlying fears, apprehension, or anxiety: suppressed emotions, unrealized creative potential, or inner emptiness."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: початок закоханості, щира радість, гармонія, творче натхнення.",
        "en": "Final outcome and resolution of the matter: the Ace of Cups is the beginning of falling in love, sincere joy, harmony, creative inspiration."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: пригнічені емоції, нереалізований творчий потенціал або порожнеча всередині.",
        "en": "Outcome requires further patience and integration: suppressed emotions, unrealized creative potential, or inner emptiness."
      }
    }
  },
  "c02": {
    "1": {
      "upright": {
        "ua": "Взаємність, партнерство, симпатія, примирення, гармонійний довірливий союз.",
        "en": "Mutual attraction, partnership, affection, reconciliation, a harmonious relationship built on trust."
      },
      "reversed": {
        "ua": "Розлад у стосунках, непорозуміння, відсутність взаємності, порушення домовленостей.",
        "en": "Discord in a relationship, misunderstanding, one-sided feelings, broken agreements."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: романтичне побачення, взаємне кохання, укладання вигідного миру чи союзу, взаєморозуміння.",
        "en": "The obstacle is an external challenge or excess: the Two of Cups is a romantic date, mutual love, forming a beneficial peace or union, and mutual understanding."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: дисбаланс у стосунках, розрив домовленостей або нерозділена любов.",
        "en": "Internal friction or resistance: imbalance in a relationship, breaking of agreements, or unrequited love."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: романтичне побачення, взаємне кохання, укладання вигідного миру чи союзу, взаєморозуміння.",
        "en": "Deep inner drive and subconscious root: the Two of Cups is a romantic date, mutual love, forming a beneficial peace or union, and mutual understanding."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: дисбаланс у стосунках, розрив домовленостей або нерозділена любов.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: imbalance in a relationship, breaking of agreements, or unrequited love."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: романтичне побачення, взаємне кохання, укладання вигідного миру чи союзу, взаєморозуміння.",
        "en": "Past foundation leading to the current moment: the Two of Cups is a romantic date, mutual love, forming a beneficial peace or union, and mutual understanding."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: дисбаланс у стосунках, розрив домовленостей або нерозділена любов.",
        "en": "Unresolved past patterns or fading residue: imbalance in a relationship, breaking of agreements, or unrequited love."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: романтичне побачення, взаємне кохання, укладання вигідного миру чи союзу, взаєморозуміння.",
        "en": "Conscious goals and rational focus: the Two of Cups is a romantic date, mutual love, forming a beneficial peace or union, and mutual understanding."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: дисбаланс у стосунках, розрив домовленостей або нерозділена любов.",
        "en": "Mental confusion or conflicting conscious assumptions: imbalance in a relationship, breaking of agreements, or unrequited love."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: романтичне побачення, взаємне кохання, укладання вигідного миру чи союзу, взаєморозуміння.",
        "en": "Upcoming development and next step: the Two of Cups is a romantic date, mutual love, forming a beneficial peace or union, and mutual understanding."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: дисбаланс у стосунках, розрив домовленостей або нерозділена любов.",
        "en": "Temporary slowdown or cautionary phase ahead: imbalance in a relationship, breaking of agreements, or unrequited love."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: романтичне побачення, взаємне кохання, укладання вигідного миру чи союзу, взаєморозуміння.",
        "en": "Your self-perception and personal stance: the Two of Cups is a romantic date, mutual love, forming a beneficial peace or union, and mutual understanding."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: дисбаланс у стосунках, розрив домовленостей або нерозділена любов.",
        "en": "Self-doubt or need to regain inner balance: imbalance in a relationship, breaking of agreements, or unrequited love."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: романтичне побачення, взаємне кохання, укладання вигідного миру чи союзу, взаєморозуміння.",
        "en": "Outer environment and surrounding circumstances: the Two of Cups is a romantic date, mutual love, forming a beneficial peace or union, and mutual understanding."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: дисбаланс у стосунках, розрив домовленостей або нерозділена любов.",
        "en": "External pressure, friction, or lack of support around you: imbalance in a relationship, breaking of agreements, or unrequited love."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: романтичне побачення, взаємне кохання, укладання вигідного миру чи союзу, взаєморозуміння.",
        "en": "Primary hopes and inner aspiration for the outcome: the Two of Cups is a romantic date, mutual love, forming a beneficial peace or union, and mutual understanding."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: дисбаланс у стосунках, розрив домовленостей або нерозділена любов.",
        "en": "Underlying fears, apprehension, or anxiety: imbalance in a relationship, breaking of agreements, or unrequited love."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: романтичне побачення, взаємне кохання, укладання вигідного миру чи союзу, взаєморозуміння.",
        "en": "Final outcome and resolution of the matter: the Two of Cups is a romantic date, mutual love, forming a beneficial peace or union, and mutual understanding."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: дисбаланс у стосунках, розрив домовленостей або нерозділена любов.",
        "en": "Outcome requires further patience and integration: imbalance in a relationship, breaking of agreements, or unrequited love."
      }
    }
  },
  "c03": {
    "1": {
      "upright": {
        "ua": "Радість спілкування, свято, підтримка друзів, спільний успіх, щира душевна атмосфера.",
        "en": "The joy of connection, celebration, the support of friends, shared success, a warm, genuine atmosphere."
      },
      "reversed": {
        "ua": "Надмірні розваги, плітки в колективі, відчуття чужого на святі життя, треті особи.",
        "en": "Excessive partying, gossip within a group, feeling left out, or a third party involved."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: вечірка, радісна подія у колі друзів чи родини.",
        "en": "The obstacle is an external challenge or excess: the Three of Cups is a party, a joyful event among friends or family."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: надмірні гуляння, поверхнева дружба або ізоляція від соціуму.",
        "en": "Internal friction or resistance: excessive merrymaking, superficial friendships, or social isolation."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: вечірка, радісна подія у колі друзів чи родини.",
        "en": "Deep inner drive and subconscious root: the Three of Cups is a party, a joyful event among friends or family."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: надмірні гуляння, поверхнева дружба або ізоляція від соціуму.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: excessive merrymaking, superficial friendships, or social isolation."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: вечірка, радісна подія у колі друзів чи родини.",
        "en": "Past foundation leading to the current moment: the Three of Cups is a party, a joyful event among friends or family."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: надмірні гуляння, поверхнева дружба або ізоляція від соціуму.",
        "en": "Unresolved past patterns or fading residue: excessive merrymaking, superficial friendships, or social isolation."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: вечірка, радісна подія у колі друзів чи родини.",
        "en": "Conscious goals and rational focus: the Three of Cups is a party, a joyful event among friends or family."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: надмірні гуляння, поверхнева дружба або ізоляція від соціуму.",
        "en": "Mental confusion or conflicting conscious assumptions: excessive merrymaking, superficial friendships, or social isolation."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: вечірка, радісна подія у колі друзів чи родини.",
        "en": "Upcoming development and next step: the Three of Cups is a party, a joyful event among friends or family."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: надмірні гуляння, поверхнева дружба або ізоляція від соціуму.",
        "en": "Temporary slowdown or cautionary phase ahead: excessive merrymaking, superficial friendships, or social isolation."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: вечірка, радісна подія у колі друзів чи родини.",
        "en": "Your self-perception and personal stance: the Three of Cups is a party, a joyful event among friends or family."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: надмірні гуляння, поверхнева дружба або ізоляція від соціуму.",
        "en": "Self-doubt or need to regain inner balance: excessive merrymaking, superficial friendships, or social isolation."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: вечірка, радісна подія у колі друзів чи родини.",
        "en": "Outer environment and surrounding circumstances: the Three of Cups is a party, a joyful event among friends or family."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: надмірні гуляння, поверхнева дружба або ізоляція від соціуму.",
        "en": "External pressure, friction, or lack of support around you: excessive merrymaking, superficial friendships, or social isolation."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: вечірка, радісна подія у колі друзів чи родини.",
        "en": "Primary hopes and inner aspiration for the outcome: the Three of Cups is a party, a joyful event among friends or family."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: надмірні гуляння, поверхнева дружба або ізоляція від соціуму.",
        "en": "Underlying fears, apprehension, or anxiety: excessive merrymaking, superficial friendships, or social isolation."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: вечірка, радісна подія у колі друзів чи родини.",
        "en": "Final outcome and resolution of the matter: the Three of Cups is a party, a joyful event among friends or family."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: надмірні гуляння, поверхнева дружба або ізоляція від соціуму.",
        "en": "Outcome requires further patience and integration: excessive merrymaking, superficial friendships, or social isolation."
      }
    }
  },
  "c04": {
    "1": {
      "upright": {
        "ua": "Апатія, ануй, нудьга, пересичення, ігнорування нових можливостей через емоційний застій.",
        "en": "Apathy, ennui, boredom, oversaturation, overlooking new opportunities due to emotional stagnation."
      },
      "reversed": {
        "ua": "Вихід з депресії, повернення інтересу до життя, готовність прийняти новий шанс.",
        "en": "Coming out of a low mood, renewed interest in life, readiness to embrace a new chance."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: емоційне вигорання, апатія.",
        "en": "The obstacle is an external challenge or excess: the Four of Cups is emotional burnout, apathy."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: вихід із депресії, нова мотивація або усвідомлення пропущених можливостей.",
        "en": "Internal friction or resistance: emerging from depression, new motivation, or awareness of missed opportunities."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: емоційне вигорання, апатія.",
        "en": "Deep inner drive and subconscious root: the Four of Cups is emotional burnout, apathy."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: вихід із депресії, нова мотивація або усвідомлення пропущених можливостей.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: emerging from depression, new motivation, or awareness of missed opportunities."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: емоційне вигорання, апатія.",
        "en": "Past foundation leading to the current moment: the Four of Cups is emotional burnout, apathy."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: вихід із депресії, нова мотивація або усвідомлення пропущених можливостей.",
        "en": "Unresolved past patterns or fading residue: emerging from depression, new motivation, or awareness of missed opportunities."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: емоційне вигорання, апатія.",
        "en": "Conscious goals and rational focus: the Four of Cups is emotional burnout, apathy."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: вихід із депресії, нова мотивація або усвідомлення пропущених можливостей.",
        "en": "Mental confusion or conflicting conscious assumptions: emerging from depression, new motivation, or awareness of missed opportunities."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: емоційне вигорання, апатія.",
        "en": "Upcoming development and next step: the Four of Cups is emotional burnout, apathy."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: вихід із депресії, нова мотивація або усвідомлення пропущених можливостей.",
        "en": "Temporary slowdown or cautionary phase ahead: emerging from depression, new motivation, or awareness of missed opportunities."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: емоційне вигорання, апатія.",
        "en": "Your self-perception and personal stance: the Four of Cups is emotional burnout, apathy."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: вихід із депресії, нова мотивація або усвідомлення пропущених можливостей.",
        "en": "Self-doubt or need to regain inner balance: emerging from depression, new motivation, or awareness of missed opportunities."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: емоційне вигорання, апатія.",
        "en": "Outer environment and surrounding circumstances: the Four of Cups is emotional burnout, apathy."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: вихід із депресії, нова мотивація або усвідомлення пропущених можливостей.",
        "en": "External pressure, friction, or lack of support around you: emerging from depression, new motivation, or awareness of missed opportunities."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: емоційне вигорання, апатія.",
        "en": "Primary hopes and inner aspiration for the outcome: the Four of Cups is emotional burnout, apathy."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: вихід із депресії, нова мотивація або усвідомлення пропущених можливостей.",
        "en": "Underlying fears, apprehension, or anxiety: emerging from depression, new motivation, or awareness of missed opportunities."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: емоційне вигорання, апатія.",
        "en": "Final outcome and resolution of the matter: the Four of Cups is emotional burnout, apathy."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: вихід із депресії, нова мотивація або усвідомлення пропущених можливостей.",
        "en": "Outcome requires further patience and integration: emerging from depression, new motivation, or awareness of missed opportunities."
      }
    }
  },
  "c05": {
    "1": {
      "upright": {
        "ua": "Фокус на втратах, смуток, жаль за минулим, емоційна криза, невикористаний залишок.",
        "en": "Dwelling on losses, sorrow, regret over the past, an emotional crisis, overlooking what still remains."
      },
      "reversed": {
        "ua": "Прийняття втрати, загоєння душевних ран, готовність рухатися далі, надія.",
        "en": "Accepting a loss, healing emotional wounds, readiness to move forward, hope."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: розчарування, жаль за минулим.",
        "en": "The obstacle is an external challenge or excess: the Five of Cups is disappointment, regret for the past."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: прийняття втрати, рух уперед або відпускання болю.",
        "en": "Internal friction or resistance: acceptance of loss, moving forward, or letting go of pain."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: розчарування, жаль за минулим.",
        "en": "Deep inner drive and subconscious root: the Five of Cups is disappointment, regret for the past."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: прийняття втрати, рух уперед або відпускання болю.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: acceptance of loss, moving forward, or letting go of pain."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: розчарування, жаль за минулим.",
        "en": "Past foundation leading to the current moment: the Five of Cups is disappointment, regret for the past."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: прийняття втрати, рух уперед або відпускання болю.",
        "en": "Unresolved past patterns or fading residue: acceptance of loss, moving forward, or letting go of pain."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: розчарування, жаль за минулим.",
        "en": "Conscious goals and rational focus: the Five of Cups is disappointment, regret for the past."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: прийняття втрати, рух уперед або відпускання болю.",
        "en": "Mental confusion or conflicting conscious assumptions: acceptance of loss, moving forward, or letting go of pain."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: розчарування, жаль за минулим.",
        "en": "Upcoming development and next step: the Five of Cups is disappointment, regret for the past."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: прийняття втрати, рух уперед або відпускання болю.",
        "en": "Temporary slowdown or cautionary phase ahead: acceptance of loss, moving forward, or letting go of pain."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: розчарування, жаль за минулим.",
        "en": "Your self-perception and personal stance: the Five of Cups is disappointment, regret for the past."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: прийняття втрати, рух уперед або відпускання болю.",
        "en": "Self-doubt or need to regain inner balance: acceptance of loss, moving forward, or letting go of pain."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: розчарування, жаль за минулим.",
        "en": "Outer environment and surrounding circumstances: the Five of Cups is disappointment, regret for the past."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: прийняття втрати, рух уперед або відпускання болю.",
        "en": "External pressure, friction, or lack of support around you: acceptance of loss, moving forward, or letting go of pain."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: розчарування, жаль за минулим.",
        "en": "Primary hopes and inner aspiration for the outcome: the Five of Cups is disappointment, regret for the past."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: прийняття втрати, рух уперед або відпускання болю.",
        "en": "Underlying fears, apprehension, or anxiety: acceptance of loss, moving forward, or letting go of pain."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: розчарування, жаль за минулим.",
        "en": "Final outcome and resolution of the matter: the Five of Cups is disappointment, regret for the past."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: прийняття втрати, рух уперед або відпускання болю.",
        "en": "Outcome requires further patience and integration: acceptance of loss, moving forward, or letting go of pain."
      }
    }
  },
  "c06": {
    "1": {
      "upright": {
        "ua": "Приємні спогади, зустрічі з минулим, дитяча щирість, ностальгія, безкорислива допомога.",
        "en": "Fond memories, reconnecting with the past, childlike sincerity, nostalgia, selfless help."
      },
      "reversed": {
        "ua": "Застрягання в минулому, застарілі дитячі травми, ідеалізація того, що минуло.",
        "en": "Getting stuck in the past, unresolved childhood wounds, idealizing what's gone."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: повернення до минулого, зустріч зі старими друзями, дитячі спогади.",
        "en": "The obstacle is an external challenge or excess: the Six of Cups is a return to the past, meeting old friends, childhood memories."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: нездорова ностальгія, нездатність жити сьогоденням або болісне минуле.",
        "en": "Internal friction or resistance: unhealthy nostalgia, inability to live in the present, or a painful past."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: повернення до минулого, зустріч зі старими друзями, дитячі спогади.",
        "en": "Deep inner drive and subconscious root: the Six of Cups is a return to the past, meeting old friends, childhood memories."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: нездорова ностальгія, нездатність жити сьогоденням або болісне минуле.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: unhealthy nostalgia, inability to live in the present, or a painful past."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: повернення до минулого, зустріч зі старими друзями, дитячі спогади.",
        "en": "Past foundation leading to the current moment: the Six of Cups is a return to the past, meeting old friends, childhood memories."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: нездорова ностальгія, нездатність жити сьогоденням або болісне минуле.",
        "en": "Unresolved past patterns or fading residue: unhealthy nostalgia, inability to live in the present, or a painful past."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: повернення до минулого, зустріч зі старими друзями, дитячі спогади.",
        "en": "Conscious goals and rational focus: the Six of Cups is a return to the past, meeting old friends, childhood memories."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: нездорова ностальгія, нездатність жити сьогоденням або болісне минуле.",
        "en": "Mental confusion or conflicting conscious assumptions: unhealthy nostalgia, inability to live in the present, or a painful past."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: повернення до минулого, зустріч зі старими друзями, дитячі спогади.",
        "en": "Upcoming development and next step: the Six of Cups is a return to the past, meeting old friends, childhood memories."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: нездорова ностальгія, нездатність жити сьогоденням або болісне минуле.",
        "en": "Temporary slowdown or cautionary phase ahead: unhealthy nostalgia, inability to live in the present, or a painful past."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: повернення до минулого, зустріч зі старими друзями, дитячі спогади.",
        "en": "Your self-perception and personal stance: the Six of Cups is a return to the past, meeting old friends, childhood memories."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: нездорова ностальгія, нездатність жити сьогоденням або болісне минуле.",
        "en": "Self-doubt or need to regain inner balance: unhealthy nostalgia, inability to live in the present, or a painful past."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: повернення до минулого, зустріч зі старими друзями, дитячі спогади.",
        "en": "Outer environment and surrounding circumstances: the Six of Cups is a return to the past, meeting old friends, childhood memories."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: нездорова ностальгія, нездатність жити сьогоденням або болісне минуле.",
        "en": "External pressure, friction, or lack of support around you: unhealthy nostalgia, inability to live in the present, or a painful past."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: повернення до минулого, зустріч зі старими друзями, дитячі спогади.",
        "en": "Primary hopes and inner aspiration for the outcome: the Six of Cups is a return to the past, meeting old friends, childhood memories."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: нездорова ностальгія, нездатність жити сьогоденням або болісне минуле.",
        "en": "Underlying fears, apprehension, or anxiety: unhealthy nostalgia, inability to live in the present, or a painful past."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: повернення до минулого, зустріч зі старими друзями, дитячі спогади.",
        "en": "Final outcome and resolution of the matter: the Six of Cups is a return to the past, meeting old friends, childhood memories."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: нездорова ностальгія, нездатність жити сьогоденням або болісне минуле.",
        "en": "Outcome requires further patience and integration: unhealthy nostalgia, inability to live in the present, or a painful past."
      }
    }
  },
  "c07": {
    "1": {
      "upright": {
        "ua": "Великий вибір, ілюзії, мрії, розсіяна увага, небезпека видати бажане за дійсне.",
        "en": "A wide range of choices, illusions, daydreams, scattered focus, the risk of mistaking wishful thinking for reality."
      },
      "reversed": {
        "ua": "Розвіювання ілюзій, чіткий свідомий вибір, реалістичний погляд на ситуацію.",
        "en": "Illusions clearing away, a clear conscious choice, a realistic view of the situation."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: великий вибір, але більшість варіантів — обман чи фантазії.",
        "en": "The obstacle is an external challenge or excess: the Seven of Cups is a wide range of choices, but most options are illusions or fantasies."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: прояснення ілюзій, тверезий погляд на ситуацію або подолання залежності.",
        "en": "Internal friction or resistance: dispelling illusions, a sober look at the situation, or overcoming an addiction."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: великий вибір, але більшість варіантів — обман чи фантазії.",
        "en": "Deep inner drive and subconscious root: the Seven of Cups is a wide range of choices, but most options are illusions or fantasies."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: прояснення ілюзій, тверезий погляд на ситуацію або подолання залежності.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: dispelling illusions, a sober look at the situation, or overcoming an addiction."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: великий вибір, але більшість варіантів — обман чи фантазії.",
        "en": "Past foundation leading to the current moment: the Seven of Cups is a wide range of choices, but most options are illusions or fantasies."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: прояснення ілюзій, тверезий погляд на ситуацію або подолання залежності.",
        "en": "Unresolved past patterns or fading residue: dispelling illusions, a sober look at the situation, or overcoming an addiction."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: великий вибір, але більшість варіантів — обман чи фантазії.",
        "en": "Conscious goals and rational focus: the Seven of Cups is a wide range of choices, but most options are illusions or fantasies."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: прояснення ілюзій, тверезий погляд на ситуацію або подолання залежності.",
        "en": "Mental confusion or conflicting conscious assumptions: dispelling illusions, a sober look at the situation, or overcoming an addiction."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: великий вибір, але більшість варіантів — обман чи фантазії.",
        "en": "Upcoming development and next step: the Seven of Cups is a wide range of choices, but most options are illusions or fantasies."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: прояснення ілюзій, тверезий погляд на ситуацію або подолання залежності.",
        "en": "Temporary slowdown or cautionary phase ahead: dispelling illusions, a sober look at the situation, or overcoming an addiction."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: великий вибір, але більшість варіантів — обман чи фантазії.",
        "en": "Your self-perception and personal stance: the Seven of Cups is a wide range of choices, but most options are illusions or fantasies."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: прояснення ілюзій, тверезий погляд на ситуацію або подолання залежності.",
        "en": "Self-doubt or need to regain inner balance: dispelling illusions, a sober look at the situation, or overcoming an addiction."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: великий вибір, але більшість варіантів — обман чи фантазії.",
        "en": "Outer environment and surrounding circumstances: the Seven of Cups is a wide range of choices, but most options are illusions or fantasies."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: прояснення ілюзій, тверезий погляд на ситуацію або подолання залежності.",
        "en": "External pressure, friction, or lack of support around you: dispelling illusions, a sober look at the situation, or overcoming an addiction."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: великий вибір, але більшість варіантів — обман чи фантазії.",
        "en": "Primary hopes and inner aspiration for the outcome: the Seven of Cups is a wide range of choices, but most options are illusions or fantasies."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: прояснення ілюзій, тверезий погляд на ситуацію або подолання залежності.",
        "en": "Underlying fears, apprehension, or anxiety: dispelling illusions, a sober look at the situation, or overcoming an addiction."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: великий вибір, але більшість варіантів — обман чи фантазії.",
        "en": "Final outcome and resolution of the matter: the Seven of Cups is a wide range of choices, but most options are illusions or fantasies."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: прояснення ілюзій, тверезий погляд на ситуацію або подолання залежності.",
        "en": "Outcome requires further patience and integration: dispelling illusions, a sober look at the situation, or overcoming an addiction."
      }
    }
  },
  "c08": {
    "1": {
      "upright": {
        "ua": "Добровільний відхід, пошук глибшого сенсу, залишення минулого позаду, зміна пріоритетів.",
        "en": "Walking away by choice, seeking deeper meaning, leaving the past behind, shifting priorities."
      },
      "reversed": {
        "ua": "Страх змін, вимушене повернення до старого, чіпляння за звичний комфорт.",
        "en": "Fear of change, being forced back to the old situation, clinging to familiar comfort."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: людина залишає те, що раніше було цінним, і вирушає на пошуки глибшого духовного сенсу.",
        "en": "The obstacle is an external challenge or excess: a person leaves what was once valuable and sets out in search of deeper spiritual meaning."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: нездатність відпустити минуле, страх самотності або поверхневе задоволення замість справжнього пошуку.",
        "en": "Internal friction or resistance: inability to let go of the past, fear of loneliness, or superficial satisfaction instead of a genuine search."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: людина залишає те, що раніше було цінним, і вирушає на пошуки глибшого духовного сенсу.",
        "en": "Deep inner drive and subconscious root: a person leaves what was once valuable and sets out in search of deeper spiritual meaning."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: нездатність відпустити минуле, страх самотності або поверхневе задоволення замість справжнього пошуку.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: inability to let go of the past, fear of loneliness, or superficial satisfaction instead of a genuine search."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: людина залишає те, що раніше було цінним, і вирушає на пошуки глибшого духовного сенсу.",
        "en": "Past foundation leading to the current moment: a person leaves what was once valuable and sets out in search of deeper spiritual meaning."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: нездатність відпустити минуле, страх самотності або поверхневе задоволення замість справжнього пошуку.",
        "en": "Unresolved past patterns or fading residue: inability to let go of the past, fear of loneliness, or superficial satisfaction instead of a genuine search."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: людина залишає те, що раніше було цінним, і вирушає на пошуки глибшого духовного сенсу.",
        "en": "Conscious goals and rational focus: a person leaves what was once valuable and sets out in search of deeper spiritual meaning."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: нездатність відпустити минуле, страх самотності або поверхневе задоволення замість справжнього пошуку.",
        "en": "Mental confusion or conflicting conscious assumptions: inability to let go of the past, fear of loneliness, or superficial satisfaction instead of a genuine search."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: людина залишає те, що раніше було цінним, і вирушає на пошуки глибшого духовного сенсу.",
        "en": "Upcoming development and next step: a person leaves what was once valuable and sets out in search of deeper spiritual meaning."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: нездатність відпустити минуле, страх самотності або поверхневе задоволення замість справжнього пошуку.",
        "en": "Temporary slowdown or cautionary phase ahead: inability to let go of the past, fear of loneliness, or superficial satisfaction instead of a genuine search."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: людина залишає те, що раніше було цінним, і вирушає на пошуки глибшого духовного сенсу.",
        "en": "Your self-perception and personal stance: a person leaves what was once valuable and sets out in search of deeper spiritual meaning."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: нездатність відпустити минуле, страх самотності або поверхневе задоволення замість справжнього пошуку.",
        "en": "Self-doubt or need to regain inner balance: inability to let go of the past, fear of loneliness, or superficial satisfaction instead of a genuine search."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: людина залишає те, що раніше було цінним, і вирушає на пошуки глибшого духовного сенсу.",
        "en": "Outer environment and surrounding circumstances: a person leaves what was once valuable and sets out in search of deeper spiritual meaning."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: нездатність відпустити минуле, страх самотності або поверхневе задоволення замість справжнього пошуку.",
        "en": "External pressure, friction, or lack of support around you: inability to let go of the past, fear of loneliness, or superficial satisfaction instead of a genuine search."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: людина залишає те, що раніше було цінним, і вирушає на пошуки глибшого духовного сенсу.",
        "en": "Primary hopes and inner aspiration for the outcome: a person leaves what was once valuable and sets out in search of deeper spiritual meaning."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: нездатність відпустити минуле, страх самотності або поверхневе задоволення замість справжнього пошуку.",
        "en": "Underlying fears, apprehension, or anxiety: inability to let go of the past, fear of loneliness, or superficial satisfaction instead of a genuine search."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: людина залишає те, що раніше було цінним, і вирушає на пошуки глибшого духовного сенсу.",
        "en": "Final outcome and resolution of the matter: a person leaves what was once valuable and sets out in search of deeper spiritual meaning."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: нездатність відпустити минуле, страх самотності або поверхневе задоволення замість справжнього пошуку.",
        "en": "Outcome requires further patience and integration: inability to let go of the past, fear of loneliness, or superficial satisfaction instead of a genuine search."
      }
    }
  },
  "c09": {
    "1": {
      "upright": {
        "ua": "Задоволення результатами, матеріальний і духовний комфорт, «карта здійснення бажань».",
        "en": "Satisfaction with the results, material and spiritual comfort, the \"wish fulfillment\" card."
      },
      "reversed": {
        "ua": "Надмірне самовдоволення, поверхневі втіхи, жадібність, розчарування від отриманого.",
        "en": "Excessive self-satisfaction, shallow pleasures, greed, disappointment with what you got."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: «карта бажань». Повний комфорт, виконання матеріальних чи емоційних забаганок, гордість за себе. Людина сидить задоволена, всі чаші…",
        "en": "The obstacle is an external challenge or excess: the Nine of Cups is “the wish card.” Complete comfort, fulfillment of material or emotional desires, pride in oneself."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: ненаситність, пошук задоволень без сенсу або матеріалізм, що спустошує душу.",
        "en": "Internal friction or resistance: insatiability, a search for pleasure without meaning, or materialism that empties the soul."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: «карта бажань». Повний комфорт, виконання матеріальних чи емоційних забаганок, гордість за себе. Людина сидить задоволена, всі чаші…",
        "en": "Deep inner drive and subconscious root: the Nine of Cups is “the wish card.” Complete comfort, fulfillment of material or emotional desires, pride in oneself."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: ненаситність, пошук задоволень без сенсу або матеріалізм, що спустошує душу.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: insatiability, a search for pleasure without meaning, or materialism that empties the soul."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: «карта бажань». Повний комфорт, виконання матеріальних чи емоційних забаганок, гордість за себе. Людина сидить задоволена, всі чаші…",
        "en": "Past foundation leading to the current moment: the Nine of Cups is “the wish card.” Complete comfort, fulfillment of material or emotional desires, pride in oneself."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: ненаситність, пошук задоволень без сенсу або матеріалізм, що спустошує душу.",
        "en": "Unresolved past patterns or fading residue: insatiability, a search for pleasure without meaning, or materialism that empties the soul."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: «карта бажань». Повний комфорт, виконання матеріальних чи емоційних забаганок, гордість за себе. Людина сидить задоволена, всі чаші…",
        "en": "Conscious goals and rational focus: the Nine of Cups is “the wish card.” Complete comfort, fulfillment of material or emotional desires, pride in oneself."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: ненаситність, пошук задоволень без сенсу або матеріалізм, що спустошує душу.",
        "en": "Mental confusion or conflicting conscious assumptions: insatiability, a search for pleasure without meaning, or materialism that empties the soul."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: «карта бажань». Повний комфорт, виконання матеріальних чи емоційних забаганок, гордість за себе. Людина сидить задоволена, всі чаші…",
        "en": "Upcoming development and next step: the Nine of Cups is “the wish card.” Complete comfort, fulfillment of material or emotional desires, pride in oneself."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: ненаситність, пошук задоволень без сенсу або матеріалізм, що спустошує душу.",
        "en": "Temporary slowdown or cautionary phase ahead: insatiability, a search for pleasure without meaning, or materialism that empties the soul."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: «карта бажань». Повний комфорт, виконання матеріальних чи емоційних забаганок, гордість за себе. Людина сидить задоволена, всі чаші…",
        "en": "Your self-perception and personal stance: the Nine of Cups is “the wish card.” Complete comfort, fulfillment of material or emotional desires, pride in oneself."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: ненаситність, пошук задоволень без сенсу або матеріалізм, що спустошує душу.",
        "en": "Self-doubt or need to regain inner balance: insatiability, a search for pleasure without meaning, or materialism that empties the soul."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: «карта бажань». Повний комфорт, виконання матеріальних чи емоційних забаганок, гордість за себе. Людина сидить задоволена, всі чаші…",
        "en": "Outer environment and surrounding circumstances: the Nine of Cups is “the wish card.” Complete comfort, fulfillment of material or emotional desires, pride in oneself."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: ненаситність, пошук задоволень без сенсу або матеріалізм, що спустошує душу.",
        "en": "External pressure, friction, or lack of support around you: insatiability, a search for pleasure without meaning, or materialism that empties the soul."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: «карта бажань». Повний комфорт, виконання матеріальних чи емоційних забаганок, гордість за себе. Людина сидить задоволена, всі чаші…",
        "en": "Primary hopes and inner aspiration for the outcome: the Nine of Cups is “the wish card.” Complete comfort, fulfillment of material or emotional desires, pride in oneself."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: ненаситність, пошук задоволень без сенсу або матеріалізм, що спустошує душу.",
        "en": "Underlying fears, apprehension, or anxiety: insatiability, a search for pleasure without meaning, or materialism that empties the soul."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: «карта бажань». Повний комфорт, виконання матеріальних чи емоційних забаганок, гордість за себе. Людина сидить задоволена, всі чаші…",
        "en": "Final outcome and resolution of the matter: the Nine of Cups is “the wish card.” Complete comfort, fulfillment of material or emotional desires, pride in oneself."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: ненаситність, пошук задоволень без сенсу або матеріалізм, що спустошує душу.",
        "en": "Outcome requires further patience and integration: insatiability, a search for pleasure without meaning, or materialism that empties the soul."
      }
    }
  },
  "c10": {
    "1": {
      "upright": {
        "ua": "Сімейне щастя, повна гармонія, емоційне благополуччя, спільні цінності та затишок.",
        "en": "Family happiness, complete harmony, emotional well-being, shared values, and comfort."
      },
      "reversed": {
        "ua": "Сімейні конфлікти, розлад у домі, розрив традицій, удаване щастя на публіку.",
        "en": "Family conflict, discord at home, broken traditions, happiness that's only kept up for show."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: абсолютна гармонія в родині, міцний шлюб, благополуччя, відчуття безпеки та єднання з близькими.",
        "en": "The obstacle is an external challenge or excess: the Ten of Cups is absolute harmony in the family, a strong marriage, well-being, and a sense of security and unity with loved ones."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: руйнація сімейного благополуччя, напруга в стосунках або втрата домашнього затишку.",
        "en": "Internal friction or resistance: being, tension in relationships, or the loss of domestic comfort."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: абсолютна гармонія в родині, міцний шлюб, благополуччя, відчуття безпеки та єднання з близькими.",
        "en": "Deep inner drive and subconscious root: the Ten of Cups is absolute harmony in the family, a strong marriage, well-being, and a sense of security and unity with loved ones."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: руйнація сімейного благополуччя, напруга в стосунках або втрата домашнього затишку.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: being, tension in relationships, or the loss of domestic comfort."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: абсолютна гармонія в родині, міцний шлюб, благополуччя, відчуття безпеки та єднання з близькими.",
        "en": "Past foundation leading to the current moment: the Ten of Cups is absolute harmony in the family, a strong marriage, well-being, and a sense of security and unity with loved ones."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: руйнація сімейного благополуччя, напруга в стосунках або втрата домашнього затишку.",
        "en": "Unresolved past patterns or fading residue: being, tension in relationships, or the loss of domestic comfort."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: абсолютна гармонія в родині, міцний шлюб, благополуччя, відчуття безпеки та єднання з близькими.",
        "en": "Conscious goals and rational focus: the Ten of Cups is absolute harmony in the family, a strong marriage, well-being, and a sense of security and unity with loved ones."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: руйнація сімейного благополуччя, напруга в стосунках або втрата домашнього затишку.",
        "en": "Mental confusion or conflicting conscious assumptions: being, tension in relationships, or the loss of domestic comfort."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: абсолютна гармонія в родині, міцний шлюб, благополуччя, відчуття безпеки та єднання з близькими.",
        "en": "Upcoming development and next step: the Ten of Cups is absolute harmony in the family, a strong marriage, well-being, and a sense of security and unity with loved ones."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: руйнація сімейного благополуччя, напруга в стосунках або втрата домашнього затишку.",
        "en": "Temporary slowdown or cautionary phase ahead: being, tension in relationships, or the loss of domestic comfort."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: абсолютна гармонія в родині, міцний шлюб, благополуччя, відчуття безпеки та єднання з близькими.",
        "en": "Your self-perception and personal stance: the Ten of Cups is absolute harmony in the family, a strong marriage, well-being, and a sense of security and unity with loved ones."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: руйнація сімейного благополуччя, напруга в стосунках або втрата домашнього затишку.",
        "en": "Self-doubt or need to regain inner balance: being, tension in relationships, or the loss of domestic comfort."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: абсолютна гармонія в родині, міцний шлюб, благополуччя, відчуття безпеки та єднання з близькими.",
        "en": "Outer environment and surrounding circumstances: the Ten of Cups is absolute harmony in the family, a strong marriage, well-being, and a sense of security and unity with loved ones."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: руйнація сімейного благополуччя, напруга в стосунках або втрата домашнього затишку.",
        "en": "External pressure, friction, or lack of support around you: being, tension in relationships, or the loss of domestic comfort."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: абсолютна гармонія в родині, міцний шлюб, благополуччя, відчуття безпеки та єднання з близькими.",
        "en": "Primary hopes and inner aspiration for the outcome: the Ten of Cups is absolute harmony in the family, a strong marriage, well-being, and a sense of security and unity with loved ones."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: руйнація сімейного благополуччя, напруга в стосунках або втрата домашнього затишку.",
        "en": "Underlying fears, apprehension, or anxiety: being, tension in relationships, or the loss of domestic comfort."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: абсолютна гармонія в родині, міцний шлюб, благополуччя, відчуття безпеки та єднання з близькими.",
        "en": "Final outcome and resolution of the matter: the Ten of Cups is absolute harmony in the family, a strong marriage, well-being, and a sense of security and unity with loved ones."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: руйнація сімейного благополуччя, напруга в стосунках або втрата домашнього затишку.",
        "en": "Outcome requires further patience and integration: being, tension in relationships, or the loss of domestic comfort."
      }
    }
  },
  "c11": {
    "1": {
      "upright": {
        "ua": "Ніжні почуття, романтичне повідомлення, творче натхнення, чутливість, щира пропозиція.",
        "en": "Tender feelings, a romantic message, creative inspiration, sensitivity, a sincere offer."
      },
      "reversed": {
        "ua": "Емоційна незрілість, капризи, вразливість, розчарування в обіцянках.",
        "en": "Emotional immaturity, moodiness, vulnerability, disappointment over broken promises."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: пропозиція руки та серця, примирення, зародження симпатії, творчий імпульс від чистого серця.",
        "en": "The obstacle is an external challenge or excess: the Page of Cups is a marriage proposal, reconciliation, the birth of affection, and a creative impulse from a pure heart."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: маніпуляції під маскою доброти, незрілість або емоційна нестабільність.",
        "en": "Internal friction or resistance: manipulation under a mask of kindness, immaturity, or emotional instability."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: пропозиція руки та серця, примирення, зародження симпатії, творчий імпульс від чистого серця.",
        "en": "Deep inner drive and subconscious root: the Page of Cups is a marriage proposal, reconciliation, the birth of affection, and a creative impulse from a pure heart."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: маніпуляції під маскою доброти, незрілість або емоційна нестабільність.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: manipulation under a mask of kindness, immaturity, or emotional instability."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: пропозиція руки та серця, примирення, зародження симпатії, творчий імпульс від чистого серця.",
        "en": "Past foundation leading to the current moment: the Page of Cups is a marriage proposal, reconciliation, the birth of affection, and a creative impulse from a pure heart."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: маніпуляції під маскою доброти, незрілість або емоційна нестабільність.",
        "en": "Unresolved past patterns or fading residue: manipulation under a mask of kindness, immaturity, or emotional instability."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: пропозиція руки та серця, примирення, зародження симпатії, творчий імпульс від чистого серця.",
        "en": "Conscious goals and rational focus: the Page of Cups is a marriage proposal, reconciliation, the birth of affection, and a creative impulse from a pure heart."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: маніпуляції під маскою доброти, незрілість або емоційна нестабільність.",
        "en": "Mental confusion or conflicting conscious assumptions: manipulation under a mask of kindness, immaturity, or emotional instability."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: пропозиція руки та серця, примирення, зародження симпатії, творчий імпульс від чистого серця.",
        "en": "Upcoming development and next step: the Page of Cups is a marriage proposal, reconciliation, the birth of affection, and a creative impulse from a pure heart."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: маніпуляції під маскою доброти, незрілість або емоційна нестабільність.",
        "en": "Temporary slowdown or cautionary phase ahead: manipulation under a mask of kindness, immaturity, or emotional instability."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: пропозиція руки та серця, примирення, зародження симпатії, творчий імпульс від чистого серця.",
        "en": "Your self-perception and personal stance: the Page of Cups is a marriage proposal, reconciliation, the birth of affection, and a creative impulse from a pure heart."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: маніпуляції під маскою доброти, незрілість або емоційна нестабільність.",
        "en": "Self-doubt or need to regain inner balance: manipulation under a mask of kindness, immaturity, or emotional instability."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: пропозиція руки та серця, примирення, зародження симпатії, творчий імпульс від чистого серця.",
        "en": "Outer environment and surrounding circumstances: the Page of Cups is a marriage proposal, reconciliation, the birth of affection, and a creative impulse from a pure heart."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: маніпуляції під маскою доброти, незрілість або емоційна нестабільність.",
        "en": "External pressure, friction, or lack of support around you: manipulation under a mask of kindness, immaturity, or emotional instability."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: пропозиція руки та серця, примирення, зародження симпатії, творчий імпульс від чистого серця.",
        "en": "Primary hopes and inner aspiration for the outcome: the Page of Cups is a marriage proposal, reconciliation, the birth of affection, and a creative impulse from a pure heart."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: маніпуляції під маскою доброти, незрілість або емоційна нестабільність.",
        "en": "Underlying fears, apprehension, or anxiety: manipulation under a mask of kindness, immaturity, or emotional instability."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: пропозиція руки та серця, примирення, зародження симпатії, творчий імпульс від чистого серця.",
        "en": "Final outcome and resolution of the matter: the Page of Cups is a marriage proposal, reconciliation, the birth of affection, and a creative impulse from a pure heart."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: маніпуляції під маскою доброти, незрілість або емоційна нестабільність.",
        "en": "Outcome requires further patience and integration: manipulation under a mask of kindness, immaturity, or emotional instability."
      }
    }
  },
  "c12": {
    "1": {
      "upright": {
        "ua": "Романтичний порив, пропозиція від щирого серця, слідування за мрією, дипломатичність.",
        "en": "A romantic impulse, an offer made from the heart, following a dream, diplomacy."
      },
      "reversed": {
        "ua": "Ідеалізація, маніпуляція почуттями, ненадійність, ненадійна чи оманлива людина.",
        "en": "Idealizing someone, emotional manipulation, unreliability, or a deceptive, untrustworthy person."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: приїзд коханої людини, романтичний жест, щира пропозиція.",
        "en": "The obstacle is an external challenge or excess: the Knight of Cups is the arrival of a loved one, a romantic gesture, and a sincere offer."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: занадто ідеалістичний погляд на стосунки, розчарування або нереалізовані мрії.",
        "en": "Internal friction or resistance: an overly idealistic view of relationships, disappointment, or unrealized dreams."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: приїзд коханої людини, романтичний жест, щира пропозиція.",
        "en": "Deep inner drive and subconscious root: the Knight of Cups is the arrival of a loved one, a romantic gesture, and a sincere offer."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: занадто ідеалістичний погляд на стосунки, розчарування або нереалізовані мрії.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: an overly idealistic view of relationships, disappointment, or unrealized dreams."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: приїзд коханої людини, романтичний жест, щира пропозиція.",
        "en": "Past foundation leading to the current moment: the Knight of Cups is the arrival of a loved one, a romantic gesture, and a sincere offer."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: занадто ідеалістичний погляд на стосунки, розчарування або нереалізовані мрії.",
        "en": "Unresolved past patterns or fading residue: an overly idealistic view of relationships, disappointment, or unrealized dreams."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: приїзд коханої людини, романтичний жест, щира пропозиція.",
        "en": "Conscious goals and rational focus: the Knight of Cups is the arrival of a loved one, a romantic gesture, and a sincere offer."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: занадто ідеалістичний погляд на стосунки, розчарування або нереалізовані мрії.",
        "en": "Mental confusion or conflicting conscious assumptions: an overly idealistic view of relationships, disappointment, or unrealized dreams."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: приїзд коханої людини, романтичний жест, щира пропозиція.",
        "en": "Upcoming development and next step: the Knight of Cups is the arrival of a loved one, a romantic gesture, and a sincere offer."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: занадто ідеалістичний погляд на стосунки, розчарування або нереалізовані мрії.",
        "en": "Temporary slowdown or cautionary phase ahead: an overly idealistic view of relationships, disappointment, or unrealized dreams."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: приїзд коханої людини, романтичний жест, щира пропозиція.",
        "en": "Your self-perception and personal stance: the Knight of Cups is the arrival of a loved one, a romantic gesture, and a sincere offer."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: занадто ідеалістичний погляд на стосунки, розчарування або нереалізовані мрії.",
        "en": "Self-doubt or need to regain inner balance: an overly idealistic view of relationships, disappointment, or unrealized dreams."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: приїзд коханої людини, романтичний жест, щира пропозиція.",
        "en": "Outer environment and surrounding circumstances: the Knight of Cups is the arrival of a loved one, a romantic gesture, and a sincere offer."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: занадто ідеалістичний погляд на стосунки, розчарування або нереалізовані мрії.",
        "en": "External pressure, friction, or lack of support around you: an overly idealistic view of relationships, disappointment, or unrealized dreams."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: приїзд коханої людини, романтичний жест, щира пропозиція.",
        "en": "Primary hopes and inner aspiration for the outcome: the Knight of Cups is the arrival of a loved one, a romantic gesture, and a sincere offer."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: занадто ідеалістичний погляд на стосунки, розчарування або нереалізовані мрії.",
        "en": "Underlying fears, apprehension, or anxiety: an overly idealistic view of relationships, disappointment, or unrealized dreams."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: приїзд коханої людини, романтичний жест, щира пропозиція.",
        "en": "Final outcome and resolution of the matter: the Knight of Cups is the arrival of a loved one, a romantic gesture, and a sincere offer."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: занадто ідеалістичний погляд на стосунки, розчарування або нереалізовані мрії.",
        "en": "Outcome requires further patience and integration: an overly idealistic view of relationships, disappointment, or unrealized dreams."
      }
    }
  },
  "c13": {
    "1": {
      "upright": {
        "ua": "Глибока емпатія, турбота, розвинена інтуїція, душевна підтримка, співчуття.",
        "en": "Deep empathy, caring, well-developed intuition, emotional support, compassion."
      },
      "reversed": {
        "ua": "Емоційна нестабільність, образи, занурення в ілюзії, маніпулювання провиною.",
        "en": "Emotional instability, resentment, getting lost in illusions, guilt-tripping others."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: любляча, чуйна жінка з розвиненою інтуїцією.",
        "en": "The obstacle is an external challenge or excess: the Queen of Cups is a loving, sensitive woman with developed intuition."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: надмірна опіка, емоційна залежність або нездатність тверезо мислити.",
        "en": "Internal friction or resistance: overprotection, emotional dependency, or inability to think clearly."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: любляча, чуйна жінка з розвиненою інтуїцією.",
        "en": "Deep inner drive and subconscious root: the Queen of Cups is a loving, sensitive woman with developed intuition."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: надмірна опіка, емоційна залежність або нездатність тверезо мислити.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: overprotection, emotional dependency, or inability to think clearly."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: любляча, чуйна жінка з розвиненою інтуїцією.",
        "en": "Past foundation leading to the current moment: the Queen of Cups is a loving, sensitive woman with developed intuition."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: надмірна опіка, емоційна залежність або нездатність тверезо мислити.",
        "en": "Unresolved past patterns or fading residue: overprotection, emotional dependency, or inability to think clearly."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: любляча, чуйна жінка з розвиненою інтуїцією.",
        "en": "Conscious goals and rational focus: the Queen of Cups is a loving, sensitive woman with developed intuition."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: надмірна опіка, емоційна залежність або нездатність тверезо мислити.",
        "en": "Mental confusion or conflicting conscious assumptions: overprotection, emotional dependency, or inability to think clearly."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: любляча, чуйна жінка з розвиненою інтуїцією.",
        "en": "Upcoming development and next step: the Queen of Cups is a loving, sensitive woman with developed intuition."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: надмірна опіка, емоційна залежність або нездатність тверезо мислити.",
        "en": "Temporary slowdown or cautionary phase ahead: overprotection, emotional dependency, or inability to think clearly."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: любляча, чуйна жінка з розвиненою інтуїцією.",
        "en": "Your self-perception and personal stance: the Queen of Cups is a loving, sensitive woman with developed intuition."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: надмірна опіка, емоційна залежність або нездатність тверезо мислити.",
        "en": "Self-doubt or need to regain inner balance: overprotection, emotional dependency, or inability to think clearly."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: любляча, чуйна жінка з розвиненою інтуїцією.",
        "en": "Outer environment and surrounding circumstances: the Queen of Cups is a loving, sensitive woman with developed intuition."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: надмірна опіка, емоційна залежність або нездатність тверезо мислити.",
        "en": "External pressure, friction, or lack of support around you: overprotection, emotional dependency, or inability to think clearly."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: любляча, чуйна жінка з розвиненою інтуїцією.",
        "en": "Primary hopes and inner aspiration for the outcome: the Queen of Cups is a loving, sensitive woman with developed intuition."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: надмірна опіка, емоційна залежність або нездатність тверезо мислити.",
        "en": "Underlying fears, apprehension, or anxiety: overprotection, emotional dependency, or inability to think clearly."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: любляча, чуйна жінка з розвиненою інтуїцією.",
        "en": "Final outcome and resolution of the matter: the Queen of Cups is a loving, sensitive woman with developed intuition."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: надмірна опіка, емоційна залежність або нездатність тверезо мислити.",
        "en": "Outcome requires further patience and integration: overprotection, emotional dependency, or inability to think clearly."
      }
    }
  },
  "c14": {
    "1": {
      "upright": {
        "ua": "Емоційна зрілість, мудрість, самоконтроль, вміння вислухати й допомогти порадою.",
        "en": "Emotional maturity, wisdom, self-control, the ability to listen and offer good advice."
      },
      "reversed": {
        "ua": "Емоційний холод, прихована агресія, подвійні стандарти, пасивна маніпуляція.",
        "en": "Emotional coldness, hidden aggression, double standards, passive manipulation."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: емоційно зрілий, дипломатичний чоловік.",
        "en": "The obstacle is an external challenge or excess: the King of Cups is an emotionally mature, diplomatic man."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: емоційна нестабільність, маніпуляції або залежна поведінка.",
        "en": "Internal friction or resistance: emotional instability, manipulation, or dependent behavior."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: емоційно зрілий, дипломатичний чоловік.",
        "en": "Deep inner drive and subconscious root: the King of Cups is an emotionally mature, diplomatic man."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: емоційна нестабільність, маніпуляції або залежна поведінка.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: emotional instability, manipulation, or dependent behavior."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: емоційно зрілий, дипломатичний чоловік.",
        "en": "Past foundation leading to the current moment: the King of Cups is an emotionally mature, diplomatic man."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: емоційна нестабільність, маніпуляції або залежна поведінка.",
        "en": "Unresolved past patterns or fading residue: emotional instability, manipulation, or dependent behavior."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: емоційно зрілий, дипломатичний чоловік.",
        "en": "Conscious goals and rational focus: the King of Cups is an emotionally mature, diplomatic man."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: емоційна нестабільність, маніпуляції або залежна поведінка.",
        "en": "Mental confusion or conflicting conscious assumptions: emotional instability, manipulation, or dependent behavior."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: емоційно зрілий, дипломатичний чоловік.",
        "en": "Upcoming development and next step: the King of Cups is an emotionally mature, diplomatic man."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: емоційна нестабільність, маніпуляції або залежна поведінка.",
        "en": "Temporary slowdown or cautionary phase ahead: emotional instability, manipulation, or dependent behavior."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: емоційно зрілий, дипломатичний чоловік.",
        "en": "Your self-perception and personal stance: the King of Cups is an emotionally mature, diplomatic man."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: емоційна нестабільність, маніпуляції або залежна поведінка.",
        "en": "Self-doubt or need to regain inner balance: emotional instability, manipulation, or dependent behavior."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: емоційно зрілий, дипломатичний чоловік.",
        "en": "Outer environment and surrounding circumstances: the King of Cups is an emotionally mature, diplomatic man."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: емоційна нестабільність, маніпуляції або залежна поведінка.",
        "en": "External pressure, friction, or lack of support around you: emotional instability, manipulation, or dependent behavior."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: емоційно зрілий, дипломатичний чоловік.",
        "en": "Primary hopes and inner aspiration for the outcome: the King of Cups is an emotionally mature, diplomatic man."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: емоційна нестабільність, маніпуляції або залежна поведінка.",
        "en": "Underlying fears, apprehension, or anxiety: emotional instability, manipulation, or dependent behavior."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: емоційно зрілий, дипломатичний чоловік.",
        "en": "Final outcome and resolution of the matter: the King of Cups is an emotionally mature, diplomatic man."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: емоційна нестабільність, маніпуляції або залежна поведінка.",
        "en": "Outcome requires further patience and integration: emotional instability, manipulation, or dependent behavior."
      }
    }
  },
  "s01": {
    "1": {
      "upright": {
        "ua": "Абсолютна ясність, інтелектуальний прорив, чесне та рішуче рішення, прорив крізь туман.",
        "en": "Absolute clarity, an intellectual breakthrough, an honest, decisive decision, cutting through the fog."
      },
      "reversed": {
        "ua": "Плутанина, помилкові висновки, гострі конфлікти, зловживання інтелектом чи владою.",
        "en": "Confusion, wrong conclusions, sharp conflicts, misuse of intellect or power."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: інсайт, прийняття жорсткого, але правильного рішення.",
        "en": "The obstacle is an external challenge or excess: the Ace of Swords is insight, making a tough but correct decision."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: жорстокість, несправедливе рішення або нездатність думати ясно.",
        "en": "Internal friction or resistance: cruelty, an unjust decision, or an inability to think clearly."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: інсайт, прийняття жорсткого, але правильного рішення.",
        "en": "Deep inner drive and subconscious root: the Ace of Swords is insight, making a tough but correct decision."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: жорстокість, несправедливе рішення або нездатність думати ясно.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: cruelty, an unjust decision, or an inability to think clearly."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: інсайт, прийняття жорсткого, але правильного рішення.",
        "en": "Past foundation leading to the current moment: the Ace of Swords is insight, making a tough but correct decision."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: жорстокість, несправедливе рішення або нездатність думати ясно.",
        "en": "Unresolved past patterns or fading residue: cruelty, an unjust decision, or an inability to think clearly."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: інсайт, прийняття жорсткого, але правильного рішення.",
        "en": "Conscious goals and rational focus: the Ace of Swords is insight, making a tough but correct decision."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: жорстокість, несправедливе рішення або нездатність думати ясно.",
        "en": "Mental confusion or conflicting conscious assumptions: cruelty, an unjust decision, or an inability to think clearly."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: інсайт, прийняття жорсткого, але правильного рішення.",
        "en": "Upcoming development and next step: the Ace of Swords is insight, making a tough but correct decision."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: жорстокість, несправедливе рішення або нездатність думати ясно.",
        "en": "Temporary slowdown or cautionary phase ahead: cruelty, an unjust decision, or an inability to think clearly."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: інсайт, прийняття жорсткого, але правильного рішення.",
        "en": "Your self-perception and personal stance: the Ace of Swords is insight, making a tough but correct decision."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: жорстокість, несправедливе рішення або нездатність думати ясно.",
        "en": "Self-doubt or need to regain inner balance: cruelty, an unjust decision, or an inability to think clearly."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: інсайт, прийняття жорсткого, але правильного рішення.",
        "en": "Outer environment and surrounding circumstances: the Ace of Swords is insight, making a tough but correct decision."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: жорстокість, несправедливе рішення або нездатність думати ясно.",
        "en": "External pressure, friction, or lack of support around you: cruelty, an unjust decision, or an inability to think clearly."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: інсайт, прийняття жорсткого, але правильного рішення.",
        "en": "Primary hopes and inner aspiration for the outcome: the Ace of Swords is insight, making a tough but correct decision."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: жорстокість, несправедливе рішення або нездатність думати ясно.",
        "en": "Underlying fears, apprehension, or anxiety: cruelty, an unjust decision, or an inability to think clearly."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: інсайт, прийняття жорсткого, але правильного рішення.",
        "en": "Final outcome and resolution of the matter: the Ace of Swords is insight, making a tough but correct decision."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: жорстокість, несправедливе рішення або нездатність думати ясно.",
        "en": "Outcome requires further patience and integration: cruelty, an unjust decision, or an inability to think clearly."
      }
    }
  },
  "s02": {
    "1": {
      "upright": {
        "ua": "Захисна позиція, внутрішній глухий кут, ігнорування фактів, відкладання вибору.",
        "en": "A defensive stance, an inner deadlock, ignoring the facts, putting off a decision."
      },
      "reversed": {
        "ua": "Вимушений вибір, розкриття прихованої інформації, вихід із глухого кута через біль.",
        "en": "A forced choice, hidden information coming to light, breaking the deadlock through pain."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: людина заплющує очі на проблеми.",
        "en": "The obstacle is an external challenge or excess: the Two of Swords is a person closing their eyes to problems."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: вихід із безвиході, готовність поглянути правді у вічі або розкриття обману.",
        "en": "Internal friction or resistance: escaping a deadlock, readiness to face the truth, or the exposure of deception."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: людина заплющує очі на проблеми.",
        "en": "Deep inner drive and subconscious root: the Two of Swords is a person closing their eyes to problems."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: вихід із безвиході, готовність поглянути правді у вічі або розкриття обману.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: escaping a deadlock, readiness to face the truth, or the exposure of deception."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: людина заплющує очі на проблеми.",
        "en": "Past foundation leading to the current moment: the Two of Swords is a person closing their eyes to problems."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: вихід із безвиході, готовність поглянути правді у вічі або розкриття обману.",
        "en": "Unresolved past patterns or fading residue: escaping a deadlock, readiness to face the truth, or the exposure of deception."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: людина заплющує очі на проблеми.",
        "en": "Conscious goals and rational focus: the Two of Swords is a person closing their eyes to problems."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: вихід із безвиході, готовність поглянути правді у вічі або розкриття обману.",
        "en": "Mental confusion or conflicting conscious assumptions: escaping a deadlock, readiness to face the truth, or the exposure of deception."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: людина заплющує очі на проблеми.",
        "en": "Upcoming development and next step: the Two of Swords is a person closing their eyes to problems."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: вихід із безвиході, готовність поглянути правді у вічі або розкриття обману.",
        "en": "Temporary slowdown or cautionary phase ahead: escaping a deadlock, readiness to face the truth, or the exposure of deception."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: людина заплющує очі на проблеми.",
        "en": "Your self-perception and personal stance: the Two of Swords is a person closing their eyes to problems."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: вихід із безвиході, готовність поглянути правді у вічі або розкриття обману.",
        "en": "Self-doubt or need to regain inner balance: escaping a deadlock, readiness to face the truth, or the exposure of deception."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: людина заплющує очі на проблеми.",
        "en": "Outer environment and surrounding circumstances: the Two of Swords is a person closing their eyes to problems."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: вихід із безвиході, готовність поглянути правді у вічі або розкриття обману.",
        "en": "External pressure, friction, or lack of support around you: escaping a deadlock, readiness to face the truth, or the exposure of deception."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: людина заплющує очі на проблеми.",
        "en": "Primary hopes and inner aspiration for the outcome: the Two of Swords is a person closing their eyes to problems."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: вихід із безвиході, готовність поглянути правді у вічі або розкриття обману.",
        "en": "Underlying fears, apprehension, or anxiety: escaping a deadlock, readiness to face the truth, or the exposure of deception."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: людина заплющує очі на проблеми.",
        "en": "Final outcome and resolution of the matter: the Two of Swords is a person closing their eyes to problems."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: вихід із безвиході, готовність поглянути правді у вічі або розкриття обману.",
        "en": "Outcome requires further patience and integration: escaping a deadlock, readiness to face the truth, or the exposure of deception."
      }
    }
  },
  "s03": {
    "1": {
      "upright": {
        "ua": "Болісне усвідомлення, розчарування, розрив, розбите серце, конфлікт між розумом і почуттями.",
        "en": "A painful realization, disappointment, a breakup, heartbreak, a conflict between reason and feeling."
      },
      "reversed": {
        "ua": "Процес зцілення, зняття болю, примирення після важкого періоду, вибачення.",
        "en": "The healing process underway, pain easing, reconciliation after a hard time, forgiveness."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: горе, душевна рана, розчарування в коханні або дружбі.",
        "en": "The obstacle is an external challenge or excess: the Three of Swords is grief, a soul wound, disappointment in love or friendship."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: прийняття болю, початок зцілення або вихід із горя.",
        "en": "Internal friction or resistance: acceptance of pain, the beginning of healing, or emerging from grief."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: горе, душевна рана, розчарування в коханні або дружбі.",
        "en": "Deep inner drive and subconscious root: the Three of Swords is grief, a soul wound, disappointment in love or friendship."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: прийняття болю, початок зцілення або вихід із горя.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: acceptance of pain, the beginning of healing, or emerging from grief."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: горе, душевна рана, розчарування в коханні або дружбі.",
        "en": "Past foundation leading to the current moment: the Three of Swords is grief, a soul wound, disappointment in love or friendship."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: прийняття болю, початок зцілення або вихід із горя.",
        "en": "Unresolved past patterns or fading residue: acceptance of pain, the beginning of healing, or emerging from grief."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: горе, душевна рана, розчарування в коханні або дружбі.",
        "en": "Conscious goals and rational focus: the Three of Swords is grief, a soul wound, disappointment in love or friendship."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: прийняття болю, початок зцілення або вихід із горя.",
        "en": "Mental confusion or conflicting conscious assumptions: acceptance of pain, the beginning of healing, or emerging from grief."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: горе, душевна рана, розчарування в коханні або дружбі.",
        "en": "Upcoming development and next step: the Three of Swords is grief, a soul wound, disappointment in love or friendship."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: прийняття болю, початок зцілення або вихід із горя.",
        "en": "Temporary slowdown or cautionary phase ahead: acceptance of pain, the beginning of healing, or emerging from grief."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: горе, душевна рана, розчарування в коханні або дружбі.",
        "en": "Your self-perception and personal stance: the Three of Swords is grief, a soul wound, disappointment in love or friendship."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: прийняття болю, початок зцілення або вихід із горя.",
        "en": "Self-doubt or need to regain inner balance: acceptance of pain, the beginning of healing, or emerging from grief."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: горе, душевна рана, розчарування в коханні або дружбі.",
        "en": "Outer environment and surrounding circumstances: the Three of Swords is grief, a soul wound, disappointment in love or friendship."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: прийняття болю, початок зцілення або вихід із горя.",
        "en": "External pressure, friction, or lack of support around you: acceptance of pain, the beginning of healing, or emerging from grief."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: горе, душевна рана, розчарування в коханні або дружбі.",
        "en": "Primary hopes and inner aspiration for the outcome: the Three of Swords is grief, a soul wound, disappointment in love or friendship."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: прийняття болю, початок зцілення або вихід із горя.",
        "en": "Underlying fears, apprehension, or anxiety: acceptance of pain, the beginning of healing, or emerging from grief."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: горе, душевна рана, розчарування в коханні або дружбі.",
        "en": "Final outcome and resolution of the matter: the Three of Swords is grief, a soul wound, disappointment in love or friendship."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: прийняття болю, початок зцілення або вихід із горя.",
        "en": "Outcome requires further patience and integration: acceptance of pain, the beginning of healing, or emerging from grief."
      }
    }
  },
  "s04": {
    "1": {
      "upright": {
        "ua": "Вимушена пауза, відновлення сил, медитація, час для роздумів, відхід від справ.",
        "en": "A forced pause, recovering your strength, meditation, time to reflect, stepping back from things."
      },
      "reversed": {
        "ua": "Повернення до активності, вихід із ізоляції, виснаження через відсутність відпочинку.",
        "en": "Returning to activity, coming out of isolation, exhaustion from a lack of rest."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: тимчасова пауза, відпустка, госпіталізація або медитація.",
        "en": "The obstacle is an external challenge or excess: the Four of Swords is a temporary pause, vacation, hospitalization, or meditation."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: нездатність відпочити, надмірна активність або кризовий стан через виснаження.",
        "en": "Internal friction or resistance: inability to rest, excessive activity, or a crisis due to exhaustion."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: тимчасова пауза, відпустка, госпіталізація або медитація.",
        "en": "Deep inner drive and subconscious root: the Four of Swords is a temporary pause, vacation, hospitalization, or meditation."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: нездатність відпочити, надмірна активність або кризовий стан через виснаження.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: inability to rest, excessive activity, or a crisis due to exhaustion."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: тимчасова пауза, відпустка, госпіталізація або медитація.",
        "en": "Past foundation leading to the current moment: the Four of Swords is a temporary pause, vacation, hospitalization, or meditation."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: нездатність відпочити, надмірна активність або кризовий стан через виснаження.",
        "en": "Unresolved past patterns or fading residue: inability to rest, excessive activity, or a crisis due to exhaustion."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: тимчасова пауза, відпустка, госпіталізація або медитація.",
        "en": "Conscious goals and rational focus: the Four of Swords is a temporary pause, vacation, hospitalization, or meditation."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: нездатність відпочити, надмірна активність або кризовий стан через виснаження.",
        "en": "Mental confusion or conflicting conscious assumptions: inability to rest, excessive activity, or a crisis due to exhaustion."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: тимчасова пауза, відпустка, госпіталізація або медитація.",
        "en": "Upcoming development and next step: the Four of Swords is a temporary pause, vacation, hospitalization, or meditation."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: нездатність відпочити, надмірна активність або кризовий стан через виснаження.",
        "en": "Temporary slowdown or cautionary phase ahead: inability to rest, excessive activity, or a crisis due to exhaustion."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: тимчасова пауза, відпустка, госпіталізація або медитація.",
        "en": "Your self-perception and personal stance: the Four of Swords is a temporary pause, vacation, hospitalization, or meditation."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: нездатність відпочити, надмірна активність або кризовий стан через виснаження.",
        "en": "Self-doubt or need to regain inner balance: inability to rest, excessive activity, or a crisis due to exhaustion."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: тимчасова пауза, відпустка, госпіталізація або медитація.",
        "en": "Outer environment and surrounding circumstances: the Four of Swords is a temporary pause, vacation, hospitalization, or meditation."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: нездатність відпочити, надмірна активність або кризовий стан через виснаження.",
        "en": "External pressure, friction, or lack of support around you: inability to rest, excessive activity, or a crisis due to exhaustion."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: тимчасова пауза, відпустка, госпіталізація або медитація.",
        "en": "Primary hopes and inner aspiration for the outcome: the Four of Swords is a temporary pause, vacation, hospitalization, or meditation."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: нездатність відпочити, надмірна активність або кризовий стан через виснаження.",
        "en": "Underlying fears, apprehension, or anxiety: inability to rest, excessive activity, or a crisis due to exhaustion."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: тимчасова пауза, відпустка, госпіталізація або медитація.",
        "en": "Final outcome and resolution of the matter: the Four of Swords is a temporary pause, vacation, hospitalization, or meditation."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: нездатність відпочити, надмірна активність або кризовий стан через виснаження.",
        "en": "Outcome requires further patience and integration: inability to rest, excessive activity, or a crisis due to exhaustion."
      }
    }
  },
  "s05": {
    "1": {
      "upright": {
        "ua": "Конфлікт, «піррова перемога», нечесна гра, відчуття зради, руйнівні суперечки.",
        "en": "Conflict, a \"pyrrhic victory,\" unfair play, a feeling of betrayal, destructive arguments."
      },
      "reversed": {
        "ua": "Бажання припинити ворожнечу, мінімізація втрат, усвідомлення безглуздості конфлікту.",
        "en": "A wish to end the hostility, cutting your losses, realizing the conflict was pointless."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: важкий конфлікт. Ви можете перемогти, але ціна буде занадто високою (втрата стосунків, репутації). Карта перемоги, яка відчувається як…",
        "en": "The obstacle is an external challenge or excess: the Five of Swords is a difficult conflict."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: вихід із деструктивного конфлікту, примирення або уникнення безглуздого протистояння.",
        "en": "Internal friction or resistance: escaping a destructive conflict, reconciliation, or avoiding a senseless confrontation."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: важкий конфлікт. Ви можете перемогти, але ціна буде занадто високою (втрата стосунків, репутації). Карта перемоги, яка відчувається як…",
        "en": "Deep inner drive and subconscious root: the Five of Swords is a difficult conflict."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: вихід із деструктивного конфлікту, примирення або уникнення безглуздого протистояння.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: escaping a destructive conflict, reconciliation, or avoiding a senseless confrontation."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: важкий конфлікт. Ви можете перемогти, але ціна буде занадто високою (втрата стосунків, репутації). Карта перемоги, яка відчувається як…",
        "en": "Past foundation leading to the current moment: the Five of Swords is a difficult conflict."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: вихід із деструктивного конфлікту, примирення або уникнення безглуздого протистояння.",
        "en": "Unresolved past patterns or fading residue: escaping a destructive conflict, reconciliation, or avoiding a senseless confrontation."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: важкий конфлікт. Ви можете перемогти, але ціна буде занадто високою (втрата стосунків, репутації). Карта перемоги, яка відчувається як…",
        "en": "Conscious goals and rational focus: the Five of Swords is a difficult conflict."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: вихід із деструктивного конфлікту, примирення або уникнення безглуздого протистояння.",
        "en": "Mental confusion or conflicting conscious assumptions: escaping a destructive conflict, reconciliation, or avoiding a senseless confrontation."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: важкий конфлікт. Ви можете перемогти, але ціна буде занадто високою (втрата стосунків, репутації). Карта перемоги, яка відчувається як…",
        "en": "Upcoming development and next step: the Five of Swords is a difficult conflict."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: вихід із деструктивного конфлікту, примирення або уникнення безглуздого протистояння.",
        "en": "Temporary slowdown or cautionary phase ahead: escaping a destructive conflict, reconciliation, or avoiding a senseless confrontation."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: важкий конфлікт. Ви можете перемогти, але ціна буде занадто високою (втрата стосунків, репутації). Карта перемоги, яка відчувається як…",
        "en": "Your self-perception and personal stance: the Five of Swords is a difficult conflict."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: вихід із деструктивного конфлікту, примирення або уникнення безглуздого протистояння.",
        "en": "Self-doubt or need to regain inner balance: escaping a destructive conflict, reconciliation, or avoiding a senseless confrontation."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: важкий конфлікт. Ви можете перемогти, але ціна буде занадто високою (втрата стосунків, репутації). Карта перемоги, яка відчувається як…",
        "en": "Outer environment and surrounding circumstances: the Five of Swords is a difficult conflict."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: вихід із деструктивного конфлікту, примирення або уникнення безглуздого протистояння.",
        "en": "External pressure, friction, or lack of support around you: escaping a destructive conflict, reconciliation, or avoiding a senseless confrontation."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: важкий конфлікт. Ви можете перемогти, але ціна буде занадто високою (втрата стосунків, репутації). Карта перемоги, яка відчувається як…",
        "en": "Primary hopes and inner aspiration for the outcome: the Five of Swords is a difficult conflict."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: вихід із деструктивного конфлікту, примирення або уникнення безглуздого протистояння.",
        "en": "Underlying fears, apprehension, or anxiety: escaping a destructive conflict, reconciliation, or avoiding a senseless confrontation."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: важкий конфлікт. Ви можете перемогти, але ціна буде занадто високою (втрата стосунків, репутації). Карта перемоги, яка відчувається як…",
        "en": "Final outcome and resolution of the matter: the Five of Swords is a difficult conflict."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: вихід із деструктивного конфлікту, примирення або уникнення безглуздого протистояння.",
        "en": "Outcome requires further patience and integration: escaping a destructive conflict, reconciliation, or avoiding a senseless confrontation."
      }
    }
  },
  "s06": {
    "1": {
      "upright": {
        "ua": "Перехід у спокійніші води, залишене позаду важке минуле, поїздка, поступове покращення.",
        "en": "Moving into calmer waters, leaving a difficult past behind, a journey, gradual improvement."
      },
      "reversed": {
        "ua": "Неможливість втекти від проблем, затримки в дорозі, повернення старих труднощів.",
        "en": "Being unable to escape your problems, delays along the way, old difficulties resurfacing."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: рух до кращих часів.",
        "en": "The obstacle is an external challenge or excess: the Six of Swords is moving toward better times."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: нездатність вирватися з важкої ситуації або повторення старих помилок.",
        "en": "Internal friction or resistance: inability to break free from a difficult situation or the repetition of old mistakes."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: рух до кращих часів.",
        "en": "Deep inner drive and subconscious root: the Six of Swords is moving toward better times."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: нездатність вирватися з важкої ситуації або повторення старих помилок.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: inability to break free from a difficult situation or the repetition of old mistakes."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: рух до кращих часів.",
        "en": "Past foundation leading to the current moment: the Six of Swords is moving toward better times."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: нездатність вирватися з важкої ситуації або повторення старих помилок.",
        "en": "Unresolved past patterns or fading residue: inability to break free from a difficult situation or the repetition of old mistakes."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: рух до кращих часів.",
        "en": "Conscious goals and rational focus: the Six of Swords is moving toward better times."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: нездатність вирватися з важкої ситуації або повторення старих помилок.",
        "en": "Mental confusion or conflicting conscious assumptions: inability to break free from a difficult situation or the repetition of old mistakes."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: рух до кращих часів.",
        "en": "Upcoming development and next step: the Six of Swords is moving toward better times."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: нездатність вирватися з важкої ситуації або повторення старих помилок.",
        "en": "Temporary slowdown or cautionary phase ahead: inability to break free from a difficult situation or the repetition of old mistakes."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: рух до кращих часів.",
        "en": "Your self-perception and personal stance: the Six of Swords is moving toward better times."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: нездатність вирватися з важкої ситуації або повторення старих помилок.",
        "en": "Self-doubt or need to regain inner balance: inability to break free from a difficult situation or the repetition of old mistakes."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: рух до кращих часів.",
        "en": "Outer environment and surrounding circumstances: the Six of Swords is moving toward better times."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: нездатність вирватися з важкої ситуації або повторення старих помилок.",
        "en": "External pressure, friction, or lack of support around you: inability to break free from a difficult situation or the repetition of old mistakes."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: рух до кращих часів.",
        "en": "Primary hopes and inner aspiration for the outcome: the Six of Swords is moving toward better times."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: нездатність вирватися з важкої ситуації або повторення старих помилок.",
        "en": "Underlying fears, apprehension, or anxiety: inability to break free from a difficult situation or the repetition of old mistakes."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: рух до кращих часів.",
        "en": "Final outcome and resolution of the matter: the Six of Swords is moving toward better times."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: нездатність вирватися з важкої ситуації або повторення старих помилок.",
        "en": "Outcome requires further patience and integration: inability to break free from a difficult situation or the repetition of old mistakes."
      }
    }
  },
  "s07": {
    "1": {
      "upright": {
        "ua": "Хитрість, обхідні шляхи, таємні дії, маніпуляції, стратегічний розрахунок або приховування.",
        "en": "Cunning, workarounds, secretive actions, manipulation, strategic calculation, or concealment."
      },
      "reversed": {
        "ua": "Викриття обману, повернення боргу, визнання помилок, невдала авантюра.",
        "en": "Deception being exposed, a debt repaid, admitting mistakes, a failed scheme."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: обхідні шляхи, шпигунство, крадіжка (інформації чи речей).",
        "en": "The obstacle is an external challenge or excess: the Seven of Swords is detours, spying, theft (of information or objects)."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: викриття обману, повернення вкраденого або відмова від нечесної тактики.",
        "en": "Internal friction or resistance: exposure of deception, the return of something stolen, or abandonment of dishonest tactics."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: обхідні шляхи, шпигунство, крадіжка (інформації чи речей).",
        "en": "Deep inner drive and subconscious root: the Seven of Swords is detours, spying, theft (of information or objects)."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: викриття обману, повернення вкраденого або відмова від нечесної тактики.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: exposure of deception, the return of something stolen, or abandonment of dishonest tactics."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: обхідні шляхи, шпигунство, крадіжка (інформації чи речей).",
        "en": "Past foundation leading to the current moment: the Seven of Swords is detours, spying, theft (of information or objects)."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: викриття обману, повернення вкраденого або відмова від нечесної тактики.",
        "en": "Unresolved past patterns or fading residue: exposure of deception, the return of something stolen, or abandonment of dishonest tactics."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: обхідні шляхи, шпигунство, крадіжка (інформації чи речей).",
        "en": "Conscious goals and rational focus: the Seven of Swords is detours, spying, theft (of information or objects)."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: викриття обману, повернення вкраденого або відмова від нечесної тактики.",
        "en": "Mental confusion or conflicting conscious assumptions: exposure of deception, the return of something stolen, or abandonment of dishonest tactics."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: обхідні шляхи, шпигунство, крадіжка (інформації чи речей).",
        "en": "Upcoming development and next step: the Seven of Swords is detours, spying, theft (of information or objects)."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: викриття обману, повернення вкраденого або відмова від нечесної тактики.",
        "en": "Temporary slowdown or cautionary phase ahead: exposure of deception, the return of something stolen, or abandonment of dishonest tactics."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: обхідні шляхи, шпигунство, крадіжка (інформації чи речей).",
        "en": "Your self-perception and personal stance: the Seven of Swords is detours, spying, theft (of information or objects)."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: викриття обману, повернення вкраденого або відмова від нечесної тактики.",
        "en": "Self-doubt or need to regain inner balance: exposure of deception, the return of something stolen, or abandonment of dishonest tactics."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: обхідні шляхи, шпигунство, крадіжка (інформації чи речей).",
        "en": "Outer environment and surrounding circumstances: the Seven of Swords is detours, spying, theft (of information or objects)."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: викриття обману, повернення вкраденого або відмова від нечесної тактики.",
        "en": "External pressure, friction, or lack of support around you: exposure of deception, the return of something stolen, or abandonment of dishonest tactics."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: обхідні шляхи, шпигунство, крадіжка (інформації чи речей).",
        "en": "Primary hopes and inner aspiration for the outcome: the Seven of Swords is detours, spying, theft (of information or objects)."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: викриття обману, повернення вкраденого або відмова від нечесної тактики.",
        "en": "Underlying fears, apprehension, or anxiety: exposure of deception, the return of something stolen, or abandonment of dishonest tactics."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: обхідні шляхи, шпигунство, крадіжка (інформації чи речей).",
        "en": "Final outcome and resolution of the matter: the Seven of Swords is detours, spying, theft (of information or objects)."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: викриття обману, повернення вкраденого або відмова від нечесної тактики.",
        "en": "Outcome requires further patience and integration: exposure of deception, the return of something stolen, or abandonment of dishonest tactics."
      }
    }
  },
  "s08": {
    "1": {
      "upright": {
        "ua": "Відчуття пастки, обмеження, страхи, загнаність у кут власними думками, безпорадність.",
        "en": "Feeling trapped, restrictions, fears, being cornered by your own thoughts, helplessness."
      },
      "reversed": {
        "ua": "Звільнення від обмежень, вихід з-під чужого впливу, подолання внутрішніх блоків.",
        "en": "Breaking free from restrictions, escaping someone else's influence, overcoming inner blocks."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: людина зв’язана по руках і ногах, але ці обмеження — лише в її голові.",
        "en": "The obstacle is an external challenge or excess: the Eight of Swords is a person bound hand and foot, but these limitations exist only in their mind."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: усвідомлення своєї сили, звільнення від внутрішніх обмежень або вихід із пастки.",
        "en": "Internal friction or resistance: awareness of one’s strength, liberation from inner limitations, or escaping a trap."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: людина зв’язана по руках і ногах, але ці обмеження — лише в її голові.",
        "en": "Deep inner drive and subconscious root: the Eight of Swords is a person bound hand and foot, but these limitations exist only in their mind."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: усвідомлення своєї сили, звільнення від внутрішніх обмежень або вихід із пастки.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: awareness of one’s strength, liberation from inner limitations, or escaping a trap."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: людина зв’язана по руках і ногах, але ці обмеження — лише в її голові.",
        "en": "Past foundation leading to the current moment: the Eight of Swords is a person bound hand and foot, but these limitations exist only in their mind."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: усвідомлення своєї сили, звільнення від внутрішніх обмежень або вихід із пастки.",
        "en": "Unresolved past patterns or fading residue: awareness of one’s strength, liberation from inner limitations, or escaping a trap."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: людина зв’язана по руках і ногах, але ці обмеження — лише в її голові.",
        "en": "Conscious goals and rational focus: the Eight of Swords is a person bound hand and foot, but these limitations exist only in their mind."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: усвідомлення своєї сили, звільнення від внутрішніх обмежень або вихід із пастки.",
        "en": "Mental confusion or conflicting conscious assumptions: awareness of one’s strength, liberation from inner limitations, or escaping a trap."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: людина зв’язана по руках і ногах, але ці обмеження — лише в її голові.",
        "en": "Upcoming development and next step: the Eight of Swords is a person bound hand and foot, but these limitations exist only in their mind."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: усвідомлення своєї сили, звільнення від внутрішніх обмежень або вихід із пастки.",
        "en": "Temporary slowdown or cautionary phase ahead: awareness of one’s strength, liberation from inner limitations, or escaping a trap."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: людина зв’язана по руках і ногах, але ці обмеження — лише в її голові.",
        "en": "Your self-perception and personal stance: the Eight of Swords is a person bound hand and foot, but these limitations exist only in their mind."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: усвідомлення своєї сили, звільнення від внутрішніх обмежень або вихід із пастки.",
        "en": "Self-doubt or need to regain inner balance: awareness of one’s strength, liberation from inner limitations, or escaping a trap."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: людина зв’язана по руках і ногах, але ці обмеження — лише в її голові.",
        "en": "Outer environment and surrounding circumstances: the Eight of Swords is a person bound hand and foot, but these limitations exist only in their mind."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: усвідомлення своєї сили, звільнення від внутрішніх обмежень або вихід із пастки.",
        "en": "External pressure, friction, or lack of support around you: awareness of one’s strength, liberation from inner limitations, or escaping a trap."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: людина зв’язана по руках і ногах, але ці обмеження — лише в її голові.",
        "en": "Primary hopes and inner aspiration for the outcome: the Eight of Swords is a person bound hand and foot, but these limitations exist only in their mind."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: усвідомлення своєї сили, звільнення від внутрішніх обмежень або вихід із пастки.",
        "en": "Underlying fears, apprehension, or anxiety: awareness of one’s strength, liberation from inner limitations, or escaping a trap."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: людина зв’язана по руках і ногах, але ці обмеження — лише в її голові.",
        "en": "Final outcome and resolution of the matter: the Eight of Swords is a person bound hand and foot, but these limitations exist only in their mind."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: усвідомлення своєї сили, звільнення від внутрішніх обмежень або вихід із пастки.",
        "en": "Outcome requires further patience and integration: awareness of one’s strength, liberation from inner limitations, or escaping a trap."
      }
    }
  },
  "s09": {
    "1": {
      "upright": {
        "ua": "Нічні тривоги, безсоння, тривожність, провина, перебільшення масштабів проблеми.",
        "en": "Late-night worry, insomnia, anxiety, guilt, blowing a problem out of proportion."
      },
      "reversed": {
        "ua": "Повернення спокою, завершення періоду страхів, вихід з важкого психологічного стану.",
        "en": "Peace of mind returning, a period of fear coming to an end, emerging from a difficult mental state."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: сильні переживання, панічні атаки, почуття провини.",
        "en": "The obstacle is an external challenge or excess: the Nine of Swords is intense anxiety, panic attacks, and feelings of guilt."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: поступове подолання тривоги, робота з психологом або вихід із нічного кошмару.",
        "en": "Internal friction or resistance: gradually overcoming anxiety, working with a psychologist, or escaping a nightmare."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: сильні переживання, панічні атаки, почуття провини.",
        "en": "Deep inner drive and subconscious root: the Nine of Swords is intense anxiety, panic attacks, and feelings of guilt."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: поступове подолання тривоги, робота з психологом або вихід із нічного кошмару.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: gradually overcoming anxiety, working with a psychologist, or escaping a nightmare."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: сильні переживання, панічні атаки, почуття провини.",
        "en": "Past foundation leading to the current moment: the Nine of Swords is intense anxiety, panic attacks, and feelings of guilt."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: поступове подолання тривоги, робота з психологом або вихід із нічного кошмару.",
        "en": "Unresolved past patterns or fading residue: gradually overcoming anxiety, working with a psychologist, or escaping a nightmare."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: сильні переживання, панічні атаки, почуття провини.",
        "en": "Conscious goals and rational focus: the Nine of Swords is intense anxiety, panic attacks, and feelings of guilt."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: поступове подолання тривоги, робота з психологом або вихід із нічного кошмару.",
        "en": "Mental confusion or conflicting conscious assumptions: gradually overcoming anxiety, working with a psychologist, or escaping a nightmare."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: сильні переживання, панічні атаки, почуття провини.",
        "en": "Upcoming development and next step: the Nine of Swords is intense anxiety, panic attacks, and feelings of guilt."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: поступове подолання тривоги, робота з психологом або вихід із нічного кошмару.",
        "en": "Temporary slowdown or cautionary phase ahead: gradually overcoming anxiety, working with a psychologist, or escaping a nightmare."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: сильні переживання, панічні атаки, почуття провини.",
        "en": "Your self-perception and personal stance: the Nine of Swords is intense anxiety, panic attacks, and feelings of guilt."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: поступове подолання тривоги, робота з психологом або вихід із нічного кошмару.",
        "en": "Self-doubt or need to regain inner balance: gradually overcoming anxiety, working with a psychologist, or escaping a nightmare."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: сильні переживання, панічні атаки, почуття провини.",
        "en": "Outer environment and surrounding circumstances: the Nine of Swords is intense anxiety, panic attacks, and feelings of guilt."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: поступове подолання тривоги, робота з психологом або вихід із нічного кошмару.",
        "en": "External pressure, friction, or lack of support around you: gradually overcoming anxiety, working with a psychologist, or escaping a nightmare."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: сильні переживання, панічні атаки, почуття провини.",
        "en": "Primary hopes and inner aspiration for the outcome: the Nine of Swords is intense anxiety, panic attacks, and feelings of guilt."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: поступове подолання тривоги, робота з психологом або вихід із нічного кошмару.",
        "en": "Underlying fears, apprehension, or anxiety: gradually overcoming anxiety, working with a psychologist, or escaping a nightmare."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: сильні переживання, панічні атаки, почуття провини.",
        "en": "Final outcome and resolution of the matter: the Nine of Swords is intense anxiety, panic attacks, and feelings of guilt."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: поступове подолання тривоги, робота з психологом або вихід із нічного кошмару.",
        "en": "Outcome requires further patience and integration: gradually overcoming anxiety, working with a psychologist, or escaping a nightmare."
      }
    }
  },
  "s10": {
    "1": {
      "upright": {
        "ua": "Остаточний фінал, досягнення дна, болісна крапка, але й кінець важкого періоду.",
        "en": "A definitive ending, hitting rock bottom, a painful conclusion — but also the end of a hard chapter."
      },
      "reversed": {
        "ua": "Відродження після катастрофи, поступове одужання, уникнення найгіршого сценарію.",
        "en": "Recovery after a disaster, gradual healing, avoiding the worst-case scenario."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: остаточне завершення важкого етапу.",
        "en": "The obstacle is an external challenge or excess: the Ten of Swords is the final conclusion of a difficult phase."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: прийняття неминучого кінця, початок відновлення або вихід із найглибшої кризи.",
        "en": "Internal friction or resistance: accepting an inevitable end, the start of recovery, or emerging from the deepest crisis."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: остаточне завершення важкого етапу.",
        "en": "Deep inner drive and subconscious root: the Ten of Swords is the final conclusion of a difficult phase."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: прийняття неминучого кінця, початок відновлення або вихід із найглибшої кризи.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: accepting an inevitable end, the start of recovery, or emerging from the deepest crisis."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: остаточне завершення важкого етапу.",
        "en": "Past foundation leading to the current moment: the Ten of Swords is the final conclusion of a difficult phase."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: прийняття неминучого кінця, початок відновлення або вихід із найглибшої кризи.",
        "en": "Unresolved past patterns or fading residue: accepting an inevitable end, the start of recovery, or emerging from the deepest crisis."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: остаточне завершення важкого етапу.",
        "en": "Conscious goals and rational focus: the Ten of Swords is the final conclusion of a difficult phase."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: прийняття неминучого кінця, початок відновлення або вихід із найглибшої кризи.",
        "en": "Mental confusion or conflicting conscious assumptions: accepting an inevitable end, the start of recovery, or emerging from the deepest crisis."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: остаточне завершення важкого етапу.",
        "en": "Upcoming development and next step: the Ten of Swords is the final conclusion of a difficult phase."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: прийняття неминучого кінця, початок відновлення або вихід із найглибшої кризи.",
        "en": "Temporary slowdown or cautionary phase ahead: accepting an inevitable end, the start of recovery, or emerging from the deepest crisis."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: остаточне завершення важкого етапу.",
        "en": "Your self-perception and personal stance: the Ten of Swords is the final conclusion of a difficult phase."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: прийняття неминучого кінця, початок відновлення або вихід із найглибшої кризи.",
        "en": "Self-doubt or need to regain inner balance: accepting an inevitable end, the start of recovery, or emerging from the deepest crisis."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: остаточне завершення важкого етапу.",
        "en": "Outer environment and surrounding circumstances: the Ten of Swords is the final conclusion of a difficult phase."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: прийняття неминучого кінця, початок відновлення або вихід із найглибшої кризи.",
        "en": "External pressure, friction, or lack of support around you: accepting an inevitable end, the start of recovery, or emerging from the deepest crisis."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: остаточне завершення важкого етапу.",
        "en": "Primary hopes and inner aspiration for the outcome: the Ten of Swords is the final conclusion of a difficult phase."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: прийняття неминучого кінця, початок відновлення або вихід із найглибшої кризи.",
        "en": "Underlying fears, apprehension, or anxiety: accepting an inevitable end, the start of recovery, or emerging from the deepest crisis."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: остаточне завершення важкого етапу.",
        "en": "Final outcome and resolution of the matter: the Ten of Swords is the final conclusion of a difficult phase."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: прийняття неминучого кінця, початок відновлення або вихід із найглибшої кризи.",
        "en": "Outcome requires further patience and integration: accepting an inevitable end, the start of recovery, or emerging from the deepest crisis."
      }
    }
  },
  "s11": {
    "1": {
      "upright": {
        "ua": "Збір інформації, спостереження, критичний аналіз, гострий розум, але брак досвіду.",
        "en": "Gathering information, observation, critical analysis, a sharp mind, but limited experience."
      },
      "reversed": {
        "ua": "Плітки, шпигунство, дріб'язкові суперечки, невзаємні претензії або брак фактів.",
        "en": "Gossip, spying, petty arguments, one-sided grievances, or a lack of facts."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: інтелектуальна допитливість, збір пліток чи фактів, дрібні суперечки.",
        "en": "The obstacle is an external challenge or excess: the Page of Swords is intellectual curiosity, gathering gossip or facts, and minor disputes."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: жорстка критика, поверхневе мислення або розповсюдження чуток.",
        "en": "Internal friction or resistance: harsh criticism, superficial thinking, or spreading rumors."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: інтелектуальна допитливість, збір пліток чи фактів, дрібні суперечки.",
        "en": "Deep inner drive and subconscious root: the Page of Swords is intellectual curiosity, gathering gossip or facts, and minor disputes."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: жорстка критика, поверхневе мислення або розповсюдження чуток.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: harsh criticism, superficial thinking, or spreading rumors."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: інтелектуальна допитливість, збір пліток чи фактів, дрібні суперечки.",
        "en": "Past foundation leading to the current moment: the Page of Swords is intellectual curiosity, gathering gossip or facts, and minor disputes."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: жорстка критика, поверхневе мислення або розповсюдження чуток.",
        "en": "Unresolved past patterns or fading residue: harsh criticism, superficial thinking, or spreading rumors."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: інтелектуальна допитливість, збір пліток чи фактів, дрібні суперечки.",
        "en": "Conscious goals and rational focus: the Page of Swords is intellectual curiosity, gathering gossip or facts, and minor disputes."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: жорстка критика, поверхневе мислення або розповсюдження чуток.",
        "en": "Mental confusion or conflicting conscious assumptions: harsh criticism, superficial thinking, or spreading rumors."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: інтелектуальна допитливість, збір пліток чи фактів, дрібні суперечки.",
        "en": "Upcoming development and next step: the Page of Swords is intellectual curiosity, gathering gossip or facts, and minor disputes."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: жорстка критика, поверхневе мислення або розповсюдження чуток.",
        "en": "Temporary slowdown or cautionary phase ahead: harsh criticism, superficial thinking, or spreading rumors."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: інтелектуальна допитливість, збір пліток чи фактів, дрібні суперечки.",
        "en": "Your self-perception and personal stance: the Page of Swords is intellectual curiosity, gathering gossip or facts, and minor disputes."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: жорстка критика, поверхневе мислення або розповсюдження чуток.",
        "en": "Self-doubt or need to regain inner balance: harsh criticism, superficial thinking, or spreading rumors."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: інтелектуальна допитливість, збір пліток чи фактів, дрібні суперечки.",
        "en": "Outer environment and surrounding circumstances: the Page of Swords is intellectual curiosity, gathering gossip or facts, and minor disputes."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: жорстка критика, поверхневе мислення або розповсюдження чуток.",
        "en": "External pressure, friction, or lack of support around you: harsh criticism, superficial thinking, or spreading rumors."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: інтелектуальна допитливість, збір пліток чи фактів, дрібні суперечки.",
        "en": "Primary hopes and inner aspiration for the outcome: the Page of Swords is intellectual curiosity, gathering gossip or facts, and minor disputes."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: жорстка критика, поверхневе мислення або розповсюдження чуток.",
        "en": "Underlying fears, apprehension, or anxiety: harsh criticism, superficial thinking, or spreading rumors."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: інтелектуальна допитливість, збір пліток чи фактів, дрібні суперечки.",
        "en": "Final outcome and resolution of the matter: the Page of Swords is intellectual curiosity, gathering gossip or facts, and minor disputes."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: жорстка критика, поверхневе мислення або розповсюдження чуток.",
        "en": "Outcome requires further patience and integration: harsh criticism, superficial thinking, or spreading rumors."
      }
    }
  },
  "s12": {
    "1": {
      "upright": {
        "ua": "Наполегливість, гострий конфлікт, стрімка атака, відстоювання правди без компромісів.",
        "en": "Persistence, sharp conflict, a swift attack, defending the truth without compromise."
      },
      "reversed": {
        "ua": "Агресивність, необачність, руйнівна критика, імпульсивні конфлікти.",
        "en": "Aggressiveness, recklessness, destructive criticism, impulsive conflicts."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: гострий конфлікт, різкі зміни, інтелектуальний штурм.",
        "en": "The obstacle is an external challenge or excess: the Knight of Swords is a sharp conflict, abrupt changes, and an intellectual assault."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: жорстокість, деструктивна критика або хаотична агресія.",
        "en": "Internal friction or resistance: cruelty, destructive criticism, or chaotic aggression."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: гострий конфлікт, різкі зміни, інтелектуальний штурм.",
        "en": "Deep inner drive and subconscious root: the Knight of Swords is a sharp conflict, abrupt changes, and an intellectual assault."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: жорстокість, деструктивна критика або хаотична агресія.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: cruelty, destructive criticism, or chaotic aggression."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: гострий конфлікт, різкі зміни, інтелектуальний штурм.",
        "en": "Past foundation leading to the current moment: the Knight of Swords is a sharp conflict, abrupt changes, and an intellectual assault."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: жорстокість, деструктивна критика або хаотична агресія.",
        "en": "Unresolved past patterns or fading residue: cruelty, destructive criticism, or chaotic aggression."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: гострий конфлікт, різкі зміни, інтелектуальний штурм.",
        "en": "Conscious goals and rational focus: the Knight of Swords is a sharp conflict, abrupt changes, and an intellectual assault."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: жорстокість, деструктивна критика або хаотична агресія.",
        "en": "Mental confusion or conflicting conscious assumptions: cruelty, destructive criticism, or chaotic aggression."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: гострий конфлікт, різкі зміни, інтелектуальний штурм.",
        "en": "Upcoming development and next step: the Knight of Swords is a sharp conflict, abrupt changes, and an intellectual assault."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: жорстокість, деструктивна критика або хаотична агресія.",
        "en": "Temporary slowdown or cautionary phase ahead: cruelty, destructive criticism, or chaotic aggression."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: гострий конфлікт, різкі зміни, інтелектуальний штурм.",
        "en": "Your self-perception and personal stance: the Knight of Swords is a sharp conflict, abrupt changes, and an intellectual assault."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: жорстокість, деструктивна критика або хаотична агресія.",
        "en": "Self-doubt or need to regain inner balance: cruelty, destructive criticism, or chaotic aggression."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: гострий конфлікт, різкі зміни, інтелектуальний штурм.",
        "en": "Outer environment and surrounding circumstances: the Knight of Swords is a sharp conflict, abrupt changes, and an intellectual assault."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: жорстокість, деструктивна критика або хаотична агресія.",
        "en": "External pressure, friction, or lack of support around you: cruelty, destructive criticism, or chaotic aggression."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: гострий конфлікт, різкі зміни, інтелектуальний штурм.",
        "en": "Primary hopes and inner aspiration for the outcome: the Knight of Swords is a sharp conflict, abrupt changes, and an intellectual assault."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: жорстокість, деструктивна критика або хаотична агресія.",
        "en": "Underlying fears, apprehension, or anxiety: cruelty, destructive criticism, or chaotic aggression."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: гострий конфлікт, різкі зміни, інтелектуальний штурм.",
        "en": "Final outcome and resolution of the matter: the Knight of Swords is a sharp conflict, abrupt changes, and an intellectual assault."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: жорстокість, деструктивна критика або хаотична агресія.",
        "en": "Outcome requires further patience and integration: cruelty, destructive criticism, or chaotic aggression."
      }
    }
  },
  "s13": {
    "1": {
      "upright": {
        "ua": "Незалежність, об'єктивність, сувора логіка, чіткі кордони, досвід, заснований на випробуваннях.",
        "en": "Independence, objectivity, strict logic, clear boundaries, wisdom earned through hard experience."
      },
      "reversed": {
        "ua": "Холодність, жорстокість, цинізм, мстивість, емоційне відчуження.",
        "en": "Coldness, cruelty, cynicism, vindictiveness, emotional detachment."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: розумна, сувора, незалежна жінка.",
        "en": "The obstacle is an external challenge or excess: the Queen of Swords is an intelligent, strict, independent woman."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: холодність, злопам’ятність або надмірна критичність стосовно інших.",
        "en": "Internal friction or resistance: coldness, vindictiveness, or excessive criticism of others."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: розумна, сувора, незалежна жінка.",
        "en": "Deep inner drive and subconscious root: the Queen of Swords is an intelligent, strict, independent woman."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: холодність, злопам’ятність або надмірна критичність стосовно інших.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: coldness, vindictiveness, or excessive criticism of others."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: розумна, сувора, незалежна жінка.",
        "en": "Past foundation leading to the current moment: the Queen of Swords is an intelligent, strict, independent woman."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: холодність, злопам’ятність або надмірна критичність стосовно інших.",
        "en": "Unresolved past patterns or fading residue: coldness, vindictiveness, or excessive criticism of others."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: розумна, сувора, незалежна жінка.",
        "en": "Conscious goals and rational focus: the Queen of Swords is an intelligent, strict, independent woman."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: холодність, злопам’ятність або надмірна критичність стосовно інших.",
        "en": "Mental confusion or conflicting conscious assumptions: coldness, vindictiveness, or excessive criticism of others."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: розумна, сувора, незалежна жінка.",
        "en": "Upcoming development and next step: the Queen of Swords is an intelligent, strict, independent woman."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: холодність, злопам’ятність або надмірна критичність стосовно інших.",
        "en": "Temporary slowdown or cautionary phase ahead: coldness, vindictiveness, or excessive criticism of others."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: розумна, сувора, незалежна жінка.",
        "en": "Your self-perception and personal stance: the Queen of Swords is an intelligent, strict, independent woman."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: холодність, злопам’ятність або надмірна критичність стосовно інших.",
        "en": "Self-doubt or need to regain inner balance: coldness, vindictiveness, or excessive criticism of others."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: розумна, сувора, незалежна жінка.",
        "en": "Outer environment and surrounding circumstances: the Queen of Swords is an intelligent, strict, independent woman."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: холодність, злопам’ятність або надмірна критичність стосовно інших.",
        "en": "External pressure, friction, or lack of support around you: coldness, vindictiveness, or excessive criticism of others."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: розумна, сувора, незалежна жінка.",
        "en": "Primary hopes and inner aspiration for the outcome: the Queen of Swords is an intelligent, strict, independent woman."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: холодність, злопам’ятність або надмірна критичність стосовно інших.",
        "en": "Underlying fears, apprehension, or anxiety: coldness, vindictiveness, or excessive criticism of others."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: розумна, сувора, незалежна жінка.",
        "en": "Final outcome and resolution of the matter: the Queen of Swords is an intelligent, strict, independent woman."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: холодність, злопам’ятність або надмірна критичність стосовно інших.",
        "en": "Outcome requires further patience and integration: coldness, vindictiveness, or excessive criticism of others."
      }
    }
  },
  "s14": {
    "1": {
      "upright": {
        "ua": "Стратегічне мислення, авторитет, високий інтелект, справедливе та суворе рішення.",
        "en": "Strategic thinking, authority, sharp intellect, a fair but strict decision."
      },
      "reversed": {
        "ua": "Зловживання владою, деспотизм, жорсткий маніпулятор, холодний розрахунок.",
        "en": "Abuse of power, tyranny, a ruthless manipulator, cold calculation."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: холодний, авторитетний чоловік-інтелектуал.",
        "en": "The obstacle is an external challenge or excess: the King of Swords is a cold, authoritative male intellectual."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: тиранія, жорстока справедливість або маніпуляції через знання.",
        "en": "Internal friction or resistance: tyranny, cruel justice, or manipulation through knowledge."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: холодний, авторитетний чоловік-інтелектуал.",
        "en": "Deep inner drive and subconscious root: the King of Swords is a cold, authoritative male intellectual."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: тиранія, жорстока справедливість або маніпуляції через знання.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: tyranny, cruel justice, or manipulation through knowledge."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: холодний, авторитетний чоловік-інтелектуал.",
        "en": "Past foundation leading to the current moment: the King of Swords is a cold, authoritative male intellectual."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: тиранія, жорстока справедливість або маніпуляції через знання.",
        "en": "Unresolved past patterns or fading residue: tyranny, cruel justice, or manipulation through knowledge."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: холодний, авторитетний чоловік-інтелектуал.",
        "en": "Conscious goals and rational focus: the King of Swords is a cold, authoritative male intellectual."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: тиранія, жорстока справедливість або маніпуляції через знання.",
        "en": "Mental confusion or conflicting conscious assumptions: tyranny, cruel justice, or manipulation through knowledge."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: холодний, авторитетний чоловік-інтелектуал.",
        "en": "Upcoming development and next step: the King of Swords is a cold, authoritative male intellectual."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: тиранія, жорстока справедливість або маніпуляції через знання.",
        "en": "Temporary slowdown or cautionary phase ahead: tyranny, cruel justice, or manipulation through knowledge."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: холодний, авторитетний чоловік-інтелектуал.",
        "en": "Your self-perception and personal stance: the King of Swords is a cold, authoritative male intellectual."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: тиранія, жорстока справедливість або маніпуляції через знання.",
        "en": "Self-doubt or need to regain inner balance: tyranny, cruel justice, or manipulation through knowledge."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: холодний, авторитетний чоловік-інтелектуал.",
        "en": "Outer environment and surrounding circumstances: the King of Swords is a cold, authoritative male intellectual."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: тиранія, жорстока справедливість або маніпуляції через знання.",
        "en": "External pressure, friction, or lack of support around you: tyranny, cruel justice, or manipulation through knowledge."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: холодний, авторитетний чоловік-інтелектуал.",
        "en": "Primary hopes and inner aspiration for the outcome: the King of Swords is a cold, authoritative male intellectual."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: тиранія, жорстока справедливість або маніпуляції через знання.",
        "en": "Underlying fears, apprehension, or anxiety: tyranny, cruel justice, or manipulation through knowledge."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: холодний, авторитетний чоловік-інтелектуал.",
        "en": "Final outcome and resolution of the matter: the King of Swords is a cold, authoritative male intellectual."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: тиранія, жорстока справедливість або маніпуляції через знання.",
        "en": "Outcome requires further patience and integration: tyranny, cruel justice, or manipulation through knowledge."
      }
    }
  },
  "p01": {
    "1": {
      "upright": {
        "ua": "Чудова матеріальна можливість, фінансовий шанс, реальний практичний ресурс, фундамент.",
        "en": "An excellent material opportunity, a financial chance, a real practical resource, a foundation."
      },
      "reversed": {
        "ua": "Упущена вигода, брак фінансування, нестабільний старт, матеріальні втрати.",
        "en": "A missed opportunity, lack of funding, a shaky start, material losses."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: велика удача, фінансовий успіх, отримання премії, спадщини або чудової бізнес-можливості.",
        "en": "The obstacle is an external challenge or excess: the Ace of Pentacles is great luck, financial success, receiving a bonus, inheritance, or a wonderful business opportunity."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: упущена матеріальна можливість, фінансова невдача або надмірний матеріалізм.",
        "en": "Internal friction or resistance: a missed material opportunity, financial failure, or excessive materialism."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: велика удача, фінансовий успіх, отримання премії, спадщини або чудової бізнес-можливості.",
        "en": "Deep inner drive and subconscious root: the Ace of Pentacles is great luck, financial success, receiving a bonus, inheritance, or a wonderful business opportunity."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: упущена матеріальна можливість, фінансова невдача або надмірний матеріалізм.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: a missed material opportunity, financial failure, or excessive materialism."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: велика удача, фінансовий успіх, отримання премії, спадщини або чудової бізнес-можливості.",
        "en": "Past foundation leading to the current moment: the Ace of Pentacles is great luck, financial success, receiving a bonus, inheritance, or a wonderful business opportunity."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: упущена матеріальна можливість, фінансова невдача або надмірний матеріалізм.",
        "en": "Unresolved past patterns or fading residue: a missed material opportunity, financial failure, or excessive materialism."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: велика удача, фінансовий успіх, отримання премії, спадщини або чудової бізнес-можливості.",
        "en": "Conscious goals and rational focus: the Ace of Pentacles is great luck, financial success, receiving a bonus, inheritance, or a wonderful business opportunity."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: упущена матеріальна можливість, фінансова невдача або надмірний матеріалізм.",
        "en": "Mental confusion or conflicting conscious assumptions: a missed material opportunity, financial failure, or excessive materialism."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: велика удача, фінансовий успіх, отримання премії, спадщини або чудової бізнес-можливості.",
        "en": "Upcoming development and next step: the Ace of Pentacles is great luck, financial success, receiving a bonus, inheritance, or a wonderful business opportunity."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: упущена матеріальна можливість, фінансова невдача або надмірний матеріалізм.",
        "en": "Temporary slowdown or cautionary phase ahead: a missed material opportunity, financial failure, or excessive materialism."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: велика удача, фінансовий успіх, отримання премії, спадщини або чудової бізнес-можливості.",
        "en": "Your self-perception and personal stance: the Ace of Pentacles is great luck, financial success, receiving a bonus, inheritance, or a wonderful business opportunity."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: упущена матеріальна можливість, фінансова невдача або надмірний матеріалізм.",
        "en": "Self-doubt or need to regain inner balance: a missed material opportunity, financial failure, or excessive materialism."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: велика удача, фінансовий успіх, отримання премії, спадщини або чудової бізнес-можливості.",
        "en": "Outer environment and surrounding circumstances: the Ace of Pentacles is great luck, financial success, receiving a bonus, inheritance, or a wonderful business opportunity."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: упущена матеріальна можливість, фінансова невдача або надмірний матеріалізм.",
        "en": "External pressure, friction, or lack of support around you: a missed material opportunity, financial failure, or excessive materialism."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: велика удача, фінансовий успіх, отримання премії, спадщини або чудової бізнес-можливості.",
        "en": "Primary hopes and inner aspiration for the outcome: the Ace of Pentacles is great luck, financial success, receiving a bonus, inheritance, or a wonderful business opportunity."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: упущена матеріальна можливість, фінансова невдача або надмірний матеріалізм.",
        "en": "Underlying fears, apprehension, or anxiety: a missed material opportunity, financial failure, or excessive materialism."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: велика удача, фінансовий успіх, отримання премії, спадщини або чудової бізнес-можливості.",
        "en": "Final outcome and resolution of the matter: the Ace of Pentacles is great luck, financial success, receiving a bonus, inheritance, or a wonderful business opportunity."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: упущена матеріальна можливість, фінансова невдача або надмірний матеріалізм.",
        "en": "Outcome requires further patience and integration: a missed material opportunity, financial failure, or excessive materialism."
      }
    }
  },
  "p02": {
    "1": {
      "upright": {
        "ua": "Пошук балансу, гнучкість, поєднання кількох справ одночасно, адаптація до змін.",
        "en": "Seeking balance, flexibility, juggling several things at once, adapting to change."
      },
      "reversed": {
        "ua": "Втрата рівноваги, хаос у фінансах, перевантаження обов'язками, неорганізованість.",
        "en": "Losing your balance, financial chaos, being overloaded with obligations, disorganization."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: балансування між двома справами або фінансовими зобов’язаннями.",
        "en": "The obstacle is an external challenge or excess: the Two of Pentacles is balancing between two matters or financial obligations."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: фінансова непослідовність, невміння керувати грошима або надмірна напруга.",
        "en": "Internal friction or resistance: financial inconsistency, inability to manage money, or excessive stress."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: балансування між двома справами або фінансовими зобов’язаннями.",
        "en": "Deep inner drive and subconscious root: the Two of Pentacles is balancing between two matters or financial obligations."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: фінансова непослідовність, невміння керувати грошима або надмірна напруга.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: financial inconsistency, inability to manage money, or excessive stress."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: балансування між двома справами або фінансовими зобов’язаннями.",
        "en": "Past foundation leading to the current moment: the Two of Pentacles is balancing between two matters or financial obligations."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: фінансова непослідовність, невміння керувати грошима або надмірна напруга.",
        "en": "Unresolved past patterns or fading residue: financial inconsistency, inability to manage money, or excessive stress."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: балансування між двома справами або фінансовими зобов’язаннями.",
        "en": "Conscious goals and rational focus: the Two of Pentacles is balancing between two matters or financial obligations."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: фінансова непослідовність, невміння керувати грошима або надмірна напруга.",
        "en": "Mental confusion or conflicting conscious assumptions: financial inconsistency, inability to manage money, or excessive stress."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: балансування між двома справами або фінансовими зобов’язаннями.",
        "en": "Upcoming development and next step: the Two of Pentacles is balancing between two matters or financial obligations."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: фінансова непослідовність, невміння керувати грошима або надмірна напруга.",
        "en": "Temporary slowdown or cautionary phase ahead: financial inconsistency, inability to manage money, or excessive stress."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: балансування між двома справами або фінансовими зобов’язаннями.",
        "en": "Your self-perception and personal stance: the Two of Pentacles is balancing between two matters or financial obligations."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: фінансова непослідовність, невміння керувати грошима або надмірна напруга.",
        "en": "Self-doubt or need to regain inner balance: financial inconsistency, inability to manage money, or excessive stress."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: балансування між двома справами або фінансовими зобов’язаннями.",
        "en": "Outer environment and surrounding circumstances: the Two of Pentacles is balancing between two matters or financial obligations."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: фінансова непослідовність, невміння керувати грошима або надмірна напруга.",
        "en": "External pressure, friction, or lack of support around you: financial inconsistency, inability to manage money, or excessive stress."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: балансування між двома справами або фінансовими зобов’язаннями.",
        "en": "Primary hopes and inner aspiration for the outcome: the Two of Pentacles is balancing between two matters or financial obligations."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: фінансова непослідовність, невміння керувати грошима або надмірна напруга.",
        "en": "Underlying fears, apprehension, or anxiety: financial inconsistency, inability to manage money, or excessive stress."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: балансування між двома справами або фінансовими зобов’язаннями.",
        "en": "Final outcome and resolution of the matter: the Two of Pentacles is balancing between two matters or financial obligations."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: фінансова непослідовність, невміння керувати грошима або надмірна напруга.",
        "en": "Outcome requires further patience and integration: financial inconsistency, inability to manage money, or excessive stress."
      }
    }
  },
  "p03": {
    "1": {
      "upright": {
        "ua": "Командна робота, майстерність, професійне зростання, якісна співпраця, визнання навичок.",
        "en": "Teamwork, craftsmanship, professional growth, quality collaboration, recognition of your skills."
      },
      "reversed": {
        "ua": "Брак кваліфікації, непорозуміння в команді, неякісно виконана робота, відсутність розваг.",
        "en": "Lack of skill, misunderstandings within the team, poor-quality work, no room for enjoyment."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: визнання професіоналізму, успішна командна праця, будівництво, перші заробітки від улюбленої справи.",
        "en": "The obstacle is an external challenge or excess: the Three of Pentacles is recognition of professionalism, successful teamwork, construction, and first earnings from a beloved pursuit."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: проблеми з командою, відсутність визнання або низька якість роботи.",
        "en": "Internal friction or resistance: team problems, lack of recognition, or poor quality of work."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: визнання професіоналізму, успішна командна праця, будівництво, перші заробітки від улюбленої справи.",
        "en": "Deep inner drive and subconscious root: the Three of Pentacles is recognition of professionalism, successful teamwork, construction, and first earnings from a beloved pursuit."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: проблеми з командою, відсутність визнання або низька якість роботи.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: team problems, lack of recognition, or poor quality of work."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: визнання професіоналізму, успішна командна праця, будівництво, перші заробітки від улюбленої справи.",
        "en": "Past foundation leading to the current moment: the Three of Pentacles is recognition of professionalism, successful teamwork, construction, and first earnings from a beloved pursuit."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: проблеми з командою, відсутність визнання або низька якість роботи.",
        "en": "Unresolved past patterns or fading residue: team problems, lack of recognition, or poor quality of work."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: визнання професіоналізму, успішна командна праця, будівництво, перші заробітки від улюбленої справи.",
        "en": "Conscious goals and rational focus: the Three of Pentacles is recognition of professionalism, successful teamwork, construction, and first earnings from a beloved pursuit."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: проблеми з командою, відсутність визнання або низька якість роботи.",
        "en": "Mental confusion or conflicting conscious assumptions: team problems, lack of recognition, or poor quality of work."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: визнання професіоналізму, успішна командна праця, будівництво, перші заробітки від улюбленої справи.",
        "en": "Upcoming development and next step: the Three of Pentacles is recognition of professionalism, successful teamwork, construction, and first earnings from a beloved pursuit."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: проблеми з командою, відсутність визнання або низька якість роботи.",
        "en": "Temporary slowdown or cautionary phase ahead: team problems, lack of recognition, or poor quality of work."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: визнання професіоналізму, успішна командна праця, будівництво, перші заробітки від улюбленої справи.",
        "en": "Your self-perception and personal stance: the Three of Pentacles is recognition of professionalism, successful teamwork, construction, and first earnings from a beloved pursuit."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: проблеми з командою, відсутність визнання або низька якість роботи.",
        "en": "Self-doubt or need to regain inner balance: team problems, lack of recognition, or poor quality of work."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: визнання професіоналізму, успішна командна праця, будівництво, перші заробітки від улюбленої справи.",
        "en": "Outer environment and surrounding circumstances: the Three of Pentacles is recognition of professionalism, successful teamwork, construction, and first earnings from a beloved pursuit."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: проблеми з командою, відсутність визнання або низька якість роботи.",
        "en": "External pressure, friction, or lack of support around you: team problems, lack of recognition, or poor quality of work."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: визнання професіоналізму, успішна командна праця, будівництво, перші заробітки від улюбленої справи.",
        "en": "Primary hopes and inner aspiration for the outcome: the Three of Pentacles is recognition of professionalism, successful teamwork, construction, and first earnings from a beloved pursuit."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: проблеми з командою, відсутність визнання або низька якість роботи.",
        "en": "Underlying fears, apprehension, or anxiety: team problems, lack of recognition, or poor quality of work."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: визнання професіоналізму, успішна командна праця, будівництво, перші заробітки від улюбленої справи.",
        "en": "Final outcome and resolution of the matter: the Three of Pentacles is recognition of professionalism, successful teamwork, construction, and first earnings from a beloved pursuit."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: проблеми з командою, відсутність визнання або низька якість роботи.",
        "en": "Outcome requires further patience and integration: team problems, lack of recognition, or poor quality of work."
      }
    }
  },
  "p04": {
    "1": {
      "upright": {
        "ua": "Збереження ресурсів, прагнення стабільності, накопичення, контроль, захист власних меж.",
        "en": "Preserving resources, seeking stability, saving up, control, protecting your own boundaries."
      },
      "reversed": {
        "ua": "Жадібність, скупість, страх втратити контроль, надмірні витрати або блокування ресурсів.",
        "en": "Greed, stinginess, fear of losing control, overspending, or hoarding resources."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: утримання ресурсів, страх втратити накопичене.",
        "en": "The obstacle is an external challenge or excess: the Four of Pentacles is holding onto resources and fear of losing what has been accumulated."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: марнотратство, відкидання скупості або готовність до нових інвестицій.",
        "en": "Internal friction or resistance: wastefulness, rejection of miserliness, or readiness for new investments."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: утримання ресурсів, страх втратити накопичене.",
        "en": "Deep inner drive and subconscious root: the Four of Pentacles is holding onto resources and fear of losing what has been accumulated."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: марнотратство, відкидання скупості або готовність до нових інвестицій.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: wastefulness, rejection of miserliness, or readiness for new investments."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: утримання ресурсів, страх втратити накопичене.",
        "en": "Past foundation leading to the current moment: the Four of Pentacles is holding onto resources and fear of losing what has been accumulated."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: марнотратство, відкидання скупості або готовність до нових інвестицій.",
        "en": "Unresolved past patterns or fading residue: wastefulness, rejection of miserliness, or readiness for new investments."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: утримання ресурсів, страх втратити накопичене.",
        "en": "Conscious goals and rational focus: the Four of Pentacles is holding onto resources and fear of losing what has been accumulated."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: марнотратство, відкидання скупості або готовність до нових інвестицій.",
        "en": "Mental confusion or conflicting conscious assumptions: wastefulness, rejection of miserliness, or readiness for new investments."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: утримання ресурсів, страх втратити накопичене.",
        "en": "Upcoming development and next step: the Four of Pentacles is holding onto resources and fear of losing what has been accumulated."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: марнотратство, відкидання скупості або готовність до нових інвестицій.",
        "en": "Temporary slowdown or cautionary phase ahead: wastefulness, rejection of miserliness, or readiness for new investments."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: утримання ресурсів, страх втратити накопичене.",
        "en": "Your self-perception and personal stance: the Four of Pentacles is holding onto resources and fear of losing what has been accumulated."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: марнотратство, відкидання скупості або готовність до нових інвестицій.",
        "en": "Self-doubt or need to regain inner balance: wastefulness, rejection of miserliness, or readiness for new investments."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: утримання ресурсів, страх втратити накопичене.",
        "en": "Outer environment and surrounding circumstances: the Four of Pentacles is holding onto resources and fear of losing what has been accumulated."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: марнотратство, відкидання скупості або готовність до нових інвестицій.",
        "en": "External pressure, friction, or lack of support around you: wastefulness, rejection of miserliness, or readiness for new investments."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: утримання ресурсів, страх втратити накопичене.",
        "en": "Primary hopes and inner aspiration for the outcome: the Four of Pentacles is holding onto resources and fear of losing what has been accumulated."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: марнотратство, відкидання скупості або готовність до нових інвестицій.",
        "en": "Underlying fears, apprehension, or anxiety: wastefulness, rejection of miserliness, or readiness for new investments."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: утримання ресурсів, страх втратити накопичене.",
        "en": "Final outcome and resolution of the matter: the Four of Pentacles is holding onto resources and fear of losing what has been accumulated."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: марнотратство, відкидання скупості або готовність до нових інвестицій.",
        "en": "Outcome requires further patience and integration: wastefulness, rejection of miserliness, or readiness for new investments."
      }
    }
  },
  "p05": {
    "1": {
      "upright": {
        "ua": "Фінансова сутужність, відчуття закинутості, брак підтримки, тимчасова криза чи випробування.",
        "en": "Financial hardship, a feeling of being abandoned, lack of support, a temporary crisis or trial."
      },
      "reversed": {
        "ua": "Вихід з кризи, відновлення ресурсів, знаходження підтримки, завершення важкого скрутного стану.",
        "en": "Emerging from the crisis, resources being restored, finding support, a difficult period coming to an end."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: фінансові труднощі, почуття самотності, духовна чи матеріальна бідність.",
        "en": "The obstacle is an external challenge or excess: the Five of Pentacles is financial difficulties, a feeling of loneliness, and spiritual or material poverty."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: вихід із фінансових труднощів, подолання ізоляції або знаходження підтримки.",
        "en": "Internal friction or resistance: emerging from financial difficulties, overcoming isolation, or finding support."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: фінансові труднощі, почуття самотності, духовна чи матеріальна бідність.",
        "en": "Deep inner drive and subconscious root: the Five of Pentacles is financial difficulties, a feeling of loneliness, and spiritual or material poverty."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: вихід із фінансових труднощів, подолання ізоляції або знаходження підтримки.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: emerging from financial difficulties, overcoming isolation, or finding support."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: фінансові труднощі, почуття самотності, духовна чи матеріальна бідність.",
        "en": "Past foundation leading to the current moment: the Five of Pentacles is financial difficulties, a feeling of loneliness, and spiritual or material poverty."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: вихід із фінансових труднощів, подолання ізоляції або знаходження підтримки.",
        "en": "Unresolved past patterns or fading residue: emerging from financial difficulties, overcoming isolation, or finding support."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: фінансові труднощі, почуття самотності, духовна чи матеріальна бідність.",
        "en": "Conscious goals and rational focus: the Five of Pentacles is financial difficulties, a feeling of loneliness, and spiritual or material poverty."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: вихід із фінансових труднощів, подолання ізоляції або знаходження підтримки.",
        "en": "Mental confusion or conflicting conscious assumptions: emerging from financial difficulties, overcoming isolation, or finding support."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: фінансові труднощі, почуття самотності, духовна чи матеріальна бідність.",
        "en": "Upcoming development and next step: the Five of Pentacles is financial difficulties, a feeling of loneliness, and spiritual or material poverty."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: вихід із фінансових труднощів, подолання ізоляції або знаходження підтримки.",
        "en": "Temporary slowdown or cautionary phase ahead: emerging from financial difficulties, overcoming isolation, or finding support."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: фінансові труднощі, почуття самотності, духовна чи матеріальна бідність.",
        "en": "Your self-perception and personal stance: the Five of Pentacles is financial difficulties, a feeling of loneliness, and spiritual or material poverty."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: вихід із фінансових труднощів, подолання ізоляції або знаходження підтримки.",
        "en": "Self-doubt or need to regain inner balance: emerging from financial difficulties, overcoming isolation, or finding support."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: фінансові труднощі, почуття самотності, духовна чи матеріальна бідність.",
        "en": "Outer environment and surrounding circumstances: the Five of Pentacles is financial difficulties, a feeling of loneliness, and spiritual or material poverty."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: вихід із фінансових труднощів, подолання ізоляції або знаходження підтримки.",
        "en": "External pressure, friction, or lack of support around you: emerging from financial difficulties, overcoming isolation, or finding support."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: фінансові труднощі, почуття самотності, духовна чи матеріальна бідність.",
        "en": "Primary hopes and inner aspiration for the outcome: the Five of Pentacles is financial difficulties, a feeling of loneliness, and spiritual or material poverty."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: вихід із фінансових труднощів, подолання ізоляції або знаходження підтримки.",
        "en": "Underlying fears, apprehension, or anxiety: emerging from financial difficulties, overcoming isolation, or finding support."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: фінансові труднощі, почуття самотності, духовна чи матеріальна бідність.",
        "en": "Final outcome and resolution of the matter: the Five of Pentacles is financial difficulties, a feeling of loneliness, and spiritual or material poverty."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: вихід із фінансових труднощів, подолання ізоляції або знаходження підтримки.",
        "en": "Outcome requires further patience and integration: emerging from financial difficulties, overcoming isolation, or finding support."
      }
    }
  },
  "p06": {
    "1": {
      "upright": {
        "ua": "Щедрість, взаємодопомога, залучення інвестицій, чесний розподіл ресурсів, баланс «віддавати/брати».",
        "en": "Generosity, mutual aid, attracting investment, a fair distribution of resources, a balance of giving and receiving."
      },
      "reversed": {
        "ua": "Нечесний розподіл, кабальні умови, корисливість, борги або відмова у допомозі.",
        "en": "Unfair distribution, exploitative terms, self-interest, debts, or refusing to help."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: допомога іншим або отримання кредиту/дотації.",
        "en": "The obstacle is an external challenge or excess: the Six of Pentacles is helping others or receiving a loan/grant."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: корупція, нечесний розподіл ресурсів або неправильно спрямована щедрість.",
        "en": "Internal friction or resistance: corruption, unfair distribution of resources, or misdirected generosity."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: допомога іншим або отримання кредиту/дотації.",
        "en": "Deep inner drive and subconscious root: the Six of Pentacles is helping others or receiving a loan/grant."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: корупція, нечесний розподіл ресурсів або неправильно спрямована щедрість.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: corruption, unfair distribution of resources, or misdirected generosity."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: допомога іншим або отримання кредиту/дотації.",
        "en": "Past foundation leading to the current moment: the Six of Pentacles is helping others or receiving a loan/grant."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: корупція, нечесний розподіл ресурсів або неправильно спрямована щедрість.",
        "en": "Unresolved past patterns or fading residue: corruption, unfair distribution of resources, or misdirected generosity."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: допомога іншим або отримання кредиту/дотації.",
        "en": "Conscious goals and rational focus: the Six of Pentacles is helping others or receiving a loan/grant."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: корупція, нечесний розподіл ресурсів або неправильно спрямована щедрість.",
        "en": "Mental confusion or conflicting conscious assumptions: corruption, unfair distribution of resources, or misdirected generosity."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: допомога іншим або отримання кредиту/дотації.",
        "en": "Upcoming development and next step: the Six of Pentacles is helping others or receiving a loan/grant."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: корупція, нечесний розподіл ресурсів або неправильно спрямована щедрість.",
        "en": "Temporary slowdown or cautionary phase ahead: corruption, unfair distribution of resources, or misdirected generosity."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: допомога іншим або отримання кредиту/дотації.",
        "en": "Your self-perception and personal stance: the Six of Pentacles is helping others or receiving a loan/grant."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: корупція, нечесний розподіл ресурсів або неправильно спрямована щедрість.",
        "en": "Self-doubt or need to regain inner balance: corruption, unfair distribution of resources, or misdirected generosity."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: допомога іншим або отримання кредиту/дотації.",
        "en": "Outer environment and surrounding circumstances: the Six of Pentacles is helping others or receiving a loan/grant."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: корупція, нечесний розподіл ресурсів або неправильно спрямована щедрість.",
        "en": "External pressure, friction, or lack of support around you: corruption, unfair distribution of resources, or misdirected generosity."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: допомога іншим або отримання кредиту/дотації.",
        "en": "Primary hopes and inner aspiration for the outcome: the Six of Pentacles is helping others or receiving a loan/grant."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: корупція, нечесний розподіл ресурсів або неправильно спрямована щедрість.",
        "en": "Underlying fears, apprehension, or anxiety: corruption, unfair distribution of resources, or misdirected generosity."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: допомога іншим або отримання кредиту/дотації.",
        "en": "Final outcome and resolution of the matter: the Six of Pentacles is helping others or receiving a loan/grant."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: корупція, нечесний розподіл ресурсів або неправильно спрямована щедрість.",
        "en": "Outcome requires further patience and integration: corruption, unfair distribution of resources, or misdirected generosity."
      }
    }
  },
  "p07": {
    "1": {
      "upright": {
        "ua": "Терпеливе очікування результатів, довгострокова праця, оцінка зробленого внеску.",
        "en": "Patiently waiting for results, long-term effort, assessing the contribution you've made."
      },
      "reversed": {
        "ua": "Розчарування від відсутності швидкого результату, даремно витрачені зусилля, марна праця.",
        "en": "Frustration at the lack of quick results, wasted effort, work that leads nowhere."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: урожай зріє повільно.",
        "en": "The obstacle is an external challenge or excess: the Seven of Pentacles is the harvest ripening slowly."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: нетерплячість, передчасна відмова від зусиль або незадоволеність результатами.",
        "en": "Internal friction or resistance: impatience, premature abandonment of efforts, or dissatisfaction with results."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: урожай зріє повільно.",
        "en": "Deep inner drive and subconscious root: the Seven of Pentacles is the harvest ripening slowly."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: нетерплячість, передчасна відмова від зусиль або незадоволеність результатами.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: impatience, premature abandonment of efforts, or dissatisfaction with results."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: урожай зріє повільно.",
        "en": "Past foundation leading to the current moment: the Seven of Pentacles is the harvest ripening slowly."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: нетерплячість, передчасна відмова від зусиль або незадоволеність результатами.",
        "en": "Unresolved past patterns or fading residue: impatience, premature abandonment of efforts, or dissatisfaction with results."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: урожай зріє повільно.",
        "en": "Conscious goals and rational focus: the Seven of Pentacles is the harvest ripening slowly."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: нетерплячість, передчасна відмова від зусиль або незадоволеність результатами.",
        "en": "Mental confusion or conflicting conscious assumptions: impatience, premature abandonment of efforts, or dissatisfaction with results."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: урожай зріє повільно.",
        "en": "Upcoming development and next step: the Seven of Pentacles is the harvest ripening slowly."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: нетерплячість, передчасна відмова від зусиль або незадоволеність результатами.",
        "en": "Temporary slowdown or cautionary phase ahead: impatience, premature abandonment of efforts, or dissatisfaction with results."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: урожай зріє повільно.",
        "en": "Your self-perception and personal stance: the Seven of Pentacles is the harvest ripening slowly."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: нетерплячість, передчасна відмова від зусиль або незадоволеність результатами.",
        "en": "Self-doubt or need to regain inner balance: impatience, premature abandonment of efforts, or dissatisfaction with results."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: урожай зріє повільно.",
        "en": "Outer environment and surrounding circumstances: the Seven of Pentacles is the harvest ripening slowly."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: нетерплячість, передчасна відмова від зусиль або незадоволеність результатами.",
        "en": "External pressure, friction, or lack of support around you: impatience, premature abandonment of efforts, or dissatisfaction with results."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: урожай зріє повільно.",
        "en": "Primary hopes and inner aspiration for the outcome: the Seven of Pentacles is the harvest ripening slowly."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: нетерплячість, передчасна відмова від зусиль або незадоволеність результатами.",
        "en": "Underlying fears, apprehension, or anxiety: impatience, premature abandonment of efforts, or dissatisfaction with results."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: урожай зріє повільно.",
        "en": "Final outcome and resolution of the matter: the Seven of Pentacles is the harvest ripening slowly."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: нетерплячість, передчасна відмова від зусиль або незадоволеність результатами.",
        "en": "Outcome requires further patience and integration: impatience, premature abandonment of efforts, or dissatisfaction with results."
      }
    }
  },
  "p08": {
    "1": {
      "upright": {
        "ua": "Відточування майстерності, рутинна праця, увага до деталей, професійне навчання та розвиток.",
        "en": "Honing your skills, routine work, attention to detail, professional training and development."
      },
      "reversed": {
        "ua": "Перфекціонізм, монотонна нудна робота, брак навичок, лінь або халтура.",
        "en": "Perfectionism, monotonous, tedious work, lack of skill, laziness, or sloppy work."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: щоденна сумлінна праця, відточування майстерності.",
        "en": "The obstacle is an external challenge or excess: the Eight of Pentacles is daily diligent work and honing mastery."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: перфекціонізм, рутина, що пригнічує, або відсутність прогресу попри зусилля.",
        "en": "Internal friction or resistance: perfectionism, oppressive routine, or a lack of progress despite efforts."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: щоденна сумлінна праця, відточування майстерності.",
        "en": "Deep inner drive and subconscious root: the Eight of Pentacles is daily diligent work and honing mastery."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: перфекціонізм, рутина, що пригнічує, або відсутність прогресу попри зусилля.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: perfectionism, oppressive routine, or a lack of progress despite efforts."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: щоденна сумлінна праця, відточування майстерності.",
        "en": "Past foundation leading to the current moment: the Eight of Pentacles is daily diligent work and honing mastery."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: перфекціонізм, рутина, що пригнічує, або відсутність прогресу попри зусилля.",
        "en": "Unresolved past patterns or fading residue: perfectionism, oppressive routine, or a lack of progress despite efforts."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: щоденна сумлінна праця, відточування майстерності.",
        "en": "Conscious goals and rational focus: the Eight of Pentacles is daily diligent work and honing mastery."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: перфекціонізм, рутина, що пригнічує, або відсутність прогресу попри зусилля.",
        "en": "Mental confusion or conflicting conscious assumptions: perfectionism, oppressive routine, or a lack of progress despite efforts."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: щоденна сумлінна праця, відточування майстерності.",
        "en": "Upcoming development and next step: the Eight of Pentacles is daily diligent work and honing mastery."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: перфекціонізм, рутина, що пригнічує, або відсутність прогресу попри зусилля.",
        "en": "Temporary slowdown or cautionary phase ahead: perfectionism, oppressive routine, or a lack of progress despite efforts."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: щоденна сумлінна праця, відточування майстерності.",
        "en": "Your self-perception and personal stance: the Eight of Pentacles is daily diligent work and honing mastery."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: перфекціонізм, рутина, що пригнічує, або відсутність прогресу попри зусилля.",
        "en": "Self-doubt or need to regain inner balance: perfectionism, oppressive routine, or a lack of progress despite efforts."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: щоденна сумлінна праця, відточування майстерності.",
        "en": "Outer environment and surrounding circumstances: the Eight of Pentacles is daily diligent work and honing mastery."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: перфекціонізм, рутина, що пригнічує, або відсутність прогресу попри зусилля.",
        "en": "External pressure, friction, or lack of support around you: perfectionism, oppressive routine, or a lack of progress despite efforts."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: щоденна сумлінна праця, відточування майстерності.",
        "en": "Primary hopes and inner aspiration for the outcome: the Eight of Pentacles is daily diligent work and honing mastery."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: перфекціонізм, рутина, що пригнічує, або відсутність прогресу попри зусилля.",
        "en": "Underlying fears, apprehension, or anxiety: perfectionism, oppressive routine, or a lack of progress despite efforts."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: щоденна сумлінна праця, відточування майстерності.",
        "en": "Final outcome and resolution of the matter: the Eight of Pentacles is daily diligent work and honing mastery."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: перфекціонізм, рутина, що пригнічує, або відсутність прогресу попри зусилля.",
        "en": "Outcome requires further patience and integration: perfectionism, oppressive routine, or a lack of progress despite efforts."
      }
    }
  },
  "p09": {
    "1": {
      "upright": {
        "ua": "Матеріальна самостійність, комфорт, персональні досягнення, фінансова свобода та спокій.",
        "en": "Material self-sufficiency, comfort, personal achievement, financial freedom and peace of mind."
      },
      "reversed": {
        "ua": "Фінансова залежність, марнотратство, удаваний добробут, втрата ресурсу.",
        "en": "Financial dependence, wastefulness, a show of prosperity that isn't real, loss of resources."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: матеріальна незалежність, безпека, вміння насолоджуватися життям.",
        "en": "The obstacle is an external challenge or excess: the Nine of Pentacles is material independence, security, and the ability to enjoy life."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: самовдоволення, надмірна залежність від матеріального або втрата здобутків.",
        "en": "Internal friction or resistance: complacency, excessive dependence on material things, or the loss of gains."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: матеріальна незалежність, безпека, вміння насолоджуватися життям.",
        "en": "Deep inner drive and subconscious root: the Nine of Pentacles is material independence, security, and the ability to enjoy life."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: самовдоволення, надмірна залежність від матеріального або втрата здобутків.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: complacency, excessive dependence on material things, or the loss of gains."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: матеріальна незалежність, безпека, вміння насолоджуватися життям.",
        "en": "Past foundation leading to the current moment: the Nine of Pentacles is material independence, security, and the ability to enjoy life."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: самовдоволення, надмірна залежність від матеріального або втрата здобутків.",
        "en": "Unresolved past patterns or fading residue: complacency, excessive dependence on material things, or the loss of gains."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: матеріальна незалежність, безпека, вміння насолоджуватися життям.",
        "en": "Conscious goals and rational focus: the Nine of Pentacles is material independence, security, and the ability to enjoy life."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: самовдоволення, надмірна залежність від матеріального або втрата здобутків.",
        "en": "Mental confusion or conflicting conscious assumptions: complacency, excessive dependence on material things, or the loss of gains."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: матеріальна незалежність, безпека, вміння насолоджуватися життям.",
        "en": "Upcoming development and next step: the Nine of Pentacles is material independence, security, and the ability to enjoy life."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: самовдоволення, надмірна залежність від матеріального або втрата здобутків.",
        "en": "Temporary slowdown or cautionary phase ahead: complacency, excessive dependence on material things, or the loss of gains."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: матеріальна незалежність, безпека, вміння насолоджуватися життям.",
        "en": "Your self-perception and personal stance: the Nine of Pentacles is material independence, security, and the ability to enjoy life."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: самовдоволення, надмірна залежність від матеріального або втрата здобутків.",
        "en": "Self-doubt or need to regain inner balance: complacency, excessive dependence on material things, or the loss of gains."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: матеріальна незалежність, безпека, вміння насолоджуватися життям.",
        "en": "Outer environment and surrounding circumstances: the Nine of Pentacles is material independence, security, and the ability to enjoy life."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: самовдоволення, надмірна залежність від матеріального або втрата здобутків.",
        "en": "External pressure, friction, or lack of support around you: complacency, excessive dependence on material things, or the loss of gains."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: матеріальна незалежність, безпека, вміння насолоджуватися життям.",
        "en": "Primary hopes and inner aspiration for the outcome: the Nine of Pentacles is material independence, security, and the ability to enjoy life."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: самовдоволення, надмірна залежність від матеріального або втрата здобутків.",
        "en": "Underlying fears, apprehension, or anxiety: complacency, excessive dependence on material things, or the loss of gains."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: матеріальна незалежність, безпека, вміння насолоджуватися життям.",
        "en": "Final outcome and resolution of the matter: the Nine of Pentacles is material independence, security, and the ability to enjoy life."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: самовдоволення, надмірна залежність від матеріального або втрата здобутків.",
        "en": "Outcome requires further patience and integration: complacency, excessive dependence on material things, or the loss of gains."
      }
    }
  },
  "p10": {
    "1": {
      "upright": {
        "ua": "Родинний достаток, довгостроковий успіх, спадковість, міцний фундамент, стабільність.",
        "en": "Family wealth, long-term success, legacy, a solid foundation, stability."
      },
      "reversed": {
        "ua": "Фінансові суперечки в родині, втрата майна, руйнування традицій, проблеми із спадщиною.",
        "en": "Family disputes over money, loss of property, broken traditions, inheritance problems."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: фінансове процвітання сім’ї, стабільний великий бізнес, традиції, сімейні цінності та підтримка рідних.",
        "en": "The obstacle is an external challenge or excess: the Ten of Pentacles is the financial prosperity of the family, a stable large business, traditions, family values, and the support of relatives."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: сімейні фінансові суперечки, небезпечна залежність від родини або втрата спадщини.",
        "en": "Internal friction or resistance: family financial disputes, dangerous dependence on family, or the loss of inheritance."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: фінансове процвітання сім’ї, стабільний великий бізнес, традиції, сімейні цінності та підтримка рідних.",
        "en": "Deep inner drive and subconscious root: the Ten of Pentacles is the financial prosperity of the family, a stable large business, traditions, family values, and the support of relatives."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: сімейні фінансові суперечки, небезпечна залежність від родини або втрата спадщини.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: family financial disputes, dangerous dependence on family, or the loss of inheritance."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: фінансове процвітання сім’ї, стабільний великий бізнес, традиції, сімейні цінності та підтримка рідних.",
        "en": "Past foundation leading to the current moment: the Ten of Pentacles is the financial prosperity of the family, a stable large business, traditions, family values, and the support of relatives."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: сімейні фінансові суперечки, небезпечна залежність від родини або втрата спадщини.",
        "en": "Unresolved past patterns or fading residue: family financial disputes, dangerous dependence on family, or the loss of inheritance."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: фінансове процвітання сім’ї, стабільний великий бізнес, традиції, сімейні цінності та підтримка рідних.",
        "en": "Conscious goals and rational focus: the Ten of Pentacles is the financial prosperity of the family, a stable large business, traditions, family values, and the support of relatives."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: сімейні фінансові суперечки, небезпечна залежність від родини або втрата спадщини.",
        "en": "Mental confusion or conflicting conscious assumptions: family financial disputes, dangerous dependence on family, or the loss of inheritance."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: фінансове процвітання сім’ї, стабільний великий бізнес, традиції, сімейні цінності та підтримка рідних.",
        "en": "Upcoming development and next step: the Ten of Pentacles is the financial prosperity of the family, a stable large business, traditions, family values, and the support of relatives."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: сімейні фінансові суперечки, небезпечна залежність від родини або втрата спадщини.",
        "en": "Temporary slowdown or cautionary phase ahead: family financial disputes, dangerous dependence on family, or the loss of inheritance."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: фінансове процвітання сім’ї, стабільний великий бізнес, традиції, сімейні цінності та підтримка рідних.",
        "en": "Your self-perception and personal stance: the Ten of Pentacles is the financial prosperity of the family, a stable large business, traditions, family values, and the support of relatives."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: сімейні фінансові суперечки, небезпечна залежність від родини або втрата спадщини.",
        "en": "Self-doubt or need to regain inner balance: family financial disputes, dangerous dependence on family, or the loss of inheritance."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: фінансове процвітання сім’ї, стабільний великий бізнес, традиції, сімейні цінності та підтримка рідних.",
        "en": "Outer environment and surrounding circumstances: the Ten of Pentacles is the financial prosperity of the family, a stable large business, traditions, family values, and the support of relatives."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: сімейні фінансові суперечки, небезпечна залежність від родини або втрата спадщини.",
        "en": "External pressure, friction, or lack of support around you: family financial disputes, dangerous dependence on family, or the loss of inheritance."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: фінансове процвітання сім’ї, стабільний великий бізнес, традиції, сімейні цінності та підтримка рідних.",
        "en": "Primary hopes and inner aspiration for the outcome: the Ten of Pentacles is the financial prosperity of the family, a stable large business, traditions, family values, and the support of relatives."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: сімейні фінансові суперечки, небезпечна залежність від родини або втрата спадщини.",
        "en": "Underlying fears, apprehension, or anxiety: family financial disputes, dangerous dependence on family, or the loss of inheritance."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: фінансове процвітання сім’ї, стабільний великий бізнес, традиції, сімейні цінності та підтримка рідних.",
        "en": "Final outcome and resolution of the matter: the Ten of Pentacles is the financial prosperity of the family, a stable large business, traditions, family values, and the support of relatives."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: сімейні фінансові суперечки, небезпечна залежність від родини або втрата спадщини.",
        "en": "Outcome requires further patience and integration: family financial disputes, dangerous dependence on family, or the loss of inheritance."
      }
    }
  },
  "p11": {
    "1": {
      "upright": {
        "ua": "Практична пропозиція, початок навчання, добрі новини про гроші чи роботу, ретельність.",
        "en": "A practical proposal, the start of a learning journey, good news about money or work, diligence."
      },
      "reversed": {
        "ua": "Брак практичності, легкодухість, безвідповідальність, марні витрати на навчання.",
        "en": "Lack of practicality, faintheartedness, irresponsibility, money wasted on learning."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: перші невеликі гроші, студентство, практична пропозиція, закладання фундаменту для майбутніх доходів.",
        "en": "The obstacle is an external challenge or excess: the Page of Pentacles is first small earnings, student life, a practical offer, and laying the foundation for future income."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: безвідповідальність, ухилення від навчання або нереалістичні фінансові плани.",
        "en": "Internal friction or resistance: irresponsibility, avoidance of learning, or unrealistic financial plans."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: перші невеликі гроші, студентство, практична пропозиція, закладання фундаменту для майбутніх доходів.",
        "en": "Deep inner drive and subconscious root: the Page of Pentacles is first small earnings, student life, a practical offer, and laying the foundation for future income."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: безвідповідальність, ухилення від навчання або нереалістичні фінансові плани.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: irresponsibility, avoidance of learning, or unrealistic financial plans."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: перші невеликі гроші, студентство, практична пропозиція, закладання фундаменту для майбутніх доходів.",
        "en": "Past foundation leading to the current moment: the Page of Pentacles is first small earnings, student life, a practical offer, and laying the foundation for future income."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: безвідповідальність, ухилення від навчання або нереалістичні фінансові плани.",
        "en": "Unresolved past patterns or fading residue: irresponsibility, avoidance of learning, or unrealistic financial plans."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: перші невеликі гроші, студентство, практична пропозиція, закладання фундаменту для майбутніх доходів.",
        "en": "Conscious goals and rational focus: the Page of Pentacles is first small earnings, student life, a practical offer, and laying the foundation for future income."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: безвідповідальність, ухилення від навчання або нереалістичні фінансові плани.",
        "en": "Mental confusion or conflicting conscious assumptions: irresponsibility, avoidance of learning, or unrealistic financial plans."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: перші невеликі гроші, студентство, практична пропозиція, закладання фундаменту для майбутніх доходів.",
        "en": "Upcoming development and next step: the Page of Pentacles is first small earnings, student life, a practical offer, and laying the foundation for future income."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: безвідповідальність, ухилення від навчання або нереалістичні фінансові плани.",
        "en": "Temporary slowdown or cautionary phase ahead: irresponsibility, avoidance of learning, or unrealistic financial plans."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: перші невеликі гроші, студентство, практична пропозиція, закладання фундаменту для майбутніх доходів.",
        "en": "Your self-perception and personal stance: the Page of Pentacles is first small earnings, student life, a practical offer, and laying the foundation for future income."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: безвідповідальність, ухилення від навчання або нереалістичні фінансові плани.",
        "en": "Self-doubt or need to regain inner balance: irresponsibility, avoidance of learning, or unrealistic financial plans."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: перші невеликі гроші, студентство, практична пропозиція, закладання фундаменту для майбутніх доходів.",
        "en": "Outer environment and surrounding circumstances: the Page of Pentacles is first small earnings, student life, a practical offer, and laying the foundation for future income."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: безвідповідальність, ухилення від навчання або нереалістичні фінансові плани.",
        "en": "External pressure, friction, or lack of support around you: irresponsibility, avoidance of learning, or unrealistic financial plans."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: перші невеликі гроші, студентство, практична пропозиція, закладання фундаменту для майбутніх доходів.",
        "en": "Primary hopes and inner aspiration for the outcome: the Page of Pentacles is first small earnings, student life, a practical offer, and laying the foundation for future income."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: безвідповідальність, ухилення від навчання або нереалістичні фінансові плани.",
        "en": "Underlying fears, apprehension, or anxiety: irresponsibility, avoidance of learning, or unrealistic financial plans."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: перші невеликі гроші, студентство, практична пропозиція, закладання фундаменту для майбутніх доходів.",
        "en": "Final outcome and resolution of the matter: the Page of Pentacles is first small earnings, student life, a practical offer, and laying the foundation for future income."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: безвідповідальність, ухилення від навчання або нереалістичні фінансові плани.",
        "en": "Outcome requires further patience and integration: irresponsibility, avoidance of learning, or unrealistic financial plans."
      }
    }
  },
  "p12": {
    "1": {
      "upright": {
        "ua": "Послідовність, надійність, наполеглива праця, методичний рух до мети, відповідальність.",
        "en": "Consistency, reliability, diligent work, a methodical path toward the goal, responsibility."
      },
      "reversed": {
        "ua": "Застій, упертість, рутина, надмірний консерватизм, повільність чи лінь.",
        "en": "Stagnation, stubbornness, routine, excessive conservatism, slowness or laziness."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: найнадійніша карта.",
        "en": "The obstacle is an external challenge or excess: the Knight of Pentacles is the most reliable card."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: надмірна консервативність, лінощі або застій через страх ризику.",
        "en": "Internal friction or resistance: excessive conservatism, laziness, or stagnation due to a fear of risk."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: найнадійніша карта.",
        "en": "Deep inner drive and subconscious root: the Knight of Pentacles is the most reliable card."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: надмірна консервативність, лінощі або застій через страх ризику.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: excessive conservatism, laziness, or stagnation due to a fear of risk."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: найнадійніша карта.",
        "en": "Past foundation leading to the current moment: the Knight of Pentacles is the most reliable card."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: надмірна консервативність, лінощі або застій через страх ризику.",
        "en": "Unresolved past patterns or fading residue: excessive conservatism, laziness, or stagnation due to a fear of risk."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: найнадійніша карта.",
        "en": "Conscious goals and rational focus: the Knight of Pentacles is the most reliable card."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: надмірна консервативність, лінощі або застій через страх ризику.",
        "en": "Mental confusion or conflicting conscious assumptions: excessive conservatism, laziness, or stagnation due to a fear of risk."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: найнадійніша карта.",
        "en": "Upcoming development and next step: the Knight of Pentacles is the most reliable card."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: надмірна консервативність, лінощі або застій через страх ризику.",
        "en": "Temporary slowdown or cautionary phase ahead: excessive conservatism, laziness, or stagnation due to a fear of risk."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: найнадійніша карта.",
        "en": "Your self-perception and personal stance: the Knight of Pentacles is the most reliable card."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: надмірна консервативність, лінощі або застій через страх ризику.",
        "en": "Self-doubt or need to regain inner balance: excessive conservatism, laziness, or stagnation due to a fear of risk."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: найнадійніша карта.",
        "en": "Outer environment and surrounding circumstances: the Knight of Pentacles is the most reliable card."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: надмірна консервативність, лінощі або застій через страх ризику.",
        "en": "External pressure, friction, or lack of support around you: excessive conservatism, laziness, or stagnation due to a fear of risk."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: найнадійніша карта.",
        "en": "Primary hopes and inner aspiration for the outcome: the Knight of Pentacles is the most reliable card."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: надмірна консервативність, лінощі або застій через страх ризику.",
        "en": "Underlying fears, apprehension, or anxiety: excessive conservatism, laziness, or stagnation due to a fear of risk."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: найнадійніша карта.",
        "en": "Final outcome and resolution of the matter: the Knight of Pentacles is the most reliable card."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: надмірна консервативність, лінощі або застій через страх ризику.",
        "en": "Outcome requires further patience and integration: excessive conservatism, laziness, or stagnation due to a fear of risk."
      }
    }
  },
  "p13": {
    "1": {
      "upright": {
        "ua": "Практичність, турбота про затишок і здоров'я, розумне управління ресурсами, гостинність.",
        "en": "Practicality, caring for comfort and health, wise management of resources, hospitality."
      },
      "reversed": {
        "ua": "Надмірна зацикленість на грошах, занедбаність домогосподарства, турбота з корисливих мотивів.",
        "en": "Excessive focus on money, a neglected household, caring for others out of self-interest."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: практична, щедра, успішна жінка.",
        "en": "The obstacle is an external challenge or excess: the Queen of Pentacles is a practical, generous, successful woman."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: надмірна опіка в матеріальному, скупість або невміння встановлювати фінансові кордони.",
        "en": "Internal friction or resistance: excessive material overprotection, miserliness, or an inability to set financial boundaries."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: практична, щедра, успішна жінка.",
        "en": "Deep inner drive and subconscious root: the Queen of Pentacles is a practical, generous, successful woman."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: надмірна опіка в матеріальному, скупість або невміння встановлювати фінансові кордони.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: excessive material overprotection, miserliness, or an inability to set financial boundaries."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: практична, щедра, успішна жінка.",
        "en": "Past foundation leading to the current moment: the Queen of Pentacles is a practical, generous, successful woman."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: надмірна опіка в матеріальному, скупість або невміння встановлювати фінансові кордони.",
        "en": "Unresolved past patterns or fading residue: excessive material overprotection, miserliness, or an inability to set financial boundaries."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: практична, щедра, успішна жінка.",
        "en": "Conscious goals and rational focus: the Queen of Pentacles is a practical, generous, successful woman."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: надмірна опіка в матеріальному, скупість або невміння встановлювати фінансові кордони.",
        "en": "Mental confusion or conflicting conscious assumptions: excessive material overprotection, miserliness, or an inability to set financial boundaries."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: практична, щедра, успішна жінка.",
        "en": "Upcoming development and next step: the Queen of Pentacles is a practical, generous, successful woman."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: надмірна опіка в матеріальному, скупість або невміння встановлювати фінансові кордони.",
        "en": "Temporary slowdown or cautionary phase ahead: excessive material overprotection, miserliness, or an inability to set financial boundaries."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: практична, щедра, успішна жінка.",
        "en": "Your self-perception and personal stance: the Queen of Pentacles is a practical, generous, successful woman."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: надмірна опіка в матеріальному, скупість або невміння встановлювати фінансові кордони.",
        "en": "Self-doubt or need to regain inner balance: excessive material overprotection, miserliness, or an inability to set financial boundaries."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: практична, щедра, успішна жінка.",
        "en": "Outer environment and surrounding circumstances: the Queen of Pentacles is a practical, generous, successful woman."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: надмірна опіка в матеріальному, скупість або невміння встановлювати фінансові кордони.",
        "en": "External pressure, friction, or lack of support around you: excessive material overprotection, miserliness, or an inability to set financial boundaries."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: практична, щедра, успішна жінка.",
        "en": "Primary hopes and inner aspiration for the outcome: the Queen of Pentacles is a practical, generous, successful woman."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: надмірна опіка в матеріальному, скупість або невміння встановлювати фінансові кордони.",
        "en": "Underlying fears, apprehension, or anxiety: excessive material overprotection, miserliness, or an inability to set financial boundaries."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: практична, щедра, успішна жінка.",
        "en": "Final outcome and resolution of the matter: the Queen of Pentacles is a practical, generous, successful woman."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: надмірна опіка в матеріальному, скупість або невміння встановлювати фінансові кордони.",
        "en": "Outcome requires further patience and integration: excessive material overprotection, miserliness, or an inability to set financial boundaries."
      }
    }
  },
  "p14": {
    "1": {
      "upright": {
        "ua": "Фінансова зрілість, ділова хватка, стабільний бізнес, надійне заступництво та успіх.",
        "en": "Financial maturity, business acumen, a stable business, reliable patronage, and success."
      },
      "reversed": {
        "ua": "Жадібність, фінансові авантюри, корупція, зацикленість лише на матеріальному.",
        "en": "Greed, risky financial ventures, corruption, being fixated solely on material things."
      }
    },
    "2": {
      "upright": {
        "ua": "Перешкодою є надлишок або зовнішній виклик: багатий, досвідчений чоловік, успішний бізнесмен або фінансист.",
        "en": "The obstacle is an external challenge or excess: the King of Pentacles is a wealthy, experienced man, a successful businessman or financier."
      },
      "reversed": {
        "ua": "Внутрішня перешкода або прихований саботаж: жадібність, корупція або використання матеріальних ресурсів для маніпуляцій.",
        "en": "Internal friction or resistance: greed, corruption, or the use of material resources for manipulation."
      }
    },
    "3": {
      "upright": {
        "ua": "Глибинне прагнення та підсвідомий фундамент: багатий, досвідчений чоловік, успішний бізнесмен або фінансист.",
        "en": "Deep inner drive and subconscious root: the King of Pentacles is a wealthy, experienced man, a successful businessman or financier."
      },
      "reversed": {
        "ua": "Приховані тривоги або витіснені почуття в підсвідомості: жадібність, корупція або використання матеріальних ресурсів для маніпуляцій.",
        "en": "Suppressed fears or unexpressed feelings in subconscious: greed, corruption, or the use of material resources for manipulation."
      }
    },
    "4": {
      "upright": {
        "ua": "Фундамент минулого, що привів до поточної точки: багатий, досвідчений чоловік, успішний бізнесмен або фінансист.",
        "en": "Past foundation leading to the current moment: the King of Pentacles is a wealthy, experienced man, a successful businessman or financier."
      },
      "reversed": {
        "ua": "Незавершені уроки або старі моделі з минулого: жадібність, корупція або використання матеріальних ресурсів для маніпуляцій.",
        "en": "Unresolved past patterns or fading residue: greed, corruption, or the use of material resources for manipulation."
      }
    },
    "5": {
      "upright": {
        "ua": "Ваші усвідомлені цілі та раціональний фокус: багатий, досвідчений чоловік, успішний бізнесмен або фінансист.",
        "en": "Conscious goals and rational focus: the King of Pentacles is a wealthy, experienced man, a successful businessman or financier."
      },
      "reversed": {
        "ua": "Ментальні сумніви або суб’єктивні ілюзії на рівні думок: жадібність, корупція або використання матеріальних ресурсів для маніпуляцій.",
        "en": "Mental confusion or conflicting conscious assumptions: greed, corruption, or the use of material resources for manipulation."
      }
    },
    "6": {
      "upright": {
        "ua": "Найближчий крок і розгортання подій: багатий, досвідчений чоловік, успішний бізнесмен або фінансист.",
        "en": "Upcoming development and next step: the King of Pentacles is a wealthy, experienced man, a successful businessman or financier."
      },
      "reversed": {
        "ua": "Тимчасові затримки або виклики в найближчій перспективі: жадібність, корупція або використання матеріальних ресурсів для маніпуляцій.",
        "en": "Temporary slowdown or cautionary phase ahead: greed, corruption, or the use of material resources for manipulation."
      }
    },
    "7": {
      "upright": {
        "ua": "Ваша внутрішня сила та самовідчуття: багатий, досвідчений чоловік, успішний бізнесмен або фінансист.",
        "en": "Your self-perception and personal stance: the King of Pentacles is a wealthy, experienced man, a successful businessman or financier."
      },
      "reversed": {
        "ua": "Внутрішня невпевненість або потреба зміцнити самооцінку: жадібність, корупція або використання матеріальних ресурсів для маніпуляцій.",
        "en": "Self-doubt or need to regain inner balance: greed, corruption, or the use of material resources for manipulation."
      }
    },
    "8": {
      "upright": {
        "ua": "Вплив зовнішнього оточення та фон ситуації: багатий, досвідчений чоловік, успішний бізнесмен або фінансист.",
        "en": "Outer environment and surrounding circumstances: the King of Pentacles is a wealthy, experienced man, a successful businessman or financier."
      },
      "reversed": {
        "ua": "Зовнішній тиск, нерозуміння або брак підтримки від оточення: жадібність, корупція або використання матеріальних ресурсів для маніпуляцій.",
        "en": "External pressure, friction, or lack of support around you: greed, corruption, or the use of material resources for manipulation."
      }
    },
    "9": {
      "upright": {
        "ua": "Головні надії та внутрішнє прагнення до результату: багатий, досвідчений чоловік, успішний бізнесмен або фінансист.",
        "en": "Primary hopes and inner aspiration for the outcome: the King of Pentacles is a wealthy, experienced man, a successful businessman or financier."
      },
      "reversed": {
        "ua": "Потаємні побоювання, тривожність або страх невдачі: жадібність, корупція або використання матеріальних ресурсів для маніпуляцій.",
        "en": "Underlying fears, apprehension, or anxiety: greed, corruption, or the use of material resources for manipulation."
      }
    },
    "10": {
      "upright": {
        "ua": "Кульмінаційний підсумок і ймовірне вирішення питання: багатий, досвідчений чоловік, успішний бізнесмен або фінансист.",
        "en": "Final outcome and resolution of the matter: the King of Pentacles is a wealthy, experienced man, a successful businessman or financier."
      },
      "reversed": {
        "ua": "Підсумок вимагатиме додаткової уваги та внутрішнього опрацювання: жадібність, корупція або використання матеріальних ресурсів для маніпуляцій.",
        "en": "Outcome requires further patience and integration: greed, corruption, or the use of material resources for manipulation."
      }
    }
  }
};

  function getPositionMeaning(card, spread, positionIndex, lang) {
    if (!card) return '';
    const l = (lang === 'uk' || lang === 'ua') ? 'ua' : 'en';
    const isRev = !!card.reversed;
    const cid = card.id;
    const posNum = positionIndex + 1;

    const slug = (spread && spread.slug) || '';
    if (slug === 'celtic-cross' && CELTIC_CROSS_DATA[cid] && CELTIC_CROSS_DATA[cid][posNum]) {
      const item = CELTIC_CROSS_DATA[cid][posNum];
      const branch = isRev ? item.reversed : item.upright;
      if (branch && branch[l]) return branch[l];
    }

    // Fallback concise snippet for any spread
    const raw = isRev
      ? (l === 'ua' ? (card.meaning_reversed || card.meaning_upright || '') : (card.meaning_reversed_en || card.meaning_upright_en || ''))
      : (l === 'ua' ? (card.meaning_upright || '') : (card.meaning_upright_en || ''));
    if (!raw) return '';
    let firstPart = raw.split(/\n+/)[0].trim();
    firstPart = firstPart.replace(/^[^—–\-:]{2,40}[—–\-:]\s*/i, '').replace(/^[\s—–\-:,]+/, '');
    const cut = firstPart.search(/[.!?](\s|$)/);
    if (cut > 15 && cut < 180) firstPart = firstPart.slice(0, cut + 1);
    else if (firstPart.length > 140) firstPart = firstPart.slice(0, 137).replace(/\s+\S*$/, '') + '…';
    if (firstPart.length > 0) firstPart = firstPart.charAt(0).toUpperCase() + firstPart.slice(1);
    return firstPart.trim();
  }

  global.TarotPositions = {
    CELTIC_CROSS_DATA,
    getPositionMeaning
  };
})(typeof window !== 'undefined' ? window : globalThis);
