import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export interface ITransactions {
  data: string;
  categoria: string;
  preco: string;
  nome: string;
  tipo: 'income' | 'outcome';
}

export const Request = {
  transactions_create: (transaction: ITransactions): Promise<void> => {
    return api.post('/transactions', { transaction });
  },
  transactions_index: (): Promise<any> => {
    return api.get('/transactions');
  },
};
