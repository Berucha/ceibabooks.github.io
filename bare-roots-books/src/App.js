import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Imports routing components
import { Navbar, Nav, Container } from 'react-bootstrap'; // Imports React Bootstrap components
import Home from './pages/Home'; // Imports the Home page component
import Bookshelf from './pages/Bookshelf'; // Imports the Bookshelf page component
import Profile from './pages/Profile'; // Imports the Profile page component
import './App.css'; // Imports the global styles

function App() {
  return (
    <Router>
      {/* Creates a navbar with navigation links */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Bare Roots Books</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Links to different pages */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/bookshelf">Bookshelf</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {/* Sets up routing for different pages */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bookshelf" component={Bookshelf} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App; // Exports the App component
