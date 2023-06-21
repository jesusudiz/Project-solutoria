import React from 'react';
import { Card } from '@components/card/Card.js';
import { Load } from '@components/loader/Load.js';

export function ViewCards() {
  const [indicators, setIndicators] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/indicator/all');
      const data = await response.json();
      console.log(data[0]);
      setIndicators(data);
    };

    fetchData();
  }, []);

  if (indicators.length === 0 || !indicators[0].indicadores) {
    return <Load />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {indicators[0].indicadores.map((indicador) => (
        <Card key={indicador.id} data={indicador} />
      ))}
    </div>
  );
}
