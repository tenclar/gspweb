import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logooca2.svg';
import brasao from '../../../assets/logoseplag.svg';
import { Container, Content, Brasao, Logo } from './styles';

const Header: React.FC = ({ children }) => (
  <Container>
    <Content>
      <nav>
        <Link to="/">
          <Logo>
            <img src={logo} alt="Guia de Serviços" />
          </Logo>
        </Link>
        <span> ORGANIZAÇÃO CENTRAL DE ATENDIMENTO</span>
      </nav>
      <aside>
        <Brasao>
          <img src={brasao} alt="perfil" />
        </Brasao>
      </aside>
    </Content>
  </Container>
);

export default Header;
