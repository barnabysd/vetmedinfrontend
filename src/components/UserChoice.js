
import React, {useRef, useEffect} from 'react'
import OrangeRoundedButtonWithBLCorner from '../components/OrangeRoundedButtonWithBLCorner'
import useLocalStorage from '../utils/localStorageHelper'

import { withStyles,createStyles,makeStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import Icon from '@material-ui/core/Icon';

import Typography from '@material-ui/core/Typography';

import GSAP from 'react-gsap-enhancer'

import { useCookies } from 'react-cookie'
import styled, { css, keyframes } from 'styled-components'
import Grid from '@material-ui/core/Grid'

import mainLogoSvg from '../images/userChoicePage/master_logo_light.svg'
import tickSvg from '../images/icons_and_glyphs/tick_orange_path_20240.svg'
import vetmedinLogoSvg from '../images/userChoicePage/vetmedin_logo_2.svg'
import bRLogoSvg from '../images/userChoicePage/boehringer_ingelheim_logo_2.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import get from 'lodash/get'
import { graphql } from "gatsby"
import { processInternalLink, processHtml, removeParagraphsTags } from '../utils/displayUtils'

// import MainLogo from '../svgReactLoader/userChoicePage/master_logo_dark.svg'

import theme, { sm, md, lg, xl } from '../theme'

const MainLogo = (() => {
    return <img src={mainLogoSvg} style={{width: '225px',margin:'auto',paddingTop: '1rem',textCenter:'center',display: 'flex',justifyContent: 'center'}} />
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

const scaleLoopKeyframes = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.5);
    }
`
const rippleEnterKeyframes = keyframes`
  0% {
    opacity: 0.1;
    transform: scale(0);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
`

const rippleExitKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const pulsateKeyframes = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  100% {
    transform: scale(1);
  }
`

const scaleLoopStyle = css`
  animation: ${scaleLoopKeyframes} 0.2s linear 1;
`

const PleaseConfirmWhoYouAre = styled.h1`
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 2.1333rem;
    line-height: 1.5;
    text-align: left;
    letter-spacing: -0.32px;
    color: ${theme.palette.skyBlue.main};
    font-family: ${theme.typography.fontFamily};
    font-weight: 600;
    @media (max-width: ${sm}px ) {
        margin-top: 0.5rem;
        font-size: 1.5rem;
    }
`

const ripple = css`
    opacity: 0;
`   
const rippleVisible = css`
    opacity: 0.3;
    animation: ${rippleEnterKeyframes} 550ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1);
` 

const childLeaveStyle = css`
    opacity: 0;
    animation: ${rippleExitKeyframes} 2550ms cubic-bezier(0.4, 0, 0.2, 1);
`

const childPulsateStyle = css`
   animation: ${pulsateKeyframes} 2500ms cubic-bezier(0.4, 0, 0.2, 1) 200ms infinite;
`



// margin-left: 2rem;

const InnerButtonText = styled.span`
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
`

const InnerButton = styled.span`
    display:block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
    z-index:0 !important;
    overflow: hidden;
    pointer-events: none;
    opacity: 0.7;
    background: ${theme.palette.peachCobbler.dark};
    clip-path: circle(0px at center);
    transition: clip-path 0.35s;
  
`

// &:hover {
//     clip-path: circle(150px at center);
//     opacity: 0.9;
//     background: ${theme.palette.peachCobbler.dark};
//     animation: ${pulsateKeyframes} 550ms cubic-bezier(0.4, 0, 0.2, 1);
//     transform: scale(1);
// }

const CheckLink = ({to, children}) => {
    const internal = /^\/(?!\/)/.test(to)
    const file = /\.[0-9a-z]+$/i.test(to)
    if (internal) {
      if (file) {
            return (
                <OrangeButtonLinkExternal href={to}>{children}</OrangeButtonLinkExternal>
            )
      }
      return (
            <OrangeButtonLink cover bg={theme.palette.tertitary.main} to={to}>{children}</OrangeButtonLink>
      )
    }
    return <OrangeButtonLinkExternal href={to}>{children}</OrangeButtonLinkExternal>
}

const OrangeButtonLink = styled(AniLink).attrs((/* props */) => ({ tabIndex: 0 }))`
    margin-left: 2rem;
   
    background-color: ${theme.palette.peachCobbler.main};
    display: block;
    color: ${theme.palette.midnightBlue.main};
    font-weight: 600;
    font-size: 1.46rem;
    letter-spacing: -0.22px;
    text-transform: none;
    height: 61px;
    width: 191px;
    text-align: center;
    vertical-align:middle;
    position: relative;
    line-height: 3.5rem;
    font-family: ${theme.typography.fontFamily};
    text-decoration: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
    outline:0 !important;
    transition: background 0.15s, width 0.35s 1s;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    &:hover {
        background-color:${theme.palette.peachCobbler.dark};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        transition-delay: 0.2s;
        cursor: pointer;
    }
    &:hover > .innerButton {
        clip-path: circle(150px at center);
        opacity: 0.9;
        background: ${theme.palette.peachCobbler.dark};
        animation: ${pulsateKeyframes} 550ms cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1);
        z-index:0 !important;
    }
  
`
// &:hover {
//     box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
//     transition-delay: 0.2s;
//     cursor: pointer;
// }
// transition: background 0.15s, width 0.35s 1s;
// background-color:${theme.palette.peachCobbler.dark};

const OrangeButtonLinkExternal = styled.a.attrs((/* props */) => ({ tabIndex: 0 }))`
    margin-left: 2rem;
   
    background-color: ${theme.palette.peachCobbler.main};
    display: block;
    color: ${theme.palette.midnightBlue.main};
    font-weight: 600;
    font-size: 1.46rem;
    letter-spacing: -0.22px;
    text-transform: none;
    height: 61px;
    width: 191px;
    text-align: center;
    vertical-align:middle;
    position: relative;
    line-height: 3.5rem;
    font-family: ${theme.typography.fontFamily};
    text-decoration: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
    transition: background 0.15s, width 0.35s 1s;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    outline:0 !important;
    &:hover {
        background-color:${theme.palette.peachCobbler.dark};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        transition-delay: 0.2s;
        cursor: pointer;
    }
    &:hover > .innerButton {
        clip-path: circle(150px at center);
        opacity: 0.9;
        background: ${theme.palette.peachCobbler.dark};
        animation: ${pulsateKeyframes} 550ms cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1);
        z-index:0 !important;
    }

`

const IAmAPetOwnerOrSomeoneOtherThanAVet = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 1.6rem;
    line-height: 1.46;
    text-align: left;
    letter-spacing: -0.48px;
    color: ${theme.palette.white.main};
    font-family: ${theme.typography.fontFamily};
    font-weight: 600;
    @media (max-width: ${sm}px) {
        font-size: 1.6rem;
    }

`

const IAmARegisteredVet = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 1.6rem;
    line-height: 1.46;
    text-align: left;
    letter-spacing: -0.48px;
    color: ${theme.palette.white.main};
    font-family: ${theme.typography.fontFamily};
    font-weight: 600;
    @media (max-width: ${sm}px) {
        font-size: 1.6rem;
    }

`

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
`
const TickBoxBackgroundStyledCompTicked = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    height: 100%;
    width: 100%;
    ${scaleLoopStyle};
    background-color: #001d5f;
    border-radius: 4px;
    border: 1px solid rgb(0, 29, 95);
`

const TickStyledComp = styled.div`
    height: 11.63px;
    width: 16px;
    background-color: ${theme.palette.peachCobbler.main};
`

const UICAN00472020DateofpreparationApril2020 = styled.div`
    margin-left: 2rem;
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
    padding-left: 0rem;
    padding-top: 1rem;
    @media (max-width: ${lg}px) {
        margin-left: 0rem;
    }
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
            <TickBoxBackgroundStyledComp />
        </Icon>
    )
}
const CustomCheckBoxOnIcon = () => {
    return (
        <Icon classes={{root: classes.iconRoot}}>
            <TickBoxBackgroundStyledCompTicked><TickBoxOn /></TickBoxBackgroundStyledCompTicked>
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

export default function UserChoice({resources, unmountMe}) {

    console.log(resources)

    if (!resources) {
        resources ={
            field_checkboxtext1: 'optin 1',
            field_checkboxtext2: 'option 2',
            field_headertext: 'Please options',
          field_bottombodytext: {processed:''},
          
          field_bottomtitle: {processed:''},
          
          field_buttonlinks:[{
            title:'',
            uri:''
          }]
        }
      
        // return (<p>no resources</p>)
    }

    const [cookies, setCookie, getCookie, removeCookie] = useCookies(['userChoice']);

    const [state, setState] = React.useState({
        checkedIsVet: false,
        checkedIsNotVet: false,
        buttonText: resources.field_buttonlinks[0].title,
        opacity: "0.6",
        href: "/"
    });

    const scalingCheckBox1 = useRef();
    const scalingCheckBox2 = useRef();

    const handleChange = (event) => {
        //setState({ ...state, [event.target.name]: event.target.checked });
        if (event.target.name === 'checkedIsVet') {
            setState({ ...state, href: processInternalLink(resources.field_buttonlinks[0].uri),checkedIsVet: true, checkedIsNotVet: false, buttonText: resources.field_buttonlinks[0].title, opacity: "1" });
        }
        if (event.target.name === 'checkedIsNotVet') {
            setState({ ...state, href: resources.field_buttonlinks[1].uri,checkedIsVet: false, checkedIsNotVet: true, buttonText: resources.field_buttonlinks[1].title, opacity: "1" });
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

    const refButton = useRef()


    useEffect(() => {
        if (!refButton.current) {
            // createAnim(refButton.current,'checkVet')
            ///const nnn = document.getElementById('innerButton')
        }
        return 
    }, [refButton])

    const border = '0px solid black'

    const mainGridStyle = { 
        // border: '1px solid black',
        // position: 'absolute',
        // width: '100%',
        // height: '100vh', 
        // minHeight: '100vh',
        // overflow:'hidden',
        // backgroundColor: 'blue'
    }

    const subGridStyle = { 
        border: '1px solid #5279B0',
        width: '100%',
        height: '50px',
        maxHeight: '50px' ,
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
        border: border,
        
    }

    const gridItemLogosStyle = {
        borderRight:'1px solid #5178b0',
        height:'49px',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'


    }

    const styles = createStyles({
        formControlLabel: { 
            fontSize: '1.2rem', 
            color: 'white',
            fontWeight: '700',
            fontFamily: theme.typography.fontFamily,
                '& label': { 
                    fontSize: '1.2rem',
                    color: 'white',
                    fontWeight:'700',
                    fontFamily: theme.typography.fontFamily
                } 
            }
    });
     

    return (
   
<Grid container  
    spacing={0} 
    spacing={0} 
    justify="center" 
    className="mainGrid"
    style={mainGridStyle}>
      <Grid item xs={12} sm={12} style={gridStyle}>
         
      </Grid>

      <Grid item xs={12} sm={1} style={gridStyle}></Grid>

      <Grid item xs={12} sm={3} style={gridStyle}>
           <MainLogo />
      </Grid>

      <Grid item xs={12} sm={7} style={gridStyle}>

            <PleaseConfirmWhoYouAre>{resources.field_headertext}</PleaseConfirmWhoYouAre>
            <FormGroup row>
                <ul style={{listStyle: 'none',color:'#0c2f8b',justifyContent:'flex-start',padding:'0px',marginLeft:'2rem'}}>
                    <li style={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'flex-start',color: 'white',marginLeft:'0rem'}}> 
                        <FormControlLabel control={<ScalingBlueCheckbox icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.checkedIsVet} onChange={handleChange} name="checkedIsVet" />} label={<Typography style={styles.formControlLabel}>{resources.field_checkboxtext1}</Typography>} /> 
                    </li>
                    <li style={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'flex-start',color: 'white',marginLeft:'0rem'}}> 
                        <FormControlLabel control={<ScalingBlueCheckbox icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.checkedIsNotVet} onChange={handleChange} name="checkedIsNotVet" />} label={<Typography style={styles.formControlLabel}>{resources.field_checkboxtext2}</Typography>}/>  
                    </li>
                </ul>
            </FormGroup>
            <div style={{paddingLeft:'0rem',opacity: state.opacity }} onClick={recordUserChoice}>
                <CheckLink to={state.href}><InnerButton className="innerButton" ref={refButton}/><InnerButtonText>{state.buttonText}</InnerButtonText></CheckLink>
            </div>

      </Grid>

      <Grid item xs={12} sm={1} style={gridStyle}></Grid>

      <Grid item xs={12} sm={12} style={gridBottomStyle}>


            <Grid container 
            spacing={0} 
            spacing={0} 
            alignContent="flex-end" 
            alignItems="flex-end" 
            justify="flex-end"
            style={subGridStyle} item xs={12}>
            <Grid item xs={12} sm={1} md={4} lg={4} style={gridStyle}>
                    <div style={{height: '50px'}}></div>
            </Grid>
            <Grid item xs={12} sm={5} md={4} lg={4} style={gridItemLogosStyle}>
                    <div style={{width: '100%', height: '50px',paddingBottom:'0px',paddingTop:'0px', display:'flex',flexDirection: 'row',alignItems:'center',paddingRight:'3rem'}}>
                        <div style={{width: '100%', height: '30px'}}>
                            <VetmedinLogo />
                        </div>  
                        <div style={{width: '100%', height: '30px',marginLeft:'3rem'}}>
                            <BRLogo />
                        </div>   
                        {/* <div style={{width: '1px', height: '50px',backgroundColor: '#5279B0'}}></div>  */}
                    </div> 
                              
            </Grid>
            <Grid item xs={12} sm={5} md={3} lg={3} style={gridStyle}>  
                    <UICAN00472020DateofpreparationApril2020>{resources.field_jobnumber}</UICAN00472020DateofpreparationApril2020>       
            </Grid>
            <Grid item xs={12} sm={1} md={1} lg={1} style={gridStyle}>
                    <div style={{height: '50px'}}></div>
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



// .MuiTouchRipple-root {
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 0;
//   overflow: hidden;
//   position: absolute;
//   border-radius: inherit;
//   pointer-events: none;
// }

/*
.MuiTouchRipple-ripple {
  opacity: 0;
  position: absolute;
}
.MuiTouchRipple-rippleVisible {
  opacity: 0.3;
  animation: MuiTouchRipple-keyframes-enter 550ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
}
.MuiTouchRipple-ripplePulsate {
  animation-duration: 200ms;
}
.MuiTouchRipple-child {
  width: 100%;
  height: 100%;
  display: block;
  opacity: 1;
  border-radius: 50%;
  background-color: currentColor;
}
.MuiTouchRipple-childLeaving {
  opacity: 0;
  animation: MuiTouchRipple-keyframes-exit 550ms cubic-bezier(0.4, 0, 0.2, 1);
}
.MuiTouchRipple-childPulsate {
  top: 0;
  left: 0;
  position: absolute;
  animation: MuiTouchRipple-keyframes-pulsate 2500ms cubic-bezier(0.4, 0, 0.2, 1) 200ms infinite;

*/