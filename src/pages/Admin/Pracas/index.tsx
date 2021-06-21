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

interface Pracas {
  id: string;
  slug: string;
  nome: string;
  status: boolean;
}
interface PracasPesquisaData {
  nome: string;
}
const Pracas: React.FC = () => {
  const [pracas, setPracas] = useState<Pracas[]>([]);
  const [args, setArgs] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPracas(): Promise<void> {
      try {
        setLoading(true);
        const response = await api.get('pracas', {
          params: { nome: args },
        });

        setPracas(response.data.pracas);
      } catch (err) {
        toast.error('Erro na lista');
      } finally {
        setLoading(false);
      }
    }

    loadPracas();
  }, [args]);

  const handleSubmit = useCallback((data: PracasPesquisaData) => {
    setArgs(data.nome);
  }, []);

  return (
    <Container>
      <Title>
        <h1> Praças</h1>
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
                <LinkButton to="/ad/cadastro/pracas/novo">
                  <FiPlus />
                </LinkButton>
              </th>
              <th>Nome da Tag</th>
              <th>Slug</th>
              <th>Status</th>
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
            {pracas.length === 0 && (
              <tr>
                <td colSpan={3}> Nenhum Cadastro efetuado </td>
              </tr>
            )}
            {pracas.map((tag) => (
              <tr key={tag.id}>
                <td style={{ textAlign: 'center' }}>
                  <EditarLinkButton to={`/ad/cadastro/pracas/editar/${tag.id}`}>
                    <FiRefreshCw />
                  </EditarLinkButton>
                </td>
                <td>{tag.nome}</td>
                <td>{tag.slug}</td>
                <td>{String(tag.status)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
      <ToastContainer />
    </Container>
  );
};

export default Pracas;
