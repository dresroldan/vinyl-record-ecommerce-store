import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#d8d8da',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f44336',
    },
    background: {
      default: 'FFFFF',
    },
  },

  typography: {
    fontFamily: 'Karla',
  },
});

export default theme;
