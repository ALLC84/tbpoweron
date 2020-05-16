module.exports = {
  siteMetadata: {
    title: "TB Poweron",
    author: "Mailor Blanco",
    description: "Electric business of tampa florida",
    phone: "(813)-850-2848",
    email: "services@tbpoweron.com",
    siteUrl: "https://www.tbpoweron.com",
    numberEC: 'EC13005711',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'POWER ENTERPRISE ELECTRICAL CORP.',
        short_name: 'TB Poweron',
        description:`Electric business of tampa florida`,
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#9D926B',
        display: `standalone`,
        icon: 'static/favicon.ico', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': `${__dirname}/src/components`,
          '@assets': `${__dirname}/src/assets`,
          '@css': `${__dirname}/src/assets/css`,
          '@hooks': `${__dirname}/src/hooks`,
          '@images': `${__dirname}/src/assets/images`,
          '@static': `${__dirname}/static`,
        },
        extensions: ['js', 'css', 'png', 'jpg', 'svg']
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
          apiToken: `c849eb9d1eab494ed0ce2456a30b92`,
          previewMode: false,
          disableLiveReload: false,
          localeFallbacks: {
            it: [],
          },
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'robots-txt.config.js'
      }
    },
  ],
}
