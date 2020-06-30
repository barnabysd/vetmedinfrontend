import React, { useRef, useEffect, createRef } from "react"
import styled from "styled-components"
import CustomFluidImage from "../components/CustomFluidImage"
import theme, { sm, md, lg, xl } from "../theme"
import {
    getCssDisplayState
} from "../utils/displayUtils";
import { dogName, ownerName, ownerResponseSteps, cookieKeyNames } from "../WebsiteConstants"

const DudleyOwner = () => {
    return (<CustomFluidImage imgName="owner_resp_mrs-jenkins-pose-02.png" />)
}
const PoppyOwner = () => {
    return (<CustomFluidImage imgName="owner_resp_mr-oakley-poses-01.png" />)
}
const ReggieOwner = () => {
    return (<CustomFluidImage imgName="owner_resp_mrs-richardson-pose-03.png" />)
}

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
export  const OwnerImageCloseUp = ({dogChoice}) => {
    return (
      <div>
        <div
        style={{
          display: getCssDisplayState(dogChoice, dogName.DUDLEY),
          width: "1000px",
          height: "1000px",
          marginRight: "-250px"
        }}
        ><DudleyOwner />
      </div>
  
      <div
        style={{
          display: getCssDisplayState(dogName, dogName.POPPY),
          width: "1000px",
          height: "1000px",
          marginRight: "-250px"
        }}>
        <PoppyOwner />
      </div>
  
      <div
        style={{
          display: getCssDisplayState(dogName, dogName.POPPY),
          width: "1000px",
          height: "1000px",
          marginRight: "-250px"
        }}>
        <ReggieOwner />
      </div>
    </div>
    )
  }
  
export  const OwnerImage = ({dogChoice}) => {
    return (
    <div>
        <div
            style={{
                    display: getCssDisplayState(dogChoice, dogName.DUDLEY),
                    width: "1000px",
                    height: "1000px",
                    marginRight: "-250px",
  
                  }}
                  ><DudleyOwner />
                </div>
                
                <div
                  style={{
                    display: getCssDisplayState(dogName, dogName.POPPY),
                    width: "1000px",
                    height: "1000px",
                    marginRight: "-250px",
                  }}>
                  <PoppyOwner />
                </div>
  
                <div
                  style={{
                    display: getCssDisplayState(dogName, dogName.POPPY),
                    width: "1000px",
                    height: "1000px",
                    marginRight: "-250px",
                  }}>
                  <ReggieOwner />
           </div>
      </div>
    )
  }

  