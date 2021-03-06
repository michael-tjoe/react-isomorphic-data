/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'React Isomorphic Data Documentation',
  tagline: 'Easily fetch data in your ⚛️ React app, with full SSR support! 🎉',
  url: 'https://react-isomorphic-data.netlify.com/', // Your website URL
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jackyef', // Usually your GitHub org/user name.
  projectName: 'react-isomorphic-data', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'React Isomorphic Data',
      logo: {
        alt: 'react-isomorphic-data Logo',
        src: 'img/logo.png',
      },
      links: [
        {to: 'docs/intro', label: 'Docs'},
        // {to: 'docs/api/globals', label: 'API'}, // globals is the API entrypoint for typedoc generated markdowns
        {
          href: 'https://github.com/jackyef/react-isomorphic-data',
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
              label: 'Getting Started',
              to: 'docs/intro',
            },
            {
              label: 'Examples',
              to: 'docs/examples',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Social',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/jackyef/react-isomorphic-data',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/jacky_efendi',
            },
          ],
        },
      ],
      logo: {
        alt: 'React Isomorphic Data Logo',
        src: 'img/logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Jacky Efendi. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-149852843-1',
    },
    algolia: {
      apiKey: '062377f2ac2d588380929aafb76a76ab',
      indexName: 'react-isomorphic-data',
      algoliaOptions: {},
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: './docs',
          editUrl:
            'https://github.com/jackyef/react-isomorphic-data/edit/master/docusaurus/docs/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-classic', '@docusaurus/theme-live-codeblock', '@docusaurus/theme-search-algolia'],
};
