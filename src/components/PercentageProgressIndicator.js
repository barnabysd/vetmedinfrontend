import React from "react"
import CustomFluidImage from '../components/CustomFluidImage';

const PercentProgressIndicator = ({percent})  => {
    return (
        <div style={{
            position: 'absolute', 
            border: '1px solid red',
            right: '0', 
            top: '0',
            width:'80px',
            height: '100px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            textAlign: 'center',
            zIndex: 10
        
        }}>
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
        </div>
    
    )
}

export default PercentProgressIndicator




