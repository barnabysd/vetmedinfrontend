import React from 'react'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import theme from "../theme"
import { makeRandomId } from "../utils/displayUtils"

const buttonStyle = {
  root: {
    color:'#fc9a5c',
    fontWeight: '600',
    fontSize: '1.125rem',
    letterSpacing: '-0.01rem',
    textTransform: 'none',
    fontFamily: theme.typography.fontFamily,
    backgroundColor: '#092178',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: '20px',
    paddingRight: '20px',
    '&:hover': {
        backgroundColor:  '#fc9a5c',
        color:'#092178',
    },
  },
}

const ColorButton = withStyles(buttonStyle)(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function DarkBlueRoundedButton({id, buttonText, onClickHandler = () => {console.log("no action set")}, type = "button", ...other}) {
    const classes = useStyles();
    let buttonId = id ? id : 'button' + makeRandomId(5)
    return (
        <ColorButton id={buttonId} variant="contained" color="secondary" className={classes.margin} type={type} onClick={e => onClickHandler(e)}>
          {buttonText}
        </ColorButton>
    );
  }

export default DarkBlueRoundedButton;
