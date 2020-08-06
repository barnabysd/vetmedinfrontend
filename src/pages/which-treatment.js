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
import VideoFullScreenWidget from '../components/VideoFullScreenWidget'


import BottomNavigationLink from "../components/BottomNavigationLink"

import get from "lodash/get"
import { graphql } from "gatsby"
import { stripUneededHtml, getSlideData, replaceDogName, removeParagraphsTags, processField } from "../utils/displayUtils"
import { dogName, 
  ownerName, 
  ownerResponseSteps, 
  cookieKeyNames, 
  animationCharacterState,
  tasks, 
  slideTypes,
  whichTreatmentSlugNames,
  bottomNavigationLinkDirection,
  whichTreatmentSteps,
  legacyButtonTypes
} from "../WebsiteConstants"
import FixedSizeVideoWidget from "../components/FixedSizeVideoWidget"
import { setCaseStudyProgress, getVideoData, updateSlideDataWithVideoData } from "../utils/dataUtils"
import { getDogImageName, getDogVideo } from "../utils/assetUtils"
import { DogImageHolder } from '../components/PageParts'
import FixedSizeImage from "../components/FixedSizeImage"

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

  const initialState = { step: whichTreatmentSteps.QUESTION_POSED }
  const [state, setState] = useState(initialState)

  // =================== CHECK COMPLETION STATUS ==================

  useEffect(() => {
    if (state.step === whichTreatmentSteps.CORRECT_VETMEDIN) { 
        const newCaseStudyProgress = setCaseStudyProgress(tasks.WHICH_TREATMENT,dogChoice,cookies)
        console.log("============= " + newCaseStudyProgress + " =============")
        setCookie(cookieKeyNames.CASESTUDYS_ALL,newCaseStudyProgress,{ path: '/' })  
    }
  },[state.step])  

  // =================== GET PAGES DATA ==================

  const resourcesAr = get(data, 'allNodeQuestion.nodes')
  const resourcesAnswersAr = get(data, 'allNodeAnswer.nodes')

  let resources = null
        
  switch (state.step) {
      case whichTreatmentSteps.QUESTION_POSED:
        resources = getSlideData(resourcesAr,whichTreatmentSlugNames.QUESTION_POSED)
        break
      case whichTreatmentSteps.CORRECT_VETMEDIN:
        resources = getSlideData(resourcesAnswersAr,whichTreatmentSlugNames.CORRECT_VETMEDIN)
        break
      case whichTreatmentSteps.INCORRECT_ANSWER_ACE:
        resources = getSlideData(resourcesAnswersAr,whichTreatmentSlugNames.INCORRECT_ANSWER_ACE)
        break
      case whichTreatmentSteps.INCORRECT_ANSWER_SPIRO:
            resources = getSlideData(resourcesAnswersAr,whichTreatmentSlugNames.INCORRECT_ANSWER_SPIRO)
            break
      case whichTreatmentSteps.INCORRECT_ANSWER_ALL_DIURETICS:
        resources = getSlideData(resourcesAnswersAr,whichTreatmentSlugNames.INCORRECT_ANSWER_ALL_DIURETICS)
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
    setState({...state, step: whichTreatmentSteps.QUESTION_POSED})
  }

  const answerSelected = (e) => {
    if (e.currentTarget.id) {
      console.log("========== e.currentTarget.id ========",e.currentTarget.id)
      switch (e.currentTarget.id) {
          case (whichTreatmentSteps.CORRECT_VETMEDIN):
               console.log("answerSelected - ichTreatmentSteps.CORRECT_VETMEDIN")
                setCurrentStep(whichTreatmentSteps.CORRECT_VETMEDIN)
          break
          case (whichTreatmentSteps.INCORRECT_ANSWER_ACE):
                setCurrentStep(whichTreatmentSteps.INCORRECT_ANSWER_ACE)
          break
          case (whichTreatmentSteps.INCORRECT_ANSWER_ALL_DIURETICS):
                setCurrentStep(whichTreatmentSteps.INCORRECT_ANSWER_ALL_DIURETICS)
          break
          case (whichTreatmentSteps.INCORRECT_ANSWER_SPIRO):
            setCurrentStep(whichTreatmentSteps.INCORRECT_ANSWER_SPIRO)
          break
          default:
              console.log("no matching id on question button")
              setCurrentStep(whichTreatmentSteps.QUESTION_POSED)
      }
    } else {
      console.log("no id on question button")
      setCurrentStep(whichTreatmentSteps.QUESTION_POSED)
    }
    
  }

  const handleLeftClick = (e) => {
      console.log("handleLeftClick")
  }

  const handleRightClick = (e) => {
      console.log("handleRightClick")
  }

 
  if (typeof resources === 'undefined' || typeof resources === undefined || typeof resources === null) return (
    <Layout headerText={"SORRY TEMPORARILY UNAVAILABLE"} showPercentIndicator={true}>
    <BottomNavigationLink to={"/"}
        distanceFromSide={"2%"}
        bottom={"2%"}
        linkText={"Home"}
    /> 
    </Layout>
)

  return (
    <Layout headerText={replaceDogName("Poppy has a grade 3 mitral valve murmur",dogChoice)} showPercentIndicator={true}>

     {((whichTreatmentSteps.CORRECT_VETMEDIN === state.step)) ?
      <BottomNavigationLink to={"/owner-treatment-options/"}
                  distanceFromSide={"2%"}
                  bottom={"2%"}
                  direction={bottomNavigationLinkDirection.FORWARD}
                  linkText={"Continue"}
      /> : '' }

      <div className={(useStyles()).root} style={{position: 'relative', zIndex:'1 !important'}}>

           { (whichTreatmentSteps.QUESTION_POSED  === state.step) ? 
           <WhichTreatmentQuestionResponseLayout type={slideTypes.QUESTION_POSED} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={answerSelected} /> : '' }
           
           { (whichTreatmentSteps.CORRECT_VETMEDIN === state.step) ? 
           <WhichTreatmentQuestionResponseLayout type={slideTypes.ANSWER_WITH_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={handleRightClick} /> : '' }
         
           { (whichTreatmentSteps.INCORRECT_ANSWER_ACE === state.step) ? 
           <WhichTreatmentQuestionResponseLayout type={slideTypes.ANSWER_WITH_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={tryAgain} /> : '' }
            { (whichTreatmentSteps.INCORRECT_ANSWER_ALL_DIURETICS === state.step) ? 
           <WhichTreatmentQuestionResponseLayout type={slideTypes.ANSWER_WITH_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={tryAgain} /> : '' }
            { (whichTreatmentSteps.INCORRECT_ANSWER_SPIRO === state.step) ? 
           <WhichTreatmentQuestionResponseLayout type={slideTypes.ANSWER_WITH_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={tryAgain} /> : '' }
       
      </div>
  </Layout>

)}

const WhichTreatmentQuestionResponseLayout = ({type = slideTypes.QUESTION_POSED, resources, navigationLeftHandler, navigationRightHandler, dogChoice }) => {
  //debugger
  let buttonLinks = []
  if (resources.field_buttonlinks && resources.field_buttonlinks.length > 0) {
     // this get over ridden
     buttonLinks = resources.field_buttonlinks
  }

  console.log("WhichTreatmentQuestionResponseLayout ",resources)

  let resourcesProcessed = {}
  switch (type) {
      case slideTypes.ANSWER_WITH_VIDEO:
      case slideTypes.ANSWER_NO_VIDEO:

                const isCorrectAnswer = resources.field_iscorrectanswer[0] === "yes" ? true : false

                buttonLinks = [{}]

                if (isCorrectAnswer === false) {

                  buttonLinks[0].id = whichTreatmentSteps.QUESTION_POSED
                  buttonLinks[0].title = "Try again"
                  buttonLinks[0].url = "/"
                  buttonLinks[0].onClickHandler = navigationRightHandler
                  buttonLinks[0].buttonType = legacyButtonTypes.DARK_BLUE_ROUNDED
  
            }
  
            let videoData = {}
            if (type === slideTypes.ANSWER_WITH_VIDEO)  {
                videoData = getVideoData(resources, dogChoice)
            }
            
      
            resourcesProcessed = {
                questionText: '',
                answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
                answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
                additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) : '',
                isCorrectAnswer: resources.field_iscorrectanswer[0],
                mainImage: getDogImageName(animationCharacterState.HAPPY,dogChoice),
                slugName: whichTreatmentSlugNames.CORRECT_VETMEDIN,
                continueLink: {uri: '/',title:'Continue',url:'/'},
                backLink: {uri: '/',title:'Back',url:'/'},
                accessibilityVideoText: '',
                buttonLinks: buttonLinks,
                dogChoice:dogChoice
            }
  
            if (type === slideTypes.ANSWER_WITH_VIDEO)  {
                resourcesProcessed = updateSlideDataWithVideoData(resourcesProcessed,videoData)
            }
            
        
           break
      case slideTypes.QUESTION_POSED:
                // =========== NORMALISE DRUPAL DATA ========

                buttonLinks = [{},{},{},{},{},{}]

                buttonLinks[0].id = whichTreatmentSteps.CORRECT_VETMEDIN
                buttonLinks[0].title = "Vetmedin®"//(pimobendan)
                buttonLinks[0].url = "/"

                buttonLinks[1].id = whichTreatmentSteps.INCORRECT_ANSWER_ALL_DIURETICS
                buttonLinks[1].title = "Diuretics"
                buttonLinks[1].url = "/"

                buttonLinks[2].id = whichTreatmentSteps.INCORRECT_ANSWER_SPIRO
                buttonLinks[2].title = "Spironolactone"
                buttonLinks[2].url = "/"

                buttonLinks[3].id = whichTreatmentSteps.INCORRECT_ANSWER_ACE
                buttonLinks[3].title = "ACE inhibitors"
                buttonLinks[3].url = "/"

                let videoDataB = {}
                if (type === slideTypes.ANSWER_WITH_VIDEO) {
                    videoDataB = getVideoData(resources, dogChoice)
                 }


                resourcesProcessed = {
                 
                  questionText: resources.field_questiontext ? processField(resources.field_questiontext,dogChoice,false) : '',
                  additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) :``,
                  slugName: whichTreatmentSteps.QUESTION_POSED,
                  accessibilityVideoText: '',
                  animationVideoName: getDogVideo(animationCharacterState.NEUTRAL,dogChoice),
      
                  isCorrect1: resources.field_optioniscorrect1,
                  optionsHeader1:processField(resources.field_optionsheader1,dogChoice,false),
                  optionsBodyText1:processField(resources.field_optionsbodytext1,dogChoice,true),
                  isCorrect2: resources.field_optioniscorrect2,
                  optionsHeader2: "GRADE 2", //  processField(resources.field_optionsheader2,dogChoice,false),
                  optionsBodyText2:processField(resources.field_optionsbodytext2,dogChoice,true),
                  isCorrect3: resources.field_optioniscorrect3,
                  optionsHeader3:"GRADE 3", //  processField(resources.field_optionsheader3,dogChoice,false),
                  optionsBodyText3:processField(resources.field_optionsbodytext3,dogChoice,true),
                  isCorrect4: resources.field_optioniscorrect4,
                  optionsHeader4:"GRADE 4", //  processField(resources.field_optionsheader4,dogChoice,false),
                  optionsBodyText4:processField(resources.field_optionsbodytext4,dogChoice,true),
                  isCorrect5: resources.field_optioniscorrect5,
                  optionsHeader5:"GRADE 5", //  processField(resources.field_optionsheader5,dogChoice,false),
                  optionsBodyText5:processField(resources.field_optionsbodytext5,dogChoice,true),
                  isCorrect6: resources.field_optioniscorrect6,
                  optionsHeader6:"GRADE 6", //  processField(resources.field_optionsheader6,dogChoice,false),
                  optionsBodyText6:processField(resources.field_optionsbodytext6,dogChoice,true),
      
                  buttonLinks: buttonLinks,
                  dogChoice:dogChoice
           
           }
           if (type === slideTypes.ANSWER_WITH_VIDEO)  {
                resourcesProcessed = updateSlideDataWithVideoData(resourcesProcessed,videoDataB)
           }
          break
    default:
         return "type not found"
  }

  const ref = React.createRef();

  return (
    <>
   
    <Grid container  
    spacing={0} 
    spacing={0} 
    alignItems="center"
    justify="center" 
    style={{border: '0px solid black'}}>
   
      <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>

      <Grid item xs={12} sm={5}  align="center" style={{border: '0px solid red'}}>
       
          {(type === slideTypes.QUESTION_POSED) ?<FixedSizeVideoWidget autoPlay="true" ref={ref} data={resourcesProcessed} /> : ''}

          {(type === slideTypes.ANSWER_WITH_VIDEO || type === slideTypes.ANSWER_NO_VIDEO) && (resourcesProcessed.mainImage && resourcesProcessed.mainImage !== "" && dogChoice === dogName.DUDLEY)  ? 
            <DogImageHolder><FixedSizeImage imgName={resourcesProcessed.mainImage} height="314px" width="314px"/></DogImageHolder>
          : ''}
            {(type === slideTypes.ANSWER_WITH_VIDEO || type === slideTypes.ANSWER_NO_VIDEO) && (resourcesProcessed.mainImage && resourcesProcessed.mainImage !== "" && dogChoice === dogName.POPPY)  ? 
            <DogImageHolder><FixedSizeImage imgName={resourcesProcessed.mainImage} height="314px" width="314px"/></DogImageHolder>
          : ''}
            {(type === slideTypes.ANSWER_WITH_VIDEO || type === slideTypes.ANSWER_NO_VIDEO) && (resourcesProcessed.mainImage && resourcesProcessed.mainImage !== "" && dogChoice === dogName.REGGIE)  ? 
            <DogImageHolder><FixedSizeImage imgName={resourcesProcessed.mainImage} height="314px" width="314px"/></DogImageHolder>
          : ''}
       
      </Grid>

      <Grid item xs={12} sm={5}  align="left" style={{ border: '0px solid red' }}>
        {(type === slideTypes.QUESTION_POSED) ?
          <QuestionPosed data={resourcesProcessed} currentSlidePosition={0} onClickHandler={navigationRightHandler} dogChoice={dogChoice} useVideoWidget={resourcesProcessed.useVideoWidget} /> : ''
        }

        {(type === slideTypes.ANSWER_WITH_VIDEO || type === slideTypes.ANSWER_NO_VIDEO) ?
          <QuestionResponse data={resourcesProcessed} currentSlidePosition={0} onClickHandler={navigationLeftHandler} dogChoice={dogChoice} useVideoWidget={resourcesProcessed.useVideoWidget} /> :''
        }
            
      </Grid>

      <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>

    </Grid>

    {(type === slideTypes.ANSWER_WITH_VIDEO) ? <VideoFullScreenWidget videoData1={resourcesProcessed.videoData1} instance={"One"} /> : ''}
    </>
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



