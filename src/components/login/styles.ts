import styled from 'styled-components';

export const Container = styled.div`
    *{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      background-color: #363636;
    }



  .box{
    margin-top: 10%; 
    width: 600px;
    height: 550px;
    border: 2px;
    border-style: solid;
    border-color: #3CB371;
    border-radius: 8px;
    background-color: #1C1C1C;
  }

  h1{
      margin-top: 30px;
      color: #DCDCDC;
      background-color: #1C1C1C;
  }

  .input {
      border: 3px;
      border-style: solid;
      border-color:#3CB371;
      border-radius: 4px;
      height: 35px;
      width: 450px;
      padding: 5px;

      font-size: 25px;
      background-color:  #D3D3D3;
  }

  .bnt{
    margin-top: 30px;
    width: 320px;
    height: 30px;
    border: 3px;
    border-style: solid;
    border-radius: 6px;
    border-color:#3CB371;
    text-decoration:none;
    color : #DCDCDC;
    margin-bottom: 30px;
    height: 800px;
  }

  .bnt:hover{
    background-color: black;
    color: white;
  }
`;

export default Container;
