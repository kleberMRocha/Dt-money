import React from 'react';
import { Container } from './style';

export const Table: React.FC = () => {
  return (
    <Container>
      <div className="table-head">
        <div>Título</div>
        <div>Preço</div>
        <div>Categoria</div>
        <div>Data</div>
      </div>
      <div className="table-item">
        <div>Desenvolvimento de site</div>
        <div>R$ 12.000,00</div>
        <div>Venda</div>
        <div>13/04/2021</div>
      </div>
      <div className="table-item">
        <div>Desenvolvimento de site</div>
        <div>R$ 12.000,00</div>
        <div>Venda</div>
        <div>13/04/2021</div>
      </div>
    </Container>
  );
};
