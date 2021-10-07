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
      console.log(response);

      if (response.data.message) {
        setLoginStatus(response.data.message);
        console.log(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
        console.log(response.data[0].username);
      }
    });
  };

  var magSubmit = function magSubmit(e) {
    e.preventDefault();
  };

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
            lineNumber: 41,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
            onSubmit: magSubmit,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
              children: "Usuario: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
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
              lineNumber: 46,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
              children: "Contrase\xF1a: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
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
              lineNumber: 58,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h6", {
              children: loginStatus
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              className: "btn btn-primary",
              onClick: login,
              children: "Iniciar sesion"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "/register",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              className: "btn btn-primary",
              children: "Registrarse"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNWYyZDQ4NThiYTc4NzYwNGVhMGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNNLEtBQVQsR0FBa0I7QUFBQTs7QUFDZCxrQkFBZ0NMLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9NLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWdDUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPUSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFxQ1QsK0NBQVEsQ0FBQyxFQUFELENBQTdDO0FBQUEsTUFBT1UsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBc0JYLCtDQUFRLENBQUMsSUFBRCxDQUE5QjtBQUFBLE1BQU9ZLElBQVA7QUFBQSxNQUFZQyxPQUFaOztBQUdBLE1BQU1DLEtBQUssR0FBQyxTQUFOQSxLQUFNLEdBQUk7QUFFWlosSUFBQUEsaURBQUEsQ0FBVyw2QkFBWCxFQUEwQztBQUN0Q0ksTUFBQUEsUUFBUSxFQUFFQSxRQUQ0QjtBQUV0Q0UsTUFBQUEsUUFBUSxFQUFFQTtBQUY0QixLQUExQyxFQUdHUSxJQUhILENBR1EsVUFBQ0MsUUFBRCxFQUFZO0FBQ2hCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjs7QUFDQSxVQUFHQSxRQUFRLENBQUNHLElBQVQsQ0FBY0MsT0FBakIsRUFBeUI7QUFDckJWLFFBQUFBLGNBQWMsQ0FBQ00sUUFBUSxDQUFDRyxJQUFULENBQWNDLE9BQWYsQ0FBZDtBQUNBSCxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFULENBQWNDLE9BQTFCO0FBQ0gsT0FIRCxNQUdLO0FBQ0FWLFFBQUFBLGNBQWMsQ0FBQ00sUUFBUSxDQUFDRyxJQUFULENBQWMsQ0FBZCxFQUFpQmQsUUFBbEIsQ0FBZDtBQUNEWSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFULENBQWMsQ0FBZCxFQUFpQmQsUUFBN0I7QUFDSDtBQUNKLEtBWkQ7QUFhSCxHQWZEOztBQWlCQSxNQUFNZ0IsU0FBUyxHQUFDLFNBQVZBLFNBQVUsQ0FBQUMsQ0FBQyxFQUFFO0FBQ2ZBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0ksOERBQUMsMERBQUQ7QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBTSxvQkFBUSxFQUFFRixTQUFoQjtBQUFBLG9DQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGQSxlQUdBO0FBQ0ksa0JBQUksRUFBQyxNQURUO0FBRUksdUJBQVMsRUFBQyxjQUZkO0FBR0ksa0JBQUksRUFBQyxVQUhUO0FBSUksc0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFLO0FBQ1hoQixnQkFBQUEsV0FBVyxDQUFDZ0IsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNILGVBTkw7QUFPSSx5QkFBVyxFQUFDO0FBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEEsZUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVpBLGVBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkEsZUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRBLGVBZUE7QUFDSSxrQkFBSSxFQUFDLFVBRFQ7QUFFSSx1QkFBUyxFQUFDLGNBRmQ7QUFHSSxrQkFBSSxFQUFDLFVBSFQ7QUFJSSxzQkFBUSxFQUFFLGtCQUFDSCxDQUFELEVBQUs7QUFDWGQsZ0JBQUFBLFdBQVcsQ0FBQ04sMENBQUcsQ0FBQ29CLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQUosQ0FBWDtBQUNILGVBTkw7QUFPSSx5QkFBVyxFQUFDO0FBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZkEsZUF3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF4QkEsZUF5QkE7QUFBQSx3QkFBS2hCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF6QkEsZUEwQkE7QUFBUSx1QkFBUyxFQUFDLGlCQUFsQjtBQUFvQyxxQkFBTyxFQUFFSSxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkExQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBK0JJLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxXQUFYO0FBQUEsbUNBQ0k7QUFBUSx1QkFBUyxFQUFDLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBL0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkNIOztHQXpFUVQ7O0tBQUFBO0FBMkVULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBtZDUgZnJvbSAnbWQ1JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gTG9naW4gKCkge1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbG9naW5TdGF0dXMsIHNldExvZ2luU3RhdHVzXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT0gdXNlU3RhdGUobnVsbClcclxuXHJcblxyXG4gICAgY29uc3QgbG9naW49KCk9PntcclxuXHJcbiAgICAgICAgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xvZ2luJywge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLm1lc3NhZ2Upe1xyXG4gICAgICAgICAgICAgICAgc2V0TG9naW5TdGF0dXMocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgIHNldExvZ2luU3RhdHVzKHJlc3BvbnNlLmRhdGFbMF0udXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YVswXS51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYWdTdWJtaXQ9ZT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJQcmluY2lwYWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJTZWN1bmRhcmlvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+SW5pY2lhciBzZXNpb248L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e21hZ1N1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlVzdWFyaW86IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBzdSB1c3VhcmlvIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db250cmFzZcOxYTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZChtZDUoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IGNvbnRyYXNlw7FhIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57bG9naW5TdGF0dXN9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2xvZ2lufT5JbmljaWFyIHNlc2lvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+UmVnaXN0cmFyc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIkF4aW9zIiwibWQ1IiwiTGluayIsIkxvZ2luIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2dpblN0YXR1cyIsInNldExvZ2luU3RhdHVzIiwidXNlciIsInNldFVzZXIiLCJsb2dpbiIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJtYWdTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=