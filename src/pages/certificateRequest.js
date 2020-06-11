import React from 'react'
import {useRef, useEffect} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
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


import {
  EmailShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  ShareCounts,
  LinkedinShareCount,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon
} from 'react-share';

const urlBase = 'http://dev-vetm-admin.pantheonsite.io' //'http://dev-vetm-admin.pantheonsite.io'

// https://api.formik.com/submit/collect-score/scorecollector
// http://pdfgenerate-vetm-admin.pantheonsite.io/api/save-form-submission?_format=json
// http://pdfgenerate-vetm-admin.pantheonsite.io/api/save-form-submission?_format=json


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



const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
    padding-left: 0.5rem;
`

const gridStyle = {
      border: '0px solid red',
      backgroundImage: 'url(some/image)'
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
                    <div style={{paddingLeft: '0.5rem'}}><label htmlFor="practiceAddress">{resources.formPracticeAddress}</label></div>
                    <div><TextField id="outlined-lastname" label={resources.formPracticeAddress} placeholder={resources.formPracticeAddressPlaceHolder} type="text" variant="outlined" type="text" name="practiceAddress" value={state.practiceAddress} onChange={handleChange} /></div>
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

function CertificateRequest({data}) {

    const resourcesAr = get(data, 'allCertificateRequestJson.nodes')
    const resources = resourcesAr[0]
    const resourcesResponseAr = [{headerText:"test",bodyText:"ttt",footerHtml:"<p>dgfgfd</p>"}] //get(this, 'props.data.allCertificateResponseJson.nodes')
    const resourcesResponse = resourcesResponseAr[0]
    console.log(resources)
    //console.log(resources.allResourcesJson)

    const [state, setState] = React.useState({
      checkedIsVet: false,
      checkedIsNotVet: false,
      buttonText: "Continue",
      opacity: "0.6",
      href: "/",
      firstname: "",
      lastname:  "",
      email:  "",
      score: "20",
      practiceAddress: "",
      agreedToMarketingEmail: false,
      didNotAgreedToMarketingEmail: false,
      cid: '',
      responseFormVisible: false
    });

    const [cookies, setCookie, getCookie, removeCookie] = useCookies(['userChoice'])

      
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


    const responseGridStyle = {  
        display: (state.responseFormVisible) ? 'flex' : 'none'
    }
    const requestGridStyle =  { 
        display: (state.responseFormVisible) ? 'none' : 'flex',
        border: '0px solid red',
        backgroundImage: 'url(some/image)'
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
                agreedToMarketingEmail: (state.agreedToMarketingEmail) ? '1':'0'
          };

          const formData = new FormData();

          for (var k in params) {
            formData.append(k, params[k]);
          }

          const isSendingJson = true
          const body = (isSendingJson) ?  JSON.stringify(params) : formData 
          const headers = (isSendingJson) ? { "Content-Type": "application/json" } : { "Content-Type": 'multipart/form-data' } 

          console.log(body)

          // SEE RESULTS _ http://dev-vetm-admin.pantheonsite.io/admin/reports/certificate-manager

          // RESEND - http://dev-vetm-admin.pantheonsite.io/admin/api/resend-certificate?_format=json

          const resendUrl = urlBase + '/api/resend-certificate?_format=json'

          const formSubmissionUrl = urlBase + '/api/save-form-submission?_format=json'

          
          
          try {
              fetch( formSubmissionUrl, { 
                  method: 'POST',
                  headers: headers,
                  body: body
              }).then(function(response) {
                  console.log("LOG POST")
                  console.log(response)
                  if (!response) {
                    return { "error" : "no response"}
                  }
                  return response.json();
              }).then(function(data) {
                  // `data` is the parsed version of the JSON returned from the above endpoint.
                  console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                  if (data) {
                    const valDecoded = data
                    if (valDecoded) {
                        if (valDecoded.cid) {
                            console.log('CID - ' + valDecoded.cid )
                            if (window) {window.alert('Sent - CID - ' + valDecoded.cid)}
                            setState({ ...state, cid: valDecoded.cid, responseFormVisible: true })
                        } else {
                          console.log('error 1 - ' + valDecoded )
                          if (window) {window.alert('error 1 -' + JSON.stringify(data))}
                        }
                    } else {
                      console.log('error 2 - ' + JSON.stringify(data) )
                      if (window) {window.alert('error 2 -' + JSON.stringify(data))}
                    }
                } else {
                    console.log('error 0 - ' + JSON.stringify(data) )
                    if (window) {window.alert('error 0 -' + JSON.stringify(data))}
                }
              })
          } catch(e) {
                console.log("LOG POST ERROR")
                
                console.log(e)
                if (window) {window.alert('error - unknown -' + JSON.stringify(data))}
          }
      

    }

    let cid = 0

    const handleReSubmit = async (e) => {
          console.log(JSON.stringify(state))
          e.preventDefault()

          const params = {
              cid: state.cid,
          };
          
          const formData = new FormData();
          
          for (var k in params) {
              formData.append(k, params[k]);
          }


        const isSendingJson = true
        const body = (isSendingJson) ?  JSON.stringify(params) : formData 
        const headers = (isSendingJson) ? { "Content-Type": "application/json" } : { "Content-Type": 'multipart/form-data' } 

        console.log(body)

        // SEE RESULTS _ http://dev-vetm-admin.pantheonsite.io/admin/reports/certificate-manager

        const resendUrl = urlBase + '/api/resend-certificate?_format=json'

        try {
              fetch( resendUrl, { 
                  method: 'POST',
                  headers: headers,
                  body: body
              }).then(function(response) {
                  console.log("LOG POST")
                  console.log(response)
                  if (!response) {
                    return { "error" : "no response"}
                  }
                  return response.json();
              }).then(function(data) {
                  // `data` is the parsed version of the JSON returned from the above endpoint.
                  console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                  if (data) {
                    const valDecoded = data
                    if (valDecoded) {
                        if (valDecoded.complete) {
                            console.log('complete - ' + valDecoded.complete )
                            if (window) {window.alert('Sent - complete - ' + valDecoded.complete)}
                            
                        } else {
                          console.log('error 1 - ' + valDecoded )
                          if (window) {window.alert('error 1 -' + JSON.stringify(data))}
                        }
                    } else {
                      console.log('error 2 - ' + JSON.stringify(data) )
                      if (window) {window.alert('error 2 -' + JSON.stringify(data))}
                    }
                } else {
                    console.log('error 0 - ' + JSON.stringify(data) )
                    if (window) {window.alert('error 0 -' + JSON.stringify(data))}
                }
              })
          } catch(e) {
                console.log("LOG POST ERROR")
                
                console.log(e)
                if (window) {window.alert('error - unknown -' + JSON.stringify(data))}
          }
          // window.alert("" + ((val && val.complete) ? JSON.stringify(val) : ('error - no complete key ' + JSON.stringify(val) )))
    }

    const footerHtml = { __html: resources.footerText }

    const gridRequestRef = useRef()
    const gridResponseRef = useRef()

   const Congratulations = styled.div`
  font-size: 4.133333333333334rem;
  line-height: 1.27;
  text-align: left;
  letter-spacing: -0.62px;
  color: ${theme.palette.deminBlue.main};
  font-family: Oswald;
  font-weight: 600;
  height: 92px;
 
