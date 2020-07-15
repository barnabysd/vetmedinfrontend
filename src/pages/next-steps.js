import React, {useState, useEffect} from "react"
import Layout from '../components/layout'
import theme from "../theme"
// import ReactPlayer from "react-player"

import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import CaseStudyLeftArrow from "../components/CaseStudyLeftArrow"
import CaseStudyRightArrow from "../components/CaseStudyRightArrow"
import { useCookies } from 'react-cookie'
import QuestionResponse from "../components/QuestionResponse"
import QuestionPosed from "../components/QuestionPosed"
import ResponseVideo from "../components/ResponseVideo"
import { setCaseStudyProgress } from "../utils/dataUtils"

import BottomNavigationLink from "../components/BottomNavigationLink"

import get from "lodash/get"
import { graphql } from "gatsby"
import { stripUneededHtml, getSlideData, replaceDogName, removeParagraphsTags } from "../utils/displayUtils"
import { dogName, 
  ownerName, 
  ownerResponseSteps, 
  cookieKeyNames, 
  tasks, 
  slideTypes,
  nextStepsSlugNames,
  bottomNavigationLinkDirection,
  nextStepsSteps,
  legacyButtonTypes
} from "../WebsiteConstants"
import FixedSizeVideoWidget from "../components/FixedSizeVideoWidget"

//NB: - useEffect(() - very good reference https://dev.to/spukas/4-ways-to-useeffect-pf6

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

