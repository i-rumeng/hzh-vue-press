import { defaultTheme } from "vuepress";

export default {
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "JSP",
        link: "/jsp",
      },
      {
        text: "博客",
        link: "https://www.irumeng.com/home/blog/index",
      },
      {
        text: "GitHub",
        link: "https://github.com/i-rumeng",
      },
    ],
  }),
};
