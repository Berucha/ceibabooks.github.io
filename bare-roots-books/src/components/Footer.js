import React from 'react'; // Imports React
import { Container, Row, Col } from 'react-bootstrap'; // Imports Bootstrap layout components
import '../css/components/Footer.css'

function Footer() {
  return (
    <footer className="ftr">
      <Container>
        <Row>
          <Col md={6}>
            {/* Displays the app name and copyright */}
            <p>&copy; 2024 Bare Roots Books. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            {/* Displays social media or other useful links */}
            <a href="/privacy-policy" className="policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer; // Exports the Footer component
