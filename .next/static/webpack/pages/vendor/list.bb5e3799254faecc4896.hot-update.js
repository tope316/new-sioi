webpackHotUpdate_N_E("pages/vendor/list",{

/***/ "./components/vendor/list.tsx":
/*!************************************!*\
  !*** ./components/vendor/list.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableList; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Vendor_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Vendor.module.css */ "./components/vendor/Vendor.module.css");
/* harmony import */ var _Vendor_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Vendor_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Table */ "./components/vendor/Table.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "D:\\ReactJS\\new-sioi\\components\\vendor\\list.tsx",
    _s = $RefreshSig$();






function TableList(props) {
  _s();

  var _this = this;

  var Spacer = function Spacer(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        height: props.height
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this);
  };

  var Static = function Static(props) {
    var styleName = "bp3-input bp3-intent-".concat(props.intent);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "",
        style: {
          width: 100,
          backgroundColor: 'transparent',
          textAlign: "end"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.itemTitle,
          children: props.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
          children: props.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Spacer, {
        height: props.spacer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];
  /* 
      - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
      - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */


  var columns = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return [{
      Header: "Company Code",
      accessor: "Company_Code"
    }, {
      Header: "Company",
      accessor: "Company"
    }, {
      Header: "Phone",
      accessor: "Phone"
    }, {
      Header: "Remarks",
      accessor: "Remarks"
    }, {
      Header: "Contact",
      accessor: "Contact"
    }, {
      Header: "Email Address",
      accessor: "email"
    }, {
      Header: "Actions",
      accessor: "id",
      Cell: function Cell(_ref) {
        var value = _ref.cell.value;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.badge,
            href: "api/edit/id/".concat(value),
            children: "Edit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.badge,
            href: "api/view/id/".concat(value),
            children: "View"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 21
          }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.badge,
            href: "api/delete/id/".concat(value),
            children: "Delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 21
          }, _this)]
        }, void 0, true);
      }
    }];
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var options, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = {
                headers: {
                  'Authorization': 'Bearer ' + "".concat(props.token)
                }
              }; //const result = await axios('https://api.tvmaze.com/search/shows?q=snow')
              //setData(result.data);

              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://localhost:3000/api/v1/vendor/queryAll', options);

            case 3:
              result = _context.sent;
              console.log(result.data.data);
              setData(result.data.data);
              /*await fetch('http://localhost:3000/api/v1/vendor/queryAll', {
                  method: 'GET',
                  headers: { 
                      'Accept': 'application/json', 
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + `${props.token}`
                  },
                }).then(function (a) {
                  return a.json(); // call the json method on the response to get JSON
                })
                .then(function (json) {
                    console.log(json)
                    //setData(json.data);
                })*/

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "col-xl-12 col-lg-12 pb-xl-0 pb-lg-4 pb-md-4 pb-sm-4 pb-xs-4",
    style: {
      backgroundColor: 'transparent'
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      interactive: false,
      elevation: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Elevation"].FOUR,
      className: "col-auto w-100 h-100",
      style: {
        paddingLeft: -10,
        paddingBottom: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: "white"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "row px-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "col text-black text-left px-4",
          style: {
            backgroundColor: 'transparent'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
              children: "Vendor Master Screen"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Spacer, {
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
            columns: columns,
            data: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Spacer, {
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 9
  }, this);
}

_s(TableList, "iRi1d7f8s6L0fzuL/BnsscKCsSA=");

_c = TableList;

var _c;

$RefreshReg$(_c, "TableList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92ZW5kb3IvbGlzdC50c3giXSwibmFtZXMiOlsiVGFibGVMaXN0IiwicHJvcHMiLCJTcGFjZXIiLCJoZWlnaHQiLCJTdGF0aWMiLCJzdHlsZU5hbWUiLCJpbnRlbnQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInN0eWxlcyIsIml0ZW1UaXRsZSIsImxhYmVsIiwiaXRlbUluZm8iLCJ0ZXh0Iiwic3BhY2VyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImNvbHVtbnMiLCJ1c2VNZW1vIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJDZWxsIiwidmFsdWUiLCJjZWxsIiwiYmFkZ2UiLCJ1c2VFZmZlY3QiLCJvcHRpb25zIiwiaGVhZGVycyIsInRva2VuIiwiYXhpb3MiLCJnZXQiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiRWxldmF0aW9uIiwiRk9VUiIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ0JvdHRvbSIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQUE7O0FBRXJDLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNELEtBQUQsRUFBVztBQUN0Qix3QkFDSTtBQUFLLFdBQUssRUFBRTtBQUFFRSxjQUFNLEVBQUVGLEtBQUssQ0FBQ0U7QUFBaEI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFHSCxHQUpEOztBQU1BLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNILEtBQUQsRUFBVztBQUN0QixRQUFNSSxTQUFTLGtDQUEyQkosS0FBSyxDQUFDSyxNQUFqQyxDQUFmO0FBQ0Esd0JBQ0k7QUFBSyxl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RUFBRXhCLE9BQWhCO0FBQXlCLGdCQUFJLEVBQUVGO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSSxxRUFBQyxNQUFEO0FBQVEsa0JBQU0sRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0JIOztHQXBIdUJqQixTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlbmRvci9saXN0LmJiNWUzNzk5MjU0ZmFlY2M0ODk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBFbGV2YXRpb24sIENsYXNzZXMgYXMgQ29yZUNsYXNzZXMgfSBmcm9tIFwiQGJsdWVwcmludGpzL2NvcmVcIlxuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ZlbmRvci5tb2R1bGUuY3NzJ1xuaW1wb3J0IFRhYmxlIGZyb20gXCIuL1RhYmxlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlTGlzdChwcm9wcykge1xuXG4gICAgY29uc3QgU3BhY2VyID0gKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogcHJvcHMuaGVpZ2h0IH19IC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBTdGF0aWMgPSAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVOYW1lID0gYGJwMy1pbnB1dCBicDMtaW50ZW50LSR7cHJvcHMuaW50ZW50fWBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyB3aWR0aDogMTAwLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIHRleHRBbGlnbjogXCJlbmRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbVRpdGxlfT57cHJvcHMubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1JbmZvfT57cHJvcHMudGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNwYWNlciBoZWlnaHQ9e3Byb3BzLnNwYWNlcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgLyogXG4gICAgICAgIC0gQ29sdW1ucyBpcyBhIHNpbXBsZSBhcnJheSByaWdodCBub3csIGJ1dCBpdCB3aWxsIGNvbnRhaW4gc29tZSBsb2dpYyBsYXRlciBvbi4gSXQgaXMgcmVjb21tZW5kZWQgYnkgcmVhY3QtdGFibGUgdG8gbWVtb2l6ZSB0aGUgY29sdW1ucyBkYXRhXG4gICAgICAgIC0gSGVyZSBpbiB0aGlzIGV4YW1wbGUsIHdlIGhhdmUgZ3JvdXBlZCBvdXIgY29sdW1ucyBpbnRvIHR3byBoZWFkZXJzLiByZWFjdC10YWJsZSBpcyBmbGV4aWJsZSBlbm91Z2ggdG8gY3JlYXRlIGdyb3VwZWQgdGFibGUgaGVhZGVyc1xuICAgICovXG4gICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IFtcbiAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkNvbXBhbnkgQ29kZVwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiQ29tcGFueV9Db2RlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcIkNvbXBhbnlcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiUGhvbmVcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcIlBob25lXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlJlbWFya3NcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcIlJlbWFya3NcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiQ29udGFjdFwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiQ29udGFjdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJFbWFpbCBBZGRyZXNzXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJlbWFpbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJpZFwiLFxuICAgICAgICAgICAgQ2VsbDogKHsgY2VsbDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0gaHJlZj17YGFwaS9lZGl0L2lkLyR7dmFsdWV9YH0+RWRpdDwvYT4mbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9IGhyZWY9e2BhcGkvdmlldy9pZC8ke3ZhbHVlfWB9PlZpZXc8L2E+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfSBocmVmPXtgYXBpL2RlbGV0ZS9pZC8ke3ZhbHVlfWB9PkRlbGV0ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFtdXG4gICAgKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGAke3Byb3BzLnRva2VufWB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPXNub3cnKVxuICAgICAgICAgICAgLy9zZXREYXRhKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS92ZW5kb3IvcXVlcnlBbGwnLCBvcHRpb25zKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEuZGF0YSlcbiAgICAgICAgICAgIHNldERhdGEocmVzdWx0LmRhdGEuZGF0YSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvdmVuZG9yL3F1ZXJ5QWxsJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYCR7cHJvcHMudG9rZW59YFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5qc29uKCk7IC8vIGNhbGwgdGhlIGpzb24gbWV0aG9kIG9uIHRoZSByZXNwb25zZSB0byBnZXQgSlNPTlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coanNvbilcbiAgICAgICAgICAgICAgICAgIC8vc2V0RGF0YShqc29uLmRhdGEpO1xuICAgICAgICAgICAgICB9KSovXG4gICAgICAgIH0pKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMTIgY29sLWxnLTEyIHBiLXhsLTAgcGItbGctNCBwYi1tZC00IHBiLXNtLTQgcGIteHMtNFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyB9fT5cbiAgICAgICAgICAgIDxDYXJkIGludGVyYWN0aXZlPXtmYWxzZX0gZWxldmF0aW9uPXtFbGV2YXRpb24uRk9VUn0gY2xhc3NOYW1lPVwiY29sLWF1dG8gdy0xMDAgaC0xMDBcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogLTEwLCBwYWRkaW5nQm90dG9tOiAxMCwgYm9yZGVyV2lkdGg6IDIsIGJvcmRlckNvbG9yOiAnYmxhY2snLCBib3JkZXJSYWRpdXM6IDEwLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtYmxhY2sgdGV4dC1sZWZ0IHB4LTRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VmVuZG9yIE1hc3RlciBTY3JlZW48L3NwYW4+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlciBoZWlnaHQ9ezIwfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==