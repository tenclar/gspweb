import styled, { css } from 'styled-components';

interface WrapperProps {
  sidebarToogleOpen?: boolean;
}

export const Container = styled.aside<WrapperProps>`
  grid-area: menu;
  min-height: 100%;
  min-width: 300px;
  background: #202225;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  font-size: 12px;
  opacity: 1;
  visibility: visible;

  ${(props) =>
    !props.sidebarToogleOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  ${(props) =>
    props.sidebarToogleOpen &&
    css`
      opacity: 0;
      transition: visibility 0.3s linear, opacity 0.3s linear;
    `}
`;
