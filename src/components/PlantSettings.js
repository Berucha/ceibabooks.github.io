// src/components/PlantSettings.js
import React, { useState } from 'react';
import { Button, Select, MenuItem, IconButton } from '@mui/material';
import BouncingPlant from './BouncingPlant';

const PlantSettings = ({ decor, plantList, handleDecorChange, resetPlantPositions, dropdownRef }) => {
  const [showGearDropdown, setShowGearDropdown] = useState(false);
  const [showDecorDropdown, setShowDecorDropdown] = useState(false);
  const [showBouncingPlant, setShowBouncingPlant] = useState(false);

  const availablePlants = plantList.filter(plant => !decor.includes(plant));
  const bouncingPlant = availablePlants.length > 0 ? availablePlants[0] : null;

  return (
    <div className="bookshelf-buttons">
      <div className="plant-settings" ref={dropdownRef}>
        <IconButton className="plant-settings-button" onClick={() => setShowGearDropdown(!showGearDropdown)}>
          <i className="fas fa-cog"></i>
        </IconButton>
        {showGearDropdown && (
          <div className="dropdown-menu">
            <Button onClick={resetPlantPositions}>
              Reset Plant Positions
            </Button>
            <Button onClick={() => setShowBouncingPlant(!showBouncingPlant)}>
              {showBouncingPlant ? 'Disable' : 'Enable'} Bouncing Plant
            </Button>
            <Button onClick={() => setShowDecorDropdown(!showDecorDropdown)}>
              Customize Decor
            </Button>
          </div>
        )}
      </div>
      {showDecorDropdown && (
        <div className="dropdown-container">
          {decor.map((item, index) => (
            <Select
              key={index}
              value={item}
              onChange={(event) => handleDecorChange(index, event.target.value)}
            >
              {plantList.map((image, idx) => (
                <MenuItem key={idx} value={image}>
                  {image}
                </MenuItem>
              ))}
            </Select>
          ))}
        </div>
      )}
      {showBouncingPlant && bouncingPlant && <BouncingPlant selectedPlant={bouncingPlant} />}
    </div>
  );
};

export default PlantSettings;