import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';

import OrangeRoundedButtonWithBLCorner from '../components/OrangeRoundedButtonWithBLCorner'

import BlockTextReveal from '../components/BlockTextReveal';
import CustomFluidImage from '../components/CustomFluidImage';

export default () => (
  <Layout>
      <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #092178',
        minHeight: '300px',
        maxWidth: '800px',
        width: '800px'
    }}>
      <div style={{width: '300px', height: '300px'}}> <CustomFluidImage imgName="panelCaro.png" /></div>


      <div style={{width: '300px', height: '300px'}}> 
      <div><BlockTextReveal textLabel="LISTEN"  colour="#24add6"/></div>
      <div><BlockTextReveal textLabel="INVESTIGATE" colour="#0c2f8b"/></div>
      <div><BlockTextReveal textLabel="TREAT" colour="#ffffff"/><OrangeRoundedButtonWithBLCorner buttonText="Start" /></div> 
      
      </div>
      </div>
     
  </Layout>
)
