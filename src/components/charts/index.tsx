import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { ITransactionsList } from '../../pages/Dashboard';
import { ContainerPieChart } from './style';

interface IChart {
  title: string;
  data: ITransactionsList[];
  type: 'incomeVsOutcome' | 'categoriasIncome' | 'categoriasOutcome';
}

const strategy = {
  incomeVsOutcome: (data: ITransactionsList[]) => {
    const array = data.map((t) => t.transaction.tipo.trim());
    const count = { income: 0, outcome: 0 };

    array.forEach((t) => {
      if (t === 'outcome') {
        count.outcome = count.outcome += 1;
        return;
      }
      count.income = count.income += 1;
    });

    const uniqueItems = array.filter(
      (value, index, array) => array.indexOf(value) === index
    );

    const chartInfos = {
      labels: uniqueItems,
      datasets: [
        {
          data: [count.income, count.outcome],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
          borderWidth: 2,
        },
      ],
    };

    return chartInfos;
  },
  categoriasIncome: (data: ITransactionsList[]) => {
    const dataChart = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return dataChart;
  },
  categoriasOutcome: (data: ITransactionsList[]) => {
    const dataChart = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Oaa'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return dataChart;
  },
};

export const PieChart: React.FC<IChart> = ({ title, data, type }) => {
  return (
    <ContainerPieChart>
      <h2>{title}</h2>
      <Pie data={strategy[type](data)} />
    </ContainerPieChart>
  );
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export const VerticalBarChart: React.FC<IChart> = ({ data, title, type }) => (
  <ContainerPieChart>
    <h2>{title}</h2>
    <Bar data={strategy[type](data)} options={options} />
  </ContainerPieChart>
);
