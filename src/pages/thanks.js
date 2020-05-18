import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
export default () => (
  <Layout>
    <h1>Thank you!</h1>
    <p>This is a custom thank you page for form submissions</p>
    <Link to="/">Back to home</Link>
  </Layout>
)