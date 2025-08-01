// src/components/Hero.jsx
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImg from '../assets/Hero.jpg';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <Container className="text-center">
        <Row className="align-items-center">
          <Col
            md={6}
            className="mb-4 mb-md-0 text-md-start text-center"
            data-aos="fade-right"
          >
            <h1 className="hero-title">
              Impulsamos el futuro energético con tecnología
            </h1>
            <p className="hero-subtitle">
              En <strong>METEC SAS</strong> diseñamos, implementamos y
              acompañamos proyectos de ingeniería eléctrica y energías
              renovables.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="#contacto"
              className="mt-3"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Contáctanos
            </Button>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img
              src={heroImg}
              alt="Hero METEC"
              className="img-fluid hero-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
