import VideoCover from 'react-video-cover'
import React from 'react'

class VideoCoverContainer extends React.Component {
    constructor(props){
        super(props)
        this.vidUrl = props.vidUrl
    }
    render() {
      const videoOptions = {
        src: this.vidUrl ? this.vidUrl : 'no_link_found',
        ref: videoRef => {
          this.videoRef = videoRef;
        },
        // onClick: () => {
        //   if (this.videoRef && this.videoRef.paused) {
        //     this.videoRef.play();
        //   } else if (this.videoRef) {
        //     this.videoRef.pause();
        //   }
        // },
        // title: 'click to play/pause',
      };
      return (
        <div style={{
          width: '100%',
          minHeight: '100vh',
          overflow: 'hidden',
        }}>
          <VideoCover
            videoOptions={videoOptions}
          />
        </div>
      );
    }
  }

  export default VideoCoverContainer