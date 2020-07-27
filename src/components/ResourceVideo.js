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

import timerSvg from '../images/resources/timer_group_6705.svg'
import narratorSvg from '../images/resources/person_icon_group_6707.svg'

import whiteTriangleRight from "../images/icons_and_glyphs/white_triangle_right.svg"

//import styled from "@emotion/styled"
import { processInternalLink, stripUneededHtml, removeParagraphsTags, getLocalImageNameFromUrl } from '../utils/displayUtils'
import { showFullScreenVideo, VideoFullScreenWidget } from '../components/VideoFullScreenWidget'

import Img from "gatsby-image/withIEPolyfill"

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

const WhitePlayArrowImg = styled.img.attrs((props) => ({ id: props.id, src:props.src}))`
    position: absolute;
    left: 49%;
    top: 52%;
    width:19px;
    height:17px;
`
const VideoHolder = styled.div`
  background-color: transparent;
  /* border-radius: 1rem;
  width: 280px;
  height: 420px !important;
  padding-top:2rem;
  padding-right:2rem;
  padding-bottom:2rem;
  margin-bottom: 100px; */
  & .video-place-holder {
    height: 200px;
    width:220px;
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
`

const DurationText = styled.div`
position:absolute;

top:10px;
right:10px;
width: 60px;
height: 30px;
& span {
    font-family: ${theme.typography.fontFamily};
    color: ${theme.palette.midnightBlue.main} !important;
    font-weight: 600;
    font-size:0.75rem;
    text-align: center;
    padding-right: 0.5rem;
    background-color: ${theme.palette.skyBlue.main};
    border-radius: 0.5rem;
}
`

const TextUnderVideo = styled.div`
    width: 327px;
  
    font-family: ${theme.typography.fontFamily};
    font-size: 1.125rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: -0.18px;
    text-align: left;
    color: ${theme.palette.raven.main};
`
const ResourcePlayButtonBackground = styled.div`
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    border-radius: 0 10px 0 0;
    background-image: linear-gradient(to bottom, ${theme.palette.skyBlue.main}, ${theme.palette.topazBlue.main} 37%, ${theme.palette.midnightBlue.main});
`

const ResourceVideo = ({resources, itemPointer = 0})  => {
    // const {isCorrectAnswer, animationVideoName} = currentCaseStudySlideData

    //console.log(resources)

    const vidUrlAr = [resources.vidUrl]
    // ttp://dev-vetm-admin.pantheonsite.io/sites/default/files/2020-07/NualaSummerfield_thumbnail_03_2.jpg
  //debugger
    return (
        <VideoHolder>
        <div style={{width: "100%",position:'relative'}}> 
            
            <div className="video-place-holder" 

                data-video-url={vidUrlAr[0]} 

                style={{position:'relative',
                borderRadius:'2rem 2rem 2rem 0',
                borderStyle: 'solid', 
                overflow:'hidden', 
                borderWidth:'0 0 0 0.5rem',
                borderLeftColor:theme.palette.skyBlue.main, 
                width: '327px',
                height: '199.8px',
                backgroundColor:'#CCCCCC'
                }}>

                <CustomFluidImage imgName={getLocalImageNameFromUrl(resources.thumbnail)} />
                {/* <Img fluid={resources.thumbnail} /> */}

              
                    <DurationText>
                        <ThemeProvider theme={theme}>
                            <StyledTypography style={{color:theme.palette.raven.main}} variant="caption">
                                &nbsp;&nbsp;{resources.duration && resources.duration !== '' ? resources.duration : '0.00'}
                            </StyledTypography>
                        </ThemeProvider>  
                    </DurationText>
               

               
                
            </div>
            <div onClick={resources.playButtonHandler ? resources.playButtonHandler : showFullScreenVideo}  style={{position:'absolute', top: "152px", left:0, width: "30px", height: "30px"}}>
                   
                    <ResourcePlayButtonBackground>
                        <WhitePlayArrowImg id={"play" + itemPointer} src={whiteTriangleRight}/>
                    </ResourcePlayButtonBackground>
            </div>
            <div style={{width: "100%",paddingTop: '1.28rem'}}>
                <TextUnderVideo>
                    {resources.caption ? removeParagraphsTags(resources.caption) : ''}
                </TextUnderVideo>
            </div>
            <div style={{width: "100%",display: 'flex',flexDirection: 'column'}}>
                
                <div style={{width: "100%",display: 'flex',flexDirection: 'row',paddingTop: '0.5rem'}}>
                    <div style={{ height: "15px",  width: "25px",display: 'flex',marginRight: '10px'}}>
                        <Narrator src={narratorSvg} /> 
                    </div>
                    <div style={{height: '1rem', width: "80%",display: 'flex',flexDirection: 'column',marginTop:'0px',marginBottom:'0px'}}>
                        <ThemeProvider theme={theme}>
                            <StyledTypography style={{color:theme.palette.raven.main,fontWeight:'600',fontSize: '0.938rem',marginTop:'4px',marginBottom:'0px'}} variant="caption">
                                {resources.narrators[0].narrator && resources.narrators[0].narrator !== '' ? resources.narrators[0].narrator : 'Unknown'}
                            </StyledTypography>
                        </ThemeProvider>  
                        <ThemeProvider theme={theme}>
                            <StyledTypography style={{color:theme.palette.raven.main,fontWeight:'200',fontSize: '0.813rem',marginTop:'0px',marginBottom:'0px'}} variant="caption">
                                {resources.narrators[0].profession && resources.narrators[0].profession !== '' ? resources.narrators[0].profession : 'Unknown'}
                            </StyledTypography>
                        </ThemeProvider> 
                       
                        <ThemeProvider theme={theme}>
                            <StyledTypography style={{color:theme.palette.raven.main,fontWeight:'200',fontSize: '0.813rem',marginTop:'0px',marginBottom:'0px'}} variant="caption">
                                {resources.narrators[0].location && resources.narrators[0].location !== '' ? resources.narrators[0].location : 'Unknown'}
                            </StyledTypography>
                        </ThemeProvider>  
                 
                    </div>
                </div>


                {/* <div style={{width: "100%",display: 'flex',flexDirection: 'row'}}>
                    <div style={{height: '1rem', width: "80%",display: 'flex',flexDirection: 'column'}}>
                        <ThemeProvider theme={theme}>
                            <StyledTypography style={{color:theme.palette.raven.main,fontWeight:'200',fontSize: '0.813rem'}} variant="caption">
                                &nbsp;&nbsp;{resources.narrators[0].profession && resources.narrators[0].profession !== '' ? resources.narrators[0].profession : 'Unknown'}
                            </StyledTypography>
                        </ThemeProvider>  
                    </div>
                </div>

                <div style={{width: "100%",display: 'flex',flexDirection: 'row'}}>
                    
                </div> */}

            </div>
        </div>

        {/* <VideoFullScreenWidget videoData1={resources} instance={"One"} />  */}

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
            {(resources.videoUrl) ?
              <video autoPlay muted loop={false} className='react-player' width='100%' height='100%' style={{ width: `100%` }}>
                  <source src={resources.videoUrl} type="video/mp4" />
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
 
 
 

export default ResourceVideo