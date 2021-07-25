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
