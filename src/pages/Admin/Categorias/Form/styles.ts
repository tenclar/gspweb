import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  background-color: #d3d2d2;
  padding-left: 10px;
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  margin: 10px 0;
  color: #444;
  hr {
    border: 1px solid #f44336;
  }
`;

export const Panel = styled.div`
  width: 90%;
  background-color: #fff;
  padding: 8px;
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

    > div {
      display: flex;
      margin: 10px 0;
    }
  }
`;

export const Button = styled.button`
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

export const Table = styled.table`
  width: 100%;
  margin: 5px 0;

  /* border: 1px solid #fff; */

  thead {
    th {
      font-weight: 400;
      border: 1px solid #fff;
      padding: 8px;
      border-radius: 3px;
      color: #fff;
      background: steelblue;
      font-size: 16px;
    }
  }
  tbody {
    td {
      color: #000;
      padding: 3px 5px;

      border: 1px solid #fff;
      border-radius: 3px;
    }
    > tr:nth-child(2n + 2) {
      background: lightgray;
    }
  }
`;
