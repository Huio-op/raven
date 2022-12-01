import styles from './NavBar.module.css'
import Link from "next/link";

const NavBar = ({userId}) => {

    return (
        <div className={styles.NavBarCentered}>
            <div className={styles.NavBar}>
                <Link href={'/home'} >
                    <h3>Página Inicial</h3>
                </Link>
                <Link href={`/profile/${userId}`} >
                    <h3>Perfil</h3>
                </Link>
                <Link href={'/groups'} >
                    <h3>Grupos</h3>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;