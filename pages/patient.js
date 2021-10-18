import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { Sidebar } from 'primereact/sidebar';
import { InputTextarea } from 'primereact/inputtextarea';


function Patient() {
        
    const [value14, setValue14] = useState('');     
    const [visibleRight, setVisibleRight] = useState(false);
    const [genders, setGenders] = useState([
        { "name": "Female", "code": "Female" },
        { "name": "Male", "code": "Male" }
    ]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});

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
    const validate = (data) => {
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
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
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
            <div>
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="p-mr-2" />
                <Sidebar visible={visibleRight} position="right" style={{ width: '40em' }} onHide={() => setVisibleRight(false)}>
            <div className="card">
                        <div className="form-demo">
                            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                                <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                                    <h5>Registration Successful!</h5>
                                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                                        Your account is registered under name <b>{formData.name}</b>
                                    </p>
                                </div>
                            </Dialog>
                            <div className="p-d-flex p-jc-center">
                                <h3>Patient Details</h3>
                                <Form onSubmit={onSubmit} initialValues={{ name: '', date: null, gender: null, accept: false }} validate={validate} render={({ handleSubmit }) => (
                                    <form onSubmit={handleSubmit} className="p-fluid">

                                        <div className="formgrid grid">
                                            <Field name="firstname" render={({ input, meta }) => (
                                                <div className="field col-12 md:col-6 ">
                                                    <span className="p-float-label">
                                                        <InputText id="firstname" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                                        <label htmlFor="firstname" className={classNames({ 'p-error': isFormFieldValid(meta) })}>First Name</label>
                                                    </span>
                                                    {getFormErrorMessage(meta)}
                                                </div>
                                            )} />

                                            <Field name="lastname" render={({ input, meta }) => (
                                                <div className="field col-12 md:col-6">
                                                    <span className="p-float-label">
                                                        <InputText id="lastname" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                                        <label htmlFor="lastname" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Last Name</label>
                                                    </span>
                                                    {getFormErrorMessage(meta)}
                                                </div>
                                            )} />
                                        </div>
                                        <br />
                                        <div className="formgrid grid">
                                            <Field name="date" render={({ input }) => (
                                                <div className="field col-12 md:col-6">
                                                    <span className="p-float-label">
                                                        <Calendar id="date" {...input} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                                        <label htmlFor="date">Birthday</label>
                                                    </span>
                                                </div>
                                            )} />

                                            <Field name="gender" render={({ input }) => (
                                                <div className="field col-12 md:col-6 ">
                                                    <span className="p-float-label">
                                                        <Dropdown id="gender" {...input} options={genders} optionLabel="name" />
                                                        <label htmlFor="gender">Gender</label>
                                                    </span>
                                                </div>
                                            )} />
                                        </div>
                                        <br />
                                        <div className="formgrid grid">
                                        <Field name="phone" render={({ input, meta }) => (
                                            <div className="field col-12 md:col-6">
                                                <span className="p-float-label">
                                                    <InputText id="phone" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                                    <label htmlFor="phone" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Phone</label>
                                                </span>
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />
                                        <br />
                                        <Field name="email" render={({ input, meta }) => (
                                            <div className="field col-12 md:col-6">
                                                <span className="p-float-label p-input-icon-right">
                                                    <div className="pi pi-envelope" />
                                                    <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                                    <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Email</label>
                                                </span>
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />
                                         </div>
                                        <br />

                                        <div className="p-field p-col-12 p-md-4">
                                            <span className="p-float-label">
                                                <InputTextarea id="adress" value={value14} onChange={(e) => setValue14(e.target.value) }  rows={3} />
                                                <label htmlFor="adress">Adress</label>
                                            </span>
                                        </div>
                                 
                                        {/* <Field name="adress" render={({ input, meta }) => (
                                            <div className="p-field">
                                                <span className="p-float-label">
                                                    <InputText id="adress" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                                    <label htmlFor="adress" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Adress</label>
                                                </span>
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} /> */}
                                        <br />
                                        <Field name="notes" render={({ input, meta }) => (
                                            <div className="p-field">
                                                <span className="p-float-label">
                                                    <InputText id="notes" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                                    <label htmlFor="notes" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Notes</label>
                                                </span>
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />
                                        <br />
                                        <Button type="submit" label="Save" className="p-mt-2" />
                                    </form>
                                )} />
                            </div>

                        </div>
                    </div>
                </Sidebar>

            </div>

        </>
    );
}
export default Patient;