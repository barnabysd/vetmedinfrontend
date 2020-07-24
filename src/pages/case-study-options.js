import React, {useState,useRef,forwardRef} from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid'
import { useCookies } from 'react-cookie'
import { makeStyles } from '@material-ui/core/styles'
import Transition from 'react-transition-group'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import get from 'lodash/get'
import { graphql } from "gatsby"
import { processInternalLink, stripUneededHtml, removeParagraphsTags } from '../utils/displayUtils'
import theme, { sm, md, lg, xl } from '../theme'
import FixedSizeImage from '../components/FixedSizeImage'
import styled from 'styled-components'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import { CSSTransitionGroup } from 'react-transition-group'
import { dogName, cookieKeyNames } from '../WebsiteConstants'

const useStyles = makeStyles((themeMaterial) => ({
    root: {
      display:'flex',
      flexGrow: 1,
    },
    paper: {
      padding: themeMaterial.spacing(2),
      textAlign: 'center',
      color: themeMaterial.palette.text.secondary,
    },
}));

const EmailInput = React.forwardRef((props, ref) => (
    <input ref={ref} {...props} type="email" className="AppEmailInput" />
  ));

const BottomTextInstructions = styled.div ` 
    position:absolute;
    text-align:center;
    bottom: 1%;
    width: 400px;
    left: 50%;
    margin-left:-200px;

    height:100px;
    padding:2rem;
    font-size:1.5rem;
    font-weight:700;
    font-family:${theme.typography.fontFamily};
    z-index:50;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: ${md}px) {
      position:static;
      width: 100%;
      margin-left:1rem;
      margin-right:1rem;
      left:0
    }
`

const DogOptionPanel = styled.div`
text-decoration: none !important;
position: relative;
display:flex;
flex-direction: column;
align-content: center;
align-items: center;
justify-content: center;
width: 100%;
flex-grow: 1;
height: 6.625rem;
border-radius: 2rem 2rem 2rem 0;
background-color: ${theme.palette.deminBlue.main};
& a {
  display: flex;
  text-decoration: none !important;
}
& div {
  display: flex;
  text-decoration: none !important;
}
`
const MinusButton = styled.div`
display:flex;
justify-content: center;
margin-top: 0rem;
display:flex;
width: 0.7rem;
height: 2px;
background-color: ${theme.palette.white.main};
`

const PanelTitle =  styled.div`
display:flex;
justify-content: center;
padding-bottom: 1rem;
padding-top: 0.5rem;
width: 100%;
height: 1.313rem;
font-family: ${theme.typography.fontFamily};
font-size: 0.938rem;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.6;
letter-spacing: -0.15px;
text-align: left;
color:  ${theme.palette.midnightBlue.main};
`  

const PanelDogName =  styled.div`
display:flex;
justify-content: center;
padding-bottom: 1rem;
height: 2.188rem;
font-family: ${theme.typography.fontFamily};
font-size: 1.563rem;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.4;
letter-spacing: -0.25px;
text-align: left;
color: ${theme.palette.white.main};
@media (max-width: ${md}px) {
    background-image: none;
}

`

const CaseStudyOwnerHolder = styled.div`
position: relative;
margin:auto;
display:flex;
align-items:center;
width: 100%;
min-height:100%;
padding:2rem;
border: 0px solid red;
z-index:10;
`
/*
The background image is the static images folder !!! not the src folder
*/
const BackgroundCaseStudy = styled.div`
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100vh;
background-color: #D7F4FC; 
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
background-image: url(/caseStudyOptions/vetmedin_backgrounds_plain_01@3x.png);
@media (max-width: ${md}px) {
    background-image: none;
}

`

const CaseStudyOwnerImageHolder = styled.div`
position: absolute;
left: 0;
top: -100px;
`

const CaseStudyOwnerImageHolderDudley = styled(CaseStudyOwnerImageHolder)`
left: 58px;
top: -132px;
@media (max-width: ${md}px) {
     left:0px;
}
@media (max-width: ${sm}px) {
     left:-50px;
}

`
const CaseStudyOwnerImageHolderPoppy = styled(CaseStudyOwnerImageHolder)`
top: -226px;
@media (max-width: ${md}px) {
     left:0px;
}
@media (max-width: ${sm}px) {
     left:-70px;
}

`
const CaseStudyOwnerImageHolderReggie = styled(CaseStudyOwnerImageHolder)`
top: -188px;
@media (max-width: ${md}px) {
     left:0px;
}
@media (max-width: ${sm}px) {
     left:-50px;
}

`

