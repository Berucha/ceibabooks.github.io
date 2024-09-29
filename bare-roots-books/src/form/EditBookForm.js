import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function EditBookForm({ book, onEditBook }) {
  const [updatedBook, setUpdatedBook] = useState({ ...book });
  const [coverPreview, setCoverPreview] = useState(book.cover);

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook({ ...updatedBook, [name]: value });
  };

  // Handle image upload
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setCoverPreview(reader.result);
      setUpdatedBook({ ...updatedBook, cover: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1,
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onEditBook(updatedBook);
  };

  return (
    <div>
      <h3>Edit Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={updatedBook.title}
          onChange={handleChange}
          placeholder="Book Title"
          required
        />
        <input
          type="text"
          name="author"
          value={updatedBook.author}
          onChange={handleChange}
          placeholder="Author"
        />

        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the new book cover here...</p>
          ) : (
            <p>Drag & drop a new cover, or click to select one</p>
          )}
        </div>

        {/* Image Preview */}
        {coverPreview && <img src={coverPreview} alt="Book Cover Preview" />}

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditBookForm;
