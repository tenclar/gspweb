import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../../hooks/Auth';
import logo from '../../../assets/logooca2.svg';
import prof from '../../../assets/profile.jpg';
import { Container, Content, Profile, Title, ButtonLogout } from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Guia de Serviços" />
          </Link>

          <Link to="/ad/painel">
            <Title>Guia de Serviços - OCA</Title>
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <Link to="/ad/profile"> Meu Perfil</Link>
            </div>
            <img src={prof} alt="perfil" />
          </Profile>

          <ButtonLogout type="button" onClick={() => signOut()}>
            <FiPower size={16} />
          </ButtonLogout>
        </aside>
      </Content>
    </Container>
  );
};
export default Header;
