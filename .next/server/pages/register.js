(() => {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Head */ "next/Head");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Proyectos\\dentistas-next\\components\\container.js";



const Container = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_Head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
      children: "Dentista"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "container p-4",
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! md5 */ "md5");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Proyectos\\dentistas-next\\pages\\register.js";









function Register() {
  const {
    0: usernameReg,
    1: setUsernameReg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: passwordReg,
    1: setPasswordReg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const register = () => {
    axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://localhost:3001/add', {
      username: usernameReg,
      password: passwordReg
    }).then(response => {
      console.log(response);
    });
    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
      text: "Usuario creado con exito",
      button: "Aceptar"
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "containerPrincipal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "containerSecundario",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
            children: "Registrar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            children: "Usuario: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: "form-control",
            name: "username",
            placeholder: "Ingrese su usuario ",
            onChange: e => {
              setUsernameReg(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            children: "Contrase\xF1a: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "password",
            className: "form-control",
            name: "password",
            placeholder: "Ingrese su contrase\xF1a ",
            onChange: e => {
              setPasswordReg(md5__WEBPACK_IMPORTED_MODULE_5___default()(e.target.value));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
            className: "btn btn-primary",
            onClick: register,
            children: "Registrarse"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              children: ["Ya tienes una cuenta?", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/login",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                  children: "Inicia sesion"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("md5");

/***/ }),

/***/ "next/Head":
/*!****************************!*\
  !*** external "next/Head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/Head");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/Link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "sweetalert":
/*!*****************************!*\
  !*** external "sweetalert" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxNQUFNQyxTQUFTLEdBQUlDLEtBQUQsaUJBQ2Q7QUFBQSwwQkFDSSw4REFBQyxrREFBRDtBQUFBLDJCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBS0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLGNBQ0tBLEtBQUssQ0FBQ0M7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7O0FBWUEsaUVBQWVGLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1MsUUFBVCxHQUFxQjtBQUNqQixRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NQLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDUSxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ1QsK0NBQVEsQ0FBQyxFQUFELENBQTlDOztBQUVBLFFBQU1VLFFBQVEsR0FBQyxNQUFJO0FBQ2ZSLElBQUFBLGlEQUFBLENBQVcsMkJBQVgsRUFBd0M7QUFDcENVLE1BQUFBLFFBQVEsRUFBRU4sV0FEMEI7QUFFcENPLE1BQUFBLFFBQVEsRUFBRUw7QUFGMEIsS0FBeEMsRUFHR00sSUFISCxDQUdTQyxRQUFELElBQVk7QUFDaEJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0gsS0FMRDtBQU1BWixJQUFBQSxpREFBSSxDQUFDO0FBQ0RlLE1BQUFBLElBQUksRUFBRSwwQkFETDtBQUVEQyxNQUFBQSxNQUFNLEVBQUc7QUFGUixLQUFELENBQUo7QUFJSCxHQVhEOztBQWFBLHNCQUNJLDhEQUFDLDBEQUFEO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJO0FBQ0ksZ0JBQUksRUFBQyxNQURUO0FBRUkscUJBQVMsRUFBQyxjQUZkO0FBR0ksZ0JBQUksRUFBQyxVQUhUO0FBSUksdUJBQVcsRUFBQyxxQkFKaEI7QUFLSSxvQkFBUSxFQUFHQyxDQUFELElBQUs7QUFDWGIsY0FBQUEsY0FBYyxDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQ0g7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLGVBY0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkSixlQWVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWZKLGVBZ0JJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEJKLGVBaUJJO0FBQ0ksZ0JBQUksRUFBQyxVQURUO0FBRUkscUJBQVMsRUFBQyxjQUZkO0FBR0ksZ0JBQUksRUFBQyxVQUhUO0FBSUksdUJBQVcsRUFBQywyQkFKaEI7QUFLSSxvQkFBUSxFQUFHRixDQUFELElBQUs7QUFDWFgsY0FBQUEsY0FBYyxDQUFHTCwwQ0FBRyxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBTixDQUFkO0FBQ0g7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpCSixlQTBCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTFCSixlQTJCSTtBQUFRLHFCQUFTLEVBQUMsaUJBQWxCO0FBQW9DLG1CQUFPLEVBQUVaLFFBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNCSixlQTRCSTtBQUFBLG1DQUNJO0FBQUEsK0RBQ0EsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFDLFFBQVg7QUFBQSx1Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErQ0g7O0FBRUQsaUVBQWVMLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbnRpc3Rhcy1uZXh0Ly4vY29tcG9uZW50cy9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZGVudGlzdGFzLW5leHQvLi9wYWdlcy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly9kZW50aXN0YXMtbmV4dC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZGVudGlzdGFzLW5leHQvZXh0ZXJuYWwgXCJtZDVcIiIsIndlYnBhY2s6Ly9kZW50aXN0YXMtbmV4dC9leHRlcm5hbCBcIm5leHQvSGVhZFwiIiwid2VicGFjazovL2RlbnRpc3Rhcy1uZXh0L2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vZGVudGlzdGFzLW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2RlbnRpc3Rhcy1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZGVudGlzdGFzLW5leHQvZXh0ZXJuYWwgXCJzd2VldGFsZXJ0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9IZWFkJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IChwcm9wcykgPT4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+RGVudGlzdGE8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnO1xyXG5pbXBvcnQgbWQ1IGZyb20gJ21kNSc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXIgKCkge1xyXG4gICAgY29uc3QgW3VzZXJuYW1lUmVnLCBzZXRVc2VybmFtZVJlZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZFJlZywgc2V0UGFzc3dvcmRSZWddID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgcmVnaXN0ZXI9KCk9PntcclxuICAgICAgICBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYWRkJywge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWVSZWcsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFJlZyxcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlVzdWFyaW8gY3JlYWRvIGNvbiBleGl0b1wiLFxyXG4gICAgICAgICAgICBidXR0b24gOiBcIkFjZXB0YXJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclByaW5jaXBhbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclNlY3VuZGFyaW9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5SZWdpc3RyYXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlVzdWFyaW86IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2Ugc3UgdXN1YXJpbyBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZVJlZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db250cmFzZcOxYTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2Ugc3UgY29udHJhc2XDsWEgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmRSZWcgIChtZDUoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtyZWdpc3Rlcn0+UmVnaXN0cmFyc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5ZYSB0aWVuZXMgdW5hIGN1ZW50YT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SW5pY2lhIHNlc2lvbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kNVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0XCIpOyJdLCJuYW1lcyI6WyJIZWFkIiwiQ29udGFpbmVyIiwicHJvcHMiLCJjaGlsZHJlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiQXhpb3MiLCJzd2FsIiwibWQ1IiwiUmVnaXN0ZXIiLCJ1c2VybmFtZVJlZyIsInNldFVzZXJuYW1lUmVnIiwicGFzc3dvcmRSZWciLCJzZXRQYXNzd29yZFJlZyIsInJlZ2lzdGVyIiwicG9zdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImJ1dHRvbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=