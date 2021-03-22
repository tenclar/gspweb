import styled from 'styled-components';


export const Container = styled.div`
grid-area: footer;
background-color: #023E88;

  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;


  //padding: 5px;
`;


export const Line = styled.div`
  width: 100%;
  height: 3px;

  background: linear-gradient(
    to right,
    rgba(255, 206, 9, 1) 0%,
    rgba(158, 189, 22, 1) 30%,
    rgba(64, 164, 41, 1) 51%,
    rgba(158, 189, 22, 1) 70%,
    rgba(255, 206, 9, 1) 100%
  );
`;
