/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

// Create a slug for each recipe and set it as a field on the node.
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `node__recipe`) {
//     const slug = `/recipes/${node.drupal_internal__nid}/`
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const articles = await graphql(`
    {
      allNodeCasestudy {
        nodes {
          path {
            alias
          }
          title
          field_field_dog_age
          field_field_dog_breed
          drupal_id
          id
          relationships {
            field_field_dog_image {
              uri {
                url
              }
            }
          }
        }
      }
    }
  `);

    articles.data.allNodeCasestudy.nodes.map(articleData => {
            console.log("title",articleData.title);
            console.log("id",articleData.id);
            console.log("alias",articleData.path.alias);
            createPage({
                path: articleData.path.alias,
                component: path.resolve(`./src/templates/article.js`),
                context: {
                    ArticleId: articleData.id
                }
            })
        }
    );

    // console.log("data", articles.data.allNodeSubject.nodes[0].title);
 
}
   
