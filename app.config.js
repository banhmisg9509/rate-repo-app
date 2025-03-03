import "dotenv/config";

export default {
  name: "rate-repository-app",
  slug: "rate-repository-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [
    [
      "expo-font",
      {
        fonts: [
          "node_modules/@expo-google-fonts/roboto/Roboto_400Regular.ttf",
          "node_modules/@expo-google-fonts/roboto/Roboto_700Bold.ttf",
        ],
      },
    ],
  ],
  extra: {
    env: process.env.ENV,
    APOLLO_URI: process.env.APOLLO_URI,
  },
};
