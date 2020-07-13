import React, { useRef,useState, useEffect, createRef } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"
import styled from "styled-components"
import theme, { sm, md, lg, xl } from "../theme"
import { dogName, ownerName, ownerResponseSteps, cookieKeyNames, tasks } from "../WebsiteConstants"
import { processInternalLink, processHtml, removeParagraphsTags, getSlideData } from '../utils/displayUtils'
import { useCookies } from 'react-cookie'
import QuestionResPage from '../components/OwnerResPage'
import Layout from '../components/layout'
import slides, {ownerTreatment_CorrectAnswer,ownerTreatment_InCorrectAnswer} from "../api/slideData"

const OwnerTreatmentOptions = ({data}) => {
        console.log(data)
        const [cookies, setCookie, removeCookie] = useCookies(cookieKeyNames)
        let initialState = { 
            step: ownerResponseSteps.SECTION_INTRO, 
        }
    
        const [state, setState] = useState(initialState)
        console.log("=========== step ",state.step)
        console.log("state", state)
        const dogChoice = cookies["dogChoice"] ? cookies["dogChoice"]: dogName.DUDLEY 
        let resources
        const resourcesAr = get(data, 'allNodeQuestion.nodes')
        const resourcesIntroAr = get(data, 'allNodeSectionintroduction.nodes')
        const resourcesOwnerQuestionAr = get(data, 'allNodeOwnerquestion.nodes')
        
        const id = "ownerResponsePage"
        const style = {}

        const setCurrentStep = (step) => {   
            console.log("=========== setCurrentStep - step",step)
            // console.log("state", state)
            setState({...state, step: step})
        }

        const tryAgain = (e) => {
            setCurrentStep(ownerResponseSteps.QUESTION_POSED)
        }
    
        if (state.step === ownerResponseSteps.CORRECT_ANSWER) { 
            setCookie(tasks.DUDLEY_REASSURING_OWNER,true,"/")
        }
        // TODO - make this logical question posed by user is from treatment-options-section-introduction
        switch (state.step) {
          case ownerResponseSteps.SECTION_INTRO:
            resources = getSlideData(resourcesIntroAr,"treatment-options-section-main-introduction")
            break
          case ownerResponseSteps.QUESTION_POSED_BY_OWNER:
              resources = getSlideData(resourcesOwnerQuestionAr,"owner-question-is-dudley-ok")
            break
          case ownerResponseSteps.QUESTION_POSED:
              resources = getSlideData(resourcesAr,"owner-treatment-options")
            break
            case ownerResponseSteps.CORRECT_ANSWER:
                //TODO - dynamic
              //resources = getSlideData(resourcesAr,"/owner-treatment-answer-concise-language")
              resources = ownerTreatment_CorrectAnswer
            break
            case ownerResponseSteps.INCORRECT_ANSWER:
              //resources = getSlideData(resourcesAr,"/owner-treatment-answer-incorrect")
              resources = ownerTreatment_InCorrectAnswer
            break
          default:
            return "no current slide"
        }
        
        console.log(resources)
        if (!resources) return "resources not found"
        
    return (
        <Layout>
              { state.step === ownerResponseSteps.SECTION_INTRO ? <QuestionResPage step={ownerResponseSteps.SECTION_INTRO} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} /> : ''}
              { state.step === ownerResponseSteps.QUESTION_POSED_BY_OWNER ? <QuestionResPage step={ownerResponseSteps.QUESTION_POSED_BY_OWNER} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} /> : ''}
              { state.step === ownerResponseSteps.QUESTION_POSED ? <QuestionResPage step={ownerResponseSteps.QUESTION_POSED} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep } resources={resources} /> : ''}
              { state.step === ownerResponseSteps.CORRECT_ANSWER ? <QuestionResPage step={ownerResponseSteps.CORRECT_ANSWER} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} /> : ''}
              { state.step === ownerResponseSteps.INCORRECT_ANSWER ? <QuestionResPage step={ownerResponseSteps.INCORRECT_ANSWER} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={tryAgain} resources={resources} /> : ''}
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
  }
  `

