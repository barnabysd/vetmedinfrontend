import React from "react"
import CustomFluidImage from '../components/CustomFluidImage';
import tw from "tailwind.macro"
import styled from "@emotion/styled"

const PercentProgress = styled.div`
  ${tw`bg-white
  rounded-lg
  overflow-hidden
  border`}
  height: 409px;
  img {
    height: 265px;
    object-fit: cover;
    object-position: center;
  }
`
const ProgressIndicatorHolder = styled.div`
    position: absolute, 
    border: 1px solid red,
    right: 0,
    width:80px,
    height: 100px,
    overflow: hidden,
    display: flex,
    flexDirection: column,
    alignContent: center,
    textAlign: center,
    zIndex: 10
`

const PercentProgressIndicator = ({percent})  => {
    return (
       <ProgressIndicatorHolder>
            <PercentProgress>{percent}</PercentProgress>
            <CustomFluidImage imgName="percentProgress.png" />
            {/* <div style={{
                fontSize:'1rem',
                fontFamily: 'Oswald',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                textAlign: 'center'}}>
                    {percent}
                </div> */}
        </ProgressIndicatorHolder>
    
    )
}

export default PercentProgressIndicator




