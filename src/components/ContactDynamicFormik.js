import React from 'react'
import {useRef, useEffect} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'

import { useStaticQuery, graphql } from 'gatsby'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from '../theme'
import SlideDrawer from '../components/SideDrawer'
import Grid from '@material-ui/core/Grid'

import useLocalStorage from '../utils/localStorageHelper'

import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import Icon from '@material-ui/core/Icon'

import TextField from '@material-ui/core/TextField'
import { withStyles,createStyles,makeStyles } from '@material-ui/core/styles'
import DarkBlueRoundedButton from '../components/DarkBlueRoundedButton'
import { useCookies } from 'react-cookie'
import styled, { css, keyframes } from 'styled-components'

import rosetteSvg from '../images/certificate/rosette1.svg'
import WebsiteLink, {buttonStyleType} from '../components/WebsiteLink'

import Checkbox from '@material-ui/core/Checkbox'
import tickSvg from '../images/certificate/tick_path_dark_blue_20222.svg'
import {stripUneededHtml, removeParagraphsTags, processInternalLink, processField } from '../utils/displayUtils'
import BorderSelect from '../components/BorderSelect'

const InputBorderStyle = styled.div`
  height: 49px;
  width: 435px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid rgb(49, 173, 211);
`;

 const InputBorderFocusStyle = styled.div`
  height: 49px;
  width: 435px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid rgb(15, 87, 159);
`;

 const InputBorderGreenStyle = styled.div`
  height: 49px;
  width: 435px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 3px 0px 0px #009975;
  border: 1px solid rgb(0, 153, 117);
`;

 const InputBorderRedStyle = styled.div`
  height: 49px;
  width: 435px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 3px 0px 0px #eb4559;
  border: 1px solid rgb(235, 69, 89);
`;

 const FormLabel = styled.label`
    padding-left:0.5rem;
    font-size: 1rem;
    line-height: 1.6;
    text-align: left;
    letter-spacing: -0.15px;
    color: ${theme.palette.deminBlue.main};
    font-family: ${theme.typography.fontFamily};
    font-weight: 600;
    height: 21px;
    width: 79px;

`;

const FormBodyText = styled.span`
    display: block;
    width: 100%;
    padding-top:1rem;
    padding-left:0.5rem;
    font-family: ${theme.typography.fontFamily};
    font-size: 0.813rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: ${theme.palette.egyptianBlue.main};
    & a {
        font-size: 0.813rem !important;
        color: ${theme.palette.midnightBlue.main};
    }
    & strong a {
        font-size: 0.813rem !important;
        color: ${theme.palette.midnightBlue.main};
    }
    & strong {
        font-size: 0.813rem !important;
        color: ${theme.palette.midnightBlue.main};
    }
    & p {
        font-size: 0.813rem !important;
        color: ${theme.palette.midnightBlue.main};
    }
`
const FormBodyTextCheckBoxLabel = styled(FormBodyText)`
     padding-top: 0;
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


    width: 1.5rem;
    height: 1.5rem;
    border-radius: 4px;
    border: solid 1px ${theme.palette.topazBlue.main};

    background-color: white;

`
const scaleLoopKeyframes = keyframes`
    from {
        transform: scale(0.8);
    }
    to {
        transform: scale(1.5);
    }
`
const scaleLoopStyle = css`
    animation: ${scaleLoopKeyframes} 0.2s linear 1;
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
    width: 1.5rem;
    height: 1.5rem;
    transform: scale(0.8);
    border-radius: 4px;
    border: solid 1px ${theme.palette.topazBlue.main};

    background-color: ${theme.palette.topazBlue.main};
`

const TickBoxOn = (() => {
    return <img src={tickSvg} style={{pointerEvents: 'none', width: '20px', height: '20px',paddingBottom: '0px',paddingRight: '0px' }}/>
})

