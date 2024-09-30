/* src/components/Bookshelf.js */
import React, { useState, useEffect, useRef } from 'react';
import '../css/components/Bookshelf.css';
import BouncingPlant from './BouncingPlant';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Bookshelf = () => {
  const [decor, setDecor] = useState([]); // '🌿', '🌱'
  const [plantList, setPlantList] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBouncingPlant, setShowBouncingPlant] = useState(false); // State for plant icon visibility
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const dropdownRef = useRef(null);

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
    setShowBouncingPlant(!showBouncingPlant); // Toggle plant icon visibility
  };

  const resetPlantPositions = () => {
    // Reset plant positions to their initial state
    const initialDecor = [plantList[0], plantList[1], plantList[2]];
    setDecor(initialDecor);
  };

  // Filter out the plants that are already shown
  const availablePlants = plantList.filter(plant => !decor.includes(plant));
  const bouncingPlant = availablePlants.length > 0 ? availablePlants[0] : null;
  const floorPlants = availablePlants.slice(1); // Remaining plants for the floor

  // Drag and drop functionality
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);

    // Calculate the new position
    const offsetX = e.clientX - draggableElement.clientWidth / 2;
    const offsetY = e.clientY - draggableElement.clientHeight / 2;

    // Update the position of the draggable element
    draggableElement.style.left = `${offsetX}px`;
    draggableElement.style.top = `${offsetY}px`;

    e.dataTransfer.clearData();
  };

  const handlePlusClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  return (
    <div className="bookshelf" onDragOver={handleDragOver} onDrop={handleDrop}>
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
                <IconButton className="plus-button" onClick={() => handlePlusClick(book)}>
                  <AddIcon />
                </IconButton>
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
      </div>
      <div className="plant-settings">
        <button className="plant-settings-button" onClick={() => setShowDropdown(!showDropdown)}>
          <i className="fas fa-cog"></i>
        </button>
        {showDropdown && (
          <div className="dropdown-menu">
            <button onClick={resetPlantPositions}>Reset Plant Positions</button>
            <button onClick={toggleBouncingPlant}>
              {showBouncingPlant ? 'Disable' : 'Enable'} Bouncing Plant
            </button>
          </div>
        )}
      </div>
      <div className="floor-decor">
        {floorPlants.map((plant, index) => (
          <img
            key={index}
            id={`plant-${index}`}
            src={plant}
            alt={`Floor Plant ${index + 1}`}
            draggable="true"
            onDragStart={handleDragStart}
          />
        ))}
      </div>
      {showBouncingPlant && bouncingPlant && <BouncingPlant selectedPlant={bouncingPlant} />}
      <Dialog open={showModal} onClose={handleCloseModal}>
        <DialogTitle>Book Options</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What would you like to do with "{selectedBook?.title}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={() => { /* Implement submit book review */ }}>Submit Book Review</Button>
          <Button onClick={() => { /* Implement add to library */ }}>Add to Library</Button>
          <Button onClick={() => { /* Implement log reading progress */ }}>Log Reading Progress</Button>
          <Button onClick={() => { /* Implement add to TBR */ }}>Add to TBR</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Bookshelf;