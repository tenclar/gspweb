import styled from 'styled-components';

export const Container = styled.div`
  background-color: #9597a6;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 60px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      margin-right: 20px;
      padding-right: 20px;
      height: 40px;
      border-right: 1px solid #eee;
    }
    > a {
      font-weight: bold;
      color: #363636;
      font-size: 16px;
      text-decoration: none;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
