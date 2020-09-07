import React, {useRef, useEffect, createRef} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';
import styled from 'styled-components'
import CrossSvg from "../svgReactLoader/xray/red_cross.svg"
import CustomFluidImage from '../components/CustomFluidImage'
import Grid from '@material-ui/core/Grid'
import { render } from 'react-dom'
import {TweenLite, TimelineMax, Linear} from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { stripUneededHtml, replaceOwnerName } from '../utils/displayUtils'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import DebugHelper from '../components/DebugHelper'
import { withCookies, Cookies, useCookies } from 'react-cookie'
import { useCallback, useState,  useDebugValue, forceUpdate } from 'react'
import TaskSummaryTableWidget from '../components/TaskSummaryTableWidget'
import theme, { sm, md, lg, xl } from '../theme'
import { dogName, tasks, xraySlides, ultrasoundSteps, cookieKeyNames, animationCharacterState, ultrasoundSlugNames } from '../WebsiteConstants'
import VideoFullScreenWidget, { showFullScreenVideo } from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'
import {replaceDogName, getCssDisplayState, getSlideData, displayDog } from '../utils/displayUtils'
import BottomNavigationLink from '../components/BottomNavigationLink'
import HintSwitcher from '../components/HintSwitcher'
import { LeftPageSection, RightPageSection, PageSection, WhiteDotButton} from '../components/PageParts'
import { processField } from "../utils/displayUtils"
import { getVideoData, updateSlideDataWithVideoData, setCaseStudyProgress } from "../utils/dataUtils"
import DarkBlueRoundedOutlineButton from "../components/DarkBlueRoundedOutlineButton"
import {BottomHeaderUltrasound, BottomBodyUltrasound, BottomXrayHeader, ToolTip, ToolTipText, TapCircle, HintCircle, Triangle, TriangleBlue, Frame, FrameInner,
  BottomRightIntroText, BottomRightIntroBodyText,PopupDarkBlue, PopupLightOrangeHeaderText, PopupWhiteBodyText, Popup2DarkBlue, Popup2HeaderText, Popup2WhiteBodyText,
  TaskSummaryHeader, TaskSummarySubHeader, TaskSummaryTableHolder, TaskSummaryFootnote, SliderTextHolder, SwitchHolder,
   TooltipTopHolder, TooltipBottomHolder, TooltipLeftHolder, TooltipRightHolder, TooltipBottomLeftHolder} from "../components/ActivityParts" 
import { getDogImageName, getUltrasoundVideo } from '../utils/assetUtils'
import { VideoWhiteDotButtonBackground, SmallPlayArrow, PauseResponsive, PlayResponsive, SmallTriangleRight, Cross } from '../components/VideoPlayerParts'
import playButtonSvg from '../images/icons_and_glyphs/GradientIcon_Play.svg'
import pauseButtonSvg from '../images/icons_and_glyphs/GradientIcon_Pause.svg'
import { updateDataWithDogVariant, getTaskSummaryData } from "../utils/dataUtils"
import { BlueDot,OrangeEndDot,OrangeSmallDot,WhiteSmallDot,DarkBlueBigDot,SkyBlueEndDot,LightBlueSmallDot } from '../components/TaskParts'
import { navigate } from "gatsby"

