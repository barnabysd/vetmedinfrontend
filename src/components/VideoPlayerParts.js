import React, {useState,useRef,forwardRef} from 'react'
import theme, { sm, md, lg, xl } from '../theme'
import styled from 'styled-components'
import crossSvg from '../images/icons_and_glyphs/cross_white.svg'
import playButtonSvg from '../images/icons_and_glyphs/GradientIcon_Play.svg'
import pauseButtonSvg from '../images/icons_and_glyphs/GradientIcon_Pause.svg'

export const Cross = (() => {
  return <img src={crossSvg} style={{
      width: "66px",
      height: "66px",
      paddingBottom: "0px",
      paddingRight: "-8px",
      position: "absolute",
      left: "12px",
      top: "10px"  
  }}/>
})

export const SmallPlayArrow = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-image: linear-gradient(to bottom, ${theme.palette.skyBlue.main}, ${theme.palette.topazBlue.main} 37%, ${theme.palette.midnightBlue.main});
`

export const VideoWhiteDotButtonBackground = styled.div.attrs((props) => ({ id: props.id, style:props.style, onClick:props.onClick }))`

    border-radius: 50%;
    background-color: white;
    position:absolute;
    width:100px;
    height:100px;
    left:50%;
    top:50%;
    margin-left:-50px;
    margin-top:-50px;

`

export const SmallTriangleRight = styled.div`
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

export const PlayResponsive = styled.img.attrs((props) => ({ id: props.id, src:props.src, style:props.style, onClick:props.onClick }))`
    position: absolute;
    left:31%;
    top:28%;
    width:45px;
    height:45px;
`

export const PauseResponsive = styled.img.attrs((props) => ({ id: props.id, src:props.src, style:props.style, onClick:props.onClick }))`
    position: absolute;
    left:28%;
    top:28%;
    width:45px;
    height:45px;
`

