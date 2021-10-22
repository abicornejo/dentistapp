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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF0aWVudC5lZTEzNTJmODk2N2U3YjQzNzIyNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTYSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQ2Ysa0JBQW9DWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPYSxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFrQ2QsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT2UsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBZ0NoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPaUIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBNEJsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPbUIsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQTBCcEIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT3FCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUEwQnRCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU91QixLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBNEJ4QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPeUIsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQTBCMUIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBTzJCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUF3QzVCLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBLE1BQU82QixZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG9CQUE4QjlCLCtDQUFR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bXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSc7XHJcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gJ3ByaW1lcmVhY3QvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInByaW1lcmVhY3QvYnV0dG9uXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAncHJpbWVyZWFjdC9kcm9wZG93bic7XHJcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAncHJpbWVyZWFjdC9jYWxlbmRhcic7XHJcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJ3ByaW1lcmVhY3QvZGlhbG9nJztcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3ByaW1lcmVhY3QvdXRpbHMnO1xyXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSAncHJpbWVyZWFjdC9zaWRlYmFyJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0YXJlYSB9IGZyb20gJ3ByaW1lcmVhY3QvaW5wdXR0ZXh0YXJlYSc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCAncHJpbWVyZWFjdC9yZXNvdXJjZXMvdGhlbWVzL3NhZ2EtYmx1ZS90aGVtZS5jc3MnO1xyXG5pbXBvcnQgJ3ByaW1lcmVhY3QvcmVzb3VyY2VzL3ByaW1lcmVhY3QubWluLmNzcyc7XHJcbmltcG9ydCAncHJpbWVpY29ucy9wcmltZWljb25zLmNzcydcclxuXHJcbmZ1bmN0aW9uIFBhdGllbnQoKSB7XHJcbiAgICBjb25zdCBbZmlyc3RfTmFtZSwgc2V0Rmlyc3RfTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsYXN0X05hbWUsIHNldExhc3RfTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtiaXJ0aGRheSwgc2V0QmlydGhkYXldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZ2VuZGVyLCBzZXRHZW5kZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRlbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFthZHJlc3MsIHNldGFkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtub3Rlcywgc2V0bm90ZXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdmlzaWJsZVJpZ2h0LCBzZXRWaXNpYmxlUmlnaHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2dlbmRlcnMsIHNldEdlbmRlcnNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHsgXCJuYW1lXCI6IFwiRmVtYWxlXCIsIFwiY29kZVwiOiBcIkZlbWFsZVwiIH0sXHJcbiAgICAgICAgeyBcIm5hbWVcIjogXCJNYWxlXCIsIFwiY29kZVwiOiBcIk1hbGVcIiB9XHJcbiAgICBdKTtcclxuICAgIGNvbnN0IFtzaG93TWVzc2FnZSwgc2V0U2hvd01lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbanNvblBhdCwgc2V0SnNvblBhdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZmlyc3RfTmFtZTogXCJcIixcclxuICAgICAgICBsYXN0X05hbWU6IFwiXCIsXHJcbiAgICAgICAgYmlydGhkYXk6IFwiXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcIlwiLFxyXG4gICAgICAgIHBob25lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIGFkcmVzczogXCJcIixcclxuICAgICAgICBub3RlczogXCJcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICAgIGZpcnN0TmFtZTogZmlyc3RfTmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogbGFzdF9OYW1lLFxyXG4gICAgICAgIGJpcnRoZGF5OiBiaXJ0aGRheSxcclxuICAgICAgICBnZW5kZXI6IGdlbmRlcixcclxuICAgICAgICBwaG9uZTogcGhvbmUsXHJcbiAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIGFkcmVzczogYWRyZXNzLFxyXG4gICAgICAgIG5vdGVzOiBub3Rlc1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVnaXN0ZXI9KCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uUGF0KTtcclxuICAgICAgICBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYWRkLXBhdGllbnQnLCBqc29uUGF0KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcGF0aWVudCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCB0ZW1wID0gW3BhdGllbnRdO1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0SnNvblBhdCh0ZW1wKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBlcnJvcnMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLmZpcnN0bmFtZSkge1xyXG4gICAgICAgICAgICBlcnJvcnMuZmlyc3RuYW1lID0gJ0ZpcnN0IE5hbWUgaXMgcmVxdWlyZWQuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZGF0YS5sYXN0bmFtZSkge1xyXG4gICAgICAgICAgICBlcnJvcnMubGFzdG5hbWUgPSAnTGFzdCBOYW1lIGlzIHJlcXVpcmVkLic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWRhdGEucGhvbmUpIHtcclxuICAgICAgICAgICAgZXJyb3JzLnBob25lID0gJ1Bob25lIGlzIHJlcXVpcmVkLic7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLmVtYWlsKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyByZXF1aXJlZC4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdChkYXRhLmVtYWlsKSkge1xyXG4gICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzLiBFLmcuIGV4YW1wbGVAZW1haWwuY29tJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZGF0YS5hZHJlc3MpIHtcclxuICAgICAgICAgICAgZXJyb3JzLmFkcmVzcyA9ICdBZHJlc3MgaXMgcmVxdWlyZWQuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEsIGZvcm0pID0+IHtcclxuICAgICAgICBzZXRGb3JtRGF0YShkYXRhKTtcclxuICAgICAgICBzZXRTaG93TWVzc2FnZSh0cnVlKTtcclxuXHJcbiAgICAgICAgZm9ybS5yZXN0YXJ0KCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBpc0Zvcm1GaWVsZFZhbGlkID0gKG1ldGEpID0+ICEhKG1ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yKTtcclxuICAgIGNvbnN0IGdldEZvcm1FcnJvck1lc3NhZ2UgPSAobWV0YSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpc0Zvcm1GaWVsZFZhbGlkKG1ldGEpICYmIDxzbWFsbCBjbGFzc05hbWU9XCJwLWVycm9yXCI+e21ldGEuZXJyb3J9PC9zbWFsbD47XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBhY3R1YWxpemFvYmogPSAoZSkgPT4geyBcclxuXHJcbiAgICAgICAgY29uc3Qgbm9tYnJlID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG9ialRlbXAgPSBqc29uUGF0O1xyXG4gICAgICAgIG9ialRlbXBbbm9tYnJlXSA9IHZhbHVlO1xyXG4gICAgICAgIHNldEpzb25QYXQob2JqVGVtcCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkaWFsb2dGb290ZXIgPSA8ZGl2IGNsYXNzTmFtZT1cInAtZC1mbGV4IHAtamMtY2VudGVyXCI+PEJ1dHRvbiBsYWJlbD1cIk9LXCIgY2xhc3NOYW1lPVwicC1idXR0b24tdGV4dFwiIGF1dG9Gb2N1cyBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVzc2FnZShmYWxzZSl9IC8+PC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInBpIHBpLWFycm93LWxlZnRcIiBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlUmlnaHQodHJ1ZSl9IGNsYXNzTmFtZT1cInAtbXItMlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhciB2aXNpYmxlPXt2aXNpYmxlUmlnaHR9IHBvc2l0aW9uPVwicmlnaHRcIiBzdHlsZT17eyB3aWR0aDogJzQwZW0nIH19IG9uSGlkZT17KCkgPT4gc2V0VmlzaWJsZVJpZ2h0KGZhbHNlKX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1kZW1vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cgdmlzaWJsZT17c2hvd01lc3NhZ2V9IG9uSGlkZT17KCkgPT4gc2V0U2hvd01lc3NhZ2UoZmFsc2UpfSBwb3NpdGlvbj1cInRvcFwiIGZvb3Rlcj17ZGlhbG9nRm9vdGVyfSBzaG93SGVhZGVyPXtmYWxzZX0gYnJlYWtwb2ludHM9e3sgJzk2MHB4JzogJzgwdncnIH19IHN0eWxlPXt7IHdpZHRoOiAnMzB2dycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZC1mbGV4IHAtYWktY2VudGVyIHAtZGlyLWNvbCBwLXB0LTYgcC1weC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGkgcGktY2hlY2stY2lyY2xlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc1cmVtJywgY29sb3I6ICd2YXIoLS1ncmVlbi01MDApJyB9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlJlZ2lzdHJhdGlvbiBTdWNjZXNzZnVsITwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbGluZUhlaWdodDogMS41LCB0ZXh0SW5kZW50OiAnMXJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgYWNjb3VudCBoYXMgYmVlbiByZWdpc3RlcmVkISA8Yj57Zm9ybURhdGEubmFtZX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZC1mbGV4IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UGF0aWVudCBEZXRhaWxzPC9oMj48YnIgLz48YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGluaXRpYWxWYWx1ZXM9e3sgbmFtZTogJycsIGRhdGU6IG51bGwsIGdlbmRlcjogbnVsbCwgYWNjZXB0OiBmYWxzZSB9fSB2YWxpZGF0ZT17dmFsaWRhdGV9IHJlbmRlcj17KHsgaGFuZGxlU3VibWl0IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwicC1mbHVpZFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybWdyaWQgZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZmlyc3RuYW1lXCIgcmVuZGVyPXsoeyBpbnB1dCwgbWV0YSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgY29sLTEyIG1kOmNvbC02IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC1mbG9hdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJmaXJzdG5hbWVcIiB7Li4uaW5wdXR9IGF1dG9Gb2N1cyBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1pbnZhbGlkJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0gb25JbnB1dD17KGUpID0+IGFjdHVhbGl6YW9iaihlKX0gRmlyc3QgTmFtZT1cImZpcnN0X05hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RuYW1lXCIgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ3AtZXJyb3InOiBpc0Zvcm1GaWVsZFZhbGlkKG1ldGEpIH0pfT5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGb3JtRXJyb3JNZXNzYWdlKG1ldGEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwibGFzdG5hbWVcIiByZW5kZXI9eyh7IGlucHV0LCBtZXRhIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IGlkPVwibGFzdG5hbWVcIiB7Li4uaW5wdXR9IGF1dG9Gb2N1cyBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1pbnZhbGlkJzogaXNGb3JtRmllbGRWYWxpZChtZXRhKSB9KX0gb25JbnB1dD17KGUpID0+IGFjdHVhbGl6YW9iaihlKX0gTGFzdCBOYW1lPVwibGFzdF9OYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RuYW1lXCIgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ3AtZXJyb3InOiBpc0Zvcm1GaWVsZFZhbGlkKG1ldGEpIH0pfT5MYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZvcm1FcnJvck1lc3NhZ2UobWV0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtZ3JpZCBncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJkYXRlXCIgcmVuZGVyPXsoeyBpbnB1dCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgY29sLTEyIG1kOmNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLWZsb2F0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFyIGlkPVwiZGF0ZVwiIHsuLi5pbnB1dH0gZGF0ZUZvcm1hdD1cImRkL21tL3l5XCIgbWFzaz1cIjk5Lzk5Lzk5OTlcIiBzaG93SWNvbiBvbklucHV0PXsoZSkgPT4gYWN0dWFsaXphb2JqKGUpfSBCaXJ0aGRheT1cImJpcnRoZGF5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVcIj5CaXJ0aGRheTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJnZW5kZXJcIiByZW5kZXI9eyh7IGlucHV0IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTYgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLWZsb2F0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGlkPVwiZ2VuZGVyXCIgey4uLmlucHV0fSBvcHRpb25zPXtnZW5kZXJzfSBvcHRpb25MYWJlbD1cIm5hbWVcIiBvbklucHV0PXsoZSkgPT4gYWN0dWFsaXphb2JqKGUpfSBHZW5kZXI9XCJnZW5kZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2VuZGVyXCI+R2VuZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1ncmlkIGdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInBob25lXCIgcmVuZGVyPXsoeyBpbnB1dCwgbWV0YSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgY29sLTEyIG1kOmNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLWZsb2F0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBpZD1cInBob25lXCIgey4uLmlucHV0fSBhdXRvRm9jdXMgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ3AtaW52YWxpZCc6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9IG9uSW5wdXQ9eyhlKSA9PiBhY3R1YWxpemFvYmooZSl9IFBob25lPVwicGhvbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1lcnJvcic6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9PlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGb3JtRXJyb3JNZXNzYWdlKG1ldGEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZW1haWxcIiByZW5kZXI9eyh7IGlucHV0LCBtZXRhIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtZmxvYXQtbGFiZWwgcC1pbnB1dC1pY29uLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGkgcGktZW52ZWxvcGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJlbWFpbFwiIHsuLi5pbnB1dH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgJ3AtaW52YWxpZCc6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9IG9uSW5wdXQ9eyhlKSA9PiBhY3R1YWxpemFvYmooZSl9IEVtYWlsPVwiZW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1lcnJvcic6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9PkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGb3JtRXJyb3JNZXNzYWdlKG1ldGEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiYWRyZXNzXCIgcmVuZGVyPXsoeyBpbnB1dCwgbWV0YSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTEyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLWZsb2F0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0YXJlYSBpZD1cImFkcmVzc1wiIHsuLi5pbnB1dH0gYXV0b0ZvY3VzIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWludmFsaWQnOiBpc0Zvcm1GaWVsZFZhbGlkKG1ldGEpIH0pfSBvbklucHV0PXsoZSkgPT4gYWN0dWFsaXphb2JqKGUpfSBGaXJzdCBBZHJlc3M9XCJhZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZHJlc3NcIiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1lcnJvcic6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9PkFkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZvcm1FcnJvck1lc3NhZ2UobWV0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJub3Rlc1wiIHJlbmRlcj17KHsgaW5wdXQsIG1ldGEgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgY29sLTEyIG1kOmNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgaWQ9XCJub3Rlc1wiIHsuLi5pbnB1dH0gYXV0b0ZvY3VzIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdwLWludmFsaWQnOiBpc0Zvcm1GaWVsZFZhbGlkKG1ldGEpIH0pfSBvbklucHV0PXsoZSkgPT4gYWN0dWFsaXphb2JqKGUpfSBOb3Rlcz1cIm5vdGVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm90ZXNcIiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAncC1lcnJvcic6IGlzRm9ybUZpZWxkVmFsaWQobWV0YSkgfSl9Pk5vdGVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0Rm9ybUVycm9yTWVzc2FnZShtZXRhKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxhYmVsPVwiU2F2ZVwiIG9uQ2xpY2s9e3JlZ2lzdGVyfSBjbGFzc05hbWU9XCJwLW10LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1NpZGViYXI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGF0aWVudDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiRmllbGQiLCJJbnB1dFRleHQiLCJCdXR0b24iLCJEcm9wZG93biIsIkNhbGVuZGFyIiwiRGlhbG9nIiwiY2xhc3NOYW1lcyIsIlNpZGViYXIiLCJJbnB1dFRleHRhcmVhIiwiQXhpb3MiLCJQYXRpZW50IiwiZmlyc3RfTmFtZSIsInNldEZpcnN0X05hbWUiLCJsYXN0X05hbWUiLCJzZXRMYXN0X05hbWUiLCJiaXJ0aGRheSIsInNldEJpcnRoZGF5IiwiZ2VuZGVyIiwic2V0R2VuZGVyIiwicGhvbmUiLCJzZXRQaG9uZSIsImVtYWlsIiwic2V0ZW1haWwiLCJhZHJlc3MiLCJzZXRhZHJlc3MiLCJub3RlcyIsInNldG5vdGVzIiwidmlzaWJsZVJpZ2h0Iiwic2V0VmlzaWJsZVJpZ2h0IiwiZ2VuZGVycyIsInNldEdlbmRlcnMiLCJzaG93TWVzc2FnZSIsInNldFNob3dNZXNzYWdlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImpzb25QYXQiLCJzZXRKc29uUGF0IiwianNvbiIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmVnaXN0ZXIiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwidmFsaWRhdGUiLCJkYXRhIiwiZXJyb3JzIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJ0ZXN0Iiwib25TdWJtaXQiLCJmb3JtIiwicmVzdGFydCIsImlzRm9ybUZpZWxkVmFsaWQiLCJtZXRhIiwidG91Y2hlZCIsImdldEZvcm1FcnJvck1lc3NhZ2UiLCJhY3R1YWxpemFvYmoiLCJlIiwibm9tYnJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwib2JqVGVtcCIsImRpYWxvZ0Zvb3RlciIsIndpZHRoIiwiZm9udFNpemUiLCJjb2xvciIsImxpbmVIZWlnaHQiLCJ0ZXh0SW5kZW50IiwiZGF0ZSIsImFjY2VwdCIsImhhbmRsZVN1Ym1pdCIsImlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==