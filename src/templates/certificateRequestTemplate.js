import React from 'react'
import {useRef, useEffect} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'

import { useStaticQuery, graphql } from 'gatsby'
import { withStyles,createStyles,makeStyles } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';

import styled from 'styled-components'
import SlideDrawer from '../components/SideDrawer'
import Grid from '@material-ui/core/Grid'

import useLocalStorage from '../utils/localStorageHelper'

import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import Icon from '@material-ui/core/Icon'

import TextField from '@material-ui/core/TextField'

import DarkBlueRoundedButton from '../components/DarkBlueRoundedButton'
import { useCookies } from 'react-cookie'

import rosetteOnlySvg from '../images/certificate/rosette_only.svg'
import rosetteSvg from '../images/certificate/rosette1.svg'
import brLogoSvg from '../images/certificate/boehringer_academy_logo.svg'

import WebsiteLink, {buttonStyleType} from '../components/WebsiteLink'

import confetti from '../utils/animationConfetti'

import ContactDynamicFormik from '../components/ContactDynamicFormik'

import SocialMediaWidgets from '../components/SocialMediaWidgets'

import {stripUneededHtml, removeParagraphsTags, processInternalLink, replaceDogName, getSlideData, processField } from '../utils/displayUtils'
import theme, { sm, md, lg, xl } from '../theme'

import BottomNavigationLink from "../components/BottomNavigationLink"

import { dogName, ownerName, ownerResponseSteps, cookieKeyNames, tasks, certRequestSteps, BASE_URL, DEBUG_PROJECT, certSlugNames } from "../WebsiteConstants"

import { PageSection ,LeftPageSection, OwnerImageCertSummary, RightPageSection, OwnerImageCloseUp} from '../components/PageParts'
import Checkbox from '@material-ui/core/Checkbox'
import {
  CustomCheckBoxOffIcon ,
  CustomCheckBoxOnIcon
} from '../components/FormParts'
import CustomFluidImage from '../components/CustomFluidImage'
import FixedSizeImage from '../components/FixedSizeImage'


// ref url for react forms - https://medium.com/better-programming/the-complete-guide-to-forms-in-react-d2ba93f32825

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

const debug = DEBUG_PROJECT

const urlBase = BASE_URL

// SEE RESULTS _ /admin/reports/certificate-manager
// RESEND - /api/resend-certificate?_format=json

const resendUrl = urlBase + '/api/resend-certificate?_format=json'
const formSubmissionUrl = urlBase + '/api/save-certificate?_format=json'
const updateCertUrl = urlBase + '/api/update-certificate?_format=json'
const loadCertUrl = urlBase + '/api/load-certificate?_format=json'

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
    font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
    font-weight: 600;

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
`

const CaseStudySummaryHeader = styled(Congratulations)`
     font-size:font-size: 2.938rem;
     color: ${theme.palette.midnightBlue.main};
`

const YouveGotYourCertificate = styled.div`
    margin-top: -1rem;
    font-size: 1.6666666666666667rem;
    line-height: 1.4;
    text-align: left;
    letter-spacing: -0.25px;
    color: ${theme.palette.midnightBlue.main};
    font-family: ${theme.typography.fontFamily};
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
    font-family: ${theme.typography.fontFamily};
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
    font-family: ${theme.typography.fontFamily};
    font-weight: 600;

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


    font-family: ${theme.typography.fontFamily};
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
      font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
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
      font-family: ${theme.typography.fontFamily};
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
    font-family: ${theme.typography.fontFamily};
    font-weight: 600;

    width: 100%;
`

const FormBodyText = styled.div`
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

const SummaryBodyText = styled.div`

    font-family: ${theme.typography.fontFamily};
    font-size: 25px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: -0.25px;
    text-align: left;
    color: ${theme.palette.midnightBlue.main};
`

const RequestHeader = styled.div`
   padding-left:0.5rem;
    font-size: 3.1333333333333333rem;
    line-height: 1.15;
    text-align: left;
    letter-spacing: -0.47px;
    color: ${theme.palette.midnightBlue.main};
    font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
    font-weight: 600;
    height: 70px;
    width: 506px;
`

const CallInDog = styled.div`

  font-family: ${theme.typography.fontFamily};
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  padding-bottom: 1rem;
  color: ${theme.palette.midnightBlue.main} ;
  `

