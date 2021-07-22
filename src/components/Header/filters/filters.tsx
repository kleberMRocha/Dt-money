import React, { useState } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getFomat } from '../../../utils/getFormat';
import { ContainerFiltros } from './style';

interface IFilter {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const Filters: React.FC<IFilter> = ({
  isOpen: isOpenFilter,
  setIsOpen,
}) => {
  const [startDate, setStartDate] = useState<string>(
    getFomat('date', String(new Date())) as string
  );

  return (
    <>
      {isOpenFilter && (
        <ContainerFiltros>
          <h1>Filtros Dashboard</h1>
          <Datepicker
            value={startDate}
            onChange={(e) =>
              setStartDate(getFomat('date', String(e)) as string)
            }
          />
          <button className="filtro"> Aplicar filtros</button>
          <button onClick={() => setIsOpen(false)} className="filtro fechar">
            Fechar
          </button>
        </ContainerFiltros>
      )}
    </>
  );
};
