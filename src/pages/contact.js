import React from 'react'
import get from 'lodash/get'
import LayoutScrollable from '../components/layoutScrollable'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from '../theme'
import styled from 'styled-components'
import SlideDrawer from '../components/SideDrawer'
import Grid from '@material-ui/core/Grid'
import { processInternalLink, processHtml, removeParagraphsTags } from '../utils/displayUtils'

// const StyledButton = styled(Button)`
//   background-color: #6772e5;
//   &:hover {
//     background-color: #5469d4;
//   }
// `;

const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
`;

const gridStyle = {border: '0px solid red'}

const PhoneNumber = ({textLabel}) => {
    return (<div style={{width: '100%',marginBottom:'2rem' }}><Typography variant="caption">{textLabel}</Typography></div>)
}
const EmailAddress = ({textLabel}) => {
    return (<div style={{width: '100%',marginBottom:'2rem' }}><Typography variant="caption">{textLabel}</Typography></div>)
}

class Contact extends React.Component {
  render() {
    const resourcesAr = get(this, 'props.data.allNodeContact.nodes')
    const resources = resourcesAr[0]
    console.log(resources)
    //console.log(resources.allResourcesJson)

    return (
        <Layout>
          
          <SlideDrawer />

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
                        <StyledTypography variant="body1">{removeParagraphsTags(resources.field_bodytext.processed)}</StyledTypography> 
                   </ThemeProvider>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                 <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                  <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={8}  style={gridStyle}>
                  <ThemeProvider theme={theme}>
                      <div>
                        <StyledTypography variant="h5">{removeParagraphsTags(resources.field_contactboxheader1)}</StyledTypography>
                        <StyledTypography variant="body1">{removeParagraphsTags(resources.field_contactboxbody1)}</StyledTypography>
                        <PhoneNumber textLabel={resources.field_contactphonenumber1} />
                        <EmailAddress textLabel={resources.field_contactemail1} />
                      </div>
                      <div>
                        <StyledTypography variant="h5">{removeParagraphsTags(resources.field_contactboxheader2)}</StyledTypography>
                        <StyledTypography variant="body1">{removeParagraphsTags(resources.field_contactboxbody2)}</StyledTypography>
                        <PhoneNumber textLabel={resources.field_contactphonenumber2} />
                        <EmailAddress textLabel={resources.field_contactemail2} />
                      </div>
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

export default Contact

export const pageQuery = graphql`{
    allNodeContact {
    nodes {
      drupal_id
      field_additionalbodytext {
        processed
      }
      field_bodytext {
        processed
      }
      field_contactboxheader1
      field_contactboxheader2
      field_contactboxbody1
      field_contactboxbody2
      field_contactemail1
      field_contactemail2
      field_contactphonenumber1
      field_contactphonenumber2
      field_headertext
      path {
        alias
      }
    }
  }
}`