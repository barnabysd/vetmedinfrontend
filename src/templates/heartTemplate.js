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

import { navigate } from "gatsby"
import playButtonSvg from '../images/icons_and_glyphs/GradientIcon_Play.svg'
import pauseButtonSvg from '../images/icons_and_glyphs/GradientIcon_Pause.svg'
import { VideoWhiteDotButtonBackground, SmallPlayArrow, PauseResponsive, PlayResponsive, SmallTriangleRight, Cross } from '../components/VideoPlayerParts'
import { setCaseStudyProgress } from "../utils/dataUtils"
import { BottomCenterTaskText } from "../components/PageParts"
import { startCase } from "lodash"
import HeartTaskLayout from "../components/HeartTaskLayout"
import AnswerLayout from "../components/AnswerLayout"
import QuestionLayout from "../components/QuestionLayout"
import get from "lodash/get"
import { getSlideData } from "../utils/displayUtils"
import { getDogImageName, getDogVideo, getVideoDataForTwoHearts } from "../utils/assetUtils"
import BottomNavigationLink from "../components/BottomNavigationLink"
import { getVideoData, updateSlideDataWithVideoData } from "../utils/dataUtils"
import VideoFullScreenWidget, { showFullScreenResourceVideo } from '../components/VideoFullScreenWidget'
import TwoHeartsLayout from "../components/TwoHeartsLayout"

