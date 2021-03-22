import React from 'react';
import { Container, Content, Logo } from './styles';
import logo from '../../../assets/logooca2.svg';

const Dashs: React.FC = () => (
  <Container>
    <Logo>
      <img src={logo} alt="Guia de Serviços" />
    </Logo>
    <Content>
      <h1> Painel de Controle</h1>
      <hr />
      <p>Guia de Serviços</p>
    </Content>
  </Container>
);

export default Dashs;
