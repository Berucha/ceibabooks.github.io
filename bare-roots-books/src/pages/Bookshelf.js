import React from 'react'; // Imports React
import { Card, Row, Col } from 'react-bootstrap'; // Imports Bootstrap components
import booksData from '../data/booksData'; // Imports the book data

function Bookshelf() {
  return (
    <div>
      <h1>Your Cozy Bookshelf</h1>
      <Row>
        {/* Loops through the books and renders a Card for each one */}
        {booksData.map((book, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              {/* Displays the book cover */}
              <Card.Img variant="top" src={book.cover} />
              <Card.Body>
                {/* Displays the book title and author */}
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>by {book.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Bookshelf; // Exports the Bookshelf page component
