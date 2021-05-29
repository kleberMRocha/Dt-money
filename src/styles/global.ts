import {createGlobalStyle} from 'styled-components';

export const CreateGlobalStyle = createGlobalStyle`

:root{
    --background: #E5E5E5;
    --purple-ligth: #6933FF;
    --purble: #5429CC;
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
    @media(max-width:1080px){
        font-size: 93.73%;
    }
    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

button{
    cursor: pointer;
}

[disabled]{
    opacity: inherit.8;
    cursor: not-allowed;
}

`;