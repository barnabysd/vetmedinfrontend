require('dotenv').config()


module.exports = {
  siteMetadata: {
    title: `Vetmedin`,
    description: `website description`,
    author: `Swordfish Advertising`,
  },

  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    { // some polyfills are just included manually as well as this
      resolve: `gatsby-plugin-polyfill-io`,
         options: {
            features: [`Array.prototype.map`, `fetch`]
         },
    },
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

    Since it was difficult to get layouts working properly with this plugin, I've added layout support to TransitionLink. 
    Remove gatsby-plugin-layout and other persistent layouts from your project and add your Layout component as an option in gatsby-config.js.

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
        //baseUrl: "https://stagecms.iconsultvet.co.uk", 
        baseUrl: "https://stagingcms.mvdtails.site",
        //baseUrl: "http://vetm-admin.pantheonlocal.com",
        // basicAuth: {
        //   username: process.env.BASIC_AUTH_USERNAME,
        //   password: process.env.BASIC_AUTH_PASSWORD,
        // },
      },
    },
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
      }
      // {
      //   resolve: "gatsby-plugin-prettier-eslint",
      //   options: {
      //     prettier: {
      //       patterns: [
      //         // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
      //         // "**/*.{css,scss,less}",
      //         // "**/*.{json,json5}",
      //         // "**/*.{graphql}",
      //         // "**/*.{md,mdx}",
      //         // "**/*.{html}",
      //         // "**/*.{yaml,yml}",
      //       ],
      //     },
      //     eslint: {
      //         env: {
      //             es6: true
      //         },
      //         patterns: "**/*.{js,jsx,ts,tsx}",
      //         customOptions: {
      //            fix: true,
      //            cache: true,
      //         },
      //         ignorePatterns: []
      //     }
      //   }
      // }
 
  ]
}



