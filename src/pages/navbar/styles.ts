import styled from 'styled-components';

export const Bar = styled.div`
    background-color: #2c2c2c;
    height: 100vh;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .item{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 65px;
      height: 65px;
      border-radius: 20px;
      cursor: pointer;
      margin-bottom: 100px;
    }

    .itemSelect{
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      margin-bottom: 100px;
      border-bottom:0.2px;
      border-right:0.2px;
      border-style: solid;
      border-color: white;      
      width: 85px;
      height: 85px;
    }

    .icon{
      font-size: 40px;
      background-color: transparent;
      color: #fff;
    }

    .item:hover{
      border-bottom:0.2px;
      border-right:0.2px;
      border-style: solid;
      border-color: white;
      width: 85px;
      height: 85px;
      border-radius: 10px;
    }

    .item:hover .icon{
      font-size: 60px;
    }
`;

export const Page = styled.div`
    background-color: #1C1C1C;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 5vw 95vw;
    
    .page{
      display: flex;
      justify-content: center;
      align-items: center;
      
    }
`;


export default {Bar, Page};
