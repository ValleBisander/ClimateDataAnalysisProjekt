import React from 'react';
import FeatureBox from '../../components/FeatureBox';
import './ClimateVisualsPage.css';
import { Link } from 'react-router-dom';

const ClimateVisualsPage = () => {
  const features = [
    {
      title: 'Average Temperature Visuals',
      description: 'Discover visuals of the average temperature around the world',
      path: '/AvgTempPage',
      imagePath: '/temp.jpg'
    },
  ];

  return (
    <div className="ClimateVisuals-page">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Climate Visuals</h1>
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore">Explore</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <div className="feature-container">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              title={feature.title}
              description={feature.description}
              path={feature.path}
              imagePath={`${process.env.PUBLIC_URL}${feature.imagePath}`}
            />
          ))}
        </div>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Climate Data Analysis. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ClimateVisualsPage;
