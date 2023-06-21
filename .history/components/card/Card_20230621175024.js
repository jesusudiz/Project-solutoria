import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


export function Card({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [data.nombreIndicador],
          datasets: [
            {
              label: data.unidadMedidaIndicador,
              data: [data.valorIndicador],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center w-200 h-300 border rounded-xl shadow-lg overflow-hidden">
    <div className="w-60%">
      <canvas ref={chartRef} />
    </div>
    <div className="ml-4">
      <span className="text-sm">{data.nombreIndicador}</span>
      <span className="text-sm">{data.fechaIndicador}</span>
      <span className="text-sm">{data.origenIndicador}</span>
    </div>
  </div>
  );
}
