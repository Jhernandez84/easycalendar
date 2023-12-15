"use client"

import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

export const DBChart = ({ChartType}) => {

    // Define las opciones del gráfico
    const options = {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 430, 650, 140],
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
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
          'United States', 'China', 'Germany'
        ],
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