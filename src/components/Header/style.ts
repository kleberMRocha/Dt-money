import styled from 'styled-components';

export const HeaderDt = styled.div`
  .buttonHeaderContainer {
    max-width: 100%;
    min-height: 50px;
    box-sizing: border-box;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    button.filterBtn span {
      display: none;
    }
    button {
      margin: 4px;
    }
  }
  header {
    background: var(--purple);
    padding: 5% 10%;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .ocultar {
    background: red;
    color: var(--white);
  }

  .buttonDashboard {
    min-width: 80px;
    background: var(--purple-ligth);
    color: var(--white);
    font-weight: bold;
    padding: 0 1rem;
    border-radius: 0.3rem;
    transition: 0.3s;
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;

    img {
      max-width: 30%;
      filter: invert(1);
    }
    &:hover {
      filter: brightness(1.1);
    }
  }

  @media (max-width: 800px) {
    .buttonDashboard {
      :nth-child(1) {
        margin: 4px;
        margin-left: 8px;
        padding: 2px;
        width: 100%;
      }
      :nth-child(3) {
        margin: 4px;
        padding: 2px;
        margin-left: 8px;
        width: 100%;
        img {
          width: 20px;
        }
      }
      :nth-child(2) {
        position: fixed;
        z-index: 9999;
        bottom: 0;
        right: 0;
        margin: 0;
        width: 100%;
        height: 50px;
      }
    }

    .buttonHeaderContainer {
      min-height: 100px;
      button.filterBtn span {
        display: block;
      }

      button {
        img {
          display: none;
        }
      }
    }

    header {
      height: 15rem;
      flex-direction: column;
      gap: 16px;
      align-items: center;
      justify-content: center;
    }
  }
`;
