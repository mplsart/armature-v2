"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var InputAdornment_1 = __importDefault(require("@material-ui/core/InputAdornment"));
var SmallActionButton_1 = __importDefault(require("../buttons/SmallActionButton"));
var typography_1 = require("../../typography");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return ({
        root: (_a = {
                margin: '16px',
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
                padding: '32px',
                display: 'flex'
            },
            _a[theme.breakpoints.down('sm')] = {
                display: 'block',
                padding: '32px 0px',
            },
            _a),
        // TextField overrides - yes we ripped off the bootstrap example for MUI
        bootstrapRoot: {
            padding: 0,
            'label + &': {
                marginTop: theme.gutterSize,
            },
        },
        bootstrapInput: {
            alignItems: 'center',
            borderRadius: 4,
            backgroundColor: theme.palette.common.white,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '12px 12px',
            width: 'calc(100% - 24px)',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&:focus': {
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
        bootstrapFormLabel: {
            fontSize: 18,
        },
        button: {
            margin: 0,
            padding: '8px 16px',
            marginLeft: '-12px',
            marginTop: -1,
            fontSize: '16px',
            height: 45,
            borderRadius: '0 4px  4px 0',
            boxShadow: 'none',
        },
        textContainer: (_b = {
                display: 'inline-flex',
                flex: '0 0 auto',
                paddingRight: '32px',
                alignItems: 'center'
            },
            _b[theme.breakpoints.down('sm')] = {
                paddingRight: 0,
                textAlign: 'center',
                display: 'block',
            },
            _b),
        textContainerInner: {
            display: 'block',
        },
        text: (_c = {
                margin: '8px 0',
                fontSize: '32px'
            },
            _c[theme.breakpoints.down('sm')] = {
                textAlign: 'center',
                fontSize: '32px',
            },
            _c[theme.breakpoints.down('xs')] = {
                // This forces a line break on mobile
                '& span.line:after': {
                    content: '"\\A"',
                    whiteSpace: 'pre',
                },
            },
            _c),
        subtext: (_d = {
                fontSize: '14px',
                margin: '0 0 10px 0',
                fontWeight: 100
            },
            _d[theme.breakpoints.down('sm')] = {
                marginBottom: '32px',
            },
            _d[theme.breakpoints.only('xs')] = {
                // This forces a line break on mobile
                '& span.line:after': {
                    content: '"\\A"',
                    whiteSpace: 'pre',
                },
            },
            _d),
        formContainer: (_e = {
                display: 'inline-flex',
                flex: 'auto',
                alignItems: 'center'
            },
            _e[theme.breakpoints.down('sm')] = {
                textAlign: 'center',
                display: 'block',
                marginBottom: '16px',
            },
            _e),
        form: { width: '100%' },
    });
});
var LargeEmailSignUp = function () {
    var classes = useStyles();
    var _a = react_1.default.useState(''), emailValue = _a[0], setEmailValue = _a[1];
    var handleChange = function (e) {
        var value = e.currentTarget.value;
        setEmailValue(value);
    };
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement("div", { className: classes.textContainer },
            react_1.default.createElement("div", { className: classes.textContainerInner },
                react_1.default.createElement(typography_1.ContentTitle, { className: classes.text },
                    react_1.default.createElement("span", { className: "line" }, "Find out what's up"),
                    " ",
                    react_1.default.createElement("span", { className: "line" }, "every weekend.")),
                react_1.default.createElement("p", { className: classes.subtext },
                    react_1.default.createElement("span", { className: "line" }, "No spam. Just local art news and events"),
                    ' ',
                    react_1.default.createElement("span", { className: "line" }, "straight to your inbox.")))),
        react_1.default.createElement("div", { className: classes.formContainer },
            react_1.default.createElement("form", { action: "//mplsart.us14.list-manage.com/subscribe/post?u=ced89bbd9bf83c5658247380d&id=1e75245409", method: "post", id: "mc-embedded-subscribe-form", name: "mc-embedded-subscribe-form", className: classes.form, target: "_blank", noValidate: true },
                react_1.default.createElement(TextField_1.default, { type: "email", placeholder: "Your Email Address", name: "EMAIL", value: emailValue, onChange: handleChange, fullWidth: true, InputProps: {
                        disableUnderline: true,
                        classes: {
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                        },
                        endAdornment: (react_1.default.createElement(InputAdornment_1.default, { position: "end" },
                            react_1.default.createElement(SmallActionButton_1.default, { className: classes.button, type: "submit" }, "Subscribe"))),
                    }, InputLabelProps: {
                        shrink: true,
                        className: classes.bootstrapFormLabel,
                    } })))));
};
exports.default = LargeEmailSignUp;
