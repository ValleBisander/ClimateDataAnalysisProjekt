import ClimateChart from './components/ClimateCharts';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Climate Data Visualization</h1>
        <ClimateChart countryName={'Zimbabwe'}  />
      </header>
    </div>
  );
}

export default App;
