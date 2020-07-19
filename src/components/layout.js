import PropTypes from "prop-types"
import { useStaticQuery, graphql, navigate } from "gatsby"
import React, { useLayoutEffect, useState, useEffect } from 'react'
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
import { getProgressPercent } from "../utils/dataUtils"
import DebugHelper from "../components/DebugHelper"
import { addAccessKeyNav } from "../utils/keyboardUtils.js"
import { Helmet } from 'react-helmet'

import {
  dogName,
  cookieKeyNames} from '../WebsiteConstants'
import { isNonNullExpression } from "typescript";

//TODO - decide if this id ok (hides fake annoying error message)
const realError = console.error;
console.error = (...x) => {
  //debugger;
  if (x.length > 0 && (x[1]) && (x[1]).indexOf('circle') !== -1 ) {
    return;
  }
  realError(...x);
};

const Layout = ({ children, 
  scrollablePage = false, 
  backgroundColor = null, 
  showPercentIndicator = true,
  showChoicePage = false,
  showSideMenu = true,
  showSliderHeader = true,
  showBurgerMenuIcon = false,
  headerText = ''
}) => {

  const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.HAS_CONSENT,cookieKeyNames.USER_CHOICE, cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL]);
  let stateFromCookie = { renderUserChoice: false, renderLoader: false, renderCookieBanner: false }
  const [state, setState] = useState(stateFromCookie)

  const dogChoice = cookies[cookieKeyNames.DOG_CHOICE] ? cookies[cookieKeyNames.DOG_CHOICE]: dogName.DUDLEY 
  const savedProgressString = cookies[cookieKeyNames.CASESTUDYS_ALL] ? cookies[cookieKeyNames.CASESTUDYS_ALL] : ""

  const handleUserChoiceUnmount = () =>  {
      setState({ renderUserChoice: false, renderLoader: false, renderCookieBanner: false});
  }
  const handleLoaderUnmount = () =>  {
      setState({ renderUserChoice: false, renderLoader: false, renderCookieBanner: false});
  }
  const handleCookieBannerUnmount = () =>  {
      setState({renderUserChoice: false, renderLoader: false, renderCookieBanner: false});
  }

  let resourcesUserChoicePage = get(this, 'nodeUserchoice') 

  const progresspercent = getProgressPercent(savedProgressString, dogChoice, cookies)
  
  const layoutScrollableStyle = { backgroundColor:backgroundColor === null ? theme.palette.background.lightBlue : backgroundColor, minWidth:'100%',overflow:'auto' }
  const layoutNoScroll = backgroundColor === null ? { overflow:'hidden' } : { overflow:'hidden', backgroundColor:backgroundColor}
  
  useEffect(() => {
      addAccessKeyNav()
  },[])

  return (
    <>
      <Helmet>
        <title>Vetmedin</title>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#003087"/>
        <meta name="msapplication-TileColor" content="#003087"/>
        <meta name="theme-color" content="#003087"></meta> */}
      </Helmet>
      <CookiesProvider>
      <div className="pageContainer" style={scrollablePage ? layoutScrollableStyle : layoutNoScroll }>

        {state.renderUserChoice || showChoicePage ? <UserChoice unmountMe={handleUserChoiceUnmount} resources={resourcesUserChoicePage} /> : ''}
        {state.renderLoader ? <Loader unmountMe={handleLoaderUnmount} /> : ''}
        {state.renderCookieBanner ? <CookieBanner unmountMe={handleCookieBannerUnmount} /> : ''}
        {showSideMenu ? <SideDrawer hideBackground={false} showBurgerMenuIcon={showBurgerMenuIcon} /> : '' }
        <DebugHelper />
        {showPercentIndicator ? <PercentageProgressIndicator percent={progresspercent} dogChoice={dogChoice} /> : ''}
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
