import React from "react"
import CustomFluidImage from '../components/CustomFluidImage';

const InCorrectTick = ()  => {
    return (
    
        <div style={{position: 'absolute', 
        top: 30, 
        right: 30, 
        zIndex: 100, 
        width: '50px', 
        height: '50px', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        verticalAlign: 'middle',
        border:'1px solid red'}}>
            <CustomFluidImage imgName="incorrect.png" />
        </div>
    
    )
}

export default InCorrectTick




