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
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("const openStream  = __webpack_require__(/*! ./videoUI/openStream */ 3);\n\nopenStream();\n\nconsole.log(\"Hello WebRTC\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvcGVuU3RyZWFtICA9IHJlcXVpcmUoXCIuL3ZpZGVvVUkvb3BlblN0cmVhbVwiKTtcblxub3BlblN0cmVhbSgpO1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvIFdlYlJUQ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/*!***********************************!*\
  !*** ./src/videoUI/openStream.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var playVideo = __webpack_require__(/*! ./playVideo */ 4);\nvar openStream=()=>{\n     const config ={ audio:false, video:true}\n            navigator.mediaDevices.getUserMedia(config)\n            .then(mediaSteam=>{\n                playVideo(mediaSteam,\"yourVideo\");\n            }).catch(err=>{\n                console.log(err);\n            })\n};\n\nmodule.exports = openStream;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWRlb1VJL29wZW5TdHJlYW0uanM/ODhhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGxheVZpZGVvID0gcmVxdWlyZSgnLi9wbGF5VmlkZW8nKTtcbnZhciBvcGVuU3RyZWFtPSgpPT57XG4gICAgIGNvbnN0IGNvbmZpZyA9eyBhdWRpbzpmYWxzZSwgdmlkZW86dHJ1ZX1cbiAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKG1lZGlhU3RlYW09PntcbiAgICAgICAgICAgICAgICBwbGF5VmlkZW8obWVkaWFTdGVhbSxcInlvdXJWaWRlb1wiKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBvcGVuU3RyZWFtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZGVvVUkvb3BlblN0cmVhbS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**********************************!*\
  !*** ./src/videoUI/playVideo.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("var playVideo = (mediaStream, idVideo) => {\n    var video = document.getElementById(idVideo);\n    video.srcObject = mediaStream;\n    video.onloadedmetadata = (e) => {\n        video.play();\n    }\n};\n\nmodule.exports = playVideo;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWRlb1VJL3BsYXlWaWRlby5qcz9mZDAzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBwbGF5VmlkZW8gPSAobWVkaWFTdHJlYW0sIGlkVmlkZW8pID0+IHtcbiAgICB2YXIgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZFZpZGVvKTtcbiAgICB2aWRlby5zcmNPYmplY3QgPSBtZWRpYVN0cmVhbTtcbiAgICB2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gKGUpID0+IHtcbiAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGxheVZpZGVvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZGVvVUkvcGxheVZpZGVvLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);