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

interface Categoria {
  id: string;
  slug: string;
  titulo: string;
  categoria_id: string;
}

const Categorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [loading, setLoading] = useState(false);

  async function loadCategorias(): Promise<void> {
    try {
      setLoading(true);
      const response = await api.get('/categorias');
      setCategorias(response.data.categorias);
    } catch (err) {
      toast.error('Erro na lista');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // api.get('/categorias').then((response) => setCategorias(response.data));
    loadCategorias();
  }, []);

  return (
    <Container>
      <Title>
        <h1>Categorias</h1>
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
                <LinkButton to="/admin/cadastro/categorias/novo">
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
            {categorias.length === 0 && (
              <tr>
                <td colSpan={3}> Nenhum Cadastro efetuado </td>
              </tr>
            )}
            {categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td style={{ textAlign: 'center' }}>
                  <ButtonAlterar type="button">
                    <FiRefreshCw />
                  </ButtonAlterar>
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

export default Categorias;
