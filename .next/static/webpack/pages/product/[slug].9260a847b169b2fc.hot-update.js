"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\n\n\n\nconst ProductDetails = ({\n  product,\n  products\n}) => {\n  const {\n    image,\n    name,\n    details,\n    price\n  } = product;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"image-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_1__.urlFor)(image && image[0])\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small-image-container\"\n  }, image?.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_1__.urlFor)(item),\n    className: \"\",\n    onMouseEnter: \"\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-details-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviews\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineStar, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"(20)\"))))));\n};\n\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNTSxjQUFjLEdBQUcsQ0FBQztBQUFDQyxFQUFBQSxPQUFEO0FBQVNDLEVBQUFBO0FBQVQsQ0FBRCxLQUF3QjtBQUMzQyxRQUFNO0FBQUNDLElBQUFBLEtBQUQ7QUFBT0MsSUFBQUEsSUFBUDtBQUFZQyxJQUFBQSxPQUFaO0FBQW9CQyxJQUFBQTtBQUFwQixNQUE2QkwsT0FBbkM7QUFFRixzQkFDRSxxRkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLHFGQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxPQUFHLEVBQUVOLG1EQUFNLENBQUNRLEtBQUssSUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBZjtBQUFoQixJQURKLENBREosZUFJSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0tBLEtBQUssRUFBRUksR0FBUCxDQUFXLENBQUNDLElBQUQsRUFBTUMsQ0FBTixrQkFDUjtBQUFLLE9BQUcsRUFBR2QsbURBQU0sQ0FBQ2EsSUFBRCxDQUFqQjtBQUNDLGFBQVMsRUFBQyxFQURYO0FBRUMsZ0JBQVksRUFBQztBQUZkLElBREgsQ0FETCxDQUpKLGVBWUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDUSx1RUFBS0osSUFBTCxDQURSLGVBRVE7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxxRkFDSSwyREFBQyxzREFBRCxPQURKLGVBRUksMkRBQUMsc0RBQUQsT0FGSixlQUdJLDJEQUFDLHNEQUFELE9BSEosZUFJSSwyREFBQyxzREFBRCxPQUpKLGVBS0ksMkRBQUMseURBQUQsT0FMSixDQURKLGVBUUksNkVBUkosQ0FGUixDQVpKLENBREosQ0FESixDQURGO0FBbUNELENBdENEOztLQUFNSjs7QUF5RU4sK0RBQWVBLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanM/ZGIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2NsaWVudCx1cmxGb3J9IGZyb20gJy4uLy4uL2xpYi9jbGllbnQnO1xyXG5pbXBvcnQge0FpT3V0bGluZU1pbnVzLEFpT3V0bGluZVBsdXMsQWlGaWxsU3RhcixBaU91dGxpbmVTdGFyfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuXHJcbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHtwcm9kdWN0LHByb2R1Y3RzfSkgPT4ge1xyXG4gICAgY29uc3Qge2ltYWdlLG5hbWUsZGV0YWlscyxwcmljZX0gPSBwcm9kdWN0O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1kZXRhaWwtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZS1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoaW1hZ2UgJiYgaW1hZ2VbMF0pfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC1pbWFnZS1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZT8ubWFwKChpdGVtLGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyB1cmxGb3IoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGV0YWlscy1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jldmlld3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsU3Rhci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbFN0YXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxTdGFyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsU3Rhci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVN0YXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInByb2R1Y3RcIl17XHJcbiAgICAgICAgc2x1Z3tcclxuICAgICAgICAgICAgY3VycmVudFxyXG4gICAgICAgIH1cclxuICAgIH1gO1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhzID0gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoe1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0LnNsdWcuY3VycmVudFxyXG4gICAgICAgIH1cclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7cGFyYW1zOntzbHVnfX0pID0+IHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwcm9kdWN0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICcke3NsdWd9J11bMF1gO1xyXG4gICAgY29uc3QgcHJvZHVjdHNRdWVyeSA9ICcqW190eXBlID09IFwicHJvZHVjdFwiXSdcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChwcm9kdWN0c1F1ZXJ5KVxyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XHJcbiAgXHJcbiAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHsgcHJvZHVjdHMsIHByb2R1Y3QgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXJsRm9yIiwiQWlPdXRsaW5lTWludXMiLCJBaU91dGxpbmVQbHVzIiwiQWlGaWxsU3RhciIsIkFpT3V0bGluZVN0YXIiLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImltYWdlIiwibmFtZSIsImRldGFpbHMiLCJwcmljZSIsIm1hcCIsIml0ZW0iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});