const CaseStudyDogImageHolder = styled.div`
position: absolute;
left: 20%;
top: 50px;
`

const CaseStudyDogImageHolderDudley = styled(CaseStudyDogImageHolder)`
 left: 33%;
top: 104px;
@media (max-width: ${md}px) {
    left:0px;
}
@media (max-width: ${sm}px) {
    left:-50px;
}
`
const CaseStudyDogImageHolderPoppy = styled(CaseStudyDogImageHolder)`
left: 1%;
top: 132px;
@media (max-width: ${md}px) {
    left:0px;
}
@media (max-width: ${sm}px) {
    left:-50px;
}
`
const CaseStudyDogImageHolderReggie = styled(CaseStudyDogImageHolder)`
top: 89px;
@media (max-width: ${md}px) {
    left:0px;
}
@media (max-width: ${sm}px) {
    left:-50px;
}
`

/*
MuiGrid-root 
case-study-grid 
MuiGrid-container 
MuiGrid-align-items-xs-center 
MuiGrid-justify-xs-center" 

MuiGrid-root
MuiGrid-item 
MuiGrid-grid-sm-12 
MuiGrid-grid-md-4" 
*/

// const customCaseStudyGridClass2 = makeStyles({
//   imageIcon: {
//     height: '100%'
//   }
// });

// const customCaseStudyGridClass = makeStyles((themeMaterial) => ({
//   root: {
//     '& .MuiGrid-root': {
//         backgroundColor: 'white',
//     },
//     '& .MuiGrid-container': {
//         backgroundColor: 'red',
//     }
//   },
// }));

// const customCaseStudyGridItemClass = makeStyles((themeMaterial) => ({
//   root: {
//     '& .MuiGrid-item ': {
//         transform: 'rotate(45deg)',
//         backgroundColor: 'red',
//         height:"400px", 
//         border:'1px solid red',
//         justify:"center",
//         alignItems:"center"
//     }
//   },
// }));

// // const customCaseStudyGridItem = makeStyles((themeMaterial) => 
// //     height:"400px", 
// //     border:'1px solid red',
// //     justify:"center",
// //     alignItems:"center"
// // }));

