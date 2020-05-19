import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue, purple } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {

    color:'#fc9a5c',
    fontWeight: '700',
    textTransform: 'none',
    fontFamily: [
        'Poppins',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
 
    backgroundColor: '#092178',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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

function DarkBlueRoundedButton({buttonText}) {
    const classes = useStyles();
    return (
        <ColorButton variant="contained" color="secondary" className={classes.margin}>
          {buttonText}
        </ColorButton>
    );
  }

export default DarkBlueRoundedButton;