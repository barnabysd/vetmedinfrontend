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

function ResponseForm() {
    const [state, setState] = React.useState({})

  const handleSubmit = async (e) => {
      console.log(JSON.stringify(state))
        e.preventDefault()
        const val = await fetch('https://api.formik.com/submit/collect-score/scorecollector', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
        })
        console.log(val)
  }

    return (

        <Grid container  
                  spacing={0} 
                  spacing={0} 
                  justify="flex-start" 
                  style={gridStyle}>
                
            <Grid item xs={12} sm={4}  style={gridStyle}>
                <form onSubmit={handleSubmit}>
                    
                    <input type="hidden" name="name"  value={state.name} />
                
                   
                    <input type="hidden" name="email" value={state.email} />
                
                    <button type="submit">Resend </button>
                </form>
            </Grid>

        </Grid>
   
    );
  
}

class CertificateResponse extends React.Component {
  render() {
    const resourcesAr = get(this, 'props.data.allCertificateResponseJson.nodes')
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
                        <StyledTypography variant="h1">{resources.headerText}</StyledTypography>
                        <StyledTypography variant="body1">{resources.bodyText}</StyledTypography>
                   </ThemeProvider>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                 <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                  <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={8}  style={gridStyle}>

                 <ResponseForm />

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

export default CertificateResponse

export const pageQuery = graphql`{
  allCertificateResponseJson {
    nodes {
        headerText
        bodyText
    }
  }
}`