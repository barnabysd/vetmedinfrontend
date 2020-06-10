import React from 'react'
import {useRef, useEffect} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
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


/* 

example drupal submit json

{
"contact_form":[{"target_id":"YOUR_FORM_MACHINE_NAME"}],
"uid": [{"target_id": "YOUR_FORM_MACHINE_NAME" }],
"name":[{"value":"SENDER_NAME_VALUE"}],
"mail":[{"value":"SENDER_MAIL_VALUE"}],
"subject":[{"value":"FORM_SUBJECT"}],
"message":[{"value":"FORM_MESSAGE"}]
}

*/

export const InputBorderStyle = styled.div`
  height: 49px;
  width: 435px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid rgb(49, 173, 211);
`; 

export const InputBorderFocusStyle = styled.div`
  height: 49px;
  width: 435px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid rgb(15, 87, 159);
`; 

export const InputBorderGreenStyle = styled.div`
  height: 49px;
  width: 435px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 3px 0px 0px #009975;
  border: 1px solid rgb(0, 153, 117);
`; 

export const InputBorderRedStyle = styled.div`
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

function ResponseForm() {
  const [state, setState] = React.useState({})

const handleSubmit = async (e) => {
    console.log(JSON.stringify(state))
      e.preventDefault()
      const val = await fetch('https://api.formik.com/submit/collect-score/scorecollector', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
      })
      console.log(val)
}

  return (

      <Grid container  
                spacing={0} 
                spacing={0} 
                justify="flex-start" 
                style={gridStyle}>
              
          <Grid item xs={12} sm={4}  style={gridStyle}>
              <form onSubmit={handleSubmit}>
                  
                  <input type="hidden" name="name"  value={state.name} />
              
                 
                  <input type="hidden" name="email" value={state.email} />
              
                  <button type="submit">Resend </button>
              </form>
          </Grid>

      </Grid>
 
  );

}

// const StyledButton = styled(Button)`
//   background-color: #6772e5;
//   &:hover {
//     background-color: #5469d4;
//   }
// `;

const responseGridStyle = { display: 'none' }

const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
    padding-left: 0.5rem;
