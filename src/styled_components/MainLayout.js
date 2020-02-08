import styled from "styled-components";

export default styled.div `
    display:grid;
    grid-template-columns: 200px calc(100% - 220px);
    grid-template-rows: 70px calc(100% - 90px);
    width:100%;
    height: 100%;
    grid-gap: 20px;
`;