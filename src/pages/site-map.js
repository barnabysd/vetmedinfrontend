import React, {useRef, useEffect, createRef} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';

import styled from 'styled-components'
import { instanceOf } from 'prop-types';

import { withStyles, createStyles } from '@material-ui/core/styles';
import SlideDrawer from '../components/SideDrawer'
import Grid from '@material-ui/core/Grid'

//import Tick from "../svgReactLoader/icons_and_glyphs/tick_orange_path_20240.svg"
import CrossSvg from "../svgReactLoader/xray/red_cross.svg"
import WhiteCrossSvg from "../svgReactLoader/xray/white_cross.svg"

import Switch from '@material-ui/core/Switch';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CustomFluidImage from '../components/CustomFluidImage';

import { render } from 'react-dom'

import {TweenLite, TimelineMax, Linear} from 'gsap'

import { CSSPlugin } from 'gsap/CSSPlugin'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { stripUneededHtml } from '../utils/displayUtils'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import DebugHelper from '../components/DebugHelper'

import { withCookies, Cookies, useCookies } from 'react-cookie'
import { useCallback, useState,  useDebugValue, forceUpdate } from 'react'

import Transcript from "file-loader!../assets/transcript.vtt"
import Captions from "file-loader!../assets/captions.vtt"
import Description from "file-loader!../assets/description.vtt"

import TaskSummaryTable from '../components/TaskSummaryTable'

import theme, { sm, md, lg, xl } from '../theme'
import { dogName, tasks, xraySlides, ultrasoundSteps } from '../WebsiteConstants'

import VideoFullScreenWidget, { showFullScreenVideo } from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'

import {replaceDogName, getCssDisplayState, getSlideData, displayDog } from '../utils/displayUtils'
import BottomNavigationLink from '../components/BottomNavigationLink'
import HintSwitcher from '../components/HintSwitcher'

import { LeftPageSection, RightPageSection, PageSection, WhiteDotButton} from '../components/PageParts'

import videoPlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import videoPauseButtonIcon from "../images/videoPauseLaunchBtn.png"

import Draggable from "../components/Draggable"

import DarkBlueRoundedOutlineButton from "../components/DarkBlueRoundedOutlineButton"


const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
`;

const gridStyle = {border: '0px solid red'}

class TermsOfUse extends React.Component {
  render() {
    const resourcesAr = get(this, 'props.data.allNodeTermsofuse.nodes')
    const resources = resourcesAr[0]
    console.log(resources)
    //console.log(resources.allResourcesJson)

    const bodyHtml = { __html: resources.field_bodytext.processed }

    return (
      <Layout scrollablePage={true} showPercentIndicator={false} showBurgerMenuIcon={true}>
          
          <p>&nbsp;</p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/index">/index</a></p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/home-page">/home-page</a></p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/case-study-options">/case-study-options</a></p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/owner-and-dog-detail-slide">/owner-and-dog-detail-slide</a></p>
             <p>&nbsp;</p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/heart">/heart</a></p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/grade-the-murmur">/grade-the-murmur</a></p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/murmur-treatment">/murmur-treatment</a></p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/owner-response">/owner-response</a></p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/xray">/xray</a></p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/ultrasound">/ultrasound</a></p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/ultrasound-lviddn">/ultrasound-lviddn</a></p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/next-steps">/next-steps</a></p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/which-treatment">/which-treatment</a></p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/owner-treatment-options">/owner-treatment-options</a></p>
             <p>&nbsp;</p>
             <p style={{marginLeft:"150px",marginBottom:"0px"}}><a href="/certificate-request">/certificate-request</a></p>
          

{/* /index
/home-page
/case-study-options
/owner-and-dog-detail-slide

/heart (has 3 questions)

    - Did you hear a mitral valve heart murmur? 
 
    - compare 2 hearts?

/grade-the-murmur
/murmur-treatment
/owner-response
/xray
/ultrasound
/ultrasound-lviddn
/next-steps
/which-treatment
/owner-treatment-options
/certificate-request */}
       
        </Layout>
    )
  }
}

export default TermsOfUse

export const pageQuery = graphql`{
     allNodeTermsofuse {
    nodes {
      drupal_id
      field_bodytext {
        processed
      }
      field_headertext
      path {
        alias
      }
    }
  }
}`