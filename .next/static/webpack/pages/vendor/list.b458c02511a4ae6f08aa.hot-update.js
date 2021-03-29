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
    setFilter("Company", value); // Update the Company filter. Now our table will filter and show only the rows which have a matching value

    setFilterInput(value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      value: filterInput,
      onChange: handleFilterChange,
      placeholder: "Search...",
      className: _Table_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.myinput
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), "\xA0\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: _Table_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.badge,
      href: "./new",
      children: "Add New"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 27
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
                lineNumber: 47,
                columnNumber: 29
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
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
                lineNumber: 60,
                columnNumber: 40
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, _this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92ZW5kb3IvVGFibGUudHN4Il0sIm5hbWVzIjpbIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJ1c2VTdGF0ZSIsImZpbHRlcklucHV0Iiwic2V0RmlsdGVySW5wdXQiLCJ1c2VUYWJsZSIsInVzZUZpbHRlcnMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsInNldEZpbHRlciIsImhhbmRsZUZpbHRlckNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInVuZGVmaW5lZCIsInN0eWxlcyIsIm15aW5wdXQiLCJiYWRnZSIsIm15dGFibGUiLCJtYXAiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJyZW5kZXIiLCJyb3ciLCJpIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxPQUFnQixRQUFoQkEsT0FBZ0I7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87O0FBQUEsa0JBRUxDLHNEQUFRLENBQUMsRUFBRCxDQUZIO0FBQUEsTUFFcENDLFdBRm9DO0FBQUEsTUFFdkJDLGNBRnVCOztBQUFBLGtCQVd2Q0MsNERBQVEsQ0FDUjtBQUNJTCxXQUFPLEVBQVBBLE9BREo7QUFFSUMsUUFBSSxFQUFKQTtBQUZKLEdBRFEsRUFLUkssc0RBTFEsQ0FLRztBQUxILEdBWCtCO0FBQUEsTUFLdkNDLGFBTHVDLGFBS3ZDQSxhQUx1QztBQUFBLE1BTXZDQyxpQkFOdUMsYUFNdkNBLGlCQU51QztBQUFBLE1BT3ZDQyxZQVB1QyxhQU92Q0EsWUFQdUM7QUFBQSxNQVF2Q0MsSUFSdUMsYUFRdkNBLElBUnVDO0FBQUEsTUFTdkNDLFVBVHVDLGFBU3ZDQSxVQVR1QztBQUFBLE1BVXZDQyxTQVZ1QyxhQVV2Q0EsU0FWdUMsRUFtQjNDOzs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLENBQUMsRUFBSTtBQUM1QixRQUFNQyxLQUFLLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxLQUFULElBQWtCRSxTQUFoQztBQUNBTCxhQUFTLENBQUMsU0FBRCxFQUFZRyxLQUFaLENBQVQsQ0FGNEIsQ0FFQzs7QUFDN0JYLGtCQUFjLENBQUNXLEtBQUQsQ0FBZDtBQUNILEdBSkQ7O0FBTUEsc0JBQ0k7QUFBQSw0QkFDQTtBQUNJLFdBQUssRUFBRVosV0FEWDtBQUVJLGNBQVEsRUFBRVUsa0JBRmQ7QUFHSSxpQkFBVyxFQUFFLFdBSGpCO0FBSUksZUFBUyxFQUFFSyx3REFBTSxDQUFDQztBQUp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsK0JBUWtCO0FBQUcsZUFBUyxFQUFFRCx3REFBTSxDQUFDRSxLQUFyQjtBQUE0QixVQUFJLEVBQUMsT0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSbEIsZUFVQTtBQUFPLGVBQVMsRUFBRUYsd0RBQU0sQ0FBQ0c7QUFBekIsT0FBc0NkLGFBQWEsRUFBbkQ7QUFBQSw4QkFDSTtBQUFBLGtCQUNLRSxZQUFZLENBQUNhLEdBQWIsQ0FBaUIsVUFBQUMsV0FBVztBQUFBLDhCQUN6QiwyR0FBUUEsV0FBVyxDQUFDQyxtQkFBWixFQUFSO0FBQUEsc0JBQ0tELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQkgsR0FBcEIsQ0FBd0IsVUFBQUksTUFBTTtBQUFBLGtDQUMzQiwyR0FBUUEsTUFBTSxDQUFDQyxjQUFQLEVBQVI7QUFBQSwwQkFDS0QsTUFBTSxDQUFDRSxNQUFQLENBQWMsUUFBZDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRDJCO0FBQUEsYUFBOUI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUR5QjtBQUFBLFNBQTVCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBWUksOEdBQVdwQixpQkFBaUIsRUFBNUI7QUFBQSxrQkFDS0UsSUFBSSxDQUFDWSxHQUFMLENBQVMsVUFBQ08sR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDbEJuQixvQkFBVSxDQUFDa0IsR0FBRCxDQUFWO0FBQ0EsOEJBQ0ksMkdBQVFBLEdBQUcsQ0FBQ0UsV0FBSixFQUFSO0FBQUEsc0JBQ0tGLEdBQUcsQ0FBQ0csS0FBSixDQUFVVixHQUFWLENBQWMsVUFBQVcsSUFBSSxFQUFJO0FBQ25CLGtDQUFPLDJHQUFRQSxJQUFJLENBQUNDLFlBQUwsRUFBUjtBQUFBLDBCQUNGRCxJQUFJLENBQUNMLE1BQUwsQ0FBWSxNQUFaO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUDtBQUdILGFBSkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBU0gsU0FYQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWQTtBQUFBLGtCQURKO0FBeUNIOztHQW5FdUI3QixLO1VBV2hCTSxvRDs7O0tBWGdCTixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlbmRvci9saXN0LmI0NThjMDI1MTFhNGFlNmYwOGFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlRmlsdGVycyB9IGZyb20gXCJyZWFjdC10YWJsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYmxlLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlKHtjb2x1bW5zLCBkYXRhfSkge1xuXG4gICAgY29uc3QgW2ZpbHRlcklucHV0LCBzZXRGaWx0ZXJJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgZ2V0VGFibGVQcm9wcyxcbiAgICAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgICAgIGhlYWRlckdyb3VwcyxcbiAgICAgICAgcm93cyxcbiAgICAgICAgcHJlcGFyZVJvdyxcbiAgICAgICAgc2V0RmlsdGVyIC8vIFRoZSB1c2VGaWx0ZXIgSG9vayBwcm92aWRlcyBhIHdheSB0byBzZXQgdGhlIGZpbHRlclxuICAgIH0gPSB1c2VUYWJsZShcbiAgICAgICAge1xuICAgICAgICAgICAgY29sdW1ucywgXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHVzZUZpbHRlcnMgLy8gQWRkaW5nIHRoZSB1c2VGaWx0ZXJzIEhvb2sgdG8gdGhlIHRhYmxlXG4gICAgKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgd2hlbiBpbnB1dCBjaGFuZ2VzXG4gICAgY29uc3QgaGFuZGxlRmlsdGVyQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkO1xuICAgICAgICBzZXRGaWx0ZXIoXCJDb21wYW55XCIsIHZhbHVlKTsgLy8gVXBkYXRlIHRoZSBDb21wYW55IGZpbHRlci4gTm93IG91ciB0YWJsZSB3aWxsIGZpbHRlciBhbmQgc2hvdyBvbmx5IHRoZSByb3dzIHdoaWNoIGhhdmUgYSBtYXRjaGluZyB2YWx1ZVxuICAgICAgICBzZXRGaWx0ZXJJbnB1dCh2YWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e2ZpbHRlcklucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbHRlckNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlYXJjaC4uLlwifVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubXlpbnB1dH1cbiAgICAgICAgLz5cblxuICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDs8YSBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0gaHJlZj1cIi4vbmV3XCI+QWRkIE5ldzwvYT5cblxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubXl0YWJsZX0gey4uLmdldFRhYmxlUHJvcHMoKX0+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoXCJIZWFkZXJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgICAgICAgICAge3Jvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGwucmVuZGVyKFwiQ2VsbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvPlxuICAgIClcblxufSJdLCJzb3VyY2VSb290IjoiIn0=