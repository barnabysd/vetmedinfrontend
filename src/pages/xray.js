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

import PercentageProgressIndicator from "../components/PercentageProgressIndicator"
import theme, { sm, md, lg, xl } from '../theme'

import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

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
  STAGE0: 0,
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
 
  font-family: Poppins;
  font-size: 1.375rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-align: left;
  color: white;
  @media (max-width: ${lg}px) {
     
  }

  @media (max-width: ${md}px) {
  
  }
  @media (max-width: ${sm}px) {
    width: 90%;
   
  }
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
  color: white;
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

  background-color: white;
  border-radius: 1rem;
`
const ToolTipText = styled.div`
  width: 18.938rem;
  
  font-family: Poppins;
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.15px;
  text-align: left;
  color: ${theme.palette.egyptianBlue.main};
`

const TapCircle = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  box-shadow: 0 0 6px 0 white;
  border: solid 2px white;
  border-radius: 50%;
`

const HintCircle = styled.div`
  width: 4.75rem;
  height: 4.75rem;
  box-shadow: 0 0 6px 0 ${theme.palette.warning.main};
  border: solid 2px ${theme.palette.warning.main};
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
const BigTriangleRight = styled(SmallTriangleRight).attrs((props) => ({ id: props.id}))`
    width: 100px;
    height: 100px;

    border-top-width: 25px;
    border-left-width: 25px;
    border-right-width: 25px;
    border-bottom-width: 25px;

    transform: rotate(90deg) scale(1.0);

`
const PauseIcon = styled.div.attrs((props) => ({ id: props.id}))`
    width: 100px;
    height: 100px;
    background-color: white;
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
const TriangleBlue = styled(Triangle)` 
   border-bottom-color: ${theme.palette.midnightBlue.main};
 
`

{/*<Line x1="0" y1="0" x2="100" y2="100" stroke="red" strokeWidth="2" />*/}

const linesSvg = (props) => {
  return (  
    <div id={props.id} style={props.style}>
        <svg id="lines" xmlns="http://www.w3.org/2000/svg" height="500px" viewBox="0 0 300 250">
            <path className="path path01" fill="none" stroke={theme.palette.skyBlue.main} strokeWidth="3" d="M176 103l100 90"></path>
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
            <path className="path path02" fill="none" stroke={theme.palette.peachCobbler.main} strokeWidth="3" d="M176 103l100 90"></path>
        </svg> 
    </div>

  )
}
const Lines2 = styled(linesSvg2)`
     filter: drop-shadow(0px -5px 15px #ffce00);
     opacity: 1;
`

const Frame = styled.div`
      position:relative;
      height: 779px;
      width: 1038px;
      background-color: lightgrey;
      border-radius: 30px;
      border-left: 30px solid lightgrey;
      border-right: 30px solid lightgrey;
      border-top: 30px solid lightgrey;
      border-bottom: 30px solid lightgrey;
      padding: 5px;
      top: calc(50% - 335px);
      left: calc(50% - 519px);
      @media (max-width: ${lg}px) {
     
      }
   
      @media (max-width: ${md}px) {
      
      }
      @media (max-width: ${sm}px) {
        top: 61px;
        left: calc(50% - 170px);
        height: 563px;
        width: 340px;
       
      }
`
const FrameInner = styled.div` 
      border-left: 15px solid darkgray;
      border-right: 15px solid #e6e6e6;
      border-top: 15px solid darkgray;
      border-bottom: 15px solid darkgray;
      height: 706px;
      width: 975px;
      background-color:black;
      @media (max-width: ${lg}px) {
     
      }
   
      @media (max-width: ${md}px) {
      
      }
      @media (max-width: ${sm}px) {
        height: 492px;
        width: 280px;
      }
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
      color: ${theme.palette.midnightBlue.main};
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
        color: ${theme.palette.midnightBlue.main};

`

const BlueDot = styled.div`
position: relative;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${theme.palette.skyBlue.main};
`

