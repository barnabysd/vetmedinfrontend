import React from "react"
import CustomFluidImage from '../components/CustomFluidImage';
import DogVideo from "../assets/VET-2020-001Questions_Dudley_Sitting.mp4"
import theme from "../theme"

import Transcript from "file-loader!../assets/transcript.vtt"
import Captions from "file-loader!../assets/captions.vtt"
import Description from "file-loader!../assets/description.vtt"

import CorrectTick from "../components/CorrectTick"
import InCorrectTick from "../components/InCorrectTick"
import styled from 'styled-components'
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

export const PoppySitting02 = styled.div`
  height: 738px;
  width: 570px;
`; 

const ResponseVideo = ({currentCaseStudySlideData})  => {
    const {isCorrectAnswer, animationVideoName} = currentCaseStudySlideData

    function getDogVideo(videoName) {
        return DogVideo
    }
    return (
        <div className='player-wrapper' style={{backgroundColor: theme.palette.cloudBlue.main}}>
            {(isCorrectAnswer === "no") ? <InCorrectTick /> : <CorrectTick />}
            {currentCaseStudySlideData.mainImage ? <CustomFluidImage imgName={currentCaseStudySlideData.mainImage} /> : ''}             
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
              <video autoPlay muted loop={false} className='react-player' width='100%' height='100%' style={{ width: `100%` }}>
                  <source src={getDogVideo(animationVideoName)} type="video/mp4" />
                  <track kind="transcript" srcLang="en" src={Transcript} />
                  <track kind="captions" srcLang="en" src={Captions} />
                  <track kind="descriptions" srcLang="en" src={Description} />
                </video>
                {/* </Transition> */}

        </div>
    )
}
 
 
 

export default ResponseVideo