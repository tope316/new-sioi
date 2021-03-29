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
  }; // Custom component to render Genres 


  var Genres = function Genres(_ref) {
    var values = _ref.values;
    // Loop through the array and create a badge-like component instead of a comma-separated string
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: values.map(function (genre, idx) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.badge,
          children: genre
        }, idx, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false);
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
      Header: "Name",
      accessor: "show.name"
    }, {
      Header: "Type",
      accessor: "show.type"
    }, {
      Header: "Language",
      accessor: "show.language"
    }, {
      Header: "Genre(s)",
      accessor: "show.genres",
      // Cell method will provide the cell value; we pass it to render a custom component
      Cell: function Cell(_ref2) {
        var value = _ref2.cell.value;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Genres, {
          values: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 44
        }, _this);
      }
    }, {
      Header: "Runtime",
      accessor: "show.runtime",
      // Cell method will provide the value of the cell; we can create a custom element for the Cell        
      Cell: function Cell(_ref3) {
        var value = _ref3.cell.value;
        var hour = Math.floor(value / 60);
        var min = Math.floor(value % 60);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
          children: [hour > 0 ? "".concat(hour, " hr").concat(hour > 1 ? "s" : "", " ") : "", min > 0 ? "".concat(min, " min").concat(min > 1 ? "s" : "") : ""]
        }, void 0, true);
      }
    }, {
      Header: "Status",
      accessor: "show.status"
    }, {
      Header: "Actions",
      accessor: "show.id",
      Cell: function Cell(_ref4) {
        var value = _ref4.cell.value;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.badge,
            href: "api/edit/id/".concat(value),
            children: "Edit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 17
          }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.badge,
            href: "api/view/id/".concat(value),
            children: "View"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 17
          }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: _Vendor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.badge,
            href: "api/delete/id/".concat(value),
            children: "Delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 17
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
              console.log(result.data.data); //setData(result.data);

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

            case 5:
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
              lineNumber: 141,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Spacer, {
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
            columns: columns,
            data: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Spacer, {
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 137,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92ZW5kb3IvbGlzdC50c3giXSwibmFtZXMiOlsiVGFibGVMaXN0IiwicHJvcHMiLCJTcGFjZXIiLCJoZWlnaHQiLCJTdGF0aWMiLCJzdHlsZU5hbWUiLCJpbnRlbnQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInN0eWxlcyIsIml0ZW1UaXRsZSIsImxhYmVsIiwiaXRlbUluZm8iLCJ0ZXh0Iiwic3BhY2VyIiwiR2VucmVzIiwidmFsdWVzIiwibWFwIiwiZ2VucmUiLCJpZHgiLCJiYWRnZSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkhlYWRlciIsImFjY2Vzc29yIiwiQ2VsbCIsInZhbHVlIiwiY2VsbCIsImhvdXIiLCJNYXRoIiwiZmxvb3IiLCJtaW4iLCJ1c2VFZmZlY3QiLCJvcHRpb25zIiwiaGVhZGVycyIsInRva2VuIiwiYXhpb3MiLCJnZXQiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiRWxldmF0aW9uIiwiRk9VUiIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ0JvdHRvbSIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQUE7O0FBRXJDLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNELEtBQUQsRUFBVztBQUN0Qix3QkFDSTtBQUFLLFdBQUssRUFBRTtBQUFFRSxjQUFNLEVBQUVGLEtBQUssQ0FBQ0U7QUFBaEI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFHSCxHQUpEOztBQU1BLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNILEtBQUQsRUFB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RUFBRUY7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJLHFFQUFDLE1BQUQ7QUFBUSxrQkFBTSxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0dBakp1QnZCLFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVuZG9yL2xpc3QuYTIyM2IxZTdjNjFlNmVmNGUxODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsIEVsZXZhdGlvbiwgQ2xhc3NlcyBhcyBDb3JlQ2xhc3NlcyB9IGZyb20gXCJAYmx1ZXByaW50anMvY29yZVwiXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVmVuZG9yLm1vZHVsZS5jc3MnXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4vVGFibGVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVMaXN0KHByb3BzKSB7XG5cbiAgICBjb25zdCBTcGFjZXIgPSAocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5oZWlnaHQgfX0gLz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IFN0YXRpYyA9IChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZU5hbWUgPSBgYnAzLWlucHV0IGJwMy1pbnRlbnQtJHtwcm9wcy5pbnRlbnR9YFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IHdpZHRoOiAxMDAsIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgdGV4dEFsaWduOiBcImVuZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtVGl0bGV9Pntwcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUluZm99Pntwcm9wcy50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17cHJvcHMuc3BhY2VyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyBDdXN0b20gY29tcG9uZW50IHRvIHJlbmRlciBHZW5yZXMgXG4gICAgY29uc3QgR2VucmVzID0gKHsgdmFsdWVzIH0pID0+IHtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBhcnJheSBhbmQgY3JlYXRlIGEgYmFkZ2UtbGlrZSBjb21wb25lbnQgaW5zdGVhZCBvZiBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmdcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHt2YWx1ZXMubWFwKChnZW5yZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aWR4fSBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0+XG4gICAgICAgICAgICAgICAge2dlbnJlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIC8qIFxuICAgICAgICAtIENvbHVtbnMgaXMgYSBzaW1wbGUgYXJyYXkgcmlnaHQgbm93LCBidXQgaXQgd2lsbCBjb250YWluIHNvbWUgbG9naWMgbGF0ZXIgb24uIEl0IGlzIHJlY29tbWVuZGVkIGJ5IHJlYWN0LXRhYmxlIHRvIG1lbW9pemUgdGhlIGNvbHVtbnMgZGF0YVxuICAgICAgICAtIEhlcmUgaW4gdGhpcyBleGFtcGxlLCB3ZSBoYXZlIGdyb3VwZWQgb3VyIGNvbHVtbnMgaW50byB0d28gaGVhZGVycy4gcmVhY3QtdGFibGUgaXMgZmxleGlibGUgZW5vdWdoIHRvIGNyZWF0ZSBncm91cGVkIHRhYmxlIGhlYWRlcnNcbiAgICAqL1xuICAgIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJOYW1lXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJzaG93Lm5hbWVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiVHlwZVwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwic2hvdy50eXBlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkxhbmd1YWdlXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJzaG93Lmxhbmd1YWdlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkdlbnJlKHMpXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJzaG93LmdlbnJlc1wiLFxuICAgICAgICAgICAgLy8gQ2VsbCBtZXRob2Qgd2lsbCBwcm92aWRlIHRoZSBjZWxsIHZhbHVlOyB3ZSBwYXNzIGl0IHRvIHJlbmRlciBhIGN1c3RvbSBjb21wb25lbnRcbiAgICAgICAgICAgIENlbGw6ICh7IGNlbGw6IHsgdmFsdWUgfSB9KSA9PiA8R2VucmVzIHZhbHVlcz17dmFsdWV9IC8+XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJSdW50aW1lXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJzaG93LnJ1bnRpbWVcIixcbiAgICAgICAgICAgIC8vIENlbGwgbWV0aG9kIHdpbGwgcHJvdmlkZSB0aGUgdmFsdWUgb2YgdGhlIGNlbGw7IHdlIGNhbiBjcmVhdGUgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhlIENlbGwgICAgICAgIFxuICAgICAgICAgICAgQ2VsbDogKHsgY2VsbDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBNYXRoLmZsb29yKHZhbHVlIC8gNjApO1xuICAgICAgICAgICAgY29uc3QgbWluID0gTWF0aC5mbG9vcih2YWx1ZSAlIDYwKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7aG91ciA+IDAgPyBgJHtob3VyfSBociR7aG91ciA+IDEgPyBcInNcIiA6IFwiXCJ9IGAgOiBcIlwifVxuICAgICAgICAgICAgICAgIHttaW4gPiAwID8gYCR7bWlufSBtaW4ke21pbiA+IDEgPyBcInNcIiA6IFwiXCJ9YCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiU3RhdHVzXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJzaG93LnN0YXR1c1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJzaG93LmlkXCIsXG4gICAgICAgICAgICBDZWxsOiAoeyBjZWxsOiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfSBocmVmPXtgYXBpL2VkaXQvaWQvJHt2YWx1ZX1gfT5FZGl0PC9hPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfSBocmVmPXtgYXBpL3ZpZXcvaWQvJHt2YWx1ZX1gfT5WaWV3PC9hPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfSBocmVmPXtgYXBpL2RlbGV0ZS9pZC8ke3ZhbHVlfWB9PkRlbGV0ZTwvYT5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBbXVxuICAgICk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBgJHtwcm9wcy50b2tlbn1gfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcygnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1zbm93JylcbiAgICAgICAgICAgIC8vc2V0RGF0YShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvdmVuZG9yL3F1ZXJ5QWxsJywgb3B0aW9ucylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhLmRhdGEpXG4gICAgICAgICAgICAvL3NldERhdGEocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKmF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3ZlbmRvci9xdWVyeUFsbCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsIFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGAke3Byb3BzLnRva2VufWBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuanNvbigpOyAvLyBjYWxsIHRoZSBqc29uIG1ldGhvZCBvbiB0aGUgcmVzcG9uc2UgdG8gZ2V0IEpTT05cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pXG4gICAgICAgICAgICAgICAgICAvL3NldERhdGEoanNvbi5kYXRhKTtcbiAgICAgICAgICAgICAgfSkqL1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTEyIGNvbC1sZy0xMiBwYi14bC0wIHBiLWxnLTQgcGItbWQtNCBwYi1zbS00IHBiLXhzLTRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0+XG4gICAgICAgICAgICA8Q2FyZCBpbnRlcmFjdGl2ZT17ZmFsc2V9IGVsZXZhdGlvbj17RWxldmF0aW9uLkZPVVJ9IGNsYXNzTmFtZT1cImNvbC1hdXRvIHctMTAwIGgtMTAwXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IC0xMCwgcGFkZGluZ0JvdHRvbTogMTAsIGJvcmRlcldpZHRoOiAyLCBib3JkZXJDb2xvcjogJ2JsYWNrJywgYm9yZGVyUmFkaXVzOiAxMCwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWJsYWNrIHRleHQtbGVmdCBweC00XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlZlbmRvciBNYXN0ZXIgU2NyZWVuPC9zcGFuPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsyMH0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=