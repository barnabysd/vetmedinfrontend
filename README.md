<h1 align="center">Website</h1>

1.  **Overview.**

The website is a Drupal headless CMS setup.

The backend is a Drupal 8 website that emits a JSON feed.

The frontend is React.js (themed with Material-UI and styled components).

A static site builder framework called Gatsby parses this feed server-side using graphql queries and generates the React.js website pulled from a git repository.

The build is triggered on a service called Gatsby Cloud by sending a POST request to a link with the correct access header (available from the Gatsby Cloud CMS):

If it's a development build a preview url is then available once it has built in their CMS interface. It can also be triggered by a git commit to an open pull request - Please see Gatsby Cloud docs for detailed information.

If it's a production build the generated static files are automatically deployed to Netlify from Gatsby Cloud.

There is a Gatsby module for Drupal that integrates the build hooks into Drupal so can be done from the CMS by users.

NB: 
- the Drupal JSON feed data is only read at build time.
- there is a BASE_URL in WebsiteConstants.js for some video links. Needs to be moved .env file in future. Used as a base url for videos as Drupal returns local path rather than full url sometimes. As just mentioned above not querying Drupal directly just the graphql output from Gatsby derived from the Drupal JSON feed
- The Greensock lib is used for some animations and uses the paid for DrawSvgPlugin (it's included in the gsap-bonus.tgz in the repo root)

2.  **Setup Backend.**

    Navigate into the code root directory: 

   ```shell
   
   composer install

   ```

    to install modules then the procedure to install is as you would any other Drupal 8 website.

    After the initial Drupal website is setup:

    - Enable the Gatsby modules (4 entries) and set the required permissions

    - Enable the custom 'Certificate module'

3.  **Setup Frontend.**

    Navigate to the frontend code directory.

    Create a .env file with 

    ```shell

    BASIC_AUTH_USERNAME=CMS USERNAME HERE
    BASIC_AUTH_PASSWORD=CMS USER PASSWORD HERE

    ```
    
    To install modules and start it up.

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

    To deploy the preview version do a git commit. 
    
    Then commit changes to a development branch and create a pull request (don't approve it) into the master branch to create previews in Gatsby Cloud.

    To deploy the production version accept the pull request into master to allow Gatsby Cloud deploy the live version on to Netlify.

    The pages (found in src/pages) are connected by the slugnames (found in WebsiteContants.js) attached to content types in the CMS. Each Gatsby page is made up of multiple content types from the Drupal CMS (see the graphql query embedded at the bottom of every page).

    Each content entry in the CMS has a prefix:

    Page (should be renamed 'Section' as actually a collection of pages) e.g. the xray section is Page 9

1.  **Open the source code and start editing**

    Open the `src` directory in your code editor of choice and edit pages found in the `src/pages/` directory. Save your changes and the browser will update in real time

NB: 

- This feed data is only read at build time by the build server.
- The navigation buttons data and 3d animation videos are embedded in the frontend code and the text and information videos can be updated through the CMS.
- The CMS live url is: https://cms.iconsultvet.co.uk

