// These must be the first lines in src/index.js
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable'

import React, {useState} from 'react'
import Layout from '../components/layout'
import theme, { sm, md, lg, xl } from '../theme'
import get from 'lodash/get'
import { graphql } from "gatsby"

export default function IndexPage({data}){
  let resources = get(data, 'nodeHomepage')
  console.log('resources', resources)
  //NB: - need an empty node to pass as child. See <p></p> below
  return (
      <Layout>
        <p></p>
      </Layout>
  )
}

export const pageQuery = graphql`{
    nodeHomepage {
        path {
          alias
        }
        drupal_id
        field_headertextline3
        field_headertextline2
        field_headertextline1
        field_bottombodytext {
          processed
        }
        field_bottomtitle {
          processed
        }
        field_buttonlinks {
          title
          uri
        }
        field_toprighttext {
          processed
        }
        changed(fromNow: false)
    }
}`


