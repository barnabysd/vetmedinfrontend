import React from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';
import theme, { sm, md, lg, xl } from '../theme'
import styled from 'styled-components'
import SlideDrawer from '../components/SideDrawer'
import Grid from '@material-ui/core/Grid'
import { processInternalLink, stripUneededHtml, removeParagraphsTags } from '../utils/displayUtils'

const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
`

const gridStyle = {border: '0px solid red'}

const TermsOfUseBody = styled.div`
         & ul li {
              margin-left: 3rem;
         }

         & li {
              font-size: 1rem;
              font-weight: 400;
         }
       
         & li span{
              font-size: 1rem;
              font-weight: 400;
         }
         & ul {
              font-size: 1rem;
         }
`

const TermsOfUseGrid = styled(Grid)`
    @media (max-width: ${md}px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
`

class TermsOfUse extends React.Component {
  render() {
    const resourcesAr = get(this, 'props.data.allNodeTermsofuse.nodes')
    const resources = resourcesAr[0]
    console.log(resources)
    //console.log(resources.allResourcesJson)

    const bodyHtml = { __html: resources.field_bodytext.processed }

    return (
      <Layout scrollablePage={true} showPercentIndicator={false} showBurgerMenuIcon={true}>
          
          <TermsOfUseGrid container  
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
                       
                        <TermsOfUseBody style={{width:'100%'}} dangerouslySetInnerHTML={bodyHtml}></TermsOfUseBody>
                   </ThemeProvider>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                  <div style={{width: '100px'}}></div>
              </Grid>

              <Grid item xs={12} sm={12}  style={gridStyle}>
                  <div style={{height: '100px'}}></div>
              </Grid>
          </TermsOfUseGrid>

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