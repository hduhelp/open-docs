import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/develop/': [
    '/develop/README.md',
    '/develop/get-access-token.md',
    {
      text: '公共 API',
      collapsible: true,
      children: [
        '/develop/public/time.md',
      ],
    },
    {
      text: '用户 API',
      collapsible: true,
      children: [
        '/develop/user/model.md',
        '/develop/user/info.md',
      ],
    },
    {
      text: '学习 API',
      collapsible: true,
      children: [
        '/develop/teaching/schedule-now.md',
        '/develop/teaching/schedule.md',
      ],
    },
    {
      text: '后勤 API',
      collapsible: true,
      children: [
        '/develop/logistics/card.md',
        '/develop/logistics/electric.md',
      ],
    },
    {
      text: '通知 API',
      collapsible: true,
      children: [
        '/develop/notify/notify.md',
      ],
    },
  ],
  '/advanced/': [
    {
      text: '深入',
      children: [
        '/advanced/architecture.md',
        '/advanced/plugin.md',
        '/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/advanced/cookbook/README.md',
        '/advanced/cookbook/usage-of-client-config.md',
        '/advanced/cookbook/adding-extra-pages.md',
        '/advanced/cookbook/making-a-theme-extendable.md',
        '/advanced/cookbook/passing-data-to-client-code.md',
        '/advanced/cookbook/markdown-and-vue-sfc.md',
      ],
    },
  ],
  '/reference/': [
    {
      text: 'VuePress 参考',
      collapsible: true,
      children: [
        '/reference/cli.md',
        '/reference/config.md',
        '/reference/frontmatter.md',
        '/reference/components.md',
        '/reference/plugin-api.md',
        '/reference/theme-api.md',
        '/reference/client-api.md',
        '/reference/node-api.md',
      ],
    },
    {
      text: '打包工具参考',
      collapsible: true,
      children: [
        '/reference/bundler/vite.md',
        '/reference/bundler/webpack.md',
      ],
    },
    {
      text: '默认主题参考',
      collapsible: true,
      children: [
        '/reference/default-theme/config.md',
        '/reference/default-theme/frontmatter.md',
        '/reference/default-theme/components.md',
        '/reference/default-theme/markdown.md',
        '/reference/default-theme/styles.md',
        '/reference/default-theme/extending.md',
      ],
    },
    {
      text: '官方插件参考',
      collapsible: true,
      children: [
        {
          text: '常用功能',
          children: [
            '/reference/plugin/back-to-top.md',
            '/reference/plugin/container.md',
            '/reference/plugin/external-link-icon.md',
            '/reference/plugin/google-analytics.md',
            '/reference/plugin/medium-zoom.md',
            '/reference/plugin/nprogress.md',
            '/reference/plugin/register-components.md',
          ],
        },
        {
          text: '内容搜索',
          children: [
            '/reference/plugin/docsearch.md',
            '/reference/plugin/search.md',
          ],
        },
        {
          text: 'PWA',
          children: [
            '/reference/plugin/pwa.md',
            '/reference/plugin/pwa-popup.md',
          ],
        },
        {
          text: '语法高亮',
          children: [
            '/reference/plugin/prismjs.md',
            '/reference/plugin/shiki.md',
          ],
        },
        {
          text: '主题开发',
          children: [
            '/reference/plugin/active-header-links.md',
            '/reference/plugin/git.md',
            '/reference/plugin/palette.md',
            '/reference/plugin/theme-data.md',
            '/reference/plugin/toc.md',
          ],
        },
      ],
    },
  ],
}
