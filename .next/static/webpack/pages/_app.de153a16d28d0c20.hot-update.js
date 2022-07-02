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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nconst StateContext = ({\n  children\n}) => {\n  _s();\n\n  const [showCart, setShowCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [totalQuantities, setTotalQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  let foundProduct;\n  let index;\n\n  const onAdd = (product, quantity) => {\n    const checkProductInCart = cartItems.find(item => item._id === product._id);\n    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity);\n    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity);\n\n    if (checkProductInCart) {\n      const updatedCartItems = cartItems.map(cartProduct => {\n        if (cartProduct._id === product._id) return { ...cartProduct,\n          quantity: cartProduct.quantity + quantity\n        };\n      });\n      setCartItems(updatedCartItems);\n    } else {\n      product.quantity = quantity;\n      setCartItems([...cartItems, { ...product\n      }]);\n    }\n\n    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${qty} ${product.name} added to the cart.`);\n  };\n\n  const toggleCartItemQuanitity = (id, value) => {\n    foundProduct = cartItems.find(item => item._id === id);\n    index = cartItems.findIndex(product => product._id === id);\n    const newCartItems = cartItems.filter(item => item._id !== id);\n\n    if (value === 'inc') {\n      setCartItems([...newCartItems, { ...foundProduct,\n        quantity: foundProduct.quantity + 1\n      }]);\n      setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price);\n      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);\n    } else if (value === 'dec') {\n      if (foundProduct.quantity > 1) {\n        setCartItems([...newCartItems, { ...foundProduct,\n          quantity: foundProduct.quantity - 1\n        }]);\n        setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price);\n        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);\n      }\n    }\n  };\n\n  const onRemove = product => {\n    foundProduct = cartItems.find(item => item._id === product._id);\n    const newCartItems = cartItems.filter(item => item._id !== product._id);\n    setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price * foundProduct.quantity);\n    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);\n    setCartItems(newCartItems);\n  };\n\n  const incQty = () => {\n    setQty(prevQty => prevQty + 1);\n  };\n\n  const decQty = () => {\n    setQty(prevQty => {\n      if (prevQty - 1 < 1) return 1;\n      return prevQty - 1;\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {\n    value: {\n      showCart,\n      setShowCart,\n      cartItems,\n      totalPrice,\n      totalQuantities,\n      qty,\n      incQty,\n      decQty,\n      onAdd,\n      toggleCartItemQuanitity,\n      onRemove\n    }\n  }, children);\n};\n\n_s(StateContext, \"lTN9mPmtXpsm72zCYW+oCcRZHaw=\");\n\n_c = StateContext;\nconst useStateContext = () => {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n};\n\n_s2(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"StateContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWxCO0FBQ0FYLElBQUFBLFlBQVksQ0FBQzRCLFlBQUQsQ0FBWjtBQUVILEdBUkQ7O0FBV0EsUUFBTUcsTUFBTSxHQUFHLE1BQUs7QUFDaEJ6QixJQUFBQSxNQUFNLENBQUUwQixPQUFELElBQVdBLE9BQU8sR0FBRyxDQUF0QixDQUFOO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxNQUFNLEdBQUcsTUFBSztBQUNoQjNCLElBQUFBLE1BQU0sQ0FBRTBCLE9BQUQsSUFBYTtBQUNoQixVQUFHQSxPQUFPLEdBQUUsQ0FBVCxHQUFhLENBQWhCLEVBQW1CLE9BQU8sQ0FBUDtBQUVuQixhQUFPQSxPQUFPLEdBQUcsQ0FBakI7QUFDSCxLQUpLLENBQU47QUFLSCxHQU5EOztBQVFBLHNCQUNJLDJEQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQ0ksU0FBSyxFQUFFO0FBQ0huQyxNQUFBQSxRQURHO0FBRUhDLE1BQUFBLFdBRkc7QUFHSEMsTUFBQUEsU0FIRztBQUlIRSxNQUFBQSxVQUpHO0FBS0hFLE1BQUFBLGVBTEc7QUFNSEUsTUFBQUEsR0FORztBQU9IMEIsTUFBQUEsTUFQRztBQVFIRSxNQUFBQSxNQVJHO0FBU0h4QixNQUFBQSxLQVRHO0FBVUhlLE1BQUFBLHVCQVZHO0FBV0hNLE1BQUFBO0FBWEc7QUFEWCxLQWVLbEMsUUFmTCxDQURKO0FBbUJILENBaEdNOztHQUFNRDs7S0FBQUE7QUFtR04sTUFBTXVDLGVBQWUsR0FBRztBQUFBOztBQUFBLFNBQU01QyxpREFBVSxDQUFDSSxPQUFELENBQWhCO0FBQUEsQ0FBeEI7O0lBQU13QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcz9iMWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsdXNlQ29udGV4dCx1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcblxyXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0ZUNvbnRleHQgPSAoe2NoaWxkcmVufSkgPT57XHJcbiAgICBjb25zdCBbc2hvd0NhcnQsIHNldFNob3dDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG90YWxQcmljZSwgc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0b3RhbFF1YW50aXRpZXMsIHNldFRvdGFsUXVhbnRpdGllc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtxdHksIHNldFF0eV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBsZXQgZm91bmRQcm9kdWN0O1xyXG4gICAgbGV0IGluZGV4IDtcclxuXHJcbiAgICBcclxuICBjb25zdCBvbkFkZCA9IChwcm9kdWN0LCBxdWFudGl0eSkgPT4ge1xyXG4gICAgICBcclxuICAgIGNvbnN0IGNoZWNrUHJvZHVjdEluQ2FydCA9IGNhcnRJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gcHJvZHVjdC5faWQpO1xyXG4gICAgXHJcbiAgICBzZXRUb3RhbFByaWNlKChwcmV2VG90YWxQcmljZSkgPT4gcHJldlRvdGFsUHJpY2UgKyBwcm9kdWN0LnByaWNlICogcXVhbnRpdHkpO1xyXG4gICAgc2V0VG90YWxRdWFudGl0aWVzKChwcmV2VG90YWxRdWFudGl0aWVzKSA9PiBwcmV2VG90YWxRdWFudGl0aWVzICsgcXVhbnRpdHkpO1xyXG4gICAgXHJcbiAgICBpZihjaGVja1Byb2R1Y3RJbkNhcnQpIHtcclxuICAgICAgY29uc3QgdXBkYXRlZENhcnRJdGVtcyA9IGNhcnRJdGVtcy5tYXAoKGNhcnRQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgaWYoY2FydFByb2R1Y3QuX2lkID09PSBwcm9kdWN0Ll9pZCkgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNhcnRQcm9kdWN0LFxyXG4gICAgICAgICAgcXVhbnRpdHk6IGNhcnRQcm9kdWN0LnF1YW50aXR5ICsgcXVhbnRpdHlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnRJdGVtcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9kdWN0LnF1YW50aXR5ID0gcXVhbnRpdHk7XHJcbiAgICAgIFxyXG4gICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtcywgeyAuLi5wcm9kdWN0IH1dKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2FzdC5zdWNjZXNzKGAke3F0eX0gJHtwcm9kdWN0Lm5hbWV9IGFkZGVkIHRvIHRoZSBjYXJ0LmApO1xyXG4gIH0gXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlQ2FydEl0ZW1RdWFuaXRpdHkgPSAoaWQsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgZm91bmRQcm9kdWN0ID0gY2FydEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBpZClcclxuICAgICAgICBpbmRleCA9IGNhcnRJdGVtcy5maW5kSW5kZXgoKHByb2R1Y3QpID0+IHByb2R1Y3QuX2lkID09PSBpZCk7XHJcbiAgICAgICAgY29uc3QgbmV3Q2FydEl0ZW1zID0gY2FydEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5faWQgIT09IGlkKVxyXG4gICAgXHJcbiAgICAgICAgaWYodmFsdWUgPT09ICdpbmMnKSB7XHJcbiAgICAgICAgICBzZXRDYXJ0SXRlbXMoWy4uLm5ld0NhcnRJdGVtcywgeyAuLi5mb3VuZFByb2R1Y3QsIHF1YW50aXR5OiBmb3VuZFByb2R1Y3QucXVhbnRpdHkgKyAxIH0gXSk7XHJcbiAgICAgICAgICBzZXRUb3RhbFByaWNlKChwcmV2VG90YWxQcmljZSkgPT4gcHJldlRvdGFsUHJpY2UgKyBmb3VuZFByb2R1Y3QucHJpY2UpXHJcbiAgICAgICAgICBzZXRUb3RhbFF1YW50aXRpZXMocHJldlRvdGFsUXVhbnRpdGllcyA9PiBwcmV2VG90YWxRdWFudGl0aWVzICsgMSlcclxuICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT09ICdkZWMnKSB7XHJcbiAgICAgICAgICBpZiAoZm91bmRQcm9kdWN0LnF1YW50aXR5ID4gMSkge1xyXG4gICAgICAgICAgICBzZXRDYXJ0SXRlbXMoWy4uLm5ld0NhcnRJdGVtcywgeyAuLi5mb3VuZFByb2R1Y3QsIHF1YW50aXR5OiBmb3VuZFByb2R1Y3QucXVhbnRpdHkgLSAxIH0gXSk7XHJcbiAgICAgICAgICAgIHNldFRvdGFsUHJpY2UoKHByZXZUb3RhbFByaWNlKSA9PiBwcmV2VG90YWxQcmljZSAtIGZvdW5kUHJvZHVjdC5wcmljZSlcclxuICAgICAgICAgICAgc2V0VG90YWxRdWFudGl0aWVzKHByZXZUb3RhbFF1YW50aXRpZXMgPT4gcHJldlRvdGFsUXVhbnRpdGllcyAtIDEpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uUmVtb3ZlID0gKHByb2R1Y3QpID0+IHtcclxuICAgICAgICBmb3VuZFByb2R1Y3QgPSBjYXJ0SXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkKTtcclxuICAgICAgICBjb25zdCBuZXdDYXJ0SXRlbXMgPSBjYXJ0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLl9pZCAhPT0gcHJvZHVjdC5faWQpO1xyXG5cclxuICAgICAgICBzZXRUb3RhbFByaWNlKChwcmV2VG90YWxQcmljZSkgPT4gcHJldlRvdGFsUHJpY2UgLSBmb3VuZFByb2R1Y3QucHJpY2UgKiBmb3VuZFByb2R1Y3QucXVhbnRpdHkpO1xyXG4gICAgICAgIHNldFRvdGFsUXVhbnRpdGllcyhwcmV2VG90YWxRdWFudGl0aWVzID0+IHByZXZUb3RhbFF1YW50aXRpZXMgLSBmb3VuZFByb2R1Y3QucXVhbnRpdHkpO1xyXG4gICAgICAgIHNldENhcnRJdGVtcyhuZXdDYXJ0SXRlbXMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaW5jUXR5ID0gKCkgPT57XHJcbiAgICAgICAgc2V0UXR5KChwcmV2UXR5KT0+cHJldlF0eSArIDEgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZGVjUXR5ID0gKCkgPT57XHJcbiAgICAgICAgc2V0UXR5KChwcmV2UXR5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByZXZRdHkgLTEgPCAxKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2UXR5IC0gMTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBzaG93Q2FydCxcclxuICAgICAgICAgICAgICAgIHNldFNob3dDYXJ0LFxyXG4gICAgICAgICAgICAgICAgY2FydEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsUXVhbnRpdGllcyxcclxuICAgICAgICAgICAgICAgIHF0eSxcclxuICAgICAgICAgICAgICAgIGluY1F0eSxcclxuICAgICAgICAgICAgICAgIGRlY1F0eSxcclxuICAgICAgICAgICAgICAgIG9uQWRkLFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2FydEl0ZW1RdWFuaXRpdHksXHJcbiAgICAgICAgICAgICAgICBvblJlbW92ZVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdGF0ZUNvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KENvbnRleHQpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidG9hc3QiLCJDb250ZXh0IiwiU3RhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJzaG93Q2FydCIsInNldFNob3dDYXJ0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwidG90YWxQcmljZSIsInNldFRvdGFsUHJpY2UiLCJ0b3RhbFF1YW50aXRpZXMiLCJzZXRUb3RhbFF1YW50aXRpZXMiLCJxdHkiLCJzZXRRdHkiLCJmb3VuZFByb2R1Y3QiLCJpbmRleCIsIm9uQWRkIiwicHJvZHVjdCIsInF1YW50aXR5IiwiY2hlY2tQcm9kdWN0SW5DYXJ0IiwiZmluZCIsIml0ZW0iLCJfaWQiLCJwcmV2VG90YWxQcmljZSIsInByaWNlIiwicHJldlRvdGFsUXVhbnRpdGllcyIsInVwZGF0ZWRDYXJ0SXRlbXMiLCJtYXAiLCJjYXJ0UHJvZHVjdCIsInN1Y2Nlc3MiLCJuYW1lIiwidG9nZ2xlQ2FydEl0ZW1RdWFuaXRpdHkiLCJpZCIsInZhbHVlIiwiZmluZEluZGV4IiwibmV3Q2FydEl0ZW1zIiwiZmlsdGVyIiwib25SZW1vdmUiLCJpbmNRdHkiLCJwcmV2UXR5IiwiZGVjUXR5IiwidXNlU3RhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});