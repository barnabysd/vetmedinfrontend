import React,{useRef, useEffect} from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CustomFluidImage from './CustomFluidImage'
import { req, UAParser } from 'ua-parser-js'
import { style } from 'glamor'
import styled from 'styled-components'
import theme, { sm, md, lg, xl } from '../theme'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import chrevonSvg from '../images/icons_and_glyphs/chervon_down_white_path_20237.svg'
import { processInternalLink, stripUneededHtml, removeParagraphsTags } from '../utils/displayUtils'
import { isJSDocNullableType } from 'typescript'
import { gradeMurmurSteps } from '../WebsiteConstants'

import { TweenMax, TimelineMax, Linear} from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

gsap.registerPlugin(DrawSVGPlugin);
// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)
// import DrawSVGPlugin from '../vendor/gsap-plugins/DrawSVGPlugin'


const SliderPanel = styled.div`
  padding:1rem;
  width: 252px;
  height: 301px;
  border-radius: 1rem 1rem 1rem 0rem;
  box-shadow: 0 8px 12px 0 rgba(35, 42, 54, 0.2);
  background-color: white;
  cursor: pointer;
  &[data-active=true] {
    background-color: ${theme.palette.midnightBlue.main} !important;
    
    
  }
  &[data-active=true] div {
    color: white !important;
    
  }
  &[data-active=true] h5 {
    color: ${theme.palette.peachCobbler.main} !important;
  }
`

const SliderPanelHeaderText = styled.h5`
  
  height: 2.188rem;
  font-family: ${theme.typography.fontFamily};
  font-size: 1.563rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.25px;
  text-align: left;
  margin-bottom: 0rem !important;
  color: ${theme.palette.deminBlue.main};
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

`
const SliderBlueTabDot = styled.div.attrs((props) => ({id:props.id}))`
  width: 0.75rem;
  height: 0.75rem;
  border: solid 2px ${theme.palette.egyptianBlue.main};
  background-color: ${theme.palette.egyptianBlue.main};
  border-radius: 50%;
`

const SliderBlueTabOutlineDot = styled.div.attrs((props) => ({id:props.id}))`
  width: 0.75rem;
  height: 0.75rem;
  background: transparent;
  border: solid 2px ${theme.palette.egyptianBlue.main};
  border-radius: 50%;
`

const SliderPanelBodyText = styled.div`

  font-family: ${theme.typography.fontFamily};
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`

const LeftDot = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${theme.palette.topazBlue.main};
`

const RightDot = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${theme.palette.topazBlue.main};
`

const ChervonLeft = styled.img.attrs((props) => ({style:props.style, onClick:props.onClick, src: props.src}))`
    width: 1rem;
    height: 1rem;
    transform: rotate(270deg);
    background-color: transparent;
`

const ChervonRight = styled.img.attrs((props) => ({style:props.style, onClick:props.onClick, src: props.src}))`
    width: 1rem;
    height: 1rem;
    transform: rotate(90deg);
    background-color: transparent;
`

function getDeviceType() {
   let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = 'desktop';//navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
}

const ButtonOne = ({classNam = '', onClick, state}) => {
    return (<div className={classNam} onClick={onClick} style={{width:'30px',height:'30px'}}><SliderBlueTabOutlineDot id="dot1" /></div>)
}
const ButtonTwo= ({classNam = '', onClick, state}) => {
    return (<div className={classNam} onClick={onClick} style={{width:'30px',height:'30px'}}><SliderBlueTabOutlineDot  id="dot2" /></div>)
}
const ButtonThree = ({classNam = '', onClick, state}) => {
    return (<div className={classNam} onClick={onClick} style={{width:'30px',height:'30px'}}> <SliderBlueTabOutlineDot  id="dot3" /></div>)
}
const ButtonFour = ({classNam = '', onClick, state}) => {
  return (<div className={classNam} onClick={onClick} style={{width:'30px',height:'30px'}}><SliderBlueTabOutlineDot  id="dot4" /></div>)
}
const ButtonFive = ({classNam = '', onClick, state}) => {
  return (<div className={classNam} onClick={onClick} style={{width:'30px',height:'30px'}}><SliderBlueTabOutlineDot  id="dot5" /></div>)
}
const ButtonSix = ({classNam = '', onClick, state}) => {
  return (<div className={classNam} onClick={onClick} style={{width:'30px',height:'30px'}}><SliderBlueTabOutlineDot  id="dot6" /></div>)
}

