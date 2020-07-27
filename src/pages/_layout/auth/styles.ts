import styled from 'styled-components';
import signInBackgroundImg from '../../../assets/logo-oca.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
  background: #312e38;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) #dadada no-repeat center;
  background-size: 90% 90%;
`;
