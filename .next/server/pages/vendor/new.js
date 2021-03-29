module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/vendor/new.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./atom/ApplicationState.ts":
/*!**********************************!*\
  !*** ./atom/ApplicationState.ts ***!
  \**********************************/
/*! exports provided: ApplicationState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationState", function() { return ApplicationState; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);


const localStorageEffect = key => ({
  setSelf,
  onSet
}) => {
  try {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
  } catch (error) {// DO NOTHING - SSR MODE
  }

  onSet(newValue => {
    if (newValue instanceof recoil__WEBPACK_IMPORTED_MODULE_0__["DefaultValue"]) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  });
};

const ApplicationState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: 'app/state',
  default: {
    user: {
      name: '',
      username: '',
      password: '',
      token: ''
    },
    setting: {
      language: 'en'
    }
  },
  effects_UNSTABLE: [localStorageEffect('app/state')]
});

/***/ }),

/***/ "./components/BaseHead.tsx":
/*!*********************************!*\
  !*** ./components/BaseHead.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseHead; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\ReactJS\\new-sioi\\components\\BaseHead.tsx";

function BaseHead(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["SIOI:: ", props.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "shortcut icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), props.css ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: `/css/${props.css}.css`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 22
      }, this) : undefined]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/CurrencySelect.tsx":
/*!***************************************!*\
  !*** ./components/CurrencySelect.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CurrencySelect; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/select */ "@blueprintjs/select");
/* harmony import */ var _blueprintjs_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "@blueprintjs/core");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueprintjs_select_lib_css_blueprint_select_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/select/lib/css/blueprint-select.css */ "./node_modules/@blueprintjs/select/lib/css/blueprint-select.css");
/* harmony import */ var _blueprintjs_select_lib_css_blueprint_select_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_select_lib_css_blueprint_select_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _misc_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc/currency */ "./components/misc/currency.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\ReactJS\\new-sioi\\components\\CurrencySelect.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CurrencySelect(props) {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    allowCreate: false,
    closeOnSelect: true,
    createdItems: [],
    disableItems: false,
    disabled: false,
    fill: true,
    currency: _misc_currency__WEBPACK_IMPORTED_MODULE_4__["CURRENCIES"][0],
    filterable: true,
    hasInitialContent: false,
    items: _misc_currency__WEBPACK_IMPORTED_MODULE_4__["currencySelectProps"].items,
    minimal: false,
    openOnKeyDown: false,
    resetOnClose: false,
    resetOnQuery: false,
    resetOnSelect: false
  });
  const CurrencySelect = _blueprintjs_select__WEBPACK_IMPORTED_MODULE_1__["Select"].ofType();

  const handleValueChange = currency => {
    const {
      createdItems,
      items
    } = Object(_misc_currency__WEBPACK_IMPORTED_MODULE_4__["maybeDeleteCreatedCurrencyFromArrays"])(state.items, state.createdItems, state.currency);
    const {
      createdItems: nextCreatedItems,
      items: nextItems
    } = Object(_misc_currency__WEBPACK_IMPORTED_MODULE_4__["maybeAddCreatedCurrencyToArrays"])(items, createdItems, currency);
    setState(_objectSpread(_objectSpread({}, state), {}, {
      currency,
      createdItems: nextCreatedItems,
      items: nextItems
    }));
    props.onExchangerateChange(currency);
  };

  const {
    allowCreate,
    currency,
    minimal
  } = state,
        flags = _objectWithoutProperties(state, ["allowCreate", "currency", "minimal"]);

  const maybeCreateNewItemFromQuery = allowCreate ? _misc_currency__WEBPACK_IMPORTED_MODULE_4__["createCurrency"] : undefined;
  const maybeCreateNewItemRenderer = allowCreate ? _misc_currency__WEBPACK_IMPORTED_MODULE_4__["renderCreateCurrencyOption"] : null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CurrencySelect, _objectSpread(_objectSpread(_objectSpread({}, _misc_currency__WEBPACK_IMPORTED_MODULE_4__["currencySelectProps"]), flags), {}, {
    createNewItemFromQuery: maybeCreateNewItemFromQuery,
    createNewItemRenderer: maybeCreateNewItemRenderer,
    itemsEqual: _misc_currency__WEBPACK_IMPORTED_MODULE_4__["areCurrencyEqual"],
    items: state.items,
    noResults: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      disabled: true,
      text: "No results."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 18
    }, this),
    onItemSelect: handleValueChange,
    popoverProps: {
      minimal
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      rightIcon: "caret-down",
      text: props.currency ? `${props.currency}` : "Search..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SideMenu.tsx":
/*!*********************************!*\
  !*** ./components/SideMenu.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Global */ "./core/Global.ts");

var _jsxFileName = "D:\\ReactJS\\new-sioi\\components\\SideMenu.tsx";

function SideMenu(props) {
  const switchMode = mode => {
    props.switch(mode);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "col-auto pl-3 d-none d-md-block pt-0 mt-0",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col mx-2 pb-2 rounded-right",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pr-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "w-100 justify-content-start bp3-button bp3-minimal bp3-icon-home",
            onClick: () => switchMode(_core_Global__WEBPACK_IMPORTED_MODULE_1__["DisplayMode"].dashboard),
            children: "Dashboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 47
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pr-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "w-100 justify-content-start bp3-button bp3-minimal bp3-icon-key-command",
            onClick: () => switchMode(_core_Global__WEBPACK_IMPORTED_MODULE_1__["DisplayMode"].widget),
            children: "Widgets"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 47
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pr-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "w-100 justify-content-start bp3-button bp3-minimal bp3-icon-globe-network",
            children: "Sales Order"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 47
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pr-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "w-100 justify-content-start bp3-button bp3-minimal bp3-icon-grid-view",
            children: "Purchase Order"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 47
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pr-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "w-100 justify-content-start bp3-button bp3-minimal bp3-icon-person",
            children: "Customer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 47
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pr-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "w-100 justify-content-start bp3-button bp3-minimal bp3-icon-calendar",
            children: "Schedule"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 47
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pr-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "w-100 justify-content-start bp3-button bp3-minimal bp3-icon-grouped-bar-chart",
            children: "Report"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 47
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pr-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "w-100 justify-content-start bp3-button bp3-minimal bp3-icon-cube",
            children: "Inventory"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 47
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pr-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "w-100 justify-content-start bp3-button bp3-minimal bp3-icon-cog",
            children: "Settings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 47
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/TopBar.tsx":
/*!*******************************!*\
  !*** ./components/TopBar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\ReactJS\\new-sioi\\components\\TopBar.tsx";



function TopBar(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const [cookie, setCookie, removeCookie] = Object(react_cookie__WEBPACK_IMPORTED_MODULE_3__["useCookies"])(["jwt"]);

  const goLogin = e => {
    e.preventDefault();
    router.push("/login");
  };

  const goDashboard = e => {
    e.preventDefault();
    router.push("/dashboard");
  };

  const goReport = e => {
    e.preventDefault();
    router.push("/report");
  };

  async function handlelogout(e) {
    e.preventDefault();
    removeCookie('jwt');
    router.push("/login");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "px-3 pt-2",
    style: {
      backgroundColor: 'transparent'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bp3-navbar-group bp3-align-left",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bp3-navbar-heading",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
          src: "/images/ISL_LOGO.png",
          alt: "logo",
          width: 56,
          height: 50,
          layout: "fixed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bp3-navbar-group bp3-align-right",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "bp3-button bp3-minimal bp3-icon-home",
        onClick: goDashboard,
        children: "Dashboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "bp3-button bp3-minimal bp3-icon-chart",
        onClick: goReport,
        children: "Report"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "bp3-button bp3-minimal bp3-icon-log-out",
        onClick: handlelogout,
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "bp3-navbar-divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "bp3-button bp3-minimal bp3-icon-user"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "bp3-button bp3-minimal bp3-icon-notifications"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "bp3-button bp3-minimal bp3-icon-cog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/misc/currency.tsx":
/*!**************************************!*\
  !*** ./components/misc/currency.tsx ***!
  \**************************************/
/*! exports provided: CURRENCIES, renderCurrency, renderCreateCurrencyOption, filterCurrency, currencySelectProps, createCurrency, areCurrencyEqual, doesCurrencyEqualQuery, arrayContainsCurrency, addCurrencyToArray, deleteCurrencyFromArray, maybeAddCreatedCurrencyToArrays, maybeDeleteCreatedCurrencyFromArrays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCIES", function() { return CURRENCIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCurrency", function() { return renderCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCreateCurrencyOption", function() { return renderCreateCurrencyOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCurrency", function() { return filterCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencySelectProps", function() { return currencySelectProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCurrency", function() { return createCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areCurrencyEqual", function() { return areCurrencyEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesCurrencyEqualQuery", function() { return doesCurrencyEqualQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayContainsCurrency", function() { return arrayContainsCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCurrencyToArray", function() { return addCurrencyToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCurrencyFromArray", function() { return deleteCurrencyFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeAddCreatedCurrencyToArrays", function() { return maybeAddCreatedCurrencyToArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDeleteCreatedCurrencyFromArrays", function() { return maybeDeleteCreatedCurrencyFromArrays; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "@blueprintjs/core");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\ReactJS\\new-sioi\\components\\misc\\currency.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/** Currency List */
const CURRENCIES = [{
  currency_code: "HKD",
  exchange_rate: 1.0000
}, {
  currency_code: "USD",
  exchange_rate: 7.8446
}, {
  currency_code: "JPY",
  exchange_rate: 0.0725
}, {
  currency_code: "RMB",
  exchange_rate: 0.8813
}, {
  currency_code: "EUR",
  exchange_rate: 10.5000
}].map((m, index) => _objectSpread(_objectSpread({}, m), {}, {
  rank: index + 1
}));
const renderCurrency = (currency, {
  handleClick,
  modifiers,
  query
}) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }

  const text = `${currency.currency_code}`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
    active: modifiers.active,
    disabled: modifiers.disabled,
    label: currency.exchange_rate.toString(),
    onClick: handleClick,
    text: highlightText(text, query)
  }, currency.currency_code, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, undefined);
};
const renderCreateCurrencyOption = (query, active, handleClick) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
  icon: "add",
  text: `Create "${query}"`,
  active: active,
  onClick: handleClick,
  shouldDismissPopover: false
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 44,
  columnNumber: 5
}, undefined);
const filterCurrency = (query, currency, _index, exactMatch) => {
  const normalizedTitle = currency.currency_code.toLowerCase();
  const normalizedQuery = query.toLowerCase();

  if (exactMatch) {
    return normalizedTitle === normalizedQuery;
  } else {
    return `${normalizedTitle} ${currency.exchange_rate}`.indexOf(normalizedQuery) >= 0;
  }
};

function highlightText(text, query) {
  let lastIndex = 0;
  const words = query.split(/\s+/).filter(word => word.length > 0).map(escapeRegExpChars);

  if (words.length === 0) {
    return [text];
  }

  const regexp = new RegExp(words.join("|"), "gi");
  const tokens = [];

  while (true) {
    const match = regexp.exec(text);

    if (!match) {
      break;
    }

    const length = match[0].length;
    const before = text.slice(lastIndex, regexp.lastIndex - length);

    if (before.length > 0) {
      tokens.push(before);
    }

    lastIndex = regexp.lastIndex;
    tokens.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
      children: match[0]
    }, lastIndex, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }, this));
  }

  const rest = text.slice(lastIndex);

  if (rest.length > 0) {
    tokens.push(rest);
  }

  return tokens;
}

function escapeRegExpChars(text) {
  return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

const currencySelectProps = {
  itemPredicate: filterCurrency,
  itemRenderer: renderCurrency,
  items: CURRENCIES
};
function createCurrency(currency_code) {
  return {
    currency_code,
    exchange_rate: 1
  };
}
function areCurrencyEqual(currencyA, currencyB) {
  // Compare only the codes (ignoring case) just for simplicity.
  return currencyA.currency_code.toLowerCase() === currencyB.currency_code.toLowerCase();
}
function doesCurrencyEqualQuery(currency, query) {
  return currency.currency_code.toLowerCase() === query.toLowerCase();
}
function arrayContainsCurrency(currencies, currencyToFind) {
  return currencies.some(currency => currency.currency_code === currencyToFind.currency_code);
}
function addCurrencyToArray(currencies, currencyToAdd) {
  return [...currencies, currencyToAdd];
}
function deleteCurrencyFromArray(currencies, currencyToDelete) {
  return currencies.filter(currency => currency !== currencyToDelete);
}
function maybeAddCreatedCurrencyToArrays(items, createdItems, currency) {
  const isNewlyCreatedItem = !arrayContainsCurrency(items, currency);
  return {
    createdItems: isNewlyCreatedItem ? addCurrencyToArray(createdItems, currency) : createdItems,
    // Add a created currency to `items` so that the currency can be deselected.
    items: isNewlyCreatedItem ? addCurrencyToArray(items, currency) : items
  };
}
function maybeDeleteCreatedCurrencyFromArrays(items, createdItems, currency) {
  const wasItemCreatedByUser = arrayContainsCurrency(createdItems, currency); // Delete the item if the user manually created it.

  return {
    createdItems: wasItemCreatedByUser ? deleteCurrencyFromArray(createdItems, currency) : createdItems,
    items: wasItemCreatedByUser ? deleteCurrencyFromArray(items, currency) : items
  };
}

/***/ }),

/***/ "./components/vendor/Vendor.module.css":
/*!*********************************************!*\
  !*** ./components/vendor/Vendor.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "Vendor_title__mhSRJ",
	"sectionHeader": "Vendor_sectionHeader__1qeFM",
	"itemTitle": "Vendor_itemTitle__KNwfB",
	"itemInfo": "Vendor_itemInfo__2YZD1",
	"hr": "Vendor_hr__P3fr5",
	"badge": "Vendor_badge__2y9FV"
};


/***/ }),

/***/ "./components/vendor/VendorNew.tsx":
/*!*****************************************!*\
  !*** ./components/vendor/VendorNew.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VendorNew; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _new__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new */ "./components/vendor/new.tsx");

var _jsxFileName = "D:\\ReactJS\\new-sioi\\components\\vendor\\VendorNew.tsx";

function VendorNew(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "row",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_new__WEBPACK_IMPORTED_MODULE_1__["default"], {
      token: props.token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/vendor/new.tsx":
/*!***********************************!*\
  !*** ./components/vendor/new.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemDetail; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "@blueprintjs/core");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/table */ "@blueprintjs/table");
/* harmony import */ var _blueprintjs_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/popover2 */ "@blueprintjs/popover2");
/* harmony import */ var _blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CurrencySelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CurrencySelect */ "./components/CurrencySelect.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Vendor.module.css */ "./components/vendor/Vendor.module.css");
/* harmony import */ var _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Vendor_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blueprintjs_popover2_lib_css_blueprint_popover2_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blueprintjs/popover2/lib/css/blueprint-popover2.css */ "./node_modules/@blueprintjs/popover2/lib/css/blueprint-popover2.css");
/* harmony import */ var _blueprintjs_popover2_lib_css_blueprint_popover2_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_popover2_lib_css_blueprint_popover2_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _blueprintjs_table_lib_css_table_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blueprintjs/table/lib/css/table.css */ "./node_modules/@blueprintjs/table/lib/css/table.css");
/* harmony import */ var _blueprintjs_table_lib_css_table_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_table_lib_css_table_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _blueprintjs_datetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blueprintjs/datetime */ "@blueprintjs/datetime");
/* harmony import */ var _blueprintjs_datetime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_datetime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "D:\\ReactJS\\new-sioi\\components\\vendor\\new.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












