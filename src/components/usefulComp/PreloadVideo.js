
import React, { useCallback, useState, useEffect, useDebugValue, forceUpdate } from 'react'
import { CircularProgress } from '@material-ui/core';

class PreloadVideo extends React.Component {
    constructor(props) {
       this.video = props.video
       this.classes = props.classes
       this.videoRef = createRef()
    }
    componentDidMount() {
        this.setState({isLoading: true})
    }
    
    render() {
        const { isLoading } = this.state;
    
        return (
            <React.Fragment>
                {isLoading && <CircularProgress />}
    
                <video
                    loop
                    muted
                    autoPlay
                    src={this.video}
                    preload={'auto'}
                    type={'video/mp4'}
                    className={classes.video}
                    ref={ref => this.videoRef}
                    onLoadEnd={() => this.setState({isLoading: false})}>
                </video>
            </React.Fragment>
        );
    }
}

export default PreloadVideo