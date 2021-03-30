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

interface Publicos {
  id: string;
  slug: string;
  nome: string;
}
interface PublicosPesquisaData {
  nome: string;
}
const Publicos: React.FC = () => {
  const [publicos, setPublicos] = useState<Publicos[]>([]);
  const [args, setArgs] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPublicos(): Promise<void> {
      try {
        setLoading(true);
        const response = await api.get('publicos', {
          params: { nome: args },
        });

        setPublicos(response.data.publicos);
      } catch (err) {
        toast.error('Erro na lista');
      } finally {
        setLoading(false);
      }
    }

    loadPublicos();
  }, [args]);

  const handleSubmit = useCallback((data: PublicosPesquisaData) => {
    setArgs(data.nome);
  }, []);

  return (
    <Container>
      <Title>
        <h1> Públicos</h1>
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
                <LinkButton to="/ad/cadastro/publicos/novo">
                  <FiPlus />
                </LinkButton>
              </th>
              <th>Público</th>
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
            {publicos.length === 0 && (
              <tr>
                <td colSpan={3}> Nenhum Cadastro efetuado </td>
              </tr>
            )}
            {publicos.map((tag) => (
              <tr key={tag.id}>
                <td style={{ textAlign: 'center' }}>
                  <EditarLinkButton
                    to={`/ad/cadastro/publicos/editar/${tag.id}`}
                  >
                    <FiRefreshCw />
                  </EditarLinkButton>
                </td>
                <td>{tag.nome}</td>
                <td>{tag.slug}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
      <ToastContainer />
    </Container>
  );
};

export default Publicos;
