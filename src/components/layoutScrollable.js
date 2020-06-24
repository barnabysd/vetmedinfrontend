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

import "./layout.css"
import theme from "../theme"

const LayoutScrollable = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitle2Query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const layoutScrollableStyle = { backgroundColor:theme.palette.background.lightBlue, minWidth:'100%' }

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <CookiesProvider>
      <div style={layoutScrollableStyle}>
        <main>{children}</main>
      </div>
      </CookiesProvider>
    </>
  )
}

LayoutScrollable.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutScrollable
