import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container, Content, Logo } from './styles';

import logo from '../../../assets/logooca2.svg';
// import api from '../../../services/api';

const Dashboard: React.FC = () => (
  /*  useEffect(() => {
    async function loadMe(): Promise<void> {
      try {
        await api.get('/profile');
      } catch (err) {
        toast.error('Erro na lista');
      }
    }

    loadMe();
  }, []);
 */
  <Container>
    <Logo>
      <img src={logo} alt="Guia de Serviços" />
    </Logo>
    <Content>
      {' '}
      <h1> Painel de Controle</h1>
      <hr />
      <p>Guia de Serviços</p>
    </Content>
    <ToastContainer />
  </Container>
);
export default Dashboard;
