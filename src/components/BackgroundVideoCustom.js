import React from 'react';
import DogVideo from "../assets/ConsultRoom_PoppyOnTable_video1920x1080.mp4"
import "./backgroundVideoCustom.css"

// https://codesandbox.io/s/sharp-poitras-qdync?file=/package.json:209-236

function BackgroundVideoCustom() {
    //   return <h2 className="question">{props.content}</h2>;
    return (<video autoPlay muted loop id="myVideo"  width='100%' height='100%' style={{ width: `100%` }}>
             <source src={DogVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
    )
}

export default BackgroundVideoCustom;
