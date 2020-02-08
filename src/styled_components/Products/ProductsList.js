import styled from "styled-components";

export default styled.div `
    grid-column:2/3;
    grid-row:2/3;
    width:100%;
    height:100%;
    overflow-y:auto;
    display:grid;
    grid-template-columns: repeat(5,1fr);
    grid-auto-rows: 400px;
    grid-gap: 20px;
    padding: 10px;
    overflow-y:scroll;
`;