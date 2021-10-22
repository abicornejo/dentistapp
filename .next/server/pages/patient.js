(() => {
var exports = {};
exports.id = "pages/patient";
exports.ids = ["pages/patient"];
exports.modules = {

/***/ "./pages/patient.js":
/*!**************************!*\
  !*** ./pages/patient.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/inputtext */ "primereact/inputtext");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/button */ "primereact/button");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/dropdown */ "primereact/dropdown");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/calendar */ "primereact/calendar");
/* harmony import */ var primereact_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_calendar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/dialog */ "primereact/dialog");
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/utils */ "primereact/utils");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_utils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/sidebar */ "primereact/sidebar");
/* harmony import */ var primereact_sidebar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_sidebar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/inputtextarea */ "primereact/inputtextarea");
/* harmony import */ var primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_resources_themes_saga_blue_theme_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primereact/resources/themes/saga-blue/theme.css */ "./node_modules/primereact/resources/themes/saga-blue/theme.css");
/* harmony import */ var primereact_resources_themes_saga_blue_theme_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_themes_saga_blue_theme_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primereact/resources/primereact.min.css */ "./node_modules/primereact/resources/primereact.min.css");
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeicons/primeicons.css */ "./node_modules/primeicons/primeicons.css");
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Proyectos\\dentistas-next\\pages\\patient.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function Patient() {
  const {
    0: first_Name,
    1: setFirst_Name
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: last_Name,
    1: setLast_Name
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: birthday,
    1: setBirthday
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: gender,
    1: setGender
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: phone,
    1: setPhone
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: email,
    1: setemail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: adress,
    1: setadress
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: notes,
    1: setnotes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: visibleRight,
    1: setVisibleRight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: genders,
    1: setGenders
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    "name": "Female",
    "code": "Female"
  }, {
    "name": "Male",
    "code": "Male"
  }]);
  const {
    0: showMessage,
    1: setShowMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: formData,
    1: setFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const {
    0: jsonPat,
    1: setJsonPat
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    first_Name: "",
    last_Name: "",
    birthday: "",
    gender: "",
    phone: "",
    email: "",
    adress: "",
    notes: ""
  });
  const json = {
    firstName: first_Name,
    lastName: last_Name,
    birthday: birthday,
    gender: gender,
    phone: phone,
    email: email,
    adress: adress,
    notes: notes
  };

  const register = () => {
    console.log(jsonPat);
    axios__WEBPACK_IMPORTED_MODULE_10___default().post('http://localhost:3001/add-patient', jsonPat).then(response => {
      console.log(response); // const patient = response.data;
      // const temp = [patient];
      // setJsonPat(temp);
    }).catch(error => {
      console.log(error);
    });
  };

  const validate = data => {
    let errors = {};

    if (!data.firstname) {
      errors.firstname = 'First Name is required.';
    }

    if (!data.lastname) {
      errors.lastname = 'Last Name is required.';
    }

    if (!data.phone) {
      errors.phone = 'Phone is required.';
    }

    if (!data.email) {
      errors.email = 'Email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = 'Invalid email address. E.g. example@email.com';
    }

    if (!data.adress) {
      errors.adress = 'Adress is required.';
    }

    return errors;
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    setShowMessage(true);
    form.restart();
  };

  const isFormFieldValid = meta => !!(meta.touched && meta.error);

  const getFormErrorMessage = meta => {
    return isFormFieldValid(meta) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("small", {
      className: "p-error",
      children: meta.error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 42
    }, this);
  };

  const actualizaobj = e => {
    const nombre = e.target.name;
    const value = e.target.value;
    const objTemp = jsonPat;
    objTemp[nombre] = value;
    setJsonPat(objTemp);
  };

  const dialogFooter = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    className: "p-d-flex p-jc-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
      label: "OK",
      className: "p-button-text",
      autoFocus: true,
      onClick: () => setShowMessage(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 64
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 26
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
        icon: "pi pi-arrow-left",
        onClick: () => setVisibleRight(true),
        className: "p-mr-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_sidebar__WEBPACK_IMPORTED_MODULE_8__.Sidebar, {
        visible: visibleRight,
        position: "right",
        style: {
          width: '40em'
        },
        onHide: () => setVisibleRight(false),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "form-demo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, {
            visible: showMessage,
            onHide: () => setShowMessage(false),
            position: "top",
            footer: dialogFooter,
            showHeader: false,
            breakpoints: {
              '960px': '80vw'
            },
            style: {
              width: '30vw'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("i", {
                className: "pi pi-check-circle",
                style: {
                  fontSize: '5rem',
                  color: 'var(--green-500)'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h5", {
                children: "Registration Successful!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                style: {
                  lineHeight: 1.5,
                  textIndent: '1rem'
                },
                children: ["your account has been registered! ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("b", {
                  children: formData.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 71
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "p-d-flex text-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h2", {
                children: "Patient Details"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 57
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 63
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 69
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Form, {
                onSubmit: onSubmit,
                initialValues: {
                  name: '',
                  date: null,
                  gender: null,
                  accept: false
                },
                validate: validate,
                render: ({
                  handleSubmit
                }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("form", {
                  onSubmit: handleSubmit,
                  className: "p-fluid",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                    className: "formgrid grid",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Field, {
                      name: "firstname",
                      render: ({
                        input,
                        meta
                      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        className: "field col-12 md:col-6 ",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                          className: "p-float-label",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_inputtext__WEBPACK_IMPORTED_MODULE_2__.InputText, _objectSpread(_objectSpread({
                            id: "firstname"
                          }, input), {}, {
                            autoFocus: true,
                            className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)({
                              'p-invalid': isFormFieldValid(meta)
                            }),
                            onInput: e => actualizaobj(e),
                            First: true,
                            Name: "first_Name"
                          }), void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 149,
                            columnNumber: 57
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
                            htmlFor: "firstname",
                            className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)({
                              'p-error': isFormFieldValid(meta)
                            }),
                            children: "First Name"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 150,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 148,
                          columnNumber: 53
                        }, this), getFormErrorMessage(meta)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 147,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Field, {
                      name: "lastname",
                      render: ({
                        input,
                        meta
                      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        className: "field col-12 md:col-6",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                          className: "p-float-label",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_inputtext__WEBPACK_IMPORTED_MODULE_2__.InputText, _objectSpread(_objectSpread({
                            id: "lastname"
                          }, input), {}, {
                            autoFocus: true,
                            className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)({
                              'p-invalid': isFormFieldValid(meta)
                            }),
                            onInput: e => actualizaobj(e),
                            Last: true,
                            Name: "last_Name"
                          }), void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 158,
                            columnNumber: 57
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
                            htmlFor: "lastname",
                            className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)({
                              'p-error': isFormFieldValid(meta)
                            }),
                            children: "Last Name"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 159,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 157,
                          columnNumber: 53
                        }, this), getFormErrorMessage(meta)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 156,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                    className: "formgrid grid",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Field, {
                      name: "date",
                      render: ({
                        input
                      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        className: "field col-12 md:col-6",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                          className: "p-float-label",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_calendar__WEBPACK_IMPORTED_MODULE_5__.Calendar, _objectSpread(_objectSpread({
                            id: "date"
                          }, input), {}, {
                            dateFormat: "dd/mm/yy",
                            mask: "99/99/9999",
                            showIcon: true,
                            onInput: e => actualizaobj(e),
                            Birthday: "birthday"
                          }), void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 170,
                            columnNumber: 57
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
                            htmlFor: "date",
                            children: "Birthday"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 171,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 169,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 168,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 167,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Field, {
                      name: "gender",
                      render: ({
                        input
                      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        className: "field col-12 md:col-6 ",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                          className: "p-float-label",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_dropdown__WEBPACK_IMPORTED_MODULE_4__.Dropdown, _objectSpread(_objectSpread({
                            id: "gender"
                          }, input), {}, {
                            options: genders,
                            optionLabel: "name",
                            onInput: e => actualizaobj(e),
                            Gender: "gender"
                          }), void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 178,
                            columnNumber: 57
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
                            htmlFor: "gender",
                            children: "Gender"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 179,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 177,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 176,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 175,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                    className: "formgrid grid",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Field, {
                      name: "phone",
                      render: ({
                        input,
                        meta
                      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        className: "field col-12 md:col-6",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                          className: "p-float-label",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_inputtext__WEBPACK_IMPORTED_MODULE_2__.InputText, _objectSpread(_objectSpread({
                            id: "phone"
                          }, input), {}, {
                            autoFocus: true,
                            className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)({
                              'p-invalid': isFormFieldValid(meta)
                            }),
                            onInput: e => actualizaobj(e),
                            Phone: "phone"
                          }), void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 189,
                            columnNumber: 57
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
                            htmlFor: "phone",
                            className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)({
                              'p-error': isFormFieldValid(meta)
                            }),
                            children: "Phone"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 190,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 188,
                          columnNumber: 53
                        }, this), getFormErrorMessage(meta)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 187,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Field, {
                      name: "email",
                      render: ({
                        input,
                        meta
                      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        className: "field col-12 md:col-6",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                          className: "p-float-label p-input-icon-right",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("i", {
                            className: "pi pi-envelope"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 199,
                            columnNumber: 57
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_inputtext__WEBPACK_IMPORTED_MODULE_2__.InputText, _objectSpread(_objectSpread({
                            id: "email"
                          }, input), {}, {
                            className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)({
                              'p-invalid': isFormFieldValid(meta)
                            }),
                            onInput: e => actualizaobj(e),
                            Email: "email"
                          }), void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 200,
                            columnNumber: 57
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
                            htmlFor: "email",
                            className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)({
                              'p-error': isFormFieldValid(meta)
                            }),
                            children: "Email"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 201,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 198,
                          columnNumber: 53
                        }, this), getFormErrorMessage(meta)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 197,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Field, {
                    name: "adress",
                    render: ({
                      input,
                      meta
                    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                      className: "field col-12 md:col-12 ",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                        className: "p-float-label",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_9__.InputTextarea, _objectSpread(_objectSpread({
                          id: "adress"
                        }, input), {}, {
                          autoFocus: true,
                          className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)({
                            'p-invalid': isFormFieldValid(meta)
                          }),
                          onInput: e => actualizaobj(e),
                          First: true,
                          Adress: "adress"
                        }), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 211,
                          columnNumber: 53
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
                          htmlFor: "adress",
                          className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)({
                            'p-error': isFormFieldValid(meta)
                          }),
                          children: "Adress"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 212,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 210,
                        columnNumber: 49
                      }, this), getFormErrorMessage(meta)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 209,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.Field, {
                    name: "notes",
                    render: ({
                      input,
                      meta
                    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                      className: "field col-12 md:col-6",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                        className: "p-float-label",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_inputtext__WEBPACK_IMPORTED_MODULE_2__.InputText, _objectSpread(_objectSpread({
                          id: "notes"
                        }, input), {}, {
                          autoFocus: true,
                          className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)({
                            'p-invalid': isFormFieldValid(meta)
                          }),
                          onInput: e => actualizaobj(e),
                          Notes: "notes"
                        }), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 220,
                          columnNumber: 53
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("label", {
                          htmlFor: "notes",
                          className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_7__.classNames)({
                            'p-error': isFormFieldValid(meta)
                          }),
                          children: "Notes"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 221,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 219,
                        columnNumber: 49
                      }, this), getFormErrorMessage(meta)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    type: "submit",
                    label: "Save",
                    onClick: register,
                    className: "p-mt-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Patient);

/***/ }),

/***/ "./node_modules/primeicons/primeicons.css":
/*!************************************************!*\
  !*** ./node_modules/primeicons/primeicons.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/primereact/resources/primereact.min.css":
/*!**************************************************************!*\
  !*** ./node_modules/primereact/resources/primereact.min.css ***!
  \**************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/primereact/resources/themes/saga-blue/theme.css":
/*!**********************************************************************!*\
  !*** ./node_modules/primereact/resources/themes/saga-blue/theme.css ***!
  \**********************************************************************/
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

/***/ "primereact/button":
/*!************************************!*\
  !*** external "primereact/button" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("primereact/button");

/***/ }),

/***/ "primereact/calendar":
/*!**************************************!*\
  !*** external "primereact/calendar" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("primereact/calendar");

/***/ }),

/***/ "primereact/dialog":
/*!************************************!*\
  !*** external "primereact/dialog" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("primereact/dialog");

/***/ }),

/***/ "primereact/dropdown":
/*!**************************************!*\
  !*** external "primereact/dropdown" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("primereact/dropdown");

/***/ }),

/***/ "primereact/inputtext":
/*!***************************************!*\
  !*** external "primereact/inputtext" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("primereact/inputtext");

/***/ }),

/***/ "primereact/inputtextarea":
/*!*******************************************!*\
  !*** external "primereact/inputtextarea" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("primereact/inputtextarea");

/***/ }),

