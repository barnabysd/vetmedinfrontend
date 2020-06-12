import React from 'react'
import theme from '../theme'
import styled from 'styled-components'

import {
    EmailShareButton,
    LinkedinShareButton,
    FacebookShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon
} from 'react-share';

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
const summary = "ddfgdfgdg"
const url ="http://www.bbc.co.uk"


const SocialMediaWidgets = ({ LinkedIn,Facebook,Email }) => {
    return (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>

        <LinkedIn>

        <LinkedinShareButton
            url={url}
            summary={summary}
            title={title}
            source={source}
            windowWidth={750}
            windowHeight={600}
            className="button">
            <LinkedinIcon
            size={32}
            round={false} />
        </LinkedinShareButton>
       
        </LinkedIn>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Facebook>

           <FacebookShareButton
            url={url}
            summary={summary}
            title={title}
            source={source}
            windowWidth={750}
            windowHeight={600}
            className="button">
            <FacebookIcon
            size={32}
            round={false} />
            </FacebookShareButton>
        </Facebook>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <Email>
           <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
            className="button">
            <EmailIcon
                size={32}
                round={false} />
            </EmailShareButton>
         </Email>
      </div>
    )
}

export default SocialMediaWidgets