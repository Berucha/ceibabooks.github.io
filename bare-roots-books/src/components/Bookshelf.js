/* src/components/Bookshelf.js */
import React, { useState, useEffect } from 'react';
import '../css/components/Bookshelf.css';
import BouncingPlant from './BouncingPlant';


const Bookshelf = () => {
  const [decor, setDecor] = useState([]); // '🌿', '🌱'
  const [plantList, setPlantList] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBouncingPlant, setShowBouncingPlant] = useState(true); // State for plant icon visibility

  const books = [
    { title: 'Book 1', author: 'Author 1', progress: 70 }, // Added progress property
    { title: 'Book 2', author: 'Author 2', progress: 50 }, // Added progress property
    { title: 'Book 3', author: 'Author 3', progress: 30 }, // Added progress property
  ];

  useEffect(() => {
    // Fetch the list of plant images from the JSON file
    fetch('/plantsList.json')
      .then(response => response.json())
      .then(data => {
        setPlantList(data);
        setDecor([data[0], data[1], data[2]]); // Initialize decor with the first three images
      });
  }, []);

  const handleDecorChange = (index, event) => {
    const newDecor = [...decor];
    newDecor[index] = event.target.value;
    setDecor(newDecor);
  };

  const toggleBouncingPlant = () => {
    setShowBouncingPlant(!showBouncingPlant); // Toggle plant icon visibility
  };

  // Filter out the plants that are already shown
  const availablePlants = plantList.filter(plant => !decor.includes(plant));
  const bouncingPlant = availablePlants.length > 0 ? availablePlants[0] : null;
  const floorPlants = availablePlants.slice(1); // Remaining plants for the floor

  return (
    <div className="bookshelf">
      <div className="shelf">
        <div className="decor plant">
          <img src={decor[0]} alt="Plant 1" />
        </div>
        <div className="books">
          {books.map((book, index) => (
            <div key={index} className="book">
              <div className="progress-bar">
                <div className="progress" style={{ width: `${book.progress}%` }}></div>
              </div>
              <div className="book-cover">
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="decor plant">
          <img src={decor[1]} alt="Plant 2" />
        </div>
      </div>
      {showDropdown && (
        <div className="dropdown-container">
          {decor.map((item, index) => (
            <select key={index} value={item} onChange={(event) => handleDecorChange(index, event)}>
              {plantList.map((image, idx) => (
                <option key={idx} value={image}>
                  {image}
                </option>
              ))}
            </select>
          ))}
        </div>
      )}
      <div className="bookshelf-buttons">
        <button className="decor-settings-button" onClick={() => setShowDropdown(!showDropdown)}>
          Customize Decor
        </button>
        <button className="toggle-plant-icon-button" onClick={toggleBouncingPlant}>
          {showBouncingPlant ? 'Hide' : 'Show'} Bouncing Plant
        </button>
      </div>
      <div className="floor-decor">
        {floorPlants.map((plant, index) => (
          <img key={index} src={plant} alt={`Floor Plant ${index + 1}`} />
        ))}
      </div>
      {showBouncingPlant && bouncingPlant && <BouncingPlant selectedPlant={bouncingPlant} />} {/* Conditional rendering */}
    </div>
  );
};

export default Bookshelf;