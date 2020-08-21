import React from 'react'
import theme from '../theme'
import Icon from '@material-ui/core/Icon';
import { withStyles,createStyles,makeStyles } from '@material-ui/core/styles'
import styled, { css, keyframes } from 'styled-components'
import tickSvg from '../images/certificate/tick_path_dark_blue_20222.svg'


const FormLabel = styled.label`
    padding-left:0.5rem;
    font-size: 1rem;
    line-height: 1.6;
    text-align: left;
    letter-spacing: -0.15px;
    color: ${theme.palette.deminBlue.main};
    font-family: ${theme.typography.fontFamily};
    font-weight: 600;
    height: 21px;
    width: 79px;
 
`

const FormBodyText = styled.span`
    display: block;
    width: 100%;
    padding-left:0.5rem;
    font-family: ${theme.typography.fontFamily};
    font-size: 0.813rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: ${theme.palette.egyptianBlue.main};
    & a {
        color: ${theme.palette.midnightBlue.main};
    }
    & strong a {
        color: ${theme.palette.midnightBlue.main};
    }
`
const TickBoxBackgroundStyledComp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    height: 100%;
    width: 100%;


 
    border-radius: 4px;
    border: solid 1px ${theme.palette.topazBlue.main};
    
    background-color: white;
 
`
const scaleLoopKeyframes = keyframes`
    from {
        transform: scale(0.8);
    }
    to {
        transform: scale(1.5);
    }
`
const scaleLoopStyle = css`
    animation: ${scaleLoopKeyframes} 0.2s linear 1;
`  
const TickBoxBackgroundStyledCompTicked = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    height: 100%;
    width: 100%;
    ${scaleLoopStyle};

    transform: scale(0.8);
    border-radius: 4px;
    border: solid 1px ${theme.palette.topazBlue.main};
    
    background-color: ${theme.palette.topazBlue.main};
`

const TickBoxOn = (() => {
    return <img class="checkbox-summary" src={tickSvg} style={{pointerEvents: 'none', width: '20px', height: '20px',paddingBottom: '0px',paddingRight: '0px' }}/>
})

const useStyles = makeStyles((themeMaterial) => ({
    root: {
      '& .MuiTextField-root': {
          margin: themeMaterial.spacing(1),
          width: '25ch',
          backgroundColor: 'white',
          borderColor: theme.palette.topazBlue.main,
          borderRadius: '4px'
      },
      '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.topazBlue.main,
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.topazBlue.main,
      },
      '& .MuiFormHelperText-contained':{
          marginLeft:0,
          marginRight: 0,
          height: 0, // hide it !!!!!!!
          paddingRight: '14px',
          paddingLeft: '14px',
          backgroundColor: '#d0f5fd'
         
      }
    },
}));

const classes = makeStyles({
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    }
  });

const gridStyle = {
    border: '0px solid red'
}

export const CustomCheckBoxOffIcon = () => {
  return (
      <Icon classes={{root: classes.iconRoot}}>
          <TickBoxBackgroundStyledComp />
      </Icon>
  )
}
export const CustomCheckBoxOnIcon = () => {
  return (
      <Icon classes={{root: classes.iconRoot}}>
          <TickBoxBackgroundStyledCompTicked><TickBoxOn /></TickBoxBackgroundStyledCompTicked>
      </Icon>
  )
}