const IfYouHavenReceived = styled.div`
  padding-left:0.5rem;
  font-family: ${theme.typography.fontFamily};
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
    font-size: 0.938rem;
  }
  & > a {
    font-weight: 600;
    font-size: 0.938rem;
    color: ${theme.palette.midnightBlue.main} !important;
    text-decoration: none;
  }
  & p {
    font-size: 0.938rem !important;
  }
`
const styles = createStyles({
  formControlLabel: {
    marginLeft:'1rem',
          '& label': {
              marginLeft:'1rem'
          }
      }
})

const RosetteContainer = styled(CustomFluidImage)`
    padding-left: 100px;
    @media (max-width: ${md}px) {
        padding-left: 0px;
        width:100% !important;
        height:auto !important;
    }
`

// const LargeCheckbox = withStyles({
//   root: {
//     width:'49px',
//     height:'49px',
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props}  />)

const LargeCheckbox =  styled(({ color, ...otherProps }) => (
  <Checkbox {...otherProps} color="default"  />
))`
  color: ${props => props.color};

  & .MuiIcon-root {
      width: 49px;
      height: 49px;
  }

`



export default function certificateRequestTemplate(data, dogChoicePassed) {

    console.log(data)
    const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL])
    const dogChoice = dogChoicePassed  // cookies[cookieKeyNames.DOG_CHOICE] ? cookies[cookieKeyNames.DOG_CHOICE]: dogName.DUDLEY

    //const [userUserChoice, setUserChoice ] = useLocalStorage('userChoice', '')

    //const resourcesSummary = get(data, 'nodeCasestudysummary')

    const resourcesCongrats = get(data, 'nodeCongratulations')
    const resourcesRequest = get(data, 'nodeCertificaterequest')
    const resourcesResponse = get(data, 'nodeCertificateresponse')

    const resourcesCaseSummmariesAr = get(data, 'allNodeCasestudysummary.nodes')

    const reggieSummaryData = getSlideData(resourcesCaseSummmariesAr,certSlugNames.REGGIE_SUMMARY)
    const dudleySummaryData = getSlideData(resourcesCaseSummmariesAr,certSlugNames.DUDLEY_SUMMARY)
    const poppySummaryData = getSlideData(resourcesCaseSummmariesAr,certSlugNames.POPPY_SUMMARY)

    let summaryData = {}
    if (dogChoice === dogName.POPPY) summaryData = poppySummaryData
    if (dogChoice === dogName.DUDLEY) summaryData = dudleySummaryData
    if (dogChoice === dogName.REGGIE) summaryData = reggieSummaryData

    const summaryPoint1 = summaryData.field_ticklist[0].processed
    const summaryPoint2 = summaryData.field_ticklist[1].processed
    const summaryPoint3 = summaryData.field_ticklist[2].processed
    const summaryPoint4 = summaryData.field_ticklist[3].processed
    const summaryPoint5 = summaryData.field_ticklist[4].processed

    const [state, setState] = React.useState({
      buttonText: "Continue",
      href: "/",
      firstname: "",
      lastname:  "",
      email:  "",
      score: "20",
      practiceAddress: "",
      agreedToMarketingEmail: false,
      didNotAgreedToMarketingEmail: false,
      vetertinaryGroup: "",
      rcvs:"",
      postcode:"",
      cid: '',
      responseFormVisible: false,
      step: certRequestSteps.SUMMARY,
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
      hasInput4: false,

      helperText5: '',
      error5: false,
      hasInput5: false,

      helperText6: '',
      error6: false,
      hasInput6: false,

      helperText7: '',
      error7: false,
      hasInput7: false,

      formReady: false
    });

    const checkFormSubmitState = () => {
        let canSubmit = false

        if (state.agreedToMarketingEmail === true || state.didNotAgreedToMarketingEmail === true) {
            if (state.error1 === false &&
              state.hasInput1 === true &&
              state.error2 === false &&
              state.hasInput2 === true &&
              state.error3 === false &&
              state.hasInput3 === true &&
              state.error4 === false &&
              state.hasInput4 === true &&
              state.error5 === false &&
              state.hasInput5 === true &&
              state.error6 === false &&
              state.hasInput6 === true) {
                canSubmit = true
                console.log("READY TO SUBMIT")
            } else {
                console.log("FORM NOT READY")
            }
        }

        return canSubmit
    }


    function showCongratsStage(event) {
          event.preventDefault()
          console.log(state)
          gridSummaryRef.current.style.display = 'none'
          gridCongratsRef.current.style.display = 'flex'
          gridRequestRef.current.style.display = 'none'
          gridResponseRef.current.style.display = 'none'
          //state.step = certRequestSteps.CONGRATS
          setState({...state,step: certRequestSteps.CONGRATS})
    }

    function showFormStage(event) {
          event.preventDefault()
          console.log(state)
          gridSummaryRef.current.style.display = 'none'
          gridCongratsRef.current.style.display = 'none'
          gridRequestRef.current.style.display = 'flex'
          gridResponseRef.current.style.display = 'none'
          //state.step = certRequestSteps.FORM
          setState({...state,step: certRequestSteps.FORM})
    }

    function recordUserChoice(event) {

    }

    let responseGridStyle = {
        display: (state.step === certRequestSteps.FORM_RESPONSE) ? 'flex' : 'none'
    }
    let requestGridStyle =  {
        display: (state.step === certRequestSteps.FORM) ? 'flex' : 'none'
    }
    let congratsGridStyle = {
        display: (state.step === certRequestSteps.CONGRATS) ? 'flex' : 'none',
        height: '100vh',
    }
    let summaryGridStyle = {
        display: (state.step === certRequestSteps.SUMMARY) ? 'flex' : 'none',
    }

    let classes = useStyles();

    const refTick1 = useRef()
    const refTick2 = useRef()
    const refTick3 = useRef()
    const refTick4 = useRef()
    const refTick5 = useRef()

    useEffect(() => {
        switch (state.step){
          case certRequestSteps.CONGRATS:
               console.log("CONGRATS")
               confetti(true)
               break;
          case certRequestSteps.SUMMARY:
            console.log("SUMMARY")
              break;
          case certRequestSteps.FORM:
            console.log("FORM")
                break;
          case certRequestSteps.FORM_RESPONSE:
            console.log("FORM_RESPONSE")
              break;
          default:
              break;
        }
    },[state.step])

    function moveToResponseDebug(event) {
        event.preventDefault()
        console.log(state)
        gridSummaryRef.current.style.display = 'none'
        gridCongratsRef.current.style.display = 'none'
        gridRequestRef.current.style.display = 'none'
        gridResponseRef.current.style.display = 'flex'

        setState({...state,step: certRequestSteps.FORM_RESPONSE})
    }

    const handleSubmit = async (e) => {
          e.preventDefault()

          const canSubmit = checkFormSubmitState()

          if (!canSubmit) {
            console.log("FORM SUBMISSION BLOCKED AS DOES NOT HAVE ALL DATA")
            //return
          }
          //debugger

          console.log(JSON.stringify(state))

          const agreedToMarketingEmail = (state.agreedToMarketingEmail) ? (state.didNotAgreedToMarketingEmail) ? '0':'1':'0'

          const params = {
                firstname: state.firstName,
                lastname:  state.lastName,
                email:  state.email,
                score: (1 * state.score),
                practiceAddress: state.practiceAddress,
                agreedToMarketingEmail: agreedToMarketingEmail,

                postcode:state.postcode,
                rcvsNo:state.rcvs,
                corporateAccountCompany:state.vetertinaryGroup,
                isCorporateAccount: 0,
                cpdCase:dogChoice
          };

          const getDropDownValue = document.querySelectorAll("input[name=vetertinaryGroup]")

          //alert("params" + JSON.stringify(params))

          const formData = new FormData();

          for (var k in params) {
            formData.append(k, params[k]);
          }

          const isSendingJson = true
          const body = (isSendingJson) ?  JSON.stringify(params) : formData
          const headers = (isSendingJson) ? { "Content-Type": "application/json" } : { "Content-Type": 'multipart/form-data' }

          console.log(body)

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
                  //alert(JSON.stringify(data))
                  console.log(data);
                  if (data) {

                    const valDecoded = data
                    if (valDecoded) {
                        if (valDecoded.cid) {
                            console.log('CID - ' + valDecoded.cid )
                            if (window && debug) {window.alert('Sent - CID - ' + valDecoded.cid)}
                            setState({ ...state, cid: valDecoded.cid, step: certRequestSteps.FORM_RESPONSE })
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

          // SEE RESULTS _ /admin/reports/certificate-manager

          const resendUrl = urlBase + resendUrl

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
    const gridSummaryRef = useRef()

    const handleChange = (e) => {
      console.log("etk ", e.target.name)
      console.log("etv ",e.target.value)

    }

    //TODO - remove hardcoded
    return (
        <Layout scrollablePage={state.step === certRequestSteps.FORM || state.step === certRequestSteps.FORM_RESPONSE ? true : false}
               showBurgerMenuIcon={state.step !== certRequestSteps.SUMMARY ? true : false}
        >

              {/* Summary */}

              <Grid container
                  spacing={0}
                  spacing={0}
                  ref={gridSummaryRef}
                  justify="flex-start"
                  style={summaryGridStyle}>
                  <Grid item xs={12} sm={12} style={gridStyle}>
                      <div style={{height: '100px'}}></div>

                  </Grid>
                  <Grid item xs={12} sm={6}  style={gridStyle}>

                      <OwnerImageCertSummary dogChoice={dogChoice} />

                  </Grid>
                  <Grid item xs={12} sm={4} style={gridStyle}>
                      <CaseStudySummaryHeader>
                        {replaceDogName("You have helped __DOG_NAME__ by:",dogChoice)}
                        {/* {replaceDogName(stripUneededHtml(resourcesCongrats.field_headertext),dogChoice)} */}
                        </CaseStudySummaryHeader>
                      <div>&nbsp;</div>
                      <div>
                        <form>
                        <FormGroup row>
                            <ul style={{listStyle: 'none',marginLeft:'0.5rem',marginTop:'0.5rem'}}>
                                <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}>
                                    <FormControlLabel
                                        control={<LargeCheckbox 
                                          icon={<CustomCheckBoxOffIcon />} 
                                          checked={false} 
                                          ref={refTick1}  
                                          value={state.field1} 
                                          checkedIcon={<CustomCheckBoxOnIcon/>} 
                                          onChange={()=>{}} 
                                          name="field1" />}
                                        label={<SummaryBodyText style={styles.formControlLabel}>
                                          {summaryPoint1}

                                    </SummaryBodyText>} />
                                </li>
                                <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}>
                                    <FormControlLabel control={<LargeCheckbox
                                    checked={false}
                                    ref={refTick2}
                                    icon={<CustomCheckBoxOffIcon />}
                                    checkedIcon={<CustomCheckBoxOnIcon/>}
                                    value={state.field2}
                                    onChange={handleChange}
                                    name="field2" />}
                                    label={<SummaryBodyText style={styles.formControlLabel}>
                                      {summaryPoint2}


                                    </SummaryBodyText>}/>
                                </li>
                                <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}>
                                    <FormControlLabel control={<LargeCheckbox
                                    checked={false}
                                    ref={refTick3}
                                    icon={<CustomCheckBoxOffIcon />}
                                    checkedIcon={<CustomCheckBoxOnIcon/>}
                                    value={state.field3}
                                    onChange={handleChange}
                                    name="field3" />}
                                    label={<SummaryBodyText style={styles.formControlLabel}>
                                      {summaryPoint3}

                                    </SummaryBodyText>}/>
                                </li>
                                <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}>
                                    <FormControlLabel control={<LargeCheckbox
                                    checked={false}
                                    ref={refTick4}
                                    icon={<CustomCheckBoxOffIcon />}
                                    checkedIcon={<CustomCheckBoxOnIcon/>}
                                    value={state.field4}
                                    onChange={handleChange}
                                    name="field4" />}
                                    label={<SummaryBodyText style={styles.formControlLabel}
                                    dangerouslySetInnerHTML={{
                                      __html: summaryPoint4
                                    }} />
                                  }/>
                                </li>
                                <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}>
                                    <FormControlLabel control={<LargeCheckbox
                                    checked={false}
                                    ref={refTick5}
                                    icon={<CustomCheckBoxOffIcon />}
                                    checkedIcon={<CustomCheckBoxOnIcon/>}
                                    value={state.field5}
                                    onChange={handleChange}
                                    name="field5" />}
                                    label={<SummaryBodyText style={styles.formControlLabel}>
                                      {summaryPoint5}

                                    </SummaryBodyText>}/>
                                </li>
                            </ul>
                        </FormGroup>
                        </form>
                      </div>
                      <BottomNavigationLink to="button" onClick={showCongratsStage} direction="forward" distanceFromSide={"2%"} bottom={"2%"} linkText={"Continue"}/>


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
              <Grid item xs={12} sm={6}  style={ { ...gridStyle, display: 'flex', flexDirection: 'column', justifyContent: 'center' } }>

                   <RosetteContainer imgName="new_rosette_with_sprinkles.png" width="600px" height="500px"  />
                   <RosetteAnimCanvas id="canvas"></RosetteAnimCanvas>

              </Grid>
              <Grid item xs={12} sm={4} style={ { ...gridStyle, display: 'flex', flexDirection: 'column', justifyContent: 'center' } }>
                  <Congratulations>{stripUneededHtml(resourcesCongrats.field_headertext)}</Congratulations>
                  <div>&nbsp;</div>
                  <YouveGotYourCertificate>{stripUneededHtml(resourcesCongrats.field_bodytext.processed)}</YouveGotYourCertificate>
                  <div>&nbsp;</div>
                  <CpdPoints>{stripUneededHtml((resourcesCongrats.field_pointsawarded) ? (resourcesCongrats.field_pointsawarded.processed) : "20 minutes of CPD")}</CpdPoints>
                  <div>&nbsp;</div>
                  <RememberToGetYourCertificate>{stripUneededHtml(resourcesCongrats.field_remindertext)}</RememberToGetYourCertificate>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <WebsiteLink onClick={showFormStage} typeOfButton={buttonStyleType.DARK_BLUE_BUTTON_CORNER} style={{width:'254px'}}>{resourcesCongrats.field_buttonlinks[0].title}</WebsiteLink>

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

                 <ContactDynamicFormik requestGridStyle={gridStyle}
                    resources={resourcesRequest}
                    checkFormSubmitState={checkFormSubmitState}
                    formHandler={handleSubmit}
                    state={state}
                    setState={setState}
                    dogChoice={dogChoice}
                    recordUserChoice={recordUserChoice}/>

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
                   <CircleBackground />
              </Grid>
              <Grid item xs={12} sm={6}  style={gridStyle}>

              {/* <Rosette src={rosetteSvg} id={"rosette"} /> */}
              <RosetteContainer imgName="new_rosette_with_sprinkles.png" width="600px" height="500px"  />

              </Grid>
              <Grid item xs={12} sm={4} style={gridStyle}>

                  <Congratulations>{resourcesResponse.field_headertext}</Congratulations>

                  <YouveGotYourCertificate>{stripUneededHtml(resourcesResponse.field_bodytext.processed)}</YouveGotYourCertificate>

                  <form className={classes.root} onSubmit={handleReSubmit}>
                    <input type="hidden" name="cid" value={state.cid}></input>
                    {/* <button type="submit"><ResendCertificate>Resend certificate</ResendCertificate> </button> */}
                    <WebsiteLink style={{width:'250px'}} to={"button"} type="submit" onClick={moveToResponseDebug} typeOfButton={buttonStyleType.NORMAL_LINK} >{resourcesResponse.field_resendlink.title}</WebsiteLink>

                  </form>
                  <div>&nbsp;</div>
                  <ShareThisActivityWithYourColleagues>{resourcesResponse.field_calltosharetext}</ShareThisActivityWithYourColleagues>


                  <SocialMediaWidgets resources={resourcesResponse} Facebook={Facebook} LinkedIn={LinkedIn} Email={Email} />

                  <div>&nbsp;</div>
                  <div>&nbsp;</div>

                  <BRBox>
                        <div style={{width:'120px',height:'2.0rem',textAlign:'left',marginBottom:'1rem'}}><BRLogo src={brLogoSvg} id="brLogo" /></div>

                        <BRBoxText dangerouslySetInnerHTML={underLogoTextHtml}></BRBoxText>
                  </BRBox>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>

                  <CallInDog>{processField(resourcesResponse.field_additionalbodytext, dogChoice, false) }</CallInDog>

                  <WebsiteLink style={{width:'350px'}} to={resourcesResponse.field_buttonlinks[0].uri} typeOfButton={buttonStyleType.DARK_BLUE_BUTTON}>{resourcesResponse.field_buttonlinks[0].title}</WebsiteLink>


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
    field_rcvs
      field_rcvsplaceholder
      field_vetertinarygroup
      field_vetertinarygroupplaceholde
      field_postcode
      field_postcodeplaceholder
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
    field_additionalbodytext {
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
  allNodeCasestudysummary {
    nodes {
      drupal_id
      created(fromNow: false)
      field_headertext
      field_ticklist {
        processed
      }
      path {
        alias
      }
    }
  }
}`
