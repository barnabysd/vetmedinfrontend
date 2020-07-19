const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Vetmedin`,
    description: `website description`,
    author: `@barnabysd`,
  },
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/functions/",
  //     createProxyMiddleware({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": "",
  //       },
  //     })
  //   )
  // },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-react-redux`,
    //   options: {
    //     // [required] - path to your createStore module
    //     pathToCreateStoreModule: './src/state/createStore',
    //     // [optional] - options passed to `serialize-javascript`
    //     // info: https://github.com/yahoo/serialize-javascript#options
    //     // will be merged with these defaults:
    //     serialize: {
    //       space: 0,
    //       isJSON: true,
    //       unsafe: false,
    //     },
    //     // [optional] - if true will clean up after itself on the client, default:
    //     cleanupOnClient: true,
    //     // [optional] - name of key on `window` where serialized state will be stored, default:
    //     windowKey: '__PRELOADED_STATE__',
    //   },
    // },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    { // some polyfills are just included manually
      resolve: `gatsby-plugin-polyfill-io`,
         options: {
            features: [`Array.prototype.map`, `fetch`]
         },
    },
    // {
    //   resolve: `gatsby-plugin-postcss`,
    //   options: {
    //     // Accepts all options defined by `gatsby-plugin-postcss` plugin.
    //   },
    // },
    //  {
    //     resolve: `gatsby-plugin-emotion`,
    //     options: {
    //       // Accepts all options defined by `babel-plugin-emotion` plugin.
    //     },
    //   },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgReactLoader/,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
        }
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#24add6`,
        // Disable the loading spinner.
        showSpinner: false,
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
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
        name: `Vetmedin`,
        short_name: `Vetmedin`,
        start_url: `/`,
        background_color: `#003087`, // midnight blue
        theme_color: `#d0f5fd`, // cloud blue
        display: `minimal-ui`,
        icon: `src/images/vetmedin_icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
   
        baseUrl: "http://dev-vetm-admin.pantheonsite.io/", 
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
      // {
      //   resolve: `gatsby-plugin-netlify-functions`,
      //   options: {
      //     functionsSrc: `${__dirname}/src/functions`,
      //     functionsOutput: `${__dirname}/functions`,
      //   },
      // },
      {
        resolve: "gatsby-plugin-prettier-eslint",
        options: {
          prettier: {
            patterns: [
              // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
              // "**/*.{css,scss,less}",
              // "**/*.{json,json5}",
              // "**/*.{graphql}",
              // "**/*.{md,mdx}",
              // "**/*.{html}",
              // "**/*.{yaml,yml}",
            ],
          },
          eslint: {
              env: {
                  es6: true
              },
              patterns: "**/*.{js,jsx,ts,tsx}",
              customOptions: {
                 fix: true,
                 cache: true,
              },
              ignorePatterns: []
          }
        }
      }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}



