import React, { useState } from 'react';
import dtlogo from '../../assets/assets/logo.svg';
import filterSolid from '../../assets/assets/filter-solid.svg';
import { HeaderDt } from './style';
import { Filters } from './filters/filters';
import 'react-datepicker/dist/react-datepicker.css';

interface IHeader {
  handleOpenModal: (value: boolean) => void;
}

export const Header: React.FC<IHeader> = ({ handleOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Filters isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeaderDt>
        <header>
          <img src={dtlogo} alt="Logo DTmoney" />
          <div className="buttonHeaderContainer">
            <button className="buttonDashboard" onClick={() => setIsOpen(true)}>
              <img src={filterSolid} alt="filtrar" />
            </button>
            <button
              className="buttonDashboard"
              onClick={() => handleOpenModal(true)}
            >
              <span>Nova transação</span>
            </button>
          </div>
        </header>
      </HeaderDt>
    </>
  );
};
