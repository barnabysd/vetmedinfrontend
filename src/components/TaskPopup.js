
import React, {useRef, useEffect} from 'react'
import { Link } from "gatsby"
import OrangeRoundedButtonWithBLCorner from '../components/OrangeRoundedButtonWithBLCorner'
import useLocalStorage from '../utils/localStorageHelper'
import CustomFluidImage from '../components/CustomFluidImage'
import ScalingCheckBox from '../components/ScalingCheckBox'

import { withStyles,createStyles,makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useCookies } from 'react-cookie'
import { removeParagraphsTags, processHtml } from '../utils/displayUtils'

let resources = {
    popUpHeaderText:"You do not have to measure the LVIDD",
    popupBodyText:"<p></p>",
    popupButtonLinks: {
        title:"Continue",
        url:""
    }
}

let bodyText = { __html: processHtml(resources.popupBodyText) }

const classes = makeStyles({
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    }
});

export default function TaskPopUp({headerText,bodyText,buttonLink}) {

    let bodyTextNoHtml = processHtml(bodyText)

    const handleChange = (event) => {
        //setState({ ...state, [event.target.name]: event.target.checked });
        //if (event.target.name === 'checkedIsVet') {
        setState({ ...state, href: "/home-page/",checkedIsVet: true, checkedIsNotVet: false, buttonText: "Continue", opacity: "1" });
        //}
        // if (event.target.name === 'checkedIsNotVet') {
        //     setState({ ...state, href: "http://www.bbc.co.uk",checkedIsVet: false, checkedIsNotVet: true, buttonText: "Visit B.E.A.T", opacity: "1" });
        // }
    };

    const dismiss = (event) => {
       // unmountMe();
    } 

    const [userUserChoice, setUserChoice ] = useLocalStorage('userChoice', '')
    function recordUserChoice(event) {
        console.log("previous userUserChoice ",userUserChoice)
        console.log(event.target)
        if (state.checkedIsVet === true) {
            setUserChoice('vet');
            setCookie('userChoice')
            console.log("vet")
            
        } 
        if (state.checkedIsNotVet === true) {
            setUserChoice('notVet');
            setCookie('userChoice','notVet')
            console.log("notVet")
        }
    }



    const styles = createStyles({
        formControlLabel: { 
            fontSize: '1.2rem', 
            color: 'white',
            fontWeight:'700',
            fontFamily:'Poppins',
                '& label': { 
                    fontSize: '1.2rem' ,
                    color: 'white',
                    fontWeight:'700',
                    fontFamily:'Poppins'
                } 
            }
     });
     

    return (
       <div style={{position: 'absolute',width: '100%',height: '100vh', minHeight: '100vh',overflow:'hidden', backgroundColor: 'blue'}}>

            <div style={{position: 'relative',width: '100%', minHeight: '100%'}}>
                
                {/* <div style={{position: 'absolute',left:'0',top:'0', width: '20%', minHeight: '100%', backgroundColor: '#24add6'}}> 
                    
                </div> */}

                <div style={{position: 'absolute',left:'0',top:'0', width: '30%', minHeight: '100%', backgroundColor: '#092178'}}> 
                    
                </div>

                <div style={{position: 'absolute',left: '30%',top:'0', width: '70%', minHeight: '100%', backgroundColor: '#092178'}}> 
                    <div style={{position: 'absolute',left: '0%',top:'10%', width: '70%', minHeight: '100%', backgroundColor: '#092178'}}>
                        <h1 style={{color: '#41D4E9',fontWeight:'700',paddingTop:'0',fontFamily:'Poppins'}}>{headerText}</h1>

                        <p style={{color: '#41D4E9',fontWeight:'400',paddingTop:'0',fontFamily:'Poppins'}}>{bodyTextNoHtml}</p>
                       
                        <div style={{paddingLeft:'0rem',opacity: state.opacity }} onClick={recordUserChoice}>
                            <OrangeRoundedButtonWithBLCorner buttonText={resources.buttonLinks[0].title} to={resources.buttonLinks[0].url} />
                        </div>
                    </div>
                </div>

                
            </div>
      </div>
    )
}
