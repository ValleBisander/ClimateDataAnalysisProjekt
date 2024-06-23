import React, { useState, useEffect } from 'react';
import { get_country_data, get_static_data } from '../controller';

const CountryData = ({ countryName }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = get_country_data(countryName);
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getData();
  }, [countryName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data for {countryName}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img src={get_static_data(data.histogram_path)} alt={`${countryName} histogram`} />
    </div>
  );
};

export default CountryData;