`; 

 const YouveGotYourCertificate = styled.div`
  font-size: 1.6666666666666667rem;
  line-height: 1.4;
  text-align: left;
  letter-spacing: -0.25px;
  color: ${theme.palette.midnightBlue.main};
  font-family: Poppins;
  font-weight: 600;
  height: 35px;
 
`; 

 const ResendCertificate = styled.span`
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
  letter-spacing: -0.15px;
  color: ${theme.palette.midnightBlue.main};
  font-family: Poppins;
  font-weight: 600;
  height: 21px;
  
`; 

 const ShareThisActivityWithYourColleagues = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
  letter-spacing: -0.15px;
  color: ${theme.palette.midnightBlue.main};
  font-family: Poppins;
  font-weight: 600;
  height: 21px;
 
`; 


 const LinkedIn = styled.div`
  height: 46px;
  width: 46.74px;
  background-color: ${theme.palette.peachCobbler.main};
`; 

 const Facebook = styled.div`
  height: 46px;
  width: 46px;
  background-color: ${theme.palette.peachCobbler.main};
`; 

 const Email = styled.div`
  height: 46px;
  width: 46px;
  background-color: ${theme.palette.peachCobbler.main};
`;

 const BRBox = styled.div`
  height: 165px;
  width: 424px;
  background-color: ${theme.palette.white.main};
  opacity: 0.697609007358551;
`; 

 const BRBoxText = styled.div`{
  width: 22.75rem;
  height: 2.813rem;
  font-family: Poppins;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: $midnight-blue;
}
`

 const ButtonCallDog = styled.a`
  height: 49px;
  width: 222px;
  background-color: ${theme.palette.midnightBlue.main};
  border-radius: 25px;
`; 


