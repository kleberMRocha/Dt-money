import React, { useEffect, useState } from 'react';
import Datepicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getFomat } from '../../../utils/getFormat';
import { Request } from '../../../services/requests';
import { ContainerFiltros } from './style';
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('ptBR', ptBR);

interface IFilter {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleUpadeDatas: (value: IUpadeDatas) => void;
}

export interface IUpadeDatas {
  categoriaSelected: string;
  transactionType: {
    entrada: boolean;
    saida: boolean;
  };
  isFilterByData: boolean;
  startDate: string;
  reset?: boolean;
}

interface ITransaaction {
  categoria: string;
  data: string;
  nome: string;
  preco: string;
  tipo: string;
}

interface IItem {
  id: number;
  transaction: ITransaaction;
}

export const Filters: React.FC<IFilter> = ({
  isOpen: isOpenFilter,
  setIsOpen,
  handleUpadeDatas,
}) => {
  const [startDate, setStartDate] = useState<string>(
    getFomat('date', String(new Date())) as string
  );

  const [categorias, setCategorias] = useState([] as string[]);
  const [categoriaSelected, setCategory] = useState('');

  const [transactionType, setTransaciontype] = useState({
    entrada: true,
    saida: true,
  });

  const handleResetFilter = () => {
    setTransaciontype({
      entrada: true,
      saida: true,
    });
    setCategory('');
    setStartDate(getFomat('date', String(new Date())) as string);

    handleUpadeDatas({
      reset: true,
      categoriaSelected,
      isFilterByData,
      startDate,
      transactionType,
    });
  };

  const [isFilterByData, setfilterDate] = useState(false);

  const handleGetFilter = async () => {
    handleUpadeDatas({
      categoriaSelected,
      transactionType,
      isFilterByData,
      startDate,
    });
  };

  useEffect(() => {
    const categorias = Request.transactions_index();
    categorias.then((res) => {
      let categorias = res.data.map((t: IItem) => t.transaction.categoria);

      const uniqueArray = categorias.filter(
        (item: string, index: number) => categorias.indexOf(item) === index
      );

      setCategorias(uniqueArray);
    });
  }, []);

  return (
    <>
      {isOpenFilter && (
        <ContainerFiltros>
          <h1>Filtros Dashboard</h1>
          <div className="checkbxContainer">
            <input
              type="checkbox"
              id="isData"
              name="isData"
              checked={isFilterByData}
              onChange={() => setfilterDate(!isFilterByData)}
            />
            <label htmlFor="isData">Filtrar por data</label>
          </div>
          {isFilterByData && (
            <Datepicker
              locale="ptBR"
              value={startDate}
              onChange={(e) =>
                setStartDate(getFomat('date', String(e)) as string)
              }
            />
          )}

          <div className="checkbxContainer">
            <input
              type="checkbox"
              id="entrada"
              checked={transactionType.entrada}
              name="entrada"
              onChange={() =>
                setTransaciontype({
                  entrada: !transactionType.entrada,
                  saida: transactionType.saida,
                })
              }
            />
            <label htmlFor="saida">Entradas</label>
            <input
              type="checkbox"
              id="saidas"
              name="saidas"
              checked={transactionType.saida}
              onChange={() =>
                setTransaciontype({
                  entrada: transactionType.entrada,
                  saida: !transactionType.saida,
                })
              }
            />
            <label htmlFor="horns">Saídas</label>
          </div>

          <input
            list="categoriasT"
            placeholder="Categorias"
            value={categoriaSelected}
            onChange={(e) => setCategory(e.target.value)}
          />

          <datalist id="categoriasT">
            {categorias.length &&
              categorias.map((item, index) => {
                return <option value={item} key={`${item}_${index}`} />;
              })}
          </datalist>

          <button onClick={() => handleGetFilter()} className="filtro">
            Aplicar filtros
          </button>
          <button onClick={() => handleResetFilter()} className="filtro limpar">
            Limpar Filtros
          </button>
          <button onClick={() => setIsOpen(false)} className="filtro fechar">
            Fechar
          </button>
        </ContainerFiltros>
      )}
    </>
  );
};
