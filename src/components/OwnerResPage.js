

import React, { useRef, useEffect, createRef } from "react"
import styled from "styled-components"
import CustomFluidImage from "../components/CustomFluidImage"
import {
  processHtml,
  removeParagraphsTags,
  processLink,
  replaceDogName,
  replaceOwnerName,
  getCssDisplayState
} from "../utils/displayUtils";
import WebsiteLink, { buttonStyleType } from "../components/WebsiteLink"
import { withCookies, Cookies, useCookies } from "react-cookie"
import { useCallback, useState, useDebugValue, forceUpdate } from "react"

import TaskSummaryTable from "../components/TaskSummaryTable"

import theme, { sm, md, lg, xl } from "../theme"
import { dogName, ownerName, ownerResponseSteps } from "../WebsiteConstants"

import VideoFullScreenWidget from "../components/VideoFullScreenWidget"
import VideoSmallWidget from "../components/VideoSmallWidget"

import BottomNavigationLink from "../components/BottomNavigationLink"
import QuestionResponse from '../components/QuestionResponse'

import { PageSection ,LeftPageSection, OwnerImage, RightPageSection, OwnerImageCloseUp} from '../components/PageParts'
import { setConstantValue } from "typescript"
import {TimelineMax} from "gsap"


const Quotes = styled.div`
  position:absolute;
  left: 12px;
  top: 30px;
  width: 24px;
  height: 17.2px;
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 4rem;
  background-color: transparent;
  color: white;
`

const QuoteDot = styled.div`
  position:absolute;
  left: 22px;
  top: -33px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: solid 4px ${theme.palette.cloudBlue.main};
  background-color: ${theme.palette.deminBlue.main};
`
const QuoteDotRight = styled.div`
  position:absolute;
  left: 583px;
    top: 165px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: solid 4px ${theme.palette.cloudBlue.main};
  background-color: ${theme.palette.deminBlue.main};
  
`


const QuoteBox = styled.div`
  position: relative;
  padding: 1.5rem;
  box-shadow: 0 8px 12px 0 rgba(15, 87, 159, 0.2);
  border-radius: 1rem 1rem 1rem 0rem;
  background-color: white;
`
const QuoteBoxBodyText = styled.div`
  width: 616px;
 
  font-family: ${theme.typography.fontFamily};
  font-size: 29px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.29px;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
  padding-bottom: 2rem;
`
const QuoteBoxBodySmallText = styled.div`
  width: 616px;
  height: 25px;
  font-family: ${theme.typography.fontFamily};
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.palette.raven50.main};
`
// step 2

const OwnerResponseHeaderText = styled.div`
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  width: 691px;
  font-size: 47px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -0.47px;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
  margin-bottom: 1.5rem;
`

const OwnerResponseBox = styled.div`
  position: relative;
  width: 691px;
  padding: 1.5rem;
  padding-top: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 1rem 1rem 1rem 0rem;
  background-color: ${theme.palette.skyBlue.main};
  
  -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none; 
  cursor: pointer;
  /* &[data-active=true] div {
      display: none; 
  } */
`

const OwnerResponseDarkBlueDot = styled.div`
  position: absolute;
  left: 1rem;
  top: 1.3rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: solid 1px #001d5f;
  background-color: #001d5f;
`
const OwnerResponseDarkBlueDotSelected = styled(OwnerResponseDarkBlueDot)`
  background-color: ${theme.palette.midnightBlue.main};
`
const OwnerResponseBodyText = styled.div`
  width: 580px;
 
  font-family: ${theme.typography.fontFamily};
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  padding-left: 2rem;
  color: ${theme.palette.midnightBlue.main};
  & strong {
    font-weight: 600;
  }
  & b {
    font-weight: 600;
  }
`

const OwnerResponseBodyTextSelected = styled(OwnerResponseBodyText)`
  color: white;
`

const OrangeDotSmall = styled.div`

  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${theme.palette.peachCobbler.main};
  /* &[data-active=true] {
    display: block;
  } */
`

