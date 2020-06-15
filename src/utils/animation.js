import { TweenMax, Elastic } from 'gsap'
import styled, { css, keyframes } from 'styled-components'

const duration = 0.5;

export const rippleEnterKeyframes = keyframes`
  0% {
    opacity: 0.1;
    transform: scale(0);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
`

export const rippleExitKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const pulsateKeyframes = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  100% {
    transform: scale(1);
  }
`

export const ripple = css`
    opacity: 0;
`   
export const rippleVisible = css`
    opacity: 0.3;
    animation: ${rippleEnterKeyframes} 550ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1);
` 

export const childLeaveStyle = css`
    opacity: 0;
    animation: ${rippleExitKeyframes} 2550ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const childPulsateStyle = css`
   animation: ${pulsateKeyframes} 2500ms cubic-bezier(0.4, 0, 0.2, 1) 200ms infinite;
`

export default {
    show(target, cb){
        return TweenMax.from(target, duration, {
            opacity: 0,
            height: 0,
            onomplete() {
                cb();
            },
            ease: Elastic.easeOut.config(0.25, 1),
        });
    },
    hide(target, cb) {
        return TweenMax.from(target, duration, {
            opacity: 0,
            height: 0,
            onomplete() {
                cb();
            },
            ease: Elastic.easeOut.config(0.25, 1),
        });
    }
}