import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
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
  font-size: 14px;

  form {
    color: #000;
    display: flex;
    flex-direction: column;

    label {
      font-weight: 500;
      margin-bottom: 10px;
    }
    /*  input,
    textarea,
    select {
      color: #000;
      border-radius: 5px;
      border: 2px solid #ccc;
      padding: 10px;
      width: 100%;
      margin: 5px 0;
    } */
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

export const AddButton = styled.button`
  background: #00bcd4;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  height: 35px;
  width: 35px;
  border-radius: 10px;
  border: 0;
  margin: 0;
  color: #fff;
  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#00bcd4')};
  }
`;
export const CancelButton = styled.button`
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

export const AddLinkButton = styled(Link)`
  background: #00bcd4;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  height: 35px;
  width: 35px;
  border-radius: 10px;
  border: 0;
  margin: 0;
  color: #fff;
  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#00bcd4')};
  }
`;
export const CancelLinkButton = styled(Link)`
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

export const BlockButton = styled.div`
  display: flex;
  margin: 10px;
`;
