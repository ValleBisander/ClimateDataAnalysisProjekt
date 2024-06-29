// src/components/StartPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css';

const StartPage = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate('/explore');
  };

  return (
    <div className="start-page">
      <h1>Climate Data Analysis</h1>
      <h2>Climate visuals and information</h2>
      <button onClick={navigateToMain} class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;EXPLORE&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;EXPLORE&nbsp;</span>
  </button>
 
    </div>
  );
};

export default StartPage;
