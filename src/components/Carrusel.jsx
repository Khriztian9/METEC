// src/components/Carrusel.jsx
import { Carousel, Container } from 'react-bootstrap';
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';
import car3 from '../assets/car3.jpg';
import './Carrusel.css';

function Carrusel() {
  return (
    <section className="carrusel-section" id="galeria">
      <Container data-aos="fade-up">
        <Carousel fade interval={4000}>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={car1}
              alt="Proyecto solar 1"
            />
            <Carousel.Caption>
              <h3>Proyecto Fotovoltaico 1</h3>
              <p>Sistema on-grid 10kW instalado en Risaralda</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={car2}
              alt="Proyecto solar 2"
            />
            <Carousel.Caption>
              <h3>Proyecto Híbrido</h3>
              <p>Soluciones con inversores Livoltek 5kW</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carrusel-img"
              src={car3}
              alt="Proyecto solar 3"
            />
            <Carousel.Caption>
              <h3>Subestaciones & Tableros</h3>
              <p>Instalaciones bajo norma RETIE</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default Carrusel;
