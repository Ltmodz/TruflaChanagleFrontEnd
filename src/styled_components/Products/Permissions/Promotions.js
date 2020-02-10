import styled from "styled-components";
import Widget from "../../Widget"

export default styled(Widget)
`
position:absolute;
cursor: pointer;
width:${props=> props.expand ? "100% ": "20%"};
height:${props=> props.expand ? "100% ": "15%"};
background-color:${props=> props.expand ? "rgba(110, 217, 245, 0.9) ": "#6ed9f5"};
${props=> props.expand ? "top:0px;right:0px;margin:auto;":"top:-10px;right:0;"}
img{
    
    width:${props=> props.expand ? "0%": "100%"};
    height:${props=> props.expand ? "0%": "100%"};

}
transition: 1s ease-in-out;

h4{
    margin:0px;
    color:#fff;
    text-align:center;
}


`;