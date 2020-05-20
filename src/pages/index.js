// These must be the first lines in src/index.js
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable'

import React, {useState} from 'react'
import Layout from '../components/layout'
import { navigate } from "gatsby"
import Grid from '@material-ui/core/Grid';

import OrangeRoundedButtonWithBLCorner from '../components/OrangeRoundedButtonWithBLCorner'

import BlockTextReveal from '../components/BlockTextReveal';
import CustomFluidImage from '../components/CustomFluidImage';
import SideDrawer from '../components/SideDrawer';
import Loader from '../components/Loader'
import CookieBanner from '../components/CookieBanner';
import UserChoice from '../components/UserChoice';
import { useCookies } from 'react-cookie'

export default function IndexPage(){
  const [cookies, setCookie, removeCookie] = useCookies(['hasConsentSet','userChoice','userChoice']);
  // const [cookieUserChoice, setCookieUserChoice, removeCookieUserChoice] = useCookies(['userChoice']);
  // const [cookieLoader, setCookieLoader, removeCookieLoader] = useCookies(['showLoader']);
  let stateFromCookie = { renderUserChoice: true, renderLoader: false, renderCookieBanner: false }
  const [state, setState] = useState(stateFromCookie)

  const handleUserChoiceUnmount = () =>  {
      setState({ renderUserChoice: false, renderLoader: false, renderCookieBanner: false});
  }

  const handleLoaderUnmount = () =>  {
      setState({ renderUserChoice: false, renderLoader: false, renderCookieBanner: false});
  }

  const handleCookieBannerUnmount = () =>  {
      setCookie('hasConsentSet', true, { path: '/' });
      setState({renderUserChoice: false, renderLoader: false, renderCookieBanner: false});
  }

  return (
  <Layout>
      {state.renderUserChoice ? <UserChoice unmountMe={handleUserChoiceUnmount} /> : navigate("/homePage/")}
      {state.renderLoader ? <Loader unmountMe={handleLoaderUnmount} /> : ''}
      {state.renderCookieBanner ? <CookieBanner unmountMe={handleCookieBannerUnmount} /> : ''}
  </Layout>
)
  }


