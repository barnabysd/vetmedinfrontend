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
import theme from "../theme"

function useWindowSize() {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize();
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

// function ShowWindowDimensions(props) {
//   const [width, height] = useWindowSize();
//   return <span>Window size: {width} x {height}</span>;
// }

const Layout = ({ children }) => {
  const [width, height] = useWindowSize();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const layoutStyle = { backgroundColor:theme.palette.background.lightBlue, minWidth:'100%',height:'100vh',minHeight:'100vh',border: '0px solid yellow',overflow:'hidden'}


  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <CookiesProvider>
      <div style={layoutStyle}>

        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, 
          {` `}
          <p>test</p>
        </footer> */}
      </div>
      </CookiesProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
