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
import { processInternalLink, processHtml, removeParagraphsTags } from '../utils/displayUtils'

const SliderPanel = styled.div`
  padding:1rem;
  width: 18.813rem;
  height: 14.875rem;
  border-radius: 1rem 1rem 1rem 0rem;
  box-shadow: 0 8px 12px 0 rgba(35, 42, 54, 0.2);
  background-color: white;
  cursor: pointer;
`

const SliderPanelHeaderText = styled.div`
  
  height: 2.188rem;
  font-family: ${theme.typography.fontFamily};
  font-size: 1.563rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.25px;
  text-align: left;
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
  font-size: 0.938rem;
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
    background-color: transparent;
`

const ChervonRight = styled.img.attrs((props) => ({style:props.style, onClick:props.onClick, src: props.src}))`
    width: 1rem;
    height: 1rem;
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
    return (<div className={classNam} onClick={onClick} style={{width:'30px',height:'30px'}}>{state.selected === panels.PANEL1 ? <SliderBlueTabDot id="dot1" /> : <SliderBlueTabOutlineDot />}</div>)
}
const ButtonTwo= ({classNam = '', onClick, state}) => {
    return (<div className={classNam} onClick={onClick} style={{width:'30px',height:'30px'}}>{state.selected === panels.PANEL2 ? <SliderBlueTabDot id="dot2" /> : <SliderBlueTabOutlineDot />}</div>)
}
const ButtonThree = ({classNam = '', onClick, state}) => {
    return (<div className={classNam} onClick={onClick} style={{width:'30px',height:'30px'}}>{state.selected === panels.PANEL3 ? <SliderBlueTabDot id="dot3" /> : <SliderBlueTabOutlineDot />}</div>)
}
const ButtonFour = ({classNam = '', onClick, state}) => {
  return (<div className={classNam} onClick={onClick} style={{width:'30px',height:'30px'}}>{state.selected === panels.PANEL4 ? <SliderBlueTabDot id="dot4" /> : <SliderBlueTabOutlineDot />}</div>)
}
const ButtonFive = ({classNam = '', onClick, state}) => {
  return (<div className={classNam} onClick={onClick} style={{width:'30px',height:'30px'}}>{state.selected === panels.PANEL5 ? <SliderBlueTabDot id="dot5" /> : <SliderBlueTabOutlineDot />}</div>)
}
const ButtonSix = ({classNam = '', onClick, state}) => {
  return (<div className={classNam} onClick={onClick} style={{width:'30px',height:'30px'}}>{state.selected === panels.PANEL6 ? <SliderBlueTabDot id="dot6" /> : <SliderBlueTabOutlineDot />}</div>)
}

const ButtonGroup = ({ next, previous, goToSlide, state,setState, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;

    // remember to give it position:absolute
    return (
      <div className="carousel-button-group" style={{display: 'flex',flexDirection:'row',width:'1057px',justifyContent:'center'}}> 
        <ButtonOne state={state} setState={setState} className={currentSlide === 0 ? 'disable' : ''} onClick={() => {
          document.getElementById("dot1").style.backgroundColor = theme.palette.midnightBlue.main;
          return previous()
        }
        } />
        <ButtonTwo state={state} setState={setState} onClick={() => { document.getElementById("dot2").style.backgroundColor = theme.palette.midnightBlue.main; return next()}} />
        <ButtonThree state={state} setState={setState} onClick={() => { document.getElementById("dot3").style.backgroundColor = theme.palette.midnightBlue.main; return next()}} />
        <ButtonFour state={state} setState={setState} onClick={() => { document.getElementById("dot4").style.backgroundColor = theme.palette.midnightBlue.main; return next()}} />
        <ButtonFive state={state} setState={setState} onClick={() => { document.getElementById("dot5").style.backgroundColor = theme.palette.midnightBlue.main; return next()}} />
        <ButtonSix state={state} setState={setState} onClick={() => { document.getElementById("dot6").style.backgroundColor = theme.palette.midnightBlue.main; return goToSlide(currentSlide + 1)}} /> 
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



const CaroGallery = ({state, setState, resources}) => {

  console.log(state)

 
  //return (<p></p>)
    const deviceType = getDeviceType() ? getDeviceType() : 'desktop'

    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const panelRef1 = useRef()
const panelRef2 = useRef()
const panelRef3 = useRef()
const panelRef4 = useRef()
const panelRef5 = useRef()
const panelRef6 = useRef()

console.log("state.sle " , state.selected)

function handleOptionSelection(event) {
  //event.preventDefault()
  //event.stopPropagation()

  const id = 1 * (event.currentTarget.className).replace("panelRef",'')
  console.log("id",id)
  //const pan = document.getElementsByClassName("panelRef" + id)

}

const PanelItem = ({isSelected,panelNum,headerText,bodyText,handleOptionSelection})  => {
  return (
    // <AniLink to='/xray/' style={{textDecoration:'none'}}>
    <div className={"panelRef" + panelNum} onClick={handleOptionSelection} style={{width:"300px",height:"270px"}}>
        <SliderPanel style={{display:(isSelected ? 'block':'none'), backgroundColor: theme.palette.midnightBlue.main }}>
            <SliderPanelHeaderText style={{ color: theme.palette.peachCobbler.main  }}>
              {processHtml((headerText ? headerText : 'no data bodytext'))}
            </SliderPanelHeaderText>
            <SliderPanelBodyText style={{ color: 'white'  }} 
            dangerouslySetInnerHTML={{__html: removeParagraphsTags((bodyText ? bodyText : 'no data bodytext'))}}>
            </SliderPanelBodyText>
      </SliderPanel>

      <SliderPanel style={{ display:(isSelected ? 'none':'block'), backgroundColor:  'white'}}>
            <SliderPanelHeaderText style={{ color: theme.palette.deminBlue.main }}>
              {processHtml((headerText ? headerText : 'no data bodytext'))}
            </SliderPanelHeaderText>
            <SliderPanelBodyText style={{ color: theme.palette.midnightBlue.main }} 
            dangerouslySetInnerHTML={{__html: removeParagraphsTags((bodyText ? bodyText : 'no data bodytext'))}}>
            </SliderPanelBodyText>
      </SliderPanel>
      
</div>
// </AniLink>
  )
}

return (<Carousel
    arrows={true} 
    showDots={false} 
    renderButtonGroupOutside={true} 
    customButtonGroup={<ButtonGroup state={state} setState={setState} />}
    swipeable={false}
    draggable={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={deviceType !== "mobile" ? false : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    style={{"height":"362px","width":"1057px"}}
>

<PanelItem  isSelected={state.selected === panels.PANEL1} state={state}  handleOptionSelection={handleOptionSelection} panelNum={panels.PANEL1} 
  headerText={(resources.field_optionsheader1 && resources.field_optionsheader1.processed ? resources.field_optionsheader1.processed : resources.field_optionsheader1)} 
  bodyText={(resources.field_optionsbodytext1.processed ? resources.field_optionsbodytext1.processed : resources.field_optionsbodytext1)} />

<PanelItem  isSelected={state.selected === panels.PANEL2} state={state}  handleOptionSelection={handleOptionSelection} panelNum={panels.PANEL2} 
  headerText={(resources.field_optionsheader2 && resources.field_optionsheader2.processed ? resources.field_optionsheader2.processed : resources.field_optionsheader2)} 
  bodyText={(resources.field_optionsbodytext2.processed ? resources.field_optionsbodytext2.processed : resources.field_optionsbodytext2)} />

<PanelItem  isSelected={state.selected === panels.PANEL3} state={state}  handleOptionSelection={handleOptionSelection} panelNum={panels.PANEL3} 
  headerText={(resources.field_optionsheader3 && resources.field_optionsheader3.processed ? resources.field_optionsheader3.processed : resources.field_optionsheader3)} 
  bodyText={(resources.field_optionsbodytext3.processed ? resources.field_optionsbodytext3.processed : resources.field_optionsbodytext3)} />

<PanelItem  isSelected={state.selected === panels.PANEL4} state={state}  handleOptionSelection={handleOptionSelection} panelNum={panels.PANEL4} 
  headerText={(resources.field_optionsheader4 && resources.field_optionsheader4.processed ? resources.field_optionsheader4.processed : resources.field_optionsheader4)} 
  bodyText={(resources.field_optionsbodytext4.processed ? resources.field_optionsbodytext4.processed : resources.field_optionsbodytext4)} />

<PanelItem  isSelected={state.selected === panels.PANEL5} state={state}  handleOptionSelection={handleOptionSelection} panelNum={panels.PANEL5} 
  headerText={(resources.field_optionsheader5 && resources.field_optionsheader5.processed ? resources.field_optionsheader5.processed : resources.field_optionsheader5)} 
  bodyText={(resources.field_optionsbodytext5.processed ? resources.field_optionsbodytext5.processed : resources.field_optionsbodytext5)} />

<PanelItem  isSelected={state.selected === panels.PANEL6} state={state}  handleOptionSelection={handleOptionSelection} panelNum={panels.PANEL6} 
  headerText={(resources.field_optionsheader6 && resources.field_optionsheader6.processed ? resources.field_optionsheader6.processed : resources.field_optionsheader6)} 
  bodyText={(resources.field_optionsbodytext6.processed ? resources.field_optionsbodytext6.processed : resources.field_optionsbodytext6)} />

</Carousel>)
}

export default CaroGallery