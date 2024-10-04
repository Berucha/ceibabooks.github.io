// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../css/components/Footer.css';

function Footer({ floorPlants = [] }) {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* App name and copyright */}
          <Col md={12} className="text-center">
            <p className="footer-text">&copy; 2024 Ceiba Books. All rights reserved.</p>
          </Col>
          {/* Useful links and social icons */}
          <Col md={12} className="text-center">
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            <a href="/terms-of-service" className="footer-link">Terms of Service</a>
          </Col>
          {/* Social media icons centered */}
          <Col md={12} className="text-center mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social">
              <FaInstagram />
            </a>
          </Col>
          <Col md={12} className="text-center mt-2">
            <div className="floor-decor">
              {floorPlants.map((plant, index) => (
                <img
                  key={index}
                  id={`plant-${index}`}
                  src={plant}
                  alt={`Floor Plant ${index + 1}`}
                  className="footer-plant"
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;