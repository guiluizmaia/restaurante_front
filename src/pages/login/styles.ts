import styled from 'styled-components';

export const Container = styled.div`
    *{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    background-color: #1C1C1C;

    }

  .box{
    //margin-top: 10%; 
    width: 600px;
    height: 550px;
    border: 2px;
    background-color:  #FFFFFF;
    
    border-radius: 8px;
  }

  .nome{
    font-family: 'Pattaya', sans-serif;
    font-size: 40px;
    background-color: transparent;
    color: #1C1C1C;
    
  }

  .tipo{
    font-family: 'Pattaya', sans-serif;
    margin-top: 30px;
    color: #1C1C1C;
    background-color: transparent;
    //width: 490px;
    align-items: flex-start;
  }

  h2{
      margin-top: 30px;
      color: #1C1C1C;
      background-color: transparent;
      
  }

  .input {   
      height: 35px;
      width: 450px;
      padding: 10px;
      background-color: #FFFFFF;

  }

  .button{
    background-color: red;
    height: 150px;
    margin-bottom: 100px;
  }

  .linha{
    background-color: #2c2c2c;
    width: 100px;
    height: 20px;
    margin-bottom: 30px;
    margin-top: 10px;
  }
  

  .bnt{
    margin-top: 60px;
    width: 320px;
    height: 30px;
    border: 3px;
    border-radius: 40px;
    font-size: 30px;
    text-decoration:none;
    color : #DCDCDC;
    height: 800px;
    cursor: pointer;
  }

  .bnt:hover {
    background-color: #2c2c2c;
    color: white;
    transition-delay: 20ms;
  }


`;

export default Container;
