import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Home page
import PersonalLibrary from './pages/PersonalLibrary'; // PersonalLibrary page
import Profile from './pages/Profile'; // Profile page
import Footer from './components/Footer'; // Footer component
import NavigationBar from './components/Navbar'; // Reusable Navbar component
import SignUp from './pages/SignUp';
import PetHome from './pages/PetHome';
import ComingSoon from './pages/ComingSoon'; // ComingSoon page
import plantsList from './plantsList.json'; // Import the JSON file
import './App.css'; // Global styles
import '../src/css/components/WandLight.css'; // Import the CSS for the custom wand cursor

function App() {
  return (
    <Router>
      {/* Add the custom-cursor-enabled class to apply the wand cursor across the app */}
      <div className="custom-cursor-enabled">
        {/* Renders the reusable Navbar at the top of every page */}
        <NavigationBar />

        <div className="main-content">
          <Routes>
            {/* Routing setup */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/pethome" element={<PetHome />} />
            <Route path="/PersonalLibrary" element={<PersonalLibrary />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
          </Routes>
        </div>

        {/* Renders the Footer at the bottom*/}
        <Footer floorPlants={plantsList} /> {/* Passing the plant list as a prop */}
      </div>
    </Router >
  );
}

export default App;
