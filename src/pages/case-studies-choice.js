import React, {useState,useRef,forwardRef} from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';

import OrangeRoundedButtonWithBLCorner from '../components/OrangeRoundedButtonWithBLCorner'

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

const EmailInput = React.forwardRef((props, ref) => (
    <input ref={ref} {...props} type="email" className="AppEmailInput" />
  ));
  

export default function caseStudyChoices(){
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
        setCookie('dogChoice','dudley')     
    }
    const setChoiceAsOwner2 = (event) => {
        setCookie('dogChoice','poppy')     
    }
    const setChoiceAsOwner3 = (event) => {
        setCookie('dogChoice','reggie')     
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
                
                <Grid item xs={12} sm={3}  align="center" style={{border: '1px solid red'}}>
                <div style={{position: 'relative',margin:'auto', width: '75%', minHeight: '100%',padding:'2rem', border: '5px solid red'}}>
                    
                        {/* <div style={{ width: '75%',height:'100%',padding:'2rem'}}> */}
                        {/* <Transition in={true} timeout={1000} appear={true}> */}
                      
                            <CustomFluidImage imgName="reggieOwner.png" />
                            <Fab style={{position: 'absolute',left:'50%',bottom:'10%'}} color="primary" aria-label="show dog and owner name. In this case Dudley" onClick={showCaseStudyOwner1}>
                            <AddIcon />
                        </Fab>
                        <AniLink paintDrip data-acive={state.isPanelVisible1} style={{position: 'absolute',left:0,bottom:0,width:'100%',display: (state.isPanelVisible1 ? 'block':'none')}} to='/ownerAndDogInfoSlide/' onClick={setChoiceAsOwner1}>
                            <CustomFluidImage  data-acive={state.sPanelVisible1} imgName="dogNamePanelDudley.png" />
                        </AniLink>
                            {/* </Transition>  */}
  
                        {/* </div> */}
                    
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}  align="center" style={{border: '1px solid red'}}>
                <div style={{position: 'relative',margin:'auto', width: '75%', minHeight: '100%',padding:'2rem', border: '5px solid red'}}>
                
                        {/* <div style={{ width: '75%',height:'100%',padding:'2rem'}}> */}
                        {/* <Transition in={true} timeout={1000} appear={true}> */}
                        
                            <CustomFluidImage imgName="reggieOwner.png" />
                            <Fab  style={{position: 'absolute',left:'50%',bottom:'10%'}} color="primary" aria-label="show dog and owner name. In this case Poppy" onClick={showCaseStudyOwner2}>
                            <AddIcon />
                            
                            </Fab>
                            <AniLink paintDrip data-acive={state.isPanelVisible2} style={{position: 'absolute',left:0,bottom:0,width:'100%',display: (state.isPanelVisible2 ? 'block':'none')}} to='/ownerAndDogInfoSlide/' onClick={setChoiceAsOwner2}>
                                <CustomFluidImage  data-acive={state.isPanelVisible2} imgName="dogNamePanelPoppy.png" />
                            </AniLink>
                            {/* </Transition> */}
                            
                        {/* </div> */}
                    
                    
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}  align="center" style={{border: '1px solid red'}}>
                    <div style={{position: 'relative',margin:'auto', width: '75%', minHeight: '100%',padding:'2rem', border: '5px solid red'}}>
                        {/* <div style={{width: '75%',height:'100%',padding:'2rem'}}>
                             */}
                            {/* <Transition in={true} timeout={1000} appear={true}> */}
                          
                            <CustomFluidImage imgName="reggieOwner.png" />
                            <Fab  style={{position: 'absolute',left:'50%', bottom:'10%'}} color="primary" aria-label="show dog and owner name. In this case Reggie" onClick={showCaseStudyOwner3}>
                                <AddIcon />
                            </Fab>
                            <AniLink paintDrip data-acive={state.isPanelVisible3} to='/ownerAndDogInfoSlide/' style={{position: 'absolute',left:0,bottom:0,width:'100%',display: (state.isPanelVisible3 ? 'block':'none')}}  onClick={setChoiceAsOwner3}>
                                <CustomFluidImage data-acive={state.isPanelVisible3}  imgName="dogNamePanelReggie.png" />
                            </AniLink>
                            {/* </Transition> */}
                        
                        {/* </div> */}
                        
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}  align="center" style={{border: '1px solid red'}}>
                    {/* <div style={{position: 'relative',width: '100%', minHeight: '100%', border: '5px solid red'}}> */}
                        <div style={{width: '75%',height:'100%',padding:'2rem',fontSize:'1.5rem',fontWeight:'700',fontFamily:'Poppins'}}>
                        Choose your dog
                        </div>
                        
                    {/* </div> */}
                </Grid>

            </Grid>
        </div>
  </Layout>
  )
}
