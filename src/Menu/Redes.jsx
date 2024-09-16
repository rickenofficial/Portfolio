import styles from '../Menu/Redes.module.css'
import Linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'

const Redes = () => {
    return(
        <div className={styles.Redes}>
           <a href="https://www.linkedin.com/in/rickenofficial/">
            <img width='25px' src={Linkedin} alt="my linkedin profile" />
           </a>

           <a href="https://github.com/rickenofficial">
           <img width='25px' src={github} alt="my github profile" />
           </a>

           <a href="https://www.instagram.com/rickenofficial/">
           <img width='25px' src={instagram} alt="my instagram profile" />
           </a>
        </div>
    )
}

export default Redes;