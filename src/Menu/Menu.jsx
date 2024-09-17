import styles from '../Menu/Menu.module.css';
import { Link } from 'react-router-dom';
import Redes from './Redes';
import home from '../assets/Inicio.svg';
import project from '../assets/proyectos.svg';
import sobre from '../assets/sobremi.svg';


const Menu = () => {
    return(
        <header className={styles.header}>
            <span className={styles.logo}>Portfolio </span>

            <nav className={styles.nav}>

              <Link to='/Portfolio-React/'><span>H</span>ome</Link>

              <Link to='/Portfolio-React/proyectos'><span>P</span>rojects</Link>

              <Link to='/Portfolio-React/sobremi'><span>A</span>bout me</Link>

            </nav>

            <nav className={styles.navMobile}>
            
              <Link to='/Portfolio-React/'>
                <img width='40px' src={home} alt="" />
              </Link>


              <Link to='/Portfolio-React/proyectos'>
              <img width='40px' src={project} alt="" />
              </Link>


              <Link to='/Portfolio-React/sobremi'>
              <img width='40px' src={sobre} alt="" />
              </Link>

            </nav>


            <Redes/>
        </header>
    )
}

export default Menu;