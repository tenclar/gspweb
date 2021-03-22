import styled, { css } from 'styled-components';

interface WrapperProps {
  sidebarToogleOpen?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;

  ${(props) =>
    props.sidebarToogleOpen &&
    css`
      grid-template-areas: 'header header' 'content content' 'footer footer';
    `}

  ${(props) =>
    !props.sidebarToogleOpen &&
    css`
      grid-template-areas: 'header header' 'menu content' 'footer footer';
    `}
`;
export const Content = styled.div`
  grid-area: content;
  flex: 1;
  background-color: #eee;
  padding: 0 10px 0px 10px;
`;
