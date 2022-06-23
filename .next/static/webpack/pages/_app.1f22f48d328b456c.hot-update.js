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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nconst StateContext = ({\n  children\n}) => {\n  _s();\n\n  const [showCart, setShowCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [totalQuantities, setTotalQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n\n  const onAdd = (product, quantity) => {\n    const checkProductInCart = cartItems.find(item => item._id === product._id);\n    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity);\n    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity); //When you try to add a item that already exists in the cart\n\n    if (checkProductInCart) {\n      const updateCartItems = cartItems.map(cartProduct => {\n        if (cartProduct._id === product._id) return { ...cartProduct,\n          quantity: cartProduct.quantity + quantity\n        };\n      });\n      setCartItems(updateCartItems);\n    } else {\n      product.quantity = quantity;\n      setCartItems(...cartItems, { ...product\n      });\n    }\n\n    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${qty} ${product.name} added to the cart`);\n  };\n\n  const incQty = () => {\n    setQty(prevQty => prevQty + 1);\n  };\n\n  const decQty = () => {\n    setQty(prevQty => {\n      if (prevQty - 1 < 1) return 1;\n      return prevQty - 1;\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {\n    value: {\n      showCart,\n      cartItems,\n      totalPrice,\n      totalQuantities,\n      qty,\n      incQty,\n      decQty,\n      onAdd\n    }\n  }, children);\n};\n\n_s(StateContext, \"frUr7JsGsRdPBmCR+GcCECp4RIg=\");\n\n_c = StateContext;\nconst useStateContext = () => {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n};\n\n_s2(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"StateContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUFBLENBQXhCOztJQUFNK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9TdGF0ZUNvbnRleHQuanM/YjFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0LHVzZUNvbnRleHQsdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge3RvYXN0fSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xyXG5cclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gKHtjaGlsZHJlbn0pID0+e1xyXG4gICAgY29uc3QgW3Nob3dDYXJ0LHNldFNob3dDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXJ0SXRlbXMsc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbdG90YWxQcmljZSxzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbdG90YWxRdWFudGl0aWVzLHNldFRvdGFsUXVhbnRpdGllc10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3F0eSxzZXRRdHldID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgY29uc3Qgb25BZGQgPSAocHJvZHVjdCxxdWFudGl0eSkgPT57XHJcbiAgICAgICAgY29uc3QgY2hlY2tQcm9kdWN0SW5DYXJ0ID0gY2FydEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBwcm9kdWN0Ll9pZCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHNldFRvdGFsUHJpY2UoKHByZXZUb3RhbFByaWNlKSA9PiBwcmV2VG90YWxQcmljZSArIHByb2R1Y3QucHJpY2UgKiBxdWFudGl0eSk7XHJcbiAgICAgICAgc2V0VG90YWxRdWFudGl0aWVzKChwcmV2VG90YWxRdWFudGl0aWVzKSA9PiBwcmV2VG90YWxRdWFudGl0aWVzICsgcXVhbnRpdHkpO1xyXG4gICAgICAgIC8vV2hlbiB5b3UgdHJ5IHRvIGFkZCBhIGl0ZW0gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgY2FydFxyXG4gICAgICAgIGlmKGNoZWNrUHJvZHVjdEluQ2FydCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUNhcnRJdGVtcyA9IGNhcnRJdGVtcy5tYXAoKGNhcnRQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjYXJ0UHJvZHVjdC5faWQgPT09IHByb2R1Y3QuX2lkKSByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY2FydFByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IGNhcnRQcm9kdWN0LnF1YW50aXR5ICsgcXVhbnRpdHlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVDYXJ0SXRlbXMpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9kdWN0LnF1YW50aXR5ID0gcXVhbnRpdHk7XHJcblxyXG4gICAgICAgICAgICBzZXRDYXJ0SXRlbXMoLi4uY2FydEl0ZW1zLCB7Li4ucHJvZHVjdH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgJHtxdHl9ICR7cHJvZHVjdC5uYW1lfSBhZGRlZCB0byB0aGUgY2FydGApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmNRdHkgPSAoKSA9PntcclxuICAgICAgICBzZXRRdHkoKHByZXZRdHkpPT5wcmV2UXR5ICsgMSApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBkZWNRdHkgPSAoKSA9PntcclxuICAgICAgICBzZXRRdHkoKHByZXZRdHkpID0+IHtcclxuICAgICAgICAgICAgaWYocHJldlF0eSAtMSA8IDEpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZRdHkgLSAxO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIHNob3dDYXJ0LFxyXG4gICAgICAgICAgICAgICAgY2FydEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsUXVhbnRpdGllcyxcclxuICAgICAgICAgICAgICAgIHF0eSxcclxuICAgICAgICAgICAgICAgIGluY1F0eSxcclxuICAgICAgICAgICAgICAgIGRlY1F0eSxcclxuICAgICAgICAgICAgICAgIG9uQWRkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2FzdCIsIkNvbnRleHQiLCJTdGF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsInNob3dDYXJ0Iiwic2V0U2hvd0NhcnQiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInRvdGFsUXVhbnRpdGllcyIsInNldFRvdGFsUXVhbnRpdGllcyIsInF0eSIsInNldFF0eSIsIm9uQWRkIiwicHJvZHVjdCIsInF1YW50aXR5IiwiY2hlY2tQcm9kdWN0SW5DYXJ0IiwiZmluZCIsIml0ZW0iLCJfaWQiLCJwcmV2VG90YWxQcmljZSIsInByaWNlIiwicHJldlRvdGFsUXVhbnRpdGllcyIsInVwZGF0ZUNhcnRJdGVtcyIsIm1hcCIsImNhcnRQcm9kdWN0Iiwic3VjY2VzcyIsIm5hbWUiLCJpbmNRdHkiLCJwcmV2UXR5IiwiZGVjUXR5IiwidXNlU3RhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});