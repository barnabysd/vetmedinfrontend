import React, {useState,useRef,useEffect,useCallback} from 'react'
import VideoCover from 'react-video-cover'
import theme from "../theme"

import "./backgroundVideoCustom.css"
import videoPlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import pausePlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import { getHeartVideo, getDogOnTableVideo } from "../utils/assetUtils"

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
        id: "myVideo",
        src: props.animationVideoName !== 'undefined' && props.animationVideoName !== undefined ? props.animationVideoName : getVideo(props.dogChoice, props.isHeartVideo),
        ref: ref,
        autoPlay: props.autoPlay ? props.autoPlay : false
    }
 
    return (
        <VideoHolder>
             { noPosterImage === false || poster === "" ? <VideoCover videoOptions={videoOptions} /> : <VideoCover poster={poster} videoOptions={videoOptions} /> }
        </VideoHolder>
    )
})

export default BackgroundVideoCustom;
