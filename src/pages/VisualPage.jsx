// src/pages/VisualPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import './VisualPage.css';

const VisualPage = () => {
  return (
    <div className="style-page">
      <div>
        <h1>Visual Learner</h1>
        <p>As a visual learner, you understand best when information is presented in diagrams, charts, and images.</p>
        <ul>
          <li>Highlight/color code notes</li>
          <li>Create flashcards with images/drawings</li>
          <li>Draw mind maps or concept maps to organize information and visualize relationships</li>
          <li>Create visual presentations and share them</li>
        </ul>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
  
};

export default VisualPage;
