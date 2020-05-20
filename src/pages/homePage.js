import React, {useState} from 'react'
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

export default function homePage(){
  const [cookies, setCookie, removeCookie] = useCookies(['hasConsentSet','userChoice','userChoice']);
  // const [cookieUserChoice, setCookieUserChoice, removeCookieUserChoice] = useCookies(['userChoice']);
  // const [cookieLoader, setCookieLoader, removeCookieLoader] = useCookies(['showLoader']);
  let stateFromCookie = { renderUserChoice: false, renderLoader: false, renderCookieBanner: false }
  const [state, setState] = useState(stateFromCookie)

  const handleUserChoiceUnmount = () =>  {
      setState({ renderUserChoice: false, renderLoader: false, renderCookieBanner: false});
  }

  const handleLoaderUnmount = () =>  {
      setState({ renderUserChoice: false, renderLoader: false, renderCookieBanner: false});
  }

  const handleCookieBannerUnmount = () =>  {
      // setCookie('hasConsentSet', true, { path: '/' });
      setState({renderUserChoice: false, renderLoader: false, renderCookieBanner: false});
  }

  return (
  <Layout>
      {state.renderUserChoice ? <UserChoice unmountMe={handleUserChoiceUnmount} /> : ''}
      {state.renderLoader ? <Loader unmountMe={handleLoaderUnmount} /> : ''}
      {state.renderCookieBanner ? <CookieBanner unmountMe={handleCookieBannerUnmount} /> : ''}
      
      <SideDrawer /> 

      <div style={{position: 'absolute',right: '0',top: '10%',marginLeft:'-100px', width: '200px', height: '200px'}}>
          <div style={{paddingLeft: '1rem',fontWeight:'400',paddingRight: '2rem'}}>You will need sound for
part of this activity.</div><div style={{position: 'absolute',right: '0',top: '10%',width: '30px', height: '5px',backgroundColor:'#fc9a5c'}}></div>
      </div>

      <div style={{position: 'absolute',left: '20%',top: '10%',marginLeft:'-100px', width: '200px', height: '200px'}}>
            <CustomFluidImage imgName="userChoiceLogoWithTrans.png" />
      </div>
      <div style={{position: 'absolute',right: '50%',bottom: '0',width: '5px', height: '30px'}}>
            <div style={{position: 'absolute',right: '0',top: '0',width: '5px', height: '30px',backgroundColor:'#fc9a5c'}}></div>
      </div>

      <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
        border: '0px solid #092178',
        minHeight: '400px',
        maxWidth: '800px',
        width: '800px'
      }}>
          <div style={{ position: 'absolute', 
            left: '0', 
            top: '0',width: '300px', height: '400px'}}> 
              <CustomFluidImage imgName="poppyHomePage.png" />
          </div>

          <div style={{position: 'absolute', 
            right: '0', 
            top: '0',width: '500px', height: '300px'}}> 
              <div><BlockTextReveal textLabel="LISTEN"  colour="#24add6"/></div>
              <div><BlockTextReveal textLabel="INVESTIGATE" colour="#0c2f8b"/></div>
              <div style={{display:'flex',flexDirection:'row'}}>
                <BlockTextReveal textLabel="TREAT" colour="#ffffff"/>
                <div style={{position: 'absolute', 
                    right: '0', 
                    bottom: '0',height: '150px !important'}}>
                  <OrangeRoundedButtonWithBLCorner buttonText="Start" to="/"  />
                </div>
              </div>   
              <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{width:'100%',fontFamily:'Poppins',fontSize:'0.75rem',fontWeight:'400'}}>
                  Build your canine heart disease management skills
                  and prolong the lives of dogs with the help of this
                  simple, fun digital tool.
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <div style={{width:'50px', height: '50px'}}>
                        <CustomFluidImage imgName="timer.png" />
                    </div>
                    <div style={{paddingLeft:'1rem',width:'80%',fontFamily:'Poppins',fontSize:'0.75rem',fontWeight:'400'}}>
                         This activity will earn you 12 minutes of CPD points
                    </div>
                </div>
                
              </div>   
          </div>

          
      
    </div> 
  </Layout>
  )
}
