// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"

import React from "react"
import "./sideDrawer.css"

// import "./sideBarExample.css"

import Transition from 'react-transition-group'

import CustomFluidImage from "./CustomFluidImage"

import { Link } from "gatsby"

import ResponsiveDrawer from './ResponsiveDrawer'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import VisibleItemList from './VisibleItemList'

import { HamburgerSpin } from 'react-animated-burgers'
import  { useCallback, useState, useEffect, useDebugValue, forceUpdate } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawerOpen, sendMessageData } from '../state/createStore'
import MenuItemLink from '../components/MenuItemLink'


import mainLogoSvg from '../images/sideDrawer/master_logo_light_sml.svg'
import tickSvg from '../images/icons_and_glyphs/tick_orange_path_20240.svg'
import vetmedinLogoSvg from '../images/sideDrawer/vetmedin_logo_2.svg'
import bRLogoSvg from '../images/sideDrawer/boehringer_ingelheim_logo_2.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"
// use gatsby polfil plgin instead
// import fetch from "fetch-polyfill"
import styled, { css, keyframes } from 'styled-components'
import { processInternalLink, processHtml, removeParagraphsTags } from '../utils/displayUtils'
import theme, { sm, md, lg, xl } from '../theme'

import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import Grid from '@material-ui/core/Grid'

const MainLogo = (({style}) => {
    return <img src={mainLogoSvg} style={style} />
})

const VetmedinLogo = (() => {
    return <img src={vetmedinLogoSvg} style={{ width: '100%', height: '40px',padding: '8px' }}/>
})
const BRLogo = (() => {
    return <img src={bRLogoSvg} style={{ width: '100%', height: '46px',padding:'8px' }}/>
})

// TODO: make style component

/*p, div {
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #0b2f85;
}

.sidebar{
  background-color: #092178;
  width: 150px;
}

.sidebar[data-active='true'] {
  background-color: #092178;
  width: 450px;
}

.sidebar-menu-contents-expanded {
  display: none;
}
.sidebar-menu-contents-expanded[data-active='true'] {
  display: block;
}

.sidebar-menu-contents-closed {
  display: block;
}
.sidebar-menu-contents-closed[data-active='true'] {
  display: none;
}*/

const ListStyle = styled(List).attrs((props) => ({ id: props.id}))`
    @media (max-width: ${lg}px) {
        padding-top:80px;
    }
`

const ListItemStyle = styled(ListItem).attrs((props) => ({ id: props.id}))`
   padding-top: 0rem;
   padding-bottom:0rem;
   @media (max-width: ${sm}px) {
       padding-bottom:0rem;
   }
`

const MenuBottomSection = styled.div`
  padding: 1rem;
  opacity: 1;
  font-family: ${theme.typography.fontFamily};
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.palette.skyBlue.main};
  @media (max-width: ${sm}px) {
    padding-bottom:0rem;
  } 
`

const gridStyle = {
  border: '0px solid red'
}

function onClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
}

const drawer = (
 
    <ListStyle id="sideDrawMenuListHolder">
      {/* {dummyCategories.map((text, index) => ( */}
        {/* <ListItemStyleStyle button key={text}>
          <ListItemStyleStyleText primary={text} />
        </ListItemStyle> */}


        <ListItemStyle button key={"aaa"}>
          {/* <ListItemStyleText primary={"Contact"} style={{"color":"#24add6","fontWeight":"700"}} /> */}
          {/* <MenuItemLink linkText={"Contact"} colourOfLink={theme.palette.tertitary.main} fontWeight="700" to="/contact/" /> */}
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.tertitary.main,fontWeight:"700"}} to="/contact/">Contact</WebsiteLink> 
        </ListItemStyle>
        <ListItemStyle button key={"bbb"}>
          {/* <ListItemStyleText primary={"resources"} style={{"color":"#24add6","fontWeight":"700"}} /> */}
          {/* <MenuItemLink linkText={"Resources"} colourOfLink={theme.palette.tertitary.main} fontWeight="700"  to="/resources/" /> */}
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.tertitary.main,fontWeight:"700"}} to="/resources/">resources</WebsiteLink> 
        </ListItemStyle>
        <ListItemStyle button key={"ccc"}>
          {/* <ListItemStyleText primary={"References"} style={{"color":"#24add6","fontWeight":"700"}} /> */}
          {/* <MenuItemLink linkText={"References"} colourOfLink={theme.palette.tertitary.main} fontWeight="700"  to="/references/" /> */}
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.tertitary.main,fontWeight:"700"}} to="/references/">references</WebsiteLink> 
        </ListItemStyle>


        <ListItemStyle button key={"dd"}>
          <ListItemText primary={""} style={{"color":"white"}} />
        </ListItemStyle>

        <ListItemStyle button key={"ddd"}>
          {/* <ListItemStyleText primary={"Terms of use"} style={{"color":"white","fontWeight":"700"}} /> */}
          {/* <MenuItemLink linkText={"Terms of use"} colourOfLink="white" fontWeight="400" to="/terms-of-use/" /> */}
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.white.main,fontWeight:"400"}} to="/terms-of-use/">Terms of use</WebsiteLink> 
        </ListItemStyle>
        <ListItemStyle button key={"eee"}>
          {/* <ListItemStyleText primary={"Privacy policy"} style={{"color":"white","fontWeight":"700"}} /> */}
          {/* <MenuItemLink linkText={"Privacy policy"} colourOfLink="white" fontWeight="400"   to="/privacy-policy/" /> */}
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.white.main,fontWeight:"400"}} to="/privacy-policy/">Privacy Policy</WebsiteLink> 
        </ListItemStyle>
        <ListItemStyle button key={"ee"}>
          {/* <ListItemStyleText primary={"Cookie policy"} style={{"color":"white","fontWeight":"700"}} /> */}
          {/* <MenuItemLink linkText={"Cookie policy"}  colourOfLink="white" fontWeight="400"   to="/cookie-policy/" /> */}
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.white.main,fontWeight:"400"}} to="/cookie-policy/">Cookie Policy</WebsiteLink> 
        </ListItemStyle>
        <ListItemStyle button key={"fff"}>
          {/* <ListItemStyleText primary={"Accessibility policy"} style={{"color":"white","fontWeight":"700"}} /> */}
          {/* <MenuItemLink linkText={"Accessibility policy"}  colourOfLink="white" fontWeight="400"  to="/accessibility-policy/" /> */}
          <WebsiteLink typeOfButton={buttonStyleType.MENU_LINK} style={{color:theme.palette.white.main,fontWeight:"400"}} to="/accessibility-policy/">Accessibility Policy</WebsiteLink> 
        </ListItemStyle>

        <ListItemStyle button key={"ggg"}>
          {/* <ListItemStyleText primary={"Accessibility policy"} style={{"color":"white","fontWeight":"700"}} /> */}
          <MenuItemLink linkText={"DEBUG - certificate form"}  colourOfLink="#0b2f85" fontWeight="200"  to="/certificateRequest/" />
        </ListItemStyle>
       
      {/* ))} */}
    </ListStyle>

    
  
);

