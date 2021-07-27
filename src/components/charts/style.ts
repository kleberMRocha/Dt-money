import styled from 'styled-components';

interface ITypeChart {
  type?: 'incomeVsOutcome';
}

export const ContainerPieChart = styled.div<ITypeChart>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ffffff;
  border: 2px #ffffff solid;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
  transition: 0.5;

  &:hover {
    filter: drop-shadow(0 0 0.2rem #6933ff);
  }

  max-width: 320px;
  max-height: 350px;

  min-width: 320px;
  min-height: 350px;

  border-radius: 8px;
  h2 {
    position: absolute;
    top: 0;
    font-size: 16px;
    text-align: center;
    color: #5200ae;
    margin: 4px 0;
  }
`;
