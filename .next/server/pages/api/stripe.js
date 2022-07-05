"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stripe";
exports.ids = ["pages/api/stripe"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/stripe.js":
/*!*****************************!*\
  !*** ./pages/api/stripe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(\"sk_test_51LH4wnIOaEnPMVEWUrlzkG2stnPsulZDWNDFRIzwCLZsKrP25FV8GFuqAviPTCm2eoRsrHjbt9rOJ0O024Z9ClQw00oCQaPbC4\");\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    console.log(req.body.cartItems);\n\n    try {\n      const params = {\n        submit_type: 'pay',\n        mode: 'payment',\n        payment_method_types: ['card'],\n        billing_address_collection: 'auto',\n        shipping_options: [{\n          shipping_rate: 'shr_1LI1jwIOaEnPMVEWSckjPnCc'\n        }],\n        line_items: req.body.map(item => {\n          const img = item.image[0].asset._ref;\n          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/vfxfwnaw/production/').replace('-webp', '.webp');\n          return {\n            price_data: {\n              currency: 'usd',\n              product_data: {\n                name: item.name,\n                images: [newImage]\n              },\n              unit_amount: item.price * 100\n            },\n            adjustable_quantity: {\n              enabled: true,\n              minimum: 1\n            },\n            quantity: item.quantity\n          };\n        }),\n        success_url: `${req.headers.origin}/success`,\n        cancel_url: `${req.headers.origin}/canceled`\n      }; // Create Checkout Sessions from body params.\n\n      const session = await stripe.checkout.sessions.create(params);\n      res.status(200).json(session);\n    } catch (err) {\n      res.status(err.statusCode || 500).json(err.message);\n    }\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method Not Allowed');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RyaXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQUlELCtDQUFKLENBQVdFLDZHQUFYLENBQWY7QUFFZSxlQUFlRyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFHLENBQUNLLElBQUosQ0FBU0MsU0FBckI7O0FBRUEsUUFBSTtBQUVGLFlBQU1DLE1BQU0sR0FBRztBQUNiQyxRQUFBQSxXQUFXLEVBQUUsS0FEQTtBQUViQyxRQUFBQSxJQUFJLEVBQUUsU0FGTztBQUdiQyxRQUFBQSxvQkFBb0IsRUFBRSxDQUFDLE1BQUQsQ0FIVDtBQUliQyxRQUFBQSwwQkFBMEIsRUFBRSxNQUpmO0FBS2JDLFFBQUFBLGdCQUFnQixFQUFFLENBQ2Q7QUFBQ0MsVUFBQUEsYUFBYSxFQUFFO0FBQWhCLFNBRGMsQ0FMTDtBQVFiQyxRQUFBQSxVQUFVLEVBQUVkLEdBQUcsQ0FBQ0ssSUFBSixDQUFTVSxHQUFULENBQWNDLElBQUQsSUFBVTtBQUMvQixnQkFBTUMsR0FBRyxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxDQUFYLEVBQWNDLEtBQWQsQ0FBb0JDLElBQWhDO0FBQ0EsZ0JBQU1DLFFBQVEsR0FBR0osR0FBRyxDQUFDSyxPQUFKLENBQVksUUFBWixFQUFzQixtREFBdEIsRUFBMkVBLE9BQTNFLENBQW1GLE9BQW5GLEVBQTRGLE9BQTVGLENBQWpCO0FBRUEsaUJBQU87QUFDTEMsWUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLGNBQUFBLFFBQVEsRUFBRSxLQURBO0FBRVZDLGNBQUFBLFlBQVksRUFBRTtBQUNaQyxnQkFBQUEsSUFBSSxFQUFFVixJQUFJLENBQUNVLElBREM7QUFFWkMsZ0JBQUFBLE1BQU0sRUFBRSxDQUFDTixRQUFEO0FBRkksZUFGSjtBQU1WTyxjQUFBQSxXQUFXLEVBQUVaLElBQUksQ0FBQ2EsS0FBTCxHQUFhO0FBTmhCLGFBRFA7QUFTTEMsWUFBQUEsbUJBQW1CLEVBQUU7QUFDbkJDLGNBQUFBLE9BQU8sRUFBQyxJQURXO0FBRW5CQyxjQUFBQSxPQUFPLEVBQUU7QUFGVSxhQVRoQjtBQWFMQyxZQUFBQSxRQUFRLEVBQUVqQixJQUFJLENBQUNpQjtBQWJWLFdBQVA7QUFlRCxTQW5CUyxDQVJDO0FBNEJYQyxRQUFBQSxXQUFXLEVBQUcsR0FBRWxDLEdBQUcsQ0FBQ21DLE9BQUosQ0FBWUMsTUFBTyxVQTVCeEI7QUE2QlhDLFFBQUFBLFVBQVUsRUFBRyxHQUFFckMsR0FBRyxDQUFDbUMsT0FBSixDQUFZQyxNQUFPO0FBN0J2QixPQUFmLENBRkUsQ0FrQ0Y7O0FBQ0EsWUFBTUUsT0FBTyxHQUFHLE1BQU0zQyxNQUFNLENBQUM0QyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsTUFBekIsQ0FBZ0NsQyxNQUFoQyxDQUF0QjtBQUNBTixNQUFBQSxHQUFHLENBQUN5QyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJMLE9BQXJCO0FBQ0QsS0FyQ0QsQ0FxQ0UsT0FBT00sR0FBUCxFQUFZO0FBQ1ozQyxNQUFBQSxHQUFHLENBQUN5QyxNQUFKLENBQVdFLEdBQUcsQ0FBQ0MsVUFBSixJQUFrQixHQUE3QixFQUFrQ0YsSUFBbEMsQ0FBdUNDLEdBQUcsQ0FBQ0UsT0FBM0M7QUFDRDtBQUNGLEdBM0NELE1BMkNPO0FBQ0w3QyxJQUFBQSxHQUFHLENBQUM4QyxTQUFKLENBQWMsT0FBZCxFQUF1QixNQUF2QjtBQUNBOUMsSUFBQUEsR0FBRyxDQUFDeUMsTUFBSixDQUFXLEdBQVgsRUFBZ0JNLEdBQWhCLENBQW9CLG9CQUFwQjtBQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWNvbW1lcmNlLy4vcGFnZXMvYXBpL3N0cmlwZS5qcz9kNzg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJ1xyXG5jb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9TRUNSRVRfS0VZKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keS5jYXJ0SXRlbXMpO1xyXG5cclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgc3VibWl0X3R5cGU6ICdwYXknLFxyXG4gICAgICAgIG1vZGU6ICdwYXltZW50JyxcclxuICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXHJcbiAgICAgICAgYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb246ICdhdXRvJyxcclxuICAgICAgICBzaGlwcGluZ19vcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHtzaGlwcGluZ19yYXRlOiAnc2hyXzFMSTFqd0lPYUVuUE1WRVdTY2tqUG5DYyd9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGluZV9pdGVtczogcmVxLmJvZHkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGl0ZW0uaW1hZ2VbMF0uYXNzZXQuX3JlZjtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBpbWcucmVwbGFjZSgnaW1hZ2UtJywgJ2h0dHBzOi8vY2RuLnNhbml0eS5pby9pbWFnZXMvdmZ4ZnduYXcvcHJvZHVjdGlvbi8nKS5yZXBsYWNlKCctd2VicCcsICcud2VicCcpO1xyXG4gIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHByaWNlX2RhdGE6IHsgXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogJ3VzZCcsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2RhdGE6IHsgXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBbbmV3SW1hZ2VdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVuaXRfYW1vdW50OiBpdGVtLnByaWNlICogMTAwLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYWRqdXN0YWJsZV9xdWFudGl0eToge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWluaW11bTogMSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vc3VjY2Vzc2AsXHJcbiAgICAgICAgICBjYW5jZWxfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L2NhbmNlbGVkYCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAvLyBDcmVhdGUgQ2hlY2tvdXQgU2Vzc2lvbnMgZnJvbSBib2R5IHBhcmFtcy5cclxuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUocGFyYW1zKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oc2Vzc2lvbik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJyk7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2QgTm90IEFsbG93ZWQnKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUklQRV9TRUNSRVRfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwiY2FydEl0ZW1zIiwicGFyYW1zIiwic3VibWl0X3R5cGUiLCJtb2RlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsInNoaXBwaW5nX29wdGlvbnMiLCJzaGlwcGluZ19yYXRlIiwibGluZV9pdGVtcyIsIm1hcCIsIml0ZW0iLCJpbWciLCJpbWFnZSIsImFzc2V0IiwiX3JlZiIsIm5ld0ltYWdlIiwicmVwbGFjZSIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJpbWFnZXMiLCJ1bml0X2Ftb3VudCIsInByaWNlIiwiYWRqdXN0YWJsZV9xdWFudGl0eSIsImVuYWJsZWQiLCJtaW5pbXVtIiwicXVhbnRpdHkiLCJzdWNjZXNzX3VybCIsImhlYWRlcnMiLCJvcmlnaW4iLCJjYW5jZWxfdXJsIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/stripe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stripe.js"));
module.exports = __webpack_exports__;

})();