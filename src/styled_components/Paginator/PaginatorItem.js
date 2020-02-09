import styled from "styled-components";

export default styled.div `
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    border-radius:50%;
    color:#fff;
    text-shadow:0 3px 6px rgba(0, 0, 0, 0.4);
    background-color: #6ed9f5;
    font-size:18px;
    font-weight:bold;
    cursor: pointer;
    &:hover
    {
        box-shadow:0 0 6px rgba(0,0,0,0.4)
    }
`;