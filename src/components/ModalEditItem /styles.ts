import styled from 'styled-components';

export const Modal = styled.div`    
    background-color: black;
    border: 5px;
    border-style: solid;
    border-color: white;
    border-radius: 12px;
    width: 40vw;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    input{
      margin-top: 25px;
      width: 30vw;
      height: 45px;
      font-size: 35px;
      padding-left: 30px;
      border-radius: 20px;
      text-align: center;
    }    

    textarea{
      margin-top: 25px;
      width: 30vw;
      height: 28vh;
      font-size: 35px;
      padding-left: 30px;
      border-radius: 20px;
      text-align: center;
    }

    h1{
        color: white;
        text-align: center;
        font-size: 35px;
    }

    
    .icon{
        font-size: 50; 
        color: white;
        cursor: pointer;
        margin: 40px;
        margin-bottom: 0;
    }
    .icon:hover{
        background-color: white;
        color: black;
        border-radius: 30px;
    }

    .dropdown{
      background-color: #fff;
      margin-top: 25px;
      width: 30vw;
      height: 45px;
      font-size: 35px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: center;
      cursor: pointer;
    }

    .dropdownSelect{
      background-color: #fff;
      margin-top: 25px;
      width: 30vw;
      height: auto;
      max-height: 40vh;
      font-size: 35px;
      border-radius: 20px ;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }

    .title{
      display: flex;
      flex-direction: center;
      justify-content: space-between;
    }

    .itens{
      border-radius: 12px;
      border-bottom: 2px solid;
      border-top: 2px solid;
      margin-bottom: 5px;
      display: flex;
      cursor: pointer;
    }

    .texto{
      margin-top: 10px;
      font-size: 30px;
    }

`;

export default Modal;
