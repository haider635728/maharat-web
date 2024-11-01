function showSkillDetails(skill) {
    const skillTitle = document.getElementById("skillTitle");
    const skillContent = document.getElementById("skillContent");
    const skillDetails = {
        programming: [
            { text: "ابدأ بمشاريع صغيرة وتدرب على كتابة الأكواد.", detail: "ابدأ بتطبيق المفاهيم التي تعلمتها من خلال العمل على مشاريع صغيرة. يمكنك البدء ببناء تطبيقات بسيطة وتدريجياً التقدم نحو مشاريع أكثر تعقيداً." },
            { text: "تعلم أساسيات الخوارزميات وهياكل البيانات.", detail: "تعلم كيفية تنظيم البيانات ومعالجتها بشكل فعال. فهم هذه الأساسيات يساعدك على كتابة أكواد أكثر كفاءة." },
            { text: "تابع الدروس العملية والمشاريع المفتوحة المصدر.", detail: "الانضمام إلى مشاريع مفتوحة المصدر يتيح لك التعلم من المطورين الآخرين واكتساب خبرة عملية." },
            { text: "حافظ على تنظيم الأكواد واستخدام التعليقات.", detail: "تنظيم الأكواد يساعدك في القراءة والصيانة. استخدم التعليقات لتوضيح ما تقوم به الأكواد." },
            { text: "حاول حل المشاكل البرمجية يوميًا.", detail: "ممارسة حل المشاكل البرمجية تعزز مهاراتك. استخدم منصات مثل LeetCode وHackerRank." }
        ],
        design: [
            { text: "اختر أدوات التصميم المناسبة مثل Adobe XD وSketch.", detail: "تساعدك هذه الأدوات في تصميم واجهات مستخدم جذابة وسهلة الاستخدام." },
            { text: "تعلم مبادئ التصميم الأساسية (التوازن، التباين، الانسيابية).", detail: "فهم هذه المبادئ يساعدك في إنشاء تصميمات مريحة وجذابة." },
            { text: "اطلع على تصاميم أخرى للحصول على إلهام.", detail: "دراسة أعمال المصممين الآخرين يمكن أن توفر لك أفكار جديدة." },
            { text: "اعمل على مشاريع شخصية لتحسين مهاراتك.", detail: "تطبيق ما تعلمته في مشاريع شخصية يعزز مهاراتك." },
            { text: "كن على اطلاع على أحدث الاتجاهات في التصميم.", detail: "المشاركة في المجتمعات والمواقع الخاصة بالتصميم يمكنك من متابعة التطورات." }
        ],
        marketing: [
            { text: "افهم احتياجات الجمهور المستهدف.", detail: "قم بإجراء أبحاث لمعرفة ما يحتاجه جمهورك وما يفضلونه." },
            { text: "استفد من وسائل التواصل الاجتماعي للوصول إلى العملاء.", detail: "استخدام وسائل التواصل يمكن أن يزيد من الوعي بعلامتك التجارية." },
            { text: "استخدم استراتيجيات التسويق الرقمي (SEO، PPC).", detail: "تعلم كيفية تحسين موقعك لمحركات البحث لزيادة الظهور." },
            { text: "حلل النتائج وعدّل الاستراتيجية بناءً عليها.", detail: "استخدم أدوات التحليل لفهم أداء الحملات وتعديلها لتحسين النتائج." },
            { text: "تعلم كيفية كتابة محتوى جذاب.", detail: "المحتوى الجيد يجذب الانتباه ويساهم في تحويل الزوار إلى عملاء." }
        ],
        lifeSkills: [
            { text: "تعلم كيفية إدارة الوقت بفعالية.", detail: "استخدم تقنيات مثل تقنيات بومودورو أو قوائم المهام لتخطيط يومك." },
            { text: "قم بتطوير مهارات التواصل والإقناع.", detail: "تحسين مهاراتك في التواصل يمكن أن يؤثر بشكل إيجابي على حياتك الشخصية والمهنية." },
            { text: "اتخذ خطوات صغيرة نحو أهدافك الكبيرة.", detail: "تقسيم الأهداف الكبيرة إلى أهداف أصغر يجعلها أكثر قابلية للتحقيق." },
            { text: "تعلم كيفية التكيف مع التغيرات.", detail: "المرونة تساعدك في مواجهة التحديات بشكل أفضل." },
            { text: "كن واثقًا في قدراتك.", detail: "الثقة بالنفس تعزز من قدرتك على اتخاذ القرارات وتحقيق الأهداف." }
        ],
        study: [
            { text: "حدد أهدافًا يومية للدراسة.", detail: "تحديد أهداف صغيرة يمكن أن يساعد في تحسين التركيز والتحفيز." },
            { text: "استخدم خرائط ذهنية لتسهيل المعلومات.", detail: "هذه التقنية تساعد في تنظيم الأفكار والمعلومات بشكل بصري." },
            { text: "راجع المواد بشكل دوري.", detail: "المراجعة المنتظمة تساعد في ترسيخ المعلومات في الذاكرة." },
            { text: "خذ فترات راحة منتظمة.", detail: "توفير فترات للراحة يساعد في تحسين التركيز والإنتاجية." },
            { text: "اختر مكانًا هادئًا ومنظمًا للدراسة.", detail: "البيئة المناسبة تعزز من القدرة على التركيز." }
        ]
    };

    // تحديث عنوان المهارة والمحتوى
    skillTitle.innerText = `تفاصيل مهارة ${skill}`;
    skillContent.innerHTML = skillDetails[skill].map(item => `<li onclick="showFeatureDetails('${item.text}')">${item.text}</li>`).join("");
    document.getElementById("skillDetails").style.display = "block";
}

