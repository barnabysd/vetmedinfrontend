import React, {forwardRef} from "react"
import CustomFluidImage from '../components/CustomFluidImage';

import theme from "../theme"
import VideoCover from 'react-video-cover'

import Transcript from "file-loader!../assets/transcript.vtt"
import Captions from "file-loader!../assets/captions.vtt"
import Description from "file-loader!../assets/description.vtt"

import styled from 'styled-components'
import videoThumb from '../images/heart/dudley_sitting_thumbnail_blurred.jpg'

// ie 11
// https://github.com/constancecchen/object-fit-polyfill

// import ReactPlayer from "react-player"

// class ResponsiveVideoPlayer extends Component {
//     render () {
//       return (
//         <div className='player-wrapper'>
//           <ReactPlayer
//             className='react-player'
//             url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
//             width='100%'
//             height='100%'
//           />
//         </div>
//       )
//     }
//   }

// function getVid() {
//     return "http://localhost:8000/" + (JSON.stringify().replace(/"/g,'')).replace(/\/static/g,'static');
// }

export const PoppySitting02 = styled.div`
  height: 738px;
  width: 570px;
`; 

const FixedSizeVideoWidget = React.forwardRef((props, ref) => {

    const { animationVideoName } = props.data

    console.log("props.animationVideoName", props.animationVideoName)

    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  
    const onLoadedData = () => {
      setIsVideoLoaded(true);
    };

    let width = props.width ? props.width : '100%'
    let height = props.height ? props.height : '100vh'

    // const videoOptions = {
    //     id: "myVideo",
    //     src: getVideo(animationVideoName),
    //     ref: ref,
    //     autoPlay: props.autoPlay ? props.autoPlay : false
    // };
    // <div style={{backgroundColor: theme.palette.cloudBlue.main}}>
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'flex-start', minHeight:'100vh',width:width,backgroundColor: 'transparent'}}>

              {/* {mainImage ? <CustomFluidImage imgName={mainImage} /> : ''}      */}
              {/* <img src={videoThumb} alt="" style={{ opacity: isVideoLoaded ? 0 : 1, width: `100%` }} /> */}
              <video autoPlay playsInline muted onLoadedData={onLoadedData} loop={false} width={width} height={height} style={{ opacity: isVideoLoaded ? 1 : 0, width: width, height: height }}>
                  <source src={animationVideoName} type="video/mp4" />
              </video>

        </div>
    )
})
 
export default FixedSizeVideoWidget