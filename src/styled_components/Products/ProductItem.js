import styled,{keyframes} from "styled-components";
import Widget from "../Widget";



const shake = keyframes`
@keyframes {
  0%   {background: red;}
  25%  {background: yellow;}
  50%  {background: black;}
  75%  {background: maroon;}
  100% {background: #fff;}
}`

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



