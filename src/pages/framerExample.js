import * as React from "react"
import { Link } from "gatsby"
// import { FramerSliderAndPic } from "../components/FramerSliderAndPic"
import SEO from "../components/seo"
import Layout from '../components/layout'
import Loadable from "@loadable/component"

const FramerSliderAndPic = Loadable( () => import("../components/FramerSliderAndPic") )

export default function FramerExample() {
  const [scale, setScale] = React.useState(0.5)
  const constraint = (480 * scale - 120) / 2
  return (
    <Layout>
       <SEO title="About" />
        <h1>animation</h1>
        {/* <FramerSliderAndPic /> */}
        <Link to="/">Back to home</Link>
    </Layout>
  );
}

