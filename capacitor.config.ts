import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.303e1eb33bc747db93d373af84a55f4a',
  appName: 'تذكير الصلاة الذكي',
  webDir: 'dist',
  server: {
    url: 'https://303e1eb3-3bc7-47db-93d3-73af84a55f4a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0F172A',
      showSpinner: false,
    },
  },
};

export default config;
