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
// Marquee Article
var react_1 = __importDefault(require("react"));
var MarqueeCardBase_1 = __importDefault(require("./MarqueeCardBase"));
var Newspaper_1 = __importDefault(require("../../../icons/Newspaper"));
var moment_timezone_1 = __importDefault(require("moment-timezone"));
var StandardCardEventDate = function (props) {
    var resource = props.resource, rest = __rest(props, ["resource"]);
    // Published Date
    var publishedDate = moment_timezone_1.default(new Date(resource.published_date)).format('MMMM Do, YYYY');
    // Author Credit
    var extraOverline = '';
    // Author resource is can be verbose only
    if (resource.author_name) {
        extraOverline = ' by ' + resource.author_name;
    }
    // Overline
    var overlineText = 'Published ' + publishedDate + extraOverline;
    return (react_1.default.createElement(MarqueeCardBase_1.default, __assign({ overlineText: overlineText, title: resource.title, byLineText: 'New Article', byLineIcon: Newspaper_1.default, imageResource: resource.primary_image_resource }, rest)));
};
/*
class MarqueeCardArticle extends React.Component {
  render() {
    const { resource, ...rest} = this.props;

    // Published Date
    let publishedDate = moment(new Date(resource.published_date)).format('MMMM Do, YYYY');

    // Author Credit
    let extraOverline = '';

    // Author resource is can be verbose only
    if (resource.author_name) {
      extraOverline = ' by ' + resource.author_name;
    }
    else if (resource.author_resource) {
      extraOverline = ' by ' + resource.author_resource.firstname + ' ' + resource.author_resource.lastname;
    }

    // Overline
    let overlineText = 'Published ' + publishedDate + extraOverline;

    return (
      <MarqueeCardBase
        overlineText={overlineText}
        title={resource.title}
        byLineText="New Article"
        byLineIcon="fa-newspaper-o"
        imageResource={resource.primary_image_resource}
        {...rest}
       />
    );
  }
}
*/
exports.default = StandardCardEventDate;
