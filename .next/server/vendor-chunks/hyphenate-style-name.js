"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hyphenate-style-name";
exports.ids = ["vendor-chunks/hyphenate-style-name"];
exports.modules = {

/***/ "(ssr)/./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-var, prefer-template */ var uppercasePattern = /[A-Z]/g;\nvar msPattern = /^ms-/;\nvar cache = {};\nfunction toHyphenLower(match) {\n    return \"-\" + match.toLowerCase();\n}\nfunction hyphenateStyleName(name) {\n    if (cache.hasOwnProperty(name)) {\n        return cache[name];\n    }\n    var hName = name.replace(uppercasePattern, toHyphenLower);\n    return cache[name] = msPattern.test(hName) ? \"-\" + hName : hName;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hyphenateStyleName);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHlwaGVuYXRlLXN0eWxlLW5hbWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBDQUEwQyxHQUMxQyxJQUFJQSxtQkFBbUI7QUFDdkIsSUFBSUMsWUFBWTtBQUNoQixJQUFJQyxRQUFRLENBQUM7QUFFYixTQUFTQyxjQUFjQyxLQUFLO0lBQzFCLE9BQU8sTUFBTUEsTUFBTUMsV0FBVztBQUNoQztBQUVBLFNBQVNDLG1CQUFtQkMsSUFBSTtJQUM5QixJQUFJTCxNQUFNTSxjQUFjLENBQUNELE9BQU87UUFDOUIsT0FBT0wsS0FBSyxDQUFDSyxLQUFLO0lBQ3BCO0lBRUEsSUFBSUUsUUFBUUYsS0FBS0csT0FBTyxDQUFDVixrQkFBa0JHO0lBQzNDLE9BQVFELEtBQUssQ0FBQ0ssS0FBSyxHQUFHTixVQUFVVSxJQUFJLENBQUNGLFNBQVMsTUFBTUEsUUFBUUE7QUFDOUQ7QUFFQSxpRUFBZUgsa0JBQWtCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhdmVsLWZlLy4vbm9kZV9tb2R1bGVzL2h5cGhlbmF0ZS1zdHlsZS1uYW1lL2luZGV4LmpzPzIwMjgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdmFyLCBwcmVmZXItdGVtcGxhdGUgKi9cbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2dcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS9cbnZhciBjYWNoZSA9IHt9XG5cbmZ1bmN0aW9uIHRvSHlwaGVuTG93ZXIobWF0Y2gpIHtcbiAgcmV0dXJuICctJyArIG1hdGNoLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKG5hbWUpIHtcbiAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgcmV0dXJuIGNhY2hlW25hbWVdXG4gIH1cblxuICB2YXIgaE5hbWUgPSBuYW1lLnJlcGxhY2UodXBwZXJjYXNlUGF0dGVybiwgdG9IeXBoZW5Mb3dlcilcbiAgcmV0dXJuIChjYWNoZVtuYW1lXSA9IG1zUGF0dGVybi50ZXN0KGhOYW1lKSA/ICctJyArIGhOYW1lIDogaE5hbWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGh5cGhlbmF0ZVN0eWxlTmFtZVxuIl0sIm5hbWVzIjpbInVwcGVyY2FzZVBhdHRlcm4iLCJtc1BhdHRlcm4iLCJjYWNoZSIsInRvSHlwaGVuTG93ZXIiLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiaHlwaGVuYXRlU3R5bGVOYW1lIiwibmFtZSIsImhhc093blByb3BlcnR5IiwiaE5hbWUiLCJyZXBsYWNlIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hyphenate-style-name/index.js\n");

/***/ })

};
;