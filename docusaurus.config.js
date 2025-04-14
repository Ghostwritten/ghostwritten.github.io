// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '幽灵代笔',
  tagline: '人人为我，我为人人',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ghostwritten.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ghostwritten', // Usually your GitHub org/user name.
  projectName: 'ghostwritten.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
 
 /* i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },*/

  i18n: {
    defaultLocale: 'zh',  // 默认语言设置为中文
    locales: ['zh', 'en'],  // 支持中文和英文
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      zh: {
        label: '中文',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs', // 确保基础路径为 'docs'
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Ghostwritten/ghostwritten.github.io/edit/main/',
          lastVersion: 'current',
          showLastUpdateTime: true,

        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        appId: 'LNV45EYH28', // 替换为你从 Algolia 获取的 App ID
        apiKey: 'e2241e5e41c12a7740e4c950b0325368', // 替换为你从 Algolia 获取的 Search-Only API Key
        indexName: 'ghostwritten', // 替换为你的索引名称
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search', // 如果你想启用独立搜索页面
      },
      navbar: {
        title: '幽灵代笔',
        logo: {
          alt: '幽灵代笔 Logo',
          src: 'img/favicon.ico', // 更新为新的 logo
          width: 32, // 确保大小符合原本样式
          height: 32,
        },
        items: [
          {
            position: 'left',
            label: '运维',
            items: [
              { type: 'docSidebar', sidebarId: 'linuxSidebar', label: 'Linux' },
              { type: 'docSidebar', sidebarId: 'kubernetesSidebar', label: 'Kubernetes' },
              { type: 'docSidebar', sidebarId: 'CICDSidebar', label: 'CICD' },
            ],
          },
          {
            position: 'left',
            label: '开发',
            items: [
              { type: 'docSidebar', sidebarId: 'shellSidebar', label: 'Shell' },
              { type: 'docSidebar', sidebarId: 'pythonSidebar', label: 'Python' },
            ],
          },
          {
            position: 'left',
            label: '生产力',
            type: 'docSidebar', 
            sidebarId: 'prdSidebar',
          },
          {to: '/blog', label: '生活', position: 'left'},
          {
            href: 'https://github.com/Ghostwritten/ghostwritten.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Linux',
                to: '/docs/ops/linux/intro',
              },
            ],
          },
          {
            title: '关注',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UC4yHO4YeSU-fY2CqDob5pFA',
              },
              {
                label: 'X',
                href: 'https://x.com/SaXinghua',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Ghostwritten/ghostwritten.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
