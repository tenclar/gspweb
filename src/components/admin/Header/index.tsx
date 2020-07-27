import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-oca.svg';
import prof from '../../../assets/profile.jpg';
import { Container, Content, Profile } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <nav>
        <img src={logo} alt="Guia de Serviços" />
        <Link to="/">Painel</Link>
      </nav>

      <aside>
        <Profile>
          <div>
            <strong>Tenclar Valus</strong>
            <Link to="/admin/profile"> Meu Perfil</Link>
          </div>
          <img src={prof} alt="perfil" />
        </Profile>
      </aside>
    </Content>
  </Container>
);
export default Header;
