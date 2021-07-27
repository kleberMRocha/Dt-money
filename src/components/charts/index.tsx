/* eslint-disable array-callback-return */
import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { ITransactionsList } from '../../pages/Dashboard';
import { ContainerPieChart } from './style';

interface IChart {
  title: string;
  data: ITransactionsList[];
  type: 'incomeVsOutcome' | 'categoriasIncome' | 'categoriasOutcome';
}

const chartType = {
  incomeVsOutcome: (data: ITransactionsList[]) => {
    const array = data.map((t) => t.transaction.tipo.trim());
    const values = data.map((v) => {
      return { tipo: v.transaction.tipo, preco: v.transaction.preco };
    });

    const count = { income: 0, outcome: 0 };

    values.forEach((t) => {
      if (t.tipo === 'outcome') {
        count.outcome = count.outcome += Number(t.preco);
        return;
      }
      count.income = count.income += Number(t.preco);
    });

    const uniqueItems = array.filter(
      (value, index, array) => array.indexOf(value) === index
    );

    const chartInfos = {
      labels: uniqueItems.map((l) => `R$ ${l}`),
      datasets: [
        {
          data: [count.income, count.outcome],
          backgroundColor: [
            'rgba(84, 168, 133, 0.2)',
            'rgba(187, 100, 119, 0.2)',
          ],
          borderColor: ['#5cc27e', '#b4415a'],
          borderWidth: 2,
        },
      ],
    };

    return chartInfos;
  },
  categoriasIncome: (data: ITransactionsList[]) => {
    const incomes = data.map((t) => {
      if (t.transaction.tipo === 'income') {
        return {
          categoria: t.transaction.categoria,
          preco: t.transaction.preco,
        };
      }
    });

    const incomeInfos = incomes.filter((i) => i?.categoria);

    const labels: (string | undefined)[] = incomes
      .map((i) => i?.categoria.trim())
      .filter(
        (i, index, array) => i !== undefined && array.indexOf(i) === index
      );

    const getColor = (isBackground: boolean) => {
      const colors = labels.map(() => {
        const randon = Math.random() * (255 - 100) + 1;
        const randonTwo = Math.random() * (30 - 1) + 1;

        return `rgba(${5}, ${Number(randon.toFixed(0))}, ${Number(
          randonTwo.toFixed(0)
        )}, ${isBackground ? 0.5 : 1})`;
      });

      return colors;
    };

    const values = labels.map((v) => {
      let filtredInfos = incomeInfos.filter((i) => {
        return i?.categoria.trim() === v;
      });

      let sumValues: number = 0;
      filtredInfos.forEach((value) => {
        if (value?.preco) {
          sumValues = Number(value?.preco) + sumValues;
        }
      });

      return sumValues;
    });

    const dataChart = {
      labels: labels,
      datasets: [
        {
          label: 'Entradas Valor em R$',
          data: values,
          backgroundColor: getColor(true),
          borderColor: getColor(false),
          borderWidth: 1,
        },
      ],
    };

    return dataChart;
  },
  categoriasOutcome: (data: ITransactionsList[]) => {
    const outcome = data.map((t) => {
      if (t.transaction.tipo === 'outcome') {
        return {
          categoria: t.transaction.categoria,
          preco: t.transaction.preco,
        };
      }
    });

    const incomeInfos = outcome.filter((i) => i?.categoria);

    const labels: (string | undefined)[] = outcome
      .map((i) => i?.categoria.trim())
      .filter(
        (i, index, array) => i !== undefined && array.indexOf(i) === index
      );

    const getColor = (isBackground: boolean) => {
      const colors = labels.map(() => {
        const randon = Math.random() * (255 - 1) + 1;
        const randonTwo = Math.random() * (30 - 1) + 1;

        return `rgba(${Number(randon.toFixed(0))}, ${6}, ${Number(
          randonTwo.toFixed(0)
        )}, ${isBackground ? 0.5 : 1})`;
      });

      return colors;
    };

    const values = labels.map((v) => {
      let filtredInfos = incomeInfos.filter((i) => {
        return i?.categoria.trim() === v;
      });

      let sumValues: number = 0;
      filtredInfos.forEach((value) => {
        if (value?.preco) {
          sumValues = Number(value?.preco) + sumValues;
        }
      });

      return Math.abs(sumValues);
    });

    const dataChart = {
      labels: labels,
      datasets: [
        {
          label: 'Entradas Valor em R$',
          data: values,
          backgroundColor: getColor(true),
          borderColor: getColor(false),
          borderWidth: 1,
        },
      ],
    };

    return dataChart;
  },
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

export const PieChart: React.FC<IChart> = ({ title, data, type }) => {
  return (
    <ContainerPieChart>
      <h2>{title}</h2>
      <Pie data={chartType[type](data)} />
    </ContainerPieChart>
  );
};

export const VerticalBarChart: React.FC<IChart> = ({ data, title, type }) => (
  <ContainerPieChart>
    <h2>{title}</h2>
    <Bar data={chartType[type](data)} options={options} />
  </ContainerPieChart>
);
