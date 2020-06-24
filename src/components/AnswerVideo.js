import React from "react"
import CustomFluidImage from '../components/CustomFluidImage';

const AnswerVideo = ()  => {
    return (
              <video autoPlay muted loop={false} className='react-player' width='100%' height='200%' style={{ width: `100%` }}>
                  <source src={DogVideo} type="video/mp4" />
                  <track kind="transcript" srcLang="en" src={Transcript} />
                  <track kind="captions" srcLang="en" src={Captions} />
                  <track kind="descriptions" srcLang="en" src={Description} />
                </video>     
    
    )
}
 
export default AnswerVideo

 /* <ReactPlayer
                className='react-player'
                width='100%'
                height='100%'
                controls={false}
                url={[
                    {src: getVid(), type: 'video/mp4'}
                ]}
                /> 
               <Transition in={true} timeout={1000} appear={true}>
               
                  </Transition> 
               
               
               */