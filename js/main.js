/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger.js */ "./src/js/components/burger.js");


/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// import { disableScroll } from '../functions/disable-scroll.js'
// import { enableScroll } from '../functions/enable-scroll.js'
// ;(function () {
//   const burger = document.querySelector('[data-burger]')
//   const menu = document.querySelector('[data-menu]')
//   const menuItems = document.querySelectorAll('[data-menu-item]')
//   const overlay = document.querySelector('[data-menu-overlay]')

//   burger.addEventListener('click', (e) => {
//     burger.classList.toggle('header__burger--active')
//     menu.classList.toggle('header__nav--active')
//     overlay.classList.toggle('overlay--active')

//     if (menu.classList.contains('header__nav--active')) {
//       burger.setAttribute('aria-expanded', 'true')
//       burger.setAttribute('aria-label', 'Close menu')
//       disableScroll()
//     } else {
//       burger.setAttribute('aria-expanded', 'false')
//       burger.setAttribute('aria-label', 'Open menu')
//       enableScroll()
//     }
//   })

//   overlay.addEventListener('click', () => {
//     closeMenu()
//   })

//   menuItems.forEach((el) => {
//     el.addEventListener('click', () => {
//       closeMenu()
//     })
//   })

//   const closeMenu = () => {
//     burger.setAttribute('aria-expanded', 'false')
//     burger.setAttribute('aria-label', 'Open menu')
//     burger.classList.remove('header__burger--active')
//     menu.classList.remove('header__nav--active')
//     overlay.classList.remove('overlay--active')
//     enableScroll()
//   }
// })()

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map