/***/ "primereact/sidebar":
/*!*************************************!*\
  !*** external "primereact/sidebar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("primereact/sidebar");

/***/ }),

/***/ "primereact/utils":
/*!***********************************!*\
  !*** external "primereact/utils" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("primereact/utils");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-final-form":
/*!***********************************!*\
  !*** external "react-final-form" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-final-form");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/patient.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFvSEg7O0FBQ0QsaUVBQWU5QixPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9PQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbnRpc3Rhcy1uZXh0Ly4vcGFnZXMvcGF0aWVudC5qcyIsIndlYnBhY2s6Ly9kZW50aXN0YXMtbmV4dC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZGVudGlzdGFzLW5leHQvZXh0ZXJuYWwgXCJwcmltZXJlYWN0L2J1dHRvblwiIiwid2VicGFjazovL2RlbnRpc3Rhcy1uZXh0L2V4dGVybmFsIFwicHJpbWVyZWFjdC9jYWxlbmRhclwiIiwid2VicGFjazovL2RlbnRpc3Rhcy1uZXh0L2V4dGVybmFsIFwicHJpbWVyZWFjdC9kaWFsb2dcIiIsIndlYnBhY2s6Ly9kZW50aXN0YXMtbmV4dC9leHRlcm5hbCBcInByaW1lcmVhY3QvZHJvcGRvd25cIiIsIndlYnBhY2s6Ly9kZW50aXN0YXMtbmV4dC9leHRlcm5hbCBcInByaW1lcmVhY3QvaW5wdXR0ZXh0XCIiLCJ3ZWJwYWNrOi8vZGVudGlzdGFzLW5leHQvZXh0ZXJuYWwgXCJwcmltZXJlYWN0L2lucHV0dGV4dGFyZWFcIiIsIndlYnBhY2s6Ly9kZW50aXN0YXMtbmV4dC9leHRlcm5hbCBcInByaW1lcmVhY3Qvc2lkZWJhclwiIiwid2VicGFjazovL2RlbnRpc3Rhcy1uZXh0L2V4dGVybmFsIFwicHJpbWVyZWFjdC91dGlsc1wiIiwid2VicGFjazovL2RlbnRpc3Rhcy1uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9kZW50aXN0YXMtbmV4dC9leHRlcm5hbCBcInJlYWN0LWZpbmFsLWZvcm1cIiIsIndlYnBhY2s6Ly9kZW50aXN0YXMtbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0IH0gZnJvbSAncHJpbWVyZWFjdC9pbnB1dHRleHQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicHJpbWVyZWFjdC9idXR0b25cIjtcclxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdwcmltZXJlYWN0L2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICdwcmltZXJlYWN0L2NhbGVuZGFyJztcclxuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAncHJpbWVyZWFjdC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAncHJpbWVyZWFjdC91dGlscyc7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tICdwcmltZXJlYWN0L3NpZGViYXInO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhIH0gZnJvbSAncHJpbWVyZWFjdC9pbnB1dHRleHRhcmVhJztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICdwcmltZXJlYWN0L3Jlc291cmNlcy90aGVtZXMvc2FnYS1ibHVlL3RoZW1lLmNzcyc7XHJcbmltcG9ydCAncHJpbWVyZWFjdC9yZXNvdXJjZXMvcHJpbWVyZWFjdC5taW4uY3NzJztcclxuaW1wb3J0ICdwcmltZWljb25zL3ByaW1laWNvbnMuY3NzJ1xyXG5cclxuZnVuY3Rpb24gUGF0aWVudCgpIHtcclxuICAgIGNvbnN0IFtmaXJzdF9OYW1lLCBzZXRGaXJzdF9OYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xhc3RfTmFtZSwgc2V0TGFzdF9OYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2JpcnRoZGF5LCBzZXRCaXJ0aGRheV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtnZW5kZXIsIHNldEdlbmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2FkcmVzcywgc2V0YWRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW25vdGVzLCBzZXRub3Rlc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlUmlnaHQsIHNldFZpc2libGVSaWdodF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ2VuZGVycywgc2V0R2VuZGVyc10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgeyBcIm5hbWVcIjogXCJGZW1hbGVcIiwgXCJjb2RlXCI6IFwiRmVtYWxlXCIgfSxcclxuICAgICAgICB7IFwibmFtZVwiOiBcIk1hbGVcIiwgXCJjb2RlXCI6IFwiTWFsZVwiIH1cclxuICAgIF0pO1xyXG4gICAgY29uc3QgW3Nob3dNZXNzYWdlLCBzZXRTaG93TWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtqc29uUGF0LCBzZXRKc29uUGF0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBmaXJzdF9OYW1lOiBcIlwiLFxyXG4gICAgICAgIGxhc3RfTmFtZTogXCJcIixcclxuICAgICAgICBiaXJ0aGRheTogXCJcIixcclxuICAgICAgICBnZW5kZXI6IFwiXCIsXHJcbiAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgYWRyZXNzOiBcIlwiLFxyXG4gICAgICAgIG5vdGVzOiBcIlwiXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBmaXJzdF9OYW1lLFxyXG4gICAgICAgIGxhc3ROYW1lOiBsYXN0X05hbWUsXHJcbiAgICAgICAgYmlydGhkYXk6IGJpcnRoZGF5LFxyXG4gICAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICAgIHBob25lOiBwaG9uZSxcclxuICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgYWRyZXNzOiBhZHJlc3MsXHJcbiAgICAgICAgbm90ZXM6IG5vdGVzXHJcbiAgICB9XHJcbiAgICBjb25zdCByZWdpc3Rlcj0oKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGpzb25QYXQpO1xyXG4gICAgICAgIEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZGQtcGF0aWVudCcsIGpzb25QYXQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwYXRpZW50ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRlbXAgPSBbcGF0aWVudF07XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRKc29uUGF0KHRlbXApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IGVycm9ycyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEuZmlyc3RuYW1lKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5maXJzdG5hbWUgPSAnRmlyc3QgTmFtZSBpcyByZXF1aXJlZC4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLmxhc3RuYW1lKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5sYXN0bmFtZSA9ICdMYXN0IE5hbWUgaXMgcmVxdWlyZWQuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZGF0YS5waG9uZSkge1xyXG4gICAgICAgICAgICBlcnJvcnMucGhvbmUgPSAnUGhvbmUgaXMgcmVxdWlyZWQuJztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoIWRhdGEuZW1haWwpIHtcclxuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIHJlcXVpcmVkLic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KGRhdGEuZW1haWwpKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MuIEUuZy4gZXhhbXBsZUBlbWFpbC5jb20nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLmFkcmVzcykge1xyXG4gICAgICAgICAgICBlcnJvcnMuYWRyZXNzID0gJ0FkcmVzcyBpcyByZXF1aXJlZC4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSwgZm9ybSkgPT4ge1xyXG4gICAgICAgIHNldEZvcm1EYXRhKGRhdGEpO1xyXG4gICAgICAgIHNldFNob3dNZXNzYWdlKHRydWUpO1xyXG5cclxuICAgICAgICBmb3JtLnJlc3RhcnQoKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGlzRm9ybUZpZWxkVmFsaWQgPSAobWV0YSkgPT4gISEobWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IpO1xyXG4gICAgY29uc3QgZ2V0Rm9ybUVycm9yTWVzc2FnZSA9IChtZXRhKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgJiYgPHNtYWxsIGNsYXNzTmFtZT1cInAtZXJyb3JcIj57bWV0YS5lcnJvcn08L3NtYWxsPjtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGFjdHVhbGl6YW9iaiA9IChlKSA9PiB7IFxyXG5cclxuICAgICAgICBjb25zdCBub21icmUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgb2JqVGVtcCA9IGpzb25QYXQ7XHJcbiAgICAgICAgb2JqVGVtcFtub21icmVdID0gdmFsdWU7XHJcbiAgICAgICAgc2V0SnNvblBhdChvYmpUZW1wKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpYWxvZ0Zvb3RlciA9IDxkaXYgY2xhc3NOYW1lPVwicC1kLWZsZXggcC1qYy1jZW50ZXJcIj48QnV0dG9uIGxhYmVsPVwiT0tcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi10ZXh0XCIgYXV0b0ZvY3VzIG9uQ2xpY2s9eygpID0+IHNldFNob3dNZXNzYWdlKGZhbHNlKX0gLz48L2Rpdj47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGkgcGktYXJyb3ctbGVmdFwiIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGVSaWdodCh0cnVlKX0gY2xhc3NOYW1lPVwicC1tci0yXCIgLz5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHZpc2libGU9e3Zpc2libGVSaWdodH0gcG9zaXRpb249XCJyaWdodFwiIHN0eWxlPXt7IHdpZHRoOiAnNDBlbScgfX0gb25IaWRlPXsoKSA9PiBzZXRWaXNpYmxlUmlnaHQoZmFsc2UpfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWRlbW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZyB2aXNpYmxlPXtzaG93TWVzc2FnZX0gb25IaWRlPXsoKSA9PiBzZXRTaG93TWVzc2FnZShmYWxzZSl9IHBvc2l0aW9uPVwidG9wXCIgZm9vdGVyPXtkaWFsb2dGb290ZXJ9IHNob3dIZWFkZXI9e2ZhbHNlfSBicmVha3BvaW50cz17eyAnOTYwcHgnOiAnODB2dycgfX0gc3R5bGU9e3sgd2lkdGg6ICczMHZ3JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1kLWZsZXggcC1haS1jZW50ZXIgcC1kaXItY29sIHAtcHQtNiBwLXB4LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwaSBwaS1jaGVjay1jaXJjbGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzVyZW0nLCBjb2xvcjogJ3ZhcigtLWdyZWVuLTUwMCknIH19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UmVnaXN0cmF0aW9uIFN1Y2Nlc3NmdWwhPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBsaW5lSGVpZ2h0OiAxLjUsIHRleHRJbmRlbnQ6ICcxcmVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91ciBhY2NvdW50IGhhcyBiZWVuIHJlZ2lzdGVyZWQhIDxiPntmb3JtRGF0YS5uYW1lfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1kLWZsZXggdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5QYXRpZW50IERldGFpbHM8L2gyPjxiciAvPjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gaW5pdGlhbFZhbHVlcz17eyBuYW1lOiAnJywgZGF0ZTogbnVsbCwgZ2VuZGVyOiBudWxsLCBhY2NlcHQ6IGZhbHNlIH19IHZhbGlkYXRlPXt2YWxpZGF0ZX0gcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJwLWZsdWlkXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtZ3JpZCBncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJmaXJzdG5hbWVcIiByZW5kZXI9eyh7IGlucHV0LCBtZXRhIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTYgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLWZsb2F0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cImZpcnN0bmFtZVwiIHsuLi5pbnB1dH0gYXV0b0ZvY3VzIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWludmFsaWQnOiBpc0Zvcm1GaWVsZFZhbGlkKG1ldGEpIH0pfSBvbklucHV0PXsoZSkgPT4gYWN0dWFsaXphb2JqKGUpfSBGaXJzdCBOYW1lPVwiZmlyc3RfTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdG5hbWVcIiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1lcnJvcic6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9PkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZvcm1FcnJvck1lc3NhZ2UobWV0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJsYXN0bmFtZVwiIHJlbmRlcj17KHsgaW5wdXQsIG1ldGEgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGNvbC0xMiBtZDpjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC1mbG9hdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJsYXN0bmFtZVwiIHsuLi5pbnB1dH0gYXV0b0ZvY3VzIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWludmFsaWQnOiBpc0Zvcm1GaWVsZFZhbGlkKG1ldGEpIH0pfSBvbklucHV0PXsoZSkgPT4gYWN0dWFsaXphb2JqKGUpfSBMYXN0IE5hbWU9XCJsYXN0X05hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdG5hbWVcIiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1lcnJvcic6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9Pkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0Rm9ybUVycm9yTWVzc2FnZShtZXRhKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1ncmlkIGdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImRhdGVcIiByZW5kZXI9eyh7IGlucHV0IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgaWQ9XCJkYXRlXCIgey4uLmlucHV0fSBkYXRlRm9ybWF0PVwiZGQvbW0veXlcIiBtYXNrPVwiOTkvOTkvOTk5OVwiIHNob3dJY29uIG9uSW5wdXQ9eyhlKSA9PiBhY3R1YWxpemFvYmooZSl9IEJpcnRoZGF5PVwiYmlydGhkYXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPkJpcnRoZGF5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImdlbmRlclwiIHJlbmRlcj17KHsgaW5wdXQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGNvbC0xMiBtZDpjb2wtNiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaWQ9XCJnZW5kZXJcIiB7Li4uaW5wdXR9IG9wdGlvbnM9e2dlbmRlcnN9IG9wdGlvbkxhYmVsPVwibmFtZVwiIG9uSW5wdXQ9eyhlKSA9PiBhY3R1YWxpemFvYmooZSl9IEdlbmRlcj1cImdlbmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnZW5kZXJcIj5HZW5kZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybWdyaWQgZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGhvbmVcIiByZW5kZXI9eyh7IGlucHV0LCBtZXRhIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IGlkPVwicGhvbmVcIiB7Li4uaW5wdXR9IGF1dG9Gb2N1cyBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1pbnZhbGlkJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0gb25JbnB1dD17KGUpID0+IGFjdHVhbGl6YW9iaihlKX0gUGhvbmU9XCJwaG9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWVycm9yJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZvcm1FcnJvck1lc3NhZ2UobWV0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJlbWFpbFwiIHJlbmRlcj17KHsgaW5wdXQsIG1ldGEgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGNvbC0xMiBtZDpjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC1mbG9hdC1sYWJlbCBwLWlucHV0LWljb24tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwaSBwaS1lbnZlbG9wZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cImVtYWlsXCIgey4uLmlucHV0fSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1pbnZhbGlkJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0gb25JbnB1dD17KGUpID0+IGFjdHVhbGl6YW9iaihlKX0gRW1haWw9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWVycm9yJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZvcm1FcnJvck1lc3NhZ2UobWV0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJhZHJlc3NcIiByZW5kZXI9eyh7IGlucHV0LCBtZXRhIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGNvbC0xMiBtZDpjb2wtMTIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHRhcmVhIGlkPVwiYWRyZXNzXCIgey4uLmlucHV0fSBhdXRvRm9jdXMgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ3AtaW52YWxpZCc6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9IG9uSW5wdXQ9eyhlKSA9PiBhY3R1YWxpemFvYmooZSl9IEZpcnN0IEFkcmVzcz1cImFkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkcmVzc1wiIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWVycm9yJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0+QWRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0Rm9ybUVycm9yTWVzc2FnZShtZXRhKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIm5vdGVzXCIgcmVuZGVyPXsoeyBpbnB1dCwgbWV0YSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC1mbG9hdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cIm5vdGVzXCIgey4uLmlucHV0fSBhdXRvRm9jdXMgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ3AtaW52YWxpZCc6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9IG9uSW5wdXQ9eyhlKSA9PiBhY3R1YWxpemFvYmooZSl9IE5vdGVzPVwibm90ZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub3Rlc1wiIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWVycm9yJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0+Tm90ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGb3JtRXJyb3JNZXNzYWdlKG1ldGEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJTYXZlXCIgb25DbGljaz17cmVnaXN0ZXJ9IGNsYXNzTmFtZT1cInAtbXQtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2lkZWJhcj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYXRpZW50O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZXJlYWN0L2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZXJlYWN0L2NhbGVuZGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3QvZGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3QvZHJvcGRvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVyZWFjdC9pbnB1dHRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVyZWFjdC9pbnB1dHRleHRhcmVhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lcmVhY3Qvc2lkZWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZXJlYWN0L3V0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZpbmFsLWZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkZpZWxkIiwiSW5wdXRUZXh0IiwiQnV0dG9uIiwiRHJvcGRvd24iLCJDYWxlbmRhciIsIkRpYWxvZyIsImNsYXNzTmFtZXMiLCJTaWRlYmFyIiwiSW5wdXRUZXh0YXJlYSIsIkF4aW9zIiwiUGF0aWVudCIsImZpcnN0X05hbWUiLCJzZXRGaXJzdF9OYW1lIiwibGFzdF9OYW1lIiwic2V0TGFzdF9OYW1lIiwiYmlydGhkYXkiLCJzZXRCaXJ0aGRheSIsImdlbmRlciIsInNldEdlbmRlciIsInBob25lIiwic2V0UGhvbmUiLCJlbWFpbCIsInNldGVtYWlsIiwiYWRyZXNzIiwic2V0YWRyZXNzIiwibm90ZXMiLCJzZXRub3RlcyIsInZpc2libGVSaWdodCIsInNldFZpc2libGVSaWdodCIsImdlbmRlcnMiLCJzZXRHZW5kZXJzIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJqc29uUGF0Iiwic2V0SnNvblBhdCIsImpzb24iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInJlZ2lzdGVyIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwidmFsaWRhdGUiLCJkYXRhIiwiZXJyb3JzIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJ0ZXN0Iiwib25TdWJtaXQiLCJmb3JtIiwicmVzdGFydCIsImlzRm9ybUZpZWxkVmFsaWQiLCJtZXRhIiwidG91Y2hlZCIsImdldEZvcm1FcnJvck1lc3NhZ2UiLCJhY3R1YWxpemFvYmoiLCJlIiwibm9tYnJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwib2JqVGVtcCIsImRpYWxvZ0Zvb3RlciIsIndpZHRoIiwiZm9udFNpemUiLCJjb2xvciIsImxpbmVIZWlnaHQiLCJ0ZXh0SW5kZW50IiwiZGF0ZSIsImFjY2VwdCIsImhhbmRsZVN1Ym1pdCIsImlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==