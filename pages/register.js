import React, {useState} from 'react';
import Container from '../components/container';
import Link from 'next/Link';
import Axios from 'axios';
import swal from 'sweetalert';
import styles from '../components/styles/Layout.module.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

function Register () {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register=()=>{
        Axios.post('http://localhost:3001/add', {
            username: usernameReg,
            password: passwordReg,
        }).then((response)=>{
            console.log(response);
        });

    }

    return (
        <Container>
        <div className={styles.containerPrincipal}>
            <div className={styles.containerSecundario}>
                <div className="p-fluid">
                    <h2 className="p-text-center">Registrar</h2>
                    <br/>
                    <form >
                        <label htmlFor="firstname1">Usuario</label>
                    <br/>
                    <InputText
                        type="text"
                        className="p-field"
                        name="username"
                        placeholder="Ingrese su usuario "
                        onChange={(e)=>{
                            setUsernameReg(e.target.value);
                        }}
                    />
                    <br/>
                        <label htmlFor="lastname1">Contraseña</label>
                    <br/>
                    <Password
                        className="p-field"
                        name="password"
                        placeholder="Ingrese su contraseña "
                        onChange={(e)=>{
                            setPasswordReg  (e.target.value);
                        }}
                        toggleMask
                    />
                    <br/>
                    <Button label="Registrarse" className="btn btn-primary" onClick={register}/>
                    </form>
                    <br/>
                    <div>
                        <label>Ya tienes una cuenta?
                        <Link href="/login">
                            <a>Inicia sesion</a>
                        </Link>
                        </label>
                    </div>


                </div>
            </div>
        </div>
        </Container>
    );

}

export default Register;

