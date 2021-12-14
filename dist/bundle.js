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

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test/./src/styles/index.scss?");

/***/ }),

/***/ "./src/script/pages/mian/main.ts":
/*!***************************************!*\
  !*** ./src/script/pages/mian/main.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.MainPageComponent = void 0;\r\nvar states_1 = __webpack_require__(/*! ../../system/states */ \"./src/script/system/states.ts\");\r\nvar MainPageComponent = (function () {\r\n    function MainPageComponent(settings) {\r\n        this.settings = settings;\r\n        this.bindMethods();\r\n        this.init();\r\n    }\r\n    MainPageComponent.prototype.init = function () {\r\n        if (this.settings.innerHTML) {\r\n            this.settings.element.innerHTML = this.getTemplate();\r\n            this.setSubsribers();\r\n        }\r\n    };\r\n    MainPageComponent.prototype.getTemplate = function () {\r\n        return \"\\n            <div class=\\\"main-page\\\">\\n                <button class=\\\"main-page__button\\\">\\n                    <span class=\\\"main-page__text\\\">\\u0421\\u0442\\u0430\\u0440\\u0442</span>\\n                </button>\\n            </div>\\n        \";\r\n    };\r\n    MainPageComponent.prototype.setSubsribers = function () {\r\n        this.button = this.settings.element.querySelector('.main-page__button');\r\n        this.button.addEventListener('click', this.onClick);\r\n    };\r\n    MainPageComponent.prototype.onClick = function () {\r\n        window.location.hash = states_1.second;\r\n    };\r\n    MainPageComponent.prototype.bindMethods = function () {\r\n        this.setSubsribers = this.setSubsribers.bind(this);\r\n        this.onClick = this.onClick.bind(this);\r\n    };\r\n    return MainPageComponent;\r\n}());\r\nexports.MainPageComponent = MainPageComponent;\r\n\n\n//# sourceURL=webpack://test/./src/script/pages/mian/main.ts?");

/***/ }),

/***/ "./src/script/pages/second/item-component.ts":
/*!***************************************************!*\
  !*** ./src/script/pages/second/item-component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.ItemComponent = void 0;\r\nvar popup_component_1 = __webpack_require__(/*! ./popup-component */ \"./src/script/pages/second/popup-component.ts\");\r\nvar ItemComponent = (function () {\r\n    function ItemComponent(content, settings, elementForPopup, itemWrapper) {\r\n        this.content = content;\r\n        this.settings = settings;\r\n        this.elementForPopup = elementForPopup;\r\n        this.itemWrapper = itemWrapper;\r\n        this.bindMethods();\r\n        this.init();\r\n    }\r\n    ItemComponent.prototype.init = function () {\r\n        this.uniqClass = this.settings.uniqKey ? \"action-item--\".concat(this.settings.uniqKey) : '';\r\n        if (this.settings.innerHTML) {\r\n            this.settings.element.innerHTML = this.getTemplate();\r\n            this.setSubsribers();\r\n        }\r\n    };\r\n    ItemComponent.prototype.getTemplate = function () {\r\n        return \"\\n            <div class=\\\"second-page__item action-item \".concat(this.uniqClass, \"\\\">\\n                <button class=\\\"action-item__button\\\">\\n                    <span class=\\\"action-item__title\\\">\").concat(this.content.title, \"</span>\\n                    <span class=\\\"action-item__description\\\">\").concat(this.content.description, \"</span>\\n                </button>\\n            </div>\\n        \");\r\n    };\r\n    ItemComponent.prototype.setSubsribers = function () {\r\n        var _uniqClass = this.uniqClass ? \".\".concat(this.uniqClass) : '';\r\n        this.button = this.settings.element.querySelector(\".action-item\".concat(_uniqClass, \" .action-item__button\"));\r\n        this.button.addEventListener('click', this.onClick);\r\n    };\r\n    ItemComponent.prototype.onClick = function () {\r\n        var popup = new popup_component_1.PopupComponent(this.content, {\r\n            element: this.elementForPopup\r\n        }, this.button, this.itemWrapper);\r\n        popup.generateHtml();\r\n        popup.setSubsribers();\r\n    };\r\n    ItemComponent.prototype.bindMethods = function () {\r\n        this.setSubsribers = this.setSubsribers.bind(this);\r\n        this.onClick = this.onClick.bind(this);\r\n    };\r\n    return ItemComponent;\r\n}());\r\nexports.ItemComponent = ItemComponent;\r\n\n\n//# sourceURL=webpack://test/./src/script/pages/second/item-component.ts?");

