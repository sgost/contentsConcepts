import styled from 'styled-components';

export const PayContainer = styled.div`
#pays {
  background: white;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5.25179856115108vw 11.6546762589928vw;
  @media (max-width:750px){
  background: #F5FBFF;
}
}
#pays h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 2.01438848920863vw;
  line-height: 3.02158273381295vw;
  color: black;
  @media (max-width:750px){
    display:none;
  }
}
#pay_containers {
  width: 80.2158273381295vw;
  height: 42.5179856115108vw;
  display: flex;
  background: white;
  padding: 0.719424460431655vw 5.75539568345324vw 0.719424460431655vw 7.19424460431655vw;
  margin-top: 4.1726618705036vw;
  box-shadow: 0px 0px 0.575539568345324vw rgba(21, 39, 73, 0.15);
  border-radius: 0.575539568345324vw;
  @media(max-width:750px){
    flex-direction:column;
    width:fit-content;
    height:fit-content;
    background: transparent;
    box-shadow: none;
    padding:0;
  }
}
#pay_container_block1s {
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin-top: 3vw;
  @media(max-width:750px){
    width: 90vw;
    height:fit-content;
    background:white;
    padding:47px 35px;
    box-shadow: 0px 0px 8px rgba(21, 39, 73, 0.15);
border-radius: 8px;
  }
}
 #pay_container_block1s #paysqr {
  width: 25vw;
  height: 25vw;
  border-radius: 1vw;
}
#pay_container_block1s #title{
  display:none;
  @media(max-width:750px){
    font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 31px;
color: #222222;
display:block;
text-align:center;
color: #222222;
margin-bottom:33px;
  }
}
#pay_container_block2s {
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  margin: auto auto auto 3.59712230215827vw;
  text-align: left;
  @media(max-width:750px){
  padding-top:10.2040816326531vw;
  }
}
#pay_container_block2s h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 2.58992805755396vw;
  line-height: 3.45323741007194vw;
  width: 30.431654676259vw;
  color: #222222;
  @media(max-width:750px){
    font-size: 16px;
    line-height: 30px;
    width: 100%;
  }
}
#pay_container_block2s p {
  font-family: Poppins;
  font-style: normal;
  font-weight: lighter;
  font-size: 1.15107913669065vw;
  line-height: 2vw;
  color: #222222;
  font-weight: lighter;
  width: 40vw;
  @media(max-width:750px){
    font-size: 16px;
    line-height: 30px;
    width: 100%;
  }
}
#pay_container_block2s p span {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.19402985074627vw;
  line-height: 1.82926829268293vw;
  color: #222222;
  @media(max-width:750px){
    font-size: 16px;
    line-height: 30px;
    width: 100%;
  }
}
#pay_container_block2s li {
  font-family: Poppins;
  font-style: normal;
  font-weight: lighter;
  font-size: 1.15107913669065vw;
  line-height: 2.5vw;
  color: #222222;
  font-weight: lighter;
  width: 38.4172661870504vw;
  @media(max-width:750px){
    font-size: 16px;
    line-height: 30px;
    width: 100%;
  }
}
#pay_container_block2s li span {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.19402985074627vw;
  line-height: 1.82926829268293vw;
  color: #222222;
  @media(max-width:750px){
    font-size: 16px;
    line-height: 30px;
    width: 100%;
  }
}
`;
