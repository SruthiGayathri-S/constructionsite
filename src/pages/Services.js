import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <div style={{ paddingTop: '76px' }}>
      <Container>

        {/* Hero Section */}
        <Row className="mb-5">
          <Col>
            <div className="text-center py-5">
              <h1 className="display-4">Our Services</h1>
              <p className="lead">Reliable Construction & Infrastructure Services</p>
            </div>
          </Col>
        </Row>

        {/* Services */}
        <Row className="mb-5">
          <Col lg={3} md={6} className="mb-4">
            <ServiceCard
              title="Machinery Rental"
              description="Well-maintained construction machinery available for short and long-term rental."
              icon="🚜"
              features={[
                "Excavators & Loaders",
                "Cranes & Rollers",
                "Flexible Rental Periods",
                "Regular Maintenance"
              ]}
              cardStyle={{
                backgroundColor: "#3a3a3a", // dark grey
                color: "white",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onLearnMore={() =>
                handleLearnMore({
                  title: "Machinery Rental",
                  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
                  details:
                    "We offer a wide range of construction machinery for rental, ensuring reliability, safety, and cost-effective solutions for your projects."
                })
              }
            />
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <ServiceCard
              title="Bricks Supply"
              description="High-quality bricks supplied for residential and commercial projects."
              icon="🧱"
              features={[
                "Red & Fly Ash Bricks",
                "Bulk Supply Available",
                "Consistent Quality",
                "On-Time Delivery"
              ]}
              cardStyle={{
                backgroundColor: "#3a3a3a",
                color: "white",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onLearnMore={() =>
                handleLearnMore({
                  title: "Bricks Supply",
                  image: "https://images.unsplash.com/photo-1597008641621-37a8b8f8d7e2",
                  details:
                    "We supply durable and high-strength bricks suitable for all types of construction needs, with timely delivery and competitive pricing."
                })
              }
            />
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <ServiceCard
              title="Road Works"
              description="Expert road construction and maintenance services."
              icon="🛣️"
              features={[
                "Asphalt & Concrete Roads",
                "Drainage Systems",
                "Resurfacing & Repairs",
                "Safety Compliance"
              ]}
              cardStyle={{
                backgroundColor: "#3a3a3a",
                color: "white",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onLearnMore={() =>
                handleLearnMore({
                  title: "Road Works",
                  image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
                  details:
                    "Our road works services include construction, resurfacing, and maintenance of roads with a focus on durability and safety standards."
                })
              }
            />
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <ServiceCard
              title="Infrastructure Development"
              description="Comprehensive infrastructure development solutions."
              icon="🏗️"
              features={[
                "Bridges & Utilities",
                "Public Infrastructure",
                "Industrial Infrastructure",
                "Project Execution"
              ]}
              cardStyle={{
                backgroundColor: "#3a3a3a",
                color: "white",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onLearnMore={() =>
                handleLearnMore({
                  title: "Infrastructure Development",
                image: "/images/home.jpg",
                  details:
                    "We deliver large-scale infrastructure development projects, supporting urban growth and industrial expansion with quality execution."
                })
              }
            />
          </Col>
        </Row>

        {/* MODAL */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedService?.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
              <Col xs={4}>
                <img
                  src={selectedService?.image}
                  alt={selectedService?.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: '120px' }}
                />
              </Col>
              <Col xs={8}>
                <p>{selectedService?.details}</p>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>
    </div>
  );
};

export default Services;
