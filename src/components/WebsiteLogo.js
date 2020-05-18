import Img from "gatsby-image/withIEPolyfill"
import { useStaticQuery, graphql } from 'gatsby'

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

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "iConsultLogo.png" }) {
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


export default () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "iConsultLogo.png" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
return (

  <Img fixed={data.file.childImageSharp.fixed} alt="A corgi smiling happily" />
)
}
{/* <Img
      fixed={data.file.childImageSharp.fixed}
      objectFit="cover"
      objectPosition="50% 50%"
      alt=""
    /> */}
