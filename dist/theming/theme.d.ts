export interface VenueCategoryStyle {
    default_icon: string;
    premium_icon: string;
    default_color: string;
    premium_color: string;
}
export interface VenueStyleMap {
    default_icon: string;
    default_color: string;
    gallery: VenueCategoryStyle;
    business: VenueCategoryStyle;
    institution: VenueCategoryStyle;
    popup: VenueCategoryStyle;
    public: VenueCategoryStyle;
    studios: VenueCategoryStyle;
}
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
        gutterSize: number;
        venues: VenueStyleMap;
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
        gutterSize: number;
        venues: VenueStyleMap;
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
declare const _default: import("@material-ui/core/styles").Theme;
export default _default;
