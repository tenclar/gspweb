import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../../hooks/Auth';
import logo from '../../../assets/logooca.svg';
import prof from '../../../assets/profile.jpg';
import { Container, Content, Profile, Title, ButtonLogout } from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Guia de Serviços" />
          <Link to="/">
            <Title>Painel de Controle</Title>
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <Link to="/admin/profile"> Meu Perfil</Link>
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