const panelStates = (id) => {
  for (let i = 1; i < 7; i++) {
      if (id === i) {
        document.getElementById("dot" + i).style.backgroundColor = theme.palette.midnightBlue.main
        const panelsAr = document.getElementsByClassName("panelRef" + i)
        for(let i = 0; i < panelsAr.length; i++) {
          panelsAr[i].style.opacity = 1
        }
      } else {
        document.getElementById("dot" + i).style.backgroundColor = 'transparent'
        const panelsAr = document.getElementsByClassName("panelRef" + i)
        for(let i = 0; i < panelsAr.length; i++) {
          panelsAr[i].style.opacity = "0.5"
        }
      }
  } 
}

const ButtonGroup = ({ next, previous, goToSlide, state=null,setState=null, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    // remember to give it position:absolute
    return (
      <div className="carousel-button-group" style={{display: 'flex',flexDirection:'row',width:'1057px',justifyContent:'center'}}> 
        {/* <ButtonOne state={state} setState={setState} className={currentSlide === 0 ? 'disable' : ''} onClick={() => {
          panelStates(1)
          return previous()
        }
        } />
        <ButtonTwo state={state} setState={setState} onClick={() => { panelStates(2); return next()}} />
        <ButtonSix state={state} setState={setState} onClick={() => { panelStates(6); return goToSlide(currentSlide + 1)}} />  */}

        <ButtonOne state={state} setState={setState} onClick={() => { panelStates(1); return goToSlide(5)}} />
        <ButtonTwo state={state} setState={setState} onClick={() => { panelStates(2); return goToSlide(0)}} />
        <ButtonThree state={state} setState={setState} onClick={() => { panelStates(3); return goToSlide(1)}} />
        <ButtonFour state={state} setState={setState} onClick={() => { panelStates(4); return goToSlide(2)}} />
        <ButtonFive state={state} setState={setState} onClick={() => { panelStates(5); return goToSlide(3)}} />
        <ButtonSix state={state} setState={setState} onClick={() => { panelStates(6); return goToSlide(4) }} /> 
      </div>
    );
  };

export const panels = {
  NOSELECTION: 0,
  PANEL1: 1,
  PANEL2: 2,
  PANEL3: 3,
  PANEL4: 4,
  PANEL5: 5,
  PANEL6: 6,
}

const LeftCustomArrowSlider = styled.button`
    background-color: #0d7fbc !important;
    position: absolute;
    outline: 0;
    left:2%;
    transition: all .5s;
    border-radius: 35px;
    z-index: 1000;
    border: 0;
    background: rgba(0,0,0,0.5);
    min-width: 43px;
    min-height: 43px;
    opacity: 1;
    cursor: pointer;
    &::before {
        font-size: 35px;
        color: #fff;
        display: block;
        font-family: ${theme.typography.fontFamily};
        text-align: center;
        z-index: 2;
        position: relative;
        content: "<";
    }
`

const RightCustomArrowSlider = styled.button`
    background-color: #0d7fbc !important;
    position: absolute;
    outline: 0;
    right:2%;
    transition: all .5s;
    border-radius: 35px;
    z-index: 1000;
    border: 0;
    background: rgba(0,0,0,0.5);
    min-width: 43px;
    min-height: 43px;
    opacity: 1;
    cursor: pointer;
    &::before {
        font-size: 35px;
        /* width: 100%;
        height: 100%;
        top: -50%;
        left: -50%; */
        color: #fff;
        display: block;
        /* font-family: revicons; */
        font-family: ${theme.typography.fontFamily};
        text-align: center;
        z-index: 2;
        z-index: -1;
        position: relative;
        /* background-size: contain;
        background: url(${chrevonSvg}) 0 0 no-repeat; */
        content: ">";
        /* transform: rotate(90deg); */
    }
`
//\E824

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType } 
  } = rest
  
  // onMove means if dragging or swiping in progress.
  return <RightCustomArrowSlider onClick={() => {
    //debugger;
    let modifier = 3
    //if ((currentSlide - modifier) === 7) { modifier = -8 }
    let actualSlidePointer = [3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6]
    console.log(currentSlide)
    console.log(actualSlidePointer[currentSlide])
    panelStates(actualSlidePointer[currentSlide])
    onClick()  
  } } />
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType } 
  } = rest;
 
  // onMove means if dragging or swiping in progress.
  return <LeftCustomArrowSlider onClick={() => {
    //debugger;
    let actualSlidePointer = [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6]
    console.log(currentSlide)
    console.log(actualSlidePointer[currentSlide])
    //if ((currentSlide - modifier) < 0) {modifier = 0 }
    panelStates(actualSlidePointer[currentSlide])
    onClick()
  }
  } />
}

