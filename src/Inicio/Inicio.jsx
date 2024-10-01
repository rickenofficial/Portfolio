import styles from "../Inicio/Inicio.module.css";
import Animacion from "../Animacion/Animacion";
const Inicio = () => {
  return (
    <section className={styles.Inicio}>
      <article className={styles.full}>
        <h1>Full Stack Engineer Developer</h1>
        <p>
          Programmer with a focus on web application development, I have skills
          in both the Front-end and Back-end.
        </p>
        <div className={styles.adornos}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </article>

      <div className={styles.botones}>
        <h2>Ricardo Rodriguez</h2>
        <div>
          <a href="mailto:rickenofficial@gmail.com">GMAIL</a>
          <a href="./Ricardo_Resume.pdf" download="/Ricardo_Resume">
            CV
          </a>
        </div>
        
          
        
      </div>

      <Animacion />
    </section>
  );
};

export default Inicio;
