import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue, purple } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import GatsbyLink from 'gatsby-link';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import GatsbyLinkWithCheck from '../components/GatsbyLinkWithCheck'
import AniCustomLink from '../components/AniCustomLink'

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
    backgroundColor: '#fc9a5c',// theme.palette.secondary.main, //
    borderBottomLeftRadius: 0,
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

function OrangeRoundedButtonWithBLCorner({buttonText, to}) {
    const classes = useStyles();
    return (
        <ColorButton component={GatsbyLink} to={to} variant="contained" color="secondary" className={classes.margin} >
          {buttonText}
        </ColorButton>
    );
}

export default OrangeRoundedButtonWithBLCorner;