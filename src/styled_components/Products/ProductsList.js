import styled from "styled-components";

export default styled.div `
    grid-column:2/3;
    grid-row:1/3;
    width:100%;
    height:100%;
    overflow-y:auto;
    display:grid;
    grid-template-columns: repeat(5,1fr);
    grid-auto-rows: max-content;
    grid-gap: 20px;
    padding: 10px;
    overflow-y:scroll;
    overflow-x:hidden;
    &::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
    border-radius:10px;
}

&::-webkit-scrollbar
{
    width: 6px;
    border-radius:10px;
	background-color: #F5F5F5;
}

&::-webkit-scrollbar-thumb
{
    background-color: #000000;
    border-radius:10px;
}

`;