// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"

import React from "react"
import DogVideo from "../assets/oakley.mp4"
import Layout from '../components/layout'
// import ReactPlayer from "react-player"
import "./responsiveVideoPlayer.css"

import Transcript from "file-loader!../assets/transcript.vtt"
import Captions from "file-loader!../assets/captions.vtt"
import Description from "file-loader!../assets/description.vtt"

import Sidebar from "../components/Sidebar"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import HomeIcon from "@material-ui/icons/Home"
import "./sideBarExample.css"
import { blue, purple } from '@material-ui/core/colors';

import StyledArtDirectedBackground from '../components/StyledArtDirectedBackground'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function onClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
  }

const items = [
    { name: "home", label: "Home", Icon: HomeIcon },
    { name: 'this', label: 'that' },
    { name: 'that', label: 'this' },
  ]
  

    
//import JSON from "react-dom"

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

//   export default ResponsiveVideoPlayer

function getVid() {
    return "http://localhost:8002/" + (JSON.stringify(DogVideo).replace(/"/g,'')).replace(/\/static/g,'static');
}



export default  () => (
    <Layout>
        {/* <StyledArtDirectedBackground /> */}
        {/* <div style={{ minHeight: '100%', overflow: 'none'}}> */}
        <div className="sidebar" style={{ position: 'absolute', top: 0, left: 0, height: '100%' ,width: '150px', zIndex: 200, backgroundColor: blue[600]}}>
      {/* <Sidebar items={items}  /> */}
      </div>

      <div style={{
        position: 'absolute', 
        backgroundColor: 'yellow',
        right: '0', 
        top: '0',
        width:'50px',
        height: '60px'

    }}></div>

<div style={{
        position: 'absolute',
        right: '0', 
        bottom: '0',
        width:'150px',
        height: '100px'

    }}>Continue -&gt;</div>

<div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>

    

      <div className={(useStyles()).root}>
      <Grid container 
  spacing={0}
  spacing={24}
      justify="center"
      style={{  maxWidth: '800px', backgroundColor: 'brown' }}>
        {/* <Grid item xs={12} sm={12}>
          <Paper className={(useStyles()).paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={12} sm={6}  align="center" style={{backgroundColor: 'orange'}}>
          {/* <Paper className={(useStyles()).paper}> */}
              <div className='player-wrapper' style={{backgroundColor: 'pink'}}>
                <div style={{display: 'flex', position: 'absolute', top: 30, right: 30, zIndex: 100, width: '100px', height: '100px', backgroundColor: 'red'}}>
                    <p style={{display: 'flex',alignContent: 'center'}}>tick</p>
                </div>
                
                {/* <ReactPlayer
                className='react-player'
                width='100%'
                height='100%'
                controls={false}
                url={[
                    {src: getVid(), type: 'video/mp4'}
                ]}
                /> */}

<video controls className='react-player' width='100%' height='200%' style={{ width: `100%` }}>
    <source src={DogVideo} type="video/mp4" />
    <track kind="transcript" srcLang="en" src={Transcript} />
    <track kind="captions" srcLang="en" src={Captions} />
    <track kind="descriptions" srcLang="en" src={Description} />
  </video>
            
            </div>
            {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={6}  align="left" style={{backgroundColor: 'brown'}}>
          <p>Correct</p><p>Poppy has a systolic heart murmur that’s loudest
over the left apex (the location of the mitral valve).
A murmur is often the first sign of mitral valve
disease that is detected upon clinical examination.1</p>
<p>It is likely that Poppy has had a murmur for quite a while but it
either has not been detected, or it has not been recorded.</p>
<p>It is vital to note the presence of a murmur and the grade on
the dog’s clinical record.</p>
<p>Build your confidence in identifying mitral valve disease
murmurs</p>
<p style={{color: `red`, textDecoration: `underline`}}>Watch</p>
   
        </Grid>
        
      </Grid>
    </div>
    

    
    {/* <div style={{display: 'flex', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
   
   
    </div> */}
    {/* </div> */}
    </div>
  </Layout>

    
)