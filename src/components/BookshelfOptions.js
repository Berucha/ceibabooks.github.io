/* src/components/BookshelfOptions.js */
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BookshelfOptions = ({ showModal, handleCloseModal, selectedBook }) => {
  const navigate = useNavigate();

  return (
    <Dialog open={showModal} onClose={handleCloseModal}>
      <DialogTitle>Book Options</DialogTitle>
      <DialogContent>
        <DialogContentText>
          What would you like to do with "{selectedBook?.title}"?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>Cancel</Button>
        <Button onClick={() => navigate('/comingsoon')}>Submit Book Review</Button> {/*modal will change to allow them to log the details there. If they get here from a book already on the shelf then it will autopopulate metadata, otherwise they need to log it manually or have it linked to their library to choose from or google book api will allow for easy lookup */}
        <Button onClick={() => navigate('/comingsoon')}>Add to Library</Button> {/* google book api connection to add book of their choosing to their personal library */}
        <Button onClick={() => navigate('/comingsoon')}>Log Reading Progress</Button> {/* modal will change to allow them to log the details there. If they get here from a book already on the shelf then it will autopopulate metadata, otherwise they need to log it manually or have it linked to their library to choose from. */}
        <Button onClick={() => navigate('/comingsoon')}>Add to TBR</Button> {/* I want it to instead have a button animation when clicked */}
      </DialogActions>
    </Dialog>
  );
};

export default BookshelfOptions;