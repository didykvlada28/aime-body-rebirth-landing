(function () {
  "use strict";

  var STORAGE_KEY = "aimie_lang";

  var translations = {
    en: {
      "meta.title": "Body Rebirth Ritual | AIMIE — Premium Body Recovery Protocol",
      "meta.description":
        "AIMIE Body Rebirth Ritual — a premium 3-step body recovery protocol: Osmothermy, Endospheres and Cryotherapy. Book on WhatsApp. Cyprus.",
      "header.whatsapp": "WhatsApp",
      "hero.badge": "Premium Body Recovery Protocol",
      "hero.title": "Body Rebirth Ritual",
      "hero.subtitle": "3-step body recovery protocol: Heat → Stimulation → Cooling",
      "hero.text":
        "Three technologies. One ritual. Osmothermy, Endospheres and Cryotherapy help work on body contours, skin quality and a feeling of lightness — just the way we love it at Aimie.",
      "hero.cta": "Book via WhatsApp",
      "hero.ctaNote": "Ask us if the protocol is right for you.",
      "hero.heat": "Heat",
      "hero.stimulation": "Stimulation",
      "hero.cooling": "Cooling",
      "hero.formulaLabel": "Protocol sequence",
      "problem.label": "Understanding the feeling",
      "problem.title": "When your body feels heavy, puffy or less toned",
      "problem.text":
        "Sometimes the issue is not only weight. Puffiness, sluggish microcirculation, fluid retention and reduced skin tone can make the body feel heavier and look less refined.",
      "problem.b1": "Body puffiness",
      "problem.b2": "Heavy legs or body",
      "problem.b3": "Less defined silhouette",
      "problem.b4": "Reduced skin tone",
      "problem.b5": "Uneven-looking skin texture",
      "problem.b6": "Desire to feel lighter and more confident",
      "problem.cta": "Want to understand if this protocol fits you? Message us on WhatsApp",
      "solution.label": "The protocol",
      "solution.title": "One ritual. Three technologies. One recovery flow.",
      "solution.text":
        "AIMIE Body Rebirth Ritual combines three stages that work together in sequence: warming, stimulation and cooling.",
      "solution.stage1": "Stage 1",
      "solution.stage2": "Stage 2",
      "solution.stage3": "Stage 3",
      "solution.osmo.title": "Osmothermy",
      "solution.osmo.tag": "Warm preparation",
      "solution.osmo.text":
        "Gentle heat helps prepare the body, relax the tissues and support microcirculation.",
      "solution.endo.title": "Endospheres",
      "solution.endo.tag": "Drainage & tone support",
      "solution.endo.text":
        "Mechanical stimulation helps support lymphatic drainage, tissue mobility and skin tone.",
      "solution.cryo.title": "Cryotherapy",
      "solution.cryo.tag": "Cooling recovery",
      "solution.cryo.text":
        "Controlled cooling helps refresh the body and complete the recovery protocol.",
      "how.label": "The sequence",
      "how.title": "Heat → Stimulation → Cooling",
      "how.text":
        "The protocol is designed as a complete body recovery sequence. First, the body is prepared with warmth. Then, tissue stimulation supports movement and drainage. Finally, cooling recovery leaves the body feeling fresh, lighter and restored.",
      "how.s1.title": "Heat — Osmothermy",
      "how.s1.text":
        "Warm preparation relaxes tissues and supports microcirculation before stimulation.",
      "how.s2.title": "Stimulation — Endospheres",
      "how.s2.text":
        "Rhythmic mechanical stimulation supports drainage, mobility and skin tone.",
      "how.s3.title": "Cooling — Cryotherapy",
      "how.s3.text":
        "Controlled cooling completes the ritual with freshness and a feeling of lightness.",
      "benefits.label": "Designed to support",
      "benefits.title": "What the protocol is designed to support",
      "benefits.b1": "Drainage support",
      "benefits.b2": "Feeling of lightness",
      "benefits.b3": "Skin tone support",
      "benefits.b4": "Smoother-looking skin",
      "benefits.b5": "More refined silhouette",
      "benefits.b6": "Body recovery & freshness",
      "benefits.note":
        "Results and sensations may vary depending on the body, lifestyle and number of sessions.",
      "results.label": "Tissue support",
      "results.title": "Smoother-looking skin texture",
      "results.text":
        "Supported drainage and tissue mobility may contribute to a more refined skin appearance over time.",
      "results.note": "Illustrative guide only. Individual results and sensations vary.",
      "emotional.label": "A ritual, not a routine",
      "emotional.title": "A ritual for women who want to feel lighter in their body",
      "emotional.text":
        "Body Rebirth Ritual is created for women who want a smarter, more pleasant and non-aggressive approach to body care. It is not only about appearance — it is about the feeling of returning to your body with more lightness, freshness and confidence.",
      "who.label": "Personal fit",
      "who.title": "Is this protocol for you?",
      "who.text": "This treatment may be suitable if you:",
      "who.b1": "feel puffiness or heaviness in the body",
      "who.b2": "want to support skin tone",
      "who.b3": "want a more refined body feeling",
      "who.b4": "prefer non-invasive body care",
      "who.b5": "are looking for a premium recovery ritual",
      "who.b6": "want to prepare your body before an event, vacation or season",
      "who.cta": "Ask us on WhatsApp",
      "trust.label": "Why AIMIE",
      "trust.title": "Why AIMIE",
      "trust.text":
        "At AIMIE, every body protocol is selected with attention to the client's goals, comfort and condition. Before booking, you can message us on WhatsApp — we will explain the protocol, answer your questions and help you decide if it is suitable for you.",
      "trust.t1": "Premium aesthetic clinic",
      "trust.t1d": "A calm, refined environment designed for comfort and privacy.",
      "trust.t2": "Professional team",
      "trust.t2d": "Experienced specialists who guide you through every stage of the ritual.",
      "trust.t3": "Modern technologies",
      "trust.t3d": "Osmothermy, Endospheres and Cryotherapy — combined in one seamless protocol.",
      "trust.t4": "Personalized approach",
      "trust.t4d": "We listen to your goals and help you choose the right care for your body.",
      "trust.t5": "Calm & private atmosphere",
      "trust.t5d": "A quiet, unhurried space where you can fully relax and restore.",
      "faq.label": "Questions",
      "faq.title": "Frequently asked",
      "faq.q1": "How long does the Body Rebirth Ritual take?",
      "faq.a1":
        "The full protocol typically takes around 60–90 minutes, including all three stages. We will confirm the exact timing when you message us on WhatsApp.",
      "faq.q2": "Is the protocol painful or aggressive?",
      "faq.a2":
        "No. Body Rebirth Ritual is designed as a gentle, non-invasive recovery experience. Each stage is adjusted to your comfort.",
      "faq.q3": "How many sessions are recommended?",
      "faq.a3":
        "This depends on your body and goals. Many clients start with a course of sessions. We will recommend a plan after a brief consultation on WhatsApp.",
      "faq.q4": "Will I lose weight or remove cellulite permanently?",
      "faq.a4":
        "Body Rebirth Ritual is a body recovery protocol — not a weight-loss treatment. It supports drainage, skin tone and a lighter body feeling. Results vary from person to person.",
      "faq.q5": "Where is AIMIE located?",
      "faq.a5":
        "AIMIE is based in Cyprus. Message us on WhatsApp for the exact location, directions and available appointment times.",
      "final.title": "Ready to feel lighter, fresher and more connected to your body?",
      "final.text":
        "Message AIMIE on WhatsApp to learn more about Body Rebirth Ritual and book your consultation.",
      "final.note": "We typically reply within a few hours.",
      "footer.text": "Premium body recovery & aesthetic care · Cyprus",
      "wa.message":
        "Hi, I'm interested in AIMIE Body Rebirth Ritual. Can you tell me more and help me book?",
      "alt.hero": "Premium body treatment at AIMIE clinic",
      "alt.osmo": "Warm osmothermy preparation with steam and beige towels",
      "alt.composite": "AIMIE Body Rebirth Ritual — Osmothermy, Endospheres and Cryotherapy",
      "alt.explainer": "Body Rebirth Ritual — Heat, Stimulation and Cooling",
      "alt.diagram": "Illustrative guide to skin tissue and drainage support",
    },
    ru: {
      "meta.title": "Body Rebirth Ritual | AIMIE — премиальный ритуал ухода за телом",
      "meta.description":
        "AIMIE Body Rebirth Ritual — премиальный трёхэтапный ритуал: Осмотермия, Эндосфера и Криотерапия. Запись в WhatsApp. Кипр.",
      "header.whatsapp": "WhatsApp",
      "hero.badge": "Премиальный ритуал ухода за телом",
      "hero.title": "Body Rebirth Ritual",
      "hero.subtitle": "Три этапа: тепло → стимуляция → охлаждение",
      "hero.text":
        "Три технологии. Один ритуал. Осмотермия, Эндосфера и Криотерапия помогают работать с контурами тела, качеством кожи и ощущением лёгкости — именно так, как мы любим в Aimie.",
      "hero.cta": "Записаться в WhatsApp",
      "hero.ctaNote": "Спросите нас — подойдёт ли этот ритуал именно вам.",
      "hero.heat": "Тепло",
      "hero.stimulation": "Стимуляция",
      "hero.cooling": "Охлаждение",
      "hero.formulaLabel": "Этапы ритуала",
      "problem.label": "Вам это знакомо",
      "problem.title": "Когда тело ощущается тяжёлым, отёчным и потерявшим лёгкость",
      "problem.text":
        "Иногда дело не только в весе. Отёчность, задержка жидкости, снижение тонуса кожи и замедленная микроциркуляция могут создавать ощущение тяжести и делать тело менее подтянутым визуально.",
      "problem.b1": "Отёчность тела",
      "problem.b2": "Тяжесть в ногах или во всём теле",
      "problem.b3": "Силуэт кажется менее чётким",
      "problem.b4": "Кожа теряет тонус",
      "problem.b5": "Неровная текстура кожи",
      "problem.b6": "Хочется чувствовать себя легче и увереннее",
      "problem.cta": "Хотите понять, подойдёт ли вам этот ритуал? Напишите нам в WhatsApp",
      "solution.label": "Протокол",
      "solution.title": "Один ритуал. Три технологии. Одна цельная программа.",
      "solution.text":
        "AIMIE Body Rebirth Ritual — три этапа, которые плавно сменяют друг друга: сначала тепло, затем стимуляция, в завершение — охлаждение.",
      "solution.stage1": "Этап 1",
      "solution.stage2": "Этап 2",
      "solution.stage3": "Этап 3",
      "solution.osmo.title": "Осмотермия",
      "solution.osmo.tag": "Тёплая подготовка",
      "solution.osmo.text":
        "Мягкое тепло подготавливает тело, расслабляет ткани и способствует микроциркуляции.",
      "solution.endo.title": "Эндосфера",
      "solution.endo.tag": "Дренаж и тонус",
      "solution.endo.text":
        "Ритмичная стимуляция мягко активизирует лимфодренаж, улучшает подвижность тканей и поддерживает тонус кожи.",
      "solution.cryo.title": "Криотерапия",
      "solution.cryo.tag": "Завершающее охлаждение",
      "solution.cryo.text":
        "Деликатное охлаждение освежает тело и завершает ритуал.",
      "how.label": "Как это устроено",
      "how.title": "Тепло → Стимуляция → Охлаждение",
      "how.text":
        "Ритуал выстроен как единая программа: сначала тепло подготавливает тело, затем стимуляция поддерживает дренаж и мягко воздействует на ткани, а в конце охлаждение дарит свежесть и ощущение лёгкости.",
      "how.s1.title": "Тепло — Осмотермия",
      "how.s1.text":
        "Тёплая подготовка расслабляет ткани и способствует микроциркуляции перед стимуляцией.",
      "how.s2.title": "Стимуляция — Эндосфера",
      "how.s2.text":
        "Ритмичная стимуляция поддерживает дренаж, улучшает подвижность тканей и тонус кожи.",
      "how.s3.title": "Охлаждение — Криотерапия",
      "how.s3.text":
        "Деликатное охлаждение завершает ритуал, даря свежесть и ощущение лёгкости.",
      "benefits.label": "Поддержка тела",
      "benefits.title": "Протокол создан для поддержки тела",
      "benefits.b1": "Поддержка дренажа",
      "benefits.b2": "Ощущение лёгкости",
      "benefits.b3": "Тонус кожи",
      "benefits.b4": "Более ровная и гладкая кожа",
      "benefits.b5": "Более утончённый силуэт",
      "benefits.b6": "Свежесть и восстановление",
      "benefits.note":
        "Ощущения и результаты могут отличаться — всё зависит от особенностей организма, образа жизни и количества сеансов.",
      "results.label": "Тонус и текстура",
      "results.title": "Более ровная текстура кожи",
      "results.text":
        "Поддержка дренажа и мягкого воздействия на ткани со временем может сделать кожу более ровной и ухоженной.",
      "results.note": "Материал носит иллюстративный характер. Результаты и ощущения индивидуальны.",
      "emotional.label": "Ритуал, а не процедура",
      "emotional.title": "Ритуал для женщин, которые хотят чувствовать своё тело легче",
      "emotional.text":
        "Body Rebirth Ritual создан для женщин, которым важен деликатный, приятный и ненавязчивый уход за телом. Это не только про внешность — это про близость к себе, лёгкость, свежесть и уверенность.",
      "who.label": "Вам это подойдёт?",
      "who.title": "Этот ритуал для вас?",
      "who.text": "Он может подойти, если вы:",
      "who.b1": "чувствуете отёчность или тяжесть в теле",
      "who.b2": "хотите поддержать тонус кожи",
      "who.b3": "хотите, чтобы тело ощущалось легче и утончённее",
      "who.b4": "предпочитаете деликатный, неинвазивный уход",
      "who.b5": "ищете премиальный ритуал восстановления",
      "who.b6": "готовитесь к событию, отпуску или новому сезону",
      "who.cta": "Напишите нам в WhatsApp",
      "trust.label": "Почему AIMIE",
      "trust.title": "Почему AIMIE",
      "trust.text":
        "В AIMIE каждый протокол подбирается с учётом ваших целей, комфорта и состояния. Перед записью напишите нам в WhatsApp — расскажем о ритуале, ответим на вопросы и поможем понять, подходит ли он вам.",
      "trust.t1": "Премиальная эстетическая клиника",
      "trust.t1d": "Спокойная, изысканная атмосфера — для комфорта и уединения.",
      "trust.t2": "Профессиональная команда",
      "trust.t2d": "Опытные специалисты сопровождают вас на каждом этапе ритуала.",
      "trust.t3": "Современные технологии",
      "trust.t3d": "Осмотермия, Эндосфера и Криотерапия — в одной программе, без разрыва между этапами.",
      "trust.t4": "Индивидуальный подход",
      "trust.t4d": "Мы внимательно слушаем ваши цели и помогаем выбрать подходящий уход.",
      "trust.t5": "Спокойная и приватная атмосфера",
      "trust.t5d": "Тихое, неспешное пространство, где можно полностью расслабиться и восстановить силы.",
      "faq.label": "Вопросы",
      "faq.title": "Частые вопросы",
      "faq.q1": "Сколько длится Body Rebirth Ritual?",
      "faq.a1":
        "Полный ритуал обычно занимает 60–90 минут — все три этапа включены. Точное время уточним, когда вы напишете нам в WhatsApp.",
      "faq.q2": "Больно ли это?",
      "faq.a2":
        "Нет. Body Rebirth Ritual — мягкий, деликатный и неинвазивный. Каждый этап адаптируется под ваш комфорт.",
      "faq.q3": "Сколько сеансов рекомендуется?",
      "faq.a3":
        "Всё зависит от ваших целей и особенностей тела. Многие начинают с курса. Мы порекомендуем план после короткой консультации в WhatsApp.",
      "faq.q4": "Похудею ли я или избавлюсь от целлюлита навсегда?",
      "faq.a4":
        "Body Rebirth Ritual — ритуал восстановления тела, а не программа похудения. Он мягко поддерживает дренаж, тонус кожи и ощущение лёгкости. Результаты у каждой женщины свои.",
      "faq.q5": "Где находится AIMIE?",
      "faq.a5":
        "AIMIE на Кипре. Напишите нам в WhatsApp — пришлём адрес, маршрут и свободные окна для записи.",
      "final.title": "Готовы почувствовать больше лёгкости в теле?",
      "final.text":
        "Напишите AIMIE в WhatsApp, чтобы узнать больше о Body Rebirth Ritual и записаться на консультацию.",
      "final.note": "Обычно отвечаем в течение нескольких часов.",
      "footer.text": "Премиальный уход за телом · Кипр",
      "wa.message":
        "Здравствуйте! Меня интересует Body Rebirth Ritual в AIMIE. Расскажите, пожалуйста, подробнее и помогите записаться.",
      "alt.hero": "Премиальный уход за телом в клинике AIMIE",
      "alt.osmo": "Тёплая подготовка осмотермии — пар и бежевые полотенца",
      "alt.composite": "AIMIE Body Rebirth Ritual — Осмотермия, Эндосфера и Криотерапия",
      "alt.explainer": "Body Rebirth Ritual — тепло, стимуляция и охлаждение",
      "alt.diagram": "Иллюстрация: тонус кожи и поддержка дренажа",
    },
  };

  function getLangFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var lang = params.get("lang");
    if (lang === "ru" || lang === "en") return lang;
    return null;
  }

  function getCurrentLang() {
    return window.AIMIE_LANG || "en";
  }

  function setLang(lang) {
    if (!translations[lang]) lang = "en";
    window.AIMIE_LANG = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateLangButtons(lang);
    updateMeta(lang);
    document.dispatchEvent(new CustomEvent("aimie:langchange", { detail: { lang: lang } }));
  }

  function t(lang, key) {
    var pack = translations[lang] || translations.en;
    return pack[key] !== undefined ? pack[key] : translations.en[key] || "";
  }

  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.textContent = t(lang, key);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(lang, el.getAttribute("data-i18n-alt")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(lang, el.getAttribute("data-i18n-aria")));
    });
  }

  function updateMeta(lang) {
    document.title = t(lang, "meta.title");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t(lang, "meta.description"));
  }

  function updateLangButtons(lang) {
    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function initLangSwitch() {
    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        setLang(lang);
        var url = new URL(window.location.href);
        url.searchParams.set("lang", lang);
        window.history.replaceState({}, "", url);
      });
    });
  }

  function init() {
    var lang =
      getLangFromUrl() ||
      (function () {
        try {
          return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
          return null;
        }
      })() ||
      "en";
    if (lang !== "ru" && lang !== "en") lang = "en";
    window.AIMIE_LANG = lang;
    initLangSwitch();
    setLang(lang);
  }

  window.AIMIE_I18N = {
    getLang: getCurrentLang,
    t: function (key) {
      return t(getCurrentLang(), key);
    },
    setLang: setLang,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
