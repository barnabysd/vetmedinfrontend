import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Vetmedin</h1>
    <p>Some text here.</p>
     {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
     <p><Link to="/case-one">Go to case 1</Link></p>
     <p><Link to="/casetwo">Go to case 2</Link></p>
     <p><Link to="/casethree">Go to case 3</Link></p>
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/about/">Go to About</Link></p>
    
    
  </Layout>
)

export default IndexPage
