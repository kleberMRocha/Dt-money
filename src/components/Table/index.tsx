import React from 'react';
import { ITransactions } from '../../services/requests';
import { Container, Main } from './style';
import { getFomat } from '../../utils/getFormat';

interface ITransactionsList {
  id: number;
  transaction: ITransactions;
}
interface ITable {
  transaction: ITransactionsList[];
  hidenHeader?: boolean;
}

export const Table: React.FC<ITable> = ({ transaction, hidenHeader }) => {
  return (
    <>
      {!hidenHeader && (
        <Container>
          <div className="table-head">
            <div>Título</div>
            <div>Preço</div>
            <div>Categoria</div>
            <div>Data</div>
          </div>
        </Container>
      )}

      <Main>
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
      </Main>
      <span className="transactionCount">
        {transaction.length !== 0
          ? `Total de ${transaction.length} transações `
          : 'Nada encontrado tente limpar os filtros e tente novamente'}
      </span>
    </>
  );
};
