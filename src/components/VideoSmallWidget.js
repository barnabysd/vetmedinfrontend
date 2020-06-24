import React, {useRef, useEffect, createRef} from 'react'
import theme, { sm, md, lg, xl } from '../theme'
import { dogName } from '../WebsiteConstants'
import styled from 'styled-components'
import { processHtml } from '../utils/displayUtils'
import { showFullScreenVideo } from '../components/VideoFullScreenWidget'

const SmallTriangleRight = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: tan;
    border-top: 0 solid white;
    border-left: 0 solid white; 
    border-bottom: 0 solid white;
    border-right: 0 solid #8DB434;
    border-top-width: 10px;
    border-left-width: 10px;
    border-right-width: 10px;
    border-bottom-width: 10px;
    background: transparent;
    width: 0; height: 0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    transform: rotate(90deg) scale(0.4);
`
const TaskThumbnail = styled.div`
  width: 4.5rem;
  height: 4.484rem;
  object-fit: contain;
`
const SmallPlayArrow = styled.div`
    width: 1.5rem;
    height: 1.5rem;
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
    height: 2.813rem;
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

const VideoSmallWidget = ({videoThumbnail,videoCaptionText,instance="One"}) => {

      return (
          <div style={{display: 'flex',flexDirection:'row'}}>
              <div id="videoThumbImage" style={{display:'flex',width:'75px',height:'75px',flexDirection:'row',alignItems:'center'}}> 
                  <TaskThumbnail style={{position:'relative',display:'block',width:'75px',height:'75px'}}>
                        <OrangeEdgeToThumbnail  style={{position:'absolute',width:'5px',height:'75px',left:'0',top:'0'}}/> 
                        <img src={videoThumbnail ? videoThumbnail : "/xray/nuala_summerfield_thumbnail_01.jpg"} style={{width:'75px',height:'75px'}} />

                        <SmallPlayArrow onClick={showFullScreenVideo} style={{position:'absolute',width:'20px',right:'-13%',top:'32%'}}>
                              <SmallTriangleRight  style={{position:'absolute',paddingLeft: '6px',paddingTop: '4px'}} />
                        </SmallPlayArrow>
                  </TaskThumbnail>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div style={{display: 'flex',flexDirection:'column'}}>
                    <VideoThumbnailText>{processHtml(videoCaptionText)}</VideoThumbnailText>
                    <WatchLinkButton onClick={showFullScreenVideo}>Watch</WatchLinkButton>
              </div>
          </div>
    )
}

export default VideoSmallWidget