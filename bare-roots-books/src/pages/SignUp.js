// src/pages/SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/pages/SignUp.css'; // Custom CSS for styling the SignUp page

function SignUp() {
  // Initialize React state for managing input values
  const [username, setUsername] = useState(''); // Tracks the entered username
  const [email, setEmail] = useState(''); // Tracks the entered email

  const navigate = useNavigate(); // Allows navigation to other routes after sign-up

  // Handles the form submission for sign-up
  const handleSignUp = (e) => {
    e.preventDefault(); // Prevents default form behavior (page refresh)

    // Store user information in localStorage (simplified for this project)
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("isAuthenticated", "true"); // Marks user as authenticated

    // Redirect to the dashboard or homepage after sign-up
    navigate("/"); // Redirected Home
  };

  return (
    <div className="signup-container">
      {/* Sign-up form layout */}
      <div className="signup-form">
        <h1 className="signup-title">Join Bare Roots Books</h1> {/* Form title */}
        <form onSubmit={handleSignUp}>
          {/* Input for username */}
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Updates state on input change
            required
          />
          {/* Input for email */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updates state on input change
            required
          />
          {/* Sign-up button */}
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp; // Exports the SignUp component for use in routing
