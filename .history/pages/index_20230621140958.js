import React from "react";
import LayoutIndicators from '@components/viewcards/viewCards';
import ViewCards from '@components/viewcards/viewCards';

export default function Home() {
  const [indicators, setIndicators] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/indicator/all');
      const data = await response.json();
      setIndicators(data[0].indicadores);
    };

    fetchData();
  }, []);

  return (
    <LayoutIndicators>
      <ViewCards dataList={indicators} />
    </LayoutIndicators>
  );
}
