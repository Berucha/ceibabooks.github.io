
import React from 'react'; // Imports React
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'; // Imports Bootstrap components for navigation
import '../css/components/Navbar.css';


function NavigationBar() {
  return (
    <Navbar bg="transparent" expand="lg" sticky="top" className="navbar shadow-sm"> {/* Sticky Navbar */}
      <Container>
        {/* App name or logo */}
        <Navbar.Brand href="/" className="navbarBrand">Bare Roots Books</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle button for mobile view */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* Collapsible menu for mobile view */}
          <Nav className="me-auto">
            {/* Links to different pages */}
            <Nav.Link href="/" className="navbar-link">Home</Nav.Link>
            <Nav.Link href="/bookshelf" className="navbar-link">Bookshelf</Nav.Link>
            <Nav.Link href="/profile" className="navbar-link">Profile</Nav.Link>

            {/* Dropdown menu for more links */}
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/terms">Terms of Service</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar; // Exports the NavigationBar component
