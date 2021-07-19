import React from 'react';
import income from '../../assets/assets/income.svg';
import outcome from '../../assets/assets/outcome.svg';
import total from '../../assets/assets/total.svg';

import { CardContainer } from './styles';

const img = {
  income,
  outcome,
  total,
};

interface CardProps {
  type: 'total' | 'income' | 'outcome';
}

export const Card: React.FC<CardProps> = ({ type }) => {
  const getCardname = (type: 'total' | 'income' | 'outcome') => {
    const titles = { total: 'Total', income: 'Entrada', outcome: 'Saída' };
    return titles[type];
  };

  return (
    <CardContainer type={type}>
      <div>
        <p>{getCardname(type)}</p>
        <h3>R$ 17.400,00</h3>
      </div>
      <div>
        <img src={img[type]} alt="indicador" />
      </div>
    </CardContainer>
  );
};
