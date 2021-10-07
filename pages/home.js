import Container from '../components/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navigation';

const PagPrincipal = () =>{
    return(
        <div>
            <Navigation/>
            <Container>
                <h1>pagina principal</h1>
            </Container>
        </div>

    );
}
export default PagPrincipal;
