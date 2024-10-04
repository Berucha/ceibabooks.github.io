// src/components/CurrentRead.js
import React from 'react';
import { IconButton, LinearProgress, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../css/components/CurrentRead.css';

const CurrentRead = ({ book, onPlusClick }) => (
  <div className="book">
    <div className="progress-bar">
      <LinearProgress variant="determinate" value={book.progress} />
    </div>
    <div className="book-cover">
      <Typography variant="body" className="book-title">{book.title}</Typography>
      <Typography variant="body" className="book-author">{book.author}</Typography>
      <IconButton className="plus-button" onClick={() => onPlusClick(book)}>
        <AddIcon />
      </IconButton>
    </div>
  </div>
);

export default CurrentRead;