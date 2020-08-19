import React from 'react'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import theme from "../theme"
import { makeRandomId } from "../utils/displayUtils"

const ColorButton = withStyles((theme) => ({
  root: {
    color:'#092178',
    fontWeight: '600',
    fontSize: '1.2rem',
    letterSpacing: '-0.01rem',
    textTransform: 'none',
    fontFamily: theme.typography.fontFamily,
    backgroundColor: 'none',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: '12px 32px',
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

function DarkBlueRoundedOutlineButton({id, buttonText, onClickHandler = () => {console.log("no action set")} , ...other}) {
    const classes = useStyles(theme)
    let buttonId = id ? id : 'button' + makeRandomId(5)
    return (
        <ColorButton id={id} variant="outlined" color="secondary" className={classes.margin}  onClick={e => onClickHandler(e)}>
          {buttonText}
        </ColorButton>
    );
  }

export default DarkBlueRoundedOutlineButton;