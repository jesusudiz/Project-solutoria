import React, { useEffect, useState } from 'react';

const IndicatorData = () => {
  const [indicators, setIndicators] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/indicator/all');
        if (!response.ok) {
          throw new Error('No se pudieron obtener los datos');
        }
        const data = await response.json();
        setIndicators(data);
        setError(null);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setError('Ocurrió un error al obtener los datos');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {indicators.map((data) => (
        <div key={data.id}>{data.nombreIndicador}</div>
      ))}
    </div>
  );
};

export default IndicatorData;
