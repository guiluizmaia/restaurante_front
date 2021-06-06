import styled from 'styled-components';

export const Topico = styled.div`
    border-radius: 10px;
    width: 90vw;
    height: 95vh;
    background-color: #2c2c2c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .topico{
      background-color: white;
    }
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
      padding-left: 30px
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
      font-size: 400px;
    }

    .topicNo{
        background-color: #fff;
        width: 80vw;
        height: auto;
        border-radius: 12px ;
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }

    .topicNo h1{
      width: 75vw;
      text-align: left;
      font-size: 48px
    }

    .topic{
        background-color: #fff;
        width: 80vw;
        height: auto;
        border-radius: 12px 12px 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }

    .topic h1{
      width: 75vw;
      text-align: center;
      font-size: 48px
    }

    .topicMenu{
        //background-color: #d3d3d3;
        background-color: #d3d3d3;
        width: 73vw;
        height: auto;
        border-radius: 12px;
        border-top: 5px solid black;
        margin-top: 5px;
        margin-bottom: 10px;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    h1{
        font-size: 40px;
        margin-left: 40px;
        font-style: bold;
    }
    h2{
        font-size: 25px;
        margin-left: 70px;
    }

    .container{
      background-color: black;
      width: 81.4vw;
      height: 75vh;
      padding-top: 15px;
      overflow-y: auto;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .found{
      //background-color: #fff;
      background-color: #d3d3d3;
      width: 80vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px;
      border-radius: 0 0 12px 12px;
    }

    .iconPlus{
      margin-bottom: 20px;
      border-radius: 12px;
      border: 2px solid;
    }
    .iconI:hover{
      color: #2C2C2C;
    }

    .caixaMenu{
      word-wrap: break-word;

      width: 60vw;
    }

    
`;

export default Topico;
