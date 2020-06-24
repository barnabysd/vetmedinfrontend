import React from "react"
import  { useCallback, useState, useEffect,  useDebugValue, forceUpdate } from 'react'
import CustomFluidImage from '../components/CustomFluidImage';
import tw from "tailwind.macro"
//import styled from "@emotion/styled"
import styled from 'styled-components'
import {TweenLite, TimelineMax, Linear} from 'gsap'
import theme, { sm, md, lg, xl } from '../theme'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

gsap.registerPlugin(DrawSVGPlugin);
// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)
// import DrawSVGPlugin from '../vendor/gsap-plugins/DrawSVGPlugin'

import chrevonSvg from '../images/icons_and_glyphs/chervon_down_white_path_20237.svg'

const PercentProgress = styled.div`
  width: 2.375rem;
  height: 1.375rem;
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: -0.15px;
  text-align: center;
  color: white;
`
const PercentProgressBig = styled(PercentProgress)`
  width: 8.375rem;
  height: 1.375rem;
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 2.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: -0.15px;
  text-align: center;
  color: white;
`

const percentProgressSmallCircle = styled.div`
  width: 0.613rem;
  height: 0.613rem;
  border-radius:50%;
  border: solid 3px ${theme.palette.deminBlue.main};
  background-color: ${theme.palette.midnightBlue.main};
`
const percentProgressCircle = styled.div`
  width: 2.598rem;
  height: 3rem;
  border-radius:50%;
  border: 3px solid ${theme.palette.deminBlue.main};
  background-color: transparent;
`
const ProgressIndicatorHolder = styled.div`
    position: absolute;
    border: 0px solid red;
    right: 0;
    top:0;
    width:80px;
    height: 100px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    z-index: 100;
    border-radius: 0 0 0 1rem;
    background-color: ${theme.palette.midnightBlue.main};
`
const ChervonDown = styled.img.attrs((props) => ({ onClick:props.onClick, src: props.src}))`
    width: 1rem;
    height: 1rem;
    background-color: transparent;
`
const ChervonUp = styled.img.attrs((props) => ({style:props.style, onClick:props.onClick, src: props.src}))`
    width: 1rem;
    height: 1rem;
    background-color: transparent;
`

const countdownStrokeWidth = 2
const divHtmlSize = "20px"
const circleSizeInPx = "65px"

const DivHolder = styled.div`
  display: block;
  margin:0 auto;
  width:100%;
`
const SvgImage =  styled.svg.attrs((props) => ({ xmlns:"http://www.w3.org/2000/svg", viewBox:"0 0 34 34" }))`
  height: ${circleSizeInPx};
  transform: translate(0.5px, 0.5px) rotate(-90deg);
  width: ${circleSizeInPx};
  overflow: visible !important;
`

const CountdownBackgroundCircle = styled.circle.attrs((props) => ({ id: props.id, cx: props.cx, cy: props.cy, r: props.r}))`
  fill: none;
  stroke: ${theme.palette.deminBlue.main};
  stroke-width: ${countdownStrokeWidth};

`
const CountdownProgressCircle = styled.circle.attrs((props) => ({ id: props.id, cx: props.cx, cy: props.cy, r: props.r}))`
  fill: none;
  stroke: ${theme.palette.skyBlue.main};
  stroke-width: ${countdownStrokeWidth};
  visibility:hidden;
`
const CountdownSmallProgressCircle = styled.circle.attrs((props) => ({ id: props.id, cx: props.cx, cy: props.cy, r: props.r, className: props.className}))`

  stroke: ${theme.palette.deminBlue.main};
  fill: ${theme.palette.midnightBlue.main};
  stroke-width: ${countdownStrokeWidth};
  
`

const ParentCircle  = styled.div`
    position: relative;
    width: ${circleSizeInPx};
    height: ${circleSizeInPx};
    border-radius: 50%;
    overflow: visible;
`
const CountdownProgressLabel = styled.circle.attrs((props) => ({ id: props.id}))`
    position: relative;
    width: ${divHtmlSize};
    height: ${divHtmlSize};
    border-radius: 50%;
    background-color: transparent;
    text-align: center;
 
  color: white;
  border: 2px solid  ${theme.palette.deminBlue.main};
  font-weight:600;
  
`
const CountdownProgressLabelContainer = styled.div.attrs((props) => ({ id: props.id}))`
  position: absolute;
  display: none;
  top: 0px;
  left: 0px; 
  width: 10px;
  height: 10px;
  /*(circle-height - div-height) / 2 */
 
`

const PercentProgressHeaderText = styled.div`
width: 8.688rem;
  height: 1.938rem;
  font-family: Poppins;
  font-size: 1.375rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-align: left;
  color: white;

`
const PercentProgressBottomText = styled.div`
width: 11.875rem;
  height: 2.5rem;
  font-family: Poppins;
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: white;
`

const PercentProgressBodyText = styled.div`
width: 11.875rem;
  height: 2.5rem;
  font-family: Poppins;
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: white;
  `

const PercentProgressExpandedHolder = styled.div`
width: 14.438rem;
height: 21.906rem;
background-color: ${theme.palette.midnightBlue.main};
`

const CircleExpanded = styled.div`
width: 8.75rem;
height: 9.263rem;
`
const TextExpanded = styled.div`
width: 4.625rem;
  height: 3.438rem;
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 2.313rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -0.37px;
  text-align: center;
  color: white;

`