/***/ }),

/***/ "./src/script/pages/second/popup-component.ts":
/*!****************************************************!*\
  !*** ./src/script/pages/second/popup-component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.PopupComponent = void 0;\r\nvar PopupComponent = (function () {\r\n    function PopupComponent(content, settings, triggerButton, triggerButtonsWrapper) {\r\n        this.content = content;\r\n        this.settings = settings;\r\n        this.triggerButton = triggerButton;\r\n        this.triggerButtonsWrapper = triggerButtonsWrapper;\r\n        this.bindMethods();\r\n        this.init();\r\n    }\r\n    PopupComponent.prototype.init = function () {\r\n        if (this.settings.innerHTML) {\r\n            this.settings.element.innerHTML = this.getTemplate();\r\n            this.setSubsribers();\r\n        }\r\n    };\r\n    PopupComponent.prototype.getTemplate = function () {\r\n        return \"\\n            <div class=\\\"popup opening\\\">\\n                <div class=\\\"popup__top\\\">\".concat(this.content.title, \"</div>\\n                <button class=\\\"popup__content\\\">\").concat(this.content.description, \"</button>\\n            </div>\\n        \");\r\n    };\r\n    PopupComponent.prototype.generateHtml = function () {\r\n        this.wrapper = document.createElement('div');\r\n        this.wrapper.classList.add('popup');\r\n        this.wrapper.classList.add('open');\r\n        this.title = document.createElement('div');\r\n        this.title.classList.add('popup__top');\r\n        this.title.textContent = this.content.title;\r\n        this.wrapperButton = document.createElement('div');\r\n        this.wrapperButton.classList.add('popup__content');\r\n        this.button = document.createElement('button');\r\n        this.button.classList.add('popup__button');\r\n        this.button.textContent = this.content.description;\r\n        this.button.classList.add('open');\r\n        this.wrapper.append(this.title);\r\n        this.wrapper.append(this.wrapperButton);\r\n        this.wrapperButton.append(this.button);\r\n        this.settings.element.append(this.wrapper);\r\n        this.setButtonVariablesButton();\r\n    };\r\n    PopupComponent.prototype.setSubsribers = function () {\r\n        this.button.addEventListener('click', this.onClick);\r\n        this.wrapper.addEventListener('animationend', this.onAnimationendEnd);\r\n    };\r\n    PopupComponent.prototype.setButtonVariablesButton = function () {\r\n        var coords = this.triggerButton.getBoundingClientRect();\r\n        var styles = window.getComputedStyle(this.triggerButtonsWrapper);\r\n        document.documentElement.style.setProperty('--initial-button-height', \"\".concat(this.triggerButton.clientHeight, \"px\"));\r\n        document.documentElement.style.setProperty('--initial-button-width', \"\".concat(this.triggerButton.clientWidth, \"px\"));\r\n        document.documentElement.style.setProperty('--initial-button-right', \"\".concat(coords.right - parseInt(styles.gridGap), \"px\"));\r\n        document.documentElement.style.setProperty('--initial-button-left', \"\".concat(coords.left - parseInt(styles.gridGap), \"px\"));\r\n        document.documentElement.style.setProperty('--onopen-button-height', \"\".concat(this.wrapperButton.scrollHeight, \"px\"));\r\n        document.documentElement.style.setProperty('--onopen-button-width', \"\".concat(this.wrapperButton.scrollWidth, \"px\"));\r\n    };\r\n    PopupComponent.prototype.onClick = function () {\r\n        this.wrapper.classList.remove('open');\r\n        this.wrapper.classList.add('close');\r\n        this.button.classList.remove('open');\r\n        this.button.classList.add('close');\r\n    };\r\n    PopupComponent.prototype.onAnimationendEnd = function () {\r\n        if (this.wrapper.classList.contains('close')) {\r\n            this.wrapper.remove();\r\n        }\r\n    };\r\n    PopupComponent.prototype.bindMethods = function () {\r\n        this.setSubsribers = this.setSubsribers.bind(this);\r\n        this.onClick = this.onClick.bind(this);\r\n        this.onAnimationendEnd = this.onAnimationendEnd.bind(this);\r\n        this.setButtonVariablesButton = this.setButtonVariablesButton.bind(this);\r\n    };\r\n    return PopupComponent;\r\n}());\r\nexports.PopupComponent = PopupComponent;\r\n\n\n//# sourceURL=webpack://test/./src/script/pages/second/popup-component.ts?");

/***/ }),

