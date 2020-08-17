// import Img from "gatsby-image/withIEPolyfill"
import Img from "gatsby-image"
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { getIfIe11 } from '../utils/displayUtils'

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

        // (
        //     <Img
        //       fixed={data.file.childImageSharp.fixed}
        //       objectFit="cover"
        //       objectPosition="50% 50%"
        //       alt=""
        //     />
        //)

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

        if (getIfIe11()) {
          newStyle.maxHeight = 'none'
        } else {
          newStyle.maxHeight = height
        }

        newStyle.maxWidth = width


        return <Img fluid={image.node.fluid} style={newStyle}/>
      }}
    />
  )
  export default CustomFluidImage
