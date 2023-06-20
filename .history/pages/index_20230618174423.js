import React,{useEffect,useState} from 'react';


const HomePage = ({initialIndicators,currentPage}) => {
  const [indicators, setIndicators] = useState(initialIndicators);
  // const [filters, setFilters] = useState({});
  // const [searchQuery, setSearchQuery] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar la petición al backend con los filtros, búsqueda y página actual
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages/api/indicator/all?page=${currentPage}`);
        if (!response.ok) {
          throw new Error('No se pudieron obtener los datos');
        }
        const data = await response.json();
        setIndicators(data); // Actualizar el estado 'indicadores' con los datos obtenidos
        setError(null); // Limpiar el error si la petición fue exitosa
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setError('Ocurrió un error al obtener los datos'); // Almacenar el mensaje de error
      }
    };

    fetchData();
  }, [ currentPage]);

 

  return (
    <div className="flex bg-red-500 w-full">
      {indicators.map(data=>(<div key={data.id}>{data.nombreIndicador}</div>))}
    </div>
  );
};
export async function getServerSideProps(context) {
  const {query}=context;
  const { currentPage = 1 } = context.query;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/indicator/all?page=${currentPage}`);
    if (!response.ok) {
      throw new Error('No se pudieron obtener los datos iniciales');
    }
    const initialIndicators = await response.json();

    return {
      props: {
        initialIndicators,
        currentPage
      },
    };
  } catch (error) {
    console.error('Error al obtener los datos iniciales:', error);
    return {
      props: {
        initialIndicators: [],
        currentPage // Si ocurre un error, se asigna una lista vacía como datos iniciales
      },
    };
  }
}

export default HomePage;