const percentageComplete = 0.66
const divSize = 20 
const circleSize = 66
//transform-origin: -36px 33px;


const animateProgressBar = () => {

  //create a timeline with all of the animation in it (linear), but pause it so that we can tap into the timeline's "progress()" function to jump to whereever we want, or even animate it.
const tl = new TimelineMax({paused:true});
tl.fromTo(".js-countdown__progress", 1, {drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:Linear.easeNone})
//.set(".js-countdown__small-circle_progress", {drawSVG:"100%", transformOrigin:"0% 50%",rotation:0})
  // .to(".js-countdown__small-circle_progress", 1, {rotation:360, transformOrigin:(divSize / 2) + "px " + (circleSize / 2) + "px", ease:Linear.easeNone}, 0)
  //animate the container <div> with an offset transform-origin that's placed on the center of the circle
  //.to("#countdown-progress-label-container", 1, {rotation:360, transformOrigin:(divSize / 2) + "px " + (circleSize / 2) + "px", ease:Linear.easeNone}, 0)
  .to("#countdown-progress-label-container", 1, {rotation:360, transformOrigin:(divSize / 2) + "px " + (circleSize / 2) + "px", ease:Linear.easeNone}, 0)
  //rotate the inner label in the OPPOSITE direction to counteract the container's rotation, so it appears to never rotate :)
  .to("#countdown-progress-label", 1, {rotation:-360, ease:Linear.easeNone}, 0);

  // js-countdown__small-circle_progress


//to jump to that spot immediately, just uncomment this line:
//tl.progress(percentageComplete);

//or, let's animate to that spot instead...
TweenLite.to(tl, 3, {progress:percentageComplete, delay:1});

//note: this uses DrawSVGPlugin which you can read about at https://greensock.com/drawSVG/

  
}

const ProgressTopHeaderText = styled.div`
  
  height: 1.938rem;
  font-family: Poppins;
  font-size: 1.375rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-align: left;
  color: white;

`


const PercentageProgressIndicator = ({percent})  => {
    const stateInitial = { 
        expanded: false
    }

    const [state, setState] = useState(stateInitial)
    if (typeof window !== 'undefined') {
        animateProgressBar()
    }
    const toggleBox = (e) => {
      let currentState = { ...state }
      currentState.expanded = !(currentState.expanded)
      console.log("currentState ",currentState)
      setState(currentState)
    }


    const dogName = "Poppy"

    if (state.expanded){
      return (<ProgressIndicatorHolder onClick={toggleBox} style={{width:'14.438rem' ,height: '21.906rem' }}>
      <div style={{position: 'absolute',left: "19%", top: "5%"}}>
        <ProgressTopHeaderText>Activity total</ProgressTopHeaderText>
      </div>
      <div style={{position: 'absolute',left: "27%", top: "39%"}}>
        <PercentProgressBig>{percent}</PercentProgressBig>
      </div>
      <div style={{position: 'absolute',left: "49%", top: "89%"}}>
        <ChervonDown style={{transform: "rotate(180deg)"}} src={chrevonSvg} />
      </div>
      <div style={{position: 'absolute',left: "11%", top: "74%"}}>
        <PercentProgressBottomText>You are currently looking after <span style={{color:theme.palette.deminBlue.main}}>{dogName}</span></PercentProgressBottomText>
      </div>
      <div style={{position: 'absolute',left: "10%", top: "14%"}}>    
     
          
      <SvgImage xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
                    <CountdownBackgroundCircle id="countdownBckgrdCircle" cx="-30" cy="55" r="50" />
                    <CountdownProgressCircle id="countdownProgCircle" cx="-30" cy="55" r="50" className="js-countdown__progress"/>
                    <CountdownSmallProgressCircle id="smallProgressCircle"  cx="20" cy="55" r="6" className="js-countdown__small-circle_progress"/>
                </SvgImage>
      <CountdownProgressLabelContainer id="countdown-progress-label-container">
                <CountdownProgressLabel id="countdown-progress-label" />
            </CountdownProgressLabelContainer>

         
      </div>

  </ProgressIndicatorHolder>
      )
    }else{
    return (
     
          <ProgressIndicatorHolder onClick={toggleBox} style={{width:'4.875rem',height:  '5.938rem'}}>


          
                <div style={{position: 'absolute',left: "27%", top: "34%"}}>
                  <PercentProgress>{percent}</PercentProgress>
                  </div>
                <div style={{position: 'absolute',left: "40%", top: "75%"}}>
                  <ChervonDown src={chrevonSvg} />
                </div>
                <div style={{position: 'absolute',left: "12%", top: "9%"}}>    
                   
                 
                <SvgImage xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
                    <CountdownBackgroundCircle id="countdownBckgrdCircle" cx="17" cy="17" r="15.5" />
                    <CountdownProgressCircle id="countdownProgCircle" cx="17" cy="17" r="15.5" className="js-countdown__progress"/>
                    <CountdownSmallProgressCircle id="smallProgressCircle"  cx="32" cy="17" r="3" className="js-countdown__small-circle_progress"/>
                </SvgImage>

                <CountdownProgressLabelContainer id="countdown-progress-label-container">
                    <CountdownProgressLabel id="countdown-progress-label" />
                </CountdownProgressLabelContainer>

                 
                </div>

            </ProgressIndicatorHolder>
        
        )
    }
}

export default PercentageProgressIndicator




