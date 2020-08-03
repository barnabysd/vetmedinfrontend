import React, {useState,useRef,useEffect,useCallback} from 'react'
import VideoCover from 'react-video-cover'
import theme from "../theme"

import "./backgroundVideoCustom.css"
import videoPlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import pausePlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import { getHeartVideo, getDogOnTableVideo } from "../utils/assetUtils"

// import VideoCoverContainer from './VideoCoverContainer'

// https://codesandbox.io/s/sharp-poitras-qdync?file=/package.json:209-236
// https://developers.google.com/web/fundamentals/media/fast-playback-with-video-preload

export const videoPlayButtonStates = {
    PLAY: 'play',
    PAUSE: 'pause',
    NONE: 'none'
}
/*
function useHookWithRefCallback() {
    const ref = useRef(null)
    const setRef = useCallback(node => {
      if (ref.current) {
        // Make sure to cleanup any events/references added to the last instance
      }
      
      if (node) {
        // Check if a node is actually passed. Otherwise node would be null.
        // You can now do what you need to, addEventListeners, measure, etc.

        const togglePlayVideo = (e) => { 
            console.log("togglePlayVideo")
            if (node.paused) { 
                console.log("togglePlayVideo - play")
                node.play()
                //videoStatusClassName = 'video-active'
            } else {
                console.log("togglePlayVideo - pause")
                node.pause()
                //videoStatusClassName = 'video-inactive'
            }
        }  
        let buttonPlay = document.getElementById("videoLargePlayBtn")
        if (buttonPlay) { buttonPlay.addEventListener('click',togglePlayVideo) } else { }
        let buttonPause = document.getElementById("videoLargePauseBtn")
        if (buttonPause) { buttonPause.addEventListener('click',togglePlayVideo) }
        //window.addEventListener('keydown', handleUserKeyPress);
        return () => {
            let buttonPlay = document.getElementById("videoLargePlayBtn")
            if (buttonPlay)  { buttonPlay.removeEventListener('click',togglePlayVideo) }
            let buttonPause = document.getElementById("videoLargePauseBtn")
            if (buttonPause) { buttonPause.removeEventListener('click',togglePlayVideo) }
            //window.removeEventListener('keydown', handleUserKeyPress);
        }
      }
      
      // Save a reference to the node
      ref.current = node
    }, [])
    
    return [setRef]
}*/

