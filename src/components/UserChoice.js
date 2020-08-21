
import React, {useRef, useEffect} from 'react'
import useLocalStorage from '../utils/localStorageHelper'

import { withStyles,createStyles,makeStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import Icon from '@material-ui/core/Icon';

import Typography from '@material-ui/core/Typography';

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
import { processInternalLink, stripUneededHtml, removeParagraphsTags } from '../utils/displayUtils'

import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'

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

const scaleLoopStyle = css`
  animation: ${scaleLoopKeyframes} 0.2s linear 1;
`

const PleaseConfirmWhoYouAre = styled.h1`
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 2rem;
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
    min-width:400px;
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
        min-width:10px;
        width: 100%;
        font-size: 0.75rem;
      
    }
    @media (max-width: ${sm}px) {
        padding-right: 3rem;
        padding-bottom: 3rem;
    }
`

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
  
const classes = makeStyles({
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center',
      width: '45px',
      height: '45px'
    }
})


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
    width:'49px',
    height:'49px',
  },
  checked: {},
})((props) => <Checkbox color="default" {...props}  />)

const ScalingBlueCheckboxAlt =  styled(({ color, ...otherProps }) => (
    <Checkbox {...otherProps} color="default"  />
  ))`
    color: ${props => props.color};
  
    & .MuiIcon-root {
        width: 49px;
        height: 49px;
        margin-left: -5px;
    }

`


const border = '0px solid black'

const mainGridStyle = { 
    // border: '1px solid black',
    // position: 'absolute',
    // width: '100%',
    // height: '100vh', 
    // minHeight: '100vh',
    // overflow:'hidden',
     backgroundColor: theme.palette.midnightBlue.main
}

const subGridStyle = { 
    border: '0px solid #5279B0',
    width: '100%',
    height: '50px',
    maxHeight: '50px' ,
}

const gridStyle = { 
    border: border
}

