import React, {forwardRef} from "react"
import CustomFluidImage from '../components/CustomFluidImage';
import theme from "../theme"
import VideoCover from 'react-video-cover'
import styled from 'styled-components'
//import videoThumb from '../images/heart/dudley_sitting_thumbnail_blurred.jpg'

// ie 11
// https://github.com/constancecchen/object-fit-polyfill

const FixedVideoHolder = styled.div`
width:400px;
height:400px;
min-width:400px;
min-height:400px;
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

    let width = props.width ? props.width : '100%'
    let height = props.height ? props.height : '100vh'

    const videoOptions = {
        id: "fixedSizeVideo",
        src: animationVideoName,
        ref: ref,
        poster: "https://dummyimage.com/600x400/d6f7fd/d6f7fd",
        autoPlay: true
    }

    //TODO - poster image 
   
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'flex-start', minHeight:'100vh',width:width,backgroundColor: 'transparent'}}>
                {/* ie 11  video player fix */}

                <FixedVideoHolder style={{ width: width, height: height }}>
                    <VideoCover poster={"https://dummyimage.com/600x400/d6f7fd/d6f7fd"} videoOptions={videoOptions} />
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