import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Container, Content, Logo } from './styles';
import logo from '../../../assets/logooca2.svg';

const Error404: React.FC = () => {
  const { url } = useRouteMatch();
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Guia de Serviços" />
      </Logo>
      <Content>404</Content>
      <p>Página não encontrada</p>
      <p>{JSON.stringify(url)}</p>
    </Container>
  );
};

export default Error404;
