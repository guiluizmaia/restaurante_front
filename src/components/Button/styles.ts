import styled from 'styled-components';

export const button = styled.div`
   background-color:  transparent;
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
    cursor: pointer;
  }

  .bnt:hover{
    background-color: black;
    color: white;
  }
`;

export default button;
