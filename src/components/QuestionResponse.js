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

import {replaceDogName, getCssDisplayState, stripUneededHtml, removeParagraphsTags,makeSlugNameIntoHtmlId, processField } from '../utils/displayUtils'
import CorrectTick from "../components/CorrectTick"
import InCorrectTick from "../components/InCorrectTick"

const newTheme = {
    palette :{
        orange: {
            main: '#ff0000'
        }
    }
}

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
    padding-left: 1.1rem;
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
  padding-left: 1.1rem;
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
  padding-bottom: 0rem;
  p {
    font-family: ${theme.typography.fontFamily};
    font-size: 1.375rem;
    font-weight: 600; 
  }
    @media (max-width: ${lg}px) {
        width: 100%;
   
    }
     @media (max-width: ${md}px) {
        width: 100%;
   
    }
    @media (max-width: ${sm}px) {
        width: 100%;
    }
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
  padding-left: 6.25rem;
  padding-bottom: 0rem;
  & li {
    font-size: 0.938rem;
  }
  & ul {
    margin-top: 1rem;
    font-size: 0.938rem;
  }
  & p {
    font-family: ${theme.typography.fontFamily};
    font-size: 0.938rem;
    font-weight: normal;
  }
    @media (max-width: ${lg}px) {
        width: 100%;
   
    }
     @media (max-width: ${md}px) {
        width: 100%;
   
    }
    @media (max-width: ${sm}px) {
        width: 100%;
    }

`
const QuestionResponseButtonHolder = styled.div `
    max-width:568px;
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

const QuestionResponse = ({data, onClickHandler = null, onClickHandlers = [], onClickHandlersParams = [],useVideoWidget = true, useBigVideoWidget = false, dogChoice = dogName.DUDLEY}) => {
    console.log(data)
    if (!data) return 'no data'

    debugger

    const { isCorrectAnswer, answerHeader, answerText, videoData1, videoText1,videoNarrator1,videoDuration1, buttonLinks, videoUrl1, videoThumbnail1, answerBodyText, additionalText } = data
    const htmlAnswerText = processField(answerText,dogChoice,true)    
    const htmlAdditionalText = processField((additionalText ? additionalText : answerBodyText),dogChoice,true)
    const indentButtons = ((additionalText || answerBodyText) && (additionalText !== "" || answerBodyText !== "" )) ? '2.6rem' : '0rem'
   
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'flex-start', minHeight:'100vh',width:'100%'}}>
            
            {(isCorrectAnswer === "yes" ? 
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignContent:'flex-start',marginLeft:'-4rem'}}>
                    <CorrectTick /><Correct>{answerHeader ? answerHeader : "Correct"}</Correct>
                </div>
                : 
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignContent:'flex-start',marginLeft:'-4rem'}}>
                    <InCorrectTick /><InCorrect>{answerHeader ? answerHeader : "Incorrect"}</InCorrect>
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
                    && buttonLinks[0].buttonType && buttonLinks[0].buttonType === legacyButtonTypes.DARK_BLUE_OUTLINE_ROUNDED )) ? 
                    <div style={{width:'250px'}}>
                        <DarkBlueRoundedOutlineButton  id={buttonLinks[0].id ? buttonLinks[0].id : makeSlugNameIntoHtmlId(buttonLinks[0].url)} buttonText={buttonLinks[0].title} to={buttonLinks[0].url} onClickHandler={buttonLinks[0].onClickHandler}/>
                    </div> : '')
                    }
                    
                    {/*TODO - refactor this to above */}

                    {/* {( (isCorrectAnswer === "no" && (buttonLinks !== undefined && buttonLinks.length > 0 && buttonLinks[0].title !== undefined && buttonLinks[0].title !== '' 
                    && (buttonLinks[0].title).indexOf("Listen") !== -1   )) ? 
                    <div><DarkBlueRoundedOutlineButton  id={buttonLinks[0].id ? buttonLinks[0].id : makeSlugNameIntoHtmlId(buttonLinks[0].url)} buttonText={buttonLinks[0].title} to={buttonLinks[0].url} onClickHandler={onClickHandler}/></div> : '')} */}

                    {( (isCorrectAnswer === "no" && (buttonLinks !== undefined && buttonLinks.length > 0 && buttonLinks[0].title !== undefined && buttonLinks[0].title !== '' 
                    && !buttonLinks[0].buttonType )) ? 
                    <div><DarkBlueRoundedButton  id={buttonLinks[0].id ? buttonLinks[0].id : makeSlugNameIntoHtmlId(buttonLinks[0].url)} buttonText={buttonLinks[0].title} to={buttonLinks[0].url} onClickHandler={onClickHandler}/></div> : '')}

                    {( (isCorrectAnswer === "no" && (buttonLinks !== undefined && buttonLinks.length > 1 && buttonLinks[1].title !== undefined && buttonLinks[1].title !== '' )) ? 
                    <div><DarkBlueRoundedOutlineButton id={buttonLinks[1].id ? buttonLinks[1].id : makeSlugNameIntoHtmlId(buttonLinks[1].url)} buttonText={buttonLinks[1].title} to={buttonLinks[1].url} onClickHandler={onClickHandler}/></div> : '')}

            </QuestionResponseButtonHolder>
            { useVideoWidget && useBigVideoWidget === false ? <DividerBlueLine /> : '' }
            <div>&nbsp;</div>
            { useVideoWidget && useBigVideoWidget ? <VideoBigWidget videoData1={videoData1} videoThumbnail={videoThumbnail1} videoCaptionText={videoText1} videoNarrator={videoNarrator1} videoDuration={videoDuration1} instance={"One"} /> : ''}
            { useVideoWidget && useBigVideoWidget === false ? <VideoSmallWidget videoData1={videoData1} videoThumbnail={videoThumbnail1} videoCaptionText={videoText1} instance={"One"} /> : ''}

            {/* <VideoFullScreenWidget videoData1={videoData1} instance={"One"} />  */}
            
        </div>
    )
}

export default QuestionResponse