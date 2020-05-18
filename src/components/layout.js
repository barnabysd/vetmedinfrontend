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

import Header from "./header"
import "./layout.css"

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

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      
      <div style={{ backgroundColor:"#b7ebfa", minWidth:'100%',height:'100vh',minHeight:'100vh',border: '1px solid yellow',overflow:'hidden'}}>

        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, 
          {` `}
          <p>test</p>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
