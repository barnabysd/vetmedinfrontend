// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"
import React from "react"
import Layout from '../components/layout'
import theme from "../theme"
// import ReactPlayer from "react-player"

//import Sidebar from "../components/SideBar"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import HomeIcon from "@material-ui/icons/Home"
import StyledArtDirectedBackground from '../components/StyledArtDirectedBackground'
import Transition from 'react-transition-group'
import CustomFluidImage from "../components/CustomFluidImage"
//import WebsiteLogo from "../components/WebsiteLogo"
import StyledBackgroundSection from "../components/BackgroundSection"
//import StyledBackgroundSectionFixed from "../components/StyledBackgroundSectionFixed"
import styled from 'styled-components'
import DarkBlueRoundedButton from "../components/DarkBlueRoundedButton"
import { useCallback, useState, useEffect, useDebugValue, forceUpdate } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { toggleDrawerOpen, sendMessageData } from '../state/createStore'
import SideDrawer from "../components/SideDrawer"
import useLocalStorage from '../utils/localStorageHelper'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import CaseStudyLeftArrow from "../components/CaseStudyLeftArrow"
import CaseStudyRightArrow from "../components/CaseStudyRightArrow"
import { useCookies } from 'react-cookie'
import PercentageProgressIndicator from "../components/PercentageProgressIndicator"
import BackgroundVideoCustom, { videoPlayButtonStates } from "../components/BackgroundVideoCustom"
import QuestionResponse from "../components/QuestionResponse"
import QuestionPosed from "../components/QuestionPosed"
import SliderHeader from "../components/SliderHeader"
import ResponseVideo from "../components/ResponseVideo"
import FixedSizeVideoWidget from "../components/FixedSizeVideoWidget"
//import QuestionModal from "../components/QuestionModal"
//import ResponsiveDialog from "../components/ResponsiveDialog"

import { stripUneededHtml, removeParagraphsTags,processField } from "../utils/displayUtils"
import { dogName, heartSteps, tasks, cookieKeyNames } from '../WebsiteConstants'

import soundOffIcon from "../images/noSound.png"
import videoPlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import videoPauseButtonIcon from "../images/videoPauseLaunchBtn.png"

import slideData from '../api/slideData'
import { navigate } from "gatsby"

import playButtonSvg from '../images/icons_and_glyphs/GradientIcon_Play.svg'
import pauseButtonSvg from '../images/icons_and_glyphs/GradientIcon_Pause.svg'
import { VideoWhiteDotButtonBackground, SmallPlayArrow, PauseResponsive, PlayResponsive, SmallTriangleRight, Cross } from '../components/VideoPlayerParts'
import { setCaseStudyProgress } from "../utils/dataUtils"
import { BottomCenterTaskText } from "../components/PageParts"
import { startCase } from "lodash"

//NB: - useEffect(() - very good reference https://dev.to/spukas/4-ways-to-useeffect-pf6

// const styleHeart = styled.div`
//   height: 450px;
//   width: 315.31px;
//   object-fit: contain;
// `

const QuestionResponseLayout = ({slideData, step, dogChoice, setCurrentStep, currentSlidePosition, navigationLeftHandler, navigationRightHandler}) => {

    let currentCaseStudySlideData = slideData.currentCaseStudySlideDataAr[currentSlidePosition]
  
    const ref = React.createRef();
  
    return (
      <>
     
          <Grid container  
          spacing={0} 
          spacing={0} 
          justify="center" 
          style={{border: '0px solid black'}}>
        
            <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>
  
            <Grid item xs={12} sm={5}  align="center" style={{border: '0px solid red'}}>
                {(currentCaseStudySlideData.animationVideoName && currentCaseStudySlideData.animationVideoName !== '')  ? 
                <FixedSizeVideoWidget autoPlay="true" ref={ref} currentCaseStudySlideData={currentCaseStudySlideData} /> 
                : ''}
            </Grid>
  
            <Grid item xs={12} sm={5}  align="left" style={{ border: '0px solid red' }}>
              {(currentCaseStudySlideData.questionText && currentCaseStudySlideData.questionText !== '') ?
                <QuestionPosed currentCaseStudySlideData={currentCaseStudySlideData} currentSlidePosition={currentSlidePosition} onClickHandler={navigationRightHandler} /> :
                <QuestionResponse currentCaseStudySlideData={currentCaseStudySlideData} currentSlidePosition={currentSlidePosition} onClickHandler={navigationRightHandler} useVideoWidget={false} />
              }
  
            </Grid>
  
            <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>
  
          </Grid>
      </>
    )
  }

export default QuestionResponseLayout