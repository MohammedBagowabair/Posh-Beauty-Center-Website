(function(){
  var WA = "971502574703";
  var svcNames = {
    s1:["Moroccan Bath (60 min)","الحمام المغربي (60 دقيقة)"],
    s2:["Moroccan Bath + Hot Oil Hair Mask + Blow-dry","الحمام المغربي + ماسك الزيت الساخن للشعر + سشوار"],
    s3:["Body Massage","مساج الجسم"],
    s4:["VIP Spa Package","باقة السبا VIP"],
    s5:["Classic Manicure & Pedicure","مانيكير وباديكير كلاسيك"],
    s6:["Gelish Manicure & Pedicure","مانيكير وباديكير جل"],
    s7:["Nail Extensions, Chrome & Nail Art","تركيب الأظافر والكروم وفن الأظافر"],
    s8:["Haircut & Blow-dry","قص الشعر والسشوار"],
    s9:["Hair Colour, Highlights & Balayage","صبغة الشعر والهايلايت والبالياج"],
    s10:["Keratin or Protein + Haircut","الكيراتين أو البروتين + قص الشعر"],
    s11:["Facial","تنظيف البشرة (فيشل)"],
    s12:["Waxing & Threading","الشمع والخيط"],
    s13:["Eyelash Extensions","تركيب الرموش"],
    s14:["Lip Blush & Permanent Makeup","تاتو الشفاه والمكياج الدائم"]
  };
  function waMsg(svc){
    var en, ar;
    if(svc && svcNames[svc]){
      en = "Hello Posh Beauty Center! I'd like to book: " + svcNames[svc][0] + ". Preferred day & time: ";
      ar = "مرحباً بوش بيوتي سنتر! أود حجز: " + svcNames[svc][1] + ". اليوم والوقت المفضل: ";
    } else {
      en = "Hello Posh Beauty Center! I'd like to book an appointment. Service: ___  Preferred day & time: ___";
      ar = "مرحباً بوش بيوتي سنتر! أود حجز موعد. الخدمة: ___  اليوم والوقت المفضل: ___";
    }
    var text = document.documentElement.lang === "ar" ? ar + "\n\n" + en : en + "\n\n" + ar;
    return "https://wa.me/" + WA + "?text=" + encodeURIComponent(text);
  }
  var AR = {
    brand:"بوش", brandSub:"بيوتي سنتر", navServices:"قائمة الخدمات", navReviews:"التقييمات", navVisit:"زيارتنا", bookShort:"احجزي",
    eyebrow:"البرشاء 1 · دبي", h1a:"بوش", h1b:"بيوتي سنتر",
    lead:"الحمام المغربي، ومانيكير متقن، وشعر يستحق أن تتباهي به، على بُعد خطوات من مول الإمارات.",
    trustA:"+1,000", trustB:"تقييم على Google", trustC:"على Groupon", bookWa:"احجزي عبر واتساب",
    factHours:"يومياً · 9:30 صباحاً – 10 مساءً", factLadies:"للسيدات فقط", factPin:"خلف مول الإمارات",
    ethKicker:"أسلوب بوش", ethStatement:"دلال <em>كما يجب</em>. أكثر من ألف تقييم على Google تتحدث عن أيادٍ دقيقة، وصالون نظيف، وأسعار معقولة في البرشاء. كثير من العميلات يعدن إلينا منذ سنوات.",
    w1t:"الحمام المغربي", w1d:"بخار وصابون أسود وتقشير كامل، الطقس الذي تعود إليه عميلاتنا.",
    w2t:"فن الأظافر", w2d:"كلاسيك وجل وكروم وتركيب، بصبر واهتمام بأدق التفاصيل.",
    w3t:"الصبغة والكيراتين", w3d:"هايلايت وبالياج وعلاجات تنعيم على يد مصففات تطلبهن العميلات بالاسم.",
    w4t:"سهولة الوصول", w4d:"بناية الراحة، مقابل فندق سيتي ماكس وقريباً من المترو.",
    capSig:"الحمام المغربي", sigTag:"الطقس المميز", s1:"الحمام المغربي",
    s1d:"ستون دقيقة من الدفء: بخار يفتح المسام، وصابون أسود تقليدي، ثم تقشير كامل للجسم يترك بشرتك ناعمة ومتجددة. أضيفي ماسك الزيت الساخن والسشوار لتكتمل الأمسية.",
    sigCite:"تقييم على Groupon، أكتوبر 2026 · ترجمة: يا لها من تجربة، مريحة ومنعشة وشعور رائع … البخار والتقشير جيدان جداً.",
    from:"ابتداءً من", offerTag:"عرض حالي", bookThis:"احجزي الحمام المغربي",
    svcKicker:"قائمة الخدمات", svcTitle:"الخدمات", svcSub:"اختاري الخدمة للحجز عبر واتساب. رسالتك جاهزة، فقط أضيفي اليوم والوقت.",
    catSpa:"السبا والحمام المغربي", catHair:"الشعر", catNails:"الأظافر", catFace:"الوجه والجمال", ask:"اسألي عبر واتساب",
    s1n:"الحمام المغربي", s1m:"60 دقيقة · بخار وصابون أسود وتقشير",
    s2:"حمام مغربي وماسك شعر وسشوار", s2d:"حمام مغربي مع ماسك الزيت الساخن والسشوار",
    s3:"مساج الجسم", s3d:"مساج استرخاء لكامل الجسم",
    s4:"باقة السبا VIP", s4d:"حمام مغربي ومساج وفيشل وزيت ساخن وسشوار",
    s5:"مانيكير وباديكير كلاسيك", s5d:"تشكيل الأظافر والعناية بالجلد والطلاء",
    s6:"مانيكير وباديكير جل", s6d:"لون جل يدوم طويلاً بلمعان",
    s7:"تركيب وكروم وفن الأظافر", s7d:"تركيب كامل مع رسومات، أو جل كروم",
    s8:"قص الشعر والسشوار", s8d:"قص وتشذيب وتصفيف للسيدات",
    s9:"الصبغة والهايلايت والبالياج", s9d:"صبغة كاملة وتجديد الجذور وهايلايت",
    s10:"كيراتين أو بروتين + قص", s10d:"كيراتين برازيلي أو بروتين لتنعيم الشعر",
    s11:"تنظيف البشرة (فيشل)", s11d:"فيشل أساسي أو هيدرا فيشل 60 دقيقة",
    s12:"الشمع والخيط", s12d:"الذراعين أو الساقين أو كامل الجسم، والحواجب والشفة العليا",
    s13:"تركيب الرموش", s13d:"مجموعة كاملة من الرموش الفردية",
    s14:"تاتو الشفاه والمكياج الدائم", s14d:"حواجب ولون شفاه يدوم طويلاً",
    offers:"الأسعار المعروضة هي أسعار العروض الحالية. العروض تتغير باستمرار، اسألي عبر واتساب عن أسعار هذا الشهر.",
    galKicker:"داخل بوش", galTitle:"أناقة من الرأس حتى القدمين",
    capG1:"الصبغة والسشوار", capG2:"صالة الباديكير", capG3:"جل وكروم", capG4:"العناية بالبشرة",
    capGoogle:"تقييم على Google", capGroupon:"655 تقييماً على Groupon",
    revKicker:"بكلماتهن", revTitle:"وجهة البرشاء المفضلة ليوم من الدلال",
    qSrc:"تقييم عميلة", qGroupon:"تقييم على Groupon", q1date:"ديسمبر 2024", q2date:"فبراير 2024", q3date:"نوفمبر 2026",
    q1tr:"ترجمة: الصالون ليس فقط بأسعار مناسبة، بل أيضاً نظيف جداً ومُعتنى به.",
    q2tr:"ترجمة: صالون جميل وموظفات لطيفات. مانيكير وباديكير نظيف وصحي، وحمام مغربي وغيرها. والأسعار جيدة أيضاً.",
    q3tr:"ترجمة: أحبهم، وصالون بوش هو وجهتي للحمام المغربي وباقات الدلال.",
    qNote:"مقتطفات حرفية من تقييمات عامة للعميلات بلغتها الإنجليزية الأصلية، مع ترجمة.",
    visKicker:"زيارتنا", visTitle:"البرشاء 1، دبي", addrL:"العنوان", addr:"بناية الراحة، شارع البرشاء، البرشاء الأولى، دبي", addrNote:"خلف مول الإمارات، مقابل فندق سيتي ماكس",
    hoursL:"ساعات العمل", hours:"يومياً · 9:30 صباحاً – 10:00 مساءً", hoursNote:"قد تتغير المواعيد في رمضان والعطلات الرسمية.",
    phoneL:"الهاتف وواتساب", socialL:"التواصل الاجتماعي", callNow:"اتصلي", directions:"الاتجاهات",
    finTitle:"يوم دلالك القادم يبدأ برسالة واحدة", finSub:"أخبرينا بالخدمة والوقت المناسب لك، ونؤكد موعدك عبر واتساب.",
    footName:"بوش بيوتي سنتر", footAddr:"بناية الراحة · البرشاء 1 · دبي", demo:"نسخة تجريبية مُعدّة لبوش بيوتي سنتر", aiNote:"الصور توضيحية مولّدة بالذكاء الاصطناعي", fab:"واتساب",
    altSig:"بخار فوق مقعد حمام رخامي مع وعاء فضي وصابون أسود ومناشف بلون الليلك",
    altG1:"شعر بني طويل لامع بتموجات بالياج كراميل، من الخلف", altG2:"صالة باديكير بمقاعد جلدية سوداء على منصة من الرخام الأبيض",
    altG3:"مانيكير جل بلون الليلك والأبيض مع ظفر كروم", altG4:"سيروم ووعاء ماسك وأسطوانة للوجه ومناشف ليلكية على الرخام"
  };
  var EN = {}, nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function(n){ var k=n.getAttribute("data-i18n"); if(!(k in EN)) EN[k] = n.innerHTML; });
  var altNodes = document.querySelectorAll("[data-i18n-alt]"), EN_ALT = {};
  altNodes.forEach(function(n){ EN_ALT[n.getAttribute("data-i18n-alt")] = n.alt; });
  var toggle = document.getElementById("langToggle");
  function apply(lang){
    var h = document.documentElement;
    h.lang = lang; h.dir = lang === "ar" ? "rtl" : "ltr";
    nodes.forEach(function(n){ var k=n.getAttribute("data-i18n"); var v = lang === "ar" ? AR[k] : EN[k]; if (v !== undefined) n.innerHTML = v; });
    altNodes.forEach(function(n){ var k=n.getAttribute("data-i18n-alt"); var v = lang==="ar" ? AR[k] : EN_ALT[k]; if(v) n.alt = v; });
    toggle.textContent = lang === "ar" ? "English" : "العربية";
    toggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    document.title = lang === "ar" ? "بوش بيوتي سنتر · البرشاء 1، دبي | احجزي عبر واتساب" : "Posh Beauty Center · Al Barsha 1, Dubai | Book on WhatsApp";
    document.querySelectorAll(".wa-link").forEach(function(a){ a.href = waMsg(a.getAttribute("data-svc")); });
    try { localStorage.setItem("poshLang", lang); } catch(e){}
  }
  toggle.addEventListener("click", function(){ apply(document.documentElement.lang === "ar" ? "en" : "ar"); });
  var q = new URLSearchParams(location.search).get("lang"), saved = null;
  try { saved = localStorage.getItem("poshLang"); } catch(e){}
  apply(q === "ar" || q === "en" ? q : (saved || "en"));
  var nav = document.getElementById("nav");
  function onScroll(){ nav.classList.toggle("solid", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, {passive:true}); onScroll();
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !/static=1/.test(location.search)) {
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }); }, {threshold:.12, rootMargin:"0px 0px -40px 0px"});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add("in"); }); }
})();
