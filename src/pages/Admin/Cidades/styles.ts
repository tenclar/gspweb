import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;

  /* padding-left: 10px; */
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const PanelAcoes = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;



export const Panel = styled.div`
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 4px;
`;

export const SearchTableContainer = styled.div`
  width: 100%;

  height: 42px;
  display: flex;
  form {
    width: 100%;
    display: flex;
  }

  input {
    color: #000;
    border-radius: 5px;
    border: 2px solid #ccc;
    padding: 10px;
    width: 100%;
    margin-right: 5px;
  }

  button {
    width: 10%;



    background: #f44336;
    padding: 8px;
    color: #fff;
    border-radius: 5px;
    border: 0;
    &:hover {
      background: ${shade(0.2, '#f44336')};
    }
  }
`;

export const LinkButton = styled(Link)`
  background: #00bcd4;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  height: 35px;

  width: 65px;

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

export const EditarLinkButton = styled(Link)`

  background: #808080;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  height: 35px;
  width: 35px;
  border-radius: 10px;

  border: 10;
  margin: 100;
  padding: 100;
  color: #fff;
  font-weight: 500;

  transition: background-color 1.6s;
  svg {
    transition: transform 1.2s;
  }

  &:hover {
    background: ${shade(0.2, '#5e5e5e')};
    svg {
      transform: rotate(360deg);
    }
  }
`;

export const StatusLinkButton = styled(Link)`
  background: #808080;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  height: 35px;
  width: 35px;
  border-radius: 10px;
  border: 10;
  margin: 100;
  padding: 100;
  color: #fff;
  font-weight: 500;

  transition: background-color 1.6s;
  svg {
    transition: transform 1.2s;
  }

  &:hover {
    background: ${shade(0.2, '#FF4040')};
    svg {
      transform: rotate(360deg);
    }
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
