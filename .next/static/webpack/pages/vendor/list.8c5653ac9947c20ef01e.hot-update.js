webpackHotUpdate_N_E("pages/vendor/list",{

/***/ "./components/vendor/Table.module.css":
/*!********************************************!*\
  !*** ./components/vendor/Table.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Table.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/vendor/Table.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Table.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/vendor/Table.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Table.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/vendor/Table.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/vendor/Table.tsx":
/*!*************************************!*\
  !*** ./components/vendor/Table.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Table_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Table.module.css */ "./components/vendor/Table.module.css");
/* harmony import */ var _Table_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Table_module_css__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "D:\\ReactJS\\new-sioi\\components\\vendor\\Table.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Table(_ref) {
  _s();

  var _this = this;

  var columns = _ref.columns,
      data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      filterInput = _useState[0],
      setFilterInput = _useState[1];

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_3__["useTable"])({
    columns: columns,
    data: data
  }, react_table__WEBPACK_IMPORTED_MODULE_3__["useFilters"] // Adding the useFilters Hook to the table
  ),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow,
      setFilter = _useTable.setFilter; // Update the state when input changes


  var handleFilterChange = function handleFilterChange(e) {
    var value = e.target.value || undefined;
    setFilter("show.name", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value

    setFilterInput(value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      value: filterInput,
      onChange: handleFilterChange,
      placeholder: "Search name",
      className: _Table_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.myinput
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", _objectSpread(_objectSpread({
      className: _Table_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mytable
    }, getTableProps()), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: headerGroups.map(function (headerGroup) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
            children: headerGroup.headers.map(function (column) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
                children: column.render("Header")
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 29
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        children: rows.map(function (row, i) {
          prepareRow(row);
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            children: row.cells.map(function (cell) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                children: cell.render("Cell")
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 40
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Table, "4EZgat5DkfZ8eq9oNu5yzxtlYbI=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_3__["useTable"]];
});

_c = Table;

var _c;

$RefreshReg$(_c, "Table");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/vendor/Table.module.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/vendor/Table.module.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Table Component */\r\n\r\n.Table_mytable__K1VqT {\r\n    border-spacing: 0;\r\n    border: 1px solid #ededed;\r\n  }\r\n  .Table_mytable__K1VqT tr:last-child td {\r\n    border-bottom: 0;\r\n  }\r\n  .Table_mytable__K1VqT th,\r\n  .Table_mytable__K1VqT td {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid #ededed;\r\n    border-right: 1px solid #ededed;\r\n    position: relative;\r\n  }\r\n  .Table_mytable__K1VqT th:last-child,\r\n  .Table_mytable__K1VqT td:last-child {\r\n    border-right: 0;\r\n  }\r\n  .Table_mytable__K1VqT tr:nth-child(even) {\r\n    background-color: #fafafa;\r\n  }\r\n  \r\n  .Table_mytable__K1VqT th::before {\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 16px;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n  }\r\n  .Table_mytable__K1VqT th.Table_sort-asc__ZCkwv::before {\r\n    border-bottom: 5px solid #22543d;\r\n  }\r\n  .Table_mytable__K1VqT th.Table_sort-desc__397rc::before {\r\n    border-top: 5px solid #22543d;\r\n  }\r\n  \r\n.Table_badge__2_fYL {\r\n    background-color: #9ae6b4;\r\n    color: #22543d;\r\n    margin-right: 4px;\r\n    padding: 4px 8px;\r\n    border-radius: 12px;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n.Table_myinput__14o_y {\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: none;\r\n}", "",{"version":3,"sources":["webpack://components/vendor/Table.module.css"],"names":[],"mappings":"AAAA,oBAAoB;;AAEpB;IACI,iBAAiB;IACjB,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;;IAEE,SAAS;IACT,eAAe;IACf,gCAAgC;IAChC,+BAA+B;IAC/B,kBAAkB;EACpB;EACA;;IAEE,eAAe;EACjB;EACA;IACE,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,WAAW;IACX,QAAQ;IACR,SAAS;IACT,kCAAkC;IAClC,mCAAmC;EACrC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,6BAA6B;EAC/B;;AAEF;IACI,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;AACpB","sourcesContent":["/* Table Component */\r\n\r\n.mytable {\r\n    border-spacing: 0;\r\n    border: 1px solid #ededed;\r\n  }\r\n  .mytable tr:last-child td {\r\n    border-bottom: 0;\r\n  }\r\n  .mytable th,\r\n  .mytable td {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid #ededed;\r\n    border-right: 1px solid #ededed;\r\n    position: relative;\r\n  }\r\n  .mytable th:last-child,\r\n  .mytable td:last-child {\r\n    border-right: 0;\r\n  }\r\n  .mytable tr:nth-child(even) {\r\n    background-color: #fafafa;\r\n  }\r\n  \r\n  .mytable th::before {\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 16px;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n  }\r\n  .mytable th.sort-asc::before {\r\n    border-bottom: 5px solid #22543d;\r\n  }\r\n  .mytable th.sort-desc::before {\r\n    border-top: 5px solid #22543d;\r\n  }\r\n  \r\n.badge {\r\n    background-color: #9ae6b4;\r\n    color: #22543d;\r\n    margin-right: 4px;\r\n    padding: 4px 8px;\r\n    border-radius: 12px;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n.myinput {\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: none;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mytable": "Table_mytable__K1VqT",
	"sort-asc": "Table_sort-asc__ZCkwv",
	"sort-desc": "Table_sort-desc__397rc",
	"badge": "Table_badge__2_fYL",
	"myinput": "Table_myinput__14o_y"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92ZW5kb3IvVGFibGUubW9kdWxlLmNzcz8wZTBiIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZlbmRvci9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdmVuZG9yL1RhYmxlLm1vZHVsZS5jc3MiXSwibmFtZXMiOlsiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsInVzZVN0YXRlIiwiZmlsdGVySW5wdXQiLCJzZXRGaWx0ZXJJbnB1dCIsInVzZVRhYmxlIiwidXNlRmlsdGVycyIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93Iiwic2V0RmlsdGVyIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidW5kZWZpbmVkIiwic3R5bGVzIiwibXlpbnB1dCIsIm15dGFibGUiLCJtYXAiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJyZW5kZXIiLCJyb3ciLCJpIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsMlNBQWdLOztBQUVsTTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QWEsaUVBQWlFLDBCQUEwQixrQ0FBa0MsT0FBTyxpQ0FBaUMseUJBQXlCLE9BQU8scUNBQXFDLGtCQUFrQix3QkFBd0IseUNBQXlDLHdDQUF3QywyQkFBMkIsT0FBTywyREFBMkQsd0JBQXdCLE9BQU8sbUNBQW1DLGtDQUFrQyxPQUFPLGlDQUFpQywyQkFBMkIsb0JBQW9CLGtCQUFrQixzQkFBc0IsaUJBQWlCLGtCQUFrQiwyQ0FBMkMsNENBQTRDLE9BQU8sb0NBQW9DLHlDQUF5QyxPQUFPLHFDQUFxQyxzQ0FBc0MsT0FBTyxrQkFBa0Isa0NBQWtDLHVCQUF1QiwwQkFBMEIseUJBQXlCLDRCQUE0Qix3QkFBd0IsMEJBQTBCLGtDQUFrQyxLQUFLLGNBQWMsc0JBQXNCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLCtCQUErQix5QkFBeUIsS0FBSyxtQkFBbUI7QUFDbmlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92ZW5kb3IvbGlzdC44YzU2NTNhYzk5NDdjMjBlZjAxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL1RhYmxlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vVGFibGUubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9UYWJsZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VGaWx0ZXJzIH0gZnJvbSBcInJlYWN0LXRhYmxlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFibGUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGUoe2NvbHVtbnMsIGRhdGF9KSB7XG5cbiAgICBjb25zdCBbZmlsdGVySW5wdXQsIHNldEZpbHRlcklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBnZXRUYWJsZVByb3BzLFxuICAgICAgICBnZXRUYWJsZUJvZHlQcm9wcyxcbiAgICAgICAgaGVhZGVyR3JvdXBzLFxuICAgICAgICByb3dzLFxuICAgICAgICBwcmVwYXJlUm93LFxuICAgICAgICBzZXRGaWx0ZXIgLy8gVGhlIHVzZUZpbHRlciBIb29rIHByb3ZpZGVzIGEgd2F5IHRvIHNldCB0aGUgZmlsdGVyXG4gICAgfSA9IHVzZVRhYmxlKFxuICAgICAgICB7XG4gICAgICAgICAgICBjb2x1bW5zLCBcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgdXNlRmlsdGVycyAvLyBBZGRpbmcgdGhlIHVzZUZpbHRlcnMgSG9vayB0byB0aGUgdGFibGVcbiAgICApO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aGVuIGlucHV0IGNoYW5nZXNcbiAgICBjb25zdCBoYW5kbGVGaWx0ZXJDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIHNldEZpbHRlcihcInNob3cubmFtZVwiLCB2YWx1ZSk7IC8vIFVwZGF0ZSB0aGUgc2hvdy5uYW1lIGZpbHRlci4gTm93IG91ciB0YWJsZSB3aWxsIGZpbHRlciBhbmQgc2hvdyBvbmx5IHRoZSByb3dzIHdoaWNoIGhhdmUgYSBtYXRjaGluZyB2YWx1ZVxuICAgICAgICBzZXRGaWx0ZXJJbnB1dCh2YWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e2ZpbHRlcklucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbHRlckNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlYXJjaCBuYW1lXCJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5teWlucHV0fVxuICAgICAgICAvPlxuXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5teXRhYmxlfSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcihcIkhlYWRlclwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cbiAgICAgICAgICAgICAgICB7cm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcmVwYXJlUm93KHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoXCJDZWxsXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC8+XG4gICAgKVxuXG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGFibGUgQ29tcG9uZW50ICovXFxyXFxuXFxyXFxuLlRhYmxlX215dGFibGVfX0sxVnFUIHtcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XFxyXFxuICB9XFxyXFxuICAuVGFibGVfbXl0YWJsZV9fSzFWcVQgdHI6bGFzdC1jaGlsZCB0ZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxyXFxuICB9XFxyXFxuICAuVGFibGVfbXl0YWJsZV9fSzFWcVQgdGgsXFxyXFxuICAuVGFibGVfbXl0YWJsZV9fSzFWcVQgdGQge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZGVkZWQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG4gIC5UYWJsZV9teXRhYmxlX19LMVZxVCB0aDpsYXN0LWNoaWxkLFxcclxcbiAgLlRhYmxlX215dGFibGVfX0sxVnFUIHRkOmxhc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDA7XFxyXFxuICB9XFxyXFxuICAuVGFibGVfbXl0YWJsZV9fSzFWcVQgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLlRhYmxlX215dGFibGVfX0sxVnFUIHRoOjpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxNXB4O1xcclxcbiAgICB0b3A6IDE2cHg7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG4gIC5UYWJsZV9teXRhYmxlX19LMVZxVCB0aC5UYWJsZV9zb3J0LWFzY19fWkNrd3Y6OmJlZm9yZSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMjI1NDNkO1xcclxcbiAgfVxcclxcbiAgLlRhYmxlX215dGFibGVfX0sxVnFUIHRoLlRhYmxlX3NvcnQtZGVzY19fMzk3cmM6OmJlZm9yZSB7XFxyXFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMjI1NDNkO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuLlRhYmxlX2JhZGdlX18yX2ZZTCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YWU2YjQ7XFxyXFxuICAgIGNvbG9yOiAjMjI1NDNkO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXHJcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuLlRhYmxlX215aW5wdXRfXzE0b195IHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL3ZlbmRvci9UYWJsZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9CQUFvQjs7QUFFcEI7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTs7SUFFRSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0Isa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUYWJsZSBDb21wb25lbnQgKi9cXHJcXG5cXHJcXG4ubXl0YWJsZSB7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xcclxcbiAgfVxcclxcbiAgLm15dGFibGUgdHI6bGFzdC1jaGlsZCB0ZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxyXFxuICB9XFxyXFxuICAubXl0YWJsZSB0aCxcXHJcXG4gIC5teXRhYmxlIHRkIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWRlZGVkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICAubXl0YWJsZSB0aDpsYXN0LWNoaWxkLFxcclxcbiAgLm15dGFibGUgdGQ6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMDtcXHJcXG4gIH1cXHJcXG4gIC5teXRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5teXRhYmxlIHRoOjpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxNXB4O1xcclxcbiAgICB0b3A6IDE2cHg7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG4gIC5teXRhYmxlIHRoLnNvcnQtYXNjOjpiZWZvcmUge1xcclxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzIyNTQzZDtcXHJcXG4gIH1cXHJcXG4gIC5teXRhYmxlIHRoLnNvcnQtZGVzYzo6YmVmb3JlIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMyMjU0M2Q7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4uYmFkZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFlNmI0O1xcclxcbiAgICBjb2xvcjogIzIyNTQzZDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcbi5teWlucHV0IHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm15dGFibGVcIjogXCJUYWJsZV9teXRhYmxlX19LMVZxVFwiLFxuXHRcInNvcnQtYXNjXCI6IFwiVGFibGVfc29ydC1hc2NfX1pDa3d2XCIsXG5cdFwic29ydC1kZXNjXCI6IFwiVGFibGVfc29ydC1kZXNjX18zOTdyY1wiLFxuXHRcImJhZGdlXCI6IFwiVGFibGVfYmFkZ2VfXzJfZllMXCIsXG5cdFwibXlpbnB1dFwiOiBcIlRhYmxlX215aW5wdXRfXzE0b195XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==