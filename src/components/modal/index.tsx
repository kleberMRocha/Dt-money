import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form, BtnContainer, Header } from './style';
import income from '../../assets/assets/income.svg';
import outcome from '../../assets/assets/outcome.svg';
interface IModal {
  isOpen: boolean;
  handleOpenModal: (value: boolean) => void;
}

export const ModalTdMoney: React.FC<IModal> = ({ isOpen, handleOpenModal }) => {
  const [formData, setData] = useState({
    nome: '',
    preco: '',
    tipo: '',
    categoria: '',
  });

  const handleUpdateDatas = (
    value: string,
    field: 'nome' | 'preco' | 'tipo' | 'categoria'
  ) => {
    let stateClone = JSON.parse(JSON.stringify(formData));
    stateClone[field] = value;

    setData(stateClone);
  };

  return (
    <Modal
      className="modalDT"
      isOpen={isOpen}
      onRequestClose={() => handleOpenModal(false)}
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
      <Form className="formModal">
        <input
          placeholder="Nome"
          onChange={(e) => handleUpdateDatas(e.target.value, 'nome')}
        />
        <input
          placeholder="Preço"
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
          placeholder="Categoria"
          onChange={(e) => handleUpdateDatas(e.target.value, 'categoria')}
        />
        <button
          type="button"
          className="subimitModal"
          onClick={() => console.log(formData)}
        >
          Cadastrar
        </button>
      </Form>
    </Modal>
  );
};
