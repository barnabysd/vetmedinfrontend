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
import { removeParagraphsTags } from '../utils/displayUtils'
import { ContainerGrid, PrescribingInfoAndFurniture, BlueDividerLine } from '../components/GenericPagesParts'


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
    const resourcesAr = get(this, 'props.data.allNodeReferences.nodes')
    const footerAr = get(this, 'props.data.allNodeGenericpagefurniture.nodes')
  
    const resources = resourcesAr[0]
    const footer = footerAr[0]
 
    const footerHtml = { __html: footer.field_bodytext.processed }

    return (
      <Layout scrollablePage={true} showPercentIndicator={false} showBurgerMenuIcon={true}>
          
          <ContainerGrid container  
              spacing={0} 
              spacing={0} 
              justify="flex-start">
              <Grid item xs={12} sm={12}>
                 <div style={{height: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={2}>
                 <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={8}>
            
                  <ThemeProvider theme={theme}>
                    <div style={{display: 'flex', flexDirection:'row',marginLeft: '1rem',marginRight: '1rem'}}><StyledTypography variant="h1">{resources.field_headertext}</StyledTypography></div>
{ 
                    (resources.field_references).map((child, index) => {
                        const entryHtml = { __html: child.processed  }

                        const entry = removeParagraphsTags("")
                        
                        return [ entry, index !== (resources.field_references).length - 1 && (
                            // <StyledTypography variant="body1">{entry}</StyledTypography>
                             <div key={("key" + index + 1)} style={{display: 'flex', flexDirection:'row',marginLeft: '1rem',marginRight: '1rem'}}>
                               <div style={{marginTop: '1rem',marginBottom: '1rem',marginRight: '1rem'}}>
                                 {(index + 1)}.&nbsp;</div>
                              <div style={{marginTop: '1rem',marginBottom: '1rem'}} dangerouslySetInnerHTML={entryHtml} />
                            </div>
                          
                          )
                        ]
                      })
                    } 

                  </ThemeProvider>
                  <div>&nbsp;</div>
                   <BlueDividerLine />
                   <div>&nbsp;</div>
                    <PrescribingInfoAndFurniture dangerouslySetInnerHTML={footerHtml} />
              </Grid>
              <Grid item xs={12} sm={2}>
                  <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={12}>
                  <div style={{height: '100px'}}></div>
              </Grid>
          </ContainerGrid>
        </Layout>
    )
  }
}

export default References

export const pageQuery = graphql`{
  allNodeReferences {
    nodes {
      field_headertext
      field_references {
        processed
      }
      field_prescribinginformation {
        processed
      }
      path {
        alias
      }
    }
  }
  allNodeGenericpagefurniture {
    nodes {
      field_bodytext {
        processed
      }
    }
  }
}`