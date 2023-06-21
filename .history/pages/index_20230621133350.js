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
  const response = await fetch('http://localhost:3000/api/indicator/all');
  const dataList = await response.json();

  return {
    props: {
      dataList,
    },
  };
}
