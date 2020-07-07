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
import styled, { css, keyframes } from 'styled-components'
import theme, { sm, md, lg, xl } from '../theme'
import SideDrawer from '../components/SideDrawer';
import Loader from '../components/Loader'
import CookieBanner from '../components/CookieBanner';
import UserChoice from '../components/UserChoice';
import { useCookies } from 'react-cookie'
import get from 'lodash/get'
import PercentageProgressIndicator from '../components/PercentageProgressIndicator'
import SliderHeader from "../components/SliderHeader"

//TODO - decide if this id ok (hides fake annoying error message)
const realError = console.error;
console.error = (...x) => {
  //debugger;
  if (x.length > 0 && (x[1]) && (x[1]).indexOf('circle') !== -1 ) {
    return;
  }
  realError(...x);
};


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

const Layout = ({ children, 
  scrollablePage = false, 
  backgroundColor = theme.palette.background.lightBlue, 
  showPercentIndicator = true,
  showChoicePage = false,
  showSideMenu = true,
  showSliderHeader = true,
  headerText = ''
}) => {
 // const [width, height] = useWindowSize();

 const [cookies, setCookie, removeCookie] = useCookies(['hasConsentSet','userChoice','userChoice','percentProgress']);
  let stateFromCookie = { renderUserChoice: false, renderLoader: false, renderCookieBanner: false }
  const [state, setState] = useState(stateFromCookie)

  const handleUserChoiceUnmount = () =>  {
      setState({ renderUserChoice: false, renderLoader: false, renderCookieBanner: false});
  }
  const handleLoaderUnmount = () =>  {
      setState({ renderUserChoice: false, renderLoader: false, renderCookieBanner: false});
  }
  const handleCookieBannerUnmount = () =>  {
      setState({renderUserChoice: false, renderLoader: false, renderCookieBanner: false});
  }

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // let layoutStyle = { 
  //    backgroundColor:backgroundColor,
  //    minWidth:'100%',
  //    height:'100vh',
  //    minHeight:'100vh',
  //    border: '0px solid yellow',
  //    overflow:'hidden'
  // }
  // if (scrollablePage) {
  //    layoutStyle = {
  //         backgroundColor:backgroundColor,
  //         minWidth:'100%'
  //    }
  // }
   
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

  let resourcesUserChoicePage = get(this, 'nodeUserchoice') 

  const progresspercent = "30%"
  // console.log(resourcesUserChoicePageAr1)

  

  const layoutScrollableStyle = { backgroundColor:theme.palette.background.lightBlue, minWidth:'100%',overflow:'auto'  }
  const layoutNoScroll = { overflow:'hidden' }

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <CookiesProvider>
      <div className="pageContainer" style={scrollablePage ? layoutScrollableStyle : layoutNoScroll }>

        {state.renderUserChoice || showChoicePage ? <UserChoice unmountMe={handleUserChoiceUnmount} resources={resourcesUserChoicePage} /> : ''}
        {state.renderLoader ? <Loader unmountMe={handleLoaderUnmount} /> : ''}
        {state.renderCookieBanner ? <CookieBanner unmountMe={handleCookieBannerUnmount} /> : ''}
        {showSideMenu ? <SideDrawer hideBackground={false} /> : '' }
        {/* <DebugHelper /> */}
        {showPercentIndicator ? <PercentageProgressIndicator percent={progresspercent} /> : ''}
        {showSliderHeader ? <SliderHeader headerText={headerText} /> : ''}

        {children}
      
      </div>
      </CookiesProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// 
// export const pageQuery = graphql`{
//       nodeUserchoice {
//         drupal_id
//         changed
//         field_buttonlinks {
//             uri
//             title
//         }
//         field_checkboxtext1
//         field_checkboxtext2
//         field_headertext
//         field_jobnumber
//         path {
//             alias
//         }
        
//       }
// }
// `
