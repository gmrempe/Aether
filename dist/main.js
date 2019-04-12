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
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Base {\n    constructor(posX, posY, radius, color) {\n        this.posX = posX;\n        this.posY = posY;\n        this.radius = radius;\n        this.color = color;\n        this.counter = 20;\n        this.incrementor = this.incrementor.bind(this);\n        // setInterval( () => {this.incrementor()}, 1000);\n    }\n\n    incrementor() {\n        if(this.color !== \"#ffffff\" && this.counter <= 50) {\n            this.counter += 1\n        } else if (this.color !== \"#ffffff\" && this.counter > 50) {\n            this.counter += 2\n        }\n    }\n\n    contains(mx, my) {\n        return (this.posX + this.radius >= mx) && (this.posX - this.radius <= mx) &&\n            (this.posY + this.radius >= my) && (this.posY - this.radius <= my);\n    }\n    \n    drawCounter(ctx) {\n        ctx.fillStyle = \"rgb(255, 255, 255)\";\n        ctx.fillText(this.counter, this.posX -2, this.posY + 3);\n    }\n    \n    drawBase(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);\n        ctx.strokeStyle = this.color;\n        ctx.lineWidth = 5;\n        ctx.stroke();\n        ctx.fillStyle = 'rgba(0,0,0,.65)';\n        ctx.fill();\n        ctx.closePath();\n    }\n    \n    draw(ctx) {\n        this.drawBase(ctx);\n        this.drawCounter(ctx);\n    }\n        \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Base);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS5qcz80YWUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxtRUFBSSIsImZpbGUiOiIuL3NyYy9iYXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3NYLCBwb3NZLCByYWRpdXMsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1k7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDIwO1xuICAgICAgICB0aGlzLmluY3JlbWVudG9yID0gdGhpcy5pbmNyZW1lbnRvci5iaW5kKHRoaXMpO1xuICAgICAgICAvLyBzZXRJbnRlcnZhbCggKCkgPT4ge3RoaXMuaW5jcmVtZW50b3IoKX0sIDEwMDApO1xuICAgIH1cblxuICAgIGluY3JlbWVudG9yKCkge1xuICAgICAgICBpZih0aGlzLmNvbG9yICE9PSBcIiNmZmZmZmZcIiAmJiB0aGlzLmNvdW50ZXIgPD0gNTApIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciArPSAxXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2xvciAhPT0gXCIjZmZmZmZmXCIgJiYgdGhpcy5jb3VudGVyID4gNTApIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciArPSAyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb250YWlucyhteCwgbXkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnBvc1ggKyB0aGlzLnJhZGl1cyA+PSBteCkgJiYgKHRoaXMucG9zWCAtIHRoaXMucmFkaXVzIDw9IG14KSAmJlxuICAgICAgICAgICAgKHRoaXMucG9zWSArIHRoaXMucmFkaXVzID49IG15KSAmJiAodGhpcy5wb3NZIC0gdGhpcy5yYWRpdXMgPD0gbXkpO1xuICAgIH1cbiAgICBcbiAgICBkcmF3Q291bnRlcihjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmNvdW50ZXIsIHRoaXMucG9zWCAtMiwgdGhpcy5wb3NZICsgMyk7XG4gICAgfVxuICAgIFxuICAgIGRyYXdCYXNlKGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NYLCB0aGlzLnBvc1ksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwuNjUpJztcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdCYXNlKGN0eCk7XG4gICAgICAgIHRoaXMuZHJhd0NvdW50ZXIoY3R4KTtcbiAgICB9XG4gICAgICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/base.js\n");

/***/ }),