// Correct 

// TODO: - share these with other pages

// const PageSection = styled.div.attrs((props) => ({ id: props.id, style: props.style }))`
//   flex-direction:row;
//   width:100%;
//   margin:auto;
//   @media (max-width: ${md}px) {
//       width: 100%;
//       flex-direction:column;
//       align-items:center;
//   }
// `
// const LeftPageSection = styled.div.attrs((props) => ({ id: props.id }))`
//   display:flex;
//   width:50%;
//   height:100vh;
//   flex-direction:column;
//   align-items:flex-end;
//   justify-content:center;
//   @media (max-width: ${md}px) {
//       width: 100%;
//       align-items:center;
//       height: 10%;
//   }
// `
// const RightPageSection = styled.div.attrs((props) => ({ id: props.id }))`
//   display:flex;
//   width:50%;
//   height:100vh;
//   flex-direction:column;
//   align-items:flex-start;
//   justify-content:center;
//   @media (max-width: ${md}px) {
//       width: 100%; 
//       height: 10%;
//       margin-bottom: 100px;
//   }
// `

// const OwnerResPage = ({id, style, dogChoice, resources, step, setCurrentStep }) => {
//   return (<div>fff</div>)
// }

const OwnerResPage = ({id, style, dogChoice, resources, step, setCurrentStep }) => {

  const optionBoxes = ["option1","option2","option3","option4","option5"]

  console.log(resources)

  const OwnerResponseOptionBox = ({idNum,optionText,selectOption}) => {
    const id = "option" + idNum
    const idDot= "optionOrangeDot" + idNum
    const optionTextHtml = {__html:removeParagraphsTags(
      replaceDogName(optionText, 
        dogChoice)
    )} 
    return (
        <OwnerResponseBox id={id} data-active={false} onClick={selectOption}>
        <OwnerResponseDarkBlueDot>
          <span className="orange-dot" id={idDot} style={{display:'none'}}><OrangeDotSmall /></span>
        </OwnerResponseDarkBlueDot> 
        <OwnerResponseBodyText dangerouslySetInnerHTML={optionTextHtml}>
        </OwnerResponseBodyText>
      </OwnerResponseBox>
    )
  }

  const checkAnswer = () => {
    //debugger
    let correctAnswerPointer = -1
    if (resources.field_optioniscorrect1 && resources.field_optioniscorrect1 === "yes") { correctAnswerPointer = 1}
    if (resources.field_optioniscorrect2 && resources.field_optioniscorrect2 === "yes") { correctAnswerPointer = 2}
    if (resources.field_optioniscorrect3 && resources.field_optioniscorrect3 === "yes") { correctAnswerPointer = 3}
    if (resources.field_optioniscorrect4 && resources.field_optioniscorrect4 === "yes") { correctAnswerPointer = 4}
    if (resources.field_optioniscorrect5 && resources.field_optioniscorrect5 === "yes") { correctAnswerPointer = 5}
    if (resources.field_optioniscorrect6 && resources.field_optioniscorrect6 === "yes") { correctAnswerPointer = 6}

    let foundCorrectAnswer = false
    for (let i = 0; i < optionBoxes.length; i++) {
      if (document.getElementById("option" + i)) { 
        const elem = document.getElementById("option" + i)
        console.log("(i)",(i))
        console.log("correctAnswerPointer",correctAnswerPointer)
        if (elem.getAttribute("data-active") == "true") {console.log("TRUE")}
        if (elem.getAttribute("data-active") == "true" && i === correctAnswerPointer) {
          console.log("CORRECT")
          foundCorrectAnswer = true
          break
        } 
      }
    }

    if (foundCorrectAnswer) {
      setCurrentStep(ownerResponseSteps.CORRECT_ANSWER)
    } else {
      console.log("INCORRECT")
      setCurrentStep(ownerResponseSteps.INCORRECT_ANSWER)
    }
    
  }

  const setHighLightOff = (elem) => {
    elem.style.backgroundColor = theme.palette.skyBlue.main
    elem.style.color = theme.palette.midnightBlue.main
    elem.setAttribute("data-active",false)
    const dotElements = document.getElementsByClassName("orange-dot")
    for (let i = 0; i < dotElements.length; i++) {
      dotElements[i].style.display = 'none'
    }
  }
  const setHighLightOn = (elem) => {
      elem.style.backgroundColor = theme.palette.deminBlue.main
      elem.style.color = theme.palette.midnightBlue.main
      elem.setAttribute("data-active",true)
      const dotId = "optionOrangeDot" + (elem.id).replace(/option/,'')
      document.getElementById(dotId).style.display = 'flex'
  }

  
  const selectOption = (e) => {
        if (e.currentTarget["data-active"] === true) {
            setHighLightOff(e.currentTarget)  
        } else {
          for (let i = 0; i < optionBoxes.length; i++) {
            if (document.getElementById("option" + i) ) { 
              setHighLightOff(document.getElementById("option" + i)) 
            }
          }
          setHighLightOn(e.currentTarget) 
        }
  }

  if (step === ownerResponseSteps.CORRECT_ANSWER || step === ownerResponseSteps.INCORRECT_ANSWER) {
        console.log("========= CORRECT_ANSWER OR INCORRECT_ANSWER")
        //TODO: map fields
        const currentCaseStudySlideData = resources

        return (
          
          <PageSection id={id} style={style}>
            <LeftPageSection id="summaryImage">
                <OwnerImage dogChoice={dogChoice} />
            </LeftPageSection>
      
            <RightPageSection id="summaryText">

              <QuestionResponse currentCaseStudySlideData={currentCaseStudySlideData} 
                  currentSlidePosition={0} 
                  onClickHandler={setCurrentStep} 
                  onClickHandlers={[setCurrentStep]}
                  onClickHandlersParams={[ownerResponseSteps.QUESTION_POSED]}
                  useBigVideoWidget={true} 
              />

              {step === ownerResponseSteps.CORRECT_ANSWER && currentCaseStudySlideData.continueLink ? (
                <BottomNavigationLink
                  to={processLink(resources.continueLink.url)}
                  distanceFromSide={"2%"}
                  bottom={"2%"}
                  linkText={resources.continueLink.title}
                />
              ) : (
                ""
              )}
              
            </RightPageSection>
      
            <VideoFullScreenWidget />
          </PageSection>
        
        )

      ///////////////

     }else if (step === ownerResponseSteps.QUESTION_POSED) {
       console.log("========= QUESTION_POSED")
    return (
      
      <PageSection id={id} style={style}>
        <LeftPageSection id="summaryImage">
             <OwnerImageCloseUp dogChoice={dogChoice} /> 
        </LeftPageSection>
  
        <RightPageSection id="summaryText">
            <OwnerResponseHeaderText>
                {removeParagraphsTags(replaceOwnerName(resources.field_questiontext.processed,dogChoice))}
            </OwnerResponseHeaderText>

            {/* <div id="optionsHolder"> */}
         
            { resources.field_optionsbodytext1 ? <OwnerResponseOptionBox idNum={"1"} selectOption={selectOption} optionText={resources.field_optionsbodytext1.processed} /> :''}
            { resources.field_optionsbodytext2 ? <OwnerResponseOptionBox idNum={"2"} selectOption={selectOption} optionText={resources.field_optionsbodytext2.processed} /> :''}
            { resources.field_optionsbodytext3 ? <OwnerResponseOptionBox idNum={"3"} selectOption={selectOption} optionText={resources.field_optionsbodytext3.processed} /> :''}
            { resources.field_optionsbodytext4 ? <OwnerResponseOptionBox idNum={"4"} selectOption={selectOption} optionText={resources.field_optionsbodytext4.processed} /> :''}
            { resources.field_optionsbodytext5 ? <OwnerResponseOptionBox idNum={"5"} selectOption={selectOption} optionText={resources.field_optionsbodytext5.processed} /> :''}

            {/* </div> */}

            <BottomNavigationLink
              onClick={checkAnswer}
              to="button"
              distanceFromSide={"2%"}
              bottom={"2%"}
              linkText={"Continue"}
            />
          
        </RightPageSection>
  
        <VideoFullScreenWidget />
      </PageSection>
    
    )

  //////////////

}else if (step === ownerResponseSteps.SECTION_INTRO) {
  console.log("=========== SECTION INTRO ") 

    const setStepOwnerQuestion = () => {
          setCurrentStep(ownerResponseSteps.QUESTION_POSED_BY_OWNER)
    }

    useEffect(() => {
      switch (step){
        case ownerResponseSteps.SECTION_INTRO:
             console.log("SECTION_INTRO")
             const action = new TimelineMax().to("#intro", 3, {delay:2,autoAlpha:0,repeat:0, onComplete: setStepOwnerQuestion})
             break;
        default:
            break;
      }
     })
     
     return (
        <PageSection id={"intro"} style={style}>
          <LeftPageSection id="sectioIntroImage">
              <OwnerImageCloseUp dogChoice={dogChoice} />
          </LeftPageSection>

          <RightPageSection id="sectioIntroText">
             <OwnerResponseHeaderText>
               {replaceDogName("Let’s talk to Poppy’s owner about treatment options",dogChoice)}
              {/* {field_headertext ? 
              (removeParagraphsTags(replaceOwnerName(replaceDogName(resources.field_headertext.processed ? resources.field_headertext.processed 
              : resources.field_headertext,dogChoice),dogChoice))) : ''}  */}
            </OwnerResponseHeaderText>

            {/* <BottomNavigationLink
                onClick={setStepOwnerQuestion}
                to={"button"}
                distanceFromSide={"2%"}
                bottom={"2%"}
                linkText={'Continue'}
              /> */}

          </RightPageSection>

        </PageSection>
      )
      //direction={buttonStyleType.FORWARD_NORMAL_LINK}

   }else if (step === ownerResponseSteps.QUESTION_POSED_BY_OWNER) {
    console.log("=========== QUESTION_POSED_BY_OWNER ") 
       const setStepQuestionPosed = (e) => {
          e.preventDefault()
          //const test = "" + ownerResponseSteps
          console.log("setStepQuestionPosed = ",ownerResponseSteps.QUESTION_POSED)
          //e.stopPropogation()
          setCurrentStep(ownerResponseSteps.QUESTION_POSED)
       }
       
       return (
          <PageSection id={id} style={style}>
            <LeftPageSection id="summaryImage">
                <OwnerImageCloseUp dogChoice={dogChoice} />
            </LeftPageSection>

            <RightPageSection id="summaryText">
              <QuoteBox>
                <QuoteDot>
                  <Quotes>“</Quotes>
                </QuoteDot>
                <QuoteDotRight>
                  <Quotes>”</Quotes>
                </QuoteDotRight>
                <QuoteBoxBodyText>
                  {processHtml(
                    replaceDogName(resources.field_headertext, 
                      dogChoice)
                  )}
                </QuoteBoxBodyText>
                <QuoteBoxBodySmallText>
                  {processHtml(
                    replaceOwnerName(
                      (resources.field_additionalbodytext ? resources.field_additionalbodytext.processed : ''),
                      dogChoice
                    )
                  )}
                </QuoteBoxBodySmallText>
                
              </QuoteBox>
              
              <BottomNavigationLink
                  onClick={setStepQuestionPosed}
                  to={"button"}
                  distanceFromSide={"2%"}
                  bottom={"2%"}
                  
                  linkText={(resources.field_continuelink ? resources.field_continuelink.title : 'Continue') }
                />

            </RightPageSection>

            <VideoFullScreenWidget />

          </PageSection>
        )
        //direction={buttonStyleType.FORWARD_NORMAL_LINK}
    } else {
      return (<div>no step</div>)
    }
}

export default OwnerResPage


