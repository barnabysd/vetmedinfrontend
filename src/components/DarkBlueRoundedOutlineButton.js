import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue, purple } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color:'#092178',
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
    backgroundColor:  'none',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    '&:hover': {
      backgroundColor: '#092178',
      color:'#fc9a5c',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function DarkBlueRoundedOutlineButton({buttonText}) {
    const classes = useStyles();
    return (
        <ColorButton variant="outlined" color="secondary" className={classes.margin}>
          {buttonText}
        </ColorButton>
    );
  }

export default DarkBlueRoundedOutlineButton;