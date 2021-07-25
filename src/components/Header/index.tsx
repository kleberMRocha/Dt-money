import React, { useState } from 'react';
import dtlogo from '../../assets/assets/logo.svg';
import filterSolid from '../../assets/assets/filter-solid.svg';
import { HeaderDt } from './style';
import { Filters, IUpadeDatas } from './filters/filters';
import 'react-datepicker/dist/react-datepicker.css';

interface IHeader {
  handleOpenModal: (value: boolean) => void;
  handleUpadeDatas: (value: IUpadeDatas) => void;
}

export const Header: React.FC<IHeader> = ({
  handleOpenModal,
  handleUpadeDatas,
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
              onClick={() => handleOpenModal(true)}
            >
              <span>Nova transação</span>
            </button>
            <button className="buttonDashboard" onClick={() => setIsOpen(true)}>
              <img src={filterSolid} alt="filtrar" />
            </button>
          </div>
        </header>
      </HeaderDt>
    </>
  );
};
