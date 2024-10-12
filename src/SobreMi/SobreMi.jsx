import styles from "../SobreMi/SobreMi.module.css";
import Animacion from "../Animacion/Animacion.jsx";
import perfil from "../assets/imagen_ricardo.jpg";

const SobreMi = () => {
  return (
    <section className={styles.SobreMi}>
      <Animacion />
      <article className={styles.intro}>
        <div className={styles.img}>
          <img src={perfil} alt="Image about me smiling" />
        </div>
        <p>
          I am a Full Stack Engineer nearing the completion of my certification,
          with hands-on experience in developing and deploying web applications.
        </p>
        <div className={styles.adornos}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </article>

      <div className={styles.edu}>
        <h2>Education</h2>

        <div>
          <h3>
            Graduate of University of Utah Professional Education Boot Camps
          </h3>
          <h4>
            Proficient in HTML, CSS, Git, React, Node.js, JavaScript, Web APIs,
            Third-Party APIs, Express.js, SQL, ORM, MVC, NoSQL, and MERN stack.
          </h4>
        </div>

        <div>
          <h3></h3>
          <h4>7th Semester of Computer Systems Engineering at UNEFA</h4>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
