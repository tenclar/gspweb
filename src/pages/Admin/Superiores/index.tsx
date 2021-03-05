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

interface Superior {
  id: string;
  slug: string;
  nome: string;
}
interface SuperiorPesquisaData {
  nome: string;
}
const Superiores: React.FC = () => {
  const [superiores, setSuperiores] = useState<Superior[]>([]);
  const [args, setArgs] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadSuperiores(): Promise<void> {
      try {
        setLoading(true);
        const response = await api.get('superiores', {
          params: { nome: args },
        });

        setSuperiores(response.data.superiores);
      } catch (err) {
        toast.error('Erro na lista');
      } finally {
        setLoading(false);
      }
    }
    // api.get('/categorias').then((response) => setCategorias(response.data));
    loadSuperiores();
  }, [args]);

  const handleSubmit = useCallback((data: SuperiorPesquisaData) => {
    setArgs(data.nome);
  }, []);

  return (
    <Container>
      <Title>
        <h1>Instituições Superiores</h1>
        <hr />
      </Title>

      <Panel>
        <SearchTableContainer>
          <Form onSubmit={handleSubmit}>
            <Input name="nome" type="text" placeholder="Procurar" />
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
                <LinkButton to="/ad/cadastro/superiores/novo">
                  <FiPlus />
                </LinkButton>
              </th>
              <th>Instituição superior</th>
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
            {superiores.map((superior) => (
              <tr key={superior.id}>
                <td style={{ textAlign: 'center' }}>
                  <EditarLinkButton
                    to={`/ad/cadastro/superiores/editar/${superior.id}`}
                  >
                    <FiRefreshCw />
                  </EditarLinkButton>
                </td>
                <td>{superior.nome}</td>
                <td>{superior.slug}</td>
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
