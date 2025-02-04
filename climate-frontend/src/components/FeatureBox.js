// src/components/FeatureBox.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeatureBox.css';

const FeatureBox = ({ title, description, path, imagePath }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
 
  return (
    <div className="feature-box" onClick={handleClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imagePath} alt={title} />
      
    </div>
  );
};

export default FeatureBox;
