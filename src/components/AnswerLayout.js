// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"
import React from "react"
// import ReactPlayer from "react-player"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import StyledArtDirectedBackground from './StyledArtDirectedBackground'
import Transition from 'react-transition-group'
import StyledBackgroundSection from "./BackgroundSection"
//import StyledBackgroundSectionFixed from "../components/StyledBackgroundSectionFixed"
import styled from 'styled-components'
import QuestionResponse from "./QuestionResponse"
import QuestionPosed from "./QuestionPosed"
import SliderHeader from "./SliderHeader"

import FixedSizeVideoWidget from "./FixedSizeVideoWidget"
import { stripUneededHtml, removeParagraphsTags,processField } from "../utils/displayUtils"
import { dogName, heartSteps, tasks, cookieKeyNames } from '../WebsiteConstants'
import soundOffIcon from "../images/noSound.png"
import theme, { sm, md, lg, xl } from '../theme'
import FixedSizeImage from "./FixedSizeImage"
import { DogImageHolder } from '../components/PageParts'


//NB: - useEffect(() - very good reference https://dev.to/spukas/4-ways-to-useeffect-pf6

const AnswerLayout = ({slideData, step, dogChoice, setCurrentStep, currentSlidePosition, navigationLeftHandler, navigationRightHandler}) => {

    let data = slideData.currentCaseStudySlideDataAr[currentSlidePosition]
  
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
      
                {(data.mainImage && data.mainImage !== "" && dogChoice === dogName.DUDLEY)  ? 
                  <DogImageHolder><FixedSizeImage imgName={data.mainImage} height="314px" width="314px"/></DogImageHolder>
                : ''}
                  {(data.mainImage && data.mainImage !== "" && dogChoice === dogName.POPPY)  ? 
                  <DogImageHolder><FixedSizeImage imgName={data.mainImage} height="314px" width="314px"/></DogImageHolder>
                : ''}
                  {(data.mainImage && data.mainImage !== "" && dogChoice === dogName.REGGIE)  ? 
                  <DogImageHolder><FixedSizeImage imgName={data.mainImage} height="314px" width="314px"/></DogImageHolder>
                : ''}

            </Grid>
  
            <Grid item xs={12} sm={5}  align="left" style={{ border: '0px solid red' }}>
              
                <QuestionResponse data={data} onClickHandler={navigationRightHandler} useVideoWidget={data.videoData1 ? true : false} />
              
            </Grid>
  
            <Grid item xs={12} sm={1}  align="left" style={{border: '0px solid red'}}></Grid>
  
          </Grid>
          
      </>
    )
  }

export default AnswerLayout