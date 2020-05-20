
// These must be the first lines in src/index.js
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable'

import InternalProvider from 'gatsby-plugin-transition-link/context/InternalProvider'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const ExampleLinks = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Vetmedin</h1>
     {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <p><Link to="/case-one">Go to case 1</Link></p>
    <p><Link to="/casetwo">Go to case 2</Link></p>
    <p><Link to="/casethree">Go to case 3</Link></p> */}
    <p><Link to="/homePage/">HomePage</Link></p>
    <p><Link to="/contactDynamicFormik/">Contact form</Link></p>
    <p><Link to="/slideSection/">Slide</Link></p>
    {/* <p><Link to="/responsiveVideoPlayerFullWidthVideo/">Go to Responsive FW Video</Link></p> */}
    {/* <p><Link to="/sideBarExample/">Go to Side Bar</Link></p> */}
    <p><Link to="/uiExample/">Go to UI Example</Link></p>
    <p><Link to="/animateExample/">Go to Animate Example</Link></p>
    <p><Link to="/backgroundVideoExample/">Go to Background Video Example</Link></p>
    <p><Link to="/framerExample/">Go to Framer Example</Link></p>
    <p><Link to="/socialShareExample/">Go to Social Share Example</Link></p>
    {/* <p><Link to="/tabPageExample/">Go to Social Share Example</Link></p> */}
    <p><Link to="/quiz">Go to Quiz</Link></p>
    <p><Link to="/video/">Go to Video</Link></p>
    {/* <p><Link to="/about/">Go to About</Link></p>
    <p><Link to="/contact/">Go to contact</Link></p> */}
    <p><AniLink paintDrip to="/about/">
     Go to paint drip transition
    </AniLink>
    <AniLink swipe to="/about/">
     Go to swipe transition
    </AniLink></p>
    
    
  </Layout>
)

export default ExampleLinks