function showFeatureDetails(feature) {
    const featureTitle = document.getElementById("featureTitle");
    const featureContent = document.getElementById("featureContent");
    
    const details = {
        "ابدأ بمشاريع صغيرة وتدرب على كتابة الأكواد.": "ابدأ بتطبيق المفاهيم التي تعلمتها من خلال العمل على مشاريع صغيرة. يمكنك البدء ببناء تطبيقات بسيطة وتدريجياً التقدم نحو مشاريع أكثر تعقيداً.",
        "تعلم أساسيات الخوارزميات وهياكل البيانات.": "تعلم كيفية تنظيم البيانات ومعالجتها بشكل فعال. فهم هذه الأساسيات يساعدك على كتابة أكواد أكثر كفاءة.",
        "تابع الدروس العملية والمشاريع المفتوحة المصدر.": "الانضمام إلى مشاريع مفتوحة المصدر يتيح لك التعلم من المطورين الآخرين واكتساب خبرة عملية.",
        "حافظ على تنظيم الأكواد واستخدام التعليقات.": "تنظيم الأكواد يساعدك في القراءة والصيانة. استخدم التعليقات لتوضيح ما تقوم به الأكواد.",
        "حاول حل المشاكل البرمجية يوميًا.": "ممارسة حل المشاكل البرمجية تعزز مهاراتك. استخدم منصات مثل LeetCode وHackerRank.",
        "اختر أدوات التصميم المناسبة مثل Adobe XD وSketch.": "تساعدك هذه الأدوات في تصميم واجهات مستخدم جذابة وسهلة الاستخدام.",
        "تعلم مبادئ التصميم الأساسية (التوازن، التباين، الانسيابية).": "فهم هذه المبادئ يساعدك في إنشاء تصميمات مريحة وجذابة.",
        "اطلع على تصاميم أخرى للحصول على إلهام.": "دراسة أعمال المصممين الآخرين يمكن أن توفر لك أفكار جديدة.",
        "اعمل على مشاريع شخصية لتحسين مهاراتك.": "تطبيق ما تعلمته في مشاريع شخصية يعزز مهاراتك.",
        "كن على اطلاع على أحدث الاتجاهات في التصميم.": "المشاركة في المجتمعات والمواقع الخاصة بالتصميم يمكنك من متابعة التطورات.",
        "افهم احتياجات الجمهور المستهدف.": "قم بإجراء أبحاث لمعرفة ما يحتاجه جمهورك وما يفضلونه.",
        "استفد من وسائل التواصل الاجتماعي للوصول إلى العملاء.": "استخدام وسائل التواصل يمكن أن يزيد من الوعي بعلامتك التجارية.",
        "استخدم استراتيجيات التسويق الرقمي (SEO، PPC).": "تعلم كيفية تحسين موقعك لمحركات البحث لزيادة الظهور.",
        "حلل النتائج وعدّل الاستراتيجية بناءً عليها.": "استخدم أدوات التحليل لفهم أداء الحملات وتعديلها لتحسين النتائج.",
        "تعلم كيفية كتابة محتوى جذاب.": "المحتوى الجيد يجذب الانتباه ويساهم في تحويل الزوار إلى عملاء.",
        "تعلم كيفية إدارة الوقت بفعالية.": "استخدم تقنيات مثل تقنيات بومودورو أو قوائم المهام لتخطيط يومك.",
        "قم بتطوير مهارات التواصل والإقناع.": "تحسين مهاراتك في التواصل يمكن أن يؤثر بشكل إيجابي على حياتك الشخصية والمهنية.",
        "اتخذ خطوات صغيرة نحو أهدافك الكبيرة.": "تقسيم الأهداف الكبيرة إلى أهداف أصغر يجعلها أكثر قابلية للتحقيق.",
        "تعلم كيفية التكيف مع التغيرات.": "المرونة تساعدك في مواجهة التحديات بشكل أفضل.",
        "كن واثقًا في قدراتك.": "الثقة بالنفس تعزز من قدرتك على اتخاذ القرارات وتحقيق الأهداف.",
        "حدد أهدافًا يومية للدراسة.": "تحديد أهداف صغيرة يمكن أن يساعد في تحسين التركيز والتحفيز.",
        "استخدم خرائط ذهنية لتسهيل المعلومات.": "هذه التقنية تساعد في تنظيم الأفكار والمعلومات بشكل بصري.",
        "راجع المواد بشكل دوري.": "المراجعة المنتظمة تساعد في ترسيخ المعلومات في الذاكرة.",
        "خذ فترات راحة منتظمة.": "توفير فترات للراحة يساعد في تحسين التركيز والإنتاجية.",
        "اختر مكانًا هادئًا ومنظمًا للدراسة.": "البيئة المناسبة تعزز من القدرة