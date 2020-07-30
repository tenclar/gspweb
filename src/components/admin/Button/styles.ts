import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  color?: string;
}
export const Container = styled.button<ContainerProps>`
  background: #00bcd4;
  height: 40px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  color: #fff;
  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#00bcd4')};
  }
`;
