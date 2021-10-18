import Container from '../components/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import Axios from "axios";


const [role, setRole] = useState("");

Axios.defaults.withCredentials = true;
useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn === true) {
            setRole(response.data.user[0].role);
        }
    });
}, []);

const PagPrincipal = () => {
    return (
        <div>
            <Container>
                <h1>Pagina principal</h1>
                {role === "admin" && <Admin/>}
            </Container>
        </div>

    );
}
export default PagPrincipal;
