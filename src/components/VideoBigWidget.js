import React, {useRef, useEffect, createRef} from 'react'
import theme, { sm, md, lg, xl } from '../theme'
import { dogName } from '../WebsiteConstants'
import styled from 'styled-components'

import { ThemeProvider, Typography } from '@material-ui/core';

import timerSvg from '../images/resources/timer_group_6705.svg'
import narratorSvg from '../images/resources/person_icon_group_6707.svg'

//import styled from "@emotion/styled"
import { processInternalLink, processHtml, removeParagraphsTags } from '../utils/displayUtils'
import { showFullScreenVideo } from '../components/VideoFullScreenWidget'

import Thumb from "../images/owner_responses/owner_resp_kieran-borgeat-systolic-or-diastolic.png"

const PlayTriangleRight = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: tan;
    border-top: 0 solid white;
    border-left: 0 solid white; 
    border-bottom: 0 solid white;
    border-right: 0 solid #8DB434;
    border-top-width: 50px;
    border-left-width: 50px;
    border-right-width: 50px;
    border-bottom-width: 50px;
    background: transparent;
    width: 0; height: 0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    transform: rotate(90deg) scale(0.25);
`
const TaskThumbnail = styled.div`
  width: 260px;
  height: 149.7px;
  object-fit: contain;
`
const SmallPlayArrow = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-image: linear-gradient(to bottom, ${theme.palette.skyBlue.main}, ${theme.palette.topazBlue.main} 37%, ${theme.palette.midnightBlue.main});
`

const SkyBlueEdgeToThumbnail = styled.div`
    width: 0.281rem;
    height: 149.7px;
    background-color: ${theme.palette.skyBlue.main};
`
const VideoThumbnailText = styled.div`
    width: 318px;
    /* height: 2.813rem; */
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
const VideoButtonBox = styled.div`
  position:absolute;
  left: 0;
  bottom: 0;
  width: 48px;
  height: 48px;
  border-radius: 0 1rem 0 0rem;
  background-image: linear-gradient(to bottom, ${theme.palette.skyBlue.main}, ${theme.palette.topazBlue.main} 37%, ${theme.palette.midnightBlue.main});

`

const NarratorText = styled.div`
height: 21px;
  font-family: ${theme.typography.fontFamily};
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.palette.raven.main};
  `

const DurationText = styled.div`
height: 21px;
  font-family: ${theme.typography.fontFamily};
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.palette.raven.main};
  `

const StyledTypography = styled(Typography)`
    margin-top: 1rem;
    margin-bottom: 1rem;
`




const VideoBigWidget = ({videoThumbnail,videoCaptionText,videoNarrator="Unknown",videoDuration='00.10',instance="One"}) => {
      const imgUrl = "/owner_responses/owner_resp_kieran-borgeat-systolic-or-diastolic.png"
      return (
          <div style={{display: 'flex',flexDirection:'row',width:'568px'}}>

           

              <div id="videoThumbImage" style={{display:'flex',
              width:'260px',
              height:'149.7px',
              flexDirection:'row',
              alignItems:'center',
              
              }}> 
                  <TaskThumbnail style={{position:'relative',display:'block',width:'260px',height:'149.7px',borderRadius:'1.5rem 1.5rem 1.5rem 0rem',
              overflow:'hidden'}}>
                        <SkyBlueEdgeToThumbnail  style={{position:'absolute',width:'5px',height:'149.7px',left:'0',top:'0'}}/> 
                        <img src={imgUrl} style={{width:'260px',height:'149.7px'}} />
    
                        <VideoButtonBox onClick={showFullScreenVideo} style={{position:'absolute',width:'51px',right:'-13%',top:'68%'}}>
                              <PlayTriangleRight  style={{position:'absolute',left:"-18px",top:"-27px", paddingLeft: '6px',paddingTop: '4px'}} />
                        </VideoButtonBox>
                  </TaskThumbnail>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div style={{display: 'flex',flexDirection:'column',width:'318px'}}>
                    <VideoThumbnailText>{videoCaptionText ? processHtml(videoCaptionText.processed ? videoCaptionText.processed : videoCaptionText) : ''}</VideoThumbnailText>
                    {/* <WatchLinkButton onClick={showFullScreenVideo}>Watch</WatchLinkButton> */}
              
             <div style={{width: "318px",display: 'flex',flexDirection: 'row'}}>
             <div style={{width: "50%",display: 'flex',flexDirection: 'row'}}>
                    <div style={{ width: "16px", width: "16px"}}>
                        <Timer src={timerSvg} /> 
                    </div>
                    <div style={{height: '1rem', width: "80%"}}>
                        <ThemeProvider theme={theme}>
                            <StyledTypography style={{color:theme.palette.raven.main}} variant="caption">&nbsp;&nbsp;{videoNarrator !== '' ? videoNarrator : 'Unknown'}</StyledTypography>
                        </ThemeProvider>  
                    </div>
                </div>
                 
                <div style={{width: "50%",display: 'flex',flexDirection: 'row'}}>
                    <div style={{ height: "16px",  width: "16px"}}>
                        <Narrator src={narratorSvg} /> 
                    </div>
                    
                    <div style={{height: '1rem', width: "80%"}}>
                        <ThemeProvider theme={theme}>
                            <StyledTypography style={{color:theme.palette.raven.main}} variant="caption">&nbsp;&nbsp;{videoDuration !== '' ? videoDuration : '00:00'}</StyledTypography>
                        </ThemeProvider>  
                    </div>
                    
                </div>
                </div>
            </div> 
          </div>
    )
}

export default VideoBigWidget