import React from "react"
import CustomFluidImage from '../components/CustomFluidImage';
import DogVideo from "../assets/VET-2020-001ConsultingRoom_Dudley_Placeholder.mp4"
import theme from "../theme"

import Transcript from "file-loader!../assets/transcript.vtt"
import Captions from "file-loader!../assets/captions.vtt"
import Description from "file-loader!../assets/description.vtt"

import CorrectTick from "../components/CorrectTick"
import InCorrectTick from "../components/InCorrectTick"
import { ThemeProvider, Typography } from '@material-ui/core';
import styled from 'styled-components'
import tw from "tailwind.macro"

import timerSvg from '../images/resources/timer_group_6705.svg'
import narratorSvg from '../images/resources/person_icon_group_6707.svg'

//import styled from "@emotion/styled"
import { processInternalLink, processHtml, removeParagraphsTags } from '../utils/displayUtils'

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


const VideoHolder = styled.div`
  background-color: transparent;
  border-radius: 1rem;
  width: 400px;
  height: 420px !important;
  padding-top:2rem;
  padding-right:2rem;
  padding-bottom:2rem;
  margin-bottom: 100px;
  & .video-place-holder {
    height: 400px;
    width:400px;
    object-fit: cover;
    object-position: center;
    border-radius:1rem;
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
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const PoppySitting02 = styled.div`
  height: 738px;
  width: 570px;
`; 

 

//TODO: - constants
const urlBase = "http://dev-vetm-admin.pantheonsite.io"

const SlideVideo = ({resources, itemPointer = 0})  => {
    // const {isCorrectAnswer, animationVideoName} = currentCaseStudySlideData

    console.log(resources)

    let videoText = "Poppy's heart" ///resources.field_videotext1.processed
    if (itemPointer === 2) {
        videoText = "Normal Heart"
    }

    const videoNarrator = ""
    const videoDuration = ""
    const vidUrl = DogVideo


    const vidUrl1 = "" //resources.relationships.field_video1.relationships.field_media_video_file.localFile.url
    //const vidUrlAr = [vidUrl1]

    const thumbUrl1 = "korg_poster_thumb.png" //resources.relationships.field_videothumbnail1.localFile.url
    return (
        <VideoHolder>
        <div style={{width: "100%"}}> 
            <div className="video-place-holder" data-video-url={vidUrl} style={{position:'relative',borderRadius:'2rem 2rem 2rem 0',borderStyle: 'solid', overflow:'hidden', borderWidth:'0 0 0 0.5rem',borderLeftColor:theme.palette.skyBlue.main, width: "100%",height:'300px',backgroundColor:theme.palette.deminBlue.main}}>
                {/* <CustomFluidImage imgName={thumbUrl1} /> */}
                <div style={{position:'absolute',bottom: 0,left:0, width: "30px",height: "30px"}}><CustomFluidImage imgName="playButton.png" /></div>
                
            </div>
            <div style={{width: "100%"}}>
                <ThemeProvider theme={theme}>
                    <StyledTypography style={{color:theme.palette.raven.main}} variant="body1"> {removeParagraphsTags(videoText)}</StyledTypography>
                </ThemeProvider>
            </div>
            <div style={{width: "100%",display: 'flex',flexDirection: 'row'}}>
                <div style={{width: "50%",display: 'flex',flexDirection: 'row'}}>
                    <div style={{ width: "16px", width: "16px"}}>
                    
                        <Timer src={timerSvg} /> 
                    </div>
                    <div style={{height: '1rem', width: "80%"}}>
                        <ThemeProvider theme={theme}>
                            <StyledTypography style={{color:theme.palette.raven.main}} variant="caption">&nbsp;&nbsp;{videoNarrator ? videoNarrator : '00:10'}</StyledTypography>
                        </ThemeProvider>  
                    </div>
                </div>
                {/* <div style={{width: "50%",display: 'flex',flexDirection: 'row'}}>
                    <div style={{ height: "16px",  width: "16px"}}>
                        <Narrator src={narratorSvg} /> 
                    </div>
                    
                    <div style={{height: '1rem', width: "80%"}}>
                        <ThemeProvider theme={theme}>
                            <StyledTypography style={{color:theme.palette.raven.main}} variant="caption">&nbsp;&nbsp;{videoDuration ? videoDuration : ''}</StyledTypography>
                        </ThemeProvider>  
                    </div>
                    
                </div> */}
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
                  <source src={vidUrl} type="video/mp4" />
                  {/* <track kind="transcript" srcLang="en" src={resources.videoFileTranscript1.url} />
                  <track kind="captions" srcLang="en" src={resources.videoFileCaptions1.url} />
                  <track kind="descriptions" srcLang="en" src={resources.videoFileDescription1.url} /> */}
                </video>
            : <div style={{width:'200px',height:'140px',backgroundColor:'white'}}>No video</div>}
                {/* </Transition> */}

        </div>
        </VideoHolder>
    )
}
 
export default SlideVideo