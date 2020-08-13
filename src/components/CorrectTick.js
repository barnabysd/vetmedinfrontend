import React from "react"
import CustomFluidImage from '../components/CustomFluidImage'
import theme, { sm, md, lg, xl } from '../theme'
import tickSvg from '../images/icons_and_glyphs/tick_white_path_20240.svg'

const Tick = (() => {
    return <img src={tickSvg} style={{
        width: "28px",
        height: "32px",
        paddingBottom: "0px",
        paddingRight: "0px",
        position: "absolute",
        left: "12px",
        top: "10px"  
    }}/>
})

const CorrectTick = ()  => {
    const bckgrd = 'linear-gradient(to bottom, ' + theme.palette.success.main + ', #005042)'
    return (
        <div style={{
        position:'relative',
        minWidth: '50px',
        width: '50px', 
        height: '50px',
        borderRadius: "50%",
        backgroundImage: bckgrd
        
        }}>
            {/* <CustomFluidImage imgName="correct.png" /> */}
            <Tick />
        </div>
    
    )
}

export default CorrectTick




