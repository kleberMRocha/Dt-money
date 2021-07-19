import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/Cards';
import styled from 'styled-components';
import { Table } from '../components/Table';
import { ModalTdMoney } from '../components/modal/index';
import { Request, ITransactions } from '../services/requests';
import { Loader } from '../components/Loader';

interface ITransactionsList {
  id: number;
  transaction: ITransactions;
}

const Contanainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 18%;
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    & {
      padding: 0;
      height: 100%;
      justify-content: center;
      flex-wrap: wrap;
    }
    div {
      width: 80%;
      margin-right: 0;
    }
    div + div {
      margin-top: 1rem;
    }
  }
`;

export const Dashboard: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [transaction, setTransaction] = useState<ITransactionsList[]>(
    [] as ITransactionsList[]
  );
  console.log(transaction);

  useEffect(() => {
    Request.transactions_index().then((res) => setTransaction(res.data));
  }, []);

  return (
    <>
      <Header handleOpenModal={setOpenModal} />
      <ModalTdMoney isOpen={openModal} handleOpenModal={setOpenModal} />
      <Contanainer>
        <Card type="income" />
        <Card type="outcome" />
        <Card type="total" />
      </Contanainer>
      {transaction.length ? (
        <Table transaction={transaction} />
      ) : (
        <div className="loadContainer">
          <Loader />
        </div>
      )}
    </>
  );
};