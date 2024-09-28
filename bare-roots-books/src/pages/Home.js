import React from 'react'; // Imports React
import { Jumbotron, Button, Container } from 'react-bootstrap'; // Imports Bootstrap components

function Home() {
  return (
    <Container>
      {/* Creates a Jumbotron for the homepage with a welcome message */}
      <Jumbotron style={{ backgroundColor: '#faf5e6', padding: '2rem' }}>
        <h1 className="display-4">Welcome to Bare Roots Books</h1>
        <p className="lead">
          Dive into a world of enchanting stories and connect with fellow book lovers.
        </p>
        <hr className="my-4" />
        <p>
          Browse your bookshelf, track your reading journey, and more.
        </p>
        {/* Adds a button that links to the bookshelf */}
        <Button variant="success" href="/bookshelf">Explore the Bookshelf</Button>
      </Jumbotron>
    </Container>
  );
}

export default Home; // Exports the Home page component
