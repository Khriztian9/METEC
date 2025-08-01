// src/components/Servicios.jsx
import { Container, Row, Col } from 'react-bootstrap';
import './Servicios.css';

function Servicios() {
  return (
    <section className="servicios-section" id="servicios">
      <Container>
        <h2 className="section-title text-center mb-5" data-aos="fade-up">Nuestros Servicios</h2>
        <Row className="g-4">
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <div className="servicio-box">
              <i className="bi bi-lightning-charge servicio-icon"></i>
              <h4>Ingeniería Eléctrica</h4>
              <p>Diseño, montaje y legalización de sistemas eléctricos según RETIE.</p>
            </div>
          </Col>

          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <div className="servicio-box">
              <i className="bi bi-sun servicio-icon"></i>
              <h4>Energía Solar</h4>
              <p>Sistemas fotovoltaicos on-grid, híbridos y aislados con inversores Livoltek.</p>
            </div>
          </Col>

          <Col md={4} data-aos="fade-up" data-aos-delay="300">
            <div className="servicio-box">
              <i className="bi bi-tools servicio-icon"></i>
              <h4>Mantenimiento</h4>
              <p>Revisión, diagnóstico y mantenimiento preventivo y correctivo.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Servicios;
