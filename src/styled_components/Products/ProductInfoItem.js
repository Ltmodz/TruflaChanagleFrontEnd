import styled from "styled-components";

export default styled.span `
 margin:5px;
 font-size:18px;
 text-align:center;
 font-weight:bold;
 color:${props => props.hasDiscount ? "red" : "black" };
 text-decoration:${props => props.hasDiscount ? "line-through" : "none"}
`;