import React, {useRef, useEffect, createRef} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from '../theme'
import styled from 'styled-components'

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

gsap.registerPlugin(DrawSVGPlugin);


// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)
// import DrawSVGPlugin from '../vendor/gsap-plugins/DrawSVGPlugin'

// const PurpleSwitch = withStyles({
//   switchBase: {
//     color: purple[300],
//     '&$checked': {
//       color: purple[500],
//     },
//     '&$checked + $track': {
//       backgroundColor: purple[500],
//     },
//   },
//   checked: {},
//   track: {},
// })(Switch);

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
`;


const gridStyle = { border: '0px solid red' }

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

const xrayHolder = styled.div`
  width: 60.938rem;
  height: 44.125rem;
  object-fit: contain;
`

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

{/* <svg id="lines" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 500 300">
<path className="path path01" fill="none" stroke="#ffce00" strokeWidth="5.5" d="M82 35l94 69"/>
<path className="path path02" fill="none" stroke="#ffce00" strokeWidth="5.5" d="M176 103l-57 59"/>
<path className="path path03" fill="none" stroke="#ffce00" strokeWidth="5.5" d="M119 162l81 77"/>
<circle className="star star01" cx="83.5" cy="35.5" r="6" fill="#ffce00"/>
<circle className="star star02" cx="172.5" cy="103.5" r="6" fill="#ffce00"/>
<circle className="star star03" cx="120.5" cy="162.5" r="6" fill="#ffce00"/>
<circle className="star star04" cx="198.5" cy="238.5" r="6" fill="#ffce00"/>
</svg> 

<Line x1="0" y1="0" x2="100" y2="100" stroke="red" strokeWidth="2" />


<svg id="text" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 500 300">

<g className="lines one" fill="#505050">
  <text x="27.1" y="38.6" font-family="'ArialMT','Arial',sans-serif" font-size="12">Number</text>
  <text x="103.1" y="42.3" font-family="'Arial-Black','Arial Black',sans-serif" font-size="19.7" font-weight="900">ONE</text>
</g>
<g className="lines two" fill="#505050">
  <text x="113.1" y="106.6" font-family="'ArialMT','Arial',sans-serif" font-size="12">Number</text>
  <text x="189.1" y="110.3" font-family="'Arial-Black','Arial Black',sans-serif" font-size="19.7" font-weight="900">TWO</text>
</g>
<g className="lines three" fill="#505050">
  <text x="63.1" y="164.6" font-family="'ArialMT','Arial',sans-serif" font-size="12">Number</text>
  <text x="139.1" y="168.3" font-family="'Arial-Black','Arial Black',sans-serif" font-size="19.7" font-weight="900">THREE</text>
</g>
<g className="lines four" fill="#505050">
  <text x="138.1" y="241.6" font-family="'ArialMT','Arial',sans-serif" font-size="12">Number</text>
  <text x="214.1" y="245.3" font-family="'Arial-Black','Arial Black',sans-serif" font-size="19.7" font-weight="900"> FOUR</text>
</g>
</svg>
*/}
<div style="display: block;position: absolute;left: -6%;top: 141px;width: 600px;height:250px">
  <svg id="lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250">
    <path class="path path01" fill="none" stroke="#ffce00" stroke-width="1.5" d="M176 103l50 59">
      </path>
  </svg> 
</div>
const linesSvg = () => {
  return (  
    <div>
        <svg id="lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250">
            <path className="path path01" fill="none" stroke="#ffce00" strokeWidth="1.5" d="M176 103l50 59"></path>
        </svg> 
    </div>

  )
}
  //   <div>
  //     <svg id="lines" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 800 700">
  //          <path className="path path01" fill="none" stroke="#ffce00" strokeWidth="5.5" d="M0 0l100 100"/>
  //          <path className="path path02" fill="none" stroke="#ffce00" strokeWidth="5.5" d="M176 103l-57 59"/>
  //          <circle className="star star01" cx="100" cy="100" r="6" fill="#ffce00"/>
  //          <circle className="star star02" cx="172.5" cy="103.5" r="6" fill="#ffce00"/>
  //     </svg>
  //     <svg id="text" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 800 700">
  //          <g className="lines one" fill="#505050"></g>
  //          <g className="lines two" fill="#505050"></g>
  //     </svg>
  // </div>

const Lines = styled(linesSvg)`
     filter: drop-shadow(0px -5px 15px #ffce00);
`
const Frame = styled.div`
      position:relative;
      
      top:0;
      width:800px;
      height:700px;
      background-color: lightgrey;
      border-radius: 30px;
      border-left: 30px solid lightgrey;
      border-right: 30px solid lightgrey;
      border-top: 30px solid lightgrey;
      border-bottom: 30px solid lightgrey;
      padding: 5px;
      left: calc(50% - 400px);
`
const FrameInner = styled.div` 
  border-left: 15px solid darkgray;
  border-right: 15px solid #e6e6e6;
  border-top: 15px solid darkgray;
  border-bottom: 15px solid darkgray;
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

function example({slide}) {
  switch (slide) {
      case slide.STAGE1:
      return (<section>yes</section>)
      default:
        return (<button>Error: missing params 0</button> )
    }
}

const SlideText = ({tappedStageWrongArea,failedText,bodyText,titleText}) => {
         return (<div style={{position:'absolute',left:'5%',bottom:'-75px', width:"80%",height:'200px',border:'0px solid green'}}>
             <div style={{display: (tappedStageWrongArea) ? 'flex':'none',alignItems:'center',border:'0px solid red'}}>
                <Cross style={{width:'150px',height:'50px',border:'0px solid red'}}/> 
                <BottomXrayHeader style={{border:'0px solid red'}}>{failedText}</BottomXrayHeader>
            </div>
            <div style={{display: (tappedStageWrongArea) ? 'none':'block',border:'0px solid red'}}>
                <BottomXrayHeader >{titleText}</BottomXrayHeader>
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

class Xray extends React.Component {
    constructor(props) {
        super(props)
        this.timerID = 0
        this.state = {}
        this.showIntroduction = false
        this.state.stage =  1
        this.state.hintChecked = false
        this.state.isLineAnimationVisible = false
        this.state.tappedStage1 = false
        this.state.tappedStage2 = false
        this.state.tappedStage3 = false
        this.state.tappedStage4 = false
        this.state.tappedStage1WrongArea = false
        this.state.tappedStage2WrongArea = false
        this.state.tappedStage3WrongArea = false
        this.state.tappedStage4WrongArea = false

        this.resources = {}
        this.resourcesAr = get(this, 'props.data.allNodeTask.nodes')
        //console.log(this.resourcesAr)
        // if (!resourcesAr) {
        //   return  (<div>no dataa</div>)
        // }
        // if (!(resourcesAr[0])) {
        //   return  (<div>no data</div>)
        // }
        this.resources = this.resourcesAr[0]
        console.log(this.resources)

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

    // handleChange = (event) => {
    //     console.log("here 2" ,(this.state.hintChecked ? 'on' : 'off') )
    //     this.state.hintChecked = !this.state.hintChecked
        
    // };

    componentWillUnmount() {
        //clearInterval(this.timerID);
    }
    
    tick() {
        // this.setState({
        //     date: new Date()
        // });
    }

    render() {
      const hideIntro = () => {
          if (this.showIntroduction) {
              const action = new TimelineMax()
              action.defaultEase = Linear.easeNone
              //action.set("#step0",{autoAlpha:0})
              action.from("#step0", 5, {
                autoAlpha:1,
              }).to("#step0", 3, {
                autoAlpha:0,
              })
              
              action.eventCallback("onComplete", moveToTaskStart, ["param1"]);
          }
      }
      //hideIntro()
      const drawLineAnimation = () => {
          TweenLite.defaultEase = Linear.easeNone;
          //from("#LinesHolder", 1, {autoAlpha:1},'-=0.6')
          const action = new TimelineMax()
          .from(".path01", 1, {drawSVG:0})
          // .staggerTo('.lines',1,{scale:1.2, transformOrigin:'center', repeat:1, yoyo:true},0.5, "end")

          // .to(".star01",0.2, {autoAlpha:0, scale:3, transformOrigin:'center', repeat:3, yoyo:true})
          // .from(".one",1, {autoAlpha:0},'-=0.6')
          // .from(".path01", 1, {drawSVG:0})
          // .to(".star02",0.2, {autoAlpha:0, scale:3, transformOrigin:'center', repeat:3, yoyo:true})
          // .from(".two",1, {autoAlpha:0},'-=0.6')
          // .from(".path02", 1, {drawSVG:0})
          // .to(".star03",0.2, {autoAlpha:0, scale:3, transformOrigin:'center', repeat:3, yoyo:true})
          // .from(".three",1, {autoAlpha:0},'-=0.6')
          // .from(".path03", 1, {drawSVG:0})
          // .to(".star04",0.2, {autoAlpha:0, scale:3, transformOrigin:'center', repeat:3, yoyo:true})
          // .from(".four",1, {autoAlpha:0},'-=0.6')
          // .staggerTo('.star',1,{scale:2, transformOrigin:'center', repeat:1, yoyo:true},0.5, "end")
          // .staggerTo('.lines',1,{scale:1.2, transformOrigin:'center', repeat:1, yoyo:true},0.5, "end")

          action.eventCallback("onComplete", moveStep, ["param1"]);
      }

      const moveToTaskStart = (param) => {
        console.log("INTRO FINISHED")
        this.showIntroduction = false
        this.forceUpdate()
      }

      const moveStep = (param) => {
          console.log("LINE FINISHED")
          this.state.stage = (1 * this.state.stage) + 1
          this.forceUpdate()
      }

      const showStageTap1 = (event) => {
        event.preventDefault()
        this.state.tappedStage1WrongArea = false
        this.state.tappedStage1 = true
        console.log("showStageTap1",this.state.stage )
        this.forceUpdate()
      }
      const showStageTap2 = (event) => {
          event.preventDefault()
          
          console.log("showStageTap2",this.state.stage )
          //this.state.stage = (1 * this.state.stage) + 1
          if (this.state.tappedStage1) {
               this.state.tappedStage1WrongArea = false
               drawLineAnimation();
          } 
      }

    
      const showStage1Error = (event) => {
          event.preventDefault()
          console.log("ERROR", this.state.stage )
          //this.state.stage = (1 * this.state.stage) + 1
          this.state.tappedStage1WrongArea = true
          this.forceUpdate()
      }

      const handleSwitchChange = (event) => {
          console.log("here" ,(!this.state.hintChecked  ? 'on' : 'off') )
          this.state.hintChecked = !this.state.hintChecked 
          this.forceUpdate()
      };
      
      return (<Layout>
          
        <SlideDrawer />

        <Grid container  
            spacing={0} 
            spacing={0} 
            justify="flex-start" 
            style={gridStyle}>
            <Grid item xs={12} sm={12} style={gridStyle}>
               <div style={{height: '100px'}}></div>
            </Grid>
            <Grid item xs={12} sm={2}  style={gridStyle}></Grid>
            <Grid item xs={12} sm={8}  style={gridStyle}>
                <div id="step0" style={{display: (this.showIntroduction) ? 'flex':'none',flexDirection:'row',width:'600px',height:'400px'}}>
                       <div id="introImage" style={{display:'flex',width:'200px',flexDirection:'column',alignItems:'center'}}> 
                            <CustomFluidImage style={{width:'500px',height:'500px'}} imgName="xray_table_poppy_1500.png" />
                        </div>
                        <div id="introText" style={{display:'flex',width:'600px',flexDirection:'column',alignItems:'center'}}> 
                            <BottomRightIntroText>{processHtml(this.resources.field_instructionstext.processed)}</BottomRightIntroText>
                            <BottomRightIntroBodyText>{processHtml(this.resources.field_infotext.processed)}</BottomRightIntroBodyText>
                        </div> 
                </div>
                <Frame id="step1" style={{display: (this.showIntroduction) ? 'none':'block'}}>
                <FrameInner>
                        <CustomFluidImage imgName="Dog-1_Dudley_xray.jpg" />

                        <div id="LinesHolder" style={{opacity: 1,position:'absolute',left:'-6%',top:'141px',width:'600px',height:'250px'}}>
                              <Lines />
                        </div>

                        <SlideText tappedStage1WrongArea={this.state.tappedStage1WrongArea} 
                                    failedtext={this.resources.field_failedtext.processed}
                                    bodyText={this.resources.field_bottombodytext.processed}
                                    titleText={this.resources.field_bottomtitle.processed} />

                        <div style={{position:'absolute',right:'1%',bottom:'3%'}}>
                              <CustomizedSwitches onChange={handleSwitchChange} hintChecked={this.state.hintChecked} />
                        </div>
                        <div id="wrongTapArea1" onClick={showStage1Error} style={{ position:'absolute',left:'2%',top:'0',width:'700px',height:'500px',border:'0px solid red'}}>
                        </div>
                        <div id="tapArea1" onClick={showStageTap1} style={{opacity:'0.1', position:'absolute',left:'37%',top:'49%',border:'0px solid red'}}>
                            <TapCircle style={{margin: 'auto'}} />
                        </div>
                        <div id="tapArea2" onClick={showStageTap2} style={{opacity:'0.1',position:'absolute',right:'41%',top:'70%',border:'0px solid red'}}>
                            <TapCircle style={{margin: 'auto'}}/>
                        </div> 
                         <TooltipHolder1 hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext1.processed} leftPos = '15%' topPos = '29%' />
                         <TooltipHolder2 hintChecked={this.state.hintChecked} textHtml={this.resources.field_taptooltiptext2.processed} rightPos = '19%' topPos = '50%' />
                        
                
                    </FrameInner>
                </Frame>
               



                <div id="step2" style={{display: (this.state.stage === xraySlides.STAGE3) ? 'flex' : 'none'}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{this.resources.field_bottomtitlestep2.processed}</StyledTypography>
                        <StyledTypography variant="body1">{(this.resources.field_bottombodytextstep2) ? this.resources.field_bottombodytextstep2.processed: 'no data2'}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="stepFailure2" style={{display: (this.state.stage === xraySlides.STAGE4) ? 'flex' : 'none'}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1"><Cross /> {this.resources.field_failureText2}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="step3" style={{display: (this.state.stage === xraySlides.STAGE5) ? 'flex' : 'none'}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{this.resources.field_bottomtitlestep3.processed}</StyledTypography>
                        <StyledTypography variant="body1">{(this.resources.field_bottombodytextstep3) ? this.resources.field_bottombodytextstep3.processed: 'no data3'}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="stepFailure3" style={{display: (this.state.stage === xraySlides.STAGE6) ? 'flex' : 'none'}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1"><Cross /> {this.resources.field_failureText2}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="step4" style={{display: (this.state.stage === xraySlides.STAGE7) ? 'flex' : 'none'}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{this.resources.field_bottomtitlestep4.processed}</StyledTypography>
                        <StyledTypography variant="body1">{(this.resources.field_bottombodytextstep4) ? this.resources.field_bottombodytextstep4.processed: 'no data4'}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="stepFailure4" style={{display: (this.state.stage === xraySlides.STAGE6) ? 'flex' : 'none'}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1"><Cross /> {this.resources.field_failureText4}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="step5" style={{display: (this.state.stage === xraySlides.STAGE8) ? 'flex' : 'none'}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{this.resources.field_bottomtitlestep5.processed}</StyledTypography>
                        <StyledTypography variant="body1">{(this.resources.field_bottombodytextstep5) ? this.resources.field_bottombodytextstep5.processed: 'no data5'}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="stepFailure5" style={{display: (this.state.stage === xraySlides.STAGE9) ? 'flex' : 'none'}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1"><Cross /> {this.resources.field_failureText5}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="step6" style={{display: (this.state.stage === xraySlides.STAGE10) ? 'flex' : 'none'}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{(this.resources.field_bottomtitlestep6) ? this.resources.field_bottomtitlestep6.processed: 'no data6'}</StyledTypography>
                        <StyledTypography variant="body1">{(this.resources.field_bottombodytextstep6) ? this.resources.field_bottombodytextstep6.processed: 'no data6'}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="stepFailure6" style={{display: (this.state.stage === xraySlides.STAGE11) ? 'flex' : 'none'}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1"><Cross /> {this.resources.field_failureText5}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="step7" style={{display: (this.state.stage === xraySlides.STAGE12) ? 'flex' : 'none'}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{(this.resources.field_bottomtitlestep7) ? this.resources.field_bottomtitlestep7.processed: 'no data7'}</StyledTypography>
                        <StyledTypography variant="body1">{(this.resources.field_bottombodytextstep7) ? this.resources.field_bottombodytextstep7.processed: 'no data 7'}</StyledTypography>
                    </ThemeProvider>
                </div>
                
            </Grid>

            <Grid item xs={12} sm={2}  style={gridStyle}></Grid>
        </Grid>
      </Layout>
  )
}
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
    }
  }
  `
