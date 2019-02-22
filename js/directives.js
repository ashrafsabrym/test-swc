/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./directives.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./directives.ts":
/*!***********************!*\
  !*** ./directives.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _directives_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/directive */ \"./directives/directive.ts\");\n/* harmony import */ var _directives_directive2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/directive2 */ \"./directives/directive2.ts\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular */ \"angular\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nangular__WEBPACK_IMPORTED_MODULE_2__[\"module\"]('directives', []).directive('directive', _directives_directive__WEBPACK_IMPORTED_MODULE_0__[\"directive\"]).directive('directive2', _directives_directive2__WEBPACK_IMPORTED_MODULE_1__[\"directive2\"]);\n\n\n//# sourceURL=webpack:///./directives.ts?");

/***/ }),

/***/ "./directives/directive.ts":
/*!*********************************!*\
  !*** ./directives/directive.ts ***!
  \*********************************/
/*! exports provided: DirectiveController, directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectiveController\", function() { return DirectiveController; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"directive\", function() { return directive; });\nfunction DirectiveController($scope, $attrs) {\n    this['$scope'] = $scope;\n    this['$attrs'] = $attrs;\n    this.action = action;\n    function action() {\n    }\n}\nDirectiveController['$inject'] = ['$scope', '$attrs'];\nfunction directive() {\n    return {\n        restrict: 'A',\n        scope: false,\n        controller: DirectiveController\n    };\n}\n\n\n//# sourceURL=webpack:///./directives/directive.ts?");

/***/ }),

/***/ "./directives/directive2.ts":
/*!**********************************!*\
  !*** ./directives/directive2.ts ***!
  \**********************************/
/*! exports provided: directive2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"directive2\", function() { return directive2; });\nfunction directive2() {\n    return {\n        restrict: 'E',\n        link: function(scope) {\n            var startOperation1 = function startOperation1(operation) {\n                scope.agentOperation = operation;\n            };\n            scope.startOperation = startOperation;\n        }\n    };\n}\n\n\n//# sourceURL=webpack:///./directives/directive2.ts?");

/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = angular;\n\n//# sourceURL=webpack:///external_%22angular%22?");

/***/ })

/******/ });