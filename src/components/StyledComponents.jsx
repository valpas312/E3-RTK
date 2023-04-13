import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 30vh;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    input {
        width: 50%;
        height: 50px;
        margin-bottom: 20px;
        padding: 0 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1.2rem;
        outline: none;
    }

    input:focus {
        border: 1px solid #000;
    }

    button {
        width: 50%;
        height: 50px;
        border: none;
        border-radius: 5px;
        background-color: #000;
        color: #fff;
        font-size: 1.2rem;
        cursor: pointer;
    }

    button:hover {
        background-color: #333;
    }
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 50%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    text-align: center;

    div {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
    }

    p {
        font-size: 1.2rem;
    }

    button {
        width: 100px;
        height: 30px;
        border: none;
        border-radius: 5px;
        background-color: #000;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
    }

    button:hover {
        background-color: #333;
    }
`;