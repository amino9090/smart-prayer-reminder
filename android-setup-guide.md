# دليل إعداد تطبيق Android

## الخطوات المطلوبة لتحويل التطبيق إلى APK

### 1. نقل المشروع إلى جهازك

```bash
# انقل المشروع إلى GitHub باستخدام زر "Export to Github" في Lovable
# ثم استنسخه على جهازك
git clone YOUR_REPO_URL
cd smart-prayer-reminder
```

### 2. تثبيت التبعيات

```bash
npm install
```

### 3. تهيئة Capacitor

```bash
npx cap init
# المعلومات موجودة بالفعل في capacitor.config.ts
```

### 4. إضافة منصة Android

```bash
npx cap add android
```

### 5. تحديث التبعيات الأصلية

```bash
npx cap update android
```

### 6. بناء المشروع

```bash
npm run build
```

### 7. مزامنة الملفات مع Android

```bash
npx cap sync android
```

### 8. إعداد AdMob

#### أ. احصل على معرفات AdMob الخاصة بك:
1. انتقل إلى [Google AdMob Console](https://apps.admob.google.com/)
2. أنشئ تطبيقاً جديداً
3. أنشئ وحدات إعلانية (Banner و Reward)
4. انسخ معرفات الوحدات الإعلانية

#### ب. حدّث معرفات AdMob في الكود:
افتح ملف `src/hooks/useAdMob.ts` واستبدل:
- `BANNER_AD_ID` بمعرف البانر الخاص بك
- `REWARD_AD_ID` بمعرف إعلان المكافأة الخاص بك

#### ج. أضف معرف AdMob App إلى AndroidManifest.xml:
بعد فتح المشروع في Android Studio، أضف في ملف `android/app/src/main/AndroidManifest.xml`:

```xml
<manifest>
    <application>
        <!-- أضف معرف تطبيق AdMob الخاص بك -->
        <meta-data
            android:name="com.google.android.gms.ads.APPLICATION_ID"
            android:value="ca-app-pub-YOUR_ADMOB_APP_ID~YOUR_APP_ID"/>
    </application>
</manifest>
```

### 9. تحديث الأيقونة

الأيقونة الإسلامية موجودة في `public/icon.png`. لاستخدامها في Android:

```bash
# استخدم أداة تلقائية لتوليد جميع أحجام الأيقونات
# أو استخدم Android Asset Studio
# https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html
```

أو يمكنك نسخ الأيقونة يدوياً إلى المجلدات التالية في مشروع Android:
- `android/app/src/main/res/mipmap-hdpi/`
- `android/app/src/main/res/mipmap-mdpi/`
- `android/app/src/main/res/mipmap-xhdpi/`
- `android/app/src/main/res/mipmap-xxhdpi/`
- `android/app/src/main/res/mipmap-xxxhdpi/`

### 10. فتح المشروع في Android Studio

```bash
npx cap open android
```

### 11. بناء APK

في Android Studio:
1. اذهب إلى `Build` > `Build Bundle(s) / APK(s)` > `Build APK(s)`
2. انتظر حتى ينتهي البناء
3. سيظهر إشعار بمكان ملف APK

### 12. اختبار التطبيق

```bash
# للاختبار على جهاز متصل أو محاكي
npx cap run android
```

## ملاحظات مهمة

### الأذونات المطلوبة في AndroidManifest.xml:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.VIBRATE" />
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
```

### التحديثات المستقبلية:

بعد أي تغيير في الكود:
```bash
npm run build
npx cap sync android
```

### للتطوير المباشر (Live Reload):

التطبيق مُعد بالفعل للاتصال بـ Lovable server، مما يعني:
- أي تغييرات في Lovable ستظهر مباشرة في التطبيق
- لا حاجة لإعادة البناء في كل مرة
- ممتاز للتطوير السريع

### للإنتاج النهائي:

قبل النشر، حدّث `capacitor.config.ts` وأزل قسم `server`:
```typescript
const config: CapacitorConfig = {
  appId: 'app.lovable.303e1eb33bc747db93d373af84a55f4a',
  appName: 'تذكير الصلاة الذكي',
  webDir: 'dist',
  // احذف قسم server للإنتاج
};
```

## روابط مفيدة

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [AdMob Plugin Documentation](https://github.com/capacitor-community/admob)
- [Google AdMob Console](https://apps.admob.google.com/)
- [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/)

## استخدام AdMob في التطبيق

### إظهار بانر إعلاني:
```typescript
import { AdMobBanner } from '@/components/AdMobBanner';

// في أي صفحة
<AdMobBanner />
```

### إظهار إعلان مكافأة (لفتح ميزات أو تغيير خلفيات):
```typescript
import { useAdMob } from '@/hooks/useAdMob';

const MyComponent = () => {
  const { showRewardAd } = useAdMob();

  const handleWatchAd = async () => {
    const rewarded = await showRewardAd();
    if (rewarded) {
      // أعط المستخدم المكافأة
      console.log('تم منح المكافأة!');
    }
  };

  return (
    <button onClick={handleWatchAd}>
      شاهد الإعلان للحصول على ميزة
    </button>
  );
};
```
