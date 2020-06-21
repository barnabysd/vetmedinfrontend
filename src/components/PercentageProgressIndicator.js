import React from "react"
import CustomFluidImage from '../components/CustomFluidImage';
import tw from "tailwind.macro"
//import styled from "@emotion/styled"
import styled from 'styled-components'
import {TweenLite, TimelineMax, Linear} from 'gsap'

import chrevonSvg from '../images/icons_and_glyphs/chervon_down_white_path_20237.svg'

const PercentProgress = styled.div`
  width: 2.375rem;
  height: 1.375rem;
  font-family: 'Oswald';
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: -0.15px;
  text-align: center;
  color: var(--white);
`
const percentProgressSmallCircle = styled.div`
  width: 0.613rem;
  height: 0.613rem;
  border-radius:50%;
  border: solid 3px var(--demin-blue);
  background-color: var(--midnight-blue);
`
const percentProgressCircle = styled.div`
  width: 2.598rem;
  height: 3rem;
  border-radius:50%;
  border: 3px solid var(--demin-blue);
  backgroudn-color: transparent;
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
    z-index: 10;
    border-radius: 0 0 0 1rem;
    background-color: var(--midnight-blue);
`
const ChervonDown = styled.img.attrs((props) => ({ src: props.src}))`
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
  stroke: var(--demin-blue);
  stroke-width: ${countdownStrokeWidth};

`
const CountdownProgressCircle = styled.circle.attrs((props) => ({ id: props.id, cx: props.cx, cy: props.cy, r: props.r}))`
  fill: none;
  stroke: var(--sky-blue);
  stroke-width: ${countdownStrokeWidth};
  visibility:hidden;
`
const CountdownSmallProgressCircle = styled.circle.attrs((props) => ({ id: props.id, cx: props.cx, cy: props.cy, r: props.r, className: props.className}))`

  stroke: var(--demin-blue);
  fill: var(--midnight-blue);
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
  border: 2px solid  var(--demin-blue);
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

const PercentProgressIndicator = ({percent})  => {

    animateProgressBar()
    return (
       <ProgressIndicatorHolder>
            <div style={{position: 'absolute',left: "27%", top: "30%"}}>
              <PercentProgress>{percent}</PercentProgress>
              </div>
            <div style={{position: 'absolute',left: "40%", top: "75%"}}>
              <ChervonDown src={chrevonSvg} />
            </div>
            <div style={{position: 'absolute',left: "10%", top: "5%"}}>    
                {/* <ParentCircle> */}

                  <SvgImage xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
                      <CountdownBackgroundCircle id="countdownBckgrdCircle" cx="17" cy="17" r="15.5" />
                      <CountdownProgressCircle id="countdownProgCircle" cx="17" cy="17" r="15.5" className="js-countdown__progress"/>
                      <CountdownSmallProgressCircle id="smallProgressCircle"  cx="32" cy="17" r="3" className="js-countdown__small-circle_progress"/>
                  </SvgImage>
                 
                  <CountdownProgressLabelContainer id="countdown-progress-label-container">
                      <CountdownProgressLabel id="countdown-progress-label" />
                  </CountdownProgressLabelContainer>

                {/* </ParentCircle> */}
            </div>
        </ProgressIndicatorHolder>
    
    )
}

export default PercentProgressIndicator




