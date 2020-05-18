// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"

import React from "react"
import DogVideo from "../assets/poppy.mp4"
import Layout from '../components/layout'
// import ReactPlayer from "react-player"
import "./responsiveVideoPlayer.css"

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

import StyledBackgroundSection from "../components/StyledBackgroundSection"
import StyledBackgroundSectionFixed from "../components/StyledBackgroundSectionFixed"

import styled from 'styled-components'

import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

import QuestionModal from "../components/QuestionModal"
// import ResponsiveDialog from '../components/ResponsiveDialog'
import OrangeRoundedButton from "../components/OrangeRoundedButton"

import { Link } from "gatsby"

import ResponsiveDrawer from '../components/ResponsiveDrawer'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import VisibleItemList from '../components/VisibleItemList'

import { HamburgerSpin } from 'react-animated-burgers'

//import { connect } from 'react-redux'
//import { toggleDrawerOpen } from '../state/app'

import  { useCallback, useState, useEffect, useDebugValue, forceUpdate } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawerOpen, sendMessageData } from '../state/createStore'

// import { createStore } from 'redux'
// const store = createStore(todos, ['Use Redux'])


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
  
  const dummyCategories = ['', '', 'Contact', 'Resources', 'References','', 'Terms of use', 'Privacy policy', 'Cookies policy','Accessibility policy']
 
    
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

const nnn = () => {
  return <CustomFluidImage imgName="iConsultLogo.png" />
}
const VetmedinLogo = styled(nnn)`
  width: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
`
const drawer = (
 
    <List>
      {/* {dummyCategories.map((text, index) => ( */}
        {/* <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem> */}


        <ListItem button key={"aaa"}>
          <ListItemText primary={"Contact"} style={{"color":"#24add6","fontWeight":"700"}} />
        </ListItem>
        <ListItem button key={"bbb"}>
          <ListItemText primary={"resources"} style={{"color":"#24add6","fontWeight":"700"}} />
        </ListItem>
        <ListItem button key={"ccc"}>
          <ListItemText primary={"References"} style={{"color":"#24add6","fontWeight":"700"}} />
        </ListItem>


        <ListItem button key={"dd"}>
          <ListItemText primary={""} style={{"color":"white"}} />
        </ListItem>

        <ListItem button key={"ddd"}>
          <ListItemText primary={"Terms of use"} style={{"color":"white","fontWeight":"700"}} />
        </ListItem>
        <ListItem button key={"eee"}>
          <ListItemText primary={"Privacy policy"} style={{"color":"white","fontWeight":"700"}} />
        </ListItem>
        <ListItem button key={"ee"}>
          <ListItemText primary={"Cookie policy"} style={{"color":"white","fontWeight":"700"}} />
        </ListItem>
        <ListItem button key={"fff"}>
          <ListItemText primary={"Accessibility policy"} style={{"color":"white","fontWeight":"700"}} />
        </ListItem>
      {/* ))} */}
    </List>

    
  
);

// ResponsiveVideoPlayer.propTypes = {
//   className: PropTypes.string,
//   active: PropTypes.bool,
// };
// ResponsiveVideoPlayer.defaultProps = {
//   className: '',
//   active: false,
// };

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

function addCounter(num) {
  return {
    type: 'INCREMENT',
    num
  }
}


let open = false;
let messageStored = "ggg";
let widthDrawer = '150px';
let col = '#0b2f85'

function ResponsiveVideoPlayer() {

  function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = typeof window !== 'undefined' && window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
  
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        
        const valueToStore =
          value instanceof Function ? value('storedValue') : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        
        console.log(error);
      }
    };
  
    return [storedValue, setValue];
  }

  const [score, setScore ] = useLocalStorage(undefined, '')

  // const [drawState, setDrawState] = useState({
  //   sideMenuOpen: false,
  //   widthDrawer: '150px',
  //   col: 'red'
  // });
  
  const [sideDrawer, setSideDrawer] = useState(false)

  useDebugValue(sideDrawer ? 'side menu open' : 'side menu closed');

  const counter = useSelector(state => state.reducerIncrement, 0);
  console.log("counter 1", counter)

  let toggleButton = useCallback(
    event => {

      console.log(sideDrawer ? 'side menu open' : 'side menu closed')


      fetch("/.netlify/functions/hello.js")
      .then(response => response.json())
      .then(console.log)


      const myFunction = async () => await (await fetch('/.netlify/functions/createUser.js')).json();
      console.log(myFunction)


      setSideDrawer((sideDrawer ? false : true))
    },
    [sideDrawer],
  );

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
    /*toggleButton = useCallback(
      event => {

        // dispatch(addCounter(1))
  
        
        console.log(sideDrawer ? 'side menu open' : 'side menu closed')
        setSideDrawer((sideDrawer ? false : true))
     
  
        // console.log('messageStored', messageStored)
  
        //      const sss = useSelector(state => state, {"none":"dfddf"});
        // console.log(sss)
        // alert(sss)
        // const open = useSelector(state => state.reducerDrawer, false);
        // if (!open) {
        //   //console.log('open drawer')
        //   // widthDrawer = '400px'
        //   // col = 'red'
        //   dispatch(sendMessageData("helloooooo"))
        // } else {
        //   console.log('closed drawer')
        //   //open = true
        //   // widthDrawer = '150px'
        //   // col = 'green'
        //   dispatch(sendMessageData("yoooo"))
        // }
        // dispatch(toggleDrawerOpen(!open))
        
      },
      [dispatch],
    );*/
    const handleSideMenuOpen = () => {

      const element = document.getElementById('sideMenu')
      const rect = element.getBoundingClientRect()
      const menuWidth = parseInt(rect.width)
      console.log('menuWidth ',menuWidth)

      const isSideMenuOpen = menuWidth < 150
      //console.log(sideDrawer ? 'side menu open' : 'side menu closed');
      //setSideDrawer(sideDrawer ? false : true);
     
      if (isSideMenuOpen !== sideDrawer) {
       // widthDrawer = '150px'
       // col = 'orange'
      //  setState({...state, col: 'pink'  });
      //  setState({...state, widthDrawer:  '450px' });
   
        //setState({...state, sideMenuOpen: (state.sideMenuOpen ? false : true) });
        
      } else {

        // setState({...state, col: 'ornage'  });
        // setState({...state, widthDrawer:  '150px' });

        //setState({...state, sideMenuOpen: (state.sideMenuOpen ? false : true) });
        // setState({...state, col: (state.sideMenuOpen ? 'pink' : 'orange') });
        // setState({...state, widthDrawer: (state.sideMenuOpen ? '150px' : '450px') });
        // setState({...state, sideMenuOpen: (state.sideMenuOpen ? false : true) });
        //widthDrawer = '400px'
        // col = 'pink'
      }
      // console.log('col', drawState.col)
      // console.log('widthDrawer', drawState.widthDrawer)

      // const drawStateNew = {col: 'orange',widthDrawer:  '150px',sideMenuOpen: (drawState.sideMenuOpen ? false : true)}

      //setDrawState({...drawState, sideMenuOpen: (drawState.sideMenuOpen ? false : true) });

      // console.log('drawStateNew',drawStateNew)

      //console.log("counter ", counter)
      
    };

    // (document.getElementById('hamburgerIconCustom')).addEventListener('click', handleSideMenuOpen, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
       (document.getElementById('hamburgerIconCustom')).removeEventListener('click', handleSideMenuOpen);
    };
     // const drawStateNew = {col: 'orange',widthDrawer:  '150px',sideMenuOpen: (drawState.sideMenuOpen ? false : true)}
  }, [sideDrawer]);

 

  // const sss = useSelector(state => state, {"none":"dfddf"});
  // console.log(sss)
  // alert(sss)
  const isDrawerOpen = useSelector(state => state.reducerDrawer, false);
  open = isDrawerOpen
  const message = useSelector(state => state.reducerMessage, []);
 
  messageStored = message
  const dispatch = useDispatch();

