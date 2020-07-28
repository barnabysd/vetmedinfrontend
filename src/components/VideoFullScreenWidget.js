import React, {useRef, useEffect, createRef} from 'react'

import theme, { sm, md, lg, xl } from '../theme'
import { dogName } from '../WebsiteConstants'
import styled from 'styled-components'

import videoPlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import videoPauseButtonIcon from "../images/videoPauseLaunchBtn.png"

import crossSvg from '../images/icons_and_glyphs/cross_white.svg'
import playButtonSvg from '../images/icons_and_glyphs/GradientIcon_Play.svg'
import pauseButtonSvg from '../images/icons_and_glyphs/GradientIcon_Pause.svg'

import {VideoWhiteDotButtonBackground, SmallPlayArrow,PauseResponsive,PlayResponsive,SmallTriangleRight,Cross } from '../components/VideoPlayerParts'

/*

// View in fullscreen 
function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { 
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { 
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
      elem.msRequestFullscreen();
    }
  }
  
  // Close fullscreen 
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { 
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { 
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  // Chrome, Safari and Opera syntax 
:-webkit-full-screen {
    background-color: yellow;
  }
  
  // Firefox syntax 
  :-moz-full-screen {
    background-color: yellow;
  }
  
  // IE/Edge syntax 
  :-ms-fullscreen {
    background-color: yellow;
  }
  
  // Standard syntax 
  :fullscreen {
    background-color: yellow;
  }

  */


const VideoFullScreen = styled.div`
    position: fixed;
    display: none;
    left:0;
    top:0;
    right:0;
    bottom:0;
    width: 100%;
    min-width: 100%;
    min-height: 100vh;
    background-color: ${theme.palette.midnightBlue.main}; 
    @media (max-width: ${sm}px) {
      right:unset;
      bottom:unset;
      width:290px;
      min-height: 100vh;
    }
`

const VideoHolderResponsive = styled.div.attrs((props) => ({ id: props.id, style:props.style, onClick:props.onClick }))`
  display:flex;
  justify-content:center;
  align-items:center;
  width:900px;
  height:506px; 
  @media (max-width: ${xl}px) {
      width:1280px;
      height:720px; 
  }
  @media (max-width: ${lg}px) {
      width:900px;
      height:506px; 
  }
  @media (max-width: ${md}px) {
      width:640px;
      height:360px; 
  }
  @media (max-width: ${sm}px) {
      width:290px;
      height:200px; 
  }
`


const BlueArrowGradient = ({id}) =>  {
  const bckgrd = 'linear-gradient(175deg, ' + theme.palette.midnightBlue.main + ' 1%, #76d1e8 15%, #6dc5e0 29%, #5eb0d4 44%, #4993c2 59%, #2d6eac 74%, #0c4091 89%, ' + theme.palette.midnightBlue.main + ' 94%)'
  return (
  <div id={id} style={{
  position:'absolute',left:'41%',top:'22%',width:'50px',height:'50px',paddingLeft: '6px',paddingTop: '4px',
  backgroundImage: bckgrd}}>
  </div>
  )
}

const BluePauseGradient = ({id}) =>  {
  const bckgrd = 'linear-gradient(175deg, ' + theme.palette.midnightBlue.main + ' 1%, #76d1e8 15%, #6dc5e0 29%, #5eb0d4 44%, #4993c2 59%, #2d6eac 74%, #0c4091 89%, ' + theme.palette.midnightBlue.main + ' 94%)'
  return (
  <div id={id} style={{
  position:'absolute',left:'41%',top:'22%',width:'50px',height:'50px',paddingLeft: '6px',paddingTop: '4px',
  backgroundImage: bckgrd}}>
  </div>
  )
}


const BigPlayArrow = styled(SmallPlayArrow).attrs((props) => ({ id: props.id}))`
    width: 5rem;
    height: 5rem;   
`
const BigTriangleRight = styled(SmallTriangleRight).attrs((props) => ({ id: props.id}))`
    width: 100px;
    height: 100px;

    border-top-width: 25px;
    border-left-width: 25px;
    border-right-width: 25px;
    border-bottom-width: 25px;

    transform: rotate(90deg) scale(1.0);

`
const PauseIcon = styled.div.attrs((props) => ({ id: props.id}))`
    width: 100px;
    height: 100px;
    background-color: white;
`

export function showFullScreenResourceVideo(instance) {
  console.log("showFullScreenResourceVideo - open video " + instance)
  if (document.getElementById("videoFullScreen" + instance)) {
      const vid = document.getElementById("videoFullScreen" + instance).style.display = 'flex'
  }  
}

export function showFullScreenHeartVideo(instance) {
  console.log("showFullScreenHeartVideo - open video " + instance)
  if (document.getElementById("videoFullScreen" + instance)) {
      const vid = document.getElementById("videoFullScreen" + instance).style.display = 'flex'
  }  
}

