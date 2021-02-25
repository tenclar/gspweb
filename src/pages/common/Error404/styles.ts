import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  color: #000;
  p {
    font-size: 16px;
  }
`;
export const Content = styled.div`
  color: #000;
  margin: 0;
  padding: 0;
  font-size: 60px;
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
    height: 300px;
  }
`;
