import React from 'react'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import theme from "../theme"
import { makeRandomId } from "../utils/displayUtils"

const ColorButton = withStyles((theme) => ({
  root: {
    color:'#fc9a5c',
    fontWeight: '700',
    textTransform: 'none',
    fontFamily: theme.typography.fontFamily,
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