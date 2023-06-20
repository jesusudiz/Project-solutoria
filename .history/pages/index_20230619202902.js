import React, { useEffect, useState } from 'react';
import Pagination from "@components/pagination/Pagination.js";

const IndicatorData = () => {
  const [indicators, setIndicators] = useState([]);
  const [error, setError] = useState(null);
  const[pagina,setPagina] =useState(0);
  const[paginas,setPaginas]=useState(0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/indicator/all');
        if (!response.ok) {
          throw new Error('No se pudieron obtener los datos');
        }
        const data = await response.json();
        const indicadoresData = data[0].indicadores;
        setIndicators(indicadoresData);
        setPagina(data[0].pagina);
        setPaginas(data[0].paginas)
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
      {error && <div>{error}:{error.message}</div>}
      {indicators.map((data) => (
        <div key={data.id}>{data.nombreIndicador}</div>
      ))}
      <Pagination/>
    </div>
  );
};

export default IndicatorData;
