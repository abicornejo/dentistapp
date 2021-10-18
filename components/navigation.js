import Link from 'next/Link';
import styles from './styles/Layout.module.css';

const Navigation = () =>{
    const Toggle = ()  => {
        const navToggle= document.querySelector(".btnMenu");
        const navMenu = document.querySelector(".menu");
        return(
            navToggle.addEventListener("click", ()=>{
                navMenu.classList.toggle(".menuItems")
            })
        )
    };

    return (

<<<<<<< HEAD
                        <li className="nav-item">
                            <Link href="/login">
                                <a className="nav-link">Login</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/register">
                                <a className="nav-link">Sign up</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
=======
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
>>>>>>> 08c37d4ec534a08ccfaff7ae2773fa77915f0121
    );
}

export default Navigation;
