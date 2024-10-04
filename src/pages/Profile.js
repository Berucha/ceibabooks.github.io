// src/pages/Profile.js
import React, { useState } from 'react';
import BouncingPlant from '../components/BouncingPlant';
import '../css/pages/Profile.css';

// Dynamically import all images from the plants folder
const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

// Import all images from the folder
const plantList = importAll(require.context('../../public/cutie-plants/transBackground', false, /\.(png|jpe?g|svg)$/));
// Log the imported images to verify
console.log('Imported plant images:', plantList);

function Profile() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [userIcon, setUserIcon] = useState('path/to/default/icon.png'); // Replace with the default icon path
  const [backdropColor, setBackdropColor] = useState('#ffffff'); // Default backdrop color

  const handlePlantSelect = (plant) => {
    setSelectedPlant(plant);
  };

  const handleBackdropColorChange = (event) => {
    setBackdropColor(event.target.value);
  };

  return (
    <div className="profile-container" style={{ backgroundColor: backdropColor }}>
      <h1 className="profile-title">User Profile</h1>
      <p className="profile-description">This is where your favorite books and personal info will go. Choose your plant pet below!</p>

      {/* User Icon */}
      <div className="user-icon-container">
        <img src={userIcon} alt="User Icon" className="user-icon" />
      </div>

      {/* Backdrop Color Picker */}
      <div className="backdrop-color-picker">
        <label htmlFor="backdrop-color">Choose Backdrop Color: </label>
        <input
          type="color"
          id="backdrop-color"
          value={backdropColor}
          onChange={handleBackdropColorChange}
        />
      </div>

      {/* Plant pet grid for user selection */}
      <div className="plant-selection-grid">
        {plantList.map((plant, index) => (
          <img
            key={index}
            src={plant}
            alt={`Plant ${index + 1}`}
            className="plant-option"
            onClick={() => handlePlantSelect(plant)}
          />
        ))}
      </div>

      {/* Displays the selected plant */}
      {selectedPlant && (
        <div className="profile-plant-pet">
          <h2>Your Plant</h2>
          <BouncingPlant selectedPlant={selectedPlant} />
        </div>
      )}
    </div>
  );
}

export default Profile;