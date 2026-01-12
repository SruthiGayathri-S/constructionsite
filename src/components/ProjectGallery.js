import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProjectGallery = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      description: "State-of-the-art commercial building with sustainable features",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Commercial"
    },
    {
      id: 2,
      title: "Luxury Residential Home",
      description: "Custom-built family home with premium finishes",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Residential"
    },
    {
      id: 3,
      title: "Industrial Warehouse",
      description: "Large-scale industrial facility with modern infrastructure",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Industrial"
    },
    {
      id: 4,
      title: "Shopping Center",
      description: "Multi-story retail complex with parking facilities",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Commercial"
    },
    {
      id: 5,
      title: "Apartment Complex",
      description: "Multi-family residential building with amenities",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Residential"
    },
    {
      id: 6,
      title: "Bridge Construction",
      description: "Infrastructure project connecting communities",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Infrastructure"
    }
  ];

  return (
    <Container>
      <Row>
        {projects.map((project) => (
          <Col lg={4} md={6} className="mb-4" key={project.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={project.image} 
                alt={project.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <small className="text-muted">Category: {project.category}</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectGallery;
