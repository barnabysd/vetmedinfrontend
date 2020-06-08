import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue, purple } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import GatsbyLink from 'gatsby-link';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import GatsbyLinkWithCheck from '../components/GatsbyLinkWithCheck'
import AniCustomLink from '../components/AniCustomLink'
import theme from '../theme'
import styled from 'styled-components'

const ContinueButtonStyledComp = styled.div`
  height: 61px;
  width: 161px;
  background-color: ${theme.palette.peachCobbler.main};
`; 

 const ButtonText = styled.span`
  font-size: 1.46rem;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-decoration: none !important;
  color: ${theme.palette.midnightBlue.main};
  font-family: ${theme.typography.fontFamily};
  font-weight: 600;
`; 


const ColorButton = withStyles(() => ({
  root: {
    color: theme.palette.midnightBlue.main,
    fontWeight: '700',
    textTransform: 'none',
    height: '61px',
    width: '191px',
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.peachCobbler.main, 
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    '&:hover': {
      backgroundColor: theme.palette.peachCobbler.main,
      color: theme.palette.midnightBlue.main,
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: 0, //theme.spacing(1),
    },
  }));

function OrangeRoundedButtonWithBLCorner({buttonText, to}) {
    const classes = useStyles(theme);
    return (
        <ColorButton theme={theme} component={GatsbyLink} to={to} variant="contained" color="secondary" className={classes.margin} >
             <ButtonText>{buttonText}</ButtonText>
        </ColorButton>
    );
}

export default OrangeRoundedButtonWithBLCorner;