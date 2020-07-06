import React from 'react'
import Layout from '../components/layout'
import CaroGallery, { panels } from '../components/CaroGallery';
import styled from 'styled-components'
import PercentageProgressIndicator from "../components/PercentageProgressIndicator"
import theme, { sm, md, lg, xl } from '../theme'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import { useCallback, useState,  useDebugValue, forceUpdate } from 'react'
import { withCookies, Cookies, useCookies } from 'react-cookie'
import { processLink, processHtml, removeParagraphsTags, getSlideData } from '../utils/displayUtils'

import BottomNavigationLink from '../components/BottomNavigationLink'
import { PageSection ,LeftPageSection, OwnerImage, RightPageSection} from '../components/PageParts'
import { graphql } from 'gatsby'
import get from "lodash/get"
import { dogName, ownerName, gradeMurmurSteps, cookieKeyNames, tasks } from "../WebsiteConstants"
//import QuestionResPage from '../components/OwnerResPage'
import slides, {gradeMurmur_Options, gradeMurmur_CorrectAnswer,gradeMurmur_InCorrectAnswer} from "../api/slideData"

import QuestionResponse from '../components/QuestionResponse'
import VideoFullScreenWidget from '../components/VideoFullScreenWidget'
import { HeaderText, SubtitleText } from '../components/PageParts'

//gradeMurmurSteps

let resources = gradeMurmur_Options

const OptionsHolder = styled.div`
  padding-bottom: 2rem;
  width: 66.063rem;
  height: 20.75rem;
  border: solid 0px #707070;
  background-color: white;
  & button {
    background-color: ${theme.palette.deminBlue.main} !important;
  }
  & .react-multiple-carousel__arrow--right {
    right: calc(4% - 40px) !important;
  }
  & .react-multiple-carousel__arrow--left {
    left: calc(4% - 40px) !important;
  }
`

const GradeMurmur = ({data}) => {

  console.log(data)
  const [cookies, setCookie, removeCookie] = useCookies(cookieKeyNames)
  let initialState = { 
      step: gradeMurmurSteps.QUESTION_POSED, 
  }

  const [state, setState] = useState(initialState)
  console.log("=========== step ",state.step)
  console.log("state", state)
  const dogChoice = cookies["dogChoice"] ? cookies["dogChoice"]: dogName.DUDLEY 
  let resources
  const resourcesAr = get(data, 'allNodeQuestion.nodes')
  
  const setCurrentStep = (step) => {   
      console.log("=========== setCurrentStep - step",step)
      setState({...state, step: step})
  }

  if (state.step === gradeMurmurSteps.CORRECT_ANSWER) { 
      setCookie("gradeMurmurCompleted",true,"/")
  }
  
  switch (state.step) {
    case gradeMurmurSteps.QUESTION_POSED:
        //TODO: make dynamic
        resources = gradeMurmur_Options // getSlideData("grade-the-murmur") === "NO_DATA_FOUND" ? getSlideData("grade-the-murmur") : return NO_DATA_FOUND
      break
    case gradeMurmurSteps.CORRECT_ANSWER:
        //TODO: make dynamic
        resources = gradeMurmur_CorrectAnswer
      break
      case gradeMurmurSteps.INCORRECT_ANSWER:
        //TODO: make dynamic
        resources = gradeMurmur_InCorrectAnswer 
      break
    default:
      return "no current slide"
  }
  
  console.log(resources)
  if (!resources) return "resources not found"

 
  switch (state.step) {
    case gradeMurmurSteps.QUESTION_POSED:
   
        const panelsAr = ["panelRef1","panelRef2","panelRef3","panelRef4","panelRef5","panelRef6"]
        return (
          <Layout>
              <div style={{
                      minHeight: '100vh',
                      width: '100vw',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignContent: 'center',
                      textAlign: 'center',
                      border: '0px solid red'
                  }}>
                  <div>
                      <div style={{
                              position: 'absolute',
                              left: 'calc(50% - 525px)',
                              top: 'calc(50% - 165px)',
                              width: '1057px', 
                              height: '332px',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignContent: 'center',
                              textAlign: 'center',
                              border: '0px solid red'
                      }}>
                          <HeaderText>{resources.field_questiontext}</HeaderText>
                          <SubtitleText>{resources.field_instructionstext.processed}</SubtitleText>
                          <OptionsHolder style={{width: '1057px', height: '362px',backgroundColor:'transparent'}}>
                              <CaroGallery style={{width: '1057px', height: '362px'}} setCurrentStep={setCurrentStep} resources={resources} panelNamesAr={panelsAr} />
                          </OptionsHolder>
                      </div>
                  </div>
              </div>
  
              <BottomNavigationLink to="/owner-and-dog-detail-slide/" distanceFromSide={"2%"} bottom={"2%"} linkText={"Listen Again"} direction="back"/>
  
          </Layout>
          )

      break
    case gradeMurmurSteps.CORRECT_ANSWER:
    case gradeMurmurSteps.INCORRECT_ANSWER:
      
  
          console.log("========= CORRECT_ANSWER OR INCORRECT_ANSWER")
          //TODO: map fields
          const correctData = gradeMurmur_CorrectAnswer
          const incorrectData = gradeMurmur_InCorrectAnswer
          const currentCaseStudySlideData = (state.step === gradeMurmurSteps.CORRECT_ANSWER ? correctData : incorrectData)

          return (
            <Layout>
            <PageSection id={"gradeTheMurmur"} style={{}}>
              <LeftPageSection id="summaryImage">
                  <OwnerImage dogChoice={dogChoice} />
              </LeftPageSection>

              <RightPageSection id="summaryText">

                <QuestionResponse currentCaseStudySlideData={currentCaseStudySlideData} 
                    currentSlidePosition={0} 
                    onClickHandler={setCurrentStep} 
                    onClickHandlers={[setCurrentStep]}
                    onClickHandlersParams={[gradeMurmurSteps.QUESTION_POSED]}
                    useBigVideoWidget={false} 
                />

                {state.step === gradeMurmurSteps.CORRECT_ANSWER && currentCaseStudySlideData.continueLink ? (
                  <BottomNavigationLink
                    to={processLink("/murmur-treatment/")}
                    distanceFromSide={"2%"}
                    bottom={"2%"}
                    linkText={resources.continueLink.title}
                  />
                ) : (
                  ""
                )}
                
              </RightPageSection>

              
            </PageSection>
            </Layout>

        )
      break
    default:
      return "no current slide"
  }

  
}

export default GradeMurmur

export const pageQuery = graphql`
  {
    allNodeQuestion {
        nodes {
        field_optionsheader1
        field_optionsbodytext1 {
            processed
        }
        field_optionlink1 {
            title
            uri
        }
        field_optioniscorrect1
        field_buttonlinks {
            title
            uri
        }
        field_backlink {
            title
            uri
        }
        }
    }
  }
  `