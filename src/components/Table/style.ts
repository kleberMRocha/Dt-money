import styled from 'styled-components';

interface IItem {
  type?: 'income' | 'outcome';
}

export const Container = styled.div<IItem>`
  width: 97.5%;
  padding: 0 18%;
  height: 100%;
  margin-top: 0.5rem;
  .table-head {
    color: var(--text);
    display: flex;
    width: 100%;
    div {
      width: 95%;
      margin-left: 5%;
    }
  }
  .table-item {
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #ffffff;
    border-radius: 0.3rem;
    padding: 0.4rem;
    div:nth-child(1) {
      color: var(--title);
      font-size: 0.8rem;
    }
    div:nth-child(2) {
      ${(prop) =>
        prop.type === 'income' ? 'color: var(--green);' : 'color: tomato;'}
    }
    div {
      width: 95%;
      margin-left: 5%;
      text-align: left;
    }
  }

  .table-item + .table-item {
    margin-top: 0.5rem;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 10%;
    font-size: 10px;
    justify-content: center;
  }
`;
