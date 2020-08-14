import React, {forwardRef, useEffect} from "react"
import CustomFluidImage from '../components/CustomFluidImage';
import theme from "../theme"
import VideoCover from 'react-video-cover'
import styled from 'styled-components'
import { getIfIe11 } from '../utils/displayUtils'
//import videoThumb from '../images/heart/dudley_sitting_thumbnail_blurred.jpg'

// ie 11
// https://github.com/constancecchen/object-fit-polyfill

const FixedVideoHolder = styled.div`
    width:550px;
    height:550px;
    max-width: 550px;
    max-height: 550px;
    overflow:hidden;
`

const FixedSizeVideoWidget = React.forwardRef((props, ref) => {

    const { animationVideoName } = props.data
    //const { videoName, VideoHolder, playButtonState } = props

    console.log("props.animationVideoName", props.animationVideoName)

    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  
    const onLoadedData = () => {
      setIsVideoLoaded(true);
    };

//     function checkforVideo() {
//         const videoElement = document.getElementById("fixedSizeVideo");
        
//         //Every 500ms, check if the video element has loaded
//         var b = setInterval(() => {
//             if(videoElement.readyState >= 3){
//                 const videoElementContainer = document.getElementById("videoContainer")
//                 videoElementContainer.style.opacity = "1"
//                 const videoPreloadImage = document.getElementById("videoPreloadImage")
//                 videoPreloadImage.style.opacity = "0"
//                 //stop checking every half second
//                 debugger
                
//                 clearInterval(b);
//             }                   
//         },500)
//     }

    useEffect(() => {
        const videoElement = document.getElementById("fixedSizeVideo");
        
        //Every 500ms, check if the video element has loaded
        var b = setInterval(() => {
            if (videoElement.readyState >= 3){
                const videoElementContainer = document.getElementById("videoContainer")
                videoElementContainer.style.opacity = 1
                if (typeof document.getElementById("videoPreloadImage") !== 'undefined') {
                    const videoPreloadImage = document.getElementById("videoPreloadImage")
                    //videoPreloadImage.style.opacity = 0
                }
                //stop checking every half second
                //debugger
                
                clearInterval(b)
            }                   
        },500)
        return () => {
         
        }
      })

    let width = props.width ? props.width : '100%'
    let height = props.height ? props.height : '100vh'

    let maxWidth = props.maxWidth ? props.maxWidth : width
    let maxHeight = props.maxHeight ? props.maxHeight : height

    let verticalAlignment = props.verticalAlignment ? props.verticalAlignment : 'center'
    let horizontalAlignment = props.horizontalAlignment ? props.horizontalAlignment : 'center'

    const videoOptions = {
        id: "fixedSizeVideo",
        src: animationVideoName,
        ref: ref,
        poster: "https://dummyimage.com/600x400/d6f7fd/d6f7fd",
        autoPlay: true,
        playsInline: true,
        muted: true
    }

    // playsInline 
    // muted 
    // onLoadedData={onLoadedData} 

    //TODO - poster image 
   
    return (
        <div style={{
                position:'relative',
                display:'flex',
                flexDirection:'column',
                justifyContent: verticalAlignment,
                alignContent: horizontalAlignment,
                minHeight:'100vh',
                width:width,
                backgroundColor:'transparent'}}>
               
                <FixedVideoHolder id="videoContainer" style={{
                    opacity: 1, 
                    width: width, 
                    height: height,
                    maxWidth: maxWidth, 
                    maxHeight: maxHeight,
                    justifyContent: verticalAlignment 
                }}>
                    {/* ie 11  video player fix */}

                    <VideoCover style={{justifyContent: verticalAlignment}} poster={"https://dummyimage.com/600x400/d6f7fd/d6f7fd"} playsInline muted videoOptions={videoOptions} />
                     {/* TODO - ie 11 black ground fix -  set opacity 1 when load detection working */}
                     {/* <img id="videoPreloadImage" src={"https://dummyimage.com/600x400/d6f7fd/d6f7fd"} alt="" style={{ 
                         opacity:'0', 
                         height:'100%', 
                         width: '100%',
                         position: 'absolute',
                         left: 0,
                         top: 0 }}
                    /> */}
                   
                </FixedVideoHolder>
                
                {/* {mainImage ? <CustomFluidImage imgName={mainImage} /> : ''}      */}
                {/* <img src={videoThumb} alt="" style={{ opacity: isVideoLoaded ? 0 : 1, width: `100%` }} /> */}
                {/* <video autoPlay playsInline muted onLoadedData={onLoadedData} 
                    poster={"https://dummyimage.com/600x400/d6f7fd/d6f7fd"}
                    loop={false} 
                    width={width} 
                    height={height} 
                    style={{ opacity: isVideoLoaded ? 1 : 0, width: width, height: height }}>
                        <source src={animationVideoName} type="video/mp4" />
                </video> */}
        </div>
    )
})
 
export default FixedSizeVideoWidget