export function showFullScreenVideo(e) {
    const instance = "One"
    console.log("showFullScreenVideo - open video")
    if (document.getElementById("videoFullScreen" + instance)) {
        const vid = document.getElementById("videoFullScreen" + instance).style.display = 'flex'
    }  
}

const VideoFullScreenWidget = ({videoData1 = {}, displayValue = 'none',vidUrl,instance="One"}) => {
  //debugger
    const videoUrl = vidUrl ? vidUrl : "https://sftest2020.s3-eu-west-1.amazonaws.com/clips/02/01_How+to+diagnose+cardiomegaly+using+either+X-ray+or+ultrasound+-+Nuala+Summerfield.mp4"

    const videoData = {
        videoUrl: videoData1.videoUrl ? videoData1.videoUrl : videoUrl,
        caption: videoData1.caption ? videoData1.caption : '',
        underLargeVideoText: videoData1.underLargeVideoText ? videoData1.underLargeVideoText : '',
        poster: videoData1.poster
    }

    const togglePlayVideo = (e) => {   
        console.log("togglePlayVideoParentlevel")
        const vid = document.getElementById("video" + instance)
        if (vid.paused) { 
            console.log("togglePlayVideo - play")
            const play = document.getElementById("playIcon" + instance)
            play.style.display = 'none'
            const pause = document.getElementById("pauseIcon" + instance)
            pause.style.display = 'none'
            vid.play()
        } else {
            console.log("togglePlayVideo - pause")
            const play = document.getElementById("playIcon" + instance)
            play.style.display = 'block'
            const pause = document.getElementById("pauseIcon" + instance)
            pause.style.display = 'none'
            vid.pause()
        }
    } 
  
    const closeFullScreenVideoBtn = (e) => {
        const vid = document.getElementById("video" + instance)
        if(document.getElementById("videoFullScreen" + instance)) {
            document.getElementById("videoFullScreen" + instance).style.display = 'none'
            const vids = document.getElementsByTagName("video")
            for (let i = 0; i < vids.length;i++) {
                if (!vids[i].paused) { 
                    vids[i].pause()
                }
            }
        }
    }
      
     return (
      <VideoFullScreen 
          id={"videoFullScreen" + instance} 
          custom="me" 
          key={"key" + instance} 
          style={{
              zIndex:'2000',
              display: displayValue,
              justifyContent:'center',
              alignItems: 'center',
              justifyItems:'center'
          }}>

         <VideoHolderResponsive>
        <video id={"video" + instance} preload="true" loop={false}
              className='react-player'
              width='100%'
              height='100%' 
              controls={true}
              style={{ 
                  position: 'static',
                  width: `100%`,
                  minHeight: `100%`
              }}
        >

        <source src={videoData.videoUrl} type="video/mp4" />
        {/* <track kind="transcript" srcLang="en" src={Transcript} />
        <track kind="captions" srcLang="en" src={Captions} />
        <track kind="descriptions" srcLang="en" src={Description} /> */}

      </video>
      <p>{videoData.underLargeVideoText}</p>

      </VideoHolderResponsive>

      {/* <BigPlayArrow id={"playIcon" +  instance} onClick={togglePlayVideo} style={{position:'absolute',width:'100px',height:'100px',left:'50%',top:'50%'}}>
            <BigTriangleRight id={"playArrowIcon" +  instance}  style={{position:'absolute',left:'41%',top:'22%',width:'50px',height:'50px',paddingLeft: '6px',paddingTop: '4px'}} />
            <PauseIcon id={"pauseIcon" +  instance} style={{display:'none',position:'absolute',left:'25%',top:'24%',width:'50px',height:'50px',paddingLeft: '6px',paddingTop: '4px'}} />
      </BigPlayArrow> */}
      <VideoWhiteDotButtonBackground id={"playIcon" +  instance} onClick={togglePlayVideo}>
              <PauseResponsive id={"pauseIcon" +  instance} src={pauseButtonSvg} alt="" style={{display: 'none'}}/>
              <PlayResponsive id={"playArrowIcon" +  instance} src={playButtonSvg} alt="" />
              
      
            {/* <BigTriangleRight id={"playArrowIcon" +  instance}  style={{position:'absolute',left:'41%',top:'22%',width:'50px',height:'50px',paddingLeft: '6px',paddingTop: '4px'}} /> */}
            {/* <BigTriangleRight id={"pauseIcon" +  instance} style={{display:'none',position:'absolute',left:'25%',top:'24%',width:'50px',height:'50px',paddingLeft: '6px',paddingTop: '4px'}} /> */}
      </VideoWhiteDotButtonBackground>

      <div id={"closeBtn" +  instance} style={{position:'absolute', 
            cursor: 'pointer',
            fontSize:'2rem',
            top:'0%',
            right:'22px',
            width:'50px',
            height:'50px',
            color: 'white',
            textAlign:'center',
            verticalAlign:'middle'}} onClick={closeFullScreenVideoBtn}>
                <Cross />
            </div>

      </VideoFullScreen>
     )
}

export default VideoFullScreenWidget