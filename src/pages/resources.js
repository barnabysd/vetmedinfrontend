import React from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';
import styled from 'styled-components'
import SlideDrawer from '../components/SideDrawer'
import Grid from '@material-ui/core/Grid'
import ResourceVideo from '../components/ResourceVideo'
import { processInternalLink, stripUneededHtml, removeParagraphsTags } from '../utils/displayUtils'
import theme, { sm, md, lg, xl } from '../theme'
import VideoFullScreenWidget from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'


// const StyledButton = styled(Button)`
//   background-color: #6772e5;
//   &:hover {
//     background-color: #5469d4;
//   }
// `;

const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
`;
const VideoResourceSubheader = styled.div`
    width: 66.063rem;
    height: 2.5rem;
    font-family: ${theme.typography.fontFamily};
    font-size: 1.813rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: -0.29px;
    text-align: left;
    color: ${theme.palette.midnightBlue.main};
` 

const gridStyle = {border: '0px solid red',paddingBottom:'1rem'}
const mainGridStyle = {border: '0px solid red',height:'100%'}


// const ResourcesVideoCard = ({resources,itemPointer = "1"}) => {
//   return (<div style={{width:'200px',height:'300px'}}>
//         <ResourceVideo resources={resources} itemPointer={itemPointer}/>
//   </div>)
// }

class Resources extends React.Component {
  render() {
    const resourcesAr = get(this, 'props.data.allNodeResources.nodes')
    const resourceVideosAr = get(this, 'props.data.allNodeResourcevideocard.nodes')
    const resources = resourcesAr[0]
   
    const sections = []
    //debugger
    if (sections.length === 0 ) {
      const obj = {}
      obj.section = resourceVideosAr[0].field_videosection,
      obj.cards = []
      sections.push(obj)
    }
    for (let i = 0;i < resourceVideosAr.length;i++) {
        let inSectionsArray = false
        for (let ii = 0;ii < sections.length;ii++) {
          if (sections[ii].section === resourceVideosAr[i].field_videosection) {
             inSectionsArray = true
          }
        }
        if (inSectionsArray === false) {
          const obj = {}
          obj.section = resourceVideosAr[i].field_videosection,
          obj.cards = []
          sections.push(obj)
        }
    }
    //debugger
    for (let i = 0;i < sections.length;i++) {
      for (let ii = 0;ii < resourceVideosAr.length;ii++) {
         if (sections[i].section === resourceVideosAr[ii].field_videosection) {
            const narrators = []
            const narrator1 = {
              narrator: resourceVideosAr[ii].field_videonarrator1,
              location: resourceVideosAr[ii].field_videonarratorlocation1 ? resourceVideosAr[ii].field_videonarratorlocation1.processed : '',
              profession: resourceVideosAr[ii].field_videonarratorprofession1.processed,
              duration: resourceVideosAr[ii].field_videoduration1,
            }
              narrators.push(narrator1)
            if (resourceVideosAr[ii].field_videonarrator2 && resourceVideosAr[ii].field_videonarrator2 !== '') {
              const narrator2 = {
                narrator: resourceVideosAr[ii].field_videonarrator2,
                location: resourceVideosAr[ii].field_videonarratorlocation2 ? resourceVideosAr[ii].field_videonarratorlocation2.processed : '',
                profession: resourceVideosAr[ii].field_videonarratorprofession2.processed,
                duration: resourceVideosAr[ii].field_videoduration2,
              }
              narrators.push(narrator2)
            }
            if (resourceVideosAr[ii].field_videonarrator3 && resourceVideosAr[ii].field_videonarrator3 !== '') {
              const narrator3 = {
                narrator: resourceVideosAr[ii].field_videonarrator3,
                location: resourceVideosAr[ii].field_videonarratorlocation3 ? resourceVideosAr[ii].field_videonarratorlocation3.processed : '',
                profession: resourceVideosAr[ii].field_videonarratorprofession3.processed,
                duration: resourceVideosAr[ii].field_videoduration3,
              }
              narrators.push(narrator3)
            }

            let underLargeVideoText = ""
            for (let iii = 0;iii < narrators.length;iii++) {
              if (narrators.length > 1 && iii === narrators.length - 1) {
                underLargeVideoText = underLargeVideoText + " &amp; <strong>" + narrators[iii].narrator + "</strong>" + narrators[iii].profession
              } else {
                underLargeVideoText = underLargeVideoText + "<strong>" + narrators[iii].narrator + "</strong>" + narrators[iii].profession
              }
            }

            const videoObj = {
              videoUrl: resourceVideosAr[ii].relationships.field_video1.relationships.field_media_video_file.localFile ? resourceVideosAr[ii].relationships.field_video1.relationships.field_media_video_file.localFile.url : '',
              caption: resourceVideosAr[ii].field_videocaptiontext1 ? resourceVideosAr[ii].field_videocaptiontext1.processed : '',
              underLargeVideoText: underLargeVideoText,
              thumbnail:resourceVideosAr[ii].relationships.field_videothumbnail1.localFile.url,
              poster:resourceVideosAr[ii].relationships.field_videoposterimage1.localFile.url,
              narrators: narrators
            }
            sections[i].cards.push(videoObj)
         }
      }
    }

    console.log(resources)
    //console.log(resources.allResourcesJson)

    return (
      <Layout scrollablePage={true} showPercentIndicator={false} showBurgerMenuIcon={true}>
          <Grid container  
              spacing={0} 
              spacing={0} 
              justify="flex-start" 
              alignContent="flex-start"
              spacing={0}
              style={gridStyle}>
              
            
              <Grid item xs={12} sm={12} md={2} style={{paddingBottom:'0rem',paddingTop:'100px'}}>
                 <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={12} md={10} style={{paddingBottom:'0rem',paddingTop:'100px'}}>
                  <ThemeProvider theme={theme}>
                      <StyledTypography variant="h1">{resources.field_headertext}</StyledTypography>
                  </ThemeProvider>
              </Grid> 
          </Grid>

          <ResourceVideoSection section={sections[0]} />
          {sections.length > 1 ?  <ResourceVideoSection section={sections[1]} /> : ''}
          {sections.length > 2 ?  <ResourceVideoSection section={sections[2]} /> : ''}
          {sections.length > 3 ?  <ResourceVideoSection section={sections[3]} /> : ''}
          {sections.length > 4 ?  <ResourceVideoSection section={sections[4]} /> : ''}

          <VideoFullScreenWidget videosData={sections} instance="One" />
        </Layout>
    )
  }
}

const ResourceVideoSectionHeader = styled.div`
  width: 1057px;
  height: 40px;
  font-family: ${theme.typography.fontFamily};
  font-size: 29px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.29px;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
