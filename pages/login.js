import React, {useState, useEffect} from 'react';
import Container from '../components/container';
import Axios from 'axios';
import Link from "next/link";
import styles from '../components/styles/Layout.module.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';


function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus]= useState("");


    Axios.defaults.withCredentials = true;

    const login=()=>{

        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus(response.data.user[0].username);
            }
        });
    }, []);



    return (
        <Container>

            <div className={styles.containerPrincipal}>
                <div className={styles.containerSecundario}>
                    <div className="p-fluid">
                        <h1>Iniciar sesion</h1>
                        <br/>
                        <form>
                            <label htmlFor="firstname1">Usuario</label>
                            <br/>
                            <InputText
                                type="text"
                                className="p-field"
                                name="username"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                placeholder="Ingrese su usuario "
                            />
                            <br/>
                            <label htmlFor="lastname1">Contraseña</label>
                            <br/>
                            <Password
                                className="p-field"
                                name="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                placeholder="Ingrese su contraseña "
                                toggleMask
                            />
                            <br/>
                            <h6>{loginStatus}</h6>
                            <Button label="Iniciar sesion" className="btn btn-primary" onClick={login}/>
                        </form>
                        <br/>
                        <Link href="/register">
                            <Button label="Registrarse" className="btn btn-primary"/>
                        </Link>

                    </div>
                </div>
            </div>
        </Container>
    );

}

export default Login;
