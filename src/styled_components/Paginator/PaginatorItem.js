import styled from "styled-components";

export default styled.div `
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    border-radius:50%;
    color:${props=> props.selected ? "#fff" :"#000"};
    text-shadow:0 3px 6px rgba(0, 0, 0, 0.4);
    background-color:${props=> props.selected ? "#6ed9f5" :"#f1f1f1"} ;
    font-size:18px;
    font-weight:bold;
    cursor: pointer;
    &:hover
    {
        box-shadow:0 0 6px rgba(0,0,0,0.4)
    }
`;