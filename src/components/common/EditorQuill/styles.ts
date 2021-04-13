import styled, { css } from 'styled-components';
import ToolTip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  color: #666360;
  border-radius: 4px;
  /* border: 2px solid #233129; */
  border: 1px solid hsl(0,0%,80%);
  padding: 10px;
  width: 80%;
  flex-direction:row;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      //color: #ff9900;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      border-color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: #666360;
    }
  }

  > svg {
    margin-right: 16px;
  }
`;

export const Error = styled(ToolTip)`
  height: 20px;
  margin-left: 12px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
