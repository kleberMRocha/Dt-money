import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/Cards';
import styled from 'styled-components';
import { Table } from '../components/Table';
import { ModalTdMoney, ModalTdMoneyEditar } from '../components/modal/index';
import { Request, ITransactions } from '../services/requests';
import { Loader } from '../components/Loader';
import { IUpadeDatas } from '../components/Header/filters/filters';
import { getFomat } from '../utils/getFormat';
import { PieChart, VerticalBarChart } from '../components/charts/index';
import { ChartContainer } from './style';

export interface ITransactionsList {
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
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const [transaction, setTransaction] = useState<ITransactionsList[]>(
    [] as ITransactionsList[]
  );

  const setInitialDatas = async () => {
    setIsloading(true);
    Request.transactions_index()
      .then((res) => setTransaction(res.data.reverse()))
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    setInitialDatas();
  }, []);

  const handleUpdateDashboardDatas = async (value: IUpadeDatas) => {
    if (value.reset) {
      await setInitialDatas();
      return;
    }
    setIsloading(true);
    Request.transactions_index()
      .then((res) => {
        const allTransactions: ITransactionsList[] = res.data;

        let filtredTransactions = allTransactions.filter((t) => {
          if (value.categoriaSelected === '' && !value.isFilterByData) return t;

          if (value.isFilterByData) {
            if (value.byMonth) {
              return value.categoriaSelected !== ''
                ? String(getFomat('date', t.transaction.data)).substring(3) ===
                    value.startDate &&
                    t.transaction.categoria === value.categoriaSelected
                : String(getFomat('date', t.transaction.data)).substring(3) ===
                    value.startDate;
            }

            return value.categoriaSelected !== ''
              ? getFomat('date', t.transaction.data) === value.startDate &&
                  t.transaction.categoria === value.categoriaSelected
              : getFomat('date', t.transaction.data) === value.startDate;
          }

          return t.transaction.categoria === value.categoriaSelected;
        });

        if (!value.transactionType.entrada && !value.transactionType.saida) {
          setTransaction(filtredTransactions);
          return;
        }

        if (!value.transactionType.entrada || !value.transactionType.saida) {
          const parm = !value.transactionType.entrada ? 'outcome' : 'income';
          const filtred = filtredTransactions.filter(
            (t) => t.transaction.tipo === parm
          );
          setTransaction(filtred);
          return;
        }

        setTransaction(filtredTransactions);
        setIsloading(false);
      })
      .finally(() => setIsloading(false));
  };

  return (
    <>
      <Header
        handleOpenModalEdit={setOpenModalEdit}
        handleUpadeDatas={handleUpdateDashboardDatas}
        handleOpenModal={setOpenModal}
      />
      <ModalTdMoney
        isOpen={openModal}
        handleOpenModal={setOpenModal}
        handleUpdateDash={setTransaction}
        transactions={transaction}
      />
      <ModalTdMoneyEditar
        isOpen={openModalEdit}
        handleOpenModal={setOpenModalEdit}
        handleUpdateDash={setTransaction}
        transactions={transaction}
      />
      <Contanainer>
        <Card type="income" transaction={transaction} />
        <Card type="outcome" transaction={transaction} />
        <Card type="total" transaction={transaction} />
      </Contanainer>
      {!isLoading ? (
        <>
          <Table transaction={transaction} />
          <ChartContainer>
            <VerticalBarChart
              data={transaction}
              title="Outcome por categoria"
              type="categoriasOutcome"
            />
            <VerticalBarChart
              data={transaction}
              title="Income por categoria"
              type="categoriasIncome"
            />
          </ChartContainer>
          <ChartContainer>
            <PieChart
              data={transaction}
              title="Income Vs OutCome"
              type="incomeVsOutcome"
            />
            <PieChart
              data={transaction}
              title="Pizza Por Categoria"
              type="byCategory"
            />
          </ChartContainer>
        </>
      ) : (
        <div className="loadContainer">
          <Loader />
        </div>
      )}
    </>
  );
};
