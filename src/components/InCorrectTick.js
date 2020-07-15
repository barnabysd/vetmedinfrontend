import React from "react"
import CustomFluidImage from '../components/CustomFluidImage'
import { styled } from "@material-ui/core"
import theme, { sm, md, lg, xl } from '../theme'
import { dogName } from '../WebsiteConstants'
import crossSvg from '../images/icons_and_glyphs/cross_white.svg'

const Cross = (() => {
    return <img src={crossSvg} style={{
        width: "66px",
        height: "66px",
        position: "absolute",
        left: "0px",
        top: "-7px"  
    }}/>
})

const InCorrectTick = ()  => {
    
    const bckgrd = 'linear-gradient(to bottom, ' + theme.palette.error.main + ', #b01533)'
    return (
        <div style={{
        position:'relative',
        width: '50px', 
        height: '50px',
        minWidth: '50px',
        borderRadius: "50%",
        backgroundImage: bckgrd
        
        }}>
            {/* <CustomFluidImage imgName="correct.png" /> */}
            <Cross />
        </div>
    
    )
}

export default InCorrectTick




