import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

import {
  EmailShareButton,
  LinkedinShareButton,
  ShareCounts,
  LinkedinShareCount,
  EmailIcon,
  LinkedinIcon
} from 'react-share';

// const {
//   FacebookShareButton,
//   GooglePlusShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
//   EmailShareButton,
// } = ShareButtons;
// const {
//   FacebookShareCount,
//   GooglePlusShareCount,
//   LinkedinShareCount,
 
// } = ShareCounts;

// const FacebookIcon = generateShareIcon('facebook');
// const TwitterIcon = generateShareIcon('twitter');
// const GooglePlusIcon = generateShareIcon('google');
// const LinkedinIcon = generateShareIcon('linkedin');

// const EmailIcon = generateShareIcon('email');

// export default function Template({
//   data, location // this prop will be injected by the GraphQL query we'll write in a bit
// }) {
export default function SocialShareExample() {
  //const { markdownRemark: post } = data;
  const location = {shareUrl:"http://www.bbc.co.uk"}
  const imageData = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const post = {
      frontmatter:
      {
          image: imageData.placeholderImage
      },
      title:"test",
      summary:"tbfgffdfggdfg",
      date:"20-10-2020",
      html: "<p>Helloooooo</p>"
 }
  const shareUrl = location.pathname
  const title = post.frontmatter.title
  const source = "http://www.bbc.co.uk"
  const summary = "ddfgdfgdg"
  const url ="http://www.bbc.co.uk"
  return (
    <Layout>
{/* <Helmet title={`Vetmedin | Some stuff - ${post.frontmatter.title}`} />
        <Img sizes={post.frontmatter.image.childImageSharp.sizes} />
         */}

<EmailShareButton
              url={shareUrl}
              subject={title}
              body="body"
              className="button">
              <EmailIcon
                size={32}
                round={false} />
              </EmailShareButton>
<LinkedinShareButton
url={url}
                summary={summary}
                title={title}
                source={source}
                windowWidth={750}
                windowHeight={600}
                className="button">
                <LinkedinIcon
                  size={32}
                  round={false} />
              </LinkedinShareButton>
              <Link to="/">Back to home</Link>
 
{/*         
           <ul className="social-share">
            <li>
                <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="button" 
                >
                <FacebookIcon
                  size={32}
                  round={false} />
              </FacebookShareButton>

              <FacebookShareCount
                url={shareUrl}
                className="count">
                {count => count}
              </FacebookShareCount>
            </li>
            <li>
                <TwitterShareButton
                url={shareUrl}
                title={title}
                className="button">
                <TwitterIcon
                  size={32}
                  round={false} />
              </TwitterShareButton>
            </li>
            
            <li>
                <LinkedinShareButton
                url={shareUrl}
                title={title}
                windowWidth={750}
                windowHeight={600}
                className="button">
                <LinkedinIcon
                  size={32}
                  round={false} />
              </LinkedinShareButton>

              <LinkedinShareCount
                url={shareUrl}
                className="count">
                {count => count}
              </LinkedinShareCount>
            </li>
            <li>
              <EmailShareButton
              url={shareUrl}
              subject={title}
              body="body"
              className="button">
              <EmailIcon
                size={32}
                round={false} />
              </EmailShareButton>
            
            </li>
          </ul> */}
          {/* <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
      */}
{/*      
      <Helmet
        bodyAttributes={{
          class: 'noBgImg'
        }}
      />
   */}
    </Layout>
  );
}
// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "DD MMMM YYYY", locale:"fr")
//         path
//         title
//         image {
//           childImageSharp {
//             resize(width: 1500, height: 1500) {
//               src
//             }
//             sizes(maxWidth: 786) {
//               ...GatsbyImageSharpSizes
//             }
//           }
//         }    
    
        
//       }
//     }
//   }
// `;
