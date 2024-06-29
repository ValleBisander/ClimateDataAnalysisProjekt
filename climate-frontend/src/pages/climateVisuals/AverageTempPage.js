import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import CountryData from '../../components/ClimateCharts';
import { fetch } from '../../api';
import './AverageTempPage.css';
import { Link } from 'react-router-dom'

const AvgTempPage = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const result = await fetch('/countriesList');
        setCountries(result.map(country => ({ label: country, value: country })));
      } catch (error) {
        console.error("Error fetching countries: ", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className='AverageTemp-page'>
      <header className='header'>
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
      <main className='center'>
        <div className="sidebar">
          <h2>Explore Average Temperature Trends</h2>
          <Select
            options={countries}
            onChange={setSelectedCountry}
            placeholder="Select a country"
            classNamePrefix="custom-select"
          />
        </div>
        <div className="content">
          {selectedCountry && (
            <>
              <h2>Data for {selectedCountry.value} from the year 1740 to 2013</h2>
              <CountryData countryName={selectedCountry.value} />
            </>
          )}
        </div>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Climate Data Analysis. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AvgTempPage;
