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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"./components/index.js\");\n\n\n\n\n\nconst ProductDetails = ({\n  product,\n  products\n}) => {\n  const {\n    image,\n    name,\n    details,\n    price\n  } = product;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"image-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_1__.urlFor)(image && image[0])\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small-image-container\"\n  }, image?.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_1__.urlFor)(item),\n    className: \"\",\n    onMouseEnter: \"\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-desc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviews\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineStar, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"(20)\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, \"Details: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"price\"\n  }, \"$\", price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"quantity\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Quantiy: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"quantity-desc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"minus\",\n    onClick: \"\"\n  }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineMinus, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"num\",\n    onClick: \"\"\n  }, \" 0\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"plus\",\n    onClick: \"\"\n  }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlinePlus, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"buttons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"add-to-cart\",\n    onClick: \"\"\n  }, \"Add to Cart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"buy-now\",\n    onClick: \"\"\n  }, \"Buy Now\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"maylike-products-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"You may also like\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"marquee\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"maylike-products-container\"\n  }, products.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Product, {\n    key: item._id,\n    product: item\n  }))))));\n};\n\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNTyxjQUFjLEdBQUcsQ0FBQztBQUFDQyxFQUFBQSxPQUFEO0FBQVNDLEVBQUFBO0FBQVQsQ0FBRCxLQUF3QjtBQUMzQyxRQUFNO0FBQUNDLElBQUFBLEtBQUQ7QUFBT0MsSUFBQUEsSUFBUDtBQUFZQyxJQUFBQSxPQUFaO0FBQW9CQyxJQUFBQTtBQUFwQixNQUE2QkwsT0FBbkM7QUFFRixzQkFDRSxxRkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLHFGQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxPQUFHLEVBQUVQLG1EQUFNLENBQUNTLEtBQUssSUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBZjtBQUFoQixJQURKLENBREosZUFJSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0tBLEtBQUssRUFBRUksR0FBUCxDQUFXLENBQUNDLElBQUQsRUFBTUMsQ0FBTixrQkFDUjtBQUFLLE9BQUcsRUFBR2YsbURBQU0sQ0FBQ2MsSUFBRCxDQUFqQjtBQUNDLGFBQVMsRUFBQyxFQURYO0FBRUMsZ0JBQVksRUFBQztBQUZkLElBREgsQ0FETCxDQUpKLGVBWUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDUSx1RUFBS0osSUFBTCxDQURSLGVBRVE7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxxRkFDSSwyREFBQyxzREFBRCxPQURKLGVBRUksMkRBQUMsc0RBQUQsT0FGSixlQUdJLDJEQUFDLHNEQUFELE9BSEosZUFJSSwyREFBQyxzREFBRCxPQUpKLGVBS0ksMkRBQUMseURBQUQsT0FMSixDQURKLGVBUUksNkVBUkosQ0FGUixlQWNRLG1GQWRSLGVBZVEsc0VBQUlDLE9BQUosQ0FmUixlQWdCUTtBQUFHLGFBQVMsRUFBQztBQUFiLFVBQXVCQyxLQUF2QixDQWhCUixlQWtCUTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLG1GQURKLGVBRUk7QUFBRyxhQUFTLEVBQUM7QUFBYixrQkFDSTtBQUFNLGFBQVMsRUFBQyxPQUFoQjtBQUF3QixXQUFPLEVBQUM7QUFBaEMsdUJBQW9DLDJEQUFDLDBEQUFELE9BQXBDLENBREosZUFFSTtBQUFNLGFBQVMsRUFBQyxLQUFoQjtBQUFzQixXQUFPLEVBQUM7QUFBOUIsVUFGSixlQUdJO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQXVCLFdBQU8sRUFBQztBQUEvQix1QkFBbUMsMkRBQUMseURBQUQsT0FBbkMsQ0FISixDQUZKLENBbEJSLGVBNEJRO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsYUFBaEM7QUFBOEMsV0FBTyxFQUFDO0FBQXRELG1CQURKLGVBSUk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsU0FBaEM7QUFBMEMsV0FBTyxFQUFDO0FBQWxELGVBSkosQ0E1QlIsQ0FaSixDQURKLENBREosZUFzREk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyRkFERCxlQUVDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0c7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNLSixRQUFRLENBQUNLLEdBQVQsQ0FBY0MsSUFBRCxpQkFDViwyREFBQyxnREFBRDtBQUFTLE9BQUcsRUFBRUEsSUFBSSxDQUFDRSxHQUFuQjtBQUF3QixXQUFPLEVBQUVGO0FBQWpDLElBREgsQ0FETCxDQURILENBRkQsQ0F0REosQ0FERjtBQXFFRCxDQXhFRDs7S0FBTVI7O0FBMkdOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzP2RiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjbGllbnQsdXJsRm9yfSBmcm9tICcuLi8uLi9saWIvY2xpZW50JztcclxuaW1wb3J0IHtBaU91dGxpbmVNaW51cyxBaU91dGxpbmVQbHVzLEFpRmlsbFN0YXIsQWlPdXRsaW5lU3Rhcn0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cydcclxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoe3Byb2R1Y3QscHJvZHVjdHN9KSA9PiB7XHJcbiAgICBjb25zdCB7aW1hZ2UsbmFtZSxkZXRhaWxzLHByaWNlfSA9IHByb2R1Y3Q7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWRldGFpbC1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihpbWFnZSAmJiBpbWFnZVswXSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLWltYWdlLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAge2ltYWdlPy5tYXAoKGl0ZW0saSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHVybEZvcihpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1kZXRhaWwtZGVzYyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmV2aWV3cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxTdGFyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsU3Rhci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbFN0YXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxTdGFyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lU3Rhci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgyMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5EZXRhaWxzOiA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGV0YWlsc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncHJpY2UnPiR7cHJpY2V9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlF1YW50aXk6IDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJxdWFudGl0eS1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWludXNcIiBvbkNsaWNrPVwiXCI+IDxBaU91dGxpbmVNaW51cy8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bVwiIG9uQ2xpY2s9XCJcIj4gMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbHVzXCIgb25DbGljaz1cIlwiPiA8QWlPdXRsaW5lUGx1cy8+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFkZC10by1jYXJ0XCIgb25DbGljaz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ1eS1ub3dcIiBvbkNsaWNrPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV5IE5vd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heWxpa2UtcHJvZHVjdHMtd3JhcHBlclwiPlxyXG4gICAgICAgICA8aDI+WW91IG1heSBhbHNvIGxpa2U8L2gyPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcnF1ZWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXlsaWtlLXByb2R1Y3RzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgoaXRlbSkgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3Qga2V5PXtpdGVtLl9pZH0gcHJvZHVjdD17aXRlbX0vPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicHJvZHVjdFwiXXtcclxuICAgICAgICBzbHVne1xyXG4gICAgICAgICAgICBjdXJyZW50XHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XHJcblxyXG4gICAgY29uc3QgcGF0aHMgPSBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+ICh7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3Quc2x1Zy5jdXJyZW50XHJcbiAgICAgICAgfVxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZydcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHtwYXJhbXM6e3NsdWd9fSkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInByb2R1Y3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJyR7c2x1Z30nXVswXWA7XHJcbiAgICBjb25zdCBwcm9kdWN0c1F1ZXJ5ID0gJypbX3R5cGUgPT0gXCJwcm9kdWN0XCJdJ1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LmZldGNoKHByb2R1Y3RzUXVlcnkpXHJcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuICBcclxuICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBwcm9kdWN0cywgcHJvZHVjdCB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1cmxGb3IiLCJBaU91dGxpbmVNaW51cyIsIkFpT3V0bGluZVBsdXMiLCJBaUZpbGxTdGFyIiwiQWlPdXRsaW5lU3RhciIsIlByb2R1Y3QiLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImltYWdlIiwibmFtZSIsImRldGFpbHMiLCJwcmljZSIsIm1hcCIsIml0ZW0iLCJpIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});