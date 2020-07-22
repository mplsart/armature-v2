"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceIconMap = void 0;
// Social Button for Internal Social Links and Gallery Links, targetClasses
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Artsy_1 = __importDefault(require("../../icons/Artsy"));
var Facebook_1 = __importDefault(require("../../icons/Facebook"));
var Instagram_1 = __importDefault(require("../../icons/Instagram"));
var LinkedIn_1 = __importDefault(require("../../icons/LinkedIn"));
var MNArtists_1 = __importDefault(require("../../icons/MNArtists"));
var OtherLink_1 = __importDefault(require("../../icons/OtherLink"));
var Patreon_1 = __importDefault(require("../../icons/Patreon"));
var Tumblr_1 = __importDefault(require("../../icons/Tumblr"));
var Twitter_1 = __importDefault(require("../../icons/Twitter"));
var Vimeo_1 = __importDefault(require("../../icons/Vimeo"));
var YouTube_1 = __importDefault(require("../../icons/YouTube"));
// Define map of service types and Renderer
exports.serviceIconMap = {
    artsy: Artsy_1.default,
    facebook: Facebook_1.default,
    instagram: Instagram_1.default,
    linkedin: LinkedIn_1.default,
    mnartists: MNArtists_1.default,
    other: OtherLink_1.default,
    patreon: Patreon_1.default,
    tumblr: Tumblr_1.default,
    twitter: Twitter_1.default,
    vimeo: Vimeo_1.default,
    youtube: YouTube_1.default,
};
// Override IconButton defaults: root is applied to Button root.
// TODO: Might be easier to override Button vs. IconButton ?
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        borderRadius: 0,
        margin: theme.spacing(1) + "px",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}); });
var SocialButton = function (_a) {
    var component = _a.component, service = _a.service, rest = __rest(_a, ["component", "service"]);
    var classes = useStyles();
    // Default to use anchor tags
    var ButtonComponent = component ? component : 'a';
    // Resolve Icon component for service
    var IconComponent = exports.serviceIconMap.other;
    if (exports.serviceIconMap[service]) {
        IconComponent = exports.serviceIconMap[service];
    }
    return (react_1.default.createElement(IconButton_1.default, __assign({ component: ButtonComponent }, rest, { "aria-label": service, classes: { root: classes.root } }),
        react_1.default.createElement(IconComponent, { fontSize: "inherit" })));
};
exports.default = react_1.default.memo(SocialButton);
