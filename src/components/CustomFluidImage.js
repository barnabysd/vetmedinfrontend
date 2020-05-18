import Img from "gatsby-image/withIEPolyfill"
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


// export default ({ data }) => (
//   <div>
//     <h1>hi</h1>
//     <Img
//       fixed={data.file.childImageSharp.fixed}
//       objectFit="cover"
//       objectPosition="50% 50%"
//       alt=""
//     />
//   </div>
// )
const CustomFluidImage = ({ imgName }) => (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.allImageSharp.edges.find(
          edge => edge.node.fluid.originalName === imgName
        )
        if (!image) {
          return null
        }
// (<div>
//     <h1>hi</h1>
//     <Img
//       fixed={data.file.childImageSharp.fixed}
//       objectFit="cover"
//       objectPosition="50% 50%"
//       alt=""
//     />
// </div>)


        return <Img fluid={image.node.fluid} />
      }}
    />
  )
  export default CustomFluidImage

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "../images/iConsultLogo.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
