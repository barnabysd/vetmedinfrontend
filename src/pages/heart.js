// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"
import React from "react"
import DogVideo from "../assets/poppy.mp4"
import Layout from '../components/layout'
import theme from "../theme"
// import ReactPlayer from "react-player"
import "./slideSection.css"
import Sidebar from "../components/SideBar"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import HomeIcon from "@material-ui/icons/Home"
import StyledArtDirectedBackground from '../components/StyledArtDirectedBackground'
import Transition from 'react-transition-group'
import CustomFluidImage from "../components/CustomFluidImage"
import WebsiteLogo from "../components/WebsiteLogo"
import StyledBackgroundSection from "../components/BackgroundSection"
import StyledBackgroundSectionFixed from "../components/StyledBackgroundSectionFixed"
import styled from 'styled-components'
import DarkBlueRoundedButton from "../components/DarkBlueRoundedButton"
import  { useCallback, useState, useEffect,  useDebugValue, forceUpdate } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawerOpen, sendMessageData } from '../state/createStore'
import SideDrawer from "../components/SideDrawer"
import useLocalStorage from '../utils/localStorageHelper'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import CaseStudyLeftArrow from "../components/CaseStudyLeftArrow"
import CaseStudyRightArrow from "../components/CaseStudyRightArrow"
import { useCookies } from 'react-cookie'
import PercentageProgressIndicator from "../components/PercentageProgressIndicator"
import BackgroundVideoCustom, {videoPlayButtonStates} from "../components/BackgroundVideoCustom"
import QuestionResponse from "../components/QuestionResponse"
import QuestionPosed from "../components/QuestionPosed"
import SliderHeader from "../components/SliderHeader"
import ResponseVideo from "../components/ResponseVideo"
import QuestionModal from "../components/QuestionModal"
import ResponsiveDialog from "../components/ResponsiveDialog"

import { processHtml, removeParagraphsTags } from "../utils/displayUtils"


import soundOffIcon from "../images/noSound.png"
import videoPlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import videoPauseButtonIcon from "../images/videoPauseLaunchBtn.png"

import slideData from '../api/slideData'
import { navigate } from "gatsby"

import HeartVideo from "../assets/heart/Dog_heart_Dudley.mp4"

import SlideVideo from '../components/SlideVideo'
import VideoFullScreenWidget from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'
import BottomNavigationLink from '../components/BottomNavigationLink'



  //NB: - useEffect(() - very good reference https://dev.to/spukas/4-ways-to-useeffect-pf6

export const styleHeart = styled.div`
  height: 450px;
  width: 315.31px;
  object-fit: contain;
`; 

export const ClinicalInformation = styled.div`
  font-size: 37px;
  line-height: 1.15;
  text-align: left;
  letter-spacing: -0.37px;
  color: #003087;
  font-family: Oswald;
  font-weight: 600;
  height: 55px;
  width: 286px;
`; 

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

const WhiteDotButton = styled.div.attrs((props) => ({ id: props.id, style:props.style, onClick:props.onClick }))`
  width: 4.25rem;
  height: 4.25rem;
  border-radius: 50%;
  background-color: white;

`


const layouts = {
  QUESTION_ANSWER: 'question_answer',
  TASK: 'task'
}

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

const SlideVideoCard = ({resources,itemPointer = "1"}) => {
  return (<div style={{width:'400px',height:'400px'}}>
    <SlideVideo resources={resources} itemPointer={itemPointer}/>
  </div>)
}

