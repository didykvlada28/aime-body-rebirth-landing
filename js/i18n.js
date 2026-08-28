(function () {
  "use strict";

  var STORAGE_KEY = "aimie_lang";

  var translations = {
    en: {
      // Meta & Header
      "meta.title": "Cryotherapy | AIMIE — Sports & Athletic Recovery in Cyprus",
      "meta.description":
        "Whole-body cryotherapy designed for active bodies, athletes and gym-goers at AIMIE Cyprus. Support muscle recovery, reduce post-workout soreness and recharge faster.",
      "header.whatsapp": "Book Cryotherapy",

      // Hero
      "hero.eyebrow": "CRYOTHERAPY · SPORTS RECOVERY",
      "hero.title": "TRAIN HARD. RECOVER SMARTER.",
      "hero.text":
        "Whole-body cryotherapy designed for active bodies — helping support post-training recovery, reduce the feeling of muscle soreness and leave you feeling refreshed and ready for what’s next.",
      "hero.cta": "Book Cryotherapy",
      "hero.ctaNote": "Message us on WhatsApp to ask whether cryotherapy is right for your training routine.",
      "hero.tag1": "Whole-Body Cold",
      "hero.tag2": "Guided Session",
      "hero.tag3": "Solo & Duo Options",

      // Problem / Desire
      "problem.eyebrow": "WHEN TRAINING DOESN’T STOP",
      "problem.title": "YOUR TRAINING ENDS. RECOVERY STARTS.",
      "problem.text":
        "Hard sessions can leave muscles feeling sore, heavy and fatigued. True progress is what happens between one performance and the next. Cryotherapy is an efficient, targeted tool to make recovery an intentional part of your routine.",
      "problem.c1.title": "SORE MUSCLES",
      "problem.c1.text": "After intense lifting, CrossFit or high-volume sets.",
      "problem.c2.title": "HEAVY LEGS",
      "problem.c2.text": "After long runs, hard cycling sessions or leg day.",
      "problem.c3.title": "TRAINING FATIGUE",
      "problem.c3.text": "When your nervous system and body need a rapid reset.",
      "problem.c4.title": "NEXT SESSION READY",
      "problem.c4.text": "When you want to feel agile and ready to move at 100%.",
      "problem.cta": "Ask how cryotherapy fits your training split",

      // Science / Why Athletes Turn To Cold
      "science.eyebrow": "THE PRINCIPLE",
      "science.title": "WHY ATHLETES TURN TO COLD",
      "science.text":
        "Intense training creates natural micro-stress in muscle fibers. Cryotherapy exposes the body to controlled cold for a brief window, triggering an immediate physiological response: vasoconstriction, metabolic stimulation and a surge of oxygen-rich blood return upon stepping out.",
      "science.loopLabel": "THE PERFORMANCE LOOP",
      "science.step1": "TRAIN",
      "science.step1.desc": "Push your limits in the gym, on the track or court.",
      "science.step2": "RECOVER",
      "science.step2.desc": "Trigger deep physiological reset with controlled cold.",
      "science.step3": "PERFORM",
      "science.step3.desc": "Step into your next workout refreshed and agile.",
      "science.step4": "REPEAT",
      "science.step4.desc": "Build sustainable progress without training burnout.",

      // Benefits
      "benefits.eyebrow": "PERFORMANCE & RECOVERY",
      "benefits.title": "WHAT CRYOTHERAPY BRINGS TO YOUR ROUTINE",
      "benefits.subtitle":
        "Focused, responsible benefits for athletes and active individuals who take recovery seriously.",
      "benefits.b1.title": "MUSCLE RECOVERY",
      "benefits.b1.text":
        "Supports muscle recovery after demanding strength, endurance and functional sessions.",
      "benefits.b2.title": "LESS POST-WORKOUT SORENESS",
      "benefits.b2.text":
        "May help reduce the perception of muscle tightness and DOMS following intense exercise.",
      "benefits.b3.title": "RECOVERY FROM FATIGUE",
      "benefits.b3.text":
        "Controlled cold exposure delivers an immediate, energizing sensation throughout the body.",
      "benefits.b4.title": "INFLAMMATORY RESPONSE",
      "benefits.b4.text":
        "Cryotherapy has been studied for its supporting role in post-exercise inflammation markers.",
      "benefits.b5.title": "READY FOR WHAT’S NEXT",
      "benefits.b5.text":
        "Designed to complement the recovery window so you return to your next workout feeling restored.",
      "benefits.b6.title": "MENTAL RESET",
      "benefits.b6.text":
        "The short, intense cold experience triggers endorphin release, leaving you alert and revitalized.",
      "benefits.note":
        "Cryotherapy is a wellness recovery modality designed to complement an active lifestyle and structured training routine.",

      // How It Feels
      "experience.eyebrow": "THE EXPERIENCE",
      "experience.title": "A FEW MINUTES OF COLD. A DIFFERENT KIND OF RESET.",
      "experience.subtitle":
        "If you're trying cryotherapy for the first time, our specialists guide you through every second of the session. It is short, dry and comfortable.",
      "experience.step1.badge": "BEFORE",
      "experience.step1.title": "Briefing & Protective Gear",
      "experience.step1.text":
        "We explain the process, confirm your readiness, and provide specialized gloves, socks, slippers and headband for your extremities.",
      "experience.step2.badge": "COLD",
      "experience.step2.title": "The Cold Chamber",
      "experience.step2.text":
        "Step into our advanced whole-body chamber with dry chilled air. The cold is crisp and energizing, with our specialist right outside.",
      "experience.step3.badge": "AFTER",
      "experience.step3.title": "Instant Warmth & Energy",
      "experience.step3.text":
        "Step out to an immediate rush of blood flow, deep muscular lightness, clear focus and renewed energy for the rest of your day.",
      "experience.duoTitle": "SOLO & DUO SESSIONS AVAILABLE",
      "experience.duoText":
        "Train together, recover together. Book a duo cryotherapy session with your training partner or spouse at AIMIE.",
      "experience.cta": "Book a Session on WhatsApp",

      // Who Is It For
      "who.eyebrow": "BUILT FOR ACTIVE BODIES",
      "who.title": "DESIGNED FOR EVERY DISCIPLINE",
      "who.subtitle":
        "From heavy lifting to marathon miles and high-paced racket sports.",
      "who.cat1.title": "STRENGTH & POWER",
      "who.cat1.tags": "Gym · Weight Training · CrossFit · Hyrox · Powerlifting",
      "who.cat1.desc": "For lifters looking to ease muscle fatigue and stay consistent on heavy splits.",
      "who.cat2.title": "ENDURANCE",
      "who.cat2.tags": "Running · Cycling · Triathlon · Swimming · Track",
      "who.cat2.desc": "For runners and cyclists managing high weekly mileage and leg heaviness.",
      "who.cat3.title": "SPORT & AGILITY",
      "who.cat3.tags": "Padel · Tennis · Football · Basketball · Martial Arts",
      "who.cat3.desc": "For competitive players wanting fast turnaround between intense matches.",
      "who.cat4.title": "ACTIVE LIFESTYLE",
      "who.cat4.tags": "Daily Fitness · High Work Volume · Wellness Routine",
      "who.cat4.desc": "For anyone who values peak daily energy, body resilience and mental clarity.",
      "who.banner": "You don’t need to be a professional athlete to take recovery seriously.",
      "who.cta": "Book Your Recovery",

      // Philosophy
      "philosophy.eyebrow": "AIMIE PHILOSOPHY",
      "philosophy.title": "RECOVERY IS PART OF THE TRAINING.",
      "philosophy.p1":
        "Progress doesn’t happen only while you train. What you do between sessions matters just as much.",
      "philosophy.p2":
        "Cryotherapy gives you a dedicated moment to switch from exertion to regeneration — so taking care of your body becomes a deliberate competitive advantage, not an afterthought.",
      "philosophy.quote": "“Most people push hard in training. The ones who excel know how to recover.”",

      // Why AIMIE
      "trust.eyebrow": "THE AIMIE STANDARD",
      "trust.title": "PREMIUM RECOVERY IN CYPRUS",
      "trust.text":
        "At AIMIE, whole-body cryotherapy is delivered in a calm, private and refined clinical atmosphere with individual attention to your training goals.",
      "trust.t1.title": "CONTROLLED CHAMBER",
      "trust.t1.text": "Advanced electric whole-body cryotherapy technology with precision temperature control and optimal safety.",
      "trust.t2.title": "GUIDED BY SPECIALISTS",
      "trust.t2.text": "Our team prepares you, provides all gear, and stays by your side throughout the entire session.",
      "trust.t3.title": "CALM & PRIVATE SETTING",
      "trust.t3.text": "A refined aesthetic space in Cyprus where you can recharge without gym noise or distractions.",
      "trust.t4.title": "PERSONALIZED ROUTINE",
      "trust.t4.text": "Solo or duo sessions scheduled to fit your workout routine, race prep or rest days.",

      // Final CTA
      "final.eyebrow": "YOUR NEXT SESSION STARTS WITH RECOVERY",
      "final.title": "TRAIN. RECOVER. GO AGAIN.",
      "final.text":
        "Make whole-body cryotherapy part of your weekly recovery routine at AIMIE. Message us on WhatsApp to book your session or ask any questions.",
      "final.cta": "Book Cryotherapy on WhatsApp",
      "final.note": "Direct chat with AIMIE specialists · Quick response · Cyprus",

      // Sticky Mobile & Footer
      "sticky.cta": "Book Cryotherapy",
      "footer.text": "Whole-Body Cryotherapy · Sports & Athletic Recovery · Cyprus",
      "wa.message":
        "Hi, I'm interested in Cryotherapy at AIMIE. Can you tell me more about availability and booking a session?",

      // Image Alt Texts
      "alt.hero": "Athletes in whole-body cryotherapy cold chamber at AIMIE",
      "alt.problem": "Athletic training in gym — treadmill and strength workout",
      "alt.chamber": "Modern whole-body cryotherapy chamber with blue ambient lighting",
      "alt.duo": "Athletes experiencing a duo cryotherapy session in cold mist",
      "alt.athlete": "Athletic client ready for cryotherapy recovery session",
    },

    ru: {
      // Meta & Header
      "meta.title": "Криотерапия | AIMIE — Спортивное восстановление на Кипре",
      "meta.description":
        "Общая криотерапия для спортсменов, любителей фитнеса и активных людей в AIMIE на Кипре. Восстановление мышц, снижение крепатуры и быстрая перезагрузка.",
      "header.whatsapp": "Записаться на крио",

      // Hero
      "hero.eyebrow": "КРИОТЕРАПИЯ · СПОРТИВНОЕ ВОССТАНОВЛЕНИЕ",
      "hero.title": "ТРЕНИРУЙТЕСЬ НА МАКСИМУМЕ. ВОССТАНАВЛИВАЙТЕСЬ ГРАМОТНО.",
      "hero.text":
        "Общая криотерапия всего тела для активных людей — поддержка мышц после нагрузок, снижение ощущения забитости и готовность к следующей тренировке.",
      "hero.cta": "Записаться на криотерапию",
      "hero.ctaNote": "Напишите нам в WhatsApp — ответим на все вопросы о криотерапии для вашего тренировочного графика.",
      "hero.tag1": "Холод для всего тела",
      "hero.tag2": "Контроль специалиста",
      "hero.tag3": "Соло и парные сеансы",

      // Problem / Desire
      "problem.eyebrow": "КОГДА ТРЕНИРОВКИ НЕ ОСТАНАВЛИВАЮТСЯ",
      "problem.title": "ТРЕНИРОВКА ЗАКОНЧИЛАСЬ. НАЧИНАЕТСЯ ВОССТАНОВЛЕНИЕ.",
      "problem.text":
        "Тяжёлые подходы, беговые объёмы и интенсивные интервалы оставляют в мышцах усталость и скованность. Настоящий прогресс происходит в промежутке между тренировками. Криотерапия помогает сделать восстановление системным.",
      "problem.c1.title": "МЫШЕЧНАЯ ЗАБИТОСТЬ",
      "problem.c1.text": "После силовой работы с весами, кроссфита и тяжёлых тренировок.",
      "problem.c2.title": "ТЯЖЕСТЬ В НОГАХ",
      "problem.c2.text": "После длительного бега, сайклинга или дня ног.",
      "problem.c3.title": "ОБЩАЯ УСТАЛОСТЬ",
      "problem.c3.text": "Когда нервной системе и телу требуется быстрая перезагрузка.",
      "problem.c4.title": "ГОТОВНОСТЬ К СЛЕДУЮЩЕМУ ДНЮ",
      "problem.c4.text": "Когда важно выйти на следующую тренировку свежим и заряженным.",
      "problem.cta": "Узнать, как встроить криотерапию в ваш график тренировок",

      // Science / Why Athletes Turn To Cold
      "science.eyebrow": "ПРИНЦИП ДЕЙСТВИЯ",
      "science.title": "ПОЧЕМУ СПОРТСМЕНЫ ВЫБИРАЮТ ХОЛОД",
      "science.text":
        "Интенсивный тренинг создаёт естественный микростресс в мышечных волокнах. Кратковременное воздействие сухого контролируемого холода запускает физиологический отклик: сужение сосудов с последующим мощным притоком обогащённой кислородом крови после выхода из камеры.",
      "science.loopLabel": "ЦИКЛ ПРОГРЕССА",
      "science.step1": "ТРЕНИРОВКА",
      "science.step1.desc": "Выкладывайтесь на максимум в зале, на треке или корте.",
      "science.step2": "ВОССТАНОВЛЕНИЕ",
      "science.step2.desc": "Запускайте физиологическую перезагрузку холодом.",
      "science.step3": "РЕЗУЛЬТАТ",
      "science.step3.desc": "Возвращайтесь к тренировкам бодрыми и готовыми к росту.",
      "science.step4": "ПОВТОР",
      "science.step4.desc": "Прогрессируйте без накопленного истощения и перетренированности.",

      // Benefits
      "benefits.eyebrow": "ЭФФЕКТИВНОСТЬ И ВОССТАНОВЛЕНИЕ",
      "benefits.title": "ЧТО ДАЁТ КРИОТЕРАПИЯ АКТИВНОМУ ТЕЛУ",
      "benefits.subtitle":
        "Осознанные и научно обоснованные эффекты для спортсменов и всех, кто тренируется регулярно.",
      "benefits.b1.title": "ВОССТАНОВЛЕНИЕ МЫШЦ",
      "benefits.b1.text":
        "Поддерживает регенерацию мышечных тканей после силовых, интервальных и функциональных нагрузок.",
      "benefits.b2.title": "СНИЖЕНИЕ КРЕПАТУРЫ",
      "benefits.b2.text":
        "Помогает уменьшить ощущение боли, забитости и скованности в мышцах после тяжёлой работы.",
      "benefits.b3.title": "СНЯТИЕ УСТАЛОСТИ",
      "benefits.b3.text":
        "Контролируемый холод дарит мгновенное ощущение лёгкости, тонуса и перезагрузки всего тела.",
      "benefits.b4.title": "ПОДДЕРЖКА ПРИ ВОСПАЛЕНИЯХ",
      "benefits.b4.text":
        "Холод активно исследуется за его положительное влияние на маркеры микроповреждений после физических упражнений.",
      "benefits.b5.title": "ГОТОВНОСТЬ К СЛЕДУЮЩИМ НАГРУЗКАМ",
      "benefits.b5.text":
        "Оптимизирует окно восстановления, позволяя продуктивно продолжать тренировочный сплит.",
      "benefits.b6.title": "МЕНТАЛЬНАЯ ПЕРЕЗАГРУЗКА",
      "benefits.b6.text":
        "Сеанс холода стимулирует выброс эндорфинов, дарит ясность ума, прилив бодрости и энергии.",
      "benefits.note":
        "Криотерапия — это премиальный метод восстановления, дополняющий грамотный тренировочный план и здоровый образ жизни.",

      // How It Feels
      "experience.eyebrow": "КАК ПРОХОДИТ СЕАНС",
      "experience.title": "НЕСКОЛЬКО МИНУТ ХОЛОДА. НОВЫЙ УРОВЕНЬ ПЕРЕЗАГРУЗКИ.",
      "experience.subtitle":
        "Если вы пробуете криотерапию впервые — процесс полностью контролируется специалистом. Сухой холод ощущается бодрящим и переносится комфортно.",
      "experience.step1.badge": "ПОДГОТОВКА",
      "experience.step1.title": "Инструктаж и экипировка",
      "experience.step1.text":
        "Мы объясняем все этапы, проверяем самочувствие и выдаём мягкие перчатки, повязку, носочки и обувь для защиты конечностей.",
      "experience.step2.badge": "СЕАНС ХОЛОДА",
      "experience.step2.title": "Погружение в криокамеру",
      "experience.step2.text":
        "Короткий сеанс в современной камере с сухим охлаждённым воздухом. Специалист находится рядом и поддерживает связь каждую секунду.",
      "experience.step3.badge": "ПОСЛЕ СЕАНСА",
      "experience.step3.title": "Прилив тепла и энергии",
      "experience.step3.text":
        "Вы выходите с приятной волной тепла по всему телу, ощущением глубокой лёгкости в мышцах и ясной головой.",
      "experience.duoTitle": "ИНДИВИДУАЛЬНЫЕ И ПАРНЫЕ СЕАНСЫ",
      "experience.duoText":
        "Тренируетесь вместе — восстанавливайтесь вместе. В AIMIE доступны парные сеансы криотерапии для тренировочных партнёров и пар.",
      "experience.cta": "Записаться на сеанс в WhatsApp",

      // Who Is It For
      "who.eyebrow": "ДЛЯ КОГО",
      "who.title": "ПОДХОДИТ ДЛЯ ЛЮБОЙ ДИСЦИПЛИНЫ",
      "who.subtitle":
        "От силового тренинга и кроссфита до бега, велоспорта и динамичных игровых видов.",
      "who.cat1.title": "СИЛА И ТЯЖЁЛЫЙ ТРЕНИНГ",
      "who.cat1.tags": "Тренажёрный зал · Кроссфит · Hyrox · Пауэрлифтинг",
      "who.cat1.desc": "Для атлетов, стремящихся снизить усталость в мышцах и сохранять стабильность в тяжёлых циклах.",
      "who.cat2.title": "ЦИКЛИЧЕСКИЙ СПОРТ",
      "who.cat2.tags": "Бег · Велоспорт · Триатлон · Плавание · Трек",
      "who.cat2.desc": "Для бегунов и триатлетов при больших недельных километражах и ощущении тяжёлых ног.",
      "who.cat3.title": "ИГРОВЫЕ ВИДЫ И ДИНАМИКА",
      "who.cat3.tags": "Падел · Теннис · Футбол · Баскетбол · Единоборства",
      "who.cat3.desc": "Для игроков, которым необходимо быстро приходить в тонус между интенсивными матчами.",
      "who.cat4.title": "АКТИВНЫЙ ОБРАЗ ЖИЗНИ",
      "who.cat4.tags": "Регулярный спорт · Плотный график · Забота о ресурсе",
      "who.cat4.desc": "Для всех, кто ценит высокий уровень энергии, устойчивость тела к стрессу и продуктивность.",
      "who.banner": "Вам не обязательно быть профессиональным спортсменом, чтобы относиться к восстановлению серьёзно.",
      "who.cta": "Записаться на восстановление",

      // Philosophy
      "philosophy.eyebrow": "ФИЛОСОФИЯ AIMIE",
      "philosophy.title": "ВОССТАНОВЛЕНИЕ — ЭТО ЧАСТЬ ТРЕНИРОВКИ.",
      "philosophy.p1":
        "Прогресс создаётся не только во время выполнения подходов. То, как вы восстанавливаетесь между нагрузками, определяет результат.",
      "philosophy.p2":
        "Криотерапия даёт телу чёткий момент переключения от стресса к регенерации. Осознанная забота о мышцах становится вашим конкурентным преимуществом.",
      "philosophy.quote": "«Многие умеют тяжело тренироваться. До вершин доходят те, кто умеет восстанавливаться».",

      // Why AIMIE
      "trust.eyebrow": "СТАНДАРТ AIMIE",
      "trust.title": "ПРЕМИАЛЬНЫЙ ЦЕНТР ВОССТАНОВЛЕНИЯ НА КИПРЕ",
      "trust.text":
        "В AIMIE общая криотерапия проходит в эстетичном, спокойном и приватном пространстве с персональным вниманием к вашему тренировочному ритму.",
      "trust.t1.title": "СОВРЕМЕННАЯ КАМЕРА",
      "trust.t1.text": "Передовая криокамера для всего тела с точным контролем параметров температуры и максимальной безопасностью.",
      "trust.t2.title": "ОПЫТНАЯ КОМАНДА",
      "trust.t2.text": "Специалисты сопровождают вас на каждом шагу, выдают экипировку и контролируют весь процесс.",
      "trust.t3.title": "ПРИВАТНАЯ АТМОСФЕРА",
      "trust.t3.text": "Эстетичная клиника на Кипре без лишнего шума тренажёрных залов, созданная для полного расслабления.",
      "trust.t4.title": "ПЕРСОНАЛЬНЫЙ ГРАФИК",
      "trust.t4.text": "Индивидуальные или парные сеансы подбираются под ваш тренировочный сплит, отдых или старты.",

      // Final CTA
      "final.eyebrow": "ВАША СЛЕДУЮЩАЯ ТРЕНИРОВКА НАЧИНАЕТСЯ С ВОССТАНОВЛЕНИЯ",
      "final.title": "ТРЕНИРУЙТЕСЬ. ВОССТАНАВЛИВАЙТЕСЬ. ПОВТОРЯЙТЕ.",
      "final.text":
        "Сделайте общую криотерапию частью своей спортивной недели в AIMIE. Напишите нам в WhatsApp — мы подберём время и ответим на все вопросы.",
      "final.cta": "Записаться на криотерапию в WhatsApp",
      "final.note": "Прямая связь со специалистами AIMIE · Быстрый ответ · Кипр",

      // Sticky Mobile & Footer
      "sticky.cta": "Записаться на крио",
      "footer.text": "Общая криотерапия · Спортивное восстановление · Кипр",
      "wa.message":
        "Здравствуйте! Меня интересует криотерапия в AIMIE. Расскажите, пожалуйста, подробнее и помогите записаться.",

      // Image Alt Texts
      "alt.hero": "Атлеты в криокамере для всего тела в клинике AIMIE",
      "alt.problem": "Интенсивная тренировка в зале — бег и силовая работа",
      "alt.chamber": "Современная криокамера с неоновой подсветкой",
      "alt.duo": "Парный сеанс криотерапии для спортсменов в холодном тумане",
      "alt.athlete": "Атлет перед сеансом криотерапии в защитной экипировке",
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
      var text = t(lang, key);
      if (text) el.textContent = text;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      var text = t(lang, key);
      if (text) el.setAttribute("alt", text);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      var text = t(lang, key);
      if (text) el.setAttribute("aria-label", text);
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
