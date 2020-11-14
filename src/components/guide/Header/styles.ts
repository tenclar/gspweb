import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 100px;
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font: 25px 'Century Gothic', Muli, Segoe UI, sans-serif;
      font-weight: 350;
      color: #fff;
    }
    img {
      margin-right: 20px;
      padding-right: 20px;

      width: 120px;
      height: 120px;
    }

    a {
      font-weight: bold;
      color: #363636;
      font-size: 16px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;
export const Brasao = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  /* border-left: 1px solid #eee; */

  div {
    text-align: right;
    margin-right: 10px;
  }

  img {
    width: 80px;
    height: 80px;
  }
`;
