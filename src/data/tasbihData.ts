export interface TasbihItem {
  id: string;
  arabic: string;
  transliteration: string;
  translation: string;
  count: number;
  category: string;
}

export const tasbihData: TasbihItem[] = [
  {
    id: "subhanallah",
    arabic: "سُبْحَانَ اللهِ",
    transliteration: "Subhan Allah",
    translation: "Glory be to Allah",
    count: 33,
    category: "daily"
  },
  {
    id: "alhamdulillah",
    arabic: "الْحَمْدُ للهِ",
    transliteration: "Alhamdulillah",
    translation: "All praise is due to Allah",
    count: 33,
    category: "daily"
  },
  {
    id: "allahuakbar",
    arabic: "اللهُ أَكْبَرُ",
    transliteration: "Allahu Akbar",
    translation: "Allah is the Greatest",
    count: 34,
    category: "daily"
  },
  {
    id: "istighfar",
    arabic: "أَسْتَغْفِرُ اللهَ",
    transliteration: "Astaghfirullah",
    translation: "I seek forgiveness from Allah",
    count: 100,
    category: "forgiveness"
  },
  {
    id: "lailahaillallah",
    arabic: "لَا إِلَهَ إِلَّا اللهُ",
    transliteration: "La ilaha illallah",
    translation: "There is no god but Allah",
    count: 100,
    category: "tawheed"
  },
  {
    id: "subhanallahwabihamdihi",
    arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
    transliteration: "Subhan Allahi wa bihamdihi",
    translation: "Glory be to Allah and Praise Him",
    count: 100,
    category: "daily"
  },
  {
    id: "subhanallahilazeem",
    arabic: "سُبْحَانَ اللهِ الْعَظِيمِ",
    transliteration: "Subhan Allahil Azeem",
    translation: "Glory be to Allah, the Magnificent",
    count: 100,
    category: "daily"
  },
  {
    id: "salawat",
    arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ",
    transliteration: "Allahumma salli ala Muhammad",
    translation: "O Allah, send blessings upon Muhammad",
    count: 100,
    category: "salawat"
  },
  {
    id: "hasbiallah",
    arabic: "حَسْبِيَ اللهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Hasbiyallahu wa ni'mal wakeel",
    translation: "Allah is sufficient for me, and He is the best disposer of affairs",
    count: 70,
    category: "protection"
  },
  {
    id: "lahawla",
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ",
    transliteration: "La hawla wa la quwwata illa billah",
    translation: "There is no power nor strength except with Allah",
    count: 100,
    category: "protection"
  }
];
