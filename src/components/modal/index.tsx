import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { Loader } from '../Loader/index';
import { Form, BtnContainer, Header, TableContainer } from './style';
import { Request, ITransactions } from '../../services/requests';
import income from '../../assets/assets/income.svg';
import outcome from '../../assets/assets/outcome.svg';
import excluir from '../../assets/assets/trash-solid.svg';
import editar from '../../assets/assets/edit-regular.svg';
import close from '../../assets/assets/close.svg';
import { ITransactionsList } from '../../pages/Dashboard';
import { Table } from '../../components/Table';
interface IModal {
  isOpen: boolean;
  handleOpenModal: (value: boolean) => void;
  handleUpdateDash: (value: any) => void;
  transactions: ITransactionsList[];
}

interface IError {
  nome: boolean;
  preco: boolean;
  categoria: boolean;
}

export const ModalTdMoney: React.FC<IModal> = ({
  isOpen,
  handleOpenModal,
  handleUpdateDash,
  transactions,
}) => {
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
    setLoading(true);
    Request.transactions_create(stateClone)
      .then(() => {
        toast.success('Transação cadastrada');
        const newTransactions = [
          ...transactions,
          { id: transactions.length + 1, transaction: stateClone },
        ].reverse();

        handleUpdateDash(newTransactions);
      })
      .catch(() => toast.error('Houve um erro'))
      .finally(() => setLoading(false));
  };

  const handleClose = async () => {
    handleOpenModal(false);
    setIsErrored({ nome: false, preco: false, categoria: false });
    setData({
      nome: '',
      preco: '',
      tipo: 'income',
      categoria: '',
      data: String(new Date()),
    });
  };

  return (
    <Modal
      className="modalDT"
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => handleClose()}
      contentLabel="Example Modal"
    >
      <Header>
        <button
          type="button"
          className="closeBTn"
          onClick={() => handleClose()}
        >
         <img src={close} />
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

export const ModalTdMoneyEditar: React.FC<IModal> = ({
  isOpen,
  handleOpenModal,
  handleUpdateDash,
  transactions,
}) => {
  const [isADeletingFlow, setADeletingFlow] = useState(false);
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

  const [currentTransactionSelected, setCurrent] = useState<ITransactions>({
    nome: '',
    preco: '',
    tipo: 'income',
    categoria: '',
    data: String(new Date()),
  });
  const [currentId, setCurrentId] = useState<null | number>(null);

  const handleUpdateATransaction = (data: ITransactions, id: number) => {
    if (data.tipo === 'outcome' && Number(data.preco) > 0) {
      data.preco = `-${data.preco}`;
    }

    if (data.tipo === 'income' && Number(data.preco) < 0) {
      data.preco = data.preco.substr(1);
    }

    Request.transactions_update(data, id)
      .then((res) => {
        console.log(res);
        if (res.statusText === 'OK') {
          toast.success('Transação Atualizada');
          const clone = JSON.parse(JSON.stringify(transactions));
          const updatedTransaction = clone.map((t: ITransactionsList) => {
            if (t.id === id) {
              return {
                id,
                transaction: {
                  ...data,
                },
              };
            }
            return t;
          });

          handleUpdateDash(updatedTransaction);
        }
      })
      .catch(() => {
        toast.error('houve um erro');
      });
  };

  const handleUpdateCurrent = (transaction: ITransactions, id?: number) => {
    setCurrentId(id as number | null);
    const clone = JSON.parse(JSON.stringify(transaction));
    setCurrent(clone);
  };

  const handleUpdateInputEdit = (
    transaction: ITransactions,
    field: string,
    value: string
  ) => {
    const clone = JSON.parse(JSON.stringify(transaction));
    clone[field] = value;
    setCurrent(clone);
  };

  const handleClose = async () => {
    setCurrent({
      nome: '',
      preco: '',
      tipo: 'income',
      categoria: '',
      data: String(new Date()),
    });
    handleOpenModal(false);
    setIsErrored({ nome: false, preco: false, categoria: false });
    setData({
      nome: '',
      preco: '',
      tipo: 'income',
      categoria: '',
      data: String(new Date()),
    });
  };

  const handleDeleteTransaction = () => {
    if (!isADeletingFlow) {
      setADeletingFlow(true);
      return;
    }
    setLoading(true);
    Request.transactions_delete(Number(currentId))
      .then(() => {
        const clone = JSON.parse(JSON.stringify(transactions));
        const updatedTransaction = clone.filter((t: ITransactionsList) => {
          return t.id !== currentId;
        });

        handleUpdateDash(updatedTransaction);

        toast.success('Transação a foi deletada');
      })
      .finally(() => {
        setADeletingFlow(false);
        setLoading(false);
      });
  };

  return (
    <Modal
      className="modalDT"
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => handleClose()}
      contentLabel="Example Modal"
    >
      <Header>
        <button
          type="button"
          className="closeBTn"
          onClick={() => handleClose()}
        >
          <img src={close} alt="fechar" />
        </button>
      </Header>
      <h2> Gerenciar Transações </h2>
      <TableContainer>
        <Table
          transaction={transactions}
          handleUpdateCurrent={handleUpdateCurrent}
          hiddenHeader
        />
        <div className="formContainer">
          <input
            type="text"
            placeholder="Nome"
            value={currentTransactionSelected.nome}
            onChange={(e) => {
              handleUpdateInputEdit(
                currentTransactionSelected,
                'nome',
                e.target.value
              );
            }}
          />
          <input
            type="number"
            placeholder="Preço"
            value={currentTransactionSelected.preco}
            onChange={(e) => {
              handleUpdateInputEdit(
                currentTransactionSelected,
                'preco',
                e.target.value
              );
            }}
          />
          <input
            type="text"
            placeholder="Categoria"
            value={currentTransactionSelected.categoria}
            onChange={(e) => {
              handleUpdateInputEdit(
                currentTransactionSelected,
                'categoria',
                e.target.value
              );
            }}
          />
          <select
            onChange={(e) => {
              handleUpdateInputEdit(
                currentTransactionSelected,
                'tipo',
                e.target.value
              );
            }}
            value={currentTransactionSelected.tipo}
          >
            <option value={'outcome'}>outcome</option>
            <option value={'income'}>income</option>
          </select>

          {!isADeletingFlow ? (
            <div>
              <button
                onClick={() =>
                  handleUpdateATransaction(
                    currentTransactionSelected,
                    Number(currentId)
                  )
                }
                disabled={
                  !currentTransactionSelected.nome ||
                  !currentTransactionSelected.preco ||
                  !currentTransactionSelected.tipo ||
                  !currentTransactionSelected.categoria
                }
                type="button"
              >
                <img src={editar} alt="Editar" />
              </button>
              <button
                disabled={
                  !currentTransactionSelected.nome ||
                  !currentTransactionSelected.preco ||
                  !currentTransactionSelected.tipo ||
                  !currentTransactionSelected.categoria
                }
                type="button"
                onClick={() => handleDeleteTransaction()}
              >
                <img src={excluir} alt="excluir" />
              </button>
            </div>
          ) : (
            <div className="deletingConfirmation">
              <p>
                {`Você tem certeza que deseja excluir a transação "${currentTransactionSelected.nome}" ?`}
              </p>
              {isLoading ? (
                ' '
              ) : (
                <span>
                  <button
                    onClick={() => handleDeleteTransaction()}
                    type="button"
                  >
                    Excluir
                  </button>
                  <button type="button" onClick={() => setADeletingFlow(false)}>
                    Cancelar
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </TableContainer>
    </Modal>
  );
};
