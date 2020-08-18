import React, {useState,useRef,useEffect,useCallback} from 'react'
import VideoCover from 'react-video-cover'
import theme from "../theme"

import "./backgroundVideoCustom.css"
import videoPlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import pausePlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import { getHeartVideo, getDogOnTableVideo } from "../utils/assetUtils"
import { getIfIe11 } from '../utils/displayUtils'

export const videoPlayButtonStates = {
    PLAY: 'play',
    PAUSE: 'pause',
    NONE: 'none'
}

const BackgroundVideoCustom = React.forwardRef((props, ref) => {

    console.log(props)

    const { videoName, VideoHolder, playButtonState } = props

    //TODO - poster images

    const noPosterImage = props.noPosterImage ? props.noPosterImage : true

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

    let videoStatusClassName = 'video-inactive'

    //TODO - poster image 

    let poster = "" // noPosterImage ? (props.poster ? props.poster : 'https://dummyimage.com/600x400/d6f7fd/d6f7fd') :'',

    const videoOptions = {
        id: "backgroundVideo",
        src: props.animationVideoName !== 'undefined' && props.animationVideoName !== undefined ? props.animationVideoName : getVideo(props.dogChoice, props.isHeartVideo),
        ref: ref,
        autoPlay: props.autoPlay ? props.autoPlay : false,
        loop: true
    }

    useEffect(() => {
        // ie 11 fix - black background video
        if (getIfIe11()) {
            var b = setInterval(() => {
                if (document.getElementById("backgroundVideoContainer")) document.getElementById("backgroundVideoContainer").style.marginLeft = 0
                clearInterval(b)
              
            },1000)
        }
        return () => {
        }
      })
 
    return (
        <VideoHolder id="backgroundVideoContainer">
             { noPosterImage === false || poster === "" ? <VideoCover loop={true} videoOptions={videoOptions} /> : <VideoCover loop={true} poster={poster} videoOptions={videoOptions} /> }
        </VideoHolder>
    )
})

export default BackgroundVideoCustom;
