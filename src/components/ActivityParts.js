import React, { useRef, useEffect, createRef } from "react"
import styled from "styled-components"
import CustomFluidImage from "../components/CustomFluidImage"
import theme, { sm, md, lg, xl } from "../theme"
import {
    getCssDisplayState,
    processHtml
} from "../utils/displayUtils";
import { dogName, ownerName, ownerResponseSteps, cookieKeyNames } from "../WebsiteConstants"

export const BottomHeaderUltrasound = styled.div`
  
  width: 692px;
 
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 47px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -0.47px;
  text-align: center;
  color: ${theme.palette.midnightBlue.main};
  padding-top: 3.6rem;
  padding-bottom: 1.25rem;
`

export const BottomBodyUltrasound = styled.div`
   width: 692px;
  font-family: ${theme.typography.fontFamily};
  font-size: 22px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-align: center;
  color: ${theme.palette.midnightBlue.main};
`

export const BottomXrayHeader = styled.div`
  width: 46rem;
 
  font-family: ${theme.typography.fontFamily};
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

// export const xrayHolder = styled.div`
//   width: 60.938rem;
//   height: 44.125rem;
//   object-fit: contain;
// `

export const ToolTip = styled.div`
  padding:1rem;
  width: 20.437rem;

  background-color: white;
  border-radius: 1rem;
`
export const ToolTipText = styled.div`
  width: 18.938rem;
  
  font-family: ${theme.typography.fontFamily};
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.15px;
  text-align: left;
  color: ${theme.palette.egyptianBlue.main};
`

export const TapCircle = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  box-shadow: 0 0 6px 0 white;
  border: solid 2px white;
  border-radius: 50%;
`

export const HintCircle = styled.div`
  width: 4.75rem;
  height: 4.75rem;
  box-shadow: 0 0 6px 0 ${theme.palette.warning.main};
  border: solid 2px ${theme.palette.warning.main};
  border-radius: 50%;
`

export const Triangle = styled.div`
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
export const TriangleBlue = styled(Triangle)` 
   border-bottom-color: ${theme.palette.midnightBlue.main};
 
`

export const Frame = styled.div`
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
export const FrameInner = styled.div` 
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

export const BottomRightIntroText = styled.div`
      width: 26.813rem;
      height: 14.509rem;
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
export const BottomRightIntroBodyText = styled.div`

        width: 26.813rem;
        height: 7.712rem;
        font-family: ${theme.typography.fontFamily};;
        font-size: 1.375rem;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.4;
        letter-spacing: -0.22px;
        text-align: left;
        color: ${theme.palette.midnightBlue.main};

`

export const PopupDarkBlue = styled.div`
width: 479px;
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
export const PopupLightOrangeHeaderText = styled.div`
  
  height: 3.063rem;
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 2.188rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: ${theme.palette.peachCobbler.main};
`
export const PopupWhiteBodyText = styled.div`
    font-size: 3.2rem;
    line-height: 1.16;
    text-align: center;
    letter-spacing: -0.58px;
    color: white;
    font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
    font-weight: 600;
    height: 86px;
    width: 364px;
`

export const Popup2DarkBlue = styled.div`
  width: 643px;
  height: 393px;
padding-left: 3.48rem;
padding-right: 3.48rem;
padding-top:3.1rem;
color: white;
position: absolute;
left: calc(50% - 180px);
top: calc(50% - 140px);
  border-radius: 0 2rem 2rem 2rem;
  background-color: #001d5f;
  box-shadow: 0 8px 12px 0px rgba(35, 42, 54, 0.2);
`
export const Popup2HeaderText = styled.div`
  

  font-family: ${theme.typography.fontFamily};
  
  height: 5.037rem;
  font-family: ${theme.typography.fontFamily};
  font-size: 1.813rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.29px;
  text-align: left;
  color: white;
`
export const Popup2WhiteBodyText = styled.div`
  
  font-family: ${theme.typography.fontFamily};
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: white;
  padding-bottom: 2.48rem;
`

export const TaskSummaryHeader = styled.div`
  width: 31.844rem;
  
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

export const TaskSummarySubHeader = styled.div`
  width: 31.844rem;
 
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
export const TaskSummaryTableHolder = styled.div`
  width: 31.844rem;
  background-color: white;
`
export const TaskSummaryFootnote = styled.div`
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


export const SliderTextHolder = styled.div`
    position:absolute;
    left:5%;
    bottom:-64px;
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
export const SwitchHolder = styled.div`
      position:absolute;
      right:1%;
      bottom:5%;
      @media (max-width: ${lg}px) {}
      @media (max-width: ${md}px) {}
      @media (max-width: ${sm}px) {
        bottom:6%;
      }
`

export const TooltipTopHolder = ({id,hintChecked, stageVisible,stage, textHtml, leftPos = '0', topPos = '0'}) => {
    return (<div id={id} style={{display:(hintChecked && stageVisible) ? 'block':'none', position:'absolute',left:leftPos,top:topPos,border:'0px solid red'}}>
          <ToolTip>
                <ToolTipText>{processHtml(textHtml)}</ToolTipText>
          </ToolTip>
          <div><Triangle /></div>
          <HintCircle style={{margin: 'auto'}} />
          </div>)
  }
  
export const TooltipBottomHolder = ({id,hintChecked, stageVisible,stage, textHtml, leftPos = '0', topPos = '0'}) => {
      return (<div id={id} style={{display:(hintChecked && stageVisible) ? 'block':'none', position:'absolute',left:leftPos,top:topPos,border:'0px solid red'}}>
            <HintCircle style={{margin: 'auto'}} />
            <div data-custom="bjm"><Triangle style={{transform: "rotate(360deg)"}}/></div>
            <ToolTip>
                  <ToolTipText>{processHtml(textHtml)}</ToolTipText>
            </ToolTip>
            </div>)
    }
  
  
export const TooltipLeftHolder = ({id,hintChecked, stageVisible,stage, textHtml, leftPos = '0', topPos = '0'}) => {
      return (<div id={id} style={{display:(hintChecked && stageVisible) ? 'flex':'none', position:'absolute',left:leftPos,top:topPos,border:'0px solid red',alignItems: 'center'}}>
      <ToolTip>
            <ToolTipText>{processHtml(textHtml)}</ToolTipText>
      </ToolTip>
      <div><Triangle style={{transform: "rotate(90deg)"}}/></div>
      <HintCircle style={{margin: 'auto'}} />
      </div>)
    }
  
  
export const TooltipRightHolder = ({id,hintChecked, stageVisible,stage, textHtml, leftPos = '0', topPos = '0'}) => {
      return (<div id={id} style={{display:(hintChecked && stageVisible) ? 'flex':'none', position:'absolute',left:leftPos,top:topPos,border:'0px solid red',alignItems: 'center'}}>
            
            <HintCircle style={{margin: 'auto'}} />
            <div><Triangle style={{transform: "rotate(270deg)"}}/></div>
            <ToolTip>
                  <ToolTipText>{processHtml(textHtml)}</ToolTipText>
            </ToolTip>
         
           
            </div>)
    }