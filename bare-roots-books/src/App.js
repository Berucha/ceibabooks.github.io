import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'; // Container for layout
import Home from './pages/Home'; // Home page
import Bookshelf from './pages/Bookshelf'; // Bookshelf page
import Profile from './pages/Profile'; // Profile page
import Footer from './components/Footer'; // Footer component
import NavigationBar from './components/Navbar'; // Reusable Navbar component
import './App.css'; // Global styles

function App() {
  return (
    <Router>
      {/* Renders the reusable Navbar at the top of every page */}
      <NavigationBar />

      <div className="main-content">
        <Routes>
          {/* Routing setup */}
          <Route path="/" element={<Home />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      {/* Renders the Footer at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;
