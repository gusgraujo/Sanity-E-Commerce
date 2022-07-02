"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Cart.jsx":
/*!*****************************!*\
  !*** ./components/Cart.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Cart = () => {\n  _s();\n\n  const cartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const {\n    totalPrice,\n    totalQuantities,\n    cartItems,\n    setShowCart\n  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"cart-wrapper\",\n    ref: cartRef\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"cart-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"cart-heading\",\n    onClick: () => setShowCart(false)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineLeft, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"heading\"\n  }, \"Your Cart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"cart-num-items\"\n  }, \"(\", totalQuantities, \" items)\")), cartItems.length < 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"empty-cart\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineShopping, {\n    size: 150\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Your shopping bag is empty\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n    href: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    onClick: () => setShowCart(false),\n    className: \"btn\"\n  }, \"Continue shopping\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-container\"\n  }, cartItems.length >= 1 && cartItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product\",\n    key: item._id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(item?.image[0]),\n    className: \"cart-product-image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"item-desc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex top\"\n  })))))));\n};\n\n_s(Cart, \"glBdMOcyVOAvnhDDU2pyfQ64IRw=\", false, function () {\n  return [_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext];\n});\n\n_c = Cart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\n\nvar _c;\n\n$RefreshReg$(_c, \"Cart\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNVyxJQUFJLEdBQUcsTUFBTTtBQUFBOztBQUNqQixRQUFNQyxPQUFPLEdBQUdYLDZDQUFNLEVBQXRCO0FBQ0EsUUFBTTtBQUFDWSxJQUFBQSxVQUFEO0FBQVlDLElBQUFBLGVBQVo7QUFBNEJDLElBQUFBLFNBQTVCO0FBQXNDQyxJQUFBQTtBQUF0QyxNQUFxRFAsc0VBQWUsRUFBMUU7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLE9BQUcsRUFBRUc7QUFBbkMsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQyxjQUFoQztBQUErQyxXQUFPLEVBQUUsTUFBSUksV0FBVyxDQUFDLEtBQUQ7QUFBdkUsa0JBQ0UsMkRBQUMseURBQUQsT0FERixlQUVFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLGlCQUZGLGVBR0U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsVUFBbUNGLGVBQW5DLFlBSEYsQ0FERixFQVFHQyxTQUFTLENBQUNFLE1BQVYsR0FBbUIsQ0FBbkIsaUJBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwyREFBQyw2REFBRDtBQUFtQixRQUFJLEVBQUU7QUFBekIsSUFERixlQUVFLG9HQUZGLGVBR0UsMkRBQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxrQkFDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRSxNQUFLRCxXQUFXLENBQUMsS0FBRCxDQUEvQztBQUF3RCxhQUFTLEVBQUM7QUFBbEUseUJBREYsQ0FIRixDQVRKLGVBbUJFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0QsU0FBUyxDQUFDRSxNQUFWLElBQW9CLENBQXBCLElBQXlCRixTQUFTLENBQUNHLEdBQVYsQ0FBZUMsSUFBRCxpQkFDdEM7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUF5QixPQUFHLEVBQUVBLElBQUksQ0FBQ0M7QUFBbkMsa0JBQ0U7QUFBSyxPQUFHLEVBQUVWLG1EQUFNLENBQUNTLElBQUksRUFBRUUsS0FBTixDQUFZLENBQVosQ0FBRCxDQUFoQjtBQUFrQyxhQUFTLEVBQUM7QUFBNUMsSUFERixlQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURGLENBRkYsQ0FEd0IsQ0FENUIsQ0FuQkYsQ0FERixDQURGO0FBeUNELENBOUNEOztHQUFNVjtVQUV1REY7OztLQUZ2REU7QUFnRE4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzeD9hMmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVNaW51cyxBaU91dGxpbmVQbHVzLEFpT3V0bGluZUxlZnQsQWlPdXRsaW5lU2hvcHBpbmcgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7VGlEZWxldGVPdXRsaW5lfSBmcm9tICdyZWFjdC1pY29ucy90aSc7XHJcbmltcG9ydCB0b2FzdHIgZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuXHJcbmltcG9ydCB7dXNlU3RhdGVDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L1N0YXRlQ29udGV4dCc7XHJcbmltcG9ydCB7IHVybEZvciB9IGZyb20gJy4uL2xpYi9jbGllbnQnO1xyXG5cclxuY29uc3QgQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCBjYXJ0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qge3RvdGFsUHJpY2UsdG90YWxRdWFudGl0aWVzLGNhcnRJdGVtcyxzZXRTaG93Q2FydH0gPSB1c2VTdGF0ZUNvbnRleHQoKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtd3JhcHBlclwiIHJlZj17Y2FydFJlZn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1jb250YWluZXJcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjYXJ0LWhlYWRpbmdcIiBvbkNsaWNrPXsoKT0+c2V0U2hvd0NhcnQoZmFsc2UpfT5cclxuICAgICAgICAgIDxBaU91dGxpbmVMZWZ0Lz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmdcIj5Zb3VyIENhcnQ8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LW51bS1pdGVtc1wiPih7dG90YWxRdWFudGl0aWVzfSBpdGVtcyk8L3NwYW4+XHJcblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA8IDEgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1jYXJ0XCI+XHJcbiAgICAgICAgICAgIDxBaU91dGxpbmVTaG9wcGluZyBzaXplPXsxNTB9Lz5cclxuICAgICAgICAgICAgPGgzPllvdXIgc2hvcHBpbmcgYmFnIGlzIGVtcHR5PC9oMz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+IHNldFNob3dDYXJ0KGZhbHNlKX0gY2xhc3NOYW1lPVwiYnRuXCI+Q29udGludWUgc2hvcHBpbmc8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250YWluZXJcIj5cclxuICAgICAgICAgIHtjYXJ0SXRlbXMubGVuZ3RoID49IDEgJiYgY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIiBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKGl0ZW0/LmltYWdlWzBdKX0gY2xhc3NOYW1lPVwiY2FydC1wcm9kdWN0LWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiTGluayIsIkFpT3V0bGluZU1pbnVzIiwiQWlPdXRsaW5lUGx1cyIsIkFpT3V0bGluZUxlZnQiLCJBaU91dGxpbmVTaG9wcGluZyIsIlRpRGVsZXRlT3V0bGluZSIsInRvYXN0ciIsInVzZVN0YXRlQ29udGV4dCIsInVybEZvciIsIkNhcnQiLCJjYXJ0UmVmIiwidG90YWxQcmljZSIsInRvdGFsUXVhbnRpdGllcyIsImNhcnRJdGVtcyIsInNldFNob3dDYXJ0IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsIl9pZCIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cart.jsx\n");

/***/ })

});