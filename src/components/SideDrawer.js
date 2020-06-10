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
import theme from '../theme'

import mainLogoSvg from '../images/userChoicePage/master_logo_light.svg'
import tickSvg from '../images/icons_and_glyphs/tick_orange_path_20240.svg'
import vetmedinLogoSvg from '../images/userChoicePage/vetmedin_logo_2.svg'
import bRLogoSvg from '../images/userChoicePage/boehringer_ingelheim_logo_2.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"
// use gatsby polfil plgin instead
// import fetch from "fetch-polyfill"




const MainLogo = (() => {
    return <img src={mainLogoSvg} style={{width: '225px'}} />
})

const VetmedinLogo = (() => {
    return <img src={vetmedinLogoSvg} style={{ width: '100%', height: '50px',padding: '8px' }}/>
})
const BRLogo = (() => {
    return <img src={bRLogoSvg} style={{ width: '100%', height: '50px',padding:'8px' }}/>
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





function onClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
}

const drawer = (
 
    <List>
      {/* {dummyCategories.map((text, index) => ( */}
        {/* <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem> */}


        <ListItem button key={"aaa"}>
          {/* <ListItemText primary={"Contact"} style={{"color":"#24add6","fontWeight":"700"}} /> */}
          <MenuItemLink linkText={"Contact"} colourOfLink={theme.palette.tertitary.main} fontWeight="700" to="/contact/" />
        </ListItem>
        <ListItem button key={"bbb"}>
          {/* <ListItemText primary={"resources"} style={{"color":"#24add6","fontWeight":"700"}} /> */}
          <MenuItemLink linkText={"Resources"} colourOfLink={theme.palette.tertitary.main} fontWeight="700"  to="/resources/" />
        </ListItem>
        <ListItem button key={"ccc"}>
          {/* <ListItemText primary={"References"} style={{"color":"#24add6","fontWeight":"700"}} /> */}
          <MenuItemLink linkText={"References"} colourOfLink={theme.palette.tertitary.main} fontWeight="700"  to="/references/" />
        </ListItem>


        <ListItem button key={"dd"}>
          <ListItemText primary={""} style={{"color":"white"}} />
        </ListItem>

        <ListItem button key={"ddd"}>
          {/* <ListItemText primary={"Terms of use"} style={{"color":"white","fontWeight":"700"}} /> */}
          <MenuItemLink linkText={"Terms of use"} colourOfLink="white" fontWeight="400" to="/terms-of-use/" />
        </ListItem>
        <ListItem button key={"eee"}>
          {/* <ListItemText primary={"Privacy policy"} style={{"color":"white","fontWeight":"700"}} /> */}
          <MenuItemLink linkText={"Privacy policy"} colourOfLink="white" fontWeight="400"   to="/privacy-policy/" />
        </ListItem>
        <ListItem button key={"ee"}>
          {/* <ListItemText primary={"Cookie policy"} style={{"color":"white","fontWeight":"700"}} /> */}
          <MenuItemLink linkText={"Cookie policy"}  colourOfLink="white" fontWeight="400"   to="/cookie-policy/" />
        </ListItem>
        <ListItem button key={"fff"}>
          {/* <ListItemText primary={"Accessibility policy"} style={{"color":"white","fontWeight":"700"}} /> */}
          <MenuItemLink linkText={"Accessibility policy"}  colourOfLink="white" fontWeight="400"  to="/accessibility-policy/" />
        </ListItem>

        <ListItem button key={"ggg"}>
          {/* <ListItemText primary={"Accessibility policy"} style={{"color":"white","fontWeight":"700"}} /> */}
          <MenuItemLink linkText={"DEBUG - certificate form"}  colourOfLink="white" fontWeight="400"  to="/certificateRequest/" />
        </ListItem>
       
      {/* ))} */}
    </List>

    
  
);

{/* <ListItem button key={"hhh"}>
<MenuItemLink linkText={"DEBUG ONLY - certificate response "}  colourOfLink="white" fontWeight="400"  to="/certificateResponse/" />
</ListItem>
<ListItem button key={"iii"}>
<MenuItemLink linkText={"DEBUG ONLY - example links "}  colourOfLink="white" fontWeight="400"  to="/exampleLinks/" />
</ListItem> */}

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
      {/* <Sidebar items={items}  /> */}

      <HamburgerSpin id="hamburgerIconCustom" className="hamburger-icon-custom" buttonStyle={{ outline: '0 !important',color: 'white !important' }} isActive={sideDrawer} toggleButton={toggleButton} barColor="white" />
      
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
                  width: '100%'}}><VetmedinLogo /><BRLogo /> </div>
      
      </div>
      {/* <StyledBackgroundSectionFixed className="nnn" imgName="vetmedinLogo.png">dff</StyledBackgroundSectionFixed> */}
      </div>

     

    
)}

export default SideDrawer