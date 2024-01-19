"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jss-plugin-props-sort";
exports.ids = ["vendor-chunks/jss-plugin-props-sort"];
exports.modules = {

/***/ "(ssr)/./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Sort props by length.\n */ function jssPropsSort() {\n    var sort = function sort(prop0, prop1) {\n        if (prop0.length === prop1.length) {\n            return prop0 > prop1 ? 1 : -1;\n        }\n        return prop0.length - prop1.length;\n    };\n    return {\n        onProcessStyle: function onProcessStyle(style, rule) {\n            if (rule.type !== \"style\") return style;\n            var newStyle = {};\n            var props = Object.keys(style).sort(sort);\n            for(var i = 0; i < props.length; i++){\n                newStyle[props[i]] = style[props[i]];\n            }\n            return newStyle;\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jssPropsSort);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1wcm9wcy1zb3J0L2Rpc3QvanNzLXBsdWdpbi1wcm9wcy1zb3J0LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0NBRUMsR0FDRCxTQUFTQTtJQUNQLElBQUlDLE9BQU8sU0FBU0EsS0FBS0MsS0FBSyxFQUFFQyxLQUFLO1FBQ25DLElBQUlELE1BQU1FLE1BQU0sS0FBS0QsTUFBTUMsTUFBTSxFQUFFO1lBQ2pDLE9BQU9GLFFBQVFDLFFBQVEsSUFBSSxDQUFDO1FBQzlCO1FBRUEsT0FBT0QsTUFBTUUsTUFBTSxHQUFHRCxNQUFNQyxNQUFNO0lBQ3BDO0lBRUEsT0FBTztRQUNMQyxnQkFBZ0IsU0FBU0EsZUFBZUMsS0FBSyxFQUFFQyxJQUFJO1lBQ2pELElBQUlBLEtBQUtDLElBQUksS0FBSyxTQUFTLE9BQU9GO1lBQ2xDLElBQUlHLFdBQVcsQ0FBQztZQUNoQixJQUFJQyxRQUFRQyxPQUFPQyxJQUFJLENBQUNOLE9BQU9MLElBQUksQ0FBQ0E7WUFFcEMsSUFBSyxJQUFJWSxJQUFJLEdBQUdBLElBQUlILE1BQU1OLE1BQU0sRUFBRVMsSUFBSztnQkFDckNKLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDRyxFQUFFLENBQUMsR0FBR1AsS0FBSyxDQUFDSSxLQUFLLENBQUNHLEVBQUUsQ0FBQztZQUN0QztZQUVBLE9BQU9KO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsaUVBQWVULFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmF2ZWwtZmUvLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1wcm9wcy1zb3J0L2Rpc3QvanNzLXBsdWdpbi1wcm9wcy1zb3J0LmVzbS5qcz9iNTJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU29ydCBwcm9wcyBieSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIGpzc1Byb3BzU29ydCgpIHtcbiAgdmFyIHNvcnQgPSBmdW5jdGlvbiBzb3J0KHByb3AwLCBwcm9wMSkge1xuICAgIGlmIChwcm9wMC5sZW5ndGggPT09IHByb3AxLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHByb3AwID4gcHJvcDEgPyAxIDogLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3AwLmxlbmd0aCAtIHByb3AxLmxlbmd0aDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuIHN0eWxlO1xuICAgICAgdmFyIG5ld1N0eWxlID0ge307XG4gICAgICB2YXIgcHJvcHMgPSBPYmplY3Qua2V5cyhzdHlsZSkuc29ydChzb3J0KTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXdTdHlsZVtwcm9wc1tpXV0gPSBzdHlsZVtwcm9wc1tpXV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdHlsZTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzc1Byb3BzU29ydDtcbiJdLCJuYW1lcyI6WyJqc3NQcm9wc1NvcnQiLCJzb3J0IiwicHJvcDAiLCJwcm9wMSIsImxlbmd0aCIsIm9uUHJvY2Vzc1N0eWxlIiwic3R5bGUiLCJydWxlIiwidHlwZSIsIm5ld1N0eWxlIiwicHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js\n");

/***/ })

};
;