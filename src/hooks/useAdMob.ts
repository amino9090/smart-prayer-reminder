import { useEffect, useState } from 'react';
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, RewardAdOptions, AdMobRewardItem } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export const useAdMob = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [rewardEarned, setRewardEarned] = useState(false);

  // AdMob IDs - استبدلها بمعرفاتك الخاصة من Google AdMob
  const BANNER_AD_ID = Capacitor.getPlatform() === 'android' 
    ? 'ca-app-pub-3940256099942544/6300978111' // Test ID
    : 'ca-app-pub-3940256099942544/2934735716'; // Test ID for iOS

  const REWARD_AD_ID = Capacitor.getPlatform() === 'android'
    ? 'ca-app-pub-3940256099942544/5224354917' // Test ID
    : 'ca-app-pub-3940256099942544/1712485313'; // Test ID for iOS

  useEffect(() => {
    const initialize = async () => {
      if (Capacitor.isNativePlatform()) {
        try {
          await AdMob.initialize({
            testingDevices: ['YOUR_DEVICE_ID'], // أضف معرف جهازك للاختبار
            initializeForTesting: true,
          });
          setIsInitialized(true);
          console.log('AdMob initialized successfully');
        } catch (error) {
          console.error('Error initializing AdMob:', error);
        }
      }
    };

    initialize();
  }, []);

  // Show Banner Ad
  const showBanner = async () => {
    if (!isInitialized || !Capacitor.isNativePlatform()) return;

    try {
      const options: BannerAdOptions = {
        adId: BANNER_AD_ID,
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
      };

      await AdMob.showBanner(options);
      console.log('Banner ad shown');
    } catch (error) {
      console.error('Error showing banner:', error);
    }
  };

  // Hide Banner Ad
  const hideBanner = async () => {
    if (!isInitialized || !Capacitor.isNativePlatform()) return;

    try {
      await AdMob.hideBanner();
      console.log('Banner ad hidden');
    } catch (error) {
      console.error('Error hiding banner:', error);
    }
  };

  // Show Reward Ad
  const showRewardAd = async (): Promise<boolean> => {
    if (!isInitialized || !Capacitor.isNativePlatform()) {
      console.log('AdMob not available on web');
      return false;
    }

    try {
      // Prepare the reward ad
      const options: RewardAdOptions = {
        adId: REWARD_AD_ID,
      };

      await AdMob.prepareRewardVideoAd(options);
      
      // Show the reward ad
      const result = await AdMob.showRewardVideoAd();
      
      if (result) {
        setRewardEarned(true);
        console.log('Reward earned!');
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Error showing reward ad:', error);
      return false;
    }
  };

  return {
    isInitialized,
    showBanner,
    hideBanner,
    showRewardAd,
    rewardEarned,
    setRewardEarned,
  };
};
