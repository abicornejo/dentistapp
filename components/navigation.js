import Link from 'next/Link';
import styles from './styles/Layout.module.css';

const Navigation = () =>{
    

    return (

        <div>
            <nav className={styles.menu}>
                <label className={styles.logo}>DENTISTA</label>
                <ul className={styles.menuItems}>
                    <li>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/register">
                            <a>Register</a>
                        </Link>
                    </li>
                </ul>

            </nav>

        </div>
    );
}

export default Navigation;
