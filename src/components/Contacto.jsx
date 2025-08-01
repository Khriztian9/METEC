// src/components/Contacto.jsx
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contacto.css';

function Contacto() {
  return (
    <section className="contacto-section" id="contacto">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} data-aos="fade-up">
            <h2 className="contacto-title text-center mb-4">Contáctanos</h2>
            <p className="text-center mb-5 contacto-subtext">
              ¿Tienes un proyecto en mente o necesitas asesoría? Escríbenos y nos pondremos en contacto contigo.
            </p>
            <Form>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Tu nombre" required />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="correo@ejemplo.com" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formMensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Cuéntanos en qué podemos ayudarte" required />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" size="lg" type="submit">
                  Enviar mensaje
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contacto;
