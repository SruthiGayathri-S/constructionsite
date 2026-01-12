import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Accordion  } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  return (
    <div style={{ paddingTop: '76px' }}>
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col>
            <div className="text-center py-5">
              <h1 className="display-4">Contact Us</h1>
              <p className="lead">Ready to start your construction project? Get in touch today!</p>
            </div>
          </Col>
        </Row>

        {/* Contact Form and Info */}
 <Row className="mb-5">
  {/* Contact Form */}
  <Col lg={8}>
    <Card className="shadow-sm h-100" style={{ backgroundColor: '#f2f2f2', color: '#222' }}>
      <Card.Body>
        <h3 className="mb-4">Get A Free Quote</h3>
        {showAlert && (
          <Alert variant="success">
            Thank you for your message! We'll get back to you within 24 hours.
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  style={{ backgroundColor: '#fff', color: '#222', border: '1px solid #ccc' }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  style={{ backgroundColor: '#fff', color: '#222', border: '1px solid #ccc' }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  style={{ backgroundColor: '#fff', color: '#222', border: '1px solid #ccc' }}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Project Type</Form.Label>
                <Form.Select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  style={{ backgroundColor: '#fff', color: '#222', border: '1px solid #ccc' }}
                  className="form-select-hover"
                >
                  <option value="residential">Machinery Rental</option>
                  <option value="industrial">Bricks Supply</option>
                  <option value="renovation">Renovation/Remodeling</option>
                  <option value="infrastructure">Road Services</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Project Details *</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Please describe your project requirements, timeline, and any specific details..."
              style={{ backgroundColor: '#fff', color: '#222', border: '1px solid #ccc' }}
            />
          </Form.Group>

          <Button type="submit" variant="primary" size="lg">
            Send Message
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </Col>

  {/* Contact Info */}
  <Col lg={4}>
    <Card className="shadow-sm h-100" style={{ backgroundColor: '#f2f2f2', color: '#222' }}>
      <Card.Body>
        <h4>Contact Information</h4>
        <div className="mb-3">
          <h6>📞 Phone</h6>
          <p>(555) 123-4567</p>
        </div>
        <div className="mb-3">
          <h6>📧 Email</h6>
          <p>info@anbuinfra.com</p>
        </div>
        <div className="mb-3">
          <h6>📍 Address</h6>
          <p>
            123 Construction Avenue
            <br />
            Building City, BC 12345
          </p>
        </div>
        <div className="mb-3">
          <h6>🕐 Business Hours</h6>
          <p>
            Monday - Friday: 7:00 AM - 6:00 PM
            <br />
            Saturday: 8:00 AM - 4:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </Card.Body>
    </Card>
  </Col>

  {/* Hover style for form select */}
  <style>
    {`
      .form-select-hover option:hover, 
      .form-select-hover:focus {
        background-color: #0d6efd; /* Bootstrap primary blue */
        color: #fff;
      }

      .form-select-hover:focus {
        outline: none;
        box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);
      }
    `}
  </style>
</Row>


        {/* Service Areas */}
        {/* <Row className="mb-5">
          <Col>
            <h3 className="text-center mb-4">Service Areas</h3>
            <p className="text-center">
              We proudly serve the following areas and surrounding regions:
            </p>
            <div className="row text-center">
              <div className="col-md-3 mb-2">
                <span className="badge bg-primary p-2">Building City</span>
              </div>
              <div className="col-md-3 mb-2">
                <span className="badge bg-primary p-2">Construction Town</span>
              </div>
              <div className="col-md-3 mb-2">
                <span className="badge bg-primary p-2">Development Heights</span>
              </div>
              <div className="col-md-3 mb-2">
                <span className="badge bg-primary p-2">Builder's Grove</span>
              </div>
              <div className="col-md-3 mb-2">
                <span className="badge bg-primary p-2">Carpenter Valley</span>
              </div>
              <div className="col-md-3 mb-2">
                <span className="badge bg-primary p-2">Mason Creek</span>
              </div>
              <div className="col-md-3 mb-2">
                <span className="badge bg-primary p-2">Architect Hills</span>
              </div>
              <div className="col-md-3 mb-2">
                <span className="badge bg-primary p-2">Engineer Bay</span>
              </div>
            </div>
          </Col>
        </Row>*/}

        {/* FAQ Section */}
     {/* FAQ Section */}
<Row className="mb-5">
  <Col>
    <h3 className="text-center mb-4">Frequently Asked Questions</h3>

    {/* FAQ Card */}
    <Card className="shadow-sm" style={{ backgroundColor: '#f2f2f2', color: '#222' }}>
      <Card.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How long does a typical project take?</Accordion.Header>
            <Accordion.Body>
              Project timelines vary based on scope and complexity. Residential projects typically take 3-8 months, while commercial projects can range from 6-18 months.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Do you provide free estimates?</Accordion.Header>
            <Accordion.Body>
              Yes! We provide detailed, free estimates for all potential projects. Simply contact us to schedule a consultation.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Are you licensed and insured?</Accordion.Header>
            <Accordion.Body>
              Absolutely. We are fully licensed and carry comprehensive insurance coverage for all our projects and workers.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Do you handle permits and inspections?</Accordion.Header>
            <Accordion.Body>
              Yes, we handle all necessary permits, inspections, and coordinate with local authorities throughout the construction process.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  </Col>
</Row>
{/* Google Map */}
{/* Google Map */}
<Row className="mb-5">
  <Col lg={12}>
    <Card className="shadow-sm mb-4" style={{ backgroundColor: '#f2f2f2', color: '#222' }}>
      <Card.Body>
        <h4 className="mb-3">Our Location</h4>
        <div style={{ width: '100%', height: '300px' }}>
          <iframe
            title="Anbu Infra Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.548127377189!2d79.389300!3d10.878267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5535003ca8543f%3A0x95199a9a1859e840!2sAnbu%20Infra%20Valangaiman!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Card.Body>
    </Card>
  </Col>
</Row>



      </Container>
    </div>
  );
};

export default Contact;
