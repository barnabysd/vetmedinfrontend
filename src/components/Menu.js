import React, { useState, useEffect, useRef, useReducer } from 'react';
import { TweenMax, Linear, TimelineLite } from "gsap";
const Menu = ({ state }) => {

    // const [clicked, setClicked] = useState(false)
    // const [initial, setInitial] = useState(false)
    let link1 = useRef(null)
    let link2 = useRef(null)
    let link3 = useRef(null)
  
  useEffect(() => {
        console.log(link1)// <!-- returns <a href="/1">1</a> -->
        console.log(link2)// <!-- returns <a href="/2">2</a> -->
        console.log(link3) //<!-- returns <a href="/3">3</a> -->
        
        if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            //   <!-- gsap animation -->
            console.log(link1)// <--! returns "null" -->
            console.log(link2) //<--! returns "null" -->
            console.log(link3) //<--! returns "null" -->
        }
  })
  
  return (
      <div>
          <Link ref={el => (line1 = el)} to="/1">rtyty</Link>
          <Link ref={el => (line2 = el)} to="/2">rtyrt</Link>
          <Link ref={el => (line3 = el)} to="/3">rtyrty</Link>
      </div>
    )
  }
  
  export default Menu