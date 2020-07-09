import React from 'react'
import get from 'lodash/get'
import LayoutScrollable from '../components/layoutScrollable'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from '../theme'
import styled from 'styled-components'
import SlideDrawer from '../components/SideDrawer'
import Grid from '@material-ui/core/Grid'
import { processInternalLink, processHtml, removeParagraphsTags } from '../utils/displayUtils'

const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
`;

const gridStyle = {border: '0px solid red'}

class TermsOfUse extends React.Component {
  render() {
    const resourcesAr = get(this, 'props.data.allNodeTermsofuse.nodes')
    const resources = resourcesAr[0]
    console.log(resources)
    //console.log(resources.allResourcesJson)

    const bodyHtml = { __html: resources.field_bodytext.processed }

    return (
      <Layout scrollablePage={true} showPercentIndicator={false}>
          
    

          <Grid container  
              spacing={0} 
              spacing={0} 
              justify="flex-start" 
              style={gridStyle}>
              <Grid item xs={12} sm={12} style={gridStyle}>
                 <div style={{height: '100px'}}></div>
              </Grid>



              <Grid item xs={12} sm={2}  style={gridStyle}>
                 <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={8} style={gridStyle}>
                  <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{resources.field_headertext}</StyledTypography>
                       
                        <div style={{width:'100%'}} dangerouslySetInnerHTML={bodyHtml}></div>
                   </ThemeProvider>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                  <div style={{width: '100px'}}></div>
              </Grid>



              <Grid item xs={12} sm={12}  style={gridStyle}>
                  <div style={{height: '100px'}}></div>
              </Grid>
          </Grid>
        </Layout>
    )
  }
}

export default TermsOfUse

export const pageQuery = graphql`{
     allNodeTermsofuse {
    nodes {
      drupal_id
      field_bodytext {
        processed
      }
      field_headertext
      path {
        alias
      }
    }
  }
}`