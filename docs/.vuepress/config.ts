import { defineUserConfig } from 'vuepress'
// 默认主题
import defaultTheme from './theme/defaultTheme'
// 检索插件
import docsearchPlugin from './plugin/docsearchPlugin'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'HZH的技术资料',
  description: '记录学习的点点滴滴，不负每一分努力。',
  theme: defaultTheme.theme,
  plugins:[
    docsearchPlugin.plugins
  ]
})