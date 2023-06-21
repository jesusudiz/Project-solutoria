// import LayoutIndicators from '@components/viewcards/viewCards';
// import ViewCards from '@components/viewcards/viewCards';

export default function Home({ dataList }) {
  // const indicators = dataList[0].indicadores

  return (
    // <LayoutIndicators>
    //   <ViewCards dataList={indicators} />
    // </LayoutIndicators>
    <div>
      {dataList}
    </div>
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