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
              setData(result.data);
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
              lineNumber: 139,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Spacer, {
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
            columns: columns,
            data: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Spacer, {
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 135,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92ZW5kb3IvbGlzdC50c3giXSwibmFtZXMiOlsiVGFibGVMaXN0IiwicHJvcHMiLCJTcGFjZXIiLCJoZWlnaHQiLCJTdGF0aWMiLCJzdHlsZU5hbWUiLCJpbnRlbnQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInN0eWxlcyIsIml0ZW1UaXRsZSIsImxhYmVsIiwiaXRlbUluZm8iLCJ0ZXh0Iiwic3BhY2VyIiwiR2VucmVzIiwidmFsdWVzIiwibWFwIiwiZ2VucmUiLCJpZHgiLCJiYWRnZSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkhlYWRlciIsImFjY2Vzc29yIiwiQ2VsbCIsInZhbHVlIiwiY2VsbCIsImhvdXIiLCJNYXRoIiwiZmxvb3IiLCJtaW4iLCJ1c2VFZmZlY3QiLCJvcHRpb25zIiwiaGVhZGVycyIsInRva2VuIiwiYXhpb3MiLCJnZXQiLCJyZXN1bHQiLCJFbGV2YXRpb24iLCJGT1VSIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFBQTs7QUFFckMsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0QsS0FBRCxFQUFXO0FBQ3RCLHdCQUNJO0FBQUssV0FBSyxFQUFFO0FBQUVFLGNBQU0sRUFBRUYsS0FBSyxDQUFDRTtBQUFoQjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUdILEdBSkQ7O0FBTUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0gsS0FBRCxFQUFXO0FBQ3RCLFFBQU1JLFNB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cUVBQUMsTUFBRDtBQUFRLGtCQUFNLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSDs7R0EvSXVCdkIsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92ZW5kb3IvbGlzdC43ZGVlYmFjYzQ3ZDMwYzhiYzQ0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgRWxldmF0aW9uLCBDbGFzc2VzIGFzIENvcmVDbGFzc2VzIH0gZnJvbSBcIkBibHVlcHJpbnRqcy9jb3JlXCJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9WZW5kb3IubW9kdWxlLmNzcydcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9UYWJsZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZUxpc3QocHJvcHMpIHtcblxuICAgIGNvbnN0IFNwYWNlciA9IChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLmhlaWdodCB9fSAvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgU3RhdGljID0gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlTmFtZSA9IGBicDMtaW5wdXQgYnAzLWludGVudC0ke3Byb3BzLmludGVudH1gXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgd2lkdGg6IDEwMCwgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLCB0ZXh0QWxpZ246IFwiZW5kXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1UaXRsZX0+e3Byb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtSW5mb30+e3Byb3BzLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXtwcm9wcy5zcGFjZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIEN1c3RvbSBjb21wb25lbnQgdG8gcmVuZGVyIEdlbnJlcyBcbiAgICBjb25zdCBHZW5yZXMgPSAoeyB2YWx1ZXMgfSkgPT4ge1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGFycmF5IGFuZCBjcmVhdGUgYSBiYWRnZS1saWtlIGNvbXBvbmVudCBpbnN0ZWFkIG9mIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZ1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge3ZhbHVlcy5tYXAoKGdlbnJlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpZHh9IGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfT5cbiAgICAgICAgICAgICAgICB7Z2VucmV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgLyogXG4gICAgICAgIC0gQ29sdW1ucyBpcyBhIHNpbXBsZSBhcnJheSByaWdodCBub3csIGJ1dCBpdCB3aWxsIGNvbnRhaW4gc29tZSBsb2dpYyBsYXRlciBvbi4gSXQgaXMgcmVjb21tZW5kZWQgYnkgcmVhY3QtdGFibGUgdG8gbWVtb2l6ZSB0aGUgY29sdW1ucyBkYXRhXG4gICAgICAgIC0gSGVyZSBpbiB0aGlzIGV4YW1wbGUsIHdlIGhhdmUgZ3JvdXBlZCBvdXIgY29sdW1ucyBpbnRvIHR3byBoZWFkZXJzLiByZWFjdC10YWJsZSBpcyBmbGV4aWJsZSBlbm91Z2ggdG8gY3JlYXRlIGdyb3VwZWQgdGFibGUgaGVhZGVyc1xuICAgICovXG4gICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IFtcbiAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIk5hbWVcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cubmFtZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJUeXBlXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJzaG93LnR5cGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiTGFuZ3VhZ2VcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cubGFuZ3VhZ2VcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiR2VucmUocylcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cuZ2VucmVzXCIsXG4gICAgICAgICAgICAvLyBDZWxsIG1ldGhvZCB3aWxsIHByb3ZpZGUgdGhlIGNlbGwgdmFsdWU7IHdlIHBhc3MgaXQgdG8gcmVuZGVyIGEgY3VzdG9tIGNvbXBvbmVudFxuICAgICAgICAgICAgQ2VsbDogKHsgY2VsbDogeyB2YWx1ZSB9IH0pID0+IDxHZW5yZXMgdmFsdWVzPXt2YWx1ZX0gLz5cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlJ1bnRpbWVcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cucnVudGltZVwiLFxuICAgICAgICAgICAgLy8gQ2VsbCBtZXRob2Qgd2lsbCBwcm92aWRlIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbDsgd2UgY2FuIGNyZWF0ZSBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGUgQ2VsbCAgICAgICAgXG4gICAgICAgICAgICBDZWxsOiAoeyBjZWxsOiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IE1hdGguZmxvb3IodmFsdWUgLyA2MCk7XG4gICAgICAgICAgICBjb25zdCBtaW4gPSBNYXRoLmZsb29yKHZhbHVlICUgNjApO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHtob3VyID4gMCA/IGAke2hvdXJ9IGhyJHtob3VyID4gMSA/IFwic1wiIDogXCJcIn0gYCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAge21pbiA+IDAgPyBgJHttaW59IG1pbiR7bWluID4gMSA/IFwic1wiIDogXCJcIn1gIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJTdGF0dXNcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cuc3RhdHVzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkFjdGlvbnNcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cuaWRcIixcbiAgICAgICAgICAgIENlbGw6ICh7IGNlbGw6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9IGhyZWY9e2BhcGkvZWRpdC9pZC8ke3ZhbHVlfWB9PkVkaXQ8L2E+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9IGhyZWY9e2BhcGkvdmlldy9pZC8ke3ZhbHVlfWB9PlZpZXc8L2E+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9IGhyZWY9e2BhcGkvZGVsZXRlL2lkLyR7dmFsdWV9YH0+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFtdXG4gICAgKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGAke3Byb3BzLnRva2VufWB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPXNub3cnKVxuICAgICAgICAgICAgLy9zZXREYXRhKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS92ZW5kb3IvcXVlcnlBbGwnLCBvcHRpb25zKVxuICAgICAgICAgICAgc2V0RGF0YShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICAvKmF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3ZlbmRvci9xdWVyeUFsbCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsIFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGAke3Byb3BzLnRva2VufWBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuanNvbigpOyAvLyBjYWxsIHRoZSBqc29uIG1ldGhvZCBvbiB0aGUgcmVzcG9uc2UgdG8gZ2V0IEpTT05cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pXG4gICAgICAgICAgICAgICAgICAvL3NldERhdGEoanNvbi5kYXRhKTtcbiAgICAgICAgICAgICAgfSkqL1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTEyIGNvbC1sZy0xMiBwYi14bC0wIHBiLWxnLTQgcGItbWQtNCBwYi1zbS00IHBiLXhzLTRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0+XG4gICAgICAgICAgICA8Q2FyZCBpbnRlcmFjdGl2ZT17ZmFsc2V9IGVsZXZhdGlvbj17RWxldmF0aW9uLkZPVVJ9IGNsYXNzTmFtZT1cImNvbC1hdXRvIHctMTAwIGgtMTAwXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IC0xMCwgcGFkZGluZ0JvdHRvbTogMTAsIGJvcmRlcldpZHRoOiAyLCBib3JkZXJDb2xvcjogJ2JsYWNrJywgYm9yZGVyUmFkaXVzOiAxMCwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWJsYWNrIHRleHQtbGVmdCBweC00XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlZlbmRvciBNYXN0ZXIgU2NyZWVuPC9zcGFuPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsyMH0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=