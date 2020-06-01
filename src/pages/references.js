import React from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from '../theme'
import styled from 'styled-components'
import SlideDrawer from '../components/SideDrawer'
import Grid from '@material-ui/core/Grid'

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

class References extends React.Component {
  render() {
    const resourcesAr = get(this, 'props.data.allReferencesJson.nodes')
    const resources = resourcesAr[0]
    console.log(resources)
    //console.log(resources.additionalBodyText)

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
              <Grid item xs={12} sm={2}  style={gridStyle}></Grid>
              <Grid item xs={12} sm={8}  style={gridStyle}>
                  <ThemeProvider theme={theme}>
                    <StyledTypography variant="h1">{resources.referencesHeaderText}</StyledTypography>
                    <StyledTypography variant="body1">{resources.referenceText1}</StyledTypography>
                    <StyledTypography variant="body1">{resources.referenceText2}</StyledTypography>
                    <StyledTypography variant="body1">{resources.referenceText3}</StyledTypography>
                    <StyledTypography variant="body1">{resources.referenceText4}</StyledTypography>
                    <StyledTypography variant="body1">{resources.referenceText5}</StyledTypography>
                    <StyledTypography variant="body1">{resources.referenceText6}</StyledTypography>
                  </ThemeProvider>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}></Grid>
          </Grid>
        </Layout>
    )
  }
}

export default References

export const pageQuery = graphql`{
  allReferencesJson {
    nodes {
      referenceText1
      referenceText2
      referenceText3
      referenceText4
      referenceText5
      referenceText6
      referenceText7
      referenceText8
      referencesHeaderText
    }
  }
}`