import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { Loader } from '../Loader/index';
import { Form, BtnContainer, Header } from './style';
import { Request, ITransactions } from '../../services/requests';
import income from '../../assets/assets/income.svg';
import outcome from '../../assets/assets/outcome.svg';
interface IModal {
  isOpen: boolean;
  handleOpenModal: (value: boolean) => void;
}

interface IError {
  nome: boolean;
  preco: boolean;
  categoria: boolean;
}

export const ModalTdMoney: React.FC<IModal> = ({ isOpen, handleOpenModal }) => {
  const [isLoading, setLoading] = useState(false);
  const [formData, setData] = useState<ITransactions>({
    nome: '',
    preco: '',
    tipo: 'income',
    categoria: '',
    data: String(new Date()),
  });

  const [isErrored, setIsErrored] = useState<IError>({
    nome: false,
    preco: false,
    categoria: false,
  });

  const handleUpdateDatas = useCallback(
    (value: string, field: 'nome' | 'preco' | 'tipo' | 'categoria') => {
      let stateClone = JSON.parse(JSON.stringify(formData));
      stateClone[field] = String(value);

      setData(stateClone);
    },
    [formData]
  );

  const setError = () => {
    const clone = JSON.parse(JSON.stringify(isErrored as IError));
    const fields: ('nome' | 'preco' | 'categoria')[] = [
      'nome',
      'preco',
      'categoria',
    ];

    fields.forEach((field) => {
      const isEmpity = formData[field] === '';
      clone[field] = isEmpity;
    });

    setIsErrored(clone as IError);
  };

  const handleCreateTransaction = () => {
    if (Object.values(formData).includes('')) {
      setError();
      toast.error('Há campos em branco!');
      return;
    }

    let stateClone = JSON.parse(JSON.stringify(formData));
    if (stateClone.tipo === 'outcome') {
      stateClone.preco = String(stateClone.preco - 2 * stateClone.preco);
    }
    console.log(stateClone);
    setLoading(true);
    Request.transactions_create(stateClone)
      .then(() => {
        toast.success('Transação cadastrada');
      })
      .catch(() => toast.error('Houve um erro'))
      .finally(() => setLoading(false));
  };

  return (
    <Modal
      className="modalDT"
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => {
        handleOpenModal(false);
        setIsErrored({ nome: false, preco: false, categoria: false });
        setData({
          nome: '',
          preco: '',
          tipo: 'income',
          categoria: '',
          data: String(new Date()),
        });
      }}
      contentLabel="Example Modal"
    >
      <Header>
        <button
          type="button"
          className="closeBTn"
          onClick={() => handleOpenModal(false)}
        >
          X
        </button>
      </Header>
      <h2>Cadastrar transação</h2>
      <Form className="formModal" isErrored={isErrored}>
        <input
          id={isErrored.nome ? 'isErrored' : '1'}
          placeholder="Nome"
          onChange={(e) => handleUpdateDatas(e.target.value, 'nome')}
        />
        <input
          id={isErrored.preco ? 'isErrored' : '2'}
          placeholder="Preço"
          type="number"
          onChange={(e) => handleUpdateDatas(e.target.value, 'preco')}
        />
        <BtnContainer selectedBtn={formData.tipo}>
          <button
            type="button"
            className="typeTransavtion"
            onClick={() => handleUpdateDatas('income', 'tipo')}
          >
            <img src={income} alt="income" /> Entrada
          </button>
          <button
            type="button"
            className="typeTransavtion"
            onClick={() => handleUpdateDatas('outcome', 'tipo')}
          >
            <img src={outcome} alt="outcome" />
            Saída
          </button>
        </BtnContainer>

        <input
          id={isErrored.categoria ? 'isErrored' : '3'}
          placeholder="Categoria"
          onChange={(e) => handleUpdateDatas(e.target.value, 'categoria')}
        />
        <button
          disabled={isLoading}
          type="button"
          className="subimitModal"
          onClick={() => handleCreateTransaction()}
        >
          {isLoading ? <Loader /> : 'Cadastrar'}
        </button>
      </Form>
    </Modal>
  );
};
