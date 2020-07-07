import React, {useRef, useEffect, createRef} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';

import styled from 'styled-components'
import { instanceOf } from 'prop-types';

import { withStyles, createStyles } from '@material-ui/core/styles';
import SlideDrawer from '../components/SideDrawer'
import Grid from '@material-ui/core/Grid'

//import Tick from "../svgReactLoader/icons_and_glyphs/tick_orange_path_20240.svg"
import CrossSvg from "../svgReactLoader/xray/red_cross.svg"
import WhiteCrossSvg from "../svgReactLoader/xray/white_cross.svg"

import Switch from '@material-ui/core/Switch';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CustomFluidImage from '../components/CustomFluidImage';
import { style } from 'glamor'
import { render } from 'react-dom'

import {TweenLite, TimelineMax, Linear} from 'gsap'

import { CSSPlugin } from 'gsap/CSSPlugin'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { processHtml } from '../utils/displayUtils'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import DebugHelper from '../components/DebugHelper'

import { withCookies, Cookies, useCookies } from 'react-cookie'
import { useCallback, useState,  useDebugValue, forceUpdate } from 'react'

import Transcript from "file-loader!../assets/transcript.vtt"
import Captions from "file-loader!../assets/captions.vtt"
import Description from "file-loader!../assets/description.vtt"

import TaskSummaryTable from '../components/TaskSummaryTable'

import theme, { sm, md, lg, xl } from '../theme'
import { dogName, tasks, xraySlides, ultrasoundSteps } from '../WebsiteConstants'

import VideoFullScreenWidget, { showFullScreenVideo } from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'

import {replaceDogName, getCssDisplayState, getSlideData, displayDog } from '../utils/displayUtils'
import BottomNavigationLink from '../components/BottomNavigationLink'
import HintSwitcher from '../components/HintSwitcher'

import { LeftPageSection, RightPageSection, PageSection, WhiteDotButton} from '../components/PageParts'

import videoPlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import videoPauseButtonIcon from "../images/videoPauseLaunchBtn.png"

import Draggable from "../components/Draggable"

import DarkBlueRoundedOutlineButton from "../components/DarkBlueRoundedOutlineButton"

import {BottomHeaderUltrasound, BottomBodyUltrasound, BottomXrayHeader, ToolTip, ToolTipText, TapCircle, HintCircle, Triangle, TriangleBlue, Frame, FrameInner,
  BottomRightIntroText, BottomRightIntroBodyText,PopupDarkBlue, PopupLightOrangeHeaderText, PopupWhiteBodyText, Popup2DarkBlue, Popup2HeaderText, Popup2WhiteBodyText,
  TaskSummaryHeader, TaskSummarySubHeader, TaskSummaryTableHolder, TaskSummaryFootnote, SliderTextHolder, SwitchHolder,
   TooltipTopHolder, TooltipBottomHolder, TooltipLeftHolder, TooltipRightHolder} from "../components/ActivityParts" 