const BackgroundVideoCustom = React.forwardRef((props, ref) => {

    console.log(props)

    const { videoName, VideoHolder, playButtonState } = props

    function getVideo(dogChoice, isHeartVideo = false) {
        console.log("dogChoice - getVideo",dogChoice)
        if (isHeartVideo) {
            return getHeartVideo(dogChoice)
        } else {
            return getDogOnTableVideo(dogChoice)
        }
    }
    
    let initialState = { 
        videoPlaying: false,
    }
    
    const [state, setState] = useState(initialState)

    /*
        reload full video
    Here's how to preload a full video on your website so that when your JavaScript asks to fetch video content, it is read from cache as the resource may have already been cached by the browser. If the preload request hasn't finished yet, a regular network fetch will happen.

    <link rel="preload" as="video" href="https://cdn.com/small-file.mp4">

    <video id="video" controls></video>

    <script>
    // Later on, after some condition has been met, set video source to the
    // preloaded video URL.
    video.src = 'https://cdn.com/small-file.mp4';
    video.play().then(_ => {
        // If preloaded video URL was already cached, playback started immediately.
    });
    </script>

    //  You have 2 events to handle when a video is ready to play.

        // canplay: fired when video ready to play but buffering not complete
        // canplaythrough : fired when video ready to play and buffering complete
    */

    //const videoRef = useRef(null)

    // let videoStatusClassName = 'video-inactive'

    // const handleUserKeyPress = useCallback(event => {
    //     const { key, keyCode } = event;
    //     if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
    //     // setUserText(prevUserText => `${prevUserText}${key}`);
    //     }
    // }, []);

    // In your component you'll still recieve a `ref`, but it 
    // will be a callback function instead of a Ref Object
    // const [ref] = useHookWithRefCallback()

    let videoStatusClassName = 'video-inactive'
    // useEffect(() => {
    //     const togglePlayVideo = (e) => { 
    //         console.log("togglePlayVideo")
    //         if (ref.current.paused) { 
    //             console.log("togglePlayVideo - play")
    //             ref.current.play()
    //             videoStatusClassName = 'video-active'
    //         } else {
    //             console.log("togglePlayVideo - pause")
    //             ref.current.pause()
    //             videoStatusClassName = 'video-inactive'
    //         }
    //     }  
    //     let buttonPlay = document.getElementById("videoLargePlayBtn")
    //     if (buttonPlay) { buttonPlay.addEventListener('click',togglePlayVideo) }
    //     let buttonPause = document.getElementById("videoLargePauseBtn")
    //     if (buttonPause) { buttonPause.addEventListener('click',togglePlayVideo) }
    //     //window.addEventListener('keydown', handleUserKeyPress);
    //     return () => {
    //         let buttonPlay = document.getElementById("videoLargePlayBtn")
    //         if (buttonPlay)  { buttonPlay.removeEventListener('click',togglePlayVideo) }
    //         let buttonPause = document.getElementById("videoLargePauseBtn")
    //         if (buttonPause) { buttonPause.removeEventListener('click',togglePlayVideo) }
    //         //window.removeEventListener('keydown', handleUserKeyPress);
    //     }
    // })

    const videoOptions = {
        id: "myVideo",
        src: props.animationVideoName !== 'undefined' && props.animationVideoName !== undefined ? props.animationVideoName : getVideo(props.dogChoice, props.isHeartVideo),
        ref: ref,
        autoPlay: props.autoPlay ? props.autoPlay : false
        // onClick: () => {
        //   if (this.videoRef && this.videoRef.paused) {
        //     this.videoRef.play();
        //   } else if (this.videoRef) {
        //     this.videoRef.pause();
        //   }
        // },
        //title: 'click to play/pause',
      };
 
    return (
        <VideoHolder>
            {/* {(playButtonState === videoPlayButtonStates.PLAY) ? <div onClick={togglePlayVideo} style={videoPlayButtonStyle}><img src={videoPlayButtonIcon} alt="" style={{width:'100px',height:'100px'}} /></div> : ''}
            {(playButtonState === videoPlayButtonStates.PAUSE) ? <div style={videoPlayButtonStyle}><img src={pausePlayButtonIcon} alt="" style={{width:'100px',height:'100px'}} /></div> : ''} */}
            {/* {(playButtonState === false) ? <video muted id="myVideo" width='100%' ref={ref} className={videoStatusClassName} style={{minWidth:'100%', zIndex:'0', width: `100%` }}><source src={getVideo(videoName)} type="video/mp4" />Your browser does not support HTML5 video.</video> : ''} */}
            
            
            
            {/* <video autoPlay muted id="myVideo" width='100%' ref={ref} className={videoStatusClassName} style={{minWidth:'100%', zIndex:'0', width: `100%` }}>
                <source src={getVideo(videoName)} type="video/mp4" />Your browser does not support HTML5 video.
            </video>  */}
            

        {/* <div style={{
          width: '100%',
          minHeight: '100vh',
          overflow: 'hidden',
        }}> */}
          <VideoCover
            videoOptions={videoOptions}
          />
        {/* </div> */}

            {/* <VideoCoverContainer id="myVideo" style={{zIndex:'0' }} vidUrl={getVideo(videoName)} /> */}
        </VideoHolder>
    )
})

// class VideoCoverContainer extends React.Component {
//     constructor(props){
//         super(props)
//         this.vidUrl = props.vidUrl
//     }
//     render() {
//       const videoOptions = {
//         id="",
//         src: this.vidUrl ? this.vidUrl : 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
//         ref: videoRef => {
//           this.videoRef = videoRef;
//         },
//         onClick: () => {
//           if (this.videoRef && this.videoRef.paused) {
//             this.videoRef.play();
//           } else if (this.videoRef) {
//             this.videoRef.pause();
//           }
//         },
//         title: 'click to play/pause',
//       };
//       return (
//         <div style={{
//           width: '100%',
//           minHeight: '100vh',
//           overflow: 'hidden',
//         }}>
//           <VideoCover
//             videoOptions={videoOptions}
//           />
//         </div>
//       );
//     }
//   }


export default BackgroundVideoCustom;
