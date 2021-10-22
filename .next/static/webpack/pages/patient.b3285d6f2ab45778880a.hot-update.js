"use strict";
self["webpackHotUpdate_N_E"]("pages/patient",{

/***/ "./pages/patient.js":
/*!**************************!*\
  !*** ./pages/patient.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Proyectos_dentistas_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");
/* harmony import */ var primereact_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/calendar */ "./node_modules/primereact/calendar/calendar.esm.js");
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/dialog */ "./node_modules/primereact/dialog/dialog.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/sidebar */ "./node_modules/primereact/sidebar/sidebar.esm.js");
/* harmony import */ var primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primereact/inputtextarea */ "./node_modules/primereact/inputtextarea/inputtextarea.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primereact_resources_themes_saga_blue_theme_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primereact/resources/themes/saga-blue/theme.css */ "./node_modules/primereact/resources/themes/saga-blue/theme.css");
/* harmony import */ var primereact_resources_themes_saga_blue_theme_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_themes_saga_blue_theme_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primereact/resources/primereact.min.css */ "./node_modules/primereact/resources/primereact.min.css");
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeicons/primeicons.css */ "./node_modules/primeicons/primeicons.css");
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Proyectos\\dentistas-next\\pages\\patient.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Proyectos_dentistas_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















function Patient() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      first_Name = _useState[0],
      setFirst_Name = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      last_Name = _useState2[0],
      setLast_Name = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      birthday = _useState3[0],
      setBirthday = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      gender = _useState4[0],
      setGender = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      phone = _useState5[0],
      setPhone = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      email = _useState6[0],
      setemail = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      adress = _useState7[0],
      setadress = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      notes = _useState8[0],
      setnotes = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      visibleRight = _useState9[0],
      setVisibleRight = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    "name": "Female",
    "code": "Female"
  }, {
    "name": "Male",
    "code": "Male"
  }]),
      genders = _useState10[0],
      setGenders = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showMessage = _useState11[0],
      setShowMessage = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      formData = _useState12[0],
      setFormData = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    first_Name: "",
    last_Name: "",
    birthday: "",
    gender: "",
    phone: "",
    email: "",
    adress: "",
    notes: ""
  }),
      jsonPat = _useState13[0],
      setJsonPat = _useState13[1];

  var json = {
    firstName: first_Name,
    lastName: last_Name,
    birthday: birthday,
    gender: gender,
    phone: phone,
    email: email,
    adress: adress,
    notes: notes
  };

  var register = function register() {
    console.log(jsonPat);
    axios__WEBPACK_IMPORTED_MODULE_11___default().post('http://localhost:3001/add-patient', jsonPat).then(function (response) {
      console.log(response); // const patient = response.data;
      // const temp = [patient];
      // setJsonPat(temp);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var validate = function validate(data) {
    var errors = {};

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

  var onSubmit = function onSubmit(data, form) {
    setFormData(data);
    setShowMessage(true);
    form.restart();
  };

  var isFormFieldValid = function isFormFieldValid(meta) {
    return !!(meta.touched && meta.error);
  };

  var getFormErrorMessage = function getFormErrorMessage(meta) {
    return isFormFieldValid(meta) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("small", {
      className: "p-error",
      children: meta.error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 42
    }, _this);
  };

  var actualizaobj = function actualizaobj(e) {
    debugger;
    var nombre = e.target.name;
    var value = e.target.value;
    var objTemp = jsonPat;
    objTemp[nombre] = value;
    setJsonPat(objTemp);
  };

  var dialogFooter = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
    className: "p-d-flex p-jc-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
      label: "OK",
      className: "p-button-text",
      autoFocus: true,
      onClick: function onClick() {
        return setShowMessage(false);
      }
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
        icon: "pi pi-arrow-left",
        onClick: function onClick() {
          return setVisibleRight(true);
        },
        className: "p-mr-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_sidebar__WEBPACK_IMPORTED_MODULE_9__.Sidebar, {
        visible: visibleRight,
        position: "right",
        style: {
          width: '40em'
        },
        onHide: function onHide() {
          return setVisibleRight(false);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
          className: "form-demo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_dialog__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
            visible: showMessage,
            onHide: function onHide() {
              return setShowMessage(false);
            },
            position: "top",
            footer: dialogFooter,
            showHeader: false,
            breakpoints: {
              '960px': '80vw'
            },
            style: {
              width: '30vw'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
              className: "p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("i", {
                className: "pi pi-check-circle",
                style: {
                  fontSize: '5rem',
                  color: 'var(--green-500)'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("h5", {
                children: "Registration Successful!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("p", {
                style: {
                  lineHeight: 1.5,
                  textIndent: '1rem'
                },
                children: ["your account has been registered! ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("b", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
            className: "p-d-flex text-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
              className: "card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("h2", {
                children: "Patient Details"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 57
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 63
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 69
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Form, {
                onSubmit: onSubmit,
                initialValues: {
                  name: '',
                  date: null,
                  gender: null,
                  accept: false
                },
                validate: validate,
                render: function render(_ref) {
                  var handleSubmit = _ref.handleSubmit;
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("form", {
                    onSubmit: handleSubmit,
                    className: "p-fluid",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                      className: "formgrid grid",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
                        name: "firstname",
                        render: function render(_ref2) {
                          var input = _ref2.input,
                              meta = _ref2.meta;
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                            className: "field col-12 md:col-6 ",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {
                              className: "p-float-label",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText, _objectSpread(_objectSpread({
                                id: "firstname"
                              }, input), {}, {
                                autoFocus: true,
                                className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_8__.classNames)({
                                  'p-invalid': isFormFieldValid(meta)
                                }),
                                onInput: function onInput(e) {
                                  return actualizaobj(e);
                                },
                                First: true,
                                Name: "first_Name"
                              }), void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 149,
                                columnNumber: 57
                              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("label", {
                                htmlFor: "firstname",
                                className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_8__.classNames)({
                                  'p-error': isFormFieldValid(meta)
                                }),
                                children: "First Name"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 150,
                                columnNumber: 57
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 148,
                              columnNumber: 53
                            }, _this), getFormErrorMessage(meta)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 147,
                            columnNumber: 49
                          }, _this);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
                        name: "lastname",
                        render: function render(_ref3) {
                          var input = _ref3.input,
                              meta = _ref3.meta;
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                            className: "field col-12 md:col-6",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {
                              className: "p-float-label",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText, _objectSpread(_objectSpread({
                                id: "lastname"
                              }, input), {}, {
                                autoFocus: true,
                                className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_8__.classNames)({
                                  'p-invalid': isFormFieldValid(meta)
                                }),
                                onInput: function onInput(e) {
                                  return actualizaobj(e);
                                },
                                Last: true,
                                Name: "last_Name"
                              }), void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 158,
                                columnNumber: 57
                              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("label", {
                                htmlFor: "lastname",
                                className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_8__.classNames)({
                                  'p-error': isFormFieldValid(meta)
                                }),
                                children: "Last Name"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 159,
                                columnNumber: 57
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 157,
                              columnNumber: 53
                            }, _this), getFormErrorMessage(meta)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 156,
                            columnNumber: 49
                          }, _this);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 45
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                      className: "formgrid grid",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
                        name: "date",
                        render: function render(_ref4) {
                          var input = _ref4.input;
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                            className: "field col-12 md:col-6",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {
                              className: "p-float-label",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_calendar__WEBPACK_IMPORTED_MODULE_6__.Calendar, _objectSpread(_objectSpread({
                                id: "date"
                              }, input), {}, {
                                dateFormat: "dd/mm/yy",
                                mask: "99/99/9999",
                                showIcon: true,
                                onInput: function onInput(e) {
                                  return actualizaobj(e);
                                },
                                Birthday: "birthday"
                              }), void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 170,
                                columnNumber: 57
                              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("label", {
                                htmlFor: "date",
                                children: "Birthday"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 171,
                                columnNumber: 57
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 169,
                              columnNumber: 53
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 168,
                            columnNumber: 49
                          }, _this);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 167,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
                        name: "gender",
                        render: function render(_ref5) {
                          var input = _ref5.input;
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                            className: "field col-12 md:col-6 ",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {
                              className: "p-float-label",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_dropdown__WEBPACK_IMPORTED_MODULE_5__.Dropdown, _objectSpread(_objectSpread({
                                id: "gender"
                              }, input), {}, {
                                options: genders,
                                optionLabel: "name",
                                onInput: function onInput(e) {
                                  return actualizaobj(e);
                                },
                                Gender: "gender"
                              }), void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 178,
                                columnNumber: 57
                              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("label", {
                                htmlFor: "gender",
                                children: "Gender"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 179,
                                columnNumber: 57
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 177,
                              columnNumber: 53
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 176,
                            columnNumber: 49
                          }, _this);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 45
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                      className: "formgrid grid",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
                        name: "phone",
                        render: function render(_ref6) {
                          var input = _ref6.input,
                              meta = _ref6.meta;
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                            className: "field col-12 md:col-6",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {
                              className: "p-float-label",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText, _objectSpread(_objectSpread({
                                id: "phone"
                              }, input), {}, {
                                autoFocus: true,
                                className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_8__.classNames)({
                                  'p-invalid': isFormFieldValid(meta)
                                }),
                                onInput: function onInput(e) {
                                  return actualizaobj(e);
                                },
                                Phone: "phone"
                              }), void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 189,
                                columnNumber: 57
                              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("label", {
                                htmlFor: "phone",
                                className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_8__.classNames)({
                                  'p-error': isFormFieldValid(meta)
                                }),
                                children: "Phone"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 190,
                                columnNumber: 57
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 188,
                              columnNumber: 53
                            }, _this), getFormErrorMessage(meta)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 187,
                            columnNumber: 49
                          }, _this);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 195,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
                        name: "email",
                        render: function render(_ref7) {
                          var input = _ref7.input,
                              meta = _ref7.meta;
                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                            className: "field col-12 md:col-6",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {
                              className: "p-float-label p-input-icon-right",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("i", {
                                className: "pi pi-envelope"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 199,
                                columnNumber: 57
                              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText, _objectSpread(_objectSpread({
                                id: "email"
                              }, input), {}, {
                                className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_8__.classNames)({
                                  'p-invalid': isFormFieldValid(meta)
                                }),
                                onInput: function onInput(e) {
                                  return actualizaobj(e);
                                },
                                Email: "email"
                              }), void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 200,
                                columnNumber: 57
                              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("label", {
                                htmlFor: "email",
                                className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_8__.classNames)({
                                  'p-error': isFormFieldValid(meta)
                                }),
                                children: "Email"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 201,
                                columnNumber: 57
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 198,
                              columnNumber: 53
                            }, _this), getFormErrorMessage(meta)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 197,
                            columnNumber: 49
                          }, _this);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 196,
                        columnNumber: 45
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 207,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
                      name: "adress",
                      render: function render(_ref8) {
                        var input = _ref8.input,
                            meta = _ref8.meta;
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                          className: "field col-12 md:col-12 ",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {
                            className: "p-float-label",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_10__.InputTextarea, _objectSpread(_objectSpread({
                              id: "adress"
                            }, input), {}, {
                              autoFocus: true,
                              className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_8__.classNames)({
                                'p-invalid': isFormFieldValid(meta)
                              }),
                              onInput: function onInput(e) {
                                return actualizaobj(e);
                              },
                              First: true,
                              Adress: "adress"
                            }), void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 211,
                              columnNumber: 53
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("label", {
                              htmlFor: "adress",
                              className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_8__.classNames)({
                                'p-error': isFormFieldValid(meta)
                              }),
                              children: "Adress"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 212,
                              columnNumber: 53
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 210,
                            columnNumber: 49
                          }, _this), getFormErrorMessage(meta)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 209,
                          columnNumber: 45
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
                      name: "notes",
                      render: function render(_ref9) {
                        var input = _ref9.input,
                            meta = _ref9.meta;
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
                          className: "field col-12 md:col-6",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("span", {
                            className: "p-float-label",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText, _objectSpread(_objectSpread({
                              id: "notes"
                            }, input), {}, {
                              autoFocus: true,
                              className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_8__.classNames)({
                                'p-invalid': isFormFieldValid(meta)
                              }),
                              onInput: function onInput(e) {
                                return actualizaobj(e);
                              },
                              Notes: "notes"
                            }), void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 220,
                              columnNumber: 53
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("label", {
                              htmlFor: "notes",
                              className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_8__.classNames)({
                                'p-error': isFormFieldValid(meta)
                              }),
                              children: "Notes"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 221,
                              columnNumber: 53
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 219,
                            columnNumber: 49
                          }, _this), getFormErrorMessage(meta)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 218,
                          columnNumber: 45
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                      type: "submit",
                      label: "Save",
                      onClick: register,
                      className: "p-mt-2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 41
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 37
                  }, _this);
                }
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

_s(Patient, "70rojYpq+YGXQDLZMp98em4o2L4=");

_c = Patient;
/* harmony default export */ __webpack_exports__["default"] = (Patient);

var _c;

$RefreshReg$(_c, "Patient");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF0aWVudC5iMzI4NWQ2ZjJhYjQ1Nzc4ODgwYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTYSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQ2Ysa0JBQW9DWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPYSxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFrQ2QsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT2UsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBZ0NoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPaUIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBNEJsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPbUIsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQTBCcEIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT3FCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUEwQnRCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU91QixLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBNEJ4QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPeUIsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQTBCMUIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBTzJCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUF3QzVCLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBLE1BQU82QixZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG9CQUE4QjlCLCtDQUFR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IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0IH0gZnJvbSAncHJpbWVyZWFjdC9pbnB1dHRleHQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicHJpbWVyZWFjdC9idXR0b25cIjtcclxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdwcmltZXJlYWN0L2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICdwcmltZXJlYWN0L2NhbGVuZGFyJztcclxuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAncHJpbWVyZWFjdC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAncHJpbWVyZWFjdC91dGlscyc7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tICdwcmltZXJlYWN0L3NpZGViYXInO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhIH0gZnJvbSAncHJpbWVyZWFjdC9pbnB1dHRleHRhcmVhJztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICdwcmltZXJlYWN0L3Jlc291cmNlcy90aGVtZXMvc2FnYS1ibHVlL3RoZW1lLmNzcyc7XHJcbmltcG9ydCAncHJpbWVyZWFjdC9yZXNvdXJjZXMvcHJpbWVyZWFjdC5taW4uY3NzJztcclxuaW1wb3J0ICdwcmltZWljb25zL3ByaW1laWNvbnMuY3NzJ1xyXG5cclxuZnVuY3Rpb24gUGF0aWVudCgpIHtcclxuICAgIGNvbnN0IFtmaXJzdF9OYW1lLCBzZXRGaXJzdF9OYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xhc3RfTmFtZSwgc2V0TGFzdF9OYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2JpcnRoZGF5LCBzZXRCaXJ0aGRheV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtnZW5kZXIsIHNldEdlbmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2FkcmVzcywgc2V0YWRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW25vdGVzLCBzZXRub3Rlc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlUmlnaHQsIHNldFZpc2libGVSaWdodF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ2VuZGVycywgc2V0R2VuZGVyc10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgeyBcIm5hbWVcIjogXCJGZW1hbGVcIiwgXCJjb2RlXCI6IFwiRmVtYWxlXCIgfSxcclxuICAgICAgICB7IFwibmFtZVwiOiBcIk1hbGVcIiwgXCJjb2RlXCI6IFwiTWFsZVwiIH1cclxuICAgIF0pO1xyXG4gICAgY29uc3QgW3Nob3dNZXNzYWdlLCBzZXRTaG93TWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtqc29uUGF0LCBzZXRKc29uUGF0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBmaXJzdF9OYW1lOiBcIlwiLFxyXG4gICAgICAgIGxhc3RfTmFtZTogXCJcIixcclxuICAgICAgICBiaXJ0aGRheTogXCJcIixcclxuICAgICAgICBnZW5kZXI6IFwiXCIsXHJcbiAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgYWRyZXNzOiBcIlwiLFxyXG4gICAgICAgIG5vdGVzOiBcIlwiXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBmaXJzdF9OYW1lLFxyXG4gICAgICAgIGxhc3ROYW1lOiBsYXN0X05hbWUsXHJcbiAgICAgICAgYmlydGhkYXk6IGJpcnRoZGF5LFxyXG4gICAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICAgIHBob25lOiBwaG9uZSxcclxuICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgYWRyZXNzOiBhZHJlc3MsXHJcbiAgICAgICAgbm90ZXM6IG5vdGVzXHJcbiAgICB9XHJcbiAgICBjb25zdCByZWdpc3Rlcj0oKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGpzb25QYXQpO1xyXG4gICAgICAgIEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZGQtcGF0aWVudCcsIGpzb25QYXQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwYXRpZW50ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRlbXAgPSBbcGF0aWVudF07XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRKc29uUGF0KHRlbXApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IGVycm9ycyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEuZmlyc3RuYW1lKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5maXJzdG5hbWUgPSAnRmlyc3QgTmFtZSBpcyByZXF1aXJlZC4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLmxhc3RuYW1lKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5sYXN0bmFtZSA9ICdMYXN0IE5hbWUgaXMgcmVxdWlyZWQuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZGF0YS5waG9uZSkge1xyXG4gICAgICAgICAgICBlcnJvcnMucGhvbmUgPSAnUGhvbmUgaXMgcmVxdWlyZWQuJztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoIWRhdGEuZW1haWwpIHtcclxuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIHJlcXVpcmVkLic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KGRhdGEuZW1haWwpKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MuIEUuZy4gZXhhbXBsZUBlbWFpbC5jb20nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLmFkcmVzcykge1xyXG4gICAgICAgICAgICBlcnJvcnMuYWRyZXNzID0gJ0FkcmVzcyBpcyByZXF1aXJlZC4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSwgZm9ybSkgPT4ge1xyXG4gICAgICAgIHNldEZvcm1EYXRhKGRhdGEpO1xyXG4gICAgICAgIHNldFNob3dNZXNzYWdlKHRydWUpO1xyXG5cclxuICAgICAgICBmb3JtLnJlc3RhcnQoKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGlzRm9ybUZpZWxkVmFsaWQgPSAobWV0YSkgPT4gISEobWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IpO1xyXG4gICAgY29uc3QgZ2V0Rm9ybUVycm9yTWVzc2FnZSA9IChtZXRhKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgJiYgPHNtYWxsIGNsYXNzTmFtZT1cInAtZXJyb3JcIj57bWV0YS5lcnJvcn08L3NtYWxsPjtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGFjdHVhbGl6YW9iaiA9IChlKSA9PiB7IGRlYnVnZ2VyO1xyXG5cclxuICAgICAgICBjb25zdCBub21icmUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgb2JqVGVtcCA9IGpzb25QYXQ7XHJcbiAgICAgICAgb2JqVGVtcFtub21icmVdID0gdmFsdWU7XHJcbiAgICAgICAgc2V0SnNvblBhdChvYmpUZW1wKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpYWxvZ0Zvb3RlciA9IDxkaXYgY2xhc3NOYW1lPVwicC1kLWZsZXggcC1qYy1jZW50ZXJcIj48QnV0dG9uIGxhYmVsPVwiT0tcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi10ZXh0XCIgYXV0b0ZvY3VzIG9uQ2xpY2s9eygpID0+IHNldFNob3dNZXNzYWdlKGZhbHNlKX0gLz48L2Rpdj47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGkgcGktYXJyb3ctbGVmdFwiIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGVSaWdodCh0cnVlKX0gY2xhc3NOYW1lPVwicC1tci0yXCIgLz5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHZpc2libGU9e3Zpc2libGVSaWdodH0gcG9zaXRpb249XCJyaWdodFwiIHN0eWxlPXt7IHdpZHRoOiAnNDBlbScgfX0gb25IaWRlPXsoKSA9PiBzZXRWaXNpYmxlUmlnaHQoZmFsc2UpfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWRlbW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZyB2aXNpYmxlPXtzaG93TWVzc2FnZX0gb25IaWRlPXsoKSA9PiBzZXRTaG93TWVzc2FnZShmYWxzZSl9IHBvc2l0aW9uPVwidG9wXCIgZm9vdGVyPXtkaWFsb2dGb290ZXJ9IHNob3dIZWFkZXI9e2ZhbHNlfSBicmVha3BvaW50cz17eyAnOTYwcHgnOiAnODB2dycgfX0gc3R5bGU9e3sgd2lkdGg6ICczMHZ3JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1kLWZsZXggcC1haS1jZW50ZXIgcC1kaXItY29sIHAtcHQtNiBwLXB4LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwaSBwaS1jaGVjay1jaXJjbGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzVyZW0nLCBjb2xvcjogJ3ZhcigtLWdyZWVuLTUwMCknIH19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UmVnaXN0cmF0aW9uIFN1Y2Nlc3NmdWwhPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBsaW5lSGVpZ2h0OiAxLjUsIHRleHRJbmRlbnQ6ICcxcmVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91ciBhY2NvdW50IGhhcyBiZWVuIHJlZ2lzdGVyZWQhIDxiPntmb3JtRGF0YS5uYW1lfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1kLWZsZXggdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5QYXRpZW50IERldGFpbHM8L2gyPjxiciAvPjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gaW5pdGlhbFZhbHVlcz17eyBuYW1lOiAnJywgZGF0ZTogbnVsbCwgZ2VuZGVyOiBudWxsLCBhY2NlcHQ6IGZhbHNlIH19IHZhbGlkYXRlPXt2YWxpZGF0ZX0gcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJwLWZsdWlkXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtZ3JpZCBncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJmaXJzdG5hbWVcIiByZW5kZXI9eyh7IGlucHV0LCBtZXRhIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTYgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLWZsb2F0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cImZpcnN0bmFtZVwiIHsuLi5pbnB1dH0gYXV0b0ZvY3VzIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWludmFsaWQnOiBpc0Zvcm1GaWVsZFZhbGlkKG1ldGEpIH0pfSBvbklucHV0PXsoZSkgPT4gYWN0dWFsaXphb2JqKGUpfSBGaXJzdCBOYW1lPVwiZmlyc3RfTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdG5hbWVcIiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1lcnJvcic6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9PkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZvcm1FcnJvck1lc3NhZ2UobWV0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJsYXN0bmFtZVwiIHJlbmRlcj17KHsgaW5wdXQsIG1ldGEgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGNvbC0xMiBtZDpjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC1mbG9hdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJsYXN0bmFtZVwiIHsuLi5pbnB1dH0gYXV0b0ZvY3VzIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWludmFsaWQnOiBpc0Zvcm1GaWVsZFZhbGlkKG1ldGEpIH0pfSBvbklucHV0PXsoZSkgPT4gYWN0dWFsaXphb2JqKGUpfSBMYXN0IE5hbWU9XCJsYXN0X05hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdG5hbWVcIiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1lcnJvcic6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9Pkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0Rm9ybUVycm9yTWVzc2FnZShtZXRhKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1ncmlkIGdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImRhdGVcIiByZW5kZXI9eyh7IGlucHV0IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgaWQ9XCJkYXRlXCIgey4uLmlucHV0fSBkYXRlRm9ybWF0PVwiZGQvbW0veXlcIiBtYXNrPVwiOTkvOTkvOTk5OVwiIHNob3dJY29uIG9uSW5wdXQ9eyhlKSA9PiBhY3R1YWxpemFvYmooZSl9IEJpcnRoZGF5PVwiYmlydGhkYXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPkJpcnRoZGF5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImdlbmRlclwiIHJlbmRlcj17KHsgaW5wdXQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGNvbC0xMiBtZDpjb2wtNiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaWQ9XCJnZW5kZXJcIiB7Li4uaW5wdXR9IG9wdGlvbnM9e2dlbmRlcnN9IG9wdGlvbkxhYmVsPVwibmFtZVwiIG9uSW5wdXQ9eyhlKSA9PiBhY3R1YWxpemFvYmooZSl9IEdlbmRlcj1cImdlbmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnZW5kZXJcIj5HZW5kZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybWdyaWQgZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGhvbmVcIiByZW5kZXI9eyh7IGlucHV0LCBtZXRhIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IGlkPVwicGhvbmVcIiB7Li4uaW5wdXR9IGF1dG9Gb2N1cyBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1pbnZhbGlkJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0gb25JbnB1dD17KGUpID0+IGFjdHVhbGl6YW9iaihlKX0gUGhvbmU9XCJwaG9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWVycm9yJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZvcm1FcnJvck1lc3NhZ2UobWV0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJlbWFpbFwiIHJlbmRlcj17KHsgaW5wdXQsIG1ldGEgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGNvbC0xMiBtZDpjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC1mbG9hdC1sYWJlbCBwLWlucHV0LWljb24tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwaSBwaS1lbnZlbG9wZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cImVtYWlsXCIgey4uLmlucHV0fSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1pbnZhbGlkJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0gb25JbnB1dD17KGUpID0+IGFjdHVhbGl6YW9iaihlKX0gRW1haWw9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWVycm9yJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZvcm1FcnJvck1lc3NhZ2UobWV0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJhZHJlc3NcIiByZW5kZXI9eyh7IGlucHV0LCBtZXRhIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGNvbC0xMiBtZDpjb2wtMTIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHRhcmVhIGlkPVwiYWRyZXNzXCIgey4uLmlucHV0fSBhdXRvRm9jdXMgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ3AtaW52YWxpZCc6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9IG9uSW5wdXQ9eyhlKSA9PiBhY3R1YWxpemFvYmooZSl9IEZpcnN0IEFkcmVzcz1cImFkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkcmVzc1wiIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWVycm9yJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0+QWRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0Rm9ybUVycm9yTWVzc2FnZShtZXRhKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIm5vdGVzXCIgcmVuZGVyPXsoeyBpbnB1dCwgbWV0YSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC1mbG9hdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cIm5vdGVzXCIgey4uLmlucHV0fSBhdXRvRm9jdXMgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ3AtaW52YWxpZCc6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9IG9uSW5wdXQ9eyhlKSA9PiBhY3R1YWxpemFvYmooZSl9IE5vdGVzPVwibm90ZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub3Rlc1wiIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWVycm9yJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0+Tm90ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGb3JtRXJyb3JNZXNzYWdlKG1ldGEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJTYXZlXCIgb25DbGljaz17cmVnaXN0ZXJ9IGNsYXNzTmFtZT1cInAtbXQtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2lkZWJhcj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYXRpZW50O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJGaWVsZCIsIklucHV0VGV4dCIsIkJ1dHRvbiIsIkRyb3Bkb3duIiwiQ2FsZW5kYXIiLCJEaWFsb2ciLCJjbGFzc05hbWVzIiwiU2lkZWJhciIsIklucHV0VGV4dGFyZWEiLCJBeGlvcyIsIlBhdGllbnQiLCJmaXJzdF9OYW1lIiwic2V0Rmlyc3RfTmFtZSIsImxhc3RfTmFtZSIsInNldExhc3RfTmFtZSIsImJpcnRoZGF5Iiwic2V0QmlydGhkYXkiLCJnZW5kZXIiLCJzZXRHZW5kZXIiLCJwaG9uZSIsInNldFBob25lIiwiZW1haWwiLCJzZXRlbWFpbCIsImFkcmVzcyIsInNldGFkcmVzcyIsIm5vdGVzIiwic2V0bm90ZXMiLCJ2aXNpYmxlUmlnaHQiLCJzZXRWaXNpYmxlUmlnaHQiLCJnZW5kZXJzIiwic2V0R2VuZGVycyIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwianNvblBhdCIsInNldEpzb25QYXQiLCJqc29uIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJ2YWxpZGF0ZSIsImRhdGEiLCJlcnJvcnMiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInRlc3QiLCJvblN1Ym1pdCIsImZvcm0iLCJyZXN0YXJ0IiwiaXNGb3JtRmllbGRWYWxpZCIsIm1ldGEiLCJ0b3VjaGVkIiwiZ2V0Rm9ybUVycm9yTWVzc2FnZSIsImFjdHVhbGl6YW9iaiIsImUiLCJub21icmUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJvYmpUZW1wIiwiZGlhbG9nRm9vdGVyIiwid2lkdGgiLCJmb250U2l6ZSIsImNvbG9yIiwibGluZUhlaWdodCIsInRleHRJbmRlbnQiLCJkYXRlIiwiYWNjZXB0IiwiaGFuZGxlU3VibWl0IiwiaW5wdXQiXSwic291cmNlUm9vdCI6IiJ9