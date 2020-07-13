// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"
import React from "react"
import Layout from '../components/layout'
import theme from "../theme"
// import ReactPlayer from "react-player"
import "./slideSection.css"
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
import { toggleDrawerOpen, sendMessageData } from '../state/createStore'
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

import { processHtml, removeParagraphsTags,processField } from "../utils/displayUtils"
import { dogName, heartSteps } from '../WebsiteConstants'

import soundOffIcon from "../images/noSound.png"
import videoPlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import videoPauseButtonIcon from "../images/videoPauseLaunchBtn.png"

import slideData from '../api/slideData'
import { navigate } from "gatsby"

import playButtonSvg from '../images/icons_and_glyphs/GradientIcon_Play.svg'
import pauseButtonSvg from '../images/icons_and_glyphs/GradientIcon_Pause.svg'
import {VideoWhiteDotButtonBackground, SmallPlayArrow,PauseResponsive,PlayResponsive,SmallTriangleRight,Cross } from '../components/VideoPlayerParts'

//NB: - useEffect(() - very good reference https://dev.to/spukas/4-ways-to-useeffect-pf6

// const styleHeart = styled.div`
//   height: 450px;
//   width: 315.31px;
//   object-fit: contain;
// `

const BottomCenterTaskText = styled.div`
width: 692px;
  height: 61.8px;
  font-family:${theme.typography.fontFamily};
  font-size: 22px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-align: center;
  color: ${theme.palette.midnightBlue.main};

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
const layouts = {
  QUESTION_ANSWER: 'question_answer',
  TASK: 'task'
}

const BotttomRightTextArea = styled.div`
width: 327px;
margin-bottom:2rem;
 
  font-family: ${theme.typography.fontFamily};
  font-size: 22px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
