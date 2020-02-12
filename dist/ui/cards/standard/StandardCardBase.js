"use strict";
// Base Standard Card
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
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var typography_1 = require("../../../typography");
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: {
            position: 'relative',
            '&:hover': {
                '& a': {
                    textDecoration: 'none',
                },
                '& .image': {
                    transform: 'scale(1.1)',
                },
                '& .primaryTitle': {
                    color: theme.palette.primary.main,
                },
            },
        },
        imageWrapper: {
            overflow: 'hidden',
        },
        image: (_a = {
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: 0,
                display: 'block',
                padding: '52.42% 0 0 0',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#eeeeee',
                '-webkit-transition': '0.6s ease',
                transition: '0.6s ease'
            },
            _a[theme.breakpoints.only('xs')] = {
            //padding:'30% 0 0 0',
            },
            _a),
        imageLink: {
            display: 'block',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
        },
        contentContainer: {
            // An anchor tag potentially
            width: '100%',
            color: 'inherit',
            textDecoration: 'inherit',
        },
        contentContainerContent: (_b = {
                bottom: 0,
                padding: '4px 0 0 0'
            },
            _b[theme.breakpoints.only('xs')] = {
                // Phones in portrait
                padding: 8,
            },
            _b),
        primaryTitle: __assign(__assign({}, theme.typography.h2), { fontFamily: theme.fontFamily.accent, marginTop: '0.35em', fontSize: theme.typography.pxToRem(18), lineHeight: theme.typography.pxToRem(23), fontWeight: 400, marginBottom: 0 }),
        byline: {
            display: 'inline-block',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1000,
            backgroundColor: '#fafafa',
            fontWeight: 100,
            fontSize: '14px',
            padding: '0px 8px 2px 0px',
        },
        byLineIcon: {
            fontSize: 'inherit',
            marginLeft: '2px',
            marginRight: '8px',
        },
        overline: {
            paddingTop: 80,
            color: theme.palette.common.black,
        },
    });
});
var StandardCardBase = function (props) {
    var byLineText = props.byLineText, title = props.title, overlineText = props.overlineText, linkClassProps = props.linkClassProps, imageResource = props.imageResource;
    var classes = useStyles();
    var LinkClass = props.linkClass;
    var ByLineIcon = props.byLineIcon;
    var image_url = 'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQ2NzAwMDE/card_large.png';
    if (imageResource && imageResource.versions) {
        if (imageResource.versions.CARD_LARGE) {
            image_url = imageResource.versions.CARD_LARGE.url;
        }
        else if (imageResource.versions.CARD_SMALL) {
            image_url = imageResource.versions.CARD_SMALL.url;
        }
    } //  else ??
    var imageAttrs = { style: {} };
    if (image_url) {
        imageAttrs.style = { backgroundImage: 'url(' + image_url + ')' };
    }
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement("div", { className: classes.byline },
            react_1.default.createElement(ByLineIcon, { className: classes.byLineIcon }),
            byLineText),
        react_1.default.createElement("div", { className: classes.imageWrapper },
            react_1.default.createElement("div", __assign({ className: clsx_1.default('image', classes.image) }, imageAttrs),
                react_1.default.createElement(LinkClass, __assign({ title: title }, linkClassProps, { className: classes.imageLink }), "\u00A0"))),
        react_1.default.createElement(LinkClass, __assign({ title: title }, linkClassProps, { className: classes.contentContainer }),
            react_1.default.createElement("div", { className: classes.contentContainerContent },
                react_1.default.createElement(typography_1.Overline, { className: classes.overline }, overlineText),
                react_1.default.createElement(Typography_1.default, { className: clsx_1.default('primaryTitle', classes.primaryTitle) }, title)))));
};
exports.default = StandardCardBase;
/*
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Overline from '../../../typography/Overline';

let styles = (theme) => {
  return {
    root: {
      position: 'relative',
      '&:hover': {
        '& a': {
          textDecoration: 'none',
        },
        '& .image': {
          transform:'scale(1.1)'
        },

        '& .primaryTitle': {
          color: theme.palette.primary[500]
        }
      }
    },

    imageWrapper: {
      overflow:'hidden',
    },
    image: {
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat',
      width:'100%',
      height:0,
      display:'block',
      padding:'52.42% 0 0 0', // 60 v 52.42
      position:'relative',
      overflow: 'hidden',
      '&.withShadow': {},
      backgroundColor: '#eeeeee',
      '-webkit-transition': '0.6s ease',
      'transition': '0.6s ease',

      [theme.breakpoints.only('xs')]: {
        //padding:'30% 0 0 0',
      }
    },

    imageLink: {
      display: 'block',
      height:'100%',
      width:'100%',
      position: 'absolute',
      top:0,
      left:0,
    },

    contentContainer: {
      width:'100%',
      [theme.breakpoints.only('xs')]: { },
    },
    contentContainerContent: {
      bottom:0,
      padding: '0px',
      [theme.breakpoints.only('xs')]: {
        // Phones in portrait
        padding: 8,
      },
    },

    primaryTitle: {
      ...theme.typography.display2,
      fontFamily: theme.fontFamily.accent,
      marginTop: '0.35em',
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(23), //1.46429em
      fontWeight: 400,
      marginBottom:0,
    },

    byline: {
      display:'inline-block',
      position:'absolute',
      top:0,
      left:0,
      zIndex:1000,
      backgroundColor:'#fafafa',
      padding: '8px 16px 8px 8px',

      fontSize: '14px',
      padding: '0px 8px 0px 0px',
    },

    byLineIcon: {
      marginRight: '8px'
    },

    overline: {
      paddingTop:8,
      color:'#000'
    }
  };
};

class MarqueeCardSmallBase extends React.Component {
  render() {

    let {classes, byLineIcon, byLineText, title, overlineText, linkClassProps, imageResource} =  this.props;

    let image_url; // = 'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQ2NzAwMDE/card_large.png';

    if (imageResource && imageResource.versions) {
      if (imageResource.versions.CARD_LARGE) {
        image_url = imageResource.versions.CARD_LARGE.url;
      }
      else if (imageResource.versions.CARD_SMALL) {
        image_url = imageResource.versions.CARD_SMALL.url;
      }
    } //  else ??

    let imageAttrs = {};
    if (image_url) {
      imageAttrs.style = {backgroundImage: 'url(' + image_url + ')'};
    }

    return (
      <div className={classes.root}>
        <div className={classnames(classes.byline)}>
          <i className={classnames('fa', byLineIcon, classes.byLineIcon)}></i>
          {byLineText}
        </div>

        <div className={classnames('imageWrapper', classes.imageWrapper)}>
          <div
            className={classnames('image', classes.image, 'withShadow')}
            {...imageAttrs}
          >
            <this.props.linkClass
              title={title}
              {...linkClassProps}
              className={classes.imageLink}>&nbsp;</this.props.linkClass>
          </div>
        </div>

        <this.props.linkClass
          title={title}
          {...linkClassProps}
          className={classes.contentContainer}
        >
          <div className={classes.contentContainerContent}>
            <Overline className={classnames('overline', classes.overline)}>{ overlineText }</Overline>
            <Typography className={classnames('primaryTitle', classes.primaryTitle)}>{ title }</Typography>
          </div>
        </this.props.linkClass>
      </div>
    );
  }
}

MarqueeCardSmallBase.propTypes = {
  classes: PropTypes.object,
  resource: PropTypes.object,
  byLineIcon: PropTypes.string,
  byLineText: PropTypes.node,
  title: PropTypes.string,
  overlineText: PropTypes.node,
  linkClassProps: PropTypes.object,
  linkClass: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  imageResource: PropTypes.object
};

export default withStyles(styles)(MarqueeCardSmallBase);
*/
