import Container from '../components/container';
import React, { useEffect, useState } from "react";
//import Axios from "axios";
//import FormDentist from './formDentist';
import Patient from "./patient";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

Axios.defaults.withCredentials = true;
useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn === true) {
            setRole(response.data.user[0].role);
        }
    });
}, []);

const PagPrincipal = () =>{
    const [role, setRole] = useState("");
    return(
        <div>
            <Container>
                <h1>Pagina principal</h1>
                {role === "admin" && <Admin />}
            </Container>
         
            <Patient />

        </div>

    );
}
export default PagPrincipal;
