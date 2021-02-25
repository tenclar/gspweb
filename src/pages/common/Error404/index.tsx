import React from 'react';
import { Container, Content, Logo } from './styles';
import logo from '../../../assets/logooca2.svg';

const Error404: React.FC = () => (
  <Container>
    <Logo>
      <img src={logo} alt="Guia de Serviços" />
    </Logo>
    <Content>404</Content>
    <p>Página não encontrada</p>
  </Container>
);

export default Error404;
