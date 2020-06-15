/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

//import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import React, { useLayoutEffect, useState } from 'react'
import { CookiesProvider } from 'react-cookie';

import Header from "./header"
import "./layout.css"
import styled, { css, keyframes } from 'styled-components'
import theme, { sm, md, lg, xl } from '../theme'

// function useWindowSize() {
//   const [size, setSize] = useState([0, 0])
//   useLayoutEffect(() => {
//     function updateSize() {
//       setSize([window.innerWidth, window.innerHeight])
//     }
//     window.addEventListener('resize', updateSize)
//     updateSize();
//     return () => window.removeEventListener('resize', updateSize)
//   }, [])
//   return size
// }

// function ShowWindowDimensions(props) {
//   const [width, height] = useWindowSize();
//   return <span>Window size: {width} x {height}</span>;
// }

const Layout = ({ children, scrollablePage = false, backgroundColor = theme.palette.background.lightBlue }) => {
 // const [width, height] = useWindowSize();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let layoutStyle = { 
     backgroundColor:backgroundColor,
     minWidth:'100%',
     height:'100vh',
     minHeight:'100vh',
     border: '0px solid yellow',
     overflow:'hidden'
  }
  if (scrollablePage) {
     layoutStyle = {
          backgroundColor:backgroundColor,
          minWidth:'100%'
     }
  }
   
  //TODO: - figure out what to do here - can't use at top level without breaking lower level styled comp 
  // const AllLayout = styled.div`
      // minWidth:100%;
      // height:100vh;
      // minHeight:100vh;
      // border: 0px solid yellow;
      // overflow:hidden;
  //     @media (max-width: ${sm}px) {
  //       overflow:auto;
  //       height:auto;
  //     }
  // `

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <CookiesProvider>
      <div className="pageContainer">

        <main>{children}</main>
      
      </div>
      </CookiesProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
