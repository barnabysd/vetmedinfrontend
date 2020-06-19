import React, {useRef, useEffect, createRef} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from '../theme'
import styled from 'styled-components'
import { instanceOf } from 'prop-types';

import { withStyles, createStyles } from '@material-ui/core/styles';
import SlideDrawer from '../components/SideDrawer'
import Grid from '@material-ui/core/Grid'

//import Tick from "../svgReactLoader/icons_and_glyphs/tick_orange_path_20240.svg"
import Cross from "../svgReactLoader/xray/red_cross.svg"

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

import PlaceHolderVideo from '../assets/ConsultRoom_PoppyOnTable_video1920x1080.mp4'
import TaskSummaryTable from '../components/TaskSummaryTable'

gsap.registerPlugin(DrawSVGPlugin);
// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)
// import DrawSVGPlugin from '../vendor/gsap-plugins/DrawSVGPlugin'

const SquareSwitch = withStyles((themeMaterial) => ({
  root: {
    width: 70,
    height: 36,
    padding: 0,
    margin: themeMaterial.spacing(1),
   
  },
  switchBase: {
    padding: 3,
    border: `0px solid white`,
    color: 'white !important',
  
    '&$checked': {
      transform: 'translateX(34px)',
      color: 'orange !important',
      '& + $track': {
        backgroundColor: 'transparent',
        opacity: 1,
        border: `1px solid orange`,
      },
    },
    '&$focusVisible $thumb': {
      color: 'transparent',
      border: `1px solid orange`,
      
    },
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 0
  },
  track: {
    borderRadius: 0,
    border: `1px solid white`,
    backgroundColor: 'transparent',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
`

const gridStyle = { border: '0px solid red',height:'100vh' }

const dogName = {
  DUDLEY: 'dudley',
  POPPY: 'poppy',
  REGGIE: 'reggie',
}

const xraySlides = {
  STAGE1: 1,
  STAGE2: 2,
  STAGE3: 3,
  STAGE4: 4,
  STAGE5: 5,
  STAGE6: 6,
  STAGE7: 7,
  STAGE8: 8,
  STAGE9: 9,
  STAGE10: 10,
  STAGE11: 11,
  STAGE12: 12,
  STAGE13: 13,
  STAGE14: 14
}

const XrayPicHolder = styled.div`
  width: 60.938rem;
  height: 44.125rem;
  object-fit: contain;
`

const BottomXrayHeader = styled.div`
  width: 46rem;
  height: 1.938rem;
  font-family: Poppins;
  font-size: 1.375rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-align: left;
  color: var(--white);
`
const UnderSwitchText = styled.div `
  pointer-events: none;
  width: 1.5rem;
  height: 1.188rem;
  font-family: Poppins;
  font-size: 0.813rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.13px;
  text-align: center;
  color: var(--white);
`
const xrayHolder = styled.div`
  width: 60.938rem;
  height: 44.125rem;
  object-fit: contain;
`

function CustomizedSwitches({hintChecked, onChange}) {
  const styles = createStyles({
    formControlLabel: { 
      fontSize: '0.6rem', 
      '& label': { 
      fontSize: '0.6rem' 
    } 
  }
 });
 
 return (<FormGroup>
       <div style={{position:'absolute',left:'25%',bottom:'15px'}}><UnderSwitchText>ON</UnderSwitchText></div>
       <div style={{position:'absolute',right:'24%',bottom:'15px'}}><UnderSwitchText>OFF</UnderSwitchText></div>  
      
      <FormControlLabel style={{backgroundColor: 'transparent'}}
        control={<SquareSwitch style={{backgroundColor: 'transparent'}} onChange={onChange} checked={hintChecked}  name="checkedHint" />}
        label={<ThemeProvider theme={theme}>
          <StyledTypography style={{color:'white',fontWeight:'600'}} variant="caption">Turn hints</StyledTypography>
          </ThemeProvider>} 
        labelPlacement="top"
      />
    </FormGroup>)
}


const ToolTip = styled.div`
  padding:1rem;
  width: 20.437rem;
  height: 4.944rem;
  background-color: var(--white);
  border-radius: 1rem;
`
const ToolTipText = styled.div`
width: 18.938rem;
  height: 2.813rem;
  font-family: Poppins;
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.15px;
  text-align: left;
  color: var(--egyptian-blue);
`

const TapCircle = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  box-shadow: 0 0 6px 0 var(--white);
  border: solid 2px var(--white);
  border-radius: 50%;
`

const HintCircle = styled.div`
  width: 4.75rem;
  height: 4.75rem;
  box-shadow: 0 0 6px 0 var(--warning);
  border: solid 2px var(--warning);
  border-radius: 50%;
`
const SmallTriangleRight = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: tan;
    border-top: 0 solid white;
    border-left: 0 solid white; 
    border-bottom: 0 solid white;
    border-right: 0 solid #8DB434;
    border-top-width: 10px;
    border-left-width: 10px;
    border-right-width: 10px;
    border-bottom-width: 10px;
    background: transparent;
    width: 0; height: 0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    transform: rotate(90deg) scale(0.4);

`

const Triangle = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: tan;
    border-top: 0 solid white;
    border-left: 0 solid white; 
    border-bottom: 0 solid white;
    border-right: 0 solid #8DB434;
    border-top-width: 10px;
    border-left-width: 10px;
    border-right-width: 10px;
    border-bottom-width: 10px;
    background: transparent;
    width: 0; height: 0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    transform: rotate(180deg);

`

{/*<Line x1="0" y1="0" x2="100" y2="100" stroke="red" strokeWidth="2" />*/}

const linesSvg = () => {
  return (  
    <div>
        <svg id="lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250">
            <path className="path path01" fill="none" stroke="#ffce00" strokeWidth="1.5" d="M176 103l50 59"></path>
        </svg> 
    </div>
  )
}
const Lines = styled(linesSvg)`
     filter: drop-shadow(0px -5px 15px #ffce00);
     opacity: 0;
`

const linesSvg2 = () => {
  return (  
    <div>
        <svg id="lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250">
            <path className="path path02" fill="none" stroke="#ffce00" strokeWidth="1.5" d="M176 103l50 59"></path>
        </svg> 
    </div>

  )
}
const Lines2 = styled(linesSvg2)`
     filter: drop-shadow(0px -5px 15px #ffce00);
     opacity: 0;
`

const linesSvg3 = () => {
  return (  
    <div>
        <svg id="lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250">
            <path className="path path03" fill="none" stroke="#ffce00" strokeWidth="1.5" d="M176 103l50 59"></path>
        </svg> 
    </div>
  )
}
const Lines3 = styled(linesSvg3)`
     filter: drop-shadow(0px -5px 15px #ffce00);
     opacity: 0;
`

const Frame = styled.div`
      position:relative;
      top:0;
      height: 779px;
      width: 1038px;
      background-color: lightgrey;
      border-radius: 30px;
      border-left: 30px solid lightgrey;
      border-right: 30px solid lightgrey;
      border-top: 30px solid lightgrey;
      border-bottom: 30px solid lightgrey;
      padding: 5px;
      left: calc(50% - 340px);
`
const FrameInner = styled.div` 
      border-left: 15px solid darkgray;
      border-right: 15px solid #e6e6e6;
      border-top: 15px solid darkgray;
      border-bottom: 15px solid darkgray;
      height: 706px;
      width: 975px;
      background-color:black;
`

const BottomRightIntroText = styled.div`
      width: 26.813rem;
      height: 14.509rem;
      font-family: Oswald;
      font-size: 2.938rem;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.15;
      letter-spacing: -0.47px;
      text-align: left;
      color: var(--midnight-blue);
`
const BottomRightIntroBodyText = styled.div`

        width: 26.813rem;
        height: 7.712rem;
        font-family: Poppins;
        font-size: 1.375rem;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.4;
        letter-spacing: -0.22px;
        text-align: left;
        color: var(--midnight-blue);

`

const BlueDot = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${theme.palette.skyBlue.main};
`

const DarkBlueBigDot = styled.div`
    height: 77px;
    width: 65px;
    border-radius: 50%;
    background-color: ${theme.palette.midnightBlue.main};
    box-shadow: 0 4px 8px 0px rgba(35, 42, 54, 0.2);
`

const WhiteSmallDot = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: var(--white);
`
const DarkBlueSmallDot = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${theme.palette.egyptianBlue.main};
  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.1607843137254902);
`

const orangeSmallDot = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${theme.palette.peachCobbler.main};
`

const lightBlueSmallDot = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${theme.palette.peachCobbler.main};
`

const PopupDarkBlue = styled.div`
  height: 235px;
  width: 479px;
  border-radius: 0 2rem 2rem 2rem;
  background-color: ${theme.palette.midnightBlue.main};
  box-shadow: 0 8px 12px 0px rgba(35, 42, 54, 0.2);
`
const PopupLightOrangeHeaderText = styled.div`
  width: 8.25rem;
  height: 3.063rem;
  font-family: 'Oswald';
  font-size: 2.188rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: var(--peach-cobbler);
`
const PopupWhiteBodyText = styled.div`
    font-size: 3.8rem;
    line-height: 1.16;
    text-align: center;
    letter-spacing: -0.58px;
    color: white;
    font-family: 'Oswald';
    font-weight: 600;
    height: 86px;
    width: 364px;
`

// summary

const TaskSummaryHeader = styled.div`
  width: 31.844rem;
  height: 7.753rem;
  font-family: 'Oswald';
  font-size: 2.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -0.47px;
  text-align: left;
  color: var(--midnight-blue);
`


const TaskSummarySubHeader = styled.div`
  width: 31.844rem;
  height: 2.188rem;
  font-family: ${theme.typography.fontFamily};
  font-size: 1.563rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.25px;
  text-align: left;
  color: var(--midnight-blue);
`
const TaskSummaryTableHolder = styled.div`
width: 31.844rem;

background-color: var(--white);
`
const TaskSummaryFootnote = styled.div`
width: 31.844rem;
height: 2.325rem;
font-family: ${theme.typography.fontFamily};
font-size: 0.813rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.4;
letter-spacing: normal;
text-align: left;
color: var(--raven);
`
const TaskThumbnail = styled.div`
width: 4.5rem;
height: 4.484rem;
object-fit: contain;
`
const SmallPlayArrow = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, var(--sky-blue), var(--topaz-blue) 37%, var(--midnight-blue));
`
const OrangeEdgeToThumbnail = styled.div`
width: 0.281rem;
  height: 4.5rem;
  background-color: var(--peach-cobbler);
`
const VideoThumbnailText = styled.div`
width: 25.188rem;
height: 2.813rem;
font-family: ${theme.typography.fontFamily};
font-size: 0.938rem;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.6;
letter-spacing: -0.15px;
text-align: left;
color: var(--raven);
`
const WatchLinkButton = styled.div`
  cursor: pointer;
  height: 1.313rem;
  font-family: ${theme.typography.fontFamily};
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.15px;
  text-align: left;
  color: var(--midnight-blue); 
`

const VideoFullScreen = styled.div`
 position: absolute;
 left:0;
 top:0;
 right:0;
 bottom:0;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
  background-color: var(--sky-blue); 
`

const SlideText = ({display,tappedStageWrongArea,failedText,bodyText,titleText}) => {
    return (<div style={{display: display ,position:'absolute',left:'5%',bottom:'-75px', width:"80%",height:'200px',border:'0px solid green'}}>
                <div style={{display: (tappedStageWrongArea) ? 'flex':'none',alignItems:'center',border:'0px solid red'}}>
                      <Cross style={{width:'150px',height:'50px',border:'0px solid red'}}/> 
                      <BottomXrayHeader style={{border:'0px solid red'}}>{failedText}</BottomXrayHeader>
                </div>
                <div style={{display: (tappedStageWrongArea) ? 'none':'block',border:'0px solid red'}}>
                      <BottomXrayHeader>{titleText}</BottomXrayHeader>
                      <ThemeProvider theme={theme}>
                          <StyledTypography style={{color: 'white' }} variant="body1">{bodyText}</StyledTypography>
                      </ThemeProvider>
                </div>
      </div>)
}

const TooltipHolder1 = ({hintChecked, textHtml, leftPos = '15%', topPos = '29%'}) => {
  return (<div id="toolTip1" style={{display:(hintChecked) ? 'block':'none', position:'absolute',left:leftPos,top:topPos,border:'0px solid red'}}>
        <ToolTip>
              <ToolTipText>{processHtml(textHtml)}</ToolTipText>
        </ToolTip>
        <div><Triangle /></div>
        <HintCircle style={{margin: 'auto'}} />
        </div>)
}

const TooltipHolder2 = ({hintChecked, textHtml, rightPos = '19%', topPos = '50%'}) => {
  return (<div id="toolTip2" style={{display:(hintChecked) ? 'block':'none', position:'absolute',right:rightPos,top:topPos,border:'0px solid red'}}>
        <ToolTip>
              <ToolTipText>{processHtml(textHtml)}</ToolTipText>
        </ToolTip>
        <div><Triangle /></div>
        <HintCircle style={{margin: 'auto'}} />
        </div>)
}

class XrayContainer extends React.Component {
    constructor(props) {
        super(props)
       
        this.timerID = 0
        this.state = {}
        this.state.dogName = props.cookies["dogChoice"] ? props.cookies["dogChoice"]: dogName.DUDLEY // TODO: get from coookie
        this.state.showIntroduction = true
        this.state.stage = 0
        this.state.hintChecked = false
        this.state.isLineAnimationVisible = false
        this.state.tappedStage1 = false
        this.state.tappedStage2 = false
        this.state.tappedStage3 = false
        this.state.tappedStage4 = false
        this.state.tappedStageWrongArea = false
        this.state.showFullScreenVideo = false

        this.resources = {}
        this.resourcesAr = get(this, 'props.data.allNodeTask.nodes')

        this.resources = this.resourcesAr[0]
        //console.log(this.resources)
        this.resourcesSummaryAr = get(this, 'props.data.allNodeTasksummary.nodes')
        let pointer = 0
        for (var i = 0; i < this.resourcesSummaryAr.length; i++) {
           if (this.resourcesSummaryAr[i].path && 
              this.resourcesSummaryAr[i].path.alias && 
              (this.resourcesSummaryAr[i].path.alias).indexOf("dog-has-a-vertebral-heart-score-vhs-of") !== -1) {
                 pointer = i
           }
        }
        
        this.resourcesSummary = this.resourcesSummaryAr[pointer]
        console.log(this.resourcesSummary)

        const toolTipRef1 = null // createRef()
        const toolTipRef2 = null // createRef()
        const toolTipRef3 = null // createRef()
        const toolTipRef4 = null // createRef()
    }

    componentDidMount() {
      // this.timerID = setInterval(
      //   () => this.tick(),
      //   1000
      // );
    }

    componentWillUnmount() {
        //clearInterval(this.timerID);
    }
    
    tick() {
        // this.setState({
        //     date: new Date()
        // });
    }

    render() {

      const moveToTaskStart = (param) => {
          console.log("INTRO FINISHED")
          TweenLite.set("#step0",{visible: 'hidden'})
          this.state.showIntroduction = false;
          this.state.stage = (1 * this.state.stage) + 1
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
      if (typeof window !== 'undefined') {
          hideIntro()
      }

      //hideIntro()
    
      const drawLineAnimationExample = () => {
          TweenLite.defaultEase = Linear.easeNone;
          //from("#LinesHolder", 1, {autoAlpha:1},'-=0.6')
          TweenLite.set(".path01",{opacity: 1})
          const action = new TimelineMax()
          .from(".path01", 1, {drawSVG:0})
          // .staggerTo('.lines',1,{scale:1.2, transformOrigin:'center', repeat:1, yoyo:true},0.5, "end")

          // .to(".star01",0.2, {autoAlpha:0, scale:3, transformOrigin:'center', repeat:3, yoyo:true})
          // .from(".one",1, {autoAlpha:0},'-=0.6')
          // .from(".path01", 1, {drawSVG:0})
          // .to(".star02",0.2, {autoAlpha:0, scale:3, transformOrigin:'center', repeat:3, yoyo:true})
          // .from(".two",1, {autoAlpha:0},'-=0.6')
       
          // .staggerTo('.lines',1,{scale:1.2, transformOrigin:'center', repeat:1, yoyo:true},0.5, "end")

          action.eventCallback("onComplete", moveStep, ["param1"]);
      }

      const drawLineAnimation1 = () => {
        TweenLite.defaultEase = Linear.easeNone;
        TweenLite.set(".path01",{opacity: 1})
        const action = new TimelineMax()
        .from(".path01", 1, {autoAlpha:1,drawSVG:0})
        action.eventCallback("onComplete", moveStep, ["param1"]);
      }

      const drawLineAnimation2 = () => {
        TweenLite.defaultEase = Linear.easeNone;
        const action = new TimelineMax()
        .from(".path02", 1, {autoAlpha:1,drawSVG:0})
        action.eventCallback("onComplete", moveStep, ["param1"]);
      }

      const drawLineAnimation3 = () => {
        TweenLite.defaultEase = Linear.easeNone;
        const action = new TimelineMax()
        .from(".path03", 1, {autoAlpha:1,drawSVG:0})
        action.eventCallback("onComplete", moveStep, ["param1"]);
      }

      const moveStep = (param) => {
          console.log("LINE FINISHED")
          this.state.stage = (1 * this.state.stage) + 1
          this.forceUpdate()
      }

      const showStage1Tap1 = (event) => {
          event.preventDefault()
          this.state.tappedStageWrongArea = false
          this.state.tappedStage1 = true
          console.log("showStage1Tap1",this.state.stage )
          this.forceUpdate()
      }
      const showStage1Tap2 = (event) => {
          event.preventDefault()
          console.log("showStage1Tap2",this.state.stage )
          //if (this.state.tappedStage1) {
               this.state.tappedStageWrongArea = false
               drawLineAnimation1();
          //} 
      }
      const showStage2Tap1 = (event) => {
        event.preventDefault()
        this.state.tappedStageWrongArea = false
        this.state.tappedStage1 = true
        console.log("showStage2Tap1",this.state.stage )
        this.forceUpdate()
    }
    const showStage2Tap2 = (event) => {
        event.preventDefault()
        console.log("showStage2Tap2",this.state.stage )
        ///if (this.state.tappedStage1) {
             this.state.tappedStageWrongArea = false
             drawLineAnimation2();
        //} 
    }
    const showStage3Tap1 = (event) => {
      event.preventDefault()
      this.state.tappedStageWrongArea = false
      this.state.tappedStage1 = true
      console.log("showStage3Tap1",this.state.stage )
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
      // const showStage1Error = (event) => {
      //     event.preventDefault()
      //     console.log("ERROR", this.state.stage )
      //     this.state.tappedStage1WrongArea = true
      //     this.forceUpdate()
      // }
      // const showTap1 = (event) => {
      //   event.preventDefault()
      //     this.state.tappedStage1WrongArea = false
      //     this.state.tappedStage1 = true
      //     console.log("showTap1",this.state.stage )
      //     this.forceUpdate()
      // }
      // const showTap2 = (event) => {
      //     event.preventDefault()
      //     console.log("showTap2",this.state.stage )
      //     if (this.state.tappedStage1) {
      //          this.state.tappedStage1WrongArea = false
      //          drawLineAnimation();
      //     } 
      // }

      const showError = (event) => {
          event.preventDefault()
          console.log("ERROR", this.state.stage )
          this.state.tappedStageWrongArea = true
          this.forceUpdate()
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

      const displayFullScreenVideo = (showVid) => { 
        const displayState = (showVid) ? 'block':'none' 
        return displayState
      }

      const displayState1 = (stage) => { return (stage === xraySlides.STAGE2) ? 'block':'none' }
      const displayState2 = (stage) => { return (stage === xraySlides.STAGE3) ? 'block':'none' }
      const displayState3 = (stage) => { return (stage === xraySlides.STAGE4) ? 'block':'none' }
      const displayState4 = (stage) => { return (stage === xraySlides.STAGE5) ? 'block':'none' }
      const displayState5 = (stage) => { return (stage === xraySlides.STAGE6) ? 'block':'none' }
      const displayState6 = (stage) => { return (stage === xraySlides.STAGE7) ? 'block':'none' }
      const displayState7 = (stage) => { return (stage === xraySlides.STAGE8) ? 'block':'none' }
      const displayState8 = (stage) => { return (stage === xraySlides.STAGE9) ? 'block':'none' }

      const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

      const showVideoFullScreen = (e) => {
        this.state.showFullScreenVideo = true
        this.forceUpdate()
      }

      const replaceDogName = (rawText, dogName) => {
           let rawTextProcessed = rawText.replace(/__DOG_NAME__/g,capitalize(dogName))
           if (dogName === dogName.POPPY) {
              rawTextProcessed = rawTextProcessed.replace(/__DOG_GENDER__/g,'her')
           } else {
              rawTextProcessed = rawTextProcessed.replace(/__DOG_GENDER__/g,'he')
           }
           return rawTextProcessed
      }

      const closeFullScreenVideoBtn = () => {
           //document.getElementById("videoFullScreen").display = 'none'
           this.state.showFullScreenVideo = false
           this.forceUpdate()
      }

      //TODO: - image for dogs at summary point reggie and poppy
      //TODO: - continue link , watch link
      return (<Layout>
          
        <SlideDrawer />

        <DebugHelper />

        <Grid container  
            spacing={0} 
            spacing={0} 
            justify="flex-start" 
            style={gridStyle}>

            <Grid item xs={12} sm={12}  style={gridStyle}>

                <div id="step0" style={{display: (this.state.stage === 0) ? 'flex':'none',flexDirection:'row',width:'100%',margin:'auto'}}>
                        <div id="introImage" style={{display:'flex',width:'50%',height:'100vh',flexDirection:'column',alignItems:'flex-end',justifyContent:'center'}}> 
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.DUDLEY), width:'500px',height:'500px'}} imgName="xray_table_dudley_1500.png" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.POPPY), width:'500px',height:'500px'}} imgName="xray_table_poppy_1500.png" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.REGGIE), width:'500px',height:'500px'}} imgName="xray_table_reggie_1500.png" />
                        </div>
                        <div id="introText" style={{display:'flex',width:'50%',height:'100vh',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}> 
                            <BottomRightIntroText>{processHtml(replaceDogName(this.resources.field_instructionstext.processed,this.state.dogName))}</BottomRightIntroText>
                            <BottomRightIntroBodyText>{processHtml(replaceDogName(this.resources.field_infotext.processed,this.state.dogName))}</BottomRightIntroBodyText>
                        </div> 
                </div>


                <div id="step3" style={{display: (this.state.stage === 11) ? 'flex':'none',flexDirection:'row',width:'100%',margin:'auto'}}>
                        <div id="summaryImage" style={{display:'flex',width:'50%',width:'100vh',flexDirection:'column',alignItems:'flex-end',justifyContent:'center'}}> 
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.DUDLEY), width:'500px',height:'500px'}} imgName="dudley_sitting_pose_04.png" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.POPPY), width:'500px',height:'500px'}} imgName="dudley_sitting_pose_04.png" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.REGGIE), width:'500px',height:'500px'}} imgName="dudley_sitting_pose_04.png" />
                        </div>
                        <div id="summaryText" style={{display:'flex',width:'50%',height:'100vh',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}> 

                            <TaskSummaryHeader>{processHtml(replaceDogName(this.resourcesSummary.field_headertext,this.state.dogName))}</TaskSummaryHeader>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <TaskSummarySubHeader>{processHtml(replaceDogName(this.resourcesSummary.field_bodytext.processed,this.state.dogName))}</TaskSummarySubHeader>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <TaskSummaryTableHolder>
                                   <TaskSummaryTable resources={this.resourcesSummary} /> 
                            </TaskSummaryTableHolder>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            {/* <TaskSummaryFootnote>*Breed variation exists; in some breeds ≥11.5 may be normal. A breed specific VHS table is available on the Boehringer Academy</TaskSummaryFootnote> */}
                            <TaskSummaryFootnote>{processHtml(replaceDogName(this.resourcesSummary.field_tablefooterhtml1.processed,this.state.dogName))}</TaskSummaryFootnote>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <div style={{display: 'flex',flexDirection:'row'}}>
                                <div id="videoThumbImage" style={{display:'flex',width:'110px',height:'100px',flexDirection:'row',alignItems:'center'}}> 
                                    <TaskThumbnail style={{position:'relative',display:'block',width:'110px',height:'100px'}}>
                                          <OrangeEdgeToThumbnail  style={{position:'absolute',width:'5px',height:'100px',left:'0',top:'0'}}/> 
                                          <img src={"/xray/nuala_summerfield_thumbnail_01.jpg"} style={{width:'110px',height:'100px'}} />
                                          <SmallPlayArrow style={{position:'absolute',width:'20px',right:'-8%',top:'37%'}}><SmallTriangleRight  style={{position:'absolute',paddingLeft: '6px',paddingTop: '4px'}} /></SmallPlayArrow>
                                    </TaskThumbnail>
                                </div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <div style={{display: 'flex',flexDirection:'column'}}>
                                      {/* <VideoThumbnailText>Learn how to measure the vertebral heart score in a dog with asymptomatic MVD</VideoThumbnailText> */}
                                      <VideoThumbnailText>{processHtml(this.resourcesSummary.field_videocaptiontext1.processed)}</VideoThumbnailText>
                                      <WatchLinkButton onClick={showVideoFullScreen}>Watch</WatchLinkButton>
                                 </div>
                            </div>

                            <WebsiteLink style={{width:'350px'}} to="/" typeOfButton={buttonStyleType.NORMAL_LINK}>Continue</WebsiteLink>
                            
                   
                        </div> 
                        <VideoFullScreen id="videoFullScreen" style={{zIndex:'2000',display: displayFullScreenVideo(this.state.showFullScreenVideo)}}>
                                 <video autoPlay loop={false} className='react-player' width='100%' height='100%' style={{ width: `100%`,minHeight: `100%`,
                                  paddingTop:'5%',
                                  paddingBottom:'5%' }}>
                                  <source src={PlaceHolderVideo} type="video/mp4" />
                                  <track kind="transcript" srcLang="en" src={Transcript} />
                                  <track kind="captions" srcLang="en" src={Captions} />
                                  <track kind="descriptions" srcLang="en" src={Description} />
                                </video>
                                <div id="closeBtn" style={{position:'absolute', cursor: 'pointer',fontSize:'2rem', top:'2%',right:'0',width:'50px',height:'50px',textAlign:'center',verticalAlign:'middle'}} onClick={closeFullScreenVideoBtn}>X</div>
                        </VideoFullScreen>
                </div>

                <Frame id="step1" style={{display: (this.state.stage > 0 && this.state.stage < 11 ) ? 'block':'none'}}>
                    <FrameInner>

                        <CustomFluidImage style={{display: displayDog(this.state.dogName, dogName.DUDLEY)}} imgName="Dog-1_Dudley_xray.jpg" />
                        <CustomFluidImage style={{display: displayDog(this.state.dogName, dogName.POPPY)}} imgName="Dog-2_Poppy_xray.jpg" />
                        <CustomFluidImage style={{display: displayDog(this.state.dogName, dogName.REGGIE)}} imgName="Dog-3_Reggie_xray.jpg" />

                        <div id="LinesHolder1" style={{display: displayState2(this.state.stage),position:'absolute',left:'-6%',top:'141px',width:'600px',height:'250px'}}><Lines /></div>

                        <div id="LinesHolder2" style={{display: displayState4(this.state.stage),position:'absolute',left:'-6%',top:'141px',width:'600px',height:'250px'}}><Lines2 /></div>
                        <div id="LinesHolder3" style={{display: displayState6(this.state.stage),position:'absolute',left:'-6%',top:'141px',width:'600px',height:'250px'}}><Lines3 /></div>

                        {/* <SlideTextSelection state={this.state} /> */}

                        <div id="wrongTapArea" onClick={showError} style={{ position:'absolute',left:'2%',top:'0',width:'700px',height:'500px',border:'0px solid red'}}></div>

                        <SlideText display={displayState1(this.state.stage)} 
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedtext={this.resources.field_failedtext.processed}
                              bodyText={this.resources.field_bottombodytext.processed}
                              titleText={this.resources.field_bottomtitle.processed} />
                              
                        <SlideText display={displayState2(this.state.stage)} 
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedtext={this.resources.field_failedtext.processed}
                              bodyText={""}
                              titleText={this.resources.field_bottomtitlestep2.processed} />

                        <SlideText display={displayState3(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedtext={""}
                              bodyText={""}
                              titleText={this.resources.field_bottomtitlestep2.processed} />
                        <SlideText display={displayState4(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedtext={""}
                              bodyText={""}
                              titleText={this.resources.field_bottomtitlestep3.processed} />

                      

                        <div id="switch" style={{position:'absolute',right:'1%',bottom:'3%'}}><CustomizedSwitches onChange={handleSwitchChange} hintChecked={this.state.hintChecked} /></div>
                        

                        <div id="tapArea1" style={{display: displayState1(this.state.stage)}} onClick={showStage1Tap1} style={{opacity:'0.1',position:'absolute',left:'37%',top:'49%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>
                        <div id="tapArea2" style={{display: displayState2(this.state.stage)}} onClick={showStage1Tap2} style={{opacity:'0.1',position:'absolute',right:'41%',top:'70%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 

                        <div id="tapArea3" style={{display: displayState3(this.state.stage)}} onClick={showStage2Tap1} style={{opacity:'0.1',position:'absolute',left:'37%',top:'49%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>
                        <div id="tapArea4" style={{display: displayState4(this.state.stage)}} onClick={showStage2Tap2} style={{opacity:'0.1',position:'absolute',right:'41%',top:'70%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 

                        <div id="tapArea5" style={{display: displayState5(this.state.stage)}} onClick={showStage3Tap1} style={{opacity:'0.1',position:'absolute',left:'37%',top:'49%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>
                        <div id="tapArea6" style={{display: displayState6(this.state.stage)}} onClick={showStage3Tap2} style={{opacity:'0.1',position:'absolute',right:'41%',top:'70%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 
                        
                         <TooltipHolder1 style={{display: displayState1(this.state.stage)}} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '15%' topPos = '29%' />
                         <TooltipHolder2 style={{display: displayState1(this.state.stage)}} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} rightPos = '19%' topPos = '50%' />
                         <TooltipHolder1 style={{display: displayState2(this.state.stage)}} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '15%' topPos = '29%' />
                         <TooltipHolder2 style={{display: displayState2(this.state.stage)}} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} rightPos = '19%' topPos = '50%' />

                         <TooltipHolder1 style={{display: displayState3(this.state.stage)}} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '15%' topPos = '29%' />
                         <TooltipHolder2 style={{display: displayState3(this.state.stage)}} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} rightPos = '19%' topPos = '50%' />
                         <TooltipHolder1 style={{display: displayState4(this.state.stage)}} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '15%' topPos = '29%' />
                         <TooltipHolder2 style={{display: displayState4(this.state.stage)}} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} rightPos = '19%' topPos = '50%' />

                    </FrameInner>
                </Frame>
               
            </Grid>

          
        </Grid>
      </Layout>
  )
}
}

function Xray({data}) {
  const [cookies, setCookie, removeCookie] = useCookies(['hasConsentSet','userChoice','dogChoice','score']);
  //console.log(cookies)
  const newData = { ...data }
  newData.cookies = cookies
  newData.data = data
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
        id
        path {
          langcode
        }
        revision_timestamp
        drupal_id
      }
    },
    allNodeTasksummary {
      nodes {
        changed(fromNow: false)
        field_bodytext {
          processed
        }
        drupal_id
        field_buttonlinks {
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
      }
  }
  }
  `
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
//   color: var(--midnight-blue);

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
//   color: var(--midnight-blue);

// `
