import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #a2d200;
  height: 35px;
  border-radius: 10px;
  border: 0;

  width: 35px;
  color: #fff;
  font-weight: 500;

  transition: background-color 0.2s;
  svg {
    transition: transform 0.6s;
  }

  &:hover {
    background: ${shade(0.2, '#a2d200')};
    svg {
      transform: rotate(100deg);
    }
  }
`;
