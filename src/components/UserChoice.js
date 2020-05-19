
import React from 'react'
import { Link } from "gatsby"
import OrangeRoundedButtonWithBLCorner from '../components/OrangeRoundedButtonWithBLCorner'
import useLocalStorage from '../utils/localStorageHelper'
import CustomFluidImage from '../components/CustomFluidImage'
import ScalingCheckBox from '../components/ScalingCheckBox'

export default function UserChoice() {
    
    const [score, setScore ] = useLocalStorage(undefined, 0)

    const recordUserChoice = (e) => {
        setScore(4);
    }

    return (
       <div style={{position: 'fixed',width: '100%', minHeight: '100%', backgroundColor: 'blue'}}>
            <div style={{position: 'relative',width: '100%', minHeight: '100%'}}>
                <div style={{width: '20%', minHeight: '100%', backgroundColor: '#24add6'}}> 
                    <div style={{position: 'absolute',right: '0',top: '0', width: '200px', height: '200px'}}>
                        <CustomFluidImage imgName="userChoiceLogoWithTrans.png" />
                    </div>
                 </div>
                <div style={{width: '80%', minHeight: '100%', margin: 'auto', backgroundColor: '#092178'}}> 
                    <div>
                        <h1>Please confirm who you are:</h1>
                        <ul>
                            <li> <ScalingCheckBox /> <span>I'm a UK Vet</span></li>
                            <li> <ScalingCheckBox /> <span>I am an owner, or non-vet professional</span></li>
                        </ul>
                    </div>
                    <div onClick={{recordUserChoice}}>
                        <OrangeRoundedButtonWithBLCorner buttonText="Continue" />
                    </div>
                </div>
               
                <div style={{position: 'absolute',left: '20%',bottom: '0', width: '100%', height: '150px', backgroundColor: '#00FF00'}}>
                    <div style={{position: 'absolute',left: '0',bottom: '0', width: '50%', height: '150px'}}><CustomFluidImage imgName="userChoiceLogoBottom.png" /></div>
                    <div style={{position: 'absolute',right: '0',bottom: '0', width: '50%', height: '150px'}}><span>UI-CAN-0047-2020. Date of preparation: April 2020</span></div>
                </div>
            </div>
      </div>
    )
}
