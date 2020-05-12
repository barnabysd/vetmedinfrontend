/*import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types";
import { graphql } from 'gatsby'

import Layout from '../components/layout';

const Article = ({ data }) => {
    console.log("called",data);
    const post = data.nodeCasestudy;
// http://s5e8a27e362313.dev.dd:8083/
    const fullUrl = "https://dev-vetmedinbjmtest.pantheonsite.io/" + post.relationships.field_field_dog_image.uri.url;

    return (
        <Layout>
            { { <pre>{JSON.stringify(data, null, 4)}</pre> } }
        <h1>{post.field_dog_breed}</h1>
         {<img src={fullUrl} alt="test" />} 
        <div dangerouslySetInnerHTML={{ __html: post.title } }/>
        <Link to="/">Back to home</Link>
        </Layout>
    )
};

Article.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($ArticleId: String!) {
       nodeCasestudy(id: { eq: $ArticleId }) {
          id
          title
          path {
              alias
          }
          field_field_dog_breed

          field_field_dog_age
          relationships {
            field_field_dog_image {
                  uri {
                      url
                }
            }
         }
      }
  }
`;

export default Article;*/