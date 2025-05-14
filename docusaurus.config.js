// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vernam Lab',
  tagline: ' Worcester Polytechnic Institute',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://vernamlab.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vernamlab', // Usually your GitHub org/user name.
  projectName: 'vernamlab.github.io', // Usually your repo name.
  deploymentBranch: 'dev',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    parseFrontMatter: async (params) => {
      // Default to result from defaultParseFrontMatter
      const result = await params.defaultParseFrontMatter(params);

      // Ensure params and params.filePath are valid and filePath is a string starting with 'news/'
      if (params && typeof params.filePath === 'string' && params.filePath.startsWith('news/')) {
        const { frontMatter } = result;
        // Ensure frontMatter exists (it should, but good to be safe)
        if (frontMatter) {
            let { slug } = frontMatter;

            if (slug && typeof slug === 'string' && !slug.startsWith('/')) {
            frontMatter.slug = `/${slug}`;
            } else if (!slug) {
            const filePathParts = params.filePath.split('/');
            const fileName = filePathParts.pop();

            if (typeof fileName === 'string') {
                let baseName = '';
                const dateSlugMatch = fileName.match(/^\d{4}-\d{2}-\d{2}-(.*)\.mdx?$/);
                if (dateSlugMatch && dateSlugMatch[1]) {
                baseName = dateSlugMatch[1];
                } else {
                baseName = fileName.replace(/\.mdx?$/, '');
                }
                frontMatter.slug = `/${baseName}`;
            }
            }
        }
      }
      return result;
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'news',
        routeBasePath: 'news',
        path: './news',
        showReadingTime: false,
        blogTitle: 'Lab News',
        blogDescription: 'Latest news and updates from the lab',
        feedOptions: { type: [] },
        editUrl:
          'https://github.com/vernamlab/vernamlab.github.io/tree/dev/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vernamlab/vernamlab.github.io/tree/dev/',
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
            'https://github.com/vernamlab/vernamlab.github.io/tree/dev/',
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
      // image: 'img/docusaurus-social-card.jpg', // Removed for now
      navbar: {
        title: 'VERNAM LAB',
        logo: {
          alt: 'Vernam Lab Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            position: 'right',
            label: 'Home',
          },
        
          {
            type: 'doc',
            docId: 'members',
            position: 'right',
            label: 'Team',
          },
          {to: '/docs/publications', label: 'Publications', position: 'right'},
          {to: '/docs/projects', label: 'Projects', position: 'right'},
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            to: '/docs/join-us',
            label: 'Join Us',
            position: 'right',
          },
          {
            href: 'https://github.com/vernamlab/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Vernam Lab Logo',
          src: 'img/logo.svg', // Ensure this path is correct (e.g., static/img/logo.svg)
        },
        links: [
          {
            items: [
              {
                html: `
                  <div>
                    <p style="margin-bottom: 0.5rem;">
                      We are part of the <a href="https://www.wpi.edu/academics/departments/electrical-computer-engineering" target="_blank" rel="noopener noreferrer">Electrical and Computer Engineering Department</a> at <a href="https://www.wpi.edu/" target="_blank" rel="noopener noreferrer">Worcester Polytechnic Institute</a>.
                    </p>
                    <address style="font-style: normal;">
                      Atwater Kent 212, WPI
                      100 Institute Rd.
                      Worcester, MA 01609 USA<br />
                    </address>
                  </div>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vernam Lab.`, 
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
