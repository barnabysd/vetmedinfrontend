import React, { useRef, useEffect, createRef } from "react"
import styled from "styled-components"
import CustomFluidImage from "../components/CustomFluidImage"
import FixedSizeImage from "../components/FixedSizeImage"
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
   height: 1600px;
   margin-right: -200px;
   margin-top: 600px;
`
const OwnerImageCloseUpDudley = styled(OwnerImageCloseUpStyle)`
   margin-right: -20px;
   margin-top: 300px;
`
export const OwnerImageCloseUp = ({dogChoice, style = {} }) => {
    return (
      <>
        <OwnerImageCloseUpDudley
        style={{...style, 
          display: getCssDisplayState(dogChoice, dogName.DUDLEY),
        }}
        ><DudleyOwnerCloseup />
      </OwnerImageCloseUpDudley>
      <OwnerImageCloseUpStyle
        style={{...style, 
          display: getCssDisplayState(dogChoice, dogName.POPPY),
        }}>
        <PoppyOwnerCloseup />
      </OwnerImageCloseUpStyle>
  
      <OwnerImageCloseUpStyle
        style={{...style, 
          display: getCssDisplayState(dogChoice, dogName.REGGIE),
   
        }}>
        <ReggieOwnerCloseup />
      </OwnerImageCloseUpStyle>
    </>
    )
  }

const OwnerImageStyle = styled.div`
   width: 500px;
   height: 900px;
   margin-right: 0px;
`

const OwnerImageStyleDudley = styled(OwnerImageStyle)`
   width: 500px;
   height: 600px;
   margin-right: 0px;
`
const OwnerCertSummaryImageHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end; 
 
 
   /* space-between; */
  & .block {
    position: relative;
    
    /* flex-basis: calc(20% - 200px); */
    /* outline: 1px solid; */
    
  }
`
export const OwnerImageCertSummary = ({dogChoice, style = {} }) => { 
  //const defaultStyle = { ...style, display: getCssDisplayState(dogChoice, dogName.DUDLEY)}
  return (
    <>
    <OwnerCertSummaryImageHolder style={{ ...style, display: getCssDisplayState(dogChoice, dogName.DUDLEY)}}>
         <div className="block">
              <div style={{position: 'absolute',left: '0',top: "-172px"}}>
                  <FixedSizeImage imgName="mrs_jenkins_pose_01@3x.png"  height="800px" width="800px"/>
              </div>
              <div style={{position: 'absolute',left: '20%',top: '249px'}}>
                  <FixedSizeImage imgName="dudley_standing_pose_02@3x.png" height="400px" width="400px"/>
              </div>
        </div>
    </OwnerCertSummaryImageHolder>
    <OwnerCertSummaryImageHolder style={{ ...style, display: getCssDisplayState(dogChoice, dogName.POPPY)}}>
          <div className="block">
                <div style={{position: 'absolute',left: '0',top: '-172px'}}>
                  <FixedSizeImage  imgName="mr_oakley_poses_02@3x.png" height="800px" width="800px"/>
                  </div>
                <div style={{position: 'absolute',left: '20%',top: '249px'}}>
                  <FixedSizeImage  imgName="poppy_standing_02@3x.png" height="400px" width="400px"/>
                </div>
                    
          </div>
    </OwnerCertSummaryImageHolder>
    <OwnerCertSummaryImageHolder style={{ ...style, display: getCssDisplayState(dogChoice, dogName.REGGIE)}}>
         <div className="block">
                   <div style={{position: 'absolute',left: 0,top: "-172px"}}>
                              <FixedSizeImage imgName="mrs_richardson_pose_02@3x.png" height="800px" width="800px"/>
                            </div>

                           <div style={{position: 'absolute',left: '20%',top: '249px'}}>
                             <FixedSizeImage imgName="reggie_standing_poses_02@3x.png" height="400px" width="400px"/>
                    </div>       
         </div>
    </OwnerCertSummaryImageHolder>
    </>
  )
}
 
export const OwnerImage = ({dogChoice, style = {} }) => { 
    //const defaultStyle = { ...style, display: getCssDisplayState(dogChoice, dogName.DUDLEY)}
    return (
      <>
        <OwnerImageStyleDudley style={{ ...style, display: getCssDisplayState(dogChoice, dogName.DUDLEY)}}><DudleyOwner /></OwnerImageStyleDudley>
        <OwnerImageStyle style={{ ...style, display: getCssDisplayState(dogChoice, dogName.POPPY)}}><PoppyOwner /></OwnerImageStyle>
        <OwnerImageStyle style={{ ...style, display: getCssDisplayState(dogChoice, dogName.REGGIE)}}><ReggieOwner /></OwnerImageStyle>     
      </>
    )
  }

export  const BottomCenterTaskText = styled.div`
width: 692px;
  height: 61.8px;
  font-family:${theme.typography.fontFamily};
  font-size: 22px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-align: center;
  color: ${theme.palette.midnightBlue.main};
    @media (max-width: ${md}px) {
        width: 100%;
   
    }
    @media (max-width: ${sm}px) {
        width: 100%;
    }

`

