import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
        
          <Col md={6}>
            <h4>Quick Links</h4>
          <ul className="list-unstyled">
  <li><a href="/about" className="text-light text-decoration-underline">About Us</a></li>
  <li><a href="/services" className="text-light text-decoration-underline">Services</a></li>
  <li><a href="/projects" className="text-light text-decoration-underline">Projects</a></li>
  <li><a href="/contact" className="text-light text-decoration-underline">Contact</a></li>
</ul>

          </Col>
          <Col md={5}>
            <h4>Contact Info</h4>
            <p className="mb-1">📞 (555) 123-4567</p>
            <p className="mb-1">📧 info@anbuinfra.com</p>
            <p>📍 123 Construction Ave, Building City</p>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2026 Anbu Infra. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
