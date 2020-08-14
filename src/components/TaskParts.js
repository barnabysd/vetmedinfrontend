import React, { useRef, useEffect, createRef } from "react"
import styled from "styled-components"
import theme, { sm, md, lg, xl } from "../theme"

// export const LightBlueSmallDot = styled.div`
//     margin-top:5px;  
//     height: 16px;
//     width: 16px;
//     border-radius: 50%;
//     background-color: ${theme.palette.skyBlue.main};
// `

export const BlueDot = styled.div`
    position: relative;
    height: 32px;
    width: 32px;
    min-height: 32px;
    min-width: 32px;
    border-radius: 50%;
    
    background-color: ${theme.palette.skyBlue.main};
`

export const DarkBlueBigDot = styled.div`
    position: relative;
    font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
    height: 65px;
    width: 65px;
    min-width:65px;
    min-height:65px;
    border-radius: 50%;
    background-color: ${theme.palette.midnightBlue.main};
    box-shadow: 0 4px 8px 0px rgba(35, 42, 54, 0.2);
  
`
/* not shown but contain animation of number */
export const WhiteSmallDot = styled.div`
    font-family: ${theme.typography.fontFamily};
    position:relative;
    width: 1.5rem;
    height: 1.5rem;
    min-width: 1.5rem;
    min-height: 1.5rem;
    border-radius: 50%;
    /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); */
    background-color: transparent;
    color: black;
    font-size: 0.7rem;
    & div {
      color: black;
      font-weight: 600;
      font-size: 0.7rem;
    }
`
export const SkyBlueEndDot = styled.div`
    position: relative;
    color:  ${theme.palette.midnightBlue.main};
    height: 30px;
    width: 30px;
    min-height: 30px;
    min-width: 30px;
    border-radius: 50%;
    background-color: ${theme.palette.skyBlue.main};
    box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.1607843137254902);
`
export const OrangeEndDot = styled.div`
    position: relative;
    color:  ${theme.palette.midnightBlue.main};
    height: 30px;
    width: 30px;
    min-height: 30px;
    min-width: 30px;
    border-radius: 50%;
    background-color: ${theme.palette.peachCobbler.main};
    box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.1607843137254902);
`

export const OrangeSmallDot = styled.div`
    margin-top:5px;
    height: 16px;
    width: 16px;
    min-height: 16px;
    min-width: 16px;
    border-radius: 50%;
    background-color: ${theme.palette.peachCobbler.main};
`

export const LightBlueSmallDot = styled.div`
    margin-top:5px;  
    height: 16px;
    width: 16px;
    min-height: 16px;
    min-width: 16px;
    border-radius: 50%;
    background-color: ${theme.palette.skyBlue.main};
`