const GridItemStyled = styled(({ ...otherProps }) => (<Grid {...otherProps} />))`
margin-top:200px;
& .MuiGrid-item {
height:400px;
justify-content:center;
align-items:center;   
}
@media (max-width: ${md}px) {
& .MuiGrid-item {
  height:600px;
}
&.MuiGrid-container {
  display: block;
}
}
`

  
export default function caseStudyOptions({data}){

    const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL])

    let stateFromCookie = { renderUserChoice: false, 
        renderLoader: false,
        renderCookieBanner: false,
        isPanelVisible1: false,
        isPanelVisible2: false,
        isPanelVisible3: false
    }
    const [state, setState] = useState(stateFromCookie)

    let resources = get(data, 'nodeChoosedog')
    console.log('resources', resources)
    let resourcesUserChoicePage = get(data, 'nodeUserchoice') 
    console.log(resourcesUserChoicePage)

    const setChoiceAsOwner1 = (event) => {
        setCookie(cookieKeyNames.DOG_CHOICE,dogName.DUDLEY,{ path: '/' })     
    }
    const setChoiceAsOwner2 = (event) => {
        setCookie(cookieKeyNames.DOG_CHOICE,dogName.POPPY,{ path: '/' })     
    }
    const setChoiceAsOwner3 = (event) => {
        setCookie(cookieKeyNames.DOG_CHOICE,dogName.REGGIE,{ path: '/' })     
    }

    const showCaseStudyOwner1 = (event) => {
      setState({renderUserChoice: false, renderLoader: false, renderCookieBanner: false,  isPanelVisible1: true,
        isPanelVisible2: false,
        isPanelVisible3: false});
    }

    const showCaseStudyOwner2 = (event) => {
        setState({renderUserChoice: false, renderLoader: false, renderCookieBanner: false,  isPanelVisible1: false,
        isPanelVisible2: true,
        isPanelVisible3: false});
    }

    const showCaseStudyOwner3 = (event) => {
        setState({renderUserChoice: false, renderLoader: false, renderCookieBanner: false,  isPanelVisible1: false,
        isPanelVisible2: false,
        isPanelVisible3: true});
    }

 
  return (
  <Layout scrollablePage={false} showPercentIndicator={false} showBurgerMenuIcon={false}>
        <BackgroundCaseStudy />

        <GridItemStyled container 
              spacing={0}
              spacing={0}
              justify="center"
              alignItems="center"
              style={{
                  border: '0px solid black',
                  minHeight: '100vh',
                  width:'100%'
              }}>

                <Grid item xs={12} sm={12} md={4} align="center">

                     <CaseStudyOwnerHolder>
                    
                        {/* <Transition in={true} timeout={1000} appear={true}> */}

                        <CSSTransitionGroup
                              className="container result"
                              component="div"
                              transitionName="fade"
                              transitionEnterTimeout={800}
                              transitionLeaveTimeout={500}
                              transitionAppear
                              transitionAppearTimeout={500}
                        >
    
                        <CaseStudyOwnerImageHolderDudley>
                          <FixedSizeImage imgName="caseStudyOptions_mrs_jenkins_pose_01@3x.png"  height="600px" width="355px"/>
                        </CaseStudyOwnerImageHolderDudley>
                        <CaseStudyDogImageHolderDudley>
                          <FixedSizeImage imgName="caseStudyOptions_dudley_standing_pose_02@3x.png" height="600px" width="270px"/>
                         </CaseStudyDogImageHolderDudley>
                        
                        <Fab style={{position: 'absolute',
                            left:'50%',
                            top:'272px',
                            backgroundColor:theme.palette.deminBlue.main,color:'white'}} 
                            color="primary" 
                            aria-label="show dog and owner name. In this case Dudley" 
                            onClick={showCaseStudyOwner1}>
                            <AddIcon />
                        </Fab>

                        <AniLink data-active={state.isPanelVisible1} style={{position: 'absolute', 
                            left:'15%',
                            top:'272px',
                            marginLeft:'16%',
                            width:'270px',
                            display: (state.isPanelVisible1 ? 'flex':'none'),
                            textDecoration: 'none',
                            zIndex:10
                        }} to='/owner-and-dog-detail-slide/' onClick={setChoiceAsOwner1}>
                            
                            <DogOptionPanel>
                              <div style={{display:'flex', height:'10px'}}>&nbsp;</div>
                              <MinusButton />
                              <PanelTitle>MRS JENKINS WITH</PanelTitle>
                              <PanelDogName>Dudley</PanelDogName>
                            </DogOptionPanel>
                        </AniLink>

                        </CSSTransitionGroup>
                        {/* </Transition>  */}
  
                    </CaseStudyOwnerHolder>
                </Grid>
                <Grid item xs={12} sm={12} md={4}  align="center" justify="center">
                    <CaseStudyOwnerHolder>
                
                        {/* <Transition in={true} timeout={1000} appear={true}> */}

                        <CSSTransitionGroup
                              className="container result"
                              component="div"
                              transitionName="fade"
                              transitionEnterTimeout={800}
                              transitionLeaveTimeout={500}
                              transitionAppear
                              transitionAppearTimeout={500}
                            >
    
                          <CaseStudyOwnerImageHolderPoppy>
                             <FixedSizeImage imgName="caseStudyOptions_mr_oakley_poses_02@3x.png" height="600px" width="412px"/>
                          </CaseStudyOwnerImageHolderPoppy>
                           <CaseStudyDogImageHolderPoppy>
                             <FixedSizeImage imgName="caseStudyOptions_poppy_standing_02@3x.png" height="600px" width="314px"/>
                          </CaseStudyDogImageHolderPoppy>
                        
                            <Fab style={{
                                  position: 'absolute',
                                  left:'50%',
                                  top:'272px',
                                  backgroundColor:theme.palette.deminBlue.main,color:'white'}} 
                                  color="primary" 
                                  aria-label="show dog and owner name. In this case Poppy"
                                  onClick={showCaseStudyOwner2}>
                            <AddIcon />
                            
                            </Fab>

                            <AniLink data-active={state.isPanelVisible2} style={{position: 'absolute', 
                                left:'15%',
                                top:'272px',
                                marginLeft:'16%',
                                width:'270px',
                                display: (state.isPanelVisible2 ? 'flex':'none'),
                                textDecoration: 'none',
                                zIndex:10
                                }} to='/owner-and-dog-detail-slide/' onClick={setChoiceAsOwner2}>
                           
                            <DogOptionPanel>
                              <div style={{display:'flex', height:'10px'}}>&nbsp;</div>
                              <MinusButton />
                              <PanelTitle>MR OAKLEY WITH</PanelTitle>
                              <PanelDogName>Poppy</PanelDogName>
                            </DogOptionPanel>
                        </AniLink>

                        </CSSTransitionGroup>
                            {/* </Transition> */}
                
                    </CaseStudyOwnerHolder>
                </Grid>
                <Grid item xs={12} sm={12} md={4}  align="center" justify="center">
                    
                    <CaseStudyOwnerHolder>
                 
                            {/* <Transition in={true} timeout={1000} appear={true}> */}
                        <CSSTransitionGroup
                              className="container result"
                              component="div"
                              transitionName="fade"
                              transitionEnterTimeout={800}
                              transitionLeaveTimeout={500}
                              transitionAppear
                              transitionAppearTimeout={500}
                            >

                            <CaseStudyOwnerImageHolderReggie>
                              <FixedSizeImage imgName="caseStudyOptions_mrs_richardson_pose_02@3x.png" height="600px" width="326px"/>
                            </CaseStudyOwnerImageHolderReggie>
                        

                           <CaseStudyDogImageHolderReggie>
                             <FixedSizeImage imgName="caseStudyOptions_reggie_standing_poses_02@3x.png" height="600px" width="314px"/>
                            </CaseStudyDogImageHolderReggie>
                        
                            <Fab style={{position: 'absolute',
                                 left:'50%', 
                                 top:'272px',
                                 backgroundColor:theme.palette.deminBlue.main,color:'white'}} 
                                 color="red" aria-label="show dog and owner name. In this case Reggie"
                                 onClick={showCaseStudyOwner3}>
                                <AddIcon />
                            </Fab>

                            <AniLink data-active={state.isPanelVisible3} style={{
                                 position: 'absolute', 
                                left:'0%',
                                top:'272px',
                                marginLeft:'16%',
                                width:'270px',
                                display: (state.isPanelVisible3 ? 'flex':'none'),
                                textDecoration: 'none',
                                zIndex:10
                                }} to='/owner-and-dog-detail-slide/' onClick={setChoiceAsOwner3}>
                                  
                                    <DogOptionPanel>
                                      <div style={{display:'flex', height:'10px'}}>&nbsp;</div>
                                      <MinusButton />
                                      <PanelTitle>MRS RICHARDSON WITH</PanelTitle>
                                      <PanelDogName>Reggie</PanelDogName>
                                    </DogOptionPanel>
                                </AniLink>
                        </CSSTransitionGroup>
                      {/* </Transition> */}
             
                        
                    </CaseStudyOwnerHolder>
                </Grid>
                
                <Grid item xs={12} sm={12}  align="center" style={{height:'auto'}}>
                        <BottomTextInstructions>
                             {removeParagraphsTags(resources.field_bottomtitle.processed)}
                        </BottomTextInstructions>
                </Grid>
            </GridItemStyled>
  </Layout>
  )
}

export const pageQuery = graphql`{   
    nodeUserchoice {
      drupal_id
      changed
      field_buttonlinks {
        uri
        title
      }
      field_checkboxtext1
      field_checkboxtext2
      field_headertext
      field_jobnumber
      path {
        alias
      }
    }
    nodeChoosedog {
    drupal_id
    field_bottomtitle {
      processed
    }
    field_panelbody1 {
      processed
    }
    field_panelbody2 {
      processed
    }
    field_panelbody3 {
      processed
    }
    field_panellink1 {
      title
      uri
    }
    field_panellink2 {
      title
      uri
    }
    field_panellink3 {
      title
      uri
    }
    field_paneltitle1
    field_paneltitle2
    field_paneltitle3
    path {
      langcode
    }
  }
}
`