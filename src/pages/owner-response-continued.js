import React, { useRef,useState, useEffect, createRef } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"
import styled from "styled-components"
import theme, { sm, md, lg, xl } from "../theme"
import { dogName, ownerName, ownerResponseSteps, cookieKeyNames } from "../WebsiteConstants"
import { processInternalLink, processHtml, removeParagraphsTags, getSlideData } from '../utils/displayUtils'
import { useCookies } from 'react-cookie'
import QuestionResPage from '../components/OwnerResPage'
import Layout from '../components/layout'
import slides, {ownerResponse_CorrectAnswer,ownerResponse_InCorrectAnswer} from "../api/slideData"

const OwnerResponseContinued = ({data}) => {
        console.log(data)
        const [cookies, setCookie, removeCookie] = useCookies(cookieKeyNames)
        let initialState = { 
            step: ownerResponseSteps.QUESTION_POSED_BY_OWNER, 
        }
    
        const [state, setState] = useState(initialState)
        console.log("=========== step ",state.step)
        console.log("state", state)
        const dogChoice = cookies["dogChoice"] ? cookies["dogChoice"]: dogName.DUDLEY 
        let resources
        const resourcesAr = get(data, 'allNodeQuestion.nodes')
        
        const id = "ownerResponsePage"
        const style = {}

        const setCurrentStep = (step) => {   
            console.log("=========== setCurrentStep - step",step)
            // console.log("state", state)
            setState({...state, step: step})
        }

        if (state.step === ownerResponseSteps.CORRECT_ANSWER) { 
            setCookie("ownerResponseTaskCompleted",true,"/")
        }
        
        let pointer = -1
        switch (state.step) {
          case ownerResponseSteps.QUESTION_POSED_BY_OWNER:
              resources = getSlideData(resourcesAr,"owner-response")
            break
          case ownerResponseSteps.QUESTION_POSED:
              resources = getSlideData(resourcesAr,"owner-response")
            break
            case ownerResponseSteps.CORRECT_ANSWER:
                //TODO - dynamic
              resources = ownerResponse_CorrectAnswer
            break
            case ownerResponseSteps.INCORRECT_ANSWER:
              resources = ownerResponse_InCorrectAnswer
            break
          default:
            return "no crrent slide"
        }
        
        console.log(resources)
        if (!resources) return "resources not found"
        
    return (
        <Layout>
              { state.step === ownerResponseSteps.QUESTION_POSED_BY_OWNER ? <QuestionResPage step={ownerResponseSteps.QUESTION_POSED_BY_OWNER} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} /> : ''}
              { state.step === ownerResponseSteps.QUESTION_POSED ? <QuestionResPage step={ownerResponseSteps.QUESTION_POSED} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep } resources={resources} /> : ''}
              { state.step === ownerResponseSteps.CORRECT_ANSWER ? <QuestionResPage step={ownerResponseSteps.CORRECT_ANSWER} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} /> : ''}
              { state.step === ownerResponseSteps.INCORRECT_ANSWER ? <QuestionResPage step={ownerResponseSteps.INCORRECT_ANSWER} id={id} style={{display: 'flex'}} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} /> : ''}
        </Layout>
    )
}

export default OwnerResponseContinued

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

  }
  `

