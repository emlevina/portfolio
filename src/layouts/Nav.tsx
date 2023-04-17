import ThemeSwitcher from '../components/ThemeSwitcher';
import styles from './nav.module.css'

const Nav = () => {
    return (
        <nav>
            <ul className={styles.menu}>
                <li><a href='mailto:katya.leemi@gmail.com'>katya.leemi@gmail.com</a></li>
                <li><a href='./Orlova_CV_Fullstack.pdf' target="_blank" rel="noopener noreferrer">CV</a></li>
                <ThemeSwitcher />
            </ul>
        </nav>
    )
}

export default Nav;