import React from 'react';

import { Container, Content, Background } from './styles';

const AuthLayout: React.FC = ({ children }) => (
  <Container>
    <Content>{children}</Content>
    <Background />
  </Container>
);

export default AuthLayout;
