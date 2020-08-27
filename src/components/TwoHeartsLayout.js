import SliderHeader from "../components/SliderHeader"
import React from 'react'
import Layout from '../components/layout'
import theme, { sm, md, lg, xl } from '../theme'
import VideoFullScreenWidget, { showFullScreenHeartVideo } from '../components/VideoFullScreenWidget'
import BottomNavigationLink from '../components/BottomNavigationLink'
import { dogName, ownerName, gradeMurmurSteps, cookieKeyNames, tasks, gradeMurmurSlugNames, animationCharacterState } from "../WebsiteConstants"
import Grid from '@material-ui/core/Grid'
import { BottomCenterTaskText } from "./PageParts"
import { stripUneededHtml, replaceDogName } from '../utils/displayUtils'
import styled from 'styled-components'
import SlideVideo from '../components/SlideVideo'

const SlideVideoCard = ({resources, nextStep, itemPointer, dogChoice}) => {
    return (<SlideVideoHolder>
      <SlideVideo resources={resources} nextStep={nextStep} dogChoice={dogChoice} itemPointer={itemPointer}/>
    </SlideVideoHolder>)
}
const SlideVideoHolder = styled.div`
   width: 400px;
   height: 300px;
 
   @media (max-width: ${md}px) {
       width: 100%;
       height: auto;
   }
    @media (max-width: ${sm}px) {
       width: 100%;
       height: auto;
    }
`

const topSectionStyle = {height: '100px',display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyItems: 'stretch'}
const centerInstructionTextStyle = { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
const centerInDivStyle = { display: 'flex', flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}
const bottomCenteredLayoutStyle = { display: 'flex', flexDirection: 'column',justifyContent: 'flex-end', alignItems: 'center',border: '0px solid red',height: '150px'}

const TwoHeartsLayout = ({resources, setCurrentStep, state, dogChoice, setState, moveToNextStep}) => {
    console.log("TwoHeartsLayout")
    //debugger
    //TODO - this is duplicated in grade murmur refactor

    console.log("========= QUESTION_COMPARE_VIDEO_OF_TWO_HEARTS - 2 =============")

   //debugger
    resources.video1.underLargeVideoText = replaceDogName("__DOG_NAME__’s heart",dogChoice)
    resources.video2.underLargeVideoText = "Normal heart"

 
    const nextStep = (videoNum) => {
      
       if (videoNum === 1 && state.videoTwoPlayed === true) {
            console.log("two video watched")
            document.getElementById("compareHeartsBottomRightLink").style.display= "flex"
       } else if (videoNum === 2 && state.videoOnePlayed === true) {
            console.log("two video watched")
            document.getElementById("compareHeartsBottomRightLink").style.display= "flex"
       } else {
            console.log("one video watched")
       }

       if (videoNum === 1) {showFullScreenHeartVideo("One")}
       if (videoNum === 2) {showFullScreenHeartVideo("Two")}

    }

    return (
     <>
        
        <Grid container 
        spacing={0}
        spacing={0}
        justify="center"
        style={{position: 'relative',border: '0px solid black',height: '100vh' }}>
          <Grid item xs={12} sm={12} md={12}  style={{border: '0px solid red'}}>
             
          </Grid>
          <Grid item xs={12} sm={12} md={1}  align="left" style={{border: '0px solid red'}}></Grid>

          <Grid item xs={12} sm={12} md={5}  align="center" style={{border: '0px solid red'}}>
              <div style={{ display: 'flex', 
              flexDirection: 'row',
              alignContent:'center',
              justifyItems:'center',
              alignItems:'center',
               justifyContent:'center', 
                border: '0px solid red',
                width:'100%',
                height: '400px'}}>
                <SlideVideoCard resources={resources} dogChoice={dogChoice} nextStep={nextStep} itemPointer="1"/>
              </div>
          </Grid>

          <Grid item xs={12} sm={12} md={5}   align="center" style={{border: '0px solid red'}}>
              <div style={{ display: 'flex',
               flexDirection: 'row',
               alignContent:'center',
               justifyItems:'center',
               alignItems:'center',
              justifyContent:'center',
              border: '0px solid red',
              width:'100%',
              height: '400px'}}>
                <SlideVideoCard resources={resources} dogChoice={dogChoice} nextStep={nextStep} itemPointer="2"/>
              </div> 
          </Grid>

          <Grid item xs={12} sm={12} md={1}  align="left" style={{border: '0px solid red'}}></Grid>

          <Grid item xs={12} sm={12} md={12}   style={{border: '0px solid red',height: '20%'}}>
                  <div style={bottomCenteredLayoutStyle}>
                    
                      <BottomCenterTaskText>
                          {(resources.instructionsText ? stripUneededHtml(resources.instructionsText)  : '')}
                      </BottomCenterTaskText>
                     
                  </div> 
          </Grid>
        </Grid>

        <div id="compareHeartsBottomRightLink" style={{display:'block'}}>
             <BottomNavigationLink
                  to={"button"}
                  onClick={moveToNextStep}
                  distanceFromSide={"2%"}
                  bottom={"2%"}
                  linkText={"Continue"}
             />
        </div>
         
        <VideoFullScreenWidget videoData1={resources.video1} instance={"One"} /> 
        <VideoFullScreenWidget videoData1={resources.video2} instance={"Two"} /> 

      </>  
    )
}

export default TwoHeartsLayout