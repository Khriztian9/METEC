// src/components/Footer.jsx
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section bg-dark text-white" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-up">
            <h5 className="footer-title">METEC SAS</h5>
            <p className="footer-text">
              Ingeniería eléctrica y soluciones solares. Trabajamos con compromiso, calidad y cumplimiento en todo Colombia.
            </p>
          </Col>
          <Col md={6} className="text-md-end text-center" data-aos="fade-up" data-aos-delay="200">
            <p className="mb-2">Síguenos:</p>
            <a
              href="https://www.instagram.com/metectepower/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon me-3"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://wa.me/573175675743"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <p className="mt-3 footer-copy">© {new Date().getFullYear()} METEC SAS. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
