import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
//import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
//import { CountryService } from '../service/CountryService';
import { Sidebar } from 'primereact/sidebar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


function FormDentist() {
    //const [gender, setGender] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [visibleRight, setVisibleRight] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link p-mr-1">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link p-mr-1">
                <span className="pi pi-arrow-right" />
            </button>
        </React.Fragment>
    );

    //const countryservice = new CountryService();

    // useEffect(() => {
    //     countryservice.getCountries().then(data => setCountries(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const validate = (data) => {
        let errors = {};

        if (!data.name) {
            errors.name = 'Name is required.';
        }

        if (!data.phone) {
            errors.phone = 'Phone is required.';
        }

        if (!data.whattsApp) {
            errors.whattsApp = 'WhattsApp is required.';
        }

        if (!data.email) {
            errors.email = 'Email is required.';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            errors.email = 'Invalid email address. E.g. example@email.com';
        }

        if (!data.adress) {
            errors.adress = 'Adress is required.';
        }

        if (!data.password) {
            errors.password = 'Password is required.';
        }

        if (!data.accept) {
            errors.accept = 'You need to agree to the terms and conditions.';
        }

        return errors;
    };

    const onSubmit = (data, form) => {
        setFormData(data);
        setShowMessage(true);

        form.restart();
    };

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter = <div className="p-d-flex p-jc-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="p-mt-2">Suggestions</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <>
            <div className="form-demo">
                <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <h5>Registration Successful!</h5>
                        <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                            Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                        </p>
                    </div>
                </Dialog>

                <div className="p-d-flex p-jc-center">
                    <div className="card">
                        <h5 className="p-text-center">Patient Details</h5>
                        <Form onSubmit={onSubmit} initialValues={{ name: '', email: '', password: '', date: null, country: null, accept: false }} validate={validate} render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} className="p-fluid">
                                <Field name="name" render={({ input, meta }) => (
                                    <div className="p-field">
                                        <span className="p-float-label">
                                            <InputText id="name" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                            <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Name*</label>
                                        </span>
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                                <Field name="date" render={({ input }) => (
                                    <div className="p-field">
                                        <span className="p-float-label">
                                            <Calendar id="date" {...input} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                            <label htmlFor="date">Birthday</label>
                                        </span>
                                    </div>
                                )} />
                                {/* <Field name="gender" render={({ input }) => (
                            <div className="p-field">
                                <span className="p-float-label">
                                    <Dropdown id="gender" {...input} options={gender} optionLabel="name" />
                                    <label htmlFor="gender">Gender</label>
                                </span>
                            </div>
                        )} /> */}
                                <Field name="phone" render={({ input, meta }) => (
                                    <div className="p-field">
                                        <span className="p-float-label">
                                            <InputText id="phone" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                            <label htmlFor="phone" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Phone*</label>
                                        </span>
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                                <Field name="whattsApp" render={({ input, meta }) => (
                                    <div className="p-field">
                                        <span className="p-float-label">
                                            <InputText id="whattsApp" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                            <label htmlFor="whattsApp" className={classNames({ 'p-error': isFormFieldValid(meta) })}>wWhattsApp*</label>
                                        </span>
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                                <Field name="email" render={({ input, meta }) => (
                                    <div className="p-field">
                                        <span className="p-float-label p-input-icon-right">
                                            <i className="pi pi-envelope" />
                                            <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                            <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Email*</label>
                                        </span>
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />

<h2>Render Function</h2>
        <Field
          name="adress"
          render={({ input, meta }) => (
            <div>
              <label>Adress</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

                                {/* <Field name="adress" render={({ input, meta }) => (
                                    <div className="p-field">
                                        <span className="p-float-label">
                                            <InputText id="adress" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                            <label htmlFor="adress" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Adress*</label>
                                        </span>
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} /> */}
                               

                                <Button type="submit" label="Submit" className="p-mt-2" />
                            </form>
                        )} />
                    </div>
                    <div className="card">
                        <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                            <h3>Patient Details</h3>
                        </Sidebar>


                    </div>
                </div>
            </div>

        </>
    );
}



export default FormDentist;

