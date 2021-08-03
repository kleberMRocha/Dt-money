import React, { useEffect, useMemo, useState } from 'react';
import income from '../../assets/assets/income.svg';
import outcome from '../../assets/assets/outcome.svg';
import total from '../../assets/assets/total.svg';
import { ITransactions } from '../../services/requests';
import { getFomat } from '../../utils/getFormat';
import eye from '../../assets/assets/eye.svg';
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
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let preferences = localStorage.getItem(`@dtMoneyCard_${type}`);
    if (preferences !== null) {
      preferences = JSON.parse(preferences);
      setHidden(Boolean(preferences));
    }
  }, []);

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

  const getClasse = (value: boolean) => {
    return value ? 'blurry' : '';
  };

  const typeValueCards = useMemo(() => {
    return {
      total: getSum(totalValueArray),
      income: getSum(incomeValue),
      outcome: getSum(outcomeValue),
    };
  }, [incomeValue, outcomeValue, totalValueArray]);

  return (
    <CardContainer
      hidden={hidden}
      type={type}
      isNagative={typeValueCards[type] < 0}
    >
      <button
        type="button"
        className="ocultar"
        onClick={() => {
          localStorage.setItem(`@dtMoneyCard_${type}`, JSON.stringify(!hidden));
          setHidden(!hidden);
        }}
      >
        <img src={eye} alt="ocultar valores" />
      </button>

      <div>
        <p>{getCardname(type)}</p>
        <h3 className={getClasse(hidden)}>
          {transaction.length ? getFomat('money', typeValueCards[type]) : '...'}
        </h3>
      </div>
      <div>
        <img src={img[type]} alt="indicador" />
      </div>
    </CardContainer>
  );
};
