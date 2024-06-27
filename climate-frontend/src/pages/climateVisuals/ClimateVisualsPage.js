import React from 'react';
import FeatureBox from '../../components/FeatureBox';
import './ClimateVisualsPage.css';

const ClimateVisuals = () => {
  const features = [
    {
      title: 'Average temperatures around the world',
      description: 'Explore Average temperature trends',
      path: '/AvgTempPage'
    }
  ];

  return (
    <div className="ClimateVisuals-page">
      <header>
        <h1>Climate Visuals</h1>
        <p>Explore climate data visuals</p>
      </header>
      <div className="feature-container">
        {features.map((feature, index) => (
          <FeatureBox
            key={index}
            title={feature.title}
            description={feature.description}
            path={feature.path}
          />
        ))}
      </div>
    </div>
  );
};

export default ClimateVisuals;