const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
`   

const gridStyle = { border: '0px solid red',height:'100vh' }

const linesSvg2 = (props) => {
  return (  
    <div id={props.id} style={props.style}>
        <svg id="lines" xmlns="http://www.w3.org/2000/svg" height="500px" viewBox="0 0 300 250">
            <path className="path path02" fill="none" stroke={theme.palette.skyBlue.main} strokeWidth="2" d="M176 103l100 90"></path>
        </svg> 
    </div>
  )
}

const Lines2 = styled(linesSvg2)`
     filter: drop-shadow(0px -5px 15px #ffce00);
     opacity: 1;
`

const linesSvg3 = (props) => {
  return (  
    <div id={props.id} style={props.style}>
        <svg id="lines" xmlns="http://www.w3.org/2000/svg" height="500px" viewBox="0 0 300 250">
            <path className="path path03" fill="none"  stroke={theme.palette.peachCobbler.main} strokeWidth="2" d="M176 103l100 90"></path>
        </svg> 
    </div>
  )
}

const Lines3 = styled(linesSvg3)`
     filter: drop-shadow(0px -5px 15px #ffce00);
     opacity: 1;
`

const VideoHalfWidthHolder =  styled.div`
    padding-bottom: 2rem;
    width: 66.063rem;
    height: 20.75rem;
    border: solid 0px #707070;
    background-color: white;
`
const LineHolder1 =  styled.div.attrs((props) => ({ id: props.id, style: props.style }))`
   opacity: 0;
`
const LineHolder2 =  styled.div.attrs((props) => ({ id: props.id, style: props.style }))`
   opacity: 0;
`

const videoPlayButtonStyle = {
    position: 'absolute', 
    border: '0px solid red',
    left: '50%', 
    top: '50%',
    width:'100px',
    height: '100px',
    marginLeft:'-50px',
    marginTop:'-50px',
    display: 'block',
    zIndex:'10',
    paddingBottom: '1.5rem'
}

const centerButtonDivStyle = {
    position: 'absolute', 
    border: '1px solid red',
    left: '50%', 
    top: '50%',
    width:'200px',
    height: '100px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center'
}

const BlueSmallInfoBox = styled.div.attrs((props) => ({ id: props.id, style: props.style  }))`
    position: absolute;
    width: 32px;
    height: 32px;
    font-family: ${theme.typography.fontFamily};
    font-size: 15px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 32px;
    letter-spacing: -0.15px;
    text-align: center;
    color: ${theme.palette.midnightBlue.main};
    background-color: ${theme.palette.skyBlue.main};
`

const UltrasoundTaskOuterContainer = styled.div`
    position: relative;
    left:0;
    top:0rem;
    right:0;
    bottom:0;
    height:100%;
    overflow:hidden;
    display: flex;
    justify-content: center;
    align-content:center;
    align-items: center;
`
const BottomRightIntroTextUltrasound = styled.div`
      width: 26.813rem;
      font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
      font-size: 2.938rem;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.15;
      letter-spacing: -0.47px;
      text-align: left;
      color: ${theme.palette.midnightBlue.main};

`
const DottedLine = styled.div`
     position:absolute;
     left: 342px;
    top: 379px;

     height: 200px;
     width:200px;
    

`

const HintTextLeft = styled.div`
    position:absolute;
    width:400px;
    height:100px;
    background-color: black;
    font-family: ${theme.typography.fontFamily};
    font-size: 1.375rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: -0.22px;
    text-align: left;
    color: white;
    p {
      font-family: ${theme.typography.fontFamily};
      color: white;
      padding-top: 0rem;
      padding-bottom: 0rem;
      margin-top:0;
      margin-bottom:0.25rem;
    
    }
`
const HintTextRight = styled.div`
    position:absolute;
    width:400px;
    height:100px;
    background-color: black;
    font-family: ${theme.typography.fontFamily};
    font-size: 1.375rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: -0.22px;
    text-align: left;
    color: white;
    p {
      font-family: ${theme.typography.fontFamily};
      color: white;
      padding-top: 0rem;
      padding-bottom: 0rem;
      margin-top:0;
      margin-bottom:0.25rem;

    }
`

const SlideText = ({display,tappedStageWrongArea,failedText,bodyText,titleText,stage = 0, showDots = false, failedBodyText = ''}) => {
    let displaySetting = display
    if (display !== 'block' || display !== 'flex' || display !== 'none'){
        displaySetting = display ? 'block' : 'none'
    }
    return (<SliderTextHolder style={{display: displaySetting}}>
                <div style={{display: (tappedStageWrongArea) ? 'flex':'none',alignItems:'center',border:'0px solid red'}}>
                      <CrossSvg style={{width:'49px',height:'50px',border:'0px solid red'}}/> 
                      
                     
                      { failedBodyText !== '' ? 
                      <div style={{display: 'flex',flexDirection:'column'}}>
                          <BottomXrayHeader style={{border:'0px solid red'}}>{failedText}</BottomXrayHeader>
                          <div style={{display: 'flex',alignContent:'center',fontWeight:'600', color: 'white'}}>{failedBodyText}</div> 
                      </div>
                      :  
                      <BottomXrayHeader style={{border:'0px solid red'}}>{failedText}</BottomXrayHeader>}
                </div>
                <div style={{display: (tappedStageWrongArea) ? 'none':'block',border:'0px solid red'}}>
                      <BottomXrayHeader style={{display: (showDots) ? 'flex' : 'none'}}>{(showDots) ? 
                      <div style={{display: 'flex',flexDirection:'row', alignContent:'center',fontSize:'1rem'}}>
                        <LightBlueSmallDot  style={{display: 'flex',alignContent:'center' }}/>
                        <div style={{display: 'flex',alignContent:'center',fontWeight:'600', color: 'white'}}>&nbsp;&nbsp;{titleText}</div></div> : ''}
                      </BottomXrayHeader>
                      <BottomXrayHeader style={{display: (showDots) ? 'flex' : 'none'}}>{(showDots) ? <div style={{display: 'flex',flexDirection:'row', alignContent:'center',color: 'white',fontSize:'1rem'}}>
                        <OrangeSmallDot  style={{display: 'flex',alignContent:'center' }}/>
                        <div style={{display: 'flex',alignContent:'center',fontWeight:'600', color: 'white'}}>&nbsp;&nbsp;{bodyText}</div></div> : ''}
                      </BottomXrayHeader>

                      <BottomXrayHeader  style={{color: 'white',fontSize:'1.375rem' }}>{(showDots === false) ? titleText : ''}</BottomXrayHeader>
                      <ThemeProvider theme={theme}>
                          <StyledTypography style={{color: 'white' }} variant="body1">{(showDots === false) ? bodyText : ''}</StyledTypography>
                      </ThemeProvider> 
                </div>         
      </SliderTextHolder>)
}


class UltrasoundContainer extends React.Component {
    constructor(props) {
        super(props)
        this.timerID = 0
        this.state = {}
        this.state.dogChoice = props.dogChoice
       
   
        this.state.showIntroduction = true
        this.state.stage = ultrasoundSteps.INTRO
        this.state.hintChecked = false
        this.state.isLineAnimationVisible = false
        this.state.tap1Stage1 = false
        this.state.tap2Stage1 = false
        this.state.tap1Stage2 = false
        this.state.tap2Stage2 = false
        this.state.tappedStageWrongArea = false
        this.state.isLviddPopupVisible = false

        this.setTaskProgress = props.setTaskProgress

        this.resources = {}
        this.resourcesAr = get(this, 'props.data.allNodeTask.nodes')
        this.resources = getSlideData(this.resourcesAr,ultrasoundSlugNames.TASK)
        //console.log(this.resources)
        this.resourcesSummaryAr = get(this, 'props.data.allNodeTasksummary.nodes')
        this.resourcesSummary = getSlideData(this.resourcesSummaryAr,ultrasoundSlugNames.SUMMARY)

         // adjust intial data for each dog

         let dudleyTaskData = getSlideData(this.resourcesAr,ultrasoundSlugNames.TASK_DUDLEY)
         let poppyTaskData = getSlideData(this.resourcesAr,ultrasoundSlugNames.TASK_POPPY)
         let reggieTaskData = getSlideData(this.resourcesAr,ultrasoundSlugNames.TASK_REGGIE)
 
         let dudleyTaskSummaryData = getSlideData(this.resourcesSummaryAr,ultrasoundSlugNames.TASK_SUMMARY_DUDLEY)
         let poppyTaskSummaryData = getSlideData(this.resourcesSummaryAr,ultrasoundSlugNames.TASK_SUMMARY_POPPY)
         let reggieTaskSummaryData = getSlideData(this.resourcesSummaryAr,ultrasoundSlugNames.TASK_SUMMARY_REGGIE)
   
          let taskData = {}

          taskData = this.resources

          let summaryData = {}
debugger

          if (this.state.dogChoice === dogName.DUDLEY) {
              summaryData = getTaskSummaryData(dudleyTaskSummaryData, this.state.dogChoice)
              taskData = updateDataWithDogVariant(this.resources,dudleyTaskData)
          }
          if (this.state.dogChoice === dogName.POPPY) {
              summaryData = getTaskSummaryData(poppyTaskSummaryData, this.state.dogChoice)
              taskData = updateDataWithDogVariant(this.resources,poppyTaskData)
          }
          if (this.state.dogChoice === dogName.REGGIE) {
              summaryData = getTaskSummaryData(reggieTaskSummaryData, this.state.dogChoice)
              taskData = updateDataWithDogVariant(this.resources,reggieTaskData)
          }

         // add videos

        let videoUltrasoundIntro = getUltrasoundVideo(this.state.dogChoice)
        let ultrasoundIntroData = this.resources
        ultrasoundIntroData.dogChoice = this.state.dogChoice
        this.resources = updateSlideDataWithVideoData(ultrasoundIntroData,videoUltrasoundIntro) 
      
       let videoUltrasoundSummary = getVideoData(this.resourcesSummary,this.state.dogChoice)
       let ultrasoundCorrectAnswerData = this.resourcesSummary
       ultrasoundCorrectAnswerData.dogChoice = this.state.dogChoice
       this.resourcesSummary = updateSlideDataWithVideoData(ultrasoundCorrectAnswerData,videoUltrasoundSummary) 

       this.taskData = taskData
       this.taskSummaryData = summaryData

       this.continueLink = ''
       if (this.state.dogChoice === dogName.POPPY) this.continueLink = '/lviddn-poppy'
       if (this.state.dogChoice === dogName.DUDLEY) this.continueLink = '/lviddn-dudley'
       if (this.state.dogChoice === dogName.REGGIE) this.continueLink = '/lviddn-reggie'
      

    }

    componentDidMount() {
      TweenLite.set(".path02",{opacity: 0})
      TweenLite.set(".path03",{opacity: 0})
    }

    componentWillUnmount() {
    }
    
    tick() {
    }

    render() {

      if (!this.resources) {return (<p>no data</p>)}
      if (!this.resourcesSummary) {return (<p>no data summary</p>)}

      if (this.resources === "NO_DATA_FOUND") {return (<p>no data</p>)}
      if (this.resourcesSummary === "NO_DATA_FOUND") {return (<p>no data summary</p>)}

      if (this.state.stage === ultrasoundSteps.SUMMARY) { 
            this.setTaskProgress(tasks.ULTRASOUND_EXAMINATION)   
      }

      // TODO - add to content type and make dynamic

      this.resources.field_introinstructionstext = {}
      this.resources.field_introinfotext = {} 
   
      let introTextHeader = "Let’s perform an ultrasound of __DOG_NAME__’s heart"
      this.resources.field_introinstructionstext.processed = introTextHeader
      let introTextBody = "and measure the left atrial-to-aortic ratio (LA:Ao) to determine whether she has cardiomegaly as a result of her MVD"
      this.resources.field_introinfotext.processed = introTextBody

      const hintTextLeft = { __html: "<p>NC = non coronary aortic valve cusp</p><p>LC = left coronary aortic valve cusp</p><p>RC = right coronary aortic valve cusp</p>" }
      
      const hintTextRight = { __html: "<p>LA = left atrium</p><p>PV = pulmonary vein</p>" }

      const hintTextLeft2 = { __html: "<p>NC = non coronary aortic valve cusp</p><p>LC = left coronary aortic valve cusp</p><p>RC = right coronary aortic valve cusp</p>" }
      
      const hintTextRight2 = { __html: "<p>LA = left atrium</p><p>Ao = aorta</p><p>PV = pulmonary vein</p>" }

      if (this.state.stage  === ultrasoundSteps.VIDEO_PREVIEW) this.resources.videoData1.underLargeVideoText = replaceDogName("__DOG_NAME__’s heart",this.state.dogChoice)


      console.log("========= CURRENT STAGE ======",this.state.stage )

      const moveToTaskStart = (param) => {
          console.log("INTRO FINISHED")
          TweenLite.set("#step0",{visible: 'hidden'})
          this.state.showIntroduction = false;
          this.state.stage = ultrasoundSteps.VIDEO_PREVIEW
          this.forceUpdate()
      }

      const hideIntro = () => {
          if (this.state.showIntroduction) {
                const action = new TimelineMax()
                action.defaultEase = Linear.easeNone
               
                action.from("#step0", 5, {
                  autoAlpha:1,
                }).to("#step0", 3, {
                  autoAlpha:0,
                }, "end")
                action.eventCallback("onComplete", moveToTaskStart, ["param1"]);
          }
      }
      
      const moveStep = (param) => {
        console.log("LINE FINISHED")
        this.state.stage = ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM
        this.forceUpdate()
      }

      function drawLineAnimationPoppy1() {
        console.log("start draw 1")
        TweenLite.defaultEase = Linear.easeNone;
        TweenLite.set(".path02",{opacity: 0})
        const action = new TimelineMax()
        .to("#linesHolder1",0,{autoAlpha:1})
        .fromTo(".path02", 1, {autoAlpha:0,drawSVG:0,repeat:0},{autoAlpha:1,drawSVG:40})
        action.eventCallback("onComplete", moveStep, ["param1"]);
      }

      function drawLineAnimationReggie1() {
        console.log("start draw 1")
        TweenLite.defaultEase = Linear.easeNone;
        TweenLite.set(".path02",{opacity: 0})
        const action = new TimelineMax()
        .to("#linesHolder1",0,{autoAlpha:1})
        .fromTo(".path02", 1, {autoAlpha:0,drawSVG:0,repeat:0},{autoAlpha:1,drawSVG:50})
        action.eventCallback("onComplete", moveStep, ["param1"]);
      }

      function drawLineAnimationDudley1() {
        console.log("start draw 1")
        TweenLite.defaultEase = Linear.easeNone;
        TweenLite.set(".path02",{opacity: 0})
        const action = new TimelineMax()
        .to("#linesHolder1",0,{autoAlpha:1})
        .fromTo(".path02", 1, {autoAlpha:0,drawSVG:0,repeat:0},{autoAlpha:1,drawSVG:50})
        action.eventCallback("onComplete", moveStep, ["param1"]);
      }

      const moveToStep2 = (param) => {
        console.log("LINE 2 FINISHED")
        this.state.stage = ultrasoundSteps.MEASURE_BOTH_LINES
        this.forceUpdate()
        
      }

      function drawLineAnimationPoppy2() {
        console.log("drawLineAnimation2")
        TweenLite.defaultEase = Linear.easeNone;
        TweenLite.set(".path03",{opacity: 0})
        const action = new TimelineMax()
        .to("#linesHolder2",0,{autoAlpha:1})
        .fromTo(".path03", 2, {autoAlpha:0,drawSVG:0,repeat:0},{autoAlpha:1,drawSVG:80})
        .fromTo(".path03", 2, {delay:2.0,drawSVG:80},{drawSVG:81})
        action.eventCallback("onComplete", moveToStep2, ["param1"]);
      }

      function drawLineAnimationReggie2() {
        console.log("drawLineAnimation2")
        TweenLite.defaultEase = Linear.easeNone;
        TweenLite.set(".path03",{opacity: 0})
        const action = new TimelineMax()
        .to("#linesHolder2",0,{autoAlpha:1})
        .fromTo(".path03", 2, {autoAlpha:0,drawSVG:0,repeat:0},{autoAlpha:1,drawSVG:110})
        .fromTo(".path03", 2, {delay:2.0,drawSVG:110},{drawSVG:111})
        action.eventCallback("onComplete", moveToStep2, ["param1"]);
      }

      function drawLineAnimationDudley2() {
        console.log("drawLineAnimation2")
        TweenLite.defaultEase = Linear.easeNone;
        TweenLite.set(".path03",{opacity: 0})
        const action = new TimelineMax()
        .to("#linesHolder2",0,{autoAlpha:1})
        .fromTo(".path03", 2, {autoAlpha:0,drawSVG:0,repeat:0},{autoAlpha:1,drawSVG:65})
        .fromTo(".path03", 2, {delay:2.0,drawSVG:65},{drawSVG:66})
        action.eventCallback("onComplete", moveToStep2, ["param1"]);
      }

      const moveToStep3 = (param) => {
        console.log("LINE 3 FINISHED")
        this.state.stage = ultrasoundSteps.SUMMARY
        this.forceUpdate()
      }
  
      function drawLineAnimation3() {
        console.log("drawLineAnimation3")
        const action = new TimelineMax()
        action.defaultEase = Linear.easeNone
        action.fromTo("popup", 3, {autoAlpha:0},{autoAlpha:1})
        action.eventCallback("onComplete", moveToStep3, ["param1"]); 
      }

      const showStage0ContinueLink = (event) => {
        event.preventDefault()
        this.state.stage = ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA
        console.log("showStage0ContinueLink",this.state.stage )
        this.forceUpdate()
    }

      const showStage1Tap1 = (event) => {
          event.preventDefault()
          
          //this.state.tappedStage1 = true
          this.state.stage = ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE
          this.state.tappedStageWrongArea = false
          this.state.tap1Stage1 = true
          if (this.state.tap1Stage1 && this.state.tap2Stage1) {
        
            //this.state.stage = ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE_ANIMATE
            if (this.state.dogChoice === dogName.DUDLEY) drawLineAnimationDudley1()
            if (this.state.dogChoice === dogName.POPPY) drawLineAnimationPoppy1()
            if (this.state.dogChoice === dogName.REGGIE) drawLineAnimationReggie1()
          } else {
            console.log("showStage1Tap1",this.state.stage )
            this.forceUpdate()
          }
      }

      const showStage1Tap2 = (event) => {
          event.preventDefault()
      
          //if (this.state.tappedStage1) {
            this.state.stage = ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE
            this.state.tappedStageWrongArea = false
            this.state.tap2Stage1 = true
            if (this.state.tap1Stage1 && this.state.tap2Stage1) {
             
              //this.state.stage = ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE_ANIMATE
              if (this.state.dogChoice === dogName.DUDLEY) drawLineAnimationDudley1()
              if (this.state.dogChoice === dogName.POPPY) drawLineAnimationPoppy1()
              if (this.state.dogChoice === dogName.REGGIE) drawLineAnimationReggie1()
            } else {
              console.log("showStage1Tap2",this.state.stage )
              this.forceUpdate()
            }
          //} 
      }

      const showStage2Tap1 = (event) => {
        event.preventDefault()
        this.state.tappedStageWrongArea = false
        this.state.tap1Stage2 = true
        this.state.stage = ultrasoundSteps.NOW_SELECT_FREE_WALL
        if (this.state.tap2Stage2) {
           //this.state.stage = ultrasoundSteps.NOW_SELECT_FREE_WALL_ANIMATE
           if (this.state.dogChoice === dogName.DUDLEY) drawLineAnimationDudley2()
           if (this.state.dogChoice === dogName.POPPY) drawLineAnimationPoppy2()
           if (this.state.dogChoice === dogName.REGGIE) drawLineAnimationReggie2()
        } else {
          console.log("showStage2Tap1",this.state.stage )
          this.forceUpdate()
        }
    }

    const showStage2Tap2 = (event) => {
        event.preventDefault()
        this.state.tappedStageWrongArea = false
        this.state.tap2Stage2 = true
        this.state.stage = ultrasoundSteps.NOW_SELECT_FREE_WALL
        if (this.state.tap1Stage2) {
           //this.state.stage = ultrasoundSteps.NOW_SELECT_FREE_WALL_ANIMATE
           if (this.state.dogChoice === dogName.DUDLEY) drawLineAnimationDudley2()
           if (this.state.dogChoice === dogName.POPPY) drawLineAnimationPoppy2()
           if (this.state.dogChoice === dogName.REGGIE) drawLineAnimationReggie2()
        } else {
          console.log("showStage2Tap2",this.state.stage )
          this.forceUpdate()
        }

    }

      const showError = (event) => {
          event.preventDefault()
          if (this.state.stage < 7) {
              console.log("ERROR", this.state.stage )
              this.state.tappedStageWrongArea = true
              this.forceUpdate()
          } else {
              console.log("Do nothing" )
          }
      }
      const handleSwitchChange = (event) => {
          console.log("here" ,(!this.state.hintChecked  ? 'on' : 'off') )
          this.state.hintChecked = !this.state.hintChecked 
          this.forceUpdate()
      };

      const displayDog = (currentDogName, dogName) => { 
          //console.log("DOG ",currentDogName)
          const displayState = (currentDogName === dogName) ? 'block':'none' 
          //console.log("DOG displayState ",displayState)
          return displayState
      }

      const displayStateStage = (currentStage, stage) => { return (stage === currentStage) ? 'block':'none' }

      const displayStateLine01 = (stage) => {
          return (stage >= ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA && stage < ultrasoundSteps.MEASURE_BOTH_LINES) ? 'block':'none'
      }

      const displayStateLine02 = (stage) => {
          return (stage >= ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM && stage < ultrasoundSteps.MEASURE_BOTH_LINES) ? 'block':'none'
      }
      
      const displayStateSwitch = (stage) => {
          return (stage > ultrasoundSteps.VIDEO_PREVIEW && stage < ultrasoundSteps.MEASURE_BOTH_LINES) ? 'block' : 'none'
      }

      const displaySupportingHintInfo = (stage) => {
        return (stage >= ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA && stage < ultrasoundSteps.MEASURE_BOTH_LINES && this.state.hintChecked) ? 'block' : 'none'  
      }

      const displaySupportingHintInfo2 = (stage) => {
        return (stage >= ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM && stage < ultrasoundSteps.MEASURE_BOTH_LINES && this.state.hintChecked) ? 'block' : 'none'
        
      }

      
      if (typeof window !== 'undefined') {
          if (this.state.stage === ultrasoundSteps.INTRO) hideIntro()
          if (this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES) drawLineAnimation3()
      }
      
      if (this.state.stage === ultrasoundSteps.INTRO) {

        return (<Layout>

           
             <Grid container  
                spacing={0} 
                spacing={0} 
                justify="flex-start" 
                style={gridStyle}>
    
                <Grid item xs={12} sm={12}  style={gridStyle}> 
    
                    <div id="step0" style={{display: 'flex',flexDirection:'row',width:'100%',margin:'auto'}}>
                        <div id="introImage" style={{display:'flex',width:'50%',height:'100vh',flexDirection:'column',alignItems:'flex-end',justifyContent:'center'}}> 
                            <CustomFluidImage  style={{display: displayDog(this.state.dogChoice, dogName.DUDLEY), width:'500px',height:'500px'}} imgName="ultrasound-and-dudley-01.png" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogChoice, dogName.POPPY), width:'500px',height:'500px'}} imgName="ultrasound-and-Poppy-01.png" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogChoice, dogName.REGGIE), width:'500px',height:'500px'}} imgName="ultrasound-and-Reggie-01.png" />
                        </div>
                        <div id="introText" style={{display:'flex',width:'50%',height:'100vh',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}> 
                            <BottomRightIntroTextUltrasound>
                                 {stripUneededHtml(replaceDogName((this.resources.field_introinstructionstext) ? this.resources.field_introinstructionstext.processed : '',this.state.dogChoice))}
                            </BottomRightIntroTextUltrasound>
                            <BottomRightIntroBodyText>
                                 {stripUneededHtml(replaceDogName(this.resources.field_introinfotext ? this.resources.field_introinfotext.processed : '' ,this.state.dogChoice))}
                            </BottomRightIntroBodyText>
                        </div> 
                    </div>
    
                  </Grid>
               </Grid>
        </Layout>
        )
      } else if (this.state.stage === ultrasoundSteps.SUMMARY) {
        const measureLvidd = (e) => {
          this.state.isLviddPopupVisible = true
          this.forceUpdate()
        }
  
        const hidePopup = (e) => {
          this.state.isLviddPopupVisible = false
          this.forceUpdate()
        }

        const goToLviddnPage = (e) => {
          this.state.isLviddPopupVisible = false
          navigate(this.continueLink)
          //this.forceUpdate()

        }
  
        return (
        <Layout>    
            <PageSection id="step3" style={{display: (this.state.stage === ultrasoundSteps.SUMMARY) ? 'flex':'none'}}>

            <LeftPageSection id="summaryImage">
                { this.state.dogChoice === dogName.POPPY ? <CustomFluidImage  style={{display: displayDog(this.state.dogChoice, this.state.dogChoice), width:'500px',height:'500px'}} imgName={getDogImageName(animationCharacterState.HAPPY,this.state.dogChoice)} /> : '' }
                { this.state.dogChoice === dogName.DUDLEY ? <CustomFluidImage  style={{display: displayDog(this.state.dogChoice, this.state.dogChoice), width:'500px',height:'500px'}} imgName={getDogImageName(animationCharacterState.HAPPY_STANDING,this.state.dogChoice)} />  : '' }
                { this.state.dogChoice === dogName.REGGIE ? <CustomFluidImage  style={{display: displayDog(this.state.dogChoice, this.state.dogChoice), width:'500px',height:'500px'}} imgName={getDogImageName(animationCharacterState.HAPPY,this.state.dogChoice)} />  : '' }
          
            </LeftPageSection>
          
            <RightPageSection id="summaryText">
          
                <TaskSummaryHeader>{this.taskSummaryData.headerText}</TaskSummaryHeader>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <TaskSummarySubHeader>{this.taskSummaryData.bodyText}</TaskSummarySubHeader>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <TaskSummaryTableHolder>
                      <TaskSummaryTableWidget resources={this.taskSummaryData} /> 
                </TaskSummaryTableHolder>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <VideoSmallWidget videoData1={this.resourcesSummary.videoData1} instance="One"/>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <DarkBlueRoundedOutlineButton buttonText={"Measure LVIDDN"} to={"/"} onClickHandler={measureLvidd}/>

                <BottomNavigationLink to={this.continueLink} direction="forward" distanceFromSide={"5%"} bottom={"2%"} linkText={"Finish ultrasound"}/>
                
            </RightPageSection> 

            <Popup2DarkBlue id="lviddPopup" style={{display: this.state.isLviddPopupVisible ? 'block':'none'}}>
            
         
              <Popup2HeaderText>{processField(this.taskSummaryData.popupHeaderText, this.state.dogChoice,false)}</Popup2HeaderText>
              <Popup2WhiteBodyText>{processField(this.taskSummaryData.popupBodyText, this.state.dogChoice,false)}</Popup2WhiteBodyText>
          
              

              {/* <Popup2HeaderText>{"Good choice"}</Popup2HeaderText>
              <Popup2WhiteBodyText>{"You should measure the LVIDDN As Dudley has a LA:Ao of <1.6, the size of the left ventricle should be obtained by measuring the left ventricular internal diameter at enddiastole normalised for bodyweight (LVIDDN)."}</Popup2WhiteBodyText> */}

              <WebsiteLink onClick={goToLviddnPage} 
                  style={{width:'150px'}} 
                  to={'button'}
                  typeOfButton={buttonStyleType.DARK_BUTTON_CORNER}>
                  {"Continue"}
              </WebsiteLink>

            </Popup2DarkBlue>
        
            <VideoFullScreenWidget videoData1={this.resourcesSummary.videoData1} instance="One" />
      
          </PageSection>

      </Layout>
        )

      } else if (this.state.stage  === ultrasoundSteps.VIDEO_PREVIEW) {

        const refPlayButton = React.createRef()
        const refPauseButton = React.createRef()

        

      return  (
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
                            left: 'calc(50% - 346px)',
                            top: 'calc(50% - 190px)',
                            width: '692px', 
                            height: '390px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',
                            textAlign: 'center',
                            border: '0px solid red'
                    }}>

                        <VideoHalfWidthHolder style={{width: '1057px', height: '438px',backgroundColor:'transparent'}}>
                            <CustomFluidImage  style={{display: displayDog(this.state.dogChoice, dogName.DUDLEY), width:'692px',height:'390px'}} imgName="dudley_big_thumbnail_ultrasound.png" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogChoice, dogName.POPPY), width:'692px',height:'390px'}} imgName="poppy_big_thumbnail_ultrasound.png" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogChoice, dogName.REGGIE), width:'692px',height:'390px'}} imgName="reggie_big_thumbnail_ultrasound.png" />
                            <div style={videoPlayButtonStyle}>
                            

                              <VideoWhiteDotButtonBackground onClick={showFullScreenVideo} id="videoLargePlayBtn">
                                  <PauseResponsive ref={refPlayButton} src={pauseButtonSvg} alt="" style={{display: 'none'}}/>
                                  <PlayResponsive ref={refPauseButton} src={playButtonSvg} alt="" />
                              </VideoWhiteDotButtonBackground>

                            </div> 
                            <BottomHeaderUltrasound>{stripUneededHtml(replaceDogName((this.resources.field_instructionstext) ? this.resources.field_instructionstext.processed : '',this.state.dogChoice))}</BottomHeaderUltrasound>
                            <BottomBodyUltrasound>{stripUneededHtml(replaceDogName(this.resources.field_infotext ? this.resources.field_infotext.processed :'' ,this.state.dogChoice))}</BottomBodyUltrasound>
                        </VideoHalfWidthHolder>
                    </div>
                </div>
            </div>

            <VideoFullScreenWidget videoData1={this.resources.videoData1} instance={"One"} loop={true} />

            <BottomNavigationLink to="button" onClick={showStage0ContinueLink} distanceFromSide={"2%"} bottom={"2%"} direction={"forward"} linkText={"Continue"} />

        </Layout>
        )

      } else {
            // ============ DUDLEY
            if (this.state.dogChoice === dogName.DUDLEY) {

                  return (<Layout>
                      <UltrasoundTaskOuterContainer>
                            <Frame id="step1" style={{display: (this.state.stage > ultrasoundSteps.VIDEO_PREVIEW && this.state.stage < ultrasoundSteps.SUMMARY ) ? 'flex':'none'}}>
                                <FrameInner>

                                    <CustomFluidImage style={{display: displayDog(this.state.dogChoice, dogName.DUDLEY)}} imgName="dudley_ultrasound_laao_from_pdf.png" />
          
                                    <LineHolder1 id="linesHolder1" style={{display: displayStateLine01(this.state.stage),position:'absolute',left:'-55px', top:'104px',width:'600px',height:'250px'}}>
                                      <Lines2 style={{ transform: 'rotate(90deg) translate(-112px, -179px)'}}/>
                                    </LineHolder1>
              
                                    <LineHolder2 id="linesHolder2" style={{display: displayStateLine02(this.state.stage),position:'absolute',left:'-127px',top:'187px',width:'600px',height:'250px'}}>
                                      <Lines3 style={{transform: 'rotate(90deg) translate(-112px, -179px)'}}/>
                                    </LineHolder2>
                                  
                                    <div id="wrongTapArea" onClick={showError} style={{ position:'absolute',left:'2%',top:'0',width:'700px',height:'500px',border:'0px solid red'}}></div>

                                
                                    {/* <Draggable onDrag={console.log} onDragEnd={console.log} id="uniqueId"><BlueSmallInfoBox id="squarePvb" className={"smallInfoBoxes"} style={{left:"0px",top:"0px"}}>PV</BlueSmallInfoBox></Draggable> 
                                    */}
                                
                                  
                                    <SlideText display={(this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA)} 
                                          stage={this.state.stage}
                                          tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                          failedText={this.resources.field_failedtext.processed}
                                          bodyText={this.resources.field_bottombodytext.processed}
                                          titleText={this.resources.field_bottomtitle.processed} />
                                          
                                    <SlideText display={(this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE_ANIMATE)} 
                                          stage={this.state.stage}
                                          tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                          failedText={this.resources.field_failedtext.processed}
                                          
                                          bodyText={(this.resources.field_bottombodystep2) ? this.resources.field_bottombodystep2.processed : ''}
                                          titleText={this.resources.field_bottomtitlestep2.processed} />

                                    <SlideText display={(this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM)} 
                                        stage={this.state.stage}
                                        tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                        failedText={"Try again"}
                                        failedBodyText={this.resources.field_failedtext3.processed}
                                        bodyText={(this.resources.field_bottombodytextstep3) ? this.resources.field_bottombodytextstep3.processed : ''}
                                        titleText={this.resources.field_bottomtitlestep3.processed} />
                                          
                            
                                    <SlideText display={(this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL_ANIMATE)} 
                                          stage={this.state.stage}
                                          tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                          failedText={"Try again"}
                                          failedBodyText={this.resources.field_failedtext4.processed}
                                          bodyText={(this.resources.field_bottombodystep4) ? this.resources.field_bottombodystep4.processed : ''}
                                          titleText={this.resources.field_bottomtitlestep4.processed} />

                                    <SlideText display={(this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES || this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES_POP_UP_ANIMATE)} 
                                          stage={this.state.stage}
                                          tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                          failedText={""}
                                          showDots={true}
                                          bodyText={(this.resources.field_finalscreenbottomline1) ? this.resources.field_finalscreenbottomline1 : 'no data'}
                                          titleText={this.resources.field_finalscreenbottomline2 ? this.resources.field_finalscreenbottomline2.processed : 'no data'} />
            

                                    <PopupDarkBlue id="popup" style={{display: (this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES_POP_UP_ANIMATE ||
                                    this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES) ? 'block' : 'none'}}>
                                      <PopupLightOrangeHeaderText>{stripUneededHtml(this.resources.field_popupheadertext2 ? this.resources.field_popupheadertext2 : 'no data')}</PopupLightOrangeHeaderText>
                                      <PopupWhiteBodyText>{stripUneededHtml(this.resources.field_popupbodytext2.processed ? this.resources.field_popupbodytext2.processed : '')}</PopupWhiteBodyText>
                                    </PopupDarkBlue>

                                    <SwitchHolder id="switch" style={{display: displayStateSwitch(this.state.stage)}}>
                                        <HintSwitcher onChange={handleSwitchChange} hintChecked={this.state.hintChecked} />
                                    </SwitchHolder>

                                    {/* <BlueSmallInfoBox id="set1SquarePv" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:"338px",top:"466px"}}>PV</BlueSmallInfoBox>
                                    
                                    <BlueSmallInfoBox id="set1SquareLa" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'473px', top:'375px'}}>LA</BlueSmallInfoBox>
                                 */}
          
                                    <TooltipRightHolder id="tip1" stageVisible={
                                        (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)} 
                                        hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '429px' topPos = '238px' 
                                      
                                    />
        
                                    <TooltipBottomHolder id="tip2" stageVisible={
                                        (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)}
                                        hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} leftPos = '223px' topPos = '328px' 
                                    />



                                    <BlueSmallInfoBox id="set1SquareNc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'351px', top:'298px'}}>NC</BlueSmallInfoBox>

                                    <BlueSmallInfoBox id="set1SquareRc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'414px', top:'268px'}}>RC</BlueSmallInfoBox>
                                  
        
                                    <BlueSmallInfoBox id="set1SquareLc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'455px', top:'359px'}}>LC</BlueSmallInfoBox>

      
                                    {/* <BlueSmallInfoBox id="set2SquarePv" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:"338px",top:"466px"}}>PV</BlueSmallInfoBox>    
                                     */}
                                    <BlueSmallInfoBox id="set2SquareLa" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'361px',top:'426px'}}>LA</BlueSmallInfoBox>
                                    
                                    
                                    <TooltipLeftHolder id="tip3" stageVisible={    
                                        (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)} 
                                        hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext3.processed} leftPos = '-34px' topPos = '323px' />    

                                    <TooltipBottomHolder id="tip4" stageVisible={
                                        (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)} 
                                        hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext4.processed} leftPos = '124px' topPos = '436px' />

                                    {/* <BlueSmallInfoBox id="set2SquareNc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'460px', top:'242px'}}>NC</BlueSmallInfoBox>
                                    <BlueSmallInfoBox id="set2SquareRc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'503px', top:'205px'}}>RC</BlueSmallInfoBox>
                                    <BlueSmallInfoBox id="set2SquareLc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'539px', top:'279px'}}>LC</BlueSmallInfoBox> */}

        
                                    <div id="tapArea1" onClick={showStage1Tap1} 
                                    style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE) ? 'block' : 'none',
                                    opacity:'0',position:'absolute',left:'448px',top:'271px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/>
                                    </div>
        
                                    <div id="tapArea2" onClick={showStage1Tap2} 
                                    style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE) ? 'block' : 'none',
                                      opacity:'0',position:'absolute',right:'563px',top:'346px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/>
                                    </div> 
        
                                    <div id="tapArea3" onClick={showStage2Tap1} style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL) ? 'block' : 'none',
                                    opacity:'0',position:'absolute',left:'372px',top:'357px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>
        
                                    <div id="tapArea4" onClick={showStage2Tap2} style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL) ? 'block' : 'none',
                                    opacity:'0',position:'absolute',right:'660px',top:'455px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 
              
                                    {/* <div id="tapArea5" onClick={showStage5Tap1} style={{display: displayState6(this.state.stage),opacity:'0.05',position:'absolute',right:'58%',top:'34%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>  */}

                      

                        </FrameInner>
                      </Frame>
                      
                    </UltrasoundTaskOuterContainer>
                  </Layout>
                )

            }

            // ============= POPPY
            if (this.state.dogChoice === dogName.POPPY) {

              return (<Layout>
                <UltrasoundTaskOuterContainer>
                      <Frame id="step1" style={{display: (this.state.stage > ultrasoundSteps.VIDEO_PREVIEW && this.state.stage < ultrasoundSteps.SUMMARY ) ? 'flex':'none'}}>
                          <FrameInner>

                              <CustomFluidImage style={{display: displayDog(this.state.dogChoice, dogName.POPPY)}} imgName="poppy_ultrasound_laao_from_pdf.png" />
                              
                              <LineHolder1 id="linesHolder1" style={{display: displayStateLine01(this.state.stage),position:'absolute',left:'23px', top:'44px',width:'600px',height:'250px'}}>
                                <Lines2 style={{ transform: 'rotate(90deg) translate(-112px, -179px)'}}/>
                              </LineHolder1>
        
                              <LineHolder2 id="linesHolder2" style={{display: displayStateLine02(this.state.stage),position:'absolute',left:'-35px',top:'110px',width:'600px',height:'250px'}}>
                                <Lines3 style={{transform: 'rotate(90deg) translate(-112px, -179px)'}}/>
                              </LineHolder2>
                             
                           
                              <div id="wrongTapArea" onClick={showError} style={{ position:'absolute',left:'2%',top:'0',width:'700px',height:'500px',border:'0px solid red'}}></div>

                          
                              {/* <Draggable onDrag={console.log} onDragEnd={console.log} id="uniqueId"><BlueSmallInfoBox id="squarePvb" className={"smallInfoBoxes"} style={{left:"0px",top:"0px"}}>PV</BlueSmallInfoBox></Draggable> 
                              */}
                          
                            
                              <SlideText display={(this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA)} 
                                    stage={this.state.stage}
                                    tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                    failedText={this.resources.field_failedtext.processed}
                                    bodyText={this.resources.field_bottombodytext.processed}
                                    titleText={this.resources.field_bottomtitle.processed} />
                                    
                              <SlideText display={(this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE_ANIMATE)} 
                                    stage={this.state.stage}
                                    tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                    failedText={this.resources.field_failedtext.processed}
                                    
                                    bodyText={(this.resources.field_bottombodystep2) ? this.resources.field_bottombodystep2.processed : ''}
                                    titleText={this.resources.field_bottomtitlestep2.processed} />

                              <SlideText display={(this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM)} 
                                    stage={this.state.stage}
                                    tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                    failedText={"Try again"}
                                    failedBodyText={this.resources.field_failedtext3.processed}
                                    
                                    bodyText={(this.resources.field_bottombodytextstep3) ? this.resources.field_bottombodytextstep3.processed : ''}
                                    titleText={this.resources.field_bottomtitlestep3.processed} />
                                    
                      
                              <SlideText display={(this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL_ANIMATE)} 
                                    stage={this.state.stage}
                                    tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                    failedText={"Try again"}
                                    failedBodyText={this.resources.field_failedtext4.processed}
                                    bodyText={(this.resources.field_bottombodystep4) ? this.resources.field_bottombodystep4.processed : ''}
                                    titleText={this.resources.field_bottomtitlestep4.processed} />

                              <SlideText display={(this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES || this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES_POP_UP_ANIMATE)} 
                                    stage={this.state.stage}
                                    tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                    failedText={""}
                                    showDots={true}
                                    bodyText={(this.resources.field_finalscreenbottomline1) ? this.resources.field_finalscreenbottomline1 : 'no data'}
                                    titleText={this.resources.field_finalscreenbottomline2 ? this.resources.field_finalscreenbottomline2.processed : 'no data'} />


                              <PopupDarkBlue id="popup" style={{display: (this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES_POP_UP_ANIMATE ||
                              this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES) ? 'block' : 'none'}}>
                                <PopupLightOrangeHeaderText>{stripUneededHtml(this.resources.field_popupheadertext2 ? this.resources.field_popupheadertext2 : 'no data')}</PopupLightOrangeHeaderText>
                                <PopupWhiteBodyText>{stripUneededHtml(this.resources.field_popupbodytext2.processed ? this.resources.field_popupbodytext2.processed : '')}</PopupWhiteBodyText>
                              </PopupDarkBlue>

                              <SwitchHolder id="switch" style={{display: displayStateSwitch(this.state.stage)}}>
                                  <HintSwitcher onChange={handleSwitchChange} hintChecked={this.state.hintChecked} />
                              </SwitchHolder>
                
                              <DottedLine id="dottedLine" style={{display: displaySupportingHintInfo(this.state.stage)}}><CustomFluidImage imgName={"dottedLine.png"} /></DottedLine>
                              <HintTextLeft id="hintTextLeft" dangerouslySetInnerHTML={hintTextLeft} style={{display: displaySupportingHintInfo(this.state.stage),left:'59px',top:'574px'}}/>
                              <HintTextRight id="hintTextRight" dangerouslySetInnerHTML={hintTextRight} style={{display: displaySupportingHintInfo(this.state.stage),left:'400px',top:'574px'}}/>

                              <HintTextLeft id="hintTextLeft2" dangerouslySetInnerHTML={hintTextLeft2} style={{display: displaySupportingHintInfo2(this.state.stage),left:'59px',top:'574px'}}/>
                              <HintTextRight id="hintTextRight2" dangerouslySetInnerHTML={hintTextRight2} style={{display: displaySupportingHintInfo2(this.state.stage),left:'400px',top:'574px'}}/>
                                              
               

                              <BlueSmallInfoBox id="set1SquarePv" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:"338px",top:"466px"}}>PV</BlueSmallInfoBox>
   
                              <BlueSmallInfoBox id="set1SquareLa" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'368px', top:'281px'}}>LA</BlueSmallInfoBox>
                              
                              
                              <TooltipRightHolder id="tip1" stageVisible={
                                  (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)} 
                                  hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '506px' topPos = '178px' 
                                
                              />

                              <TooltipBottomLeftHolder id="tip2" stageVisible={
                                  (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)}
                                  hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} leftPos = '213px' topPos = '259px' 
                              />

                              <BlueSmallInfoBox id="set1SquareNc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'460px', top:'242px'}}>NC</BlueSmallInfoBox>
                              <BlueSmallInfoBox id="set1SquareRc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'503px', top:'205px'}}>RC</BlueSmallInfoBox>
                              <BlueSmallInfoBox id="set1SquareLc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'539px', top:'279px'}}>LC</BlueSmallInfoBox>


                              <BlueSmallInfoBox id="set2SquareLa" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'473px',top:'375px'}}>LA</BlueSmallInfoBox>
   
                              <BlueSmallInfoBox id="set2SquareAo" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'553px',top:'234px'}}>Ao</BlueSmallInfoBox>

                              
                              <TooltipLeftHolder id="tip3" stageVisible={    
                                  (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)} 
                                  hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext3.processed} leftPos = '61px' topPos = '248px' />    

                              <TooltipBottomHolder id="tip4" stageVisible={
                                  (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)} 
                                  hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext4.processed} leftPos = '197px' topPos = '380px' />

                              <BlueSmallInfoBox id="set2SquarePv" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:"338px",top:"466px"}}>PV</BlueSmallInfoBox>
                             
                              <BlueSmallInfoBox id="set2SquareNc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'460px', top:'242px'}}>NC</BlueSmallInfoBox>
                              <BlueSmallInfoBox id="set2SquareRc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'503px', top:'205px'}}>RC</BlueSmallInfoBox>
                              <BlueSmallInfoBox id="set2SquareLc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'539px', top:'279px'}}>LC</BlueSmallInfoBox>


                              <div id="tapArea1" onClick={showStage1Tap1} 
                              style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE) ? 'block' : 'none',
                              opacity:'0',position:'absolute',left:'525px',top:'213px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/>
                              </div>

                              <div id="tapArea2" onClick={showStage1Tap2} 
                              style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE) ? 'block' : 'none',
                                opacity:'0',position:'absolute',right:'477px',top:'280px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/>
                              </div> 

                              <div id="tapArea3" onClick={showStage2Tap1} style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL) ? 'block' : 'none',
                              opacity:'0',position:'absolute',left:'467px',top:'281px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>

                              <div id="tapArea4" onClick={showStage2Tap2} style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL) ? 'block' : 'none',
                              opacity:'0',position:'absolute',right:'588px',top:'397px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 
        
                              {/* <div id="tapArea5" onClick={showStage5Tap1} style={{display: displayState6(this.state.stage),opacity:'0.05',position:'absolute',right:'58%',top:'34%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>  */}

                

                  </FrameInner>
                </Frame>
                
              </UltrasoundTaskOuterContainer>
            </Layout>
                )

            }

            // =========== REGGIE
            if (this.state.dogChoice === dogName.REGGIE) {

              return (<Layout>
                  <UltrasoundTaskOuterContainer>
                        <Frame id="step1" style={{display: (this.state.stage > ultrasoundSteps.VIDEO_PREVIEW && this.state.stage < ultrasoundSteps.SUMMARY ) ? 'flex':'none'}}>
                            <FrameInner>

                              <CustomFluidImage style={{display: displayDog(this.state.dogChoice, dogName.REGGIE)}} imgName="reggie_ultrasound_laao_from_pdf.png" />
        
                                <LineHolder1 id="linesHolder1" style={{display: displayStateLine01(this.state.stage),position:'absolute',left:'24px', top:'14px',width:'600px',height:'250px'}}>
                                  <Lines2 style={{ transform: 'rotate(99deg) translate(-112px, -179px)'}}/>
                                </LineHolder1>
          
                                <LineHolder2 id="linesHolder2" style={{display: displayStateLine02(this.state.stage),position:'absolute',left:'-62px',top:'75px',width:'600px',height:'250px'}}>
                                  <Lines3 style={{transform: 'rotate(101deg) translate(-112px, -179px)'}}/>
                                </LineHolder2>
                              
                                <div id="wrongTapArea" onClick={showError} style={{ position:'absolute',left:'2%',top:'0',width:'700px',height:'500px',border:'0px solid red'}}></div>

                            
                                {/* <Draggable onDrag={console.log} onDragEnd={console.log} id="uniqueId"><BlueSmallInfoBox id="squarePvb" className={"smallInfoBoxes"} style={{left:"0px",top:"0px"}}>PV</BlueSmallInfoBox></Draggable> 
                                */}
                            
                              
                                <SlideText display={(this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA)} 
                                      stage={this.state.stage}
                                      tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                      failedText={this.resources.field_failedtext.processed}
                                      bodyText={this.resources.field_bottombodytext.processed}
                                      titleText={this.resources.field_bottomtitle.processed} />
                                      
                                <SlideText display={(this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE_ANIMATE)} 
                                      stage={this.state.stage}
                                      tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                      failedText={this.resources.field_failedtext.processed}
                                      
                                      bodyText={(this.resources.field_bottombodystep2) ? this.resources.field_bottombodystep2.processed : ''}
                                      titleText={this.resources.field_bottomtitlestep2.processed} />

                                <SlideText display={(this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM)} 
                                      stage={this.state.stage}
                                      tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                      failedText={"Try again"}
                                      failedBodyText={this.resources.field_failedtext3.processed}
                                      bodyText={(this.resources.field_bottombodytextstep3) ? this.resources.field_bottombodytextstep3.processed : ''}
                                      titleText={this.resources.field_bottomtitlestep3.processed} />
                                      
                        
                                <SlideText display={(this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL_ANIMATE)} 
                                      stage={this.state.stage}
                                      tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                      failedText={"Try again"}
                                      failedBodyText={this.resources.field_failedtext4.processed}
                                      bodyText={(this.resources.field_bottombodystep4) ? this.resources.field_bottombodystep4.processed : ''}
                                      titleText={this.resources.field_bottomtitlestep4.processed} />

                                <SlideText display={(this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES || this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES_POP_UP_ANIMATE)} 
                                      stage={this.state.stage}
                                      tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                      failedText={""}
                                      showDots={true}
                                      bodyText={(this.resources.field_finalscreenbottomline1) ? this.resources.field_finalscreenbottomline1 : 'no data'}
                                      titleText={this.resources.field_finalscreenbottomline2 ? this.resources.field_finalscreenbottomline2.processed : 'no data'} />


                                <PopupDarkBlue id="popup" style={{display: (this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES_POP_UP_ANIMATE ||
                                this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES) ? 'block' : 'none'}}>
                                  <PopupLightOrangeHeaderText>{stripUneededHtml(this.resources.field_popupheadertext2 ? this.resources.field_popupheadertext2 : 'no data')}</PopupLightOrangeHeaderText>
                                  <PopupWhiteBodyText>{stripUneededHtml(this.resources.field_popupbodytext2.processed ? this.resources.field_popupbodytext2.processed : '')}</PopupWhiteBodyText>
                                </PopupDarkBlue>

                                <SwitchHolder id="switch" style={{display: displayStateSwitch(this.state.stage)}}>
                                    <HintSwitcher onChange={handleSwitchChange} hintChecked={this.state.hintChecked} />
                                </SwitchHolder>

                                {/* <BlueSmallInfoBox id="set1SquarePv" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:"296px",top:"385px"}}>PV</BlueSmallInfoBox>
                                
                                <BlueSmallInfoBox id="set1SquareLa" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'464px', top:'330px'}}>LA</BlueSmallInfoBox>
                                */}
                                
                                <TooltipRightHolder id="tip1" stageVisible={
                                    (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)} 
                                    hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '510px' topPos = '196px' 
                                  
                                />

                                <TooltipBottomHolder id="tip2" stageVisible={
                                    (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)}
                                    hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} leftPos = '302px' topPos = '262px' 
                                />

                                <BlueSmallInfoBox id="set1SquareNc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'445px', top:'259px'}}>NC</BlueSmallInfoBox>

                              
                                <BlueSmallInfoBox id="set1SquareRc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'506px', top:'204px'}}>RC</BlueSmallInfoBox>

                                <BlueSmallInfoBox id="set1SquareLc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'544px', top:'323px'}}>LC</BlueSmallInfoBox>


                                {/* <BlueSmallInfoBox id="set2SquarePv" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:"296px",top:"385px"}}>PV</BlueSmallInfoBox> */}
      
                                <BlueSmallInfoBox id="set2SquareLa" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'414px', top:'396px'}}>LA</BlueSmallInfoBox>

                                
            
                                
                                <TooltipLeftHolder id="tip3" stageVisible={    
                                    (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)} 
                                    hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext3.processed} leftPos = '52px' topPos = '247px' />    

                                <TooltipBottomHolder id="tip4" stageVisible={
                                    (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)} 
                                    hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext4.processed} leftPos = '133px' topPos = '387px' />
      {/* 
                                <BlueSmallInfoBox id="set2SquareNc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'452px', top:'193px'}}>NC</BlueSmallInfoBox>
                                <BlueSmallInfoBox id="set2SquareRc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'506px', top:'147px'}}>RC</BlueSmallInfoBox>
                                <BlueSmallInfoBox id="set2SquareLc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'539px', top:'227px'}}>LC</BlueSmallInfoBox> */}


                                <div id="tapArea1" onClick={showStage1Tap1} 
                                style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE) ? 'block' : 'none',
                                opacity:'0',position:'absolute',left:'528px',top:'229px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/>
                                </div>
          
                                <div id="tapArea2" onClick={showStage1Tap2} 
                                style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE) ? 'block' : 'none',
                                  opacity:'0',position:'absolute',right:'483px',top:'278px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/>
                                  </div> 
            
                                <div id="tapArea3" onClick={showStage2Tap1} style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL) ? 'block' : 'none',
                                opacity:'0',position:'absolute',left:'457px',top:'280px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>

                                <div id="tapArea4" onClick={showStage2Tap2} style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL) ? 'block' : 'none',
                                opacity:'0',position:'absolute',right:'650px',top:'404px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 

                                {/* <div id="tapArea5" onClick={showStage5Tap1} style={{display: displayState6(this.state.stage),opacity:'0.05',position:'absolute',right:'58%',top:'34%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>  */}

                  

                    </FrameInner>
                  </Frame>
                  
                </UltrasoundTaskOuterContainer>
              </Layout>
            )

            }
      }




    }
  
}

export default function ultrasoundTemplate(data, dogChoicePassed) {
  const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL]);
  //console.log(cookies)
  const newData = { ...data }
 
  newData.data = data
  const dogChoice = dogChoicePassed //cookies[cookieKeyNames.DOG_CHOICE] ? cookies[cookieKeyNames.DOG_CHOICE] : dogName.DUDLEY
  newData.dogChoice = dogChoice

  const setTaskProgress = (task) => {
    setTimeout(function(){ 
      const newCaseStudyProgress = setCaseStudyProgress(task,dogChoice,cookies)
      console.log("============= " + newCaseStudyProgress + " =============")
      setCookie(cookieKeyNames.CASESTUDYS_ALL,newCaseStudyProgress,{ path: '/' })  
    }, 500);
  }
  newData.setTaskProgress = setTaskProgress
  return (<UltrasoundContainer {...newData} />)
}

export const pageQuery = graphql`
  {
    allNodeTask {
      nodes {
        drupal_id
        created(fromNow: false)
        field_bottombodytext {
          processed
        }
        field_bottombodytextstep3 {
          processed
        }
        field_bottombodytextstep4 {
          processed
        }
        field_bottombodytextstep5 {
          processed
        }
        field_bottomtitle {
          processed
        }
        field_bottomtitlestep2 {
          processed
        }
        field_bottomtitlestep3 {
          processed
        }
        field_bottomtitlestep4 {
          processed
        }
        field_bottomtitlestep5 {
          processed
        }
        field_bottomtitlestep6 {
          processed
        }
        field_continuelink {
          title
          uri
        }
        field_failedtext {
          processed
        }
        field_failedtext3 {
          processed
        }
        field_failedtext4 {
          processed
        }
        field_finalscreenbottomline1
        field_finalscreenbottomline2 {
          processed
        }
        field_infotext {
          processed
        }
        field_instructionstext {
          processed
        }
        field_mainimage {
          alt
          title
          width
          height
        }
        field_popupbodytext {
          processed
        }
        field_popupbodytext2 {
          processed
        }
        field_popupheadertext
        field_popupheadertext2
        field_sliderofftext
        field_sliderontext
        field_slidertitle
        field_taptooltiptext1 {
          processed
        }
        field_taptooltiptext2 {
          processed
        }
        field_taptooltiptext3 {
          processed
        }
        field_taptooltiptext4 {
          processed
        }
        field_videocaptiontext1 {
          processed
        }
        field_videoposterimage1 {
          alt
          title
          width
          height
        }
        path {
          alias
        }
        relationships {
          field_mainimage {
            uri {
              value
              url
            }
            localFile {
              url
            }
          }
          field_video1 {
            relationships {
              field_media_video_file {
                localFile {
                  url
                }
              }
            }
          }
          field_videoposterimage1 {
            id
          }
        }
      }
    },
    allNodeTasksummary {
    nodes {
      drupal_id
      created(fromNow: false)
      field_bodytext {
        processed
      }
      field_buttonlinks {
        title
        uri
      }
      field_continuelink {
        title
        uri
      }
      field_headertext
      field_popupbodytext {
        processed
      }
      field_popupheadertext
      field_tablefooterhtml1 {
        processed
      }
      field_tableheaderhtml1 {
        processed
      }
      field_tableitemcontent1 {
        processed
      }
      field_tableitemcontent2 {
        processed
      }
      field_tableitemcontent3 {
        processed
      }
      field_tableitemtitle1
      field_tableitemtitle2
      field_tableitemtitle3
      field_tableitemtitlehtml1 {
        processed
      }
      field_tableitemtitlehtml2 {
        processed
      }
      field_tableitemtitlehtml3 {
        processed
      }
      field_videocaptiontext1 {
        processed
      }
      field_videocaptiontext2 {
        processed
      }
      field_videocaptiontext3 {
        processed
      }
      field_videoduration1
      field_videoduration2
      field_videoduration3
      field_videofordog1
      field_videofordog2
      field_videofordog3
      field_videonarrator1
      field_videonarrator2
      field_videonarrator3
      field_videonarratorlocation1 {
        processed
      }
      field_videonarratorlocation2 {
        processed
      }
      field_videonarratorlocation3 {
        processed
      }
      field_videonarratorprofession1 {
        processed
      }
      field_videonarratorprofession2 {
        processed
      }
      field_videonarratorprofession3 {
        processed
      }
      field_videoposterimage1 {
        alt
        height
        title
        width
      }
      field_videoposterimage2 {
        alt
        height
        title
        width
      }
      field_videoposterimage3 {
        alt
        height
        title
        width
      }
      field_videothumbnail1 {
        alt
        height
        title
        width
      }
      field_videothumbnail2 {
        alt
        height
        title
        width
      }
      field_videothumbnail3 {
        alt
        height
        title
        width
      }
      field_videotitle1 {
        processed
      }
      field_videotitle2 {
        processed
      }
      field_videotitle3 {
        processed
      }
      path {
        alias
      }
      relationships {
        field_video1 {
          relationships {
            field_media_video_file {
              localFile {
                url
              }
              uri {
                url
                value
              }
            }
          }
        }
        field_video2 {
          relationships {
            field_media_video_file {
              localFile {
                url
              }
              uri {
                url
                value
              }
            }
          }
        }
        field_video3 {
          relationships {
            field_media_video_file {
              localFile {
                url
              }
              uri {
                url
                value
              }
            }
          }
        }
        field_videoposterimage1 {
          localFile {
            url
          }
        }
        field_videoposterimage2 {
          localFile {
            url
          }
        }
        field_videoposterimage3 {
          localFile {
            url
          }
        }
        field_videothumbnail1 {
          localFile {
            url
          }
        }
        field_videothumbnail2 {
          localFile {
            url
          }
          uri {
            url
            value
          }
        }
        field_videothumbnail3 {
          localFile {
            url
          }
        }
      }
    }
  }
  }
  `


/*
relationships {
          field_video1 {
            relationships {
              field_media_video_file {
                localFile {
                  url
                }
              }
            }
          }
          field_videoposterimage1 {
            uri {
              url
              value
            }
            localFile {
              url
            }
          }
        }
        field_videocaptiontext1 {
          processed
        }
        */



  //  field_continuelink {
  //   title
  //   uri
  // }

