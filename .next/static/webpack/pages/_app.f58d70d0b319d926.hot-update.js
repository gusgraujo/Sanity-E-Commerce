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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nconst StateContext = ({\n  children\n}) => {\n  _s();\n\n  const [showCart, setShowCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [totalQuantities, setTotalQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n\n  const onAdd = (product, quantity) => {\n    const checkProductInCart = cartItems.find(item => item._id === product._id);\n  };\n\n  const incQty = () => {\n    setQty(prevQty => prevQty + 1);\n  };\n\n  const decQty = () => {\n    setQty(prevQty => {\n      if (prevQty - 1 < 1) return 1;\n      return prevQty - 1;\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {\n    value: {\n      showCart,\n      cartItems,\n      totalPrice,\n      totalQuantities,\n      qty,\n      incQty,\n      decQty\n    }\n  }, children);\n};\n\n_s(StateContext, \"frUr7JsGsRdPBmCR+GcCECp4RIg=\");\n\n_c = StateContext;\nconst useStateContext = () => {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n};\n\n_s2(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"StateContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLE1BQU1NLE9BQU8sZ0JBQUdMLG9EQUFhLEVBQTdCO0FBR08sTUFBTU0sWUFBWSxHQUFHLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQWU7QUFBQTs7QUFDdkMsUUFBTSxDQUFDQyxRQUFELEVBQVVDLFdBQVYsSUFBeUJQLCtDQUFRLENBQUMsS0FBRCxDQUF2QztBQUNBLFFBQU0sQ0FBQ1EsU0FBRCxFQUFXQyxZQUFYLElBQTJCVCwrQ0FBUSxFQUF6QztBQUNBLFFBQU0sQ0FBQ1UsVUFBRCxFQUFZQyxhQUFaLElBQTZCWCwrQ0FBUSxFQUEzQztBQUNBLFFBQU0sQ0FBQ1ksZUFBRCxFQUFpQkMsa0JBQWpCLElBQXVDYiwrQ0FBUSxFQUFyRDtBQUNBLFFBQU0sQ0FBQ2MsR0FBRCxFQUFLQyxNQUFMLElBQWVmLCtDQUFRLENBQUMsQ0FBRCxDQUE3Qjs7QUFFQSxRQUFNZ0IsS0FBSyxHQUFHLENBQUNDLE9BQUQsRUFBU0MsUUFBVCxLQUFxQjtBQUMvQixVQUFNQyxrQkFBa0IsR0FBR1gsU0FBUyxDQUFDWSxJQUFWLENBQWdCQyxJQUFELElBQVVBLElBQUksQ0FBQ0MsR0FBTCxLQUFhTCxPQUFPLENBQUNLLEdBQTlDLENBQTNCO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxNQUFNLEdBQUcsTUFBSztBQUNoQlIsSUFBQUEsTUFBTSxDQUFFUyxPQUFELElBQVdBLE9BQU8sR0FBRyxDQUF0QixDQUFOO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxNQUFNLEdBQUcsTUFBSztBQUNoQlYsSUFBQUEsTUFBTSxDQUFFUyxPQUFELElBQWE7QUFDaEIsVUFBR0EsT0FBTyxHQUFFLENBQVQsR0FBYSxDQUFoQixFQUFtQixPQUFPLENBQVA7QUFFbkIsYUFBT0EsT0FBTyxHQUFHLENBQWpCO0FBQ0gsS0FKSyxDQUFOO0FBS0gsR0FORDs7QUFRQSxzQkFDSSwyREFBQyxPQUFELENBQVMsUUFBVDtBQUNJLFNBQUssRUFBRTtBQUNIbEIsTUFBQUEsUUFERztBQUVIRSxNQUFBQSxTQUZHO0FBR0hFLE1BQUFBLFVBSEc7QUFJSEUsTUFBQUEsZUFKRztBQUtIRSxNQUFBQSxHQUxHO0FBTUhTLE1BQUFBLE1BTkc7QUFPSEUsTUFBQUE7QUFQRztBQURYLEtBV0twQixRQVhMLENBREo7QUFlSCxDQXRDTTs7R0FBTUQ7O0tBQUFBO0FBeUNOLE1BQU1zQixlQUFlLEdBQUc7QUFBQTs7QUFBQSxTQUFNM0IsaURBQVUsQ0FBQ0ksT0FBRCxDQUFoQjtBQUFBLENBQXhCOztJQUFNdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9TdGF0ZUNvbnRleHQuanM/YjFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0LHVzZUNvbnRleHQsdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge3RvYXN0fSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xyXG5cclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gKHtjaGlsZHJlbn0pID0+e1xyXG4gICAgY29uc3QgW3Nob3dDYXJ0LHNldFNob3dDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXJ0SXRlbXMsc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbdG90YWxQcmljZSxzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbdG90YWxRdWFudGl0aWVzLHNldFRvdGFsUXVhbnRpdGllc10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3F0eSxzZXRRdHldID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgY29uc3Qgb25BZGQgPSAocHJvZHVjdCxxdWFudGl0eSkgPT57XHJcbiAgICAgICAgY29uc3QgY2hlY2tQcm9kdWN0SW5DYXJ0ID0gY2FydEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBwcm9kdWN0Ll9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5jUXR5ID0gKCkgPT57XHJcbiAgICAgICAgc2V0UXR5KChwcmV2UXR5KT0+cHJldlF0eSArIDEgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZGVjUXR5ID0gKCkgPT57XHJcbiAgICAgICAgc2V0UXR5KChwcmV2UXR5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByZXZRdHkgLTEgPCAxKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2UXR5IC0gMTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBzaG93Q2FydCxcclxuICAgICAgICAgICAgICAgIGNhcnRJdGVtcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFF1YW50aXRpZXMsXHJcbiAgICAgICAgICAgICAgICBxdHksXHJcbiAgICAgICAgICAgICAgICBpbmNRdHksXHJcbiAgICAgICAgICAgICAgICBkZWNRdHlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RhdGVDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRvYXN0IiwiQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsImNoaWxkcmVuIiwic2hvd0NhcnQiLCJzZXRTaG93Q2FydCIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwidG90YWxRdWFudGl0aWVzIiwic2V0VG90YWxRdWFudGl0aWVzIiwicXR5Iiwic2V0UXR5Iiwib25BZGQiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJjaGVja1Byb2R1Y3RJbkNhcnQiLCJmaW5kIiwiaXRlbSIsIl9pZCIsImluY1F0eSIsInByZXZRdHkiLCJkZWNRdHkiLCJ1c2VTdGF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});