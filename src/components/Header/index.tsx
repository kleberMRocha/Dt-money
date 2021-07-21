import React from 'react';
import dtlogo from '../../assets/assets/logo.svg';
import { HeaderDt } from './style';

interface IHeader {
  handleOpenModal: (value: boolean) => void;
}

export const Header: React.FC<IHeader> = ({ handleOpenModal }) => {
  return (
    <HeaderDt>
      <header>
        <img src={dtlogo} alt="Logo DTmoney" />
        <button onClick={() => handleOpenModal(true)}>Nova transação</button>
      </header>
    </HeaderDt>
  );
};
