import styled from 'styled-components';

interface CardContainerProps {
  type: 'total' | 'income' | 'outcome';
}

export const CardContainer = styled.div<CardContainerProps>`
  margin-top: -1rem;
  display: flex;
  width: 16rem;
  justify-content: space-between;
  background: ${(props) => (props.type === 'total' ? '#33CC95' : '#ffffff')};
  border-radius: 5px;
  padding: 2rem 1.56em;
  margin-right: 2rem;
  h3 {
    font-size: 1.5rem;
    color: ${(props) => (props.type === 'total' ? '#ffffff' : 'var(--title)')};
  }
  p {
    color: ${(props) => (props.type === 'total' ? '#ffffff' : 'var(--title)')};
  }
  @media(max-width: 800px){
    justify-content: center;
    align-items: center;
    text-align: center;
    h3{
        font-size: 1.2rem;
    }

  }
`;
