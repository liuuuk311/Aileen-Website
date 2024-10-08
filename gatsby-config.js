module.exports = {
  siteMetadata: {
    title: 'Aileen Roncoroni Portfolio',
    name: 'Aileen Roncoroni',
    url: 'aileenroncoroni.com',
  },
  plugins: [
    // `gatsby-plugin-preact`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    // `gatsby-transformer-video`,
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'Aileen Roncoroni Portfolio',
    //     short_name: 'aileenroncoroni.com',
    //     start_url: '/',
    //     background_color: '#4DACBF',
    //     theme_color: '#4DACBF',
    //     display: 'minimal-ui',
    //     icon: 'src/images/me.png', // This path is relative to the root of the site.
    //   },
    // },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*.js': ['cache-control: public, max-age=31536000, immutable'],
          '/*.css': ['cache-control: public, max-age=31536000, immutable'],
          '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
//     {
//       resolve: `gatsby-source-instagram-all`,
//       options: {
//         access_token: "IGQVJVYWZAOUWlkOEE0Ty1mNjN5RDdJQUZAzRUZAjblB2NGh4NW1nNUVCREtNcFhmUUY0UVo4Y1dyM2lsd0VkalBJQWw2R1hYSFY1OVRYaFRxQzBidVZAET0tTdHA2QVZA5ZAW9OS0RJWTNaQ0VBU2ZAQS184SAZDZD",
//       }
//  }
  ],
};
