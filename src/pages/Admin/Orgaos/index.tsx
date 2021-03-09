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

interface Orgaos {
  id: string;
  slug: string;
  nome: string;
  status: boolean;
}
interface OrgaosPesquisaData {
  nome: string;
}
const Orgaos: React.FC = () => {
  const [orgaos, setOrgaos] = useState<Orgaos[]>([]);
  const [args, setArgs] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadOrgaos(): Promise<void> {
      try {
        setLoading(true);
        const response = await api.get('orgaos', {
          params: { nome: args },
        });

        setOrgaos(response.data.orgaos);
      } catch (err) {
        toast.error('Erro na lista');
      } finally {
        setLoading(false);
      }
    }

    loadOrgaos();
  }, [args]);

  const handleSubmit = useCallback((data: OrgaosPesquisaData) => {
    setArgs(data.nome);
  }, []);

  return (
    <Container>
      <Title>
        <h1> Orgãos</h1>
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
                <LinkButton to="/ad/cadastro/orgaos/novo">
                  <FiPlus />
                </LinkButton>
              </th>
              <th>Nome do Orgão</th>
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
            {orgaos.length === 0 && (
              <tr>
                <td colSpan={3}> Nenhum Cadastro efetuado </td>
              </tr>
            )}

            {orgaos.map((orgao) => (
              <tr key={orgao.id}>
                <td style={{ textAlign: 'center' }}>
                  <EditarLinkButton
                    to={`/ad/cadastro/orgaos/editar/${orgao.id}`}
                  >
                    <FiRefreshCw />
                  </EditarLinkButton>
                </td>
                <td>{orgao.nome}</td>
                <td>{orgao.slug}</td>
                <td>{String(orgao.status)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
      <ToastContainer />
    </Container>
  );
};

export default Orgaos;
