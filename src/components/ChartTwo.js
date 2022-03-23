import React from "react";

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Radar } from 'react-chartjs-2';
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  
  export const data = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
      {
        label: 'Blue',
        data: [2, 6, 3, 5, 2, 3],
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 1,
      },
      {
        label: 'Red',
        data: [7, 6, 1, 8, 6, 2],
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

const ChartOne = () =>{
    return(
        <div>
            <h1>Radar Chart</h1>
            <div className="chart-con">
                <Radar data={data} />;
            </div>
        </div>
    )
}

export default ChartOne