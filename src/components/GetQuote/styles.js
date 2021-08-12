import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const QuoteFormSection = styled.div`
    background: #F5FBFF;
    width:100%;
    padding-top:3vw;
    h1{
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 48px;
color: #222222;
text-align:center;
margin-top:46px;
    }
  .quoteForm {
    width:60.6474820143885vw;
    height:fit-content;
    margin: 0 auto;
    background:white;
    padding:2.6vw 6.11510791366906vw 6.47482014388489vw 6.11510791366906vw;
    border-radius:1vw;
    @media (max-width: 768px) {
      width:90%;
      padding:8vw 6.11510791366906vw 6.47482014388489vw 6.11510791366906vw;
    }
  }
  .formLabel {
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 10px;
    display: inline-block;
  }
  #word_counter_cont{
    display:flex;
    width:100%;
    margin-bottom:2vw;
  }
  #word_counter_cont #wordCount{
    width: 132px;
height: 44px;
left: 0px;
top: 32px;
background: #FFFFFF;
outline:none;
box-sizing: border-box;
box-shadow: 0px 0px 5px rgb(25 39 67 / 10%);
border-radius: 8px;
border: 1px solid #d9d9d9;
text-align:center;
padding:1vw 1.2vw;
  }
  #word_counter_cont p{
    font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #222222;
margin-left:auto;
@media (max-width: 768px) {
  font-size: 15px;
}
@media (max-width: 500px) {
  font-size: 9px;
}
  }
  .categoryGroup {
    .ant-radio-inner {
      border: 0.5px solid #666666;
    }
    .categoryItem {
      padding: 8px 0px;
    }
    .ant-checkbox + span {
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: ${palette.PRIMARY_TXT_COLOR};
    }
  }
  .submitBtn {
    margin-top:6vw;
    .ant-form-item-control-input-content {
      text-align: center;
    }
    .ant-btn {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      height: 48px;
      padding: 8px 60px;
      @media (max-width: 768px) {
        width:100%;
        padding: 1vw;
      }
    }
  }
  .inputGroupBlock .ant-form-item-control-input-content {
    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .inlineInput {
    display: inline-block;
    width: calc(50% - 20px);
    .PhoneInput{                    
    font-weight: normal;
    font-size: 16px;
    line-height: 24px !important;
    color: #444444;
    padding: 8px 24px 8px 15px;
    background: #FFFFFF;
    border: 0.5px solid #CCCCCC;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px rgb(25 39 67 / 10%);
    border-radius: 8px;
    }
    #inlineInput{
      outline:none;
      border:none;
    }
    @media only screen and (min-width: 576px) and (max-width: 768px) {
      width: calc(50% - 12px);
    }
    .PhoneInput {
    display: flex;
    align-items: center;
    width: 100%;
}
    @media (max-width: 576px) {
      width: 100%;
    }
  }
  .emailInput {
    margin-left: 40px;
    @media only screen and (min-width: 576px) and (max-width: 768px) {
      margin-left: 20px;
    }
    @media (max-width: 576px) {
      margin-left: 0;
    }
  }
`;
export const Quotepop = styled.div`
background:white;
padding:50px 0 75px 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
Button{
  width: 242px;
height: 48px;
background: #1565C0;
border-radius: 8px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
border:none;
outline:none;
cursor:pointer;
@media (max-width:750px) {
margin-top:10vw;
}
}
#pays{
  background:white;
  padding: 1vw 11.6546762589928vw 5.25179856115108vw 11.6546762589928vw;
  margin-top:4vw;
  width:100vw;
}
#pays #pop_title {
  display:none
}
#pop_conteiner{
  width:700px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:auto;
  padding:50px 0 34px 0;
  border-bottom: 0.5px solid #CCCCCC;
  @media(max-width:580px){
    width:100vw;
  }
}
 #pay_containers {
  margin-top:0;
}
.anticon svg {
    width:50px;
    height:50px;
    margin:20px auto;
}
#pop_conteiner p{
  font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #333333;
@media(max-width:580px){
  font-size: 3vw;
}
}
#pop_conteiner #Quotepop_t1{
  font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #666666;
}
#pop_conteiner #Quotepop_t2{
  font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #333333;
margin-top:8px;
}
#pop_conteiner #Quotepop_t3{
  font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #666666;
margin-top:17px;
text-align:center;
width: 55vw;
@media(max-width:750px){
width:100%;
}
}
`;