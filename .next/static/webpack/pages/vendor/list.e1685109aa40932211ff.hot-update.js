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
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default()('https://api.tvmaze.com/search/shows?q=snow');

            case 2:
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

            case 4:
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
              lineNumber: 134,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Spacer, {
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
            columns: columns,
            data: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Spacer, {
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92ZW5kb3IvbGlzdC50c3giXSwibmFtZXMiOlsiVGFibGVMaXN0IiwicHJvcHMiLCJTcGFjZXIiLCJoZWlnaHQiLCJTdGF0aWMiLCJzdHlsZU5hbWUiLCJpbnRlbnQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInN0eWxlcyIsIml0ZW1UaXRsZSIsImxhYmVsIiwiaXRlbUluZm8iLCJ0ZXh0Iiwic3BhY2VyIiwiR2VucmVzIiwidmFsdWVzIiwibWFwIiwiZ2VucmUiLCJpZHgiLCJiYWRnZSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkhlYWRlciIsImFjY2Vzc29yIiwiQ2VsbCIsInZhbHVlIiwiY2VsbCIsImhvdXIiLCJNYXRoIiwiZmxvb3IiLCJtaW4iLCJ1c2VFZmZlY3QiLCJheGlvcyIsInJlc3VsdCIsIkVsZXZhdGlvbiIsIkZPVVIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUFBOztBQUVyQyxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDRCxLQUFELEVBQVc7QUFDdEIsd0JBQ0k7QUFBSyxXQUFLLEVBQUU7QUFBRUUsY0FBTSxFQUFFRixLQUFLLENBQUNFO0FBQWhCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBR0gsR0FKRDs7QUFNQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDSCxLQUFELEVBQVc7QUFDdEIsUUFBTUksU0FBUyxrQ0FBMkJKLEtBQUssQ0FBQ0ssTUFBakMsQ0FBZjtB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SjtBQWdCSDs7R0ExSXVCdkIsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92ZW5kb3IvbGlzdC5lMTY4NTEwOWFhNDA5MzIyMTFmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgRWxldmF0aW9uLCBDbGFzc2VzIGFzIENvcmVDbGFzc2VzIH0gZnJvbSBcIkBibHVlcHJpbnRqcy9jb3JlXCJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9WZW5kb3IubW9kdWxlLmNzcydcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9UYWJsZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZUxpc3QocHJvcHMpIHtcblxuICAgIGNvbnN0IFNwYWNlciA9IChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLmhlaWdodCB9fSAvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgU3RhdGljID0gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlTmFtZSA9IGBicDMtaW5wdXQgYnAzLWludGVudC0ke3Byb3BzLmludGVudH1gXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgd2lkdGg6IDEwMCwgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLCB0ZXh0QWxpZ246IFwiZW5kXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1UaXRsZX0+e3Byb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtSW5mb30+e3Byb3BzLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXtwcm9wcy5zcGFjZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIEN1c3RvbSBjb21wb25lbnQgdG8gcmVuZGVyIEdlbnJlcyBcbiAgICBjb25zdCBHZW5yZXMgPSAoeyB2YWx1ZXMgfSkgPT4ge1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGFycmF5IGFuZCBjcmVhdGUgYSBiYWRnZS1saWtlIGNvbXBvbmVudCBpbnN0ZWFkIG9mIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZ1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge3ZhbHVlcy5tYXAoKGdlbnJlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpZHh9IGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfT5cbiAgICAgICAgICAgICAgICB7Z2VucmV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgLyogXG4gICAgICAgIC0gQ29sdW1ucyBpcyBhIHNpbXBsZSBhcnJheSByaWdodCBub3csIGJ1dCBpdCB3aWxsIGNvbnRhaW4gc29tZSBsb2dpYyBsYXRlciBvbi4gSXQgaXMgcmVjb21tZW5kZWQgYnkgcmVhY3QtdGFibGUgdG8gbWVtb2l6ZSB0aGUgY29sdW1ucyBkYXRhXG4gICAgICAgIC0gSGVyZSBpbiB0aGlzIGV4YW1wbGUsIHdlIGhhdmUgZ3JvdXBlZCBvdXIgY29sdW1ucyBpbnRvIHR3byBoZWFkZXJzLiByZWFjdC10YWJsZSBpcyBmbGV4aWJsZSBlbm91Z2ggdG8gY3JlYXRlIGdyb3VwZWQgdGFibGUgaGVhZGVyc1xuICAgICovXG4gICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IFtcbiAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIk5hbWVcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cubmFtZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJUeXBlXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJzaG93LnR5cGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiTGFuZ3VhZ2VcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cubGFuZ3VhZ2VcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiR2VucmUocylcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cuZ2VucmVzXCIsXG4gICAgICAgICAgICAvLyBDZWxsIG1ldGhvZCB3aWxsIHByb3ZpZGUgdGhlIGNlbGwgdmFsdWU7IHdlIHBhc3MgaXQgdG8gcmVuZGVyIGEgY3VzdG9tIGNvbXBvbmVudFxuICAgICAgICAgICAgQ2VsbDogKHsgY2VsbDogeyB2YWx1ZSB9IH0pID0+IDxHZW5yZXMgdmFsdWVzPXt2YWx1ZX0gLz5cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlJ1bnRpbWVcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cucnVudGltZVwiLFxuICAgICAgICAgICAgLy8gQ2VsbCBtZXRob2Qgd2lsbCBwcm92aWRlIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbDsgd2UgY2FuIGNyZWF0ZSBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGUgQ2VsbCAgICAgICAgXG4gICAgICAgICAgICBDZWxsOiAoeyBjZWxsOiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IE1hdGguZmxvb3IodmFsdWUgLyA2MCk7XG4gICAgICAgICAgICBjb25zdCBtaW4gPSBNYXRoLmZsb29yKHZhbHVlICUgNjApO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHtob3VyID4gMCA/IGAke2hvdXJ9IGhyJHtob3VyID4gMSA/IFwic1wiIDogXCJcIn0gYCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAge21pbiA+IDAgPyBgJHttaW59IG1pbiR7bWluID4gMSA/IFwic1wiIDogXCJcIn1gIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJTdGF0dXNcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cuc3RhdHVzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkFjdGlvbnNcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cuaWRcIixcbiAgICAgICAgICAgIENlbGw6ICh7IGNlbGw6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9IGhyZWY9e2BhcGkvZWRpdC9pZC8ke3ZhbHVlfWB9PkVkaXQ8L2E+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9IGhyZWY9e2BhcGkvdmlldy9pZC8ke3ZhbHVlfWB9PlZpZXc8L2E+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9IGhyZWY9e2BhcGkvZGVsZXRlL2lkLyR7dmFsdWV9YH0+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFtdXG4gICAgKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcygnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1zbm93Jyk7XG4gICAgICAgICAgICBzZXREYXRhKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIC8qYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvdmVuZG9yL3F1ZXJ5QWxsJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYCR7cHJvcHMudG9rZW59YFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5qc29uKCk7IC8vIGNhbGwgdGhlIGpzb24gbWV0aG9kIG9uIHRoZSByZXNwb25zZSB0byBnZXQgSlNPTlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coanNvbilcbiAgICAgICAgICAgICAgICAgIC8vc2V0RGF0YShqc29uLmRhdGEpO1xuICAgICAgICAgICAgICB9KSovXG4gICAgICAgIH0pKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMTIgY29sLWxnLTEyIHBiLXhsLTAgcGItbGctNCBwYi1tZC00IHBiLXNtLTQgcGIteHMtNFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyB9fT5cbiAgICAgICAgICAgIDxDYXJkIGludGVyYWN0aXZlPXtmYWxzZX0gZWxldmF0aW9uPXtFbGV2YXRpb24uRk9VUn0gY2xhc3NOYW1lPVwiY29sLWF1dG8gdy0xMDAgaC0xMDBcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogLTEwLCBwYWRkaW5nQm90dG9tOiAxMCwgYm9yZGVyV2lkdGg6IDIsIGJvcmRlckNvbG9yOiAnYmxhY2snLCBib3JkZXJSYWRpdXM6IDEwLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtYmxhY2sgdGV4dC1sZWZ0IHB4LTRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VmVuZG9yIE1hc3RlciBTY3JlZW48L3NwYW4+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlciBoZWlnaHQ9ezIwfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==