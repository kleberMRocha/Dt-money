import styled from 'styled-components';

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  div + div {
    margin: 8px;
  }
  @media (max-width: 800px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;

export const Contanainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 18%;
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    & {
      padding: 0;
      height: 100%;
      justify-content: center;
      flex-wrap: wrap;
    }
    div {
      width: 80%;
      margin-right: 0;
    }
    div + div {
      margin-top: 1rem;
    }
  }
`;
