import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/Cards';
import styled from 'styled-components';
import { Table } from '../components/Table';
import {ModalTdMoney} from '../components/modal/index';

const Contanainer = styled.main`
display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 0 18%;
width: 100%;
height: 100%;

@media(max-width: 800px) {
  &{
    padding: 0;
    height: 100%;
    justify-content: center;
    flex-wrap:wrap;
  }
  div{
    width: 80%;
    margin-right: 0;
  }
  div + div{
    margin-top: 1rem;
  }
}
`;



export const Dashboard: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header handleOpenModal={setOpenModal} />
      <ModalTdMoney isOpen={openModal} handleOpenModal={setOpenModal} />
      <Contanainer>
        <Card type="income"/>
        <Card type="outcome"/>
        <Card type="total"/>
      </Contanainer>
      <Table />
    </>
  );
};
