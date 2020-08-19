// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"
import React from "react"
import Layout from './layout'
import theme, { sm, md, lg, xl } from '../theme'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import HomeIcon from "@material-ui/icons/Home"

import Transition from 'react-transition-group'
import CustomFluidImage from "./CustomFluidImage"

import styled from 'styled-components'
import DarkBlueRoundedButton from "./DarkBlueRoundedButton"
import { useCallback, useState, useEffect, useDebugValue, forceUpdate } from 'react';


import BackgroundVideoCustom, { videoPlayButtonStates } from "./BackgroundVideoCustom"
import QuestionResponse from "./QuestionResponse"
import QuestionPosed from "./QuestionPosed"
import SliderHeader from "./SliderHeader"

import FixedSizeVideoWidget from "./FixedSizeVideoWidget"

import { stripUneededHtml, removeParagraphsTags,processField } from "../utils/displayUtils"
import { dogName, heartSteps, tasks, cookieKeyNames } from '../WebsiteConstants'

import soundOffIcon from "../images/noSound.png"
import videoPlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import videoPauseButtonIcon from "../images/videoPauseLaunchBtn.png"

import { navigate } from "gatsby"

import playButtonSvg from '../images/icons_and_glyphs/GradientIcon_Play.svg'
import pauseButtonSvg from '../images/icons_and_glyphs/GradientIcon_Pause.svg'
import { VideoWhiteDotButtonBackground, SmallPlayArrow, PauseResponsive, PlayResponsive, SmallTriangleRight, Cross } from './VideoPlayerParts'
import { setCaseStudyProgress } from "../utils/dataUtils"
import { BottomCenterTaskText } from "./PageParts"
import { startCase } from "lodash"

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

const topSectionStyle = { height: '100px', width:'100%',display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyItems: 'stretch' }
const centerInDivStyle = { padding: '1rem', display: 'flex',height: '100px', width:'100%', flexDirection: 'row',justifyContent: 'center', alignContent: 'center'}
const bottomCenteredLayoutStyle = { display: 'flex', flexDirection: 'column',justifyContent: 'flex-start', alignItems: 'center',border: '0px solid red',height: '100px'}

const CenterButtonStyle = styled.div`
    position: absolute;
    left:50%;
    top:50%;
    margin-left:-50px;
    margin-top: -30px;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    @media (max-width: ${md}px) {
        top:25%;
    }
    @media (max-width: ${sm}px) {
        top:25%;
    }
`

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
    width: 327px;
    @media (max-width: ${lg}px) {


    }
    @media (max-width: ${md}px) {
        position: static;
        width:100%;
        padding-left: 1rem;
        margin-left: -7rem;
        padding-top: 670px;

    }
    @media (max-width: ${sm}px) {
        position: static;
        width:100%;
        padding-top: 200px;
    }

`
const BottomRightTextAreaHolder = styled.div`
    position: absolute;
    right: 100px;
    bottom: 100px;
    @media (max-width: ${lg}px) {
      right: 40px;

    }
    @media (max-width: ${md}px) {
        position: static;
        width:100%;
        padding-left: 1rem;
        margin-left: -7rem;
        padding-top: 470px;


    }
    @media (max-width: ${sm}px) {
        position: static;
        width:100%;
        padding-top: 200px;
    }
`

const BottomRightTextAreaTitle = styled.div`
    width: 327px;
    margin-bottom: 2rem;
    font-family: ${theme.typography.fontFamily};
    height: 123.4px;
    font-size: 22px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: -0.22px;
    text-align: left;
    color: ${theme.palette.midnightBlue.main};
    @media (max-width: ${md}px) {
        width: 100%;
    }
    @media (max-width: ${sm}px) {
        width: 100%;
    }
`
const BottomRightTextAreaBody = styled.div`
    width: 328px;
    height: 21px;
    font-family: ${theme.typography.fontFamily};
    font-size: 0.938rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: italic;
    line-height: 1.6;
    letter-spacing: -0.15px;
    text-align: left;
    color: ${theme.palette.midnightBlue.main};
    & em {
        font-size: 0.938rem;
    }
    @media (max-width: ${md}px) {
        width: 100%;
    }
    @media (max-width: ${sm}px) {
        width: 100%;
    }

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
    @media (max-width: ${md}px) {
        width: 100%;
    }
    @media (max-width: ${sm}px) {
        width: 100%;
    }
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
    @media (max-width: ${md}px) {
        width: 100%;
        font-size: 0.75rem;
    }
    @media (max-width: ${sm}px) {
        width: 100%;
    }

