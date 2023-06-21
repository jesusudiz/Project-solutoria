// import LayoutIndicators from '@components/viewcards/viewCards';
// import ViewCards from '@components/viewcards/viewCards';

export default function Home({ dataList }) {
  // const indicators = dataList[0].indicadores
console.log(dataList)
  return (
    // <LayoutIndicators>
    //   <ViewCards dataList={indicators} />
    // </LayoutIndicators>
    <div>
     mis datos
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/pages/api/indicator/all');
  const dataList = await response.json();

  return {
    props: {
      dataList,
    },
  };
}
