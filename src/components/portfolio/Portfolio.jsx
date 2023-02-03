import React from 'react'
import './portfolio.css'
import img1 from '../../assets/web1.png'
import img2 from '../../assets/web2.png'
import img3 from '../../assets/web3.png'

const data=[
{
  id:1,
  image:img1,
  title:'Ishiban Sushi',
  github:'https://github.com/',
  demo:'https://github.com/'

},
{
  id:2,
  image:img2,
  title:'Fotografia By Ana',
  github:'https://github.com/',
  demo:'https://github.com/'

},

{
  id:3,
  image:img3,
  title:'Salvaje',
  github:'https://github.com/',
  demo:'https://github.com/'

},
{
  id:2,
  image:img2,
  title:'Baberia',
  github:'https://github.com/',
  demo:'https://github.com/'

},

]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Nuestros trabajos</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary'target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio