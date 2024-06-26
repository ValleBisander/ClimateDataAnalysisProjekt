import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import CountryData from '../../components/ClimateCharts';
import { fetch } from '../../api';

const ClimateVisuals = () => {
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
    <div>
      <header>
        <h1>Climate Visuals</h1>
        <p>Explore average temperature trends by country</p>
      </header>
      <main>
        <div className="menu">
          <Select
            options={countries}
            onChange={setSelectedCountry}
            placeholder="Select a country"
          />
        </div>
        <div className="content">
          {selectedCountry && <CountryData countryName={selectedCountry.value} />}
        </div>
      </main>
    </div>
  );
};

export default ClimateVisuals;
