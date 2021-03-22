import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  grid-area: header;
 background-color: #023E88;
  display: flex;
  flex-direction: column;

`;

export const Content = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;



`;


export const ToggleButton = styled.button`
  background: #023E88;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  height: 57px;
  width: 60px;

  border: 0;
  margin: 0;
  color: #fff;
  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#023E88')};
  }
`;


export const Line = styled.div`
  width: 100%;
  height: 10px;

  background: linear-gradient(
    to right,
    rgba(255, 206, 9, 1) 0%,
    rgba(158, 189, 22, 1) 30%,
    rgba(64, 164, 41, 1) 51%,
    rgba(158, 189, 22, 1) 70%,
    rgba(255, 206, 9, 1) 100%
  );
`;
