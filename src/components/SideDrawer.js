// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"

import React from "react"
import "./sideDrawer.css"

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import VisibleItemList from './VisibleItemList'

import { HamburgerSpin } from 'react-animated-burgers'
import  { useCallback, useState, useEffect, useDebugValue, forceUpdate } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { toggleDrawerOpen, sendMessageData } from '../state/createStore'
import MenuItemLink from '../components/MenuItemLink'

import mainLogoSvg from '../images/sideDrawer/master_logo_light_sml.svg'
import tickSvg from '../images/icons_and_glyphs/tick_orange_path_20240.svg'
import vetmedinLogoSvg from '../images/sideDrawer/vetmedin_logo_2.svg'
import bRLogoSvg from '../images/sideDrawer/boehringer_ingelheim_logo_2.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"
// TODO - use gatsby polyfil plugin instead
// import fetch from "fetch-polyfill"
import styled, { css, keyframes } from 'styled-components'
import { processInternalLink, stripUneededHtml, removeParagraphsTags } from '../utils/displayUtils'
import theme, { sm, md, lg, xl } from '../theme'

import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import Grid from '@material-ui/core/Grid'

const MainLogo = (({style}) => {
    return <img src={mainLogoSvg} style={style} />
})

const VetmedinLogo = (() => {
    return <img src={vetmedinLogoSvg} style={{ width: '100%', height: '40px',padding: '8px' }}/>
})

const BRLogo = (() => {
    return <img src={bRLogoSvg} style={{ width: '100%', height: '46px',padding:'8px' }}/>
})

// TODO: make style component

const ListStyle = styled(List).attrs((props) => ({ id: props.id}))`
    @media (max-width: ${lg}px) {
        padding-top:80px;
    }
`

const ListItemStyle = styled(ListItem).attrs((props) => ({ id: props.id}))`
   padding-top: 0rem;
   padding-bottom:0rem;
   @media (max-width: ${sm}px) {
       padding-bottom:0rem;
   }
`

const MenuBottomSection = styled.div`
  padding: 1rem;
  opacity: 1;
  font-family: ${theme.typography.fontFamily};
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.palette.skyBlue.main};
  @media (max-width: ${sm}px) {
    padding-bottom:0rem;
  } 
`

const gridStyle = {
  border: '0px solid red'
}

const drawer = (
    <ListStyle id="sideDrawMenuListHolder">
        <ListItemStyle button key={"a1"}>
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.tertitary.main,fontWeight:"700"}} to="/">Home</WebsiteLink> 
        </ListItemStyle>


        <ListItemStyle button key={"aaa"}>
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.tertitary.main,fontWeight:"700"}} to="/contact/">Contact</WebsiteLink> 
        </ListItemStyle>
        <ListItemStyle button key={"bbb"}>
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.tertitary.main,fontWeight:"700"}} to="/resources/">Resources</WebsiteLink> 
        </ListItemStyle>
        <ListItemStyle button key={"ccc"}>
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.tertitary.main,fontWeight:"700"}} to="/references/">References</WebsiteLink> 
        </ListItemStyle>

        <ListItemStyle button key={"dd"}>
          <ListItemText primary={""} style={{"color":"white"}} />
        </ListItemStyle>

        <ListItemStyle button key={"ddd"}>
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.white.main,fontWeight:"400"}} to="/terms-of-use/">Terms of use</WebsiteLink> 
        </ListItemStyle>
        <ListItemStyle button key={"eee"}>
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.white.main,fontWeight:"400"}} to="/privacy-policy/">Privacy Policy</WebsiteLink> 
        </ListItemStyle>
        <ListItemStyle button key={"ee"}>
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.white.main,fontWeight:"400"}} to="/cookie-policy/">Cookie Policy</WebsiteLink> 
        </ListItemStyle>
        <ListItemStyle button key={"fff"}>
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.white.main,fontWeight:"400"}} to="/accessibility-policy/">Accessibility Policy</WebsiteLink> 
        </ListItemStyle>

    </ListStyle>

);