const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
`   

const gridStyle = { border: '0px solid red',height:'100vh' }


const linesSvg2 = (props) => {
  return (  
    <div id={props.id} style={props.style}>
        <svg id="lines" xmlns="http://www.w3.org/2000/svg" height="500px" viewBox="0 0 300 250">
            <path className="path path02" fill="none" fillOpacity="0.1" stroke={theme.palette.skyBlue.main} strokeWidth="3" d="M176 103l100 90"></path>
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
            <path className="path path03" fill="none"  stroke={theme.palette.peachCobbler.main} strokeWidth="3" d="M176 103l100 90"></path>
        </svg> 
    </div>
  )
}

const Lines3 = styled(linesSvg3)`
     filter: drop-shadow(0px -5px 15px #ffce00);
     opacity: 1;
`

const OrangeSmallDot = styled.div`
  margin-top:5px;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${theme.palette.peachCobbler.main};
`

const LightBlueSmallDot = styled.div`
  margin-top:5px;  
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${theme.palette.skyBlue.main};
`

const VideoHalfWidthHolder =  styled.div`
  padding-bottom: 2rem;
  width: 66.063rem;
  height: 20.75rem;
  border: solid 0px #707070;
  background-color: white;
`
const LineHolder =  styled.div`
  opacity: 1;
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
color: ${theme.palette.deminBlue.main};
background-color: ${theme.palette.skyBlue.main};
`

const SlideText = ({display,tappedStageWrongArea,failedText,bodyText,titleText,stage = 0, showDots = false}) => {
    let displaySetting = display
    if (display !== 'block' || display !== 'flex' || display !== 'none'){
        displaySetting = display ? 'block' : 'none'
    }
     // dudley -75px bottom
    return (<SliderTextHolder style={{display: displaySetting}}>
                <div style={{display: (tappedStageWrongArea) ? 'flex':'none',alignItems:'center',border:'0px solid red'}}>
                      <CrossSvg style={{width:'150px',height:'50px',border:'0px solid red'}}/> 
                      <BottomXrayHeader style={{border:'0px solid red'}}>{failedText}</BottomXrayHeader>
                </div>
                <div style={{display: (tappedStageWrongArea) ? 'none':'block',border:'0px solid red'}}>
                      <BottomXrayHeader style={{display: (showDots) ? 'flex' : 'none'}}>{(showDots) ? <div style={{display: 'flex',flexDirection:'row', alignContent:'center',fontSize:'1rem'}}>
                        <LightBlueSmallDot  style={{display: 'flex',alignContent:'center' }}/>
                        <div style={{display: 'flex',alignContent:'center',color: 'white'}}>&nbsp;&nbsp;{titleText}</div></div> : ''}
                      </BottomXrayHeader>
                      <BottomXrayHeader style={{display: (showDots) ? 'flex' : 'none'}}>{(showDots) ? <div style={{display: 'flex',flexDirection:'row', alignContent:'center',color: 'white',fontSize:'1rem'}}>
                        <OrangeSmallDot  style={{display: 'flex',alignContent:'center' }}/>
                        <div style={{display: 'flex',alignContent:'center',color: 'white'}}>&nbsp;&nbsp;{bodyText}</div></div> : ''}
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
        this.state.dogName = props.cookies["dogChoice"] ? props.cookies["dogChoice"]: dogName.DUDLEY 
        this.state.showIntroduction = true
        this.state.stage = ultrasoundSteps.VIDEO_PREVIEW
        this.state.hintChecked = false
        this.state.isLineAnimationVisible = false
        this.state.tap1Stage1 = false
        this.state.tap2Stage1 = false
        this.state.tap1Stage2 = false
        this.state.tap2Stage2 = false
        this.state.tappedStageWrongArea = false
        this.state.isLviddPopupVisible = false
 
        this.resources = {}
        this.resourcesAr = get(this, 'props.data.allNodeTask.nodes')
        this.resources = getSlideData(this.resourcesAr,"/ultrasound-standard")
        //console.log(this.resources)
        this.resourcesSummaryAr = get(this, 'props.data.allNodeTasksummary.nodes')
        this.resourcesSummary = getSlideData(this.resourcesSummaryAr,"/dog-has-a-la-of")
        //console.log(this.resourcesSummary)

        const toolTipRef1 = null // createRef()
        const toolTipRef2 = null // createRef()
        const toolTipRef3 = null // createRef()
        const toolTipRef4 = null // createRef()

        
    }

    componentDidMount() {
      TweenLite.set(".path02",{opacity: 0})
      TweenLite.set(".path03",{opacity: 0})

      console.log("componentDidMount")
      // if (this.state.MEASURE_BOTH_LINES === this.state.stage) {
        //TweenLite.set("#popup",{opacity: 0})
        //alert('here')
        //this.drawLineAnimation3()
      //}
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

      //console.log("this.resourcesSummary ",this.resourcesSummary)
      console.log("========= CURRENT STAGE ======",this.state.stage )

      const moveToTaskStart = (param) => {
          console.log("INTRO FINISHED")
          TweenLite.set("#step0",{visible: 'hidden'})
          this.state.showIntroduction = false;
          this.state.stage = ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA
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

      function drawLineAnimation1() {
        console.log("start draw 1")
        TweenLite.defaultEase = Linear.easeNone;
        TweenLite.set(".path02",{opacity: 0})
        const action = new TimelineMax()
        .fromTo(".path02", 1, {autoAlpha:0,drawSVG:0,repeat:0},{autoAlpha:1,drawSVG:40})
        action.eventCallback("onComplete", moveStep, ["param1"]);
      }

      const moveToStep2 = (param) => {
        console.log("LINE 2 FINISHED")
        this.state.stage = ultrasoundSteps.MEASURE_BOTH_LINES
        this.forceUpdate()
        
      }

      function drawLineAnimation2() {
        console.log("drawLineAnimation2")
        TweenLite.defaultEase = Linear.easeNone;
        TweenLite.set(".path03",{opacity: 0})
        const action = new TimelineMax()
        .fromTo(".path03", 2, {autoAlpha:0,drawSVG:0,repeat:0},{autoAlpha:1,drawSVG:80})
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
            drawLineAnimation1()
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
              drawLineAnimation1()
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
           drawLineAnimation2()
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
           drawLineAnimation2()
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
          return (stage >= ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || stage < ultrasoundSteps.NOW_SELECT_FREE_WALL) ? 'block':'none'
      }

      const displayStateLine02 = (stage) => {
          return (stage >= ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || stage < ultrasoundSteps.MEASURE_BOTH_LINES) ? 'block':'none'
      }
      
      const displayStateSwitch = (stage) => {
          return (stage > ultrasoundSteps.VIDEO_PREVIEW && stage < ultrasoundSteps.MEASURE_BOTH_LINES) ? 'block' : 'none'
      }

      if (typeof window !== 'undefined') {
         // if (this.state.stage === 1) hideIntro()
          //if (this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE_ANIMATE) drawLineAnimation1()
          //if (this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL_ANIMATE) drawLineAnimation2()
          //if (this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES_POP_UP_ANIMATE_ANIMATE) drawLineAnimation3()
        if (this.state.stage === ultrasoundSteps.MEASURE_BOTH_LINES) drawLineAnimation3()
        //   if (this.state.stage === 8) drawLineAnimation4()
      }

      //debugger

      if (this.state.stage  === ultrasoundSteps.VIDEO_PREVIEW) {

        const refPlayButton = React.createRef();
        const refPauseButton = React.createRef();

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
                      
                        <VideoHalfWidthHolder style={{width: '1057px', height: '362px',backgroundColor:'transparent'}}>
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.DUDLEY), width:'692px',height:'390px'}} imgName="poppy_ultrasound_laao.jpg" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.POPPY), width:'692px',height:'390px'}} imgName="poppy_ultrasound_laao.jpg" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.REGGIE), width:'692px',height:'390px'}} imgName="poppy_ultrasound_laao.jpg" />
                            <div style={videoPlayButtonStyle}>
                                <WhiteDotButton onClick={showFullScreenVideo} id="videoLargePlayBtn">
                                    <img src={videoPlayButtonIcon} ref={refPlayButton} alt="" style={{ position: 'absolute',left:0,right:0, width:'75px',height:'75px' }} />
                                    <img src={videoPlayButtonIcon} ref={refPauseButton} alt="" style={{ position: 'absolute',left:0,right:0,width:'75px',height:'75px',display:'none' }} />
                                </WhiteDotButton>
                            </div> 
                            <BottomHeaderUltrasound>{processHtml(replaceDogName((this.resources.field_instructionstext) ? this.resources.field_instructionstext.processed : '',this.state.dogName))}</BottomHeaderUltrasound>
                            <BottomBodyUltrasound>{processHtml(replaceDogName(this.resources.field_infotext ? this.resources.field_infotext.processed :'' ,this.state.dogName))}</BottomBodyUltrasound>
                        </VideoHalfWidthHolder>
                    </div>
                </div>
            </div>

            <VideoFullScreenWidget instance={"One"} />

            <BottomNavigationLink to="button" onClick={showStage0ContinueLink} distanceFromSide={"2%"} bottom={"2%"} direction={"forward"} linkText={"Continue"} />

        </Layout>
        )

    } else{

      const measureLvidd = (e) => {
        this.state.isLviddPopupVisible = true
        this.forceUpdate()
      }

      const hidePopup = (e) => {
        this.state.isLviddPopupVisible = false
        this.forceUpdate()
      }

   
      return (<Layout>
 
        <Grid container  
            spacing={0} 
            spacing={0} 
            justify="flex-start" 
            style={gridStyle}>

            <Grid item xs={12} sm={12}  style={gridStyle}>

                <Frame id="step1" style={{display: (this.state.stage > ultrasoundSteps.VIDEO_PREVIEW && this.state.stage < ultrasoundSteps.SUMMARY ) ? 'block':'none'}}>
                    <FrameInner>

                        <CustomFluidImage style={{display: displayDog(this.state.dogName, dogName.DUDLEY)}} imgName="poppy_ultrasound_laao.jpg" />
                        <CustomFluidImage style={{display: displayDog(this.state.dogName, dogName.POPPY)}} imgName="poppy_ultrasound_laao.jpg" />
                        <CustomFluidImage style={{display: displayDog(this.state.dogName, dogName.REGGIE)}} imgName="poppy_ultrasound_laao.jpg" />

                        <LineHolder id="LinesHolder1" style={{display: displayStateLine01(this.state.stage),position:'absolute',left:'19px', top:'-13px',width:'600px',height:'250px'}}>
                          <Lines2 style={{ transform: 'rotate(90deg) translate(-112px, -179px)'}}/>
                        </LineHolder>
  
                        <LineHolder id="LinesHolder2" style={{display: displayStateLine02(this.state.stage),position:'absolute',left:'-4.8%',top:'60px',width:'600px',height:'250px'}}>
                          <Lines3 style={{transform: 'rotate(90deg) translate(-112px, -179px)'}}/>
                        </LineHolder>
                      
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
                             failedText={this.resources.field_failedtext.processed}
                            
                             bodyText={(this.resources.field_bottombodystep3) ? this.resources.field_bottombodystep3.processed : ''}
                             titleText={this.resources.field_bottomtitlestep3.processed} />
                              
                 
                        <SlideText display={(this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL_ANIMATE)} 
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={this.resources.field_failedtext4.processed}
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
                          <PopupLightOrangeHeaderText>{processHtml(this.resources.field_popupheadertext ? this.resources.field_popupheadertext : 'no data')}</PopupLightOrangeHeaderText>
                          <PopupWhiteBodyText>{processHtml(this.resources.field_popupbodytext.processed ? this.resources.field_popupbodytext.processed : '')}</PopupWhiteBodyText>
                        </PopupDarkBlue>

                        <SwitchHolder id="switch" style={{display: displayStateSwitch(this.state.stage)}}>
                            <HintSwitcher onChange={handleSwitchChange} hintChecked={this.state.hintChecked} />
                        </SwitchHolder>

                        <BlueSmallInfoBox id="set1SquarePv" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:"296px",top:"385px"}}>PV</BlueSmallInfoBox>
                        
                        <BlueSmallInfoBox id="set1SquareLa" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'464px', top:'330px'}}>LA</BlueSmallInfoBox>
                        
                        
                         <TooltipRightHolder id="tip1" stageVisible={
                             (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)} 
                             hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '52%' topPos = '16.5%' 
                           
                         />
  
                         <TooltipBottomHolder id="tip2" stageVisible={
                             (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)}
                            hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} leftPos = '32.8%' topPos = '28.5%' 
                         />

                        <BlueSmallInfoBox id="set1SquareNc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'452px', top:'193px'}}>NC</BlueSmallInfoBox>
                        <BlueSmallInfoBox id="set1SquareRc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'506px', top:'147px'}}>RC</BlueSmallInfoBox>
                        <BlueSmallInfoBox id="set1SquareLc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA  || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE)) ? 'block' : 'none',left:'539px', top:'227px'}}>LC</BlueSmallInfoBox>





                        <BlueSmallInfoBox id="set2SquarePv" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:"296px",top:"385px"}}>PV</BlueSmallInfoBox>
                        <BlueSmallInfoBox id="set2SquareLa" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'464px', top:'330px'}}>LA</BlueSmallInfoBox>
                        
                        
                        
                         <TooltipLeftHolder id="tip3" stageVisible={    
                             (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)} 
                             hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext3.processed} leftPos = '5.5%' topPos = '27.5%' />    

                         <TooltipBottomHolder id="tip4" stageVisible={
                             (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)} 
                             hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext4.processed} leftPos = '19.7%' topPos = '45.6%' />

                        <BlueSmallInfoBox id="set2SquareNc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'452px', top:'193px'}}>NC</BlueSmallInfoBox>
                        <BlueSmallInfoBox id="set2SquareRc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'506px', top:'147px'}}>RC</BlueSmallInfoBox>
                        <BlueSmallInfoBox id="set2SquareLc" className={"smallInfoBoxes"} style={{display:(this.state.hintChecked && (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM  || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL)) ? 'block' : 'none',left:'539px', top:'227px'}}>LC</BlueSmallInfoBox>


                         <div id="tapArea1" onClick={showStage1Tap1} 
                         style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE) ? 'block' : 'none',
                         opacity:'0.05',position:'absolute',left:'49%',top:'31%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/>
                         </div>

                         <div id="tapArea2" onClick={showStage1Tap2} 
                         style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_AORTA || this.state.stage === ultrasoundSteps.NOW_SELECT_OPPOSITE_COMMISSURE) ? 'block' : 'none',
                          opacity:'0.05',position:'absolute',right:'41%',top:'21%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/>
                          </div> 
    
                         <div id="tapArea3" onClick={showStage2Tap1} style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL) ? 'block' : 'none',
                         opacity:'0.05',position:'absolute',left:'47%',top:'32%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>

                         <div id="tapArea4" onClick={showStage2Tap2} style={{display: (this.state.stage === ultrasoundSteps.MEASURE_INTERNAL_SHORT_AXIS_LEFT_ATRIUM || this.state.stage === ultrasoundSteps.NOW_SELECT_FREE_WALL) ? 'block' : 'none',
                         opacity:'0.05',position:'absolute',right:'59%',top:'48%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 
  
                         {/* <div id="tapArea5" onClick={showStage5Tap1} style={{display: displayState6(this.state.stage),opacity:'0.05',position:'absolute',right:'58%',top:'34%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>  */}

                    </FrameInner>
                </Frame>

                <PageSection id="step3" style={{display: (this.state.stage === ultrasoundSteps.SUMMARY) ? 'flex':'none'}}>

                        

                        <LeftPageSection id="summaryImage">
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.DUDLEY), width:'500px',height:'500px'}} imgName="dudley_sitting_pose_04.png" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.POPPY), width:'500px',height:'500px'}} imgName="dudley_sitting_pose_04.png" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.REGGIE), width:'500px',height:'500px'}} imgName="dudley_sitting_pose_04.png" />
                        </LeftPageSection>
                      
                        <RightPageSection id="summaryText">
                       
                            <TaskSummaryHeader>{processHtml(replaceDogName(this.resourcesSummary.field_headertext ? this.resourcesSummary.field_headertext : '',this.state.dogName))}</TaskSummaryHeader>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <TaskSummarySubHeader>{processHtml(replaceDogName(this.resourcesSummary.field_bodytext.processed,this.state.dogName))}</TaskSummarySubHeader>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <TaskSummaryTableHolder>
                                   <TaskSummaryTable resources={this.resourcesSummary} /> 
                            </TaskSummaryTableHolder>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            
                            <TaskSummaryFootnote>
                              {processHtml(replaceDogName(this.resourcesSummary.field_tablefooterhtml1 ? this.resourcesSummary.field_tablefooterhtml1.processed : 
                              '',this.state.dogName))}
                            </TaskSummaryFootnote>

                            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>

                            <VideoSmallWidget videoCaptionText={this.resourcesSummary.field_videocaptiontext1 ? this.resourcesSummary.field_videocaptiontext1.processed : 
                            'Learn how to identify left atrial enlargement with ultrasound in order to diagnose cardiomegaly in a dog with asymptomatic MVD'} 
                            instance="One"/>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <DarkBlueRoundedOutlineButton buttonText={"Measure Lviddn"} to={"/"} onClickHandler={measureLvidd}/>

                            <BottomNavigationLink to="/ultrasound-lviddn/" direction="forward" distanceFromSide={"2%"} bottom={"2%"} linkText={"Finish ultrasound"}/>
                            
                        </RightPageSection> 

                        <Popup2DarkBlue id="lviddPopup" style={{display: this.state.isLviddPopupVisible ? 'block':'none'}}>
                          <Popup2HeaderText>{processHtml(this.resources.field_popupheadertext2 ? this.resources.field_popupheadertext2 : 'no data')}</Popup2HeaderText>
                          <Popup2WhiteBodyText>{processHtml(this.resources.field_popupbodytext2 ? this.resources.field_popupbodytext2.processed : 'no data')}</Popup2WhiteBodyText>

                          <WebsiteLink onClick={hidePopup} 
                              style={{width:'250px'}} 
                              to={'button'}
                              typeOfButton={buttonStyleType.DARK_BUTTON_CORNER}>
                          {"Continue"}
                          </WebsiteLink>

                        </Popup2DarkBlue>
                    
                        <VideoFullScreenWidget />
                  
                </PageSection>
               
            </Grid>

          
        </Grid>
      </Layout>
     )
    }
  }
}

function Ultrasound({data}) {
  const [cookies, setCookie, removeCookie] = useCookies(['hasConsentSet','userChoice','dogChoice','score']);
  //console.log(cookies)
  const newData = { ...data }
  newData.cookies = cookies
  newData.data = data
  return (<UltrasoundContainer {...newData} />)
}


export default Ultrasound

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
        
        field_videotext1 {
          processed
        }
        path {
          alias
        }
        relationships {
          field_videoposterimage1 {
            localFile {
              url
            }
          }
          field_videothumbnail1 {
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


// const BottomRightIntroText = styled.div`
//   width: 20.438rem;
//   height: 7.713rem;
//   font-family: Poppins;
//   font-size: 1.375rem;
//   font-weight: 600;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.4;
//   letter-spacing: -0.22px;
//   text-align: left;
//   color: ${theme.palette.midnightBlue.main};

// `
// const BottomRightIntroBodyText = styled.div`
//   width: 20.5rem;
//   height: 1.313rem;
//   font-family: Poppins;
//   font-size: 0.938rem;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: italic;
//   line-height: 1.6;
//   letter-spacing: -0.15px;
//   text-align: left;
//   color: ${theme.palette.midnightBlue.main};

// `
