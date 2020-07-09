import React from "react"
import CustomFluidImage from './CustomFluidImage'
//import QuestionModal from "./QuestionModal"
// import ResponsiveDialog from '../components/ResponsiveDialog'
import DarkBlueRoundedButton from './DarkBlueRoundedButton'
import DarkBlueRoundedOutlineButton from './DarkBlueRoundedOutlineButton'
import { removeParagraphsTags, processHtml } from '../utils/displayUtils'
import VideoFullScreenWidget from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'
import styled from 'styled-components'
import theme, { sm, md, lg, xl } from '../theme'
import { dogName, ownerName, ownerResponseSteps, cookieKeyNames, tasks, slideTypes } from "../WebsiteConstants"
import {replaceDogName, getCssDisplayState, makeSlugNameIntoHtmlId } from '../utils/displayUtils'

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

const QuestionPoseHeader = styled.div`

  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 2.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -0.47px;
  text-align: left;
  padding-bottom:1.5rem;
  color: ${theme.palette.midnightBlue.main};
`

const QuestionPosedBody = styled.div`
    font-family:${theme.typography.fontFamily};
    font-weight:400;
    font-size:0.75rem;
    letter-spacing:0.01rem;
    padding-left:3rem;
`

const QuestionPosed = ({currentCaseStudySlideData, currentSlidePosition, onClickHandler, dogChoice = dogName.DUDLEY }) => {

    const { questionText, additionalText, videoText1, buttonLinks, videoUrl1, videoThumbName1 } = currentCaseStudySlideData

    const htmlQuestionText =  { __html: replaceDogName(questionText.processed ? removeParagraphsTags(questionText.processed) : questionText, dogChoice) }      
    //const htmlVideoText1 =  { __html: videoText1.processed ? videoText1: removeParagraphsTags(videoText1.processed) }   
    const htmlAdditionalText = additionalText ? { __html: replaceDogName(removeParagraphsTags(additionalText, dogChoice))} :  { __html:''}
    
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'flex-start', minHeight:'100vh',width:'100%'}}>
           
            <QuestionPoseHeader dangerouslySetInnerHTML={htmlQuestionText} />

            <QuestionPosedBody dangerouslySetInnerHTML={htmlAdditionalText} />
         
            <div style={{paddingLeft:'2.8rem'}}>
            {( ((buttonLinks !== undefined && buttonLinks.length > 0 && buttonLinks[0].title !== undefined && buttonLinks[0].title !== '' )) ? 
            (<DarkBlueRoundedButton id={buttonLinks[0].id ? buttonLinks[0].id : makeSlugNameIntoHtmlId(buttonLinks[0].url)} buttonText={buttonLinks[0].title} to={buttonLinks[0].url} onClickHandler={onClickHandler}/>) : '')}
            
            {( ((buttonLinks !== undefined && buttonLinks.length > 1 && buttonLinks[1].title !== undefined && buttonLinks[1].title !== '' )) ? 
            (<DarkBlueRoundedButton id={buttonLinks[1].id ? buttonLinks[1].id : makeSlugNameIntoHtmlId(buttonLinks[1].url)} buttonText={buttonLinks[1].title} to={buttonLinks[1].url} onClickHandler={onClickHandler}/>) : '')}

            {( ((buttonLinks !== undefined && buttonLinks.length > 2 && buttonLinks[2].title !== undefined && buttonLinks[2].title !== '' )) ? 
            (<DarkBlueRoundedButton id={buttonLinks[2].id ? buttonLinks[2].id : makeSlugNameIntoHtmlId(buttonLinks[2].url)} buttonText={buttonLinks[2].title} to={buttonLinks[2].url} onClickHandler={onClickHandler}/>) : '')}

            {( ((buttonLinks !== undefined && buttonLinks.length > 3 && buttonLinks[3].title !== undefined && buttonLinks[3].title !== '' )) ? 
            (<DarkBlueRoundedButton id={buttonLinks[3].id ? buttonLinks[3].id : makeSlugNameIntoHtmlId(buttonLinks[3].url)} buttonText={buttonLinks[3].title} to={buttonLinks[3].url} onClickHandler={onClickHandler}/>) : '')}

            {( ((buttonLinks !== undefined && buttonLinks.length > 4 && buttonLinks[4].title !== undefined && buttonLinks[4].title !== '' )) ? 
            (<DarkBlueRoundedButton id={buttonLinks[4].id ? buttonLinks[4].id : makeSlugNameIntoHtmlId(buttonLinks[4].url)} buttonText={buttonLinks[4].title} to={buttonLinks[4].url} onClickHandler={onClickHandler}/>) : '')}

            {( ((buttonLinks !== undefined && buttonLinks.length > 5 && buttonLinks[5].title !== undefined && buttonLinks[5].title !== '' )) ? 
            (<DarkBlueRoundedButton id={buttonLinks[5].id ? buttonLinks[5].id : makeSlugNameIntoHtmlId(buttonLinks[5].url)} buttonText={buttonLinks[5].title} to={buttonLinks[5].url} onClickHandler={onClickHandler}/>) : '')}
            </div>
            
            <div style={{width:'100%'}}>&nbsp;</div> 
        

        </div>
    )
}

export default QuestionPosed