function chooseLayout(currentCaseStudySlideData, slideData) {
    let currentLayout = layouts.TASK

    if (currentCaseStudySlideData.slugName === slideData.listenSection_ListenToDogHeart_TaskInstructions_Dudley.slugName ||
      currentCaseStudySlideData.slugName === slideData.listenSection_ListenToDogHeart_Task_Dudley.slugName ||
      currentCaseStudySlideData.slugName === slideData.listenSection_ListenToDogHeart_Question_Dudley.slugName ||
      currentCaseStudySlideData.slugName === slideData.listenSection_CompareTwoDogHeartBeats_Instructions_Dudley.slugName ||
      currentCaseStudySlideData.slugName === slideData.listenSection_CompareTwoDogHeartBeats_Question_Dudley.slugName 
      ) {
      currentLayout = layouts.TASK
    }

    if (currentCaseStudySlideData.slugName === slideData.listenSection_ListenToDogHeart_Question_Dudley.slugName ||
      currentCaseStudySlideData.slugName === slideData.listenSection_listenToHeart_CorrectAnswer_Dudley.slugName ||
      currentCaseStudySlideData.slugName === slideData.listenSection_listenToHeart_IncorrectAnswer_Dudley.slugName
      ) {
      currentLayout = layouts.QUESTION_ANSWER
    }
    return currentLayout
}

function Heart() {

  // =================== SETUP STATE ==================

  const [cookies, setCookie, removeCookie] = useCookies(['hasConsentSet','userChoice','dogChoice','score']);

  let stateFromCookie = { 
      renderUserChoice: false, 
      renderLoader: false,
      renderCookieBanner: false,
      currentSlidePosition: 0,
      showFullScreenVideo: false,
      showQuestionModal: false,
      calledCount: 0 
  }

  const [state, setState] = useState(stateFromCookie)

  const [score, setScore ] = useLocalStorage(undefined, '')
  const counter = useSelector(state => state.reducerIncrement, 0);
  console.log("counter 1", counter)

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

    // ============== GET API DATA ===================

    console.log(state.currentSlidePosition)
    let currentCaseStudySlideData = slideData.currentCaseStudySlideDataAr[state.currentSlidePosition]
    console.log(currentCaseStudySlideData)

    // ================ CHOOSE LAYOUT ====================
   
    let currentLayout = chooseLayout(currentCaseStudySlideData, slideData)

    const handleRightClick = e => { 
      e.preventDefault()
      e.stopPropagation()
      console.log("======= move slide right"); 
      if ((state.currentSlidePosition + 1) < slideData.currentCaseStudySlideDataAr.length) {
     
        if ((state.currentSlidePosition + 1) === (slideData.currentCaseStudySlideDataAr.length - 1)) {
             navigate("/grade-the-murmur/")
        }
        console.log("move slide to ", (state.currentSlidePosition + 1))
        const test = (slideData.currentCaseStudySlideDataAr) ? console.log("move slide to ", slideData.currentCaseStudySlideDataAr[(state.currentSlidePosition + 1)].slugName) : '' 
        let currentState = { ...state }
        currentState.calledCount = currentState.calledCount + 1
        currentState.currentSlidePosition = currentState.currentSlidePosition + 1
        console.log("currentState ",currentState)
        setState(currentState)
      } else {
        // TODO: remove - for debug
        let currentState = { ...state }
        currentState.calledCount = currentState.calledCount + 1
        currentState.currentSlidePosition = 0
        console.log("currentState ",currentState)
        setState(currentState)
      }
    };

    const handleLeftClick = e => { 
      e.preventDefault()
      e.stopPropagation()
      console.log("========= move slide left"); 
      if ((state.currentSlidePosition - 1) > 0) {
        console.log("move slide to ", (state.currentSlidePosition - 1))
        const test = (slideData.currentCaseStudySlideDataAr) ? console.log("move slide to ", slideData.currentCaseStudySlideDataAr[(state.currentSlidePosition - 1)].slugName) : ''
        let currentState = state
        currentState.calledCount = currentState.calledCount + 1
        currentState.currentSlidePosition = currentState.currentSlidePosition - 1
        console.log("currentState ",currentState)
        setState(currentState)
      }
    };

  return (
    <Layout headerText="Did you hear a heart murmur?" showPercentIndicator={true} >
      
      {(currentCaseStudySlideData.backLink && currentCaseStudySlideData.backLink.title !== '' && currentCaseStudySlideData.backLink.title !== 'none')  ? <CaseStudyLeftArrow linkText={currentCaseStudySlideData.backLink.title} to={currentCaseStudySlideData.backLink.url} onClickHandler={handleLeftClick} /> : '' }
      {(currentCaseStudySlideData.continueLink && currentCaseStudySlideData.continueLink.title !== '' && currentCaseStudySlideData.continueLink.title !== 'none')  ? <CaseStudyRightArrow linkText={currentCaseStudySlideData.continueLink.title} to={currentCaseStudySlideData.continueLink.url} onClickHandler={handleRightClick} /> : '' }

      <div className={(useStyles()).root} style={{position: 'relative', zIndex:'1 !important'}}>
          { currentLayout === layouts.QUESTION_ANSWER ? <QuestionResponseLayout slideData={slideData} currentSlidePosition={state.currentSlidePosition} navigationLeftHandler={handleLeftClick} navigationRightHandler={handleRightClick}/> : ''}
          { currentLayout === layouts.TASK ? <TaskLayout slideData={slideData} currentSlidePosition={state.currentSlidePosition} navigationLeftHandler={handleLeftClick}  navigationRightHandler={handleRightClick}/> : ''}
      </div>
  </Layout>

)}

