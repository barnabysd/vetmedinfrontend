// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"

import React from "react"
import DogVideo from "../assets/poppy.mp4"

import BackgroundVideoCustom from '../components/BackgroundVideoCustom'
import '../components/backgroundVideoCustom.css'


import Layout from '../components/layout'
// import ReactPlayer from "react-player"
import "./slideSection.css"

import Transcript from "file-loader!../assets/transcript.vtt"
import Captions from "file-loader!../assets/captions.vtt"
import Description from "file-loader!../assets/description.vtt"

import Sidebar from "../components/SideBar"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import HomeIcon from "@material-ui/icons/Home"
import "./sideBarExample.css"
import { blue, purple } from '@material-ui/core/colors';

import StyledArtDirectedBackground from '../components/StyledArtDirectedBackground'

import Transition from 'react-transition-group'



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
    return "http://localhost:8000/" + (JSON.stringify(DogVideo).replace(/"/g,'')).replace(/\/static/g,'static');
}



export default  () => (
    <Layout>
       

        {/* <BackgroundVideoCustom></BackgroundVideoCustom> */}
        
       
        <div className="sidebar" style={{ position: 'absolute', 
         top: 0,
         left: 0, 
         height: '100%',
         width: '150px',
         zIndex: 200,
         border: '1px solid red',
         backgroundColor: blue[600]}}>
      </div>

      <div style={{
        position: 'absolute', 
        border: '1px solid red',
        right: '0', 
        top: '0',
        width:'50px',
        height: '60px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'

    }}>20%</div>

<div style={{
        position: 'absolute',
        right: '0', 
        bottom: '0',
        width:'150px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        border:'1px solid red'

    }}>Continue -&gt;</div>

<div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid orange',
        minHeight: '300px',
        maxWidth: '800px',
        width: '800px'
    }}>

    

      <div className={(useStyles()).root}>
      <Grid container 
  spacing={0}
  spacing={10}
      justify="center"
      style={{   border: '1px solid black', minHeight: '300px',
      maxWidth: '800px' }}>
     
        <Grid item xs={12} sm={6}  align="center" style={{border: '1px solid red'}}>
         
              <div className='player-wrapper'>
                <div style={{position: 'absolute', 
                top: 30, 
                right: 30, 
                zIndex: 100, 
                width: '50px', 
                height: '50px', 
                display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        verticalAlign: 'middle',
        border:'1px solid red'}}>
                    O
                </div>
                
           
<p>Hello</p>
          
            </div>
           
        </Grid>
        <Grid item xs={12} sm={6}  align="left" style={{border: '1px solid red'}}>
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
    

    
   

    </div>
   
  </Layout>

    
)

//      <ReactPlayer
//                 className='react-player'
//                 width='100%'
//                 height='100%'
//                 controls={false}
//                 url={[
//                     {src: getVid(), type: 'video/mp4'}
//                 ]}
//                 /> 
// <Transition in={true} timeout={1000} appear={true}> 