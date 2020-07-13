import React from "react"
import CustomFluidImage from '../components/CustomFluidImage'
//import QuestionModal from "../components/QuestionModal"
// import ResponsiveDialog from '../components/ResponsiveDialog'
import DarkBlueRoundedButton from '../components/DarkBlueRoundedButton'
import DarkBlueRoundedOutlineButton from '../components/DarkBlueRoundedOutlineButton'
import styled from 'styled-components'
import theme, { sm, md, lg, xl } from '../theme'
import { dogName, legacyButtonTypes } from '../WebsiteConstants'

import VideoFullScreenWidget from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'
import VideoBigWidget from '../components/VideoBigWidget'

import {replaceDogName, getCssDisplayState, stripUneededHtml, removeParagraphsTags,makeSlugNameIntoHtmlId } from '../utils/displayUtils'
import CorrectTick from "../components/CorrectTick"
import InCorrectTick from "../components/InCorrectTick"

const newTheme = {
    palette :{
        orange: {
            main: '#ff0000'
        }
    }
}

// const BulletsHtmlText = (items) => {
//     let counter = 0
//     return items.map((bulletText) => <li key={counter++}>{bulletText}</li>)
// }

// const ResponseAdditionalTextStyle = styled.div`
//    width: 556px;
//     height: 117px;
//     font-family: ${theme.typography.fontFamily};
//     font-size: 15px;
//     font-weight: normal;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: 1.6;
//     letter-spacing: normal;
//     text-align: left;
//     color: #003087;
// `

// const QuestionTextStyle = styled.div`
//   font-size: 2.9375rem;
//   line-height: 1.15;
//   text-align: left;
//   letter-spacing: -0.47px;
//   color: #003087;
//   font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
//   font-weight: 600;
//   height: 70px;
//   width: 578px;
// `

// const QuestionButtonStyle = styled.div`
//   height: 49px;
//   width: 82px;
//   background-color: #003087;
//   border-radius: 25px;
// `

const Correct = styled.div`
  
width:568px;
    font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
    font-size: 2.313rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.15;
    letter-spacing: -0.37px;
    text-align: left;
    color: ${theme.palette.success.main};
    padding-left:3.5rem;
    padding-bottom: 1.5rem;
`

const InCorrect = styled.div`

width:568px;
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 2.313rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -0.37px;
  padding-left:3.5rem;
  text-align: left;
  color: red; 
  padding-bottom: 1.5rem;
`
//${theme.palette.error.main};
const BodyText = styled.div`
width:568px;
  font-family: ${theme.typography.fontFamily};
  font-size: 1.375rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
  padding-bottom: 1.5rem;
  `
const BodyTextSmall = styled.div` 
width:568px;
  font-family: ${theme.typography.fontFamily};
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
  padding-left: 3rem;
  padding-bottom: 1.5rem;
  & li {
    font-size: 0.938rem;
  }
  & ul {
    margin-top: 1rem;
    font-size: 0.938rem;
  }

`
const QuestionResponseButtonHolder = styled.div `
    width:568px;
    padding-left:2.6rem;
    display: flex;
    justify-content: flex-start;
`
const DividerBlueLine = styled.div`
    width:568px;
    width: 35.5rem;
    height: 0;
    border: solid 1px ${theme.palette.topazBlue.main};
  `


