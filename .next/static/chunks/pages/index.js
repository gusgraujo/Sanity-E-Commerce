/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CSourceCode%5CFullstackProjects%5CE-Commerce%5Ce-commerce%5Cpages%5Cindex.js!":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CSourceCode%5CFullstackProjects%5CE-Commerce%5Ce-commerce%5Cpages%5Cindex.js! ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkYmYWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDU291cmNlQ29kZSU1Q0Z1bGxzdGFja1Byb2plY3RzJTVDRS1Db21tZXJjZSU1Q2UtY29tbWVyY2UlNUNwYWdlcyU1Q2luZGV4LmpzIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBDQUFrQjtBQUN6QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/MTQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CSourceCode%5CFullstackProjects%5CE-Commerce%5Ce-commerce%5Cpages%5Cindex.js!\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/index */ \"./components/index.js\");\n\n\n\nconst Home = ({\n  products,\n  bannerData\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__.HeroBanner, {\n    heroBanner: bannerData.length && bannerData[0]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"products-heading\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Best Seller Products\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"speaker There are many variations passages\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"products-container\"\n  }, products?.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__.Product, {\n    key: product._id,\n    product: product\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__.FooterBanner, {\n    footerBanner: bannerData && bannerData[0]\n  }));\n};\n\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFLQSxNQUFNSSxJQUFJLEdBQUcsQ0FBQztBQUFDQyxFQUFBQSxRQUFEO0FBQVVDLEVBQUFBO0FBQVYsQ0FBRCxLQUEyQjtBQUN0QyxzQkFDRSxxRkFDRSwyREFBQyx5REFBRDtBQUFZLGNBQVUsRUFBRUEsVUFBVSxDQUFDQyxNQUFYLElBQXFCRCxVQUFVLENBQUMsQ0FBRDtBQUF2RCxJQURGLGVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSw4RkFERixlQUVFLG1IQUZGLENBRkYsZUFPRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dELFFBQVEsRUFBRUcsR0FBVixDQUFlQyxPQUFELGlCQUFhLDJEQUFDLHNEQUFEO0FBQVMsT0FBRyxFQUFFQSxPQUFPLENBQUNDLEdBQXRCO0FBQTJCLFdBQU8sRUFBRUQ7QUFBcEMsSUFBM0IsQ0FESCxDQVBGLGVBV0UsMkRBQUMsMkRBQUQ7QUFBYyxnQkFBWSxFQUFFSCxVQUFVLElBQUlBLFVBQVUsQ0FBQyxDQUFEO0FBQXBELElBWEYsQ0FERjtBQWVELENBaEJEOztLQUFNRjs7QUE4Qk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1Byb2R1Y3QsRm9vdGVyQmFubmVyLEhlcm9CYW5uZXJ9IGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4XCJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL2xpYi9jbGllbnQnXG5cblxuXG5jb25zdCBIb21lID0gKHtwcm9kdWN0cyxiYW5uZXJEYXRhfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVyb0Jhbm5lciBoZXJvQmFubmVyPXtiYW5uZXJEYXRhLmxlbmd0aCAmJiBiYW5uZXJEYXRhWzBdfSAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtaGVhZGluZ1wiPlxuICAgICAgICA8aDI+QmVzdCBTZWxsZXIgUHJvZHVjdHM8L2gyPlxuICAgICAgICA8cD5zcGVha2VyIFRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgcGFzc2FnZXM8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jb250YWluZXJcIj5cbiAgICAgICAge3Byb2R1Y3RzPy5tYXAoKHByb2R1Y3QpID0+IDxQcm9kdWN0IGtleT17cHJvZHVjdC5faWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Rm9vdGVyQmFubmVyIGZvb3RlckJhbm5lcj17YmFubmVyRGF0YSAmJiBiYW5uZXJEYXRhWzBdfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gJypbX3R5cGUgPT0gXCJwcm9kdWN0XCJdJztcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xuXG4gIGNvbnN0IGJhbm5lclF1ZXJ5ID0gJypbX3R5cGUgPT0gXCJiYW5uZXJcIl0nO1xuICBjb25zdCBiYW5uZXJEYXRhID0gYXdhaXQgY2xpZW50LmZldGNoKGJhbm5lclF1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHByb2R1Y3RzLCBiYW5uZXJEYXRhIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZHVjdCIsIkZvb3RlckJhbm5lciIsIkhlcm9CYW5uZXIiLCJIb21lIiwicHJvZHVjdHMiLCJiYW5uZXJEYXRhIiwibGVuZ3RoIiwibWFwIiwicHJvZHVjdCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CSourceCode%5CFullstackProjects%5CE-Commerce%5Ce-commerce%5Cpages%5Cindex.js!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);