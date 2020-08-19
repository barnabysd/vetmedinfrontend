import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { theme } from '../theme.js'

const ColorButton = withStyles((theme) => ({
  root: {

    color:'#fc9a5c',
    fontWeight: '600',
    fontSize: '1.2rem',
    letterSpacing: '-0.01rem',
    textTransform: 'none',
    fontFamily: theme.typography.fontFamily,
    backgroundColor: '#092178',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: '12px 32px',
    '&:hover': {
        backgroundColor:  '#fc9a5c',
        color:'#092178',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function DarkBlueRoundedButtonWithBLCorner({buttonText}) {
    const classes = useStyles();
    return (
        <ColorButton variant="contained" color="secondary" className={classes.margin}>
          {buttonText}
        </ColorButton>
    );
  }

export default DarkBlueRoundedButtonWithBLCorner;