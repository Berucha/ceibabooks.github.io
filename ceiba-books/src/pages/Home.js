// src/pages/Home.js
import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/pages/Home.css';
import Bookshelf from '../components/Bookshelf';
import PlantSettings from '../components/PlantSettings';

function Home() {
  const navigate = useNavigate();
  const [decor, setDecor] = useState([]);
  const [plantList, setPlantList] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBouncingPlant, setShowBouncingPlant] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!isAuthenticated) {
      navigate('/signup');
    }

    // Fetch the list of plant images from the JSON file
    fetch('/plantsList.json')
      .then(response => response.json())
      .then(data => {
        setPlantList(data);
        setDecor([data[0], data[1], data[2]]);
      });
  }, [navigate]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleDecorChange = (index, event) => {
    const newDecor = [...decor];
    newDecor[index] = event.target.value;
    setDecor(newDecor);
  };

  const toggleBouncingPlant = () => {
    setShowBouncingPlant(!showBouncingPlant);
  };

  const resetPlantPositions = () => {
    const initialDecor = [plantList[0], plantList[1], plantList[2]];
    setDecor(initialDecor);
  };

  return (
    <Container className="p-5 mb-4 bg-light rounded-3">
      <div className="typewriter-container">
        <h1 className="display-4 typewriter-effect">Welcome Dearest Reader</h1>
      </div>
      <Bookshelf
        decor={decor}
        plantList={plantList}
        showBouncingPlant={showBouncingPlant}
      />
      <PlantSettings
        decor={decor}
        plantList={plantList}
        handleDecorChange={handleDecorChange}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        resetPlantPositions={resetPlantPositions}
        toggleBouncingPlant={toggleBouncingPlant}
        showBouncingPlant={showBouncingPlant}
        dropdownRef={dropdownRef}
      />
    </Container>
  );
}

export default Home;