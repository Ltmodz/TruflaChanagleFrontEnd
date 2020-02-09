import styled,{keyframes} from "styled-components";
import Widget from "../Widget";



export default  styled(Widget) `
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    height:max-content;
     &:hover{
         transform:scale(0.95);
     }
     position:relative;
     background-color:${props => props.flip}

`;



