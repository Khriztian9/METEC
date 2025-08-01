// src/components/About.jsx
import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../assets/about1.png';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <h2 className="about-title">¿Quiénes somos?</h2>
            <p className="about-text">
              En <strong>METEC SAS</strong>, somos una empresa colombiana comprometida con el desarrollo de soluciones eléctricas y energías renovables de alta calidad.
              Contamos con un equipo de ingenieros expertos y técnicos certificados que garantizan eficiencia, seguridad y cumplimiento normativo en cada proyecto.
            </p>
            <p className="about-text">
              Nuestra experiencia abarca desde instalaciones fotovoltaicas residenciales hasta soluciones industriales, acompañando a nuestros clientes en diseño, ejecución y legalización bajo RETIE y CREG.
            </p>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img
              src={aboutImg}
              alt="Equipo METEC"
              className="img-fluid about-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
