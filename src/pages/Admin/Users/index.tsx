import React, { useEffect, useState } from 'react';
import { FiPlus, FiRefreshCw, FiSearch } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../../services/api';
import ButtonAlterar from '../../../components/admin/ButtonAlterar';
import loadingGif from '../../../assets/ajax-loader.gif';

import {
  Container,
  Title,
  Table,
  Panel,
  SearchTableContainer,
  LinkButton,
} from './styles';

interface User {
  id: string;
  name: string;
  email: string;
}
const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [loading, setLoading] = useState(false);

  async function loadUsers(): Promise<void> {
    try {
      setLoading(true);
      const response = await api.get('/users');
      setUsers(response.data.users);
    } catch (err) {
      toast.error('Erro na lista');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Container>
      <Title>
        <h1>Usuários</h1>

        <hr />
      </Title>
      <Panel>
        <SearchTableContainer>
          <input name="search" type="text" placeholder="Search" />
          <button type="button">
            <FiSearch size={20} />
          </button>
        </SearchTableContainer>
      </Panel>
      <Panel>
        <Table cellPadding="0" cellSpacing="0">
          <thead>
            {loading && (
              <tr>
                <td colSpan={3}>
                  Carregando <img src={loadingGif} alt="loading" />
                </td>
              </tr>
            )}

            <tr>
              <th
                style={{
                  width: '35px',
                }}
              >
                <LinkButton to="/admin/cadastro/usuarios/novo">
                  <FiPlus />
                </LinkButton>
              </th>
              <th style={{ width: '300px' }}>#</th>
              <th>Nome</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
              <tr>
                <td colSpan={3}> Nenhum cadastro</td>
              </tr>
            )}
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ textAlign: 'center' }}>
                  <ButtonAlterar type="button">
                    <FiRefreshCw />
                  </ButtonAlterar>
                </td>
                <td style={{ textAlign: 'center' }}>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
      <ToastContainer />
    </Container>
  );
};

export default Users;
