import React from 'react'
import Layout from '../components/layout'
import "./sideBarExample.css"
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "gatsby"
import CaroGallery from '../components/CaroGallery';

export default () => (
  <Layout>
    <h1>UI examples</h1>
      <div style={{width: '800px', height: '300px'}}> <CaroGallery /></div>
      <Link to="/">Back to home</Link>
  </Layout>
)
