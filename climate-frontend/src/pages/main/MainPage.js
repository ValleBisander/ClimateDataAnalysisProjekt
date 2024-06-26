// src/pages/main/MainPage.js
import React from 'react';
import FeatureBox from './FeatureBox';
import './MainPage.css';

const features = [
  {
    title: 'Climate Visualization',
    description: 'Explore interactive climate charts and data visualizations.',
    path: '/climate-visualization',
  },
  {
    title: 'Historical Data',
    description: 'Access and analyze historical climate data.',
    path: '/historical-data',
  },
  {
    title: 'Prediction Models',
    description: 'Learn about and use climate prediction models.',
    path: '/prediction-models',
  },

];

const MainPage = () => {
  return (
    <div className="main-page">
      {features.map((feature, index) => (
        <FeatureBox
          key={index}
          title={feature.title}
          description={feature.description}
          path={feature.path}
        />
      ))}
    </div>
  );
};

export default MainPage;
