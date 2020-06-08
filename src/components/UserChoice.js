
import React, {useRef, useEffect} from 'react'
import { Link } from "gatsby"
import OrangeRoundedButtonWithBLCorner from '../components/OrangeRoundedButtonWithBLCorner'
import useLocalStorage from '../utils/localStorageHelper'
import CustomFluidImage from '../components/CustomFluidImage'
import ScalingCheckBox from '../components/ScalingCheckBox'

import { withStyles,createStyles,makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
// import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
// import CheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank'

import Icon from '@material-ui/core/Icon';

import Typography from '@material-ui/core/Typography';

import GSAP from 'react-gsap-enhancer'

import { useCookies } from 'react-cookie'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import mainLogoSvg from '../images/userChoicePage/master_logo_light.svg'
import tickSvg from '../images/icons_and_glyphs/tick_orange_path_20240.svg'
import vetmedinLogoSvg from '../images/userChoicePage/vetmedin_logo_2.svg'
import bRLogoSvg from '../images/userChoicePage/boehringer_ingelheim_logo_2.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"

// import MainLogo from '../svgReactLoader/userChoicePage/master_logo_dark.svg'
// import VetmedinLogo from '../svgReactLoader/userChoicePage/vetmedin_logo_2.svg'
// import BRLogo from '../svgReactLoader/userChoicePage/boehringer_ingelheim_logo.svg'
// import TickBoxOn from '../svgReactLoader/icons_and_glyphs/tick_orange_path_20240.svg'
import theme from '../theme'

const MainLogo = (() => {
    return <img src={mainLogoSvg} style={{width: '225px'}} />
})
const TickBoxOn = (() => {
    return <img src={tickSvg} style={{ width: '20px', height: '20px',paddingBottom: '0px',paddingRight: '0px' }}/>
})
const VetmedinLogo = (() => {
    return <img src={vetmedinLogoSvg} style={{ width: '100%', height: '30px', minHeight:'30px',paddingBottom: '0px',paddingRight: '0px' }}/>
})
const BRLogo = (() => {
    return <img src={bRLogoSvg} style={{ width: '100%', height: '30px',minHeight:'30px',paddingBottom: '0px',paddingRight: '0px' }}/>
})



const PleaseConfirmWhoYouAre = styled.h1`
    font-size: 2.1333rem;
    line-height: 1.5;
    text-align: left;
    letter-spacing: -0.32px;
    color: ${theme.palette.skyBlue.main};
    font-family: ${theme.typography.fontFamily};
    font-weight: 600;

`; 


const IAmAPetOwnerOrSomeoneOtherThanAVet = styled.div`
    font-size: 1.6rem;
    line-height: 1.46;
    text-align: left;
    letter-spacing: -0.48px;
    color: ${theme.palette.white.main};
    font-family: ${theme.typography.fontFamily};
    font-weight: 600;

`; 

const IAmARegisteredVet = styled.div`
    font-size: 1.6rem;
    line-height: 1.46;
    text-align: left;
    letter-spacing: -0.48px;
    color: ${theme.palette.white.main};
    font-family: ${theme.typography.fontFamily};
    font-weight: 600;

`; 

const TickBoxBackgroundStyledComp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #001d5f;
    border-radius: 4px;
    border: 1px solid rgb(0, 29, 95);
`; 

const TickStyledComp = styled.div`
    height: 11.63px;
    width: 16px;
    background-color: ${theme.palette.peachCobbler.main};
`; 

const UICAN00472020DateofpreparationApril2020 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    width: 400px;
    height: 50px;
    font-family: ${theme.typography.fontFamily};
    font-size: 0.813rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    
    color: #5279B0;
    vertical-align: middle;
    padding-left: 2rem;
    padding-top: 1rem;
  
`

// const UICAN00472020DateofpreparationApril2020 = styled.div`
//     position: absolute;
//     left: 60%;
//     top: 25%;
//     width: 50%;
//     height: 50px;
//     font-family: ${theme.typography.fontFamily};
//     font-size: 0.813rem;
//     font-weight: normal;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: 1.4;
//     letter-spacing: normal;
    
//     color: #5279B0;
//     verticalAlign: middle;
//     paddingLeft: 2rem;
//     paddingTop: 1rem;
  
// `
const pageRef = {position: 'absolute',
    right: '0',
    bottom: '0',
    width: '50%',
    height: '50px',
    fontSize:'0.75rem',
    color:'#5279B0',
    verticalAlign:'middle',
    paddingLeft:'5%',
    paddingTop:'0.7%'
}
  
// labelStyle={{fontFamily:'Poppins',color: 'red'}}
// iconStyle={{color: 'white'}}

//'#fc9a5c'

// const styles = () => ({
//   root: {
//     "&$checked": {
//       color: "rgba(0, 0, 0, 0.54)"
//     }
//   },
//   checked: {}
// })

const classes = makeStyles({
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    }
  });


