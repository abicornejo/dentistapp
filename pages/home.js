import Container from '../components/container';
<<<<<<< HEAD
import React, {  useState } from "react";
//import Axios from "axios";
//import FormDentist from './formDentist';
import Patient from "./patient";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import Axios from "axios";
>>>>>>> 08c37d4ec534a08ccfaff7ae2773fa77915f0121

// Axios.defaults.withCredentials = true;
// useEffect(() => {
//     Axios.get("http://localhost:3001/login").then((response) => {
//         if (response.data.loggedIn === true) {
//             setRole(response.data.user[0].role);
//         }
//     });
// }, []);

<<<<<<< HEAD
const PagPrincipal = () =>{
    const [role, setRole] = useState("");
    return(
=======
const PagPrincipal = () => {
    return (
>>>>>>> 08c37d4ec534a08ccfaff7ae2773fa77915f0121
        <div>
            <Container>
                <h1>Pagina principal</h1>
                {role === "admin" && <Admin/>}
            </Container>
         
            <Patient />

        </div>

    );
}
export default PagPrincipal;
