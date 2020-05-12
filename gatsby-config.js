module.exports = {
  siteMetadata: {
    title: `Vetmedin`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [


{
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Oswald`,
          variants: [`200`, `400`, `700`]
        },
        {
          family: `Poppins`,
          variants: [`200`, `400`, `700`]
        },
      ],
    },
  },


    // {
    //   resolve: `gatsby-plugin-material-ui`,
    //   options: {
    //     stylesProvider: {
    //       injectFirst: true,
    //     },
    //   },
    // },
    // `gatsby-plugin-styled-components`,
  

    `gatsby-plugin-transition-link`,

    /*

    Since it was difficult to get layouts working properly with this plugin, I've added layout support to TransitionLink. Remove gatsby-plugin-layout and other persistent layouts from your project and add your Layout component as an option in gatsby-config.js.

    */

    // options: {
    //   layout: require.resolve(`./src/components/Layout.jsx`)
    // }

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        // baseUrl:"http://s5e8a27e362313.dev.dd:8083/"
        // baseUrl: "http://s5e8a27e362313upgqmhyux9.devcloud.acquia-sites.com/"
        baseUrl: "https://dev-vetmedinbjmtest.pantheonsite.io/"
      },
    },



    

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5XHH5KJ",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },


    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: `GitHub`,
    //     fieldName: `github`,
    //     url: `https://api.github.com/graphql`,
    //     headers: {
    //       Authorization: `Bearer ${process.env.VETMEDIN_GITHUB_TOKEN}`,
    //     },
    //   },
    // },

    
      {
        resolve: `gatsby-plugin-netlify`,
        options: {
          headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
          allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
          mergeSecurityHeaders: true, // boolean to turn off the default security headers
          mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
          mergeCachingHeaders: true, // boolean to turn off the default caching headers
          transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
          generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
        },
      },
    

    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
