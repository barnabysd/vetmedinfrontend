// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"
import React from "react"
import Layout from '../components/layout'
import theme from "../theme"
// import ReactPlayer from "react-player"

//import Sidebar from "../components/SideBar"
import { makeStyles } from '@material-ui/core/styles'

import styled from 'styled-components'
import { useCallback, useState, useEffect, useDebugValue, forceUpdate } from 'react';

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

import TaskLayout from "../components/TaskLayout"

import QuestionResponseLayout from "../components/QuestionResponseLayout"

//NB: - useEffect(() - very good reference https://dev.to/spukas/4-ways-to-useeffect-pf6

// const styleHeart = styled.div`
//   height: 450px;
//   width: 315.31px;
//   object-fit: contain;
// `

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

  const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL])

  const dogChoice = cookies["dogChoice"] ? cookies["dogChoice"] : dogName.DUDLEY

  let stateFromCookie = { 
      calledCount: 0,
      dogChoice: dogChoice,
      step: heartSteps.INTRO,
      taskCompleted: false
  }

  const [state, setState] = useState(stateFromCookie)

  // =================== CHECK COMPLETION STATUS ==================

  useEffect(() => {
    if (state.step === heartSteps.YES_ANSWER) { 
      const newCaseStudyProgress = setCaseStudyProgress(tasks.DETECT_HEART_MURMUR,dogChoice,cookies)
      console.log("============= " + newCaseStudyProgress + " =============")
      setCookie(cookieKeyNames.CASESTUDYS_ALL,newCaseStudyProgress,{ path: '/' })  
    } 
  },[state.step])

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

export default Heart

