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

export default function homePage(){
  const [state,setState] = useState({renderChild: true})
  const handleChildUnmount = () =>  {
      setState({renderChild: false});
  }
  return (
  <Layout>
      {/* <Loader /> */}
      {state.renderChild ? <CookieBanner unmountMe={handleChildUnmount} /> : <p>No Banner shown</p>}
     
      {/* <UserChoice /> */}
      {/* <SideDrawer /> */}
      {/* <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
        border: '0px solid #092178',
        minHeight: '300px',
        maxWidth: '800px',
        width: '800px'
      }}>
          <div style={{ position: 'absolute', 
            left: '0', 
            top: '0',width: '300px', height: '300px'}}> 
              <CustomFluidImage imgName="poppyHomePage.png" />
          </div>

          <div style={{position: 'absolute', 
            right: '0', 
            top: '0',width: '500px', height: '300px'}}> 
              <div><BlockTextReveal textLabel="LISTEN"  colour="#24add6"/></div>
              <div><BlockTextReveal textLabel="INVESTIGATE" colour="#0c2f8b"/></div>
              <div style={{display:'flex',flexDirection:'row'}}><BlockTextReveal textLabel="TREAT" colour="#ffffff"/>
                <div style={{position: 'absolute', 
                    right: '0', 
                    bottom: '0',height: '150px !important'}}>
                  <OrangeRoundedButtonWithBLCorner buttonText="Start" />
                </div>
              </div>   
          </div>
      
    </div> */}
  </Layout>
)
  }
