import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
`;

export const Title = styled.div`
  margin: 15px 0;
  color: #444;
  hr {
    border: 1px solid #f44336;
  }
`;

export const Panel = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 4px;

  form {
    color: #000;
    display: flex;
    flex-direction: column;

    label {
      font-weight: 500;
      margin-bottom: 10px;
    }
    input,
    textarea,
    select {
      color: #000;
      border-radius: 5px;
      border: 2px solid #ccc;
      padding: 10px;
      width: 100%;
      margin: 5px 0;
    }
    > div {
      display: flex;
      margin: 10px;
    }
  }
`;

export const Button = styled.div`
  width: 100px;
  background: #00bcd4;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  border: 0;
  text-align: center;
  &:hover {
    background: ${shade(0.2, '#00bcd4')};
  }
`;

export const LinkButton = styled(Link)`
  margin-left: 5px;
  text-align: center;
  background: #f44336;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  width: 100px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#f44336')};
  }
`;
