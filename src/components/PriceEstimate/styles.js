import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const PriceEstimate_main = styled.div`
width:100%;
height:fit-content;
background: ${palette.WHITE_COLOR};
padding:8.41726618705036vw 0;
h1{
  text-align:left;
font-style: normal;
font-weight: 600;
font-size: 2.01438848920863vw;
line-height: 3.02158273381295vw;
color: #333333;
}
`;

export const PriceEstimate_container = styled.div`
width:88.9208633093525vw;
height:43.1654676258993vw;
display:flex;
margin:auto;
margin-top:4.02877697841727vw;
border: 0.0359712230215827vw solid #CCCCCC;
border-radius: 0.575539568345324vw;
padding:3.09352517985611vw 0 3.09352517985611vw 3.9568345323741vw;
`;

export const PriceEstimate_container_b1 = styled.div`
width:57.5539568345324vw;
height:fit-content;
#slide_label:nth-child(1){
  margin-top:0;
}
#slide_label{
  margin-top:3.45323741007194vw;
}
label{
font-style: normal;
font-weight: normal;
font-size: 1.29496402877698vw;
line-height: 2.30215827338129vw;
color: #333333;
}
.uploadBtn2{
  width: 15.6834532374101vw;
height: 3.45323741007194vw;
  font-size: 1.00719424460432vw;
  border: 0.0359712230215827vw solid #CCCCCC;
  padding:0;
}
#slider_cont{
  margin-top:5.68345323741007vw;
}
#slider_buttons{
  display:grid;
  width:100%;
  grid-template-columns:repeat(3, 1fr);
  gap:2.15827338129496vw;
  grid-template-rows:4.1726618705036vw;
  margin-top:0.503597122302158vw;
}
#peinput{
  width: 8.99280575539568vw;
height: 3.16546762589928vw;
left: 0px;
top: 0px;
background: #FFFFFF;
outline:none;
border: 0.0359712230215827vw solid #CCCCCC;
box-sizing: border-box;
border-radius: 0.575539568345324vw;
padding: 0 2vw;
text-align:center;
}
#slider_buttons .pay_block2_container1{
background: white;
  color:black;
border-radius: 0.575539568345324vw;
font-weight: 600;
font-size: 1.15107913669065vw;
line-height: 1.72661870503597vw;
border: 0.0359712230215827vw solid #CCCCCC;
outline:none;
cursor:pointer;
transition:0.5s ease;
}
#slider_buttons .pay_block2_container2{
  background: #1976D2;
  color: #FFFFFF;
  box-shadow: 0px 0px 0.575539568345324vw rgba(21, 39, 73, 0.15);
  box-shadow: none;
}
`;

export const PriceEstimate_container_b2 = styled.div`
width:25.6834532374101vw;
height:37.0503597122302vw;
margin-left:5.97122302158273vw;
display:flex;
flex-direction:column;
align-items:center;
border-left: 0.0359712230215827vw solid #CCCCCC;
#p_b_top_main{
  width:fit-content;
  display: flex;
  margin-left:auto;
}
#p_b_top_main .currency1{
  width: 5.32374100719424vw;
height: 3.16546762589928vw;
background: white;
border-radius: 0.575539568345324vw;
cursor:pointer;
outline:none;
margin-right:0.863309352517986vw;
font-style: normal;
font-weight: normal;
font-size: 1.29496402877698vw;
color:black;
transition:0.5s ease;
border: 0.0359712230215827vw solid #CCCCCC;
}
#p_b_top_main .currency2{
  background: #1976D2;
  color:white;
  box-shadow: 0px 0px 0.575539568345324vw rgba(21, 39, 73, 0.15);
}
#p_b_top{
  text-align:center;
  margin:0;
  margin-top:3.7410071942446vw;
  width:100%;
}
#p_b_top h1{
font-weight: 600;
font-size: 2.01438848920863vw;
line-height: 3.02158273381295vw;
color:black;
text-align:center;
}
#p_b_top h2{
  font-weight: 600;
font-size: 3.45323741007194vw;
line-height: 5.17985611510791vw;
color:black;
text-align:center;
}
#p_b_middle{
  text-align:center;
  margin-top:3.7410071942446vw;
}
#p_b_middle h1{
  font-weight: 600;
font-size: 1.15107913669065vw;
line-height: 1.72661870503597vw;
color:black;
text-align:center;
}
#p_b_middle h1:first-child{
  color: #666666;
}
#p_b_bottom button{
  width: 12.9496402877698vw;
height: 3.45323741007194vw;
background: #1565C0;
border-radius: 0.575539568345324vw;
font-style: normal;
font-weight: 600;
font-size: 1.00719424460432vw;
line-height: 1.51079136690647vw;
color: #FFFFFF;
outline:none;
border: 0.0359712230215827vw solid #CCCCCC;
margin-top:3.7410071942446vw;
cursor:pointer;
box-shadow: 0px 0px 0.575539568345324vw rgba(21, 39, 73, 0.15);
transition:0.5s ease;
}
#p_b_bottom button:hover{
  background: white;
  color:black;
  border: 0.0359712230215827vw solid #CCCCCC;
  box-shadow: none;
}
`;
