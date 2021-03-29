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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92ZW5kb3IvVGFibGUudHN4Il0sIm5hbWVzIjpbIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJ1c2VTdGF0ZSIsImZpbHRlcklucHV0Iiwic2V0RmlsdGVySW5wdXQiLCJ1c2VUYWJsZSIsInVzZUZpbHRlcnMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsInNldEZpbHRlciIsImhhbmRsZUZpbHRlckNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInVuZGVmaW5lZCIsInN0eWxlcyIsIm15aW5wdXQiLCJteXRhYmxlIiwibWFwIiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImNvbHVtbiIsImdldEhlYWRlclByb3BzIiwicmVuZGVyIiwicm93IiwiaSIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQkMsT0FBZ0IsUUFBaEJBLE9BQWdCO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUFBLGtCQUVMQyxzREFBUSxDQUFDLEVBQUQsQ0FGSDtBQUFBLE1BRXBDQyxXQUZvQztBQUFBLE1BRXZCQyxjQUZ1Qjs7QUFBQSxrQkFXdkNDLDREQUFRLENBQ1I7QUFDSUwsV0FBTyxFQUFQQSxPQURKO0FBRUlDLFFBQUksRUFBSkE7QUFGSixHQURRLEVBS1JLLHNEQUxRLENBS0c7QUFMSCxHQVgrQjtBQUFBLE1BS3ZDQyxhQUx1QyxhQUt2Q0EsYUFMdUM7QUFBQSxNQU12Q0MsaUJBTnVDLGFBTXZDQSxpQkFOdUM7QUFBQSxNQU92Q0MsWUFQdUMsYUFPdkNBLFlBUHVDO0FBQUEsTUFRdkNDLElBUnVDLGFBUXZDQSxJQVJ1QztBQUFBLE1BU3ZDQyxVQVR1QyxhQVN2Q0EsVUFUdUM7QUFBQSxNQVV2Q0MsU0FWdUMsYUFVdkNBLFNBVnVDLEVBbUIzQzs7O0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxDQUFDLEVBQUk7QUFDNUIsUUFBTUMsS0FBSyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsS0FBVCxJQUFrQkUsU0FBaEM7QUFDQUwsYUFBUyxDQUFDLFNBQUQsRUFBWUcsS0FBWixDQUFULENBRjRCLENBRUM7O0FBQzdCWCxrQkFBYyxDQUFDVyxLQUFELENBQWQ7QUFDSCxHQUpEOztBQU1BLHNCQUNJO0FBQUEsNEJBQ0E7QUFDSSxXQUFLLEVBQUVaLFdBRFg7QUFFSSxjQUFRLEVBQUVVLGtCQUZkO0FBR0ksaUJBQVcsRUFBRSxXQUhqQjtBQUlJLGVBQVMsRUFBRUssd0RBQU0sQ0FBQ0M7QUFKdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBUUE7QUFBTyxlQUFTLEVBQUVELHdEQUFNLENBQUNFO0FBQXpCLE9BQXNDYixhQUFhLEVBQW5EO0FBQUEsOEJBQ0k7QUFBQSxrQkFDS0UsWUFBWSxDQUFDWSxHQUFiLENBQWlCLFVBQUFDLFdBQVc7QUFBQSw4QkFDekIsMkdBQVFBLFdBQVcsQ0FBQ0MsbUJBQVosRUFBUjtBQUFBLHNCQUNLRCxXQUFXLENBQUNFLE9BQVosQ0FBb0JILEdBQXBCLENBQXdCLFVBQUFJLE1BQU07QUFBQSxrQ0FDM0IsMkdBQVFBLE1BQU0sQ0FBQ0MsY0FBUCxFQUFSO0FBQUEsMEJBQ0tELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFFBQWQ7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQyQjtBQUFBLGFBQTlCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEeUI7QUFBQSxTQUE1QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVlJLDhHQUFXbkIsaUJBQWlCLEVBQTVCO0FBQUEsa0JBQ0tFLElBQUksQ0FBQ1csR0FBTCxDQUFTLFVBQUNPLEdBQUQsRUFBTUMsQ0FBTixFQUFZO0FBQ2xCbEIsb0JBQVUsQ0FBQ2lCLEdBQUQsQ0FBVjtBQUNBLDhCQUNJLDJHQUFRQSxHQUFHLENBQUNFLFdBQUosRUFBUjtBQUFBLHNCQUNLRixHQUFHLENBQUNHLEtBQUosQ0FBVVYsR0FBVixDQUFjLFVBQUFXLElBQUksRUFBSTtBQUNuQixrQ0FBTywyR0FBUUEsSUFBSSxDQUFDQyxZQUFMLEVBQVI7QUFBQSwwQkFDRkQsSUFBSSxDQUFDTCxNQUFMLENBQVksTUFBWjtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVA7QUFHSCxhQUpBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQVNILFNBWEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkE7QUFBQSxrQkFESjtBQXVDSDs7R0FqRXVCNUIsSztVQVdoQk0sb0Q7OztLQVhnQk4sSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92ZW5kb3IvbGlzdC5lNjY4MTJkZDc2YjEwMDY0MGU4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGFibGUsIHVzZUZpbHRlcnMgfSBmcm9tIFwicmVhY3QtdGFibGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UYWJsZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZSh7Y29sdW1ucywgZGF0YX0pIHtcblxuICAgIGNvbnN0IFtmaWx0ZXJJbnB1dCwgc2V0RmlsdGVySW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIGdldFRhYmxlUHJvcHMsXG4gICAgICAgIGdldFRhYmxlQm9keVByb3BzLFxuICAgICAgICBoZWFkZXJHcm91cHMsXG4gICAgICAgIHJvd3MsXG4gICAgICAgIHByZXBhcmVSb3csXG4gICAgICAgIHNldEZpbHRlciAvLyBUaGUgdXNlRmlsdGVyIEhvb2sgcHJvdmlkZXMgYSB3YXkgdG8gc2V0IHRoZSBmaWx0ZXJcbiAgICB9ID0gdXNlVGFibGUoXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbHVtbnMsIFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9LFxuICAgICAgICB1c2VGaWx0ZXJzIC8vIEFkZGluZyB0aGUgdXNlRmlsdGVycyBIb29rIHRvIHRoZSB0YWJsZVxuICAgICk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdoZW4gaW5wdXQgY2hhbmdlc1xuICAgIGNvbnN0IGhhbmRsZUZpbHRlckNoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgc2V0RmlsdGVyKFwiQ29tcGFueVwiLCB2YWx1ZSk7IC8vIFVwZGF0ZSB0aGUgQ29tcGFueSBmaWx0ZXIuIE5vdyBvdXIgdGFibGUgd2lsbCBmaWx0ZXIgYW5kIHNob3cgb25seSB0aGUgcm93cyB3aGljaCBoYXZlIGEgbWF0Y2hpbmcgdmFsdWVcbiAgICAgICAgc2V0RmlsdGVySW5wdXQodmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXJJbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJTZWFyY2guLi5cIn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm15aW5wdXR9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLm15dGFibGV9IHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKFwiSGVhZGVyXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuICAgICAgICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcihcIkNlbGxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8Lz5cbiAgICApXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9