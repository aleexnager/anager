"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/resume/page",{

/***/ "(app-pages-browser)/./app/resume/components/SwotAnalisis.jsx":
/*!************************************************!*\
  !*** ./app/resume/components/SwotAnalisis.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/constants */ \"(app-pages-browser)/./app/lib/constants.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst SwotAnalisis = ()=>{\n    _s();\n    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"S\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"about\",\n        className: \"lg:mx-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold flex justify-center pt-12 lg:pb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mr-2\",\n                        children: [\n                            \"SWOT\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Analysis\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 my-12 gap-y-1 md:gap-y-2 lg:gap-y-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-4 gap-1 md:gap-2 lg:gap-3\",\n                        children: _lib_constants__WEBPACK_IMPORTED_MODULE_2__.swotTabs.map((tab)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {\n                                className: \"w-100 md:w-full py-4 px-2 text-xl text-black font-bold rounded-lg \".concat(tab.color, \" \").concat(selectedTab === tab.title ? \"rounded-none rounded-t-lg\" : \"\"),\n                                onClick: ()=>setSelectedTab(tab.title),\n                                whileHover: {\n                                    scaleX: 1,\n                                    scaleY:  true && window.innerWidth >= 1024 ? 1.2 :  true && window.innerWidth >= 768 ? 1.125 : 1.075,\n                                    originY: 0,\n                                    transition: {\n                                        duration: 0.3\n                                    }\n                                },\n                                animate: selectedTab === tab.title ? {\n                                    scaleX: 1,\n                                    originX: 0,\n                                    scaleY:  true && window.innerWidth >= 1024 ? 1.2 :  true && window.innerWidth >= 768 ? 1.15 : 1.1,\n                                    originY: 0\n                                } : {\n                                    scale: 1\n                                },\n                                children: tab.title\n                            }, tab.title, false, {\n                                fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    _lib_constants__WEBPACK_IMPORTED_MODULE_2__.swotTabs.map((tab)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-3 rounded-b-lg \".concat(tab.class, \" \").concat(selectedTab === tab.title ? tab.color : \"hidden\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mx-8 my-4 text-black\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-xl font-bold\",\n                                        children: tab.head\n                                    }, void 0, false, {\n                                        fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"list-disc mx-6 mt-4 mb-8\",\n                                        children: Array.isArray(tab.content) ? tab.content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: item\n                                            }, index, false, {\n                                                fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 52\n                                            }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: tab.content\n                                        }, void 0, false, {\n                                            fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)\n                        }, tab.title, false, {\n                            fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anager/web/anager/app/resume/components/SwotAnalisis.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SwotAnalisis, \"gb0qkSybhefJ3P5WUwXbbJ3XZdU=\");\n_c = SwotAnalisis;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwotAnalisis);\nvar _c;\n$RefreshReg$(_c, \"SwotAnalisis\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZXN1bWUvY29tcG9uZW50cy9Td290QW5hbGlzaXMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3dDO0FBQ0Q7QUFDUTtBQUUvQyxNQUFNSSxlQUFlOztJQUNuQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFFL0MscUJBQ0UsOERBQUNNO1FBQVFDLElBQUc7UUFBUUMsV0FBVTs7MEJBQzVCLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFDRCw4REFBQ0M7Z0JBQUdGLFdBQVU7O2tDQUNaLDhEQUFDRzt3QkFBS0gsV0FBVTs7NEJBQXdGOzRCQUNqRzs7Ozs7OztvQkFDQTs7Ozs7OzswQkFJVCw4REFBQ0k7Z0JBQUlKLFdBQVU7O2tDQUNiLDhEQUFDSTt3QkFBSUosV0FBVTtrQ0FDWk4sb0RBQVFBLENBQUNXLEdBQUcsQ0FBQyxDQUFDQyxvQkFDYiw4REFBQ2IsaURBQU1BLENBQUNjLE1BQU07Z0NBRVpQLFdBQVcscUVBR1RKLE9BRkFVLElBQUlFLEtBQUssRUFDVixLQUVBLE9BRENaLGdCQUFnQlUsSUFBSUcsS0FBSyxHQUFHLDhCQUE4QjtnQ0FFNURDLFNBQVMsSUFBTWIsZUFBZVMsSUFBSUcsS0FBSztnQ0FDdkNFLFlBQVk7b0NBQ1ZDLFFBQVE7b0NBQ1JDLFFBQ0UsS0FBNkIsSUFBSUMsT0FBT0MsVUFBVSxJQUFJLE9BQ2xELE1BQ0EsS0FBNkIsSUFBSUQsT0FBT0MsVUFBVSxJQUFJLE1BQ3RELFFBQ0E7b0NBQ05DLFNBQVM7b0NBQ1RDLFlBQVk7d0NBQUVDLFVBQVU7b0NBQUk7Z0NBQzlCO2dDQUNBQyxTQUNFdkIsZ0JBQWdCVSxJQUFJRyxLQUFLLEdBQ3JCO29DQUNFRyxRQUFRO29DQUNSUSxTQUFTO29DQUNUUCxRQUNFLEtBQTZCLElBQzdCQyxPQUFPQyxVQUFVLElBQUksT0FDakIsTUFDQSxLQUE2QixJQUM3QkQsT0FBT0MsVUFBVSxJQUFJLE1BQ3JCLE9BQ0E7b0NBQ05DLFNBQVM7Z0NBQ1gsSUFDQTtvQ0FBRUssT0FBTztnQ0FBRTswQ0FHaEJmLElBQUlHLEtBQUs7K0JBcENMSCxJQUFJRyxLQUFLOzs7Ozs7Ozs7O29CQXlDbkJmLG9EQUFRQSxDQUFDVyxHQUFHLENBQUMsQ0FBQ0Msb0JBQ2IsOERBQUNGOzRCQUVDSixXQUFXLDJCQUNUSixPQURvQ1UsSUFBSWdCLEtBQUssRUFBQyxLQUUvQyxPQURDMUIsZ0JBQWdCVSxJQUFJRyxLQUFLLEdBQUdILElBQUlFLEtBQUssR0FBRztzQ0FHMUMsNEVBQUNKO2dDQUFJSixXQUFVOztrREFDYiw4REFBQ0U7d0NBQUdGLFdBQVU7a0RBQXFCTSxJQUFJaUIsSUFBSTs7Ozs7O2tEQUMzQyw4REFBQ0M7d0NBQUd4QixXQUFVO2tEQUNYeUIsTUFBTUMsT0FBTyxDQUFDcEIsSUFBSXFCLE9BQU8sSUFDeEJyQixJQUFJcUIsT0FBTyxDQUFDdEIsR0FBRyxDQUFDLENBQUN1QixNQUFNQyxzQkFBVSw4REFBQ0M7MERBQWdCRjsrQ0FBUkM7Ozs7MkVBRTFDLDhEQUFDQztzREFBSXhCLElBQUlxQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OzsyQkFYakJyQixJQUFJRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQW9CMUI7R0FqRk1kO0tBQUFBO0FBbUZOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9yZXN1bWUvY29tcG9uZW50cy9Td290QW5hbGlzaXMuanN4PzdjNzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBzd290VGFicyB9IGZyb20gXCIuLi8uLi9saWIvY29uc3RhbnRzXCI7XG5cbmNvbnN0IFN3b3RBbmFsaXNpcyA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSB1c2VTdGF0ZShcIlNcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3NOYW1lPVwibGc6bXgtMTBcIj5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIGZsZXgganVzdGlmeS1jZW50ZXIgcHQtMTIgbGc6cGItNFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeS00MDAgdG8tc2Vjb25kYXJ5LTYwMCBtci0yXCI+XG4gICAgICAgICAgU1dPVHtcIiBcIn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICBBbmFseXNpc1xuICAgICAgPC9oMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG15LTEyIGdhcC15LTEgbWQ6Z2FwLXktMiBsZzpnYXAteS0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtMSBtZDpnYXAtMiBsZzpnYXAtM1wiPlxuICAgICAgICAgIHtzd290VGFicy5tYXAoKHRhYikgPT4gKFxuICAgICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgICAga2V5PXt0YWIudGl0bGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTAwIG1kOnctZnVsbCBweS00IHB4LTIgdGV4dC14bCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCByb3VuZGVkLWxnICR7XG4gICAgICAgICAgICAgICAgdGFiLmNvbG9yXG4gICAgICAgICAgICAgIH0gJHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRhYiA9PT0gdGFiLnRpdGxlID8gXCJyb3VuZGVkLW5vbmUgcm91bmRlZC10LWxnXCIgOiBcIlwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFRhYih0YWIudGl0bGUpfVxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7XG4gICAgICAgICAgICAgICAgc2NhbGVYOiAxLFxuICAgICAgICAgICAgICAgIHNjYWxlWTpcbiAgICAgICAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmlubmVyV2lkdGggPj0gMTAyNFxuICAgICAgICAgICAgICAgICAgICA/IDEuMlxuICAgICAgICAgICAgICAgICAgICA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmlubmVyV2lkdGggPj0gNzY4XG4gICAgICAgICAgICAgICAgICAgID8gMS4xMjVcbiAgICAgICAgICAgICAgICAgICAgOiAxLjA3NSxcbiAgICAgICAgICAgICAgICBvcmlnaW5ZOiAwLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMyB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRhYiA9PT0gdGFiLnRpdGxlXG4gICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZVg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luWDogMCxcbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZVk6XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gMS4yXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoID49IDc2OFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IDEuMTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAxLjEsXG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luWTogMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiB7IHNjYWxlOiAxIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGFiLnRpdGxlfVxuICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7c3dvdFRhYnMubWFwKCh0YWIpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e3RhYi50aXRsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbC1zcGFuLTMgcm91bmRlZC1iLWxnICR7dGFiLmNsYXNzfSAke1xuICAgICAgICAgICAgICBzZWxlY3RlZFRhYiA9PT0gdGFiLnRpdGxlID8gdGFiLmNvbG9yIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IG15LTQgdGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57dGFiLmhlYWR9PC9oMT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBteC02IG10LTQgbWItOFwiPlxuICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KHRhYi5jb250ZW50KSA/IChcbiAgICAgICAgICAgICAgICAgIHRhYi5jb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT57aXRlbX08L2xpPilcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPGxpPnt0YWIuY29udGVudH08L2xpPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTd290QW5hbGlzaXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsInN3b3RUYWJzIiwiU3dvdEFuYWxpc2lzIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImJyIiwiaDEiLCJzcGFuIiwiZGl2IiwibWFwIiwidGFiIiwiYnV0dG9uIiwiY29sb3IiLCJ0aXRsZSIsIm9uQ2xpY2siLCJ3aGlsZUhvdmVyIiwic2NhbGVYIiwic2NhbGVZIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9yaWdpblkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhbmltYXRlIiwib3JpZ2luWCIsInNjYWxlIiwiY2xhc3MiLCJoZWFkIiwidWwiLCJBcnJheSIsImlzQXJyYXkiLCJjb250ZW50IiwiaXRlbSIsImluZGV4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/resume/components/SwotAnalisis.jsx\n"));

/***/ })

});