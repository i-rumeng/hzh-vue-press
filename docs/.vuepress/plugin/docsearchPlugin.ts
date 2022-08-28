import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default {
  plugins: [
    docsearchPlugin({
      appId: "YOUR_APP_ID",
      apiKey: "YOUR_API_KEY",
      indexName: "YOUR_INDEX_NAME",
    }),
  ],
};
