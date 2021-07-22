import styled from 'styled-components';

export const ContainerFiltros = styled.aside`
  @keyframes entrance {
    0% {
      margin-left: -800px;
    }
    100% {
      margin-left: 0;
    }
  }
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: 'entrance';
  animation-duration: 0.5s;
  padding: 8px;
  z-index: 9999;
  background-color: #310e68;
  opacity: 0.95;
  h1 {
    color: white;
  }
  .filtro {
    border-radius: 5px;
    margin-top: 8px;
    background-color: whitesmoke;
    border: 2px var(--green) solid;
    color: var(--green);
    font-weight: bold;
    height: 48px;
    &:hover {
      filter: brightness(95%);
    }
  }
  .fechar {
    color: tomato;
    border: 1px tomato solid;
  }
`;
