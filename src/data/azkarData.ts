export interface Azkar {
  id: number;
  arabic: string;
  transliteration: string;
  translation: string;
  repeat: number;
  reference: string;
}

export interface AzkarCategory {
  id: string;
  title: string;
  titleArabic: string;
  icon: string;
  azkar: Azkar[];
}

export const azkarData: AzkarCategory[] = [
  {
    id: "morning",
    title: "Morning Azkar",
    titleArabic: "أذكار الصباح",
    icon: "sunrise",
    azkar: [
      {
        id: 1,
        arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        transliteration: "Asbahna wa asbahal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku walahul-hamdu wa huwa 'ala kulli shay'in qadir",
        translation: "We have entered a new day and with it all the dominion which belongs to Allah. Praise is to Allah. None has the right to be worshipped but Allah alone, Who has no partner. To Allah belongs the dominion, and to Him is the praise, and He is Able to do all things.",
        repeat: 1,
        reference: "مسلم"
      },
      {
        id: 2,
        arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
        transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilaykan-nushur",
        translation: "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection.",
        repeat: 1,
        reference: "الترمذي"
      },
      {
        id: 3,
        arabic: "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفًا مُسْلِمًا، وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
        transliteration: "Asbahna 'ala fitratil-Islam, wa 'ala kalimatil-ikhlas, wa 'ala dini nabiyyina Muhammadin, wa 'ala millati abina Ibrahim, hanifan musliman, wa ma kana minal-mushrikin",
        translation: "We have entered a new day upon the natural religion of Islam, the word of sincere devotion, the religion of our Prophet Muhammad, and the faith of our father Ibrahim, who was upright and a Muslim, and was not of those who associate others with Allah.",
        repeat: 1,
        reference: "أحمد"
      },
      {
        id: 4,
        arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        transliteration: "Subhan Allahi wa bihamdihi",
        translation: "Glory is to Allah and praise is to Him.",
        repeat: 100,
        reference: "البخاري ومسلم"
      }
    ]
  },
  {
    id: "evening",
    title: "Evening Azkar",
    titleArabic: "أذكار المساء",
    icon: "sunset",
    azkar: [
      {
        id: 1,
        arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        transliteration: "Amsayna wa amsal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku walahul-hamdu wa huwa 'ala kulli shay'in qadir",
        translation: "We have entered the evening and with it all the dominion which belongs to Allah. Praise is to Allah. None has the right to be worshipped but Allah alone, Who has no partner. To Allah belongs the dominion, and to Him is the praise, and He is Able to do all things.",
        repeat: 1,
        reference: "مسلم"
      },
      {
        id: 2,
        arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
        transliteration: "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namutu, wa ilaykal-masir",
        translation: "O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the return.",
        repeat: 1,
        reference: "الترمذي"
      },
      {
        id: 3,
        arabic: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
        transliteration: "Allahumma inni amsaytu ushhiduka, wa ushhidu hamalata 'arshika, wa mala'ikataka, wa jami'a khalqika, annaka antallahu la ilaha illa anta wahdaka la sharika laka, wa anna Muhammadan 'abduka wa rasuluk",
        translation: "O Allah, I have entered the evening and I call upon You, the bearers of Your Throne, Your angels, and all creation to bear witness that surely You are Allah, there is none worthy of worship but You alone, You have no partners, and that Muhammad is Your slave and Your Messenger.",
        repeat: 4,
        reference: "أبو داود"
      }
    ]
  },
  {
    id: "sleep",
    title: "Before Sleep",
    titleArabic: "أذكار النوم",
    icon: "moon",
    azkar: [
      {
        id: 1,
        arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
        transliteration: "Bismika Allahumma amutu wa ahya",
        translation: "In Your name O Allah, I die and I live.",
        repeat: 1,
        reference: "البخاري"
      },
      {
        id: 2,
        arabic: "اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ",
        transliteration: "Allahumma innaka khalaqta nafsi wa anta tawaffaha, laka mamatuha wa mahyaha, in ahyaytaha fahfazha, wa in amattaha faghfir laha, Allahumma inni as'alukal-'afiyah",
        translation: "O Allah, You have created my soul and You will take it back. To You is its death and its life. If You give it life, then protect it, and if You cause it to die, then forgive it. O Allah, I ask You for well-being.",
        repeat: 1,
        reference: "مسلم"
      },
      {
        id: 3,
        arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
        transliteration: "Allahumma qini 'adhabaka yawma tab'athu 'ibadak",
        translation: "O Allah, protect me from Your punishment on the Day You resurrect Your servants.",
        repeat: 3,
        reference: "أبو داود"
      },
      {
        id: 4,
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        transliteration: "Qul huwa Allahu ahad, Allahu assamad, lam yalid wa lam yulad, wa lam yakun lahu kufuwan ahad",
        translation: "Say: He is Allah, the One and Only. Allah, the Eternal, Absolute. He begets not, nor is He begotten. And there is none like unto Him.",
        repeat: 3,
        reference: "سورة الإخلاص"
      }
    ]
  },
  {
    id: "daily",
    title: "Daily Supplications",
    titleArabic: "أدعية يومية",
    icon: "heart",
    azkar: [
      {
        id: 1,
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
        translation: "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
        repeat: 1,
        reference: "القرآن الكريم - البقرة"
      },
      {
        id: 2,
        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي، وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي، يَفْقَهُوا قَوْلِي",
        transliteration: "Rabbish-rahli sadri, wa yassirli amri, wahlul 'uqdatan min lisani, yafqahu qawli",
        translation: "My Lord, expand for me my breast, and ease for me my task, and untie the knot from my tongue, that they may understand my speech.",
        repeat: 1,
        reference: "القرآن الكريم - طه"
      },
      {
        id: 3,
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
        transliteration: "Allahumma inni as'alukal-huda wat-tuqa wal-'afafa wal-ghina",
        translation: "O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.",
        repeat: 1,
        reference: "مسلم"
      },
      {
        id: 4,
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
        transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wa a'udhu bika minal-'ajzi wal-kasal, wa a'udhu bika minal-jubni wal-bukhl, wa a'udhu bika min ghalabatid-dayni wa qahrir-rijal",
        translation: "O Allah, I seek refuge in You from worry and grief, from helplessness and laziness, from cowardice and miserliness, and from being overcome by debt and overpowered by men.",
        repeat: 1,
        reference: "البخاري"
      },
      {
        id: 5,
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
        transliteration: "Allahumma inni as'aluka 'ilman nafi'an, wa rizqan tayyiban, wa 'amalan mutaqabbalan",
        translation: "O Allah, I ask You for beneficial knowledge, goodly provision, and acceptable deeds.",
        repeat: 1,
        reference: "ابن ماجه"
      }
    ]
  }
];
