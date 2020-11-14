import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-oca.svg';
import brasao from '../../../assets/brasao.svg';
import { Container, Content, Brasao } from './styles';

const Header: React.FC = ({ children }) => (
  <Container>
    <Content>
      <nav>
        <Link to="/">
          <img src={logo} alt="Guia de Serviços" />
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
