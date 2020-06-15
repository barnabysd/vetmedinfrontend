import React from 'react'
import {useRef, useEffect} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'

import { useStaticQuery, graphql } from 'gatsby'
import { createMuiTheme, responsiveFontSizes, createStyles } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';

import styled from 'styled-components'
import SlideDrawer from '../components/SideDrawer'
import Grid from '@material-ui/core/Grid'
// import ScalingBlueCheckbox from '../components/ScalingCheckBox'
import useLocalStorage from '../utils/localStorageHelper'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Icon from '@material-ui/core/Icon';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DarkBlueRoundedButton from '../components/DarkBlueRoundedButton'
import { useCookies } from 'react-cookie'

import rosetteSvg from '../images/certificate/rosette1.svg'
import brLogoSvg from '../images/certificate/boehringer_academy_logo.svg'

import WebsiteLink, {buttonStyleType} from '../components/WebsiteLink'

import confetti from '../utils/animationConfetti'

import ContactDynamicFormik from '../components/ContactDynamicFormik'

import SocialMediaWidgets from '../components/SocialMediaWidgets'

import {processHtml, removeParagraphsTags, processInternalLink } from '../utils/displayUtils'
import theme, { sm, md, lg, xl } from '../theme'

const debug = false

const urlBase = 'http://dev-vetm-admin.pantheonsite.io' //'http://dev-vetm-admin.pantheonsite.io'

// https://api.formik.com/submit/collect-score/scorecollector
// http://pdfgenerate-vetm-admin.pantheonsite.io/api/save-form-submission?_format=json
// http://pdfgenerate-vetm-admin.pantheonsite.io/api/save-form-submission?_format=json


const classes = makeStyles({
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  }
});



// const Rosette = (({...other}) => {
//     const {id } = { ...other }
//      return <img id="rosette" src={rosetteSvg} style={{position:'relative', width: '450px',height:'450px',margin:'auto',textCenter:'center',display: 'flex',justifyContent: 'center'}} />
// })



const BRLogo = styled.img.attrs((props) => ({ id: props.id, src: props.src}))`
    position:relative;
    width:450px;
    height:2.65rem;
    margin:auto;
    text-align:left;
    display:flex;
    justify-content:flex-start;

    @media (max-width: ${lg}px) {
     
    }
 
    @media (max-width: ${md}px) {
    
    }
    @media (max-width: ${sm}px) {
   
     
  }
`

const Rosette = styled.img.attrs((props) => ({ id: props.id, src: props.src}))`
    position:relative;
    width:450px;
    height:450px;
    margin:auto;
    text-align:center;
    display:flex;
    justify-content:center;

    @media (max-width: ${lg}px) {
        height:500px;
        margin-top:0px; 
    }
 
    @media (max-width: ${md}px) {
        height:280px;
        margin-top:0px; 
    }
    @media (max-width: ${sm}px) {
        height:280px;
       
  }
`

const CircleBackground = styled.div`
    position: fixed;
    left: -500px;
    top: -500px;
    width: 1000px;
    height: 2000px;
    background: #0B2374;
    z-index: 0;
    -moz-border-radius: 50%; 
    -webkit-border-radius: 50%; 
    border-radius: 50%; 
    @media (max-width: ${xl}px) {
         left: -550px;
    }
    @media (max-width: ${lg}px) {
        left: -650px;
    }
    @media (max-width: ${md}px) {
        display:none;
    }
`
const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
    padding-left: 0.5rem;
`
const Congratulations = styled.div`
    font-size: 3.8rem;
    line-height: 1.27;
    text-align: left;
    letter-spacing: -0.62px;
    color: ${theme.palette.deminBlue.main};
    font-family: Oswald;
    font-weight: 600;
    height: 92px;
    @media (max-width: ${lg}px) {
      font-size: 2.5rem;
    }
    @media (max-width: ${md}px) {
      font-size: 2rem;
    }
    @media (max-width: ${sm}px) {
      font-size: 2rem;
      text-align: left;
      padding-left: 0rem;
      padding-right: 0rem;
      width: 100%;
    }
