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

/***/ "(app-pages-browser)/./app/components/ProjectCard.jsx":
/*!****************************************!*\
  !*** ./app/components/ProjectCard.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CodeBracketIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CodeBracketIcon,EyeIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CodeBracketIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CodeBracketIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CodeBracketIcon,EyeIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _lib_svgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/svgs */ \"(app-pages-browser)/./app/lib/svgs.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\n\n\n\nconst svgsList = [\n    {\n        id: \"html\",\n        src: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg\"\n    },\n    {\n        id: \"css\",\n        src: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg\"\n    },\n    {\n        id: \"tailwind\",\n        src: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg\"\n    },\n    {\n        id: \"bootstrap\",\n        src: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg\"\n    },\n    {\n        id: \"javascript\",\n        src: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg\"\n    },\n    {\n        id: \"typescript\",\n        src: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg\"\n    },\n    {\n        id: \"react\",\n        src: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg\"\n    },\n    {\n        id: \"next\",\n        src: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg\"\n    },\n    {\n        id: \"dotnet\",\n        src: \"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg\"\n    }\n];\nconst handleSvg = (svgs)=>{\n    return svgs.map((svg, index)=>{\n        const svgData = _lib_svgs__WEBPACK_IMPORTED_MODULE_3__.svgList.find((item)=>item.id === svg);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            src: svgData.src,\n            alt: svgData.id,\n            width: 40,\n            height: 40,\n            className: \"\"\n        }, index, false, {\n            fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined);\n    });\n};\nconst ProjectCard = (param)=>{\n    let { imgUrl, title, description, gitUrl, previewUrl, svgs } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-60 md:h-72 rounded-t-xl relative group\",\n                style: {\n                    background: \"url(\".concat(imgUrl, \")\"),\n                    backgroundSize: \"cover\",\n                    backgroundRepeat: \"no-repeat\",\n                    backgroundPosition: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex bg-[#181818] bg-opacity-95 rounded-full gap-2 px-6 py-2\",\n                            children: handleSvg(svgs)\n                        }, void 0, false, {\n                            fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:rounded-t-xl transition-all duration-1000\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: gitUrl,\n                                className: \"h-14 w-14 mr-6 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CodeBracketIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"h-10 w-10 text-[#ABD7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white\"\n                                }, void 0, false, {\n                                    fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: previewUrl,\n                                className: \"h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CodeBracketIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    className: \"h-10 w-10 text-[#ABD7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white\"\n                                }, void 0, false, {\n                                    fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-b-xl mt-3 bg-[#181818] py-6 px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"text-white text-xl font-semibold mb-2\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-[#ADB7BE]\",\n                                children: description\n                            }, void 0, false, {\n                                fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anager/web/anager/app/components/ProjectCard.jsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQzZDO0FBQzFDO0FBQ1M7QUFDUDtBQUUvQixNQUFNTSxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxJQUFJO1FBQ0pDLEtBQUs7SUFDUDtJQUNBO1FBQ0VELElBQUk7UUFDSkMsS0FBSztJQUNQO0lBQ0E7UUFDRUQsSUFBSTtRQUNKQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxJQUFJO1FBQ0pDLEtBQUs7SUFDUDtJQUNBO1FBQ0VELElBQUk7UUFDSkMsS0FBSztJQUNQO0lBQ0E7UUFDRUQsSUFBSTtRQUNKQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxJQUFJO1FBQ0pDLEtBQUs7SUFDUDtJQUNBO1FBQ0VELElBQUk7UUFDSkMsS0FBSztJQUNQO0NBQ0Q7QUFFRCxNQUFNQyxZQUFZLENBQUNDO0lBQ2pCLE9BQU9BLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQztRQUNwQixNQUFNQyxVQUFVViw4Q0FBT0EsQ0FBQ1csSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtULEVBQUUsS0FBS0s7UUFDbkQscUJBQ0UsOERBQUNQLGtEQUFLQTtZQUVKRyxLQUFLTSxRQUFRTixHQUFHO1lBQ2hCUyxLQUFLSCxRQUFRUCxFQUFFO1lBQ2ZXLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxXQUFVO1dBTExQOzs7OztJQVFYO0FBQ0Y7QUFFQSxNQUFNUSxjQUFjO1FBQUMsRUFDbkJDLE1BQU0sRUFDTkMsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLE1BQU0sRUFDTkMsVUFBVSxFQUNWaEIsSUFBSSxFQUNMO0lBQ0MscUJBQ0UsOERBQUNpQjs7MEJBQ0MsOERBQUNBO2dCQUNDUCxXQUFVO2dCQUNWUSxPQUFPO29CQUNMQyxZQUFZLE9BQWMsT0FBUFAsUUFBTztvQkFDMUJRLGdCQUFnQjtvQkFDaEJDLGtCQUFrQjtvQkFDbEJDLG9CQUFvQjtnQkFDdEI7O2tDQUVBLDhEQUFDTDt3QkFBSVAsV0FBVTtrQ0FDYiw0RUFBQ087NEJBQUlQLFdBQVU7c0NBQ1pYLFVBQVVDOzs7Ozs7Ozs7OztrQ0FHZiw4REFBQ2lCO3dCQUFJUCxXQUFVOzswQ0FDYiw4REFBQ2pCLGlEQUFJQTtnQ0FDSDhCLE1BQU1SO2dDQUNOTCxXQUFVOzBDQUVWLDRFQUFDbkIsaUhBQWVBO29DQUFDbUIsV0FBVTs7Ozs7Ozs7Ozs7MENBRTdCLDhEQUFDakIsaURBQUlBO2dDQUNIOEIsTUFBTVA7Z0NBQ05OLFdBQVU7MENBRVYsNEVBQUNsQixpSEFBT0E7b0NBQUNrQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJekIsOERBQUNPO2dCQUFJUCxXQUFVOzBCQUNiLDRFQUFDTztvQkFBSVAsV0FBVTs4QkFDYiw0RUFBQ087OzBDQUNDLDhEQUFDTztnQ0FBR2QsV0FBVTswQ0FBeUNHOzs7Ozs7MENBQ3ZELDhEQUFDWTtnQ0FBRWYsV0FBVTswQ0FBa0JJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNDO0tBakRNSDtBQW1ETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3g/N2IxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb2RlQnJhY2tldEljb24sIEV5ZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBzdmdMaXN0IH0gZnJvbSBcIi4uL2xpYi9zdmdzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuY29uc3Qgc3Znc0xpc3QgPSBbXG4gIHtcbiAgICBpZDogXCJodG1sXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL2h0bWw1L2h0bWw1LW9yaWdpbmFsLnN2Z1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY3NzXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL2NzczMvY3NzMy1vcmlnaW5hbC5zdmdcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInRhaWx3aW5kXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzLW9yaWdpbmFsLnN2Z1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiYm9vdHN0cmFwXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL2Jvb3RzdHJhcC9ib290c3RyYXAtb3JpZ2luYWwuc3ZnXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJqYXZhc2NyaXB0XCIsXG4gICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL2phdmFzY3JpcHQvamF2YXNjcmlwdC1vcmlnaW5hbC5zdmdcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInR5cGVzY3JpcHRcIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvdHlwZXNjcmlwdC90eXBlc2NyaXB0LW9yaWdpbmFsLnN2Z1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicmVhY3RcIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvcmVhY3QvcmVhY3Qtb3JpZ2luYWwuc3ZnXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJuZXh0XCIsXG4gICAgc3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uL2ljb25zL25leHRqcy9uZXh0anMtb3JpZ2luYWwuc3ZnXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJkb3RuZXRcIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb24vaWNvbnMvZG90bmV0Y29yZS9kb3RuZXRjb3JlLW9yaWdpbmFsLnN2Z1wiLFxuICB9LFxuXTtcblxuY29uc3QgaGFuZGxlU3ZnID0gKHN2Z3MpID0+IHtcbiAgcmV0dXJuIHN2Z3MubWFwKChzdmcsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3ZnRGF0YSA9IHN2Z0xpc3QuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gc3ZnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPEltYWdlXG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIHNyYz17c3ZnRGF0YS5zcmN9XG4gICAgICAgIGFsdD17c3ZnRGF0YS5pZH1cbiAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgLz5cbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IFByb2plY3RDYXJkID0gKHtcbiAgaW1nVXJsLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGdpdFVybCxcbiAgcHJldmlld1VybCxcbiAgc3Zncyxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJoLTYwIG1kOmgtNzIgcm91bmRlZC10LXhsIHJlbGF0aXZlIGdyb3VwXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7aW1nVXJsfSlgLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBwLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYmctWyMxODE4MThdIGJnLW9wYWNpdHktOTUgcm91bmRlZC1mdWxsIGdhcC0yIHB4LTYgcHktMlwiPlxuICAgICAgICAgICAge2hhbmRsZVN2ZyhzdmdzKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYmctWyMxODE4MThdIGJnLW9wYWNpdHktMCBoaWRkZW4gZ3JvdXAtaG92ZXI6ZmxleCBncm91cC1ob3ZlcjpiZy1vcGFjaXR5LTgwIGdyb3VwLWhvdmVyOnJvdW5kZWQtdC14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e2dpdFVybH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTQgdy0xNCBtci02IGJvcmRlci0yIHJlbGF0aXZlIHJvdW5kZWQtZnVsbCBib3JkZXItWyNBREI3QkVdIGhvdmVyOmJvcmRlci13aGl0ZSBncm91cC9saW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q29kZUJyYWNrZXRJY29uIGNsYXNzTmFtZT1cImgtMTAgdy0xMCB0ZXh0LVsjQUJEN0JFXSBhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgY3Vyc29yLXBvaW50ZXIgZ3JvdXAtaG92ZXIvbGluazp0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e3ByZXZpZXdVcmx9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTE0IHctMTQgYm9yZGVyLTIgcmVsYXRpdmUgcm91bmRlZC1mdWxsIGJvcmRlci1bI0FEQjdCRV0gaG92ZXI6Ym9yZGVyLXdoaXRlIGdyb3VwL2xpbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFeWVJY29uIGNsYXNzTmFtZT1cImgtMTAgdy0xMCB0ZXh0LVsjQUJEN0JFXSBhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgY3Vyc29yLXBvaW50ZXIgZ3JvdXAtaG92ZXIvbGluazp0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtYi14bCBtdC0zIGJnLVsjMTgxODE4XSBweS02IHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPnt0aXRsZX08L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0FEQjdCRV1cIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb2RlQnJhY2tldEljb24iLCJFeWVJY29uIiwiTGluayIsInN2Z0xpc3QiLCJJbWFnZSIsInN2Z3NMaXN0IiwiaWQiLCJzcmMiLCJoYW5kbGVTdmciLCJzdmdzIiwibWFwIiwic3ZnIiwiaW5kZXgiLCJzdmdEYXRhIiwiZmluZCIsIml0ZW0iLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTmFtZSIsIlByb2plY3RDYXJkIiwiaW1nVXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdpdFVybCIsInByZXZpZXdVcmwiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJocmVmIiwiaDUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ProjectCard.jsx\n"));

/***/ })

});