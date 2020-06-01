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

const ResourcesVideoCard = () => {
  return (<div style={{width:'200px',height:'200px'}}>VIDEO CODE HERE</div>)
}

class Resources extends React.Component {
  render() {
    const resourcesAr = get(this, 'props.data.allResourcesJson.nodes')
    const resources = resourcesAr[0]
    console.log(resources)
    //console.log(resources.allResourcesJson)

    return (
        <LayoutScrollable>
          
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
                        <StyledTypography variant="body1">{resources.additionalBodyText}</StyledTypography>
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

                  <Grid container  
                  spacing={0} 
                  spacing={0} 
                  justify="flex-start" 
                  style={gridStyle}>
                
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard />
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard />
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard />
                      </Grid>

                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard />
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard />
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard />
                      </Grid>

                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard />
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard />
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard />
                      </Grid>

                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard />
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard />
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard />
                      </Grid>

                  </Grid>

              </Grid>
              <Grid item xs={12} sm={2}  style={gridStyle}>
                  <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={12}  style={gridStyle}>
                  <div style={{height: '100px'}}></div>
              </Grid>
          </Grid>
        </LayoutScrollable>
    )
  }
}

export default Resources

export const pageQuery = graphql`{
  allResourcesJson {
    nodes {
      additionalBodyText
      bodyText
      videoCaptionText1
      videoDuration1
      videoFileCaptions1 {
        url
      }
      videoFileDescription1 {
        url
      }
      videoFileTranscript1 {
        url
      }
      videoName1 {
        url
      }
      videoNarrator1
      videoPosterImage {
        url
      }
      videoText1
      videoThumbnail1 {
        url
      }
      headerText
    }
  }
}`