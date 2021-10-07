import Container from '../components/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navigation';

const Home = () =>{
    return(
        <div>
            <Navigation/>
            <Container>
                <h1>home</h1>
            </Container>
        </div>

    );
}
export default Home;
