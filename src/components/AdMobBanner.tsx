import { useEffect } from 'react';
import { useAdMob } from '@/hooks/useAdMob';
import { Capacitor } from '@capacitor/core';

export const AdMobBanner = () => {
  const { showBanner, hideBanner } = useAdMob();

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      showBanner();
    }

    return () => {
      if (Capacitor.isNativePlatform()) {
        hideBanner();
      }
    };
  }, [showBanner, hideBanner]);

  // Banner will be shown natively by AdMob
  // This component just handles the lifecycle
  return null;
};
