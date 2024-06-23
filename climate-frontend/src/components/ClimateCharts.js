import React, { useState, useEffect } from 'react';
import { get_country_data } from '../controller';

const CountryData = ({ countryName }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await get_country_data(countryName);
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [countryName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const histogramUrl = `http://127.0.0.1:5000/static/${data.histogram_path}`;

  return (
    <div>
      <h1>Data for {countryName}</h1>
      <img src={histogramUrl} alt={`${countryName} histogram`} />
    </div>
  );
};

export default CountryData;