function ItemDetail(props) {
  const Spacer = props => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: props.height
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this);
  };

  const SectionHeader = props => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      style: {
        backgroundColor: 'transparent'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.sectionHeader,
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
        className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.hr
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this);
  };

  const Item = props => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row align-middle",
      style: {
        backgroundColor: 'transparent'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-2",
        style: {
          backgroundColor: 'transparent'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemTitle,
          children: props.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-10",
        style: {
          backgroundColor: 'transparent'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: `${_Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo} ${skeleton}`,
          children: props.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this);
  };

  const ActionButtons = props => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      style: {
        backgroundColor: 'transparent'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.sectionHeader,
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        style: {
          textAlign: 'end'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          text: "SAVE",
          intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Intent"].PRIMARY,
          onClick: successToast,
          small: true,
          style: {
            marginRight: 5
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          text: "DONE",
          intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Intent"].DANGER,
          onClick: errorToast,
          small: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
        className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.hr
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this);
  };

  const selectCustomer = e => {
    setCustomer(e.target.value);
    setCustomerName(e.target.dataset.name);
    setCategory(e.target.dataset.cat);
  };

  const selectLetterhead = e => {
    setLetterhead(e.target.value);
  };

  const selectexchangerate = e => {
    setExchangerate(e.exchange_rate);
    setCurrency(e.currency_code);
  };

  let toaster;
  const refHandlers = {
    toaster: ref => toaster = ref
  };

  const addToast = toast => {
    toast.timeout = 5000;
    toaster.show(toast);
  };

  const errorToast = e => {
    addToast({
      icon: "warning-sign",
      intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Intent"].DANGER,
      message: "You do not have permissions to perform this action. \
    Please contact your system administrator to request the appropriate access rights."
    });
  };

  const successToast = () => {
    addToast({
      icon: "tick",
      intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Intent"].PRIMARY,
      message: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: ["Successfully saved data. REF: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
          children: "455-200"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 51
        }, this)]
      }, void 0, true)
    });
  };

  const Input = props => {
    const styleName = `bp3-input bp3-intent-${props.intent}`;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "",
        style: {
          width: 100,
          backgroundColor: 'transparent',
          textAlign: "end"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3__["Tooltip2"], {
          content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Search ", props.label]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 40
          }, this),
          placement: "left",
          intent: "primary",
          usePortal: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemTitle,
            children: props.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bp3-input-group bp3-small",
          style: {
            borderColor: "white"
          },
          children: [props.iconLeft && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
            icon: props.iconLeft,
            iconSize: 14,
            className: "mx-2 pt-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: styleName,
            onBlur: validateData,
            placeholder: props.placeholder,
            defaultValue: props.defaultValue,
            "data-validate": props.validate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, this), props.iconRight && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
            icon: props.iconRight,
            iconSize: 14,
            className: "mx-2 pt-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 29
          }, this), props.required && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "bp3-icon bp3-minimal bp3-small bp3-icon-dot bp3-intent-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: 20,
          backgroundColor: 'transparent'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3__["Popover2"], {
          interactionKind: "click",
          popoverClassName: _blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3__["Classes"].POPOVER2_CONTENT_SIZING,
          placement: "right",
          content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: 300,
              height: 300
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "text-center pb-1",
              children: [props.searchlabel, " Selection"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
              className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.hr
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "text-center pb-1",
              children: ["Last 5 Selected ", props.searchlabel]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
              className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.hr,
              style: {
                paddingBottom: 10
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [props.action == 'goSearch' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["RadioGroup"], {
                onChange: selectCustomer,
                selectedValue: customer,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
                  label: "ARA - Alex Ramil Aguel",
                  value: "ARA",
                  "data-cat": "1",
                  "data-name": "Alex Ramil Aguel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
                  label: "BIB - Bobby Ishimizu",
                  value: "BIB",
                  "data-cat": "2",
                  "data-name": "Bobby Ishimizu"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
                  label: "TWW - Tommy Wong",
                  value: "TWW",
                  "data-cat": "3",
                  "data-name": "Tommy Wong"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
                  label: "THG - Tiger Huang",
                  value: "THG",
                  "data-cat": "A",
                  "data-name": "Tiger Huang"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
                  label: "TMF - Tommy Fu",
                  value: "TMF",
                  "data-cat": "B",
                  "data-name": "Tommy Fu"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 41
              }, this), props.action == 'goSearchLetterHead' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["RadioGroup"], {
                onChange: selectLetterhead,
                selectedValue: letterhead,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
                  label: "101 - 123 HONG KONG LIMITED",
                  value: "123 HONG KONG LIMITED"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
                  label: "CTM01 - Test Letterhead",
                  value: "Test Letterhead"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
                  label: "201 - HSB WEBWORKS",
                  value: "HSB WEBWORKS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
              className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.hr
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 15
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                className: _blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3__["Classes"].POPOVER2_DISMISS,
                style: {
                  marginRight: 10
                },
                children: "Close"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Intent"].DANGER,
                onClick: handleOpen,
                className: _blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3__["Classes"].POPOVER2_DISMISS,
                children: "Full Search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 33
            }, this)]
          }, "text", true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 29
          }, this),
          renderTarget: (_ref) => {
            let {
              isOpen,
              ref
            } = _ref,
                targetProps = _objectWithoutProperties(_ref, ["isOpen", "ref"]);

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: props.action && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3__["Tooltip2"], {
                content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Search ", props.searchlabel]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 56
                }, this),
                placement: "right",
                intent: "primary",
                usePortal: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], _objectSpread(_objectSpread({
                  icon: "zoom-in",
                  minimal: true,
                  small: true
                }, targetProps), {}, {
                  elementRef: ref,
                  intent: "primary",
                  text: ""
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 29
            }, this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spacer, {
        height: props.spacer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, this);
  };

  const Suggest = props => {
    const styleName = `bp3-input bp3-intent-${props.intent}`;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "",
        style: {
          width: 100,
          backgroundColor: 'transparent',
          textAlign: "end"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3__["Tooltip2"], {
          content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Search ", props.label]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 40
          }, this),
          placement: "left",
          intent: "primary",
          usePortal: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemTitle,
            children: props.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        style: {
          marginRight: 20
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CurrencySelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onExchangerateChange: selectexchangerate,
          currency: currency
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spacer, {
        height: props.spacer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }, this);
  };

  const Static = props => {
    const styleName = `bp3-input bp3-intent-${props.intent}`;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "",
        style: {
          width: 100,
          backgroundColor: 'transparent',
          textAlign: "end"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemTitle,
          children: props.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
          children: props.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spacer, {
        height: props.spacer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }, this);
  };

  const validateData = e => {
    /** PERFORM VALIDATION ***/
    if (e.target.dataset.validate == 'paycode') {
      let isfound = false;
      Object.keys(paymenttermData[0]).map(function (key, index) {
        if (paymenttermData[index]) {
          if (e.target.value == paymenttermData[index].code) {
            setPaycode(paymenttermData[index].code);
            setPaydesc(paymenttermData[index].description);
            isfound = true;
          }
        }
      });

      if (isfound == false && e.target.value != '') {
        alert('Payment Code Not Found!');
        setPaycode('');
        setPaydesc('');
        e.target.value = '';
      }
    }
  };

  const goSearch = e => {
    e.preventDefault(); // DO SOMETHING
  };

  const goSearchLetterHead = e => {
    e.preventDefault(); // DO SOMETHING
  };

  const detailData = __webpack_require__(/*! ../../data/quotation.json */ "./data/quotation.json");

  const paymenttermData = __webpack_require__(/*! ../../data/paymentterm.json */ "./data/paymentterm.json");

  const {
    0: skeleton,
    1: setSkeleton
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])();
  const {
    0: customer,
    1: setCustomer
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])();
  const {
    0: customername,
    1: setCustomerName
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])();
  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: letterhead,
    1: setLetterhead
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])();
  const {
    0: currency,
    1: setCurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])();
  const {
    0: exchangerate,
    1: setExchangerate
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: paycode,
    1: setPaycode
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: paydesc,
    1: setPaydesc
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);

  const getLoadingOptions = () => {
    let loadingOptions = [];
    if (skeleton) loadingOptions = [_blueprintjs_table__WEBPACK_IMPORTED_MODULE_2__["TableLoadingOption"].CELLS, _blueprintjs_table__WEBPACK_IMPORTED_MODULE_2__["TableLoadingOption"].COLUMN_HEADERS, _blueprintjs_table__WEBPACK_IMPORTED_MODULE_2__["TableLoadingOption"].ROW_HEADERS];
    return loadingOptions;
  };

  const formatColumnName = columnName => {
    return columnName.replace(/([A-Z])/g, " $1").replace(/^./, firstCharacter => firstCharacter.toUpperCase());
  };

  const renderCell = (rowIndex, columnIndex) => {
    const detailItem = detailData[rowIndex];
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_table__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
      children: detailItem[Object.keys(detailItem)[columnIndex]]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 16
    }, this);
  };

  const DataGrid = props => {
    const columns = Object.keys(detailData[0]).map((columnName, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_table__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      name: formatColumnName(columnName),
      cellRenderer: renderCell
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }, this));

    const cellRenderer = rowIndex => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_table__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
        children: `$${(rowIndex * 10).toFixed(2)}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 20
      }, this);
    };

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        style: {
          width: 100
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_table__WEBPACK_IMPORTED_MODULE_2__["Table"], {
          className: "w-100",
          numRows: detailData.length,
          loadingOptions: getLoadingOptions(),
          selectionModes: _blueprintjs_table__WEBPACK_IMPORTED_MODULE_2__["SelectionModes"].ALL,
          children: columns
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }, this);
  };

  const dialogOptions = {
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    usePortal: true
  };

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const jsDateFormatter = {
    // note that the native implementation of Date functions differs between browsers
    formatDate: date => date.toLocaleDateString(),
    parseDate: str => new Date(str),
    placeholder: "DD/MM/YYYY"
  };

  const Datefield = props => {
    const styleName = `bp3-input bp3-intent-${props.intent}`;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "",
        style: {
          width: 100,
          backgroundColor: 'transparent',
          textAlign: "end"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3__["Tooltip2"], {
          content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Search ", props.label]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 40
          }, this),
          placement: "left",
          intent: "primary",
          usePortal: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemTitle,
            children: props.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bp3-input-group bp3-small",
          style: {
            borderColor: "white"
          },
          children: [props.iconLeft && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
            icon: props.iconLeft,
            iconSize: 14,
            className: "mx-2 pt-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_datetime__WEBPACK_IMPORTED_MODULE_9__["DateInput"], _objectSpread(_objectSpread({}, jsDateFormatter), {}, {
            defaultValue: new Date()
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 25
          }, this), props.iconRight && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
            icon: props.iconRight,
            iconSize: 14,
            className: "mx-2 pt-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 29
          }, this), props.required && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "bp3-icon bp3-minimal bp3-small bp3-icon-dot bp3-intent-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spacer, {
        height: props.spacer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 13
    }, this);
  };

  const TextAreafield = props => {
    const styleName = `bp3-input bp3-intent-${props.intent}`;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "",
        style: {
          width: 100,
          backgroundColor: 'transparent',
          textAlign: "end"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3__["Tooltip2"], {
          content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Search ", props.label]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 40
          }, this),
          placement: "left",
          intent: "primary",
          usePortal: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemTitle,
            children: props.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bp3-small",
          style: {
            borderColor: "white"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            cols: 60,
            className: "bp3-input .modifier",
            dir: "auto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spacer, {
        height: props.spacer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 13
    }, this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "col-xl-12 col-lg-12 pb-xl-0 pb-lg-4 pb-md-4 pb-sm-4 pb-xs-4",
    style: {
      backgroundColor: 'transparent'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      interactive: false,
      elevation: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Elevation"].FOUR,
      className: "col-auto w-100 h-100",
      style: {
        paddingLeft: -10,
        paddingBottom: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: "white"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row px-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col text-black text-left px-4",
          style: {
            backgroundColor: 'transparent'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
              children: "Quotation (New Record)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 386,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SectionHeader, {
            title: "Header Information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Static, {
            label: "JWT: ",
            text: props.token
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-8",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
                    label: "Quotation No.",
                    placeholder: "",
                    spacer: 30,
                    intent: "",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 396,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 395,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
                    label: "Revision No.",
                    placeholder: "",
                    spacer: 30,
                    intent: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 399,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 398,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 394,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-8",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
                    label: "Customer Code",
                    searchlabel: "Customer",
                    placeholder: "",
                    spacer: 30,
                    action: "goSearch",
                    intent: "",
                    defaultValue: customer,
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 404,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 403,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
                    label: "Category",
                    placeholder: "",
                    spacer: 30,
                    intent: "",
                    defaultValue: category
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 402,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
                label: "Customer Name",
                placeholder: "",
                spacer: 30,
                intent: "",
                defaultValue: customername
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 410,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
                label: "Letterhead By",
                searchlabel: "Letterhead",
                placeholder: "",
                spacer: 30,
                action: "goSearchLetterHead",
                intent: "",
                defaultValue: letterhead
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
                label: "Payment Code",
                placeholder: "",
                spacer: 30,
                intent: "",
                defaultValue: paycode,
                validate: "paycode"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 412,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
                label: "Payment Terms",
                placeholder: "",
                spacer: 30,
                intent: "",
                defaultValue: paydesc
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 413,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
                label: "Attn",
                placeholder: "",
                spacer: 30,
                intent: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 414,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 393,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Datefield, {
                    label: "Date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 419,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 418,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-8",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
                    label: "Issued By",
                    placeholder: "",
                    spacer: 30,
                    intent: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 422,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 421,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 417,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextAreafield, {
                label: "Remarks"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 425,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
                label: "Trade Terms",
                placeholder: "",
                spacer: 30,
                intent: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 426,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Suggest, {
                    label: "Currency",
                    spacer: 0,
                    intent: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 429,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 428,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-lg-7",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
                    label: "Exchange Rate",
                    placeholder: "",
                    spacer: 30,
                    intent: "",
                    defaultValue: exchangerate
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 432,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 431,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 427,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Static, {
                label: "Total Amount",
                text: "0.00",
                spacer: 30,
                intent: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 435,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 392,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spacer, {
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ActionButtons, {
            title: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 442,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spacer, {
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 443,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataGrid, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Spacer, {
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], _objectSpread(_objectSpread({
      icon: "info-sign",
      isOpen: isOpen,
      onClose: handleClose,
      title: "Full Search Dialog",
      usePortal: true
    }, dialogOptions), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Classes"].DIALOG_BODY,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "Data integration is the seminal problem of the digital age. For over ten years, we\u2019ve helped the world\u2019s premier organizations rise to the challenge."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 460,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Wrapious Marketing radically reimagines the way enterprises interact with data by amplifying and extending the power of data integration. With Foundry, anyone can source, fuse, and transform data into any shape they desire. Business analysts become data engineers \u2014 and leaders in their organization\u2019s data revolution."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Foundry\u2019s back end includes a suite of best-in-class data integration capabilities: data provenance, git-style versioning semantics, granular access controls, branching, transformation authoring, and more. But these powers are not limited to the back-end IT shop."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data integrations in their own right. Access controls, transformation logic, and data quality flow from original data source to intermediate analysis to presentation in real time. Every end product created in Foundry becomes a new data source that other users can build upon. And the enterprise data foundation goes where the business drives it."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 477,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Start the revolution. Unleash the power of data integration with Palantir Foundry."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 484,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Classes"].DIALOG_FOOTER,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Classes"].DIALOG_FOOTER_ACTIONS,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_popover2__WEBPACK_IMPORTED_MODULE_3__["Tooltip2"], {
            content: "This button is hooked up to close the dialog.",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              onClick: handleClose,
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 489,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 488,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["AnchorButton"], {
            intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Intent"].PRIMARY,
            href: "https://www.wrapious.hk",
            target: "_blank",
            children: "Online Help"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 491,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 486,
        columnNumber: 17
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Toaster"], {
      ref: refHandlers.toaster,
      position: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Position"].TOP
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 382,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./core/Global.ts":
/*!************************!*\
  !*** ./core/Global.ts ***!
  \************************/
/*! exports provided: DisplayMode, PlayMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayMode", function() { return DisplayMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayMode", function() { return PlayMode; });
let DisplayMode;

(function (DisplayMode) {
  DisplayMode[DisplayMode["dashboard"] = 0] = "dashboard";
  DisplayMode[DisplayMode["quotation"] = 1] = "quotation";
  DisplayMode[DisplayMode["widget"] = 2] = "widget";
  DisplayMode[DisplayMode["vendor"] = 3] = "vendor";
})(DisplayMode || (DisplayMode = {}));

let PlayMode;

(function (PlayMode) {
  PlayMode[PlayMode["gallery"] = 0] = "gallery";
  PlayMode[PlayMode["video"] = 1] = "video";
  PlayMode[PlayMode["live"] = 2] = "live";
})(PlayMode || (PlayMode = {}));

/***/ }),

/***/ "./data/paymentterm.json":
/*!*******************************!*\
  !*** ./data/paymentterm.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"code\":\"001\",\"description\":\"C.O.D\",\"duebase\":\"1\",\"duedays\":\"0\",\"duemonths\":\"0\",\"adddaysfirst\":\"false\"},{\"code\":\"30\",\"description\":\"30 Days\",\"duebase\":\"2\",\"duedays\":\"30\",\"duemonths\":\"0\",\"adddaysfirst\":\"false\"},{\"code\":\"002\",\"description\":\"14-DAYS AFTER INVOICE DATE\",\"duebase\":\"1\",\"duedays\":\"14\",\"duemonths\":\"0\",\"adddaysfirst\":\"false\"},{\"code\":\"M45\",\"description\":\"45-DAYS AFTER END OF THE MONTH\",\"duebase\":\"2\",\"duedays\":\"45\",\"duemonths\":\"0\",\"adddaysfirst\":\"false\"},{\"code\":\"M210\",\"description\":\"210-DAYS AFTER END OF MONTH\",\"duebase\":\"1\",\"duedays\":\"0\",\"duemonths\":\"7\",\"adddaysfirst\":\"false\"}]");

/***/ }),

/***/ "./data/quotation.json":
/*!*****************************!*\
  !*** ./data/quotation.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"item\":\"43498-108\",\"description\":\"Easy Off Oven Cleaner\",\"specification\":\"Aquamarine\",\"etd\":\"08/29/2020\",\"lead\":15,\"lot\":400,\"qty\":9,\"unit\":\"PACK\",\"price\":\"14.70\"},{\"item\":\"49999-143\",\"description\":\"Beer - Mill St Organic\",\"specification\":\"Fuscia\",\"etd\":\"11/21/2020\",\"lead\":30,\"lot\":500,\"qty\":8,\"unit\":\"BOX\",\"price\":\"10.00\"},{\"item\":\"0268-1471\",\"description\":\"Lid Tray - 12in Dome\",\"specification\":\"Orange\",\"etd\":\"10/03/2020\",\"lead\":30,\"lot\":200,\"qty\":2,\"unit\":\"BOX\",\"price\":\"17.29\"},{\"item\":\"63187-145\",\"description\":\"Chocolate - Semi Sweet, Calets\",\"specification\":\"Puce\",\"etd\":\"11/21/2020\",\"lead\":30,\"lot\":500,\"qty\":6,\"unit\":\"BOX\",\"price\":\"13.73\"},{\"item\":\"62362-012\",\"description\":\"Longos - Lasagna Beef\",\"specification\":\"Orange\",\"etd\":\"05/12/2020\",\"lead\":60,\"lot\":100,\"qty\":2,\"unit\":\"BOX\",\"price\":\"17.05\"},{\"item\":\"10019-055\",\"description\":\"Sauce - Hoisin\",\"specification\":\"Mauv\",\"etd\":\"03/06/2020\",\"lead\":60,\"lot\":300,\"qty\":7,\"unit\":\"BOX\",\"price\":\"14.28\"},{\"item\":\"53727-101\",\"description\":\"Vinegar - White\",\"specification\":\"Goldenrod\",\"etd\":\"07/19/2020\",\"lead\":30,\"lot\":400,\"qty\":2,\"unit\":\"PCS\",\"price\":\"17.24\"},{\"item\":\"62011-0057\",\"description\":\"Soup - Campbells Beef Strogonoff\",\"specification\":\"Puce\",\"etd\":\"09/08/2020\",\"lead\":15,\"lot\":500,\"qty\":2,\"unit\":\"PCS\",\"price\":\"13.24\"},{\"item\":\"0049-0056\",\"description\":\"Crush - Cream Soda\",\"specification\":\"Green\",\"etd\":\"10/17/2020\",\"lead\":60,\"lot\":100,\"qty\":2,\"unit\":\"BOX\",\"price\":\"18.55\"},{\"item\":\"43353-820\",\"description\":\"Veal - Tenderloin, Untrimmed\",\"specification\":\"Yellow\",\"etd\":\"12/12/2020\",\"lead\":60,\"lot\":300,\"qty\":7,\"unit\":\"PCS\",\"price\":\"10.17\"},{\"item\":\"58668-2131\",\"description\":\"Cheese - Brick With Onion\",\"specification\":\"Red\",\"etd\":\"11/09/2020\",\"lead\":15,\"lot\":100,\"qty\":8,\"unit\":\"PACK\",\"price\":\"19.43\"},{\"item\":\"76237-112\",\"description\":\"Vinegar - Sherry\",\"specification\":\"Indigo\",\"etd\":\"11/17/2020\",\"lead\":30,\"lot\":200,\"qty\":3,\"unit\":\"PCS\",\"price\":\"10.04\"},{\"item\":\"13537-367\",\"description\":\"Port - 74 Brights\",\"specification\":\"Pink\",\"etd\":\"04/23/2020\",\"lead\":60,\"lot\":200,\"qty\":6,\"unit\":\"BOX\",\"price\":\"11.00\"},{\"item\":\"44717-538\",\"description\":\"Relish\",\"specification\":\"Teal\",\"etd\":\"09/07/2020\",\"lead\":15,\"lot\":100,\"qty\":6,\"unit\":\"PACK\",\"price\":\"16.02\"},{\"item\":\"0409-1273\",\"description\":\"Cleaner - Bleach\",\"specification\":\"Purple\",\"etd\":\"05/15/2020\",\"lead\":15,\"lot\":100,\"qty\":7,\"unit\":\"PACK\",\"price\":\"14.53\"},{\"item\":\"0185-0171\",\"description\":\"Radish - Black, Winter, Organic\",\"specification\":\"Crimson\",\"etd\":\"08/20/2020\",\"lead\":60,\"lot\":100,\"qty\":2,\"unit\":\"BOX\",\"price\":\"16.28\"},{\"item\":\"59011-451\",\"description\":\"Cheese - Cheddar, Medium\",\"specification\":\"Violet\",\"etd\":\"01/17/2021\",\"lead\":15,\"lot\":400,\"qty\":9,\"unit\":\"BOX\",\"price\":\"17.22\"},{\"item\":\"0025-1720\",\"description\":\"Sachet\",\"specification\":\"Green\",\"etd\":\"02/19/2020\",\"lead\":60,\"lot\":500,\"qty\":7,\"unit\":\"PACK\",\"price\":\"13.96\"},{\"item\":\"0093-0029\",\"description\":\"Foam Espresso Cup Plain White\",\"specification\":\"Maroon\",\"etd\":\"11/19/2020\",\"lead\":15,\"lot\":100,\"qty\":9,\"unit\":\"PACK\",\"price\":\"11.55\"},{\"item\":\"25000-139\",\"description\":\"Mushroom - Lg - Cello\",\"specification\":\"Khaki\",\"etd\":\"01/09/2021\",\"lead\":15,\"lot\":100,\"qty\":1,\"unit\":\"PACK\",\"price\":\"15.25\"}]");

/***/ }),

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: parseCookies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCookies", function() { return parseCookies; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

function parseCookies(req) {
  return cookie__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req ? req.headers.cookie || "" : document.cookie);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@blueprintjs/popover2/lib/css/blueprint-popover2.css":
/*!***************************************************************************!*\
  !*** ./node_modules/@blueprintjs/popover2/lib/css/blueprint-popover2.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@blueprintjs/select/lib/css/blueprint-select.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@blueprintjs/select/lib/css/blueprint-select.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@blueprintjs/table/lib/css/table.css":
/*!***********************************************************!*\
  !*** ./node_modules/@blueprintjs/table/lib/css/table.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["reqres.in"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/react-day-picker/lib/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-day-picker/lib/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/vendor/new.tsx":
/*!******************************!*\
  !*** ./pages/vendor/new.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BaseHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BaseHead */ "./components/BaseHead.tsx");
/* harmony import */ var _components_TopBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TopBar */ "./components/TopBar.tsx");
/* harmony import */ var _atom_ApplicationState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atom/ApplicationState */ "./atom/ApplicationState.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SideMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SideMenu */ "./components/SideMenu.tsx");
/* harmony import */ var _components_vendor_VendorNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/vendor/VendorNew */ "./components/vendor/VendorNew.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_Global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Global */ "./core/Global.ts");
/* harmony import */ var _helpers___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/ */ "./helpers/index.js");

var _jsxFileName = "D:\\ReactJS\\new-sioi\\pages\\vendor\\new.tsx";









function Home({
  data
}) {
  const {
    0: mode,
    1: setMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(_core_Global__WEBPACK_IMPORTED_MODULE_8__["DisplayMode"].vendor);
  const [application, setApplication] = Object(recoil__WEBPACK_IMPORTED_MODULE_4__["useRecoilState"])(_atom_ApplicationState__WEBPACK_IMPORTED_MODULE_3__["ApplicationState"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container-fluid px-0 m-0",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BaseHead__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Vendor New"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TopBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-fluid d-flex flex-column pt-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SideMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
          switch: setMode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col",
          children: mode === _core_Global__WEBPACK_IMPORTED_MODULE_8__["DisplayMode"].vendor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_vendor_VendorNew__WEBPACK_IMPORTED_MODULE_6__["default"], {
            token: data.jwt
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 45
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

Home.getInitialProps = async ctx => {
  const data = await Object(_helpers___WEBPACK_IMPORTED_MODULE_9__["parseCookies"])(ctx.req);

  if (ctx.res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      ctx.res.writeHead(301, {
        Location: "/"
      });
      ctx.res.end();
    }
  }

  return {
    data: data && data
  };
};

/***/ }),

/***/ "@blueprintjs/core":
/*!************************************!*\
  !*** external "@blueprintjs/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@blueprintjs/core");

/***/ }),

/***/ "@blueprintjs/datetime":
/*!****************************************!*\
  !*** external "@blueprintjs/datetime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@blueprintjs/datetime");

/***/ }),

/***/ "@blueprintjs/popover2":
/*!****************************************!*\
  !*** external "@blueprintjs/popover2" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@blueprintjs/popover2");

/***/ }),

/***/ "@blueprintjs/select":
/*!**************************************!*\
  !*** external "@blueprintjs/select" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@blueprintjs/select");

/***/ }),

/***/ "@blueprintjs/table":
/*!*************************************!*\
  !*** external "@blueprintjs/table" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@blueprintjs/table");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recoil");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9hdG9tL0FwcGxpY2F0aW9uU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYXNlSGVhZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DdXJyZW5jeVNlbGVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub3BCYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWlzYy9jdXJyZW5jeS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92ZW5kb3IvVmVuZG9yLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92ZW5kb3IvVmVuZG9yTmV3LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZlbmRvci9uZXcudHN4Iiwid2VicGFjazovLy8uL2NvcmUvR2xvYmFsLnRzIiwid2VicGFjazovLy8uL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3ZlbmRvci9uZXcudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBibHVlcHJpbnRqcy9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJsdWVwcmludGpzL2RhdGV0aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJsdWVwcmludGpzL3BvcG92ZXIyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJsdWVwcmludGpzL3NlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBibHVlcHJpbnRqcy90YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWNvaWxcIiJdLCJuYW1lcyI6WyJsb2NhbFN0b3JhZ2VFZmZlY3QiLCJrZXkiLCJzZXRTZWxmIiwib25TZXQiLCJzYXZlZFZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwibmV3VmFsdWUiLCJEZWZhdWx0VmFsdWUiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIkFwcGxpY2F0aW9uU3RhdGUiLCJhdG9tIiwiZGVmYXVsdCIsInVzZXIiLCJuYW1lIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInRva2VuIiwic2V0dGluZyIsImxhbmd1YWdlIiwiZWZmZWN0c19VTlNUQUJMRSIsIkJhc2VIZWFkIiwicHJvcHMiLCJ0aXRsZSIsImNzcyIsInVuZGVmaW5lZCIsIkN1cnJlbmN5U2VsZWN0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiYWxsb3dDcmVhdGUiLCJjbG9zZU9uU2VsZWN0IiwiY3JlYXRlZEl0ZW1zIiwiZGlzYWJsZUl0ZW1zIiwiZGlzYWJsZWQiLCJmaWxsIiwiY3VycmVuY3kiLCJDVVJSRU5DSUVTIiwiZmlsdGVyYWJsZSIsImhhc0luaXRpYWxDb250ZW50IiwiaXRlbXMiLCJjdXJyZW5jeVNlbGVjdFByb3BzIiwibWluaW1hbCIsIm9wZW5PbktleURvd24iLCJyZXNldE9uQ2xvc2UiLCJyZXNldE9uUXVlcnkiLCJyZXNldE9uU2VsZWN0IiwiU2VsZWN0Iiwib2ZUeXBlIiwiaGFuZGxlVmFsdWVDaGFuZ2UiLCJtYXliZURlbGV0ZUNyZWF0ZWRDdXJyZW5jeUZyb21BcnJheXMiLCJuZXh0Q3JlYXRlZEl0ZW1zIiwibmV4dEl0ZW1zIiwibWF5YmVBZGRDcmVhdGVkQ3VycmVuY3lUb0FycmF5cyIsIm9uRXhjaGFuZ2VyYXRlQ2hhbmdlIiwiZmxhZ3MiLCJtYXliZUNyZWF0ZU5ld0l0ZW1Gcm9tUXVlcnkiLCJjcmVhdGVDdXJyZW5jeSIsIm1heWJlQ3JlYXRlTmV3SXRlbVJlbmRlcmVyIiwicmVuZGVyQ3JlYXRlQ3VycmVuY3lPcHRpb24iLCJhcmVDdXJyZW5jeUVxdWFsIiwiU2lkZU1lbnUiLCJzd2l0Y2hNb2RlIiwibW9kZSIsInN3aXRjaCIsIkRpc3BsYXlNb2RlIiwiZGFzaGJvYXJkIiwid2lkZ2V0IiwiVG9wQmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29va2llIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwidXNlQ29va2llcyIsImdvTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiZ29EYXNoYm9hcmQiLCJnb1JlcG9ydCIsImhhbmRsZWxvZ291dCIsImJhY2tncm91bmRDb2xvciIsImN1cnJlbmN5X2NvZGUiLCJleGNoYW5nZV9yYXRlIiwibWFwIiwibSIsImluZGV4IiwicmFuayIsInJlbmRlckN1cnJlbmN5IiwiaGFuZGxlQ2xpY2siLCJtb2RpZmllcnMiLCJxdWVyeSIsIm1hdGNoZXNQcmVkaWNhdGUiLCJ0ZXh0IiwiYWN0aXZlIiwidG9TdHJpbmciLCJoaWdobGlnaHRUZXh0IiwiZmlsdGVyQ3VycmVuY3kiLCJfaW5kZXgiLCJleGFjdE1hdGNoIiwibm9ybWFsaXplZFRpdGxlIiwidG9Mb3dlckNhc2UiLCJub3JtYWxpemVkUXVlcnkiLCJpbmRleE9mIiwibGFzdEluZGV4Iiwid29yZHMiLCJzcGxpdCIsImZpbHRlciIsIndvcmQiLCJsZW5ndGgiLCJlc2NhcGVSZWdFeHBDaGFycyIsInJlZ2V4cCIsIlJlZ0V4cCIsImpvaW4iLCJ0b2tlbnMiLCJtYXRjaCIsImV4ZWMiLCJiZWZvcmUiLCJzbGljZSIsInJlc3QiLCJyZXBsYWNlIiwiaXRlbVByZWRpY2F0ZSIsIml0ZW1SZW5kZXJlciIsImN1cnJlbmN5QSIsImN1cnJlbmN5QiIsImRvZXNDdXJyZW5jeUVxdWFsUXVlcnkiLCJhcnJheUNvbnRhaW5zQ3VycmVuY3kiLCJjdXJyZW5jaWVzIiwiY3VycmVuY3lUb0ZpbmQiLCJzb21lIiwiYWRkQ3VycmVuY3lUb0FycmF5IiwiY3VycmVuY3lUb0FkZCIsImRlbGV0ZUN1cnJlbmN5RnJvbUFycmF5IiwiY3VycmVuY3lUb0RlbGV0ZSIsImlzTmV3bHlDcmVhdGVkSXRlbSIsIndhc0l0ZW1DcmVhdGVkQnlVc2VyIiwiVmVuZG9yTmV3IiwiSXRlbURldGFpbCIsIlNwYWNlciIsImhlaWdodCIsIlNlY3Rpb25IZWFkZXIiLCJzdHlsZXMiLCJzZWN0aW9uSGVhZGVyIiwiaHIiLCJJdGVtIiwiaXRlbVRpdGxlIiwibGFiZWwiLCJpdGVtSW5mbyIsInNrZWxldG9uIiwiQWN0aW9uQnV0dG9ucyIsInRleHRBbGlnbiIsIkludGVudCIsIlBSSU1BUlkiLCJzdWNjZXNzVG9hc3QiLCJtYXJnaW5SaWdodCIsIkRBTkdFUiIsImVycm9yVG9hc3QiLCJzZWxlY3RDdXN0b21lciIsInNldEN1c3RvbWVyIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRDdXN0b21lck5hbWUiLCJkYXRhc2V0Iiwic2V0Q2F0ZWdvcnkiLCJjYXQiLCJzZWxlY3RMZXR0ZXJoZWFkIiwic2V0TGV0dGVyaGVhZCIsInNlbGVjdGV4Y2hhbmdlcmF0ZSIsInNldEV4Y2hhbmdlcmF0ZSIsInNldEN1cnJlbmN5IiwidG9hc3RlciIsInJlZkhhbmRsZXJzIiwicmVmIiwiYWRkVG9hc3QiLCJ0b2FzdCIsInRpbWVvdXQiLCJzaG93IiwiaWNvbiIsImludGVudCIsIm1lc3NhZ2UiLCJJbnB1dCIsInN0eWxlTmFtZSIsIndpZHRoIiwiYm9yZGVyQ29sb3IiLCJpY29uTGVmdCIsInZhbGlkYXRlRGF0YSIsInBsYWNlaG9sZGVyIiwiZGVmYXVsdFZhbHVlIiwidmFsaWRhdGUiLCJpY29uUmlnaHQiLCJyZXF1aXJlZCIsIkNsYXNzZXMiLCJQT1BPVkVSMl9DT05URU5UX1NJWklORyIsInNlYXJjaGxhYmVsIiwicGFkZGluZ0JvdHRvbSIsImFjdGlvbiIsImN1c3RvbWVyIiwibGV0dGVyaGVhZCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsIlBPUE9WRVIyX0RJU01JU1MiLCJoYW5kbGVPcGVuIiwiaXNPcGVuIiwidGFyZ2V0UHJvcHMiLCJzcGFjZXIiLCJTdWdnZXN0IiwiU3RhdGljIiwiaXNmb3VuZCIsIk9iamVjdCIsImtleXMiLCJwYXltZW50dGVybURhdGEiLCJjb2RlIiwic2V0UGF5Y29kZSIsInNldFBheWRlc2MiLCJkZXNjcmlwdGlvbiIsImFsZXJ0IiwiZ29TZWFyY2giLCJnb1NlYXJjaExldHRlckhlYWQiLCJkZXRhaWxEYXRhIiwicmVxdWlyZSIsInNldFNrZWxldG9uIiwiY3VzdG9tZXJuYW1lIiwiY2F0ZWdvcnkiLCJleGNoYW5nZXJhdGUiLCJzZXRJc09wZW4iLCJwYXljb2RlIiwicGF5ZGVzYyIsImdldExvYWRpbmdPcHRpb25zIiwibG9hZGluZ09wdGlvbnMiLCJUYWJsZUxvYWRpbmdPcHRpb24iLCJDRUxMUyIsIkNPTFVNTl9IRUFERVJTIiwiUk9XX0hFQURFUlMiLCJmb3JtYXRDb2x1bW5OYW1lIiwiY29sdW1uTmFtZSIsImZpcnN0Q2hhcmFjdGVyIiwidG9VcHBlckNhc2UiLCJyZW5kZXJDZWxsIiwicm93SW5kZXgiLCJjb2x1bW5JbmRleCIsImRldGFpbEl0ZW0iLCJEYXRhR3JpZCIsImNvbHVtbnMiLCJjZWxsUmVuZGVyZXIiLCJ0b0ZpeGVkIiwiU2VsZWN0aW9uTW9kZXMiLCJBTEwiLCJkaWFsb2dPcHRpb25zIiwiYXV0b0ZvY3VzIiwiY2FuRXNjYXBlS2V5Q2xvc2UiLCJjYW5PdXRzaWRlQ2xpY2tDbG9zZSIsImVuZm9yY2VGb2N1cyIsInVzZVBvcnRhbCIsImhhbmRsZUNsb3NlIiwianNEYXRlRm9ybWF0dGVyIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJwYXJzZURhdGUiLCJzdHIiLCJEYXRlIiwiRGF0ZWZpZWxkIiwiVGV4dEFyZWFmaWVsZCIsIkVsZXZhdGlvbiIsIkZPVVIiLCJwYWRkaW5nTGVmdCIsImJvcmRlcldpZHRoIiwiYm9yZGVyUmFkaXVzIiwiQ29yZUNsYXNzZXMiLCJESUFMT0dfQk9EWSIsIkRJQUxPR19GT09URVIiLCJESUFMT0dfRk9PVEVSX0FDVElPTlMiLCJQb3NpdGlvbiIsIlRPUCIsIlBsYXlNb2RlIiwicGFyc2VDb29raWVzIiwicmVxIiwiaGVhZGVycyIsImRvY3VtZW50IiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwibGF5b3V0Iiwid2lkdGhzIiwia2luZCIsInciLCJwIiwic3JjU2V0Iiwic2l6ZXMiLCJnZXRXaWR0aHMiLCJsYXN0Iiwic3JjIiwiaSIsInBhcnNlSW50IiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiY29uZmlnTG9hZGVyIiwidW5vcHRpbWl6ZWQiLCJwcmlvcml0eSIsImFsbCIsInVuc2l6ZWQiLCJCb29sZWFuIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwiSG9tZSIsImRhdGEiLCJzZXRNb2RlIiwidmVuZG9yIiwiYXBwbGljYXRpb24iLCJzZXRBcHBsaWNhdGlvbiIsInVzZVJlY29pbFN0YXRlIiwiand0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwiY29uc3RydWN0b3IiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLDhEOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7Ozs7QUNBQTtB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FBMEI7QUFBUSxxQkFBUyxFQUFDLDJFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUk7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FBMEI7QUFBUSxxQkFBUyxFQUFDLHVFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0k7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FBMEI7QUFBUSxxQkFBUyxFQUFDLG9FQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBTUk7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FBMEI7QUFBUSxxQkFBUyxFQUFDLHNFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBT0k7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FBMEI7QUFBUSxxQkFBUyxFQUFDLCtFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKLGVBUUk7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FBMEI7QUFBUSxxQkFBUyxFQUFDLGtFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKLGVBU0k7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FBMEI7QUFBUSxxQkFBUyxFQUFDLGlFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLE1BQVQsQ0FBZ0I5QyxLQUFoQixFQUF1QjtBQUVwQyxRQUFNK0MsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULEVBQW9CQyxZQUFwQixJQUFvQ0MsK0RBQVUsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFwRDs7QUFFQSxRQUFNQyxPQUFPLEdBQUlDLENBQUQsSUFBTztBQUNyQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FSLFVBQU0sQ0FBQ1MsSUFBUCxDQUFZLFFBQVo7QUFDRCxHQUhEOztBQUtBLFFBQU1DLFdBQVcsR0FBSUgsQ0FBRCxJQUFPO0FBQ3pCQSxLQUFDLENBQUNDLGNBQUY7QUFDQVIsVUFBTSxDQUFDUyxJQUFQLENBQVksWUFBWjtBQUNELEdBSEQ7O0FBS0EsUUFBTUUsUUFBUSxHQUFJSixDQUFELElBQU87QUFDdEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBUixVQUFNLENBQUNTLElBQVAsQ0FBWSxTQUFaO0FBQ0QsR0FIRDs7QUFLQSxpQkFBZUcsWUFBZixDQUE0QkwsQ0FBNUIsRUFBK0I7QUFDN0JBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBSixnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBSixVQUFNLENBQUNTLElBQVAsQ0FBWSxRQUFaO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixTQUFLLEVBQUU7QUFBRUkscUJBQWUsRUFBRTtBQUFuQixLQUFsQztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsK0JBQ0UscUVBQUMsaURBQUQ7QUFDRSxhQUFHLEVBQUMsc0JBRE47QUFFRSxhQUFHLEVBQUMsTUFGTjtBQUdFLGVBQUssRUFBRSxFQUhUO0FBSUUsZ0JBQU0sRUFBRSxFQUpWO0FBS0UsZ0JBQU0sRUFBQztBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBWUU7QUFBSyxlQUFTLEVBQUMsa0NBQWY7QUFBQSw4QkFDRTtBQUFRLGlCQUFTLEVBQUMsc0NBQWxCO0FBQXlELGVBQU8sRUFBRUgsV0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQVEsaUJBQVMsRUFBQyx1Q0FBbEI7QUFBMEQsZUFBTyxFQUFFQyxRQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBUSxpQkFBUyxFQUFDLHlDQUFsQjtBQUE0RCxlQUFPLEVBQUVDLFlBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBUSxpQkFBUyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQVEsaUJBQVMsRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUFRLGlCQUFTLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEREO0FBRUE7O0FBVUE7QUFDTyxNQUFNNUMsVUFBdUIsR0FBRyxDQUNuQztBQUFFOEMsZUFBYSxFQUFFLEtBQWpCO0FBQXdCQyxlQUFhLEVBQUU7QUFBdkMsQ0FEbUMsRUFFbkM7QUFBRUQsZUFBYSxFQUFFLEtBQWpCO0FBQXdCQyxlQUFhLEVBQUU7QUFBdkMsQ0FGbUMsRUFHbkM7QUFBRUQsZUFBYSxFQUFFLEtBQWpCO0FBQXdCQyxlQUFhLEVBQUU7QUFBdkMsQ0FIbUMsRUFJbkM7QUFBRUQsZUFBYSxFQUFFLEtBQWpCO0FBQXdCQyxlQUFhLEVBQUU7QUFBdkMsQ0FKbUMsRUFLbkM7QUFBRUQsZUFBYSxFQUFFLEtBQWpCO0FBQXdCQyxlQUFhLEVBQUU7QUFBdkMsQ0FMbUMsRUFNckNDLEdBTnFDLENBTWpDLENBQUNDLENBQUQsRUFBSUMsS0FBSixxQ0FBb0JELENBQXBCO0FBQXVCRSxNQUFJLEVBQUVELEtBQUssR0FBRztBQUFyQyxFQU5pQyxDQUFoQztBQVFBLE1BQU1FLGNBQXVDLEdBQUcsQ0FBQ3JELFFBQUQsRUFBVztBQUFFc0QsYUFBRjtBQUFlQyxXQUFmO0FBQTBCQztBQUExQixDQUFYLEtBQWlEO0FBQ3BHLE1BQUksQ0FBQ0QsU0FBUyxDQUFDRSxnQkFBZixFQUFpQztBQUM3QixXQUFPLElBQVA7QUFDSDs7QUFDRCxRQUFNQyxJQUFJLEdBQUksR0FBRTFELFFBQVEsQ0FBQytDLGFBQWMsRUFBdkM7QUFDQSxzQkFDSSxxRUFBQywwREFBRDtBQUNJLFVBQU0sRUFBRVEsU0FBUyxDQUFDSSxNQUR0QjtBQUVJLFlBQVEsRUFBRUosU0FBUyxDQUFDekQsUUFGeEI7QUFHSSxTQUFLLEVBQUVFLFFBQVEsQ0FBQ2dELGFBQVQsQ0FBdUJZLFFBQXZCLEVBSFg7QUFLSSxXQUFPLEVBQUVOLFdBTGI7QUFNSSxRQUFJLEVBQUVPLGFBQWEsQ0FBQ0gsSUFBRCxFQUFPRixLQUFQO0FBTnZCLEtBSVN4RCxRQUFRLENBQUMrQyxhQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFVSCxDQWZNO0FBaUJBLE1BQU14QiwwQkFBMEIsR0FBRyxDQUN0Q2lDLEtBRHNDLEVBRXRDRyxNQUZzQyxFQUd0Q0wsV0FIc0Msa0JBS3RDLHFFQUFDLDBEQUFEO0FBQ0ksTUFBSSxFQUFDLEtBRFQ7QUFFSSxNQUFJLEVBQUcsV0FBVUUsS0FBTSxHQUYzQjtBQUdJLFFBQU0sRUFBRUcsTUFIWjtBQUlJLFNBQU8sRUFBRUwsV0FKYjtBQUtJLHNCQUFvQixFQUFFO0FBTDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRztBQWNBLE1BQU1RLGNBQXdDLEdBQUcsQ0FBQ04sS0FBRCxFQUFReEQsUUFBUixFQUFrQitELE1BQWxCLEVBQTBCQyxVQUExQixLQUF5QztBQUM3RixRQUFNQyxlQUFlLEdBQUdqRSxRQUFRLENBQUMrQyxhQUFULENBQXVCbUIsV0FBdkIsRUFBeEI7QUFDQSxRQUFNQyxlQUFlLEdBQUdYLEtBQUssQ0FBQ1UsV0FBTixFQUF4Qjs7QUFFQSxNQUFJRixVQUFKLEVBQWdCO0FBQ1osV0FBT0MsZUFBZSxLQUFLRSxlQUEzQjtBQUNILEdBRkQsTUFFTztBQUNILFdBQVEsR0FBRUYsZUFBZ0IsSUFBR2pFLFFBQVEsQ0FBQ2dELGFBQWMsRUFBN0MsQ0FBK0NvQixPQUEvQyxDQUF1REQsZUFBdkQsS0FBMkUsQ0FBbEY7QUFDSDtBQUNKLENBVE07O0FBV1AsU0FBU04sYUFBVCxDQUF1QkgsSUFBdkIsRUFBcUNGLEtBQXJDLEVBQW9EO0FBQ2hELE1BQUlhLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFFBQU1DLEtBQUssR0FBR2QsS0FBSyxDQUNkZSxLQURTLENBQ0gsS0FERyxFQUVUQyxNQUZTLENBRUZDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxNQUFMLEdBQWMsQ0FGcEIsRUFHVHpCLEdBSFMsQ0FHTDBCLGlCQUhLLENBQWQ7O0FBSUEsTUFBSUwsS0FBSyxDQUFDSSxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLFdBQU8sQ0FBQ2hCLElBQUQsQ0FBUDtBQUNIOztBQUNELFFBQU1rQixNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXUCxLQUFLLENBQUNRLElBQU4sQ0FBVyxHQUFYLENBQVgsRUFBNEIsSUFBNUIsQ0FBZjtBQUNBLFFBQU1DLE1BQXlCLEdBQUcsRUFBbEM7O0FBQ0EsU0FBTyxJQUFQLEVBQWE7QUFDVCxVQUFNQyxLQUFLLEdBQUdKLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZdkIsSUFBWixDQUFkOztBQUNBLFFBQUksQ0FBQ3NCLEtBQUwsRUFBWTtBQUNSO0FBQ0g7O0FBQ0QsVUFBTU4sTUFBTSxHQUFHTSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNOLE1BQXhCO0FBQ0EsVUFBTVEsTUFBTSxHQUFHeEIsSUFBSSxDQUFDeUIsS0FBTCxDQUFXZCxTQUFYLEVBQXNCTyxNQUFNLENBQUNQLFNBQVAsR0FBbUJLLE1BQXpDLENBQWY7O0FBQ0EsUUFBSVEsTUFBTSxDQUFDUixNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ25CSyxZQUFNLENBQUNyQyxJQUFQLENBQVl3QyxNQUFaO0FBQ0g7O0FBQ0RiLGFBQVMsR0FBR08sTUFBTSxDQUFDUCxTQUFuQjtBQUNBVSxVQUFNLENBQUNyQyxJQUFQLGVBQVk7QUFBQSxnQkFBeUJzQyxLQUFLLENBQUMsQ0FBRDtBQUE5QixPQUFhWCxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBWjtBQUNIOztBQUNELFFBQU1lLElBQUksR0FBRzFCLElBQUksQ0FBQ3lCLEtBQUwsQ0FBV2QsU0FBWCxDQUFiOztBQUNBLE1BQUllLElBQUksQ0FBQ1YsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ2pCSyxVQUFNLENBQUNyQyxJQUFQLENBQVkwQyxJQUFaO0FBQ0g7O0FBQ0QsU0FBT0wsTUFBUDtBQUNIOztBQUVELFNBQVNKLGlCQUFULENBQTJCakIsSUFBM0IsRUFBeUM7QUFDckMsU0FBT0EsSUFBSSxDQUFDMkIsT0FBTCxDQUFhLDZCQUFiLEVBQTRDLE1BQTVDLENBQVA7QUFDSDs7QUFFTSxNQUFNaEYsbUJBQW1CLEdBQUc7QUFDL0JpRixlQUFhLEVBQUV4QixjQURnQjtBQUUvQnlCLGNBQVksRUFBRWxDLGNBRmlCO0FBRy9CakQsT0FBSyxFQUFFSDtBQUh3QixDQUE1QjtBQU1BLFNBQVNvQixjQUFULENBQXdCMEIsYUFBeEIsRUFBMEQ7QUFDN0QsU0FBTztBQUNIQSxpQkFERztBQUVIQyxpQkFBYSxFQUFFO0FBRlosR0FBUDtBQUlIO0FBRU0sU0FBU3hCLGdCQUFULENBQTBCZ0UsU0FBMUIsRUFBZ0RDLFNBQWhELEVBQXNFO0FBQ3pFO0FBQ0EsU0FBT0QsU0FBUyxDQUFDekMsYUFBVixDQUF3Qm1CLFdBQXhCLE9BQTBDdUIsU0FBUyxDQUFDMUMsYUFBVixDQUF3Qm1CLFdBQXhCLEVBQWpEO0FBQ0g7QUFFTSxTQUFTd0Isc0JBQVQsQ0FBZ0MxRixRQUFoQyxFQUFxRHdELEtBQXJELEVBQW9FO0FBQ3ZFLFNBQU94RCxRQUFRLENBQUMrQyxhQUFULENBQXVCbUIsV0FBdkIsT0FBeUNWLEtBQUssQ0FBQ1UsV0FBTixFQUFoRDtBQUNIO0FBRU0sU0FBU3lCLHFCQUFULENBQStCQyxVQUEvQixFQUF3REMsY0FBeEQsRUFBNEY7QUFDL0YsU0FBT0QsVUFBVSxDQUFDRSxJQUFYLENBQWlCOUYsUUFBRCxJQUF5QkEsUUFBUSxDQUFDK0MsYUFBVCxLQUEyQjhDLGNBQWMsQ0FBQzlDLGFBQW5GLENBQVA7QUFDSDtBQUVNLFNBQVNnRCxrQkFBVCxDQUE0QkgsVUFBNUIsRUFBcURJLGFBQXJELEVBQStFO0FBQ2xGLFNBQU8sQ0FBQyxHQUFHSixVQUFKLEVBQWdCSSxhQUFoQixDQUFQO0FBQ0g7QUFFTSxTQUFTQyx1QkFBVCxDQUFpQ0wsVUFBakMsRUFBMERNLGdCQUExRCxFQUF1RjtBQUMxRixTQUFPTixVQUFVLENBQUNwQixNQUFYLENBQWtCeEUsUUFBUSxJQUFJQSxRQUFRLEtBQUtrRyxnQkFBM0MsQ0FBUDtBQUNIO0FBRU0sU0FBU2pGLCtCQUFULENBQ0hiLEtBREcsRUFFSFIsWUFGRyxFQUdISSxRQUhHLEVBSThDO0FBQ2pELFFBQU1tRyxrQkFBa0IsR0FBRyxDQUFDUixxQkFBcUIsQ0FBQ3ZGLEtBQUQsRUFBUUosUUFBUixDQUFqRDtBQUNBLFNBQU87QUFDSEosZ0JBQVksRUFBRXVHLGtCQUFrQixHQUFHSixrQkFBa0IsQ0FBQ25HLFlBQUQsRUFBZUksUUFBZixDQUFyQixHQUFnREosWUFEN0U7QUFFSDtBQUNBUSxTQUFLLEVBQUUrRixrQkFBa0IsR0FBR0osa0JBQWtCLENBQUMzRixLQUFELEVBQVFKLFFBQVIsQ0FBckIsR0FBeUNJO0FBSC9ELEdBQVA7QUFLSDtBQUVNLFNBQVNVLG9DQUFULENBQ0hWLEtBREcsRUFFSFIsWUFGRyxFQUdISSxRQUhHLEVBSThDO0FBQ2pELFFBQU1vRyxvQkFBb0IsR0FBR1QscUJBQXFCLENBQUMvRixZQUFELEVBQWVJLFFBQWYsQ0FBbEQsQ0FEaUQsQ0FHakQ7O0FBQ0EsU0FBTztBQUNISixnQkFBWSxFQUFFd0csb0JBQW9CLEdBQUdILHVCQUF1QixDQUFDckcsWUFBRCxFQUFlSSxRQUFmLENBQTFCLEdBQXFESixZQURwRjtBQUVIUSxTQUFLLEVBQUVnRyxvQkFBb0IsR0FBR0gsdUJBQXVCLENBQUM3RixLQUFELEVBQVFKLFFBQVIsQ0FBMUIsR0FBOENJO0FBRnRFLEdBQVA7QUFJSCxDOzs7Ozs7Ozs7OztBQzdKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFFZSxTQUFTaUcsU0FBVCxDQUFtQm5ILEtBQW5CLEVBQTBCO0FBQ3JDLHNCQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQSwyQkFDSSxxRUFBQyw0Q0FBRDtBQUFZLFdBQUssRUFBRUEsS0FBSyxDQUFDTDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTeUgsVUFBVCxDQUFvQnBILEtBQXBCLEVBQTJCO0FBRXRDLFFBQU1xSCxNQUFNLEdBQUlySCxLQUFELElBQVc7QUFDdEIsd0JBQ0k7QUFBSyxXQUFLLEVBQUU7QUFBRXNILGNBQU0sRUFBRXRILEtBQUssQ0FBQ3NIO0FBQWhCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBR0gsR0FKRDs7QUFNQSxRQUFNQyxhQUFhLEdBQUl2SCxLQUFELElBQVc7QUFDN0Isd0JBQ0k7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFxQixXQUFLLEVBQUU7QUFBRTRELHVCQUFlLEVBQUU7QUFBbkIsT0FBNUI7QUFBQSw4QkFDSTtBQUFNLGlCQUFTLEVBQUU0RCx5REFBTSxDQUFDQyxhQUF4QjtBQUFBLGtCQUF3Q3pILEtBQUssQ0FBQ0M7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSSxpQkFBUyxFQUFFdUgseURBQU0sQ0FBQ0U7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBTUgsR0FQRDs7QUFTQSxRQUFNQyxJQUFJLEdBQUkzSCxLQUFELElBQVc7QUFDcEIsd0JBQ0k7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBa0MsV0FBSyxFQUFFO0FBQUU0RCx1QkFBZSxFQUFFO0FBQW5CLE9BQXpDO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBMEIsYUFBSyxFQUFFO0FBQUVBLHlCQUFlLEVBQUU7QUFBbkIsU0FBakM7QUFBQSwrQkFDSTtBQUFNLG1CQUFTLEVBQUU0RCx5REFBTSxDQUFDSSxTQUF4QjtBQUFBLG9CQUFvQzVILEtBQUssQ0FBQzZIO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUEyQixhQUFLLEVBQUU7QUFBRWpFLHlCQUFlLEVBQUU7QUFBbkIsU0FBbEM7QUFBQSwrQkFDSTtBQUFNLG1CQUFTLEVBQUcsR0FBRTRELHlEQUFNLENBQUNNLFFBQVMsSUFBR0MsUUFBUyxFQUFoRDtBQUFBLG9CQUFvRC9ILEtBQUssQ0FBQ3dFO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFVSCxHQVhEOztBQWFBLFFBQU13RCxhQUFhLEdBQUloSSxLQUFELElBQVc7QUFDN0Isd0JBQ0k7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFxQixXQUFLLEVBQUU7QUFBRTRELHVCQUFlLEVBQUU7QUFBbkIsT0FBNUI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNJO0FBQU0sbUJBQVMsRUFBRTRELHlEQUFNLENBQUNDLGFBQXhCO0FBQUEsb0JBQXdDekgsS0FBSyxDQUFDQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBcUIsYUFBSyxFQUFFO0FBQUVnSSxtQkFBUyxFQUFFO0FBQWIsU0FBNUI7QUFBQSxnQ0FDSSxxRUFBQyx3REFBRDtBQUFRLGNBQUksRUFBQyxNQUFiO0FBQW9CLGdCQUFNLEVBQUVDLHdEQUFNLENBQUNDLE9BQW5DO0FBQTRDLGlCQUFPLEVBQUVDLFlBQXJEO0FBQW1FLGVBQUssRUFBRSxJQUExRTtBQUFnRixlQUFLLEVBQUU7QUFBRUMsdUJBQVcsRUFBRTtBQUFmO0FBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSxxRUFBQyx3REFBRDtBQUFRLGNBQUksRUFBQyxNQUFiO0FBQW9CLGdCQUFNLEVBQUVILHdEQUFNLENBQUNJLE1BQW5DO0FBQTJDLGlCQUFPLEVBQUVDLFVBQXBEO0FBQWdFLGVBQUssRUFBRTtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBUUk7QUFBSSxpQkFBUyxFQUFFZix5REFBTSxDQUFDRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFZSCxHQWJEOztBQWVBLFFBQU1jLGNBQWMsR0FBSWxGLENBQUQsSUFBTztBQUMxQm1GLGVBQVcsQ0FBQ25GLENBQUMsQ0FBQ29GLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0FDLG1CQUFlLENBQUN0RixDQUFDLENBQUNvRixNQUFGLENBQVNHLE9BQVQsQ0FBaUJySixJQUFsQixDQUFmO0FBQ0FzSixlQUFXLENBQUN4RixDQUFDLENBQUNvRixNQUFGLENBQVNHLE9BQVQsQ0FBaUJFLEdBQWxCLENBQVg7QUFDSCxHQUpEOztBQU1BLFFBQU1DLGdCQUFnQixHQUFJMUYsQ0FBRCxJQUFPO0FBQzVCMkYsaUJBQWEsQ0FBQzNGLENBQUMsQ0FBQ29GLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQ0gsR0FGRDs7QUFJQSxRQUFNTyxrQkFBa0IsR0FBSTVGLENBQUQsSUFBTztBQUM5QjZGLG1CQUFlLENBQUM3RixDQUFDLENBQUNRLGFBQUgsQ0FBZjtBQUNBc0YsZUFBVyxDQUFDOUYsQ0FBQyxDQUFDTyxhQUFILENBQVg7QUFDSCxHQUhEOztBQUtBLE1BQUl3RixPQUFKO0FBQ0EsUUFBTUMsV0FBVyxHQUFHO0FBQ2hCRCxXQUFPLEVBQUdFLEdBQUQsSUFBbUJGLE9BQU8sR0FBR0U7QUFEdEIsR0FBcEI7O0FBSUEsUUFBTUMsUUFBUSxHQUFJQyxLQUFELElBQXdCO0FBQ3JDQSxTQUFLLENBQUNDLE9BQU4sR0FBZ0IsSUFBaEI7QUFDQUwsV0FBTyxDQUFDTSxJQUFSLENBQWFGLEtBQWI7QUFDSCxHQUhEOztBQUtBLFFBQU1sQixVQUFVLEdBQUlqRixDQUFELElBQU87QUFDdEJrRyxZQUFRLENBQUM7QUFDTEksVUFBSSxFQUFFLGNBREQ7QUFFTEMsWUFBTSxFQUFFM0Isd0RBQU0sQ0FBQ0ksTUFGVjtBQUdMd0IsYUFBTyxFQUNIO0FBQ2hCO0FBTGlCLEtBQUQsQ0FBUjtBQU9ILEdBUkQ7O0FBVUEsUUFBTTFCLFlBQVksR0FBRyxNQUFNO0FBQ3ZCb0IsWUFBUSxDQUFDO0FBQ0xJLFVBQUksRUFBRSxNQUREO0FBRUxDLFlBQU0sRUFBRTNCLHdEQUFNLENBQUNDLE9BRlY7QUFHTDJCLGFBQU8sZUFDSDtBQUFBLGtFQUNrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEbEM7QUFBQTtBQUpDLEtBQUQsQ0FBUjtBQVNILEdBVkQ7O0FBWUEsUUFBTUMsS0FBSyxHQUFJL0osS0FBRCxJQUFXO0FBQ3JCLFVBQU1nSyxTQUFTLEdBQUksd0JBQXVCaEssS0FBSyxDQUFDNkosTUFBTyxFQUF2RDtBQUNBLHdCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsRUFBZjtBQUFrQixhQUFLLEVBQUU7QUFBRUksZUFBSyxFQUFFLEdBQVQ7QUFBY3JHLHlCQUFlLEVBQUUsYUFBL0I7QUFBOENxRSxtQkFBUyxFQUFFO0FBQXpELFNBQXpCO0FBQUEsK0JBQ0kscUVBQUMsOERBQUQ7QUFBVSxpQkFBTyxlQUFFO0FBQUEsa0NBQWNqSSxLQUFLLENBQUM2SCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQW5CO0FBQXNELG1CQUFTLEVBQUMsTUFBaEU7QUFBdUUsZ0JBQU0sRUFBQyxTQUE5RTtBQUF3RixtQkFBUyxFQUFFLElBQW5HO0FBQUEsaUNBQ0k7QUFBTSxxQkFBUyxFQUFFTCx5REFBTSxDQUFDSSxTQUF4QjtBQUFBLHNCQUFvQzVILEtBQUssQ0FBQzZIO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUk7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsMkJBQWY7QUFBMkMsZUFBSyxFQUFFO0FBQUVxQyx1QkFBVyxFQUFFO0FBQWYsV0FBbEQ7QUFBQSxxQkFDS2xLLEtBQUssQ0FBQ21LLFFBQU4saUJBQ0cscUVBQUMsc0RBQUQ7QUFBTSxnQkFBSSxFQUFFbkssS0FBSyxDQUFDbUssUUFBbEI7QUFBNEIsb0JBQVEsRUFBRSxFQUF0QztBQUEwQyxxQkFBUyxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRlIsZUFJSTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBUyxFQUFFSCxTQUE5QjtBQUF5QyxrQkFBTSxFQUFFSSxZQUFqRDtBQUErRCx1QkFBVyxFQUFFcEssS0FBSyxDQUFDcUssV0FBbEY7QUFBK0Ysd0JBQVksRUFBRXJLLEtBQUssQ0FBQ3NLLFlBQW5IO0FBQWlJLDZCQUFldEssS0FBSyxDQUFDdUs7QUFBdEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixFQUtLdkssS0FBSyxDQUFDd0ssU0FBTixpQkFDRyxxRUFBQyxzREFBRDtBQUFNLGdCQUFJLEVBQUV4SyxLQUFLLENBQUN3SyxTQUFsQjtBQUE2QixvQkFBUSxFQUFFLEVBQXZDO0FBQTJDLHFCQUFTLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOUixFQVFLeEssS0FBSyxDQUFDeUssUUFBTixpQkFDRztBQUFNLHFCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFxQkk7QUFBSyxhQUFLLEVBQUU7QUFBRVIsZUFBSyxFQUFFLEVBQVQ7QUFBYXJHLHlCQUFlLEVBQUU7QUFBOUIsU0FBWjtBQUFBLCtCQUNJLHFFQUFDLDhEQUFEO0FBQ0kseUJBQWUsRUFBQyxPQURwQjtBQUVJLDBCQUFnQixFQUFFOEcsNkRBQU8sQ0FBQ0MsdUJBRjlCO0FBR0ksbUJBQVMsRUFBQyxPQUhkO0FBSUksaUJBQU8sZUFDSDtBQUFnQixpQkFBSyxFQUFFO0FBQUVWLG1CQUFLLEVBQUUsR0FBVDtBQUFjM0Msb0JBQU0sRUFBRTtBQUF0QixhQUF2QjtBQUFBLG9DQUNJO0FBQUksdUJBQVMsRUFBQyxrQkFBZDtBQUFBLHlCQUFrQ3RILEtBQUssQ0FBQzRLLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUksdUJBQVMsRUFBRXBELHlEQUFNLENBQUNFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSTtBQUFJLHVCQUFTLEVBQUMsa0JBQWQ7QUFBQSw2Q0FBa0QxSCxLQUFLLENBQUM0SyxXQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEosZUFJSTtBQUFJLHVCQUFTLEVBQUVwRCx5REFBTSxDQUFDRSxFQUF0QjtBQUEwQixtQkFBSyxFQUFFO0FBQUVtRCw2QkFBYSxFQUFFO0FBQWpCO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosZUFLSTtBQUFBLHlCQUNLN0ssS0FBSyxDQUFDOEssTUFBTixJQUFjLFVBQWQsaUJBQ0cscUVBQUMsNERBQUQ7QUFBWSx3QkFBUSxFQUFFdEMsY0FBdEI7QUFBc0MsNkJBQWEsRUFBRXVDLFFBQXJEO0FBQUEsd0NBQ0kscUVBQUMsdURBQUQ7QUFBTyx1QkFBSyxFQUFDLHdCQUFiO0FBQXNDLHVCQUFLLEVBQUMsS0FBNUM7QUFBa0QsOEJBQVMsR0FBM0Q7QUFBK0QsK0JBQVU7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJLHFFQUFDLHVEQUFEO0FBQU8sdUJBQUssRUFBQyxzQkFBYjtBQUFvQyx1QkFBSyxFQUFDLEtBQTFDO0FBQWdELDhCQUFTLEdBQXpEO0FBQTZELCtCQUFVO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosZUFHSSxxRUFBQyx1REFBRDtBQUFPLHVCQUFLLEVBQUMsa0JBQWI7QUFBZ0MsdUJBQUssRUFBQyxLQUF0QztBQUE0Qyw4QkFBUyxHQUFyRDtBQUF5RCwrQkFBVTtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhKLGVBSUkscUVBQUMsdURBQUQ7QUFBTyx1QkFBSyxFQUFDLG1CQUFiO0FBQWlDLHVCQUFLLEVBQUMsS0FBdkM7QUFBNkMsOEJBQVMsR0FBdEQ7QUFBMEQsK0JBQVU7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKSixlQUtJLHFFQUFDLHVEQUFEO0FBQU8sdUJBQUssRUFBQyxnQkFBYjtBQUE4Qix1QkFBSyxFQUFDLEtBQXBDO0FBQTBDLDhCQUFTLEdBQW5EO0FBQXVELCtCQUFVO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZSLEVBVUsvSyxLQUFLLENBQUM4SyxNQUFOLElBQWMsb0JBQWQsaUJBQ0cscUVBQUMsNERBQUQ7QUFBWSx3QkFBUSxFQUFFOUIsZ0JBQXRCO0FBQXdDLDZCQUFhLEVBQUVnQyxVQUF2RDtBQUFBLHdDQUNJLHFFQUFDLHVEQUFEO0FBQU8sdUJBQUssRUFBQyw2QkFBYjtBQUEyQyx1QkFBSyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSSxxRUFBQyx1REFBRDtBQUFPLHVCQUFLLEVBQUMseUJBQWI7QUFBdUMsdUJBQUssRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKLGVBR0kscUVBQUMsdURBQUQ7QUFBTyx1QkFBSyxFQUFDLG9CQUFiO0FBQWtDLHVCQUFLLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKLGVBdUJJO0FBQUksdUJBQVMsRUFBRXhELHlEQUFNLENBQUNFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdkJKLGVBd0JJO0FBQUssbUJBQUssRUFBRTtBQUFFdUQsdUJBQU8sRUFBRSxNQUFYO0FBQW1CQyw4QkFBYyxFQUFFLFVBQW5DO0FBQStDQyx5QkFBUyxFQUFFO0FBQTFELGVBQVo7QUFBQSxzQ0FDSSxxRUFBQyx3REFBRDtBQUFRLHlCQUFTLEVBQUVULDZEQUFPLENBQUNVLGdCQUEzQjtBQUE2QyxxQkFBSyxFQUFFO0FBQUUvQyw2QkFBVyxFQUFFO0FBQWYsaUJBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUkscUVBQUMsd0RBQUQ7QUFBUSxzQkFBTSxFQUFFSCx3REFBTSxDQUFDSSxNQUF2QjtBQUErQix1QkFBTyxFQUFFK0MsVUFBeEM7QUFBb0QseUJBQVMsRUFBRVgsNkRBQU8sQ0FBQ1UsZ0JBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF4Qko7QUFBQSxhQUFTLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMUjtBQW1DSSxzQkFBWSxFQUFFO0FBQUEsZ0JBQUM7QUFBRUUsb0JBQUY7QUFBVS9CO0FBQVYsYUFBRDtBQUFBLGdCQUFtQmdDLFdBQW5COztBQUFBLGdDQUNWO0FBQUEsd0JBQ0t2TCxLQUFLLENBQUM4SyxNQUFOLGlCQUNHLHFFQUFDLDhEQUFEO0FBQVUsdUJBQU8sZUFBRTtBQUFBLHdDQUFjOUssS0FBSyxDQUFDNEssV0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFuQjtBQUE0RCx5QkFBUyxFQUFDLE9BQXRFO0FBQThFLHNCQUFNLEVBQUMsU0FBckY7QUFBK0YseUJBQVMsRUFBRSxJQUExRztBQUFBLHVDQUNJLHFFQUFDLHdEQUFEO0FBQVEsc0JBQUksRUFBQyxTQUFiO0FBQXVCLHlCQUFPLEVBQUUsSUFBaEM7QUFBc0MsdUJBQUssRUFBRTtBQUE3QyxtQkFBdURXLFdBQXZEO0FBQW9FLDRCQUFVLEVBQUVoQyxHQUFoRjtBQUFxRix3QkFBTSxFQUFDLFNBQTVGO0FBQXNHLHNCQUFJLEVBQUM7QUFBM0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURVO0FBQUE7QUFuQ2xCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJKLGVBc0VJLHFFQUFDLE1BQUQ7QUFBUSxjQUFNLEVBQUV2SixLQUFLLENBQUN3TDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBMkVILEdBN0VEOztBQStFQSxRQUFNQyxPQUFPLEdBQUl6TCxLQUFELElBQVc7QUFDdkIsVUFBTWdLLFNBQVMsR0FBSSx3QkFBdUJoSyxLQUFLLENBQUM2SixNQUFPLEVBQXZEO0FBQ0Esd0JBQ0k7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxFQUFmO0FBQWtCLGFBQUssRUFBRTtBQUFFSSxlQUFLLEVBQUUsR0FBVDtBQUFjckcseUJBQWUsRUFBRSxhQUEvQjtBQUE4Q3FFLG1CQUFTLEVBQUU7QUFBekQsU0FBekI7QUFBQSwrQkFDSSxxRUFBQyw4REFBRDtBQUFVLGlCQUFPLGVBQUU7QUFBQSxrQ0FBY2pJLEtBQUssQ0FBQzZILEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBbkI7QUFBc0QsbUJBQVMsRUFBQyxNQUFoRTtBQUF1RSxnQkFBTSxFQUFDLFNBQTlFO0FBQXdGLG1CQUFTLEVBQUUsSUFBbkc7QUFBQSxpQ0FDSTtBQUFNLHFCQUFTLEVBQUVMLHlEQUFNLENBQUNJLFNBQXhCO0FBQUEsc0JBQW9DNUgsS0FBSyxDQUFDNkg7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFNSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFxQixhQUFLLEVBQUU7QUFBRVEscUJBQVcsRUFBRTtBQUFmLFNBQTVCO0FBQUEsK0JBQ0kscUVBQUMsa0VBQUQ7QUFBZ0IsOEJBQW9CLEVBQUVhLGtCQUF0QztBQUEwRCxrQkFBUSxFQUFFcEk7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQVNJLHFFQUFDLE1BQUQ7QUFBUSxjQUFNLEVBQUVkLEtBQUssQ0FBQ3dMO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQWFILEdBZkQ7O0FBaUJBLFFBQU1FLE1BQU0sR0FBSTFMLEtBQUQsSUFBVztBQUN0QixVQUFNZ0ssU0FBUyxHQUFJLHdCQUF1QmhLLEtBQUssQ0FBQzZKLE1BQU8sRUFBdkQ7QUFDQSx3QkFDSTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLEVBQWY7QUFBa0IsYUFBSyxFQUFFO0FBQUVJLGVBQUssRUFBRSxHQUFUO0FBQWNyRyx5QkFBZSxFQUFFLGFBQS9CO0FBQThDcUUsbUJBQVMsRUFBRTtBQUF6RCxTQUF6QjtBQUFBLCtCQUNJO0FBQU0sbUJBQVMsRUFBRVQseURBQU0sQ0FBQ0ksU0FBeEI7QUFBQSxvQkFBb0M1SCxLQUFLLENBQUM2SDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDSTtBQUFNLG1CQUFTLEVBQUVMLHlEQUFNLENBQUNNLFFBQXhCO0FBQUEsb0JBQW1DOUgsS0FBSyxDQUFDd0U7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQU9JLHFFQUFDLE1BQUQ7QUFBUSxjQUFNLEVBQUV4RSxLQUFLLENBQUN3TDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFXSCxHQWJEOztBQWVBLFFBQU1wQixZQUFZLEdBQUk5RyxDQUFELElBQU87QUFDeEI7QUFDQSxRQUFJQSxDQUFDLENBQUNvRixNQUFGLENBQVNHLE9BQVQsQ0FBaUIwQixRQUFqQixJQUE2QixTQUFqQyxFQUE0QztBQUN4QyxVQUFJb0IsT0FBTyxHQUFHLEtBQWQ7QUFDQUMsWUFBTSxDQUFDQyxJQUFQLENBQVlDLGVBQWUsQ0FBQyxDQUFELENBQTNCLEVBQWdDL0gsR0FBaEMsQ0FBb0MsVUFBU3pGLEdBQVQsRUFBYzJGLEtBQWQsRUFBcUI7QUFDckQsWUFBSTZILGVBQWUsQ0FBQzdILEtBQUQsQ0FBbkIsRUFBNEI7QUFDeEIsY0FBSVgsQ0FBQyxDQUFDb0YsTUFBRixDQUFTQyxLQUFULElBQWtCbUQsZUFBZSxDQUFDN0gsS0FBRCxDQUFmLENBQXVCOEgsSUFBN0MsRUFBbUQ7QUFDL0NDLHNCQUFVLENBQUNGLGVBQWUsQ0FBQzdILEtBQUQsQ0FBZixDQUF1QjhILElBQXhCLENBQVY7QUFDQUUsc0JBQVUsQ0FBQ0gsZUFBZSxDQUFDN0gsS0FBRCxDQUFmLENBQXVCaUksV0FBeEIsQ0FBVjtBQUNBUCxtQkFBTyxHQUFHLElBQVY7QUFDSDtBQUNKO0FBQ0osT0FSRDs7QUFTQSxVQUFJQSxPQUFPLElBQUksS0FBWCxJQUFvQnJJLENBQUMsQ0FBQ29GLE1BQUYsQ0FBU0MsS0FBVCxJQUFrQixFQUExQyxFQUE4QztBQUMxQ3dELGFBQUssQ0FBQyx5QkFBRCxDQUFMO0FBQ0FILGtCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FDLGtCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0EzSSxTQUFDLENBQUNvRixNQUFGLENBQVNDLEtBQVQsR0FBaUIsRUFBakI7QUFDSDtBQUNKO0FBQ0osR0FwQkQ7O0FBc0JBLFFBQU15RCxRQUFRLEdBQUk5SSxDQUFELElBQU87QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRixHQURvQixDQUVwQjtBQUNILEdBSEQ7O0FBS0EsUUFBTThJLGtCQUFrQixHQUFJL0ksQ0FBRCxJQUFPO0FBQzlCQSxLQUFDLENBQUNDLGNBQUYsR0FEOEIsQ0FFOUI7QUFDSCxHQUhEOztBQVNBLFFBQU0rSSxVQUF5QixHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQXpDOztBQU1BLFFBQU1ULGVBQW9DLEdBQUdTLG1CQUFPLENBQUMsNERBQUQsQ0FBcEQ7O0FBRUEsUUFBTTtBQUFBLE9BQUN4RSxRQUFEO0FBQUEsT0FBV3lFO0FBQVgsTUFBMEJqTSxzREFBUSxFQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDd0ssUUFBRDtBQUFBLE9BQVd0QztBQUFYLE1BQTBCbEksc0RBQVEsRUFBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2tNLFlBQUQ7QUFBQSxPQUFlN0Q7QUFBZixNQUFrQ3JJLHNEQUFRLEVBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNtTSxRQUFEO0FBQUEsT0FBVzVEO0FBQVgsTUFBMEJ2SSxzREFBUSxDQUFhLElBQWIsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3lLLFVBQUQ7QUFBQSxPQUFhL0I7QUFBYixNQUE4QjFJLHNEQUFRLEVBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLFFBQUQ7QUFBQSxPQUFXc0k7QUFBWCxNQUEwQjdJLHNEQUFRLEVBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNvTSxZQUFEO0FBQUEsT0FBZXhEO0FBQWYsTUFBa0M1SSxzREFBUSxDQUFhLElBQWIsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQytLLE1BQUQ7QUFBQSxPQUFTc0I7QUFBVCxNQUFzQnJNLHNEQUFRLENBQUMsS0FBRCxDQUFwQztBQUVBLFFBQU07QUFBQSxPQUFDc00sT0FBRDtBQUFBLE9BQVViO0FBQVYsTUFBd0J6TCxzREFBUSxDQUFhLElBQWIsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3VNLE9BQUQ7QUFBQSxPQUFVYjtBQUFWLE1BQXdCMUwsc0RBQVEsQ0FBYSxJQUFiLENBQXRDOztBQUVBLFFBQU13TSxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLFFBQUlDLGNBQW9DLEdBQUcsRUFBM0M7QUFDQSxRQUFJakYsUUFBSixFQUFjaUYsY0FBYyxHQUFHLENBQUNDLHFFQUFrQixDQUFDQyxLQUFwQixFQUEyQkQscUVBQWtCLENBQUNFLGNBQTlDLEVBQThERixxRUFBa0IsQ0FBQ0csV0FBakYsQ0FBakI7QUFDZCxXQUFPSixjQUFQO0FBQ0gsR0FKRDs7QUFNQSxRQUFNSyxnQkFBZ0IsR0FBSUMsVUFBRCxJQUF3QjtBQUM3QyxXQUFPQSxVQUFVLENBQUNuSCxPQUFYLENBQW1CLFVBQW5CLEVBQStCLEtBQS9CLEVBQXNDQSxPQUF0QyxDQUE4QyxJQUE5QyxFQUFvRG9ILGNBQWMsSUFBSUEsY0FBYyxDQUFDQyxXQUFmLEVBQXRFLENBQVA7QUFDSCxHQUZEOztBQUlBLFFBQU1DLFVBQVUsR0FBRyxDQUFDQyxRQUFELEVBQW1CQyxXQUFuQixLQUEyQztBQUMxRCxVQUFNQyxVQUFVLEdBQUd0QixVQUFVLENBQUNvQixRQUFELENBQTdCO0FBQ0Esd0JBQU8scUVBQUMsdURBQUQ7QUFBQSxnQkFBT0UsVUFBVSxDQUFDaEMsTUFBTSxDQUFDQyxJQUFQLENBQVkrQixVQUFaLEVBQXdCRCxXQUF4QixDQUFEO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNILEdBSEQ7O0FBS0EsUUFBTUUsUUFBUSxHQUFJN04sS0FBRCxJQUFXO0FBQ3hCLFVBQU04TixPQUFPLEdBQUdsQyxNQUFNLENBQUNDLElBQVAsQ0FBWVMsVUFBVSxDQUFDLENBQUQsQ0FBdEIsRUFBMkJ2SSxHQUEzQixDQUErQixDQUFDdUosVUFBRCxFQUFhckosS0FBYixrQkFDM0MscUVBQUMseURBQUQ7QUFBb0IsVUFBSSxFQUFFb0osZ0JBQWdCLENBQUNDLFVBQUQsQ0FBMUM7QUFBd0Qsa0JBQVksRUFBRUc7QUFBdEUsT0FBYXhKLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURZLENBQWhCOztBQUlBLFVBQU04SixZQUFZLEdBQUlMLFFBQUQsSUFBc0I7QUFDdkMsMEJBQU8scUVBQUMsdURBQUQ7QUFBQSxrQkFBUSxJQUFHLENBQUNBLFFBQVEsR0FBRyxFQUFaLEVBQWdCTSxPQUFoQixDQUF3QixDQUF4QixDQUEyQjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDSCxLQUZEOztBQUlBLHdCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFxQixhQUFLLEVBQUU7QUFBRS9ELGVBQUssRUFBRTtBQUFULFNBQTVCO0FBQUEsK0JBQ0kscUVBQUMsd0RBQUQ7QUFBTyxtQkFBUyxFQUFDLE9BQWpCO0FBQXlCLGlCQUFPLEVBQUVxQyxVQUFVLENBQUM5RyxNQUE3QztBQUFxRCx3QkFBYyxFQUFFdUgsaUJBQWlCLEVBQXRGO0FBQTBGLHdCQUFjLEVBQUVrQixpRUFBYyxDQUFDQyxHQUF6SDtBQUFBLG9CQUNLSjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBY0gsR0F2QkQ7O0FBeUJBLFFBQU1LLGFBQWEsR0FBRztBQUNsQkMsYUFBUyxFQUFFLElBRE87QUFFbEJDLHFCQUFpQixFQUFFLElBRkQ7QUFHbEJDLHdCQUFvQixFQUFFLElBSEo7QUFJbEJDLGdCQUFZLEVBQUUsSUFKSTtBQUtsQkMsYUFBUyxFQUFFO0FBTE8sR0FBdEI7O0FBUUEsUUFBTW5ELFVBQVUsR0FBRyxNQUFNdUIsU0FBUyxDQUFDLElBQUQsQ0FBbEM7O0FBQ0EsUUFBTTZCLFdBQVcsR0FBRyxNQUFNN0IsU0FBUyxDQUFDLEtBQUQsQ0FBbkM7O0FBRUEsUUFBTThCLGVBQWlDLEdBQUc7QUFDdEM7QUFDQUMsY0FBVSxFQUFFQyxJQUFJLElBQUlBLElBQUksQ0FBQ0Msa0JBQUwsRUFGa0I7QUFHdENDLGFBQVMsRUFBRUMsR0FBRyxJQUFJLElBQUlDLElBQUosQ0FBU0QsR0FBVCxDQUhvQjtBQUl0QzFFLGVBQVcsRUFBRTtBQUp5QixHQUExQzs7QUFPQSxRQUFNNEUsU0FBUyxHQUFJalAsS0FBRCxJQUFXO0FBQ3pCLFVBQU1nSyxTQUFTLEdBQUksd0JBQXVCaEssS0FBSyxDQUFDNkosTUFBTyxFQUF2RDtBQUNBLHdCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsRUFBZjtBQUFrQixhQUFLLEVBQUU7QUFBRUksZUFBSyxFQUFFLEdBQVQ7QUFBY3JHLHlCQUFlLEVBQUUsYUFBL0I7QUFBOENxRSxtQkFBUyxFQUFFO0FBQXpELFNBQXpCO0FBQUEsK0JBQ0kscUVBQUMsOERBQUQ7QUFBVSxpQkFBTyxlQUFFO0FBQUEsa0NBQWNqSSxLQUFLLENBQUM2SCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQW5CO0FBQXNELG1CQUFTLEVBQUMsTUFBaEU7QUFBdUUsZ0JBQU0sRUFBQyxTQUE5RTtBQUF3RixtQkFBUyxFQUFFLElBQW5HO0FBQUEsaUNBQ0k7QUFBTSxxQkFBUyxFQUFFTCx5REFBTSxDQUFDSSxTQUF4QjtBQUFBLHNCQUFvQzVILEtBQUssQ0FBQzZIO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUk7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsMkJBQWY7QUFBMkMsZUFBSyxFQUFFO0FBQUVxQyx1QkFBVyxFQUFFO0FBQWYsV0FBbEQ7QUFBQSxxQkFDS2xLLEtBQUssQ0FBQ21LLFFBQU4saUJBQ0cscUVBQUMsc0RBQUQ7QUFBTSxnQkFBSSxFQUFFbkssS0FBSyxDQUFDbUssUUFBbEI7QUFBNEIsb0JBQVEsRUFBRSxFQUF0QztBQUEwQyxxQkFBUyxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRlIsZUFJSSxxRUFBQywrREFBRCxrQ0FBZXVFLGVBQWY7QUFBZ0Msd0JBQVksRUFBRSxJQUFJTSxJQUFKO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosRUFLS2hQLEtBQUssQ0FBQ3dLLFNBQU4saUJBQ0cscUVBQUMsc0RBQUQ7QUFBTSxnQkFBSSxFQUFFeEssS0FBSyxDQUFDd0ssU0FBbEI7QUFBNkIsb0JBQVEsRUFBRSxFQUF2QztBQUEyQyxxQkFBUyxFQUFDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTlIsRUFRS3hLLEtBQUssQ0FBQ3lLLFFBQU4saUJBQ0c7QUFBTSxxQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBcUJJLHFFQUFDLE1BQUQ7QUFBUSxjQUFNLEVBQUV6SyxLQUFLLENBQUN3TDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBMEJILEdBNUJEOztBQThCQSxRQUFNMEQsYUFBYSxHQUFJbFAsS0FBRCxJQUFXO0FBQzdCLFVBQU1nSyxTQUFTLEdBQUksd0JBQXVCaEssS0FBSyxDQUFDNkosTUFBTyxFQUF2RDtBQUNBLHdCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsRUFBZjtBQUFrQixhQUFLLEVBQUU7QUFBRUksZUFBSyxFQUFFLEdBQVQ7QUFBY3JHLHlCQUFlLEVBQUUsYUFBL0I7QUFBOENxRSxtQkFBUyxFQUFFO0FBQXpELFNBQXpCO0FBQUEsK0JBQ0kscUVBQUMsOERBQUQ7QUFBVSxpQkFBTyxlQUFFO0FBQUEsa0NBQWNqSSxLQUFLLENBQUM2SCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQW5CO0FBQXNELG1CQUFTLEVBQUMsTUFBaEU7QUFBdUUsZ0JBQU0sRUFBQyxTQUE5RTtBQUF3RixtQkFBUyxFQUFFLElBQW5HO0FBQUEsaUNBQ0k7QUFBTSxxQkFBUyxFQUFFTCx5REFBTSxDQUFDSSxTQUF4QjtBQUFBLHNCQUFvQzVILEtBQUssQ0FBQzZIO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUk7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUEyQixlQUFLLEVBQUU7QUFBRXFDLHVCQUFXLEVBQUU7QUFBZixXQUFsQztBQUFBLGlDQUNJO0FBQVUsZ0JBQUksRUFBRSxFQUFoQjtBQUFvQixxQkFBUyxFQUFDLHFCQUE5QjtBQUFvRCxlQUFHLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFZSSxxRUFBQyxNQUFEO0FBQVEsY0FBTSxFQUFFbEssS0FBSyxDQUFDd0w7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBaUJILEdBbkJEOztBQXFCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyw2REFBZjtBQUE2RSxTQUFLLEVBQUU7QUFBRTVILHFCQUFlLEVBQUU7QUFBbkIsS0FBcEY7QUFBQSw0QkFDSSxxRUFBQyxzREFBRDtBQUFNLGlCQUFXLEVBQUUsS0FBbkI7QUFBMEIsZUFBUyxFQUFFdUwsMkRBQVMsQ0FBQ0MsSUFBL0M7QUFBcUQsZUFBUyxFQUFDLHNCQUEvRDtBQUFzRixXQUFLLEVBQUU7QUFBRUMsbUJBQVcsRUFBRSxDQUFDLEVBQWhCO0FBQW9CeEUscUJBQWEsRUFBRSxFQUFuQztBQUF1Q3lFLG1CQUFXLEVBQUUsQ0FBcEQ7QUFBdURwRixtQkFBVyxFQUFFLE9BQXBFO0FBQTZFcUYsb0JBQVksRUFBRSxFQUEzRjtBQUErRjNMLHVCQUFlLEVBQUU7QUFBaEgsT0FBN0Y7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQywrQkFBZjtBQUErQyxlQUFLLEVBQUU7QUFBRUEsMkJBQWUsRUFBRTtBQUFuQixXQUF0RDtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsbUNBQXFCO0FBQU0sdUJBQVMsRUFBRTRELHlEQUFNLENBQUN2SCxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBSUkscUVBQUMsYUFBRDtBQUFlLGlCQUFLLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJLHFFQUFDLE1BQUQ7QUFBUSxpQkFBSyxFQUFDLE9BQWQ7QUFBc0IsZ0JBQUksRUFBRUQsS0FBSyxDQUFDTDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLGVBT0k7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsS0FBZjtBQUFBLHNDQUNJO0FBQUsseUJBQVMsRUFBQyxLQUFmO0FBQUEsd0NBQ0k7QUFBSywyQkFBUyxFQUFDLFVBQWY7QUFBQSx5Q0FDSSxxRUFBQyxLQUFEO0FBQU8seUJBQUssRUFBQyxlQUFiO0FBQTZCLCtCQUFXLEVBQUMsRUFBekM7QUFBNEMsMEJBQU0sRUFBRSxFQUFwRDtBQUF3RCwwQkFBTSxFQUFDLEVBQS9EO0FBQWtFLDRCQUFRO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBSUk7QUFBSywyQkFBUyxFQUFDLFVBQWY7QUFBQSx5Q0FDSSxxRUFBQyxLQUFEO0FBQU8seUJBQUssRUFBQyxjQUFiO0FBQTRCLCtCQUFXLEVBQUMsRUFBeEM7QUFBMkMsMEJBQU0sRUFBRSxFQUFuRDtBQUF1RCwwQkFBTSxFQUFDO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQVNJO0FBQUsseUJBQVMsRUFBQyxLQUFmO0FBQUEsd0NBQ0k7QUFBSywyQkFBUyxFQUFDLFVBQWY7QUFBQSx5Q0FDSSxxRUFBQyxLQUFEO0FBQU8seUJBQUssRUFBQyxlQUFiO0FBQTZCLCtCQUFXLEVBQUMsVUFBekM7QUFBb0QsK0JBQVcsRUFBQyxFQUFoRTtBQUFtRSwwQkFBTSxFQUFFLEVBQTNFO0FBQStFLDBCQUFNLEVBQUMsVUFBdEY7QUFBaUcsMEJBQU0sRUFBQyxFQUF4RztBQUEyRyxnQ0FBWSxFQUFFb0wsUUFBekg7QUFBbUksNEJBQVE7QUFBM0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFJSTtBQUFLLDJCQUFTLEVBQUMsVUFBZjtBQUFBLHlDQUNJLHFFQUFDLEtBQUQ7QUFBTyx5QkFBSyxFQUFDLFVBQWI7QUFBd0IsK0JBQVcsRUFBQyxFQUFwQztBQUF1QywwQkFBTSxFQUFFLEVBQS9DO0FBQW1ELDBCQUFNLEVBQUMsRUFBMUQ7QUFBNkQsZ0NBQVksRUFBRTJCO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFUSixlQWlCSSxxRUFBQyxLQUFEO0FBQU8scUJBQUssRUFBQyxlQUFiO0FBQTZCLDJCQUFXLEVBQUMsRUFBekM7QUFBNEMsc0JBQU0sRUFBRSxFQUFwRDtBQUF3RCxzQkFBTSxFQUFDLEVBQS9EO0FBQWtFLDRCQUFZLEVBQUVEO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBakJKLGVBa0JJLHFFQUFDLEtBQUQ7QUFBTyxxQkFBSyxFQUFDLGVBQWI7QUFBNkIsMkJBQVcsRUFBQyxZQUF6QztBQUFzRCwyQkFBVyxFQUFDLEVBQWxFO0FBQXFFLHNCQUFNLEVBQUUsRUFBN0U7QUFBaUYsc0JBQU0sRUFBQyxvQkFBeEY7QUFBNkcsc0JBQU0sRUFBQyxFQUFwSDtBQUF1SCw0QkFBWSxFQUFFekI7QUFBckk7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFsQkosZUFtQkkscUVBQUMsS0FBRDtBQUFPLHFCQUFLLEVBQUMsY0FBYjtBQUE0QiwyQkFBVyxFQUFDLEVBQXhDO0FBQTJDLHNCQUFNLEVBQUUsRUFBbkQ7QUFBdUQsc0JBQU0sRUFBQyxFQUE5RDtBQUFpRSw0QkFBWSxFQUFFNkIsT0FBL0U7QUFBd0Ysd0JBQVEsRUFBQztBQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQW5CSixlQW9CSSxxRUFBQyxLQUFEO0FBQU8scUJBQUssRUFBQyxlQUFiO0FBQTZCLDJCQUFXLEVBQUMsRUFBekM7QUFBNEMsc0JBQU0sRUFBRSxFQUFwRDtBQUF3RCxzQkFBTSxFQUFDLEVBQS9EO0FBQWtFLDRCQUFZLEVBQUVDO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBcEJKLGVBcUJJLHFFQUFDLEtBQUQ7QUFBTyxxQkFBSyxFQUFDLE1BQWI7QUFBb0IsMkJBQVcsRUFBQyxFQUFoQztBQUFtQyxzQkFBTSxFQUFFLEVBQTNDO0FBQStDLHNCQUFNLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBd0JJO0FBQUssdUJBQVMsRUFBQyxLQUFmO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBQSx3Q0FDSTtBQUFLLDJCQUFTLEVBQUMsVUFBZjtBQUFBLHlDQUNJLHFFQUFDLFNBQUQ7QUFBVyx5QkFBSyxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBSUk7QUFBSywyQkFBUyxFQUFDLFVBQWY7QUFBQSx5Q0FDSSxxRUFBQyxLQUFEO0FBQU8seUJBQUssRUFBQyxXQUFiO0FBQXlCLCtCQUFXLEVBQUMsRUFBckM7QUFBd0MsMEJBQU0sRUFBRSxFQUFoRDtBQUFvRCwwQkFBTSxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQVNJLHFFQUFDLGFBQUQ7QUFBZSxxQkFBSyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVEosZUFVSSxxRUFBQyxLQUFEO0FBQU8scUJBQUssRUFBQyxhQUFiO0FBQTJCLDJCQUFXLEVBQUMsRUFBdkM7QUFBMEMsc0JBQU0sRUFBRSxFQUFsRDtBQUFzRCxzQkFBTSxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVkosZUFXSTtBQUFLLHlCQUFTLEVBQUMsS0FBZjtBQUFBLHdDQUNJO0FBQUssMkJBQVMsRUFBQyxVQUFmO0FBQUEseUNBQ0kscUVBQUMsT0FBRDtBQUFTLHlCQUFLLEVBQUMsVUFBZjtBQUEwQiwwQkFBTSxFQUFFLENBQWxDO0FBQXFDLDBCQUFNLEVBQUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFJSTtBQUFLLDJCQUFTLEVBQUMsVUFBZjtBQUFBLHlDQUNJLHFFQUFDLEtBQUQ7QUFBTyx5QkFBSyxFQUFDLGVBQWI7QUFBNkIsK0JBQVcsRUFBQyxFQUF6QztBQUE0QywwQkFBTSxFQUFFLEVBQXBEO0FBQXdELDBCQUFNLEVBQUMsRUFBL0Q7QUFBa0UsZ0NBQVksRUFBRUg7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhKLGVBbUJJLHFFQUFDLE1BQUQ7QUFBUSxxQkFBSyxFQUFDLGNBQWQ7QUFBNkIsb0JBQUksRUFBQyxNQUFsQztBQUF5QyxzQkFBTSxFQUFFLEVBQWpEO0FBQXFELHNCQUFNLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEosZUFzREkscUVBQUMsTUFBRDtBQUFRLGtCQUFNLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF0REosZUF5REkscUVBQUMsYUFBRDtBQUFlLGlCQUFLLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6REosZUEwREkscUVBQUMsTUFBRDtBQUFRLGtCQUFNLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExREosZUEyREkscUVBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNESixlQTRESSxxRUFBQyxNQUFEO0FBQVEsa0JBQU0sRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTVESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBb0VJLHFFQUFDLHdEQUFEO0FBQ0ksVUFBSSxFQUFDLFdBRFQ7QUFFSSxZQUFNLEVBQUVyQixNQUZaO0FBR0ksYUFBTyxFQUFFbUQsV0FIYjtBQUlJLFdBQUssRUFBQyxvQkFKVjtBQUtJLGVBQVMsRUFBRTtBQUxmLE9BTVFOLGFBTlI7QUFBQSw4QkFRSTtBQUFLLGlCQUFTLEVBQUVxQix5REFBVyxDQUFDQyxXQUE1QjtBQUFBLGdDQUNJO0FBQUEsaUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEosZUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiSixlQW1CSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkosZUEwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKLGVBb0NJO0FBQUssaUJBQVMsRUFBRUQseURBQVcsQ0FBQ0UsYUFBNUI7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUVGLHlEQUFXLENBQUNHLHFCQUE1QjtBQUFBLGtDQUNJLHFFQUFDLDhEQUFEO0FBQVUsbUJBQU8sRUFBQywrQ0FBbEI7QUFBQSxtQ0FDSSxxRUFBQyx3REFBRDtBQUFRLHFCQUFPLEVBQUVsQixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSSxxRUFBQyw4REFBRDtBQUNJLGtCQUFNLEVBQUV2Ryx3REFBTSxDQUFDQyxPQURuQjtBQUVJLGdCQUFJLEVBQUMseUJBRlQ7QUFHSSxrQkFBTSxFQUFDLFFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwRUosZUF1SEkscUVBQUMseURBQUQ7QUFBUyxTQUFHLEVBQUVtQixXQUFXLENBQUNELE9BQTFCO0FBQW1DLGNBQVEsRUFBRXVHLDBEQUFRLENBQUNDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2SEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEySEgsQzs7Ozs7Ozs7Ozs7O0FDdmZEO0FBQUE7QUFBQTtBQUFPLElBQUtsTixXQUFaOztXQUFZQSxXO0FBQUFBLGEsQ0FBQUEsVztBQUFBQSxhLENBQUFBLFc7QUFBQUEsYSxDQUFBQSxXO0FBQUFBLGEsQ0FBQUEsVztHQUFBQSxXLEtBQUFBLFc7O0FBQ0wsSUFBS21OLFFBQVo7O1dBQVlBLFE7QUFBQUEsVSxDQUFBQSxRO0FBQUFBLFUsQ0FBQUEsUTtBQUFBQSxVLENBQUFBLFE7R0FBQUEsUSxLQUFBQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQ2hDLFNBQU8vTSw2Q0FBTSxDQUFDcEUsS0FBUCxDQUFhbVIsR0FBRyxHQUFHQSxHQUFHLENBQUNDLE9BQUosQ0FBWWhOLE1BQVosSUFBc0IsRUFBekIsR0FBOEJpTixRQUFRLENBQUNqTixNQUF2RCxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNKRDtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFNQTs7QUFFQSxVQUFtQztBQUNqQztBQUFFa04sUUFBRCxzQkFBQ0EsR0FBRCxJQUFDQTtBQUdKOztBQUFBLE1BQU1DLG9CQUFvQixHQUFHLGtCQUE3QixTQUE2QixDQUE3QjtBQWFBLE1BQU1DLE9BQU8sR0FBRyxRQUdkLENBQ0EsVUFEQSxXQUNBLENBREEsRUFFQSxlQUZBLGdCQUVBLENBRkEsRUFHQSxXQUhBLFlBR0EsQ0FIQSxFQUlBLFlBUEYsYUFPRSxDQUpBLENBSGMsQ0FBaEI7QUFVQSxNQUFNQyxtQkFBbUIsR0FBRyw2Q0FBNUIsU0FBNEIsQ0FBNUI7QUFzQ0EsTUFBTTtBQUNKQyxhQUFXLEVBRFA7QUFFSkMsWUFBVSxFQUZOO0FBR0pDLFFBQU0sRUFIRjtBQUlKQyxNQUFJLEVBSkE7QUFLSkMsU0FBTyxFQUxIO0FBQUEsSUFPRkMscUtBQXlEQyxhQVA3RCxtQixDQVFBOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDLEdBQUQsbUJBQXVCLEdBQXhDLGdCQUFpQixDQUFqQjtBQUNBQyxpQkFBaUIsQ0FBakJBLEtBQXVCLFVBQVVDLENBQUMsR0FBbENEO0FBQ0FELFFBQVEsQ0FBUkEsS0FBYyxVQUFVRSxDQUFDLEdBQXpCRjs7QUFFQSxrQ0FHeUM7QUFDdkMsTUFDRSw2QkFDQUcsTUFBTSxLQUROLFVBRUFBLE1BQU0sS0FIUixjQUlFO0FBQ0EsV0FBTztBQUFFQyxZQUFNLEVBQVI7QUFBNkJDLFVBQUksRUFBeEM7QUFBTyxLQUFQO0FBR0Y7O0FBQUEsUUFBTUQsTUFBTSxHQUFHLENBQ2IsR0FBRyxTQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFRakgsS0FBSyxHQUFHO0FBQWhCO0FBQUEsUUFDR21ILENBQUQsSUFBT04sUUFBUSxDQUFSQSxLQUFlTyxDQUFELElBQU9BLENBQUMsSUFBdEJQLE1BQWdDQSxRQUFRLENBQUNBLFFBQVEsQ0FBUkEsU0FYdEQsQ0FXcUQsQ0FEakQsQ0FUQyxDQURVLENBQWY7QUFlQSxTQUFPO0FBQUE7QUFBVUssUUFBSSxFQUFyQjtBQUFPLEdBQVA7QUFtQkY7O0FBQUEsMEJBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFCO0FBQTBCLENBQTFCLEVBUXVDO0FBQ3JDLG1CQUFpQjtBQUNmLFdBQU87QUFBQTtBQUFPRyxZQUFNLEVBQWI7QUFBMEJDLFdBQUssRUFBdEM7QUFBTyxLQUFQO0FBR0Y7O0FBQUEsUUFBTTtBQUFBO0FBQUE7QUFBQSxNQUFtQkMsU0FBUyxRQUFsQyxNQUFrQyxDQUFsQztBQUNBLFFBQU1DLElBQUksR0FBR1AsTUFBTSxDQUFOQSxTQUFiO0FBRUEsU0FBTztBQUNMUSxPQUFHLEVBQUVqQixNQUFNLENBQUM7QUFBQTtBQUFBO0FBQWdCeEcsV0FBSyxFQUFFaUgsTUFBTSxDQURwQyxJQUNvQztBQUE3QixLQUFELENBRE47QUFFTEssU0FBSyxFQUFFLFVBQVVKLElBQUksS0FBZCxnQkFGRjtBQUdMRyxVQUFNLEVBQUVKLE1BQU0sQ0FBTkEsSUFFSixVQUNHLEdBQUVULE1BQU0sQ0FBQztBQUFBO0FBQUE7QUFBZ0J4RyxXQUFLLEVBQXRCO0FBQUMsS0FBRCxDQUE2QixJQUNwQ2tILElBQUksS0FBSkEsVUFBbUJRLENBQUMsR0FBRyxDQUN4QixHQUFFUixJQUxERCxTQUhWLElBR1VBO0FBSEgsR0FBUDtBQWNGOztBQUFBLG1CQUFnRDtBQUM5QyxNQUFJLGFBQUosVUFBMkI7QUFDekI7QUFFRjs7QUFBQSxNQUFJLGFBQUosVUFBMkI7QUFDekIsV0FBT1UsUUFBUSxJQUFmLEVBQWUsQ0FBZjtBQUVGOztBQUFBO0FBR0Y7O0FBQUEseUNBQTJEO0FBQ3pELFFBQU1DLElBQUksR0FBR3hCLE9BQU8sQ0FBUEEsSUFBYixZQUFhQSxDQUFiOztBQUNBLFlBQVU7QUFDUixXQUFPd0IsSUFBSTtBQUFHQyxVQUFJLEVBQVA7QUFBQSxPQUFYLFdBQVcsRUFBWDtBQUVGOztBQUFBLFFBQU0sVUFDSCx5REFBd0RDLHFDQUV2RCxlQUFjQyxZQUhsQixFQUFNLENBQU47QUFPYTs7QUFBQSxxQkFjQTtBQUFBLE1BZGU7QUFBQTtBQUFBO0FBRzVCQyxlQUFXLEdBSGlCO0FBSTVCQyxZQUFRLEdBSm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZNUJ6QixVQUFNLEdBWnNCO0FBQUEsTUFjZjtBQUFBLE1BRFYwQixHQUNVO0FBQ2IsTUFBSWpNLElBQXlCLEdBQTdCO0FBQ0EsTUFBSStLLE1BQWdDLEdBQUdNLEtBQUssa0JBQTVDO0FBQ0EsTUFBSWEsT0FBTyxHQUFYOztBQUNBLE1BQUksYUFBSixNQUF1QjtBQUNyQkEsV0FBTyxHQUFHQyxPQUFPLENBQUNuTSxJQUFJLENBQXRCa00sT0FBaUIsQ0FBakJBLENBRHFCLENBRXJCOztBQUNBLFdBQU9sTSxJQUFJLENBQVgsU0FBVyxDQUFYO0FBSEYsU0FJTyxJQUFJLFlBQUosTUFBc0I7QUFDM0I7QUFDQSxRQUFJQSxJQUFJLENBQVIsUUFBaUIrSyxNQUFNLEdBQUcvSyxJQUFJLENBQWIrSyxPQUZVLENBSTNCOztBQUNBLFdBQU8vSyxJQUFJLENBQVgsUUFBVyxDQUFYO0FBR0Y7O0FBQUEsWUFBMkM7QUFDekMsUUFBSSxDQUFKLEtBQVU7QUFDUixZQUFNLFVBQ0gsMEhBQXlIdEgsSUFBSSxDQUFKQSxVQUN4SDtBQUFBO0FBQUE7QUFEd0hBO0FBQ3hILE9BRHdIQSxDQUQ1SCxFQUFNLENBQU47QUFNRjs7QUFBQSxRQUFJLENBQUMwUixtQkFBbUIsQ0FBbkJBLFNBQUwsTUFBS0EsQ0FBTCxFQUEyQztBQUN6QyxZQUFNLFVBQ0gsbUJBQWtCb0IsR0FBSSw4Q0FBNkNULE1BQU8sc0JBQXFCWCxtQkFBbUIsQ0FBbkJBLHFCQURsRyxHQUFNLENBQU47QUFNRjs7QUFBQSxRQUFJLENBQUNGLG9CQUFvQixDQUFwQkEsU0FBTCxPQUFLQSxDQUFMLEVBQTZDO0FBQzNDLFlBQU0sVUFDSCxtQkFBa0JzQixHQUFJLCtDQUE4Q1ksT0FBUSxzQkFBcUJsQyxvQkFBb0IsQ0FBcEJBLHFCQURwRyxHQUFNLENBQU47QUFNRjs7QUFBQSxRQUFJOEIsUUFBUSxJQUFJSSxPQUFPLEtBQXZCLFFBQW9DO0FBQ2xDLFlBQU0sVUFDSCxtQkFBa0JaLEdBRHJCLGlGQUFNLENBQU47QUFJRjs7QUFBQSxpQkFBYTtBQUNYLFlBQU0sVUFDSCxtQkFBa0JBLEdBRHJCLGlHQUFNLENBQU47QUFJSDtBQUVEOztBQUFBLE1BQUlhLE1BQU0sR0FDUixjQUFjRCxPQUFPLEtBQVBBLFVBQXNCLG1CQUR0QyxXQUNFLENBREY7O0FBRUEsTUFBSVosR0FBRyxJQUFJQSxHQUFHLENBQUhBLFdBQVgsT0FBV0EsQ0FBWCxFQUFvQztBQUNsQztBQUNBTyxlQUFXLEdBQVhBO0FBQ0FNLFVBQU0sR0FBTkE7QUFHRjs7QUFBQSxRQUFNLDBCQUEwQixzQ0FBa0M7QUFDaEVDLGNBQVUsRUFEc0Q7QUFFaEU1UixZQUFRLEVBQUUsQ0FGWjtBQUFrRSxHQUFsQyxDQUFoQztBQUlBLFFBQU02UixTQUFTLEdBQUcsV0FBbEI7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBdkIsS0FBdUIsQ0FBdkI7QUFDQSxRQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBeEIsTUFBd0IsQ0FBeEI7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLE1BQU0sQ0FBekIsT0FBeUIsQ0FBekI7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFJRyxRQUFxQyxHQUFHO0FBQzFDQyxjQUFVLEVBQUVOLFNBQVMsZUFEcUI7QUFHMUNPLFlBQVEsRUFIa0M7QUFJMUNDLE9BQUcsRUFKdUM7QUFLMUNDLFFBQUksRUFMc0M7QUFNMUNDLFVBQU0sRUFOb0M7QUFPMUNDLFNBQUssRUFQcUM7QUFTMUNDLGFBQVMsRUFUaUM7QUFVMUNDLFdBQU8sRUFWbUM7QUFXMUNDLFVBQU0sRUFYb0M7QUFZMUNDLFVBQU0sRUFab0M7QUFjMUN2SSxXQUFPLEVBZG1DO0FBZTFDaEIsU0FBSyxFQWZxQztBQWdCMUMzQyxVQUFNLEVBaEJvQztBQWlCMUNtTSxZQUFRLEVBakJrQztBQWtCMUNDLFlBQVEsRUFsQmtDO0FBbUIxQ0MsYUFBUyxFQW5CaUM7QUFvQjFDQyxhQUFTLEVBcEJpQztBQUFBO0FBQTVDO0FBQTRDLEdBQTVDOztBQXlCQSxNQUNFLG1DQUNBLHFCQURBLGVBRUEzQyxNQUFNLEtBSFIsUUFJRTtBQUNBO0FBQ0EsVUFBTTRDLFFBQVEsR0FBR2pCLFNBQVMsR0FBMUI7QUFDQSxVQUFNa0IsVUFBVSxHQUFHQyxLQUFLLENBQUxBLFFBQUssQ0FBTEEsWUFBNEIsR0FBRUYsUUFBUSxHQUFHLEdBQTVEOztBQUNBLFFBQUk1QyxNQUFNLEtBQVYsY0FBNkI7QUFDM0I7QUFDQStDLGtCQUFZLEdBQUc7QUFDYi9JLGVBQU8sRUFETTtBQUViZ0osZ0JBQVEsRUFGSztBQUdiakIsZ0JBQVEsRUFISztBQUtiSyxpQkFBUyxFQUxJO0FBTWJHLGNBQU0sRUFOUlE7QUFBZSxPQUFmQTtBQVFBRSxnQkFBVSxHQUFHO0FBQUVqSixlQUFPLEVBQVQ7QUFBb0JvSSxpQkFBUyxFQUE3QjtBQUFiYTtBQUFhLE9BQWJBO0FBVkYsV0FXTyxJQUFJakQsTUFBTSxLQUFWLGFBQTRCO0FBQ2pDO0FBQ0ErQyxrQkFBWSxHQUFHO0FBQ2IvSSxlQUFPLEVBRE07QUFFYnlJLGdCQUFRLEVBRks7QUFHYk8sZ0JBQVEsRUFISztBQUliakIsZ0JBQVEsRUFKSztBQUtiSyxpQkFBUyxFQUxJO0FBTWJHLGNBQU0sRUFOUlE7QUFBZSxPQUFmQTtBQVFBRSxnQkFBVSxHQUFHO0FBQ1hiLGlCQUFTLEVBREU7QUFFWHBJLGVBQU8sRUFGSTtBQUdYeUksZ0JBQVEsRUFIVlE7QUFBYSxPQUFiQTtBQUtBQyxjQUFRLEdBQUksZUFBY3pCLFFBQVMsYUFBWUUsU0FBL0N1QjtBQWZLLFdBZ0JBLElBQUlsRCxNQUFNLEtBQVYsU0FBd0I7QUFDN0I7QUFDQStDLGtCQUFZLEdBQUc7QUFDYkMsZ0JBQVEsRUFESztBQUViWixpQkFBUyxFQUZJO0FBR2JwSSxlQUFPLEVBSE07QUFJYitILGdCQUFRLEVBSks7QUFLYi9JLGFBQUssRUFMUTtBQU1iM0MsY0FBTSxFQU5SME07QUFBZSxPQUFmQTtBQVNIO0FBOUNELFNBOENPLElBQ0wsbUNBQ0EscUJBREEsZUFFQS9DLE1BQU0sS0FIRCxRQUlMO0FBQ0E7QUFDQStDLGdCQUFZLEdBQUc7QUFDYi9JLGFBQU8sRUFETTtBQUViZ0osY0FBUSxFQUZLO0FBSWJqQixjQUFRLEVBSks7QUFLYkMsU0FBRyxFQUxVO0FBTWJDLFVBQUksRUFOUztBQU9iQyxZQUFNLEVBUE87QUFRYkMsV0FBSyxFQVJRO0FBVWJDLGVBQVMsRUFWSTtBQVdiRyxZQUFNLEVBWFJRO0FBQWUsS0FBZkE7QUFOSyxTQW1CQTtBQUNMO0FBQ0EsY0FBMkM7QUFDekMsWUFBTSxVQUNILG1CQUFrQnRDLEdBRHJCLHlFQUFNLENBQU47QUFJSDtBQUVEOztBQUFBLE1BQUkwQyxhQUFnQyxHQUFHO0FBQ3JDMUMsT0FBRyxFQURrQztBQUdyQ0osVUFBTSxFQUgrQjtBQUlyQ0MsU0FBSyxFQUpQO0FBQXVDLEdBQXZDOztBQU9BLGlCQUFlO0FBQ2I2QyxpQkFBYSxHQUFHQyxnQkFBZ0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUkvQnBLLFdBQUssRUFKMEI7QUFLL0JxSyxhQUFPLEVBTHdCO0FBQUE7QUFBakNGO0FBQWlDLEtBQUQsQ0FBaENBO0FBV0Y7O0FBQUEsZUFBYTtBQUNYSixnQkFBWSxHQUFaQTtBQUNBRSxjQUFVLEdBQVZBO0FBQ0FwQixZQUFRLEdBQVJBO0FBRUY7O0FBQUEsc0JBQ0U7QUFBSyxTQUFLLEVBQVY7QUFBQSxLQUNHb0IsVUFBVSxnQkFDVDtBQUFLLFNBQUssRUFBVjtBQUFBLEtBQ0dDLFFBQVEsZ0JBQ1A7QUFDRSxTQUFLLEVBQUU7QUFDTFQsY0FBUSxFQURIO0FBRUx6SSxhQUFPLEVBRkY7QUFHTHVJLFlBQU0sRUFIRDtBQUlMRCxZQUFNLEVBSkQ7QUFLTEQsYUFBTyxFQU5YO0FBQ1MsS0FEVDtBQVFFLE9BQUcsRUFSTDtBQVNFLG1CQVRGO0FBVUUsUUFBSSxFQVZOO0FBV0UsT0FBRyxFQUFHLDZCQUE0QiwrQkFaN0I7QUFDUCxJQURPLEdBRkYsSUFDVCxDQURTLEdBRGIsbUJBb0JFO0FBR0UsWUFBUSxFQUhWO0FBSUUsYUFBUyxFQUpYO0FBS0UsT0FBRyxFQUxMO0FBTUUsU0FBSyxFQTFCVDtBQW9CRSxLQXBCRixFQTRCR3BCLFFBQVE7QUFBQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBQyxNQUFELDRCQUNFO0FBQ0UsT0FBRyxFQUNELFlBQ0FrQyxhQUFhLENBRGIsTUFFQUEsYUFBYSxDQUZiLFNBR0FBLGFBQWEsQ0FMakI7QUFPRSxPQUFHLEVBUEw7QUFRRSxNQUFFLEVBUko7QUFTRSxRQUFJLEVBQUVBLGFBQWEsQ0FBYkEscUJBQW1DQSxhQUFhLENBQUMxQyxHQVR6RCxDQVVFO0FBVkY7QUFXRSxlQUFXLEVBQUUwQyxhQUFhLENBQUM5QyxNQVg3QixDQVlFO0FBWkY7QUFhRSxjQUFVLEVBQUU4QyxhQUFhLENBcEJ0QjtBQU9MLElBREYsQ0FOTyxHQTdCYixJQUNFLENBREY7QUF5REYsQyxDQUFBOzs7QUFFQSwyQkFBMkM7QUFDekMsU0FBTzFDLEdBQUcsQ0FBSEEsQ0FBRyxDQUFIQSxXQUFpQkEsR0FBRyxDQUFIQSxNQUFqQkEsQ0FBaUJBLENBQWpCQSxHQUFQO0FBR0Y7O0FBQUEscUJBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQXFCLENBQXJCLEVBS29DO0FBQ2xDO0FBQ0EsUUFBTTZDLE1BQU0sR0FBRywyQkFBMkIsT0FBMUMsS0FBZSxDQUFmO0FBQ0EsTUFBSUMsWUFBWSxHQUFoQjs7QUFDQSxlQUFhO0FBQ1hELFVBQU0sQ0FBTkEsS0FBWSxPQUFaQTtBQUdGOztBQUFBLE1BQUlBLE1BQU0sQ0FBVixRQUFtQjtBQUNqQkMsZ0JBQVksR0FBRyxNQUFNRCxNQUFNLENBQU5BLEtBQXJCQyxHQUFxQkQsQ0FBckJDO0FBRUY7O0FBQUEsU0FBUSxHQUFFMUMsSUFBSyxHQUFFMkMsWUFBWSxLQUFNLEdBQUVELFlBQXJDO0FBR0Y7O0FBQUEsc0JBQXNCO0FBQUE7QUFBQTtBQUF0QjtBQUFzQixDQUF0QixFQUE2RTtBQUMzRSxTQUFRLEdBQUUxQyxJQUFLLEdBQUUyQyxZQUFZLEtBQU0sWUFBV3hLLEtBQTlDO0FBR0Y7O0FBQUEsMEJBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQTFCO0FBQTBCLENBQTFCLEVBS29DO0FBQ2xDO0FBQ0EsUUFBTXNLLE1BQU0sR0FBRyxzQkFBc0IsT0FBdEIsT0FBb0MsUUFBUUQsT0FBTyxJQUFsRSxNQUFtRCxDQUFwQyxDQUFmO0FBQ0EsTUFBSUUsWUFBWSxHQUFHRCxNQUFNLENBQU5BLFlBQW5CO0FBQ0EsU0FBUSxHQUFFekMsSUFBSyxHQUFFMEMsWUFBYSxHQUFFQyxZQUFZLEtBQTVDO0FBR0Y7O0FBQUEsdUJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQXZCO0FBQXVCLENBQXZCLEVBS29DO0FBQ2xDLFlBQTJDO0FBQ3pDLFVBQU1DLGFBQWEsR0FBbkIsR0FEeUMsQ0FHekM7O0FBQ0EsUUFBSSxDQUFKLEtBQVVBLGFBQWEsQ0FBYkE7QUFDVixRQUFJLENBQUosT0FBWUEsYUFBYSxDQUFiQTs7QUFFWixRQUFJQSxhQUFhLENBQWJBLFNBQUosR0FBOEI7QUFDNUIsWUFBTSxVQUNILG9DQUFtQ0EsYUFBYSxDQUFiQSxVQUVsQyxnR0FBK0Y5VixJQUFJLENBQUpBLFVBQy9GO0FBQUE7QUFBQTtBQUQrRkE7QUFDL0YsT0FEK0ZBLENBSG5HLEVBQU0sQ0FBTjtBQVNGOztBQUFBLFFBQUk4UyxHQUFHLENBQUhBLFdBQUosSUFBSUEsQ0FBSixFQUEwQjtBQUN4QixZQUFNLFVBQ0gsd0JBQXVCQSxHQUQxQiwwR0FBTSxDQUFOO0FBS0Y7O0FBQUEsUUFBSSxDQUFDQSxHQUFHLENBQUhBLFdBQUQsR0FBQ0EsQ0FBRCxJQUFKLGVBQTJDO0FBQ3pDOztBQUNBLFVBQUk7QUFDRmlELGlCQUFTLEdBQUcsUUFBWkEsR0FBWSxDQUFaQTtBQUNBLE9BRkYsQ0FFRSxZQUFZO0FBQ1pDLGVBQU8sQ0FBUEE7QUFDQSxjQUFNLFVBQ0gsd0JBQXVCbEQsR0FEMUIsaUlBQU0sQ0FBTjtBQUtGOztBQUFBLFVBQUksQ0FBQ21ELGFBQWEsQ0FBYkEsU0FBdUJGLFNBQVMsQ0FBckMsUUFBS0UsQ0FBTCxFQUFpRDtBQUMvQyxjQUFNLFVBQ0gscUJBQW9CbkQsR0FBSSxrQ0FBaUNpRCxTQUFTLENBQUNHLFFBQXBFLCtEQUFDLEdBREgsb0VBQU0sQ0FBTjtBQUtIO0FBQ0Y7QUFFRDs7QUFBQSxTQUFRLEdBQUVoRCxJQUFLLFFBQU9pRCxrQkFBa0IsS0FBTSxNQUFLOUssS0FBTSxNQUFLcUssT0FBTyxJQUFJLEVBQXpFO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Z0JELE1BQU1VLG1CQUFtQixHQUN0QiwrQkFBK0JDLElBQUksQ0FBcEMsbUJBQUMsSUFDRCxjQUVrQjtBQUNoQixNQUFJQyxLQUFLLEdBQUdsRyxJQUFJLENBQWhCLEdBQVlBLEVBQVo7QUFDQSxTQUFPbUcsVUFBVSxDQUFDLFlBQVk7QUFDNUJDLE1BQUUsQ0FBQztBQUNEQyxnQkFBVSxFQURUO0FBRURDLG1CQUFhLEVBQUUsWUFBWTtBQUN6QixlQUFPQyxJQUFJLENBQUpBLE9BQVksTUFBTXZHLElBQUksQ0FBSkEsUUFBekIsS0FBbUIsQ0FBWnVHLENBQVA7QUFISkg7QUFBRyxLQUFELENBQUZBO0FBRGUsS0FBakIsQ0FBaUIsQ0FBakI7QUFOSjs7ZUFnQmVKLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZjs7QUFDQTs7QUFXQSxNQUFNUSx1QkFBdUIsR0FBRyxnQ0FBaEM7O0FBRU8seUJBQTRDO0FBQUE7QUFBNUM7QUFBNEMsQ0FBNUMsRUFHcUQ7QUFDMUQsUUFBTUMsVUFBbUIsR0FBRzdVLFFBQVEsSUFBSSxDQUF4QztBQUVBLFFBQU04VSxTQUFTLEdBQUcsV0FBbEIsTUFBa0IsR0FBbEI7QUFDQSxRQUFNLHdCQUF3QixxQkFBOUIsS0FBOEIsQ0FBOUI7QUFFQSxRQUFNQyxNQUFNLEdBQUcsd0JBQ1pDLEVBQUQsSUFBa0I7QUFDaEIsUUFBSUYsU0FBUyxDQUFiLFNBQXVCO0FBQ3JCQSxlQUFTLENBQVRBO0FBQ0FBLGVBQVMsQ0FBVEE7QUFHRjs7QUFBQSxRQUFJRCxVQUFVLElBQWQsU0FBMkI7O0FBRTNCLFFBQUlHLEVBQUUsSUFBSUEsRUFBRSxDQUFaLFNBQXNCO0FBQ3BCRixlQUFTLENBQVRBLFVBQW9CRyxPQUFPLEtBRXhCcEQsU0FBRCxJQUFlQSxTQUFTLElBQUlxRCxVQUFVLENBRmIsU0FFYSxDQUZiLEVBR3pCO0FBSEZKO0FBR0UsT0FIeUIsQ0FBM0JBO0FBTUg7QUFoQlksS0FpQmIseUJBakJGLE9BaUJFLENBakJhLENBQWY7QUFvQkEsd0JBQVUsTUFBTTtBQUNkLFFBQUksQ0FBSix5QkFBOEI7QUFDNUIsVUFBSSxDQUFKLFNBQWMsa0NBQW9CLE1BQU1JLFVBQVUsQ0FBcEMsSUFBb0MsQ0FBcEM7QUFFakI7QUFKRCxLQUlHLENBSkgsT0FJRyxDQUpIO0FBTUEsU0FBTyxTQUFQLE9BQU8sQ0FBUDtBQUdGOztBQUFBLDZDQUljO0FBQ1osUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTZCQyxjQUFjLENBQWpELE9BQWlELENBQWpEO0FBQ0FDLFVBQVEsQ0FBUkE7QUFFQUMsVUFBUSxDQUFSQTtBQUNBLFNBQU8scUJBQTJCO0FBQ2hDRCxZQUFRLENBQVJBO0FBQ0FDLFlBQVEsQ0FBUkEsbUJBRmdDLENBSWhDOztBQUNBLFFBQUlELFFBQVEsQ0FBUkEsU0FBSixHQUF5QjtBQUN2QkMsY0FBUSxDQUFSQTtBQUNBQyxlQUFTLENBQVRBO0FBRUg7QUFURDtBQVlGOztBQUFBLE1BQU1BLFNBQVMsR0FBRyxJQUFsQixHQUFrQixFQUFsQjs7QUFDQSxpQ0FBd0U7QUFDdEUsUUFBTUMsRUFBRSxHQUFHQyxPQUFPLENBQVBBLGNBQVg7QUFDQSxNQUFJQyxRQUFRLEdBQUdILFNBQVMsQ0FBVEEsSUFBZixFQUFlQSxDQUFmOztBQUNBLGdCQUFjO0FBQ1o7QUFHRjs7QUFBQSxRQUFNRixRQUFRLEdBQUcsSUFBakIsR0FBaUIsRUFBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUcseUJBQTBCSyxPQUFELElBQWE7QUFDckRBLFdBQU8sQ0FBUEEsUUFBaUJDLEtBQUQsSUFBVztBQUN6QixZQUFNQyxRQUFRLEdBQUdSLFFBQVEsQ0FBUkEsSUFBYU8sS0FBSyxDQUFuQyxNQUFpQlAsQ0FBakI7QUFDQSxZQUFNdkQsU0FBUyxHQUFHOEQsS0FBSyxDQUFMQSxrQkFBd0JBLEtBQUssQ0FBTEEsb0JBQTFDOztBQUNBLFVBQUlDLFFBQVEsSUFBWixXQUEyQjtBQUN6QkEsZ0JBQVEsQ0FBUkEsU0FBUSxDQUFSQTtBQUVIO0FBTkRGO0FBRGUsS0FBakIsT0FBaUIsQ0FBakI7QUFVQUosV0FBUyxDQUFUQSxRQUVHRyxRQUFRLEdBQUc7QUFBQTtBQUFBO0FBRmRIO0FBRWMsR0FGZEE7QUFRQTtBQUNELEM7Ozs7Ozs7Ozs7O0FDckdELGlCQUFpQixtQkFBTyxDQUFDLHFFQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU08sSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUF3QjtBQUVyQyxRQUFNO0FBQUEsT0FBQ2pVLElBQUQ7QUFBQSxPQUFPa1U7QUFBUCxNQUFrQnBXLHNEQUFRLENBQUNvQyx3REFBVyxDQUFDaVUsTUFBYixDQUFoQztBQUNBLFFBQU0sQ0FBQ0MsV0FBRCxFQUFjQyxjQUFkLElBQWdDQyw2REFBYyxDQUFDM1gsdUVBQUQsQ0FBcEQ7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBLDRCQUNFLHFFQUFDLDREQUFEO0FBQVUsV0FBSyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUssZUFBUyxFQUFDLHlDQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDRSxxRUFBQyw0REFBRDtBQUFVLGdCQUFNLEVBQUV1WDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxvQkFDR2xVLElBQUksS0FBS0Usd0RBQVcsQ0FBQ2lVLE1BQXJCLGlCQUErQixxRUFBQyxvRUFBRDtBQUFXLGlCQUFLLEVBQUVGLElBQUksQ0FBQ007QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztBQUVEUCxJQUFJLENBQUNRLGVBQUwsR0FBdUIsTUFBT0MsR0FBUCxJQUFlO0FBQ3BDLFFBQU1SLElBQUksR0FBRyxNQUFNM0csOERBQVksQ0FBQ21ILEdBQUcsQ0FBQ2xILEdBQUwsQ0FBL0I7O0FBRUEsTUFBSWtILEdBQUcsQ0FBQ0MsR0FBUixFQUFhO0FBQ1gsUUFBSXZMLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZNkssSUFBWixFQUFrQmxSLE1BQWxCLEtBQTZCLENBQTdCLElBQWtDa1IsSUFBSSxDQUFDVSxXQUFMLEtBQXFCeEwsTUFBM0QsRUFBbUU7QUFDakVzTCxTQUFHLENBQUNDLEdBQUosQ0FBUUUsU0FBUixDQUFrQixHQUFsQixFQUF1QjtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FBdkI7QUFDQUosU0FBRyxDQUFDQyxHQUFKLENBQVFJLEdBQVI7QUFDRDtBQUNGOztBQUVELFNBQU87QUFDTGIsUUFBSSxFQUFFQSxJQUFJLElBQUlBO0FBRFQsR0FBUDtBQUdELENBYkQsQzs7Ozs7Ozs7Ozs7QUMvQkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvdmVuZG9yL25ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdmVuZG9yL25ldy50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCB7IGF0b20sIHNlbGVjdG9yLCBEZWZhdWx0VmFsdWUgfSBmcm9tICdyZWNvaWwnXG5cbmNvbnN0IGxvY2FsU3RvcmFnZUVmZmVjdCA9IGtleSA9PiAoeyBzZXRTZWxmLCBvblNldCB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2F2ZWRWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgICAgaWYgKHNhdmVkVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0U2VsZihKU09OLnBhcnNlKHNhdmVkVmFsdWUpKVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gRE8gTk9USElORyAtIFNTUiBNT0RFXG4gICAgfVxuXG4gICAgb25TZXQobmV3VmFsdWUgPT4ge1xuICAgICAgICBpZiAobmV3VmFsdWUgaW5zdGFuY2VvZiBEZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG5ld1ZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgQXBwbGljYXRpb25TdGF0ZSA9IGF0b20oe1xuICAgIGtleTogJ2FwcC9zdGF0ZScsXG4gICAgZGVmYXVsdDoge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIHRva2VuOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBzZXR0aW5nOiB7XG4gICAgICAgICAgICBsYW5ndWFnZTogJ2VuJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBlZmZlY3RzX1VOU1RBQkxFOiBbXG4gICAgICAgIGxvY2FsU3RvcmFnZUVmZmVjdCgnYXBwL3N0YXRlJyksXG4gICAgXSxcbn0pXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2VIZWFkKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8dGl0bGU+U0lPSTo6IHtwcm9wcy50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIHtwcm9wcy5jc3MgPyA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jc3MvJHtwcm9wcy5jc3N9LmNzc2B9IC8+IDogdW5kZWZpbmVkfVxuICAgICAgPC9IZWFkPlxuICAgIDwvZGl2PlxuICApXG59IiwiaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcIkBibHVlcHJpbnRqcy9zZWxlY3RcIlxuaW1wb3J0IHsgQnV0dG9uLCBNZW51SXRlbSB9IGZyb20gXCJAYmx1ZXByaW50anMvY29yZVwiO1xuaW1wb3J0IFwiQGJsdWVwcmludGpzL3NlbGVjdC9saWIvY3NzL2JsdWVwcmludC1zZWxlY3QuY3NzXCJcbmltcG9ydCB7XG4gIGFyZUN1cnJlbmN5RXF1YWwsXG4gIGNyZWF0ZUN1cnJlbmN5LFxuICBjdXJyZW5jeVNlbGVjdFByb3BzLFxuICBJQ3VycmVuY3ksXG4gIG1heWJlQWRkQ3JlYXRlZEN1cnJlbmN5VG9BcnJheXMsXG4gIG1heWJlRGVsZXRlQ3JlYXRlZEN1cnJlbmN5RnJvbUFycmF5cyxcbiAgcmVuZGVyQ3JlYXRlQ3VycmVuY3lPcHRpb24sXG4gIENVUlJFTkNJRVMsXG59IGZyb20gJy4vbWlzYy9jdXJyZW5jeSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1cnJlbmN5U2VsZWN0KHByb3BzKSB7XG5cblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBhbGxvd0NyZWF0ZTogZmFsc2UsXG4gICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcbiAgICBjcmVhdGVkSXRlbXM6IFtdLFxuICAgIGRpc2FibGVJdGVtczogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGZpbGw6IHRydWUsXG4gICAgY3VycmVuY3k6IENVUlJFTkNJRVNbMF0sXG4gICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICBoYXNJbml0aWFsQ29udGVudDogZmFsc2UsXG4gICAgaXRlbXM6IGN1cnJlbmN5U2VsZWN0UHJvcHMuaXRlbXMsXG4gICAgbWluaW1hbDogZmFsc2UsXG4gICAgb3Blbk9uS2V5RG93bjogZmFsc2UsXG4gICAgcmVzZXRPbkNsb3NlOiBmYWxzZSxcbiAgICByZXNldE9uUXVlcnk6IGZhbHNlLFxuICAgIHJlc2V0T25TZWxlY3Q6IGZhbHNlLFxuICB9KVxuXG4gIGNvbnN0IEN1cnJlbmN5U2VsZWN0ID0gU2VsZWN0Lm9mVHlwZTxJQ3VycmVuY3k+KClcblxuICBjb25zdCBoYW5kbGVWYWx1ZUNoYW5nZSA9IChjdXJyZW5jeTogSUN1cnJlbmN5KSA9PiB7XG4gICAgY29uc3QgeyBjcmVhdGVkSXRlbXMsIGl0ZW1zIH0gPSBtYXliZURlbGV0ZUNyZWF0ZWRDdXJyZW5jeUZyb21BcnJheXMoXG4gICAgICBzdGF0ZS5pdGVtcyxcbiAgICAgIHN0YXRlLmNyZWF0ZWRJdGVtcyxcbiAgICAgIHN0YXRlLmN1cnJlbmN5LFxuICAgIClcblxuICAgIGNvbnN0IHsgY3JlYXRlZEl0ZW1zOiBuZXh0Q3JlYXRlZEl0ZW1zLCBpdGVtczogbmV4dEl0ZW1zIH0gPSBtYXliZUFkZENyZWF0ZWRDdXJyZW5jeVRvQXJyYXlzKFxuICAgICAgaXRlbXMsXG4gICAgICBjcmVhdGVkSXRlbXMsXG4gICAgICBjdXJyZW5jeSxcbiAgICApXG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBjdXJyZW5jeSxcbiAgICAgIGNyZWF0ZWRJdGVtczogbmV4dENyZWF0ZWRJdGVtcyxcbiAgICAgIGl0ZW1zOiBuZXh0SXRlbXNcbiAgICB9KVxuICAgIHByb3BzLm9uRXhjaGFuZ2VyYXRlQ2hhbmdlKGN1cnJlbmN5KVxuICB9XG5cblxuICBjb25zdCB7IGFsbG93Q3JlYXRlLCBjdXJyZW5jeSwgbWluaW1hbCwgLi4uZmxhZ3MgfSA9IHN0YXRlXG4gIGNvbnN0IG1heWJlQ3JlYXRlTmV3SXRlbUZyb21RdWVyeSA9IGFsbG93Q3JlYXRlID8gY3JlYXRlQ3VycmVuY3kgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG1heWJlQ3JlYXRlTmV3SXRlbVJlbmRlcmVyID0gYWxsb3dDcmVhdGUgPyByZW5kZXJDcmVhdGVDdXJyZW5jeU9wdGlvbiA6IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8Q3VycmVuY3lTZWxlY3RcbiAgICAgIHsuLi5jdXJyZW5jeVNlbGVjdFByb3BzfVxuICAgICAgey4uLmZsYWdzfVxuICAgICAgY3JlYXRlTmV3SXRlbUZyb21RdWVyeT17bWF5YmVDcmVhdGVOZXdJdGVtRnJvbVF1ZXJ5fVxuICAgICAgY3JlYXRlTmV3SXRlbVJlbmRlcmVyPXttYXliZUNyZWF0ZU5ld0l0ZW1SZW5kZXJlcn1cbiAgICAgIGl0ZW1zRXF1YWw9e2FyZUN1cnJlbmN5RXF1YWx9XG4gICAgICBpdGVtcz17c3RhdGUuaXRlbXN9XG4gICAgICBub1Jlc3VsdHM9ezxNZW51SXRlbSBkaXNhYmxlZD17dHJ1ZX0gdGV4dD1cIk5vIHJlc3VsdHMuXCIgLz59XG4gICAgICBvbkl0ZW1TZWxlY3Q9e2hhbmRsZVZhbHVlQ2hhbmdlfVxuICAgICAgcG9wb3ZlclByb3BzPXt7IG1pbmltYWwgfX1cbiAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHJpZ2h0SWNvbj1cImNhcmV0LWRvd25cIlxuICAgICAgICAgICAgdGV4dD17cHJvcHMuY3VycmVuY3kgPyBgJHtwcm9wcy5jdXJyZW5jeX1gIDogXCJTZWFyY2guLi5cIn1cbiAgICAgICAgLz5cbiAgICA8L0N1cnJlbmN5U2VsZWN0PlxuICApXG59IiwiaW1wb3J0IHsgRGlzcGxheU1vZGUgfSBmcm9tICcuLi9jb3JlL0dsb2JhbCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZU1lbnUocHJvcHMpIHtcbiAgICBjb25zdCBzd2l0Y2hNb2RlID0gKG1vZGUpID0+IHtcbiAgICAgICAgcHJvcHMuc3dpdGNoKG1vZGUpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gcGwtMyBkLW5vbmUgZC1tZC1ibG9jayBwdC0wIG10LTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbXgtMiBwYi0yIHJvdW5kZWQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHItMlwiPjxidXR0b24gY2xhc3NOYW1lPVwidy0xMDAganVzdGlmeS1jb250ZW50LXN0YXJ0IGJwMy1idXR0b24gYnAzLW1pbmltYWwgYnAzLWljb24taG9tZVwiIG9uQ2xpY2s9eygpID0+IHN3aXRjaE1vZGUoRGlzcGxheU1vZGUuZGFzaGJvYXJkKX0+RGFzaGJvYXJkPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHByLTJcIj48YnV0dG9uIGNsYXNzTmFtZT1cInctMTAwIGp1c3RpZnktY29udGVudC1zdGFydCBicDMtYnV0dG9uIGJwMy1taW5pbWFsIGJwMy1pY29uLWtleS1jb21tYW5kXCIgb25DbGljaz17KCkgPT4gc3dpdGNoTW9kZShEaXNwbGF5TW9kZS53aWRnZXQpfT5XaWRnZXRzPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHByLTJcIj48YnV0dG9uIGNsYXNzTmFtZT1cInctMTAwIGp1c3RpZnktY29udGVudC1zdGFydCBicDMtYnV0dG9uIGJwMy1taW5pbWFsIGJwMy1pY29uLWdsb2JlLW5ldHdvcmtcIj5TYWxlcyBPcmRlcjwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwci0yXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYnAzLWJ1dHRvbiBicDMtbWluaW1hbCBicDMtaWNvbi1ncmlkLXZpZXdcIj5QdXJjaGFzZSBPcmRlcjwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwci0yXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYnAzLWJ1dHRvbiBicDMtbWluaW1hbCBicDMtaWNvbi1wZXJzb25cIj5DdXN0b21lcjwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwci0yXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYnAzLWJ1dHRvbiBicDMtbWluaW1hbCBicDMtaWNvbi1jYWxlbmRhclwiPlNjaGVkdWxlPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHByLTJcIj48YnV0dG9uIGNsYXNzTmFtZT1cInctMTAwIGp1c3RpZnktY29udGVudC1zdGFydCBicDMtYnV0dG9uIGJwMy1taW5pbWFsIGJwMy1pY29uLWdyb3VwZWQtYmFyLWNoYXJ0XCI+UmVwb3J0PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHByLTJcIj48YnV0dG9uIGNsYXNzTmFtZT1cInctMTAwIGp1c3RpZnktY29udGVudC1zdGFydCBicDMtYnV0dG9uIGJwMy1taW5pbWFsIGJwMy1pY29uLWN1YmVcIj5JbnZlbnRvcnk8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHItMlwiPjxidXR0b24gY2xhc3NOYW1lPVwidy0xMDAganVzdGlmeS1jb250ZW50LXN0YXJ0IGJwMy1idXR0b24gYnAzLW1pbmltYWwgYnAzLWljb24tY29nXCI+U2V0dGluZ3M8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wQmFyKHByb3BzKSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2Nvb2tpZSwgc2V0Q29va2llLCByZW1vdmVDb29raWVdID0gdXNlQ29va2llcyhbXCJqd3RcIl0pXG5cbiAgY29uc3QgZ29Mb2dpbiA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcbiAgfVxuXG4gIGNvbnN0IGdvRGFzaGJvYXJkID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIilcbiAgfVxuXG4gIGNvbnN0IGdvUmVwb3J0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICByb3V0ZXIucHVzaChcIi9yZXBvcnRcIilcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZWxvZ291dChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmVtb3ZlQ29va2llKCdqd3QnKVxuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwicHgtMyBwdC0yXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicDMtbmF2YmFyLWdyb3VwIGJwMy1hbGlnbi1sZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnAzLW5hdmJhci1oZWFkaW5nXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL0lTTF9MT0dPLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgIHdpZHRoPXs1Nn1cbiAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnAzLW5hdmJhci1ncm91cCBicDMtYWxpZ24tcmlnaHRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJicDMtYnV0dG9uIGJwMy1taW5pbWFsIGJwMy1pY29uLWhvbWVcIiBvbkNsaWNrPXtnb0Rhc2hib2FyZH0+RGFzaGJvYXJkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnAzLWJ1dHRvbiBicDMtbWluaW1hbCBicDMtaWNvbi1jaGFydFwiIG9uQ2xpY2s9e2dvUmVwb3J0fT5SZXBvcnQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJicDMtYnV0dG9uIGJwMy1taW5pbWFsIGJwMy1pY29uLWxvZy1vdXRcIiBvbkNsaWNrPXtoYW5kbGVsb2dvdXR9PkxvZ291dDwvYnV0dG9uPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicDMtbmF2YmFyLWRpdmlkZXJcIj48L3NwYW4+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnAzLWJ1dHRvbiBicDMtbWluaW1hbCBicDMtaWNvbi11c2VyXCI+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnAzLWJ1dHRvbiBicDMtbWluaW1hbCBicDMtaWNvbi1ub3RpZmljYXRpb25zXCI+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnAzLWJ1dHRvbiBicDMtbWluaW1hbCBicDMtaWNvbi1jb2dcIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tIFwiQGJsdWVwcmludGpzL2NvcmVcIlxuaW1wb3J0IHsgSXRlbVByZWRpY2F0ZSwgSXRlbVJlbmRlcmVyIH0gZnJvbSBcIkBibHVlcHJpbnRqcy9zZWxlY3RcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElDdXJyZW5jeSB7XG4gICAgLyoqIEN1cnJlbmN5IENvZGUuICovXG4gICAgY3VycmVuY3lfY29kZTogc3RyaW5nO1xuICAgIC8qKiBSYXRlLiAqL1xuICAgIGV4Y2hhbmdlX3JhdGU6IG51bWJlcjtcbn1cblxuLyoqIEN1cnJlbmN5IExpc3QgKi9cbmV4cG9ydCBjb25zdCBDVVJSRU5DSUVTOiBJQ3VycmVuY3lbXSA9IFtcbiAgICB7IGN1cnJlbmN5X2NvZGU6IFwiSEtEXCIsIGV4Y2hhbmdlX3JhdGU6IDEuMDAwMCB9LFxuICAgIHsgY3VycmVuY3lfY29kZTogXCJVU0RcIiwgZXhjaGFuZ2VfcmF0ZTogNy44NDQ2IH0sXG4gICAgeyBjdXJyZW5jeV9jb2RlOiBcIkpQWVwiLCBleGNoYW5nZV9yYXRlOiAwLjA3MjUgfSxcbiAgICB7IGN1cnJlbmN5X2NvZGU6IFwiUk1CXCIsIGV4Y2hhbmdlX3JhdGU6IDAuODgxMyB9LFxuICAgIHsgY3VycmVuY3lfY29kZTogXCJFVVJcIiwgZXhjaGFuZ2VfcmF0ZTogMTAuNTAwMCB9LFxuXS5tYXAoKG0sIGluZGV4KSA9PiAoeyAuLi5tLCByYW5rOiBpbmRleCArIDEgfSkpXG5cbmV4cG9ydCBjb25zdCByZW5kZXJDdXJyZW5jeTogSXRlbVJlbmRlcmVyPElDdXJyZW5jeT4gPSAoY3VycmVuY3ksIHsgaGFuZGxlQ2xpY2ssIG1vZGlmaWVycywgcXVlcnkgfSkgPT4ge1xuICAgIGlmICghbW9kaWZpZXJzLm1hdGNoZXNQcmVkaWNhdGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHRleHQgPSBgJHtjdXJyZW5jeS5jdXJyZW5jeV9jb2RlfWA7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICBhY3RpdmU9e21vZGlmaWVycy5hY3RpdmV9XG4gICAgICAgICAgICBkaXNhYmxlZD17bW9kaWZpZXJzLmRpc2FibGVkfVxuICAgICAgICAgICAgbGFiZWw9e2N1cnJlbmN5LmV4Y2hhbmdlX3JhdGUudG9TdHJpbmcoKX1cbiAgICAgICAgICAgIGtleT17Y3VycmVuY3kuY3VycmVuY3lfY29kZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgdGV4dD17aGlnaGxpZ2h0VGV4dCh0ZXh0LCBxdWVyeSl9XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyQ3JlYXRlQ3VycmVuY3lPcHRpb24gPSAoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgaGFuZGxlQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxFbGVtZW50PixcbikgPT4gKFxuICAgIDxNZW51SXRlbVxuICAgICAgICBpY29uPVwiYWRkXCJcbiAgICAgICAgdGV4dD17YENyZWF0ZSBcIiR7cXVlcnl9XCJgfVxuICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIHNob3VsZERpc21pc3NQb3BvdmVyPXtmYWxzZX1cbiAgICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlckN1cnJlbmN5OiBJdGVtUHJlZGljYXRlPElDdXJyZW5jeT4gPSAocXVlcnksIGN1cnJlbmN5LCBfaW5kZXgsIGV4YWN0TWF0Y2gpID0+IHtcbiAgICBjb25zdCBub3JtYWxpemVkVGl0bGUgPSBjdXJyZW5jeS5jdXJyZW5jeV9jb2RlLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChleGFjdE1hdGNoKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemVkVGl0bGUgPT09IG5vcm1hbGl6ZWRRdWVyeTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYCR7bm9ybWFsaXplZFRpdGxlfSAke2N1cnJlbmN5LmV4Y2hhbmdlX3JhdGV9YC5pbmRleE9mKG5vcm1hbGl6ZWRRdWVyeSkgPj0gMDtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBoaWdobGlnaHRUZXh0KHRleHQ6IHN0cmluZywgcXVlcnk6IHN0cmluZykge1xuICAgIGxldCBsYXN0SW5kZXggPSAwO1xuICAgIGNvbnN0IHdvcmRzID0gcXVlcnlcbiAgICAgICAgLnNwbGl0KC9cXHMrLylcbiAgICAgICAgLmZpbHRlcih3b3JkID0+IHdvcmQubGVuZ3RoID4gMClcbiAgICAgICAgLm1hcChlc2NhcGVSZWdFeHBDaGFycyk7XG4gICAgaWYgKHdvcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW3RleHRdO1xuICAgIH1cbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHdvcmRzLmpvaW4oXCJ8XCIpLCBcImdpXCIpO1xuICAgIGNvbnN0IHRva2VuczogUmVhY3QuUmVhY3ROb2RlW10gPSBbXTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCBtYXRjaCA9IHJlZ2V4cC5leGVjKHRleHQpO1xuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsZW5ndGggPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGJlZm9yZSA9IHRleHQuc2xpY2UobGFzdEluZGV4LCByZWdleHAubGFzdEluZGV4IC0gbGVuZ3RoKTtcbiAgICAgICAgaWYgKGJlZm9yZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaChiZWZvcmUpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gICAgICAgIHRva2Vucy5wdXNoKDxzdHJvbmcga2V5PXtsYXN0SW5kZXh9PnttYXRjaFswXX08L3N0cm9uZz4pO1xuICAgIH1cbiAgICBjb25zdCByZXN0ID0gdGV4dC5zbGljZShsYXN0SW5kZXgpO1xuICAgIGlmIChyZXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdG9rZW5zLnB1c2gocmVzdCk7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cENoYXJzKHRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyhbLiorP149IToke30oKXxcXFtcXF1cXC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG5cbmV4cG9ydCBjb25zdCBjdXJyZW5jeVNlbGVjdFByb3BzID0ge1xuICAgIGl0ZW1QcmVkaWNhdGU6IGZpbHRlckN1cnJlbmN5LFxuICAgIGl0ZW1SZW5kZXJlcjogcmVuZGVyQ3VycmVuY3ksXG4gICAgaXRlbXM6IENVUlJFTkNJRVMsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3VycmVuY3koY3VycmVuY3lfY29kZTogc3RyaW5nKTogSUN1cnJlbmN5IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW5jeV9jb2RlLFxuICAgICAgICBleGNoYW5nZV9yYXRlOiAxLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVDdXJyZW5jeUVxdWFsKGN1cnJlbmN5QTogSUN1cnJlbmN5LCBjdXJyZW5jeUI6IElDdXJyZW5jeSkge1xuICAgIC8vIENvbXBhcmUgb25seSB0aGUgY29kZXMgKGlnbm9yaW5nIGNhc2UpIGp1c3QgZm9yIHNpbXBsaWNpdHkuXG4gICAgcmV0dXJuIGN1cnJlbmN5QS5jdXJyZW5jeV9jb2RlLnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbmN5Qi5jdXJyZW5jeV9jb2RlLnRvTG93ZXJDYXNlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb2VzQ3VycmVuY3lFcXVhbFF1ZXJ5KGN1cnJlbmN5OiBJQ3VycmVuY3ksIHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gY3VycmVuY3kuY3VycmVuY3lfY29kZS50b0xvd2VyQ2FzZSgpID09PSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlDb250YWluc0N1cnJlbmN5KGN1cnJlbmNpZXM6IElDdXJyZW5jeVtdLCBjdXJyZW5jeVRvRmluZDogSUN1cnJlbmN5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGN1cnJlbmNpZXMuc29tZSgoY3VycmVuY3k6IElDdXJyZW5jeSkgPT4gY3VycmVuY3kuY3VycmVuY3lfY29kZSA9PT0gY3VycmVuY3lUb0ZpbmQuY3VycmVuY3lfY29kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDdXJyZW5jeVRvQXJyYXkoY3VycmVuY2llczogSUN1cnJlbmN5W10sIGN1cnJlbmN5VG9BZGQ6IElDdXJyZW5jeSkge1xuICAgIHJldHVybiBbLi4uY3VycmVuY2llcywgY3VycmVuY3lUb0FkZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDdXJyZW5jeUZyb21BcnJheShjdXJyZW5jaWVzOiBJQ3VycmVuY3lbXSwgY3VycmVuY3lUb0RlbGV0ZTogSUN1cnJlbmN5KSB7XG4gICAgcmV0dXJuIGN1cnJlbmNpZXMuZmlsdGVyKGN1cnJlbmN5ID0+IGN1cnJlbmN5ICE9PSBjdXJyZW5jeVRvRGVsZXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlQWRkQ3JlYXRlZEN1cnJlbmN5VG9BcnJheXMoXG4gICAgaXRlbXM6IElDdXJyZW5jeVtdLFxuICAgIGNyZWF0ZWRJdGVtczogSUN1cnJlbmN5W10sXG4gICAgY3VycmVuY3k6IElDdXJyZW5jeSxcbik6IHsgY3JlYXRlZEl0ZW1zOiBJQ3VycmVuY3lbXTsgaXRlbXM6IElDdXJyZW5jeVtdIH0ge1xuICAgIGNvbnN0IGlzTmV3bHlDcmVhdGVkSXRlbSA9ICFhcnJheUNvbnRhaW5zQ3VycmVuY3koaXRlbXMsIGN1cnJlbmN5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVkSXRlbXM6IGlzTmV3bHlDcmVhdGVkSXRlbSA/IGFkZEN1cnJlbmN5VG9BcnJheShjcmVhdGVkSXRlbXMsIGN1cnJlbmN5KSA6IGNyZWF0ZWRJdGVtcyxcbiAgICAgICAgLy8gQWRkIGEgY3JlYXRlZCBjdXJyZW5jeSB0byBgaXRlbXNgIHNvIHRoYXQgdGhlIGN1cnJlbmN5IGNhbiBiZSBkZXNlbGVjdGVkLlxuICAgICAgICBpdGVtczogaXNOZXdseUNyZWF0ZWRJdGVtID8gYWRkQ3VycmVuY3lUb0FycmF5KGl0ZW1zLCBjdXJyZW5jeSkgOiBpdGVtcyxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVEZWxldGVDcmVhdGVkQ3VycmVuY3lGcm9tQXJyYXlzKFxuICAgIGl0ZW1zOiBJQ3VycmVuY3lbXSxcbiAgICBjcmVhdGVkSXRlbXM6IElDdXJyZW5jeVtdLFxuICAgIGN1cnJlbmN5OiBJQ3VycmVuY3ksXG4pOiB7IGNyZWF0ZWRJdGVtczogSUN1cnJlbmN5W107IGl0ZW1zOiBJQ3VycmVuY3lbXSB9IHtcbiAgICBjb25zdCB3YXNJdGVtQ3JlYXRlZEJ5VXNlciA9IGFycmF5Q29udGFpbnNDdXJyZW5jeShjcmVhdGVkSXRlbXMsIGN1cnJlbmN5KTtcblxuICAgIC8vIERlbGV0ZSB0aGUgaXRlbSBpZiB0aGUgdXNlciBtYW51YWxseSBjcmVhdGVkIGl0LlxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZWRJdGVtczogd2FzSXRlbUNyZWF0ZWRCeVVzZXIgPyBkZWxldGVDdXJyZW5jeUZyb21BcnJheShjcmVhdGVkSXRlbXMsIGN1cnJlbmN5KSA6IGNyZWF0ZWRJdGVtcyxcbiAgICAgICAgaXRlbXM6IHdhc0l0ZW1DcmVhdGVkQnlVc2VyID8gZGVsZXRlQ3VycmVuY3lGcm9tQXJyYXkoaXRlbXMsIGN1cnJlbmN5KSA6IGl0ZW1zLFxuICAgIH07XG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGl0bGVcIjogXCJWZW5kb3JfdGl0bGVfX21oU1JKXCIsXG5cdFwic2VjdGlvbkhlYWRlclwiOiBcIlZlbmRvcl9zZWN0aW9uSGVhZGVyX18xcWVGTVwiLFxuXHRcIml0ZW1UaXRsZVwiOiBcIlZlbmRvcl9pdGVtVGl0bGVfX0tOd2ZCXCIsXG5cdFwiaXRlbUluZm9cIjogXCJWZW5kb3JfaXRlbUluZm9fXzJZWkQxXCIsXG5cdFwiaHJcIjogXCJWZW5kb3JfaHJfX1AzZnI1XCIsXG5cdFwiYmFkZ2VcIjogXCJWZW5kb3JfYmFkZ2VfXzJ5OUZWXCJcbn07XG4iLCJpbXBvcnQgSXRlbURldGFpbCBmcm9tICcuL25ldydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmVuZG9yTmV3KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxJdGVtRGV0YWlsIHRva2VuPXtwcm9wcy50b2tlbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsImltcG9ydCB7IENhcmQsIEVsZXZhdGlvbiwgQnV0dG9uLCBJbnRlbnQsIFJhZGlvLCBSYWRpb0dyb3VwLCBJY29uLCBEaWFsb2csIEFuY2hvckJ1dHRvbiwgQ2xhc3NlcyBhcyBDb3JlQ2xhc3NlcywgUG9zaXRpb24gfSBmcm9tIFwiQGJsdWVwcmludGpzL2NvcmVcIlxuaW1wb3J0IHsgSVRvYXN0ZXJQcm9wcywgSVRvYXN0UHJvcHMsIFRvYXN0ZXIsIFRvYXN0ZXJQb3NpdGlvbiB9IGZyb20gXCJAYmx1ZXByaW50anMvY29yZVwiXG5pbXBvcnQgeyBDZWxsLCBDb2x1bW4sIFRhYmxlLCBUYWJsZUxvYWRpbmdPcHRpb24sIFNlbGVjdGlvbk1vZGVzIH0gZnJvbSBcIkBibHVlcHJpbnRqcy90YWJsZVwiXG5pbXBvcnQgeyBDbGFzc2VzLCBQb3BvdmVyMiwgVG9vbHRpcDIgfSBmcm9tIFwiQGJsdWVwcmludGpzL3BvcG92ZXIyXCJcbmltcG9ydCBDdXJyZW5jeVNlbGVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0N1cnJlbmN5U2VsZWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9WZW5kb3IubW9kdWxlLmNzcydcbmltcG9ydCBcIkBibHVlcHJpbnRqcy9wb3BvdmVyMi9saWIvY3NzL2JsdWVwcmludC1wb3BvdmVyMi5jc3NcIlxuaW1wb3J0IFwiQGJsdWVwcmludGpzL3RhYmxlL2xpYi9jc3MvdGFibGUuY3NzXCJcbmltcG9ydCB7IERhdGVJbnB1dCwgSURhdGVGb3JtYXRQcm9wcyB9IGZyb20gXCJAYmx1ZXByaW50anMvZGF0ZXRpbWVcIjtcbmltcG9ydCAncmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbURldGFpbChwcm9wcykge1xuXG4gICAgY29uc3QgU3BhY2VyID0gKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogcHJvcHMuaGVpZ2h0IH19IC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBTZWN0aW9uSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uSGVhZGVyfT57cHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e3N0eWxlcy5ocn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgSXRlbSA9IChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24tbWlkZGxlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1UaXRsZX0+e3Byb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMuaXRlbUluZm99ICR7c2tlbGV0b259YH0+e3Byb3BzLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBBY3Rpb25CdXR0b25zID0gKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uSGVhZGVyfT57cHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnZW5kJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiU0FWRVwiIGludGVudD17SW50ZW50LlBSSU1BUll9IG9uQ2xpY2s9e3N1Y2Nlc3NUb2FzdH0gc21hbGw9e3RydWV9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkRPTkVcIiBpbnRlbnQ9e0ludGVudC5EQU5HRVJ9IG9uQ2xpY2s9e2Vycm9yVG9hc3R9IHNtYWxsPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e3N0eWxlcy5ocn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0Q3VzdG9tZXIgPSAoZSkgPT4ge1xuICAgICAgICBzZXRDdXN0b21lcihlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgc2V0Q3VzdG9tZXJOYW1lKGUudGFyZ2V0LmRhdGFzZXQubmFtZSlcbiAgICAgICAgc2V0Q2F0ZWdvcnkoZS50YXJnZXQuZGF0YXNldC5jYXQpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0TGV0dGVyaGVhZCA9IChlKSA9PiB7XG4gICAgICAgIHNldExldHRlcmhlYWQoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZXhjaGFuZ2VyYXRlID0gKGUpID0+IHsgICAgICAgIFxuICAgICAgICBzZXRFeGNoYW5nZXJhdGUoZS5leGNoYW5nZV9yYXRlKVxuICAgICAgICBzZXRDdXJyZW5jeShlLmN1cnJlbmN5X2NvZGUpXG4gICAgfVxuXG4gICAgbGV0IHRvYXN0ZXI6IFRvYXN0ZXJcbiAgICBjb25zdCByZWZIYW5kbGVycyA9IHtcbiAgICAgICAgdG9hc3RlcjogKHJlZjogVG9hc3RlcikgPT4gKHRvYXN0ZXIgPSByZWYpLFxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRvYXN0ID0gKHRvYXN0OiBJVG9hc3RQcm9wcykgPT4ge1xuICAgICAgICB0b2FzdC50aW1lb3V0ID0gNTAwMDtcbiAgICAgICAgdG9hc3Rlci5zaG93KHRvYXN0KVxuICAgIH1cblxuICAgIGNvbnN0IGVycm9yVG9hc3QgPSAoZSkgPT4ge1xuICAgICAgICBhZGRUb2FzdCh7XG4gICAgICAgICAgICBpY29uOiBcIndhcm5pbmctc2lnblwiLFxuICAgICAgICAgICAgaW50ZW50OiBJbnRlbnQuREFOR0VSLFxuICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgICBcIllvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9ucyB0byBwZXJmb3JtIHRoaXMgYWN0aW9uLiBcXFxuICAgIFBsZWFzZSBjb250YWN0IHlvdXIgc3lzdGVtIGFkbWluaXN0cmF0b3IgdG8gcmVxdWVzdCB0aGUgYXBwcm9wcmlhdGUgYWNjZXNzIHJpZ2h0cy5cIixcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzdWNjZXNzVG9hc3QgPSAoKSA9PiB7XG4gICAgICAgIGFkZFRvYXN0KHtcbiAgICAgICAgICAgIGljb246IFwidGlja1wiLFxuICAgICAgICAgICAgaW50ZW50OiBJbnRlbnQuUFJJTUFSWSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICBTdWNjZXNzZnVsbHkgc2F2ZWQgZGF0YS4gUkVGOiA8ZW0+NDU1LTIwMDwvZW0+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgSW5wdXQgPSAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVOYW1lID0gYGJwMy1pbnB1dCBicDMtaW50ZW50LSR7cHJvcHMuaW50ZW50fWBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyB3aWR0aDogMTAwLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIHRleHRBbGlnbjogXCJlbmRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAyIGNvbnRlbnQ9ezxzcGFuPlNlYXJjaCB7cHJvcHMubGFiZWx9PC9zcGFuPn0gcGxhY2VtZW50PVwibGVmdFwiIGludGVudD1cInByaW1hcnlcIiB1c2VQb3J0YWw9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbVRpdGxlfT57cHJvcHMubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXAyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnAzLWlucHV0LWdyb3VwIGJwMy1zbWFsbFwiIHN0eWxlPXt7IGJvcmRlckNvbG9yOiBcIndoaXRlXCIsIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmljb25MZWZ0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17cHJvcHMuaWNvbkxlZnR9IGljb25TaXplPXsxNH0gY2xhc3NOYW1lPVwibXgtMiBwdC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVOYW1lfSBvbkJsdXI9e3ZhbGlkYXRlRGF0YX0gcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfSBkZWZhdWx0VmFsdWU9e3Byb3BzLmRlZmF1bHRWYWx1ZX0gZGF0YS12YWxpZGF0ZT17cHJvcHMudmFsaWRhdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaWNvblJpZ2h0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17cHJvcHMuaWNvblJpZ2h0fSBpY29uU2l6ZT17MTR9IGNsYXNzTmFtZT1cIm14LTIgcHQtMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucmVxdWlyZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicDMtaWNvbiBicDMtbWluaW1hbCBicDMtc21hbGwgYnAzLWljb24tZG90IGJwMy1pbnRlbnQtZGFuZ2VyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDIwLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyMlxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25LaW5kPVwiY2xpY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wb3ZlckNsYXNzTmFtZT17Q2xhc3Nlcy5QT1BPVkVSMl9DT05URU5UX1NJWklOR31cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwidGV4dFwiIHN0eWxlPXt7IHdpZHRoOiAzMDAsIGhlaWdodDogMzAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGItMVwiPntwcm9wcy5zZWFyY2hsYWJlbH0gU2VsZWN0aW9uPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLmhyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGItMVwiPkxhc3QgNSBTZWxlY3RlZCB7cHJvcHMuc2VhcmNobGFiZWx9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLmhyfSBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAxMCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFjdGlvbj09J2dvU2VhcmNoJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwIG9uQ2hhbmdlPXtzZWxlY3RDdXN0b21lcn0gc2VsZWN0ZWRWYWx1ZT17Y3VzdG9tZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gbGFiZWw9XCJBUkEgLSBBbGV4IFJhbWlsIEFndWVsXCIgdmFsdWU9XCJBUkFcIiBkYXRhLWNhdD1cIjFcIiBkYXRhLW5hbWU9XCJBbGV4IFJhbWlsIEFndWVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIGxhYmVsPVwiQklCIC0gQm9iYnkgSXNoaW1penVcIiB2YWx1ZT1cIkJJQlwiIGRhdGEtY2F0PVwiMlwiIGRhdGEtbmFtZT1cIkJvYmJ5IElzaGltaXp1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIGxhYmVsPVwiVFdXIC0gVG9tbXkgV29uZ1wiIHZhbHVlPVwiVFdXXCIgZGF0YS1jYXQ9XCIzXCIgZGF0YS1uYW1lPVwiVG9tbXkgV29uZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyBsYWJlbD1cIlRIRyAtIFRpZ2VyIEh1YW5nXCIgdmFsdWU9XCJUSEdcIiBkYXRhLWNhdD1cIkFcIiBkYXRhLW5hbWU9XCJUaWdlciBIdWFuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyBsYWJlbD1cIlRNRiAtIFRvbW15IEZ1XCIgdmFsdWU9XCJUTUZcIiBkYXRhLWNhdD1cIkJcIiBkYXRhLW5hbWU9XCJUb21teSBGdVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFjdGlvbj09J2dvU2VhcmNoTGV0dGVySGVhZCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBvbkNoYW5nZT17c2VsZWN0TGV0dGVyaGVhZH0gc2VsZWN0ZWRWYWx1ZT17bGV0dGVyaGVhZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyBsYWJlbD1cIjEwMSAtIDEyMyBIT05HIEtPTkcgTElNSVRFRFwiIHZhbHVlPVwiMTIzIEhPTkcgS09ORyBMSU1JVEVEXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIGxhYmVsPVwiQ1RNMDEgLSBUZXN0IExldHRlcmhlYWRcIiB2YWx1ZT1cIlRlc3QgTGV0dGVyaGVhZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyBsYWJlbD1cIjIwMSAtIEhTQiBXRUJXT1JLU1wiIHZhbHVlPVwiSFNCIFdFQldPUktTXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMuaHJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsIG1hcmdpblRvcDogMTUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Q2xhc3Nlcy5QT1BPVkVSMl9ESVNNSVNTfSBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+Q2xvc2U8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaW50ZW50PXtJbnRlbnQuREFOR0VSfSBvbkNsaWNrPXtoYW5kbGVPcGVufSBjbGFzc05hbWU9e0NsYXNzZXMuUE9QT1ZFUjJfRElTTUlTU30+RnVsbCBTZWFyY2g8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXJnZXQ9eyh7IGlzT3BlbiwgcmVmLCAuLi50YXJnZXRQcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFjdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAyIGNvbnRlbnQ9ezxzcGFuPlNlYXJjaCB7cHJvcHMuc2VhcmNobGFiZWx9PC9zcGFuPn0gcGxhY2VtZW50PVwicmlnaHRcIiBpbnRlbnQ9XCJwcmltYXJ5XCIgdXNlUG9ydGFsPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJ6b29tLWluXCIgbWluaW1hbD17dHJ1ZX0gc21hbGw9e3RydWV9IHsuLi50YXJnZXRQcm9wc30gZWxlbWVudFJlZj17cmVmfSBpbnRlbnQ9XCJwcmltYXJ5XCIgdGV4dD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXAyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17cHJvcHMuc3BhY2VyfSAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IFN1Z2dlc3QgPSAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVOYW1lID0gYGJwMy1pbnB1dCBicDMtaW50ZW50LSR7cHJvcHMuaW50ZW50fWBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyB3aWR0aDogMTAwLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIHRleHRBbGlnbjogXCJlbmRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAyIGNvbnRlbnQ9ezxzcGFuPlNlYXJjaCB7cHJvcHMubGFiZWx9PC9zcGFuPn0gcGxhY2VtZW50PVwibGVmdFwiIGludGVudD1cInByaW1hcnlcIiB1c2VQb3J0YWw9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbVRpdGxlfT57cHJvcHMubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXAyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDIwIH19PlxuICAgICAgICAgICAgICAgICAgICA8Q3VycmVuY3lTZWxlY3Qgb25FeGNoYW5nZXJhdGVDaGFuZ2U9e3NlbGVjdGV4Y2hhbmdlcmF0ZX0gY3VycmVuY3k9e2N1cnJlbmN5fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXtwcm9wcy5zcGFjZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IFN0YXRpYyA9IChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZU5hbWUgPSBgYnAzLWlucHV0IGJwMy1pbnRlbnQtJHtwcm9wcy5pbnRlbnR9YFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IHdpZHRoOiAxMDAsIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgdGV4dEFsaWduOiBcImVuZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtVGl0bGV9Pntwcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUluZm99Pntwcm9wcy50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17cHJvcHMuc3BhY2VyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0ZURhdGEgPSAoZSkgPT4ge1xuICAgICAgICAvKiogUEVSRk9STSBWQUxJREFUSU9OICoqKi9cbiAgICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQudmFsaWRhdGUgPT0gJ3BheWNvZGUnKSB7XG4gICAgICAgICAgICBsZXQgaXNmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXltZW50dGVybURhdGFbMF0pLm1hcChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBheW1lbnR0ZXJtRGF0YVtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09IHBheW1lbnR0ZXJtRGF0YVtpbmRleF0uY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGF5Y29kZShwYXltZW50dGVybURhdGFbaW5kZXhdLmNvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXlkZXNjKHBheW1lbnR0ZXJtRGF0YVtpbmRleF0uZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICBpc2ZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChpc2ZvdW5kID09IGZhbHNlICYmIGUudGFyZ2V0LnZhbHVlICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1BheW1lbnQgQ29kZSBOb3QgRm91bmQhJylcbiAgICAgICAgICAgICAgICBzZXRQYXljb2RlKCcnKVxuICAgICAgICAgICAgICAgIHNldFBheWRlc2MoJycpXG4gICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ29TZWFyY2ggPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgLy8gRE8gU09NRVRISU5HXG4gICAgfVxuXG4gICAgY29uc3QgZ29TZWFyY2hMZXR0ZXJIZWFkID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIC8vIERPIFNPTUVUSElOR1xuICAgIH1cblxuICAgIGludGVyZmFjZSBJRGV0YWlsRGF0YSB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZztcbiAgICB9XG5cbiAgICBjb25zdCBkZXRhaWxEYXRhOiBJRGV0YWlsRGF0YVtdID0gcmVxdWlyZShcIi4uLy4uL2RhdGEvcXVvdGF0aW9uLmpzb25cIilcblxuICAgIGludGVyZmFjZSBJUGF5bWVudFRlcm1zRGF0YSB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZztcbiAgICB9XG5cbiAgICBjb25zdCBwYXltZW50dGVybURhdGE6IElQYXltZW50VGVybXNEYXRhW10gPSByZXF1aXJlKFwiLi4vLi4vZGF0YS9wYXltZW50dGVybS5qc29uXCIpXG5cbiAgICBjb25zdCBbc2tlbGV0b24sIHNldFNrZWxldG9uXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbY3VzdG9tZXJuYW1lLCBzZXRDdXN0b21lck5hbWVdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGU8YW55IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBbbGV0dGVyaGVhZCwgc2V0TGV0dGVyaGVhZF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2V4Y2hhbmdlcmF0ZSwgc2V0RXhjaGFuZ2VyYXRlXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgW3BheWNvZGUsIHNldFBheWNvZGVdID0gdXNlU3RhdGU8YW55IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBbcGF5ZGVzYywgc2V0UGF5ZGVzY10gPSB1c2VTdGF0ZTxhbnkgfCBudWxsPihudWxsKVxuXG4gICAgY29uc3QgZ2V0TG9hZGluZ09wdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBsb2FkaW5nT3B0aW9uczogVGFibGVMb2FkaW5nT3B0aW9uW10gPSBbXVxuICAgICAgICBpZiAoc2tlbGV0b24pIGxvYWRpbmdPcHRpb25zID0gW1RhYmxlTG9hZGluZ09wdGlvbi5DRUxMUywgVGFibGVMb2FkaW5nT3B0aW9uLkNPTFVNTl9IRUFERVJTLCBUYWJsZUxvYWRpbmdPcHRpb24uUk9XX0hFQURFUlNdXG4gICAgICAgIHJldHVybiBsb2FkaW5nT3B0aW9uc1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdENvbHVtbk5hbWUgPSAoY29sdW1uTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2x1bW5OYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIikucmVwbGFjZSgvXi4vLCBmaXJzdENoYXJhY3RlciA9PiBmaXJzdENoYXJhY3Rlci50b1VwcGVyQ2FzZSgpKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckNlbGwgPSAocm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxJdGVtID0gZGV0YWlsRGF0YVtyb3dJbmRleF1cbiAgICAgICAgcmV0dXJuIDxDZWxsPntkZXRhaWxJdGVtW09iamVjdC5rZXlzKGRldGFpbEl0ZW0pW2NvbHVtbkluZGV4XV19PC9DZWxsPlxuICAgIH1cblxuICAgIGNvbnN0IERhdGFHcmlkID0gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBPYmplY3Qua2V5cyhkZXRhaWxEYXRhWzBdKS5tYXAoKGNvbHVtbk5hbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q29sdW1uIGtleT17aW5kZXh9IG5hbWU9e2Zvcm1hdENvbHVtbk5hbWUoY29sdW1uTmFtZSl9IGNlbGxSZW5kZXJlcj17cmVuZGVyQ2VsbH0gLz5cbiAgICAgICAgKSlcblxuICAgICAgICBjb25zdCBjZWxsUmVuZGVyZXIgPSAocm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxDZWxsPntgJCR7KHJvd0luZGV4ICogMTApLnRvRml4ZWQoMil9YH08L0NlbGw+XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAxMDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9XCJ3LTEwMFwiIG51bVJvd3M9e2RldGFpbERhdGEubGVuZ3RofSBsb2FkaW5nT3B0aW9ucz17Z2V0TG9hZGluZ09wdGlvbnMoKX0gc2VsZWN0aW9uTW9kZXM9e1NlbGVjdGlvbk1vZGVzLkFMTH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKn1cbiAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBrZXk9ezF9IG5hbWU9XCJJdGVtXCIgY2VsbFJlbmRlcmVyPXtyZW5kZXJDZWxsfSBjbGFzc05hbWU9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGtleT17Mn0gbmFtZT1cIkRlc2NyaXB0aW9uXCIgY2VsbFJlbmRlcmVyPXtyZW5kZXJDZWxsfSBjbGFzc05hbWU9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIGtleT17M30gbmFtZT1cIlNwZWNpZmljYXRpb25cIiBjZWxsUmVuZGVyZXI9e3JlbmRlckNlbGx9IGNsYXNzTmFtZT1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW4ga2V5PXs0fSBuYW1lPVwiRVREXCIgY2VsbFJlbmRlcmVyPXtyZW5kZXJDZWxsfSBjbGFzc05hbWU9XCJcIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgZGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgICAgICBjYW5Fc2NhcGVLZXlDbG9zZTogdHJ1ZSxcbiAgICAgICAgY2FuT3V0c2lkZUNsaWNrQ2xvc2U6IHRydWUsXG4gICAgICAgIGVuZm9yY2VGb2N1czogdHJ1ZSxcbiAgICAgICAgdXNlUG9ydGFsOiB0cnVlLFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiBzZXRJc09wZW4odHJ1ZSlcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldElzT3BlbihmYWxzZSlcblxuICAgIGNvbnN0IGpzRGF0ZUZvcm1hdHRlcjogSURhdGVGb3JtYXRQcm9wcyA9IHtcbiAgICAgICAgLy8gbm90ZSB0aGF0IHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24gb2YgRGF0ZSBmdW5jdGlvbnMgZGlmZmVycyBiZXR3ZWVuIGJyb3dzZXJzXG4gICAgICAgIGZvcm1hdERhdGU6IGRhdGUgPT4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKSxcbiAgICAgICAgcGFyc2VEYXRlOiBzdHIgPT4gbmV3IERhdGUoc3RyKSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiREQvTU0vWVlZWVwiLFxuICAgIH07XG5cbiAgICBjb25zdCBEYXRlZmllbGQgPSAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVOYW1lID0gYGJwMy1pbnB1dCBicDMtaW50ZW50LSR7cHJvcHMuaW50ZW50fWBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyB3aWR0aDogMTAwLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIHRleHRBbGlnbjogXCJlbmRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAyIGNvbnRlbnQ9ezxzcGFuPlNlYXJjaCB7cHJvcHMubGFiZWx9PC9zcGFuPn0gcGxhY2VtZW50PVwibGVmdFwiIGludGVudD1cInByaW1hcnlcIiB1c2VQb3J0YWw9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbVRpdGxlfT57cHJvcHMubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXAyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnAzLWlucHV0LWdyb3VwIGJwMy1zbWFsbFwiIHN0eWxlPXt7IGJvcmRlckNvbG9yOiBcIndoaXRlXCIsIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmljb25MZWZ0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17cHJvcHMuaWNvbkxlZnR9IGljb25TaXplPXsxNH0gY2xhc3NOYW1lPVwibXgtMiBwdC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlSW5wdXQgey4uLmpzRGF0ZUZvcm1hdHRlcn0gZGVmYXVsdFZhbHVlPXtuZXcgRGF0ZSgpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmljb25SaWdodCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e3Byb3BzLmljb25SaWdodH0gaWNvblNpemU9ezE0fSBjbGFzc05hbWU9XCJteC0yIHB0LTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJlcXVpcmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnAzLWljb24gYnAzLW1pbmltYWwgYnAzLXNtYWxsIGJwMy1pY29uLWRvdCBicDMtaW50ZW50LWRhbmdlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17cHJvcHMuc3BhY2VyfSAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IFRleHRBcmVhZmllbGQgPSAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVOYW1lID0gYGJwMy1pbnB1dCBicDMtaW50ZW50LSR7cHJvcHMuaW50ZW50fWBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyB3aWR0aDogMTAwLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIHRleHRBbGlnbjogXCJlbmRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAyIGNvbnRlbnQ9ezxzcGFuPlNlYXJjaCB7cHJvcHMubGFiZWx9PC9zcGFuPn0gcGxhY2VtZW50PVwibGVmdFwiIGludGVudD1cInByaW1hcnlcIiB1c2VQb3J0YWw9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbVRpdGxlfT57cHJvcHMubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXAyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnAzLXNtYWxsXCIgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IFwid2hpdGVcIiwgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz17NjB9IGNsYXNzTmFtZT1cImJwMy1pbnB1dCAubW9kaWZpZXJcIiBkaXI9XCJhdXRvXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17cHJvcHMuc3BhY2VyfSAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTEyIGNvbC1sZy0xMiBwYi14bC0wIHBiLWxnLTQgcGItbWQtNCBwYi1zbS00IHBiLXhzLTRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0+XG4gICAgICAgICAgICA8Q2FyZCBpbnRlcmFjdGl2ZT17ZmFsc2V9IGVsZXZhdGlvbj17RWxldmF0aW9uLkZPVVJ9IGNsYXNzTmFtZT1cImNvbC1hdXRvIHctMTAwIGgtMTAwXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IC0xMCwgcGFkZGluZ0JvdHRvbTogMTAsIGJvcmRlcldpZHRoOiAyLCBib3JkZXJDb2xvcjogJ2JsYWNrJywgYm9yZGVyUmFkaXVzOiAxMCwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWJsYWNrIHRleHQtbGVmdCBweC00XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlF1b3RhdGlvbiAoTmV3IFJlY29yZCk8L3NwYW4+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKioqKiAgSGVhZGVyIEluZm9ybWF0aW9uICoqKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbkhlYWRlciB0aXRsZT1cIkhlYWRlciBJbmZvcm1hdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGljIGxhYmVsPVwiSldUOiBcIiB0ZXh0PXtwcm9wcy50b2tlbn0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlF1b3RhdGlvbiBOby5cIiBwbGFjZWhvbGRlcj1cIlwiIHNwYWNlcj17MzB9IGludGVudD1cIlwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJSZXZpc2lvbiBOby5cIiBwbGFjZWhvbGRlcj1cIlwiIHNwYWNlcj17MzB9IGludGVudD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiQ3VzdG9tZXIgQ29kZVwiIHNlYXJjaGxhYmVsPVwiQ3VzdG9tZXJcIiBwbGFjZWhvbGRlcj1cIlwiIHNwYWNlcj17MzB9IGFjdGlvbj1cImdvU2VhcmNoXCIgaW50ZW50PVwiXCIgZGVmYXVsdFZhbHVlPXtjdXN0b21lcn0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIkNhdGVnb3J5XCIgcGxhY2Vob2xkZXI9XCJcIiBzcGFjZXI9ezMwfSBpbnRlbnQ9XCJcIiBkZWZhdWx0VmFsdWU9e2NhdGVnb3J5fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJDdXN0b21lciBOYW1lXCIgcGxhY2Vob2xkZXI9XCJcIiBzcGFjZXI9ezMwfSBpbnRlbnQ9XCJcIiBkZWZhdWx0VmFsdWU9e2N1c3RvbWVybmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiTGV0dGVyaGVhZCBCeVwiIHNlYXJjaGxhYmVsPVwiTGV0dGVyaGVhZFwiIHBsYWNlaG9sZGVyPVwiXCIgc3BhY2VyPXszMH0gYWN0aW9uPVwiZ29TZWFyY2hMZXR0ZXJIZWFkXCIgaW50ZW50PVwiXCIgZGVmYXVsdFZhbHVlPXtsZXR0ZXJoZWFkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJQYXltZW50IENvZGVcIiBwbGFjZWhvbGRlcj1cIlwiIHNwYWNlcj17MzB9IGludGVudD1cIlwiIGRlZmF1bHRWYWx1ZT17cGF5Y29kZX0gdmFsaWRhdGU9XCJwYXljb2RlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiUGF5bWVudCBUZXJtc1wiIHBsYWNlaG9sZGVyPVwiXCIgc3BhY2VyPXszMH0gaW50ZW50PVwiXCIgZGVmYXVsdFZhbHVlPXtwYXlkZXNjfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJBdHRuXCIgcGxhY2Vob2xkZXI9XCJcIiBzcGFjZXI9ezMwfSBpbnRlbnQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVmaWVsZCBsYWJlbD1cIkRhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiSXNzdWVkIEJ5XCIgcGxhY2Vob2xkZXI9XCJcIiBzcGFjZXI9ezMwfSBpbnRlbnQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEFyZWFmaWVsZCBsYWJlbD1cIlJlbWFya3NcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlRyYWRlIFRlcm1zXCIgcGxhY2Vob2xkZXI9XCJcIiBzcGFjZXI9ezMwfSBpbnRlbnQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdWdnZXN0IGxhYmVsPVwiQ3VycmVuY3lcIiBzcGFjZXI9ezB9IGludGVudD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJFeGNoYW5nZSBSYXRlXCIgcGxhY2Vob2xkZXI9XCJcIiBzcGFjZXI9ezMwfSBpbnRlbnQ9XCJcIiBkZWZhdWx0VmFsdWU9e2V4Y2hhbmdlcmF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpYyBsYWJlbD1cIlRvdGFsIEFtb3VudFwiIHRleHQ9XCIwLjAwXCIgc3BhY2VyPXszMH0gaW50ZW50PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17MjB9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKioqKiAgRGV0YWlsIEluZm9ybWF0aW9uICoqKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uQnV0dG9ucyB0aXRsZT1cIkRldGFpbHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlciBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFHcmlkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17MjB9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICAgICAgaWNvbj1cImluZm8tc2lnblwiXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgdGl0bGU9XCJGdWxsIFNlYXJjaCBEaWFsb2dcIlxuICAgICAgICAgICAgICAgIHVzZVBvcnRhbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICB7Li4uZGlhbG9nT3B0aW9uc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q29yZUNsYXNzZXMuRElBTE9HX0JPRFl9PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0YSBpbnRlZ3JhdGlvbiBpcyB0aGUgc2VtaW5hbCBwcm9ibGVtIG9mIHRoZSBkaWdpdGFsIGFnZS4gRm9yIG92ZXIgdGVuIHllYXJzLCB3ZeKAmXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVkIHRoZSB3b3JsZOKAmXMgcHJlbWllciBvcmdhbml6YXRpb25zIHJpc2UgdG8gdGhlIGNoYWxsZW5nZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdyYXBpb3VzIE1hcmtldGluZyByYWRpY2FsbHkgcmVpbWFnaW5lcyB0aGUgd2F5IGVudGVycHJpc2VzIGludGVyYWN0IHdpdGggZGF0YSBieSBhbXBsaWZ5aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgZXh0ZW5kaW5nIHRoZSBwb3dlciBvZiBkYXRhIGludGVncmF0aW9uLiBXaXRoIEZvdW5kcnksIGFueW9uZSBjYW4gc291cmNlLCBmdXNlLCBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSBkYXRhIGludG8gYW55IHNoYXBlIHRoZXkgZGVzaXJlLiBCdXNpbmVzcyBhbmFseXN0cyBiZWNvbWUgZGF0YSBlbmdpbmVlcnMg4oCUIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhZGVycyBpbiB0aGVpciBvcmdhbml6YXRpb27igJlzIGRhdGEgcmV2b2x1dGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBGb3VuZHJ54oCZcyBiYWNrIGVuZCBpbmNsdWRlcyBhIHN1aXRlIG9mIGJlc3QtaW4tY2xhc3MgZGF0YSBpbnRlZ3JhdGlvbiBjYXBhYmlsaXRpZXM6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZlbmFuY2UsIGdpdC1zdHlsZSB2ZXJzaW9uaW5nIHNlbWFudGljcywgZ3JhbnVsYXIgYWNjZXNzIGNvbnRyb2xzLCBicmFuY2hpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbiBhdXRob3JpbmcsIGFuZCBtb3JlLiBCdXQgdGhlc2UgcG93ZXJzIGFyZSBub3QgbGltaXRlZCB0byB0aGUgYmFjay1lbmQgSVRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3AuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW4gRm91bmRyeSwgdGFibGVzLCBhcHBsaWNhdGlvbnMsIHJlcG9ydHMsIHByZXNlbnRhdGlvbnMsIGFuZCBzcHJlYWRzaGVldHMgb3BlcmF0ZSBhcyBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlZ3JhdGlvbnMgaW4gdGhlaXIgb3duIHJpZ2h0LiBBY2Nlc3MgY29udHJvbHMsIHRyYW5zZm9ybWF0aW9uIGxvZ2ljLCBhbmQgZGF0YSBxdWFsaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG93IGZyb20gb3JpZ2luYWwgZGF0YSBzb3VyY2UgdG8gaW50ZXJtZWRpYXRlIGFuYWx5c2lzIHRvIHByZXNlbnRhdGlvbiBpbiByZWFsIHRpbWUuIEV2ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQgcHJvZHVjdCBjcmVhdGVkIGluIEZvdW5kcnkgYmVjb21lcyBhIG5ldyBkYXRhIHNvdXJjZSB0aGF0IG90aGVyIHVzZXJzIGNhbiBidWlsZCB1cG9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgQW5kIHRoZSBlbnRlcnByaXNlIGRhdGEgZm91bmRhdGlvbiBnb2VzIHdoZXJlIHRoZSBidXNpbmVzcyBkcml2ZXMgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlN0YXJ0IHRoZSByZXZvbHV0aW9uLiBVbmxlYXNoIHRoZSBwb3dlciBvZiBkYXRhIGludGVncmF0aW9uIHdpdGggUGFsYW50aXIgRm91bmRyeS48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NvcmVDbGFzc2VzLkRJQUxPR19GT09URVJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q29yZUNsYXNzZXMuRElBTE9HX0ZPT1RFUl9BQ1RJT05TfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwMiBjb250ZW50PVwiVGhpcyBidXR0b24gaXMgaG9va2VkIHVwIHRvIGNsb3NlIHRoZSBkaWFsb2cuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Q2xvc2U8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5jaG9yQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZW50PXtJbnRlbnQuUFJJTUFSWX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cud3JhcGlvdXMuaGtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT25saW5lIEhlbHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FuY2hvckJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgICAgIDxUb2FzdGVyIHJlZj17cmVmSGFuZGxlcnMudG9hc3Rlcn0gcG9zaXRpb249e1Bvc2l0aW9uLlRPUH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsImV4cG9ydCBlbnVtIERpc3BsYXlNb2RlIHsgZGFzaGJvYXJkLCBxdW90YXRpb24sIHdpZGdldCwgdmVuZG9yIH1cbmV4cG9ydCBlbnVtIFBsYXlNb2RlIHsgZ2FsbGVyeSwgdmlkZW8sIGxpdmUgfSIsImltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcSkge1xyXG4gIHJldHVybiBjb29raWUucGFyc2UocmVxID8gcmVxLmhlYWRlcnMuY29va2llIHx8IFwiXCIgOiBkb2N1bWVudC5jb29raWUpXHJcbn0iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dClcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAnaW5oZXJpdCcgOiAnaGlkZGVuJyxcblxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsImltcG9ydCBCYXNlSGVhZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jhc2VIZWFkJ1xuaW1wb3J0IFRvcEJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RvcEJhcidcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9hdG9tL0FwcGxpY2F0aW9uU3RhdGUnXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCdcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpZGVNZW51J1xuaW1wb3J0IFZlbmRvck5ldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZlbmRvci9WZW5kb3JOZXcnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRGlzcGxheU1vZGUgfSBmcm9tICcuLi8uLi9jb3JlL0dsb2JhbCdcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkYXRhIH0pIHtcblxuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZShEaXNwbGF5TW9kZS52ZW5kb3IpXG4gIGNvbnN0IFthcHBsaWNhdGlvbiwgc2V0QXBwbGljYXRpb25dID0gdXNlUmVjb2lsU3RhdGUoQXBwbGljYXRpb25TdGF0ZSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHB4LTAgbS0wXCI+XG4gICAgICA8QmFzZUhlYWQgdGl0bGU9XCJWZW5kb3IgTmV3XCIgLz5cbiAgICAgIDxUb3BCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGQtZmxleCBmbGV4LWNvbHVtbiBwdC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPFNpZGVNZW51IHN3aXRjaD17c2V0TW9kZX0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAge21vZGUgPT09IERpc3BsYXlNb2RlLnZlbmRvciAmJiA8VmVuZG9yTmV3IHRva2VuPXtkYXRhLmp3dH0gLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBwYXJzZUNvb2tpZXMoY3R4LnJlcSlcblxuICBpZiAoY3R4LnJlcykge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDAgJiYgZGF0YS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDEsIHsgTG9jYXRpb246IFwiL1wiIH0pXG4gICAgICBjdHgucmVzLmVuZCgpXG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4ge1xuICAgIGRhdGE6IGRhdGEgJiYgZGF0YSxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJsdWVwcmludGpzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJsdWVwcmludGpzL2RhdGV0aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBibHVlcHJpbnRqcy9wb3BvdmVyMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmx1ZXByaW50anMvc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBibHVlcHJpbnRqcy90YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjb2lsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=