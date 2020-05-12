import React from 'react'
import Layout from '../components/layout'
import PulseButton from "../components/PulseButton"
import ScalingCheckBox from "../components/ScalingCheckBox"

import HomeIcon from "@material-ui/icons/Home";
import "./sideBarExample.css"

function onClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
  }

const items = [
    { name: "home", label: "Home", Icon: HomeIcon },
    { name: 'billing', label: 'Billing' },
    { name: 'settings', label: 'Settings' },
  ]
  
export default () => (
  <Layout>
    <h1>UI examples</h1>
    <p>
      <PulseButton />
      <ScalingCheckBox />
    </p>
  </Layout>
)
