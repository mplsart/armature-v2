declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        fontFamily: {
            default: string;
            accent: string;
        };
        appBarHeight: {
            default: number;
            compact: number;
        };
        globalMenuWidth: number;
    }
    interface ThemeOptions {
        fontFamily: {
            default: string;
            accent: string;
        };
        appBarHeight: {
            default: number;
            compact: number;
        };
        globalMenuWidth: number;
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
declare const muiTheme: import("@material-ui/core/styles").Theme;
export default muiTheme;
