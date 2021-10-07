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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
        console.log(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
        console.log(response.data[0].username);
      }
    });
  };

  var magSubmit = function magSubmit(e) {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "containerPrincipal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "containerSecundario",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
            children: "Iniciar sesion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
              children: "Usuario: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
              type: "text",
              className: "form-control",
              name: "username",
              onChange: function onChange(e) {
                setUsername(e.target.value);
              },
              placeholder: "Ingrese su usuario "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
              children: "Contrase\xF1a: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
              type: "password",
              className: "form-control",
              name: "password",
              onChange: function onChange(e) {
                setPassword(md5__WEBPACK_IMPORTED_MODULE_4___default()(e.target.value));
              },
              placeholder: "Ingrese su contrase\xF1a "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h6", {
              children: loginStatus
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              className: "btn btn-primary",
              onClick: login,
              children: "Iniciar sesion"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "/register",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              className: "btn btn-primary",
              children: "Registrarse"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uOWNmZTI4NzhjMjFkYzhkNjI2ZWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNNLEtBQVQsR0FBa0I7QUFBQTs7QUFDZCxrQkFBZ0NMLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9NLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWdDUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPUSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFxQ1QsK0NBQVEsQ0FBQyxFQUFELENBQTdDO0FBQUEsTUFBT1UsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBc0JYLCtDQUFRLENBQUMsSUFBRCxDQUE5QjtBQUFBLE1BQU9ZLElBQVA7QUFBQSxNQUFZQyxPQUFaOztBQUdBLE1BQU1DLEtBQUssR0FBQyxTQUFOQSxLQUFNLEdBQUk7QUFFWlosSUFBQUEsaURBQUEsQ0FBVyw2QkFBWCxFQUEwQztBQUN0Q0ksTUFBQUEsUUFBUSxFQUFFQSxRQUQ0QjtBQUV0Q0UsTUFBQUEsUUFBUSxFQUFFQTtBQUY0QixLQUExQyxFQUdHUSxJQUhILENBR1EsVUFBQ0MsUUFBRCxFQUFZO0FBQ2hCLFVBQUdBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxPQUFqQixFQUF5QjtBQUNyQlIsUUFBQUEsY0FBYyxDQUFDTSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsT0FBZixDQUFkO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFRLENBQUNDLElBQVQsQ0FBY0MsT0FBMUI7QUFDSCxPQUhELE1BR0s7QUFDQVIsUUFBQUEsY0FBYyxDQUFDTSxRQUFRLENBQUNDLElBQVQsQ0FBYyxDQUFkLEVBQWlCWixRQUFsQixDQUFkO0FBQ0RjLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFRLENBQUNDLElBQVQsQ0FBYyxDQUFkLEVBQWlCWixRQUE3QjtBQUNIO0FBQ0osS0FYRDtBQVlILEdBZEQ7O0FBZ0JBLE1BQU1nQixTQUFTLEdBQUMsU0FBVkEsU0FBVSxDQUFBQyxDQUFDLEVBQUUsQ0FFbEIsQ0FGRDs7QUFJQSxzQkFDSSw4REFBQywwREFBRDtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFBLG9DQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGQSxlQUdBO0FBQ0ksa0JBQUksRUFBQyxNQURUO0FBRUksdUJBQVMsRUFBQyxjQUZkO0FBR0ksa0JBQUksRUFBQyxVQUhUO0FBSUksc0JBQVEsRUFBRSxrQkFBQ0EsQ0FBRCxFQUFLO0FBQ1hoQixnQkFBQUEsV0FBVyxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNILGVBTkw7QUFPSSx5QkFBVyxFQUFDO0FBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEEsZUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVpBLGVBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkEsZUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRBLGVBZUE7QUFDSSxrQkFBSSxFQUFDLFVBRFQ7QUFFSSx1QkFBUyxFQUFDLGNBRmQ7QUFHSSxrQkFBSSxFQUFDLFVBSFQ7QUFJSSxzQkFBUSxFQUFFLGtCQUFDRixDQUFELEVBQUs7QUFDWGQsZ0JBQUFBLFdBQVcsQ0FBQ04sMENBQUcsQ0FBQ29CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQUosQ0FBWDtBQUNILGVBTkw7QUFPSSx5QkFBVyxFQUFDO0FBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZkEsZUF3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF4QkEsZUF5QkE7QUFBQSx3QkFBS2Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXpCQSxlQTBCQTtBQUFRLHVCQUFTLEVBQUMsaUJBQWxCO0FBQW9DLHFCQUFPLEVBQUVJLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUErQkksOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFdBQVg7QUFBQSxtQ0FDSTtBQUFRLHVCQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEvQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2Q0g7O0dBeEVRVDs7S0FBQUE7QUEwRVQsK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBMb2dpbiAoKSB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsb2dpblN0YXR1cywgc2V0TG9naW5TdGF0dXNdPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuXHJcbiAgICBjb25zdCBsb2dpbj0oKT0+e1xyXG5cclxuICAgICAgICBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbG9naW4nLCB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLm1lc3NhZ2Upe1xyXG4gICAgICAgICAgICAgICAgc2V0TG9naW5TdGF0dXMocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgIHNldExvZ2luU3RhdHVzKHJlc3BvbnNlLmRhdGFbMF0udXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YVswXS51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYWdTdWJtaXQ9ZT0+e1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclByaW5jaXBhbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclNlY3VuZGFyaW9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5JbmljaWFyIHNlc2lvbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlVzdWFyaW86IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBzdSB1c3VhcmlvIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db250cmFzZcOxYTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZChtZDUoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IGNvbnRyYXNlw7FhIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57bG9naW5TdGF0dXN9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2xvZ2lufT5JbmljaWFyIHNlc2lvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+UmVnaXN0cmFyc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIkF4aW9zIiwibWQ1IiwiTGluayIsIkxvZ2luIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2dpblN0YXR1cyIsInNldExvZ2luU3RhdHVzIiwidXNlciIsInNldFVzZXIiLCJsb2dpbiIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJtYWdTdWJtaXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9