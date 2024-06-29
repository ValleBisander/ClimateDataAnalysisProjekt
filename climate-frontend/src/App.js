// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import StartPage from './pages/start/StartPage';
import ExplorePage from './pages/main/ExplorePage';
import ClimateVisualization from './pages/climateVisuals/ClimateVisualsPage';
import AvgTempPage from './pages/climateVisuals/AverageTempPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/explore" element={<ExplorePage/>} />
          <Route path="/climate-visualization" element={<ClimateVisualization/>}/>
          <Route path="/AvgTempPage" element={<AvgTempPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App; 