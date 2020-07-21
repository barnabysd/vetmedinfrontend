// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"
import React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"
import theme from "../theme"
// import ReactPlayer from "react-player"
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { useCallback, useState, useEffect, useDebugValue, forceUpdate } from 'react'
import CaseStudyLeftArrow from "../components/CaseStudyLeftArrow"
import CaseStudyRightArrow from "../components/CaseStudyRightArrow"
import { useCookies } from 'react-cookie'
import { stripUneededHtml, removeParagraphsTags, processField, checkLinkHasTitle } from "../utils/displayUtils"
import { dogName, heartSteps, tasks, cookieKeyNames, heartSlugNames, animationCharacterState } from '../WebsiteConstants'
import soundOffIcon from "../images/noSound.png"
import videoPlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import videoPauseButtonIcon from "../images/videoPauseLaunchBtn.png"
//import slideData from '../api/slideData'
import { navigate } from "gatsby"
import playButtonSvg from '../images/icons_and_glyphs/GradientIcon_Play.svg'
import pauseButtonSvg from '../images/icons_and_glyphs/GradientIcon_Pause.svg'
import { VideoWhiteDotButtonBackground, SmallPlayArrow, PauseResponsive, PlayResponsive, SmallTriangleRight, Cross } from '../components/VideoPlayerParts'
import { setCaseStudyProgress } from "../utils/dataUtils"
import { BottomCenterTaskText } from "../components/PageParts"
import { startCase } from "lodash"
import HeartTaskLayout from "../components/HeartTaskLayout"
import QuestionResponseLayout from "../components/QuestionResponseLayout"
import get from "lodash/get"
import { getSlideData } from "../utils/displayUtils"
import {  getDogImageName, getDogVideo } from "../utils/assetUtils"

//NB: - useEffect(() - very good reference https://dev.to/spukas/4-ways-to-useeffect-pf6

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

