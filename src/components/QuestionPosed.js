import React from "react"
import CustomFluidImage from './CustomFluidImage'
import QuestionModal from "./QuestionModal"
// import ResponsiveDialog from '../components/ResponsiveDialog'
import DarkBlueRoundedButton from './DarkBlueRoundedButton'
import DarkBlueRoundedOutlineButton from './DarkBlueRoundedOutlineButton'
import { removeParagraphsTags, processHtml } from '../utils/displayUtils'
import VideoFullScreenWidget from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'
import styled from 'styled-components'
import theme, { sm, md, lg, xl } from '../theme'
import { dogName } from '../WebsiteConstants'

import {replaceDogName, getCssDisplayState } from '../utils/displayUtils'

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

const ResponseAdditionalTextStyle = styled.div`
   width: 556px;
    height: 117px;
    font-family: ${theme.typography.fontFamily};
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #003087;
`

const QuestionTextStyle = styled.div`
  font-size: 2.9375rem;
  line-height: 1.15;
  text-align: left;
  letter-spacing: -0.47px;
  color: #003087;
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-weight: 600;
  height: 70px;
  width: 578px;
`

const QuestionButtonStyle = styled.div`
  height: 49px;
  width: 82px;
  background-color: #003087;
  border-radius: 25px;
`

const QuestionPosed = ({currentCaseStudySlideData, currentSlidePosition, onClickHandler}) => {

    const { questionText, additionalText, videoText1, buttonLinks, videoUrl1, videoThumbName1 } = currentCaseStudySlideData

    const htmlQuestionText =  { __html: questionText}      
    const htmlVideoText1 =  { __html: videoText1}   
    const htmlAdditionalText =  { __html: removeParagraphsTags(additionalText)}   
    
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'flex-start', minHeight:'100vh',width:'100%'}}>
           
            <div style={{fontFamily:theme.overrides.MuiTypography.h1.fontFamily,fontWeight:'700',fontSize:'2rem',marginBottom:'2rem'}} dangerouslySetInnerHTML={htmlQuestionText}></div>
            <div style={{fontFamily:theme.typography.fontFamily,fontWeight:'400',fontSize:'0.75rem',letterSpacing:'0.01rem'}} dangerouslySetInnerHTML={htmlAdditionalText}></div>
            {/* <div style={{fontFamily:'Poppins',fontWeight:'200',fontSize:'0.9rem'}} dangerouslySetInnerHTML={<BulletsHtmlText bullets={bullets} />}></div>  */}
            
            {( ((buttonLinks !== undefined && buttonLinks.length > 1 && buttonLinks[1].title !== undefined && buttonLinks[1].title !== '' )) ? 
            (<div>
            <DarkBlueRoundedButton buttonText={buttonLinks[0].title} to={buttonLinks[0].url} onClickHandler={onClickHandler}/>
            <DarkBlueRoundedButton buttonText={buttonLinks[1].title} to={buttonLinks[1].url} onClickHandler={onClickHandler}/>
          
            </div>) : '')}

            {( ((buttonLinks !== undefined && buttonLinks.length > 2 && buttonLinks[1].title !== undefined && buttonLinks[1].title !== '' )) ? 
            (
            <DarkBlueRoundedButton buttonText={buttonLinks[2].title} to={buttonLinks[2].url} onClickHandler={onClickHandler}/>
            ) : '')}
            
            <div style={{width:'100%'}}>&nbsp;</div> 
        

{/* <VideoSmallWidget videoCaptionText={videoText1} instance={"One"} />
<VideoFullScreenWidget instance={"One"} /> */}
        </div>
    )
}

export default QuestionPosed