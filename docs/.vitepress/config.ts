import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: 'VitePress',
  title: "夜语の秘密小屋",
  description: "夜语の的秘密结社",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Windows Terminal 美化', link: '/start-sese'}
    ],

    sidebar: [
      {
        text: '美化涩涩の艺术',
        items: [
          { text: '美化 Windows Terminal', link: '/start-sese'},
          { text: '就要涩涩', link: '/no-sese'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ]
  }
})
