import { HamburgerSpin } from 'react-animated-burgers'
import  { useCallback, useState, useEffect, useDebugValue, forceUpdate } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawerOpen, sendMessageData } from '../state/createStore'

// TODO - use gatsby polyfil plugin instead
// import fetch from "fetch-polyfill"

function ApiToFunctionHandler() {

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

  const counter = useSelector(state => state.reducerIncrement, 0);
  //console.log("counter 1", counter)

  let toggleButton = useCallback(
    event => {
      console.log(sideDrawer ? 'side menu open' : 'side menu closed')
      // fetch("/.netlify/functions/hello.js")
      // .then(response => response.json())
      // .then(console.log)

      // const myFunction = async () => await (await fetch('/.netlify/functions/createUser.js')).json();
      // console.log(myFunction)
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

  // let incrementScore = useCallback(
  //   event => { 
  //     setScore(parseInt(score) + 1)
  //   },
  //   [score],
  // );

    // const sss = useSelector(state => state, {"none":"dfddf"});
  // console.log(sss)
  // alert(sss)
 
  messageStored = message
  const dispatch = useDispatch();

//   dispatch(addTodo('Read the docs'))
//   dispatch(addTodo('Read about the middleware'))
//   dispatch(addCounter(4))
//   dispatch(addTodo('Read the docs'))

//   dispatch(toggleDrawerOpen(!isDrawerOpen))


  useEffect(() => {
    /*toggleButton = useCallback(
      event => {

        // dispatch(addCounter(1))
  
        console.log(sideDrawer ? 'side menu open' : 'side menu closed')
        setSideDrawer((sideDrawer ? false : true))
     
        // console.log('messageStored', messageStored)
  
        // const sss = useSelector(state => state, {"none":"dfddf"});
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
  

    return () => {
   
    };
     // const drawStateNew = {col: 'orange',widthDrawer:  '150px',sideMenuOpen: (drawState.sideMenuOpen ? false : true)}
  }, [sideDrawer]);
}

export default ApiToFunctionHandler