`
const ResourcesGrid = styled(Grid)`
    @media (max-width: ${md}px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
`

const ResourceVideoSection = ({section}) => {
  //debugger

  return (
    <ResourcesGrid container  
              spacing={0} 
              spacing={0} 
              justify="center" 
              alignContent="center"
              spacing={0}
              style={gridStyle}>

             <Grid item xs={12} sm={12} md={2}  style={{paddingBottom:'1rem'}}>

             </Grid>
            
              <Grid item xs={12} sm={12} md={10} style={{paddingBottom:'1rem'}}>
                  <ResourceVideoSectionHeader>{section ? section.section : ''}</ResourceVideoSectionHeader>
                
              </Grid>
              

              <Grid item xs={12} sm={12} md={2}  style={gridStyle}></Grid>
          
              <Grid item xs={12} sm={12} md={3}  style={gridStyle}>
                  <ResourceVideo resources={section.cards[0]} itemPointer="1"/>
              </Grid>

              <Grid item xs={12} sm={12} md={3} style={gridStyle}>
                  { section.cards.length > 1 ? <ResourceVideo resources={section.cards[1]} itemPointer="2"/> : ''}
               </Grid>

               <Grid item xs={12} sm={12} md={3} style={gridStyle}>
                    { section.cards.length > 2 ? <ResourceVideo resources={section.cards[2]} itemPointer="3"/> : ''}
                </Grid>

                <Grid item xs={12} sm={12} md={1}   style={gridStyle}></Grid>



      
                <Grid item xs={12}  sm={12} md={2}  style={gridStyle}></Grid>

                <Grid item xs={12}  sm={12} md={3}  style={gridStyle}>
                { section.cards.length > 3 ? <ResourceVideo resources={section.cards[3]} itemPointer="4"/> : '' }
              </Grid>

              <Grid item xs={12}  sm={12} md={3}  style={gridStyle}>
                  { section.cards.length > 4 ? <ResourceVideo resources={section.cards[4]} itemPointer="5"/> : ''}
               </Grid>

               <Grid item xs={12}  sm={12} md={3}  style={gridStyle}>
                    { section.cards.length > 5 ? <ResourceVideo resources={section.cards[5]} itemPointer="6"/> : ''}
                 
                </Grid>

                <Grid item xs={12}  sm={12} md={1}  style={gridStyle}></Grid>




              
              
      </ResourcesGrid>
  )
}

export default Resources

export const query = graphql`
{
  allNodeResources {
    nodes {
      drupal_id
      created(fromNow: false)
      field_additionalbodytext {
        processed
      }
      field_bodytext {
        processed
      }
      field_headertext
      path {
        alias
      }
    }
  }
  allNodeResourcevideocard {
    nodes {
      field_videocaptiontext1 {
        processed
      }
      drupal_id
      created(fromNow: false)
      field_videoduration1
      field_videonarrator1
      field_videonarrator2
      field_videonarrator3
      field_videonarratorlocation1 {
        processed
      }
      field_videonarratorlocation2 {
        processed
      }
      field_videonarratorlocation3 {
        processed
      }
      field_videonarratorprofession1 {
        processed
      }
      field_videonarratorprofession2 {
        processed
      }
      field_videonarratorprofession3 {
        processed
      }
      field_videoorder
      field_videoposterimage1 {
        alt
        height
        title
        width
      }
      field_videosection
      field_videotext1 {
        processed
      }
      field_videothumbnail1 {
        alt
        height
        title
        width
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
          localFile {
            url
          }
        }
      }
    }
  }
}
`