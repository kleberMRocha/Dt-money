import React, { useState } from 'react';
import dtlogo from '../../assets/assets/logo.svg';
import filterSolid from '../../assets/assets/filter-solid.svg';
import { HeaderDt } from './style';
import { Filters, IUpadeDatas } from './filters/filters';
import 'react-datepicker/dist/react-datepicker.css';

interface IHeader {
  handleOpenModal: (value: boolean) => void;
  handleUpadeDatas: (value: IUpadeDatas) => void;
  handleOpenModalEdit: (value: boolean) => void;
}

export const Header: React.FC<IHeader> = ({
  handleOpenModal,
  handleUpadeDatas,
  handleOpenModalEdit,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Filters
        handleUpadeDatas={(parms) => handleUpadeDatas(parms)}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <HeaderDt>
        <header>
          <img src={dtlogo} alt="Logo DTmoney" />
          <div className="buttonHeaderContainer">
            <button
              className="buttonDashboard"
              onClick={() => handleOpenModalEdit(true)}
            >
              <span>Gerenciar Transações</span>
            </button>
            <button
              className="buttonDashboard"
              onClick={() => handleOpenModal(true)}
            >
              Nova transação
            </button>
            <button className="buttonDashboard filterBtn" onClick={() => setIsOpen(true)}>
              <span> Filtrar Transações </span> <img src={filterSolid} alt="filtrar" />
            </button>
          </div>
        </header>
      </HeaderDt>
    </>
  );
};
