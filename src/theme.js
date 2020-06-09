import { red } from '@material-ui/core/colors';
//import { createMuiTheme } from '@material-ui/core/styles';

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#092178',
    },
    secondary: {
      main: '#fc9a5c',
    },
    tertitary: {
      main: '#24add6',
    },
    customOrange: {
      main: '#fc9a5c'
    },
    customGreen: {
        main: '#199c73'
    },
    customBlue: {
        main: '#0c2f8b'
    },
    customRed: {
      main: '#fb2f53'
   },
    error: {
      main: '#eb4559',
    },
    background: {
      default: '#b8ebfa',
      lightBlue: '#d5f6fd'
    },
    cloudBlue: {
      main:'#d0f5fd'
    },
    deminBlue: {
      main:'#0d7fbc'
    },
    egyptianBlue: {
      main:'#0f579f'
    },

    midnightBlue: {
      main:'#003087'
    },
    peachCobbler: {
      main:'#ffa06a',
      dark:'#f57d39'
    },
    raven: {
      main:'#232a36'
    },
    raven10: {
      main:'#e8e9ea'
    },
    raven25: {
      main:'#c7c9cc'
    },
    raven50: {
      main:'#91959b'
    },
    skyBlue: {
      main:'#7ad6eb'
    },
    success: {
      main:'#009975'
    },
    topazBlue: {
      main:'#31add3'
    },
    warning: {
      main:'#ffd31d'
    },
    white: {
      main:'#ffffff'
    }
  },
  typography: {
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
    fontSize: 15,
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 15
    
  },
  overrides: {
    MuiTypography: {
      h1: {
        lineHeight: '2.5rem',
        fontSize: '2.5rem',
        fontWeight: '800',
        fontFamily: [
          'Oswald',
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
        ].join(',')
        
      },
      h2: {
        lineHeight: '1.5rem',
        fontSize: '1.5rem',
        fontWeight: '800',
        fontFamily: [
          'Oswald',
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
        ].join(',')
        
      },
      body1: {
        lineHeight: '1.2rem',
        fontSize: '0.75rem',
        fontWeight: '400',
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
        ].join(',')
        
      },
      caption: {
        lineHeight: '1rem',
        fontSize: '0.75rem',
        fontWeight: '300',
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
        ].join(',')
        
      }
    },
  }
});

/*

h3 : {
      fontSize: '1.2rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
      }
    }

    */

/*
h1
h2
h3
h4
h5
h6
subtitle1
subtitle2
body1
body2
button
caption
overline

example

typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },


*/

export default theme;

export const xs = 0
export const sm = 600
export const md = 960
export const lg = 1280
export const xl = 1920

