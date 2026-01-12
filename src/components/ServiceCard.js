import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ServiceCard = ({
  title,
  description,
  icon,
  features,
  image,
  onLearnMore
}) => {
  return (
    <Card className="service-ref-card">
      {/* IMAGE */}
      <div className="service-image-wrapper">
        <img src={image} alt={title} />
      </div>

      {/* CONTENT */}
      <Card.Body className="text-center">
        <div className="service-icon">{icon}</div>

        <Card.Title className="service-title">{title}</Card.Title>

        <Card.Text className="service-desc">{description}</Card.Text>

        <Button
          variant="light"
          className="service-btn"
          onClick={onLearnMore}
        >
          Learn More
        </Button>
      </Card.Body>

      {/* STYLES */}
      <style>
        {`
        .service-ref-card {
          background: #2e2e2e; /* updated dark grey */
          color: #fff;
          border: none;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.35);
          transition: all 0.3s ease;
          height: 100%;
        }

        .service-ref-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.6);
        }

        .service-image-wrapper {
          height: 170px;
          overflow: hidden;
        }

        .service-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .service-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .service-desc {
          font-size: 0.9rem;
          color: #d1d1d1; /* slightly lighter for contrast */
          margin-bottom: 1rem;
        }

        .service-btn {
          border-radius: 20px;
          padding: 6px 18px;
          font-size: 0.85rem;
        }
        `}
      </style>
    </Card>
  );
};

export default ServiceCard;