{/* <ListItemStyle button key={"hhh"}>
<MenuItemLink linkText={"DEBUG ONLY - certificate response "}  colourOfLink="white" fontWeight="400"  to="/certificateResponse/" />
</ListItemStyle>
<ListItemStyle button key={"iii"}>
<MenuItemLink linkText={"DEBUG ONLY - example links "}  colourOfLink="white" fontWeight="400"  to="/exampleLinks/" />
</ListItemStyle> */}

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

function SideDrawer({hideBackground = false}) {

  const bgColour = (hideBackground) ? 'transparent' : 'inherit'

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

        <div id="sideMenu" data-active={sideDrawer} className="sidebar" style={{ position: 'absolute', 
         top: 0,
         left: 0, 
         height: '100%',
         minHeight: '600px',
         backgroundColor: (hideBackground) ? ((sideDrawer) ? theme.palette.primary.main : 'transparent') : theme.palette.primary.main,
         zIndex: 200,
         border: '0px solid red'}}>
    
      <HamburgerSpin id="hamburgerIconCustom" className="hamburger-icon-custom" buttonStyle={{ outline: '0 !important',color: 'white !important' }} isActive={sideDrawer} toggleButton={toggleButton} barColor="white" />

      <div className="sidebar-menu-contents-expanded" data-active={sideDrawer}>
           {drawer}
           <div style={{ position: 'absolute', 
                  bottom: 0,
                  left: 0, 
                  height: '125px',
                  width: '100%'}}>
           <Grid container  
              spacing={0} 
              spacing={0} 
              justify="flex-start" 
              style={{borderTop: "1px solid rgba(82, 121, 176, 0.2);",height:"150px"}}>
              <Grid item xs={12} sm={3} style={gridStyle}>
                 
                 <MainLogo style={{width:"100%",height:"65px",marginTop:'1.75rem'}} />
                
              </Grid>
              <Grid item xs={12} sm={6}  style={{borderRight: "1px solid rgba(82, 121, 176, 0.2);",paddingTop:'1rem'}}>
                  <MenuBottomSection>Copyright © 2020 Boehringer Ingelheim Animal Health UK Limited. All rights reserved.</MenuBottomSection>
              </Grid>
              <Grid item xs={12} sm={3}  style={{paddingTop:'1rem'}}>
                
                 <VetmedinLogo /><BRLogo />
                 
              </Grid>
              </Grid>
              </div>

          
      
           
      </div>
      <div className="sidebar-menu-contents-closed" data-active={sideDrawer}>

      
      <div style={{ position: 'absolute', 
                  bottom: 0,
                  left: 0, 
                  height: '125px',
                  width: '100%'}}>
           <Grid container  
              spacing={0} 
              spacing={0} 
              justify="flex-start" 
              style={{height:"150px"}}>
           
              <Grid item xs={12} sm={12}  style={{paddingTop:'1rem'}}>
                
                 <VetmedinLogo /><BRLogo />
                 
              </Grid>
              </Grid>
              </div>
      
      </div>
      </div>

     

    
)}




export default SideDrawer