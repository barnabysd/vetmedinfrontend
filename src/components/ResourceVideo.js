import React from "react"
import CustomFluidImage from '../components/CustomFluidImage';
import DogVideo from "../assets/poppy.mp4"
import theme from "../theme"

import Transcript from "file-loader!../assets/transcript.vtt"
import Captions from "file-loader!../assets/captions.vtt"
import Description from "file-loader!../assets/description.vtt"

import CorrectTick from "../components/CorrectTick"
import InCorrectTick from "../components/InCorrectTick"
import { ThemeProvider, Typography } from '@material-ui/core';
import styled from 'styled-components'
import tw from "tailwind.macro"
//import styled from "@emotion/styled"

const VideoHolder = styled.div`
  ${tw`bg-white
  border`}
  width: 200px;
  img {
    height: 200px;
    object-fit: cover;
    object-position: center;
  }
`
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
//     return "http://localhost:8000/" + (JSON.stringify(DogVideo).replace(/"/g,'')).replace(/\/static/g,'static');
// }

// did you hear valve heart

const StyledTypography = styled(Typography)`
    margin-bottom: 3rem;
`;

const PoppySitting02 = styled.div`
  height: 738px;
  width: 570px;
`; 

const ResourceVideo = ({resources, itemPointer})  => {
    // const {isCorrectAnswer, animationVideoName} = currentCaseStudySlideData
    return (
        <VideoHolder>
        <div style={{width: "100%"}}> 
            <div style={{width: "100%",height:'140px'}}><CustomFluidImage imgName={resources.videoThumbnail1} /> </div>
            <div style={{width: "100%"}}>
                <ThemeProvider theme={theme}>
                    <StyledTypography variant="body1"> {resources.videoText1}</StyledTypography>
                </ThemeProvider>
            </div>
            <div style={{width: "100%",display: 'flex',flexDirection: 'row'}}>
                <div style={{width: "50%",display: 'flex',flexDirection: 'row'}}>
                    <div style={{height: '1rem', width: "20%"}}>
                        <CustomFluidImage imgName="timer.png" />  
                    </div>
                    <div style={{height: '1rem', width: "80%"}}>
                        <ThemeProvider theme={theme}>
                            <StyledTypography variant="caption">{resources.videoNarrator1 && resources.videoNarrator1 !== '' ? resources.videoNarrator1 : 'Unknown Name'}</StyledTypography>
                        </ThemeProvider>  
                    </div>
                </div>
                <div style={{width: "50%",display: 'flex',flexDirection: 'row'}}>
                    <div style={{height: '1rem', width: "20%"}}>
                        <CustomFluidImage imgName="narrator.png" /> 
                    </div>
                    
                    <div style={{height: '1rem', width: "80%"}}>
                        <ThemeProvider theme={theme}>
                            <StyledTypography variant="caption">{resources.videoDuration1 && resources.videoNarrator1 !== '' ? resources.videoDuration1 : '00:00'}</StyledTypography>
                        </ThemeProvider>  
                    </div>
                    
                </div>
            </div>
        </div>



        <div className='player-wrapper' style={{backgroundColor: '#b7ebfa',display:'none',width: '100%',height: '100%'}}>
                      
            {/* <ReactPlayer
                className='react-player'
                width='100%'
                height='100%'
                controls={false}
                url={[
                    {src: getVid(), type: 'video/mp4'}
                ]}
                /> */}
              {/* <Transition in={true} timeout={1000} appear={true}> */}
            {(resources.video1 && resources.video1.url) ?
              <video autoPlay muted loop={false} className='react-player' width='100%' height='100%' style={{ width: `100%` }}>
                  <source src={resources.video1.url} type="video/mp4" />
                  <track kind="transcript" srcLang="en" src={resources.videoFileTranscript1.url} />
                  <track kind="captions" srcLang="en" src={resources.videoFileCaptions1.url} />
                  <track kind="descriptions" srcLang="en" src={resources.videoFileDescription1.url} />
                </video>
            : <div style={{width:'200px',height:'140px',backgroundColor:'white'}}>No video</div>}
                {/* </Transition> */}

        </div>
        </VideoHolder>
    )
}
 
 
 

export default ResourceVideo