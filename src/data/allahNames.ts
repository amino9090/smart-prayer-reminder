export interface AllahName {
  id: number;
  arabic: string;
  transliteration: string;
  meaning: string;
  explanation: string;
  benefits: string[];
}

export const allahNames: AllahName[] = [
  {
    id: 1,
    arabic: "الرَّحْمَنُ",
    transliteration: "Ar-Rahman",
    meaning: "الرحمن الرحيم",
    explanation: "هو الذي وسعت رحمته كل شيء، ورحمته عامة لجميع الخلائق في الدنيا وللمؤمنين في الآخرة",
    benefits: ["يكسب محبة الناس", "يجلب الرحمة والبركة", "يفتح أبواب الرزق"]
  },
  {
    id: 2,
    arabic: "الرَّحِيمُ",
    transliteration: "Ar-Rahim",
    meaning: "الرحيم بالمؤمنين",
    explanation: "هو المنعم أبداً، البر الرؤوف، الذي يرحم عباده المؤمنين برحمة خاصة يوم القيامة",
    benefits: ["يجلب الرحمة من الله", "يخفف الآلام والأحزان", "يعين على التوبة"]
  },
  {
    id: 3,
    arabic: "الْمَلِكُ",
    transliteration: "Al-Malik",
    meaning: "الملك المالك لكل شيء",
    explanation: "هو المالك لجميع الموجودات، المتصرف فيها بلا منازع ولا معارض",
    benefits: ["يقوي الإيمان والثقة بالله", "يزيل الخوف والقلق", "يعطي الثبات والاستقرار"]
  },
  {
    id: 4,
    arabic: "الْقُدُّوسُ",
    transliteration: "Al-Quddus",
    meaning: "الطاهر المنزه عن العيوب",
    explanation: "هو المنزه عن كل عيب ونقص، المطهر من كل ما لا يليق بجلاله",
    benefits: ["يطهر القلب من الذنوب", "يزيل الأفكار السلبية", "يجلب الطمأنينة"]
  },
  {
    id: 5,
    arabic: "السَّلَامُ",
    transliteration: "As-Salam",
    meaning: "السلام الذي سلم من كل عيب",
    explanation: "هو السالم من جميع العيوب والنقائص، الذي يسلم عباده المؤمنين من كل مكروه",
    benefits: ["يجلب السلام النفسي", "يحفظ من الأخطار", "يزيل القلق والاضطراب"]
  },
  {
    id: 6,
    arabic: "الْمُؤْمِنُ",
    transliteration: "Al-Mu'min",
    meaning: "المؤمن المصدق",
    explanation: "هو الذي يصدق وعده، ويؤمن عباده من عذابه، ويشهد لنفسه بالوحدانية",
    benefits: ["يقوي الإيمان", "يمنح الأمان والطمأنينة", "يحفظ من الخوف"]
  },
  {
    id: 7,
    arabic: "الْمُهَيْمِنُ",
    transliteration: "Al-Muhaymin",
    meaning: "المهيمن الرقيب",
    explanation: "هو الرقيب على خلقه، المطلع على أحوالهم، الشاهد على أفعالهم",
    benefits: ["يراقب الله في السر والعلن", "يحمي من الظلم", "يعطي القوة"]
  },
  {
    id: 8,
    arabic: "الْعَزِيزُ",
    transliteration: "Al-Aziz",
    meaning: "العزيز القوي",
    explanation: "هو القوي الغالب الذي لا يقهر، والعزيز الذي عز كل شيء فقهره",
    benefits: ["يمنح العزة والكرامة", "يقوي الإرادة", "يحمي من الذل"]
  },
  {
    id: 9,
    arabic: "الْجَبَّارُ",
    transliteration: "Al-Jabbar",
    meaning: "الجبار القهار",
    explanation: "هو الذي يجبر الضعيف والمنكسر، والقاهر الذي قهر كل شيء",
    benefits: ["يجبر القلوب المنكسرة", "يشفي الأمراض", "يعيد الأمور لنصابها"]
  },
  {
    id: 10,
    arabic: "الْمُتَكَبِّرُ",
    transliteration: "Al-Mutakabbir",
    meaning: "المتكبر العظيم",
    explanation: "هو الذي له التكبر والعظمة، المتعالي عن صفات الخلق",
    benefits: ["يزيل الكبر من النفس", "يعطي التواضع", "يرفع المقام"]
  },
  {
    id: 11,
    arabic: "الْخَالِقُ",
    transliteration: "Al-Khaliq",
    meaning: "الخالق المبدع",
    explanation: "هو الذي خلق جميع الأشياء من العدم، وأوجدها بقدرته",
    benefits: ["يزيد الإبداع", "يفتح أبواب الرزق", "يسهل الأمور"]
  },
  {
    id: 12,
    arabic: "الْبَارِئُ",
    transliteration: "Al-Bari",
    meaning: "البارئ المصور",
    explanation: "هو الذي برأ الخلق، أي أوجده لا على مثال سابق",
    benefits: ["يحقق الأمنيات الصالحة", "يبعد الأمراض", "يجدد الحياة"]
  },
  {
    id: 13,
    arabic: "الْمُصَوِّرُ",
    transliteration: "Al-Musawwir",
    meaning: "المصور المشكل",
    explanation: "هو الذي صور جميع الموجودات ورتبها، فأعطى كل شيء صورته وهيئته",
    benefits: ["يحسن الصورة والمظهر", "يزيل التشوهات", "يعطي الجمال"]
  },
  {
    id: 14,
    arabic: "الْغَفَّارُ",
    transliteration: "Al-Ghaffar",
    meaning: "الغفار الستار",
    explanation: "هو كثير المغفرة لذنوب عباده، الساتر لعيوبهم",
    benefits: ["يغفر الذنوب", "يستر العيوب", "يفتح باب التوبة"]
  },
  {
    id: 15,
    arabic: "الْقَهَّارُ",
    transliteration: "Al-Qahhar",
    meaning: "القهار الغالب",
    explanation: "هو الغالب الذي قهر كل شيء، ودان له كل شيء",
    benefits: ["يقهر الأعداء", "يكسر النفس الأمارة", "يزيل الظلم"]
  },
  {
    id: 16,
    arabic: "الْوَهَّابُ",
    transliteration: "Al-Wahhab",
    meaning: "الوهاب المعطي",
    explanation: "هو كثير الهبات والعطايا، الذي يهب بغير عوض",
    benefits: ["يفتح أبواب الرزق", "يكثر العطاء", "يجلب البركة"]
  },
  {
    id: 17,
    arabic: "الرَّزَّاقُ",
    transliteration: "Ar-Razzaq",
    meaning: "الرزاق الكريم",
    explanation: "هو الذي يرزق جميع خلقه من حيث يحتسبون ومن حيث لا يحتسبون",
    benefits: ["يوسع الرزق", "يجلب المال الحلال", "يبارك في الطعام"]
  },
  {
    id: 18,
    arabic: "الْفَتَّاحُ",
    transliteration: "Al-Fattah",
    meaning: "الفتاح الحكم",
    explanation: "هو الذي يفتح مغلق الأمور، ويفتح بين عباده بالحق",
    benefits: ["يفتح الأبواب المغلقة", "يحل المشاكل المستعصية", "يجلب النجاح"]
  },
  {
    id: 19,
    arabic: "الْعَلِيمُ",
    transliteration: "Al-Alim",
    meaning: "العليم الخبير",
    explanation: "هو الذي أحاط علمه بجميع الأشياء، ظاهرها وباطنها، دقيقها وجليلها",
    benefits: ["يزيد العلم والفهم", "يفتح البصيرة", "يعين على الحفظ"]
  },
  {
    id: 20,
    arabic: "الْقَابِضُ",
    transliteration: "Al-Qabid",
    meaning: "القابض المانع",
    explanation: "هو الذي يقبض الرزق والنفوس عمن يشاء بحكمته وعدله",
    benefits: ["يقبض على المال الحرام", "يضيق على الظالم", "يعين على التقشف"]
  },
  {
    id: 21,
    arabic: "الْبَاسِطُ",
    transliteration: "Al-Basit",
    meaning: "الباسط المعطي",
    explanation: "هو الذي يبسط الرزق لمن يشاء من عباده، ويوسع عليهم في معايشهم",
    benefits: ["يوسع الرزق والصدر", "يزيل الضيق", "يبسط الأمور"]
  },
  {
    id: 22,
    arabic: "الْخَافِضُ",
    transliteration: "Al-Khafid",
    meaning: "الخافض المذل",
    explanation: "هو الذي يخفض الجبابرة والظالمين، ويضع المتكبرين",
    benefits: ["يخفض الأعداء", "يذل الظالم", "يعطي التواضع"]
  },
  {
    id: 23,
    arabic: "الرَّافِعُ",
    transliteration: "Ar-Rafi",
    meaning: "الرافع المعلي",
    explanation: "هو الذي يرفع المؤمنين بالإيمان والطاعة، ويرفع من يشاء بالعز والشرف",
    benefits: ["يرفع المقام والدرجة", "يعلي الشأن", "يعطي العزة"]
  },
  {
    id: 24,
    arabic: "الْمُعِزُّ",
    transliteration: "Al-Mu'izz",
    meaning: "المعز المكرم",
    explanation: "هو الذي يعز من يشاء من عباده بالتوفيق والهداية",
    benefits: ["يمنح العزة والكرامة", "يعطي القوة", "يرفع الشأن"]
  },
  {
    id: 25,
    arabic: "الْمُذِلُّ",
    transliteration: "Al-Mudhill",
    meaning: "المذل القاهر",
    explanation: "هو الذي يذل من يشاء من عباده، ويضع من الطغاة والجبابرة",
    benefits: ["يذل الأعداء", "يكسر النفس الأمارة", "يحمي من الظلم"]
  },
  {
    id: 26,
    arabic: "السَّمِيعُ",
    transliteration: "As-Sami",
    meaning: "السميع البصير",
    explanation: "هو الذي لا يخفى عليه شيء من أصوات خلقه، يسمع جميع الأصوات باختلاف اللغات",
    benefits: ["يستجيب الدعاء", "يسمع الشكوى", "يعين على حفظ اللسان"]
  },
  {
    id: 27,
    arabic: "الْبَصِيرُ",
    transliteration: "Al-Basir",
    meaning: "البصير المبصر",
    explanation: "هو الذي يرى جميع الموجودات، لا يخفى عليه شيء في الأرض ولا في السماء",
    benefits: ["يفتح البصيرة", "يحمي من المكائد", "يرى الحق"]
  },
  {
    id: 28,
    arabic: "الْحَكَمُ",
    transliteration: "Al-Hakam",
    meaning: "الحكم العدل",
    explanation: "هو القاضي العدل الذي يقضي بالحق، ولا معقب لحكمه",
    benefits: ["يحصل على الحق", "يفصل في الخصومات", "يعطي العدل"]
  },
  {
    id: 29,
    arabic: "الْعَدْلُ",
    transliteration: "Al-Adl",
    meaning: "العدل المنصف",
    explanation: "هو الذي حكم بالعدل، ووضع كل شيء في موضعه",
    benefits: ["يحقق العدالة", "يزيل الظلم", "يعطي الإنصاف"]
  },
  {
    id: 30,
    arabic: "اللَّطِيفُ",
    transliteration: "Al-Latif",
    meaning: "اللطيف الرفيق",
    explanation: "هو الرفيق بعباده، الذي يلطف بهم حيث لا يحتسبون",
    benefits: ["يلطف بالأحوال", "يسهل الأمور الصعبة", "يفرج الكروب"]
  },
  {
    id: 31,
    arabic: "الْخَبِيرُ",
    transliteration: "Al-Khabir",
    meaning: "الخبير العليم",
    explanation: "هو الذي لا يخفى عليه شيء، العالم بحقائق الأمور وبواطنها",
    benefits: ["يعطي الحكمة والفهم", "يكشف الأسرار", "يعين على معرفة الحق"]
  },
  {
    id: 32,
    arabic: "الْحَلِيمُ",
    transliteration: "Al-Halim",
    meaning: "الحليم الصبور",
    explanation: "هو الذي لا يعاجل العصاة بالعقوبة، بل يمهلهم ليتوبوا",
    benefits: ["يمنح الصبر والحلم", "يزيل الغضب", "يعطي السكينة"]
  },
  {
    id: 33,
    arabic: "الْعَظِيمُ",
    transliteration: "Al-Azim",
    meaning: "العظيم الكبير",
    explanation: "هو الذي له العظمة الكاملة، وهو أعظم من كل عظيم",
    benefits: ["يعظم الشأن", "يهيب الخلق", "يزيد الوقار"]
  },
  {
    id: 34,
    arabic: "الْغَفُورُ",
    transliteration: "Al-Ghafur",
    meaning: "الغفور الرحيم",
    explanation: "هو الذي يغفر الذنوب ويمحو الخطايا مهما كثرت",
    benefits: ["يغفر الذنوب العظيمة", "يستر العيوب", "يمحو الخطايا"]
  },
  {
    id: 35,
    arabic: "الشَّكُورُ",
    transliteration: "Ash-Shakur",
    meaning: "الشكور المجازي",
    explanation: "هو الذي يشكر عباده على طاعاتهم، ويضاعف لهم الأجر",
    benefits: ["يضاعف الأجر", "يقبل العمل القليل", "يزيد البركة"]
  },
  {
    id: 36,
    arabic: "الْعَلِيُّ",
    transliteration: "Al-Aliy",
    meaning: "العلي الأعلى",
    explanation: "هو العالي على كل شيء، المتعالي عن صفات المخلوقين",
    benefits: ["يرفع المقام", "يعلي الشأن", "يعطي السمو"]
  },
  {
    id: 37,
    arabic: "الْكَبِيرُ",
    transliteration: "Al-Kabir",
    meaning: "الكبير العظيم",
    explanation: "هو الذي له الكبرياء والعظمة، وهو أكبر من كل كبير",
    benefits: ["يصغر الهموم", "يعظم الأمر", "يهيب الخلق"]
  },
  {
    id: 38,
    arabic: "الْحَفِيظُ",
    transliteration: "Al-Hafiz",
    meaning: "الحفيظ الحافظ",
    explanation: "هو الذي يحفظ خلقه من الآفات، ويحفظ أعمالهم وأقوالهم",
    benefits: ["يحفظ من كل شر", "يحمي من الأخطار", "يحفظ الأهل والمال"]
  },
  {
    id: 39,
    arabic: "الْمُقِيتُ",
    transliteration: "Al-Muqit",
    meaning: "المقيت الرازق",
    explanation: "هو الذي يعطي كل مخلوق قوته وما يحتاج إليه",
    benefits: ["يقوي البدن", "يعطي الطاقة", "يرزق القوت"]
  },
  {
    id: 40,
    arabic: "الْحَسِيبُ",
    transliteration: "Al-Hasib",
    meaning: "الحسيب الكافي",
    explanation: "هو الذي يكفي عباده ما أهمهم، والذي يحاسبهم على أعمالهم",
    benefits: ["يكفي الهموم", "يغني عن الخلق", "يحسن الحساب"]
  },
  {
    id: 41,
    arabic: "الْجَلِيلُ",
    transliteration: "Al-Jalil",
    meaning: "الجليل العظيم",
    explanation: "هو المستحق للجلال والعظمة، العظيم الشأن",
    benefits: ["يعظم الشأن", "يعطي الوقار", "يهيب الخلق"]
  },
  {
    id: 42,
    arabic: "الْكَرِيمُ",
    transliteration: "Al-Karim",
    meaning: "الكريم الجواد",
    explanation: "هو الكثير الخير، الجواد المعطي الذي لا ينفد عطاؤه",
    benefits: ["يكثر العطاء", "يجود بالخير", "يفتح أبواب الكرم"]
  },
  {
    id: 43,
    arabic: "الرَّقِيبُ",
    transliteration: "Ar-Raqib",
    meaning: "الرقيب الحافظ",
    explanation: "هو المطلع على ما أكنته الصدور، الحافظ الذي لا يغيب عنه شيء",
    benefits: ["يراقب الأفعال", "يحفظ السر", "يحمي من الغفلة"]
  },
  {
    id: 44,
    arabic: "الْمُجِيبُ",
    transliteration: "Al-Mujib",
    meaning: "المجيب السميع",
    explanation: "هو الذي يجيب دعوة الداع إذا دعاه، ويقضي حاجة السائل إذا ناداه",
    benefits: ["يستجيب الدعاء", "يحقق الأمنيات", "يفتح الأبواب"]
  },
  {
    id: 45,
    arabic: "الْوَاسِعُ",
    transliteration: "Al-Wasi",
    meaning: "الواسع العليم",
    explanation: "هو الذي وسع كل شيء رحمة وعلماً وقدرة وإحساناً",
    benefits: ["يوسع الرزق", "يوسع الصدر", "يبسط الأمور"]
  },
  {
    id: 46,
    arabic: "الْحَكِيمُ",
    transliteration: "Al-Hakim",
    meaning: "الحكيم العليم",
    explanation: "هو الذي يضع الأشياء في مواضعها، ويحكم الأمور إحكاماً",
    benefits: ["يعطي الحكمة", "يحسن التدبير", "يرشد للصواب"]
  },
  {
    id: 47,
    arabic: "الْوَدُودُ",
    transliteration: "Al-Wadud",
    meaning: "الودود المحب",
    explanation: "هو المحب لعباده الصالحين، المحبوب في قلوب أوليائه",
    benefits: ["يجلب المحبة", "يؤلف بين القلوب", "يحبب إلى الخلق"]
  },
  {
    id: 48,
    arabic: "الْمَجِيدُ",
    transliteration: "Al-Majid",
    meaning: "المجيد الكريم",
    explanation: "هو الذي له المجد الكامل والشرف التام، الكثير الإحسان الجزيل العطاء",
    benefits: ["يعظم المجد", "يكثر الخير", "يعطي الشرف"]
  },
  {
    id: 49,
    arabic: "الْبَاعِثُ",
    transliteration: "Al-Ba'ith",
    meaning: "الباعث المحيي",
    explanation: "هو باعث الخلق يوم القيامة، وباعث رسله إلى الناس",
    benefits: ["يبعث الهمة", "يحيي القلوب", "يجدد الأمل"]
  },
  {
    id: 50,
    arabic: "الشَّهِيدُ",
    transliteration: "Ash-Shahid",
    meaning: "الشهيد الرقيب",
    explanation: "هو الذي لا يغيب عنه شيء، الشاهد على كل شيء",
    benefits: ["يشهد على الحق", "يحفظ الأعمال", "يراقب الأفعال"]
  },
  {
    id: 51,
    arabic: "الْحَقُّ",
    transliteration: "Al-Haqq",
    meaning: "الحق الثابت",
    explanation: "هو الثابت الذي لا يزول، وكل شيء سواه باطل",
    benefits: ["يثبت على الحق", "يكشف الباطل", "يحق الحقيقة"]
  },
  {
    id: 52,
    arabic: "الْوَكِيلُ",
    transliteration: "Al-Wakil",
    meaning: "الوكيل الكفيل",
    explanation: "هو الذي يتوكل عليه العباد في أمورهم، والكفيل بأرزاقهم",
    benefits: ["يكفي الأمور", "يتولى الشؤون", "يحقق التوكل"]
  },
  {
    id: 53,
    arabic: "الْقَوِيُّ",
    transliteration: "Al-Qawiyy",
    meaning: "القوي المتين",
    explanation: "هو التام القوة، الذي لا يعجزه شيء",
    benefits: ["يقوي البدن والعزم", "يعطي القدرة", "يثبت على الطاعة"]
  },
  {
    id: 54,
    arabic: "الْمَتِينُ",
    transliteration: "Al-Matin",
    meaning: "المتين الشديد",
    explanation: "هو الشديد القوة، الذي لا تنقطع قوته ولا تلحقه مشقة",
    benefits: ["يشد الأمور", "يثبت الأحوال", "يقوي الإيمان"]
  },
  {
    id: 55,
    arabic: "الْوَلِيُّ",
    transliteration: "Al-Waliyy",
    meaning: "الولي الناصر",
    explanation: "هو الناصر لأوليائه، المتولي لأمورهم بالحفظ والرعاية",
    benefits: ["ينصر على الأعداء", "يتولى الأمور", "يحفظ ويحمي"]
  },
  {
    id: 56,
    arabic: "الْحَمِيدُ",
    transliteration: "Al-Hamid",
    meaning: "الحميد المحمود",
    explanation: "هو المحمود بجميع المحامد، المستحق للحمد بكل لسان",
    benefits: ["يحمد في الشدة والرخاء", "يعطي الرضا", "يزيد الشكر"]
  },
  {
    id: 57,
    arabic: "الْمُحْصِي",
    transliteration: "Al-Muhsi",
    meaning: "المحصي العليم",
    explanation: "هو الذي أحصى كل شيء عدداً، وعلم جميع الموجودات",
    benefits: ["يحفظ الأعمال", "يحصي الحسنات", "يعد النعم"]
  },
  {
    id: 58,
    arabic: "الْمُبْدِئُ",
    transliteration: "Al-Mubdi",
    meaning: "المبدئ الخالق",
    explanation: "هو الذي أبدأ الخلق من العدم، وابتدأ كل شيء",
    benefits: ["يبدأ الأمور بيسر", "يجدد الحياة", "يفتح البدايات"]
  },
  {
    id: 59,
    arabic: "الْمُعِيدُ",
    transliteration: "Al-Mu'id",
    meaning: "المعيد المحيي",
    explanation: "هو الذي يعيد الخلق بعد الموت، ويعيد الأشياء بعد فنائها",
    benefits: ["يعيد الأمور المفقودة", "يجدد النعم", "يرجع الحق"]
  },
  {
    id: 60,
    arabic: "الْمُحْيِي",
    transliteration: "Al-Muhyi",
    meaning: "المحيي الباعث",
    explanation: "هو الذي يحيي الموتى، ويحيي النفوس بنور الإيمان",
    benefits: ["يحيي القلوب", "يبعث الأمل", "ينعش الروح"]
  },
  {
    id: 61,
    arabic: "الْمُمِيتُ",
    transliteration: "Al-Mumit",
    meaning: "المميت القاهر",
    explanation: "هو الذي يميت الأحياء، ويقضي على كل حي",
    benefits: ["يميت الشهوات", "يقهر النفس", "يذكر بالآخرة"]
  },
  {
    id: 62,
    arabic: "الْحَيُّ",
    transliteration: "Al-Hayy",
    meaning: "الحي القيوم",
    explanation: "هو الحي الذي لا يموت، الدائم الباقي أبداً",
    benefits: ["يحيي القلوب", "يعطي الحياة", "يجدد الأمل"]
  },
  {
    id: 63,
    arabic: "الْقَيُّومُ",
    transliteration: "Al-Qayyum",
    meaning: "القيوم القائم",
    explanation: "هو القائم بنفسه، المقيم لغيره، الذي لا تأخذه سنة ولا نوم",
    benefits: ["يقوم الأمور", "يثبت الأحوال", "يعطي الاستقرار"]
  },
  {
    id: 64,
    arabic: "الْوَاجِدُ",
    transliteration: "Al-Wajid",
    meaning: "الواجد الغني",
    explanation: "هو الغني الذي لا يحتاج إلى أحد، الواجد لكل ما يريد",
    benefits: ["يجد الضائع", "يغني عن الخلق", "يعطي الكفاية"]
  },
  {
    id: 65,
    arabic: "الْمَاجِدُ",
    transliteration: "Al-Majid",
    meaning: "الماجد الكريم",
    explanation: "هو الكثير الخير والإحسان، المجيد في صفاته وأفعاله",
    benefits: ["يكثر الخير", "يعظم المجد", "يجود بالعطاء"]
  },
  {
    id: 66,
    arabic: "الْوَاحِدُ",
    transliteration: "Al-Wahid",
    meaning: "الواحد الأحد",
    explanation: "هو الواحد في ذاته وصفاته، الذي لا شريك له",
    benefits: ["يوحد القلب", "يجمع الشمل", "يزيل الشرك"]
  },
  {
    id: 67,
    arabic: "الصَّمَدُ",
    transliteration: "As-Samad",
    meaning: "الصمد الذي يصمد إليه",
    explanation: "هو السيد المقصود في الحوائج، الذي يصمد إليه في الأمور",
    benefits: ["يقصد في الحاجات", "يغني عن الخلق", "يكفي الأمور"]
  },
  {
    id: 68,
    arabic: "الْقَادِرُ",
    transliteration: "Al-Qadir",
    meaning: "القادر المقتدر",
    explanation: "هو الذي يقدر على كل شيء، ولا يعجزه شيء في الأرض ولا في السماء",
    benefits: ["يعطي القدرة", "يسهل الأمور", "يمكن من الفعل"]
  },
  {
    id: 69,
    arabic: "الْمُقْتَدِرُ",
    transliteration: "Al-Muqtadir",
    meaning: "المقتدر القوي",
    explanation: "هو الذي له القدرة التامة، البالغ في الاقتدار",
    benefits: ["يقوي العزم", "يمكن من الأمور", "يعطي القوة"]
  },
  {
    id: 70,
    arabic: "الْمُقَدِّمُ",
    transliteration: "Al-Muqaddim",
    meaning: "المقدم المعجل",
    explanation: "هو الذي يقدم من يشاء من عباده، ويعجل ما يشاء من أموره",
    benefits: ["يقدم في الأمور", "يعجل الخير", "يرفع المقام"]
  },
  {
    id: 71,
    arabic: "الْمُؤَخِّرُ",
    transliteration: "Al-Mu'akhkhir",
    meaning: "المؤخر المنظم",
    explanation: "هو الذي يؤخر الأشياء فيضعها في مواضعها، ويؤخر من يشاء بحكمته",
    benefits: ["يؤخر الضرر", "يمهل التائب", "يحسن التدبير"]
  },
  {
    id: 72,
    arabic: "الأَوَّلُ",
    transliteration: "Al-Awwal",
    meaning: "الأول القديم",
    explanation: "هو الأول الذي ليس قبله شيء، السابق للحوادث",
    benefits: ["يبدأ الأمور", "يفتح البدايات", "يسبق الخلق"]
  },
  {
    id: 73,
    arabic: "الآخِرُ",
    transliteration: "Al-Akhir",
    meaning: "الآخر الباقي",
    explanation: "هو الآخر الذي ليس بعده شيء، الباقي بعد فناء خلقه",
    benefits: ["يختم بخير", "يبقى بعد الفناء", "يدوم النعم"]
  },
  {
    id: 74,
    arabic: "الظَّاهِرُ",
    transliteration: "Az-Zahir",
    meaning: "الظاهر العالي",
    explanation: "هو الظاهر فوق كل شيء، الذي ظهرت آياته في خلقه",
    benefits: ["يظهر الحق", "يكشف الباطل", "يعلي الشأن"]
  },
  {
    id: 75,
    arabic: "الْبَاطِنُ",
    transliteration: "Al-Batin",
    meaning: "الباطن العليم",
    explanation: "هو الباطن الذي أحاط بكل شيء علماً، العالم ببواطن الأمور",
    benefits: ["يكشف الأسرار", "يعلم الخفايا", "يطلع على البواطن"]
  },
  {
    id: 76,
    arabic: "الْوَالِي",
    transliteration: "Al-Wali",
    meaning: "الوالي المتصرف",
    explanation: "هو المتولي لأمر خلقه، المتصرف في ملكه كيف يشاء",
    benefits: ["يتولى الأمور", "يحفظ ويرعى", "يدبر الشؤون"]
  },
  {
    id: 77,
    arabic: "الْمُتَعَالِي",
    transliteration: "Al-Muta'ali",
    meaning: "المتعالي المرتفع",
    explanation: "هو المنزه عن صفات الخلق، المرتفع عن مشابهة المخلوقات",
    benefits: ["يعلو الهمة", "يرفع الشأن", "يسمو بالنفس"]
  },
  {
    id: 78,
    arabic: "الْبَرُّ",
    transliteration: "Al-Barr",
    meaning: "البر الرحيم",
    explanation: "هو العطوف الرحيم، الكثير البر والإحسان",
    benefits: ["يبر الوالدين", "يحسن للخلق", "يعطف بالناس"]
  },
  {
    id: 79,
    arabic: "التَّوَّابُ",
    transliteration: "At-Tawwab",
    meaning: "التواب الغفور",
    explanation: "هو الذي يتوب على عباده مرة بعد مرة، ويقبل توبتهم",
    benefits: ["يقبل التوبة", "يغفر الذنوب", "يفتح باب الرجوع"]
  },
  {
    id: 80,
    arabic: "الْمُنْتَقِمُ",
    transliteration: "Al-Muntaqim",
    meaning: "المنتقم العادل",
    explanation: "هو الذي ينتقم من أعدائه، ويعاقب الظالمين بعدله",
    benefits: ["ينتقم من الظالم", "يقتص للمظلوم", "يحقق العدل"]
  },
  {
    id: 81,
    arabic: "الْعَفُوُّ",
    transliteration: "Al-'Afuww",
    meaning: "العفو الغفور",
    explanation: "هو الذي يعفو عن السيئات، ويمحو الذنوب",
    benefits: ["يعفو عن الذنوب", "يمحو السيئات", "يتجاوز عن الخطأ"]
  },
  {
    id: 82,
    arabic: "الرَّؤُوفُ",
    transliteration: "Ar-Ra'uf",
    meaning: "الرؤوف الرحيم",
    explanation: "هو شديد الرحمة بعباده، الرقيق بهم",
    benefits: ["يرأف بالضعفاء", "يرحم الصغار", "يعطف على الخلق"]
  },
  {
    id: 83,
    arabic: "مَالِكُ الْمُلْكِ",
    transliteration: "Malik-ul-Mulk",
    meaning: "مالك الملك المتصرف",
    explanation: "هو المتصرف في ملكه كيف يشاء، يؤتي الملك من يشاء وينزعه ممن يشاء",
    benefits: ["يملك الأمور", "يعطي الملك", "يتصرف في الشؤون"]
  },
  {
    id: 84,
    arabic: "ذُو الْجَلَالِ وَالْإِكْرَامِ",
    transliteration: "Dhul-Jalali wal-Ikram",
    meaning: "ذو الجلال والإكرام",
    explanation: "هو صاحب الجلال والعظمة والإكرام، المستحق للإجلال والإكرام",
    benefits: ["يعظم الشأن", "يكرم العباد", "يجل المقام"]
  },
  {
    id: 85,
    arabic: "الْمُقْسِطُ",
    transliteration: "Al-Muqsit",
    meaning: "المقسط العادل",
    explanation: "هو العادل في حكمه، الذي يعطي كل ذي حق حقه",
    benefits: ["يحقق العدل", "يقسط بين الناس", "يعطي الحقوق"]
  },
  {
    id: 86,
    arabic: "الْجَامِعُ",
    transliteration: "Al-Jami",
    meaning: "الجامع الحاشر",
    explanation: "هو الذي يجمع الخلائق ليوم الحساب، ويجمع الأشياء المتفرقة",
    benefits: ["يجمع الشمل", "يؤلف القلوب", "يوحد الصفوف"]
  },
  {
    id: 87,
    arabic: "الْغَنِيُّ",
    transliteration: "Al-Ghaniyy",
    meaning: "الغني المستغني",
    explanation: "هو الغني عن كل شيء، المستغني عن خلقه",
    benefits: ["يغني عن الخلق", "يكفي الحاجات", "يسد الفقر"]
  },
  {
    id: 88,
    arabic: "الْمُغْنِي",
    transliteration: "Al-Mughni",
    meaning: "المغني المعطي",
    explanation: "هو الذي يغني من يشاء من عباده، ويعطيهم الغنى",
    benefits: ["يغني الفقير", "يكثر المال", "يسد الحاجة"]
  },
  {
    id: 89,
    arabic: "الْمَانِعُ",
    transliteration: "Al-Mani",
    meaning: "المانع الحافظ",
    explanation: "هو الذي يمنع ما يشاء عمن يشاء، ويحفظ عباده من المكاره",
    benefits: ["يمنع الضرر", "يحفظ من الشر", "يحمي من الأذى"]
  },
  {
    id: 90,
    arabic: "الضَّارُّ",
    transliteration: "Ad-Darr",
    meaning: "الضار بحكمة",
    explanation: "هو الذي يضر من يشاء ابتلاءً وحكمة",
    benefits: ["يبتلي ليقوي", "يختبر الإيمان", "يرفع الدرجات"]
  },
  {
    id: 91,
    arabic: "النَّافِعُ",
    transliteration: "An-Nafi",
    meaning: "النافع المحسن",
    explanation: "هو الذي ينفع من يشاء، ويوصل إليهم النفع",
    benefits: ["ينفع الخلق", "يجلب الخير", "يدفع الضرر"]
  },
  {
    id: 92,
    arabic: "النُّورُ",
    transliteration: "An-Nur",
    meaning: "النور المنير",
    explanation: "هو الذي أنار السماوات والأرض، نور القلوب بالإيمان",
    benefits: ["ينور القلب", "يهدي للحق", "يضيء الطريق"]
  },
  {
    id: 93,
    arabic: "الْهَادِي",
    transliteration: "Al-Hadi",
    meaning: "الهادي المرشد",
    explanation: "هو الذي يهدي من يشاء إلى الحق، ويرشد إلى الصواب",
    benefits: ["يهدي للحق", "يرشد للصواب", "يدل على الطريق"]
  },
  {
    id: 94,
    arabic: "الْبَدِيعُ",
    transliteration: "Al-Badi",
    meaning: "البديع المبدع",
    explanation: "هو الذي أبدع الخلق على غير مثال سابق",
    benefits: ["يبدع الأمور", "يخلق الجديد", "يجدد الحياة"]
  },
  {
    id: 95,
    arabic: "الْبَاقِي",
    transliteration: "Al-Baqi",
    meaning: "الباقي الدائم",
    explanation: "هو الباقي بعد فناء خلقه، الدائم الذي لا نهاية لوجوده",
    benefits: ["يبقي الخير", "يدوم النعم", "يثبت الأمور"]
  },
  {
    id: 96,
    arabic: "الْوَارِثُ",
    transliteration: "Al-Warith",
    meaning: "الوارث الباقي",
    explanation: "هو الباقي بعد فناء خلقه، الذي يرث الأرض ومن عليها",
    benefits: ["يورث الخير", "يبقى بعد الفناء", "يحفظ التراث"]
  },
  {
    id: 97,
    arabic: "الرَّشِيدُ",
    transliteration: "Ar-Rashid",
    meaning: "الرشيد الحكيم",
    explanation: "هو الذي أرشد الخلق إلى مصالحهم، وأحكم صنعهم",
    benefits: ["يرشد للصواب", "يدل على الحق", "يحسن التدبير"]
  },
  {
    id: 98,
    arabic: "الصَّبُورُ",
    transliteration: "As-Sabur",
    meaning: "الصبور الحليم",
    explanation: "هو الذي لا يعاجل العصاة بالعقوبة، ويمهل ولا يهمل",
    benefits: ["يعطي الصبر", "يمهل التائب", "يحلم على العاصي"]
  },
  {
    id: 99,
    arabic: "اللَّهُ",
    transliteration: "Allah",
    meaning: "الاسم الجامع لكل الأسماء الحسنى",
    explanation: "هو الاسم الأعظم، الجامع لجميع معاني الأسماء الحسنى والصفات العليا",
    benefits: ["يجمع كل الخير", "يحقق كل المطالب", "يشمل كل البركات"]
  }
];
