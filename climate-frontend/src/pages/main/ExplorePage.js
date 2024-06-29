import React from 'react';
import FeatureBox from '../../components/FeatureBox';
import './ExplorePage.css';
import { Link } from 'react-router-dom';

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
    imagePath: '/historical.jpg' 
  },
  {
    title: 'Prediction Models',
    description: 'Learn about and use climate prediction models.',
    path: '/prediction-models',
    imagePath: '/models.jpg' 
  }
];

const ExplorePage = () => {
  return (
    <div className="main-page">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Explore</h1>
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

export default ExplorePage;