/***/ "./src/script/pages/second/second.ts":
/*!*******************************************!*\
  !*** ./src/script/pages/second/second.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.SecondPageComponent = void 0;\r\nvar states_1 = __webpack_require__(/*! ../../system/states */ \"./src/script/system/states.ts\");\r\nvar item_component_1 = __webpack_require__(/*! ./item-component */ \"./src/script/pages/second/item-component.ts\");\r\nvar SecondPageComponent = (function () {\r\n    function SecondPageComponent(settings) {\r\n        this.settings = settings;\r\n        this.bindMethods();\r\n        this.init();\r\n    }\r\n    SecondPageComponent.prototype.init = function () {\r\n        if (this.settings.innerHTML) {\r\n            this.settings.element.innerHTML = this.getTemplate();\r\n            this.setSubsribers();\r\n        }\r\n        this.setItems();\r\n    };\r\n    SecondPageComponent.prototype.getTemplate = function () {\r\n        return \"\\n            <div class=\\\"second-page\\\">\\n                <div class=\\\"second-page__content\\\">\\n                    <div class=\\\"second-page__button-wrapper\\\">\\n                        <button class=\\\"second-page__button\\\">\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u044C\\u0441\\u044F \\u043A \\u043A\\u043D\\u043E\\u043F\\u043A\\u0435</button>\\n                    </div>\\n\\n                    <div class=\\\"second-page__items-wrapper\\\">\\n                    </div>\\n                </div>\\n            </div>\\n        \";\r\n    };\r\n    SecondPageComponent.prototype.onClick = function () {\r\n        window.location.hash = states_1.main;\r\n    };\r\n    SecondPageComponent.prototype.setItems = function () {\r\n        var _this = this;\r\n        var items = '';\r\n        this.itemsWrapper = this.settings.element.querySelector('.second-page__items-wrapper');\r\n        this.components = window.dataService.actionItems.map(function (data, i) {\r\n            var component = new item_component_1.ItemComponent(data, {\r\n                element: _this.itemsWrapper,\r\n                uniqKey: i\r\n            }, _this.settings.element.querySelector('.second-page'), _this.itemsWrapper);\r\n            items += component.getTemplate();\r\n            return component;\r\n        });\r\n        this.itemsWrapper.innerHTML = items;\r\n        this.components.forEach(function (item) { return item.setSubsribers(); });\r\n    };\r\n    SecondPageComponent.prototype.setSubsribers = function () {\r\n        this.button = this.settings.element.querySelector('.second-page__button');\r\n        this.button.addEventListener('click', this.onClick);\r\n    };\r\n    SecondPageComponent.prototype.bindMethods = function () {\r\n        this.setSubsribers = this.setSubsribers.bind(this);\r\n        this.onClick = this.onClick.bind(this);\r\n    };\r\n    return SecondPageComponent;\r\n}());\r\nexports.SecondPageComponent = SecondPageComponent;\r\n\n\n//# sourceURL=webpack://test/./src/script/pages/second/second.ts?");

/***/ }),

