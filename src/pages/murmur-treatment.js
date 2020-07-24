import React, {useState, useEffect} from "react"
import Layout from '../components/layout'

// import ReactPlayer from "react-player"

import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import CaseStudyLeftArrow from "../components/CaseStudyLeftArrow"
import CaseStudyRightArrow from "../components/CaseStudyRightArrow"
import { useCookies } from 'react-cookie'
import QuestionResponse from "../components/QuestionResponse"
import QuestionPosed from "../components/QuestionPosed"
import ResponseVideo from "../components/ResponseVideo"

import BottomNavigationLink from "../components/BottomNavigationLink"

import get from "lodash/get"
import { graphql } from "gatsby"
import { stripUneededHtml, getSlideData, replaceDogName, removeParagraphsTags,processField } from "../utils/displayUtils"

import { setCaseStudyProgress } from "../utils/dataUtils"
import { dogName, 
  ownerName, 
  ownerResponseSteps, 
  cookieKeyNames, 
  tasks,
  slideTypes,
  murmurTreatmentResourcesSlugNames,
  bottomNavigationLinkDirection,
  treatmentApproachSteps,
  legacyButtonTypes,
  animationCharacterState
} from "../WebsiteConstants"
import FixedSizeVideoWidget from "../components/FixedSizeVideoWidget"

import { showFullScreenVideo } from '../components/VideoFullScreenWidget'
import { getVideoData, updateSlideDataWithVideoData } from "../utils/dataUtils"
import { getDogImageName, getDogVideo } from "../utils/assetUtils"
import styled from 'styled-components'
import theme, { sm, md, lg, xl } from '../theme'
import FixedSizeImage from "../components/FixedSizeImage"

//NB: - useEffect(() - very good reference https://dev.to/spukas/4-ways-to-useeffect-pf6

const DogImageHolderBase = styled.div`
  display: flex;
  width: 100%;
  height: 314px;
  /* position: absolute;
  left: 20%;
  top: 50px; */
`