const DarkBlueBigDot = styled.div`
    position: relative;
    height: 65px;
    width: 65px;
    border-radius: 50%;
    background-color: ${theme.palette.midnightBlue.main};
    box-shadow: 0 4px 8px 0px rgba(35, 42, 54, 0.2);
`

const WhiteSmallDot = styled.div`
position: relative;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
`
const DarkBlueSmallDot = styled.div`
position: relative;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${theme.palette.egyptianBlue.main};
  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.1607843137254902);
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

const PopupDarkBlue = styled.div`
height: 235px;
padding-left: 1rem;
padding-right: 1rem;
padding-top: 2rem;
color: white;
position: absolute;
left: calc(50% - 180px);
top: calc(50% - 140px);
  border-radius: 0 2rem 2rem 2rem;
  background-color: ${theme.palette.midnightBlue.main};
  box-shadow: 0 8px 12px 0px rgba(35, 42, 54, 0.2);
`
const PopupLightOrangeHeaderText = styled.div`
  
  height: 3.063rem;
  font-family: 'Oswald';
  font-size: 2.188rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: ${theme.palette.peachCobbler.main};
`
const PopupWhiteBodyText = styled.div`
    font-size: 3.2rem;
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
  color: ${theme.palette.midnightBlue.main};
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
  color: ${theme.palette.midnightBlue.main};
`
const TaskSummaryTableHolder = styled.div`
  width: 31.844rem;
  background-color: white;
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
  color: ${theme.palette.raven.main};
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
    background-image: linear-gradient(to bottom, ${theme.palette.skyBlue.main}, ${theme.palette.topazBlue.main} 37%, ${theme.palette.midnightBlue.main});
`

const BigPlayArrow = styled(SmallPlayArrow).attrs((props) => ({ id: props.id}))`
    width: 5rem;
    height: 5rem;   
`

const OrangeEdgeToThumbnail = styled.div`
    width: 0.281rem;
    height: 4.5rem;
    background-color: ${theme.palette.peachCobbler.main};
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
    color: ${theme.palette.raven.main};
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
    text-decoration: underline !important;
    color: ${theme.palette.midnightBlue.main}; 
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
    background-color: ${theme.palette.midnightBlue.main}; 
`
const SliderTextHolder = styled.div`
    position:absolute;
    left:5%;
    bottom:-92px;
    width:80%;
    height:200px;
    border:0px solid green;
    @media (max-width: ${lg}px) { 
    }
    @media (max-width: ${md}px) {
    }
    @media (max-width: ${sm}px) {
      left: 11%;
      bottom: 93px;
      width: 83%;
    }
`
const SwitchHolder = styled.div`
      position:absolute;
      right:1%;
      bottom:3%;
      @media (max-width: ${lg}px) {}
      @media (max-width: ${md}px) {}
      @media (max-width: ${sm}px) {
        bottom:6%;
      }
