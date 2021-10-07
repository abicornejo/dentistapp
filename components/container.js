import Head from 'next/Head';

const Container = (props) =>(
    <div>
        <Head>
            <title>Dentista</title>
        </Head>

        <div className="container p-4">
            {props.children}
        </div>
    </div>
)

export default Container;


