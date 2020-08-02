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
import { processInternalLink, stripUneededHtml, removeParagraphsTags } from '../utils/displayUtils'
import theme, { sm, md, lg, xl } from '../theme'

import phone from '../images/contact/phone_path_20218.svg'
import mail from '../images/contact/letter_group_23_2.svg'
import { ContainerGrid, PrescribingInfoAndFurniture, BlueDividerLine } from '../components/GenericPagesParts'

// const StyledButton = styled(Button)`
//   background-color: #6772e5;
//   &:hover {
//     background-color: #5469d4;
//   }
// `;

const PhoneIcon = styled.img.attrs((props) => ({ src: props.src}))`
    width:30px;
    width:30px;
    opacity:0.8;
`

const EmailIcon = styled.img.attrs((props) => ({ src: props.src}))`
    width:30px;
    width:30px;
    opacity:0.8;
`

const StyledTypography = styled(Typography)`
    margin-bottom: 1rem;
`

const ContactLink = styled.a`
width: 100%;

margin-bottom:2rem;
font-size:1.125rem;
font-weight:400;
text-align: left;
text-decoration:underline;
@media (max-width: ${sm}px) {
  width: 80%;
}
`

const PhoneNumber = ({textLabel}) => {
     const telTo = "tel:" + textLabel
     return (<ContactLink href={telTo}>{textLabel}</ContactLink>)
}
const EmailAddress = ({textLabel}) => {
    const mailTo = "mailto:" + textLabel
    return (<ContactLink href={mailTo}>{textLabel}</ContactLink>)
}


const ContactSubtitleBox = styled.div` 
  width: 66.063rem;
  height: 4.375rem;
  font-family: ${theme.typography.fontFamily};
  font-size: 1.563rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.25px;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
  @media (max-width: ${lg}px) {
     width: 100%;
     height: auto;
  }
  @media (max-width: ${sm}px) {
     width: 100%;
     height: auto;
  }
`

const ForAnyProductRelatedQueries = styled.div` 
  width: 31.938rem;
  height: 1.938rem;
  font-family: ${theme.palette.white.main};
  font-size: 1.375rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
  @media (max-width: ${sm}px) {
     width: 100%;
     height: auto;
  }
`

const ContactBox = styled.div`
  height: 200px;
  width: 692px;
  padding: 2rem;
  background-color: #F1FCFE;
  opacity: 1;
  border-radius: 2rem 2rem 2rem 0rem; 
  @media (max-width: ${md}px) {
    width: 100%;
    height: auto;
    padding-left: 2rem;
    padding-right: 2rem;
   
  }
  & a {

    text-decoration: underline;

  }
`

class Contact extends React.Component {
  render() {
    const resourcesAr = get(this, 'props.data.allNodeContact.nodes')
    const footerAr = get(this, 'props.data.allNodeGenericpagefurniture.nodes')
  
    const resources = resourcesAr[0]
    const footer = footerAr[0]
  
    const bodyHtml = { __html: resources.field_bodytext.processed }
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
                        <StyledTypography variant="h1">{resources.field_headertext}</StyledTypography>
                        {/* <StyledTypography variant="body1">{removeParagraphsTags(resources.field_bodytext.processed)}</StyledTypography>  */}
                   </ThemeProvider>
                   <div>&nbsp;</div>
                   <ContactSubtitleBox>{removeParagraphsTags(resources.field_additionalbodytext.processed)}</ContactSubtitleBox>
              </Grid>
              <Grid item xs={12} sm={2}>
                 <div style={{width: '100px'}}></div>
              </Grid>
              <Grid item xs={12} sm={2}>
                  <div style={{width: '100px'}}></div>
              </Grid>
              
              <Grid item xs={12} sm={8}>
                 <div>&nbsp;</div>
                  <ThemeProvider theme={theme}>
                        <ContactBox>
                            {/* <StyledTypography variant="h5">{removeParagraphsTags(resources.field_contactboxheader1)}</StyledTypography> */}
                            <ForAnyProductRelatedQueries>{removeParagraphsTags(resources.field_contactboxheader1)}</ForAnyProductRelatedQueries>
                                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'1rem'}}>
                                <PhoneIcon src={phone}/>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; <PhoneNumber textLabel={resources.field_contactphonenumber1} />
                                </div>
                                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'-1rem'}}>
                                <EmailIcon src={mail} />&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<EmailAddress textLabel={resources.field_contactemail1} />
                                </div>
                            
                        </ContactBox>
                        <div style={{width: '100%',height:'50px'}}></div>
                        <ContactBox>
                            {/* <StyledTypography variant="h5">{removeParagraphsTags(resources.field_contactboxheader2)}</StyledTypography> */}
                            {/* <StyledTypography variant="body1">{removeParagraphsTags(resources.field_contactboxbody2)}</StyledTypography> */}
                            <ForAnyProductRelatedQueries>{removeParagraphsTags(resources.field_contactboxheader2)}</ForAnyProductRelatedQueries>
                               <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'1rem'}}>
                              <PhoneIcon src={phone}/>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  <PhoneNumber textLabel={resources.field_contactphonenumber2} />
                              </div>
                              <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'-1rem'}}>
                              <EmailIcon src={mail} />&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<EmailAddress textLabel={resources.field_contactemail2} />
                            </div>
                        </ContactBox>
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
  allNodeGenericpagefurniture {
    nodes {
      field_bodytext {
        processed
      }
    }
  }
}`