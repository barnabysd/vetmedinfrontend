import React, {useRef, useEffect, createRef} from 'react'
import theme, { sm, md, lg, xl } from '../theme'
import { ThemeProvider, Typography } from '@material-ui/core';
import { dogName } from '../WebsiteConstants'
import styled from 'styled-components'
import { stripUneededHtml, getLocalImageNameFromUrl } from '../utils/displayUtils'
import { showFullScreenVideo } from '../components/VideoFullScreenWidget'
import whiteTriangleRight from "../images/icons_and_glyphs/white_triangle_right.svg"
import CustomFluidImage from "../components/CustomFluidImage"
import timerSvg from '../images/resources/timer_group_6705.svg'
import narratorSvg from '../images/resources/person_icon_group_6707.svg'

const StyledTypography = styled(Typography)`
    margin-top: 1rem;
    margin-bottom: 1rem;
`
const Timer = styled.img.attrs((props) => ({ src: props.src, width:'16',height:'16'}))`
    position:relative;
    width:25px;
    height:25px;
    margin:auto;
    text-align:center;
    display:flex;
    justify-content:center;
`
const Narrator = styled.img.attrs((props) => ({ src: props.src, width:'16',height:'16'}))`
    position:relative;
    width:25px;
    height:25px;
    margin:auto;
    text-align:center;
    display:flex;
    justify-content:center;
`

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
    padding-left: 1rem;
    font-family: ${theme.typography.fontFamily};
    font-size: 0.938rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: -0.15px;
    text-align: left;
    color: ${theme.palette.raven.main};
    @media (max-width: ${lg}px) {
        width: 100%;
   
    }
     @media (max-width: ${md}px) {
        width: 100%;
   
    }
    @media (max-width: ${sm}px) {
        width: 100%;
        font-size: 0.75rem;
    }
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

const VideoSmallWidgetHolder = styled.div`
    display: flex;
    flex-direction:row;
    width:568px;
    @media (max-width: ${lg}px) {
        width: 100%;
   
    }
     @media (max-width: ${md}px) {
        width: 100%;
   
    }
    @media (max-width: ${sm}px) {
        width: 100%;
        font-size: 0.75rem;
    }
`
const NarratorText = styled.div`
  height: 1.313rem;
  font-family:  ${theme.typography.fontFamily};
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color:  ${theme.palette.raven.main};
`

const VideoSmallWidget = ({videoData1, videoThumbnail,videoCaptionText,instance="One"}) => {

    if (typeof videoData1 === 'undefined' || videoData1 === null) {
        console.error("no videoData1 in VideoSmallWidget")
        return ''
     }
    //debugger
      const videoDuration = videoData1.videoDuration ? videoData1.videoDuration : (videoData1.duration ? videoData1.duration : "2:37")
      const videoCaption = videoData1.videoCaptionText ? videoData1.videoCaptionText : (videoData1.caption ? videoData1.caption : "")
      const videoThumbnailPath = videoData1.videoThumbnail ? videoData1.videoThumbnail : (videoData1.thumbnail ? videoData1.thumbnail : "")
      const videoNarrator = videoData1.videoNarrator ? videoData1.videoNarrator : (videoData1.narrator ? videoData1.narrator : "")
      return (
          <VideoSmallWidgetHolder>
              <div id="videoThumbImage" style={{display:'flex',width:'75px',height:'75px',flexDirection:'row',alignItems:'center'}}> 
                  <TaskThumbnail style={{position:'relative',display:'block',width:'75px',height:'75px'}}>
                        <CustomFluidImage imgName={getLocalImageNameFromUrl(videoThumbnailPath)} style={{borderRadius: '0 10px 10px 0px'}} />
                        <OrangeEdgeToThumbnail  style={{position:'absolute',width:'5px',height:'75px',left:'0',top:'0'}}/> 

                        <SmallPlayArrow onClick={showFullScreenVideo} style={{position:'absolute',width:'20px',right:'-13%',top:'32%'}}>
                              <SmallTriangleRight src={whiteTriangleRight} />
                        </SmallPlayArrow>
                  </TaskThumbnail>
              </div>
              
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div style={{display: 'flex',flexDirection:'column'}}>
                    <VideoThumbnailText>{videoCaption ? stripUneededHtml(videoCaption.processed ? videoCaption.processed : videoCaption) : ''}</VideoThumbnailText>
                    
                    <div style={{width: "318px",display: 'flex',flexDirection: 'row',marginTop:'0.3rem',paddingLeft: '1rem'}}>
                        <div style={{ height: "16px",  width: "16px"}}>
                            <Narrator src={narratorSvg} /> 
                        </div>
                        <div style={{height: '1rem', width: "80%"}}>
                            <NarratorText>&nbsp;&nbsp;{videoNarrator}</NarratorText>
                          
                        </div>
                    </div>
              </div>
          </VideoSmallWidgetHolder>
    )
}

export default VideoSmallWidget