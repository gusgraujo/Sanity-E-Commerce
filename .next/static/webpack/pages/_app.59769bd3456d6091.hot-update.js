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

/***/ "./context/StateContext.js":
/*!*********************************!*\
  !*** ./context/StateContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\n\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nconst StateContext = ({\n  children\n}) => {\n  _s();\n\n  const [showCart, setShowCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [totalQuantities, setTotalQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {\n    value: {\n      showCart,\n      cartItems,\n      totalPrice,\n      totalQuantities,\n      qty\n    }\n  }, children);\n};\n\n_s(StateContext, \"frUr7JsGsRdPBmCR+GcCECp4RIg=\");\n\n_c = StateContext;\n\nvar _c;\n\n$RefreshReg$(_c, \"StateContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFFQSxNQUFNTSxPQUFPLGdCQUFHTCxvREFBYSxFQUE3QjtBQUdPLE1BQU1NLFlBQVksR0FBRyxDQUFDO0FBQUNDLEVBQUFBO0FBQUQsQ0FBRCxLQUFlO0FBQUE7O0FBQ3ZDLFFBQU0sQ0FBQ0MsUUFBRCxFQUFVQyxXQUFWLElBQXlCUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdkM7QUFDQSxRQUFNLENBQUNRLFNBQUQsRUFBV0MsWUFBWCxJQUEyQlQsK0NBQVEsRUFBekM7QUFDQSxRQUFNLENBQUNVLFVBQUQsRUFBWUMsYUFBWixJQUE2QlgsK0NBQVEsRUFBM0M7QUFDQSxRQUFNLENBQUNZLGVBQUQsRUFBaUJDLGtCQUFqQixJQUF1Q2IsK0NBQVEsRUFBckQ7QUFDQSxRQUFNLENBQUNjLEdBQUQsRUFBS0MsTUFBTCxJQUFlZiwrQ0FBUSxDQUFDLENBQUQsQ0FBN0I7QUFHQSxzQkFDSSwyREFBQyxPQUFELENBQVMsUUFBVDtBQUNJLFNBQUssRUFBRTtBQUNITSxNQUFBQSxRQURHO0FBRUhFLE1BQUFBLFNBRkc7QUFHSEUsTUFBQUEsVUFIRztBQUlIRSxNQUFBQSxlQUpHO0FBS0hFLE1BQUFBO0FBTEc7QUFEWCxLQVNLVCxRQVRMLENBREo7QUFhSCxDQXJCTTs7R0FBTUQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvU3RhdGVDb250ZXh0LmpzP2IxYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCx1c2VDb250ZXh0LHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHt0b2FzdH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9ICh7Y2hpbGRyZW59KSA9PntcclxuICAgIGNvbnN0IFtzaG93Q2FydCxzZXRTaG93Q2FydF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2FydEl0ZW1zLHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3RvdGFsUHJpY2Usc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3RvdGFsUXVhbnRpdGllcyxzZXRUb3RhbFF1YW50aXRpZXNdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtxdHksc2V0UXR5XSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBzaG93Q2FydCxcclxuICAgICAgICAgICAgICAgIGNhcnRJdGVtcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFF1YW50aXRpZXMsXHJcbiAgICAgICAgICAgICAgICBxdHlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidG9hc3QiLCJDb250ZXh0IiwiU3RhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJzaG93Q2FydCIsInNldFNob3dDYXJ0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwidG90YWxQcmljZSIsInNldFRvdGFsUHJpY2UiLCJ0b3RhbFF1YW50aXRpZXMiLCJzZXRUb3RhbFF1YW50aXRpZXMiLCJxdHkiLCJzZXRRdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});