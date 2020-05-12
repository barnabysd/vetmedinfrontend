import React from 'react'
import Layout from '../components/layout'
import BackgroundVideoCustom from '../components/BackgroundVideoCustom'
import '../components/backgroundVideoCustom.css'

export default () => (
  <Layout>
    <BackgroundVideoCustom></BackgroundVideoCustom>
    <div className="content-overlaying-bg-video">
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
        {/* <button id="myBtn" onclick="myFunction()">Pause</button> */}
    </div>
  </Layout>
)