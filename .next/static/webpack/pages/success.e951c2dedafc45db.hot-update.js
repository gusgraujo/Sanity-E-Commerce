"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/success",{

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! canvas-confetti */ \"./node_modules/canvas-confetti/dist/confetti.module.mjs\");\n\n\nconst runFireworks = () => {\n  var duration = 5 * 1000;\n  var animationEnd = Date.now() + duration;\n  var defaults = {\n    startVelocity: 30,\n    spread: 360,\n    ticks: 60,\n    zIndex: 0\n  };\n\n  function randomInRange(min, max) {\n    return Math.random() * (max - min) + min;\n  }\n\n  var interval = setInterval(function () {\n    var timeLeft = animationEnd - Date.now();\n\n    if (timeLeft <= 0) {\n      return clearInterval(interval);\n    }\n\n    var particleCount = 50 * (timeLeft / duration); // since particles fall down, start a bit higher than random\n\n    (0,canvas_confetti__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object.assign({}, defaults, {\n      particleCount,\n      origin: {\n        x: randomInRange(0.1, 0.3),\n        y: Math.random() - 0.2\n      }\n    }));\n    (0,canvas_confetti__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object.assign({}, defaults, {\n      particleCount,\n      origin: {\n        x: randomInRange(0.7, 0.9),\n        y: Math.random() - 0.2\n      }\n    }));\n  }, 250);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (runFireworks);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFHQSxNQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUV2QixNQUFJQyxRQUFRLEdBQUcsSUFBSSxJQUFuQjtBQUNBLE1BQUlDLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEtBQWFILFFBQWhDO0FBQ0EsTUFBSUksUUFBUSxHQUFHO0FBQUVDLElBQUFBLGFBQWEsRUFBRSxFQUFqQjtBQUFxQkMsSUFBQUEsTUFBTSxFQUFFLEdBQTdCO0FBQWtDQyxJQUFBQSxLQUFLLEVBQUUsRUFBekM7QUFBNkNDLElBQUFBLE1BQU0sRUFBRTtBQUFyRCxHQUFmOztBQUVBLFdBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUNqQyxXQUFPQyxJQUFJLENBQUNDLE1BQUwsTUFBaUJGLEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXJDO0FBQ0M7O0FBRUQsTUFBSUksUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBVztBQUN0QyxRQUFJQyxRQUFRLEdBQUdmLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQTlCOztBQUVBLFFBQUlhLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUNmLGFBQU9DLGFBQWEsQ0FBQ0gsUUFBRCxDQUFwQjtBQUNIOztBQUVELFFBQUlJLGFBQWEsR0FBRyxNQUFNRixRQUFRLEdBQUdoQixRQUFqQixDQUFwQixDQVBzQyxDQVF0Qzs7QUFDQUYsSUFBQUEsMkRBQVEsQ0FBQ3FCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JoQixRQUFsQixFQUE0QjtBQUFFYyxNQUFBQSxhQUFGO0FBQWlCRyxNQUFBQSxNQUFNLEVBQUU7QUFBRUMsUUFBQUEsQ0FBQyxFQUFFYixhQUFhLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbEI7QUFBOEJjLFFBQUFBLENBQUMsRUFBRVgsSUFBSSxDQUFDQyxNQUFMLEtBQWdCO0FBQWpEO0FBQXpCLEtBQTVCLENBQUQsQ0FBUjtBQUNBZixJQUFBQSwyREFBUSxDQUFDcUIsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQmhCLFFBQWxCLEVBQTRCO0FBQUVjLE1BQUFBLGFBQUY7QUFBaUJHLE1BQUFBLE1BQU0sRUFBRTtBQUFFQyxRQUFBQSxDQUFDLEVBQUViLGFBQWEsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFsQjtBQUE4QmMsUUFBQUEsQ0FBQyxFQUFFWCxJQUFJLENBQUNDLE1BQUwsS0FBZ0I7QUFBakQ7QUFBekIsS0FBNUIsQ0FBRCxDQUFSO0FBQ0MsR0FYeUIsRUFXdkIsR0FYdUIsQ0FBMUI7QUFZSCxDQXRCRDs7QUEwQkEsK0RBQWVkLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzLmpzPzhhMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZldHRpIGZyb20gJ2NhbnZhcy1jb25mZXR0aSc7XHJcblxyXG5cclxuY29uc3QgcnVuRmlyZXdvcmtzID0gKCkgPT4ge1xyXG5cclxuICAgIHZhciBkdXJhdGlvbiA9IDUgKiAxMDAwO1xyXG4gICAgdmFyIGFuaW1hdGlvbkVuZCA9IERhdGUubm93KCkgKyBkdXJhdGlvbjtcclxuICAgIHZhciBkZWZhdWx0cyA9IHsgc3RhcnRWZWxvY2l0eTogMzAsIHNwcmVhZDogMzYwLCB0aWNrczogNjAsIHpJbmRleDogMCB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJhbmRvbUluUmFuZ2UobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGltZUxlZnQgPSBhbmltYXRpb25FbmQgLSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwYXJ0aWNsZUNvdW50ID0gNTAgKiAodGltZUxlZnQgLyBkdXJhdGlvbik7XHJcbiAgICAvLyBzaW5jZSBwYXJ0aWNsZXMgZmFsbCBkb3duLCBzdGFydCBhIGJpdCBoaWdoZXIgdGhhbiByYW5kb21cclxuICAgIGNvbmZldHRpKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCB7IHBhcnRpY2xlQ291bnQsIG9yaWdpbjogeyB4OiByYW5kb21JblJhbmdlKDAuMSwgMC4zKSwgeTogTWF0aC5yYW5kb20oKSAtIDAuMiB9IH0pKTtcclxuICAgIGNvbmZldHRpKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCB7IHBhcnRpY2xlQ291bnQsIG9yaWdpbjogeyB4OiByYW5kb21JblJhbmdlKDAuNywgMC45KSwgeTogTWF0aC5yYW5kb20oKSAtIDAuMiB9IH0pKTtcclxuICAgIH0sIDI1MCk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcnVuRmlyZXdvcmtzOyJdLCJuYW1lcyI6WyJjb25mZXR0aSIsInJ1bkZpcmV3b3JrcyIsImR1cmF0aW9uIiwiYW5pbWF0aW9uRW5kIiwiRGF0ZSIsIm5vdyIsImRlZmF1bHRzIiwic3RhcnRWZWxvY2l0eSIsInNwcmVhZCIsInRpY2tzIiwiekluZGV4IiwicmFuZG9tSW5SYW5nZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJyYW5kb20iLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwidGltZUxlZnQiLCJjbGVhckludGVydmFsIiwicGFydGljbGVDb3VudCIsIk9iamVjdCIsImFzc2lnbiIsIm9yaWdpbiIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/utils.js\n");

/***/ })

});