import LayoutIndicators from '@components/viewcards/viewCards';
import ViewCards from '@components/viewcards/viewCards';

export default function Home({ dataList }) {
  return (
    <LayoutIndicators>
      <ViewCards dataList={dataList[0].indicadores} />
    </LayoutIndicators>
  );
}

export async function getStaticProps() {
  // Llamada a la función getStaticProps de all.js
  const { default: allIndicator } = await import('./api/indicator/all');
  const response = await allIndicator();
  const dataList = response.json();

  return {
    props: {
      dataList,
    },
  };
}
