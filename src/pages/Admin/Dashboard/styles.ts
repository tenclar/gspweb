import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Content = styled.div`
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  //color: rgba(255, 255, 245, 0.9);
  color: #333;
  text-shadow: 3px 2px 5px rgba(0, 0, 0, 0.61);

  hr {
    width: 80%;
    border: 1px solid #e65121;
  }
  > h1 {
    font-size: 80px;
  }
  > p {
    font-size: 60px;
  }
`;