const finishCheckAnswer = (resources, setCurrentStep) => {
  //debugger;
  let correctAnswerPointer = -1
  if (resources.isCorrect1 && resources.isCorrect1 === "yes") { correctAnswerPointer = 1}
  if (resources.isCorrect2 && resources.isCorrect2 === "yes") { correctAnswerPointer = 2}
  if (resources.isCorrect3 && resources.isCorrect3 === "yes") { correctAnswerPointer = 3}
  if (resources.isCorrect4 && resources.isCorrect4 === "yes") { correctAnswerPointer = 4}
  if (resources.isCorrect5 && resources.isCorrect5 === "yes") { correctAnswerPointer = 5}
  if (resources.isCorrect6 && resources.isCorrect6 === "yes") { correctAnswerPointer = 6}

  if (document.getElementsByClassName("panelRef" + correctAnswerPointer)) { 
    const elem = document.getElementsByClassName("panelRef" + correctAnswerPointer)[0]
    //if (elem.getAttribute("data-active") == "true") {
      console.log("CORRECT")
      setCurrentStep(gradeMurmurSteps.CORRECT_ANSWER)
    // } else {
    //   console.log("INCORRECT")
    //   setCurrentStep(gradeMurmurSteps.INCORRECT_ANSWER)
    // }
  }  
}

const checkAnswer = (resources, setCurrentStep) => {
    console.log("WAIT")
    var foo=0;
    TweenMax.to(foo, 2, {
        onComplete:function(){
          console.log("CHECK")
          finishCheckAnswer(resources, setCurrentStep)
        }
    });     
}


const PanelItem = ({resources,setCurrentStep, isSelected,panelNum,headerText,bodyText,handleOptionSelection, panelNamesAr})  => {
  console.log("==================== RERENDER - PanelItem =======================")

  const setHighLightOff = (panelsAr) => {
      for(let i = 0; i < panelsAr.length; i++) {
        panelsAr[i].style.backgroundColor = 'white'
        panelsAr[i].style.color = theme.palette.skyBlue.main
        panelsAr[i].setAttribute("data-active","false")
        console.log("turn off " + i)
      }
  }
  const setHighLightOn = (elem) => {
      elem.style.backgroundColor = theme.palette.deminBlue.main
      elem.style.color = theme.palette.midnightBlue.main
      elem.setAttribute("data-active","true")
  }
  
  const selectOption = (e) => {
        e.preventDefault()
        e.stopPropagation()
       
        if (e.currentTarget["data-active"] === "true") {
            setHighLightOff([e.currentTarget])  
        } else {
          for (let i = 0; i < panelNamesAr.length; i++) {
            if (document.getElementsByClassName("panelRef" + i) ) { 
              setHighLightOff(document.getElementsByClassName("panelRef" + i)) 
            }
          }
          setHighLightOn(e.currentTarget) 
        }
        checkAnswer(resources, setCurrentStep)
  }

  const runOnce = true
//debugger
  return (
    
     
        <SliderPanel className={"panelRef" + panelNum}  data-active="false" onClick={selectOption} style={{opacity:(panelNum === 2 ? "1" : "0.5") }}>
            <SliderPanelHeaderText style={{ color: theme.palette.deminBlue.main  }}>
              {headerText}
            </SliderPanelHeaderText>
            <SliderPanelBodyText style={{ color: theme.palette.midnightBlue.main  }} 
            dangerouslySetInnerHTML={bodyText}>
            </SliderPanelBodyText>
        </SliderPanel>
      
    

  )
}