/***/ "./src/canvasState.js":
/*!****************************!*\
  !*** ./src/canvasState.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import Player from \"./player\";\n// import Base from \"./base\";\n\nclass CanvasState {\n    constructor(canvas, player) {\n        this.canvas = canvas\n        this.selection = null;\n        this.target = null;\n        this.shapes = [];\n        const myState = this;\n        this.player = player;\n\n        canvas.addEventListener('mousedown', (e) => {\n            const mouse = myState.getMouse(e);\n            const mx = mouse.x;\n            const my = mouse.y;\n            const shapes = myState.shapes;\n            for (let i = 0; i < shapes.length; i++) {\n                if (shapes[i].contains(mx, my) && shapes[i].color === this.player.color) { //match player color and mouse pos\n                    const mySel = shapes[i];\n                    myState.selection = mySel;\n                    return;\n                }\n            }\n            if (myState.selection) {\n                myState.selection = null;\n            }\n        }, true);\n\n        canvas.addEventListener('mouseup', (e) => {\n            const mouse = myState.getMouse(e);\n            const mx = mouse.x;\n            const my = mouse.y;\n            const shapes = myState.shapes;\n            for (let i = 0; i < shapes.length; i++) {\n                if (shapes[i].contains(mx, my)) {\n                    const mySel = shapes[i];\n                    myState.target = mySel;\n                    this.player.swarm(this.selection, this.target);\n                    return;\n                }\n            }   \n            this.selection = null;        \n        }, true);\n    }\n\n    addShape(shape) {\n        this.shapes.push(shape)\n    }\n\n    getMouse(evt) {\n        var rect = this.canvas.getBoundingClientRect();\n        return {\n            x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,\n            y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height\n        };\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasState);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2FudmFzU3RhdGUuanM/MGI4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QywwRkFBMEY7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYTtBQUNBLGtDO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSwwRUFBVyIsImZpbGUiOiIuL3NyYy9jYW52YXNTdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG4vLyBpbXBvcnQgQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmNsYXNzIENhbnZhc1N0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHBsYXllcikge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbXlTdGF0ZSA9IHRoaXM7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW91c2UgPSBteVN0YXRlLmdldE1vdXNlKGUpO1xuICAgICAgICAgICAgY29uc3QgbXggPSBtb3VzZS54O1xuICAgICAgICAgICAgY29uc3QgbXkgPSBtb3VzZS55O1xuICAgICAgICAgICAgY29uc3Qgc2hhcGVzID0gbXlTdGF0ZS5zaGFwZXM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzaGFwZXNbaV0uY29udGFpbnMobXgsIG15KSAmJiBzaGFwZXNbaV0uY29sb3IgPT09IHRoaXMucGxheWVyLmNvbG9yKSB7IC8vbWF0Y2ggcGxheWVyIGNvbG9yIGFuZCBtb3VzZSBwb3NcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXlTZWwgPSBzaGFwZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIG15U3RhdGUuc2VsZWN0aW9uID0gbXlTZWw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXlTdGF0ZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBteVN0YXRlLnNlbGVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gbXlTdGF0ZS5nZXRNb3VzZShlKTtcbiAgICAgICAgICAgIGNvbnN0IG14ID0gbW91c2UueDtcbiAgICAgICAgICAgIGNvbnN0IG15ID0gbW91c2UueTtcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlcyA9IG15U3RhdGUuc2hhcGVzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hhcGVzW2ldLmNvbnRhaW5zKG14LCBteSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXlTZWwgPSBzaGFwZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIG15U3RhdGUudGFyZ2V0ID0gbXlTZWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnN3YXJtKHRoaXMuc2VsZWN0aW9uLCB0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG51bGw7ICAgICAgICBcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgYWRkU2hhcGUoc2hhcGUpIHtcbiAgICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZSlcbiAgICB9XG5cbiAgICBnZXRNb3VzZShldnQpIHtcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IChldnQuY2xpZW50WCAtIHJlY3QubGVmdCkgLyAocmVjdC5yaWdodCAtIHJlY3QubGVmdCkgKiBjYW52YXMud2lkdGgsXG4gICAgICAgICAgICB5OiAoZXZ0LmNsaWVudFkgLSByZWN0LnRvcCkgLyAocmVjdC5ib3R0b20gLSByZWN0LnRvcCkgKiBjYW52YXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhc1N0YXRlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/canvasState.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weapon */ \"./src/weapon.js\");\n/* harmony import */ var _canvasState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvasState */ \"./src/canvasState.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"canvas\");\n    const ctx = canvasEl.getContext(\"2d\");\n\n    // document.addEventListener(\"onmousedown\", () => {\n    //     if (e.target.color === player.color) {\n\n    //     }\n    // })\n\n    // document.addEventListener(\"onmouseup\", () => {\n\n    // })\n\n    // const bases = [];    //put bases into array and then iterate through to draw\n    // bases = () => {\n    //    bases.push((new Base(40, 40, '#0095DD')))\n    // }\n    const player = new _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('#0095DD', ctx);\n    const canvasState = new _canvasState__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvasEl, player);\n    const base1 = new _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"](500, 300, 30, '#0095DD', ctx);\n    const base2 = new _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"](75, 75, 30, '#ff0000', ctx);\n    const base3 = new _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"](280, 200, 30, '#ffffff', ctx);\n    canvasState.addShape(base1);\n    canvasState.addShape(base2);\n    canvasState.addShape(base3);\n\n\n\n    function draw() {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        base1.draw(ctx);\n        base2.draw(ctx);\n        base3.draw(ctx);\n        // debugger\n        player.playerDraw(ctx);\n        requestAnimationFrame(draw);\n    }\n\n    requestAnimationFrame( () => {\n        draw(ctx);\n    })    \n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ0k7QUFDVTtBQUNWOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVE7O0FBRVI7O0FBRUEsUUFBUTs7QUFFUix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtDQUFNO0FBQzdCLDRCQUE0QixvREFBVztBQUN2QyxzQkFBc0IsNkNBQUk7QUFDMUIsc0JBQXNCLDZDQUFJO0FBQzFCLHNCQUFzQiw2Q0FBSTtBQUMxQjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi93ZWFwb25cIjtcbmltcG9ydCBDYW52YXNTdGF0ZSBmcm9tIFwiLi9jYW52YXNTdGF0ZVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubW91c2Vkb3duXCIsICgpID0+IHtcbiAgICAvLyAgICAgaWYgKGUudGFyZ2V0LmNvbG9yID09PSBwbGF5ZXIuY29sb3IpIHtcblxuICAgIC8vICAgICB9XG4gICAgLy8gfSlcblxuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvbm1vdXNldXBcIiwgKCkgPT4ge1xuXG4gICAgLy8gfSlcblxuICAgIC8vIGNvbnN0IGJhc2VzID0gW107ICAgIC8vcHV0IGJhc2VzIGludG8gYXJyYXkgYW5kIHRoZW4gaXRlcmF0ZSB0aHJvdWdoIHRvIGRyYXdcbiAgICAvLyBiYXNlcyA9ICgpID0+IHtcbiAgICAvLyAgICBiYXNlcy5wdXNoKChuZXcgQmFzZSg0MCwgNDAsICcjMDA5NUREJykpKVxuICAgIC8vIH1cbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCcjMDA5NUREJywgY3R4KTtcbiAgICBjb25zdCBjYW52YXNTdGF0ZSA9IG5ldyBDYW52YXNTdGF0ZShjYW52YXNFbCwgcGxheWVyKTtcbiAgICBjb25zdCBiYXNlMSA9IG5ldyBCYXNlKDUwMCwgMzAwLCAzMCwgJyMwMDk1REQnLCBjdHgpO1xuICAgIGNvbnN0IGJhc2UyID0gbmV3IEJhc2UoNzUsIDc1LCAzMCwgJyNmZjAwMDAnLCBjdHgpO1xuICAgIGNvbnN0IGJhc2UzID0gbmV3IEJhc2UoMjgwLCAyMDAsIDMwLCAnI2ZmZmZmZicsIGN0eCk7XG4gICAgY2FudmFzU3RhdGUuYWRkU2hhcGUoYmFzZTEpO1xuICAgIGNhbnZhc1N0YXRlLmFkZFNoYXBlKGJhc2UyKTtcbiAgICBjYW52YXNTdGF0ZS5hZGRTaGFwZShiYXNlMyk7XG5cblxuXG4gICAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBiYXNlMS5kcmF3KGN0eCk7XG4gICAgICAgIGJhc2UyLmRyYXcoY3R4KTtcbiAgICAgICAgYmFzZTMuZHJhdyhjdHgpO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBwbGF5ZXIucGxheWVyRHJhdyhjdHgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICAgIGRyYXcoY3R4KTtcbiAgICB9KSAgICBcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapon */ \"./src/weapon.js\");\n\n\nclass Player {\n    constructor(color) {\n        this.color = color;\n        this.weapons = [];\n        this.me = this;\n    }\n    \n    swarm(base, target) {\n        const delta = this.deltaMovement(base, target);\n        const num = base.counter;\n        base.counter = base.counter - Math.floor(base.counter / 2);  //generate num of weapons\n        for(let i = 0; i < num; i++) {\n           this.weapons.push(new _weapon__WEBPACK_IMPORTED_MODULE_0__[\"default\"] (base.posX, base.posY, this.color, delta, this.me, target));\n        }\n\n    }\n\n    deltaMovement(base, target) {\n        const data = this.distanceToBase(base.posX, base.posY, target.posX, target.posY);\n        const moves = data.distance / 2;\n        const x = (base.posX - target.posX) / moves;\n        const y = (base.posY - target.posY) / moves;\n        return {dx: x, dy: y, moves: moves}\n    }\n\n    distanceToBase(x1, y1, x2, y2) {\n        const x = x2 - x1;\n        const y = y2 - y1;\n\n        return {\n            distance: Math.sqrt(x * x + y * y),\n            // angle: Math.atan2(y, x) * 180 / Math.PI    for vector\n        }\n    }\n\n    playerDraw(ctx) {\n        this.weapons.forEach(weapon => weapon.weaponDraw(ctx))\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRSxzQkFBc0IsU0FBUztBQUMvQixpQ0FBaUMsK0NBQU07QUFDdkM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUscUVBQU0iLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi93ZWFwb25cIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb2xvcikge1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMud2VhcG9ucyA9IFtdO1xuICAgICAgICB0aGlzLm1lID0gdGhpcztcbiAgICB9XG4gICAgXG4gICAgc3dhcm0oYmFzZSwgdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gdGhpcy5kZWx0YU1vdmVtZW50KGJhc2UsIHRhcmdldCk7XG4gICAgICAgIGNvbnN0IG51bSA9IGJhc2UuY291bnRlcjtcbiAgICAgICAgYmFzZS5jb3VudGVyID0gYmFzZS5jb3VudGVyIC0gTWF0aC5mbG9vcihiYXNlLmNvdW50ZXIgLyAyKTsgIC8vZ2VuZXJhdGUgbnVtIG9mIHdlYXBvbnNcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgIHRoaXMud2VhcG9ucy5wdXNoKG5ldyBXZWFwb24gKGJhc2UucG9zWCwgYmFzZS5wb3NZLCB0aGlzLmNvbG9yLCBkZWx0YSwgdGhpcy5tZSwgdGFyZ2V0KSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGRlbHRhTW92ZW1lbnQoYmFzZSwgdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRpc3RhbmNlVG9CYXNlKGJhc2UucG9zWCwgYmFzZS5wb3NZLCB0YXJnZXQucG9zWCwgdGFyZ2V0LnBvc1kpO1xuICAgICAgICBjb25zdCBtb3ZlcyA9IGRhdGEuZGlzdGFuY2UgLyAyO1xuICAgICAgICBjb25zdCB4ID0gKGJhc2UucG9zWCAtIHRhcmdldC5wb3NYKSAvIG1vdmVzO1xuICAgICAgICBjb25zdCB5ID0gKGJhc2UucG9zWSAtIHRhcmdldC5wb3NZKSAvIG1vdmVzO1xuICAgICAgICByZXR1cm4ge2R4OiB4LCBkeTogeSwgbW92ZXM6IG1vdmVzfVxuICAgIH1cblxuICAgIGRpc3RhbmNlVG9CYXNlKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgIGNvbnN0IHggPSB4MiAtIHgxO1xuICAgICAgICBjb25zdCB5ID0geTIgLSB5MTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlzdGFuY2U6IE1hdGguc3FydCh4ICogeCArIHkgKiB5KSxcbiAgICAgICAgICAgIC8vIGFuZ2xlOiBNYXRoLmF0YW4yKHksIHgpICogMTgwIC8gTWF0aC5QSSAgICBmb3IgdmVjdG9yXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5ZXJEcmF3KGN0eCkge1xuICAgICAgICB0aGlzLndlYXBvbnMuZm9yRWFjaCh3ZWFwb24gPT4gd2VhcG9uLndlYXBvbkRyYXcoY3R4KSlcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/weapon.js":
/*!***********************!*\
  !*** ./src/weapon.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Weapon {\n    constructor(posX, posY, color, delta, owner, target) {\n        this.posX = posX + Math.random() * 20;\n        this.posY = posY + Math.random() * 20;\n        this.color = color;\n        this.dx = delta.dx;\n        this.dy = delta.dy;\n        this.moves = delta.moves;\n        this.owner = owner;\n        this.target = target;\n    }\n\n    weaponDraw(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.posX, this.posY, 2, 0, Math.PI * 2);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n\n        if(this.moves < 1) {\n            this.owner.weapons.pop();\n            if(this.color === this.target.color) {\n                this.target.counter += 0.5\n            } else if (this.target.counter > 0) {\n                this.target.counter -= 0.5;\n            } else if (this.target.counter <= 0) {\n                // debugger\n                this.target.color = this.color;\n                this.target.counter = 5;\n            }\n        }\n\n        this.posX -= this.dx;\n        this.posY -= this.dy;\n        this.moves -= 1;\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weapon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2VhcG9uLmpzP2YyODYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxxRUFBTSIsImZpbGUiOiIuL3NyYy93ZWFwb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBXZWFwb24ge1xuICAgIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIGNvbG9yLCBkZWx0YSwgb3duZXIsIHRhcmdldCkge1xuICAgICAgICB0aGlzLnBvc1ggPSBwb3NYICsgTWF0aC5yYW5kb20oKSAqIDIwO1xuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZICsgTWF0aC5yYW5kb20oKSAqIDIwO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuZHggPSBkZWx0YS5keDtcbiAgICAgICAgdGhpcy5keSA9IGRlbHRhLmR5O1xuICAgICAgICB0aGlzLm1vdmVzID0gZGVsdGEubW92ZXM7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgfVxuXG4gICAgd2VhcG9uRHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMucG9zWCwgdGhpcy5wb3NZLCAyLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGlmKHRoaXMubW92ZXMgPCAxKSB7XG4gICAgICAgICAgICB0aGlzLm93bmVyLndlYXBvbnMucG9wKCk7XG4gICAgICAgICAgICBpZih0aGlzLmNvbG9yID09PSB0aGlzLnRhcmdldC5jb2xvcikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmNvdW50ZXIgKz0gMC41XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0LmNvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuY291bnRlciAtPSAwLjU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0LmNvdW50ZXIgPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmNvdW50ZXIgPSA1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3NYIC09IHRoaXMuZHg7XG4gICAgICAgIHRoaXMucG9zWSAtPSB0aGlzLmR5O1xuICAgICAgICB0aGlzLm1vdmVzIC09IDE7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXBvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/weapon.js\n");

/***/ })

/******/ });