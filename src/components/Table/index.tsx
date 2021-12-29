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
  hiddenHeader?: boolean;
  handleUpdateCurrent?: (transaction: ITransactions, id?: number) => void;
}

export const Table: React.FC<ITable> = ({
  transaction,
  hiddenHeader,
  handleUpdateCurrent,
}) => {
  return (
    <>
      {!hiddenHeader && (
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
        {transaction.map((tableIten, index) => {
          return (
            <Container
              onClick={() =>
                handleUpdateCurrent &&
                handleUpdateCurrent(tableIten.transaction, tableIten.id)
              }
              type={tableIten.transaction.tipo}
              key={`${tableIten.transaction.nome}_${index}`}
            >
              {hiddenHeader ? (
                <button>
                  <div className="table-item">
                    <div>{tableIten.transaction.nome}</div>
                    <div>{getFomat('money', tableIten.transaction.preco)}</div>
                    <div>{tableIten.transaction.categoria}</div>
                    <div>{getFomat('date', tableIten.transaction.data)}</div>
                  </div>
                </button>
              ) : (
                <div className="table-item">
                  <div>{tableIten.transaction.nome}</div>
                  <div>{getFomat('money', tableIten.transaction.preco)}</div>
                  <div>{tableIten.transaction.categoria}</div>
                  <div>{getFomat('date', tableIten.transaction.data)}</div>
                </div>
              )}
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
