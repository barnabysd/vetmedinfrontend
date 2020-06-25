import React from "react"
import CustomFluidImage from '../components/CustomFluidImage'
import QuestionModal from "../components/QuestionModal"
// import ResponsiveDialog from '../components/ResponsiveDialog'
import DarkBlueRoundedButton from '../components/DarkBlueRoundedButton'
import DarkBlueRoundedOutlineButton from '../components/DarkBlueRoundedOutlineButton'
import styled from 'styled-components'
import theme, { sm, md, lg, xl } from '../theme'
import { dogName } from '../WebsiteConstants'

import VideoFullScreenWidget from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'

import {replaceDogName, getCssDisplayState, processHtml, removeParagraphsTags } from '../utils/displayUtils'
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
  
    height: 3.438rem;
    font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
    font-size: 2.313rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.15;
    letter-spacing: -0.37px;
    text-align: left;
    color: ${theme.palette.success.main};
    padding-bottom: 1.5rem;
`

const InCorrect = styled.div`

  height: 3.438rem;
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 2.313rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -0.37px;
  text-align: left;
  color: red; 
  padding-bottom: 1.5rem;
`
//${theme.palette.error.main};
const BodyText = styled.div`
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

`

const DividerBlueLine = styled.div`
    width: 35.5rem;
    height: 0;
    border: solid 1px ${theme.palette.topazBlue.main};
  `

const QuestionResponse = ({currentCaseStudySlideData, currentSlidePosition, onClickHandler}) => {

    const { isCorrectAnswer, answerHeader, answerText, videoText1, buttonLinks, videoUrl1, videoThumbName1, answerBodyText } = currentCaseStudySlideData

    const htmlAnswerText =  { __html: removeParagraphsTags(answerText)}      
    const htmlVideoText1 =  { __html: videoText1}   
    const htmlAnswerBodyText =  { __html: answerBodyText}

    const htmlDummyText = { __html: `<p>It is possible that Poppy has had a murmur for quite a while but it either has not been detected, or it has not been recorded. </p>
    <p>It is vital to note the presence of a murmur and the grade on the dog’s clinical record.</p>`}
    
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'flex-start', minHeight:'100vh',width:'100%'}}>
            
            {(isCorrectAnswer === "yes" ? 
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignContent:'flex-start',marginLeft:'-3rem'}}>
                    <CorrectTick /><div>&nbsp;</div><Correct>{answerHeader}</Correct>
                </div>
                : 
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignContent:'flex-start',marginLeft:'-3rem'}}>
                    <InCorrectTick /><div>&nbsp;</div><InCorrect>{answerHeader}</InCorrect>
                </div>
            )}
           
            
            {/* <div style={{fontFamily:'Poppins',fontWeight:'700',fontSize:'1.2rem'}} dangerouslySetInnerHTML={htmlAnswerText}></div> */}
            <BodyText dangerouslySetInnerHTML={htmlAnswerText} />
            { answerBodyText ? <BodyTextSmall dangerouslySetInnerHTML={htmlAnswerBodyText} /> : <BodyTextSmall dangerouslySetInnerHTML={htmlDummyText} />}
          
            {( (isCorrectAnswer === "no" && (buttonLinks !== undefined && buttonLinks.length > 1 && buttonLinks[1].title !== undefined && buttonLinks[1].title !== '' )) ? 
            (<div><DarkBlueRoundedButton buttonText={buttonLinks[0].title} to={buttonLinks[0].url} onClickHandler={onClickHandler}/>
            <DarkBlueRoundedOutlineButton buttonText={buttonLinks[1].title} to={buttonLinks[1].url} onClickHandler={onClickHandler}/></div>) : '')}
            
            <DividerBlueLine />
            <div>&nbsp;</div>

            <VideoSmallWidget videoCaptionText={videoText1} instance={"One"} />
            <VideoFullScreenWidget instance={"One"} />

            {/* <QuestionModal /> */}
            {/* <ResponsiveDialog /> */}
            
        </div>
    )
}

export default QuestionResponse