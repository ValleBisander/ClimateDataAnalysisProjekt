import React, { useState, useEffect } from 'react';
import { fetch } from '../api';
import Plot from 'react-plotly.js';

const CountryData = ({ countryName }) => {
  const [plot, setPlot] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('/averageTempPerYear/' + countryName)
        setPlot(JSON.parse(result.graphJSON));
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

  return (
    <div>
      <Plot data={plot.data} layout={plot.layout}/>
    </div>
  );
};

export default CountryData;