`; 

const YouveGotYourCertificate = styled.div`
    margin-top: -1rem;
    font-size: 1.6666666666666667rem;
    line-height: 1.4;
    text-align: left;
    letter-spacing: -0.25px;
    color: ${theme.palette.midnightBlue.main};
    font-family: Poppins;
    font-weight: 600;
    height: 35px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    @media (max-width: ${md}px) {
      font-size: 1rem;
    }
    @media (max-width: ${sm}px) {
      font-size: 1rem;
      
      text-align: left;
      padding-left: 0rem;
      padding-right: 0rem;
      width: 100%;
    }

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
    @media (max-width: ${sm}px) {
     
      text-align: left;
      padding-left: 0rem;
      padding-right: 0rem;
      width: 100%;
    }

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
    padding-bottom: 2rem;
    @media (max-width: ${sm}px) {
   
      text-align: left;
      padding-left: 0rem;
      padding-right: 0rem;
      width: 100%;
    }

`; 

const BRBox = styled.div`
    height: 165px;
    width: 424px;
    background-color: ${theme.palette.white.main};
    opacity: 0.697609007358551;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-top: 0.25rem;

    @media (max-width: ${sm}px) {
   
      text-align: left;
      width: 100%;
    }
`; 

const BRBoxText = styled.div`
    
   
    font-family: Poppins;
    font-size: 0.938rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: ${theme.palette.midnightBlue.main} !important;

    & strong a {
     
      color: ${theme.palette.midnightBlue.main} !important;
    }
    & a {
   
      color: ${theme.palette.midnightBlue.main} !important;
    }
    & a:hover {
     
      color: ${theme.palette.peachCobbler.main};
    }

`

const ButtonCallDog = styled.a`
    height: 49px;
   
    background-color: ${theme.palette.midnightBlue.main};
    border-radius: 25px;
    @media (max-width: ${sm}px) {
   
      text-align: left;
      padding-left: 0rem;
      padding-right: 0rem;
      width: 100%;
    }
`; 

const RosetteAnimCanvas = styled.canvas`
    position: fixed;
    left:0px;
    top:0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    z-index: 2;
    
`

 const CpdPoints = styled.div`
      font-size: 3.1333333333333333rem;
      line-height: 1.15;
      text-align: left;
      letter-spacing: -0.47px;
      color: ${theme.palette.midnightBlue.main};
      font-family: Oswald;
      font-weight: 600;
      height: 70px;
      @media (max-width: ${lg}px) {
        font-size: 2.5rem;
      }
      @media (max-width: ${md}px) {
        font-size: 2rem;
      }
      @media (max-width: ${sm}px) {
        margin-top:-20px; 
        font-size: 2rem;
        text-align: left;
        padding-left: 0rem;
        padding-right: 0rem;
        width: 100%;
      }
`; 

const RememberToGetYourCertificate = styled.div`
      font-size: 1.2rem;
      line-height: 1.4;
      text-align: left;
      letter-spacing: -0.18px;
      color: ${theme.palette.midnightBlue.main};
      font-family: Poppins;
      font-weight: 600;
      height: 25px;
      @media (max-width: ${sm}px) {
        margin-top:-50px; 
        text-align: left;
        padding-left: 0rem;
        padding-right: 0rem;
        width: 100%;
      }
`; 

const LinkedIn = styled.div`
      height: 46px;
      width: 46.74px;
      text-align:center;
      display:flex;
      justify-content:center;
      border-top-left-radius: 0;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: ${theme.palette.peachCobbler.main};
`; 

const Facebook = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    height: 46px;
    width: 46px;
    border-top-left-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${theme.palette.peachCobbler.main};
`; 

const Email = styled.div`
    height: 46px;
    width: 46px;
    text-align:center;
    display:flex;
    justify-content:center;
    border-top-left-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${theme.palette.peachCobbler.main};
`;

const gridStyle = {
    border: '0px solid red'
}

const YouHaveEarned20CpdPointsRequest = styled.div`
    padding-left:0.5rem;
    font-size: 1.6666666666666667rem;
    line-height: 1.4;
    text-align: left;
    letter-spacing: -0.25px;
    color: ${theme.palette.midnightBlue.main};
    font-family: Poppins;
    font-weight: 600;
  
    width: 100%;
`; 

const FormBodyText = `
    width: 100%;
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
`

const RequestHeader = styled.div`
   padding-left:0.5rem;
    font-size: 3.1333333333333333rem;
    line-height: 1.15;
    text-align: left;
    letter-spacing: -0.47px;
    color: ${theme.palette.midnightBlue.main};
    font-family: Oswald;
    font-weight: 600;
    height: 70px;
    width: 506px;
`; 

const IfYouHavenReceived = styled.div`
  padding-left:0.5rem;
  font-family: Poppins;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: $midnight-blue;
  & > strong {
    font-weight: 600;
  }
  & > a {
    font-weight: 600;
    color: ${theme.palette.midnightBlue.main} !important;
    text-decoration: none;
  }
`

