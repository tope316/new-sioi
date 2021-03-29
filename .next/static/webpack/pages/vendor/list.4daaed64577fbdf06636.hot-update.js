webpackHotUpdate_N_E("pages/vendor/list",{

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
      placeholder: "Search name"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", _objectSpread(_objectSpread({
      className: "mytable"
    }, getTableProps()), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: headerGroups.map(function (headerGroup) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
            children: headerGroup.headers.map(function (column) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
                children: column.render("Header")
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 29
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
                lineNumber: 56,
                columnNumber: 40
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/vendor/Vendor.module.css":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/vendor/Vendor.module.css ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Vendor_title__mhSRJ {\n    color: grey;\n    vertical-align: text-bottom;\n    font-size: 16pt;\n    font-weight: bold;\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n    padding-bottom: 10px;\n}\n\n.Vendor_sectionHeader__1qeFM {\n    color:dimgrey;\n    vertical-align: text-bottom;\n    font-size: 12pt;\n    font-weight: bold;\n    font-family:Arial, Helvetica, sans-serif;\n}    \n\n.Vendor_itemTitle__KNwfB {\n    color: black;\n    vertical-align: text-bottom;\n    font-size: 10pt;\n    font-family:sans-serif;\n}\n\n.Vendor_itemInfo__2YZD1 {\n    color: black;\n    vertical-align: text-bottom;\n    font-size: 10pt;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n\n.Vendor_hr__P3fr5 {\n    width: 100%;\n    border-top: 2px dotted silver;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n\n\n  /* Table Component */\n\n  .Vendor_mytable__-y0Kd {\n    border-spacing: 0;\n    border: 1px solid #ededed;\n  }\n  .Vendor_mytable__-y0Kd tr:last-child td {\n    border-bottom: 0;\n  }\n  .Vendor_mytable__-y0Kd th,\n  .Vendor_mytable__-y0Kd td {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid #ededed;\n    border-right: 1px solid #ededed;\n    position: relative;\n  }\n  .Vendor_mytable__-y0Kd th:last-child,\n  .Vendor_mytable__-y0Kd td:last-child {\n    border-right: 0;\n  }\n  .Vendor_mytable__-y0Kd tr:nth-child(even) {\n    background-color: #fafafa;\n  }\n  \n  .Vendor_mytable__-y0Kd th::before {\n    position: absolute;\n    right: 15px;\n    top: 16px;\n    content: \"\";\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n  }\n  .Vendor_mytable__-y0Kd th.Vendor_sort-asc__1eN5r::before {\n    border-bottom: 5px solid #22543d;\n  }\n  .Vendor_mytable__-y0Kd th.Vendor_sort-desc__1g81U::before {\n    border-top: 5px solid #22543d;\n  }\n  \n.Vendor_badge__2y9FV {\n    background-color: #9ae6b4;\n    color: #22543d;\n    margin-right: 4px;\n    padding: 4px 8px;\n    border-radius: 12px;\n    font-size: 12px;\n    font-weight: bold;\n    text-transform: uppercase;\n}\n.Vendor_myinput__1RHOL {\n    padding: 10px;\n    margin-bottom: 20px;\n    font-size: 18px;\n    border-radius: 5px;\n    border: 1px solid #ddd;\n    box-shadow: none;\n}\n  ", "",{"version":3,"sources":["webpack://components/vendor/Vendor.module.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,2BAA2B;IAC3B,eAAe;IACf,iBAAiB;IACjB,+CAA+C;IAC/C,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,eAAe;IACf,iBAAiB;IACjB,wCAAwC;AAC5C;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,eAAe;IACf,sEAAsE;AAC1E;;;AAGA;IACI,WAAW;IACX,6BAA6B;IAC7B,eAAe;IACf,kBAAkB;EACpB;;;EAGA,oBAAoB;;EAEpB;IACE,iBAAiB;IACjB,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;;IAEE,SAAS;IACT,eAAe;IACf,gCAAgC;IAChC,+BAA+B;IAC/B,kBAAkB;EACpB;EACA;;IAEE,eAAe;EACjB;EACA;IACE,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,WAAW;IACX,QAAQ;IACR,SAAS;IACT,kCAAkC;IAClC,mCAAmC;EACrC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,6BAA6B;EAC/B;;AAEF;IACI,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;AACpB","sourcesContent":[".title {\n    color: grey;\n    vertical-align: text-bottom;\n    font-size: 16pt;\n    font-weight: bold;\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n    padding-bottom: 10px;\n}\n\n.sectionHeader {\n    color:dimgrey;\n    vertical-align: text-bottom;\n    font-size: 12pt;\n    font-weight: bold;\n    font-family:Arial, Helvetica, sans-serif;\n}    \n\n.itemTitle {\n    color: black;\n    vertical-align: text-bottom;\n    font-size: 10pt;\n    font-family:sans-serif;\n}\n\n.itemInfo {\n    color: black;\n    vertical-align: text-bottom;\n    font-size: 10pt;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n\n.hr {\n    width: 100%;\n    border-top: 2px dotted silver;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n\n\n  /* Table Component */\n\n  .mytable {\n    border-spacing: 0;\n    border: 1px solid #ededed;\n  }\n  .mytable tr:last-child td {\n    border-bottom: 0;\n  }\n  .mytable th,\n  .mytable td {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid #ededed;\n    border-right: 1px solid #ededed;\n    position: relative;\n  }\n  .mytable th:last-child,\n  .mytable td:last-child {\n    border-right: 0;\n  }\n  .mytable tr:nth-child(even) {\n    background-color: #fafafa;\n  }\n  \n  .mytable th::before {\n    position: absolute;\n    right: 15px;\n    top: 16px;\n    content: \"\";\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n  }\n  .mytable th.sort-asc::before {\n    border-bottom: 5px solid #22543d;\n  }\n  .mytable th.sort-desc::before {\n    border-top: 5px solid #22543d;\n  }\n  \n.badge {\n    background-color: #9ae6b4;\n    color: #22543d;\n    margin-right: 4px;\n    padding: 4px 8px;\n    border-radius: 12px;\n    font-size: 12px;\n    font-weight: bold;\n    text-transform: uppercase;\n}\n.myinput {\n    padding: 10px;\n    margin-bottom: 20px;\n    font-size: 18px;\n    border-radius: 5px;\n    border: 1px solid #ddd;\n    box-shadow: none;\n}\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"title": "Vendor_title__mhSRJ",
	"sectionHeader": "Vendor_sectionHeader__1qeFM",
	"itemTitle": "Vendor_itemTitle__KNwfB",
	"itemInfo": "Vendor_itemInfo__2YZD1",
	"hr": "Vendor_hr__P3fr5",
	"mytable": "Vendor_mytable__-y0Kd",
	"sort-asc": "Vendor_sort-asc__1eN5r",
	"sort-desc": "Vendor_sort-desc__1g81U",
	"badge": "Vendor_badge__2y9FV",
	"myinput": "Vendor_myinput__1RHOL"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92ZW5kb3IvVGFibGUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZlbmRvci9WZW5kb3IubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwidXNlU3RhdGUiLCJmaWx0ZXJJbnB1dCIsInNldEZpbHRlcklucHV0IiwidXNlVGFibGUiLCJ1c2VGaWx0ZXJzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJzZXRGaWx0ZXIiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJtYXAiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJyZW5kZXIiLCJyb3ciLCJpIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULE9BQWdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBaEJDLE9BQWdCLFFBQWhCQSxPQUFnQjtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxFQUFELENBRkg7QUFBQSxNQUVwQ0MsV0FGb0M7QUFBQSxNQUV2QkMsY0FGdUI7O0FBQUEsa0JBV3ZDQyw0REFBUSxDQUNSO0FBQ0lMLFdBQU8sRUFBUEEsT0FESjtBQUVJQyxRQUFJLEVBQUpBO0FBRkosR0FEUSxFQUtSSyxzREFMUSxDQUtHO0FBTEgsR0FYK0I7QUFBQSxNQUt2Q0MsYUFMdUMsYUFLdkNBLGFBTHVDO0FBQUEsTUFNdkNDLGlCQU51QyxhQU12Q0EsaUJBTnVDO0FBQUEsTUFPdkNDLFlB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QUFnQyxLQUFLLCtCQUErQix1QkFBdUIsS0FBSyxpQ0FBaUMsZ0JBQWdCLHNCQUFzQix1Q0FBdUMsc0NBQXNDLHlCQUF5QixLQUFLLHVEQUF1RCxzQkFBc0IsS0FBSyxpQ0FBaUMsZ0NBQWdDLEtBQUssNkJBQTZCLHlCQUF5QixrQkFBa0IsZ0JBQWdCLG9CQUFvQixlQUFlLGdCQUFnQix5Q0FBeUMsMENBQTBDLEtBQUssa0NBQWtDLHVDQUF1QyxLQUFLLG1DQUFtQyxvQ0FBb0MsS0FBSyxjQUFjLGdDQUFnQyxxQkFBcUIsd0JBQXdCLHVCQUF1QiwwQkFBMEIsc0JBQXNCLHdCQUF3QixnQ0FBZ0MsR0FBRyxZQUFZLG9CQUFvQiwwQkFBMEIsc0JBQXNCLHlCQUF5Qiw2QkFBNkIsdUJBQXVCLEdBQUcsdUJBQXVCO0FBQzF2SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlbmRvci9saXN0LjRkYWFlZDY0NTc3ZmJkZjA2NjM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlRmlsdGVycyB9IGZyb20gXCJyZWFjdC10YWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZSh7Y29sdW1ucywgZGF0YX0pIHtcblxuICAgIGNvbnN0IFtmaWx0ZXJJbnB1dCwgc2V0RmlsdGVySW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIGdldFRhYmxlUHJvcHMsXG4gICAgICAgIGdldFRhYmxlQm9keVByb3BzLFxuICAgICAgICBoZWFkZXJHcm91cHMsXG4gICAgICAgIHJvd3MsXG4gICAgICAgIHByZXBhcmVSb3csXG4gICAgICAgIHNldEZpbHRlciAvLyBUaGUgdXNlRmlsdGVyIEhvb2sgcHJvdmlkZXMgYSB3YXkgdG8gc2V0IHRoZSBmaWx0ZXJcbiAgICB9ID0gdXNlVGFibGUoXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbHVtbnMsIFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9LFxuICAgICAgICB1c2VGaWx0ZXJzIC8vIEFkZGluZyB0aGUgdXNlRmlsdGVycyBIb29rIHRvIHRoZSB0YWJsZVxuICAgICk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdoZW4gaW5wdXQgY2hhbmdlc1xuICAgIGNvbnN0IGhhbmRsZUZpbHRlckNoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgc2V0RmlsdGVyKFwic2hvdy5uYW1lXCIsIHZhbHVlKTsgLy8gVXBkYXRlIHRoZSBzaG93Lm5hbWUgZmlsdGVyLiBOb3cgb3VyIHRhYmxlIHdpbGwgZmlsdGVyIGFuZCBzaG93IG9ubHkgdGhlIHJvd3Mgd2hpY2ggaGF2ZSBhIG1hdGNoaW5nIHZhbHVlXG4gICAgICAgIHNldEZpbHRlcklucHV0KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17ZmlsdGVySW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsdGVyQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiU2VhcmNoIG5hbWVcIn1cbiAgICAgICAgLz5cblxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibXl0YWJsZVwiIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKFwiSGVhZGVyXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuICAgICAgICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcihcIkNlbGxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8Lz5cbiAgICApXG5cbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuVmVuZG9yX3RpdGxlX19taFNSSiB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxuICAgIGZvbnQtc2l6ZTogMTZwdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLlZlbmRvcl9zZWN0aW9uSGVhZGVyX18xcWVGTSB7XFxuICAgIGNvbG9yOmRpbWdyZXk7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG4gICAgZm9udC1zaXplOiAxMnB0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59ICAgIFxcblxcbi5WZW5kb3JfaXRlbVRpdGxlX19LTndmQiB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbiAgICBmb250LXNpemU6IDEwcHQ7XFxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxufVxcblxcbi5WZW5kb3JfaXRlbUluZm9fXzJZWkQxIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxuICAgIGZvbnQtc2l6ZTogMTBwdDtcXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXG59XFxuXFxuXFxuLlZlbmRvcl9ocl9fUDNmcjUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IGRvdHRlZCBzaWx2ZXI7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgfVxcblxcblxcbiAgLyogVGFibGUgQ29tcG9uZW50ICovXFxuXFxuICAuVmVuZG9yX215dGFibGVfXy15MEtkIHtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XFxuICB9XFxuICAuVmVuZG9yX215dGFibGVfXy15MEtkIHRyOmxhc3QtY2hpbGQgdGQge1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgfVxcbiAgLlZlbmRvcl9teXRhYmxlX18teTBLZCB0aCxcXG4gIC5WZW5kb3JfbXl0YWJsZV9fLXkwS2QgdGQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZGVkZWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIC5WZW5kb3JfbXl0YWJsZV9fLXkwS2QgdGg6bGFzdC1jaGlsZCxcXG4gIC5WZW5kb3JfbXl0YWJsZV9fLXkwS2QgdGQ6bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1yaWdodDogMDtcXG4gIH1cXG4gIC5WZW5kb3JfbXl0YWJsZV9fLXkwS2QgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIH1cXG4gIFxcbiAgLlZlbmRvcl9teXRhYmxlX18teTBLZCB0aDo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTVweDtcXG4gICAgdG9wOiAxNnB4O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB9XFxuICAuVmVuZG9yX215dGFibGVfXy15MEtkIHRoLlZlbmRvcl9zb3J0LWFzY19fMWVONXI6OmJlZm9yZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMjI1NDNkO1xcbiAgfVxcbiAgLlZlbmRvcl9teXRhYmxlX18teTBLZCB0aC5WZW5kb3Jfc29ydC1kZXNjX18xZzgxVTo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMyMjU0M2Q7XFxuICB9XFxuICBcXG4uVmVuZG9yX2JhZGdlX18yeTlGViB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YWU2YjQ7XFxuICAgIGNvbG9yOiAjMjI1NDNkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLlZlbmRvcl9teWlucHV0X18xUkhPTCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL3ZlbmRvci9WZW5kb3IubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwrQ0FBK0M7SUFDL0Msb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHNFQUFzRTtBQUMxRTs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7OztFQUdBLG9CQUFvQjs7RUFFcEI7SUFDRSxpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTs7SUFFRSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0Isa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGl0bGUge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbiAgICBmb250LXNpemU6IDE2cHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zZWN0aW9uSGVhZGVyIHtcXG4gICAgY29sb3I6ZGltZ3JleTtcXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbiAgICBmb250LXNpemU6IDEycHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn0gICAgXFxuXFxuLml0ZW1UaXRsZSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbiAgICBmb250LXNpemU6IDEwcHQ7XFxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxufVxcblxcbi5pdGVtSW5mbyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbiAgICBmb250LXNpemU6IDEwcHQ7XFxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxufVxcblxcblxcbi5ociB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItdG9wOiAycHggZG90dGVkIHNpbHZlcjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICB9XFxuXFxuXFxuICAvKiBUYWJsZSBDb21wb25lbnQgKi9cXG5cXG4gIC5teXRhYmxlIHtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XFxuICB9XFxuICAubXl0YWJsZSB0cjpsYXN0LWNoaWxkIHRkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIH1cXG4gIC5teXRhYmxlIHRoLFxcbiAgLm15dGFibGUgdGQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZGVkZWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIC5teXRhYmxlIHRoOmxhc3QtY2hpbGQsXFxuICAubXl0YWJsZSB0ZDpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xcbiAgfVxcbiAgLm15dGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIH1cXG4gIFxcbiAgLm15dGFibGUgdGg6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIHRvcDogMTZweDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgLm15dGFibGUgdGguc29ydC1hc2M6OmJlZm9yZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMjI1NDNkO1xcbiAgfVxcbiAgLm15dGFibGUgdGguc29ydC1kZXNjOjpiZWZvcmUge1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzIyNTQzZDtcXG4gIH1cXG4gIFxcbi5iYWRnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YWU2YjQ7XFxuICAgIGNvbG9yOiAjMjI1NDNkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLm15aW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0aXRsZVwiOiBcIlZlbmRvcl90aXRsZV9fbWhTUkpcIixcblx0XCJzZWN0aW9uSGVhZGVyXCI6IFwiVmVuZG9yX3NlY3Rpb25IZWFkZXJfXzFxZUZNXCIsXG5cdFwiaXRlbVRpdGxlXCI6IFwiVmVuZG9yX2l0ZW1UaXRsZV9fS053ZkJcIixcblx0XCJpdGVtSW5mb1wiOiBcIlZlbmRvcl9pdGVtSW5mb19fMllaRDFcIixcblx0XCJoclwiOiBcIlZlbmRvcl9ocl9fUDNmcjVcIixcblx0XCJteXRhYmxlXCI6IFwiVmVuZG9yX215dGFibGVfXy15MEtkXCIsXG5cdFwic29ydC1hc2NcIjogXCJWZW5kb3Jfc29ydC1hc2NfXzFlTjVyXCIsXG5cdFwic29ydC1kZXNjXCI6IFwiVmVuZG9yX3NvcnQtZGVzY19fMWc4MVVcIixcblx0XCJiYWRnZVwiOiBcIlZlbmRvcl9iYWRnZV9fMnk5RlZcIixcblx0XCJteWlucHV0XCI6IFwiVmVuZG9yX215aW5wdXRfXzFSSE9MXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==