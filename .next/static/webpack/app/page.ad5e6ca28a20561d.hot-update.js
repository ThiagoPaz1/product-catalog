"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/ProductsCatalog/ListProducts/CardProducts.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/ProductsCatalog/ListProducts/CardProducts.tsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardProducts: function() { return /* binding */ CardProducts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/priceFormat */ \"(app-client)/./src/utils/priceFormat.ts\");\n/* __next_internal_client_entry_do_not_use__ CardProducts auto */ \n// Utils\n\nfunction CardProducts(param) {\n    let { title, image, price } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                width: 100,\n                src: image,\n                alt: \"Imagem do produto\"\n            }, void 0, false, {\n                fileName: \"/home/thiagopaz/\\xc1rea de Trabalho/Programa\\xe7\\xe3o/Projetos/product-catalog/src/components/ProductsCatalog/ListProducts/CardProducts.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/thiagopaz/\\xc1rea de Trabalho/Programa\\xe7\\xe3o/Projetos/product-catalog/src/components/ProductsCatalog/ListProducts/CardProducts.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_1__.priceFormat)(price)\n            }, void 0, false, {\n                fileName: \"/home/thiagopaz/\\xc1rea de Trabalho/Programa\\xe7\\xe3o/Projetos/product-catalog/src/components/ProductsCatalog/ListProducts/CardProducts.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/thiagopaz/\\xc1rea de Trabalho/Programa\\xe7\\xe3o/Projetos/product-catalog/src/components/ProductsCatalog/ListProducts/CardProducts.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = CardProducts;\nvar _c;\n$RefreshReg$(_c, \"CardProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdHNDYXRhbG9nL0xpc3RQcm9kdWN0cy9DYXJkUHJvZHVjdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxRQUFRO0FBQ3lDO0FBRTFDLFNBQVNDLGFBQWEsS0FBMEM7UUFBMUMsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBcUIsR0FBMUM7SUFDM0IscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQUlDLE9BQU87Z0JBQUtDLEtBQUtMO2dCQUFPTSxLQUFJOzs7Ozs7MEJBQ2pDLDhEQUFDQzswQkFDRVI7Ozs7OzswQkFFSCw4REFBQ1M7MEJBQ0VYLCtEQUFXQSxDQUFDSTs7Ozs7Ozs7Ozs7O0FBSXJCO0tBWmdCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0NhdGFsb2cvTGlzdFByb2R1Y3RzL0NhcmRQcm9kdWN0cy50c3g/MTQ4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG4vLyBUeXBlc1xuaW1wb3J0IHsgQ2FyZFByb2R1Y3RzUHJvcHMgfSBmcm9tIFwiLi4vdHlwZXNcIlxuXG4vLyBVdGlsc1xuaW1wb3J0IHsgcHJpY2VGb3JtYXQgfSBmcm9tIFwiQC91dGlscy9wcmljZUZvcm1hdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkUHJvZHVjdHMoeyB0aXRsZSwgaW1hZ2UsIHByaWNlIH06IENhcmRQcm9kdWN0c1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPGltZyB3aWR0aD17MTAwfSBzcmM9e2ltYWdlfSBhbHQ9XCJJbWFnZW0gZG8gcHJvZHV0b1wiIC8+XG4gICAgICA8aDM+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvaDM+XG4gICAgICA8cD5cbiAgICAgICAge3ByaWNlRm9ybWF0KHByaWNlKX1cbiAgICAgIDwvcD5cbiAgICA8L2xpPlxuICApXG59Il0sIm5hbWVzIjpbInByaWNlRm9ybWF0IiwiQ2FyZFByb2R1Y3RzIiwidGl0bGUiLCJpbWFnZSIsInByaWNlIiwibGkiLCJpbWciLCJ3aWR0aCIsInNyYyIsImFsdCIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/ProductsCatalog/ListProducts/CardProducts.tsx\n"));

/***/ }),

/***/ "(app-client)/./src/utils/priceFormat.ts":
/*!**********************************!*\
  !*** ./src/utils/priceFormat.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   priceFormat: function() { return /* binding */ priceFormat; }\n/* harmony export */ });\nfunction priceFormat(price) {\n    return new Intl.NumberFormat(\"pt-BR\", {\n        style: \"currency\",\n        currency: \"BRL\"\n    }).format(price);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3V0aWxzL3ByaWNlRm9ybWF0LnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxZQUFZQyxLQUFhO0lBQ3ZDLE9BQU8sSUFBSUMsS0FBS0MsYUFBYSxTQUFTO1FBQ3BDQyxPQUFPO1FBQ1BDLFVBQVU7SUFDWixHQUFHQyxPQUFPTDtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9wcmljZUZvcm1hdC50cz9kNWI3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBwcmljZUZvcm1hdChwcmljZTogbnVtYmVyKSB7XG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3B0LUJSJywge1xuICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgIGN1cnJlbmN5OiAnQlJMJyxcbiAgfSkuZm9ybWF0KHByaWNlKVxufSJdLCJuYW1lcyI6WyJwcmljZUZvcm1hdCIsInByaWNlIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/utils/priceFormat.ts\n"));

/***/ })

});