import React, { useRef, useEffect, createRef } from "react"
import styled from "styled-components"
import CustomFluidImage from "../components/CustomFluidImage"
import theme, { sm, md, lg, xl } from "../theme"
import {
    getCssDisplayState
} from "../utils/displayUtils";
import { dogName, ownerName, ownerResponseSteps, cookieKeyNames } from "../WebsiteConstants"

export const HeaderText = styled.div`
   padding-bottom: 2rem;
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

export const SubtitleText =  styled.div`
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  height: 1.938rem;
  font-family: ${theme.typography.fontFamily};
  font-size: 1.375rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-align: left;
  color: ${theme.palette.raven.main};
`

const DudleyOwner = () => {
    return (<CustomFluidImage imgName="owner_resp_mrs-jenkins-pose-02.png" />)
}
const PoppyOwner = () => {
    return (<CustomFluidImage imgName="owner_resp_mr-oakley-poses-01.png" />)
}
const ReggieOwner = () => {
    return (<CustomFluidImage imgName="owner_resp_mrs-richardson-pose-03.png" />)
}
const DudleyOwnerCloseup = () => {
  return (<CustomFluidImage imgName="owner_resp_mrs-jenkins-pose-02.png" />)
}
const PoppyOwnerCloseup = () => {
  return (<CustomFluidImage imgName="owner_resp_mr-oakley-poses-01.png" />)
}
const ReggieOwnerCloseup = () => {
  return (<CustomFluidImage imgName="owner_resp_mrs-richardson-pose-03.png" />)
}
export const WhiteDotButton = styled.div.attrs((props) => ({ id: props.id, style:props.style, onClick:props.onClick }))`
  width: 4.25rem;
  height: 4.25rem;
  border-radius: 50%;
  background-color: white;

`

export const PageSection = styled.div.attrs((props) => ({ id: props.id, style: props.style }))`
display:flex;
flex-direction:row;
width:100%;
margin:auto;
@media (max-width: ${md}px) {
    width: 100%;
    flex-direction:column;
    align-items:center;
}
`
export const LeftPageSection = styled.div.attrs((props) => ({ id: props.id }))`
display:flex;
width:50%;
height:100vh;
flex-direction:column;
align-items:flex-end;
justify-content:center;
@media (max-width: ${md}px) {
    width: 100%;
    align-items:center;
    height: 10%;
}
`
export const RightPageSection = styled.div.attrs((props) => ({ id: props.id }))`
display:flex;
width:50%;
height:100vh;
flex-direction:column;
align-items:flex-start;
justify-content:center;
@media (max-width: ${md}px) {
    width: 100%; 
    height: 10%;
    margin-bottom: 100px;
}
`
const OwnerImageCloseUpStyle = styled.div`
   width: 800px;
   height: 1000px;
   margin-right: 0px;
`
export const OwnerImageCloseUp = ({dogChoice, style = {} }) => {
    return (
      <>
        <OwnerImageCloseUpStyle
        style={{...style, 
          display: getCssDisplayState(dogChoice, dogName.DUDLEY),
        }}
        ><DudleyOwnerCloseup />
      </OwnerImageCloseUpStyle>
      <OwnerImageCloseUpStyle
        style={{...style, 
          display: getCssDisplayState(dogChoice, dogName.POPPY),
        }}>
        <PoppyOwnerCloseup />
      </OwnerImageCloseUpStyle>
  
      <OwnerImageCloseUpStyle
        style={{...style, 
          display: getCssDisplayState(dogChoice, dogName.POPPY),
   
        }}>
        <ReggieOwnerCloseup />
      </OwnerImageCloseUpStyle>
    </>
    )
  }

const OwnerImageStyle = styled.div`
   width: 500px;
   height: 600px;
   margin-right: 0px;
`
  
export const OwnerImage = ({dogChoice, style = {} }) => { 
    const defaultStyle = { ...style, display: getCssDisplayState(dogChoice, dogName.DUDLEY)}
    return (
      <>
        <OwnerImageStyle style={{ ...style, display: getCssDisplayState(dogChoice, dogName.DUDLEY)}}><DudleyOwner /></OwnerImageStyle>
        <OwnerImageStyle style={{ ...style, display: getCssDisplayState(dogChoice, dogName.POPPY)}}><PoppyOwner /></OwnerImageStyle>
        <OwnerImageStyle style={{ ...style, display: getCssDisplayState(dogChoice, dogName.REGGIE)}}><ReggieOwner /></OwnerImageStyle>     
      </>
    )
  }