const gridBottomStyle = { 
    border: border,
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

const ExtraButtonLinkInfo = styled.div`
  
    margin-left:2rem;
    margin-bottom:1rem;
    font-size: 0.8rem;
    color: white;
    font-weight:400;
    font-family: ${theme.typography.fontFamily};
`

const styles = createStyles({
    formControlLabel: { 
        fontSize: '1.5rem', 
        color: 'white',
        fontWeight: '600 !important',
        marginLeft: '2rem',
        fontFamily: theme.typography.fontFamily,
            '& label': { 
                fontSize: '1.5rem',
                color: 'white',
                fontWeight:'600 !important',
                fontFamily: theme.typography.fontFamily
            } 
        }
});

const LogosHolder = styled.div`
     width: 100%;
     height: 50px;
     padding-bottom:0px;
     padding-top:0px;
     display:flex;
     flex-direction:row;
     justify-items: spaced-evenly;
     align-items:center;
     padding-right:3rem;
     @media (max-width: ${sm}px) {
            padding-left: 3rem;
     }
`

const UserChoiceHolder = styled.div`
    height: 90%;
    @media (max-width: ${sm}px) {
        height: 550px;
     }
`

const UserChoicePageContainer = styled(Grid)`
    /* height:auto; */
    position:relative;
    left:0;
    top:0;
    right:0;
    bottom:0;
    @media (max-width: ${lg}px) {
        position:static;
        left:unset;
        top:unset;
        right:unset;
        bottom:unset;
        min-height:100vh;
    }
`
 

export default function UserChoice({resources, unmountMe}) {

    console.log(resources)
    //TODO - hardcoded
    if (!resources) {
        resources = {
            field_checkboxtext1: "I am a veterinary professional",
            field_checkboxtext2: "I am a pet owner, or someone other than a veterinary professional",
            field_headertext: "Please confirm who you are:",
            field_bottombodytext: {processed:''},
            field_bottomtitle: {processed:''},
            field_jobnumber: "UI-CAN-0047-2020. Date of preparation: July 2020",
            field_extrabuttonlinkinfo: {processed: 'To learn more about heart disease in dogs:'},
            field_buttonlinks: [
                {
                title: "Continue",
                uri: "internal:/home-page"
                },
                {
                title: "Visit B.E.A.T",
                uri: "https://www.beatdogheartdisease.co.uk/"
                }
            ]
        }
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
            setCookie('userChoice','vet',{ path: '/' })
         
            console.log("vet")
            
        } 
        if (state.checkedIsNotVet === true) {
            setUserChoice('notVet');
            setCookie('userChoice','notVet',{ path: '/' })
           
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


    return (
   
<UserChoicePageContainer container  
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
             <UserChoiceHolder>
            <PleaseConfirmWhoYouAre>{resources.field_headertext}</PleaseConfirmWhoYouAre>
            <FormGroup row>
                <ul style={{listStyle: 'none',color:'#0c2f8b',justifyContent:'flex-start',padding:'0px',marginLeft:'2rem'}}>
                    <li style={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'flex-start',color: 'white',marginLeft:'0.5rem'}}> 
                        <FormControlLabel control={<ScalingBlueCheckboxAlt icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.checkedIsVet} onChange={handleChange} name="checkedIsVet" />} 
                        label={<Typography style={styles.formControlLabel}><span style={{fontWeight:'600'}}>{resources.field_checkboxtext1}</span></Typography>} /> 
                    </li>
                    <li style={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'flex-start',color: 'white',marginLeft:'0.5rem'}}> 
                        <FormControlLabel control={<ScalingBlueCheckboxAlt icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.checkedIsNotVet} onChange={handleChange} name="checkedIsNotVet" />} 
                        label={<Typography style={styles.formControlLabel}><span style={{fontWeight:'600'}}>{resources.field_checkboxtext2}</span></Typography>}/>  
                    </li>
                </ul>
            </FormGroup>
            <ExtraButtonLinkInfo id="extraButtonText" dangerouslySetInnerHTML={{__html: state.checkedIsNotVet ? stripUneededHtml(resources.field_extrabuttonlinkinfo.processed) : '&nbsp;'}}>
                
            </ExtraButtonLinkInfo>
            <div style={{paddingLeft:'0rem',opacity: state.opacity, marginLeft: "2rem" }} onClick={recordUserChoice}>
                <WebsiteLink to={state.href} typeOfButton={buttonStyleType.ORANGE_BUTTON_CORNER} style={{width:'200px'}}>{state.buttonText}</WebsiteLink>
            </div>
            </UserChoiceHolder>

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
            <Grid item xs={12} sm={1} md={4} lg={4} style={{borderTop: '1px solid #5279B0'}}>
                    <div style={{height: '50px'}}></div>
            </Grid>
            <Grid item xs={12} sm={5} md={4} lg={4} style={{borderTop: '1px solid #5279B0'}}>
                    <LogosHolder>
                        <div style={{width: '82px', height: '30px'}}>
                            <VetmedinLogo />
                        </div>  
                        <div style={{width: '86px', height: '30px',marginLeft:'3rem'}}>
                            <BRLogo />
                        </div>   
                        {/* <div style={{width: '1px', height: '50px',backgroundColor: '#5279B0'}}></div>  */}
                    </LogosHolder> 
                              
            </Grid>
            <Grid item xs={12} sm={5} md={3} lg={3} style={{borderTop: '1px solid #5279B0',borderLeft:'1px solid #5279B0'}}>  
                    <UICAN00472020DateofpreparationApril2020>{resources.field_jobnumber}</UICAN00472020DateofpreparationApril2020>       
            </Grid>
            <Grid item xs={12} sm={1} md={1} lg={1} style={{borderTop: '1px solid #5279B0'}}>
                    <div style={{height: '50px'}}></div>
            </Grid>
            </Grid>


      </Grid>
    </UserChoicePageContainer>
   
    )
}


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