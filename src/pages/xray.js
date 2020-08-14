import React, {useRef, useEffect, createRef} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import CrossSvg from "../svgReactLoader/xray/red_cross.svg"
import CustomFluidImage from '../components/CustomFluidImage'

import { render } from 'react-dom'
import {TweenLite, TimelineMax, Linear} from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { stripUneededHtml, getSlideData } from '../utils/displayUtils'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import DebugHelper from '../components/DebugHelper'
import { withCookies, Cookies, useCookies } from 'react-cookie'
import { useCallback, useState,  useDebugValue, forceUpdate } from 'react'
import TaskSummaryTableWidget from '../components/TaskSummaryTableWidget'
import theme, { sm, md, lg, xl } from '../theme'
import { dogName, tasks, xraySlides, cookieKeyNames, cookieKeyNamesAr, animationCharacterState, xraySlugNames, defaultUseragent } from '../WebsiteConstants'
import VideoFullScreenWidget from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'
import { replaceDogName, getCssDisplayState, displayDog } from '../utils/displayUtils'
import BottomNavigationLink from '../components/BottomNavigationLink'
import { LeftPageSection, RightPageSection, PageSection } from '../components/PageParts'
import HintSwitcher from '../components/HintSwitcher'
import { setCaseStudyProgress } from '../utils/dataUtils'
import { processField, getBrowser } from "../utils/displayUtils"
import { getVideoData, updateSlideDataWithVideoData, updateDataWithDogVariant, getTaskSummaryData } from "../utils/dataUtils"
import {BottomHeaderUltrasound, BottomBodyUltrasound, BottomXrayHeader, ToolTip, ToolTipText, TapCircle, HintCircle, Triangle, TriangleBlue, Frame, FrameInner,
  BottomRightIntroText, BottomRightIntroBodyText,PopupDarkBlue, PopupLightOrangeHeaderText, PopupWhiteBodyText, Popup2DarkBlue, Popup2HeaderText, Popup2WhiteBodyText,
  TaskSummaryHeader, TaskSummarySubHeader, TaskSummaryTableHolder, TaskSummaryFootnote, SliderTextHolder, SwitchHolder,
   TooltipTopHolder, TooltipBottomHolder, TooltipLeftHolder, TooltipRightHolder} from "../components/ActivityParts" 
import { getDogImageName } from '../utils/assetUtils'
import { BlueDot,OrangeEndDot,OrangeSmallDot,WhiteSmallDot,DarkBlueBigDot,SkyBlueEndDot } from '../components/TaskParts'



