"use client"

import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

export const DBChart = ({ChartType, ChartData}) => {

    // Define las opciones del gráfico
    const options = {
      series: [{
        data: ChartData.map(item => parseInt(item.qty, 10)),
      }],
      chart: {
        type: ChartType || bar,
        height: 300,
        width: 400,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        }
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ["#ffffff"], // Color blanco para el texto
        },
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: ChartData.map(item => item.date),
        labels: {
          style: {
            colors: '#ffffff', // Color blanco para el texto del eje
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#ffffff', // Color blanco para el texto del eje Y
          },
        },
      },
    };

    // Usa useEffect para renderizar el gráfico cuando el componente esté montado
    useEffect(() => {
      const chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
  
      // Limpia el gráfico cuando el componente se desmonte
      return () => {
        chart.destroy();
      };
    }, []); // El array de dependencias vacío asegura que useEffect solo se ejecute una vez al montar el componente

    
  return (
   <>
    <div id="chart">
      {/* El gráfico se renderizará aquí */}
    </div>
   </>
  );
};

export default DBChart;