import styled from 'styled-components';

export const Navigation = styled.nav`
    display: flex;
    padding: 1em;
    justify-content: center;
`;
export const Button = styled.button`
    margin: 1em;
    border-radius: 10px;
    padding: 0.7em 1.3em;
    background-color: white;
    border: 1px solid #e0b2dd;
    box-shadow: 2px 2px 2px #159894;

    &:hover {
        filter: brightness(95%);
    }
    &:active {
        filter: brightness(85%);
    }
`;
export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Time = styled.p`
    color: grey;
    font-size: 4em;
`;

export const InfoContainer = styled.div`
    color: grey;
    display: flex;
    font-size: 2em;
    margin-top: 1em;
    align-items: flex-start;
`;

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`;

export const StyleUl = styled.ul`
    width: 200%;
    font-size: 1.2em;
    text-align: center;
    padding-left: 0.8em;
    border-radius: 10px;
    list-style-type: none;
    background-color: #fafafa;
    box-shadow: 2px 2px 2px #e0b2dd;
`;

export const ListButton = styled(Button)`
    border-radius: 50px;
`;