/*

MATERIAL BASE THEME FOR REFERENCE


breakpoints: Object
keys: Array(5)
0: "xs"
1: "sm"
2: "md"
3: "lg"
4: "xl"
values: Object
xs: 0
sm: 600
md: 960
lg: 1280
xl: 1920
up: f d()
down: f down()
between: f p()
only: f only()
width: f width()
direction: "ltr"
mixins: Object
gutters: f gutters()
toolbar: Object
minHeight: 56
@media (min-width:0px) and (orientation: landscape): Object
minHeight: 48
@media (min-width:600px): Object
minHeight: 64
overrides: Object
palette: Object
common: Object
black: 
#000
white: 
#fff
type: "light"
primary: Object
light: 
#7986cb
main: 
#3f51b5
dark: 
#303f9f
contrastText: 
#fff
secondary: Object
light: 
#ff4081
main: 
#f50057
dark: 
#c51162
contrastText: 
#fff
error: Object
light: 
#e57373
main: 
#f44336
dark: 
#d32f2f
contrastText: 
#fff
warning: Object
light: 
#ffb74d
main: 
#ff9800
dark: 
#f57c00
contrastText: 
rgba(0, 0, 0, 0.87)
info: Object
light: 
#64b5f6
main: 
#2196f3
dark: 
#1976d2
contrastText: 
#fff
success: Object
light: 
#81c784
main: 
#4caf50
dark: 
#388e3c
contrastText: 
rgba(0, 0, 0, 0.87)
grey: Object
50: 
#fafafa
100: 
#f5f5f5
200: 
#eeeeee
300: 
#e0e0e0
400: 
#bdbdbd
500: 
#9e9e9e
600: 
#757575
700: 
#616161
800: 
#424242
900: 
#212121
A100: 
#d5d5d5
A200: 
#aaaaaa
A400: 
#303030
A700: 
#616161
contrastThreshold: 3
getContrastText: f V()
augmentColor: f E()
tonalOffset: 0.2
text: Object
primary: 
rgba(0, 0, 0, 0.87)
secondary: 
rgba(0, 0, 0, 0.54)
disabled: 
rgba(0, 0, 0, 0.38)
hint: 
rgba(0, 0, 0, 0.38)
divider: 
rgba(0, 0, 0, 0.12)
background: Object
paper: 
#fff
default: 
#fafafa
action: Object
active: 
rgba(0, 0, 0, 0.54)
hover: 
rgba(0, 0, 0, 0.04)
hoverOpacity: 0.04
selected: 
rgba(0, 0, 0, 0.08)
selectedOpacity: 0.08
disabled: 
rgba(0, 0, 0, 0.26)
disabledBackground: 
rgba(0, 0, 0, 0.12)
disabledOpacity: 0.38
focus: 
rgba(0, 0, 0, 0.12)
focusOpacity: 0.12
activatedOpacity: 0.12
props: Object
shadows: Array(25)
0: "none"
1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
2: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"
3: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)"
4: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"
5: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)"
6: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"
7: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"
8: "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)"
9: "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)"
10: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)"
11: "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)"
12: "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)"
13: "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)"
14: "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)"
15: "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)"
16: "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)"
17: "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)"
18: "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)"
19: "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)"
20: "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)"
21: "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)"
22: "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)"
23: "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)"
24: "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
typography: Object
htmlFontSize: 16
pxToRem: f ()
round: f w()
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontSize: 14
fontWeightLight: 300
fontWeightRegular: 400
fontWeightMedium: 500
fontWeightBold: 700
h1: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 300
fontSize: "6rem"
lineHeight: 1.167
letterSpacing: "-0.01562em"
h2: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 300
fontSize: "3.75rem"
lineHeight: 1.2
letterSpacing: "-0.00833em"
h3: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 400
fontSize: "3rem"
lineHeight: 1.167
letterSpacing: "0em"
h4: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 400
fontSize: "2.125rem"
lineHeight: 1.235
letterSpacing: "0.00735em"
h5: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 400
fontSize: "1.5rem"
lineHeight: 1.334
letterSpacing: "0em"
h6: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 500
fontSize: "1.25rem"
lineHeight: 1.6
letterSpacing: "0.0075em"
subtitle1: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 400
fontSize: "1rem"
lineHeight: 1.75
letterSpacing: "0.00938em"
subtitle2: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 500
fontSize: "0.875rem"
lineHeight: 1.57
letterSpacing: "0.00714em"
body1: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 400
fontSize: "1rem"
lineHeight: 1.5
letterSpacing: "0.00938em"
body2: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 400
fontSize: "0.875rem"
lineHeight: 1.43
letterSpacing: "0.01071em"
button: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 500
fontSize: "0.875rem"
lineHeight: 1.75
letterSpacing: "0.02857em"
textTransform: "uppercase"
caption: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 400
fontSize: "0.75rem"
lineHeight: 1.66
letterSpacing: "0.03333em"
overline: Object
fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
fontWeight: 400
fontSize: "0.75rem"
lineHeight: 2.66
letterSpacing: "0.08333em"
textTransform: "uppercase"
spacing: f e()
mui: true
shape: Object
borderRadius: 4
transitions: Object
easing: Object
easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)"
easeOut: "cubic-bezier(0.0, 0, 0.2, 1)"
easeIn: "cubic-bezier(0.4, 0, 1, 1)"
sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
duration: Object
shortest: 150
shorter: 200
short: 250
standard: 300
complex: 375
enteringScreen: 225
leavingScreen: 195
create: f create()
getAutoHeightDuration: f getAutoHeightDuration()
zIndex: Object
mobileStepper: 1000
speedDial: 1050
appBar: 1100
drawer: 1200
modal: 1300
snackbar: 1400
tooltip: 1500

*/
