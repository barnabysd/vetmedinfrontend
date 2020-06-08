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

//import Tick from "../svgReactLoader/icons_and_glyphs/tick_orange_path_20240.svg"
import Cross from "../svgReactLoader/icons_and_glyphs/tick_white_path_20240.svg"

const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
`;

const gridStyle = { border: '0px solid red' }

class Xray extends React.Component {
    render() {
      const resourcesAr = get(this, 'props.data.allNodeTask.nodes')
      if (!resourcesAr) {
        return  (<div>no data</div>)
      }
      if (!(resourcesAr[0])) {
        return  (<div>no data</div>)
      }
      const resources = resourcesAr[0]
      console.log(resources)

     
      //console.log(resources.allNodeTask)

      let isStep1Visible = true
      let isStep2Visible = false
      let isStep3Visible = false
      let isStep4Visible = false
      let isStep5Visible = false
      let isStep6Visible = false
      let isStep7Visible = false

      const toolTipRef1 = useRef()
      const toolTipRef2 = useRef()
      const toolTipRef3 = useRef()
      const toolTipRef4 = useRef()

      return (<Layout>
          
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
                <div id="step1" style={{display: isStep1Visible}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{resources.field_headerText}</StyledTypography>
                        <StyledTypography variant="body1">{resources.field_bottombodytext.processed}</StyledTypography>
                    </ThemeProvider>
                </div>
                <div id="stepFailure1" style={{display: isStepFailure1Visible}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1"><Cross /> {resources.field_failureText}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="step2" style={{display: isStep2Visible}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{resources.field_bottomtitle2}</StyledTypography>
                        <StyledTypography variant="body1">{resources.field_bottombodytext2.processed}</StyledTypography>
                    </ThemeProvider>
                </div>
                <div id="stepFailure2" style={{display: isStepFailure2Visible}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1"><Cross /> {resources.field_failureText2}</StyledTypography>
                    </ThemeProvider>
                </div>


                <div id="step3" style={{display: isStep4Visible}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{resources.field_bottomtitle4}</StyledTypography>
                        <StyledTypography variant="body1">{resources.field_bottombodytext4.processed}</StyledTypography>
                    </ThemeProvider>
                </div>
                <div id="stepFailure4" style={{display: isStepFailure4Visible}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1"><Cross /> {resources.field_failureText4}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="step5" style={{display: isStep5Visible}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{resources.field_bottomtitle5}</StyledTypography>
                        <StyledTypography variant="body1">{resources.field_bottombodytext5.processed}</StyledTypography>
                    </ThemeProvider>
                </div>
                <div id="stepFailure5" style={{display: isStepFailure5Visible}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1"><Cross /> {resources.field_failureText5}</StyledTypography>
                    </ThemeProvider>
                </div>

                <div id="step6" style={{display: isStep6Visible}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{resources.field_bottomtitle6}</StyledTypography>
                        <StyledTypography variant="body1">{resources.field_bottombodytext6.processed}</StyledTypography>
                    </ThemeProvider>
                </div>
                <div id="stepFailure5" style={{display: isStepFailure5Visible}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1"><Cross /> {resources.field_failureText5}</StyledTypography>
                    </ThemeProvider>
                </div>



                <div id="step7" style={{display: isStep6Visible}}> 
                    <ThemeProvider theme={theme}>
                        <StyledTypography variant="h1">{resources.field_bottomtitle6}</StyledTypography>
                        <StyledTypography variant="body1">{resources.field_bottombodytext6.processed}</StyledTypography>
                    </ThemeProvider>
                </div>
                
            </Grid>

            <Grid item xs={12} sm={2}  style={gridStyle}></Grid>
        </Grid>
      </Layout>
  )
}
}

export default Xray

const pageQuery = graphql`
  {
    allNodeTask {
      nodes {
        field_bottombodytext {
          processed
        }
        field_bottombodytextstep3 {
          processed
        }
        field_bottombodytextstep4 {
          processed
        }
        field_bottombodytextstep5 {
          processed
        }
        field_bottomtitle {
          processed
        }
        field_bottomtitlestep2 {
          processed
        }
        field_bottomtitlestep3 {
          processed
        }
        field_bottomtitlestep4 {
          processed
        }
        field_bottomtitlestep5 {
          processed
        }
        field_dogchoice
        field_failedtext {
          processed
        }
        field_failedtext4 {
          processed
        }
        field_infotext {
          processed
        }
        field_instructionstext {
          processed
        }
        field_popupbodytext {
          processed
        }
        field_popupheadertext
        field_progresspercent
        field_sliderofftext
        field_sliderontext
        field_slidertitle
        field_taptooltiptext1 {
          processed
        }
        field_taptooltiptext2 {
          processed
        }
        field_taptooltiptext3 {
          processed
        }
        field_taptooltiptext4 {
          processed
        }
        id
        path {
          langcode
        }
        revision_timestamp
        drupal_id
      }
    }
  }
  `
