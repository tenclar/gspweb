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

interface Cidade {
  id: string;
  slug: string;
  nome: string;
}

const Categorias: React.FC = () => {
  const [cidades, setCidades] = useState<Cidade[]>([]);

  const [loading, setLoading] = useState(false);

  async function loadCidades(): Promise<void> {
    try {
      setLoading(true);
      const response = await api.get('/cidades');
      setCidades(response.data.cidades);
    } catch (err) {
      toast.error('Erro na lista');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // api.get('/cidades').then((response) => setCidades(response.data));
    loadCidades();
  }, []);

  return (
    <Container>
      <Title>
        <h1>Cidades</h1>
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
                <LinkButton to="/ad/cadastro/cidades/novo">
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
            {cidades.length === 0 && (
              <tr>
                <td colSpan={3}> Nenhum Cadastro efetuado </td>
              </tr>
            )}
            {cidades.map((cidade) => (
              <tr key={cidade.id}>
                <td style={{ textAlign: 'center' }}>
                  <EditarLinkButton
                    to={`/ad/cadastro/categorias/editar/${cidade.id}`}
                  >
                    <FiRefreshCw />
                  </EditarLinkButton>
                </td>
                <td style={{ textAlign: 'center' }}>{cidade.id}</td>
                <td>{cidade.id}</td>
                <td>{cidade.nome}</td>
                <td>{cidade.slug}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
      <ToastContainer />
    </Container>
  );
};

export default Categorias;
