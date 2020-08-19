import SEO from "../components/seo"
import React, {useRef, useEffect, createRef} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import CrossSvg from "../svgReactLoader/xray/red_cross.svg"
import CustomFluidImage from '../components/CustomFluidImage'

import { render } from 'react-dom'
import {TweenLite, TimelineMax, Linear} from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { stripUneededHtml, getSlideData } from '../utils/displayUtils'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import DebugHelper from '../components/DebugHelper'
import { withCookies, Cookies, useCookies } from 'react-cookie'
import { useCallback, useState,  useDebugValue, forceUpdate } from 'react'
import TaskSummaryTableWidget from '../components/TaskSummaryTableWidget'
import theme, { sm, md, lg, xl } from '../theme'
import { dogName, tasks, xraySlides, cookieKeyNames, cookieKeyNamesAr, animationCharacterState, xraySlugNames } from '../WebsiteConstants'
import VideoFullScreenWidget from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'
import { replaceDogName, getCssDisplayState, displayDog } from '../utils/displayUtils'
import BottomNavigationLink from '../components/BottomNavigationLink'
import { LeftPageSection, RightPageSection, PageSection } from '../components/PageParts'
import HintSwitcher from '../components/HintSwitcher'
import { setCaseStudyProgress, get404ImageName } from '../utils/dataUtils'
import { processField } from "../utils/displayUtils"
import {  BottomRightIntroBodyText} from "../components/ActivityParts" 
import { getDogImageName } from '../utils/assetUtils'
import DarkBlueRoundedButton from '../components/DarkBlueRoundedButton'
import DarkBlueRoundedOutlineButton from '../components/DarkBlueRoundedOutlineButton'
import { navigate } from "gatsby"

export default function fourZeroFourTemplate(data, dogChoicePassed) {

  const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL]);
  const dogChoice = dogChoicePassed //cookies["dogChoice"] ? cookies["dogChoice"]: dogName.DUDLEY 
  
  return(
  <Layout>
    <SEO title="404: Not found" />
   <Grid container  
   spacing={0} 
   spacing={0} 
   justify="flex-start" 
   >
   <Grid item xs={12} sm={12}> 
       <div  style={{display: 'flex',flexDirection:'row',width:'100%',margin:'auto'}}>
               <div id="introImage" style={{display:'flex',width:'50%',height:'100vh',flexDirection:'column',alignItems:'flex-end',justifyContent:'center'}}> 
                  <CustomFluidImage  style={{width:'500px',height:'500px'}} imgName={get404ImageName(dogChoice)} />
             
               </div>
               <div id="introText" style={{display:'flex',width:'50%',height:'100vh',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}> 
                   {/* <BottomRightIntroText>{}</BottomRightIntroText> */}
                   <BottomRightIntroBodyText>{"Sorry we can’t seem to find the page you are looking for."}</BottomRightIntroBodyText>

          
                  <div> 
                  <DarkBlueRoundedButton buttonText={"Return to home"} to={"button"} onClickHandler={() => navigate("/")}/>
                  <DarkBlueRoundedOutlineButton  buttonText={"Resources"} to={"button"}  onClickHandler={() => navigate("/resources")}/>
                  </div>

               </div> 
          </div>

     </Grid>
  </Grid>
</Layout>
)
  }
 
