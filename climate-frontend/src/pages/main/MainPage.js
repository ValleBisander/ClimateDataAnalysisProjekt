// src/pages/main/MainPage.js
import React from 'react';
import FeatureBox from '../../components/FeatureBox';
import './MainPage.css';


const features = [
  {
    title: 'Climate Visualization',
    description: 'Explore interactive climate charts and data visualizations.',
    path: '/climate-visualization',
    imagePath: '/graph.jpg'
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
          imagePath={`${process.env.PUBLIC_URL}${feature.imagePath}`}
        />
        
      ))}
    </div>
  );
};

export default MainPage;
