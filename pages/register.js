import React, {useState} from 'react';
import Container from '../components/container';
import Link from 'next/Link';
import Axios from 'axios';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <div className="containerPrincipal">
            <div className="containerSecundario">
                <div className="form-group">
                    <h1>Registrar</h1>
                    <br/>
                    <form>
                    <label>Usuario: </label>
                    <br/>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Ingrese su usuario "
                        onChange={(e)=>{
                            setUsernameReg(e.target.value);
                        }}
                    />
                    <br/>
                    <label>Contraseña: </label>
                    <br/>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Ingrese su contraseña "
                        onChange={(e)=>{
                            setPasswordReg  (e.target.value);
                        }}
                    />
                    <br/>
                    <button className="btn btn-primary" onClick={register}>Registrarse</button>
                    </form>
                    <div>
                        <p>Ya tienes una cuenta?
                        <Link href="/login">
                            <a>Inicia sesion</a>
                        </Link>
                        </p>
                    </div>


                </div>
            </div>
        </div>
        </Container>
    );

}

export default Register;

