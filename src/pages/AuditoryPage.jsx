import React from "react";
import { Link } from "react-router-dom";
import './AuditoryPage.css';

const AuditoryPage = () => {
  return (
    <div className="style-page">
      <div>
        <h1>Auditory Learner</h1>
        <p>As an auditory learner, you understand best through listening and speaking.</p>
        <ul>
          <li>Read and repeat content out loud</li>
          <li>Create and recite oral presentations</li>
          <li>Record lectures and re-listen to them</li>
          <li>Make your own verbal cues like pneumonics or jingles</li>
        </ul>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
};

export default AuditoryPage;
