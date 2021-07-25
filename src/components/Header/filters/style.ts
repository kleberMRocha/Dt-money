import styled, { keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';

const bounceAnimation = keyframes`${fadeInRight}`;

export const ContainerFiltros = styled.aside`
  position: absolute;
  animation: 0.5s ${bounceAnimation};
  display: flex;
  right: 0;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  z-index: 9999;
  background-color: #310e68;
  opacity: 0.95;
  input {
    margin: 0;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0 5px;
    height: 48px;
  }
  .checkbxContainer {
    color: white;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 8px;
    input {
      filter: hue-rotate(240deg);
      transform: scale(1.6);
      cursor: pointer;
      margin: 0 10px;
    }
  }
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
  .limpar {
    color: tomato;
    border: 1px darkturquoise solid;
    background: gainsboro;
    color: gray;
  }
`;