function Heart({data}) {

  // =================== SETUP STATE ==================

  const [cookies, setCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL])

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

  // =================== CONSTANTS ======================

  const buttonIds = {
    YES_ANSWER: "listensectionlistentoheartcorrectanswer",
    NO_ANSWER: "listensectionlistentoheartnoanswer",
    UNSURE_ANSWER: "listensectionlistentoheartunsureanswer",
    VIDEO_OF_HEART: "showheartbeating",
    QUESTION_ABOUT_HEART: "listensectionlistentoheartquestion",
    VIDEO_OF_HEART_WITH_TEXT: "listensectionlistentoheart",
  }

  // =================== GET PAGES DATA ==================

  const resourcesTasksAr = get(data, 'allNodeTask.nodes')
  const resourcesAnswersAr = get(data, 'allNodeAnswer.nodes')
  const resourcesQuestionAr = get(data, 'allNodeQuestion.nodes')

  let listenSection_ListenToDogHeart_TaskInstructions_Dudley = {}
  let listenSection_ListenToDogHeart_Task_Dudley = {}
  let listenSection_ListenToDogHeart_Question_Dudley = {}
  let listenSection_listenToHeart_CorrectAnswer_Dudley = {}
  let listenSection_listenToHeart_IncorrectAnswer_Dudley = {}
  let listenSection_listenToHeart_UnsureAnswer_Dudley = {}

  let resources = null

  const slideData = {}
  
  switch (state.step) {
      case heartSteps.QUESTION_ABOUT_HEART:

        resources = getSlideData(resourcesQuestionAr,heartSlugNames.QUESTION_ABOUT_HEART)

        listenSection_ListenToDogHeart_Question_Dudley = {
          questionText: resources.field_questiontext ? processField(resources.field_questiontext,dogChoice,false) : '',
          additionalText: resources.field_infotext ? processField(resources.field_infotext,dogChoice,true) :``,
          slugName: heartSlugNames.QUESTION_ABOUT_HEART,
          accessibilityVideoText: '',
          animationVideoName: '',
          mainImage: getDogVideo(animationCharacterState.NEUTRAL,dogChoice),
          buttonLinks: [
            {title:'Yes',url: buttonIds.YES_ANSWER},
            {title:'No',url: buttonIds.NO_ANSWER},
            {title:'Unsure',url: buttonIds.UNSURE_ANSWER},
          ],
          dogChoice:dogChoice
        }
        slideData.listenSection_ListenToDogHeart_Question_Dudley = listenSection_ListenToDogHeart_Question_Dudley
        break
      case heartSteps.YES_ANSWER:

        resources = getSlideData(resourcesAnswersAr,heartSlugNames.YES_ANSWER)

        listenSection_listenToHeart_CorrectAnswer_Dudley = {
          questionText: '',
          videoUrl1: '',
          videoText1: processField(resources.field_videotext1,false),
          videoCaptionText1: processField(resources.field_videocaption1,false),
          answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
          answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
          additionalText: resources.field_additionaltext ? processField(resources.field_additionaltext,dogChoice,true) : '',
          isCorrectAnswer: 'yes',
          animationVideoName: getDogImageName(animationCharacterState.HAPPY,dogChoice),
          slugName: heartSlugNames.YES_ANSWER,
          continueLink: {uri: '/',title:'Continue'},
          backLink: {uri: '/',title:'Back'},
          accessibilityVideoText: '',
          buttonLinks: [],
          dogChoice:dogChoice
        }
        slideData.listenSection_listenToHeart_CorrectAnswer_Dudley = listenSection_listenToHeart_CorrectAnswer_Dudley
        break
      case heartSteps.NO_ANSWER:

        resources = getSlideData(resourcesAnswersAr,heartSlugNames.NO_ANSWER)

        listenSection_listenToHeart_IncorrectAnswer_Dudley = {
          questionText: '',
          videoUrl1: '',
          videoText1: processField(resources.field_videotext1,false),
          videoCaptionText1: processField(resources.field_videocaption1,false),
          answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
          answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
          additionalText: resources.field_additionaltext ? processField(resources.field_additionaltext,dogChoice,true) : '',
          isCorrectAnswer: 'no',
          animationVideoName: getDogImageName(animationCharacterState.SAD,dogChoice),
          slugName: heartSlugNames.NO_ANSWER,
          continueLink: {
            uri: '/',
            title:'none'
          },
          backLink: {
            uri: '/',
            title:'none'
          },
          animationVideoName: '',
          accessibilityVideoText: '',
          buttonLinks: [
            { title:'Try Again',url: buttonIds.QUESTION_ABOUT_HEART },
            { title:'Listen Again',url: buttonIds.VIDEO_OF_HEART }
          ],
          dogChoice:dogChoice
        }
        slideData.listenSection_listenToHeart_IncorrectAnswer_Dudley = listenSection_listenToHeart_IncorrectAnswer_Dudley
        break
      case heartSteps.UNSURE_ANSWER:

        resources = getSlideData(resourcesAnswersAr,heartSlugNames.UNSURE_ANSWER)

        listenSection_listenToHeart_UnsureAnswer_Dudley = {
          questionText: '',
          videoUrl1: '',
          videoText1: processField(resources.field_videotext1,false),
          videoCaptionText1: processField(resources.field_videocaption1,false),
          answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
          answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
          additionalText: resources.field_additionaltext ? processField(resources.field_additionaltext,dogChoice,true) : '',
          isCorrectAnswer: 'no',
          animationVideoName: getDogImageName(animationCharacterState.SAD,dogChoice),
          slugName: heartSlugNames.UNSURE_ANSWER,
          continueLink: {
            uri: '/',
            title:'none'
          },
          backLink: {
            uri: '/',
            title:'none'
          },
          animationVideoName: '',
          accessibilityVideoText: '',
          buttonLinks: [
            { title:'Try Again',url: buttonIds.QUESTION_ABOUT_HEART },
            { title:'Listen Again',url: buttonIds.VIDEO_OF_HEART }
          ],
          dogChoice:dogChoice
        }
        slideData.listenSection_listenToHeart_UnsureAnswer_Dudley = listenSection_listenToHeart_UnsureAnswer_Dudley
        break
      case heartSteps.INTRO:
      case heartSteps.VIDEO_OF_HEART_WITH_TEXT:
      case heartSteps.VIDEO_OF_HEART:

        resources = getSlideData(resourcesTasksAr,heartSlugNames.TASK)

        listenSection_ListenToDogHeart_TaskInstructions_Dudley = {
          instructionsText: resources.field_bottomrighttitletext ? processField(resources.field_bottomrighttitletext,dogChoice,false) : 'NO DATA',
          //infoText: resources.field_bottomrightbodytext ? processField((resources.field_bottomrightbodytext.processed + resources.field_bottomrightbodytext.processed),dogChoice,true) : 'no data',
          additionalText: resources.field_bottomrightbodytext ? processField(resources.field_bottomrightbodytext.processed,dogChoice,true) : 'no data',
          slugName: heartSlugNames.TASK,
          continueLink: {uri: '/',title:''},
          backLink:  {uri: '/',title:''},
          buttonLinks: [
            {uri: '/',title:'Listen to heart'},
          ],
          animationVideoName: 'dudleyExaminationTable',
          accessibilityVideoText: 'dudley standing',
          buttonLinks: resources.field_buttonlinks,
          dogChoice:dogChoice
        }
  
        listenSection_ListenToDogHeart_Task_Dudley = {
          instructionsText: resources.field_instructionstext ? processField(resources.field_instructionstext,dogChoice,false) : 'no data',
          continueLink: {uri: '/',title:'Continue'},
          backLink:  {uri: '/',title:''},
          accessibilityVideoText: 'dog heart',
          animationVideoName: 'heart',
          slugName: heartSlugNames.TASK,
          buttonLinks: [],
          infoText: resources.field_bottomlefttitletext ? processField(resources.field_bottomlefttitletext,dogChoice,true) : 'no data',
          additionalText: resources.field_bottomleftbodytext1 ? processField((resources.field_bottomleftbodytext1.processed + "<br /><br />" + resources.field_bottomleftbodytext2.processed),dogChoice,true) : 'No data',
          continueLink: {uri: '/',title:'Continue'},
          dogChoice:dogChoice
        }

        slideData.listenSection_ListenToDogHeart_TaskInstructions_Dudley = listenSection_ListenToDogHeart_TaskInstructions_Dudley
        slideData.listenSection_ListenToDogHeart_Task_Dudley = listenSection_ListenToDogHeart_Task_Dudley
        //debugger
        break
    default:
      return "no current slide"
  }

  console.log("=========== current Step - step ",state.step)
  console.log(resources)
  if (!resources) return "resources not found"
  if (resources == "NO_DATA_FOUND") return "resources not found"

  const currentCaseStudySlideDataAr = [
    listenSection_ListenToDogHeart_TaskInstructions_Dudley,
    listenSection_ListenToDogHeart_Task_Dudley,
    listenSection_ListenToDogHeart_Task_Dudley,
    listenSection_ListenToDogHeart_Question_Dudley,
    listenSection_listenToHeart_CorrectAnswer_Dudley,
    listenSection_listenToHeart_IncorrectAnswer_Dudley,
    listenSection_listenToHeart_UnsureAnswer_Dudley
  ]

  slideData.currentCaseStudySlideDataAr = currentCaseStudySlideDataAr

  // =================== FUNCTIONS ==================

  const setCurrentStep = (step) => {
    setState({...state, step: step})
  }

  const setCurrentSlide = (e) => {
    if (e) e.preventDefault()
    if (e) e.stopPropagation()
    if (e && e.currentTarget) {
        switch (e.currentTarget.id) {
          case buttonIds.YES_ANSWER:
            setCurrentStep(heartSteps.YES_ANSWER)
          break
          case buttonIds.NO_ANSWER:
            setCurrentStep(heartSteps.NO_ANSWER)
          break
          case buttonIds.UNSURE_ANSWER:
            setCurrentStep(heartSteps.UNSURE_ANSWER)
          break
          case buttonIds.VIDEO_OF_HEART:
            setCurrentStep(heartSteps.VIDEO_OF_HEART)
          break
          case buttonIds.QUESTION_ABOUT_HEART:
            setCurrentStep(heartSteps.QUESTION_ABOUT_HEART)
          break
          case buttonIds.VIDEO_OF_HEART_WITH_TEXT:
            setCurrentStep(heartSteps.VIDEO_OF_HEART_WITH_TEXT)
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
        } else {
            console.log("move slide to ", (state.step + 1))
            const test = (slideData.currentCaseStudySlideDataAr) ? console.log("move slide to ", slideData.currentCaseStudySlideDataAr[(state.step + 1)].slugName) : '' 
            let currentState = { ...state }
            currentState.calledCount = currentState.calledCount + 1
            currentState.step = currentState.step + 1
            console.log("currentState ",currentState)
            setState(currentState)
        }
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
          || heartSteps.VIDEO_OF_HEART_WITH_TEXT === state.step  ? <HeartTaskLayout slideData={slideData} 
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


export const query = graphql`
  {
    allNodeTask {
      nodes {
        drupal_id
        created(fromNow: false)
        field_bottombodytext {
          processed
        }
        field_bottombodytextstep2 {
          processed
        }
        field_bottombodytextstep3 {
          processed
        }
        field_bottombodytextstep4 {
          processed
        }
        field_bottombodytextstep5 {
          processed
        }
        field_bottomhintbodytext {
          processed
        }
        field_bottomhintbodytext2 {
          processed
        }
        field_bottomleftbodytext1 {
          processed
        }
        field_bottomleftbodytext2 {
          processed
        }
        field_bottomlefttitletext {
          processed
        }
        field_bottomrightbodytext {
          processed
        }
        field_bottomrighttitletext {
          processed
        }
        field_bottomtitle {
          processed
        }
        field_bottomtitlestep2 {
          processed
        }
        field_bottomtitlestep3 {
          processed
        }
        field_bottomtitlestep4 {
          processed
        }
        field_bottomtitlestep5 {
          processed
        }
        field_bottomtitlestep6 {
          processed
        }
        field_buttonlinks {
          title
          uri
        }
        field_continuelink {
          uri
          title
        }
        field_failedtext {
          processed
        }
        field_dogchoice
        field_failedtext2 {
          processed
        }
        field_failedtext4 {
          processed
        }
        field_finalscreenbottomline1
        field_finalscreenbottomline2 {
          processed
        }
        field_infotext {
          processed
        }
        field_instructionstext {
          processed
        }
        field_mainimage {
          alt
          title
          width
          height
        }
        field_popupbodytext {
          processed
        }
        field_popupbodytext2 {
          processed
        }
        field_popupheadertext
        field_popupheadertext2
        field_progresspercent
        field_sliderofftext
        field_sliderontext
        field_slidertitle
        field_taptooltiptext1 {
          processed
        }
        field_taptooltiptext2 {
          processed
        }
        field_taptooltiptext3 {
          processed
        }
        field_taptooltiptext4 {
          processed
        }
        field_taptooltiptext6 {
          processed
        }
        field_videocaptiontext1 {
          processed
        }
        field_videocaptiontext2 {
          processed
        }
        field_videoduration1
        field_videoduration2
        field_videoposterimage1 {
          alt
          title
          width
          height
        }
        field_videotext1 {
          processed
        }
        field_videotext2 {
          processed
        }
        field_videothumbnail1 {
          alt
          title
          width
          height
        }
        path {
          alias
        }
        relationships {
          field_mainimage {
            localFile {
              url
            }
          }
          field_video1 {
            id
          }
          field_videoposterimage1 {
            uri {
              value
              url
            }
            localFile {
              url
            }
          }
          field_videothumbnail1 {
            localFile {
              url
            }
          }
        }
      }
    }
    allNodeQuestion {
      nodes {
        created(fromNow: false)
        drupal_id
        field_accessibilityvideotext
        field_additionalbodytext {
          processed
        }
        field_animationvideoname
        field_backlink {
          title
          uri
        }
        field_buttonlinks {
          title
          uri
        }
        field_continuelink {
          title
          uri
        }
        field_dogchoice
        field_instructionstext {
          processed
        }
        field_introtext {
          processed
        }
        field_optioniscorrect1
        field_optioniscorrect2
        field_optioniscorrect3
        field_optioniscorrect4
        field_optioniscorrect5
        field_optioniscorrect6
        field_optionsbodytext1 {
          processed
        }
        field_optionsbodytext2 {
          processed
        }
        field_optionsbodytext3 {
          processed
        }
        field_optionsbodytext4 {
          processed
        }
        field_optionsbodytext5 {
          processed
        }
        field_optionsbodytext6 {
          processed
        }
        field_optionsheader1
        field_questiontext {
          processed
        }
        path {
          alias
        }
        field_optionlink1 {
          title
          uri
        }
      }
    }
    allNodeAnswer {
      nodes {
        created(fromNow: false)
        drupal_id
        field_accessibilityvideotext
        field_additionalbodytext {
          processed
        }
        field_animationvideoname
        field_answerheader
        field_answertext {
          processed
        }
        field_buttonlinks {
          title
          uri
        }
        field_continuelink {
          title
          uri
        }
        field_iscorrectanswer
        field_progresspercent
        field_slugname
        field_topheadertext {
          processed
        }
        field_videocaptiontext1 {
          processed
        }
        field_videoduration1
        field_videonarrator1
        field_videoposterimage1 {
          alt
          title
          width
          height
        }
        field_videotext1 {
          processed
        }
        field_videothumbnail1 {
          alt
          title
          width
          height
        }
        path {
          alias
        }
        relationships {
          field_videoposterimage1 {
            localFile {
              url
            }
          }
          field_videothumbnail1 {
            uri {
              value
              url
            }
            localFile {
              url
            }
          }
        }
      }
    }
  }
`
