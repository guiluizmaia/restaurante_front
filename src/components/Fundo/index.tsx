import styled from 'styled-components';

export const Fundo = styled.div`    
  width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    background: rgba(0, 0, 0, 0.4);
`;

export default Fundo;
