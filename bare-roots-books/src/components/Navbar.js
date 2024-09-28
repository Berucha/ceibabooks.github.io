import React from 'react'; // Imports React
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'; // Imports Bootstrap components for navigation
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Imports social media icons from react-icons

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" style={{ backgroundColor: '#f7d8aa' }}> {/* Sticky Navbar */}
      <Container>
        {/* App name or logo */}
        <Navbar.Brand href="/" style={{ fontFamily: 'Amatic SC, cursive', fontSize: '2rem' }}>Bare Roots Books</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle button for mobile view */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* Collapsible menu for mobile view */}
          <Nav className="me-auto">
            {/* Links to different pages */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/bookshelf">Bookshelf</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>

            {/* Dropdown menu for more links */}
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/terms">Terms of Service</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Social media icons aligned to the right */}
          <Nav className="ml-auto">
            <Nav.Link href="https://facebook.com" target="_blank"><FaFacebook /></Nav.Link>
            <Nav.Link href="https://twitter.com" target="_blank"><FaTwitter /></Nav.Link>
            <Nav.Link href="https://instagram.com" target="_blank"><FaInstagram /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar; // Exports the NavigationBar component
