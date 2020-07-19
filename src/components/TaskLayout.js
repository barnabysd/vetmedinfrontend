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

const videoPlayButtonStyle = {
    position: 'absolute', 
    border: '0px solid red',
    left: '50%', 
    top: '50%',
    width:'100px',
    height: '100px',
    marginLeft:'-50px',
    marginTop:'-50px',
    display: 'block',
    zIndex:'10'
  }
  
  const centerButtonDivStyle = {
      position: 'absolute', 
      border: '0px solid red',
      left: '50%', 
      top: '50%',
      width:'200px',
      height: '100px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  
    const topSectionStyle = {height: '100px',display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyItems: 'stretch'}
    const instructionTextStyle = { display: 'flex', flexDirection: 'row', alignContents: 'flex-start', justifyContent: 'flex-start' }
    const additionalTextStyle = { display: 'flex', flexDirection: 'row', alignContents: 'flex-start', justifyContent: 'flex-start', fontWeight: '400',fontSize:'0.75rem',textAlign:'left'}
    const centerInstructionTextStyle = { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width:'692px',textAlign: 'center' }
    const centerInDivStyle = { display: 'flex', flexDirection: 'row',justifyContent: 'center', alignContent: 'center'}
    const bottomCenteredLayoutStyle = { display: 'flex', flexDirection: 'column',justifyContent: 'flex-end', alignItems: 'center',border: '0px solid red',height: '100px'}
  
    const VideoHolder = styled.div`
  position: absolute;
  border: 0px solid red;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: block;
  z-index:0;
`
const BottomLeftTextAreaHolder  = styled.div`
position:absolute;
left: 150px;
bottom: 50px;
`



const ClinicalInformationText = styled.div`
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 37px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -0.37px;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
`

const AdditionalBottomLeftText = styled.div`
      
width: 327px;
height: 100.6px;
font-family: ${theme.typography.fontFamily};
font-size: 18px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.4;
letter-spacing: -0.18px;
text-align: left;
margin-top:2rem;
color: ${theme.palette.midnightBlue.main};
& p {
   padding-left:0rem !important;
   margin-left:0rem !important;
   text-align: left;
}

`
  
  const TaskLayout = ({slideData, step, dogChoice, setCurrentStep, currentSlidePosition, navigationLeftHandler, navigationRightHandler}) => {
  
    let currentCaseStudySlideData = slideData.currentCaseStudySlideDataAr[currentSlidePosition]
  
    let initialState = { 
      showFullScreenVideo: false,
      showQuestionModal: false,
      videoPlaying: false,
      calledCount: 0
    }
   
    const [state, setState] = useState(initialState)
  
    // console.log('state ',state)
  
    let showBackgroundVideo = false
    let showVideoButton = false
    let videoPlayButtonState = false
    if ((currentCaseStudySlideData.slugName).indexOf('listen-to-dog-heart-instructions') !== -1 ) {
        showBackgroundVideo = true
        showVideoButton = false
        console.log("showBackgroundVideo true")
    } 
    if ((currentCaseStudySlideData.slugName).indexOf('listen-to-dog-heart-task') !== -1) {
        showBackgroundVideo = true
        showVideoButton = true
        console.log("showBackgroundVideo true")
    }
  
    const togglePlayVideo = (e) => {   
      console.log("togglePlayVideoParentlevel")
     
      if (ref.current.paused) { 
          console.log("togglePlayVideo - play")
          ref.current.play()
          refPlayButton.current.style.display = 'block'
          refPauseButton.current.style.display = 'none'
      
      } else {
          console.log("togglePlayVideo - pause")
          ref.current.pause()
          refPlayButton.current.style.display = 'none'
          refPauseButton.current.style.display = 'block'
          setCurrentStep(heartSteps.VIDEO_OF_HEART_WITH_TEXT)
  
        
      }

    } 
  
      let isPlaying = false
  
      const ref = React.createRef();
      const refPlayButton = React.createRef();
      const refPauseButton = React.createRef();
  
    return (
      <section>
  
      {(((currentCaseStudySlideData.slugName) === slideData.listenSection_ListenToDogHeart_TaskInstructions_Dudley.slugName) ) ? 
      <div style={{ 
          position: 'absolute',
          left: '0',
          top: '0',
          width: '100%',
          height: '100vh',
          backgroundColor: theme.palette.background.video,
      }}></div>
      :''}
  
      {(((currentCaseStudySlideData.slugName) !== slideData.listenSection_ListenToDogHeart_TaskInstructions_Dudley.slugName) ) ? 
      <div style={{ 
          position: 'absolute',
          left: '0',
          top: '0',
          width: '100%',
          height: '100vh',
         
          backgroundColor: theme.palette.cloudBlue.main,
      }}></div>
      :''}
  
      {(showBackgroundVideo === true && ((currentCaseStudySlideData.slugName) === slideData.listenSection_ListenToDogHeart_TaskInstructions_Dudley.slugName) ) ? <BackgroundVideoCustom autoPlay={true} ref={ref} 
          onClick={togglePlayVideo} 
          VideoHolder={VideoHolder} 
          videoName={currentCaseStudySlideData.animationVideoName} 
          playButtonState={state.videoPlaying}>
      </BackgroundVideoCustom>  : ''}
  
      {(showBackgroundVideo === true && ((currentCaseStudySlideData.slugName) !== slideData.listenSection_ListenToDogHeart_TaskInstructions_Dudley.slugName) ) ? <BackgroundVideoCustom autoPlay={false} ref={ref} 
          onClick={togglePlayVideo} 
          VideoHolder={VideoHolder} 
          videoName={currentCaseStudySlideData.animationVideoName} 
          playButtonState={state.videoPlaying}>
      </BackgroundVideoCustom> : ''}
       
      <Grid container 
      spacing={0}
      spacing={0}
      justify="center"
      style={{position: 'relative',border: '0px solid black',height: '100vh' }}>
        <Grid item xs={12} sm={12}  style={{border: '0px solid red'}}>
            <div style={topSectionStyle}>
                {(currentCaseStudySlideData.sliderHeader && currentCaseStudySlideData.sliderHeader !== '') ? <SliderHeader headerData={currentCaseStudySlideData} /> : ''}
                {step === heartSteps.VIDEO_OF_HEART ?  
                <div style={centerInDivStyle}><img src={soundOffIcon} alt="sound off" width="30" height="30"/></div> : ''}
            </div>
        </Grid>
        <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>
  
        <Grid item xs={12} sm={7}  align="center" style={{border: '0px solid red'}}>
  
        </Grid>
  
        <Grid item xs={12} sm={3}  align="center" style={{border: '0px solid red',height: '75%'}}>
  
           {step === heartSteps.VIDEO_OF_HEART ? 
                <BottomLeftTextAreaHolder>
                    <ClinicalInformationText>{processField('Clinical information',dogChoice,false)}</ClinicalInformationText>
                    <AdditionalBottomLeftText dangerouslySetInnerHTML={processField(currentCaseStudySlideData.additionalText,dogChoice)} />
                </BottomLeftTextAreaHolder>
          :''}
  
  
        </Grid>
  
        <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>
  
        <Grid item xs={12} sm={12}  style={{border: '0px solid red',height: '20%'}}>
             {step === heartSteps.VIDEO_OF_HEART_WITH_TEXT ? 
                <div style={bottomCenteredLayoutStyle}>
                    <BottomCenterTaskText>{(currentCaseStudySlideData.instructionsText ? stripUneededHtml(currentCaseStudySlideData.instructionsText)  : '')}</BottomCenterTaskText>
                </div>
              : ''}
         </Grid>
      </Grid>
  
      {((currentCaseStudySlideData.slugName) === slideData.listenSection_ListenToDogHeart_TaskInstructions_Dudley.slugName) ? <div style={centerButtonDivStyle}>
        <DarkBlueRoundedButton id={"showheartbeating"} buttonText={currentCaseStudySlideData.buttonLinks[0].title} onClickHandler={navigationRightHandler} />
        </div> : ''} 
      
      {(showVideoButton) ? <div style={videoPlayButtonStyle}>
   
        <VideoWhiteDotButtonBackground onClick={togglePlayVideo} id="videoLargePlayBtn">
                <PauseResponsive ref={refPlayButton} src={pauseButtonSvg} alt="" style={{display: 'none'}}/>
                <PlayResponsive ref={refPauseButton} src={playButtonSvg} alt="" />
        </VideoWhiteDotButtonBackground>
  
      </div> : ''}
    
      </section>
    )
  }


export default TaskLayout

