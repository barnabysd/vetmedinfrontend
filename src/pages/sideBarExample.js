import React from 'react'
import Layout from '../components/layout'
import Sidebar from "../components/SideBar"

import HomeIcon from "@material-ui/icons/Home";
// import "./sideBarExample.css"

function onClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
  }

const items = [
    { name: "home", label: "Home", Icon: HomeIcon },
    { name: 'this', label: 'this' },
    { name: 'that', label: 'that' },
  ]
  
export default () => (
  <Layout>
    <div className="sidebar">
      <Sidebar items={items} />
    </div>
    <h1>Thank you!</h1>
    <p>This is a custom thank you page for form submissions</p>
  </Layout>
)
