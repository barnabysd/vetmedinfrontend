import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

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
    customGreen: {
        main: '#199c73'
    },
    customBlue: {
        main: '#0c2f8b'
    },
    error: {
      main: '#fb2f53',
    },
    background: {
      default: '#b8ebfa',
    },
  },
});

export default theme;
