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
import ResourceVideo from '../components/ResourceVideo'
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

const ResourcesVideoCard = ({resources,itemPointer = "1"}) => {
  return (<div style={{width:'200px',height:'200px'}}><ResourceVideo resources={resources} itemPointer={itemPointer}/></div>)
}

class Resources extends React.Component {
  render() {
    const resourcesAr = get(this, 'props.data.allNodeResources.nodes')
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
                        <StyledTypography variant="h1">{resources.field_headertext}</StyledTypography>
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
                            <ResourcesVideoCard resources={resources} itemPointer="1"/>
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard  resources={resources} itemPointer="1"/>
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard  resources={resources} itemPointer="1"/>
                      </Grid>

                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard  resources={resources} itemPointer="1"/>
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard  resources={resources} itemPointer="1"/>
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard  resources={resources} itemPointer="1"/>
                      </Grid>

                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard  resources={resources} itemPointer="1"/>
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard  resources={resources} itemPointer="1"/>
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard  resources={resources} itemPointer="1"/>
                      </Grid>

                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard  resources={resources} itemPointer="1"/>
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard  resources={resources} itemPointer="1"/>
                      </Grid>
                      <Grid item xs={12} sm={4}  style={gridStyle}>
                            <ResourcesVideoCard  resources={resources} itemPointer="1"/>
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
  allNodeResources {
    nodes {
      field_headertext
      field_bodytext{
        processed
      }
      field_videotext1{
        processed
      }
      field_videoduration1
      field_videonarrator1
      field_additionalbodytext{
        processed
      }
      relationships {
        field_video1 {
          relationships {
            field_media_video_file {
            
              localFile {
                url
              }
            }
          }
        }
        field_videoposterimage1 {
          localFile {
            url
          }
        }
        field_videothumbnail1 {
          drupal_id
          localFile {
            url
          }
        }
      }
    }
  }
}`