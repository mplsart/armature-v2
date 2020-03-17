// Defines theme to use with jss and material-ui components
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from './colors';

const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
const accentFontFamily = '"Bryant", "Helvetica", "Arial", sans-serif';

// Extend the Mui types for our customizations
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    fontFamily: { default: string; accent: string };
    appBarHeight: { default: number; compact: number };
    globalMenuWidth: number;
    gutterSize: number;
    venues: { [key: string]: any };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    fontFamily: { default: string; accent: string };
    appBarHeight: { default: number; compact: number };
    globalMenuWidth: number;
    gutterSize: number;
    venues: { [key: string]: any };
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    globalHeader: PaletteColor;
  }
  interface PaletteOptions {
    globalHeader: PaletteColor;
  }
}

const muiTheme = createMuiTheme({
  // Typography
  fontFamily: { default: defaultFontFamily, accent: accentFontFamily },

  typography: {
    //useNextVariants: true,
    fontFamily: defaultFontFamily,
    h4: {
      // ContentTitle
      fontFamily: accentFontFamily,
      fontWeight: 100,
    },
    h5: {
      // ContentSubTitle
      fontFamily: accentFontFamily,
      fontWeight: 100,
    },
    caption: { color: 'rgba(0, 0, 0, 0.54)' },

    body2: { fontWeight: 100 },
    button: {
      fontWeight: 400,
      textTransform: 'none',
      fontSize: '1.25rem',
      fontFamily: accentFontFamily,
      letterSpacing: '1px',
    },
  },

  // Color Palette
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
    },

    globalHeader: {
      light: '#333333',
      main: '#222222',
      dark: '#000000',
      contrastText: 'green',
    },
  },

  overrides: {},

  appBarHeight: {
    // offset height of top appbar
    default: 60,
    compact: 50,
  },
  globalMenuWidth: 300,

  // Global Gutter size - theme.spacing(4)
  gutterSize: 32,

  // Venue Map Theme
  venues: {
    gallery: {
      default_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_GALLERY_fd0595.png',
      premium_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_GALLERY_fd0595.png',
      default_color: 'fd0595',
      premium_color: 'fd0595',
    },
    business: {
      default_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_BUSINESS_607d8b.png',
      premium_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_BUSINESS_607d8b.png',
      default_color: '607d8b',
      premium_color: '607d8b',
    },
    institution: {
      default_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_INSTITUTION_3f51b5.png',
      premium_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_INSTITUTION_3f51b5.png',
      default_color: '3f51b5',
      premium_color: '3f51b5',
    },
    popup: {
      default_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_POPUP_673ab7.png',
      premium_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_POPUP_673ab7.png',
      default_color: '673ab7',
      premium_color: '673ab7',
    },
    public: {
      default_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_PUBLIC_009688.png',
      premium_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_PUBLIC_009688.png',
      default_color: '009688',
      premium_color: '009688',
    },
    studios: {
      default_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_STUDIOS_9c27b0.png',
      premium_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/pin_STUDIOS_9c27b0.png',
      default_color: '9c27b0',
      premium_color: '9c27b0',
    },

    default_icon: 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_SM_DEFAULT_9e9e9e.png',
    //'default_icon': 'https://storage.googleapis.com/cdn.mplsart.com/assets/maps/dot_GALLERY_fd0595.png',
    default_color: '9e9e9e',
  },
});

export default muiTheme;