const useStyles = makeStyles((themeMaterial) => ({
    root: {
      '& .MuiTextField-root': {
          margin: themeMaterial.spacing(1),
          width: '25ch',
          backgroundColor: 'white',
          borderColor: theme.palette.topazBlue.main,
          borderRadius: '4px'
      },
      '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.topazBlue.main,
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.topazBlue.main,
      },
      '& .MuiFormHelperText-contained':{
          marginLeft:0,
          marginRight: 0,
          height: 0, // hide it !!!!!!!
          paddingRight: '14px',
          paddingLeft: '14px',
          backgroundColor: '#d0f5fd'

      }
    },
}));

// const useStylesGreen = makeStyles((themeMaterial) => ({
//     root: {
//       '& .MuiTextField-root': {
//           margin: themeMaterial.spacing(1),
//           width: '25ch',
//           backgroundColor: 'white',
//           borderRadius: '4px',
//           boxShadow: '0 3px 0 0 green',
//           border: 'solid 1px green'
//       },
//       '& .MuiFormHelperText-contained':{
//           marginLeft:0,
//           marginRight: 0,
//           height: 0, // hide it !!!!!!!
//           paddingRight: '14px',
//           paddingLeft: '14px',
//           backgroundColor: '#d0f5fd'
//       }
//     },
// }));

// const useStylesRed = makeStyles((themeMaterial) => ({
//     root: {
//       '& .MuiTextField-root': {
//           margin: themeMaterial.spacing(1),
//           width: '25ch',
//           backgroundColor: 'white',
//           borderRadius: '4px',
//           boxShadow: '0 3px 0 0 red',
//           border: 'solid 1px red'
//       },
//       '& .MuiFormHelperText-contained':{
//           marginLeft:0,
//           marginRight: 0,
//           paddingRight: '14px',
//           paddingLeft: '14px',
//           backgroundColor: '#d0f5fd'
//       }
//     },
// }));

const classesForIcon = makeStyles({
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    }
  });

const gridStyle = {
    border: '0px solid red'
}

const CustomCheckBoxOffIcon = () => {
  return (
      <Icon classes={{root: classesForIcon.iconRoot}}>
          <TickBoxBackgroundStyledComp />
      </Icon>
  )
}
const CustomCheckBoxOnIcon = () => {
  return (
      <Icon classes={{root: classesForIcon.iconRoot}}>
          <TickBoxBackgroundStyledCompTicked><TickBoxOn /></TickBoxBackgroundStyledCompTicked>
      </Icon>
  )
}


