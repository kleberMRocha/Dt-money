import styled from 'styled-components';

interface IBtnContainer {
  selectedBtn: string;
}

export const Header = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  button {
    padding: 10px;
    color: #a8a8b3;
    font-weight: bold;
    background: transparent;
    border: none;
  }
`;

interface IError {
  isErrored?: {
    nome: boolean;
    preco: boolean;
    categoria: boolean;
  };
}

export const BtnContainer = styled.div<IBtnContainer>`
  max-width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  .typeTransavtion {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #e7e9ee;
    ${(props) => {
      return props.selectedBtn === 'income'
        ? `:nth-child(1) {border: 3px solid #33CC95;}`
        : `:nth-child(2) { border: 3px solid #33CC95;}`;
    }}
    img {
      margin: 8px;
    }
    height: 64px;
    width: 220px;
    margin: 0 4px;
    :hover {
      transition: 0.5s;
      filter: contrast(120%);
    }
  }
`;

export const Form = styled.form<IError>`
  display: flex;
  flex-direction: column;
  .subimitModal {
    background: #33cc95;
    border-radius: 5px;
    border: transparent;
    height: 64px;
    color: white;
    font-weight: bold;
  }
  input {
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    box-sizing: border-box;
    border-radius: 5px;
    height: 64px;
    margin: 16px;
    padding: 4px;
    &::placeholder {
      padding: 8px;
    }
  }
  button {
    :hover {
      transition: 0.5s;
      filter: contrast(120%);
    }
  }
`;

export const TableContainer = styled.div`
  main {
    min-height: 400px;
  }
  [type='outcome'],
  [type='income'] {
    .table-item {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      div {
        text-align: center;
      }
    }
  }
`;
