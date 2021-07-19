import React from 'react';
import { ITransactions } from '../../services/requests';
import { Container } from './style';
import { getFomat } from '../../utils/getFormat';

interface ITransactionsList {
  id: number;
  transaction: ITransactions;
}
interface ITable {
  transaction: ITransactionsList[];
}

export const Table: React.FC<ITable> = ({ transaction }) => {
  return (
    <>
      <Container>
        <div className="table-head">
          <div>Título</div>
          <div>Preço</div>
          <div>Categoria</div>
          <div>Data</div>
        </div>
      </Container>
      {transaction.map((tableIten) => {
        return (
          <Container type={tableIten.transaction.tipo} key={tableIten.id}>
            <div className="table-item">
              <div>{tableIten.transaction.nome}</div>
              <div>{getFomat('money', tableIten.transaction.preco)}</div>
              <div>{tableIten.transaction.categoria}</div>
              <div>{getFomat('date', tableIten.transaction.data)}</div>
            </div>
          </Container>
        );
      })}
    </>
  );
};