function NextSteps({data}) {

   // =================== GET GLOBAL DATA ==================

  const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL])
  const dogChoice = cookies["dogChoice"] ? cookies["dogChoice"] : dogName.DUDLEY

  // =================== SETUP STATE ==================

  const initialState = { step: nextStepsSteps.QUESTION_POSED }
  const [state, setState] = useState(initialState)

  // =================== CHECK COMPLETION STATUS ==================

  useEffect(() => {
    if (state.step === nextStepsSteps.CORRECT_ANSWER_RECHECK
      || state.step === nextStepsSteps.CORRECT_ANSWER_START_TREATMENT) { 
        const newCaseStudyProgress = setCaseStudyProgress(tasks.NEXT_STEPS,dogChoice,cookies)
        console.log("============= " + newCaseStudyProgress + " =============")
        setCookie(cookieKeyNames.CASESTUDYS_ALL,newCaseStudyProgress,true,"/")
    }
  },[state.step])

  // =================== GET PAGES DATA ==================

  const resourcesAr = get(data, 'allNodeQuestion.nodes')
  const resourcesAnswersAr = get(data, 'allNodeAnswer.nodes')

  let resources = null
        
  switch (state.step) {
      case nextStepsSteps.QUESTION_POSED:
        resources = getSlideData(resourcesAr,nextStepsSlugNames.QUESTION_POSED)
        break
      case nextStepsSteps.CORRECT_ANSWER_RECHECK:
        resources = getSlideData(resourcesAnswersAr,nextStepsSlugNames.CORRECT_ANSWER_RECHECK)
      case nextStepsSteps.CORRECT_ANSWER_START_TREATMENT:
        resources = getSlideData(resourcesAnswersAr,nextStepsSlugNames.CORRECT_ANSWER_START_TREATMENT)
        break
      case nextStepsSteps.INCORRECT_ALL_CLEAR:
        resources = getSlideData(resourcesAnswersAr,nextStepsSlugNames.INCORRECT_ALL_CLEAR)
        break
    default:
      return "no current slide"
  }
  console.log("=========== current Step - step ",state.step)
  console.log(resources)
  if (!resources) return "resources not found"
  if (resources == "NO_DATA_FOUND") return "resources not found"

  // =================== NAVIGATION  ==================

  const setCurrentStep = (step) => {   
    console.log("=========== setCurrentStep - step ",step)
    setState({...state, step: step})
  }

  const tryAgain = (e) => {
    setState({...state, step: nextStepsSteps.QUESTION_POSED})
  }

  const answerSelected = (e) => {
    if (e.currentTarget.id) {
      switch (e.currentTarget.id) {
          case (nextStepsSteps.CORRECT_ANSWER_RECHECK):
                setCurrentStep(nextStepsSteps.CORRECT_ANSWER_RECHECK)
          break
          case (nextStepsSteps.CORRECT_ANSWER_START_TREATMENT):
                setCurrentStep(nextStepsSteps.CORRECT_ANSWER_START_TREATMENT)
          break
          case (nextStepsSteps.CORRECT_ANSWER_XRAY_ONLY):
                setCurrentStep(nextStepsSteps.INCORRECT_ALL_CLEAR)
          break
          default:
              console.log("no matching id on question button")
              setCurrentStep(nextStepsSteps.QUESTION_POSED)
      }
    } else {
      console.log("no id on question button")
      setCurrentStep(nextStepsSteps.QUESTION_POSED)
    }
    
  }

  const handleLeftClick = (e) => {
      console.log("handleLeftClick")
  }

  const handleRightClick = (e) => {
      console.log("handleRightClick")
  }

  return (
    <Layout headerText={replaceDogName("Poppy has a grade 3 mitral valve murmur",dogChoice)} showPercentIndicator={true}>

     {((nextStepsSteps.CORRECT_ANSWER_RECHECK === state.step 
     || nextStepsSteps.CORRECT_ANSWER_START_TREATMENT === state.step)) ?
      <BottomNavigationLink to={"/which-treatment/"}
                  distanceFromSide={"2%"}
                  bottom={"2%"}
                  direction={bottomNavigationLinkDirection.FORWARD}
                  linkText={"Continue"}
      /> : '' }

      <div className={(useStyles()).root} style={{position: 'relative', zIndex:'1 !important'}}>

           { (nextStepsSteps.QUESTION_POSED  === state.step) ? 
           <NextStepsQuestionResponseLayout type={slideTypes.QUESTION_POSED} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={answerSelected} /> : '' }
           
           { (nextStepsSteps.CORRECT_ANSWER_RECHECK === state.step) ? 
           <NextStepsQuestionResponseLayout type={slideTypes.ANSWER_WITH_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={handleRightClick} /> : '' }
           { (nextStepsSteps.CORRECT_ANSWER_START_TREATMENT === state.step) ? 
           <NextStepsQuestionResponseLayout type={slideTypes.ANSWER_WITH_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={handleRightClick} /> : '' }
          
           { (nextStepsSteps.INCORRECT_ALL_CLEAR === state.step) ? 
           <NextStepsQuestionResponseLayout type={slideTypes.ANSWER_NO_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={tryAgain} /> : '' }
       
      </div>
  </Layout>

)}

const NextStepsQuestionResponseLayout = ({type = slideTypes.QUESTION_POSED, resources, navigationLeftHandler, navigationRightHandler, dogChoice }) => {
  //debugger
  let buttonLinks = []
  if (resources.field_buttonlinks && resources.field_buttonlinks.length > 0) {
     // this get over ridden
     buttonLinks = resources.field_buttonlinks
  }

  let currentCaseStudySlideData = {}
  switch (type) {
      case slideTypes.ANSWER_WITH_VIDEO:
      case slideTypes.ANSWER_NO_VIDEO:

                const isCorrectAnswer = resources.field_iscorrectanswer[0] === "yes" ? true : false

                buttonLinks = [{}]

                if (isCorrectAnswer === false) {

                    buttonLinks[0].id = nextStepsSteps.QUESTION_POSED
                    buttonLinks[0].title = "Try again"
                    buttonLinks[0].url = "/"
                    buttonLinks[0].onClickHandler = navigationRightHandler
                    buttonLinks[0].buttonType = legacyButtonTypes.DARK_BLUE_ROUNDED

                }

                //debugger

                // =========== NORMALISE DRUPAL DATA ========

                currentCaseStudySlideData = {
                    useVideoWidget: isCorrectAnswer,
                    isCorrectAnswer: resources.field_iscorrectanswer[0],
                    answerHeader: replaceDogName(removeParagraphsTags(resources.field_answerheader ? resources.field_answerheader : ''), dogChoice),
                    answerText: replaceDogName(removeParagraphsTags(resources.field_answertext ? resources.field_answertext.processed : ''), dogChoice), 
                    additionalText: replaceDogName(removeParagraphsTags(resources.field_additionalbodytext ? resources.field_additionalbodytext.processed : ''), dogChoice), 
                    videoText1: resources.field_videocaptiontext1,
                    buttonLinks: buttonLinks,
                }
                //debugger
           break
      case slideTypes.QUESTION_POSED:
                // =========== NORMALISE DRUPAL DATA ========

                buttonLinks = [{},{},{},{},{},{}]

                buttonLinks[0].id = nextStepsSteps.CORRECT_ANSWER_RECHECK
                buttonLinks[0].title = "Recheck in 6–12 months"
                buttonLinks[0].url = "/"

                buttonLinks[1].id = nextStepsSteps.INCORRECT_ALL_CLEAR
                buttonLinks[1].title = "Give the ‘all clear’"
                buttonLinks[1].url = "/"

                buttonLinks[2].id = nextStepsSteps.CORRECT_ANSWER_START_TREATMENT
                buttonLinks[2].title = "Start treatment"
                buttonLinks[2].url = "/"


                currentCaseStudySlideData = {
                    useVideoWidget: false,
                    questionText: resources.field_questiontext,
                    headerText: resources.field_questiontext,
                    additionalText: resources.field_additionalbodytext,
                    videoText1: resources.field_videocaptiontext1,
                    buttonLinks: buttonLinks
                }
          break
    default:
         return "type not found"
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
       
          <FixedSizeVideoWidget autoPlay="true" ref={ref} currentCaseStudySlideData={currentCaseStudySlideData} /> 
       
      </Grid>

      <Grid item xs={12} sm={5}  align="left" style={{ border: '0px solid red' }}>
        {(type === slideTypes.QUESTION_POSED) ?
          <QuestionPosed currentCaseStudySlideData={currentCaseStudySlideData} currentSlidePosition={0} onClickHandler={navigationRightHandler} dogChoice={dogChoice} useVideoWidget={currentCaseStudySlideData.useVideoWidget} /> : ''
        }

        {(type === slideTypes.ANSWER_WITH_VIDEO || type === slideTypes.ANSWER_NO_VIDEO) ?
          <QuestionResponse currentCaseStudySlideData={currentCaseStudySlideData} currentSlidePosition={0} onClickHandler={navigationLeftHandler} dogChoice={dogChoice} useVideoWidget={currentCaseStudySlideData.useVideoWidget} /> :''
        }
            
      </Grid>

      <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>

    </Grid>
    </section>
  )
}

export default NextSteps

export const pageQuery = graphql`
  {
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
        field_instructionstext {
          processed
        }
        field_optioniscorrect1
        field_optioniscorrect2
        field_optioniscorrect3
        field_optioniscorrect4
        field_optioniscorrect5
        field_optioniscorrect6
        field_optionlink1 {
          title
          uri
        }
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
        field_progresspercent
        field_questiontext {
          processed
        }
        path {
          alias
        }
      }
    }
    allNodeAnswer {
      nodes {
        created(fromNow: false)
        drupal_id
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
        field_videotext1 {
          processed
        }
        path {
          alias
        }
      }
    }
  }
  `



