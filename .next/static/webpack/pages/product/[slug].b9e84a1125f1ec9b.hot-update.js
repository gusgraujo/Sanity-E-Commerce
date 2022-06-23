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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\n\n\n\nconst ProductDetails = ({\n  product,\n  products\n}) => {\n  const {\n    image,\n    name,\n    details,\n    price\n  } = product;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"image-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_1__.urlFor)(image && image[0])\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small-image-container\"\n  }, image?.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_1__.urlFor)(item),\n    className: \"\",\n    onMouseEnter: \"\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-desc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviews\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineStar, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"(20)\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, \"Details: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"price\"\n  }, \"$\", price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"quantity\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Quantiy: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"quantity-desc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"minus\",\n    onClick: \"\"\n  }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineMinus, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"num\",\n    onClick: \"\"\n  }, \" 0\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"plus\",\n    onClick: \"\"\n  }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePlus, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"buttons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"add-to-cart\",\n    onClick: \"\"\n  }, \"Add to Cart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"buy-now\",\n    onClick: \"\"\n  }, \"Buy Now\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"maylike-products-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"You may also like\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"marquee\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"maylike-products-container\"\n  }, products.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Product, null))))));\n};\n\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNTSxjQUFjLEdBQUcsQ0FBQztBQUFDQyxFQUFBQSxPQUFEO0FBQVNDLEVBQUFBO0FBQVQsQ0FBRCxLQUF3QjtBQUMzQyxRQUFNO0FBQUNDLElBQUFBLEtBQUQ7QUFBT0MsSUFBQUEsSUFBUDtBQUFZQyxJQUFBQSxPQUFaO0FBQW9CQyxJQUFBQTtBQUFwQixNQUE2QkwsT0FBbkM7QUFFRixzQkFDRSxxRkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLHFGQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxPQUFHLEVBQUVOLG1EQUFNLENBQUNRLEtBQUssSUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBZjtBQUFoQixJQURKLENBREosZUFJSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0tBLEtBQUssRUFBRUksR0FBUCxDQUFXLENBQUNDLElBQUQsRUFBTUMsQ0FBTixrQkFDUjtBQUFLLE9BQUcsRUFBR2QsbURBQU0sQ0FBQ2EsSUFBRCxDQUFqQjtBQUNDLGFBQVMsRUFBQyxFQURYO0FBRUMsZ0JBQVksRUFBQztBQUZkLElBREgsQ0FETCxDQUpKLGVBWUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDUSx1RUFBS0osSUFBTCxDQURSLGVBRVE7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxxRkFDSSwyREFBQyxzREFBRCxPQURKLGVBRUksMkRBQUMsc0RBQUQsT0FGSixlQUdJLDJEQUFDLHNEQUFELE9BSEosZUFJSSwyREFBQyxzREFBRCxPQUpKLGVBS0ksMkRBQUMseURBQUQsT0FMSixDQURKLGVBUUksNkVBUkosQ0FGUixlQWNRLG1GQWRSLGVBZVEsc0VBQUlDLE9BQUosQ0FmUixlQWdCUTtBQUFHLGFBQVMsRUFBQztBQUFiLFVBQXVCQyxLQUF2QixDQWhCUixlQWtCUTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLG1GQURKLGVBRUk7QUFBRyxhQUFTLEVBQUM7QUFBYixrQkFDSTtBQUFNLGFBQVMsRUFBQyxPQUFoQjtBQUF3QixXQUFPLEVBQUM7QUFBaEMsdUJBQW9DLDJEQUFDLDBEQUFELE9BQXBDLENBREosZUFFSTtBQUFNLGFBQVMsRUFBQyxLQUFoQjtBQUFzQixXQUFPLEVBQUM7QUFBOUIsVUFGSixlQUdJO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQXVCLFdBQU8sRUFBQztBQUEvQix1QkFBbUMsMkRBQUMseURBQUQsT0FBbkMsQ0FISixDQUZKLENBbEJSLGVBNEJRO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsYUFBaEM7QUFBOEMsV0FBTyxFQUFDO0FBQXRELG1CQURKLGVBSUk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsU0FBaEM7QUFBMEMsV0FBTyxFQUFDO0FBQWxELGVBSkosQ0E1QlIsQ0FaSixDQURKLENBREosZUFzREk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyRkFERCxlQUVDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0c7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNLSixRQUFRLENBQUNLLEdBQVQsQ0FBY0MsSUFBRCxpQkFDViwyREFBQyxPQUFELE9BREgsQ0FETCxDQURILENBRkQsQ0F0REosQ0FERjtBQXFFRCxDQXhFRDs7S0FBTVI7O0FBMkdOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzP2RiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjbGllbnQsdXJsRm9yfSBmcm9tICcuLi8uLi9saWIvY2xpZW50JztcclxuaW1wb3J0IHtBaU91dGxpbmVNaW51cyxBaU91dGxpbmVQbHVzLEFpRmlsbFN0YXIsQWlPdXRsaW5lU3Rhcn0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcblxyXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9ICh7cHJvZHVjdCxwcm9kdWN0c30pID0+IHtcclxuICAgIGNvbnN0IHtpbWFnZSxuYW1lLGRldGFpbHMscHJpY2V9ID0gcHJvZHVjdDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGV0YWlsLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2UtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKGltYWdlICYmIGltYWdlWzBdKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtaW1hZ2UtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2U/Lm1hcCgoaXRlbSxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgdXJsRm9yKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWRldGFpbC1kZXNjJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXZpZXdzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbFN0YXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxTdGFyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsU3Rhci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbFN0YXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVTdGFyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDIwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkRldGFpbHM6IDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXRhaWxzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwcmljZSc+JHtwcmljZX08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UXVhbnRpeTogPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInF1YW50aXR5LWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaW51c1wiIG9uQ2xpY2s9XCJcIj4gPEFpT3V0bGluZU1pbnVzLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtXCIgb25DbGljaz1cIlwiPiAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsdXNcIiBvbkNsaWNrPVwiXCI+IDxBaU91dGxpbmVQbHVzLz48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnRcIiBvbkNsaWNrPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRvIENhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnV5LW5vd1wiIG9uQ2xpY2s9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXkgTm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF5bGlrZS1wcm9kdWN0cy13cmFwcGVyXCI+XHJcbiAgICAgICAgIDxoMj5Zb3UgbWF5IGFsc28gbGlrZTwvaDI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFycXVlZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heWxpa2UtcHJvZHVjdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChpdGVtKSA9PihcclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwcm9kdWN0XCJde1xyXG4gICAgICAgIHNsdWd7XHJcbiAgICAgICAgICAgIGN1cnJlbnRcclxuICAgICAgICB9XHJcbiAgICB9YDtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuXHJcbiAgICBjb25zdCBwYXRocyA9IHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdC5zbHVnLmN1cnJlbnRcclxuICAgICAgICB9XHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogJ2Jsb2NraW5nJ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe3BhcmFtczp7c2x1Z319KSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicHJvZHVjdFwiICYmIHNsdWcuY3VycmVudCA9PSAnJHtzbHVnfSddWzBdYDtcclxuICAgIGNvbnN0IHByb2R1Y3RzUXVlcnkgPSAnKltfdHlwZSA9PSBcInByb2R1Y3RcIl0nXHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2gocHJvZHVjdHNRdWVyeSlcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xyXG4gIFxyXG4gICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IHByb2R1Y3RzLCBwcm9kdWN0IH1cclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscyJdLCJuYW1lcyI6WyJSZWFjdCIsInVybEZvciIsIkFpT3V0bGluZU1pbnVzIiwiQWlPdXRsaW5lUGx1cyIsIkFpRmlsbFN0YXIiLCJBaU91dGxpbmVTdGFyIiwiUHJvZHVjdERldGFpbHMiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJpbWFnZSIsIm5hbWUiLCJkZXRhaWxzIiwicHJpY2UiLCJtYXAiLCJpdGVtIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});