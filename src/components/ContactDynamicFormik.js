import React from 'react'
import {useRef, useEffect} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'

import { useStaticQuery, graphql } from 'gatsby'
import { createMuiTheme, responsiveFontSizes, createStyles } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from '../theme'
import styled from 'styled-components'
import SlideDrawer from '../components/SideDrawer'
import Grid from '@material-ui/core/Grid'
import ScalingBlueCheckbox from '../components/ScalingCheckBox'
import useLocalStorage from '../utils/localStorageHelper'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Icon from '@material-ui/core/Icon';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DarkBlueRoundedButton from '../components/DarkBlueRoundedButton'
import { useCookies } from 'react-cookie'

import rosetteSvg from '../images/certificate/rosette1.svg'
import WebsiteLink, {buttonStyleType} from '../components/WebsiteLink'

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

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));
  
const classes = makeStyles({
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
        <Icon classes={{root: classes.iconRoot}}>
            <img className={classes.imageIcon} src="/tickBoxDarkBlueOff.png"/>
        </Icon>
    )
  }
  const CustomCheckBoxOnIcon = () => {
    return (
        <Icon classes={{root: classes.iconRoot}}>
            <img className={classes.imageIcon} src="/tickBoxDarkBlueOn.png"/>
        </Icon>
    )
  }

function ContactDynamicFormik({resources, requestGridStyle, formHandler, state, setState, recordUserChoice}) {

    const classes = useStyles();
    const scalingCheckBox1 = useRef();
    const scalingCheckBox2 = useRef();
    const styles = createStyles({
      formControlLabel: { 
          fontSize: '0.75rem', 
          fontWeight:'700',
          fontFamily:'Poppins',
              '& label': { 
                  fontSize: '0.75rem' ,
                  fontWeight:'700',
                  fontFamily:'Poppins',
                  marginLeft:'2rem'
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

    const handleChange = (e) => {
        console.log("etk ", e.target.name);
        console.log("etv ",e.target.value);
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return (
      <form className={classes.root} onSubmit={formHandler}>
        <Grid container  
            spacing={0} 
            spacing={0} 
            justify="flex-start" 
            style={requestGridStyle}>
                
                <Grid item xs={12} sm={6}  style={gridStyle}>
                    <div style={{paddingLeft: '0.5rem'}}><label htmlFor="name">{resources.field_formfirstname}</label> </div>
                    {/* <input type="text" name="name" value={state.name} onChange={handleChange} /> */}
                    <div><TextField id="outlined-firstname" label={resources.formFirstName} placeholder={resources.field_formfirstnameplaceholder} type="text" variant="outlined" type="text" name="firstName" value={state.firstName} onChange={handleChange} /> </div>
                </Grid>
                <Grid item xs={12} sm={6}  style={gridStyle}>
                    <div style={{paddingLeft: '0.5rem'}}><label htmlFor="lastName">{resources.field_formlastname}</label> </div>
                    <TextField id="outlined-lastname" label={resources.formLastName} placeholder={resources.field_formlastnameplaceholder} type="text" variant="outlined" type="text" name="lastName" value={state.lastName} onChange={handleChange} />
                 </Grid>
                 <Grid item xs={12} sm={6}  style={gridStyle}>   
                    <div style={{paddingLeft: '0.5rem'}}><label htmlFor="email">{resources.field_formemail}</label> </div>
                    {/* <input type="text" name="email" value={state.email} onChange={handleChange} /> */}
                    <div><TextField id="outline-email" label={resources.formEmail} placeholder={resources.field_formemailplaceholder} type="text" variant="outlined" type="text" name="email" value={state.email} onChange={handleChange} /></div>
                </Grid>
                <Grid item xs={12} sm={6}  style={gridStyle}>
                    <div style={{paddingLeft: '0.5rem'}}><label htmlFor="practiceAddress">{resources.field_formpracticeaddress}</label></div>
                    <div><TextField id="outlined-lastname" label={resources.formPracticeAddress} placeholder={resources.field_formpracticeaddressplaceho} type="text" variant="outlined" type="text" name="practiceAddress" value={state.practiceAddress} onChange={handleChange} /></div>
                </Grid>
                
                <Grid item xs={12} sm={12}  style={gridStyle}>
                    <FormGroup row>
                            <ul style={{listStyle: 'none'}}>
                                <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}> 
                                    <FormControlLabel control={<ScalingBlueCheckbox icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.agreedToMarketingEmail} onChange={handleChange} name="agreedToMarketingEmail" />} label={<Typography style={styles.formControlLabel}>{resources.field_marketingrequest1}</Typography>} /> 
                                </li>
                                <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}> 
                                    <FormControlLabel control={<ScalingBlueCheckbox icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.didNotAgreedToMarketingEmail} onChange={handleChange} name="didNotAgreedToMarketingEmail" />} label={<Typography style={styles.formControlLabel}>{resources.field_marketingrequest2}</Typography>}/>  
                                </li>
                            </ul>
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sm={12}  style={gridStyle}>
                    <div style={{paddingLeft:'0.5rem',opacity: state.opacity }} onClick={recordUserChoice}>
                         <DarkBlueRoundedButton type="submit" buttonText={resources.field_buttonlinks[0].title} to={state.href} />
                    </div>
          
                    {/* <button type="submit">Submit</button> */}
               
                </Grid>

        </Grid>
        </form>
    );
  
}

export default ContactDynamicFormik