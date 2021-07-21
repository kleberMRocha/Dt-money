import styled from 'styled-components';

interface CardContainerProps {
  type: 'total' | 'income' | 'outcome';
  isNagative: boolean;
  hidden?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  position: relative;
  margin-top: -1rem;
  display: flex;
  width: 16rem;
  justify-content: space-between;
  background: ${(props) => {
    if (props.type === 'total' && props.isNagative) return 'tomato';
    if (props.type === 'total' && !props.isNagative) return '#33CC95';
    return '#ffffff';
  }};

  border-radius: 5px;
  padding: 2rem 1.56em;
  margin-right: 2rem;
  h3 {
    font-size: 1.5rem;
    color: ${(props) => (props.type === 'total' ? '#ffffff' : 'var(--title)')};
  }
  .blurry {
    opacity: 0.5;
    color: transparent;
    user-select: none;
    background: gray;
  }
  p {
    color: ${(props) => (props.type === 'total' ? '#ffffff' : 'var(--title)')};
  }
  .ocultar {
    top: 0;
    left: 0;
    padding: 4px;
    position: absolute;
    width: 28px;
    border: transparent;
    background: transparent;
    height: 28px;

    img {
      ${(props) =>
        props.hidden ? 'filter: opacity(.4);' : 'filter: opacity(1);'}
    }
  }
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    h3 {
      font-size: 1.2rem;
    }
  }
`;
