import React, {useState,useRef,forwardRef} from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid'


import BlockTextReveal from '../components/BlockTextReveal'
import CustomFluidImage from '../components/CustomFluidImage'
import SideDrawer from '../components/SideDrawer'
import Loader from '../components/Loader'
import CookieBanner from '../components/CookieBanner'
import UserChoice from '../components/UserChoice'
import { useCookies } from 'react-cookie'

import { makeStyles } from '@material-ui/core/styles'

import Transition from 'react-transition-group'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import get from 'lodash/get'
import { graphql } from "gatsby"
import { processInternalLink, processHtml, removeParagraphsTags } from '../utils/displayUtils'
import theme, { sm, md, lg, xl } from '../theme'
import FixedSizeImage from '../components/FixedSizeImage'
import styled from 'styled-components'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import { CSSTransitionGroup } from 'react-transition-group'

// vetmedin_backgrounds_plain_01@3x.png


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
  

export default function caseStudyOptions({data}){

    let resources = get(data, 'nodeChoosedog')
    console.log('resources', resources)
    let resourcesUserChoicePage = get(data, 'nodeUserchoice') 
    console.log(resourcesUserChoicePage)

    const [cookies, setCookie, removeCookie] = useCookies(['hasConsentSet','userChoice','dogChoice']);
    // const [cookieUserChoice, setCookieUserChoice, removeCookieUserChoice] = useCookies(['userChoice']);
    // const [cookieLoader, setCookieLoader, removeCookieLoader] = useCookies(['showLoader']);
    let stateFromCookie = { renderUserChoice: false, 
        renderLoader: false,
        renderCookieBanner: false,
        isPanelVisible1: false,
        isPanelVisible2: false,
        isPanelVisible3: false
    }
    const [state, setState] = useState(stateFromCookie)

    // const panel1 = forwardRef((props,ref) => <p ref={ref} {...props} >hi</p>)
    // const panel2 = forwardRef((props,ref) => <p ref={ref} {...props} >hi</p>)
    // const panel3 = forwardRef((props,ref) => <p ref={ref} {...props} >hi</p>)

    const setChoiceAsOwner1 = (event) => {
        setCookie('dogChoice','dudley',{ path: '/' })     
    }
    const setChoiceAsOwner2 = (event) => {
        setCookie('dogChoice','poppy',{ path: '/' })     
    }
    const setChoiceAsOwner3 = (event) => {
        setCookie('dogChoice','reggie',{ path: '/' })     
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

    const handleUserChoiceUnmount = () =>  {
        setState({ renderUserChoice: false, renderLoader: false, renderCookieBanner: false,  isPanelVisible1: false,
            isPanelVisible2: false,
            isPanelVisible3: false});
    }

    const handleLoaderUnmount = () =>  {
        setState({ renderUserChoice: false, renderLoader: false, renderCookieBanner: false,  isPanelVisible1: false,
            isPanelVisible2: false,
            isPanelVisible3: false});
    }

    const handleCookieBannerUnmount = () =>  {
        // setCookie('hasConsentSet', true, { path: '/' });
        setState({renderUserChoice: false, renderLoader: false, renderCookieBanner: false,  isPanelVisible1: false,
            isPanelVisible2: false,
            isPanelVisible3: false});
  }

  const DogOptionPanel = styled.div`
  text-decoration: none !important;
  position: relative;
  display:flex;
  flex-direction: column;
  align-content: center;
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
`
//  backgroundImage: 'url(/caseStudyOptions/vetmedin_backgrounds_plain_01@3x.png)'
  return (
  <Layout>
      {/* {state.renderUserChoice ? <UserChoice unmountMe={handleUserChoiceUnmount} resources={resourcesUserChoicePage} /> : ''} */}
      {state.renderLoader ? <Loader unmountMe={handleLoaderUnmount} /> : ''}
      {state.renderCookieBanner ? <CookieBanner unmountMe={handleCookieBannerUnmount} /> : ''}

      <div style={{ 
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100vh',
        backgroundColor: '#24add6', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundImage: 'url(/caseStudyOptions/vetmedin_backgrounds_plain_01@3x.png)'
       
      }}></div>

      <SideDrawer /> 

     
                <Grid container 
                spacing={0}
                spacing={0}
                justify="center"
                style={{border: '0px solid black', minHeight: '100vh',width:'100%' }}>

               

              
                <Grid item xs={12} sm={4}  align="center" style={{ height:"560px", border: '0px solid red'}}>
                <div style={{position: 'relative',margin:'auto', width: '100%', minHeight: '100%',padding:'2rem', border: '0px solid red'}}>
                    
                        {/* <div style={{ width: '75%',height:'100%',padding:'2rem'}}> */}
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
    
                        
                        <div style={{position: 'absolute',left: 0,top: 0}}><FixedSizeImage axis="Y" imgName="mrs_jenkins_pose_01@3x.png"  height="600px" width="600px"/></div>
                        <div style={{position: 'absolute',left: '20%',top: '30%'}}><FixedSizeImage axis="Y" imgName="dudley_standing_pose_02@3x.png" height="600px" width="600px"/></div>
                        <Fab style={{position: 'absolute',left:'50%',top:'100%',backgroundColor:theme.palette.deminBlue.main,color:'white'}} color="primary" aria-label="show dog and owner name. In this case Dudley" onClick={showCaseStudyOwner1}>
                            <AddIcon />
                        </Fab>
                        <AniLink data-active={state.isPanelVisible1} style={{position: 'absolute', 
                        left:'15%',
                        top:'100%',
                        marginLeft:'10%',
                        width:'270px',
                        display: (state.isPanelVisible1 ? 'flex':'none'),
                        textDecoration: 'none',
                        }} to='/owner-and-dog-detail-slide/' onClick={setChoiceAsOwner1}>
                            {/* <CustomFluidImage  data-active={state.sPanelVisible1} imgName="dogNamePanelDudley.png" /> */}
                            <DogOptionPanel>
                              <div style={{display:'flex', height:'10px'}}>&nbsp;</div>
                              <MinusButton />
                              <PanelTitle>MRS JENKINS WITH</PanelTitle>
                              <PanelDogName>Dudley</PanelDogName>
                            </DogOptionPanel>
                        </AniLink>

                        </CSSTransitionGroup>
                        {/* </Transition>  */}
  
                        {/* </div> */}
                    
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}  align="center" justify="center" style={{ height:"560px", border: '0px solid red'}}>
                <div style={{display:'flex',alignItems:'center', position: 'relative',margin:'auto', width: '100%', minHeight: '100%',padding:'2rem', border: '0px solid red'}}>
                
                        {/* <div style={{ width: '75%',height:'100%',padding:'2rem'}}> */}
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
    
                            
                        
      
                           <div style={{position: 'absolute',left: 0,top: 0}}><FixedSizeImage axis="Y" imgName="mr_oakley_poses_02@3x.png" height="600px" width="600px"/></div>
                           <div style={{position: 'absolute',left: '20%',top: '30%'}}><FixedSizeImage axis="Y" imgName="poppy_standing_02@3x.png" height="600px" width="600px"/></div>
                        
                            <Fab  style={{position: 'absolute',left:'50%',top:'100%',backgroundColor:theme.palette.deminBlue.main,color:'white'}} color="primary" aria-label="show dog and owner name. In this case Poppy" onClick={showCaseStudyOwner2}>
                            <AddIcon />
                            
                            </Fab>


                           


                            <AniLink data-active={state.isPanelVisible2} style={{position: 'absolute', 
                                left:'15%',
                                top:'100%',
                                marginLeft:'10%',
                                width:'270px',
                                display: (state.isPanelVisible2 ? 'flex':'none'),
                                textDecoration: 'none',
                                }} to='/owner-and-dog-detail-slide/' onClick={setChoiceAsOwner1}>
                            {/* <CustomFluidImage  data-active={state.sPanelVisible1} imgName="dogNamePanelDudley.png" /> */}
                            <DogOptionPanel>
                              <div style={{display:'flex', height:'10px'}}>&nbsp;</div>
                              <MinusButton />
                              <PanelTitle>MR OAKLEY WITH</PanelTitle>
                              <PanelDogName>Poppy</PanelDogName>
                            </DogOptionPanel>
                        </AniLink>

                        </CSSTransitionGroup>
                            {/* </Transition> */}
                            
                        {/* </div> */}
                    
                    
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}  align="center" style={{ height:"560px", border: '0px solid red'}}>
                    <div style={{position: 'relative',margin:'auto', width: '100%', minHeight: '100%',padding:'2rem', border: '0px solid red'}}>
                        {/* <div style={{width: '75%',height:'100%',padding:'2rem'}}>
                             */}
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
    

                            <div style={{position: 'absolute',left: 0,top: 0}}><FixedSizeImage axis="Y" imgName="mrs_richardson_pose_02@3x.png" height="600px" width="600px"/></div>
                           <div style={{position: 'absolute',left: '20%',top: '30%'}}><FixedSizeImage axis="Y" imgName="reggie_standing_poses_02@3x.png" height="600px" width="600px"/></div>
                        
                        


                            <Fab  style={{position: 'absolute',left:'50%', top:'100%',backgroundColor:theme.palette.deminBlue.main,color:'white'}} color="red" aria-label="show dog and owner name. In this case Reggie" onClick={showCaseStudyOwner3}>
                                <AddIcon />
                            </Fab>
                            <AniLink data-active={state.isPanelVisible3} style={{position: 'absolute', 
                        left:'15%',
                        top:'100%',
                        marginLeft:'10%',
                        width:'270px',
                        display: (state.isPanelVisible3 ? 'flex':'none'),
                        textDecoration: 'none',
                        }} to='/owner-and-dog-detail-slide/' onClick={setChoiceAsOwner1}>
                            {/* <CustomFluidImage  data-active={state.sPanelVisible1} imgName="dogNamePanelDudley.png" /> */}
                            <DogOptionPanel>
                              <div style={{display:'flex', height:'10px'}}>&nbsp;</div>
                              <MinusButton />
                              <PanelTitle>MRS RICHARDSON WITH</PanelTitle>
                              <PanelDogName>Reggie</PanelDogName>
                            </DogOptionPanel>
                        </AniLink>
                        </CSSTransitionGroup>
                            {/* </Transition> */}
                        
                        {/* </div> */}
                        
                    </div>
                </Grid>
                

                <Grid item xs={12} sm={12}  align="center" style={{border: '0px solid red'}}>
                    {/* <div style={{position: 'relative',width: '100%', minHeight: '100%', border: '5px solid red'}}> */}
                        <div style={{position:'relative', width: '100%',height:'100%',padding:'2rem',fontSize:'1.5rem',fontWeight:'700',fontFamily:theme.typography.fontFamily}}>
                             {removeParagraphsTags(resources.field_bottomtitle.processed)}
                        </div>
                        
                    {/* </div> */}
                </Grid>

            </Grid>
      
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
    allNodeDogoptions {
      nodes {
        drupal_id
        changed(fromNow: false)
        field_backlink {
          title
          uri
        }
        field_buttonlinks {
          title
          uri
        }
        field_continuelink {
          title
          uri
        }
        field_dogandownerimgalttext
        field_dogandownerimgname
        field_paneltitle
        field_seotext
        field_tableitemcontent1 {
          processed
        }
        field_tableitemcontent2 {
          processed
        }
        field_tableitemcontent3 {
          processed
        }
        field_tableitemcontent4 {
          processed
        }
        field_tableitemcontent5 {
          processed
        }
        field_tableitemcontent6 {
          processed
        }
        field_tableitemcontent7 {
          processed
        }
        field_tableitemcontent8 {
          processed
        }
        field_tableitemtitle1
        field_tableitemtitle2
        field_tableitemtitle3
        field_tableitemtitle4
        field_tableitemtitle5
        field_tableitemtitle6
        field_tableitemtitle7
        field_tableitemtitle8
        field_tabletitle
        path {
          alias
        }
      }
    }
}
`