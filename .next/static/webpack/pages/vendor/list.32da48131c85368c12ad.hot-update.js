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
    var value = e.target.value || undefined; //setFilter("Company", value); // Update the Company filter. Now our table will filter and show only the rows which have a matching value

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92ZW5kb3IvVGFibGUudHN4Il0sIm5hbWVzIjpbIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJ1c2VTdGF0ZSIsImZpbHRlcklucHV0Iiwic2V0RmlsdGVySW5wdXQiLCJ1c2VUYWJsZSIsInVzZUZpbHRlcnMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsInNldEZpbHRlciIsImhhbmRsZUZpbHRlckNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInVuZGVmaW5lZCIsInN0eWxlcyIsIm15aW5wdXQiLCJteXRhYmxlIiwibWFwIiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImNvbHVtbiIsImdldEhlYWRlclByb3BzIiwicmVuZGVyIiwicm93IiwiaSIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQkMsT0FBZ0IsUUFBaEJBLE9BQWdCO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUFBLGtCQUVMQyxzREFBUSxDQUFDLEVBQUQsQ0FGSDtBQUFBLE1BRXBDQyxXQUZvQztBQUFBLE1BRXZCQyxjQUZ1Qjs7QUFBQSxrQkFXdkNDLDREQUFRLENBQ1I7QUFDSUwsV0FBTyxFQUFQQSxPQURKO0FBRUlDLFFBQUksRUFBSkE7QUFGSixHQURRLEVBS1JLLHNEQUxRLENBS0c7QUFMSCxHQVgrQjtBQUFBLE1BS3ZDQyxhQUx1QyxhQUt2Q0EsYUFMdUM7QUFBQSxNQU12Q0MsaUJBTnVDLGFBTXZDQSxpQkFOdUM7QUFBQSxNQU92Q0MsWUFQdUMsYUFPdkNBLFlBUHVDO0FBQUEsTUFRdkNDLElBUnVDLGFBUXZDQSxJQVJ1QztBQUFBLE1BU3ZDQyxVQVR1QyxhQVN2Q0EsVUFUdUM7QUFBQSxNQVV2Q0MsU0FWdUMsYUFVdkNBLFNBVnVDLEVBbUIzQzs7O0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxDQUFDLEVBQUk7QUFDNUIsUUFBTUMsS0FBSyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsS0FBVCxJQUFrQkUsU0FBaEMsQ0FENEIsQ0FFNUI7O0FBQ0FiLGtCQUFjLENBQUNXLEtBQUQsQ0FBZDtBQUNILEdBSkQ7O0FBTUEsc0JBQ0k7QUFBQSw0QkFDQTtBQUNJLFdBQUssRUFBRVosV0FEWDtBQUVJLGNBQVEsRUFBRVUsa0JBRmQ7QUFHSSxpQkFBVyxFQUFFLFdBSGpCO0FBSUksZUFBUyxFQUFFSyx3REFBTSxDQUFDQztBQUp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFRQTtBQUFPLGVBQVMsRUFBRUQsd0RBQU0sQ0FBQ0U7QUFBekIsT0FBc0NiLGFBQWEsRUFBbkQ7QUFBQSw4QkFDSTtBQUFBLGtCQUNLRSxZQUFZLENBQUNZLEdBQWIsQ0FBaUIsVUFBQUMsV0FBVztBQUFBLDhCQUN6QiwyR0FBUUEsV0FBVyxDQUFDQyxtQkFBWixFQUFSO0FBQUEsc0JBQ0tELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQkgsR0FBcEIsQ0FBd0IsVUFBQUksTUFBTTtBQUFBLGtDQUMzQiwyR0FBUUEsTUFBTSxDQUFDQyxjQUFQLEVBQVI7QUFBQSwwQkFDS0QsTUFBTSxDQUFDRSxNQUFQLENBQWMsUUFBZDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRDJCO0FBQUEsYUFBOUI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUR5QjtBQUFBLFNBQTVCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBWUksOEdBQVduQixpQkFBaUIsRUFBNUI7QUFBQSxrQkFDS0UsSUFBSSxDQUFDVyxHQUFMLENBQVMsVUFBQ08sR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDbEJsQixvQkFBVSxDQUFDaUIsR0FBRCxDQUFWO0FBQ0EsOEJBQ0ksMkdBQVFBLEdBQUcsQ0FBQ0UsV0FBSixFQUFSO0FBQUEsc0JBQ0tGLEdBQUcsQ0FBQ0csS0FBSixDQUFVVixHQUFWLENBQWMsVUFBQVcsSUFBSSxFQUFJO0FBQ25CLGtDQUFPLDJHQUFRQSxJQUFJLENBQUNDLFlBQUwsRUFBUjtBQUFBLDBCQUNGRCxJQUFJLENBQUNMLE1BQUwsQ0FBWSxNQUFaO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUDtBQUdILGFBSkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBU0gsU0FYQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSQTtBQUFBLGtCQURKO0FBdUNIOztHQWpFdUI1QixLO1VBV2hCTSxvRDs7O0tBWGdCTixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlbmRvci9saXN0LjMyZGE0ODEzMWM4NTM2OGMxMmFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlRmlsdGVycyB9IGZyb20gXCJyZWFjdC10YWJsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYmxlLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlKHtjb2x1bW5zLCBkYXRhfSkge1xuXG4gICAgY29uc3QgW2ZpbHRlcklucHV0LCBzZXRGaWx0ZXJJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgZ2V0VGFibGVQcm9wcyxcbiAgICAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgICAgIGhlYWRlckdyb3VwcyxcbiAgICAgICAgcm93cyxcbiAgICAgICAgcHJlcGFyZVJvdyxcbiAgICAgICAgc2V0RmlsdGVyIC8vIFRoZSB1c2VGaWx0ZXIgSG9vayBwcm92aWRlcyBhIHdheSB0byBzZXQgdGhlIGZpbHRlclxuICAgIH0gPSB1c2VUYWJsZShcbiAgICAgICAge1xuICAgICAgICAgICAgY29sdW1ucywgXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHVzZUZpbHRlcnMgLy8gQWRkaW5nIHRoZSB1c2VGaWx0ZXJzIEhvb2sgdG8gdGhlIHRhYmxlXG4gICAgKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgd2hlbiBpbnB1dCBjaGFuZ2VzXG4gICAgY29uc3QgaGFuZGxlRmlsdGVyQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkO1xuICAgICAgICAvL3NldEZpbHRlcihcIkNvbXBhbnlcIiwgdmFsdWUpOyAvLyBVcGRhdGUgdGhlIENvbXBhbnkgZmlsdGVyLiBOb3cgb3VyIHRhYmxlIHdpbGwgZmlsdGVyIGFuZCBzaG93IG9ubHkgdGhlIHJvd3Mgd2hpY2ggaGF2ZSBhIG1hdGNoaW5nIHZhbHVlXG4gICAgICAgIHNldEZpbHRlcklucHV0KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17ZmlsdGVySW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsdGVyQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiU2VhcmNoLi4uXCJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5teWlucHV0fVxuICAgICAgICAvPlxuXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5teXRhYmxlfSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcihcIkhlYWRlclwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cbiAgICAgICAgICAgICAgICB7cm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcmVwYXJlUm93KHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoXCJDZWxsXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC8+XG4gICAgKVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==