function CertificateRequest({data}) {
    const resourcesCongrats = get(data, 'nodeCongratulations')
   
    const resourcesRequest = get(data, 'nodeCertificaterequest')
    //const resourcesRequest = resourcesAr[0]
    const resourcesResponse = get(data, 'nodeCertificateresponse') 

    //[{headerText:"test",bodyText:"ttt",footerHtml:"<p>dgfgfd</p>"}] //get(this, 'props.data.allCertificateResponseJson.nodes')
    //const resourcesResponse = resourcesResponseAr[0]
    //console.log(resources)
    //console.log(resources.allResourcesJson)

    const [state, setState] = React.useState({
      checkedIsVet: false,
      checkedIsNotVet: false,
      buttonText: "Continue",
      opacity: "1",
      href: "/",
      firstname: "",
      lastname:  "",
      email:  "",
      score: "20",
      practiceAddress: "",
      agreedToMarketingEmail: false,
      didNotAgreedToMarketingEmail: false,
      cid: '',
      responseFormVisible: false,
      stage: 0,
      helperText1: '', 
      error1: false,
      hasInput1: false,
      helperText2: '', 
      error2: false,
      hasInput2: false,
      helperText3: '', 
      error3: false,
      hasInput3: false,
      helperText4: '', 
      error4: false,
      hasInput4: false
    });

    const [cookies, setCookie, getCookie, removeCookie] = useCookies(['userChoice'])

    const [userUserChoice, setUserChoice ] = useLocalStorage('userChoice', '')

    function showStage(event) {
          event.preventDefault()
          console.log(state)
          gridCongratsRef.current.style.display = 'none'
          gridRequestRef.current.style.display = 'flex'
          gridResponseRef.current.style.display = 'none'
          state.stage = 1
    }

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


    let responseGridStyle = {  
        display: (state.stage === 2) ? 'flex' : 'none'
    }
    let requestGridStyle =  { 
        display: (state.stage === 1) ? 'flex' : 'none'
    }
    let congratsGridStyle = { 
        display: (state.stage === 0) ? 'flex' : 'none'
    }

    useEffect(() => {
        switch (state.stage){
          case 0:
               confetti()
               break;
          case 1:
              break;
          default:
              break;
        }
    })

    function moveToResponseDebug(event) {
        event.preventDefault()
        console.log(state)
        gridCongratsRef.current.style.display = 'none'
        gridRequestRef.current.style.display = 'none'
        gridResponseRef.current.style.display = 'flex'
        state.stage = 2
    }

    const handleSubmit = async (e) => {
          console.log(JSON.stringify(state))
          e.preventDefault()

          const agreedToMarketingEmail = (state.agreedToMarketingEmail) ? (state.didNotAgreedToMarketingEmail) ? '0':'1':'0'

          const params = {
                firstname: state.firstName,
                lastname:  state.lastName,
                email:  state.email,
                score: (1 * state.score),
                practiceAddress: state.practiceAddress,
                agreedToMarketingEmail: agreedToMarketingEmail
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
                  console.log(data);  
                  if (data) {
                    const valDecoded = data
                    if (valDecoded) {
                        if (valDecoded.cid) {
                            console.log('CID - ' + valDecoded.cid )
                            if (window && debug) {window.alert('Sent - CID - ' + valDecoded.cid)}
                            setState({ ...state, cid: valDecoded.cid, stage: 2 })
                        } else {
                          console.log('error 1 - ' + valDecoded )
                          if (window && debug) {window.alert('error 1 -' + JSON.stringify(data))}
                        }
                    } else {
                      console.log('error 2 - ' + JSON.stringify(data) )
                      if (window && debug) {window.alert('error 2 -' + JSON.stringify(data))}
                    }
                } else {
                    console.log('error 0 - ' + JSON.stringify(data) )
                    if (window && debug) {window.alert('error 0 -' + JSON.stringify(data))}
                }
              })
          } catch(e) {
                console.log("LOG POST ERROR")
                
                console.log(e)
                if (window && debug) {window.alert('error - unknown -' + JSON.stringify(data))}
          }
    }

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
                  console.log(data);  
                  if (data) {
                    const valDecoded = data
                    if (valDecoded) {
                        if (valDecoded.complete) {
                            console.log('complete - ' + valDecoded.complete )
                            if (window && debug) {window.alert('Sent - complete - ' + valDecoded.complete)}
                            
                        } else {
                          console.log('error 1 - ' + valDecoded )
                          if (window && debug) {window.alert('error 1 -' + JSON.stringify(data))}
                        }
                    } else {
                      console.log('error 2 - ' + JSON.stringify(data) )
                      if (window && debug) {window.alert('error 2 -' + JSON.stringify(data))}
                    }
                } else {
                    console.log('error 0 - ' + JSON.stringify(data) )
                    if (window && debug) {window.alert('error 0 -' + JSON.stringify(data))}
                }
              })
          } catch(e) {
                console.log("LOG POST ERROR")
                
                console.log(e)
                if (window && debug) {window.alert('error - unknown -' + JSON.stringify(data))}
          }
          // window.alert("" + ((val && val.complete) ? JSON.stringify(val) : ('error - no complete key ' + JSON.stringify(val) )))
    }

    const footerHtml = { __html: removeParagraphsTags(resourcesRequest.field_footertext.processed) }

    const underLogoTextHtml = { __html: removeParagraphsTags(resourcesResponse.field_underlogotext.processed) }

    const gridRequestRef = useRef()
    const gridResponseRef = useRef()
    const gridCongratsRef = useRef()

    // const resourcesCongrats = {}
    // resourcesCongrats.field_headertext = 'Congratulations'

    // const resourcesRequest = {}
    // resourcesRequest.field_headertext = 'Congratulations'
    // resourcesRequest.field_bodytext = 'Congratulations'
    // // resourcesRequest.field_headertext = 'Congratulations'
    // // resourcesRequest.field_headertext = 'Congratulations'
    // // resourcesRequest.field_headertext = 'Congratulations'
    // // resourcesRequest.field_headertext = 'Congratulations'
    // // resourcesRequest.field_headertext = 'Congratulations'

    // const resourcesResponse = {}
    // resourcesResponse.field_headertext = 'Congratulations'
    // resourcesResponse.field_bodytext = 'You’ve got your certificate.'
    // resourcesResponse.field_headertext = 'Congratulations'
    // resourcesResponse.field_headertext = 'Congratulations'
    // resourcesResponse.field_headertext = 'Congratulations'
    // resourcesResponse.field_headertext = 'Congratulations'
    // resourcesResponse.field_headertext = 'Congratulations'

    return (
        <Layout>
          
          <SlideDrawer />

          {/* Congrats */}

          <Grid container  
              spacing={0} 
              spacing={0} 
              ref={gridCongratsRef}
              justify="flex-start" 
              style={congratsGridStyle}>
              <Grid item xs={12} sm={12} style={gridStyle}>
                   <div style={{height: '100px'}}></div>
                   <CircleBackground />
              </Grid>
              <Grid item xs={12} sm={6}  style={gridStyle}>
                 
                   <Rosette src={rosetteSvg} id={"rosette"} />
                   <RosetteAnimCanvas id="canvas"></RosetteAnimCanvas>
                
              </Grid>
              <Grid item xs={12} sm={4} style={gridStyle}>
                  <Congratulations>{processHtml(resourcesCongrats.field_headertext)}</Congratulations>
                  <div>&nbsp;</div>
                  <YouveGotYourCertificate>{processHtml(resourcesCongrats.field_bodytext.processed)}</YouveGotYourCertificate>
                  <div>&nbsp;</div>
                  <CpdPoints>{processHtml((resourcesCongrats.field_pointsawarded) ? (resourcesCongrats.field_pointsawarded.processed) : "20 CPD points")}</CpdPoints>
                  <div>&nbsp;</div>
                  <RememberToGetYourCertificate>{processHtml(resourcesCongrats.field_remindertext)}</RememberToGetYourCertificate>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <WebsiteLink onClick={showStage} typeOfButton={buttonStyleType.DARK_BLUE_BUTTON_CORNER} style={{width:'254px'}}>{resourcesCongrats.field_buttonlinks[0].title}</WebsiteLink>
                  
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                   <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                   <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={8}  style={gridStyle}>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                  <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={12}  style={gridStyle}>
                  <div style={{height: '100px'}}></div>
              </Grid>
          </Grid>

          {/* Request */}

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
                        <StyledTypography variant="h1">{resourcesRequest.field_headertext}</StyledTypography>
                        {/* <StyledTypography variant="body1">{removeParagraphsTags(resourcesRequest.field_bodytext.processed)}</StyledTypography> */}
                   </ThemeProvider>
                   <YouHaveEarned20CpdPointsRequest>{removeParagraphsTags(resourcesRequest.field_bodytext.processed)}</YouHaveEarned20CpdPointsRequest>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                 <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                  <div style={{width: '100px'}}></div>
              </Grid>

              <Grid item xs={12} sm={8}  style={gridStyle}>

                 <ContactDynamicFormik requestGridStyle={gridStyle} resources={resourcesRequest} moveToResponseDebug={moveToResponseDebug} formHandler={handleSubmit} state={state} setState={setState} recordUserChoice={recordUserChoice}/>
               
                 <IfYouHavenReceived dangerouslySetInnerHTML={ footerHtml }></IfYouHavenReceived>
                 
                 {/* <ThemeProvider theme={theme}>
                      <StyledTypography variant="caption">  <div style={{width:'100%',fontSize:'0.75rem', paddingLeft:'0.5rem'}} dangerouslySetInnerHTML={footerHtml}></div></StyledTypography>
                  </ThemeProvider> */}

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
              style={responseGridStyle}>
              <Grid item xs={12} sm={12} style={gridStyle}>
                   <div style={{height: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={6}  style={gridStyle}>
                  
              <Rosette src={rosetteSvg} id={"rosette"} />
                 
              </Grid>
              <Grid item xs={12} sm={4} style={gridStyle}>

                  <Congratulations>{resourcesResponse.field_headertext}</Congratulations>
                 
                  <YouveGotYourCertificate>{processHtml(resourcesResponse.field_bodytext.processed)}</YouveGotYourCertificate>
                
                  <form className={classes.root} onSubmit={handleReSubmit}>
                    <input type="hidden" name="cid" value={state.cid}></input>
                    {/* <button type="submit"><ResendCertificate>Resend certificate</ResendCertificate> </button> */}
                    <WebsiteLink style={{width:'250px'}} type="submit" onClick={moveToResponseDebug} typeOfButton={buttonStyleType.NORMAL_LINK} >{resourcesResponse.field_resendlink.title}</WebsiteLink>
                       
                  </form>
                  <div>&nbsp;</div>
                  <ShareThisActivityWithYourColleagues>{resourcesResponse.field_calltosharetext}</ShareThisActivityWithYourColleagues>
                
                  
                  <SocialMediaWidgets resources={resourcesResponse} Facebook={Facebook} LinkedIn={LinkedIn} Email={Email} />
            
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                
                  <BRBox>
                        <div style={{width:'120px',height:'2.0rem',textAlign:'left',marginBottom:'1rem'}}><BRLogo src={brLogoSvg} id="brLogo" /></div>
                        {/* Boost your skills further by using our other online learning materials in the <a href="/"><strong>Boehringer Academy</strong></a> */}
                        <BRBoxText dangerouslySetInnerHTML={underLogoTextHtml}></BRBoxText> 
                  </BRBox>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>

                  {/* <ButtonCallDog href={resourcesCongrats.field_buttonlinks[0].uri}>{resourcesCongrats.field_buttonlinks[0].title}</ButtonCallDog> */}
                  <WebsiteLink style={{width:'250px'}} to={resourcesResponse.field_buttonlinks[0].uri} typeOfButton={buttonStyleType.DARK_BLUE_BUTTON}>{resourcesResponse.field_buttonlinks[0].title}</WebsiteLink>
                    
                  
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
  nodeCertificaterequest {
    drupal_id
    changed(fromNow: false)
    field_additionalbodytext {
      processed
    }
    field_bodytext {
      processed
    }
    field_buttonlinks {
      title
      uri
    }
    field_footertext {
      processed
    }
    field_formemail
    field_formemailplaceholder
    field_formfirstname
    field_formfirstnameplaceholder
    field_formlastname
    field_formlastnameplaceholder
    field_formpracticeaddress
    field_formpracticeaddressplaceho
    field_headertext
    field_marketingrequest1
    field_marketingrequest2
    path {
      langcode
    }
  }
  nodeCertificateresponse {
    changed(fromNow: false)
    drupal_id
    field_bodytext {
      processed
    }
    field_buttonlinks {
      title
      uri
    }
    field_calltosharetext
    field_headertext
    field_resendlink {
      title
      uri
    }
    field_socialbuttonlinks {
      title
      uri
    }
    field_underlogotext {
      processed
    }
  }
  nodeCongratulations {
    changed(fromNow: false)
    drupal_id
    field_bodytext {
      processed
    }
    field_buttonlinks {
      title
      uri
    }
    field_headertext
    field_pointsawarded {
      processed
    }
    field_remindertext
    path {
      alias
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
  