import React from 'react'; // Imports React
import { Card } from 'react-bootstrap'; // Imports the Bootstrap Card component

function Book({ title, author, cover }) {
  return (
    // Renders the book inside a Bootstrap card
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      {/* Displays the book cover image */}
      <Card.Img variant="top" src={cover} />
      
      <Card.Body>
        {/* Displays the book title and author */}
        <Card.Title>{title}</Card.Title>
        <Card.Text>by {author}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Book; // Exports the Book component for reuse