`

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

function Heart({data}) {

  // =================== SETUP STATE ==================

  const [cookies, setCookie, removeCookie] = useCookies(['hasConsentSet','userChoice','dogChoice','score']);

  const dogChoice = cookies["dogChoice"] ? cookies["dogChoice"] : dogName.DUDLEY

  let stateFromCookie = { 
      calledCount: 0,
      dogChoice: dogChoice,
      step: heartSteps.INTRO
  }

  const [state, setState] = useState(stateFromCookie)

  const [score, setScore ] = useLocalStorage(undefined, '')
  const counter = useSelector(state => state.reducerIncrement, 0);
  console.log("counter 1", counter)

  function chooseLayout(currentCaseStudySlideData, slideData) {
    let currentLayout = layouts.TASK

    if (state.step === heartSteps.INTRO 
      || state.step === heartSteps.VIDEO_OF_HEART 
      || state.step === heartSteps.VIDEO_OF_HEART_WITH_TEXT) {

      currentLayout = layouts.TASK
    }

    if (state.step === heartSteps.QUESTION_ABOUT_HEART
      || state.step === heartSteps.YES_ANSWER 
      || state.step === heartSteps.NO_ANSWER
      || state.step === heartSteps.UNSURE_ANSWER) {

      currentLayout = layouts.QUESTION_ANSWER
    }
    return currentLayout
}  
  const setCurrentStep = (step) => {
    setState({...state, step: step})
  }

  const setCurrentSlide = (e) => {
    if (e) e.preventDefault()
    if (e) e.stopPropagation()
    if (e && e.currentTarget) {
        switch (e.currentTarget.id) {
          case "listensectionlistentoheartcorrectanswer":
            setCurrentStep(heartSteps.YES_ANSWER)
          break
          case "listensectionlistentoheartnoanswer":
            setCurrentStep(heartSteps.NO_ANSWER)
          break
          case "listensectionlistentoheartunsureanswer":
            setCurrentStep(heartSteps.UNSURE_ANSWER)
          break
          case "showheartbeating":
            setCurrentStep(heartSteps.VIDEO_OF_HEART)
          break
          case "listensectionlistentoheartquestion":
            setCurrentStep(heartSteps.QUESTION_ABOUT_HEART)
          break
          case "listensectionlistentoheart":
            setCurrentStep(heartSteps.VIDEO_OF_HEART)
          break
          default:
            return alert("no current slide")

        }
    }
  }

    // ============== GET API DATA ===================

    console.log("========================================= ",state.step)
    let currentCaseStudySlideData = slideData.currentCaseStudySlideDataAr[state.step]
    console.log(currentCaseStudySlideData)

    if (!currentCaseStudySlideData) return "no data"
    if (currentCaseStudySlideData === 'NO_DATA_FOUND') return "no data found"

    // ================ CHOOSE LAYOUT ====================
   
    let currentLayout = chooseLayout(currentCaseStudySlideData, slideData)

    const handleRightClick = e => { 
      if (e) e.preventDefault()
      if (e) e.stopPropagation()
      console.log("======= move slide right"); 
      if ((state.step + 1) < slideData.currentCaseStudySlideDataAr.length) {
     
        if ((state.step + 1) === (heartSteps.YES_ANSWER + 1)) {
             navigate("/grade-the-murmur/")
        }
        console.log("move slide to ", (state.step + 1))
        const test = (slideData.currentCaseStudySlideDataAr) ? console.log("move slide to ", slideData.currentCaseStudySlideDataAr[(state.step + 1)].slugName) : '' 
        let currentState = { ...state }
        currentState.calledCount = currentState.calledCount + 1
        currentState.step = currentState.step + 1
        console.log("currentState ",currentState)
        setState(currentState)
      } else {
        // TODO: remove - for debug
        let currentState = { ...state }
        currentState.calledCount = currentState.calledCount + 1
        currentState.step = 0
        console.log("currentState ",currentState)
        setState(currentState)
      }
    };

    const handleLeftClick = e => { 
      if (e) e.preventDefault()
      if (e) e.stopPropagation()
      console.log("========= move slide left"); 
      if ((state.step - 1) > 0) {
        console.log("move slide to ", (state.step - 1))
        const test = (slideData.currentCaseStudySlideDataAr) ? console.log("move slide to ", slideData.currentCaseStudySlideDataAr[(state.step - 1)].slugName) : ''
        let currentState = state
        currentState.calledCount = currentState.calledCount + 1
        currentState.step = currentState.step - 1
        console.log("currentState ",currentState)
        setState(currentState)
      }
    };

  const checkLinkHasTitle = (link) => {
    return (link
      && link.title !== '' 
      && link.title !== 'none' ? true : false)   
  }

  return (
    <Layout headerText="Did you hear a heart murmur?" showPercentIndicator={true}>
      
      {checkLinkHasTitle(currentCaseStudySlideData.backLink) && heartSteps.QUESTION_ABOUT_HEART === state.step ? 
      <CaseStudyLeftArrow linkText={currentCaseStudySlideData.backLink.title} 
      to={currentCaseStudySlideData.backLink.url} 
      onClickHandler={handleLeftClick} /> : '' }
      
      {checkLinkHasTitle(currentCaseStudySlideData.continueLink) 
      && heartSteps.YES_ANSWER === state.step
      || heartSteps.VIDEO_OF_HEART_WITH_TEXT === state.step ? 
      <CaseStudyRightArrow linkText={currentCaseStudySlideData.continueLink.title} 
      to={currentCaseStudySlideData.continueLink.url} 
      onClickHandler={handleRightClick} /> 
      : 
      '' }

      <div className={(useStyles()).root} style={{position: 'relative', zIndex:'1 !important'}}>
         
          {heartSteps.QUESTION_ABOUT_HEART === state.step
          || heartSteps.YES_ANSWER === state.step
          || heartSteps.NO_ANSWER === state.step
          || heartSteps.UNSURE_ANSWER === state.step ? <QuestionResponseLayout slideData={slideData} 
          step={state.step}
          dogChoice={state.dogChoice}
          currentSlidePosition={state.step} 
          navigationLeftHandler={handleLeftClick} 
          navigationRightHandler={setCurrentSlide}/> : ''}
            
          {  heartSteps.INTRO === state.step 
          || heartSteps.VIDEO_OF_HEART === state.step
          || heartSteps.VIDEO_OF_HEART_WITH_TEXT === state.step  ? <TaskLayout slideData={slideData} 
          step={state.step}
          dogChoice={state.dogChoice}
          currentSlidePosition={state.step} 
          setCurrentStep={setCurrentStep}
          navigationLeftHandler={handleLeftClick}  
          navigationRightHandler={setCurrentSlide}/> : ''}
        
      </div>
  </Layout>

)}

const QuestionResponseLayout = ({slideData, step, dogChoice, setCurrentStep, currentSlidePosition, navigationLeftHandler, navigationRightHandler}) => {

  let currentCaseStudySlideData = slideData.currentCaseStudySlideDataAr[currentSlidePosition]

  const ref = React.createRef();

  return (
    <section>
   
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
    </section>
  )
}

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
    // if (currentSate.videoPlaying === false) { 
    //     console.log("try playing video")
    //     currentSate.videoPlaying = true
    //     currentSate.calledCount = currentSate.calledCount + 1
    
    // } else {
    //     console.log("try stopping video")
    //     currentSate.videoPlaying = false
    //     currentSate.calledCount = currentSate.calledCount + 1
    // }
  } 

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

         {/* { step === heartSteps.VIDEO_OF_HEART ? 
              <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'flex-end',border: '0px solid red',height: '100%'}}>
                  <div style={instructionTextStyle}>
                    <BotttomRightTextArea>
                         {(currentCaseStudySlideData.instructionsText ? processField(currentCaseStudySlideData.instructionsText)  : '')}
                    </BotttomRightTextArea>
              </div>
                  <div style={additionalTextStyle}><span style={{fontWeight: '400',fontSize:'0.75rem',textAlign:"left",lineHeight:"1rem"}}><em>{(currentCaseStudySlideData.additionalText ? processHtml(currentCaseStudySlideData.additionalText)  : '')}</em></span></div>
              </div>
          :''} */}

      </Grid>

      <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>

      <Grid item xs={12} sm={12}  style={{border: '0px solid red',height: '20%'}}>
           {step === heartSteps.VIDEO_OF_HEART_WITH_TEXT ? 
              <div style={bottomCenteredLayoutStyle}>
                  <BottomCenterTaskText>{(currentCaseStudySlideData.instructionsText ? processHtml(currentCaseStudySlideData.instructionsText)  : '')}</BottomCenterTaskText>
              </div>
            : ''}
       </Grid>
    </Grid>

    {((currentCaseStudySlideData.slugName) === slideData.listenSection_ListenToDogHeart_TaskInstructions_Dudley.slugName) ? <div style={centerButtonDivStyle}>
      <DarkBlueRoundedButton id={"showheartbeating"} buttonText={currentCaseStudySlideData.buttonLinks[0].title} onClickHandler={navigationRightHandler} />
      </div> : ''} 
    
    {(showVideoButton) ? <div style={videoPlayButtonStyle}>
      {/* <VideoWhiteDotButtonBackground onClick={togglePlayVideo} id="videoLargePlayBtn">
      <img src={videoPlayButtonIcon} ref={refPlayButton} alt="" style={{ position: 'absolute',left:0,right:0, width:'75px',height:'75px' }} />
      <img src={videoPlayButtonIcon} ref={refPauseButton} alt="" style={{ position: 'absolute',left:0,right:0,width:'75px',height:'75px',display:'none' }} />
      </VideoWhiteDotButtonBackground> */}


      <VideoWhiteDotButtonBackground onClick={togglePlayVideo} id="videoLargePlayBtn">
              <PauseResponsive ref={refPlayButton} src={pauseButtonSvg} alt="" style={{display: 'none'}}/>
              <PlayResponsive ref={refPauseButton} src={playButtonSvg} alt="" />
      </VideoWhiteDotButtonBackground>

    </div> : ''}
  
    </section>
  )
}

export default Heart

/*


  // const handleUserKeyPress = useCallback(event => {
  //   const { key, keyCode } = event;
  //   if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
  //     // setUserText(prevUserText => `${prevUserText}${key}`);
  //   }
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('keydown', handleUserKeyPress);

  //   return () => {
  //     window.removeEventListener('keydown', handleUserKeyPress);
  //   }

  // })[handleUserKeyPress]

  */


/*

  let initialState = { 
    showFullScreenVideo: false,
    showQuestionModal: false
  }
 
  
  const toggleFullScreenVideo = (e) => {
    let currentSate = { ...state }
    if (state.showFullScreenVideo === true) { 
        currentSate.showFullScreenVideo = false
        setState(currentSate)
    } else {
        currentSate.showFullScreenVideo = true
        setState(currentSate)
    }
  } 

  const toggleFullQuestionModal = (e) => {
    let currentSate = { ...state }
    if (state.showQuestionModal === true) { 
        currentSate.showQuestionModal = false
        setState(currentSate)
    } else {
        currentSate.showQuestionModal = true
        setState(currentSate)
    }
  }

  */


/*
  // let incrementScore = useCallback(
  //   event => {
  //     dispatch(addCounter(1))
  //   },
  //   [dispatch],
  // );

  let incrementScore = useCallback(
    event => { 
      setScore(parseInt(score) + 1)
    },
    [score],
  );

  function addCounter(num) {
    return {
      type: 'INCREMENT',
      num
    }
  }

  // const sss = useSelector(state => state, {"none":"dfddf"});
  // console.log(sss)
  // alert(sss)

  const message = useSelector(state => state.reducerMessage, []);
  // messageStored = message
  const dispatch = useDispatch();

    //   dispatch(addTodo('Read the docs'))
    //   dispatch(addTodo('Read about the middleware'))
    //   dispatch(addCounter(4))
    //   dispatch(addTodo('Read the docs'))

    */
