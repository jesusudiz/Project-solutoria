import React,{useEffect,useState} from 'react';


const HomePage = ({initialIndicators,currentPage}) => {
  const [indicators, setIndicators] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/indicator/all?page=${currentPage}`);
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
  }, [currentPage]);

  useEffect(() => {
    // Verificar si initialIndicators es un array válido
    if (Array.isArray(initialIndicators)) {
      setIndicators([...initialIndicators]);
    }
  }, [initialIndicators]);


  console.log(initialIndicators)

  return (
    <div className="flex bg-red-500 w-full">
       <div className="flex bg-red-500 w-full">
    {indicators.length === 0 ? (
      <div>No hay indicadores disponibles.</div>
    ) : (
      indicators.map(data => (
        <div key={data.id}>{data.nombreIndicador}</div>
      ))
    )}
  </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const { query } = context;
  const { currentPage = 1 } = query;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/indicator/all?page=${currentPage}`);
    if (!response.ok) {
      throw new Error('No se pudieron obtener los datos iniciales');
    }
    const initialIndicators = await response.json();

    return {
      props: {
        initialIndicators,
        currentPage: Number(currentPage),
      },
    };
  } catch (error) {
    console.error('Error al obtener los datos iniciales:', error);
    return {
      props: {
        initialIndicators: [],
        currentPage: Number(currentPage),
      },
    };
  }
}



export default HomePage;
