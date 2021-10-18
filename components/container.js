import Head from 'next/Head';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const Container = (props) =>(
    <div>
        <Head>
            <title>Dentista</title>
        </Head>

        <div className="container p-5">
            {props.children}
        </div>
    </div>
)

export default Container;


