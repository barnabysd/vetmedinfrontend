// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"

import React from "react"
import DogVideo from "../assets/poppy.mp4"
import Layout from '../components/layout'
// import ReactPlayer from "react-player"
import "./slideSection.css"

import Transcript from "file-loader!../assets/transcript.vtt"
import Captions from "file-loader!../assets/captions.vtt"
import Description from "file-loader!../assets/description.vtt"

import Sidebar from "../components/Sidebar"

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import HomeIcon from "@material-ui/icons/Home"
import "./sideBarExample.css"
import { blue, purple } from '@material-ui/core/colors'

import StyledArtDirectedBackground from '../components/StyledArtDirectedBackground'

import Transition from 'react-transition-group'

import CustomFluidImage from "../components/CustomFluidImage"
import WebsiteLogo from "../components/WebsiteLogo"

import StyledBackgroundSection from "../components/BackgroundSection"
import StyledBackgroundSectionFixed from "../components/StyledBackgroundSectionFixed"

import styled from 'styled-components'

import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

import QuestionModal from "../components/QuestionModal"
// import ResponsiveDialog from '../components/ResponsiveDialog'
import OrangeRoundedButton from "../components/OrangeRoundedButton"

import { Link } from "gatsby"

import  { useCallback, useState, useEffect, useDebugValue, forceUpdate } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawerOpen, sendMessageData } from '../state/createStore'
import SideDrawer from "../components/SideDrawer"
import useLocalStorage from '../utils/localStorageHelper'

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

function getVid() {
    return "http://localhost:8000/" + (JSON.stringify(DogVideo).replace(/"/g,'')).replace(/\/static/g,'static');
}

function addCounter(num) {
  return {
    type: 'INCREMENT',
    num
  }
}

function slideSection() {

  const [score, setScore ] = useLocalStorage(undefined, '')
  const counter = useSelector(state => state.reducerIncrement, 0);
  console.log("counter 1", counter)

  // fetch("/.netlify/functions/hello.js")
  // .then(response => response.json())
  // .then(console.log)


  // const myFunction = async () => await (await fetch('/.netlify/functions/createUser.js')).json();
  // console.log(myFunction)

  // let incrementScore = useCallback(
  //   event => {
  //     dispatch(addCounter(1))
  //   },
  //   [dispatch],
  // );

  let incrementScore = useCallback(
    event => { 
      setScore(parseInt(score) + 1)
    },
    [score],
  );

  useEffect(() => {
    const someFunction = () => {
    };
    // (document.getElementById('hamburgerIconCustom')).addEventListener('click', handleSideMenuOpen, { passive: true });
    return () => {
      // clean up the event handler when the component unmounts
       // (document.getElementById('hamburgerIconCustom')).removeEventListener('click', handleSideMenuOpen);
    };
  }, [{'some':'data'}]);

  // const sss = useSelector(state => state, {"none":"dfddf"});
  // console.log(sss)
  // alert(sss)

  const message = useSelector(state => state.reducerMessage, []);
  // messageStored = message
  const dispatch = useDispatch();

//   dispatch(addTodo('Read the docs'))
//   dispatch(addTodo('Read about the middleware'))
//   dispatch(addCounter(4))
//   dispatch(addTodo('Read the docs'))

  return (
    <Layout>
        {/* <StyledArtDirectedBackground /> */}
        {/* <StyledBackgroundSection className="nnn" imgName="Backgrounds_WaitingRoon_3000_01-01.png" />
        */}
        {/* <ResponsiveDrawer /> */}

       <SideDrawer />

      <div style={{
        position: 'absolute', 
        border: '1px solid red',
        right: '0', 
        top: '0',
        width:'80px',
        height: '100px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        textAlign: 'center'

    }}>
      <CustomFluidImage imgName="percentProgress.png" />
    </div>

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
        border: '0px solid red'

    }}><Link style={{display: 'flex',flexDirection:'row',alignItems:'center',width:'200px',height:'50px',textDecoration:'none',color:'white !important',fontFamily:'Poppins',fontWeight:'700'}} to="/">Continue <ArrowForwardRoundedIcon /></Link></div>

<div style={{
        position: 'absolute',
        left: '10%', 
        bottom: '0',
        width:'150px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        zIndex:'100',
        border:'0px solid red'

    }}> <Link to="/" style={{display: 'flex',flexDirection:'row',alignItems:'center',width:'200px',height:'50px',textDecoration:'none',color:'white !important',fontFamily:'Poppins',fontWeight:'700'}}><ArrowBackRoundedIcon />Back to home</Link> </div>

{/* <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid orange',
        minHeight: '300px',
        maxWidth: '800px',
        width: '800px'
    }}> */}

    

      <div className={(useStyles()).root}>
        

      <Grid container 
      spacing={0}
      spacing={0}
      justify="center"
      style={{border: '1px solid black', }}>
        <Grid item xs={12} sm={12}  style={{border: '0px solid red'}}>
         <div  style={{height: '100px'}}></div>
        </Grid>
         <Grid item xs={12} sm={1}  align="left" style={{border: '1px solid red'}}>

</Grid>

        <Grid item xs={12} sm={5}  align="center" style={{border: '1px solid red'}}>
          {/* <Paper className={(useStyles()).paper}> */}
              <div className='player-wrapper' style={{backgroundColor: '#b7ebfa'}}>

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
                    <CustomFluidImage imgName="correct.png" />
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
              {/* <Transition in={true} timeout={1000} appear={true}> */}
              <video autoPlay muted loop={false} className='react-player' width='100%' height='200%' style={{ width: `100%` }}>
                  <source src={DogVideo} type="video/mp4" />
                  <track kind="transcript" srcLang="en" src={Transcript} />
                  <track kind="captions" srcLang="en" src={Captions} />
                  <track kind="descriptions" srcLang="en" src={Description} />
                </video>
                {/* </Transition> */}
                          
            </div>
            {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={5}  align="left" style={{border: '1px solid red'}}>

        {/* <CustomFluidImage imgName="refGreen.png" />
        <CustomFluidImage imgName="refRed.png" />
        <CustomFluidImage imgName="modalRef.png" /> */}

       

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
            <button onClick={incrementScore}>test</button>

            {/* <p style={{color: `red`, textDecoration: `underline`}}>Watch</p> */}

              {/* <QuestionModal /> */}
              {/* <ResponsiveDialog /> */}

   
        </Grid>
        <Grid item xs={12} sm={1}  align="left" style={{border: '1px solid red'}}>

        </Grid>
        <Grid item xs={12} sm={12}  style={{border: '1px solid red'}}>
        <div  style={{height: '100px'}}></div>
         </Grid>
        
      </Grid>
    </div>
    

    
    {/* <div style={{display: 'flex', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
   
   
    </div> */}

    {/* </div> */}
   
  </Layout>

    
)}

export default slideSection

// connect(state => ({
//    isDrawerOpen: state.app.isDrawerOpen
// }), null) (ResponsiveVideoPlayer)