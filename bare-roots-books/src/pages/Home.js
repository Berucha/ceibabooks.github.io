import React, { useEffect } from 'react'; // Imports React and useEffect
import { Button, Container } from 'react-bootstrap'; // Imports Bootstrap components
import { useNavigate } from 'react-router-dom'; // Imports useNavigate for navigation
import '../css/pages/Home.css'

function Home() {
  const navigate = useNavigate();

  // Redirect to login or sign-up if the user is not authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated'); // Example auth check

    if (!isAuthenticated) {
      navigate('/signup'); // Redirect to signup/login page if not authenticated
    }
  }, [navigate]);

  return (
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="display-4 typewriter-effect">Welcome, Reader ...</h1>
      <p className="lead">
        Dive into a world of enchanting stories and connect with fellow book lovers.
      </p>
      <hr className="my-4" />
      <p>
        Browse your bookshelf, track your reading journey, and more.
      </p>
      {/* Explore the Bookshelf button */}
      <Button variant="success" href="/bookshelf">Explore the Bookshelf</Button>
    </Container>
  );
}

export default Home; // Exports the Home page component
