"use strict";
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ "./pages/home.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Proyectos\\dentistas-next\\pages\\login.js",
    _s = $RefreshSig$();










function Login() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      loginStatus = _useState3[0],
      setLoginStatus = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      user = _useState4[0],
      setUser = _useState4[1];

  var login = function login() {
    axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://localhost:3001/login', {
      username: username,
      password: password
    }).then(function (response) {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        console.log(response);
      } else {
        console.log(response);
        {
          (0,_home__WEBPACK_IMPORTED_MODULE_6__.default)();
        }
        ;
      }
    });
  };

  var magSubmit = function magSubmit(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "containerPrincipal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "containerSecundario",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
            children: "Iniciar sesion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
            onSubmit: magSubmit,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
              children: "Usuario: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              className: "form-control",
              name: "username",
              onChange: function onChange(e) {
                setUsername(e.target.value);
              },
              placeholder: "Ingrese su usuario "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
              children: "Contrase\xF1a: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "password",
              className: "form-control",
              name: "password",
              onChange: function onChange(e) {
                setPassword(md5__WEBPACK_IMPORTED_MODULE_4___default()(e.target.value));
              },
              placeholder: "Ingrese su contrase\xF1a "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h6", {
              children: loginStatus
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
              className: "btn btn-primary",
              onClick: login,
              children: "Iniciar sesion"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "/register",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
              className: "btn btn-primary",
              children: "Registrarse"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, this);
}

_s(Login, "/liIDmFHBSaIal/vjlig6Jgz87Q=");

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMjBjNmYxYzAyNmNlMTUwZmRmMmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNPLEtBQVQsR0FBa0I7QUFBQTs7QUFDZCxrQkFBZ0NOLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9PLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWdDUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPUyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFxQ1YsK0NBQVEsQ0FBQyxFQUFELENBQTdDO0FBQUEsTUFBT1csV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBc0JaLCtDQUFRLENBQUMsSUFBRCxDQUE5QjtBQUFBLE1BQU9hLElBQVA7QUFBQSxNQUFZQyxPQUFaOztBQUdBLE1BQU1DLEtBQUssR0FBQyxTQUFOQSxLQUFNLEdBQUk7QUFFWmIsSUFBQUEsaURBQUEsQ0FBVyw2QkFBWCxFQUEwQztBQUN0Q0ssTUFBQUEsUUFBUSxFQUFFQSxRQUQ0QjtBQUV0Q0UsTUFBQUEsUUFBUSxFQUFFQTtBQUY0QixLQUExQyxFQUdHUSxJQUhILENBR1EsVUFBQ0MsUUFBRCxFQUFZO0FBRWhCLFVBQUdBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxPQUFqQixFQUF5QjtBQUNyQlIsUUFBQUEsY0FBYyxDQUFDTSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsT0FBZixDQUFkO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0gsT0FIRCxNQUdLO0FBQ0RHLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0E7QUFBQ2IsVUFBQUEsOENBQVk7QUFBRztBQUFBO0FBQ25CO0FBQ0osS0FaRDtBQWFILEdBZkQ7O0FBaUJBLE1BQU1rQixTQUFTLEdBQUMsU0FBVkEsU0FBVSxDQUFBQyxDQUFDLEVBQUU7QUFDZkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0gsR0FGRDs7QUFLQSxzQkFDSSw4REFBQywwREFBRDtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFNLG9CQUFRLEVBQUVGLFNBQWhCO0FBQUEsb0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBLGVBR0E7QUFDSSxrQkFBSSxFQUFDLE1BRFQ7QUFFSSx1QkFBUyxFQUFDLGNBRmQ7QUFHSSxrQkFBSSxFQUFDLFVBSFQ7QUFJSSxzQkFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQUs7QUFDWGhCLGdCQUFBQSxXQUFXLENBQUNnQixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0gsZUFOTDtBQU9JLHlCQUFXLEVBQUM7QUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIQSxlQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWkEsZUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiQSxlQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEEsZUFlQTtBQUNJLGtCQUFJLEVBQUMsVUFEVDtBQUVJLHVCQUFTLEVBQUMsY0FGZDtBQUdJLGtCQUFJLEVBQUMsVUFIVDtBQUlJLHNCQUFRLEVBQUUsa0JBQUNILENBQUQsRUFBSztBQUNYZCxnQkFBQUEsV0FBVyxDQUFDUCwwQ0FBRyxDQUFDcUIsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBSixDQUFYO0FBQ0gsZUFOTDtBQU9JLHlCQUFXLEVBQUM7QUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFmQSxlQXdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXhCQSxlQXlCQTtBQUFBLHdCQUFLaEI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXpCQSxlQTBCQTtBQUFRLHVCQUFTLEVBQUMsaUJBQWxCO0FBQW9DLHFCQUFPLEVBQUVJLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUErQkksOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFdBQVg7QUFBQSxtQ0FDSTtBQUFRLHVCQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEvQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2Q0g7O0dBMUVRVDs7S0FBQUE7QUE0RVQsK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQYWdQcmluY2lwYWwgZnJvbSBcIi4vaG9tZVwiO1xyXG5cclxuZnVuY3Rpb24gTG9naW4gKCkge1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbG9naW5TdGF0dXMsIHNldExvZ2luU3RhdHVzXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT0gdXNlU3RhdGUobnVsbClcclxuXHJcblxyXG4gICAgY29uc3QgbG9naW49KCk9PntcclxuXHJcbiAgICAgICAgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xvZ2luJywge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSk9PntcclxuXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEubWVzc2FnZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2dpblN0YXR1cyhyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHtQYWdQcmluY2lwYWwoKX07ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYWdTdWJtaXQ9ZT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyUHJpbmNpcGFsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyU2VjdW5kYXJpb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkluaWNpYXIgc2VzaW9uPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXttYWdTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Vc3VhcmlvOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2Ugc3UgdXN1YXJpbyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29udHJhc2XDsWE6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQobWQ1KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBzdSBjb250cmFzZcOxYSBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2xvZ2luU3RhdHVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtsb2dpbn0+SW5pY2lhciBzZXNpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlJlZ2lzdHJhcnNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJBeGlvcyIsIm1kNSIsIkxpbmsiLCJQYWdQcmluY2lwYWwiLCJMb2dpbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibG9naW5TdGF0dXMiLCJzZXRMb2dpblN0YXR1cyIsInVzZXIiLCJzZXRVc2VyIiwibG9naW4iLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibWFnU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9