const CaroGallery = ({resources, panelNamesAr, setCurrentStep, state = null, setState = null}) => {
 
  const deviceType = getDeviceType() ? getDeviceType() : 'desktop'
  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
   
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    
  }
};

const panelRef1 = useRef()
const panelRef2 = useRef()
const panelRef3 = useRef()
const panelRef4 = useRef()
const panelRef5 = useRef()
const panelRef6 = useRef()


function handleOptionSelection(event) {
  const id = 1 * (event.currentTarget.className).replace("panelRef",'')
  console.log("class",id)

}

//debugger
// customRightArrow={<CustomRightArrow />}
//     customLeftArrow={<CustomLeftArrow />}
console.log("==================== RERENDER - Carousel =======================")
return (<Carousel
    arrows={true} 
    customRightArrow={<CustomRightArrow />}
    customLeftArrow={<CustomLeftArrow />}
    showDots={false} 
    renderButtonGroupOutside={true} 
    customButtonGroup={<ButtonGroup />}
    swipeable={false}
    draggable={false}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={deviceType !== "mobile" ? false : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    centerMode={true} 
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-10-px"
    style={{"height":"362px","width":"1057px"}}
>

<PanelItem panelNamesAr={panelNamesAr} setCurrentStep={setCurrentStep} resources={resources} state={state}  handleOptionSelection={handleOptionSelection} panelNum={panels.PANEL1} 
  headerText={(resources.optionsHeader1 && resources.optionsHeader1 ? resources.optionsHeader1 : resources.optionsHeader1)} 
  bodyText={(resources.optionsBodyText1 ? resources.optionsBodyText1 : resources.optionsBodyText1)} />

<PanelItem panelNamesAr={panelNamesAr}  setCurrentStep={setCurrentStep} resources={resources} state={state}  handleOptionSelection={handleOptionSelection} panelNum={panels.PANEL2} 
  headerText={(resources.optionsHeader2 && resources.optionsHeader2 ? resources.optionsHeader2 : resources.optionsHeader2)} 
  bodyText={(resources.optionsBodyText2 ? resources.optionsBodyText2 : resources.optionsBodyText2)} />

<PanelItem panelNamesAr={panelNamesAr}  setCurrentStep={setCurrentStep} resources={resources} state={state}  handleOptionSelection={handleOptionSelection} panelNum={panels.PANEL3} 
  headerText={(resources.optionsHeader3 && resources.optionsHeader3 ? resources.optionsHeader3 : resources.optionsHeader3)} 
  bodyText={(resources.optionsBodyText3 ? resources.optionsBodyText3 : resources.optionsBodyText3)} />

<PanelItem panelNamesAr={panelNamesAr}  setCurrentStep={setCurrentStep} resources={resources} state={state}  handleOptionSelection={handleOptionSelection} panelNum={panels.PANEL4} 
  headerText={(resources.optionsHeader4 && resources.optionsHeader4 ? resources.optionsHeader4 : resources.optionsHeader4)} 
  bodyText={(resources.optionsBodyText4 ? resources.optionsBodyText4 : resources.optionsBodyText4)} />

<PanelItem  panelNamesAr={panelNamesAr} setCurrentStep={setCurrentStep}  resources={resources} state={state}  handleOptionSelection={handleOptionSelection} panelNum={panels.PANEL5} 
  headerText={(resources.optionsHeader5 && resources.optionsHeader5 ? resources.optionsHeader5 : resources.optionsHeader5)} 
  bodyText={(resources.optionsBodyText5 ? resources.optionsBodyText5 : resources.optionsBodyText5)} />

<PanelItem  panelNamesAr={panelNamesAr} setCurrentStep={setCurrentStep}  resources={resources} state={state}  handleOptionSelection={handleOptionSelection} panelNum={panels.PANEL6} 
  headerText={(resources.optionsHeader6 && resources.optionsHeader6 ? resources.optionsHeader6 : resources.optionsHeader6)} 
  bodyText={(resources.optionsBodyText6 ? resources.optionsBodyText6 : resources.optionsBodyText6)} />

</Carousel>)
}

export default CaroGallery