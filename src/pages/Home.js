import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HomeCarousel from '../components/HomeCarousel';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div style={{ paddingTop: '76px' }}>
      <HomeCarousel />
      
      <Container>
        {/* Welcome Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
          <br></br>
            <br></br>
              <br></br>
            <h2 className="display-4 mb-4">Welcome to Anbu Infra</h2>
            <p className="lead">
              Anbu Infra is a growing infrastructure and construction service provider,
              committed to delivering reliable and cost-effective solutions. Though we
              started our journey just a year ago, our focus on quality, transparency,
              and customer satisfaction sets us apart.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Get Started Today
            </Button>
          </Col>
        </Row>

        {/* Services Preview */}
        {/*<Row className="mb-5">
          <Col>
            <h2 className="text-center mb-5">Our Services</h2>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={3} md={6} className="mb-4">
            <ServiceCard 
              title="Machinery Rental"
              description="Well-maintained construction machinery available for short and long-term rental"
              icon="🚜"
              features={["Excavators", "Loaders", "Reliable Equipment"]}
            />
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <ServiceCard 
              title="Bricks Supply"
              description="Quality bricks supplied on time for residential and commercial projects"
              icon="🧱"
              features={["High Strength", "Bulk Supply", "On-Time Delivery"]}
            />
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <ServiceCard 
              title="Road Works"
              description="Execution of small to medium-scale road construction and repair works"
              icon="🛣️"
              features={["Pavement Works", "Drainage Support", "Durable Finishing"]}
            />
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <ServiceCard 
              title="Infrastructure Development"
              description="Support services for infrastructure and civil construction projects"
              icon="🏗️"
              features={["Civil Works", "Site Support", "Quality Execution"]}
            />
          </Col>
        </Row>*/}

        {/* Why Choose Us */}
        <Row className="mb-5 bg-light py-5">
          <Col lg={6} className="d-flex align-items-center">
            <div>
              <h3>Why Choose Anbu Infra?</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ <strong>Young & Dynamic Team</strong> with modern working practices</li>
                <li className="mb-2">✓ <strong>Customer-Focused Approach</strong> ensuring clear communication</li>
                <li className="mb-2">✓ <strong>Quality-Oriented Execution</strong> in every project we take up</li>
                <li className="mb-2">✓ <strong>Transparent Pricing</strong> with no hidden costs</li>
                <li className="mb-2">✓ <strong>On-Time Service</strong> with strong commitment to deadlines</li>
              </ul>
              <Button variant="outline-primary" href="/about">
                Learn More About Us
              </Button>
            </div>
          </Col>

          <Col lg={6}>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Infrastructure work"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
