import React from "react"
import CustomFluidImage from '../components/CustomFluidImage'
import theme, { sm, md, lg, xl } from '../theme'

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
import videoThumnbnailPoppy from '../images/grade-the-murmur/poppy_heart_thumb.jpg'
import videoThumnbnailReggie from '../images/grade-the-murmur/poppy_heart_thumb.jpg'
import videoThumnbnailDudley from '../images/grade-the-murmur/poppy_heart_thumb.jpg'

import { VideoWhiteDotButtonBackground, SmallPlayArrow, PauseResponsive, PlayResponsive, SmallTriangleRight, Cross } from './VideoPlayerParts'

//import styled from "@emotion/styled"
import { processInternalLink, stripUneededHtml, removeParagraphsTags } from '../utils/displayUtils'
import playButtonSvg from '../images/icons_and_glyphs/GradientIcon_Play.svg'
import pauseButtonSvg from '../images/icons_and_glyphs/GradientIcon_Pause.svg'
import whiteTriangleRight from "../images/icons_and_glyphs/white_triangle_right.svg"

const WhitePlayArrowImg = styled.img.attrs((props) => ({ id: props.id, src:props.src}))`
    position: absolute;
    left: 49%;
    top: 52%;
    width:19px;
    height:17px;
`

const TwoHeartPlayButtonBackground = styled.div`
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    border-radius: 0 10px 0 0;
    background-image: linear-gradient(to bottom, ${theme.palette.skyBlue.main}, ${theme.palette.topazBlue.main} 37%, ${theme.palette.midnightBlue.main});
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


const VideoHolder = styled.div`
  background-color: transparent;
  border-radius: 1rem;
  width: 480px;
  height: 294px !important;
  padding-top:2rem;
  padding-right:2rem;
  padding-bottom:2rem;
  margin-bottom: 100px;
  & .video-place-holder {
    height: 300px;
    width:400px;
    object-fit: cover;
    object-position: center;
    border-radius:1rem;
  }
  @media (max-width: ${md}px) {
      height: 150px !important;
      width:100%;
      & .video-place-holder {
        height: 150px;
        width:100%;
    }
  }
  @media (max-width: ${sm}px) {
       height: 150px !important;
       width:100%;
       & .video-place-holder {
            height: 150px;
            width:100%;
        }
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

const SlideVideo = ({resources, nextStep, itemPointer = 0})  => {
    // const {isCorrectAnswer, animationVideoName} = currentCaseStudySlideData

    console.log(resources)

    const videoNarrator = ""
    const videoDuration = ""
    let vidUrl = resources.video1 ? resources.video1 : "no link"
    if (itemPointer === 2 | itemPointer === "2") {
        vidUrl = resources.video2
    }

    let tappedVideo1 = false
    let tappedVideo2 = false

    const clickPlayButton1 = (e) => {
        // tappedVideo1 = true
        // if (tappedVideo1 && tappedVideo2) {
            nextStep(1)
        //}
    }

    const clickPlayButton2 = (e) => {
        // tappedVideo2 = true
        // if (tappedVideo1 && tappedVideo2) {
            nextStep(2)
        //}
    }

    const vidUrl1 = "" //resources.relationships.field_video1.relationships.field_media_video_file.localFile.url
    //const vidUrlAr = [vidUrl1]
    const thumbUrl1 = "korg_poster_thumb.png" //resources.relationships.field_videothumbnail1.localFile.url
    let videoText = "Poppy's heart" ///resources.field_videotext1.processed
    let onClickHandler = clickPlayButton1
    if (itemPointer === 2 || itemPointer === "2" ) {
        videoText = "Normal Heart"
        onClickHandler = clickPlayButton2
    }

    const VideoHolderInner = styled.div`
    position:relative;
    border-radius:2rem 2rem 2rem 0;
    border-style: solid; 
    overflow:hidden;
    border-width:'0.1px 0.1px 0.1px 0.5rem';
    border-left-color:${theme.palette.skyBlue.main};
    width: 100%;
    height:300px;
    background-color:${theme.palette.deminBlue.main};
    @media (max-width: ${md}px) {
        width: 80%;
        height: 250px;
    }
     @media (max-width: ${sm}px) {
       height: auto;
       width: 250px;

    }
    `

    return (
        <VideoHolder>

        <div style={{width: "100%"}}> 
            <VideoHolderInner data-video-url={vidUrl}>

                <CustomFluidImage imgName={"poppy_heart_thumb.jpg"} /> 
                <div onClick={onClickHandler} style={{position:'absolute',bottom: "18px",left:0, width: "30px",height: "30px"}}>
                    {/* <CustomFluidImage imgName="playButton.png"/> */}
                    <TwoHeartPlayButtonBackground>
                        <WhitePlayArrowImg id={"play" + itemPointer} src={whiteTriangleRight}/>
                    </TwoHeartPlayButtonBackground>

                </div>
                
            </VideoHolderInner>
            <div style={{width: "100%",textAlign:'left'}}>
                <ThemeProvider theme={theme}>
                    <StyledTypography variant="body1"><span style={{color:theme.palette.raven.main,fontWeight:'700',textAlign:'left'}} >{removeParagraphsTags(videoText)}</span></StyledTypography>
                </ThemeProvider>
            </div>
            <div style={{width: "100%",display: 'flex',flexDirection: 'row'}}>
                <div style={{width: "50%",display: 'flex',flexDirection: 'row'}}>
                    <div style={{ width: "16px", width: "16px"}}>
                    
                        <Timer src={timerSvg} /> 
                    </div>
                    <div style={{height: '1rem', width: "60px"}}>
                        <ThemeProvider theme={theme}>
                            <StyledTypography style={{color:theme.palette.raven.main,fontWeight:'400'}} variant="caption">{videoNarrator ? videoNarrator : '02:37'}</StyledTypography>
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