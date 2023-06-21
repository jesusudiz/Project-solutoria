import LayoutIndicators from '@components/viewcards/viewCards';
import ViewCards from '@components/viewcards/viewCards';

export default function Home({ dataList }) {
  return (
    <LayoutIndicators>
      <ViewCards dataList={dataList} />
    </LayoutIndicators>
  );
}

export async function getStaticProps() {
  const response = await fetch('/api/indicator/all');
  const data = await response.json();

  return {
    props: {
      dataList: data[0].indicadores,
    },
  };
}
