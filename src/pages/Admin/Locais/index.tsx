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

interface Locais {
  id: string;
  slug: string;
  nome: string;
}
interface LocaisPesquisaData {
  nome: string;
}
const Locais: React.FC = () => {
  const [locais, setLocais] = useState<Locais[]>([]);
  const [args, setArgs] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadLocais(): Promise<void> {
      try {
        setLoading(true);
        const response = await api.get('locais', {
          params: { nome: args },
        });

        setLocais(response.data.local);
      } catch (err) {
        toast.error('Erro na lista');
      } finally {
        setLoading(false);
      }
    }

    loadLocais();
  }, [args]);

  const handleSubmit = useCallback((data: LocaisPesquisaData) => {
    setArgs(data.nome);
  }, []);

  return (
    <Container>
      <Title>
        <h1> Locais</h1>
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
                <LinkButton to="/ad/cadastro/locais/novo">
                  <FiPlus />
                </LinkButton>
              </th>
              <th>Nome da Tag</th>
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
            {locais.length === 0 && (
              <tr>
                <td colSpan={3}> Nenhum Cadastro efetuado </td>
              </tr>
            )}
            {locais.map((tag) => (
              <tr key={tag.id}>
                <td style={{ textAlign: 'center' }}>
                  <EditarLinkButton to={`/ad/cadastro/locais/editar/${tag.id}`}>
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

export default Locais;
