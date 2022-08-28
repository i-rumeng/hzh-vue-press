import { pwaPlugin } from "@vuepress/plugin-pwa";

export default {
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
};