`

const SlideText = ({display,tappedStageWrongArea,failedText,bodyText,titleText,stage = 0}) => {
     // dudley -75px bottom
    return (<SliderTextHolder style={{display: display}}>
                <div style={{display: (tappedStageWrongArea) ? 'flex':'none',alignItems:'center',border:'0px solid red'}}>
                      <Cross style={{width:'150px',height:'50px',border:'0px solid red'}}/> 
                      <BottomXrayHeader style={{border:'0px solid red'}}>{failedText}</BottomXrayHeader>
                </div>
                <div style={{display: (tappedStageWrongArea) ? 'none':'block',border:'0px solid red'}}>
                      <BottomXrayHeader style={{display: (stage === 8) ? 'flex' : 'none'}}>{(stage === 8) ? <div style={{display: 'flex',flexDirection:'row', alignContent:'center',fontSize:'1rem'}}>
                        <LightBlueSmallDot  style={{display: 'flex',alignContent:'center' }}/>
                        <div style={{display: 'flex',alignContent:'center',color: 'white'}}>&nbsp;&nbsp;{titleText}</div></div> : ''}
                      </BottomXrayHeader>
                      <BottomXrayHeader style={{display: (stage === 8) ? 'flex' : 'none'}}>{(stage === 8) ? <div style={{display: 'flex',flexDirection:'row', alignContent:'center',color: 'white',fontSize:'1rem'}}>
                        <OrangeSmallDot  style={{display: 'flex',alignContent:'center' }}/>
                        <div style={{display: 'flex',alignContent:'center',color: 'white'}}>&nbsp;&nbsp;{bodyText}</div></div> : ''}
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
              <ToolTipText>{processHtml(textHtml)}</ToolTipText>
        </ToolTip>
        <div><Triangle /></div>
        <HintCircle style={{margin: 'auto'}} />
        </div>)
}

const TooltipHolder2 = ({id,hintChecked, stageVisible,stage, textHtml, rightPos = '19%', topPos = '50%'}) => {
  return (<div id={id} style={{display:(hintChecked && stageVisible) ? 'block':'none', position:'absolute',right:rightPos,top:topPos,border:'0px solid red'}}>
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
        this.state.dogName = dogName.POPPY // props.cookies["dogChoice"] ? props.cookies["dogChoice"]: dogName.DUDLEY // TODO: get from coookie
        this.state.showIntroduction = true
        this.state.stage = 0
        this.state.hintChecked = false
        this.state.isLineAnimationVisible = false
        this.state.tappedStage1 = false
        this.state.tappedStage2 = false
        this.state.tappedRightSideOfHeart = false
        this.state.tappedLeftSideOfHeart = false
        this.state.tappedStageWrongArea = false
        this.state.showFullScreenVideo = false
        this.resources = {}
        this.resourcesAr = get(this, 'props.data.allNodeTask.nodes')
        let taskPointer = -1
        for (var i = 0; i < this.resourcesAr.length; i++) {
           console.log(this.resourcesAr[i])
           if (this.resourcesAr[i].path && 
              this.resourcesAr[i].path.alias && 
              (this.resourcesAr[i].path.alias).indexOf("xray") !== -1) {
                taskPointer = i
           }
        }
        if (taskPointer === -1) {
          return "no data found"
        }
        this.resources = this.resourcesAr[taskPointer]
        //console.log(this.resources)
        this.resourcesSummaryAr = get(this, 'props.data.allNodeTasksummary.nodes')
        let pointer = -1
        for (var i = 0; i < this.resourcesSummaryAr.length; i++) {
           if (this.resourcesSummaryAr[i].path && 
              this.resourcesSummaryAr[i].path.alias && 
              (this.resourcesSummaryAr[i].path.alias).indexOf("dog-has-a-vertebral-heart-score-vhs-of") !== -1) {
                 pointer = i
           }
        }
        if (pointer === -1) {
          return "no data found"
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

    // return (<div>debug</div>)

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
      

      //hideIntro()
    
      const drawLineAnimationExample = () => {
          TweenLite.defaultEase = Linear.easeNone;
          //from("#LinesHolder", 1, {autoAlpha:1},'-=0.6')
          TweenLite.set(".path01",{opacity: 1})
          const action = new TimelineMax()
          .from(".path01", 1, {drawSVG:0,repeat:0})
          // .staggerTo('.lines',1,{scale:1.2, transformOrigin:'center', repeat:0, yoyo:true},0.5, "end")

          // .to(".star01",0.2, {autoAlpha:0, scale:3, transformOrigin:'center', repeat:3, yoyo:true})
          // .from(".one",1, {autoAlpha:0},'-=0.6')
          // .from(".path01", 1, {drawSVG:0})
          // .to(".star02",0.2, {autoAlpha:0, scale:3, transformOrigin:'center', repeat:3, yoyo:true})
          // .from(".two",1, {autoAlpha:0},'-=0.6')
       
          // .staggerTo('.lines',1,{scale:1.2, transformOrigin:'center', repeat:0, yoyo:true},0.5, "end")

          action.eventCallback("onComplete", moveStep, ["param1"]);
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
        const action = new TimelineMax()
        .from(".path01", 1, {autoAlpha:1,drawSVG:0,repeat:0})
        action.eventCallback("onComplete", moveStep, ["param1"]);
      }

      const moveToStep5 = (param) => {
        console.log("LINE 2 FINISHED")
        this.state.stage = 6
        this.forceUpdate()
      }

      function drawLineAnimation2() {
        TweenLite.defaultEase = Linear.easeNone;
        const action = new TimelineMax()
        .from(".path02", 1, {autoAlpha:1,drawSVG:0,repeat:0})
        action.eventCallback("onComplete", moveToStep5, ["param1"]);
      }

      const moveToStep8 = (param) => {
        console.log("LINE 3 FINISHED")
        this.state.stage = 8
        this.forceUpdate()
      }

      function  drawLineAnimation3() {
        TweenLite.defaultEase = Linear.easeNone;

        const action = new TimelineMax()
        .to("#line01", 3, {x:"117px",y:"-85px",transform:'rotate(-61deg)', delay:1})
        .fromTo("#line02", 3, {transform:'rotate(90deg) translate(-112px, -179px)' ,delay:1},{x:"88px",y:"-46px",transform:'rotate(-61deg)'})
        .fromTo("#dot01", 1, {autoAlpha:0, delay:3.5},{autoAlpha:1})
        .fromTo("#dot01TriangleUnderneath", 1, {autoAlpha:0, delay:2.5},{autoAlpha:1})
        // 
        .fromTo("#dot02", 1, {autoAlpha:0, delay:4},{autoAlpha:1})
        .fromTo("#dot03", 1, {autoAlpha:0, delay:4.5},{autoAlpha:1})
        .fromTo("#dot04", 1, {autoAlpha:0, delay:5},{autoAlpha:1})
        .fromTo("#dot05", 1, {autoAlpha:0, delay:5.5},{autoAlpha:1})
        .fromTo("#dot06", 1, {autoAlpha:0, delay:6},{autoAlpha:1})
        .fromTo("#dot07", 1, {autoAlpha:0, delay:6.5},{autoAlpha:1})
        .fromTo("#dot08", 1, {autoAlpha:0, delay:7},{autoAlpha:1})
        .fromTo("#dot09", 1, {autoAlpha:0, delay:7.5},{autoAlpha:1})

        action.eventCallback("onComplete", moveToStep8, ["param1"]);
      }

      const moveToStep9 = (param) => {
        console.log("LINE 4 FINISHED")
        this.state.stage = 9
        this.forceUpdate()
      }

      function drawLineAnimation4() {
        TweenLite.defaultEase = Linear.easeNone;
        const action = new TimelineMax()
        .from(".dot01", 6, {autoAlpha:1,drawSVG:0, delay:3})
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

    // const showStage3Tap1 = (event) => {
    //   event.preventDefault()
    //   this.state.tappedStageWrongArea = false
    //   this.state.tappedStage1 = true
    //   console.log("showStage3Tap1",this.state.stage )
    //   this.forceUpdate()
    // }

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

      const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

      const showVideoFullScreen = (e) => {
        this.state.showFullScreenVideo = true
        this.forceUpdate()
      }
      const videoPlayButtonStyle = {
        position: 'absolute', 
        border: '1px solid red',
        left: '50%', 
        top: '50%',
        width:'100px',
        height: '100px',
        marginLeft:'-50px',
        marginTop:'-50px',
        display: 'block',
        zIndex:'10'
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
      
     
      const togglePlayVideo = (e) => {   
        console.log("togglePlayVideoParentlevel")
        const vid = document.getElementById("video1")
        const ref = {}
        ref.currentState = vid
        let currentState = { ...this.state }
        if (vid.paused) { 
            console.log("togglePlayVideo - play")
            const play = document.getElementById("playIcon")
            play.style.display = 'none'
            const pause = document.getElementById("pauseIcon")
            pause.style.display = 'none'
            vid.play()
            // refPlayButton.current.style.display = 'none'
            // refPauseButton.current.style.display = 'block'
            //videoStatusClassName = 'video-active'
        } else {
            console.log("togglePlayVideo - pause")
            const play = document.getElementById("playIcon")
            play.style.display = 'block'
            const pause = document.getElementById("pauseIcon")
            pause.style.display = 'none'
            vid.pause()
            // refPlayButton.current.style.display = 'block'
            // refPauseButton.current.style.display = 'none'
            //videoStatusClassName = 'video-inactive'
        }
        // if (currentState.videoPlaying === false) { 
        //     console.log("try playing video")
        //     currentState.videoPlaying = true
        //     currentState.calledCount = currentSate.calledCount + 1
        //     //videoPlayButtonState = videoPlayButtonStates.PLAY
        //     //setState(currentSate)
        // } else {
        //     console.log("try stopping video")
        //     currentState.videoPlaying = false
        //     currentState.calledCount = currentSate.calledCount + 1
        //     ///videoPlayButtonState = videoPlayButtonStates.PAUSE
        //     //setState(currentSate)
        // }
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

      const displayStateSwitch = (stage) => {
           return (stage === 1 || stage === 2 || stage === 4 || stage === 6) ? 'block' : 'none'
      }

      if (typeof window !== 'undefined') {
          if (this.state.stage === 0) hideIntro()
          if (this.state.stage === 3) drawLineAnimation1()
          if (this.state.stage === 5) drawLineAnimation2()
          if (this.state.stage === 7) drawLineAnimation3()
          if (this.state.stage === 8) drawLineAnimation4()
      }

    

      //TODO: - image for dogs at summary point reggie and poppy
      //TODO: - continue link , watch link

      return (<Layout>
          
        <SlideDrawer />

        {/* <DebugHelper /> */}

        <PercentageProgressIndicator percent={this.resources.field_progresspercent ? this.resources.field_progresspercent : '0%'} />

        <Grid container  
            spacing={0} 
            spacing={0} 
            justify="flex-start" 
            style={gridStyle}>

            <Grid item xs={12} sm={12}  style={gridStyle}>

                <div id="step0" style={{display: (this.state.stage === 0) ? 'flex':'none',flexDirection:'row',width:'100%',margin:'auto'}}>
                        <div id="introImage" style={{display:'flex',width:'50%',height:'100vh',flexDirection:'column',alignItems:'flex-end',justifyContent:'center'}}> 
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.DUDLEY), width:'500px',height:'500px'}} imgName="xray_table_poppy_1500.png" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.POPPY), width:'500px',height:'500px'}} imgName="xray_table_poppy_1500.png" />
                            <CustomFluidImage  style={{display: displayDog(this.state.dogName, dogName.REGGIE), width:'500px',height:'500px'}} imgName="xray_table_poppy_1500.png" />
                        </div>
                        <div id="introText" style={{display:'flex',width:'50%',height:'100vh',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}> 
                            <BottomRightIntroText>{processHtml(replaceDogName((this.resources.field_instructionstext) ? this.resources.field_instructionstext.processed : '',this.state.dogName))}</BottomRightIntroText>
                            <BottomRightIntroBodyText>{processHtml(replaceDogName(this.resources.field_infotext ? this.resources.field_infotext.processed :'' ,this.state.dogName))}</BottomRightIntroBodyText>
                        </div> 
                </div>

                 {/* ,transform: 'rotate(-61deg) translate(6px, 6px)' */}

                <Frame id="step1" style={{display: (this.state.stage > 0 && this.state.stage < 9 ) ? 'block':'none'}}>
                    <FrameInner>

                        <CustomFluidImage style={{display: displayDog(this.state.dogName, dogName.DUDLEY)}} imgName="Dog-1_Dudley_xray.jpg" />
                        <CustomFluidImage style={{display: displayDog(this.state.dogName, dogName.POPPY)}} imgName="Dog-2_Poppy_xray.jpg" />
                        <CustomFluidImage style={{display: displayDog(this.state.dogName, dogName.REGGIE)}} imgName="Dog-3_Reggie_xray.jpg" />

                        <div id="LinesHolder1" style={{display: displayStateLine01(this.state.stage),position:'absolute',left:'2%',top:'160px',width:'600px',height:'250px'}}><Lines /></div>
                        <div id="LinesHolder2" style={{display: displayStateLine02(this.state.stage),position:'absolute',left:'2%',top:'160px',width:'600px',height:'250px'}}><Lines2 style={{opacity:1,transform: 'rotate(90deg) translate(-112px, -179px)'}}/></div>
                        
                        <div id="LinesHolder3a" style={{display: displayState7(this.state.stage),position:'absolute',left:'2%',top:'160px',width:'600px',height:'250px'}}>
                          {/* <Lines id="line01" style={{opacity:1,transform: 'rotate(-61deg) translate(117px, 51px)'}}/> */}
                          <Lines id="line01" />
                        </div>
                        
                        <div id="LinesHolder3b" style={{display: displayState7(this.state.stage),position:'absolute',left:'2%',top:'160px',width:'600px',height:'250px'}}>
                          {/* <Lines2 id="line02" style={{opacity:1,transform: 'rotate(-61deg) translate(85px, 57px)'}}/> */}
                          <Lines2 id="line02" />
                        </div>

                        <div id="LinesHolder3c" style={{display: displayState7(this.state.stage),position:'absolute',left:'40%',top:'229px',width:'600px',height:'250px'}}>
                          <DarkBlueBigDot id="dot01" style={{position:"absolute",left:"-21px",top:"-27%"}}>
                               <div style={{position:"absolute",left:"20%",top:"30%",color:'white',fontSize:'2rem',fontFamily:'Oswald'}}>T4</div>
                               <TriangleBlue id="dot01TriangleUnderneath" style={{position:"absolute", left: '35%',top:'99%'}}/>
                          </DarkBlueBigDot>
                          <WhiteSmallDot id={"dot02"} style={{position:"absolute",left:"0px",top:"35px",fontSize:'0.9rem'}}><div style={{position:"absolute",left:"30%",top:0}}>1</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot03"} style={{position:"absolute",left:"42px",top:"20px",fontSize:'0.9rem'}}><div style={{position:"absolute",left:"30%",top:0}}>2</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot04"} style={{position:"absolute",left:"83px",top:"9px",fontSize:'0.9rem'}}><div style={{position:"absolute",left:"30%",top:0}}>3</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot05"} style={{position:"absolute",left:"128px",top:"-6px",fontSize:'0.9rem'}}><div style={{position:"absolute",left:"30%",top:0}}>4</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot06"} style={{position:"absolute",left:"176px",top:"-22px",fontSize:'0.9rem'}}><div style={{position:"absolute",left:"30%",top:0}}>5</div></WhiteSmallDot>
                          <WhiteSmallDot id={"dot07"} style={{position:"absolute",left:"217px",top:"-35px",fontSize:'0.9rem'}}><div style={{position:"absolute",left:"30%",top:0}}>6</div></WhiteSmallDot>
     
                          <DarkBlueSmallDot id={"dot08"} style={{position:"absolute",left:"257px",top:"-67px"}}><div style={{position:"absolute",left:"20%",top:"-10%",color:'white',fontSize:'0.7rem'}}>.7</div></DarkBlueSmallDot>
                          <DarkBlueSmallDot id={"dot09"} style={{position:"absolute",left:"214px",top:"-8px"}}><div style={{position:"absolute",left:"20%",top:"-10%",color:'white',fontSize:'0.7rem'}}>.6</div></DarkBlueSmallDot>
                        </div>
 

                        {/* <div id="LinesHolder2" style={{display: displayState5(this.state.stage),position:'absolute',left:'-6%',top:'141px',width:'600px',height:'250px'}}><Lines2 /></div>
                        <div id="LinesHolder3" style={{display: displayState7(this.state.stage),position:'absolute',left:'-6%',top:'141px',width:'600px',height:'250px'}}><Lines3 /></div> */}

                        {/* <SlideTextSelection state={this.state} /> */}

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

                        <SlideText display={displayState8(this.state.stage)}
                              stage={this.state.stage}
                              tappedStageWrongArea={this.state.tappedStageWrongArea} 
                              failedText={"Try again"}
                              bodyText={(this.resources.field_finalscreenbottomline2) ? this.resources.field_finalscreenbottomline2.processed : 'Short axis measurement = 5.6'}
                              titleText={this.resources.field_finalscreenbottomline1 ? this.resources.field_finalscreenbottomline1 : 'Long axis measurement = 6.7'} />

                        <PopupDarkBlue  style={{display: displayState8(this.state.stage)}}>
                          <PopupLightOrangeHeaderText>{processHtml(this.resources.field_popupheadertext.processed ? this.resources.field_popupheadertext : '6.7 + 5.6')}</PopupLightOrangeHeaderText>
                          <PopupWhiteBodyText>{processHtml(this.resources.field_popupbodytext.processed ? this.resources.field_popupbodytext.processed : '')}</PopupWhiteBodyText>
                        </PopupDarkBlue>

                        <SwitchHolder id="switch" style={{display: displayStateSwitch(this.state.stage)}}><CustomizedSwitches onChange={handleSwitchChange} hintChecked={this.state.hintChecked} /></SwitchHolder>
                        
                        
                         <TooltipHolder1 id="tip1" stageVisible={(this.state.stage === xraySlides.STAGE1)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '22%' topPos = '29%' />
                         {/* <TooltipHolder2 id="tip2" stageVisible={(this.state.stage === xraySlides.STAGE2)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} rightPos = '19%' topPos = '50%' /> */}
                         {/* <TooltipHolder1 id="tip1a" stageVisible={(this.state.stage === xraySlides.STAGE1)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '15%' topPos = '29%' /> */}
                         <TooltipHolder2 id="tip2a" stageVisible={(this.state.stage === xraySlides.STAGE2)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} rightPos = '24%' topPos = '53%' />
                        
                         {/* <TooltipHolder1 id="tip3" stageVisible={(this.state.stage === xraySlides.STAGE4)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext3.processed} leftPos = '21%' topPos = '37%' /> */}
                         {/* <TooltipHolder2 id="tip3" stageVisible={(this.state.stage === xraySlides.STAGE4)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext3.processed} rightPos = '16%' topPos = '21%' /> */}
                         <TooltipHolder2 id="tip3a" stageVisible={(this.state.stage === xraySlides.STAGE4)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext3.processed} rightPos = '42%' topPos = '37%' />
       
                         
                         <TooltipHolder1 id="tip4" stageVisible={(this.state.stage === xraySlides.STAGE6)} hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext4.processed} leftPos = '25%' topPos = '3%' />
                         
                         <div id="tapArea1" onClick={showStage1Tap1} style={{display: displayState1(this.state.stage),opacity:'0.05',position:'absolute',left:'37%',top:'49%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>
                        <div id="tapArea2" onClick={showStage1Tap2} style={{display: displayState2(this.state.stage),opacity:'0.05',position:'absolute',right:'41%',top:'70%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 

                        <div id="tapArea3" onClick={showStage2Tap1} style={{display: displayState4(this.state.stage),opacity:'0.05',position:'absolute',left:'53%',top:'49%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div>
                        <div id="tapArea4" onClick={showStage2Tap2} style={{display: displayState4(this.state.stage),opacity:'0.05',position:'absolute',right:'58%',top:'70%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 
  
                        <div id="tapArea5" onClick={showStage5Tap1} style={{display: displayState6(this.state.stage),opacity:'0.05',position:'absolute',right:'58%',top:'34%',border:'0px solid red'}}><TapCircle style={{margin: 'auto'}}/></div> 

                    </FrameInner>
                </Frame>


                <div id="step3" style={{display: (this.state.stage === 9) ? 'flex':'none',flexDirection:'row',width:'100%',margin:'auto'}}>

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
                            
                            <TaskSummaryFootnote>{processHtml(replaceDogName(this.resourcesSummary.field_tablefooterhtml1.processed,this.state.dogName))}</TaskSummaryFootnote>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <div style={{display: 'flex',flexDirection:'row'}}>
                                <div id="videoThumbImage" style={{display:'flex',width:'75px',height:'75px',flexDirection:'row',alignItems:'center'}}> 
                                    <TaskThumbnail style={{position:'relative',display:'block',width:'75px',height:'75px'}}>
                                          <OrangeEdgeToThumbnail  style={{position:'absolute',width:'5px',height:'75px',left:'0',top:'0'}}/> 
                                          <img src={"/xray/nuala_summerfield_thumbnail_01.jpg"} style={{width:'75px',height:'75px'}} />

                                          <SmallPlayArrow onClick={showVideoFullScreen} style={{position:'absolute',width:'20px',right:'-13%',top:'32%'}}>
                                                <SmallTriangleRight  style={{position:'absolute',paddingLeft: '6px',paddingTop: '4px'}} />
                                          </SmallPlayArrow>
                                    </TaskThumbnail>
                                </div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <div style={{display: 'flex',flexDirection:'column'}}>
                                      <VideoThumbnailText>{processHtml(this.resourcesSummary.field_videocaptiontext1.processed)}</VideoThumbnailText>
                                      <WatchLinkButton onClick={showVideoFullScreen}>Watch</WatchLinkButton>
                                 </div>
                            </div>
                            {/* <ArrowForwardRoundedIcon /> */}
                            <div style={{
                                   position: 'absolute',
                                   right: '0', 
                                   bottom: '0',
                                   width:'150px',
                                   height: '100px',
                                   display: 'flex',
                                   flexDirection: 'column',
                                   justifyContent: 'center',
                                   alignContent: 'center',
                                   textAlign: 'center',
                                   border: '0px solid red'

                              }}>
                              <WebsiteLink style={{width:'100%',paddingRight:'1rem',display: 'flex',flexDirection:'row',justifyContent:'flex-end',textDecoration:"none"}} to="/" typeOfButton={buttonStyleType.NORMAL_LINK}>
                                  <span  style={{display:'block',paddingBottom:'0px'}} >Continue</span>
                                  {/* <ArrowForwardRoundedIcon style={{display:'block',paddingTop:'0px'}} /> */}
                              </WebsiteLink>
                            </div>
                            
                        </div> 
                        <VideoFullScreen id="videoFullScreen" style={{zIndex:'2000',
                                 display: displayFullScreenVideo(this.state.showFullScreenVideo)
                                 }}>

                                 <video id="video1" preload loop={false}
                                        className='react-player'
                                        width='100%'
                                        height='100%' 
                                        controls="true"
                                        style={{ width: `100%`,minHeight: `100%`,
                                            paddingTop:'5%',
                                            paddingBottom:'5%' 
                                        }}
                                  >

                                  <source src={"http://dev-vetm-admin.pantheonsite.io/sites/default/files/2020-06/01_Meaningful%20Murmurs%20-%20Nuala%20Summerfield.mp4"} type="video/mp4" />
                                  <track kind="transcript" srcLang="en" src={Transcript} />
                                  <track kind="captions" srcLang="en" src={Captions} />
                                  <track kind="descriptions" srcLang="en" src={Description} />

                                </video>

                                <BigPlayArrow id="playIcon"  onClick={togglePlayVideo} style={{position:'absolute',width:'100px',height:'100px',left:'50%',top:'50%'}}>
                                      <BigTriangleRight id="playArrowIcon" style={{position:'absolute',left:'41%',top:'22%',width:'50px',height:'50px',paddingLeft: '6px',paddingTop: '4px'}} />
                                      <PauseIcon id="pauseIcon" style={{display:'none',position:'absolute',left:'25%',top:'24%',width:'50px',height:'50px',paddingLeft: '6px',paddingTop: '4px'}} />
                                </BigPlayArrow>

                                <div id="closeBtn" style={{position:'absolute', 
                                      cursor: 'pointer',
                                      fontSize:'2rem',
                                      top:'2%',
                                      right:'0',
                                      width:'50px',
                                      height:'50px',
                                      color: 'white',
                                      textAlign:'center',
                                      verticalAlign:'middle'}} onClick={closeFullScreenVideoBtn}>X</div>

                        </VideoFullScreen>
                </div>
               
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
          field_video1 {
            relationships {
              field_media_video_file {
                localFile {
                  url
                }
              }
            }
          }
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
