import Container from '../components/container';
import React, {  useState } from "react";
import Patient from "./patient";
//import Axios from "axios";
//import FormDentist from './formDentist';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Axios from "axios";


// Axios.defaults.withCredentials = true;
// useEffect(() => {
//     Axios.get("http://localhost:3001/login").then((response) => {
//         if (response.data.loggedIn === true) {
//             setRole(response.data.user[0].role);
//         }
//     });
// }, []);

const PagPrincipal = () =>{
    const [role, setRole] = useState("");

    return (
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
