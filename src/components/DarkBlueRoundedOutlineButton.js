import React from 'react'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { blue, purple } from '@material-ui/core/colors'
import theme from '../theme'

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
    borderWidth: '2px',
    borderColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: '#092178',
      color:'#fc9a5c',
      borderWidth: '2px',
      borderColor: theme.palette.primary.main
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function DarkBlueRoundedOutlineButton({buttonText, onClickHandler = () => {console.log("no action set")} , ...other}) {
    const classes = useStyles(theme);
    return (
        <ColorButton variant="outlined" color="secondary" className={classes.margin}  onClick={e => onClickHandler(e)}>
          {buttonText}
        </ColorButton>
    );
  }

export default DarkBlueRoundedOutlineButton;