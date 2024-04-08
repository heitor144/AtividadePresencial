import styles from './Header.module.css'
import imgLogo from '../assets/LogosReact.svg'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className={styles.header}>

            <img src={imgLogo} alt="React logo header" />
            <strong>Currículo com React</strong>

            <li><strong><Link to='./' className={styles.link_menu}>Sobre</Link></strong></li>
            <li><strong><Link to='./Experiencia' className={styles.link_menu}>Experiência</Link></strong></li>
            <li><strong><Link to='./Formacao' className={styles.link_menu}>Formação</Link></strong></li>
            <li><strong><Link to='./Competencias' className={styles.link_menu}>Competências</Link></strong></li>

        </header>
    )
}