import styled from "styled-components";

export default styled.div `
    display:grid;
    grid-template-columns: 200px calc(100% - 100px);
    grid-template-rows: 60px calc(100% - 100px);
    width:100%;
    height: 100%;
`;