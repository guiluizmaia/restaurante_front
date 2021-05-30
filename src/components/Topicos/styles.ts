import styled from 'styled-components';

export const Topico = styled.div`
    border-radius: 10px;
    width: 90vw;
    height: 95vh;
    background-color: #2c2c2c;
    padding-top: 100px;
    display: flex;
    justify-content: center;

    .add{
      display: flex;
      justify-content: space-between;
      padding-right: 40px;
      padding-left: 40px;
      height: 100px;
      margin-bottom: 40px;
    }

    .add input{
      margin-top: 25px;
      width: 70vw;
      height: 50px;
      font-size: 35px;
      padding-left: 30px;
      border-radius: 20px;
    }

    .item{
      width: 65px;
      height: 65px;
      border-radius: 20px;
      cursor: pointer;
      margin-bottom: 100px;
      
    }

    .item:hover{
      border-bottom:0.2px;
      border-right:0.2px;
      border-style: solid;
      border-color: white;
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }

    .item:hover .icon{
      font-size: 200px;
    }

    .topic{
        background-color: #fff;
        width: 80vw;
        height: 7vh;
        border-radius: 12px;
        display:flex;
        margin-bottom: 10px;
        align-items: center;
        justify-content: space-between;
    }
    h1{
        margin-left: 40px;
    }
    
    .container{
      background-color: black;
      width: 81.4vw;
      height: 65vh;
      padding-top: 15px;
      overflow-y: auto;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .iconI:hover{
      color: #2C2C2C;
    }

`;

export default Topico;