`

const gridStyle = {
      border: '0px solid red',
      backgroundImage: 'url(some/image)'
}

function ContactDynamicFormik({resources}) {


    const classes = useStyles();

    const [cookies, setCookie, getCookie, removeCookie] = useCookies(['userChoice'])

    const [state, setState] = React.useState({
          checkedIsVet: false,
          checkedIsNotVet: false,
          buttonText: "Continue",
          opacity: "0.6",
          href: "/",
          firstname: "firstName",
          lastname:  "lastName",
          email:  "email",
          score: "20",
          practiceAddress: "practiceAddress",
          agreedToMarketingEmail: false,
          didNotAgreedToMarketingEmail: false
    });

    const scalingCheckBox1 = useRef();
    const scalingCheckBox2 = useRef();

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

     const handleSubmit = async (e) => {
      console.log(JSON.stringify(state))
        e.preventDefault()

      const params = {
          firstname: state.firstName,
          lastname:  state.lastName,
          email:  state.email,
          score: (1 * state.score),
          practiceAddress: state.practiceAddress,
          agreedToMarketingEmail: (state.agreedToMarketingEmail) ? 'true':'false'
      };
      
      const formData = new FormData();
      
      for (var k in params) {
          formData.append(k, params[k]);
      }
      
      // let request = {
      //     method: 'POST',
      //     headers: headers,
      //     body: formData
      // };

        const isSendingJson = true
        const body = (isSendingJson) ?  JSON.stringify(params) : formData 
        const headers = (isSendingJson) ? { "Content-Type": "application/json" } : { "Content-Type": 'multipart/form-data' } 

        console.log(body)

        // https://api.formik.com/submit/collect-score/scorecollector
        // http://pdfgenerate-vetm-admin.pantheonsite.io/api/save-form-submission?_format=json

        // http://pdfgenerate-vetm-admin.pantheonsite.io/api/save-form-submission?_format=json

        const val = await fetch('https://dev-vetm-admin.pantheonsite.io/api/save-form-submission?_format=json', { // http://dev-vetm-admin.pantheonsite.io/api/save-form-submission?_format=json', {
            method: 'POST',
            headers: headers,
            body: body,
        })

        console.log(val)
        // window.alert("" + ((val && val.complete) ? JSON.stringify(val) : ('error - no complete key ' + JSON.stringify(val) )))
  }

    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <Grid container  
            spacing={0} 
            spacing={0} 
            justify="flex-start" 
            style={gridStyle}>
                
                <Grid item xs={12} sm={6}  style={gridStyle}>
                    <div style={{paddingLeft: '0.5rem'}}><label htmlFor="name">{resources.formFirstName}</label> </div>
                    {/* <input type="text" name="name" value={state.name} onChange={handleChange} /> */}
                    <div><TextField id="outlined-firstname" label={resources.formFirstName} placeholder={resources.formFirstNamePlaceHolder} type="text" variant="outlined" type="text" name="firstName" value={state.firstName} onChange={handleChange} /> </div>
                </Grid>
                <Grid item xs={12} sm={6}  style={gridStyle}>
                    <div style={{paddingLeft: '0.5rem'}}><label htmlFor="lastName">{resources.formLastName}</label> </div>
                    <TextField id="outlined-lastname" label={resources.formLastName} placeholder={resources.formLastNamePlaceHolder} type="text" variant="outlined" type="text" name="lastName" value={state.lastName} onChange={handleChange} />
                 </Grid>
                 <Grid item xs={12} sm={6}  style={gridStyle}>   
                    <div style={{paddingLeft: '0.5rem'}}><label htmlFor="email">{resources.formEmail}</label> </div>
                    {/* <input type="text" name="email" value={state.email} onChange={handleChange} /> */}
                    <div><TextField id="outline-email" label={resources.formEmail} placeholder={resources.formEmailPlaceHolder} type="text" variant="outlined" type="text" name="email" value={state.email} onChange={handleChange} /></div>
                </Grid>
                <Grid item xs={12} sm={6}  style={gridStyle}>
                    <div style={{paddingLeft: '0.5rem'}}><label htmlFor="formPracticeAddress">{resources.formPracticeAddress}</label></div>
                    <div><TextField id="outlined-lastname" label={resources.formPracticeAddress} placeholder={resources.formPracticeAddressPlaceHolder} type="text" variant="outlined" type="text" name="formPracticeAddress" value={state.formPracticeAddress} onChange={handleChange} /></div>
                </Grid>
                
                <Grid item xs={12} sm={12}  style={gridStyle}>
                    <FormGroup row>
                            <ul style={{listStyle: 'none'}}>
                                <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}> 
                                    <FormControlLabel control={<ScalingBlueCheckbox icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.agreedToMarketingEmail} onChange={handleChange} name="agreedToMarketingEmail" />} label={<Typography style={styles.formControlLabel}>{resources.marketingRequest1}</Typography>} /> 
                                </li>
                                <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}> 
                                    <FormControlLabel control={<ScalingBlueCheckbox icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.didNotAgreedToMarketingEmail} onChange={handleChange} name="didNotAgreedToMarketingEmail" />} label={<Typography style={styles.formControlLabel}>{resources.marketingRequest2}</Typography>}/>  
                                </li>
                            </ul>
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sm={12}  style={gridStyle}>
                    <div style={{paddingLeft:'0.5rem',opacity: state.opacity }} onClick={recordUserChoice}>
                         <DarkBlueRoundedButton type="submit" buttonText={resources.buttonLinks[0].title} to={state.href} />
                    </div>
          
                    {/* <button type="submit">Submit</button> */}
               
                </Grid>

        </Grid>
        </form>
    );
  
}

class CertificateRequest extends React.Component {
  render() {
    const resourcesAr = get(this, 'props.data.allCertificateRequestJson.nodes')
    const resources = resourcesAr[0]
    const resourcesResponseAr = [{headerText:"test",bodyText:"ttt",footerHtml:"<p>dgfgfd</p>"}] //get(this, 'props.data.allCertificateResponseJson.nodes')
    const resourcesResponse = resourcesResponseAr[0]
    console.log(resources)
    //console.log(resources.allResourcesJson)

    const footerHtml = { __html: resources.footerText }

    return (
        <Layout>
          
          <SlideDrawer />

          <Grid container  
              spacing={0} 
              spacing={0} 
              justify="flex-start" 
              style={gridStyle}>
              <Grid item xs={12} sm={12} style={gridStyle}>
                 <div style={{height: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                 <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={8} style={gridStyle}>
                  <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{resources.headerText}</StyledTypography>
                        <StyledTypography variant="body1">{resources.bodyText}</StyledTypography>
                   </ThemeProvider>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                 <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                  <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={8}  style={gridStyle}>

                 <ContactDynamicFormik resources={resources} />
                 <ThemeProvider theme={theme}>
                        <StyledTypography variant="caption">  <div style={{width:'100%',fontSize:'0.75rem', paddingLeft:'0.5rem'}} dangerouslySetInnerHTML={footerHtml}></div></StyledTypography>
                   </ThemeProvider>

              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                  <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={12}  style={gridStyle}>
                  <div style={{height: '100px'}}>
                 
                  </div>
              </Grid>
          </Grid>

           {/* response */}

           <Grid container  
              spacing={0} 
              spacing={0} 
              justify="flex-start" 
              style={{responseGridStyle}}>
              <Grid item xs={12} sm={12} style={gridStyle}>
                 <div style={{height: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                 <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={8} style={gridStyle}>
                  <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{resourcesResponse.headerText}</StyledTypography>
                        <StyledTypography variant="body1">{resourcesResponse.bodyText}</StyledTypography>
                   </ThemeProvider>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                 <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                  <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={8}  style={gridStyle}>

                 <ResponseForm />

              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                  <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={12}  style={gridStyle}>
                  <div style={{height: '100px'}}></div>
              </Grid>
          </Grid>


        </Layout>
    )
  }
}

export default CertificateRequest

export const pageQuery = graphql`{
  allCertificateRequestJson {
    nodes {
      additionalBodyText
      bodyText
      footerText
      formEmail
      formEmailPlaceHolder
      formFirstName
      formFirstNamePlaceHolder
      formLastName
      formLastNamePlaceHolder
      formPracticeAddress
      formPracticeAddressPlaceholder
      headerText
      marketingRequest1
      marketingRequest2
      buttonLinks {
        title
        url
      }
    }
  }
  allCertificateResponseJson {
    nodes {
        headerText
        bodyText
    }
  }
}`