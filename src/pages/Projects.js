import React from 'react';
import { Container, Row, Col,Card } from 'react-bootstrap';
import ProjectGallery from '../components/ProjectGallery';

const Projects = () => {
  return (
    <div style={{ paddingTop: '76px' }}>
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col>
            <div className="text-center py-5">
              <h1 className="display-4">Our Projects</h1>
              <p className="lead">Showcasing Excellence in Construction</p>
            </div>
          </Col>
        </Row>

        {/* Featured Projects Stats */}
        <Row className="mb-5 bg-primary text-white py-4 rounded">
          <Col lg={3} md={6} className="text-center mb-3">
            <h3>25+</h3>
            <p>Completed Projects</p>
          </Col>
          <Col lg={3} md={6} className="text-center mb-3">
            <h3>1M+</h3>
            <p>Total Project Value</p>
          </Col>
          <Col lg={3} md={6} className="text-center mb-3">
            <h3>10+</h3>
            <p>Awards Won</p>
          </Col>
          <Col lg={3} md={6} className="text-center mb-3">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </Col>
        </Row>

        {/* Project Categories */}
<Row className="mb-5">
  <Col>
    <h2 className="text-center mb-4">Project Categories</h2>
    <Row className="justify-content-center g-4">
      
      {/* Residential Card */}
      <Col lg={3} md={6} sm={6}>
        <Card className="h-100 shadow-sm border-0 rounded-4">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80"
            alt="Residential"
            style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
          />
          <Card.Body className="text-center">
            <Card.Title>Residential</Card.Title>
          </Card.Body>
        </Card>
      </Col>

      {/* Road Card */}
      <Col lg={3} md={6} sm={6}>
        <Card className="h-100 shadow-sm border-0 rounded-4">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1581090700220-9d3f7f657e25?auto=format&fit=crop&w=500&q=80"
            alt="Road"
            style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
          />
          <Card.Body className="text-center">
            <Card.Title>Road</Card.Title>
          </Card.Body>
        </Card>
      </Col>

      {/* Green Building Card */}
      <Col lg={3} md={6} sm={6}>
        <Card className="h-100 shadow-sm border-0 rounded-4">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1596089780192-d88ff8582b56?auto=format&fit=crop&w=500&q=80"
            alt="Green Building"
            style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
          />
          <Card.Body className="text-center">
            <Card.Title>Green Building</Card.Title>
          </Card.Body>
        </Card>
      </Col>

      {/* Renovations Card */}
      <Col lg={3} md={6} sm={6}>
        <Card className="h-100 shadow-sm border-0 rounded-4">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1598899134739-14cb9e828c21?auto=format&fit=crop&w=500&q=80"
            alt="Renovations"
            style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
          />
          <Card.Body className="text-center">
            <Card.Title>Renovations</Card.Title>
          </Card.Body>
        </Card>
      </Col>

    </Row>
  </Col>
</Row>




        {/* Project Gallery */}
          {/*  <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Featured Projects</h2>
            <ProjectGallery />
          </Col>
        </Row> */}

        {/* Client Testimonials */}
{/* Client Testimonials */}
<Row className="mb-5">
  <Col>
    <h2 className="text-center mb-4">What Our Clients Say</h2>
  </Col>
</Row>

<Row className="mb-5">
  <Col lg={4} md={6} className="mb-4">
    <Card className="h-100 shadow-sm border-0 rounded-4" style={{ backgroundColor: '#2e2e2e', color: '#fff' }}>
      <Card.Body className="p-4">
        <blockquote className="blockquote mb-0">
          <p className="mb-3">"Anbu Infra delivered our office building on time and within budget. The quality of work exceeded our expectations."</p>
          <footer className="blockquote-footer" style={{ color: '#d1d1d1' }}>
            <cite title="Source Title">Sarah Mitchell, CEO TechCorp</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  </Col>

  <Col lg={4} md={6} className="mb-4">
    <Card className="h-100 shadow-sm border-0 rounded-4" style={{ backgroundColor: '#2e2e2e', color: '#fff' }}>
      <Card.Body className="p-4">
        <blockquote className="blockquote mb-0">
          <p className="mb-3">"Our custom home renovation was handled with professionalism and attention to detail. Highly recommended!"</p>
          <footer className="blockquote-footer" style={{ color: '#d1d1d1' }}>
            <cite title="Source Title">Robert & Maria Garcia, Homeowners</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  </Col>

  <Col lg={4} md={6} className="mb-4">
    <Card className="h-100 shadow-sm border-0 rounded-4" style={{ backgroundColor: '#2e2e2e', color: '#fff' }}>
      <Card.Body className="p-4">
        <blockquote className="blockquote mb-0">
          <p className="mb-3">"The industrial facility was completed ahead of schedule. Anbu Infra's team is simply outstanding."</p>
          <footer className="blockquote-footer" style={{ color: '#d1d1d1' }}>
            <cite title="Source Title">David Thompson, Manufacturing Director</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  </Col>
</Row>


        {/* Awards Section */}
      {/*   <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Awards & Recognition</h2>
            <div className="row text-center">
              <div className="col-md-3 mb-3">
                <div className="p-3">
                  <div style={{ fontSize: '3rem' }}>🏆</div>
                  <h5>Builder of the Year 2025</h5>
                  <small className="text-muted">Construction Industry Awards</small>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="p-3">
                  <div style={{ fontSize: '3rem' }}>🌟</div>
                  <h5>Excellence in Commercial Construction</h5>
                  <small className="text-muted">Regional Building Association</small>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="p-3">
                  <div style={{ fontSize: '3rem' }}>🌱</div>
                  <h5>Green Building Champion</h5>
                  <small className="text-muted">Environmental Building Council</small>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="p-3">
                  <div style={{ fontSize: '3rem' }}>🎯</div>
                  <h5>Safety Excellence Award</h5>
                  <small className="text-muted">Occupational Safety Association</small>
                </div>
              </div>
            </div>
          </Col>
        </Row> */}
        
      </Container>
    </div>
  );
};

export default Projects;
