import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material';

const montserrat = Montserrat({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  display: 'swap',
});

const Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#64337E',
    },
    secondary: {
      main: '#D68BB4',
    },
    divider: '#262626',
    background: {
      default: '#121212',
    },
    text: {
      primary: '#f1f1f1',
    },
  },
  typography: {
    fontFamily:  montserrat.style.fontFamily,
    fontSize: 24,
    htmlFontSize: 24,
    h1: {
      fontSize: 48,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 36,
    },
    h3: {
      fontSize: 32,
    },
  },
  spacing: 8,
});

export default Theme;
