import React, { useMemo } from 'react';
import income from '../../assets/assets/income.svg';
import outcome from '../../assets/assets/outcome.svg';
import total from '../../assets/assets/total.svg';
import { ITransactions } from '../../services/requests';
import { getFomat } from '../../utils/getFormat';

import { CardContainer } from './styles';

interface ITransactionsList {
  id: number;
  transaction: ITransactions;
}

const img = {
  income,
  outcome,
  total,
};

interface CardProps {
  type: 'total' | 'income' | 'outcome';
  transaction: ITransactionsList[];
}

export const Card: React.FC<CardProps> = ({ type, transaction }) => {
  const getCardname = (type: 'total' | 'income' | 'outcome') => {
    const titles = { total: 'Total', income: 'Entrada', outcome: 'Saída' };
    return titles[type];
  };

  const transactionsByType = (
    type: 'outcome' | 'income',
    transaction: ITransactionsList[]
  ) => {
    const operations = transaction.map((value) => {
      if (value.transaction.tipo === type) {
        return value.transaction.preco;
      }
      return '0';
    });

    return operations;
  };

  let incomeValue = transactionsByType('income', transaction);

  let outcomeValue = transactionsByType('outcome', transaction);

  let totalValueArray = transaction.map((value) => value.transaction.preco);

  const getSum = (array: String[]) => {
    let totalNumber = 0;
    if (array.length) {
      array.forEach(
        (value) => (totalNumber = Number(value) + Number(totalNumber))
      );
    }

    return totalNumber;
  };

  const typeValueCards = useMemo(() => {
    return {
      total: getSum(totalValueArray),
      income: getSum(incomeValue),
      outcome: getSum(outcomeValue),
    };
  }, [incomeValue, outcomeValue, totalValueArray]);

  return (
    <CardContainer type={type} isNagative={typeValueCards[type] < 0}>
      <div>
        <p>{getCardname(type)}</p>
        <h3>
          {transaction.length ? getFomat('money', typeValueCards[type]) : '...'}
        </h3>
      </div>
      <div>
        <img src={img[type]} alt="indicador" />
      </div>
    </CardContainer>
  );
};
