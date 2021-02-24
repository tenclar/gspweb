import React, { useEffect, useState } from 'react';
import { FiPlus, FiRefreshCw, FiSearch } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../../services/api';

import loadingGif from '../../../assets/ajax-loader.gif';
import {
  Container,
  Title,
  Table,
  Panel,
  SearchTableContainer,
  LinkButton,
  EditarLinkButton,
} from './styles';

interface Categoria {
  id: string;
  slug: string;
  titulo: string;
  categoria_id: string;
}

const Superiores: React.FC = () => {
  const [superiores, setSuperiores] = useState<Categoria[]>([]);

  const [loading, setLoading] = useState(false);

  async function loadSuperiores(): Promise<void> {
    try {
      setLoading(true);
      const response = await api.get('/superiores');
      setSuperiores(response.data.superiores);
    } catch (err) {
      toast.error('Erro na lista');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // api.get('/superiores').then((response) => setSuperiores(response.data));
    loadSuperiores();
  }, []);

  return (
    <Container>
      <Title>
        <h1>Superiores</h1>
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
            <tr>
              <th style={{ width: '35px' }}>
                <LinkButton to="/ad/cadastro/superiores/novo">
                  <FiPlus />
                </LinkButton>
              </th>
              <th style={{ width: '300px' }}>#</th>
              <th>Categoria id</th>
              <th>Categoria</th>
              <th>Slug</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={3}>
                  Carregando <img src={loadingGif} alt="loading" />
                </td>
              </tr>
            )}
            {superiores.length === 0 && (
              <tr>
                <td colSpan={3}> Nenhum Cadastro efetuado </td>
              </tr>
            )}
            {superiores.map((categoria) => (
              <tr key={categoria.id}>
                <td style={{ textAlign: 'center' }}>
                  <EditarLinkButton
                    to={`/ad/cadastro/superiores/editar/${categoria.id}`}
                  >
                    <FiRefreshCw />
                  </EditarLinkButton>
                </td>
                <td style={{ textAlign: 'center' }}>{categoria.id}</td>
                <td>{categoria.categoria_id}</td>
                <td>{categoria.titulo}</td>
                <td>{categoria.slug}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
      <ToastContainer />
    </Container>
  );
};

export default Superiores;