//   dispatch(addTodo('Read the docs'))
//   dispatch(addTodo('Read about the middleware'))
//   dispatch(addCounter(4))
//   dispatch(addTodo('Read the docs'))



  // function handleDrawerToggle() {
  
  //   console.log('dfdgdf')
  // }
  // function toggleButtonOld() {
  //   console.log('toggleButton')
    
  //   dispatch(toggleDrawerOpen(!isDrawerOpen))
  //   console.log('dispatch')
  //   if (isDrawerOpen) {
  //     console.log('open drawer')
  //   } else {
  //     console.log('closed drawer')
  //   }
  
  //   handleDrawerToggle()
  //   // setIsActive(true);
  // }

  
  
  //const [isActive, setIsActive] = React.useState(false);
  return (
    <Layout>
        {/* <StyledArtDirectedBackground /> */}
        {/* <StyledBackgroundSection className="nnn" imgName="Backgrounds_WaitingRoon_3000_01-01.png" />
        */}
        {/* <ResponsiveDrawer /> */}

        <div id="sideMenu" data-active={sideDrawer} className="sidebar" style={{ position: 'absolute', 
         top: 0,
         left: 0, 
         height: '100%',
         zIndex: 200,
         border: '0px solid red'}}>
      {/* <Sidebar items={items}  /> */}

      <HamburgerSpin id="hamburgerIconCustom" className="hamburger-icon-custom" buttonStyle={{ color: 'white !important' }} isActive={sideDrawer} toggleButton={toggleButton} barColor="white" />
      
      {/* <CustomFluidImage imgName="iConsultLogo.png" /> */}
      <div className="sidebar-menu-contents-expanded" data-active={sideDrawer}>
           {drawer}
           {/* div style={{ position: 'absolute', 
                  bottom: 0,
                  left: 0, 
                  height: '150px',
                  width: '100%'}}><CustomFluidImage imgName="vetmedinLogo.png" /></div> */}
      </div>
      <div className="sidebar-menu-contents-closed" data-active={sideDrawer}>

         <div style={{ position: 'absolute', 
                  bottom: 0,
                  left: 0, 
                  height: '150px',
                  width: '100%'}}><CustomFluidImage imgName="vetmedinLogo.png" /></div>
      
      </div>
      {/* <StyledBackgroundSectionFixed className="nnn" imgName="vetmedinLogo.png">dff</StyledBackgroundSectionFixed> */}
      </div>

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
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'

    }}><CustomFluidImage imgName="percentProgress.png" /></div>

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

    }}><Link to="/">Continue <ArrowForwardRoundedIcon /></Link></div>

<div style={{
        position: 'absolute',
        left: '150px', 
        bottom: '0',
        width:'150px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        border:'0px solid red'

    }}> <Link to="/"><ArrowBackRoundedIcon />Back to home</Link> </div>

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
      style={{border: '1px solid black', minHeight: '300px',maxWidth: '800px' }}>
        {/* <Grid item xs={12} sm={12}>
          <Paper className={(useStyles()).paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={12} sm={6}  align="center" style={{border: '1px solid red'}}>
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
        <Grid item xs={12} sm={6}  align="left" style={{border: '0px solid red'}}>

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
        
      </Grid>
    </div>
    

    
    {/* <div style={{display: 'flex', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
   
   
    </div> */}

    </div>
   
  </Layout>

    
)}

export default ResponsiveVideoPlayer

// connect(state => ({
//    isDrawerOpen: state.app.isDrawerOpen
// }), null) (ResponsiveVideoPlayer)