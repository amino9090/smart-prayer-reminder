export interface IslamicEvent {
  hijriMonth: number;
  hijriDay: number;
  name: string;
  description: string;
  type: "religious" | "historical" | "celebration";
}

export const islamicEvents: IslamicEvent[] = [
  // Muharram (1)
  { hijriMonth: 1, hijriDay: 1, name: "رأس السنة الهجرية", description: "بداية العام الهجري الجديد", type: "celebration" },
  { hijriMonth: 1, hijriDay: 10, name: "عاشوراء", description: "يوم عاشوراء - يوم نجى الله فيه موسى عليه السلام", type: "religious" },
  
  // Safar (2)
  { hijriMonth: 2, hijriDay: 27, name: "ليلة الإسراء والمعراج", description: "رحلة النبي ﷺ من مكة إلى القدس ثم إلى السماء", type: "historical" },
  
  // Rabi' al-Awwal (3)
  { hijriMonth: 3, hijriDay: 12, name: "المولد النبوي الشريف", description: "ذكرى ميلاد الرسول محمد ﷺ", type: "celebration" },
  
  // Rajab (7)
  { hijriMonth: 7, hijriDay: 1, name: "بداية شهر رجب", description: "أول الأشهر الحرم الثلاثة المتتالية", type: "religious" },
  { hijriMonth: 7, hijriDay: 27, name: "ليلة الإسراء والمعراج", description: "رحلة النبي ﷺ الليلية المباركة", type: "religious" },
  
  // Sha'ban (8)
  { hijriMonth: 8, hijriDay: 15, name: "ليلة النصف من شعبان", description: "ليلة مباركة يستحب فيها الصلاة والذكر", type: "religious" },
  
  // Ramadan (9)
  { hijriMonth: 9, hijriDay: 1, name: "بداية شهر رمضان", description: "أول أيام شهر الصيام المبارك", type: "religious" },
  { hijriMonth: 9, hijriDay: 15, name: "منتصف رمضان", description: "منتصف الشهر الفضيل", type: "religious" },
  { hijriMonth: 9, hijriDay: 21, name: "بداية العشر الأواخر", description: "أفضل ليالي السنة - يبدأ البحث عن ليلة القدر", type: "religious" },
  { hijriMonth: 9, hijriDay: 27, name: "ليلة القدر المرجحة", description: "أرجح ليالي القدر - خير من ألف شهر", type: "religious" },
  
  // Shawwal (10)
  { hijriMonth: 10, hijriDay: 1, name: "عيد الفطر", description: "أول أيام عيد الفطر المبارك", type: "celebration" },
  
  // Dhu al-Qi'dah (11)
  { hijriMonth: 11, hijriDay: 1, name: "بداية شهر ذي القعدة", description: "من الأشهر الحرم", type: "religious" },
  
  // Dhu al-Hijjah (12)
  { hijriMonth: 12, hijriDay: 1, name: "بداية شهر ذي الحجة", description: "شهر الحج - من الأشهر الحرم", type: "religious" },
  { hijriMonth: 12, hijriDay: 8, name: "يوم التروية", description: "ثامن أيام ذي الحجة - بداية مناسك الحج", type: "religious" },
  { hijriMonth: 12, hijriDay: 9, name: "يوم عرفة", description: "أعظم أيام السنة - يوم الحج الأكبر", type: "religious" },
  { hijriMonth: 12, hijriDay: 10, name: "عيد الأضحى", description: "أول أيام عيد الأضحى المبارك", type: "celebration" },
  { hijriMonth: 12, hijriDay: 11, name: "أيام التشريق", description: "ثاني أيام عيد الأضحى", type: "celebration" },
  { hijriMonth: 12, hijriDay: 12, name: "أيام التشريق", description: "ثالث أيام عيد الأضحى", type: "celebration" },
  { hijriMonth: 12, hijriDay: 13, name: "أيام التشريق", description: "رابع أيام عيد الأضحى", type: "celebration" },
];

export const getEventsForDate = (hijriMonth: number, hijriDay: number): IslamicEvent[] => {
  return islamicEvents.filter(
    event => event.hijriMonth === hijriMonth && event.hijriDay === hijriDay
  );
};

export const getEventsForMonth = (hijriMonth: number): IslamicEvent[] => {
  return islamicEvents.filter(event => event.hijriMonth === hijriMonth);
};
