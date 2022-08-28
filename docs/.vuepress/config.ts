import { defineUserConfig } from "vuepress";
// 默认主题
import defaultTheme from "./theme/defaultTheme";
// 检索插件
import docsearchPlugin from "./plugin/docsearchPlugin";
// 离线访问
import pwaPlugin from "./plugin/pwaPlugin";

export default defineUserConfig({
  lang: "zh-CN",
  title: "I RuMeng",
  description: "记录学习的点点滴滴，不负每一分努力。",
  head: [
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["link", { rel: "icon", href: "/images/icons/android-chrome-512x512.png" }],
  ],
  theme: defaultTheme.theme,
  plugins: [docsearchPlugin.plugins, pwaPlugin.plugins],
});