const QuestionResponse = ({currentCaseStudySlideData, currentSlidePosition, onClickHandler = null, onClickHandlers = [], onClickHandlersParams = [],useVideoWidget = true, useBigVideoWidget = false, dogChoice = dogName.DUDLEY}) => {
    console.log(currentCaseStudySlideData)
    if (!currentCaseStudySlideData) return 'no currentCaseStudySlideData data'

    const { isCorrectAnswer, answerHeader, answerText, videoText1,videoNarrator1,videoDuration1, buttonLinks, videoUrl1, videoThumbName1, answerBodyText, additionalText } = currentCaseStudySlideData

    const htmlAnswerText =  { __html: answerText ? removeParagraphsTags(answerText.processed ? answerText.processed : answerText) : "no answer text" }      
    const htmlVideoText1 =  { __html: videoText1}   
    const htmlAnswerBodyText =  { __html: answerBodyText}

    const htmlAdditionalText = { __html: additionalText ? additionalText : answerBodyText}

    const indentButtons = ((additionalText || answerBodyText) && (additionalText !== "" || answerBodyText !== "" )) ? '2.6rem' : '0rem'
    

    const onClickButton1 = (e) => {  
        if (onClickHandlers.length > 0) {
            e.preventDefault()
            const callFunction = onClickHandlers[0]
            callFunction(onClickHandlersParams[0])
        } else if (onClickHandler !== null) {
            e.preventDefault()
            const callFunction = onClickHandler
            callFunction()
        } else {
            console.log("is internal page link")
        }
    }
    const onClickButton2 = (e) => {
        if (onClickHandlers.length > 1) {
            e.preventDefault()
            const callFunction = onClickHandlers[1]
            callFunction(onClickHandlersParams[1])
        } else {
            console.log("button 2 - is internal page link")
        }
    }
    const onClickButton3 = (e) => {
        if (onClickHandlers.length > 2) {
            e.preventDefault()
            const callFunction = onClickHandlers[2]
            callFunction(onClickHandlersParams[2])
        } else {
            console.log("button 3 - is internal page link")
        }
    }
    const onClickButton4 = (e) => {
        if (onClickHandlers.length > 3) {
            e.preventDefault()
            const callFunction = onClickHandlers[3]
            callFunction(onClickHandlersParams[3])
        } else {
            console.log("button 4 - is internal page link")
        }
    }
    const onClickButton5 = (e) => {
        if (onClickHandlers.length > 4) {
            e.preventDefault()
            const callFunction = onClickHandlers[4]
            callFunction(onClickHandlersParams[4])
        } else {
            console.log("button 5 - is internal page link")
        }
    }

   
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'flex-start', minHeight:'100vh',width:'100%'}}>
            
            {(isCorrectAnswer === "yes" ? 
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignContent:'flex-start',marginLeft:'-7rem'}}>
                    <CorrectTick /><div>&nbsp;&nbsp;&nbsp;&nbsp;</div><Correct>{answerHeader ? answerHeader : "Correct"}</Correct>
                </div>
                : 
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignContent:'flex-start',marginLeft:'-7rem'}}>
                    <InCorrectTick /><div>&nbsp;&nbsp;&nbsp;&nbsp;</div><InCorrect>{answerHeader ? answerHeader : "Incorrect"}</InCorrect>
                </div>
            )}
           
            <BodyText dangerouslySetInnerHTML={htmlAnswerText} />

            { additionalText || answerBodyText ? <BodyTextSmall dangerouslySetInnerHTML={htmlAdditionalText} /> : ''}

            <QuestionResponseButtonHolder style={{paddingLeft: indentButtons}}>

                    {( (isCorrectAnswer === "no" && (buttonLinks !== undefined && buttonLinks.length > 0 && buttonLinks[0].title !== undefined && buttonLinks[0].title !== '' 
                    && buttonLinks[0].buttonType && buttonLinks[0].buttonType === legacyButtonTypes.DARK_BLUE_ROUNDED )) ? 
                    <div style={{width:'250px'}}>
                        <DarkBlueRoundedButton  id={buttonLinks[0].id ? buttonLinks[0].id : makeSlugNameIntoHtmlId(buttonLinks[0].url)} buttonText={buttonLinks[0].title} to={buttonLinks[0].url} onClickHandler={buttonLinks[0].onClickHandler}/>
                    </div> : '')
                    }

                    {( (isCorrectAnswer === "no" && (buttonLinks !== undefined && buttonLinks.length > 0 && buttonLinks[0].title !== undefined && buttonLinks[0].title !== '' 
                    && (buttonLinks[0].title).indexOf("Listen") !== -1   )) ? 
                    <div><DarkBlueRoundedOutlineButton  id={buttonLinks[0].id ? buttonLinks[0].id : makeSlugNameIntoHtmlId(buttonLinks[0].url)} buttonText={buttonLinks[0].title} to={buttonLinks[0].url} onClickHandler={onClickHandler}/></div> : '')}

                    {( (isCorrectAnswer === "no" && (buttonLinks !== undefined && buttonLinks.length > 0 && buttonLinks[0].title !== undefined && buttonLinks[0].title !== '' 
                    && (buttonLinks[0].title).indexOf("Listen") === -1 && !buttonLinks[0].buttonType )) ? 
                    <div><DarkBlueRoundedButton  id={buttonLinks[0].id ? buttonLinks[0].id : makeSlugNameIntoHtmlId(buttonLinks[0].url)} buttonText={buttonLinks[0].title} to={buttonLinks[0].url} onClickHandler={onClickHandler}/></div> : '')}

                    {( (isCorrectAnswer === "no" && (buttonLinks !== undefined && buttonLinks.length > 1 && buttonLinks[1].title !== undefined && buttonLinks[1].title !== '' )) ? 
                    <div><DarkBlueRoundedOutlineButton id={buttonLinks[1].id ? buttonLinks[1].id : makeSlugNameIntoHtmlId(buttonLinks[1].url)} buttonText={buttonLinks[1].title} to={buttonLinks[1].url} onClickHandler={onClickHandler}/></div> : '')}

            </QuestionResponseButtonHolder>
            
            { useVideoWidget ? <DividerBlueLine /> : '' }
            
            <div>&nbsp;</div>

            { useVideoWidget && useBigVideoWidget ? <VideoBigWidget videoCaptionText={videoText1} videoNarrator={videoNarrator1} videoDuration={videoDuration1} instance={"One"} /> : ''}

            { useVideoWidget && useBigVideoWidget === false ? <VideoSmallWidget videoCaptionText={videoText1} instance={"One"} /> : ''}

            <VideoFullScreenWidget instance={"One"} /> 

            {/* <QuestionModal /> */}
            {/* <ResponsiveDialog /> */}
            
        </div>
    )
}

export default QuestionResponse