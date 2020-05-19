
import React, { useCallback, useState, useEffect, useDebugValue, forceUpdate } from 'react';

class PreloadVideo extends React.Component {
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
                    src={WaveVideo}
                    preload={'auto'}
                    type={'video/mp4'}
                    className={classes.video}
                    ref={ref => this.headerVideo}
                    onLoadEnd={() => this.setState({isLoading: false})}>
                </video>
            </React.Fragment>
        );
    }
}

export default PreloadVideo