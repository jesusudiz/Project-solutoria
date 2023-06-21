import React from 'react';
import Card from '@components/card/Card.js';

export  function ViewCards() {
    const [indicators, setIndicators] = React.useState([]);

    React.useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/api/indicator/all');
        const data = await response.json();
        console.log(data)
        setIndicators(data[0].indicadores);
      };
  
      fetchData();
    }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {indicators.map((indicador) => (
        <Card key={indicador.id} data={indicador} />
      ))}
    </div>
  );
}
