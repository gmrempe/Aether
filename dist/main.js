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
eval("__webpack_require__.r(__webpack_exports__);\nclass Base {\n    constructor(posX, posY, color) {\n        this.posX = posX;\n        this.posY = posY;\n        this.color = color;\n        this.counter = 0;\n        this.incrementor = this.incrementor.bind(this);\n        // setInterval( () => {this.incrementor()}, 700);\n    }\n\n    incrementor() {\n        if(this.color !== \"#ffffff\") {\n            this.counter += 1\n        }\n    }\n    \n    drawCounter(ctx) {\n        ctx.fillStyle = \"rgb(255, 255, 255)\";\n        ctx.fillText(this.counter, this.posX -2, this.posY + 3);\n    }\n    \n    drawBase(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.posX, this.posY, 30, 0, Math.PI * 2);\n        ctx.strokeStyle = this.color;\n        ctx.lineWidth = 5;\n        ctx.stroke();\n        ctx.fillStyle = 'rgba(0,0,0,.65)';\n        ctx.fill();\n        ctx.closePath();\n    }\n    \n    draw(ctx) {\n        this.drawBase(ctx);\n        this.drawCounter(ctx);\n    }\n        \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Base);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS5qcz80YWUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUJBQW1CO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsbUVBQUkiLCJmaWxlIjoiLi9zcmMvYmFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIGNvbG9yKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1k7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnRvciA9IHRoaXMuaW5jcmVtZW50b3IuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwoICgpID0+IHt0aGlzLmluY3JlbWVudG9yKCl9LCA3MDApO1xuICAgIH1cblxuICAgIGluY3JlbWVudG9yKCkge1xuICAgICAgICBpZih0aGlzLmNvbG9yICE9PSBcIiNmZmZmZmZcIikge1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyICs9IDFcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkcmF3Q291bnRlcihjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmNvdW50ZXIsIHRoaXMucG9zWCAtMiwgdGhpcy5wb3NZICsgMyk7XG4gICAgfVxuICAgIFxuICAgIGRyYXdCYXNlKGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NYLCB0aGlzLnBvc1ksIDMwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwuNjUpJztcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdCYXNlKGN0eCk7XG4gICAgICAgIHRoaXMuZHJhd0NvdW50ZXIoY3R4KTtcbiAgICB9XG4gICAgICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/base.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weapon */ \"./src/weapon.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"canvas\");\n    const ctx = canvasEl.getContext(\"2d\");\n\n\n    document.addEventListener(\"onmousedown\", () => {\n        \n        // if e.target.color === player.color\n    })\n\n    document.addEventListener(\"onmouseup\", () => {\n\n    })\n\n    // const bases = [];    //put bases into array and then iterate through to draw\n    // bases = () => {\n    //    bases.push((new Base(40, 40, '#0095DD')))\n    // }\n    const base1 = new _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"](500, 300, '#0095DD', ctx);\n    const base2 = new _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"](75, 75, '#ff0000', ctx);\n    const base3 = new _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"](280, 200, '#ffffff', ctx);\n\n    function draw() {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        base1.draw(ctx);\n        base2.draw(ctx);\n        base3.draw(ctx);\n        // requestAnimationFrame(draw);\n    }\n\n    // rquestAnimationFrame( () => {\n        draw(ctx);\n    // })    \n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDSTs7QUFFOUI7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEsS0FBSzs7QUFFTCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFJO0FBQzFCLHNCQUFzQiw2Q0FBSTtBQUMxQixzQkFBc0IsNkNBQUk7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCBXZWFwb24gZnJvbSBcIi4vd2VhcG9uXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubW91c2Vkb3duXCIsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIC8vIGlmIGUudGFyZ2V0LmNvbG9yID09PSBwbGF5ZXIuY29sb3JcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubW91c2V1cFwiLCAoKSA9PiB7XG5cbiAgICB9KVxuXG4gICAgLy8gY29uc3QgYmFzZXMgPSBbXTsgICAgLy9wdXQgYmFzZXMgaW50byBhcnJheSBhbmQgdGhlbiBpdGVyYXRlIHRocm91Z2ggdG8gZHJhd1xuICAgIC8vIGJhc2VzID0gKCkgPT4ge1xuICAgIC8vICAgIGJhc2VzLnB1c2goKG5ldyBCYXNlKDQwLCA0MCwgJyMwMDk1REQnKSkpXG4gICAgLy8gfVxuICAgIGNvbnN0IGJhc2UxID0gbmV3IEJhc2UoNTAwLCAzMDAsICcjMDA5NUREJywgY3R4KTtcbiAgICBjb25zdCBiYXNlMiA9IG5ldyBCYXNlKDc1LCA3NSwgJyNmZjAwMDAnLCBjdHgpO1xuICAgIGNvbnN0IGJhc2UzID0gbmV3IEJhc2UoMjgwLCAyMDAsICcjZmZmZmZmJywgY3R4KTtcblxuICAgIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgYmFzZTEuZHJhdyhjdHgpO1xuICAgICAgICBiYXNlMi5kcmF3KGN0eCk7XG4gICAgICAgIGJhc2UzLmRyYXcoY3R4KTtcbiAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuICAgIH1cblxuICAgIC8vIHJxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICAgIGRyYXcoY3R4KTtcbiAgICAvLyB9KSAgICBcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/weapon.js":
/*!***********************!*\
  !*** ./src/weapon.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Weapon {\n    constructor(posX, posY, posX2, posY2, color) {\n        this.posX = posX;\n        this.posY = posY;\n        this.posX2 = posX2;\n        this.posY2 = posY2;\n        this.color = color;\n    }\n    \n    // distanceToBase(x1, y1, x2, y2) {\n    //     const x = x2 - x1;\n    //     const y = y2 - y1;\n\n    //     return {\n    //         distance: Math.sqrt(x * x + y * y),\n    //         angle: Math.atan2(y, x) * 180 / Math.PI\n    //     }\n    // }\n\n    // const mouseCoords = getMouseCoords();\n    // const data = distanceToBase(base.x, base.y, mouse.x, mouse.y);\n    // //Spread movement out over three seconds\n    // const velocity = data.distance / 3;\n    // const toMouseVector = new Vector(velocity, data.angle);\n\n\n    drawWeapon(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.posX, this.posY, 5, 0, Math.PI * 2);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weapon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2VhcG9uLmpzP2YyODYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHFFQUFNIiwiZmlsZSI6Ii4vc3JjL3dlYXBvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFdlYXBvbiB7XG4gICAgY29uc3RydWN0b3IocG9zWCwgcG9zWSwgcG9zWDIsIHBvc1kyLCBjb2xvcikge1xuICAgICAgICB0aGlzLnBvc1ggPSBwb3NYO1xuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xuICAgICAgICB0aGlzLnBvc1gyID0gcG9zWDI7XG4gICAgICAgIHRoaXMucG9zWTIgPSBwb3NZMjtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICBcbiAgICAvLyBkaXN0YW5jZVRvQmFzZSh4MSwgeTEsIHgyLCB5Mikge1xuICAgIC8vICAgICBjb25zdCB4ID0geDIgLSB4MTtcbiAgICAvLyAgICAgY29uc3QgeSA9IHkyIC0geTE7XG5cbiAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICAgIGRpc3RhbmNlOiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSksXG4gICAgLy8gICAgICAgICBhbmdsZTogTWF0aC5hdGFuMih5LCB4KSAqIDE4MCAvIE1hdGguUElcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IG1vdXNlQ29vcmRzID0gZ2V0TW91c2VDb29yZHMoKTtcbiAgICAvLyBjb25zdCBkYXRhID0gZGlzdGFuY2VUb0Jhc2UoYmFzZS54LCBiYXNlLnksIG1vdXNlLngsIG1vdXNlLnkpO1xuICAgIC8vIC8vU3ByZWFkIG1vdmVtZW50IG91dCBvdmVyIHRocmVlIHNlY29uZHNcbiAgICAvLyBjb25zdCB2ZWxvY2l0eSA9IGRhdGEuZGlzdGFuY2UgLyAzO1xuICAgIC8vIGNvbnN0IHRvTW91c2VWZWN0b3IgPSBuZXcgVmVjdG9yKHZlbG9jaXR5LCBkYXRhLmFuZ2xlKTtcblxuXG4gICAgZHJhd1dlYXBvbihjdHgpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMucG9zWCwgdGhpcy5wb3NZLCA1LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhcG9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/weapon.js\n");

/***/ })

/******/ });