import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: space-around;
  label {
    display: flex;
    align-items: center;
    align-content: center;
    padding: 0px 10px;
    > input {
      margin-right: 5px;
    }
  }
`;
