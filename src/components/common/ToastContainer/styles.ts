import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

export const Toast = styled.div`
  width: 380px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  background: #ebf8ff;
  color: #3172b7;

  > svg {
    margin: 4px 12px 0 0;
  }
  div {
    flex: 1;
    strong {
      font-size: 16px;
    }
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
    }
  }
  button {
    position: absolute;
    top: 17px;
    right: 8px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
