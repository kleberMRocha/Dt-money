import styled from 'styled-components';

interface ITypeChart {
  type?: 'incomeVsOutcome';
}

export const ContainerPieChart = styled.div<ITypeChart>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border: 2px #ffffff solid;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
  transition: 0.5;

  &:hover {
    filter: drop-shadow(0 0 0.2rem #6933ff);
  }

  min-width: 40%;
  min-height: 350px;

  canvas {
    max-width: 300px;
    align-self: center;
  }

  border-radius: 8px;
  h2 {
    margin-bottom: auto;
    font-size: 16px;
    text-align: center;
    color: #5200ae;
    margin: 4px 0;
  }

  @media (max-width: 800px) {
    min-width: 100%;
    min-height: 350px;
    justify-content: center;
  }
`;
