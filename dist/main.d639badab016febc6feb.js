/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n// navbar\r\n\r\nconst navLinks = document.querySelectorAll(\".link\");\r\nconst sections = document.querySelectorAll(\"section\");\r\n\r\nfunction currentSection() {\r\n    navLinks.forEach((link) => {\r\n        link.addEventListener(\"click\", (e) => {\r\n            navLinks.forEach((item) => {\r\n                item.classList.remove(\"active\");\r\n            });\r\n            e.target.classList.add(\"active\");\r\n        });\r\n    });\r\n}\r\n\r\nfunction onScroll() {\r\n    let currentSectionIndex = 0;\r\n    let prevSectionBottom = 0;\r\n\r\n    sections.forEach((section, i) => {\r\n        const sectionTop = section.offsetTop;\r\n        const sectionBottom = sectionTop + section.offsetHeight;\r\n        const scrollTop = window.scrollY;\r\n\r\n        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {\r\n            currentSectionIndex = i;\r\n        } else if (scrollTop >= sectionBottom) {\r\n            prevSectionBottom = sectionBottom;\r\n        }\r\n    });\r\n\r\n    navLinks.forEach((link, i) => {\r\n        if (i === currentSectionIndex) {\r\n            link.classList.add(\"active\");\r\n        } else {\r\n            link.classList.remove(\"active\");\r\n        }\r\n    });\r\n}\r\n\r\nwindow.addEventListener(\"scroll\", () => {\r\n    sections.forEach((section) => {\r\n        if (section.offsetHeight === window.innerHeight) {\r\n            onScroll();\r\n        }\r\n    });\r\n});\r\n\r\ncurrentSection();\r\n\r\n// Modal\r\nconst btn = document.querySelectorAll(\".btn__show-modal\");\r\nconst modal = document.querySelector(\".modal\");\r\nconst modalClose = document.querySelector(\".modal__close\");\r\nconst modalSubmit = document.querySelector(\".modal__form-btn\");\r\nconst nav = document.querySelector(\".nav\");\r\n\r\nbtn.forEach((item) => {\r\n    item.addEventListener(\"click\", () => {\r\n        nav.classList.add(\"hide\");\r\n        modal.classList.add(\"modal__show\");\r\n        document.body.style.overflow = \"hidden\";\r\n        modalClose.addEventListener(\"click\", () => closeModal());\r\n        modalSubmit.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            closeModal();\r\n        });\r\n    });\r\n});\r\n\r\nfunction closeModal() {\r\n    nav.classList.remove(\"hide\");\r\n    modal.classList.remove(\"modal__show\");\r\n    document.body.style.overflow = \"auto\";\r\n}\r\n\r\n// View counter\r\n\r\nfunction viewCounter() {\r\n    let visitCount = 0;\r\n    let totalDuration = Number(localStorage.totalDuration) || 0;\r\n    let lastVisitTime = null;\r\n\r\n    if (typeof Storage !== \"undefined\") {\r\n        if (localStorage.visitCount) {\r\n            localStorage.visitCount = Number(localStorage.visitCount) + 1;\r\n        } else {\r\n            localStorage.visitCount = 1;\r\n            localStorage.firstVisitTime = new Date().getTime();\r\n        }\r\n\r\n        const currentTime = new Date().getTime();\r\n\r\n        if (localStorage.lastVisitTime) {\r\n            const duration = currentTime - Number(localStorage.lastVisitTime);\r\n            totalDuration += duration;\r\n        }\r\n\r\n        localStorage.lastVisitTime = currentTime;\r\n        localStorage.totalDuration = totalDuration;\r\n        const averageDuration = totalDuration / localStorage.visitCount;\r\n        const totalTime = Math.round(totalDuration / 1000);\r\n        const averageTime = Math.round(averageDuration / 1000);\r\n\r\n        console.log(`Total time: ${totalTime} s`);\r\n        console.log(`Average time: ${averageTime} s`);\r\n    } else {\r\n        console.log(\"ERROR\");\r\n    }\r\n}\r\n\r\nviewCounter();\r\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;