let widthDrawer = '101px';
let widthDrawPixels = 101 + 1

function SideDrawer({hideBackground = false, showBurgerMenuIcon = false}) {

  const [sideDrawer, setSideDrawer] = useState(false)

  useDebugValue(sideDrawer ? 'side menu open' : 'side menu closed');

  let toggleButton = useCallback(
    event => {
      console.log(sideDrawer ? 'side menu open' : 'side menu closed')
      setSideDrawer((sideDrawer ? false : true))
    },
    [sideDrawer],
  );

  useEffect(() => {
    const handleSideMenuOpen = () => {
      const element = document.getElementById('sideMenu')
      const rect = element.getBoundingClientRect()
      const menuWidth = parseInt(rect.width)
      console.log('menuWidth ',menuWidth)
    };

    return () => {
      // clean up the event handler when the component unmounts
      if (showBurgerMenuIcon && document.getElementById('hamburgerIconCustom')) {
       (document.getElementById('hamburgerIconCustom')).removeEventListener('click', handleSideMenuOpen);
      }
    };
  }, [sideDrawer]);

  const burgerMenuColour = theme.palette.skyBlue.main + ' !important' 

  return (
        <div id="sideMenu" data-active={sideDrawer} className="sidebar" style={{ position: 'fixed', 
         top: 0,
         left: 0, 
         minHeight: '768px',
         backgroundColor: (hideBackground) ? ((sideDrawer) ? theme.palette.primary.main : 'transparent') : theme.palette.primary.main,
         zIndex: 200,
         border: '0px solid red'}}>

      { showBurgerMenuIcon ?
      <HamburgerSpin id="hamburgerIconCustom" 
          className="hamburger-icon-custom" 
          buttonStyle={{ outline: '0 !important',color: burgerMenuColour, width: (sideDrawer ?  "100px":'100%'), margin: (sideDrawer ?  "0" :'auto' )}} 
          isActive={sideDrawer} 
          toggleButton={toggleButton}
          barColor={burgerMenuColour}/>
      :  <MainLogo style={{width:"100%",height:"65px",marginTop:'0.5rem'}} /> }

      <div className="sidebar-menu-contents-expanded" data-active={sideDrawer}>
           {drawer}
           <div style={{ position: 'absolute', 
                  bottom: 0,
                  left: 0, 
                  height: '125px',
                  width: '100%'}}>
           <Grid container  
              spacing={0} 
              spacing={0} 
              justify="flex-start" 
              style={{
                borderTop: "1px solid rgba(82, 121, 176, 0.2)",
                height:"150px"
              }}>
              <Grid item xs={12} sm={3} style={gridStyle}>
              
                 <MainLogo style={{width:"100%",height:"65px",marginTop:'1.75rem'}} />
                
              </Grid>
              <Grid item xs={12} sm={6}  style={{borderRight: "1px solid rgba(82, 121, 176, 0.2)",paddingTop:'1rem'}}>

                  <MenuBottomSection>Copyright © 2020 Boehringer Ingelheim Animal Health UK Limited. All rights reserved.</MenuBottomSection>

              </Grid>
              <Grid item xs={12} sm={3}  style={{paddingTop:'1rem'}}>
                
                 <VetmedinLogo /><BRLogo />
                 
              </Grid>
              </Grid>
              </div> 
      </div>

      <div className="sidebar-menu-contents-closed" data-active={sideDrawer}>
          <div style={{ position: 'absolute', 
                  bottom: 0,
                  left: 0, 
                  height: '125px',
                  width: '100%'
                
                  }}>
              <Grid container  
                  spacing={0} 
                  spacing={0} 
                  justify="flex-start" 
                  style={{height:"150px"}}>
           
              <Grid item xs={12} sm={12}  style={{paddingTop:'1rem'}}>
                
                 <VetmedinLogo /><BRLogo />
                 
              </Grid>
              </Grid>
          </div>
      </div>
      </div>

)}

export default SideDrawer

