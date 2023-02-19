module.exports = {
  title: 'ALPHA VIDEO - Python Edition',
  tagline: 'Youtube on Alexa - Python Edition',
  url: 'https://alpha-video.andrewstech.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'unofficial-skills', // Usually your GitHub org/user name.
  projectName: 'alpha-video', // Usually your repo name.
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
      "data-ad-client": "ca-pub-3119327652471615",
    },
  ],
  themeConfig: {
    gtag: {
      trackingID: 'G-GBCRXFKRY8',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
      },
    navbar: {
      title: 'ALPHA-VIDEO',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/unofficial-skills/alpha-video',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Main website',
              href: 'https://andrewstech.me',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/WAu8ApjwG2',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/andrewstech1',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/unofficial-skills/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} youtube-Diy,  Built with Docusaurus and hosted on Github.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/unofficial-skills/alpha-video/edit/setup',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/unofficial-skills/alpha-video/edit/setup',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
