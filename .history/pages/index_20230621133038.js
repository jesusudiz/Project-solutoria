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
  const response = await fetch('/api/indicator/all');
  const dataList = await response.json();

  return {
    props: {
      dataList,
    },
  };
}
