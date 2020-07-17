import React from 'react'
import styled from 'styled-components'

// import mobileImage from "../images/gatsby-icon.png" // Tell Webpack this JS file uses this image
// import desktopImage from "../images/gatsby-astronaut.png" // Tell Webpack this JS file uses this image

import BackgroundImage from 'gatsby-background-image-es5'

const ArtDirectedBackground = ({ className }) => {
    // const { mobileImage, desktopImage } = useStaticQuery(
    //   graphql`
    //     query {
    //       mobileImage: file(relativePath: { eq: "loadingScreen.png" }) {
    //         childImageSharp {
    //           fluid(maxWidth: 490, quality: 100) {
    //             ...GatsbyImageSharpFluid_withWebp
    //           }
    //         }
    //       }
    //       desktopImage: file(relativePath: { eq: "loadingScreen.png" }) {
    //         childImageSharp {
    //           fluid(quality: 100, maxWidth: 4160) {
    //             ...GatsbyImageSharpFluid_withWebp
    //           }
    //         }
    //       }
    //     }  
    //   `
    // )
    // Set up the array of image data and `media` keys.
    // You can have as many entries as you'd like.
    // const sources = [
    //   mobileImage.childImageSharp.fluid,
    //   {
    //     ...desktopImage.childImageSharp.fluid,
    //     media: `(min-width: 491px)`,
    //   },
    // ]

    const mobileImage = {
        aspectRatio: 0.75,
        src: "https://via.placeholder.com/1440x1920",
        srcSet:
          "https://via.placeholder.com/300x400 300w, https://via.placeholder.com/600x800 600w, https://via.placeholder.com/900x1200 900w, https://via.placeholder.com/1440x1920 1440w",
        sizes: "(max-width: 1440px) 100vw, 1440px",
      };
      
      const desktopImage = {
        aspectRatio: 1.7777777778,
        src: "https://via.placeholder.com/1600x900",
        srcSet:
          "https://via.placeholder.com/300x169 300w, https://via.placeholder.com/600x338 600w, https://via.placeholder.com/1200x675 1200w, https://via.placeholder.com/1600x900 1600w",
        sizes: "(max-width: 1600px) 100vw, 1600px",
      };
      
      const sources = [
        {
          ...mobileImage,
          media: `(max-width: 767px)`,
        },
        {
          ...desktopImage,
          media: `(min-width: 768px)`,
        },
      ];

    //  const sources = [
    //   mobileImage,
    //   {
    //     desktopImage,
    //     media: `(min-width: 491px)`,
    //   },
    // ]

    console.log(JSON.stringify(sources))
  
    return (
      <BackgroundImage
        Tag={`section`}
        id={`media-test`}
        className={className}
        fluid={sources}
      >
        <StyledInnerWrapper>
          <h2>*</h2>
        </StyledInnerWrapper>
      </BackgroundImage>
    )
  }
  
  const StyledInnerWrapper = styled.div`
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  
  const StyledArtDirectedBackground = styled(ArtDirectedBackground)`
    width: 100%;
    min-height: 100vh;
    /* You should set a background-size as the default value is "cover"! */
    background-size: auto;
    /* So we won't have the default "lightgray" background-color. */
    background-color: transparent;
  `
  
  export default StyledArtDirectedBackground