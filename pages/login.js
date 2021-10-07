import React, {useState} from 'react';
import Container from '../components/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import md5 from 'md5';
import Link from "next/link";
import PagPrincipal from "./home";

function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus]= useState("");
    const [user,setUser]= useState(null)


    const login=()=>{

        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        }).then((response)=>{

            if(response.data.message){
                setLoginStatus(response.data.message);
                console.log(response);
            }else{
                console.log(response);
                {PagPrincipal()};
            }
        });
    }

    const magSubmit=e=>{
        e.preventDefault();
    }


    return (
        <Container>
        <div className="containerPrincipal">
            <div className="containerSecundario">
                <div className="form-group">
                    <h1>Iniciar sesion</h1>
                    <br/>
                    <form onSubmit={magSubmit}>
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
                            setPassword(md5(e.target.value));
                        }}
                        placeholder="Ingrese su contraseña "
                    />
                    <br/>
                    <h6>{loginStatus}</h6>
                    <button className="btn btn-primary" onClick={login}>Iniciar sesion</button>
                    </form>
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
