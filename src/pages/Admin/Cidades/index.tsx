import React, { useCallback, useEffect, useState } from 'react';
import { FiEye, FiPlus, FiRefreshCw, FiSearch } from 'react-icons/fi';
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
  StatusLinkButton,
  PanelAcoes,
} from './styles';

interface Cidade {
  id: string;
  slug: string;
  nome: string;
  // status: boolean;
}

interface CidadePesquisaData {
  nome: string;
}
const Cidades: React.FC = () => {
  const [cidades, setCidades] = useState<Cidade[]>([]);
  const [args, setArgs] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCidades(): Promise<void> {
      try {
        setLoading(true);
        const response = await api.get('cidades', {
          params: { nome: args },
        });

        setCidades(response.data.cidades);
      } catch (err) {
        toast.error('Erro na lista');
      } finally {
        setLoading(false);
      }
    }

    loadCidades();
  }, [args]);

  const handleSubmit = useCallback((data: CidadePesquisaData) => {
    setArgs(data.nome);
  }, []);

  return (
    <Container>
      <Title>
        <h1>Cidades</h1>
        <hr />
      </Title>
      <Panel>
        <SearchTableContainer>
          <Form onSubmit={handleSubmit}>
            <Input name="nome" type="text" placeholder="Buscar cidade..." />
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
              <th style={{ width: '65px' }}>
                <LinkButton to="/ad/cadastro/cidades/novo">
                  <FiPlus />
                </LinkButton>
              </th>

              <th>Nome da Cidade</th>
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
                <td>
                  <PanelAcoes>
                    <EditarLinkButton
                      to={`/ad/cadastro/cidades/editar/${cidade.id}`}
                    >
                      <FiRefreshCw />
                    </EditarLinkButton>

                    <StatusLinkButton
                      to={`/ad/cadastro/cidades/status/${cidade.id}`}
                    >
                      <FiEye />
                    </StatusLinkButton>
                  </PanelAcoes>
                </td>
                <td style={{ textAlign: 'center' }}>{cidade.nome}</td>
                <td style={{ textAlign: 'center' }}>{cidade.slug}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
      <ToastContainer />
    </Container>
  );
};
export default Cidades;
