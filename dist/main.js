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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Base {\n    constructor(posX, posY, color) {\n        this.posX = posX,\n        this.posY = posY,\n        this.color = color,\n        this.counter = 0\n        // this.incrementor = this.incrementor.bind(this);\n    }\n\n    // incrementor() {\n    //     this.counter += 1\n    // }\n\n    // setInterval( this.incrementor, 3000);\n\n    drawCounter(ctx) {\n        ctx.fillStyle = \"#ffffff\";\n        ctx.fillText(this.counter, this.posX -2, this.posY + 3);\n    }\n\n    drawBase(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.posX, this.posY, 30, 0, Math.PI * 2);\n        ctx.strokeStyle = this.color;\n        ctx.lineWidth = 5;\n        ctx.stroke();\n        ctx.fillStyle = 'rgba(0,0,0,.65)';\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    draw(ctx) {\n        this.drawCounter(ctx);\n        this.drawBase(ctx);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Base);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS5qcz80YWUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsbUVBQUkiLCJmaWxlIjoiLi9zcmMvYmFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIGNvbG9yKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1gsXG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1ksXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcixcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMFxuICAgICAgICAvLyB0aGlzLmluY3JlbWVudG9yID0gdGhpcy5pbmNyZW1lbnRvci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGluY3JlbWVudG9yKCkge1xuICAgIC8vICAgICB0aGlzLmNvdW50ZXIgKz0gMVxuICAgIC8vIH1cblxuICAgIC8vIHNldEludGVydmFsKCB0aGlzLmluY3JlbWVudG9yLCAzMDAwKTtcblxuICAgIGRyYXdDb3VudGVyKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmNvdW50ZXIsIHRoaXMucG9zWCAtMiwgdGhpcy5wb3NZICsgMyk7XG4gICAgfVxuXG4gICAgZHJhd0Jhc2UoY3R4KSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc1gsIHRoaXMucG9zWSwgMzAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLC42NSknO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3Q291bnRlcihjdHgpO1xuICAgICAgICB0aGlzLmRyYXdCYXNlKGN0eCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/base.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"canvas\");\n\n    const ctx = canvasEl.getContext(\"2d\");\n\n    // const bases = [];    //put bases into array and then iterate through to draw\n    // bases = () => {\n    //    bases.push((new Base(40, 40, '#0095DD')))\n    // }\n    const base1 = new _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"](500, 300, '#0095DD');\n    const base2 = new _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"](75, 75, '#ff0000');\n\n    function draw(ctx) {\n        base1.draw(ctx);\n        base2.draw(ctx);\n        // requestAnimationFrame(draw);\n    }\n\n    draw(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQTBCOztBQUUxQjtBQUNBOztBQUVBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQUk7QUFDMUIsc0JBQXNCLDZDQUFJOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAvLyBjb25zdCBiYXNlcyA9IFtdOyAgICAvL3B1dCBiYXNlcyBpbnRvIGFycmF5IGFuZCB0aGVuIGl0ZXJhdGUgdGhyb3VnaCB0byBkcmF3XG4gICAgLy8gYmFzZXMgPSAoKSA9PiB7XG4gICAgLy8gICAgYmFzZXMucHVzaCgobmV3IEJhc2UoNDAsIDQwLCAnIzAwOTVERCcpKSlcbiAgICAvLyB9XG4gICAgY29uc3QgYmFzZTEgPSBuZXcgQmFzZSg1MDAsIDMwMCwgJyMwMDk1REQnKTtcbiAgICBjb25zdCBiYXNlMiA9IG5ldyBCYXNlKDc1LCA3NSwgJyNmZjAwMDAnKTtcblxuICAgIGZ1bmN0aW9uIGRyYXcoY3R4KSB7XG4gICAgICAgIGJhc2UxLmRyYXcoY3R4KTtcbiAgICAgICAgYmFzZTIuZHJhdyhjdHgpO1xuICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });