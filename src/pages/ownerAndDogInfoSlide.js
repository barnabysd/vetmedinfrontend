import React, {useState,useRef,forwardRef} from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';


import BlockTextReveal from '../components/BlockTextReveal';
import CustomFluidImage from '../components/CustomFluidImage';
import SideDrawer from '../components/SideDrawer';
import Loader from '../components/Loader'
import CookieBanner from '../components/CookieBanner';
import UserChoice from '../components/UserChoice';
import { useCookies } from 'react-cookie'

import { makeStyles } from '@material-ui/core/styles'

import Transition from 'react-transition-group'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

import DogDetailTable from '../components/DogDetailTable'
import get from 'lodash/get'
import { graphql } from "gatsby"
import { processInternalLink } from '../utils/displayUtils'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import theme, { sm, md, lg, xl } from '../theme'
import TiltImage from '../components/TiltImage'
import TabButton from '../components/TabButtons'


const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',

      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

export default function ownerAndDogInfoSlide({data}){
    
    let resources = get(data, 'nodeDogoptions')
    //const resources =   resourcesAr[0]
    console.log(resources)
  
    if (!resources) {
      resources = [
      {
      
        field_headertextline3:'LISTEN.',
        field_bottombodytext: {processed:'<p>Build your canine heart disease management skills and prolong the lives of dogs with the help of this simple, fun digital tool.</p>'},
        
        field_bottomtitle: {processed:'<p>This activity will earn you 12 minutes of CPD points</p>'},
        
        field_buttonlinks:[{
          title:'Start',
          uri:'/case-studies-options/'
        }],
        field_toprighttext:[{processed:'You will need sound for part of this activity.'}]
      }
    ] }

    const [cookies, setCookie, removeCookie] = useCookies(['hasConsentSet','userChoice','dogChoice']);
    // const [cookieUserChoice, setCookieUserChoice, removeCookieUserChoice] = useCookies(['userChoice']);
    // const [cookieLoader, setCookieLoader, removeCookieLoader] = useCookies(['showLoader']);
    let stateFromCookie = { renderUserChoice: false, 
        renderLoader: false,
        renderCookieBanner: false,
        isPanelVisible1: true,
        isPanelVisible2: false,
        isPanelVisible3: false
    }
    const [state, setState] = useState(stateFromCookie)

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

  

  return (
  <Layout>
      {state.renderUserChoice ? <UserChoice unmountMe={handleUserChoiceUnmount} /> : ''}
      {state.renderLoader ? <Loader unmountMe={handleLoaderUnmount} /> : ''}
      {state.renderCookieBanner ? <CookieBanner unmountMe={handleCookieBannerUnmount} /> : ''}

      <SideDrawer /> 




      <div className={(useStyles()).root}>
                <Grid container 
                spacing={0}
                spacing={0}
                justify="center"
                style={{border: '1px solid black', minHeight: '100vh',width:'100%',maxWidth: '3000px' }}>

                <Grid item xs={12} sm={8}  align="center" style={{border: '0px solid red'}}>
                    <div style={{position: 'relative',width: '100%', minHeight: '100%', border: '0px solid red'}}>
                        {/* <div style={{width: '75%',height:'100%',padding:'2rem',fontSize:'1.5rem',fontWeight:'700',fontFamily:'Poppins'}}> */}
                            <div style={{position: 'absolute',left:'25%',top:'10%',width: '600px', height: '100%',zIndex:(state.isPanelVisible1 ? 3 : 2)}}>
                                {/* <CustomFluidImage imgName="infoCard.png" /> */}
                                <DogDetailTable resources={resources} />
                            </div>
                            <div style={{position: 'absolute',left:'30%',top:'15%',width: '600px', height: '100%',zIndex:(state.isPanelVisible2 ? 3 : 2)}}>
                                {/* <CustomFluidImage imgName="infoCard.png" /> */}
                                <DogDetailTable resources={resources} rowPointer={2} />
                            </div>
                            <div style={{position: 'absolute',left:'50%',bottom:'10%',width: '300px', height: '30px'}}>
                                <TabButton />
                            </div>
                            <TabButton />

                        {/* </div> */}
                    </div>
                </Grid>
                
                <Grid item xs={12} sm={4}  align="center" style={{border: '0px solid red'}}>
                <div data-acive={state.isPanelVisible1} style={{display: (state.isPanelVisible1 ? 'block':'none'), position: 'relative',margin:'auto', width: '75%', minHeight: '100%',padding:'2rem', border: '0px solid red'}}>
                    
                        {/* <div style={{ width: '75%',height:'100%',padding:'2rem'}}> */}
                        {/* <Transition in={true} timeout={1000} appear={true}> */}
                      
                       

                            <div style={{position: 'absolute',left: '-200px',top: 0}}><TiltImage axis="Y" imgName="mrs_jenkins_pose_01@3x.png"  height="600px" width="600px"/></div>
                        <div style={{position: 'absolute',left: '-150px',top: '10%'}}><TiltImage axis="Y" imgName="dudley_standing_pose_02@3x.png" height="600px" width="600px"/></div>
                 
                           
                            {/* </Transition>  */}
  
                        {/* </div> */}
                    
                    </div>
              
                <div data-acive={state.isPanelVisible2} style={{display: (state.isPanelVisible1 ? 'block':'none'),position: 'relative',margin:'auto', width: '75%', minHeight: '100%',padding:'2rem', border: '5px solid red'}}>
                
                        {/* <div style={{ width: '75%',height:'100%',padding:'2rem'}}> */}
                        {/* <Transition in={true} timeout={1000} appear={true}> */}
                        
                            <CustomFluidImage imgName="reggieOwner.png" />
                            
                            {/* </Transition> */}
                            
                        {/* </div> */}
                    
                    
                    </div>
              
                    <div data-acive={state.isPanelVisible3} style={{display: (state.isPanelVisible1 ? 'block':'none'),position: 'relative',margin:'auto', width: '75%', minHeight: '100%',padding:'2rem', border: '5px solid red'}}>
                        {/* <div style={{width: '75%',height:'100%',padding:'2rem'}}>
                             */}
                            {/* <Transition in={true} timeout={1000} appear={true}> */}
                          
                            <CustomFluidImage imgName="reggieOwner.png" />
                           
                            {/* </Transition> */}
                        
                        {/* </div> */}
                        
                    </div>
                </Grid>
              

            </Grid>
        </div>

        <div style={{
        position: 'absolute',
        right: '0', 
        bottom: '0',
        width:'150px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        border: '0px solid red'

    }}><AniLink style={{display: 'flex',flexDirection:'row',alignItems:'center',width:'200px',height:'50px',textDecoration:'none',color:'white !important',fontFamily:'Poppins',fontWeight:'700'}} to="/">Continue <ArrowForwardRoundedIcon /></AniLink></div>

<div style={{
        position: 'absolute',
        left: '15%', 
        bottom: '0',
        width:'150px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        zIndex:'100',
        border:'0px solid red'

    }}> <AniLink to="/case-studies-choice/" style={{display: 'flex',flexDirection:'row',alignItems:'center',width:'200px',height:'50px',textDecoration:'none',color:'white !important',fontFamily:'Poppins',fontWeight:'700'}}><ArrowBackRoundedIcon />Change Dog</AniLink> </div>

  </Layout>
  )
}


export const pageQuery = graphql`{
    nodeDogoptions {
      changed(fromNow: false)
      drupal_id
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
  }`
  