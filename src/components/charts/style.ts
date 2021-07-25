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
  padding: 8px;
  margin: 8px;

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
  }
`;
