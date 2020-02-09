import styled from "styled-components";

export default styled.div `
    width:100%;
    height:100%;
    display:grid;
    grid-template-rows: 100px calc(100% - 200px) 80px;
    grid-template-columns: 20% calc(80% - 20px);
    grid-gap:20px;
`;