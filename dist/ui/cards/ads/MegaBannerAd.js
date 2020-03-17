"use strict";
// MegaBanner Ad
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var utils_1 = require("./utils");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    adContainer: {
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
    },
    card: {
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        'border-radius': '2px',
        marginTop: theme.gutterSize / 2,
        marginBottom: theme.gutterSize / 2,
        // Hover state
        transition: 'box-shadow .25s',
        '&:hover': {
            'box-shadow': '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',
        },
    },
    cardImage: {
        '& a': {
            display: 'block',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: theme.palette.common.white,
            width: '100%',
            height: 0,
            padding: '60% 0 0 0',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            // The Image Itself?
            '& img': {
                position: 'absolute',
                top: 0,
                left: 0,
                margin: 'auto',
                width: '100%',
            },
        },
    },
    sponsorText: __assign(__assign({}, theme.typography.caption), { position: 'absolute', top: 0, color: theme.palette.common.white, paddingLeft: theme.gutterSize / 2, paddingTop: theme.gutterSize / 2, opacity: '0.8' }),
}); });
var MegaBannerAd = function (props) {
    var isMobile = props.isMobile, resource = props.resource, linkClassProps = props.linkClassProps;
    var classes = useStyles();
    var LinkClass = props.linkClass;
    // Bail if we have an ad resource but it doesn't have images
    if (!(resource && resource.image_resource)) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    var adImageStyles = utils_1.getAdImageStyles(resource, isMobile);
    var linkNode = (react_1.default.createElement(LinkClass, __assign({}, linkClassProps, { style: adImageStyles }), "\u00A0"));
    return (react_1.default.createElement("div", { className: classes.adContainer },
        react_1.default.createElement("div", { className: classes.card },
            react_1.default.createElement("div", { className: classes.cardImage }, linkNode),
            react_1.default.createElement("div", { className: classes.sponsorText }, resource.advert_type_label || 'advertisement'))));
};
exports.default = MegaBannerAd;
