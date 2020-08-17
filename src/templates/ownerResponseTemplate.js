import React, { useRef,useState, useEffect, createRef } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"
import styled from "styled-components"
import theme, { sm, md, lg, xl } from "../theme"
import { dogName, ownerName, ownerResponseSteps, cookieKeyNames, tasks, ownerResponseSlugNames, animationCharacterState, legacyButtonTypes } from "../WebsiteConstants"
import { useCookies } from 'react-cookie'
import QuestionResPage from '../components/OwnerResPage'
import Layout from '../components/layout'
import { getSlideData, processField } from "../utils/displayUtils"
import { setCaseStudyProgress, getVideoData, updateSlideDataWithVideoData } from "../utils/dataUtils"
import { getDogImageName, getOwnerVideo } from "../utils/assetUtils"

export default function ownerResponseTemplate(data, dogChoicePassed) {
  
        console.log(data)
        const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL])
        let initialState = { 
            step: ownerResponseSteps.QUESTION_POSED_BY_OWNER, 
        }
      
        const [state, setState] = useState(initialState)
        console.log("=========== step ",state.step)
        console.log("state", state)
        const dogChoice = dogChoicePassed // cookies["dogChoice"] ? cookies["dogChoice"]: dogName.DUDLEY 

         // =================== CONSTANTS ======================

        const buttonIds = {
          INCORRECT_ANSWER: "ownerresponseincorrect1",
          QUESTION_POSED: "ownerresponsequestionposed1"
      }

        let resources
        const resourcesAr = get(data, 'allNodeQuestion.nodes')
        const resourcesIntroAr = get(data, 'allNodeOwnerquestion.nodes')
        const resourcesAnswersAr = get(data, 'allNodeAnswer.nodes')
        
        let headerText = ''
        
        const id = "ownerResponsePage"

        const setCurrentStep = (step) => {   
            console.log("=========== setCurrentStep - step",step)
            // console.log("state", state)
            setState({...state, step: step})
        }

        const tryAgain = (e) => {
            setCurrentStep(ownerResponseSteps.QUESTION_POSED)
        }
        //
        
        switch (state.step) {
          case ownerResponseSteps.QUESTION_POSED_BY_OWNER:
              if (dogChoice === dogName.DUDLEY) resources = getSlideData(resourcesIntroAr, ownerResponseSlugNames.QUESTION_POSED_BY_OWNER_DUDLEY)
              if (dogChoice === dogName.POPPY) resources = getSlideData(resourcesIntroAr, ownerResponseSlugNames.QUESTION_POSED_BY_OWNER_POPPY)
              if (dogChoice === dogName.REGGIE) resources = getSlideData(resourcesIntroAr, ownerResponseSlugNames.QUESTION_POSED_BY_OWNER_REGGIE)
              resources.animationVideoName = getOwnerVideo(dogChoice)
              
              
            break
            case ownerResponseSteps.QUESTION_POSED:
              if (dogChoice === dogName.DUDLEY) resources = getSlideData(resourcesAr, ownerResponseSlugNames.QUESTION_POSED_DUDLEY)
              if (dogChoice === dogName.POPPY) resources = getSlideData(resourcesAr, ownerResponseSlugNames.QUESTION_POSED_POPPY)
              if (dogChoice === dogName.REGGIE) resources = getSlideData(resourcesAr, ownerResponseSlugNames.QUESTION_POSED_REGGIE)
              resources.correctAnswerStep = ownerResponseSteps.CORRECT_ANSWER
              resources.incorrectAnswerStep = ownerResponseSteps.INCORRECT_ANSWER
              resources.animationVideoName = getOwnerVideo(dogChoice)
              console.log(resources)
              
            break
            case ownerResponseSteps.CORRECT_ANSWER:
             
              resources = getSlideData(resourcesAnswersAr, ownerResponseSlugNames.CORRECT_ANSWER)

              headerText = processField(resources.field_topheadertext,dogChoice,false)

              let videoCorrectAnswer = getVideoData(resources,dogChoice)

              let continueLink = ''
              if (dogChoice === dogName.POPPY) continueLink = "/xray-poppy"
              if (dogChoice === dogName.REGGIE) continueLink = "/xray-reggie"
              if (dogChoice === dogName.DUDLEY) continueLink = "/xray-dudley"

              let ownerResponse_CorrectAnswer = {
  
                  answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
                  answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
                  additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) : '',
                  isCorrectAnswer: resources.field_iscorrectanswer[0],
                  mainImage: getDogImageName(animationCharacterState.HAPPY,dogChoice),
                  slugName: ownerResponseSlugNames.CORRECT_ANSWER,
                  continueLink: {uri: '/',title:'Continue',url:continueLink},
                  backLink: {uri: '/',title:'Back',url:'/'},
                  accessibilityVideoText: '',
                  buttonLinks: [],
                  dogChoice:dogChoice
              }
        
              resources = updateSlideDataWithVideoData(ownerResponse_CorrectAnswer,videoCorrectAnswer) 
              console.log(resources)
            break
            case ownerResponseSteps.INCORRECT_ANSWER:
             
              resources = getSlideData(resourcesAnswersAr, ownerResponseSlugNames.INCORRECT_ANSWER)

              headerText = processField(resources.field_topheadertext,dogChoice,false)

              let videoIncorrectAnswer = getVideoData(resources,dogChoice)

              const buttonLinks = [{}]
              //
              //

              buttonLinks[0].id = buttonIds.QUESTION_POSED
              buttonLinks[0].title = "Try again"
              buttonLinks[0].url = "/"
              buttonLinks[0].onClickHandler = () => { setCurrentStep(ownerResponseSteps.QUESTION_POSED) }
              buttonLinks[0].buttonType = legacyButtonTypes.DARK_BLUE_ROUNDED

              let ownerResponse_InCorrectAnswer = {
                  answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
                  answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
                  additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) : '',
                  isCorrectAnswer: resources.field_iscorrectanswer[0],
                  mainImage: getDogImageName(animationCharacterState.SAD,dogChoice),
                  slugName: ownerResponseSlugNames.INCORRECT_ANSWER,
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

        // ================ set completed if is
        
        useEffect(() => {
            if (state.step === ownerResponseSteps.CORRECT_ANSWER) {  
                const newCaseStudyProgress = setCaseStudyProgress(tasks.RESPONDING_OWNER_INITIAL_QUESTION,dogChoice,cookies)
                console.log("============= " + newCaseStudyProgress + " =============")
                setCookie(cookieKeyNames.CASESTUDYS_ALL,newCaseStudyProgress,{ path: '/' })  
            }
        },[state.step])
        
    return (
        <Layout headerText={headerText} showSliderHeader={true}>
              { state.step === ownerResponseSteps.QUESTION_POSED_BY_OWNER ? <QuestionResPage step={ownerResponseSteps.QUESTION_POSED_BY_OWNER} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} /> : ''}
              { state.step === ownerResponseSteps.QUESTION_POSED ? <QuestionResPage step={ownerResponseSteps.QUESTION_POSED} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep } resources={resources} /> : ''}
              { state.step === ownerResponseSteps.CORRECT_ANSWER ? <QuestionResPage step={ownerResponseSteps.CORRECT_ANSWER} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} /> : ''}
              { state.step === ownerResponseSteps.INCORRECT_ANSWER ? <QuestionResPage step={ownerResponseSteps.INCORRECT_ANSWER} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={tryAgain} resources={resources} /> : ''}
        </Layout>
    )
}

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

