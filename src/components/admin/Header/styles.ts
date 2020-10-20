import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: absolute;
  background-color: #1474ea;
  /* background-color: #9597a6; #006be8  #264a91ff */
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
      font-weight: 400;
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
      font-weight: 700;
      display: block;
      color: #fff;

      /* color: #333; */
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
export const Title = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  color: #fff;
`;
