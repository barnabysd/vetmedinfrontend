/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
/*
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
 */










 /*

 // Create pages for docs and blogs separately using two separate
// queries. We use the `graphql` function which returns a Promise
// and ultimately resolve all of them using Promise.all(Promise[])
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const docTemplate = path.resolve('src/templates/docTemplate.js');
	const blogTemplate = path.resolve('src/templates/blogTemplate.js');

	// Individual blogs pages
	const blogs = graphql(`
		{
			blogs: allMarkdownRemark(
				filter: { fileAbsolutePath: { glob: "*sfhjksdfjhdsfhkjshfkjhdfsjdfhdsjf .md" } }
				sort: { order: DESC, fields: frontmatter___date }
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create blog pages
		result.data.blogs.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: blogTemplate,
			});
		});
	});

	// Individual docs pages
	const docs = graphql(`
		{
			docs: allMarkdownRemark(
				filter: {
					fileAbsolutePath: { glob: "*sdfjksdjflsdfjkdsjfjsdlfjlsdjflsdj.md" }
				}
				sort: { order: DESC, fields: frontmatter___order }
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create doc pages
		result.data.docs.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: docTemplate,
			});
		});
	});

	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([blogs, docs]);
};
   
*/
/*
const graphql = require("gatsby").graphql 

const caseStudySlidesData = ({ data }) => data // <pre>{JSON.stringify(data, null, 4)}</pre>

const query = graphql`
  {
    allNodeQuestionanswerslide {
      nodes {
        field_accessibilityvideotext
        field_additionaltext {
          processed
        }
        field_animationvideoname
        field_answerheader
        field_answersubheader {
          processed
        }
        field_answertext {
          processed
        }
        field_backlink {
          title
          uri
        }
        field_buttonlinks {
          title
          uri
        }
        field_buttons {
          uri
          title
        }
        field_continuelink {
          title
          uri
        }
        field_dogchoice
        field_infotext {
          processed
        }
        field_iscorrectanswer
        field_optionbodytext1 {
          processed
        }
        field_optionheader1
        field_optioniscorrect1
        field_optionlink1 {
          title
          uri
        }
        field_progresspercent
        field_questiontext {
          processed
        }
        field_section
        field_sliderheader
        field_slugname {
          title
          uri
        }
        field_subsection
        field_videocaptiontext1
        field_videoduration1
        field_videofilecaptions1 {
          description
          display
        }
        field_videofiledescription1 {
          description
          display
        }
        field_videofiletranscript1 {
          description
          display
        }
        field_videoname1
        field_videonarrator1
        field_videotext1
        id
        relationships {
          field_video1 {
            field_media_video_file {
              display
              description
            }
            relationships {
              field_media_video_file {
                localFile {
                  absolutePath
                  url
                  size
                }
              }
              thumbnail {
                filename
                localFile {
                  absolutePath
                  url
                }
              }
            }
          }
          field_videofilecaptions1 {
            uri {
              url
              value
            }
          }
          field_videofiledescription1 {
            uri {
              url
              value
            }
          }
          field_videofiletranscript1 {
            uri {
              url
              value
            }
          }
        }
        title
        status
      }
    }
  }
`

*/