`

const HeartTaskLayout = ({slideData, step, dogChoice, setCurrentStep, currentSlidePosition, navigationLeftHandler, navigationRightHandler}) => {

    let currentCaseStudySlideData = slideData.currentCaseStudySlideDataAr[currentSlidePosition]

    let initialState = {
        showFullScreenVideo: false,
        showQuestionModal: false,
        videoPlaying: false,
        calledCount: 0
    }

    const [state, setState] = useState(initialState)

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

      {step === heartSteps.INTRO ?
          <div style={{
              position: 'absolute',
              left: '0',
              top: '0',
              width: '100%',
              height: '100vh',
              backgroundColor: theme.palette.background.video,
          }}></div>
      :''}

      {step === heartSteps.VIDEO_OF_HEART ?
          <div style={{
              position: 'absolute',
              left: '0',
              top: '0',
              width: '100%',
              height: '100vh',
              backgroundColor: theme.palette.cloudBlue.main,
          }}></div>
      :''}

      {step === heartSteps.INTRO || heartSteps.VIDEO_OF_HEART ?
          <BackgroundVideoCustom autoPlay={(step === heartSteps.INTRO ? true : false)} ref={ref}
              onClick={togglePlayVideo}
              VideoHolder={VideoHolder}
              isHeartVideo={(step === heartSteps.INTRO ? false : true)}
              dogChoice={dogChoice}
              noPosterImage={true}
              playButtonState={state.videoPlaying}>
          </BackgroundVideoCustom>  : ''}


      <Grid container
          spacing={0}
          spacing={0}
          justify="center"
          style={{position: 'relative',border: '0px solid black',height: '100vh' }}>
          <Grid item xs={12} sm={12}  style={{border: '0px solid red'}}>
              <div style={topSectionStyle}>

                  {(currentCaseStudySlideData.sliderHeader && currentCaseStudySlideData.sliderHeader !== '') ?
                  <SliderHeader headerData={currentCaseStudySlideData} /> : ''}

              </div>
        </Grid>
        <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>

        <Grid item xs={12} sm={7}  align="center" style={{border: '0px solid red'}}>

           {step === heartSteps.INTRO ?
                <BottomRightTextAreaHolder>
                    <BottomRightTextAreaTitle>{processField(currentCaseStudySlideData.instructionsText,dogChoice,false)}</BottomRightTextAreaTitle>
                    <BottomRightTextAreaBody dangerouslySetInnerHTML={processField(currentCaseStudySlideData.additionalText,dogChoice,true)} />
                </BottomRightTextAreaHolder>
          :''}

        </Grid>

        <Grid item xs={12} sm={3}  align="center" style={{border: '0px solid red',height: '75%'}}>

           {step === heartSteps.VIDEO_OF_HEART_WITH_TEXT ?
                <BottomLeftTextAreaHolder>
                    <ClinicalInformationText>{processField(currentCaseStudySlideData.infoText,dogChoice,false)}</ClinicalInformationText>
                    <AdditionalBottomLeftText dangerouslySetInnerHTML={processField(currentCaseStudySlideData.additionalText,dogChoice,true)} />
                </BottomLeftTextAreaHolder>
          :''}

        </Grid>

        <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>

        <Grid item xs={12} sm={12}  style={{border: '0px solid red',height: '20%'}}>

             {step === heartSteps.VIDEO_OF_HEART ?
                <div style={bottomCenteredLayoutStyle}>
                    <BottomCenterTaskText>{(currentCaseStudySlideData.instructionsText ? stripUneededHtml(currentCaseStudySlideData.instructionsText)  : '')}</BottomCenterTaskText>
                </div>
              : ''}

         </Grid>
      </Grid>

      {step === heartSteps.INTRO ? <CenterButtonStyle>
          <DarkBlueRoundedButton id={"showheartbeating"} buttonText={currentCaseStudySlideData.buttonLinks[0].title} onClickHandler={navigationRightHandler} />
          </CenterButtonStyle> : ''}

      {step === heartSteps.VIDEO_OF_HEART ?
          <div style={videoPlayButtonStyle}>

            <VideoWhiteDotButtonBackground onClick={togglePlayVideo} id="videoLargePlayBtn">
                <PauseResponsive ref={refPlayButton} src={pauseButtonSvg} alt="" style={{display: 'none'}}/>
                <PlayResponsive ref={refPauseButton} src={playButtonSvg} alt="" />
            </VideoWhiteDotButtonBackground>

          </div> : ''}

      </section>
    )
}

export default HeartTaskLayout
