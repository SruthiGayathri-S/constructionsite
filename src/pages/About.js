import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div style={{ paddingTop: '76px' }}>
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col>
            <div className="text-center py-5">
              <h1 className="display-4">Get to Know us</h1>

              <p className="lead">Building with Commitment</p>
            </div>
          </Col>
        </Row>

        {/* Company Story */}
        <Row className="mb-5">
          <Col lg={6}>
            <h2>Our Story</h2>
            <br></br>
            <p>
              Anbu Infra was founded on <strong>February 4, 2024</strong>, with a clear
              vision to provide dependable and quality-focused infrastructure and
              construction services. What began as a passionate initiative has grown
              into a trusted service provider for machinery rental, bricks supply,
              road works, and infrastructure support.
              As a growing company, we emphasize transparency, timely execution,
              and strong client relationships. Every project we take up is handled
              with dedication, responsibility, and attention to detail.
            </p>
          </Col>
          <Col lg={6}>
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Construction site"
              className="img-fluid rounded"
            />
          </Col>
        </Row>


{/* Mission, Vision & Values */}
<Row className="mb-5">
  {[
    {
      icon: '🎯',
      title: 'Our Mission',
      content: (
        <p>
          To deliver reliable construction and infrastructure services with
          a strong focus on quality, safety, and customer satisfaction.
        </p>
      )
    },
    {
      icon: '👁️',
      title: 'Our Vision',
      content: (
        <p>
          To grow as a trusted infrastructure partner by consistently delivering
          value-driven and sustainable construction solutions.
        </p>
      )
    },
    {
      icon: '💎',
      title: 'Our Values',
      content: (
        <ul className="list-unstyled mt-3">
          <li>Integrity & transparency</li>
          <li>Quality-focused execution</li>
          <li>Commitment to timelines</li>
          <li>Safety-first approach</li>
          <li>Customer trust</li>
        </ul>
      )
    }
  ].map((item, index) => (
    <Col lg={4} className="mb-4" key={index}>
      <div
        className="h-100 text-center p-4"
        style={{
          backgroundColor: '#f1f1f1',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#dee2e6';
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f1f1f1';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ fontSize: '40px', marginBottom: '15px' }}>
          {item.icon}
        </div>
        <h4>{item.title}</h4>
        {item.content}
      </div>
    </Col>
  ))}
</Row>


    {/* Founder */}
<Row className="mb-5">
  <Col>
    <h2 className="text-center mb-4">Founder</h2>
  </Col>
</Row>


 <Row
  className="mb-5 align-items-center p-4 rounded"
  style={{
    backgroundColor: "#f2f2f2",
    transition: "transform 0.3s ease",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
>
  {/* LEFT - Founder Image */}
  <Col lg={4} md={5} className="text-center mb-3 mb-md-0">
   <img
  src={require('../pages/image.png')}  // ✅ use your local image
  alt="Founder"
  className="img-fluid rounded shadow"
  style={{
    maxWidth: "220px",   // 🔹 keep size as before
  }}
/>

    <h4 className="mt-3">Anbuprabhu</h4>
  </Col>

  {/* RIGHT - Text */}
  <Col
    lg={8}
    md={7}
    style={{
      animation: "slideIn 1s ease forwards",
    }}
  >
    <p>
      Anbuprabhu founded Anbu Infra with a clear vision to build a dependable and
      quality-driven infrastructure service company. With a strong focus on
      integrity, transparency, and timely execution, he leads the company with
      dedication and responsibility.
    </p>
    <p>
      His hands-on approach and commitment to customer satisfaction ensure that
      every project reflects the values and standards of Anbu Infra.
    </p>
  </Col>

  {/* Inline animation */}
  <style>
    {`
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `}
  </style>
</Row>


      </Container>
    </div>
  );
};

export default About;
