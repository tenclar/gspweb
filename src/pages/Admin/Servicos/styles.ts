import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const Title = styled.div`
  margin-bottom: 10px;
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
`;

export const SearchTableContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Table = styled.table`
  width: 100%;
  margin: 10px 0;

  /* border: 1px solid #fff; */

  thead {
    th {
      font-weight: 400;
      border: 1px solid #fff;
      padding: 10px;
      border-radius: 3px;
      color: #fff;
      background: steelblue;
    }
  }
  tbody {
    td {
      color: #000;
      padding: 10px;
      border: 1px solid #fff;
      border-radius: 3px;
    }
    > tr:nth-child(2n + 2) {
      background: lightgray;
    }
  }
`;
