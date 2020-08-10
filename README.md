<h1 align="center">Vetmedin Website</h1>

1.  **Overview.**

The website is a Drupal headless CMS setup.

The backend is a Drupal 8 website that emits a JSON feed.

The frontend is React.js (themed with Material-UI and styled components).

A static site builder framework called Gatsby parses this feed server-side using graphql queries and generates the React.js website.

The build is triggered on a service called Gatsby Cloud by the following link:

Development - https://webhook.gatsbyjs.com/hooks/data_source/3f2a8dd9-50ee-4efa-88b8-1993d8089cce (a url is then available once it has built in their CMS interface)
(or a git commit to an open pull request)

Production - https://webhook.gatsbyjs.com/hooks/data_source/publish/3f2a8dd9-50ee-4efa-88b8-1993d8089cce

The production generated static files are automatically deployed to Netlify from Gatsby Cloud.

NB: 
- This Drupal JSON feed data is only read at build time.
- update Websiteconstants.js BASE_URL for some video links before releasing live build. Needs to moved .env file in future. Used as base url for videos as Drupal returns local path rather than full url sometimes. As just mentioned above not querying Drupal directly just the graphql output from Gatsby derived from the Drupal feed

<h1 align="center">
  Vetmedin  Website
</h1>

2.  **Setup Backend.**

    Navigate into the code root directory: 

    composer install

    to install modules then the procedure to install is as you would any other Drupal 8 website

3.  **Setup Frontend.**

    Navigate to the frontend code directory, install modules and start it up.

    ```shell

    npm install

    gatsby develop (or use npm run start)

    ```

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    to see the production version on port 9000:

     ```shell
    
    gatsby serve
    gatsby build  
    
    ```

    To deploy the production version do a git commit. 
    
    Then commit/pull into master push to make it live on to Netlify.

    The pages (found in src/pages) are connected by the slugnames (found in WebsiteContants.js) attached to content types in the CMS. Each Gatsby page is made up of multiple content types from the drupal CMS (see the graphql query embedded at the bottom of every page).

    Each content entry in the CMS has a prefix:

    Page (maybe should be renamed section)


1.  **Open the source code and start editing!**

    Open the `src` directory in your code editor of choice and edit pages found in the `src/pages/` directory. Save your changes and the browser will update in real time

## 🧐 What's inside?

A quick look at some of the top-level files and directories:

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser). `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

NB: 

- This feed data is only read at build time by the build server.
- The navigation buttons data and 3d animation videos are embedded in the frontend code and the text and information videos can be updated through the CMS.
- The CMS live url is: https://cms.iconsultvet.co.uk

