import styled from 'styled-components';

export const Container = styled.div`
width: 97.5%;
padding: 0 18%;
margin-top: .5rem;
.table-head{
    color: var(--text);
    display: flex;
    width: 100%;
    div{
        width: 95%;
        margin-left: 5%;
    }
}
.table-item{
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #FFFFFF;
    border-radius: .3rem;
    padding: .4rem;
    div:nth-child(1){
        color:var(--title);
        font-size: .8rem;
    }
    div:nth-child(2){
        color:var(--green);
    }
    div{
        width: 95%;
        margin-left: 5%;
        text-align: left;
    }
}

.table-item + .table-item {

    margin-top: .5rem;

}
 
`;
