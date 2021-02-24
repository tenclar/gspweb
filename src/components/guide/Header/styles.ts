import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background: #fff;
  padding: 0 30px;
  width: 100%;
`;

export const Content = styled.div`
  height: 100px;
  /* max-width: 1366px; */

  width: 100%;
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
export const Logo = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  /* border-left: 1px solid #eee; */

  div {
    text-align: right;
    margin-right: 10px;
  }

  img {
    margin-right: 20px;
    padding-right: 20px;

    // width: 120px;
    height: 80px;
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
    // width: 80px;
    height: 70px;
  }
`;
