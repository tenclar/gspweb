import React, { useCallback, useEffect, useState } from 'react';
import { FiPlus, FiRefreshCw, FiSearch } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import { Form } from '@unform/web';
import Input from '../../../components/admin/InputSearch';
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
interface CategoriaPesquisaData {
  titulo: string;
}
const Categorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [args, setArgs] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCategorias(): Promise<void> {
      try {
        setLoading(true);
        const response = await api.get('categorias/recursive', {
          params: { titulo: args },
        });

        setCategorias(response.data.categorias);
      } catch (err) {
        toast.error('Erro na lista');
      } finally {
        setLoading(false);
      }
    }
    // api.get('/categorias').then((response) => setCategorias(response.data));
    loadCategorias();
  }, [args]);

  const handleSubmit = useCallback((data: CategoriaPesquisaData) => {
    setArgs(data.titulo);
  }, []);

  return (
    <Container>
      <Title>
        <h1>Categorias</h1>
        <hr />
      </Title>

      <Panel>
        <SearchTableContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              name="titulo"
              type="text"
              placeholder="Digite algo para pesquisar..."
            />
            <button type="submit">
              <FiSearch size={20} />
            </button>
          </Form>
        </SearchTableContainer>
      </Panel>

      <Panel>
        <Table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th style={{ width: '35px' }}>
                <LinkButton to="/ad/cadastro/categorias/novo">
                  <FiPlus />
                </LinkButton>
              </th>
              <th>Categoria</th>
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
                  <EditarLinkButton
                    to={`/ad/cadastro/categorias/editar/${categoria.id}`}
                  >
                    <FiRefreshCw />
                  </EditarLinkButton>
                </td>
                <td>{categoria.titulo}</td>
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
