import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const CreateGlobalStyle = createGlobalStyle`


.react-datepicker__input-container{
    height: 48px;
    input{
        height: 100%;
        border-radius: 4px;
        padding: 0 5px;
    }

}

::-webkit-scrollbar-track {
    background-color: #F4F4F4;
}
::-webkit-scrollbar {
    width: 10px;
    background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
    background: var(--purple);
    border-radius: 50px;
}


:root{
    --background: #E5E5E5;
    --purple-ligth: #6933FF;
    --purple: linear-gradient(316deg, #4062bb 0%, #5200ae 74%);
    --green: #33CC95;
    --red: #E52E4D;
    --title: #363F5F;
    --text: #969CB2;
    --white: #FFFFFF;
}


*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, button, input, textarea{
    font-family: 'Poppins', sans-serif;
}

html{
    overflow-x: hidden;
    @media(max-width:1080px){
        font-size: 93.73%;
    }
    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

button{
    cursor: pointer;
    pointer-events: auto;
}

@keyframes entrance {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.modalDT{
animation: entrance .3s ease-in;
position: fixed;
width: 576px;
height: 588px;
left: 416px;
top: 16px;
background: #F0F2F5;
border-radius: 5px;
padding: 48px
}

.ReactModal__Overlay{
    background: #08082e8c !important;
}

.loadContainer{
    margin: 8px 0;
    display: flex;
    justify-content: center;
    width: 100%;
}

#isErrored{
    border: 2px solid tomato;
}

.transactionCount{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: var(--purple-ligth);
    margin: 8px;
}

@media(max-width: 720px){
     .modalDT{
width: 100%;
height: 100%;
left: 0;
top: 0;
}

}


[disabled]{
    opacity: inherit.8;
    cursor: not-allowed;
}


`;