const CustomCheckBoxOffIcon = () => {
    return (
        <Icon classes={{root: classes.iconRoot}}>
            {/* <img className={classes.imageIcon} src="/tickBoxDarkBlueOff.png"/> */}
            <TickBoxBackgroundStyledComp />
        </Icon>
    )
}
const CustomCheckBoxOnIcon = () => {
    return (
        <Icon classes={{root: classes.iconRoot}}>
            
            {/* <img className={classes.imageIcon} src="/tickBoxDarkBlueOn.png"/> */}
            <TickBoxBackgroundStyledComp><TickBoxOn /></TickBoxBackgroundStyledComp>
        </Icon>
    )
}


const ScalingBlueCheckbox = withStyles({
  root: {
    color: '#24add6',
    '&$checked': {
       color: '#fc9a5c',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props}  />);

export default function UserChoice() {

    const [cookies, setCookie, getCookie, removeCookie] = useCookies(['userChoice']);

    const [state, setState] = React.useState({
        checkedIsVet: false,
        checkedIsNotVet: false,
        buttonText: "Continue",
        opacity: "0.6",
        href: "/"
    });

    const scalingCheckBox1 = useRef();
    const scalingCheckBox2 = useRef();

    const handleChange = (event) => {
        //setState({ ...state, [event.target.name]: event.target.checked });
        if (event.target.name === 'checkedIsVet') {
            setState({ ...state, href: "/home-page/",checkedIsVet: true, checkedIsNotVet: false, buttonText: "Continue", opacity: "1" });
        }
        if (event.target.name === 'checkedIsNotVet') {
            setState({ ...state, href: "http://www.bbc.co.uk",checkedIsVet: false, checkedIsNotVet: true, buttonText: "Visit B.E.A.T", opacity: "1" });
        }
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

    function createAnim({target, checkBoxName}) {
        var box = target.find({name: checkBoxName})
        return new TimelineMax({repeat: -1})
          .to(box, 1, {scale: 1.23, y: '+=120'})
          .to(box, 1, {scale: 1, y: '-=120'})
          .to(box, 1, {rotation: 90}, 1)
    }

    useEffect(() => {
        if (
          !scalingCheckBox1.current ||
          !scalingCheckBox2.current 
        ) return 
        // createAnim(scalingCheckBox1.current,'checkVet')
        // createAnim(scalingCheckBox2.current,'checkedIsNotVet')
      }, [
        scalingCheckBox1.current,
        scalingCheckBox2.current
    ])

    const border = '0px solid black'

    const mainGridStyle = { 
        border: '1px solid black',
        position: 'absolute',
        width: '100%',
        height: '100vh', 
        minHeight: '100vh',
        overflow:'hidden',
         backgroundColor: 'blue'
    
    }

    const subGridStyle = { 
        border: '1px solid #5279B0',
        
        width: '100%',
        height: '50px',
        maxHeight: '50px' ,
       
        // backgroundColor: 'orange'
    
    }

    const gridStyle = { 
        border: border
    
    }

    const gridBottomStyle = { 
        border: border,
        // backgroundColor: 'pink',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'flex-end'
    }

    const bottomBarStyle = {
        height: '50px',
        border:border
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
   
<Grid container  
    spacing={0} 
    spacing={0} 
    justify="center" 
    style={mainGridStyle}>
      <Grid item xs={12} sm={12} style={gridStyle}>
         
      </Grid>

      <Grid item xs={12} sm={1} style={gridStyle}></Grid>

      <Grid item xs={12} sm={3} style={gridStyle}>
           <MainLogo />
      </Grid>

      <Grid item xs={12} sm={7} style={gridStyle}>
      

            <PleaseConfirmWhoYouAre>Please confirm who you are:</PleaseConfirmWhoYouAre>
            <FormGroup row>
                <ul style={{listStyle: 'none',color:'#0c2f8b',justifyContent:'flex-start',padding:'0px',marginLeft:'0'}}>
                    <li style={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'flex-start'}}> 
                        <FormControlLabel control={<ScalingBlueCheckbox icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.checkedIsVet} onChange={handleChange} name="checkedIsVet" />} label={<Typography style={styles.formControlLabel}>I'm a UK Vet</Typography>} /> 
                    </li>
                    <li style={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'flex-start',color: 'white'}}> 
                        <FormControlLabel control={<ScalingBlueCheckbox icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.checkedIsNotVet} onChange={handleChange} name="checkedIsNotVet" />} label={<Typography style={styles.formControlLabel}>I am an owner, or non-vet professional</Typography>}/>  
                    </li>
                </ul>
            </FormGroup>
            <div style={{paddingLeft:'0rem',opacity: state.opacity }} onClick={recordUserChoice}>
                
                    <OrangeRoundedButtonWithBLCorner buttonText={state.buttonText} to={state.href} />
              
            </div>




      </Grid>

      <Grid item xs={12} sm={1} style={gridStyle}></Grid>

      <Grid item xs={12} sm={12} style={gridBottomStyle}>


            <Grid container  
            spacing={0} 
            spacing={0} 
            alignContent="flex-end" alignItems="flex-end" justify="flex-end"
            style={subGridStyle}>
            <Grid item xs={12} sm={1} style={gridStyle}>
                    <div style={{width: '100%', height: '50px'}}></div>
            </Grid>
            <Grid item xs={12} sm={3} style={gridStyle}>
                  
            </Grid>
            <Grid item xs={12} sm={3} style={gridStyle}>
                    <div style={{width: '100%', height: '40px',paddingBottom:'15px',paddingTop:'5px', display:'flex',flexDirection: 'row',alignItems:'center',paddingRight:'3rem'}}>
                        <div style={{width: '100%', height: '30px'}}>
                            <VetmedinLogo />
                        </div>  
                        <div style={{width: '100%', height: '30px',marginLeft:'3rem'}}>
                            <BRLogo />
                        </div>   
                    </div>            
            </Grid>
            <Grid item xs={12} sm={1} style={gridStyle}>
                    <div style={{width: '1px', height: '50px',backgroundColor: '#5279B0'}}></div>
            </Grid>
            <Grid item xs={12} sm={4} style={gridStyle}>  
                    <UICAN00472020DateofpreparationApril2020>UI-CAN-0047-2020. Date of preparation: April 2020</UICAN00472020DateofpreparationApril2020>       
            </Grid>
            </Grid>


      </Grid>
    </Grid>
   
    )
}
 //      <div style={{position: 'absolute',width: '100%',height: '100vh', minHeight: '100vh',overflow:'hidden', backgroundColor: 'blue'}}>

    //          <div style={{position: 'relative',width: '100%', minHeight: '100%'}}>
                
             

    //             <div style={{position: 'absolute',left:'0',top:'0', width: '30%', minHeight: '100%', backgroundColor: '#092178'}}> 
                    
    //             </div>

    //             <div style={{position: 'absolute',left: '30%',top:'0', width: '70%', minHeight: '100%', backgroundColor: '#092178'}}> 
    //                 <div style={{position: 'absolute',left: '0%',top:'10%', width: '70%', minHeight: '100%', backgroundColor: '#092178'}}>
    //                     <PleaseConfirmWhoYouAre>Please confirm who you are:</PleaseConfirmWhoYouAre>
    //                     <FormGroup row>
    //                         <ul style={{listStyle: 'none',color:'#0c2f8b'}}>
    //                             <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}> 
    //                                 <FormControlLabel control={<ScalingBlueCheckbox icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.checkedIsVet} onChange={handleChange} name="checkedIsVet" />} label={<Typography style={styles.formControlLabel}>I'm a UK Vet</Typography>} /> 
    //                             </li>
    //                             <li style={{display:'flex',flexDirection:'row',alignContent:'center',color: 'white'}}> 
    //                                 <FormControlLabel control={<ScalingBlueCheckbox icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.checkedIsNotVet} onChange={handleChange} name="checkedIsNotVet" />} label={<Typography style={styles.formControlLabel}>I am an owner, or non-vet professional</Typography>}/>  
    //                             </li>
    //                         </ul>
    //                     </FormGroup>
    //                     <div style={{paddingLeft:'0rem',opacity: state.opacity }} onClick={recordUserChoice}>
    //                         <OrangeRoundedButtonWithBLCorner buttonText={state.buttonText} to={state.href} />
    //                     </div>
    //                 </div>
    //             </div>

    //             <div style={{position: 'absolute',left: '20%',top: '10%',marginLeft:'-100px', width: '200px', height: '200px'}}>
                    
    //                  <MainLogo />
    //             </div>
               
    //             <div style={{position: 'absolute',left: '0',bottom: '0', width: '100%', height: '50px', backgroundColor: 'none',borderTop:'1px solid #24add6'}}>
    //                 <div style={{position: 'absolute',left: '0',bottom: '0', width: '10%', height: '50px'}}></div>
    //                 <div style={{position: 'absolute',left: '10%',bottom: '0', width: '40%', height: '50px', borderRight:'1px solid #24add6'}}>
    //                     <div style={{position: 'absolute',right: '5%',bottom: '1%', width: '30%', height: '44px'}}>
                           
    //                         <BRLogo />
    //                     </div>
    //                     <div style={{position: 'absolute',right: '40%',bottom: '1%', width: '30%', height: '44px'}}>
                           
    //                         <VetmedinLogo />
    //                     </div>
    //                 </div>
    //                 <UICAN00472020DateofpreparationApril2020>UI-CAN-0047-2020. Date of preparation: April 2020</UICAN00472020DateofpreparationApril2020>
    //                 </div>
    //         </div>
    //   </div> 