const location = {shareUrl:"http://www.bbc.co.uk"}
  const imageData = ''
  // useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  const post = {
      frontmatter:
      {
          image: imageData.placeholderImage
      },
      title:"test",
      summary:"tbfgffdfggdfg",
      date:"20-10-2020",
      html: "<p>Helloooooo</p>"
 }
  const shareUrl = location.pathname
  const title = post.frontmatter.title
  const source = "http://www.bbc.co.uk"
  const summary = "ddfgdfgdg"
  const url ="http://www.bbc.co.uk"

    return (
        <Layout>
          
          <SlideDrawer />

          <Grid container  
              spacing={0} 
              spacing={0} 
              justify="flex-start" 
              ref={gridRequestRef}
              style={requestGridStyle}>
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

                 <ContactDynamicFormik requestGridStyle={requestGridStyle} resources={resources} formHandler={handleSubmit} state={state} setState={setState} recordUserChoice={recordUserChoice}/>
               
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
              ref={gridResponseRef}
              justify="flex-start" 
              style={{responseGridStyle}}>
              <Grid item xs={12} sm={12} style={gridStyle}>
                   <div style={{height: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                   <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={8} style={gridStyle}>
                  <Congratulations>Congratulations</Congratulations>
                  <div>&nbsp;</div>
                 
                  <YouveGotYourCertificate>You’ve got your certificate.</YouveGotYourCertificate>
                  <div>&nbsp;</div>
                  <form className={classes.root} onSubmit={handleReSubmit}>
                    <input type="hidden" name="cid" value={cid}></input>
                    <button type="submit"><ResendCertificate>Resend certificate</ResendCertificate> </button>
                  </form>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <ShareThisActivityWithYourColleagues>Share this activity with your colleagues</ShareThisActivityWithYourColleagues>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <LinkedIn>

                    <LinkedinShareButton
url={url}
                summary={summary}
                title={title}
                source={source}
                windowWidth={750}
                windowHeight={600}
                className="button">
                <LinkedinIcon
                  size={32}
                  round={false} />
              </LinkedinShareButton>
                   

           
                    
                    </LinkedIn>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Facebook>

                    <FacebookShareButton
url={url}
                summary={summary}
                title={title}
                source={source}
                windowWidth={750}
                windowHeight={600}
                className="button">
                <FacebookIcon
                  size={32}
                  round={false} />
              </FacebookShareButton>
                      
                    </Facebook>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Email>

              <EmailShareButton
              url={shareUrl}
              subject={title}
              body="body"
              className="button">
              <EmailIcon
                size={32}
                round={false} />
              </EmailShareButton>

              </Email>
                  </div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                
                  <BRBox>
                        <BRBoxText>Boost your skills further by using our other online learning materials in the <a href="#"><strong>Boehringer Academy</strong></a></BRBoxText> 
                  </BRBox>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>

               <ButtonCallDog />
                  
                  
                  {/* <ThemeProvider theme={theme}>
                  
                        <StyledTypography variant="h1">{resourcesResponse.headerText}</StyledTypography>
                        <StyledTypography variant="body1">{resourcesResponse.bodyText}</StyledTypography>
                   </ThemeProvider> */}
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                   <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                   <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={8}  style={gridStyle}>

                 {/* <ResponseForm /> */}
                 
                

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

/*
allNodeCertificaterequest {
    nodes {
      field_formemail
      field_formemailplaceholder
      field_formfirstname
      field_formfirstnameplaceholder
      field_formlastname
      field_formlastnameplaceholder
      field_formpracticeaddress
      field_formpracticeaddressplaceho
      field_marketingrequest1
      field_headertext
      field_marketingrequest2
      drupal_id
      changed(fromNow: false)
      path {
        langcode
      }
      field_footertext {
        processed
      }
      field_buttonlinks {
        title
        uri
      }
      field_bodytext {
        processed
      }
      field_additionalbodytext {
        processed
      }
    }
  }
  */

//  function ResponseForm(data) {
  

//   const handleSubmit = async (e) => {
//       console.log(JSON.stringify(data))
//         e.preventDefault()
//         const val = await fetch('https://api.formik.com/submit/collect-score/scorecollector', {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//         })
//         console.log(val)
//   }
  
//     return (
  
//         <Grid container  
//                   spacing={0} 
//                   spacing={0} 
//                   justify="flex-start" 
//                   style={gridStyle}>
                
//             <Grid item xs={12} sm={4}  style={gridStyle}>
//                 <form onSubmit={handleSubmit}>
                    
//                     <input type="hidden" name="name"  value={data.name} />
                
                   
//                     <input type="hidden" name="email" value={data.email} />
                
//                     <button type="submit">Resend </button>
//                 </form>
//             </Grid>
  
//         </Grid>
   
//     );
  
//   }
  
  // const StyledButton = styled(Button)`
  //   background-color: #6772e5;
  //   &:hover {
  //     background-color: #5469d4;
  //   }
  // `;
  