function ContactDynamicFormik({resources, requestGridStyle, formHandler, state, setState, recordUserChoice, checkFormSubmitState, dogChoice, moveToResponseDebug}) {

    let classes = useStyles();

    const scalingCheckBox1 = useRef();
    const scalingCheckBox2 = useRef();
    const styles = createStyles({
      formControlLabel: {
        marginLeft:'0rem',
              '& label': {
                  marginLeft:'0rem'
              }
          }
    });

    /*
    https://github.com/gatsbyjs/gatsby/issues/10382
    */

    // validate={values => {
    //     let errors = {};
    //     if (!values.email) {
    //       errors.email = 'Required';
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //       errors.email = 'Invalid email address';
    //     }
    //     return errors;
    //   }}

    const refTick1 = useRef()
    const refTick2 = useRef()

    const handleChange = (e) => {
        //debugger
        console.log("etk ", e.target.name);
        console.log("etv ",e.target.value);

        const canSubmit = checkFormSubmitState()

        if (!canSubmit) {console.log("NOT READY")}

        if (e.target.name === 'agreedToMarketingEmail') {
            //refTick2.current.checked = false
            setState({ ...state, formReady: canSubmit, agreedToMarketingEmail: true, didNotAgreedToMarketingEmail: false })
        } else if (e.target.name === 'didNotAgreedToMarketingEmail') {
            //refTick1.current.checked = false
            setState({ ...state, formReady: canSubmit, agreedToMarketingEmail: false, didNotAgreedToMarketingEmail: true })
        } else {
          if (e.target.value.length > 0) {
                if (e.target.name === 'email' && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value))) {
                    setState({ ...state, [e.target.name]: e.target.value, error3: true , helperText3:'', hasInput3: true})
                } else {
                    if (e.target.name === 'firstName') {
                        setState({ ...state, formReady: canSubmit, [e.target.name]: e.target.value, error1: false, helperText1:'', hasInput1: true })
                    } else if (e.target.name === 'lastName') {
                        setState({ ...state, formReady: canSubmit, [e.target.name]: e.target.value, error2: false, helperText2:'', hasInput2: true })
                    } else if (e.target.name === 'email') {
                        setState({ ...state, formReady: canSubmit, [e.target.name]: e.target.value, error3: false , helperText3:'', hasInput3: true})
                    } else if (e.target.name === 'practiceAddress') {
                        setState({ ...state, formReady: canSubmit, [e.target.name]: e.target.value, error4: false, helperText4:'' , hasInput4: true})
                    }  else if (e.target.name === 'rcvs') {
                        setState({ ...state, formReady: canSubmit, [e.target.name]: e.target.value, error5: false , helperText5:'', hasInput5: true})
                    } else if (e.target.name === 'postcode') {
                        setState({ ...state, formReady: canSubmit, [e.target.name]: e.target.value, error6: false, helperText6:'' , hasInput6: true})
                    } else if (e.target.name === 'vetertinaryGroup') {
                        setState({ ...state, formReady: canSubmit, [e.target.name]: e.target.value, error7: false, helperText7:'' , hasInput7: true})
                    }
                }
          } else {
                // console.log("error - to short")
                // setState({...state,  [e.target.name]: e.target.value, helperText: 'Invalid format', error: true });
                if (e.target.name === 'firstName') {
                    setState({ ...state, [e.target.name]: e.target.value, error1: true, helperText1:'', hasInput1: (e.target.value.length > 0) })
                } else if (e.target.name === 'lastName') {
                    setState({ ...state, [e.target.name]: e.target.value, error2: true, helperText2:'', hasInput2: (e.target.value.length > 0) })
                } else if (e.target.name === 'email') {
                    setState({ ...state, [e.target.name]: e.target.value, error3: true , helperText3:'', hasInput3: (e.target.value.length > 0)})
                } else if (e.target.name === 'practiceAddress') {
                    setState({ ...state, [e.target.name]: e.target.value, error4: true, helperText4:'' , hasInput4: (e.target.value.length > 0)})
                } else if (e.target.name === 'rcvs') {
                    setState({ ...state, [e.target.name]: e.target.value, error5: true, helperText5:'' , hasInput5: (e.target.value.length > 0)})
                } else if (e.target.name === 'postcode') {
                    setState({ ...state, [e.target.name]: e.target.value, error6: true, helperText6:'' , hasInput6: (e.target.value.length > 0)})
                } else if (e.target.name === 'vetertinaryGroup') {
                    // set as always true 
                    setState({ ...state, [e.target.name]: e.target.value, error7: false, helperText7:'' , hasInput7: true})
                }
          }

        }

    }

    const greenStyle = {
        boxShadow: '0 3px 0 0 ' + theme.palette.success.main,
        borderColor: theme.palette.success.main,
        width: 'calc(100% - 16px)',
    }

    const redStyle = {
        boxShadow: '0 3px 0 0 ' + theme.palette.error.main,
        borderColor: theme.palette.error.main,
        width: 'calc(100% - 16px)',
    }

    const neutralStyle = {
        boxShadow: '0 0 0 0 transparent',
        width: 'calc(100% - 16px)',
    }

    const tickBoxCheckedStyle = {
        backgroundColor:  theme.palette.topazBlue.main
    }

    const tickBoxUnCheckedStyle = {
        backgroundColor:  theme.palette.white.main
    }

    let currentTextfield1Style = neutralStyle
    let currentTextfield2Style = neutralStyle
    let currentTextfield3Style = neutralStyle
    let currentTextfield4Style = neutralStyle
    let currentTextfield5Style = neutralStyle
    let currentTextfield6Style = neutralStyle
    let currentTextfield7Style = neutralStyle

    if (state.hasInput1) { state.error1 ? currentTextfield1Style = redStyle : currentTextfield1Style = greenStyle }
    if (state.hasInput2) { state.error2 ? currentTextfield2Style = redStyle : currentTextfield2Style = greenStyle }
    if (state.hasInput3) { state.error3 ? currentTextfield3Style = redStyle : currentTextfield3Style = greenStyle }
    if (state.hasInput4) { state.error4 ? currentTextfield4Style = redStyle : currentTextfield4Style = greenStyle }
    if (state.hasInput5) { state.error5 ? currentTextfield5Style = redStyle : currentTextfield5Style = greenStyle }
    if (state.hasInput6) { state.error6 ? currentTextfield6Style = redStyle : currentTextfield6Style = greenStyle }
    if (state.hasInput7) { state.error7 ? currentTextfield7Style = redStyle : currentTextfield7Style = greenStyle }

    const footerHtml = processField(resources.field_additionalbodytext, dogChoice, true) 

    return (
      <form className={classes.root} 
           onSubmit={formHandler} 
           data-netlify-honeypot="bot-field">
        <Grid container
            spacing={0}
            spacing={0}
            justify="flex-start"
            style={requestGridStyle}>

                <Grid item xs={12} sm={6} style={gridStyle}>
                    <FormLabel htmlFor="name">{resources.field_formfirstname}</FormLabel>
                    {/* <input type="text" name="name" value={state.name} onChange={handleChange} /> */}
                    <div><TextField id="outlined-firstname"  style={currentTextfield1Style} error={state.error1} helperText={state.helperText1} label={resources.formFirstName} placeholder={resources.field_formfirstnameplaceholder} type="text" variant="outlined" type="text" name="firstName" value={state.firstName} onChange={handleChange} /> </div>
                </Grid>
                <Grid item xs={12} sm={6} style={gridStyle}>
                    <FormLabel htmlFor="lastName">{resources.field_formlastname}</FormLabel>
                    <div><TextField id="outlined-lastname"  style={currentTextfield2Style} error={state.error2} helperText={state.helperText2} label={resources.formLastName} placeholder={resources.field_formlastnameplaceholder} type="text" variant="outlined" type="text" name="lastName" value={state.lastName} onChange={handleChange} /></div>
                 </Grid>

                 <Grid item xs={12} sm={6} style={gridStyle}>
                    <FormLabel htmlFor="rcvs">{resources.field_formrcvs ? resources.field_formrcvs : "RCVS number"}</FormLabel>
                    <div><TextField id="outlined-rcvs"  style={currentTextfield5Style} error={state.error5} helperText={state.helperText5} label={resources.formRcvs} placeholder={resources.field_rcvsplaceholder} type="text" variant="outlined" type="text" name="rcvs" value={state.rcvs} onChange={handleChange} /> </div>
                </Grid>
                 <Grid item xs={12} sm={6} style={gridStyle}>
                    <FormLabel htmlFor="email">{resources.field_formemail}</FormLabel>
                    {/* <input type="text" name="email" value={state.email} onChange={handleChange} /> */}
                    <div><TextField id="outline-email" style={currentTextfield3Style} error={state.error3} helperText={state.helperText3} label={resources.formEmail} placeholder={resources.field_formemailplaceholder} type="text" variant="outlined" type="text" name="email" value={state.email} onChange={handleChange} /></div>
                </Grid>

                <Grid item xs={12} sm={6} style={gridStyle}>
                   <FormLabel htmlFor="practiceAddress">{resources.field_formpracticeaddress ? resources.field_formpracticeaddress : "Address" }</FormLabel>
                    <div><TextField id="outlined-practice-address" style={currentTextfield4Style}  error={state.error4} helperText={state.helperText4} label={resources.formPracticeAddress} placeholder={resources.field_formpracticeaddressplaceho} type="text" variant="outlined" type="text" name="practiceAddress" value={state.practiceAddress} onChange={handleChange} /></div>
                </Grid>

                <Grid item xs={12} sm={6} style={gridStyle}>
                    <FormLabel htmlFor="postcode">{resources.field_formpostcode ? resources.field_formpostcode : "Postcode"}</FormLabel>
                    <div><TextField id="outlined-postcode"  style={currentTextfield6Style} error={state.error6} helperText={state.helperText6} label={resources.formPostcode} placeholder={resources.field_formpostcodeplaceholder} type="text" variant="outlined" type="text" name="postcode" value={state.postcode} onChange={handleChange} /></div>
                 </Grid>

                 <Grid item xs={12} sm={6} style={gridStyle}>
                    <FormLabel htmlFor="vetertinaryGroup">{resources.field_formvetertinarygroup ? resources.field_formvetertinarygroup : "Which veterinary group do you work for?"}</FormLabel>
                    <div>
                        <BorderSelect id="outlined-vetertinary-group-select" name={"vetertinaryGroup"} value={state.vetertinaryGroup} onChange={handleChange}/>
                    </div>
                 </Grid>

                <Grid item xs={12} sm={12} style={gridStyle}>
                    <FormBodyText dangerouslySetInnerHTML={footerHtml}></FormBodyText>
                </Grid>
                <Grid item xs={12} sm={12}  style={gridStyle}>
                    <FormGroup row>
                        <ul style={{listStyle: 'none',marginLeft:'0.5rem',marginTop:'0.5rem'}}>
                            <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}>
                                <FormControlLabel 
                                    control={<Checkbox checked={state.agreedToMarketingEmail}
                                    ref={refTick1} 
                                    icon={<CustomCheckBoxOffIcon />}
                                    checkedIcon={<CustomCheckBoxOnIcon/>}
                                    value={state.agreedToMarketingEmail}
                                    onChange={handleChange}
                                    name="agreedToMarketingEmail" />}
                                    label={<FormBodyTextCheckBoxLabel style={styles.formControlLabel}>{resources.field_marketingrequest1}</FormBodyTextCheckBoxLabel>} />
                            </li>
                            <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}>
                                <FormControlLabel 
                                   control={<Checkbox checked={state.didNotAgreedToMarketingEmail}
                                   ref={refTick2} 
                                   icon={<CustomCheckBoxOffIcon />}
                                   checkedIcon={<CustomCheckBoxOnIcon/>}
                                   value={state.didNotAgreedToMarketingEmail}
                                   onChange={handleChange} name="didNotAgreedToMarketingEmail" />}
                                   label={<FormBodyTextCheckBoxLabel style={styles.formControlLabel}>{resources.field_marketingrequest2}</FormBodyTextCheckBoxLabel>}/>
                            </li>
                        </ul>
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sm={12}  style={gridStyle}>
                    <div style={{paddingLeft:'0.5rem',opacity: state.opacity }} 
                         onClick={recordUserChoice}>   
                         <WebsiteLink style={{width:'250px',
                             opacity:((state.formReady) ? "1" : "0.8")}} 
                             disabled={!state.formReady}
                             typeOfButton={buttonStyleType.DARK_BLUE_BUTTON}
                             type={state.formReady ? "submit" : "button"}>
                                 {resources.field_buttonlinks[0].title}
                         </WebsiteLink>
                    </div>
                   
                </Grid>
        </Grid>
        </form>
    );

}

export default ContactDynamicFormik
