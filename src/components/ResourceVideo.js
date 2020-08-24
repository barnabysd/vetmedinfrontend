import React from "react"
import CustomFluidImage from '../components/CustomFluidImage';
import theme from "../theme"
import { ThemeProvider, Typography } from '@material-ui/core';
import styled from 'styled-components'

import timerSvg from '../images/resources/timer_group_6705.svg'
import narratorSvg from '../images/resources/person_icon_group_6707.svg'

import whiteTriangleRight from "../images/icons_and_glyphs/white_triangle_right.svg"

import { processInternalLink, stripUneededHtml, removeParagraphsTags, getLocalImageNameFromUrl, processField } from '../utils/displayUtils'
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
  width:100%;
  height:550px;
  

  & .video-place-holder {
    height: 200px;
    width:220px;
    object-fit: cover;
    object-position: center;
    border-radius:1rem;
  }
`
const StyledTypography = styled(Typography)`
    margin-top: 1rem;
    margin-bottom: 1rem;
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

const ProfessionUnderResourceVideoNarrator = styled.div `
  width: 100%;
  padding-top: 10px;
  font-family: ${theme.typography.fontFamily};
  font-size: 0.813rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.palette.raven.main};
  & p {
    font-family: ${theme.typography.fontFamily};
    font-size: 13px;
    font-weight: 600;
  }
  & strong {
    font-family: ${theme.typography.fontFamily};
    font-size: 13px;
    font-weight: 600;
  }
`  

const LocationUnderResourceVideoNarrator = styled(ProfessionUnderResourceVideoNarrator) `
   font-weight: 200;
   padding-top: 0px;
`  

const People = ({resources}) => {
    //debugger
    if (typeof resources === 'undefined' || typeof resources === null ) return <p>No video details found</p>
    if (typeof resources.narrators === 'undefined' || typeof resources.narrators === null || resources.narrators.length === 0 ) return <p>No narrator found</p>
    if (resources.narrators.length > 0 ) { } else { <p>No narrator found</p> }
    if (typeof resources.narrators[0].narrator === 'undefined' || typeof resources.narrators[0].narrator  === undefined || typeof resources.narrators[0].narrator  === null ) return <p>No narrator found</p>
    if (typeof resources.narrators[0].profession === 'undefined' || typeof resources.narrators[0].profession  === undefined || typeof resources.narrators[0].profession  === null ) return <p>No narrator found</p>
    console.log(resources.narrators)
    return (
        <>
        {(resources.narrators).map((child, index) => {

              let showResource = resources.narrators[index].narrator && resources.narrators[index].narrator !== '' ? true : false
              return (
                   <>
                    { showResource ? <div style={{width: "327px",display: 'flex',flexDirection: 'row',paddingTop: (index > 0 ? '3rem':'0.5rem')}}>          
                        <div style={{ height: "15px",  width: "25px",minWidth: "25px",display: 'flex',marginRight: '10px'}}>
                            <Narrator src={narratorSvg} /> 
                        </div>
                        <div style={{height: '2rem', width: "250px",minWidth: "250px",display: 'flex',flexDirection: 'column',marginTop:'0px',marginBottom:'0px'}}>
                            <ThemeProvider theme={theme}>
                                <StyledTypography style={{color:theme.palette.raven.main,fontWeight:'600',fontSize: '0.938rem',marginTop:'4px',marginBottom:'0px'}} variant="caption">
                                    {resources.narrators[index].narrator && resources.narrators[index].narrator !== '' ? resources.narrators[index].narrator : 'Unknown'}
                                </StyledTypography>
                            </ThemeProvider>  
                            { typeof resources.narrators[index].profession !== 'undefined' && resources.narrators[index].profession !== '' ? 
                                <ProfessionUnderResourceVideoNarrator>
                                    {resources.narrators[index].profession}
                                </ProfessionUnderResourceVideoNarrator>
                             : ''}
                            { typeof resources.narrators[index].location !== 'undefined' && resources.narrators[index].location !== '' && resources.narrators[index].location !== '.' ? 
                                <LocationUnderResourceVideoNarrator>
                                    {resources.narrators[index].location}
                                </LocationUnderResourceVideoNarrator> : ''}
                        </div>
                    </div> : ''
                     }
                    </>
                )
            })
        }
        </> 
    )
}

const ResourceVideo = ({resources, itemPointer = 0})  => {
  
    const vidUrlAr = [resources.vidUrl]

    return (
        <VideoHolder>
        <div style={{width: "100%",position:'relative'}}> 
            
            <div className="video-place-holder" 

                data-video-url={vidUrlAr[0]} 

                style={{position:'relative',
                borderRadius:'1rem 1rem 1rem 0',
                borderStyle: 'solid', 
                overflow:'hidden', 
                borderWidth:'0 0 0 0.5rem',
                borderLeftColor:theme.palette.skyBlue.main, 
                width: '337px',
                height: '199.8px',
                backgroundColor:'#CCCCCC'
                }}>

                <CustomFluidImage imgName={getLocalImageNameFromUrl(resources.thumbnail)} />
             
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
                <People resources={resources} />
            </div>
        </div>

       
        {/* <div className='player-wrapper' style={{backgroundColor: '#b7ebfa',display:'none',width: '100%',height: '100%'}}>
                      
            {(resources.videoUrl) ?
              <video autoPlay muted loop={false} className='react-player' width='100%' height='100%' style={{ width: `100%` }}>
                  <source src={resources.videoUrl} type="video/mp4" />
              </video>
            : <div style={{width:'200px',height:'140px',backgroundColor:'white'}}>No video</div>}

        </div> */}
        </VideoHolder>
    )
}
 
 
 

export default ResourceVideo