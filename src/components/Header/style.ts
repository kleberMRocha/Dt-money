import styled from 'styled-components';

export const HeaderDt = styled.header`
  header {
    background: var(--purble);
    padding: 5% 10%;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .ocultar {
    background: red;
    color: var(--white);
  }

  button {
    background: var(--purple-ligth);
    color: var(--white);
    font-weight: bold;
    padding: 0 1rem;
    border-radius: 0.3rem;
    border: none;
    transition: 0.3s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 800px) {
    button {
      position: fixed;
      bottom: 0;
      width: 80%;
      padding: 1rem;
    }
    header {
      height: 8rem;
      align-items: center;
      justify-content: center;
    }
  }
`;
