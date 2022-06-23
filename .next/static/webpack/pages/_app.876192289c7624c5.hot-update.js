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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nconst StateContext = ({\n  children\n}) => {\n  _s();\n\n  const [showCart, setShowCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [totalQuantities, setTotalQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n\n  const onAdd = (product, quantity) => {\n    const checkProductInCart = cartItems.find(item => item._id === product._id);\n\n    if (checkProductInCart) {\n      setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity);\n      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity);\n      const updateCartItems = cartItems.map(cartProduct => {\n        if (cartProduct._id === product._id) return { ...cartProduct,\n          quantity: cartProduct.quantity + quantity\n        };\n      });\n    }\n  };\n\n  const incQty = () => {\n    setQty(prevQty => prevQty + 1);\n  };\n\n  const decQty = () => {\n    setQty(prevQty => {\n      if (prevQty - 1 < 1) return 1;\n      return prevQty - 1;\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {\n    value: {\n      showCart,\n      cartItems,\n      totalPrice,\n      totalQuantities,\n      qty,\n      incQty,\n      decQty\n    }\n  }, children);\n};\n\n_s(StateContext, \"frUr7JsGsRdPBmCR+GcCECp4RIg=\");\n\n_c = StateContext;\nconst useStateContext = () => {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n};\n\n_s2(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"StateContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLE1BQU1NLE9BQU8sZ0JBQUdMLG9EQUFhLEVBQTdCO0FBR08sTUFBTU0sWUFBWSxHQUFHLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQWU7QUFBQTs7QUFDdkMsUUFBTSxDQUFDQyxRQUFELEVBQVVDLFdBQVYsSUFBeUJQLCtDQUFRLENBQUMsS0FBRCxDQUF2QztBQUNBLFFBQU0sQ0FBQ1EsU0FBRCxFQUFXQyxZQUFYLElBQTJCVCwrQ0FBUSxFQUF6QztBQUNBLFFBQU0sQ0FBQ1UsVUFBRCxFQUFZQyxhQUFaLElBQTZCWCwrQ0FBUSxFQUEzQztBQUNBLFFBQU0sQ0FBQ1ksZUFBRCxFQUFpQkMsa0JBQWpCLElBQXVDYiwrQ0FBUSxFQUFyRDtBQUNBLFFBQU0sQ0FBQ2MsR0FBRCxFQUFLQyxNQUFMLElBQWVmLCtDQUFRLENBQUMsQ0FBRCxDQUE3Qjs7QUFFQSxRQUFNZ0IsS0FBSyxHQUFHLENBQUNDLE9BQUQsRUFBU0MsUUFBVCxLQUFxQjtBQUMvQixVQUFNQyxrQkFBa0IsR0FBR1gsU0FBUyxDQUFDWSxJQUFWLENBQWdCQyxJQUFELElBQVVBLElBQUksQ0FBQ0MsR0FBTCxLQUFhTCxPQUFPLENBQUNLLEdBQTlDLENBQTNCOztBQUVBLFFBQUdILGtCQUFILEVBQXNCO0FBQ2xCUixNQUFBQSxhQUFhLENBQUVZLGNBQUQsSUFBb0JBLGNBQWMsR0FBR04sT0FBTyxDQUFDTyxLQUFSLEdBQWdCTixRQUF0RCxDQUFiO0FBQ0FMLE1BQUFBLGtCQUFrQixDQUFFWSxtQkFBRCxJQUF5QkEsbUJBQW1CLEdBQUdQLFFBQWhELENBQWxCO0FBRUEsWUFBTVEsZUFBZSxHQUFHbEIsU0FBUyxDQUFDbUIsR0FBVixDQUFlQyxXQUFELElBQWlCO0FBQ25ELFlBQUdBLFdBQVcsQ0FBQ04sR0FBWixLQUFvQkwsT0FBTyxDQUFDSyxHQUEvQixFQUFvQyxPQUFNLEVBQ3RDLEdBQUdNLFdBRG1DO0FBRXRDVixVQUFBQSxRQUFRLEVBQUVVLFdBQVcsQ0FBQ1YsUUFBWixHQUF1QkE7QUFGSyxTQUFOO0FBSXZDLE9BTHVCLENBQXhCO0FBTUg7QUFDSixHQWREOztBQWdCQSxRQUFNVyxNQUFNLEdBQUcsTUFBSztBQUNoQmQsSUFBQUEsTUFBTSxDQUFFZSxPQUFELElBQVdBLE9BQU8sR0FBRyxDQUF0QixDQUFOO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxNQUFNLEdBQUcsTUFBSztBQUNoQmhCLElBQUFBLE1BQU0sQ0FBRWUsT0FBRCxJQUFhO0FBQ2hCLFVBQUdBLE9BQU8sR0FBRSxDQUFULEdBQWEsQ0FBaEIsRUFBbUIsT0FBTyxDQUFQO0FBRW5CLGFBQU9BLE9BQU8sR0FBRyxDQUFqQjtBQUNILEtBSkssQ0FBTjtBQUtILEdBTkQ7O0FBUUEsc0JBQ0ksMkRBQUMsT0FBRCxDQUFTLFFBQVQ7QUFDSSxTQUFLLEVBQUU7QUFDSHhCLE1BQUFBLFFBREc7QUFFSEUsTUFBQUEsU0FGRztBQUdIRSxNQUFBQSxVQUhHO0FBSUhFLE1BQUFBLGVBSkc7QUFLSEUsTUFBQUEsR0FMRztBQU1IZSxNQUFBQSxNQU5HO0FBT0hFLE1BQUFBO0FBUEc7QUFEWCxLQVdLMUIsUUFYTCxDQURKO0FBZUgsQ0FsRE07O0dBQU1EOztLQUFBQTtBQXFETixNQUFNNEIsZUFBZSxHQUFHO0FBQUE7O0FBQUEsU0FBTWpDLGlEQUFVLENBQUNJLE9BQUQsQ0FBaEI7QUFBQSxDQUF4Qjs7SUFBTTZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvU3RhdGVDb250ZXh0LmpzP2IxYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCx1c2VDb250ZXh0LHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHt0b2FzdH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9ICh7Y2hpbGRyZW59KSA9PntcclxuICAgIGNvbnN0IFtzaG93Q2FydCxzZXRTaG93Q2FydF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2FydEl0ZW1zLHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3RvdGFsUHJpY2Usc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3RvdGFsUXVhbnRpdGllcyxzZXRUb3RhbFF1YW50aXRpZXNdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtxdHksc2V0UXR5XSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnN0IG9uQWRkID0gKHByb2R1Y3QscXVhbnRpdHkpID0+e1xyXG4gICAgICAgIGNvbnN0IGNoZWNrUHJvZHVjdEluQ2FydCA9IGNhcnRJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gcHJvZHVjdC5faWQpO1xyXG5cclxuICAgICAgICBpZihjaGVja1Byb2R1Y3RJbkNhcnQpe1xyXG4gICAgICAgICAgICBzZXRUb3RhbFByaWNlKChwcmV2VG90YWxQcmljZSkgPT4gcHJldlRvdGFsUHJpY2UgKyBwcm9kdWN0LnByaWNlICogcXVhbnRpdHkpO1xyXG4gICAgICAgICAgICBzZXRUb3RhbFF1YW50aXRpZXMoKHByZXZUb3RhbFF1YW50aXRpZXMpID0+IHByZXZUb3RhbFF1YW50aXRpZXMgKyBxdWFudGl0eSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVDYXJ0SXRlbXMgPSBjYXJ0SXRlbXMubWFwKChjYXJ0UHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoY2FydFByb2R1Y3QuX2lkID09PSBwcm9kdWN0Ll9pZCkgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNhcnRQcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBjYXJ0UHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluY1F0eSA9ICgpID0+e1xyXG4gICAgICAgIHNldFF0eSgocHJldlF0eSk9PnByZXZRdHkgKyAxICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGRlY1F0eSA9ICgpID0+e1xyXG4gICAgICAgIHNldFF0eSgocHJldlF0eSkgPT4ge1xyXG4gICAgICAgICAgICBpZihwcmV2UXR5IC0xIDwgMSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gcHJldlF0eSAtIDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgc2hvd0NhcnQsXHJcbiAgICAgICAgICAgICAgICBjYXJ0SXRlbXMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgdG90YWxRdWFudGl0aWVzLFxyXG4gICAgICAgICAgICAgICAgcXR5LFxyXG4gICAgICAgICAgICAgICAgaW5jUXR5LFxyXG4gICAgICAgICAgICAgICAgZGVjUXR5XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2FzdCIsIkNvbnRleHQiLCJTdGF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsInNob3dDYXJ0Iiwic2V0U2hvd0NhcnQiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInRvdGFsUXVhbnRpdGllcyIsInNldFRvdGFsUXVhbnRpdGllcyIsInF0eSIsInNldFF0eSIsIm9uQWRkIiwicHJvZHVjdCIsInF1YW50aXR5IiwiY2hlY2tQcm9kdWN0SW5DYXJ0IiwiZmluZCIsIml0ZW0iLCJfaWQiLCJwcmV2VG90YWxQcmljZSIsInByaWNlIiwicHJldlRvdGFsUXVhbnRpdGllcyIsInVwZGF0ZUNhcnRJdGVtcyIsIm1hcCIsImNhcnRQcm9kdWN0IiwiaW5jUXR5IiwicHJldlF0eSIsImRlY1F0eSIsInVzZVN0YXRlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});