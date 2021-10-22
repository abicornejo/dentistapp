import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { Sidebar } from 'primereact/sidebar';
import { InputTextarea } from 'primereact/inputtextarea';
import Axios from 'axios';
import AddPatients from "../pages/addPatients"


function Patient() {
    const [first_Name, setFirst_Name] = useState("");
    const [last_Name, setLast_Name] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setemail] = useState("");
    const [adress, setadress] = useState("");
    const [notes, setnotes] = useState("");
    const [visibleRight, setVisibleRight] = useState(false);
    const [genders, setGenders] = useState([
        { "name": "Female", "code": "Female" },
        { "name": "Male", "code": "Male" }
    ]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [jsonPat, setJsonPat] = useState({
        First_Name: "",
        Last_Name: "",
        Birthday: "",
        Gender: "",
        Phone: "",
        Email: "",
        Adress: "",
        Notes: ""
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
    }

    Axios.post('http://localhost:3001/patient', json)

        .then(response => {
            console.log(response)
            const patient = response.data.data;
            const temp = [patient];
            setResult(temp);
        })
        .catch((error) => {
            console.log(error);
        });

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


    const actualizaobj = (e) => { //debugger;

        const nombre = e.target.name;
        const value = e.target.value;
        const objTemp = jsonPat;
        objTemp[nombre] = value;
        setJsonPat(objTemp);

    };

    const dialogFooter = <div className="p-d-flex p-jc-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    return (
        <>
            <div>
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="p-mr-2" />
                <Sidebar visible={visibleRight} position="right" style={{ width: '40em' }} onHide={() => setVisibleRight(false)}>

                    <div className="form-demo">
                        <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                            <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                                <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                                <h5>Registration Successful!</h5>
                                <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                                    your account has been registered! <b>{formData.name}</b>
                                </p>
                            </div>
                        </Dialog>
                        <div className="p-d-flex text-center">
                            <div className="card">
                                <h2>Patient Details</h2><br /><br /><br />
                                <Form onSubmit={onSubmit} initialValues={{ name: '', date: null, gender: null, accept: false }} validate={validate} render={({ handleSubmit }) => (
                                    <form onSubmit={handleSubmit} className="p-fluid">

                                        <div className="formgrid grid">
                                            <Field name="firstname" render={({ input, meta }) => (
                                                <div className="field col-12 md:col-6 ">
                                                    <span className="p-float-label">
                                                        <InputText id="firstname" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} onInput={(e) => actualizaobj(e)} First Name="first_Name" />
                                                        <label htmlFor="firstname" className={classNames({ 'p-error': isFormFieldValid(meta) })}>First Name</label>
                                                    </span>
                                                    {getFormErrorMessage(meta)}
                                                </div>
                                            )} />
                                            <Field name="lastname" render={({ input, meta }) => (
                                                <div className="field col-12 md:col-6">
                                                    <span className="p-float-label">
                                                        <InputText id="lastname" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} onInput={(e) => actualizaobj(e)} Last Name="last_Name" />
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
                                                        <Calendar id="date" {...input} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon onInput={(e) => actualizaobj(e)} Birthday="birthday" />
                                                        <label htmlFor="date">Birthday</label>
                                                    </span>
                                                </div>
                                            )} />
                                            <Field name="gender" render={({ input }) => (
                                                <div className="field col-12 md:col-6 ">
                                                    <span className="p-float-label">
                                                        <Dropdown id="gender" {...input} options={genders} optionLabel="name" onInput={(e) => actualizaobj(e)} Gender="gender" />
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
                                                        <InputText id="phone" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} onInput={(e) => actualizaobj(e)} Phone="phone" />
                                                        <label htmlFor="phone" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Phone</label>
                                                    </span>
                                                    {getFormErrorMessage(meta)}
                                                </div>
                                            )} />
                                            <br />
                                            <Field name="email" render={({ input, meta }) => (
                                                <div className="field col-12 md:col-6">
                                                    <span className="p-float-label p-input-icon-right">
                                                        <i className="pi pi-envelope" />
                                                        <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} onInput={(e) => actualizaobj(e)} Email="email" />
                                                        <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Email</label>
                                                    </span>
                                                    {getFormErrorMessage(meta)}
                                                </div>
                                            )} />
                                        </div>
                                        <br />
                                        <Field name="adress" render={({ input, meta }) => (
                                            <div className="field col-12 md:col-12 ">
                                                <span className="p-float-label">
                                                    <InputTextarea id="adress" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} onInput={(e) => actualizaobj(e)} First Adress="adress" />
                                                    <label htmlFor="adress" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Adress</label>
                                                </span>
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />
                                        <Field name="notes" render={({ input, meta }) => (
                                            <div className="field col-12 md:col-6">
                                                <span className="p-float-label">
                                                    <InputText id="notes" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} onInput={(e) => actualizaobj(e)} Notes="notes" />
                                                    <label htmlFor="notes" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Notes</label>
                                                </span>
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />
                                        <br />
                                        <Button type="submit" label="Save" onClick={AddPatients} className="p-mt-2" />
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