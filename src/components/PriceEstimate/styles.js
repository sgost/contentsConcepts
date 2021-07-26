import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const PriceEstimate_main = styled.div`
width:100%;
height:fit-content;
background: ${palette.WHITE_COLOR};
padding:117px 0;
h1{
  text-align:center;
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 42px;
color: #333333;
}
`;

export const PriceEstimate_container = styled.div`
width:fit-content;
height:482px;
display:flex;
margin:auto;
margin-top:56px;
`;

export const PriceEstimate_container_b1 = styled.div`
width:657px;
height:fit-content;
#slide_label:nth-child(1){
  margin-top:0;
}
#slide_label{
  margin-top:56px;
}
.ant-slider-handle .ant-tooltip-open {
  color:red;
}
label{
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 32px;
color: #333333;
}
#slider_cont{
  margin-top:79px;
}
#slider_buttons{
  display:grid;
  width:100%;
  grid-template-columns:repeat(3, 1fr);
  gap:30px;
  grid-template-rows:58px;
  margin-top:30px;
}
#slider_buttons button{
background: #1976D2;
box-shadow: 0px 0px 8px rgba(21, 39, 73, 0.15);
border-radius: 8px;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
border:none;
outline:none;
cursor:pointer;
transition:0.5s ease;
}
#slider_buttons button:hover{
  background: white;
  color:black;
  border: 0.5px solid #CCCCCC;
}
.ant-slider-step {
    position: absolute;
    width: 100%;
    height: 11px;
    background: #CCCCCC;
    z-index:1;
}
.ant-slider-track {
    position: absolute;
    height: 11px;
    background: #1976D2;
    border-radius: 2px;
    transition: background-color 0.3s;
    z-index:2;
}
.ant-slider:hover .ant-slider-track{
  background: #1976D2;
}
.ant-slider-handle .ant-tooltip-open{
  background:red;
}
.ant-slider-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-top: -4px;
    background-color: #fff;
    border: transparent;
    box-shadow: 0px 0px 8px rgba(21, 39, 73, 0.15);
    z-index:3;
}
.ant-slider-dot-active {
    width:20px;
    height:20px;
    z-index:3;
    background: #1976D2;
    margin:0;
  margin-top: -2px;
  width:20px;
    height:20px;
    margin-left: -10px;
    border:none;
}
.ant-slider-dot{
  margin:0;
  margin-top: -2px;
  width:20px;
    height:20px;
    margin-left: -10px;
}
`;

export const PriceEstimate_container_b2 = styled.div`
width:357px;
height:100%;
margin-left:83px;
background: #1976D2;
box-shadow: 0px 0px 8px rgba(21, 39, 73, 0.15);
border-radius: 8px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
#p_b_top{
  text-align:center;
  margin:100px 0 50px 0;
}
#p_b_top h1{
font-weight: 600;
font-size: 28px;
line-height: 42px;
color:white;
}
#p_b_top h2{
  font-weight: 600;
font-size: 48px;
line-height: 72px;
color:white;
}
#p_b_middle{
  text-align:center;
}
#p_b_middle h1{
  font-weight: 600;
font-size: 16px;
line-height: 24px;
color:white;
}
#p_b_bottom{
  border: 0.5px solid #FFFFFF;
box-sizing: border-box;
border-radius: 8px;
width: 218px;
height: 40px;
margin:auto auto auto auto;
display:flex;
justify-content:center;
align-items:center;
font-weight: normal;
font-size: 14px;
line-height: 22px;
color:white;
cursor:pointer;
}
#docselectorbox{
  width:100%;
  display:flex;
  text-align:center;
  justify-content:left;
}
#docselectorbox .custom-select{
  width:56px;
  height:44px;
  outline:none;
  border:none;
  border: 0.5px solid #FFFFFF;
box-sizing: border-box;
border-radius: 8px;
background:transparent;
cursor:pointer;
margin-left:auto;
font-weight: normal;
font-size: 18px;
line-height: 32px;
color:white;
margin:18px 18px 0 auto;
padding-left: 20px;
}
#docselectorbox .custom-select option{
  color:black;
  text-align:center;
}
`;
