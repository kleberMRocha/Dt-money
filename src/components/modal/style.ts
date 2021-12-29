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
    padding: 8px;
    &::placeholder {
      padding: 8px;
    }
  }
  button {
    margin-top: 16px;
    :hover {
      transition: 0.5s;
      filter: contrast(120%);
    }
  }
`;

export const TableContainer = styled.div`
  main {
    min-height: 220px;
    max-height: 220px;
  }

  .formContainer {
    position: relative;
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    input,
    select {
      border-radius: 8px;
      padding: 8px;
      height: 32px;
      border: 1px solid #6933ff;
      margin: 4px;
      background: #ffffff;
      &::placeholder {
        padding: 8px;
      }
      width: 100%;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      height: 50%;
      width: 100%;
      button {
        width: 100%;
        margin: 8px;
        padding: 8px;
        min-height: 50px;
        &:hover {
          filter: brightness(0.9);
        }
        img {
          max-width: 50px;
          filter: invert(0.3);
        }
        :nth-child(1) {
          border: none;
          background-color: #eed202;
        }
        :nth-child(2) {
          border: none;
          background-color: tomato;
        }
        img {
          width: 20px;
        }
      }
    }
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

  .deletingConfirmation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    p {
      color: tomato;
      font-size: 12px;
      font-weight: bold;
    }
    span {
      width: 100%;
      display: flex;
      flex-direction: row;
      button {
        :nth-child(1) {
          background: tomato;
          color: white;
        }
        :nth-child(2) {
          background: gray;
          color: white;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .formContainer {
      div {
        bottom: -280px;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      input,
      select {
        width: 100%;
      }
    }
  }
`;
