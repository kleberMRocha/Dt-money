import React from 'react';
import dtlogo from '../../assets/assets/logo.svg';
import { HeaderDt } from './style';

export const Header: React.FC = () => {
  return (
    <HeaderDt>
      <header>
        <img src={dtlogo} alt="Logo DTmoney" />
        <button>Nova transação</button>
      </header>
    </HeaderDt>
  );
};
