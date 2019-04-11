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
eval("__webpack_require__.r(__webpack_exports__);\nclass Base {\n    constructor(posX, posY, color, ctx) {\n        this.posX = posX;\n        this.posY = posY;\n        this.color = color;\n        this.counter = 0;\n        this.incrementor = this.incrementor.bind(this);\n        setInterval( () => {this.incrementor(ctx)}, 700);\n    }\n\n    incrementor(ctx) {\n        if(this.color !== \"#ffffff\") {\n            this.counter += 1\n        }\n    }\n    \n    drawCounter(ctx) {\n        ctx.fillStyle = \"rgb(255, 255, 255)\";\n        ctx.fillText(this.counter, this.posX -2, this.posY + 3);\n    }\n    \n    drawBase(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.posX, this.posY, 30, 0, Math.PI * 2);\n        ctx.strokeStyle = this.color;\n        ctx.lineWidth = 5;\n        ctx.stroke();\n        ctx.fillStyle = 'rgba(0,0,0,.65)';\n        ctx.fill();\n        ctx.closePath();\n    }\n    \n    draw(ctx) {\n        this.drawCounter(ctx);\n        this.drawBase(ctx);\n    }\n        \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Base);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS5qcz80YWUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsbUVBQUkiLCJmaWxlIjoiLi9zcmMvYmFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIGNvbG9yLCBjdHgpIHtcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLmluY3JlbWVudG9yID0gdGhpcy5pbmNyZW1lbnRvci5iaW5kKHRoaXMpO1xuICAgICAgICBzZXRJbnRlcnZhbCggKCkgPT4ge3RoaXMuaW5jcmVtZW50b3IoY3R4KX0sIDcwMCk7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50b3IoY3R4KSB7XG4gICAgICAgIGlmKHRoaXMuY29sb3IgIT09IFwiI2ZmZmZmZlwiKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRyYXdDb3VudGVyKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuY291bnRlciwgdGhpcy5wb3NYIC0yLCB0aGlzLnBvc1kgKyAzKTtcbiAgICB9XG4gICAgXG4gICAgZHJhd0Jhc2UoY3R4KSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc1gsIHRoaXMucG9zWSwgMzAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLC42NSknO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIFxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0NvdW50ZXIoY3R4KTtcbiAgICAgICAgdGhpcy5kcmF3QmFzZShjdHgpO1xuICAgIH1cbiAgICAgICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/base.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"canvas\");\n\n    const ctx = canvasEl.getContext(\"2d\");\n\n    // const bases = [];    //put bases into array and then iterate through to draw\n    // bases = () => {\n    //    bases.push((new Base(40, 40, '#0095DD')))\n    // }\n    const base1 = new _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"](500, 300, '#0095DD', ctx);\n    const base2 = new _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"](75, 75, '#ff0000', ctx);\n    const base3 = new _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"](280, 200, '#ffffff', ctx);\n\n    function draw() {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        base1.draw(ctx);\n        base2.draw(ctx);\n        base3.draw(ctx);\n        requestAnimationFrame(draw);\n    }\n\n    setInterval( () => {\n        draw(ctx);\n    }, 100)    \n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQTBCOztBQUUxQjtBQUNBOztBQUVBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQUk7QUFDMUIsc0JBQXNCLDZDQUFJO0FBQzFCLHNCQUFzQiw2Q0FBSTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIC8vIGNvbnN0IGJhc2VzID0gW107ICAgIC8vcHV0IGJhc2VzIGludG8gYXJyYXkgYW5kIHRoZW4gaXRlcmF0ZSB0aHJvdWdoIHRvIGRyYXdcbiAgICAvLyBiYXNlcyA9ICgpID0+IHtcbiAgICAvLyAgICBiYXNlcy5wdXNoKChuZXcgQmFzZSg0MCwgNDAsICcjMDA5NUREJykpKVxuICAgIC8vIH1cbiAgICBjb25zdCBiYXNlMSA9IG5ldyBCYXNlKDUwMCwgMzAwLCAnIzAwOTVERCcsIGN0eCk7XG4gICAgY29uc3QgYmFzZTIgPSBuZXcgQmFzZSg3NSwgNzUsICcjZmYwMDAwJywgY3R4KTtcbiAgICBjb25zdCBiYXNlMyA9IG5ldyBCYXNlKDI4MCwgMjAwLCAnI2ZmZmZmZicsIGN0eCk7XG5cbiAgICBmdW5jdGlvbiBkcmF3KCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGJhc2UxLmRyYXcoY3R4KTtcbiAgICAgICAgYmFzZTIuZHJhdyhjdHgpO1xuICAgICAgICBiYXNlMy5kcmF3KGN0eCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbCggKCkgPT4ge1xuICAgICAgICBkcmF3KGN0eCk7XG4gICAgfSwgMTAwKSAgICBcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });