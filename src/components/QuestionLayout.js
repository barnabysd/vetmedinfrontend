// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"
import React from "react"
// import ReactPlayer from "react-player"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import StyledArtDirectedBackground from '../components/StyledArtDirectedBackground'
import Transition from 'react-transition-group'
import StyledBackgroundSection from "../components/BackgroundSection"
//import StyledBackgroundSectionFixed from "../components/StyledBackgroundSectionFixed"
import styled from 'styled-components'
import QuestionResponse from "../components/QuestionResponse"
import QuestionPosed from "../components/QuestionPosed"
import SliderHeader from "../components/SliderHeader"
import ResponseVideo from "../components/ResponseVideo"
import FixedSizeVideoWidget from "../components/FixedSizeVideoWidget"
import { stripUneededHtml, removeParagraphsTags,processField } from "../utils/displayUtils"
import { dogName, heartSteps, tasks, cookieKeyNames } from '../WebsiteConstants'
import soundOffIcon from "../images/noSound.png"
import theme, { sm, md, lg, xl } from '../theme'
import FixedSizeImage from "../components/FixedSizeImage"


//NB: - useEffect(() - very good reference https://dev.to/spukas/4-ways-to-useeffect-pf6

const DogVideoHolderBase = styled.div`
  position: absolute;
  left: 20%;
  top: 50px;
`

const DogVideoHolder = styled(DogVideoHolderBase)`
  left: 1%;
  top: 132px;
  @media (max-width: ${md}px) {
      left:0px;
  }
  @media (max-width: ${sm}px) {
      left:-50px;
  }
`

const QuestionLayout = ({slideData, step, dogChoice, setCurrentStep, currentSlidePosition, navigationLeftHandler, navigationRightHandler}) => {

    let currentCaseStudySlideData = slideData.currentCaseStudySlideDataAr[currentSlidePosition]
  
    const ref = React.createRef();
  
    return (
      <>
          <Grid container  
          spacing={0} 
          spacing={0} 
          justify="center"
          alignItems="center"
          style={{border: '0px solid black'}}>
        
            <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>
  
            <Grid item xs={12} sm={5}  align="center" style={{border: '0px solid red'}}>
                {(dogChoice === dogName.DUDLEY) ? 
                   <FixedSizeVideoWidget autoPlay="true" ref={ref} currentCaseStudySlideData={currentCaseStudySlideData} /> 
                : ''}

                {(dogChoice === dogName.POPPY) ? 
                   <FixedSizeVideoWidget autoPlay="true" ref={ref} currentCaseStudySlideData={currentCaseStudySlideData} /> 
                : ''}

                {(dogChoice === dogName.REGGIE) ? 
                   <FixedSizeVideoWidget autoPlay="true" ref={ref} currentCaseStudySlideData={currentCaseStudySlideData} /> 
                : ''}
            </Grid>
  
            <Grid item xs={12} sm={5}  align="left" style={{ border: '0px solid red' }}>
                <QuestionPosed currentCaseStudySlideData={currentCaseStudySlideData} currentSlidePosition={currentSlidePosition} onClickHandler={navigationRightHandler} /> :
            </Grid>
  
            <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>
  
          </Grid>
      </>
    )
  }

export default QuestionLayout