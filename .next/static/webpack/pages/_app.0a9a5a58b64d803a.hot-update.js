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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nconst StateContext = ({\n  children\n}) => {\n  _s();\n\n  const [showCart, setShowCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [totalQuantities, setTotalQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  let foundProduct;\n  let index;\n\n  const onAdd = (product, quantity) => {\n    const checkProductInCart = cartItems.find(item => item._id === product._id);\n    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity);\n    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity); //When you try to add a item that already exists in the cart\n\n    if (checkProductInCart) {\n      const updateCartItems = cartItems.map(cartProduct => {\n        if (cartProduct._id === product._id) return { ...cartProduct,\n          quantity: cartProduct.quantity + quantity\n        };\n      });\n      setCartItems(updateCartItems);\n    } else {\n      product.quantity = quantity;\n      setCartItems(...cartItems, { ...product\n      });\n    }\n\n    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${qty} ${product.name} added to the cart`);\n  };\n\n  const toggleCartItemQuantity = (id, value) => {\n    foundProduct = cartItem.find(item => item._id === product._id);\n  };\n\n  const incQty = () => {\n    setQty(prevQty => prevQty + 1);\n  };\n\n  const decQty = () => {\n    setQty(prevQty => {\n      if (prevQty - 1 < 1) return 1;\n      return prevQty - 1;\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {\n    value: {\n      showCart,\n      setShowCart,\n      cartItems,\n      totalPrice,\n      totalQuantities,\n      qty,\n      incQty,\n      decQty,\n      onAdd\n    }\n  }, children);\n};\n\n_s(StateContext, \"lTN9mPmtXpsm72zCYW+oCcRZHaw=\");\n\n_c = StateContext;\nconst useStateContext = () => {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n};\n\n_s2(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"StateContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUhDLE1BQUFBLFdBRkc7QUFHSEMsTUFBQUEsU0FIRztBQUlIRSxNQUFBQSxVQUpHO0FBS0hFLE1BQUFBLGVBTEc7QUFNSEUsTUFBQUEsR0FORztBQU9IdUIsTUFBQUEsTUFQRztBQVFIRSxNQUFBQSxNQVJHO0FBU0hyQixNQUFBQTtBQVRHO0FBRFgsS0FhS2IsUUFiTCxDQURKO0FBaUJILENBdEVNOztHQUFNRDs7S0FBQUE7QUF5RU4sTUFBTW9DLGVBQWUsR0FBRztBQUFBOztBQUFBLFNBQU16QyxpREFBVSxDQUFDSSxPQUFELENBQWhCO0FBQUEsQ0FBeEI7O0lBQU1xQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcz9iMWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsdXNlQ29udGV4dCx1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcblxyXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0ZUNvbnRleHQgPSAoe2NoaWxkcmVufSkgPT57XHJcbiAgICBjb25zdCBbc2hvd0NhcnQsIHNldFNob3dDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG90YWxQcmljZSwgc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0b3RhbFF1YW50aXRpZXMsIHNldFRvdGFsUXVhbnRpdGllc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtxdHksIHNldFF0eV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBsZXQgZm91bmRQcm9kdWN0O1xyXG4gICAgbGV0IGluZGV4IDtcclxuXHJcbiAgICBjb25zdCBvbkFkZCA9IChwcm9kdWN0LHF1YW50aXR5KSA9PntcclxuICAgICAgICBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSBjYXJ0SXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgc2V0VG90YWxQcmljZSgocHJldlRvdGFsUHJpY2UpID0+IHByZXZUb3RhbFByaWNlICsgcHJvZHVjdC5wcmljZSAqIHF1YW50aXR5KTtcclxuICAgICAgICBzZXRUb3RhbFF1YW50aXRpZXMoKHByZXZUb3RhbFF1YW50aXRpZXMpID0+IHByZXZUb3RhbFF1YW50aXRpZXMgKyBxdWFudGl0eSk7XHJcbiAgICAgICAgLy9XaGVuIHlvdSB0cnkgdG8gYWRkIGEgaXRlbSB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBjYXJ0XHJcbiAgICAgICAgaWYoY2hlY2tQcm9kdWN0SW5DYXJ0KXtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlQ2FydEl0ZW1zID0gY2FydEl0ZW1zLm1hcCgoY2FydFByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNhcnRQcm9kdWN0Ll9pZCA9PT0gcHJvZHVjdC5faWQpIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5jYXJ0UHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogY2FydFByb2R1Y3QucXVhbnRpdHkgKyBxdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZUNhcnRJdGVtcyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHkgPSBxdWFudGl0eTtcclxuXHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtcyguLi5jYXJ0SXRlbXMsIHsuLi5wcm9kdWN0fSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0b2FzdC5zdWNjZXNzKGAke3F0eX0gJHtwcm9kdWN0Lm5hbWV9IGFkZGVkIHRvIHRoZSBjYXJ0YCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUNhcnRJdGVtUXVhbnRpdHkgPSAoaWQsdmFsdWUpID0+e1xyXG4gICAgICAgIGZvdW5kUHJvZHVjdCA9IGNhcnRJdGVtLmZpbmQoKGl0ZW0pPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmNRdHkgPSAoKSA9PntcclxuICAgICAgICBzZXRRdHkoKHByZXZRdHkpPT5wcmV2UXR5ICsgMSApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBkZWNRdHkgPSAoKSA9PntcclxuICAgICAgICBzZXRRdHkoKHByZXZRdHkpID0+IHtcclxuICAgICAgICAgICAgaWYocHJldlF0eSAtMSA8IDEpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZRdHkgLSAxO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIHNob3dDYXJ0LFxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0NhcnQsXHJcbiAgICAgICAgICAgICAgICBjYXJ0SXRlbXMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgdG90YWxRdWFudGl0aWVzLFxyXG4gICAgICAgICAgICAgICAgcXR5LFxyXG4gICAgICAgICAgICAgICAgaW5jUXR5LFxyXG4gICAgICAgICAgICAgICAgZGVjUXR5LFxyXG4gICAgICAgICAgICAgICAgb25BZGRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RhdGVDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRvYXN0IiwiQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsImNoaWxkcmVuIiwic2hvd0NhcnQiLCJzZXRTaG93Q2FydCIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwidG90YWxRdWFudGl0aWVzIiwic2V0VG90YWxRdWFudGl0aWVzIiwicXR5Iiwic2V0UXR5IiwiZm91bmRQcm9kdWN0IiwiaW5kZXgiLCJvbkFkZCIsInByb2R1Y3QiLCJxdWFudGl0eSIsImNoZWNrUHJvZHVjdEluQ2FydCIsImZpbmQiLCJpdGVtIiwiX2lkIiwicHJldlRvdGFsUHJpY2UiLCJwcmljZSIsInByZXZUb3RhbFF1YW50aXRpZXMiLCJ1cGRhdGVDYXJ0SXRlbXMiLCJtYXAiLCJjYXJ0UHJvZHVjdCIsInN1Y2Nlc3MiLCJuYW1lIiwidG9nZ2xlQ2FydEl0ZW1RdWFudGl0eSIsImlkIiwidmFsdWUiLCJjYXJ0SXRlbSIsImluY1F0eSIsInByZXZRdHkiLCJkZWNRdHkiLCJ1c2VTdGF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});