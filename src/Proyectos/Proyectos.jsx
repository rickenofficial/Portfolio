import styles from '../Proyectos/Proyectos.module.css';
import img3 from '../assets/img2Project.png'
import img4 from '../assets/coming_soon.jpg'
import github from '../assets/github.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import img2 from '../assets/project 1 img.png'
const Proyectos = () => {

    const tarjetas = [
      {
        image:[img2],
        name:'SLC-Events',
        descrip:'The SLC Events website is a one-stop event locator for Salt Lake City, Utah. A user visiting the site can select a range of dates and filter the type of event to see a list of their preference of events.',
        tecno:[html,css,js],
        url:'https://github.com/rickenofficial/SLC-Events',
      },

      {
        image:[img3],
        name:'DeadXFaces',
        descrip:"This is a E-Commerce website for Dead Faces clothing brand that has been revamped from it's original Shopify website. ",
        tecno:[html,css,js,],
        url:'https://github.com/rickenofficial/DeadXFaces',
      },

      {
        image:[img4],
        name:'Coming Soon',
        descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at feugiat libero, vitae cursus lectus.',
        tecno:[html,css,js],
        url:'#',
      },

      
    ]

    return (
        <section className={styles.Proyectos}>
            <h2>Projects</h2>
            <div className={styles.cards}>

                {
                  tarjetas.map((card,index) => {
                    return(
                      <div key={index} className={styles.card}>
                        <div className={styles.img}>
                          <img width='100%' height='250px' src={card.image} alt="" />
                        </div>

                        <h3>{card.name}</h3>

                        <p>{card.descrip}</p>

                        <div className={styles.tecno}>
                          <img width='30px' src={card.tecno[0]} alt="" />
                          <img width='30px' src={card.tecno[1]} alt="" />
                          <img width='30px' src={card.tecno[2]} alt="" />
                        </div>

                        <div className={styles.github}>
                          <a href={card.url}>
                            <img width='30px' src={github} alt="" />
                          </a>
                        </div>
                      </div>
                    )
                  })
                }
              

            </div>
        </section>
    )
}

export default Proyectos;