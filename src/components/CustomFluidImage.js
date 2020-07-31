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

const CustomFluidImage = ({ imgName, ref, style = {}, width = '100%', height = '100%', ...rest}) => (
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

        const newStyle = { ...style }

        if (!image) {
          return (<img src='https://via.placeholder.com/300?text=MISSING_IMAGE' style={newStyle} />)
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
         
        if (width === '' && height !== '') {
          newStyle.maxHeight = height
          return <Img fluid={image.node.fluid} style={newStyle}/>
        }
        if (height === '' && width !== '') {
          newStyle.maxWidth = width
          return <Img fluid={image.node.fluid} style={newStyle}/>  
        }
        if (height === '' && width === '') {
          return <Img fluid={image.node.fluid} style={newStyle} />  
        }
        newStyle.maxHeight = height
        newStyle.maxWidth = width
       

        return <Img fluid={image.node.fluid} style={newStyle}/>
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