const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
`

const gridStyle = { border: '0px solid red',height:'100vh' }

const linesSvg = (props) => {
  return (  
    <div id={props.id} style={props.style}>
        <svg id="lines" xmlns="http://www.w3.org/2000/svg" height="500px" viewBox="0 0 300 250">
            <path className="path path01" fill="none" stroke={theme.palette.skyBlue.main} strokeWidth="2" d="M176 103l100 210"></path>
        </svg> 
    </div>
  )
}
const Lines = styled(linesSvg)`
     filter: drop-shadow(0px -5px 15px #ffce00);
     opacity: 1;
`

const linesSvg2 = (props) => {
  return (  
    <div id={props.id} style={props.style}>
        <svg id="lines" xmlns="http://www.w3.org/2000/svg" height="500px" viewBox="0 0 300 250">
            <path className="path path02" fill="none" stroke={theme.palette.peachCobbler.main} strokeWidth="2" d="M176 103l100 90"></path>
        </svg> 
    </div>
  )
}
const Lines2 = styled(linesSvg2)`
     filter: drop-shadow(0px -5px 15px #ffce00);
     opacity: 1;
`


const SlideText = ({display,tappedStageWrongArea,failedText,bodyText,titleText,stage = 0}) => {
     
    return (<SliderTextHolder style={{display: display}}>
                <div style={{display: (tappedStageWrongArea) ? 'flex':'none',alignItems:'center',border:'0px solid red'}}>
                      <CrossSvg style={{width:'150px',height:'50px',border:'0px solid red'}}/> 
                      <BottomXrayHeader style={{border:'0px solid red'}}>{failedText}</BottomXrayHeader>
                </div>
                <div style={{display: (tappedStageWrongArea) ? 'none':'block',border:'0px solid red'}}>
                      <BottomXrayHeader style={{display: (stage === 8) ? 'flex' : 'none'}}>{(stage === 8) ? <div style={{display: 'flex',flexDirection:'row', alignContent:'center',fontSize:'1rem'}}>
                        <LightBlueSmallDot  style={{display: 'flex',alignContent:'center' }}/>
                        <div style={{display: 'flex',alignContent:'center',fontWeight:'600', color: 'white'}}>&nbsp;&nbsp;{titleText}</div></div> : ''}
                      </BottomXrayHeader>
                      <BottomXrayHeader style={{display: (stage === 8) ? 'flex' : 'none'}}>{(stage === 8) ? <div style={{display: 'flex',flexDirection:'row', alignContent:'center',color: 'white',fontSize:'1rem'}}>
                        <OrangeSmallDot  style={{display: 'flex',alignContent:'center' }}/>
                        <div style={{display: 'flex',alignContent:'center', fontWeight:'600', color: 'white'}}>&nbsp;&nbsp;{bodyText}</div></div> : ''}
                      </BottomXrayHeader>

                      <BottomXrayHeader  style={{color: 'white',fontSize:(stage === 7) ? '1rem' : '1.375rem' }}>{(stage !== 8) ? titleText : ''}</BottomXrayHeader>
                      <ThemeProvider theme={theme}>
                          <StyledTypography style={{color: 'white' }} variant="body1">{(stage !== 8) ? bodyText : ''}</StyledTypography>
                      </ThemeProvider> 
                </div>
      </SliderTextHolder>)
}

const TooltipHolder1 = ({id,hintChecked, stageVisible, textHtml, leftPos = '15%', topPos = '29%'}) => {
  return (<div id={id} style={{display:(hintChecked && stageVisible) ? 'block':'none', position:'absolute',left:leftPos,top:topPos,border:'0px solid red'}}>
        <ToolTip>
              <ToolTipText>{stripUneededHtml(textHtml)}</ToolTipText>
        </ToolTip>
        <div><Triangle /></div>
        <HintCircle style={{margin: 'auto'}} />
        </div>)
}

const XrayTaskOuterContainer = styled.div`
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

class XrayContainer extends React.Component {
    
    constructor(props) {
        super(props)
        this.timerID = 0
        this.state = {}
        this.state.dogChoice = props.dogChoice
        this.state.showIntroduction = true
        this.state.stage = xraySlides.STAGE0
        this.state.hintChecked = false
        this.state.isLineAnimationVisible = false
        this.state.tappedStage1 = false
        this.state.tappedStage2 = false
        this.state.tappedRightSideOfHeart = false
        this.state.tappedLeftSideOfHeart = false
        this.state.tappedStageWrongArea = false
        this.state.showFullScreenVideo = false
        this.resources = {}

        this.taskData = {}
        this.taskSummaryData = {}

        //
       
        this.setTaskProgress = props.setTaskProgress
        
        this.resourcesAr = get(this, 'props.data.allNodeTask.nodes') 

        this.resources = getSlideData(this.resourcesAr,xraySlugNames.TASK)

        this.resourcesSummaryAr = get(this, 'props.data.allNodeTasksummary.nodes')
        this.resourcesSummary = getSlideData(this.resourcesSummaryAr,xraySlugNames.SUMMARY) 
        console.log(this.resourcesSummary)

        // adjust intial data for each dog

        let dudleyTaskData = getSlideData(this.resourcesAr,xraySlugNames.TASK_DUDLEY)
        let poppyTaskData = getSlideData(this.resourcesAr,xraySlugNames.TASK_POPPY)
        let reggieTaskData = getSlideData(this.resourcesAr,xraySlugNames.TASK_REGGIE)

        let dudleyTaskSummaryData = getSlideData(this.resourcesSummaryAr,xraySlugNames.TASK_SUMMARY_DUDLEY)
        let poppyTaskSummaryData = getSlideData(this.resourcesSummaryAr,xraySlugNames.TASK_SUMMARY_POPPY)
        let reggieTaskSummaryData = getSlideData(this.resourcesSummaryAr,xraySlugNames.TASK_SUMMARY_REGGIE)

        let taskData = {}

        taskData = this.resources
  
        let summaryData = {}

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

        let videoXraySummary = getVideoData(this.resourcesSummary,this.state.dogChoice)
        let xrayData = this.resourcesSummary
        xrayData.dogChoice = this.state.dogChoice
        this.resourcesSummary = updateSlideDataWithVideoData(xrayData,videoXraySummary) 
        console.log(this.resourcesSummary)

        this.taskData = taskData
        this.taskSummaryData = summaryData

    }

    componentDidMount() {

    }

    componentWillUnmount() {
     
    }
    
    tick() {

    }

    render() {


      if (this.state.stage >= xraySlides.STAGE6) { 
           this.setTaskProgress(tasks.XRAY_EXAMINATION)
      }

      console.log("========= CURRENT STAGE ======",this.state.stage )

      const moveToTaskStart = (param) => {
          console.log("INTRO FINISHED")
          TweenLite.set("#step0",{visible: 'hidden'})
          this.state.showIntroduction = false;
          this.state.stage = 1
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
        this.state.stage = 4
        this.forceUpdate()
      }

      function drawLineAnimation1() {
        console.log("start draw 1")
        TweenLite.defaultEase = Linear.easeNone;
        TweenLite.set(".path01",{opacity: 1})
         // safari svg bug fix
         let action = null
         if (getBrowser() === 'Safari') {
               action = new TimelineMax()
              .fromTo(".path01", 1, {autoAlpha:0,drawSVG:0,repeat:0},{autoAlpha:1,drawSVG:138})
         } else {
               action = new TimelineMax()
              .fromTo(".path01", 1, {autoAlpha:0,drawSVG:0,repeat:0},{autoAlpha:1,drawSVG:138})
         }
         action.eventCallback("onComplete", moveStep, ["param1"]);
      }

      const moveToStep5 = (param) => {
        console.log("LINE 2 FINISHED")
        this.state.stage = 6
        this.forceUpdate()
      }

      function drawLineAnimation2() {
        TweenLite.defaultEase = Linear.easeNone;
        // safari svg bug fix
        let action = null
        if (getBrowser() === 'Safari') {
             action = new TimelineMax().fromTo(".path02", 1, {autoAlpha:0,drawSVG:0,repeat:0},{autoAlpha:1,drawSVG:89})
        } else {
             action = new TimelineMax().fromTo(".path02", 1, {autoAlpha:0,drawSVG:0,repeat:0},{autoAlpha:1,drawSVG:114})
        }
        action.eventCallback("onComplete", moveToStep5, ["param1"])
      }

      const moveToStep8 = (param) => {
        console.log("LINE 3 FINISHED")
        this.state.stage = 8
        this.forceUpdate()
      }

      function  drawLineAnimationPoppy3() {
        TweenLite.defaultEase = Linear.easeNone;
        TweenLite.set("#dot01aHolder",{opacity:0})

        let action = null
        // safari svg bug fix
        if (getBrowser() === 'Safari') {
             action = new TimelineMax()

            .fromTo("#dot01aHolder", 1, {autoAlpha:0, delay:0},{autoAlpha:1})
            .fromTo("#dot01a", 1, {autoAlpha:1, delay:1},{autoAlpha:0})

            .to("#line01", 3, {x:"37px",y:"-48px",transform:'rotate(-78deg)', delay:3, drawSVG:89})
            .fromTo("#line01", 3.5, { delay:6, drawSVG:88 }, { drawSVG:89 })
      
            .fromTo("#line02", 3, {transform:'rotate(112deg) translate(-238px, -138px)'}, {x:"84px",y:"-132px", transform:'rotate(-56deg)'})

            .fromTo("#dot02", 1, {autoAlpha:0, delay:6},{autoAlpha:1})
            .fromTo("#dot03", 1, {autoAlpha:0, delay:6.5},{autoAlpha:1})
            .fromTo("#dot04", 1, {autoAlpha:0, delay:7},{autoAlpha:1})
            .fromTo("#dot05", 1, {autoAlpha:0, delay:8.5},{autoAlpha:1})
            .fromTo("#dot06", 1, {autoAlpha:0, delay:8},{autoAlpha:1})
            .fromTo("#dot07", 1, {autoAlpha:0, delay:9.5},{autoAlpha:1})
            .fromTo("#dot08", 1, {autoAlpha:0, delay:10},{autoAlpha:1})
            .fromTo("#dot09", 1, {autoAlpha:0, delay:10.5},{autoAlpha:1})
           

            action.eventCallback("onComplete", moveToStep8, ["param1"])
        } else {
          // 
          action = new TimelineMax()

          .fromTo("#dot01aHolder", 1, {autoAlpha:0, delay:0},{autoAlpha:1})
          .fromTo("#dot01a", 1, {autoAlpha:1, delay:1},{autoAlpha:0})

          .to("#line01", 3, {x:"37px",y:"-48px",transform:'rotate(-78deg)', delay:3})
    
          .fromTo("#line02", 3, {transform:'rotate(112deg) translate(-238px, -138px)',delay:3},{x:"84px",y:"-132px",transform:'rotate(-56deg)'})

          .fromTo("#dot02", 1, {autoAlpha:0, delay:6},{autoAlpha:1})
          .fromTo("#dot03", 1, {autoAlpha:0, delay:6.5},{autoAlpha:1})
          .fromTo("#dot04", 1, {autoAlpha:0, delay:7},{autoAlpha:1})
          .fromTo("#dot05", 1, {autoAlpha:0, delay:8.5},{autoAlpha:1})
          .fromTo("#dot06", 1, {autoAlpha:0, delay:8},{autoAlpha:1})
          .fromTo("#dot07", 1, {autoAlpha:0, delay:9.5},{autoAlpha:1})
          .fromTo("#dot08", 1, {autoAlpha:0, delay:10},{autoAlpha:1})
          .fromTo("#dot09", 1, {autoAlpha:0, delay:10.5},{autoAlpha:1})

          action.eventCallback("onComplete", moveToStep8, ["param1"])

        }
      }

    function  drawLineAnimationDudley3() {
      TweenLite.defaultEase = Linear.easeNone;
      TweenLite.set("#dot01aHolder",{opacity:0})

      let action = null
      if (getBrowser() === 'Safari') {
      
          action = new TimelineMax()

          .fromTo("#dot01aHolder", 1, {autoAlpha:0, delay:0},{autoAlpha:1})
          .fromTo("#dot01a", 1, {autoAlpha:1, delay:1},{autoAlpha:0})

          .to("#line01", 3, {x:"37px",y:"-107px",transform:'rotate(-78deg)', delay:3})
          .fromTo("#line02", 3, {transform:'rotate(112deg) translate(-238px, -138px)' ,delay:3},{x:"84px",y:"-186px",transform:'rotate(-56deg)'})

          .fromTo("#dot02", 1, {autoAlpha:0, delay:6},{autoAlpha:1})
          .fromTo("#dot03", 1, {autoAlpha:0, delay:6.5},{autoAlpha:1})
          .fromTo("#dot04", 1, {autoAlpha:0, delay:7},{autoAlpha:1})
          .fromTo("#dot05", 1, {autoAlpha:0, delay:8.5},{autoAlpha:1})
          .fromTo("#dot06", 1, {autoAlpha:0, delay:8},{autoAlpha:1})
          // .fromTo("#dot07", 1, {autoAlpha:0, delay:9.5},{autoAlpha:1})
          .fromTo("#dot08", 1, {autoAlpha:0, delay:10},{autoAlpha:1})
          .fromTo("#dot09", 1, {autoAlpha:0, delay:10.5},{autoAlpha:1})

          action.eventCallback("onComplete", moveToStep8, ["param1"])
      } else {
          action = new TimelineMax()

          .fromTo("#dot01aHolder", 1, {autoAlpha:0, delay:0},{autoAlpha:1})
          .fromTo("#dot01a", 1, {autoAlpha:1, delay:1},{autoAlpha:0})

          .to("#line01", 3, {x:"37px",y:"-107px",transform:'rotate(-78deg)', delay:3})
          .fromTo("#line02", 3, {transform:'rotate(112deg) translate(-238px, -138px)' ,delay:3},{x:"84px",y:"-186px",transform:'rotate(-56deg)'})

          .fromTo("#dot02", 1, {autoAlpha:0, delay:6},{autoAlpha:1})
          .fromTo("#dot03", 1, {autoAlpha:0, delay:6.5},{autoAlpha:1})
          .fromTo("#dot04", 1, {autoAlpha:0, delay:7},{autoAlpha:1})
          .fromTo("#dot05", 1, {autoAlpha:0, delay:8.5},{autoAlpha:1})
          .fromTo("#dot06", 1, {autoAlpha:0, delay:8},{autoAlpha:1})
          // .fromTo("#dot07", 1, {autoAlpha:0, delay:9.5},{autoAlpha:1})
          .fromTo("#dot08", 1, {autoAlpha:0, delay:10},{autoAlpha:1})
          .fromTo("#dot09", 1, {autoAlpha:0, delay:10.5},{autoAlpha:1})

          action.eventCallback("onComplete", moveToStep8, ["param1"])
      }
    }
    //

    function  drawLineAnimationReggie3() {
      TweenLite.defaultEase = Linear.easeNone;
      TweenLite.set("#dot01aHolder",{opacity:0})
      let action = null
      if (getBrowser() === 'Safari') {

            action = new TimelineMax()

            .fromTo("#dot01aHolder", 1, {autoAlpha:0, delay:0},{autoAlpha:1})
            .fromTo("#dot01a", 1, {autoAlpha:1, delay:1},{autoAlpha:0})

            .to("#line01", 3, {x:"31px",y:"-78px",transform:'rotate(-85deg)', delay:3})    
      
            .fromTo("#line02", 3, {transform:'rotate(101deg) translate(-238px, -138px)' ,delay:3},{x:"42px",y:"-181px",transform:'rotate(-62deg)'})

            .fromTo("#dot02", 1, {autoAlpha:0, delay:6},{autoAlpha:1})
            .fromTo("#dot03", 1, {autoAlpha:0, delay:6.5},{autoAlpha:1})
            .fromTo("#dot04", 1, {autoAlpha:0, delay:7},{autoAlpha:1})
            .fromTo("#dot05", 1, {autoAlpha:0, delay:8.5},{autoAlpha:1})
            .fromTo("#dot06", 1, {autoAlpha:0, delay:8},{autoAlpha:1})
            .fromTo("#dot07", 1, {autoAlpha:0, delay:9.5},{autoAlpha:1})
            .fromTo("#dot08", 1, {autoAlpha:0, delay:10},{autoAlpha:1})
            .fromTo("#dot09", 1, {autoAlpha:0, delay:10.5},{autoAlpha:1})
            .fromTo("#dot10", 1, {autoAlpha:0, delay:10},{autoAlpha:1})

            action.eventCallback("onComplete", moveToStep8, ["param1"])
        } else {
            action = new TimelineMax()

            .fromTo("#dot01aHolder", 1, {autoAlpha:0, delay:0},{autoAlpha:1})
            .fromTo("#dot01a", 1, {autoAlpha:1, delay:1},{autoAlpha:0})

            .to("#line01", 3, {x:"31px",y:"-78px",transform:'rotate(-85deg)', delay:3})    
      
            .fromTo("#line02", 3, {transform:'rotate(101deg) translate(-238px, -138px)' ,delay:3},{x:"42px",y:"-181px",transform:'rotate(-62deg)'})

            .fromTo("#dot02", 1, {autoAlpha:0, delay:6},{autoAlpha:1})
            .fromTo("#dot03", 1, {autoAlpha:0, delay:6.5},{autoAlpha:1})
            .fromTo("#dot04", 1, {autoAlpha:0, delay:7},{autoAlpha:1})
            .fromTo("#dot05", 1, {autoAlpha:0, delay:8.5},{autoAlpha:1})
            .fromTo("#dot06", 1, {autoAlpha:0, delay:8},{autoAlpha:1})
            .fromTo("#dot07", 1, {autoAlpha:0, delay:9.5},{autoAlpha:1})
            .fromTo("#dot08", 1, {autoAlpha:0, delay:10},{autoAlpha:1})
            .fromTo("#dot09", 1, {autoAlpha:0, delay:10.5},{autoAlpha:1})
            .fromTo("#dot10", 1, {autoAlpha:0, delay:10},{autoAlpha:1})

            action.eventCallback("onComplete", moveToStep8, ["param1"])
        }
      }


      const moveToStep9 = (param) => {
        console.log("LINE 4 FINISHED")
        this.state.stage = 9
        this.forceUpdate()
      }

      function drawLineAnimation4() {
        TweenLite.defaultEase = Linear.easeNone;
        const action = new TimelineMax()
        .from(".dot01", 6, {autoAlpha:1, delay:3})
        action.eventCallback("onComplete", moveToStep9, ["param1"]);
      }

      const showStage1Tap1 = (event) => {
          event.preventDefault()
          
          //this.state.tappedStage1 = true
          this.state.stage = 2
          this.state.tappedStageWrongArea = false
          console.log("showStage1Tap1 aaaa",this.state.stage )
          this.forceUpdate()
      }

      const showStage1Tap2 = (event) => {
          event.preventDefault()
      
          //if (this.state.tappedStage1) {
            this.state.stage = 3
            this.state.tappedStageWrongArea = false
            console.log("showStage1Tap2 fff",this.state.stage )
            this.forceUpdate()
          //} 
      }

      const showStage2Tap1 = (event) => {
        event.preventDefault()
        this.state.tappedStageWrongArea = false
        this.state.tappedLeftSideOfHeart = true
        this.state.tappedStageWrongArea = false
        if (this.state.tappedRightSideOfHeart) {
           this.state.stage = 5
        }
        console.log("showStage2Tap1",this.state.stage )
        this.forceUpdate()
    }

    const showStage2Tap2 = (event) => {
        event.preventDefault()
        this.state.tappedStageWrongArea = false
        this.state.tappedRightSideOfHeart = true
        this.state.tappedStageWrongArea = false
        if (this.state.tappedLeftSideOfHeart) {
          this.state.stage = 5
        }
        console.log("showStage2Tap2",this.state.stage )
        this.forceUpdate()

    }

    const showStage5Tap1 = (event) => {
        event.preventDefault()
        this.state.tappedStageWrongArea = false
        //if (this.state.tappedLeftSideOfHeart) {
          this.state.stage = 7
        ///}
        console.log("showStage5Tap1",this.state.stage )
        this.forceUpdate()

    }

    const showStage3Tap2 = (event) => {
        event.preventDefault()
        console.log("showStage3Tap2",this.state.stage )
        //if (this.state.tappedStage1) {
            this.state.tappedStage1 = false
            this.state.tappedStageWrongArea = false
            drawLineAnimation3();
        //} 
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

      const displayState1 = (stage) => { return (stage === xraySlides.STAGE1) ? 'block':'none' }
      const displayState2 = (stage) => { return (stage === xraySlides.STAGE2) ? 'block':'none' }
      const displayState3 = (stage) => { return (stage === xraySlides.STAGE3) ? 'block':'none' }
      const displayState4 = (stage) => { return (stage === xraySlides.STAGE4) ? 'block':'none' }
      const displayState5 = (stage) => { return (stage === xraySlides.STAGE5) ? 'block':'none' }
      const displayState6 = (stage) => { return (stage === xraySlides.STAGE6) ? 'block':'none' }
      const displayState7 = (stage) => { return (stage === xraySlides.STAGE7) ? 'block':'none' }
      const displayState8 = (stage) => { return (stage === xraySlides.STAGE8) ? 'block':'none' }

      const displayStateLine01 = (stage) => {
          return (stage === xraySlides.STAGE3 || stage === xraySlides.STAGE4 || stage === xraySlides.STAGE5 || stage === xraySlides.STAGE6) ? 'block':'none'
      }

      const displayStateLine02 = (stage) => {
          return (stage === xraySlides.STAGE5 || stage === xraySlides.STAGE6 ) ? 'block':'none'
      }
      

      const displayStateSwitch = (stage) => {
           return (stage === 1 || stage === 2 || stage === 4 || stage === 6) ? 'block' : 'none'
      }

      // trigger animations on stage change

      if (typeof window !== 'undefined') {
          if (this.state.stage === 0) hideIntro()
          if (this.state.stage === 3) drawLineAnimation1()
          if (this.state.stage === 5) drawLineAnimation2()
          if (this.state.stage === 7) {
             if (this.state.dogChoice === dogName.DUDLEY)  drawLineAnimationDudley3()
             if (this.state.dogChoice === dogName.POPPY)  drawLineAnimationPoppy3()
             if (this.state.dogChoice === dogName.REGGIE)  drawLineAnimationReggie3()
           
          }
          if (this.state.stage === 8) drawLineAnimation4()
      }

  
      if (this.state.stage > xraySlides.STAGE8) {
        return (
          <Layout>
          <PageSection id="step3" style={{display: 'flex'}}>

                <LeftPageSection id="summaryImage">
                    <CustomFluidImage  style={{width:'500px',height:'500px'}} imgName={getDogImageName(animationCharacterState.NEUTRAL,this.state.dogChoice)} />
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
                    
                    <TaskSummaryFootnote>{this.taskSummaryData.footerText}</TaskSummaryFootnote>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>

                    <VideoSmallWidget videoData1={this.resourcesSummary.videoData1} instance="One"/>

                    <BottomNavigationLink to="/ultrasound/" distanceFromSide={"2%"} bottom={"2%"} linkText={"Continue"}/>
                    
                </RightPageSection> 
            
                <VideoFullScreenWidget videoData1={this.resourcesSummary.videoData1} instance={"One"} />
          
            </PageSection>
        </Layout>
        )
      }

      if (this.state.stage === xraySlides.STAGE0) {

        return (<Layout>

           
             <Grid container  
                spacing={0} 
                spacing={0} 
                justify="flex-start" 
                style={gridStyle}>
    
                <Grid item xs={12} sm={12}  style={gridStyle}> 
    
                    <div id="step0" style={{display: (this.state.stage === 0) ? 'flex':'none',flexDirection:'row',width:'100%',margin:'auto'}}>
                            <div id="introImage" style={{display:'flex',width:'50%',height:'100vh',flexDirection:'column',alignItems:'flex-end',justifyContent:'center'}}> 
                                <CustomFluidImage  style={{display: displayDog(this.state.dogChoice, dogName.DUDLEY), width:'500px',height:'500px'}} imgName="Xray-Table-Dudley-01.png" />
                                <CustomFluidImage  style={{display: displayDog(this.state.dogChoice, dogName.POPPY), width:'500px',height:'500px'}} imgName="Xray-Table-Poppy-01.png" />
                                <CustomFluidImage  style={{display: displayDog(this.state.dogChoice, dogName.REGGIE), width:'500px',height:'500px'}} imgName="Xray-Table-Reggie-01.png" />
                            </div>
                            <div id="introText" style={{display:'flex',width:'50%',height:'100vh',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}> 
                                <BottomRightIntroText>{stripUneededHtml(replaceDogName((this.resources.field_instructionstext) ? this.resources.field_instructionstext.processed : '',this.state.dogChoice))}</BottomRightIntroText>
                                <BottomRightIntroBodyText>{stripUneededHtml(replaceDogName(this.resources.field_infotext ? this.resources.field_infotext.processed :'' ,this.state.dogChoice))}</BottomRightIntroBodyText>
                            </div> 
                       </div>
    
                  </Grid>
               </Grid>
        </Layout>
        )
      }

        // flex or not
    

        if (this.state.dogChoice === dogName.DUDLEY) {
    
          return (<Layout>
    
            <XrayTaskOuterContainer>
                    <Frame id="step1" style={{display: 'block'}}>
                        <FrameInner>
    
                            <CustomFluidImage style={{display: displayDog(this.state.dogChoice, dogName.DUDLEY)}} imgName="Dog-2_Dudley_xray_from_pdf.jpg" />
                           
  
                            <div id="LinesHolder1" style={{display: displayStateLine01(this.state.stage),position:'absolute',left:'221px',top:'15px',width:'600px',height:'250px'}}>
                              <Lines />
                            </div>

                            <div id="LinesHolder2" style={{display: displayStateLine02(this.state.stage),position:'absolute',left:'15%',top:'123px',width:'600px',height:'250px'}}>
                              <Lines2 style={{opacity:1,transform: 'rotate(112deg) translate(-238px, -138px)'}}/>
                            </div>
  
                            <div id="LinesHolder3a" style={{display: displayState7(this.state.stage),position:'absolute',left:'221px',top:'15px',width:'600px',height:'250px'}}>
                          <Lines id="line01" />
                        </div>
   
                        <div id="LinesHolder3b" style={{display: displayState7(this.state.stage),position:'absolute',left:'15%',top:'123px',width:'600px',height:'250px'}}>
                          <Lines2 id="line02" />
                        </div>
     
    
                            <div id="LinesHolder3c" style={{display: displayState7(this.state.stage),position:'absolute',left:'51%',top:'87px',width:'600px',height:'250px'}}>
   
                          <div id="dot01aHolder" style={{opacity:'0',position:"absolute",left:"-12px",top:"-36px"}}>
                                <BlueDot id={"dot01a"} />
                                <DarkBlueBigDot id="dot01" style={{position:"absolute",left:"-17px",top:"-68px"}}>
                                  <div style={{position:"absolute",left:"21.5%",top:"30%",color:'white',fontSize:'2rem',fontWeight:'600',fontFamily:theme.overrides.MuiTypography.h1.fontFamily}}>
                                    T4
                                  </div>
                                  <TriangleBlue id="dot01TriangleUnderneath" style={{position:"absolute", left: '35%',top:'99%'}}/>
                              </DarkBlueBigDot>
                          </div>


                          <WhiteSmallDot id={"dot02"} style={{position:"absolute",left:"9px",top:"17px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>1</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot03"} style={{position:"absolute",left:"56px",top:"8px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>2</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot04"} style={{position:"absolute",left:"105px",top:"-2px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>3</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot05"} style={{position:"absolute",left:"157px",top:"-13px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>4</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot06"} style={{position:"absolute",left:"206px",top:"-23px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>5</div></WhiteSmallDot>
                          {/* <WhiteSmallDot id={"dot07"} style={{position:"absolute",left:"258px",top:"-29px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>6</div></WhiteSmallDot> */}
   
                          {/* <SkyBlueEndDot id={"dot08"} style={{position:"absolute",left:"263px",top:"-61px"}}><div style={{position:"absolute",left:"20%",top:"10%",color:theme.palette.midnightBlue.main,fontSize:'0.7rem'}}>6.7</div></SkyBlueEndDot> */}
                              <SkyBlueEndDot id={"dot08"} style={{position:"absolute",left:"257px",top:"-67px"}}><div style={{position:"absolute",left:"20%",top:"10%",color:theme.palette.midnightBlue.main,fontSize:'0.7rem'}}>5.8</div></SkyBlueEndDot>
                              <OrangeEndDot id={"dot09"} style={{position:"absolute",left:"214px",top:"-34px"}}><div style={{position:"absolute",left:"20%",top:"10%",color:theme.palette.midnightBlue.main,fontSize:'0.7rem'}}>4.4</div></OrangeEndDot>
                            </div>
     
    
                            <div id="wrongTapArea" onClick={showError} style={{ position:'absolute',left:'2%',top:'0',width:'700px',height:'500px',border:'0px solid red'}}></div>
    
                            <SlideText display={displayState1(this.state.stage)} 
                                  stage={this.state.stage}
                                  tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                  failedText={this.resources.field_failedtext.processed}
                                  bodyText={this.resources.field_bottombodytext.processed}
                                  titleText={this.resources.field_bottomtitle.processed} />
                                  
                            <SlideText display={displayState2(this.state.stage)} 
                                  stage={this.state.stage}
                                  tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                  failedText={this.resources.field_failedtext.processed}
                                  // bodyText={"stage 2"}
                                  bodyText={(this.resources.field_bottombodystep2) ? this.resources.field_bottombodystep2.processed : ''}
                                  titleText={this.resources.field_bottomtitlestep2.processed} />
                             <SlideText display={displayState3(this.state.stage)} 
                                  stage={this.state.stage}
                                  tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                  failedText={this.resources.field_failedtext.processed}
                                  bodyText={""}
                                  titleText={""} />
                                  
                            <SlideText display={displayState4(this.state.stage)}
                                  stage={this.state.stage}
                                  tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                  failedText={this.resources.field_failedtext4.processed}
                                  bodyText={(this.resources.field_bottombodystep3) ? this.resources.field_bottombodystep3.processed : ''}
                                  titleText="Select either side of the widest part of the heart"/>
                                  {/* {this.resources.field_bottomtitlestep3.processed}  */}
                            <SlideText display={displayState5(this.state.stage)}
                                  stage={this.state.stage}
                                  tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                  failedText={this.resources.field_failedtext4.processed}
                                  bodyText={(this.resources.field_bottombodystep4) ? this.resources.field_bottombodystep4.processed : ''}
                                  titleText="" />
                                  {/* {this.resources.field_bottomtitlestep4.processed} */}
    
                            <SlideText display={displayState6(this.state.stage)}
                                  stage={this.state.stage}
                                  tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                  failedText={"Try again"}
                                  bodyText={""}
                                  titleText={this.resources.field_bottomtitlestep5.processed} />
    
                            <SlideText display={displayState7(this.state.stage)}
                                  stage={this.state.stage}
                                  tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                  failedText={"Try again"}
                                  bodyText={""}
                                  titleText={this.resources.field_bottomtitlestep6.processed} />
    
                            {/* <SlideText display={displayState8(this.state.stage)}
                                  stage={this.state.stage}
                                  tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                  failedText={"Try again"}
                                  bodyText={(this.resources.field_finalscreenbottomline2) ? this.resources.field_finalscreenbottomline2.processed : 'Short axis measurement = 5.8'}
                                  titleText={this.resources.field_finalscreenbottomline1 ? this.resources.field_finalscreenbottomline1 : 'Long axis measurement = 4.4'} />
    
                            <PopupDarkBlue  style={{display: displayState8(this.state.stage)}}>
                              <PopupLightOrangeHeaderText>{stripUneededHtml(this.resources.field_popupheadertext.processed ? this.resources.field_popupheadertext : '5.8 + 4.4')}</PopupLightOrangeHeaderText>
                              <PopupWhiteBodyText>{stripUneededHtml(this.resources.field_popupbodytext.processed ? this.resources.field_popupbodytext.processed : 'VHS Total = 10.2')}</PopupWhiteBodyText>
                            </PopupDarkBlue> */}

                            {/* TODO - remove hardcoded value */}

                            <SlideText display={displayState8(this.state.stage)}
                                  stage={this.state.stage}
                                  tappedStageWrongArea={this.state.tappedStageWrongArea} 
                                  failedText={"Try again"}
                                  bodyText={'Short axis measurement = 4.4'}
                                  titleText={ 'Long axis measurement = 5.8'} />
    
                            <PopupDarkBlue  style={{display: displayState8(this.state.stage)}}>
                              <PopupLightOrangeHeaderText>{ '5.8 + 4.4'}</PopupLightOrangeHeaderText>
                              <PopupWhiteBodyText>{ 'VHS Total = 10.2'}</PopupWhiteBodyText>
                            </PopupDarkBlue>
           
                            <SwitchHolder id="switch" style={{display: displayStateSwitch(this.state.stage)}}><HintSwitcher onChange={handleSwitchChange} hintChecked={this.state.hintChecked} /></SwitchHolder>
                            

                             <TooltipHolder1 id="tip1" stageVisible={(this.state.stage === xraySlides.STAGE1 || this.state.stage === xraySlides.STAGE2)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} leftPos = '393px' topPos = '62px' />

                             <TooltipRightHolder id="tip2a" stageVisible={(this.state.stage === xraySlides.STAGE1 || this.state.stage === xraySlides.STAGE2)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '647px' topPos = '439px' />

                             <HintCircle id="tip3" style={{display: this.state.hintChecked && (this.state.stage === xraySlides.STAGE4 || this.state.stage === xraySlides.STAGE5) ? 'block' : 'none',position:'absolute', left: "437px",top:"319px"}} />       

                             <TooltipRightHolder id="tip3a" stageVisible={(this.state.stage === xraySlides.STAGE4 || this.state.stage === xraySlides.STAGE5)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext3.processed} leftPos = '645px' topPos = '182px' />
  
                             <TooltipRightHolder id="tip4" stageVisible={(this.state.stage === xraySlides.STAGE6)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext4.processed} leftPos = '466px' topPos = '-16px' />
    

                             <div id="tapArea2" onClick={showStage1Tap1} style={{display: displayState1(this.state.stage),opacity:'0',position:'absolute',right: '280px',top:'459px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 
  
                             <div id="tapArea1" onClick={showStage1Tap2} style={{display: displayState2(this.state.stage),opacity:'0',position:'absolute',left: '552px',top:'190px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>
  
                             <div id="tapArea3" onClick={showStage2Tap1} style={{display: displayState4(this.state.stage),opacity:'0',position:'absolute',left:'455px',top:'336px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>
  
                             <div id="tapArea4" onClick={showStage2Tap2} style={{display: displayState4(this.state.stage),opacity:'0',position:'absolute',left:'663px',top:'256px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 
    
                             <div id="tapArea5" onClick={showStage5Tap1} style={{display: displayState6(this.state.stage),opacity:'0',position:'absolute',left:'484px',top:'44px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 
    
                        </FrameInner>
                    </Frame>
    
            </XrayTaskOuterContainer>
          </Layout>
          )
        }


      // =============================== POPPY =============================


      if (this.state.dogChoice === dogName.POPPY) {
    
      return (<Layout>

        <XrayTaskOuterContainer>
                <Frame id="step1" style={{display: 'block'}}>
                    <FrameInner>

                       
                        <CustomFluidImage style={{display: displayDog(this.state.dogChoice, dogName.POPPY)}} imgName="Dog-2_Poppy_xray_from_pdf.jpg" />
                        

                        <div id="LinesHolder1" style={{display: displayStateLine01(this.state.stage),position:'absolute',left:'90px',top:'46px',width:'600px',height:'250px'}}>
                          <Lines />
                        </div>
                        <div id="LinesHolder2" style={{display: displayStateLine02(this.state.stage),position:'absolute',left:'2%',top:'160px',width:'600px',height:'250px'}}>
                          <Lines2 style={{opacity:1,transform: 'rotate(112deg) translate(-238px, -138px)'}}/>
                        </div>
                        
                        <div id="LinesHolder3a" style={{display: displayState7(this.state.stage),position:'absolute',left:'90px',top:'46px',width:'600px',height:'250px'}}>
                          <Lines id="line01" />
                        </div>
                        
                        <div id="LinesHolder3b" style={{display: displayState7(this.state.stage),position:'absolute',left:'2%',top:'160px',width:'600px',height:'250px'}}>
                          <Lines2 id="line02" />
                        </div>
 

                        <div id="LinesHolder3c" style={{display: displayState7(this.state.stage),position:'absolute',left:'40%',top:'174px',width:'600px',height:'250px'}}>
                        
                          <div id="dot01aHolder" style={{opacity:'0',position:"absolute",left:"-3px",top:"-18px"}}>
                                <BlueDot id={"dot01a"} />
                                <DarkBlueBigDot id="dot01" style={{position:"absolute",left:"-17px",top:"-68px"}}>
                                  <div style={{position:"absolute",left:"21.5%",top:"30%",color:'white',fontSize:'2rem',fontWeight:'600',fontFamily:theme.overrides.MuiTypography.h1.fontFamily}}>
                                    T4
                                  </div>
                                  <TriangleBlue id="dot01TriangleUnderneath" style={{position:"absolute", left: '35%',top:'99%'}}/>
                              </DarkBlueBigDot>
                          </div>

                          <WhiteSmallDot id={"dot02"} style={{position:"absolute",left:"9px",top:"17px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>1</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot03"} style={{position:"absolute",left:"45px",top:"8px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>2</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot04"} style={{position:"absolute",left:"83px",top:"0px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>3</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot05"} style={{position:"absolute",left:"123px",top:"-10px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>4</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot06"} style={{position:"absolute",left:"165px",top:"-19px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>5</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot07"} style={{position:"absolute",left:"208px",top:"-29px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>6</div></WhiteSmallDot>
     
                          <SkyBlueEndDot id={"dot08"} style={{position:"absolute",left:"257px",top:"-67px"}}><div style={{position:"absolute",left:"20%",top:"10%",color:theme.palette.midnightBlue.main,fontSize:'0.7rem'}}>6.7</div></SkyBlueEndDot>
                          <OrangeEndDot id={"dot09"} style={{position:"absolute",left:"214px",top:"-34px"}}><div style={{position:"absolute",left:"20%",top:"10%",color:theme.palette.midnightBlue.main,fontSize:'0.7rem'}}>5.6</div></OrangeEndDot>
                        </div>
 

                        <div id="wrongTapArea" onClick={showError} style={{ position:'absolute',left:'2%',top:'0',width:'700px',height:'500px',border:'0px solid red'}}></div>

                        <SlideText display={displayState1(this.state.stage)} 
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={this.resources.field_failedtext.processed}
                              bodyText={this.resources.field_bottombodytext.processed}
                              titleText={this.resources.field_bottomtitle.processed} />
                              
                        <SlideText display={displayState2(this.state.stage)} 
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={this.resources.field_failedtext.processed}
                              // bodyText={"stage 2"}
                              bodyText={(this.resources.field_bottombodystep2) ? this.resources.field_bottombodystep2.processed : ''}
                              titleText={this.resources.field_bottomtitlestep2.processed} />
                         <SlideText display={displayState3(this.state.stage)} 
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={this.resources.field_failedtext.processed}
                              bodyText={""}
                              titleText={""} />
                              
                        <SlideText display={displayState4(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={this.resources.field_failedtext4.processed}
                              bodyText={(this.resources.field_bottombodystep3) ? this.resources.field_bottombodystep3.processed : ''}
                              titleText="Select either side of the widest part of the heart"/>
                              {/* {this.resources.field_bottomtitlestep3.processed}  */}
                        <SlideText display={displayState5(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={this.resources.field_failedtext4.processed}
                              bodyText={(this.resources.field_bottombodystep4) ? this.resources.field_bottombodystep4.processed : ''}
                              titleText="" />
                              {/* {this.resources.field_bottomtitlestep4.processed} */}

                        <SlideText display={displayState6(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={"Try again"}
                              bodyText={""}
                              titleText={this.resources.field_bottomtitlestep5.processed} />

                        <SlideText display={displayState7(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={"Try again"}
                              bodyText={""}
                              titleText={this.resources.field_bottomtitlestep6.processed} />

                        {/* TODO - remove hardcoded value */}

                        <SlideText display={displayState8(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={"Try again"}
                              bodyText={(this.resources.field_finalscreenbottomline2) ? this.resources.field_finalscreenbottomline2.processed : 'Short axis measurement = 5.6'}
                              titleText={this.resources.field_finalscreenbottomline1 ? this.resources.field_finalscreenbottomline1 : 'Long axis measurement = 6.7'} />

                        <PopupDarkBlue  style={{display: displayState8(this.state.stage)}}>
                          <PopupLightOrangeHeaderText>{stripUneededHtml(this.resources.field_popupheadertext.processed ? this.resources.field_popupheadertext : '6.7 + 5.6')}</PopupLightOrangeHeaderText>
                          <PopupWhiteBodyText>{stripUneededHtml(this.resources.field_popupbodytext.processed ? this.resources.field_popupbodytext.processed : '')}</PopupWhiteBodyText>
                        </PopupDarkBlue>
       
                        <SwitchHolder id="switch" style={{display: displayStateSwitch(this.state.stage)}}><HintSwitcher onChange={handleSwitchChange} hintChecked={this.state.hintChecked} /></SwitchHolder>
                        
     
                         <TooltipHolder1 id="tip1" stageVisible={(this.state.stage === xraySlides.STAGE1 || this.state.stage === xraySlides.STAGE2)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} leftPos = '263px' topPos = '99px' />
  
                         <TooltipRightHolder id="tip2a" stageVisible={(this.state.stage === xraySlides.STAGE1 || this.state.stage === xraySlides.STAGE2)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '515px' topPos = '454px' />
                        
                         <HintCircle id="tip3" style={{display: this.state.hintChecked && (this.state.stage === xraySlides.STAGE4 || this.state.stage === xraySlides.STAGE5) ? 'block' : 'none',position:'absolute', left: "315px",top:"368px"}} />       
  
                         <TooltipRightHolder id="tip3a" stageVisible={(this.state.stage === xraySlides.STAGE4 || this.state.stage === xraySlides.STAGE5)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext3.processed} leftPos = '519px' topPos = '215px' />

                         <TooltipHolder1 id="tip4" stageVisible={(this.state.stage === xraySlides.STAGE6)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext4.processed} 
                         leftPos = '225px' topPos = '-55px' />

                        
                         <div id="tapArea2" onClick={showStage1Tap1} style={{display: displayState1(this.state.stage),opacity:'0',position:'absolute',right: '411px',top:'473px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 
      
                         <div id="tapArea1" onClick={showStage1Tap2} style={{display: displayState2(this.state.stage),opacity:'0',position:'absolute',left: '423px',top:'227px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>
                         
                         <div id="tapArea3" onClick={showStage2Tap1} style={{display: displayState4(this.state.stage),opacity:'0',position:'absolute',left:'333px',top:'386px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>
       
                         <div id="tapArea4" onClick={showStage2Tap2} style={{display: displayState4(this.state.stage),opacity:'0',position:'absolute',left:'537px',top:'289px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 
 
                         <div id="tapArea5" onClick={showStage5Tap1} style={{display: displayState6(this.state.stage),opacity:'0',position:'absolute',left:'384px',top:'154px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 

                    </FrameInner>
                </Frame>

        </XrayTaskOuterContainer>
      </Layout>
      )
    }


    // ====================== REGGIE ==============

    if (this.state.dogChoice === dogName.REGGIE) {
    // Dog-2_Reggie_xray_from_pdf_ref1.jpg
      return (<Layout>

        <XrayTaskOuterContainer>
                <Frame id="step1" style={{display: 'block'}}>
                    <FrameInner>

                       
                        <CustomFluidImage style={{display: displayDog(this.state.dogChoice, dogName.REGGIE)}} imgName="Dog-2_Reggie_xray_from_pdf.jpg" />


    
                        <div id="LinesHolder1" style={{display: displayStateLine01(this.state.stage),position:'absolute',left:'180px',top:'51px',width:'600px',height:'250px'}}>
                          <Lines style={{transform: 'rotate(-14deg)'}} />
                        </div>

 
                        <div id="LinesHolder2" style={{display: displayStateLine02(this.state.stage),position:'absolute',left:'14%',top:'187px',width:'600px',height:'250px'}}>
                          <Lines2 style={{opacity:1,transform: 'rotate(101deg) translate(-238px, -138px)'}}/>
                        </div>
     
                        <div id="LinesHolder3a" style={{display: displayState7(this.state.stage),position:'absolute',left:'180px',top:'51px',width:'600px',height:'250px'}}>
                          <Lines style={{transform: 'rotate(-14deg)'}} id="line01" />
                        </div>
   
                        
                        <div id="LinesHolder3b" style={{display: displayState7(this.state.stage),position:'absolute',left:'14%',top:'187px',width:'600px',height:'250px'}}>
                          <Lines2 id="line02" />
                        </div>
     
                        <div id="LinesHolder3c" style={{display: displayState7(this.state.stage),position:'absolute',left:'450px',top:'147px',width:'600px',height:'250px'}}>
                        
                          <div id="dot01aHolder" style={{opacity:'0',position:"absolute",left:"-3px",top:"-18px"}}>
                                <BlueDot id={"dot01a"} />
                                <DarkBlueBigDot id="dot01" style={{position:"absolute",left:"-17px",top:"-68px"}}>
                                  <div style={{position:"absolute",left:"21.5%",top:"30%",color:'white',fontSize:'2rem',fontWeight:'600',fontFamily:theme.overrides.MuiTypography.h1.fontFamily}}>
                                    T4
                                  </div>
                                  <TriangleBlue id="dot01TriangleUnderneath" style={{position:"absolute", left: '35%',top:'99%'}}/>
                              </DarkBlueBigDot>
                          </div>

                          <WhiteSmallDot id={"dot02"} style={{position:"absolute",left:"13px",top:"31px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>1</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot03"} style={{position:"absolute",left:"48px",top:"19px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>2</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot04"} style={{position:"absolute",left:"83px",top:"6px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>3</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot05"} style={{position:"absolute",left:"123px",top:"-10px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>4</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot06"} style={{position:"absolute",left:"165px",top:"-25px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>5</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot07"} style={{position:"absolute",left:"206px",top:"-40px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>6</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot10"} style={{position:"absolute",left:"247px",top:"-55px",fontSize:'0.7rem'}}><div style={{position:"absolute",left:"30%",top:"-31px"}}>7</div></WhiteSmallDot>

                          <SkyBlueEndDot id={"dot08"} style={{position:"absolute",left:"274px",top:"-95px"}}><div style={{position:"absolute",left:"20%",top:"10%",color:theme.palette.midnightBlue.main,fontSize:'0.7rem'}}>7.1</div></SkyBlueEndDot>
 
                          <OrangeEndDot id={"dot09"} style={{position:"absolute",left:"225px",top:"-55px"}}><div style={{position:"absolute",left:"20%",top:"10%",color:theme.palette.midnightBlue.main,fontSize:'0.7rem'}}>5.9</div></OrangeEndDot>
                        </div>
 

                        <div id="wrongTapArea" onClick={showError} style={{ position:'absolute',left:'2%',top:'0',width:'700px',height:'500px',border:'0px solid red'}}></div>

                        <SlideText display={displayState1(this.state.stage)} 
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={this.resources.field_failedtext.processed}
                              bodyText={this.resources.field_bottombodytext.processed}
                              titleText={this.resources.field_bottomtitle.processed} />
                              
                        <SlideText display={displayState2(this.state.stage)} 
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={this.resources.field_failedtext.processed}
                              // bodyText={"stage 2"}
                              bodyText={(this.resources.field_bottombodystep2) ? this.resources.field_bottombodystep2.processed : ''}
                              titleText={this.resources.field_bottomtitlestep2.processed} />
                         <SlideText display={displayState3(this.state.stage)} 
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={this.resources.field_failedtext.processed}
                              bodyText={""}
                              titleText={""} />
                              
                        <SlideText display={displayState4(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={this.resources.field_failedtext4.processed}
                              bodyText={(this.resources.field_bottombodystep3) ? this.resources.field_bottombodystep3.processed : ''}
                              titleText="Select either side of the widest part of the heart"/>
                              {/* {this.resources.field_bottomtitlestep3.processed}  */}
                        <SlideText display={displayState5(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={this.resources.field_failedtext4.processed}
                              bodyText={(this.resources.field_bottombodystep4) ? this.resources.field_bottombodystep4.processed : ''}
                              titleText="" />
                              {/* {this.resources.field_bottomtitlestep4.processed} */}

                        <SlideText display={displayState6(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={"Try again"}
                              bodyText={""}
                              titleText={this.resources.field_bottomtitlestep5.processed} />

                        <SlideText display={displayState7(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={"Try again"}
                              bodyText={""}
                              titleText={this.resources.field_bottomtitlestep6.processed} />

                        {/* <SlideText display={displayState8(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={"Try again"}
                              bodyText={(this.resources.field_finalscreenbottomline2) ? this.resources.field_finalscreenbottomline2.processed : 'Short axis measurement = 7.1'}
                              titleText={this.resources.field_finalscreenbottomline1 ? this.resources.field_finalscreenbottomline1 : 'Long axis measurement = 5.9'} />

                        <PopupDarkBlue  style={{display: displayState8(this.state.stage)}}>
                          <PopupLightOrangeHeaderText>{stripUneededHtml(this.resources.field_popupheadertext.processed ? this.resources.field_popupheadertext : '7.1 + 5.9')}</PopupLightOrangeHeaderText>
                          <PopupWhiteBodyText>{stripUneededHtml(this.resources.field_popupbodytext.processed ? this.resources.field_popupbodytext.processed : 'VHS Total = 13.0')}</PopupWhiteBodyText>
                        </PopupDarkBlue> */}

                        {/* TODO - remove hardcoded value */}

                        <SlideText display={displayState8(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={"Try again"}
                              bodyText={ 'Short axis measurement = 5.9'}
                              titleText={'Long axis measurement = 7.1'} />

                        <PopupDarkBlue  style={{display: displayState8(this.state.stage)}}>
                          <PopupLightOrangeHeaderText>{'7.1 + 5.9'}</PopupLightOrangeHeaderText>
                          <PopupWhiteBodyText>{'VHS Total = 13.0'}</PopupWhiteBodyText>
                        </PopupDarkBlue>
       
                        <SwitchHolder id="switch" style={{display: displayStateSwitch(this.state.stage)}}><HintSwitcher onChange={handleSwitchChange} hintChecked={this.state.hintChecked} /></SwitchHolder>
                        
 
                         <TooltipHolder1 id="tip1" stageVisible={(this.state.stage === xraySlides.STAGE1 || this.state.stage === xraySlides.STAGE2)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} leftPos = '338px' topPos = '94px' />
  
                         <TooltipLeftHolder id="tip2a" stageVisible={(this.state.stage === xraySlides.STAGE1 || this.state.stage === xraySlides.STAGE2)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '276px' topPos = '434px' />
   
                         <HintCircle id="tip3" style={{display: this.state.hintChecked && (this.state.stage === xraySlides.STAGE4 || this.state.stage === xraySlides.STAGE5) ? 'block' : 'none',position:'absolute', left: "427px",top:"394px"}} />       
 
                         <TooltipLeftHolder id="tip3a" stageVisible={(this.state.stage === xraySlides.STAGE4 || this.state.stage === xraySlides.STAGE5)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext3.processed} leftPos = '228px' topPos = '193px' />
   
                         <TooltipRightHolder id="tip4" stageVisible={(this.state.stage === xraySlides.STAGE6)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext4.processed} leftPos = '420px' topPos = '59px' />


                         <div id="tapArea2" onClick={showStage1Tap1} style={{display: displayState1(this.state.stage),opacity:'0',position:'absolute',right: '263px',top:'453px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 
  
                         <div id="tapArea1" onClick={showStage1Tap2} style={{display: displayState2(this.state.stage),opacity:'0',position:'absolute',left: '497px',top:'221px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>
    
                         <div id="tapArea3" onClick={showStage2Tap1} style={{display: displayState4(this.state.stage),opacity:'0',position:'absolute',left:'445px',top:'411px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>

                         <div id="tapArea4" onClick={showStage2Tap2} style={{display: displayState4(this.state.stage),opacity:'0',position:'absolute',left:'634px',top:'267px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 

                         <div id="tapArea5" onClick={showStage5Tap1} style={{display: displayState6(this.state.stage),opacity:'0',position:'absolute',left:'438px',top:'120px',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 

                    </FrameInner>
                </Frame>

        </XrayTaskOuterContainer>
      </Layout>
      )
    }




}
}

function Xray({data}) {
  const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL]);
  //console.log(cookies)
  const newData = { ...data }
  const dogChoice = cookies["dogChoice"] ? cookies["dogChoice"]: dogName.DUDLEY 
  newData.dogChoice = dogChoice 
  newData.data = data
  const setTaskProgress = (task) => {
      setTimeout(function(){ 
        const newCaseStudyProgress = setCaseStudyProgress(task,dogChoice,cookies)
        console.log("============= " + newCaseStudyProgress + " =============")
        setCookie(cookieKeyNames.CASESTUDYS_ALL,newCaseStudyProgress,{ path: '/' })  
      }, 500);
  }
  newData.setTaskProgress = setTaskProgress

  return (<XrayContainer {...newData} />)
}

export default Xray

export const pageQuery = graphql`
  {
    allNodeTask {
      nodes {
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
        field_dogchoice
        field_failedtext {
          processed
        }
        field_failedtext4 {
          processed
        }
        field_infotext {
          processed
        }
        field_instructionstext {
          processed
        }
        field_popupbodytext {
          processed
        }
        field_popupheadertext
        field_progresspercent
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
        field_finalscreenbottomline1
        field_finalscreenbottomline2 {
          processed
        }
        id
        path {
          alias
        }
        revision_timestamp
        drupal_id
        
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


