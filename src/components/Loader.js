// /* The image used */
// background-image: url(../static/login-bg.jpg);

// /* Full height */
// height: 100%; 

// /* Center and scale the image nicely */
// background-position: center;
// background-repeat: no-repeat;
// background-size: cover;


import React, { useState, useEffect, useRef, useReducer } from 'react';
import { TweenMax, Linear, TimelineLite } from "gsap";
import CustomFluidImage from '../components/CustomFluidImage'
import styled from 'styled-components';
import { Link } from "gatsby"
import BackgroundSection from './BackgroundSection'

const useForceRerender = () => useReducer(state => !state, false)[1];

const Wrapper = styled.div`
  .text {
    color: #666;
    border: 1px solid #ccc;
    outline: none;
    &.active {
      color: #000;
      border-color: #000;
    }
  }
`;

function Loader() {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     this._count = 0;
//   }

   const forceRerender = useForceRerender();
   const refCount = useRef(0);  

  let refContainer = useRef();

  const [count, setCount] = useState(0)

  let tl = null;

//   const updateCounter = () => {
//     refCount.current += 1;
//     forceRerender();

//   }

  useEffect(() => {
      
    // refCount.current += 1;
    // Update the document title using the browser API
    // document.title = `You clicked ${refCount.current} times`;

    function updateCounter() {
        refCount.current += 1;
        console.log("refCount.current", refCount.current)
        // forceRerender();
    }

    // TweenMax.to(refContainer.current, 0.5, { 
    //     opacity: 1,
    //     // onUpdate: () => {
    //     //     refCount.current = parseInt(refCount.current) + 0
    //     // },
    //     onComplete: updateCounter,
    //     repeat: 100,
    //     yoyo:true,
    //     ease: Linear.easeNone,
    // });

    // tl = new TimelineLite({ onComplete: restart });
    // tl.to(refContainer.current, 1, { rotation: 45 });
    // tl.to(refContainer.current, 0.5, { rotation: 0 });
    // tl.to(refContainer.current, 1, { scaleX: -1, yoyo: true, repeat: 1 });
    // tl.pause();
  });


  
  
  
//   componentDidUpdate(prevProps) {
//     // Was there a change in the animate prop?
//     if(prevProps.animate !== this.props.animate) {
//       this.props.animate ? this.tl.resume() : this.tl.pause();
//     }
//     if(prevProps.restart !== this.props.restart && this.props.restart === true) {
//       this.restart();
//     }
//   }
  
  const restart = () => {
    tl.restart();
    tl.pause();
    onRestart();
  };

  const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

//   refContainer.current.setAttribute("disabled", true);
// // or 
// refContainer.current.removeAttribute("disabled");
  
  
    return (
      <div style={{position: 'absolute',width: '100%', minHeight: '100%', backgroundColor: '#24add6'}}>
             {/* <Counter animate={true}/> */}
             <BackgroundSection className="" imgName="loadingScreen.png" backgroundColour="#24add6" />
            <p>
                <button onClick={forceRerender}>
                Increment Counter
                </button>
            </p>
            <div className="Box" style={{position: 'absolute',left:'50%',top:'50%',width: '100px', height: '100px',color:'white',fontWeight:'700',fontSize:'5rem',fontFamily:theme.overrides.MuiTypography.h1.fontFamily,backgroundColor:'red'}} ref={refContainer}>
                {refCount.current}
              
            </div>
            <Link to="/">Start</Link>
            {/* <CustomFluidImage imgName="loadingScreen.png"  />  */}
      </div>
    );
    
  
}

export default Loader;

// class AnimateCounter extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { animate: true };
//   }
  
//   toggle = () => this.setState({ animate: ! this.state.animate });
//   onRestart = () => this.setState({ animate: false });
  
//   render() {
//     return (
//         <Counter 
//           animate={this.state.animate} 
//           restart={this.state.restart}
//           onRestart={this.onRestart}
//         />
//     );
//   }
// }

// export default () => (
//        <div style={{position: 'fixed',width: '100%', minHeight: '100%', backgroundColor: '#24add6'}}>
//              {/* <Counter animate={true}/> */}
//              <p>Count: {refCount.current}</p>
//             <p>
//                 <button onClick={forceRerender}>
//                 Increment Counter
//                 </button>
//             </p>
//              <CustomFluidImage imgName="loadingScreen.png"  /> 
//       </div>
// )
