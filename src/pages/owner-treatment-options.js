import React, { useRef,useState, useEffect, createRef } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"
import styled from "styled-components"
import theme, { sm, md, lg, xl } from "../theme"
import { dogName, ownerName, ownerTreatmentSteps, cookieKeyNames, tasks, ownerTreatmentOptionsSlugNames, legacyButtonTypes, animationCharacterState, ownerTreatmentSlugNames } from "../WebsiteConstants"
import { processInternalLink, stripUneededHtml, removeParagraphsTags, getSlideData, processField } from '../utils/displayUtils'
import { useCookies } from 'react-cookie'
import QuestionResPage from '../components/OwnerResPage'
import Layout from '../components/layout'
import { setCaseStudyProgress, getVideoData, updateSlideDataWithVideoData } from "../utils/dataUtils"
import { getDogImageName, getOwnerVideo } from "../utils/assetUtils"

const OwnerTreatmentOptions = ({data}) => {
        console.log(data)
        const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL])
        let initialState = { 
            step: ownerTreatmentSteps.SECTION_INTRO, 
        }

        /* ===== CONSTANTS ==== */

        const buttonIds = {
          INCORRECT_ANSWER: "ownertreatmentincorrect1",
          QUESTION_POSED: "ownertreatmentquestionposed1"
        }
    
        const [state, setState] = useState(initialState)
        console.log("=========== step ",state.step)
        console.log("state", state)
        const dogChoice = cookies["dogChoice"] ? cookies["dogChoice"]: dogName.DUDLEY 
        let resources
        const resourcesAr = get(data, 'allNodeQuestion.nodes')
        const resourcesIntroAr = get(data, 'allNodeSectionintroduction.nodes')
        const resourcesOwnerQuestionAr = get(data, 'allNodeOwnerquestion.nodes')
        const resourcesAnswersAr = get(data, 'allNodeAnswer.nodes')
        
        const id = "ownerResponsePage"
        const style = {}

        const setCurrentStep = (step) => {   
            console.log("=========== setCurrentStep - step",step)
            // console.log("state", state)
            setState({...state, step: step})
        }

        const tryAgain = (e) => {
            setCurrentStep(ownerTreatmentSteps.QUESTION_POSED)
        }

        // =================== CHECK COMPLETION STATUS ==================

        useEffect(() => {
          if (state.step === ownerTreatmentSteps.CORRECT_ANSWER) { 
            const newCaseStudyProgress = setCaseStudyProgress(tasks.REASSURING_OWNER,dogChoice,cookies)
            console.log("============= " + newCaseStudyProgress + " =============")
            setCookie(cookieKeyNames.CASESTUDYS_ALL,newCaseStudyProgress,{ path: '/' })  
          } 
        },[state.step])

        switch (state.step) {
          case ownerTreatmentSteps.SECTION_INTRO:
            resources = getSlideData(resourcesIntroAr,ownerTreatmentOptionsSlugNames.SECTION_INTRO)
          
            break
          case ownerTreatmentSteps.QUESTION_POSED_BY_OWNER:
              if (dogChoice === dogName.DUDLEY) {resources = getSlideData(resourcesOwnerQuestionAr,ownerTreatmentOptionsSlugNames.QUESTION_POSED_BY_OWNER_DUDLEY)}
              if (dogChoice === dogName.REGGIE) {resources = getSlideData(resourcesOwnerQuestionAr,ownerTreatmentOptionsSlugNames.QUESTION_POSED_BY_OWNER_REGGIE)}
              if (dogChoice === dogName.POPPY) {resources = getSlideData(resourcesOwnerQuestionAr,ownerTreatmentOptionsSlugNames.QUESTION_POSED_BY_OWNER_POPPY)}
              resources.animationVideoName = getOwnerVideo(dogChoice)
              
            break
          case ownerTreatmentSteps.QUESTION_POSED:
              if (dogChoice === dogName.DUDLEY) {resources = getSlideData(resourcesAr,ownerTreatmentOptionsSlugNames.QUESTION_POSED_DUDLEY)}
              if (dogChoice === dogName.REGGIE) {resources = getSlideData(resourcesAr,ownerTreatmentOptionsSlugNames.QUESTION_POSED_REGGIE)}
              if (dogChoice === dogName.POPPY) {resources = getSlideData(resourcesAr,ownerTreatmentOptionsSlugNames.QUESTION_POSED_POPPY)}

              resources.correctAnswerStep = ownerTreatmentSteps.CORRECT_ANSWER
              resources.incorrectAnswerStep = ownerTreatmentSteps.INCORRECT_ANSWER
              resources.animationVideoName = getOwnerVideo(dogChoice)
              
            break
            case ownerTreatmentSteps.CORRECT_ANSWER:
        
              resources = getSlideData(resourcesAnswersAr, ownerTreatmentOptionsSlugNames.CORRECT_ANSWER)
               
              let videoCorrectAnswer = getVideoData(resources,dogChoice)

              let ownerResponse_CorrectAnswer = {
  
                  answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
                  answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
                  additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) : '',
                  isCorrectAnswer: resources.field_iscorrectanswer[0],
                  mainImage: getDogImageName(animationCharacterState.HAPPY,dogChoice),
                  slugName: ownerTreatmentOptionsSlugNames.CORRECT_ANSWER,
                  continueLink: {uri: '/',title:'Continue',url:'/certificate-request'},
                  backLink: {uri: '/',title:'Back',url:'/'},
                  accessibilityVideoText: '',
                  buttonLinks: [],
                  dogChoice:dogChoice,
              }
        
              resources = updateSlideDataWithVideoData(ownerResponse_CorrectAnswer,videoCorrectAnswer) 
              console.log(resources)
            break
            case ownerTreatmentSteps.INCORRECT_ANSWER:
           
              resources = getSlideData(resourcesAnswersAr, ownerTreatmentOptionsSlugNames.INCORRECT_ANSWER)

              let videoIncorrectAnswer = getVideoData(resources,dogChoice)

              const buttonLinks = [{}]

              buttonLinks[0].id = buttonIds.QUESTION_POSED
              buttonLinks[0].title = "Try again"
              buttonLinks[0].url = "/"
              buttonLinks[0].onClickHandler = () => { setCurrentStep(ownerTreatmentSteps.QUESTION_POSED) }
              buttonLinks[0].buttonType = legacyButtonTypes.DARK_BLUE_ROUNDED

              let ownerResponse_InCorrectAnswer = {
                  answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
                  answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
                  additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) : '',
                  isCorrectAnswer: resources.field_iscorrectanswer[0],
                  mainImage: getDogImageName(animationCharacterState.SAD,dogChoice),
                  slugName: ownerTreatmentOptionsSlugNames.INCORRECT_ANSWER,
                  continueLink: {uri: '/',title:'Continue',url:'/'},
                  backLink: {uri: '/',title:'Back',url:'/'},
                  accessibilityVideoText: '',
                  buttonLinks: buttonLinks,
                  dogChoice: dogChoice,
              }

              resources = updateSlideDataWithVideoData(ownerResponse_InCorrectAnswer,videoIncorrectAnswer)  
              console.log(resources)
            break
          default:
            return "no current slide"
        }
        
        console.log(resources)
        if (!resources) return "resources not found"

      
        
    return (
        <Layout>
              { state.step === ownerTreatmentSteps.SECTION_INTRO ? <QuestionResPage step={ownerTreatmentSteps.SECTION_INTRO} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} /> : ''}
              { state.step === ownerTreatmentSteps.QUESTION_POSED_BY_OWNER ? <QuestionResPage step={ownerTreatmentSteps.QUESTION_POSED_BY_OWNER} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} /> : ''}
              { state.step === ownerTreatmentSteps.QUESTION_POSED ? <QuestionResPage step={ownerTreatmentSteps.QUESTION_POSED} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep } resources={resources} /> : ''}
              { state.step === ownerTreatmentSteps.CORRECT_ANSWER ? <QuestionResPage step={ownerTreatmentSteps.CORRECT_ANSWER} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} /> : ''}
              { state.step === ownerTreatmentSteps.INCORRECT_ANSWER ? <QuestionResPage step={ownerTreatmentSteps.INCORRECT_ANSWER} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={tryAgain} resources={resources} /> : ''}
        </Layout>
    )
}

export default OwnerTreatmentOptions

export const pageQuery = graphql`
  {
    allNodeQuestion {
      nodes {
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
        field_optioniscorrect1
        field_optioniscorrect2
        field_optioniscorrect3
        field_optioniscorrect4
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
        field_optionsheader1
        field_progresspercent
        field_questiontext {
          processed
        }
        path {
          alias
        }
        drupal_id
        changed(fromNow: false)
      }
    }
    allNodeSectionintroduction {
      nodes {
        field_headertext
        path {
          alias
        }
      }
    }
    allNodeOwnerquestion {
      nodes {
        field_headertext
        field_additionalbodytext {
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