export default function heartTemplate(data, dogChoicePassed) {

  // =================== SETUP STATE ==================

  const [cookies, setCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL])

  const dogChoice = dogChoicePassed // cookies["dogChoice"] ? cookies["dogChoice"] : dogName.NOT_SET

  let stateFromCookie = {
      calledCount: 0,
      dogChoice: dogChoice,
      step: heartSteps.INTRO,
      taskCompleted: false,
      videoOnePlayed: false,
      videoTwoPlayed: false
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
      TWO_HEARTS: 'listensectionlistentotwohearts'
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
  let listenSection_ListenToTwoHeart = {}

  let resources = null

  let videoDataForFullScreenVideo = null

  let headerText = ''


  const slideData = {}

  switch (state.step) {
      case heartSteps.QUESTION_ABOUT_HEART:

        resources = getSlideData(resourcesQuestionAr,heartSlugNames.QUESTION_ABOUT_HEART)

        listenSection_ListenToDogHeart_Question_Dudley = {

            questionText: resources.field_questiontext ? processField(resources.field_questiontext,dogChoice,false) : '',
            additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) :``,
            slugName: heartSlugNames.QUESTION_ABOUT_HEART,
            accessibilityVideoText: '',
            animationVideoName: getDogVideo(animationCharacterState.NEUTRAL,dogChoice),
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

        headerText = processField(resources.field_topheadertext,dogChoice,false)

        listenSection_listenToHeart_CorrectAnswer_Dudley = {

            questionText: '',
            answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
            answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
            additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) : '',

            isCorrectAnswer: 'yes',
            mainImage: getDogImageName(animationCharacterState.HAPPY,dogChoice),
            slugName: heartSlugNames.YES_ANSWER,
            continueLink: {uri: '/',title:'Continue',url:'/'},
            backLink: {uri: '/',title:'Back',url:'/'},
            accessibilityVideoText: '',
            buttonLinks: [],
            dogChoice:dogChoice
        }

        let videoData = getVideoData(resources, dogChoice)
        listenSection_listenToHeart_CorrectAnswer_Dudley = updateSlideDataWithVideoData(listenSection_listenToHeart_CorrectAnswer_Dudley,videoData)
        videoDataForFullScreenVideo = videoData
        slideData.listenSection_listenToHeart_CorrectAnswer_Dudley = listenSection_listenToHeart_CorrectAnswer_Dudley
        break
      case heartSteps.NO_ANSWER:

        resources = getSlideData(resourcesAnswersAr,heartSlugNames.NO_ANSWER)

        headerText = processField(resources.field_topheadertext,dogChoice,false)

        listenSection_listenToHeart_IncorrectAnswer_Dudley = {
            questionText: '',
            videoUrl1: '',

            videoCaptionText1: processField(resources.field_videocaption1,false),
            answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
            answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
            additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) : '',
            isCorrectAnswer: 'no',
            mainImage: getDogImageName(animationCharacterState.SAD,dogChoice),
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
              { title:'Answer again',url: buttonIds.QUESTION_ABOUT_HEART },
              { title:'Listen again',url: buttonIds.TWO_HEARTS, id: buttonIds.TWO_HEARTS }
            ],
            dogChoice:dogChoice
        }

        slideData.listenSection_listenToHeart_IncorrectAnswer_Dudley = listenSection_listenToHeart_IncorrectAnswer_Dudley
        break
      case heartSteps.UNSURE_ANSWER:

        resources = getSlideData(resourcesAnswersAr,heartSlugNames.UNSURE_ANSWER)

        headerText = processField(resources.field_topheadertext,dogChoice,false)

        listenSection_listenToHeart_UnsureAnswer_Dudley = {
          questionText: '',
          videoUrl1: '',

          videoCaptionText1: processField(resources.field_videocaption1,false),
          answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
          answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
          additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) : '',
          isCorrectAnswer: 'no',
          mainImage: getDogImageName(animationCharacterState.SAD,dogChoice),
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
            { title:'Answer again',url: buttonIds.QUESTION_ABOUT_HEART, id:''},
            { title:'Listen again',url: buttonIds.TWO_HEARTS, id: buttonIds.TWO_HEARTS }
          ],
          dogChoice:dogChoice
        }

        slideData.listenSection_listenToHeart_UnsureAnswer_Dudley = listenSection_listenToHeart_UnsureAnswer_Dudley
        break
      case heartSteps.INTRO:
      case heartSteps.VIDEO_OF_HEART_WITH_TEXT:
      case heartSteps.VIDEO_OF_HEART:

        resources = getSlideData(resourcesTasksAr,heartSlugNames.TASK)

        let dudleyData = getSlideData(resourcesTasksAr,heartSlugNames.TASK_DUDLEY)
        let poppyData = getSlideData(resourcesTasksAr,heartSlugNames.TASK_POPPY)
        let reggieData = getSlideData(resourcesTasksAr,heartSlugNames.TASK_REGGIE)

        let bottomLeftText = resources.field_bottomleftbodytext1 ? processField((resources.field_bottomleftbodytext1.processed + "<br /><br />" + resources.field_bottomleftbodytext2.processed),dogChoice,true) : 'No data'
        if (dogChoice === dogName.DUDLEY) {
            bottomLeftText = dudleyData.field_bottomleftbodytext1 ? processField((dudleyData.field_bottomleftbodytext1.processed + "<br /><br />" + dudleyData.field_bottomleftbodytext2.processed),dogChoice,true) : 'No data'
        }
        if (dogChoice === dogName.POPPY) {
            bottomLeftText = dudleyData.field_bottomleftbodytext1 ? processField((poppyData.field_bottomleftbodytext1.processed + "<br /><br />" + poppyData.field_bottomleftbodytext2.processed),dogChoice,true) : 'No data'
        }
        if (dogChoice === dogName.REGGIE) {
            bottomLeftText = dudleyData.field_bottomleftbodytext1 ? processField((reggieData.field_bottomleftbodytext1.processed + "<br /><br />" + reggieData.field_bottomleftbodytext2.processed),dogChoice,true) : 'No data'
        }


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
          additionalText: bottomLeftText,
          continueLink: {uri: '/',title:'Continue'},
          dogChoice:dogChoice
        }

        slideData.listenSection_ListenToDogHeart_TaskInstructions_Dudley = listenSection_ListenToDogHeart_TaskInstructions_Dudley
        slideData.listenSection_ListenToDogHeart_Task_Dudley = listenSection_ListenToDogHeart_Task_Dudley

        break
    case heartSteps.TWO_HEARTS:
          resources = getSlideData(resourcesTasksAr,heartSlugNames.TASK_TWO_HEARTS)

          let titleText = resources.field_bottomlefttitletext ? processField(resources.field_bottomlefttitletext,dogChoice,true) : 'no data'

          let additionalText = resources.field_bottomleftbodytext1 ? processField((resources.field_bottomleftbodytext1.processed + "<br /><br />" + resources.field_bottomleftbodytext2.processed),dogChoice,true) : 'No data'

          listenSection_ListenToTwoHeart = {
            instructionsText: resources.field_instructionstext ? processField(resources.field_instructionstext,dogChoice,false) : 'Compare these two hearts',
            continueLink: {uri: '/',title:'Continue'},
            backLink:  {uri: '/',title:''},
            accessibilityVideoText: 'dog heart',
            animationVideoName: 'heart',
            slugName: heartSlugNames.TASK_TWO_HEARTS,
            buttonLinks: [],
            infoText: titleText,
            // additionalText: additionalText,
            // continueLink: {uri: '/',title:'Continue'},
            dogChoice:dogChoice,
            video1: getVideoDataForTwoHearts(resources, dogChoice),
            video2: getVideoDataForTwoHearts(resources, ""),
          }


          //resources = listenSection_ListenToTwoHeart
          slideData.listenSection_ListenToTwoHeart = listenSection_ListenToTwoHeart
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
    listenSection_listenToHeart_UnsureAnswer_Dudley,
    listenSection_ListenToTwoHeart
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
          case buttonIds.TWO_HEARTS:
            setCurrentStep(heartSteps.TWO_HEARTS)
          break
          default:
            return alert("no current slide")

        }
     }
  }

    // ============== GET DATA ===================

    console.log("========================================= ",state.step)
    let currentCaseStudySlideData = slideData.currentCaseStudySlideDataAr[state.step]
    console.log(currentCaseStudySlideData)

    if (!currentCaseStudySlideData) return "no data"
    if (currentCaseStudySlideData === 'NO_DATA_FOUND') return "no data found for slides"

    // ================ CHOOSE LAYOUT ====================

    const handleRightClick = e => {
      if (e) e.preventDefault()
      if (e) e.stopPropagation()
      console.log("======= move slide right");
      if ((state.step + 1) < slideData.currentCaseStudySlideDataAr.length) {

        if ((state.step + 1) === (heartSteps.YES_ANSWER + 1)) {
            if (dogChoice === dogName.POPPY) navigate("/grade-the-murmur-poppy/")
            if (dogChoice === dogName.REGGIE) navigate("/grade-the-murmur-reggie/")
            if (dogChoice === dogName.DUDLEY) navigate("/grade-the-murmur-dudley/")
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

    console.log('heartSteps', heartSteps);
    console.log('state.step', state.step);

  return (
    <Layout headerText={headerText} showSliderHeader={true} showPercentIndicator={true}>

          {heartSteps.TWO_HEARTS === state.step ? <TwoHeartsLayout resources={slideData.listenSection_ListenToTwoHeart}
              step={state.step}
              dogChoice={state.dogChoice}
              state={state.step}
              setState={setState}
              moveToNextStep={() => {setCurrentStep(heartSteps.QUESTION_ABOUT_HEART)}}
              setCurrentStep={setCurrentSlide}/> : ''}

          {heartSteps.QUESTION_ABOUT_HEART === state.step ? <QuestionLayout slideData={slideData}
              step={state.step}
              dogChoice={state.dogChoice}
              currentSlidePosition={state.step}
              navigationLeftHandler={handleLeftClick}
              navigationRightHandler={setCurrentSlide}/> : ''}

          {heartSteps.NO_ANSWER === state.step
          || heartSteps.UNSURE_ANSWER === state.step ? <> <AnswerLayout slideData={slideData}
              step={state.step}
              dogChoice={state.dogChoice}
              currentSlidePosition={state.step}
              navigationLeftHandler={handleLeftClick}
              navigationRightHandler={setCurrentSlide}/>
            </> : ''}

            {heartSteps.YES_ANSWER === state.step ? <> <AnswerLayout slideData={slideData}
              step={state.step}
              dogChoice={state.dogChoice}
              currentSlidePosition={state.step}
              navigationLeftHandler={handleLeftClick}
              navigationRightHandler={setCurrentSlide}/>

            <VideoFullScreenWidget videoData1={videoDataForFullScreenVideo} instance={"One"} />

            </> : ''}

          {  heartSteps.INTRO === state.step
          || heartSteps.VIDEO_OF_HEART === state.step
          || heartSteps.VIDEO_OF_HEART_WITH_TEXT === state.step  ? <HeartTaskLayout slideData={slideData}
              step={state.step}
              dogChoice={state.dogChoice}
              currentSlidePosition={state.step}
              setCurrentStep={setCurrentStep}
              navigationLeftHandler={handleLeftClick}
              navigationRightHandler={setCurrentSlide}/> : ''}

        {checkLinkHasTitle(currentCaseStudySlideData.backLink)
          && heartSteps.QUESTION_ABOUT_HEART === state.step ?

              <BottomNavigationLink
                    to={"button"}
                    distanceFromSide={"150px"}
                    direction="back"
                    onClick={handleLeftClick}
                    bottom={"2%"}
                    linkText={currentCaseStudySlideData.backLink.title}
              />

              : '' }

        {checkLinkHasTitle(currentCaseStudySlideData.continueLink)
          && heartSteps.YES_ANSWER === state.step
          || heartSteps.VIDEO_OF_HEART_WITH_TEXT === state.step ?

              <BottomNavigationLink
              to={"button"}
              distanceFromSide={"0px"}
              onClick={handleRightClick}
              bottom={"1%"}
              linkText={currentCaseStudySlideData.continueLink.title}
        />
          : '' }



  </Layout>

)}

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
    },
    allNodeAnswer {
    nodes {
      drupal_id
      created(fromNow: false)
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
        width
        alt
        height
        title
      }
      field_videothumbnail1 {
        alt
        height
        title
        width
      }
      path {
        alias
      }
      field_videocaptiontext2 {
        processed
      }
      field_videocaptiontext3 {
        processed
      }
      field_videofordog1
      field_videofordog2
      field_videofordog3
      field_videonarrator2
      field_videonarrator3
      field_videoposterimage2 {
        alt
        height
        title
        width
      }
      field_videoposterimage3 {
        alt
        height
        title
        width
      }
      field_videothumbnail2 {
        alt
        height
        title
        width
      }
      field_videotitle1 {
        processed
      }
      field_videotitle2 {
        processed
      }
      field_videotitle3 {
        processed
      }
      relationships {
        field_video1 {
          relationships {
            field_media_video_file {
              localFile {
                url
                internal {
                  content
                  description
                  ignoreType
                  mediaType
                }
              }
              filesize
              filename
              uri {
                value
                url
              }
            }
          }
        }
        field_video2 {
          relationships {
            field_media_video_file {
              localFile {
                url
              }
              uri {
                url
                value
              }
            }
          }
        }
        field_videoposterimage1 {
          localFile {
            url
          }
        }
        field_videoposterimage2 {
          localFile {
            url
          }
        }
        field_videoposterimage3 {
          localFile {
            url
          }
        }
        field_videothumbnail1 {
          localFile {
            url
          }
        }
        field_videothumbnail2 {
          localFile {
            url
          }
        }
        field_videothumbnail3 {
          localFile {
            url
          }
        }
        field_video3 {
          relationships {
            field_media_video_file {
              localFile {
                url
              }
              uri {
                url
                value
              }
            }
          }
        }
      }
      field_videonarratorlocation1 {
        processed
      }
      field_videonarratorlocation2 {
        processed
      }
      field_videonarratorlocation3 {
        processed
      }
      field_videonarratorprofession1 {
        processed
      }
      field_videonarratorprofession2 {
        processed
      }
      field_videonarratorprofession3 {
        processed
      }
      field_videoduration3
      field_videoduration2
      field_videothumbnail3 {
        alt
        height
        title
        width
      }
    }
    }

  }
`
