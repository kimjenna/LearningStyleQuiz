import React from "react";
import { Link } from "react-router-dom";
import './KinestheticPage.css';

const KinestheticPage = () => {
  return (
    <div className="style-page">
     <div>
      <h1>Kinesthetic Learner</h1>
        <p>As a kinesthetic learner, you understand best through physical activity and hands-on experiences.</p>
        <ul>
            <li>Build models or games involving new information</li>
            <li>Combine studying with small movement such as chewing gum or taking walks</li>
            <li>Create charades, gestures, or dance moves that correspond with concepts</li>
            <li>Role-play or simulate</li>
        </ul>
        <Link to="/">← Back to Home</Link>
     </div>
    </div>
  );
};

export default KinestheticPage;
