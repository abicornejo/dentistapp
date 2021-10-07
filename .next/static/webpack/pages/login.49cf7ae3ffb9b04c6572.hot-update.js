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

  var login = function login(e) {
    e.preventDefault();
    var user = axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://localhost:3001/login', {
      username: username,
      password: password
    }).then(function (response) {
      if (response.data.message) {
        setUser(user);
        setUsername('');
        setPassword('');
      } else {
        setLoginStatus(response.data[0].username);
        setUser(user);
        setUsername('');
        setPassword('');
      }
    }); // Axios.post('http://localhost:3001/login', {
    //     username: username,
    //     password: password,
    // }).then((response)=>{
    //     if(response.data.message){
    //         setLoginStatus(response.data.message);
    //     }else{
    //
    //     }
    // });
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
            lineNumber: 49,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
            onSubmit: Login,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
              children: "Usuario: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
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
              lineNumber: 54,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
              children: "Contrase\xF1a: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
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
              lineNumber: 66,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h6", {
              children: loginStatus
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              className: "btn btn-primary",
              onClick: login,
              children: "Iniciar sesion"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "/register",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              className: "btn btn-primary",
              children: "Registrarse"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNDljZjdhZTNmZmI5YjA0YzY1NzIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNNLEtBQVQsR0FBa0I7QUFBQTs7QUFDZCxrQkFBZ0NMLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9NLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWdDUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPUSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFxQ1QsK0NBQVEsQ0FBQyxFQUFELENBQTdDO0FBQUEsTUFBT1UsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBc0JYLCtDQUFRLENBQUMsSUFBRCxDQUE5QjtBQUFBLE1BQU9ZLElBQVA7QUFBQSxNQUFZQyxPQUFaOztBQUVBLE1BQU1DLEtBQUssR0FBQyxTQUFOQSxLQUFNLENBQUNDLENBQUQsRUFBSztBQUNiQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNSixJQUFJLEdBQUVWLGlEQUFBLENBQVcsNkJBQVgsRUFBMEM7QUFDN0NJLE1BQUFBLFFBQVEsRUFBRUEsUUFEbUM7QUFFN0NFLE1BQUFBLFFBQVEsRUFBRUE7QUFGbUMsS0FBMUMsRUFHSlUsSUFISSxDQUdDLFVBQUNDLFFBQUQsRUFBWTtBQUNoQixVQUFHQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsT0FBakIsRUFBeUI7QUFDckJSLFFBQUFBLE9BQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0FMLFFBQUFBLFdBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsUUFBQUEsV0FBVyxDQUFDLEVBQUQsQ0FBWDtBQUNILE9BSkQsTUFJSztBQUNERSxRQUFBQSxjQUFjLENBQUNRLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLENBQWQsRUFBaUJkLFFBQWxCLENBQWQ7QUFDQU8sUUFBQUEsT0FBTyxDQUFDRCxJQUFELENBQVA7QUFDQUwsUUFBQUEsV0FBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRSxRQUFBQSxXQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0g7QUFDVCxLQWRXLENBQVosQ0FGYSxDQWtCYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBNUJEOztBQThCQSxzQkFDSSw4REFBQywwREFBRDtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFNLG9CQUFRLEVBQUVKLEtBQWhCO0FBQUEsb0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBLGVBR0E7QUFDSSxrQkFBSSxFQUFDLE1BRFQ7QUFFSSx1QkFBUyxFQUFDLGNBRmQ7QUFHSSxrQkFBSSxFQUFDLFVBSFQ7QUFJSSxzQkFBUSxFQUFFLGtCQUFDVSxDQUFELEVBQUs7QUFDWFIsZ0JBQUFBLFdBQVcsQ0FBQ1EsQ0FBQyxDQUFDTyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNILGVBTkw7QUFPSSx5QkFBVyxFQUFDO0FBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEEsZUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVpBLGVBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkEsZUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRBLGVBZUE7QUFDSSxrQkFBSSxFQUFDLFVBRFQ7QUFFSSx1QkFBUyxFQUFDLGNBRmQ7QUFHSSxrQkFBSSxFQUFDLFVBSFQ7QUFJSSxzQkFBUSxFQUFFLGtCQUFDUixDQUFELEVBQUs7QUFDWE4sZ0JBQUFBLFdBQVcsQ0FBQ04sMENBQUcsQ0FBQ1ksQ0FBQyxDQUFDTyxNQUFGLENBQVNDLEtBQVYsQ0FBSixDQUFYO0FBQ0gsZUFOTDtBQU9JLHlCQUFXLEVBQUM7QUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFmQSxlQXdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXhCQSxlQXlCQTtBQUFBLHdCQUFLYjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekJBLGVBMEJBO0FBQVEsdUJBQVMsRUFBQyxpQkFBbEI7QUFBb0MscUJBQU8sRUFBRUksS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQStCSSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsV0FBWDtBQUFBLG1DQUNJO0FBQVEsdUJBQVMsRUFBQyxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQS9CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZDSDs7R0FqRlFUOztLQUFBQTtBQW1GVCwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgbWQ1IGZyb20gJ21kNSc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIExvZ2luICgpIHtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvZ2luU3RhdHVzLCBzZXRMb2dpblN0YXR1c109IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl09IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgbG9naW49KGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXI9IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sb2dpbicsIHtcclxuICAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5tZXNzYWdlKXtcclxuICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNldExvZ2luU3RhdHVzKHJlc3BvbnNlLmRhdGFbMF0udXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKCcnKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xvZ2luJywge1xyXG4gICAgICAgIC8vICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgLy8gICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAvLyB9KS50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAvLyAgICAgaWYocmVzcG9uc2UuZGF0YS5tZXNzYWdlKXtcclxuICAgICAgICAvLyAgICAgICAgIHNldExvZ2luU3RhdHVzKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJQcmluY2lwYWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJTZWN1bmRhcmlvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+SW5pY2lhciBzZXNpb248L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e0xvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VXN1YXJpbzogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IHVzdWFyaW8gXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvbnRyYXNlw7FhOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKG1kNShlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2Ugc3UgY29udHJhc2XDsWEgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2Pntsb2dpblN0YXR1c308L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17bG9naW59PkluaWNpYXIgc2VzaW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5SZWdpc3RyYXJzZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiQXhpb3MiLCJtZDUiLCJMaW5rIiwiTG9naW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvZ2luU3RhdHVzIiwic2V0TG9naW5TdGF0dXMiLCJ1c2VyIiwic2V0VXNlciIsImxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9