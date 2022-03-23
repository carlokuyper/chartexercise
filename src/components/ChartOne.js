import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'Red',
        'Blue',
        'Yellow',
        'Green',
        'Purple',
        'Orange',
      ],
      borderWidth: 1,
    },
  ],
};

const ChartOne = () =>{
    return(
        <div>
            <h1>Doughnut Chart</h1>
            <div className="chart-con">
                <Doughnut data={data} />;
            </div>
        </div>
    )
}

export default ChartOne