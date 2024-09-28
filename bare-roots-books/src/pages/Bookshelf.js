import React from 'react'; // Imports React
import { Row, Col } from 'react-bootstrap'; // Imports Bootstrap layout components
import booksData from '../data/booksData'; // Imports book data
import Book from '../components/Book'; // Imports the reusable Book component

function Bookshelf() {
  return (
    <div>
      <h1>Your Cozy Bookshelf</h1>
      <Row>
        {/* Loops through the books and renders a Book component for each */}
        {booksData.map((book, index) => (
          <Col key={index} md={4} className="mb-4">
            <Book title={book.title} author={book.author} cover={book.cover} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Bookshelf; // Exports the Bookshelf page component
