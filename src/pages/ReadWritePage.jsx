import React from "react";
import { Link } from "react-router-dom";
import './ReadWritePage.css';

const ReadWritePage = () => {
  return (
    <div className="style-page">
      <div>
        <h1>Read/Write Learner</h1>
        <p>As a read/write learner, you understand best through reading and writing.</p>
        <ul>
            <li>Look into textbooks and articles</li>
            <li>Write reflections, reports, or summaries for what you learn</li>
            <li>Re-read and re-write important information</li>
            <li>Take notes during lectures</li>
        </ul>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
};

export default ReadWritePage;
