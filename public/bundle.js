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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Couldn't find preset \\\"stage-0\\\" relative to directory \\\"/Users/chrisstuckey/Desktop/gcaptainreact/app\\\"\\n    at /Users/chrisstuckey/Desktop/gcaptainreact/node_modules/babel-core/lib/transformation/file/options/option-manager.js:293:19\\n    at Array.map (native)\\n    at OptionManager.resolvePresets (/Users/chrisstuckey/Desktop/gcaptainreact/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)\\n    at OptionManager.mergePresets (/Users/chrisstuckey/Desktop/gcaptainreact/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)\\n    at OptionManager.mergeOptions (/Users/chrisstuckey/Desktop/gcaptainreact/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)\\n    at OptionManager.init (/Users/chrisstuckey/Desktop/gcaptainreact/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)\\n    at File.initOptions (/Users/chrisstuckey/Desktop/gcaptainreact/node_modules/babel-core/lib/transformation/file/index.js:212:65)\\n    at new File (/Users/chrisstuckey/Desktop/gcaptainreact/node_modules/babel-core/lib/transformation/file/index.js:135:24)\\n    at Pipeline.transform (/Users/chrisstuckey/Desktop/gcaptainreact/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\\n    at transpile (/Users/chrisstuckey/Desktop/gcaptainreact/node_modules/babel-loader/lib/index.js:49:20)\\n    at Object.module.exports (/Users/chrisstuckey/Desktop/gcaptainreact/node_modules/babel-loader/lib/index.js:174:20)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIwLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);