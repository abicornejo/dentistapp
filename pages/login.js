import React, {useState, useEffect} from 'react';
import Container from '../components/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Link from "next/link";
import styles from '../components/styles/Layout.module.css';



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
                <div className="form-group">
                    <h1>Iniciar sesion</h1>
                    <br/>
                    <form >
                    <label>Usuario: </label>
                    <br/>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={(e)=>{
                            setUsername(e.target.value);
                        }}
                        placeholder="Ingrese su usuario "
                    />
                    <br/>
                    <label>Contraseña: </label>
                    <br/>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                        placeholder="Ingrese su contraseña "
                    />
                    <br/>
                    <h6>{loginStatus}</h6>
                    <button className="btn btn-primary" onClick={login}>Iniciar sesion</button>
                    </form>
                    <br/>
                    <Link href="/register">
                        <button className="btn btn-primary">Registrarse</button>
                    </Link>

                </div>
            </div>
        </div>
        </Container>
    );

}

export default Login;
