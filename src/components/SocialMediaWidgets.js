import React from 'react'
import styled from 'styled-components'
import theme, { sm, md, lg, xl } from '../theme'

import {
    EmailShareButton,
    LinkedinShareButton,
    FacebookShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon
} from 'react-share'

import linkedInSvg from '../images/certificate/linkedin_group_6900.svg'
//TODO - missing facebook icon
import facebookSvg from '../images/certificate/linkedin_group_6900.svg'
import mailSvg from '../images/certificate/letter_group_23_2.svg'

const FacebookCustomIcon = styled.img.attrs((props) => ({ id: props.id, src: props.src}))`
    position:relative;
    width:30px;
    height:1rem;
    margin:auto;
    text-align:center;
    display:flex;
    justify-content:center;
 
    @media (max-width: ${lg}px) { 
      margin-top:0px; 
    }
    @media (max-width: ${md}px) {
        margin-top:0px; 
    }
    @media (max-width: ${sm}px) {
      margin-top:0px; 
    }
`

const LinkedInCustomIcon = styled.img.attrs((props) => ({ id: props.id, src: props.src}))`
    position:relative;
    width:30px;
    height:1rem;
    margin:auto;
    text-align:center;
    display:flex;
    justify-content:center;
  

    @media (max-width: ${lg}px) {
     
      margin-top:0px; 
    }
 
    @media (max-width: ${md}px) {
    
        margin-top:0px; 
    }
    @media (max-width: ${sm}px) {
   
      margin-top:0px; 
  }
`

const MailCustomIcon = styled.img.attrs((props) => ({ id: props.id, src: props.src}))`
    position:relative;
    width:50px;
    height:1rem;
    margin:auto;
    text-align:center;
    display:flex;
    justify-content:center;

    @media (max-width: ${lg}px) {
     
      margin-top:0px; 
    }
 
    @media (max-width: ${md}px) {
    
        margin-top:0px; 
    }
    @media (max-width: ${sm}px) {
   
      margin-top:0px; 
  }
`

const location = {shareUrl:"http://www.bbc.co.uk"}
const imageData = ''
// useStaticQuery(graphql`
//   query {
//     placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 300) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `)
const post = {
    frontmatter:
    {
        image: imageData.placeholderImage
    },
    title:"test",
    summary:"tbfgffdfggdfg",
    date:"20-10-2020",
    html: "<p>Helloooooo</p>"
}
const shareUrl = location.pathname
const title = post.frontmatter.title
const source = "http://www.bbc.co.uk"
const summary = ""
const url ="http://www.bbc.co.uk"


const SocialMediaWidgets = ({resources, LinkedIn,Facebook,Email }) => {

    const url1 = resources.field_socialbuttonlinks[0].uri
    const url2 = resources.field_socialbuttonlinks[1].uri
    const url3 = resources.field_socialbuttonlinks[2].uri

    const title1 = resources.field_socialbuttonlinks[0].title
    const title2 = resources.field_socialbuttonlinks[1].title
    const title3 = resources.field_socialbuttonlinks[2].title


    return (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>

        <LinkedIn>

        <LinkedinShareButton
            url={url1}
            summary={summary}
            title={title1}
            source={source}
            windowWidth={750}
            windowHeight={600}
            className="button">
            {/* <LinkedinIcon
            size={32}
            round={false} /> */}
             <LinkedInCustomIcon src={linkedInSvg}/>
        </LinkedinShareButton>
       
        </LinkedIn>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Facebook>

           <FacebookShareButton
            url={url2}
            summary={summary}
            title={title2}
            source={source}
            windowWidth={750}
            windowHeight={600}
            className="button">
            {/* <FacebookIcon
            size={32}
            round={false} /> */}
            <FacebookCustomIcon src={facebookSvg}/>
            </FacebookShareButton>
        </Facebook>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <Email>
           <EmailShareButton
            url={url3}
            subject={title3}
            body="body"
            className="button">
            {/* <EmailIcon
                size={32}
                round={false} /> */}
            <FacebookCustomIcon src={mailSvg}/>
            </EmailShareButton>
         </Email>
      </div>
    )
}

export default SocialMediaWidgets