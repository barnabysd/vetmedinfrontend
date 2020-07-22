import React, {useRef, useEffect, createRef} from 'react'
import theme, { sm, md, lg, xl } from '../theme'
import { dogName } from '../WebsiteConstants'
import styled from 'styled-components'
import { stripUneededHtml } from '../utils/displayUtils'
import { showFullScreenVideo } from '../components/VideoFullScreenWidget'
import whiteTriangleRight from "../images/icons_and_glyphs/white_triangle_right.svg"

const SmallTriangleRight = styled.img`
   position:absolute;
   width:10px;
   height:10px;

   left: 9px;
   top: 8px;
`
const TaskThumbnail = styled.div`
    width: 4.5rem;
    height: 4.484rem;
    object-fit: contain;
`
const SmallPlayArrow = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    min-width: 1.5rem;
    min-height: 1.5rem;
    border-radius: 50%;
    background-image: linear-gradient(to bottom, ${theme.palette.skyBlue.main}, ${theme.palette.topazBlue.main} 37%, ${theme.palette.midnightBlue.main});
`

const OrangeEdgeToThumbnail = styled.div`
    width: 0.281rem;
    height: 4.5rem;
    background-color: ${theme.palette.peachCobbler.main};
`
const VideoThumbnailText = styled.div`
    width: 25.188rem;
   
    font-family: ${theme.typography.fontFamily};
    font-size: 0.938rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: -0.15px;
    text-align: left;
    color: ${theme.palette.raven.main};
`
const WatchLinkButton = styled.div`
    cursor: pointer;
    height: 1.313rem;
    font-family: ${theme.typography.fontFamily};
    font-size: 0.938rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: -0.15px;
    text-align: left;
    text-decoration: underline !important;
    color: ${theme.palette.midnightBlue.main}; 
`

const VideoSmallWidget = ({videoData1, videoThumbnail,videoCaptionText,instance="One"}) => {
    //debugger
      return (
          <div style={{display: 'flex',flexDirection:'row',width:'568px'}}>
              <div id="videoThumbImage" style={{display:'flex',width:'75px',height:'75px',flexDirection:'row',alignItems:'center'}}> 
                  <TaskThumbnail style={{position:'relative',display:'block',width:'75px',height:'75px'}}>
                        <OrangeEdgeToThumbnail  style={{position:'absolute',width:'5px',height:'75px',left:'0',top:'0'}}/> 
                        <img src={videoThumbnail ? videoThumbnail : ""} style={{width:'75px',height:'75px'}} />

                        <SmallPlayArrow onClick={showFullScreenVideo} style={{position:'absolute',width:'20px',right:'-13%',top:'32%'}}>
                              <SmallTriangleRight src={whiteTriangleRight} />
                        </SmallPlayArrow>
                  </TaskThumbnail>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div style={{display: 'flex',flexDirection:'column'}}>
                    <VideoThumbnailText>{videoCaptionText ? stripUneededHtml(videoCaptionText.processed ? videoCaptionText.processed : videoCaptionText) : ''}</VideoThumbnailText>
                    <WatchLinkButton onClick={showFullScreenVideo}>Watch</WatchLinkButton>
              </div>
          </div>
    )
}

export default VideoSmallWidget