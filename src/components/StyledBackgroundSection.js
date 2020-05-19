
// import React from 'react'
// import { graphql, StaticQuery } from 'gatsby'
// import styled from 'styled-components'

// import BackgroundImage from 'gatsby-background-image'

// const BackgroundSection = ({ classNam, imgName }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         allImageSharp {
//           edges {
//             node {
//               fluid(maxWidth: 500) {
//                 ...GatsbyImageSharpFluid
//                 originalName
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       const image = data.allImageSharp.edges.find(
//         edge => edge.node.fluid.originalName === imgName
//       )
//       if (!image) {
//         return null
//       }
//       const imageData = image.node.fluid
//       return (
//         <BackgroundImage
//           Tag="section"
//           className={classNam}
//           fluid={imageData}
//           backgroundColor={`#040e18`}
//         />
//       )
//     }}
//   />
// )

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: no-repeat;
// `

// export default StyledBackgroundSection