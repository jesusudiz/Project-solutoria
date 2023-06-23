import React from 'react';
import { Card } from '@components/card/Card.js';
import { Load } from '@components/loader/Load.js';
import {Pagination} from '@components/pagination/Pagination.js';


export function ViewCards() {
  const [indicators, setIndicators] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/indicator/all?page=${currentPage}`);
      const data = await response.json();
      console.log(data[0]);
      setIndicators(data);
    };

    fetchData();
  }, [currentPage]);

  if (indicators.length === 0 || !indicators[0].indicadores) {
    return <Load />;
  }

  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full h-full">
        {indicators[0].indicadores.map((indicador) => (
          <Card key={indicador.id} data={indicador} />
        ))}
      </div>
      <Pagination pagina={indicators[0].pagina} total={indicators[0].paginas}  onPageChange={setCurrentPage}/>
    </>
     
  );
}