const QuestionResponseLayout = ({slideData, currentSlidePosition, navigationLeftHandler, navigationRightHandler}) => {

  let currentCaseStudySlideData = slideData.currentCaseStudySlideDataAr[currentSlidePosition]

  let initialState = { 
    showFullScreenVideo: false,
    showQuestionModal: false,
  }
 
  const [state, setState] = useState(initialState)

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
          <ResponseVideo autoPlay="true" ref={ref} currentCaseStudySlideData={currentCaseStudySlideData} /> 
          : ''}
      </Grid>

      <Grid item xs={12} sm={5}  align="left" style={{ border: '0px solid red' }}>
        {(currentCaseStudySlideData.questionText && currentCaseStudySlideData.questionText !== '') ?
          <QuestionPosed currentCaseStudySlideData={currentCaseStudySlideData} currentSlidePosition={currentSlidePosition} onClickHandler={navigationRightHandler} /> :
          <QuestionResponse currentCaseStudySlideData={currentCaseStudySlideData} currentSlidePosition={currentSlidePosition} onClickHandler={navigationLeftHandler} />
        }
             {/* <button onClick={incrementScore}>test</button> */}
      </Grid>

      <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>

    </Grid>
    </section>
  )
}

const TaskLayout = ({slideData, currentSlidePosition, navigationLeftHandler, navigationRightHandler}) => {

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

  const toggleFullScreenVideo = (e) => {
    console.log("toggleFullScreenVideo")
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
    console.log("toggleFullQuestionModal")
    let currentSate = { ...state }
    if (state.showQuestionModal === true) { 
       
        currentSate.showQuestionModal = false
        setState(currentSate)
    } else {
        
        currentSate.showQuestionModal = true
        setState(currentSate)
    }
  }

  const togglePlayVideo = (e) => {   
    console.log("togglePlayVideoParentlevel")
    let currentSate = { ...state }
    if (ref.current.paused) { 
        console.log("togglePlayVideo - play")
        ref.current.play()
        refPlayButton.current.style.display = 'none'
        refPauseButton.current.style.display = 'block'
        //videoStatusClassName = 'video-active'
    } else {
        console.log("togglePlayVideo - pause")
        ref.current.pause()
        refPlayButton.current.style.display = 'block'
        refPauseButton.current.style.display = 'none'
        //videoStatusClassName = 'video-inactive'
    }
    if (currentSate.videoPlaying === false) { 
        console.log("try playing video")
        currentSate.videoPlaying = true
        currentSate.calledCount = currentSate.calledCount + 1
        //videoPlayButtonState = videoPlayButtonStates.PLAY
        //setState(currentSate)
    } else {
        console.log("try stopping video")
        currentSate.videoPlaying = false
        currentSate.calledCount = currentSate.calledCount + 1
        ///videoPlayButtonState = videoPlayButtonStates.PAUSE
        //setState(currentSate)
    }
  } 

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
    const centerInstructionTextStyle = { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
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

    {(((currentCaseStudySlideData.slugName) === slideData.listenSection_CompareTwoDogHeartBeats_Instructions_Dudley.slugName) ) ? 
     <div style={{ display: 'flex', flexDirection: 'row',alignContent:'center',justifyItems:'center',alignItems:'center', justifyContent:'center',  border: '0px solid red',width:'100%',height: '100vh'}}>
       <SlideVideoCard resources={slideData} itemPointer="1"/>
       <SlideVideoCard resources={slideData} itemPointer="2"/>
     </div> : ''
    }
     
    <Grid container 
    spacing={0}
    spacing={0}
    justify="center"
    style={{position: 'relative',border: '0px solid black',height: '100vh' }}>
      <Grid item xs={12} sm={12}  style={{border: '0px solid red'}}>
          <div style={topSectionStyle}>
              {(currentCaseStudySlideData.sliderHeader && currentCaseStudySlideData.sliderHeader !== '') ? <SliderHeader headerData={currentCaseStudySlideData} /> : ''}
              {((currentCaseStudySlideData.slugName) === slideData.listenSection_ListenToDogHeart_Task_Dudley.slugName) ?  
              <div style={centerInDivStyle}><img src={soundOffIcon} alt="sound off" width="30" height="30"/></div> : ''}
          </div>
      </Grid>
      <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>

      <Grid item xs={12} sm={7}  align="center" style={{border: '0px solid red'}}>

      </Grid>

      <Grid item xs={12} sm={3}  align="center" style={{border: '0px solid red',height: '75%'}}>
         {((currentCaseStudySlideData.slugName) === slideData.listenSection_ListenToDogHeart_TaskInstructions_Dudley.slugName) ? 
          <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'flex-end',border: '0px solid red',height: '100%'}}>
              <div style={instructionTextStyle}><span style={{fontWeight: '600',fontSize:'1.375rem',textAlign:"left",lineHeight:"1.4rem",marginBottom:'2rem'}}>{(currentCaseStudySlideData.instructionsText ? processHtml(currentCaseStudySlideData.instructionsText)  : '')}</span></div>
              <div style={additionalTextStyle}><span style={{fontWeight: '400',fontSize:'0.75rem',textAlign:"left",lineHeight:"1rem"}}><em>{(currentCaseStudySlideData.additionalText ? processHtml(currentCaseStudySlideData.additionalText)  : '')}</em></span></div>
          </div>:''}
      </Grid>

      <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>

      <Grid item xs={12} sm={12}  style={{border: '0px solid red',height: '20%'}}>
           {((currentCaseStudySlideData.slugName) !== slideData.listenSection_ListenToDogHeart_TaskInstructions_Dudley.slugName) ? <div style={bottomCenteredLayoutStyle}>
              <div style={centerInstructionTextStyle}>{(currentCaseStudySlideData.instructionsText ? processHtml(currentCaseStudySlideData.instructionsText)  : '')}</div>
              </div> : ''}
       </Grid>
    </Grid>

    {(state.showQuestionModal === true) ?  <QuestionModal /> : ''}
    {(state.showFullScreenVideo === true) ?  <ResponsiveDialog /> : ''}

    {((currentCaseStudySlideData.slugName) === slideData.listenSection_ListenToDogHeart_TaskInstructions_Dudley.slugName) ? <div style={centerButtonDivStyle}>
      <DarkBlueRoundedButton buttonText={currentCaseStudySlideData.buttonLinks[0].title} onClickHandler={navigationRightHandler} />
      </div> : ''} 
    
    {(showVideoButton) ? <div style={videoPlayButtonStyle}>
      <WhiteDotButton onClick={togglePlayVideo} id="videoLargePlayBtn">
      <img src={videoPlayButtonIcon} ref={refPlayButton} alt="" style={{ position: 'absolute',left:0,right:0, width:'75px',height:'75px' }} />
      <img src={videoPlayButtonIcon} ref={refPauseButton} alt="" style={{ position: 'absolute',left:0,right:0,width:'75px',height:'75px',display:'none' }} />
      </WhiteDotButton>
    </div> : ''}
  
    </section>
  )
}




export default Heart
