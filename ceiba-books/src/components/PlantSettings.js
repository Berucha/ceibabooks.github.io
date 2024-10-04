// src/components/PlantSettings.js
import React, { useState } from 'react';
import { Button, Select, MenuItem, IconButton } from '@mui/material';

const PlantSettings = ({ decor, plantList, handleDecorChange, resetPlantPositions, toggleBouncingPlant, showBouncingPlant, dropdownRef }) => {
  const [showGearDropdown, setShowGearDropdown] = useState(false);
  const [showDecorDropdown, setShowDecorDropdown] = useState(false);

  return (
    <div className="bookshelf-buttons">
      <div className="plant-settings" ref={dropdownRef}>
        <IconButton className="plant-settings-button" onClick={() => setShowGearDropdown(!showGearDropdown)}>
          <i className="fas fa-cog"></i>
        </IconButton>
        {showGearDropdown && (
          <div className="dropdown-menu">
            {/* <Button onClick={resetPlantPositions}>Reset Plant Positions</Button> */}
            <Button onClick={toggleBouncingPlant}>
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
    </div>
  );
};

export default PlantSettings;