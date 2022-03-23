import React from "react";

import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { PolarArea } from 'react-chartjs-2';
  
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
  
  export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Colours ;)',
        data: [7, 8, 3, 5, 2, 3],
        backgroundColor: [
          'Red',
          'Blue',
          'Yellow',
          'Green',
          'Purple',
          'Orange'
        ],
        borderWidth: 1,
      },
    ],
  };

const ChartOne = () =>{
    return(
        <div>
            <h1>Polar Area Chart</h1>
            <div className="chart-con">
                <PolarArea data={data} />;
            </div>
        </div>
    )
}

export default ChartOne