const DogImageHolder = styled(DogImageHolderBase)`
  /* left: 1%;
  top: 132px;
  @media (max-width: ${md}px) {
      left:0px;
  }
  @media (max-width: ${sm}px) {
      left:-50px;
  } */
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

function MurmurTreatment({data}) {

   // =================== GET GLOBAL DATA ==================

  const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL])
  const dogChoice = cookies["dogChoice"] ? cookies["dogChoice"] : dogName.DUDLEY

  // =================== SETUP STATE ==================

  const initialState = { step: treatmentApproachSteps.QUESTION_POSED, taskCompleted: false }
  const [state, setState] = useState(initialState)

 // =================== CHECK COMPLETION STATUS ==================

  useEffect(() => {
    if (state.step === treatmentApproachSteps.CORRECT_ANSWER_XRAY_ONLY
      || state.step === treatmentApproachSteps.CORRECT_ANSWER_XRAY_AND_ULTRASOUND
      || state.step === treatmentApproachSteps.CORRECT_ANSWER_ULTRASOUND) { 
    
          const newCaseStudyProgress = setCaseStudyProgress(tasks.WHICH_EXAMINATION,dogChoice,cookies)
          console.log("============= " + newCaseStudyProgress + " =============")
          setCookie(cookieKeyNames.CASESTUDYS_ALL,newCaseStudyProgress,{ path: '/' })  
    } 
  },[state.step])

  // =================== CONSTANTS ======================

  const buttonIds = {
    YES_ANSWER: "gradeMurmurYesAnswrer",
    NO_ANSWER: "gradeMurmurNoAnswrer",
    UNSURE_ANSWER: "gradeMurmurUnsureAnswrer",
    QUESTION_ABOUT_GRADING: "gradeMurmurQuestionAboutGrading",
    QUESTION_COMPARE_VIDEO_OF_TWO_HEARTS: "gradeMurmurCompareTwoHearts",
}

  // =================== GET PAGES DATA ==================

  const resourcesAr = get(data, 'allNodeQuestion.nodes')
  const resourcesAnswersAr = get(data, 'allNodeAnswer.nodes')

  let resources = null
  let headerText = ""
        
  switch (state.step) {
      case treatmentApproachSteps.QUESTION_POSED:
        resources = getSlideData(resourcesAr,murmurTreatmentResourcesSlugNames.QUESTION_POSED)
        break
      case treatmentApproachSteps.CORRECT_ANSWER_XRAY_ONLY:
        resources = getSlideData(resourcesAnswersAr,murmurTreatmentResourcesSlugNames.CORRECT_ANSWER_XRAY_ONLY)
        break
      case treatmentApproachSteps.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:
        resources = getSlideData(resourcesAnswersAr,murmurTreatmentResourcesSlugNames.CORRECT_ANSWER_XRAY_AND_ULTRASOUND)
        break
      case treatmentApproachSteps.CORRECT_ANSWER_ULTRASOUND:
        resources = getSlideData(resourcesAnswersAr,murmurTreatmentResourcesSlugNames.CORRECT_ANSWER_ULTRASOUND)
        break
      case treatmentApproachSteps.INCORRECT_ANSWER_ECG:
        resources = getSlideData(resourcesAnswersAr,murmurTreatmentResourcesSlugNames.INCORRECT_ANSWER_ECG)
        break
      case treatmentApproachSteps.INCORRECT_ANSWER_NO_TREATMENT:
        resources = getSlideData(resourcesAnswersAr,murmurTreatmentResourcesSlugNames.INCORRECT_ANSWER_NO_TREATMENT)
        break
      case treatmentApproachSteps.INCORRECT_ANSWER_HOLTER_MONITORING:
        resources = getSlideData(resourcesAnswersAr,murmurTreatmentResourcesSlugNames.INCORRECT_ANSWER_HOLTER_MONITORING)
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
    setState({...state, step: treatmentApproachSteps.QUESTION_POSED})
  }

  const answerSelected = (e) => {
    if (e.currentTarget.id) {
      switch (e.currentTarget.id) {
          case (treatmentApproachSteps.CORRECT_ANSWER_ULTRASOUND):
                setCurrentStep(treatmentApproachSteps.CORRECT_ANSWER_ULTRASOUND)
          break
          case (treatmentApproachSteps.CORRECT_ANSWER_XRAY_AND_ULTRASOUND):
                setCurrentStep(treatmentApproachSteps.CORRECT_ANSWER_XRAY_AND_ULTRASOUND)
          break
          case (treatmentApproachSteps.CORRECT_ANSWER_XRAY_ONLY):
                setCurrentStep(treatmentApproachSteps.CORRECT_ANSWER_XRAY_ONLY)
          break
          case (treatmentApproachSteps.INCORRECT_ANSWER_ECG):
                setCurrentStep(treatmentApproachSteps.INCORRECT_ANSWER_ECG)
          break
          case (treatmentApproachSteps.INCORRECT_ANSWER_NO_TREATMENT):
                setCurrentStep(treatmentApproachSteps.INCORRECT_ANSWER_NO_TREATMENT)
          break
          case (treatmentApproachSteps.INCORRECT_ANSWER_HOLTER_MONITORING):
                setCurrentStep(treatmentApproachSteps.INCORRECT_ANSWER_HOLTER_MONITORING)
          break
          default:
              console.log("no matching id on question button")
              setCurrentStep(treatmentApproachSteps.QUESTION_POSED)
      }
    } else {
      console.log("no id on question button")
      setCurrentStep(treatmentApproachSteps.QUESTION_POSED)
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

     {((treatmentApproachSteps.CORRECT_ANSWER_ULTRASOUND === state.step 
     || treatmentApproachSteps.CORRECT_ANSWER_XRAY_AND_ULTRASOUND === state.step 
     || treatmentApproachSteps.CORRECT_ANSWER_XRAY_ONLY === state.step)) ?
      <BottomNavigationLink to={"/owner-response"}
                  distanceFromSide={"2%"}
                  bottom={"2%"}
                  direction={bottomNavigationLinkDirection.FORWARD}
                  linkText={"Continue"}
      /> : '' }

      <div className={(useStyles()).root} style={{position: 'relative', zIndex:'1 !important'}}>

           { (treatmentApproachSteps.QUESTION_POSED  === state.step) ? 
           <MurmurTreatmentQuestionResponseLayout type={slideTypes.QUESTION_POSED} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={answerSelected} /> : '' }
           
           { (treatmentApproachSteps.CORRECT_ANSWER_ULTRASOUND === state.step) ? 
           <MurmurTreatmentQuestionResponseLayout type={slideTypes.ANSWER_WITH_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={handleRightClick} /> : '' }
           { (treatmentApproachSteps.CORRECT_ANSWER_XRAY_AND_ULTRASOUND === state.step) ? 
           <MurmurTreatmentQuestionResponseLayout type={slideTypes.ANSWER_WITH_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={handleRightClick} /> : '' }
           { (treatmentApproachSteps.CORRECT_ANSWER_XRAY_ONLY === state.step) ? 
           <MurmurTreatmentQuestionResponseLayout type={slideTypes.ANSWER_WITH_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={handleRightClick} /> : '' }
           
           { (treatmentApproachSteps.INCORRECT_ANSWER_ECG === state.step) ? 
           <MurmurTreatmentQuestionResponseLayout type={slideTypes.ANSWER_NO_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={tryAgain} /> : '' }
           { (treatmentApproachSteps.INCORRECT_ANSWER_NO_TREATMENT === state.step) ? 
           <MurmurTreatmentQuestionResponseLayout type={slideTypes.ANSWER_NO_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={tryAgain} /> : '' }
           { (treatmentApproachSteps.INCORRECT_ANSWER_HOLTER_MONITORING === state.step) ? 
           <MurmurTreatmentQuestionResponseLayout type={slideTypes.ANSWER_NO_VIDEO} resources={resources} dogChoice={dogChoice} navigationLeftHandler={handleLeftClick} navigationRightHandler={tryAgain} /> : '' }
     
      </div>
  </Layout>

)}

const MurmurTreatmentQuestionResponseLayout = ({type = slideTypes.QUESTION_POSED, resources, navigationLeftHandler, navigationRightHandler, dogChoice }) => {
  //debugger

    // =================== CONSTANTS ======================

    const buttonIds = {
      CORRECT_ANSWER_XRAY_ONLY: "murmerTreatment1",
      CORRECT_ANSWER_ULTRASOUND: "murmerTreatment2",
      INCORRECT_ANSWER_ECG: "murmerTreatmentUnsure3",
      CORRECT_ANSWER_XRAY_AND_ULTRASOUND: "murmerTreatment4",
      INCORRECT_ANSWER_NO_TREATMENT: "murmerTreatment5",
      INCORRECT_ANSWER_HOLTER_MONITORING: "murmerTreatment6"
  }

  let resourcesProcessed = null
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

                    buttonLinks[0].id = treatmentApproachSteps.QUESTION_POSED
                    buttonLinks[0].title = "Try again"
                    buttonLinks[0].url = "/"
                    buttonLinks[0].onClickHandler = navigationRightHandler
                    buttonLinks[0].buttonType = legacyButtonTypes.DARK_BLUE_ROUNDED

                }

                //debugger

                // =========== NORMALISE DRUPAL DATA ========

              resourcesProcessed = {
                  questionText: '',
                  answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
                  answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
                  additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) : '',
                  isCorrectAnswer: resources.field_iscorrectanswer[0],
                  mainImage: getDogImageName(animationCharacterState.HAPPY,dogChoice),
                  slugName: murmurTreatmentResourcesSlugNames.CORRECT_ANSWER_ULTRASOUND,
                  continueLink: {uri: '/',title:'Continue',url:'/'},
                  backLink: {uri: '/',title:'Back',url:'/'},
                  accessibilityVideoText: '',
                  buttonLinks: buttonLinks,
                  dogChoice:dogChoice
              }
      
              let videoData = getVideoData(resourcesProcessed, dogChoice)
              resourcesProcessed = updateSlideDataWithVideoData(resourcesProcessed,videoData)
           break
      case slideTypes.QUESTION_POSED:
                // =========== NORMALISE DRUPAL DATA ========

                

                buttonLinks = [{},{},{},{},{},{}]

                buttonLinks[0].id = treatmentApproachSteps.CORRECT_ANSWER_XRAY_ONLY
                buttonLinks[0].title = "X-ray"
                buttonLinks[0].url = "/"

                buttonLinks[1].id = treatmentApproachSteps.CORRECT_ANSWER_ULTRASOUND
                buttonLinks[1].title = "Ultrasound"
                buttonLinks[1].url = "/"

                buttonLinks[2].id = treatmentApproachSteps.INCORRECT_ANSWER_ECG
                buttonLinks[2].title = "ECG"
                buttonLinks[2].url = "/"

                buttonLinks[3].id = treatmentApproachSteps.CORRECT_ANSWER_XRAY_AND_ULTRASOUND
                buttonLinks[3].title = "X-ray and ultrasound"
                buttonLinks[3].url = "/"

                buttonLinks[4].id = treatmentApproachSteps.INCORRECT_ANSWER_NO_TREATMENT
                buttonLinks[4].title = "Finish Appointment"
                buttonLinks[4].url = "/"

                buttonLinks[5].id = treatmentApproachSteps.INCORRECT_ANSWER_HOLTER_MONITORING
                buttonLinks[5].title = "Holter monitoring"
                buttonLinks[5].url = "/"

                resourcesProcessed = {
                 
                     questionText: resources.field_questiontext ? processField(resources.field_questiontext,dogChoice,false) : '',
                     additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) :``,
                     slugName: murmurTreatmentResourcesSlugNames.QUESTION_POSED,
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
      
              let videoDataB = getVideoData(resourcesProcessed, dogChoice)
              resourcesProcessed = updateSlideDataWithVideoData(resourcesProcessed,videoDataB)
          break
    default:
         return "type not found"
  }

  const ref = React.createRef();
  //debugger

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
      {(type === slideTypes.QUESTION_POSED) ?
                  <FixedSizeVideoWidget autoPlay="true" ref={ref} data={resourcesProcessed} /> : ''
              }
           
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
          <QuestionPosed data={resourcesProcessed} currentSlidePosition={0} onClickHandler={navigationRightHandler} dogChoice={dogChoice} useVideoWidget={currentCaseStudySlideData.useVideoWidget} /> : ''
        }

        {(type === slideTypes.ANSWER_WITH_VIDEO || type === slideTypes.ANSWER_NO_VIDEO) ?
          <QuestionResponse data={resourcesProcessed} currentSlidePosition={0} onClickHandler={navigationLeftHandler} dogChoice={dogChoice} useVideoWidget={currentCaseStudySlideData.useVideoWidget} /> :''
        }
            
      </Grid>

      <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>

    </Grid>
    </>
  )
}

export default MurmurTreatment

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
      field_videotext1 {
        processed
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
      field_videotext2 {
        processed
      }
      field_videotext3 {
        processed
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
            }
          }
        }
      }
    }
  }

  }
`




