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
        text: "GitHub",
        link: "https://github.com/i-rumeng",
      },
    ],
  }),
};