/***/ "./src/script/script.ts":
/*!******************************!*\
  !*** ./src/script/script.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\n__webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\r\n__webpack_require__(/*! ./system/types/types */ \"./src/script/system/types/types.ts\");\r\nvar _states = __webpack_require__(/*! ./system/states */ \"./src/script/system/states.ts\");\r\nvar data_service_1 = __webpack_require__(/*! ./system/data.service */ \"./src/script/system/data.service.ts\");\r\nwindow.dataService = new data_service_1.DataService();\r\nvar App;\r\ndocument.addEventListener('DOMContentLoaded', init);\r\nfunction init() {\r\n    App = document.querySelector('#app');\r\n    showPage(detectShowedPage(), true);\r\n    setSubscribers();\r\n}\r\nfunction setSubscribers() {\r\n    window.addEventListener('hashchange', function () {\r\n        showPage(detectShowedPage());\r\n    });\r\n}\r\nfunction detectShowedPage() {\r\n    for (var key in _states.states) {\r\n        if (_states.states[key].state === window.location.hash) {\r\n            return _states.states[key];\r\n        }\r\n    }\r\n}\r\nfunction showPage(state, redirectOnMainPage) {\r\n    if (redirectOnMainPage === void 0) { redirectOnMainPage = false; }\r\n    if (!state) {\r\n        if (!redirectOnMainPage) {\r\n            return;\r\n        }\r\n        else {\r\n            var Component_1 = _states.states[_states.main].component;\r\n            new Component_1({\r\n                element: App,\r\n                innerHTML: true\r\n            });\r\n            return;\r\n        }\r\n    }\r\n    var Component = state.component;\r\n    new Component({\r\n        element: App,\r\n        innerHTML: true\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://test/./src/script/script.ts?");

/***/ }),

/***/ "./src/script/system/data.service.ts":
/*!*******************************************!*\
  !*** ./src/script/system/data.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.DataService = void 0;\r\nvar DataService = (function () {\r\n    function DataService() {\r\n        this.actionItems = [\r\n            {\r\n                title: 'Первый текст',\r\n                description: 'Какое то описание'\r\n            },\r\n            {\r\n                title: 'Второй текст',\r\n                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, atque.'\r\n            },\r\n            {\r\n                title: 'Третий текст',\r\n                description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea cumque soluta eligendi porro sapiente, nulla aliquam quasi tempora natus\\n            dolor itaque repellat incidunt ex quidem tenetur magnam iusto eaque blanditiis! Obcaecati excepturi aspernatur reiciendis, aliquid perferendis libero debitis\\n            placeat! Laboriosam quaerat nostrum nesciunt harum saepe est impedit sequi cumque facilis?\"\r\n            },\r\n            {\r\n                title: 'Четвертый текст',\r\n                description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea cumque soluta eligendi porro sapiente, nulla aliquam quasi tempora natus\\n            dolor itaque repellat incidunt ex quidem tenetur magnam iusto eaque blanditiis!\"\r\n            },\r\n        ];\r\n    }\r\n    return DataService;\r\n}());\r\nexports.DataService = DataService;\r\n\n\n//# sourceURL=webpack://test/./src/script/system/data.service.ts?");

/***/ }),

/***/ "./src/script/system/states.ts":
/*!*************************************!*\
  !*** ./src/script/system/states.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.states = exports.second = exports.main = void 0;\r\nvar main_1 = __webpack_require__(/*! ../pages/mian/main */ \"./src/script/pages/mian/main.ts\");\r\nvar second_1 = __webpack_require__(/*! ../pages/second/second */ \"./src/script/pages/second/second.ts\");\r\nexports.main = '';\r\nexports.second = 'second';\r\nexports.states = {\r\n    '': {\r\n        state: exports.main,\r\n        component: main_1.MainPageComponent\r\n    },\r\n    second: {\r\n        state: doHashed(exports.second),\r\n        component: second_1.SecondPageComponent\r\n    }\r\n};\r\nfunction doHashed(hash) {\r\n    return \"#\".concat(hash);\r\n}\r\n\n\n//# sourceURL=webpack://test/./src/script/system/states.ts?");

/***/ }),

/***/ "./src/script/system/types/types.ts":
/*!******************************************!*\
  !*** ./src/script/system/types/types.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\n\n\n//# sourceURL=webpack://test/./src/script/system/types/types.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/script.ts");
/******/ 	
/******/ })()
;