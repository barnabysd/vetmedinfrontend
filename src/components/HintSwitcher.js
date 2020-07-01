import React, {useRef, useEffect, createRef} from 'react'
import { ThemeProvider, Typography } from '@material-ui/core';
import styled from 'styled-components'
import { withStyles, createStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import theme, { sm, md, lg, xl } from '../theme'

const SquareSwitch = withStyles((themeMaterial) => ({
    root: {
      width: 70,
      height: 36,
      padding: 0,
      margin: themeMaterial.spacing(1),
     
    },
    switchBase: {
      padding: 3,
      border: `0px solid white`,
      color: 'white !important',
    
      '&$checked': {
        transform: 'translateX(34px)',
        color: 'orange !important',
        '& + $track': {
          backgroundColor: 'transparent',
          opacity: 1,
          border: `1px solid orange`,
        },
      },
      '&$focusVisible $thumb': {
        color: 'transparent',
        border: `1px solid orange`,
        
      },
    },
    thumb: {
      width: 30,
      height: 30,
      borderRadius: 0
    },
    track: {
      borderRadius: 0,
      border: `1px solid white`,
      backgroundColor: 'transparent',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
  
  const StyledTypography = styled(Typography)`
      margin-bottom: 3rem;
  `
  
  const UnderSwitchText = styled.div `
    pointer-events: none;
    width: 1.5rem;
    height: 1.188rem;
    font-family: ${theme.typography.fontFamily};
    font-size: 0.813rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: -0.13px;
    text-align: center;
    color: white;
  `
  function HintSwitcher({hintChecked, onChange}) {
      const styles = createStyles({
        formControlLabel: { 
          fontSize: '0.6rem', 
          '& label': { 
          fontSize: '0.6rem' 
        } 
      }
     });
     
     return (<FormGroup>
           <div style={{position:'absolute',left:'25%',bottom:'15px'}}><UnderSwitchText>ON</UnderSwitchText></div>
           <div style={{position:'absolute',right:'24%',bottom:'15px'}}><UnderSwitchText>OFF</UnderSwitchText></div>  
          
          <FormControlLabel style={{backgroundColor: 'transparent'}}
            control={<SquareSwitch style={{backgroundColor: 'transparent'}} onChange={onChange} checked={hintChecked}  name="checkedHint" />}
            label={<ThemeProvider theme={theme}>
              <StyledTypography style={{color:'white',fontWeight:'600'}} variant="caption">Turn hints</StyledTypography>
              </ThemeProvider>} 
            labelPlacement="top"
          />
        </FormGroup>)
}
     
export default HintSwitcher