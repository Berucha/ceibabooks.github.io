# **Ceiba Books**

**Ceiba Books** is an interactive web application that provides book lovers with a digital space to log, track, and showcase their reading journey. This project is tailored for nontraditional readers (e.g., audiobook listeners, e-book readers, book renters) and offers a unique 3D bookshelf visualization of their collections.

## **Features**

- **3D Bookshelf Preview**: A sneak peek into a future feature that will allow users to visualize their bookshelf in 3D.
- **Customizable Decor**: Users can personalize the interface with plant icons and other decorative elements.
- **Book Bingo Challenge**: A reading challenge in the form of a bingo card, allowing users to mark off completed challenges.
- **User Bookshelf**: Users can manually input book details, including title, author, and cover image, and display them on their personalized shelf.

## **Project Structure**

The project follows a clear and organized structure for scalability and maintainability:

```
ceiba-books/
├── public/                  # Static files (images, 3D models, etc.)
├── src/                     # Application source files
│   ├── components/          # Reusable components (Navbar, Footer, etc.)
│   ├── pages/               # Pages (Home, Bookshelf, Reading Challenge, etc.)
│   ├── css/                 # CSS files for components and pages
│   ├── form/                # Form components
│   ├── data/                # Data and mock data files
│   ├── App.js               # Main application component
│   └── index.js             # Application entry point
├── .gitignore               # Git ignore file
├── README.md                # Project documentation (this file)
└── package.json             # Project metadata and dependencies
```

## **Getting Started**

### **Prerequisites**

To run this project locally, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ceibabooks/ceibabooks.github.io.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd ceibabooks
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

The application should now be running on `http://localhost:3000/`.

## **Usage**

- **Bookshelf Preview**: Navigate to `/bookshelf` to preview the creator's reading list in a 3D format. (The feature is under construction for full user customization.)
- **Reading Challenge**: Users can engage with the Book Bingo feature by marking off books they have completed as part of the challenge.
- **Custom Bookshelf**: Once implemented, users will be able to upload or input book data to create their own custom 3D bookshelf.

## **Technologies Used**

- **React**: Frontend framework for building the interactive UI.
- **React Three Fiber**: For rendering 3D models and creating the bookshelf experience.
- **Bootstrap**: For quick and responsive layout and styling.
- **Three.js**: For 3D graphics and animations.

## **Contributing**

If you'd like to contribute to the development of **Ceiba Books**, feel free to fork the repository and submit a pull request. We welcome feedback and contributions!

1. Fork the project.
2. Create a new branch.
3. Commit your changes.
4. Open a pull request.

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
