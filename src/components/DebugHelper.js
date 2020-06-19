import Select from "react-select"
import { useCookies } from 'react-cookie'
import  { useCallback, useState, useEffect,  useDebugValue, forceUpdate } from 'react';

function DebugHelper() {

    const [cookies, setCookie, removeCookie] = useCookies(['hasConsentSet','userChoice','dogChoice','score']);

  let stateFromCookie = { 
      dogChoice: cookies['dogChoice'] ? cookies['dogChoice']:'poppy', 

  }

  const [state, setState] = useState(stateFromCookie)

  const options = [
    { label: "dudley", value: "dudley" },
    { label: "reggie", value: "reggie" },
    { label: "poppy", value: "poppy" }
  ];

  const onKeyDown = e => {
      console.log(keyCode)
    if (e.keyCode === 8) {
      // do stuff
      console.log("you have pressed backspace");
    }
  };
  const handleChange = e => {
    console.log(e)
    let currentState = { ...state }
        currentState.dogChoice = e.value
        console.log("currentState ",currentState)
    setState(currentState)
    setCookie('dogChoice',e.value,{ path: '/' })
    // do stuff
    console.log("currentState ",currentState);
    console.log("cookie ",cookies['dogChoice']);
  
};
  return (
    <div style={{position:'absolute',width:'200px',height:'200px',left:"20%",top:"0"}}>
      <Select options={options} onKeyDown={onKeyDown} onChange={handleChange} value={state.dogChoice}/>
    </div>
  );
}

export default DebugHelper