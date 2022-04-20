"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

 // styles


const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
};
const headingAccentStyles = {
  color: "#663399"
};
const paragraphStyles = {
  marginBottom: 48
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30
};
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%"
};

const docLinkStyle = _objectSpread(_objectSpread({}, linkStyle), {}, {
  listStyleType: "none",
  marginBottom: 24
});

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25
};
const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8"
};
const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1
}; // data

const links = [{
  text: "Tutorial",
  url: "https://www.gatsbyjs.com/docs/tutorial/",
  description: "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  color: "#E95800"
}, {
  text: "How to Guides",
  url: "https://www.gatsbyjs.com/docs/how-to/",
  description: "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
  color: "#1099A8"
}, {
  text: "Reference Guides",
  url: "https://www.gatsbyjs.com/docs/reference/",
  description: "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
  color: "#BC027F"
}, {
  text: "Conceptual Guides",
  url: "https://www.gatsbyjs.com/docs/conceptual/",
  description: "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
  color: "#0D96F2"
}, {
  text: "Plugin Library",
  url: "https://www.gatsbyjs.com/plugins",
  description: "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  color: "#8EB814"
}, {
  text: "Build and Host",
  url: "https://www.gatsbyjs.com/cloud",
  badge: true,
  description: "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  color: "#663399"
}]; // markup

const IndexPage = () => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("main", {
    style: pageStyles
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", null, "Home Page"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
    style: headingStyles
  }, "Congratulations", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    style: headingAccentStyles
  }, "\u2014 you just made a Gatsby site! "), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    role: "img",
    "aria-label": "Party popper emojis"
  }, "\uD83C\uDF89\uD83C\uDF89\uD83C\uDF89")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
    style: paragraphStyles
  }, "Edit ", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
    style: codeStyles
  }, "src/pages/index.js"), " to see this page update in real-time.", " ", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    role: "img",
    "aria-label": "Sunglasses smiley emoji"
  }, "\uD83D\uDE0E")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
    style: listStyles
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
    style: docLinkStyle
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
    style: linkStyle,
    href: `${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`
  }, docLink.text)), links.map(link => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
    key: link.url,
    style: _objectSpread(_objectSpread({}, listItemStyles), {}, {
      color: link.color
    })
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
    style: linkStyle,
    href: `${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`
  }, link.text), link.badge && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    style: badgeStyle,
    "aria-label": "New Badge"
  }, "NEW!"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
    style: descriptionStyle
  }, link.description))))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
    alt: "Gatsby G Logo",
    src: "data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map