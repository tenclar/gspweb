import React, { useCallback, useEffect, useState, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiPlus, FiRefreshCw, FiSearch } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import Input from '../../../components/admin/InputSearch';
import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';
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

interface Servico {
  id: string;
  slug: string;
  titulo: string;
  servico_id: string;
}
interface ServicoPesquisaData {
  titulo: string;
}
const Servicos: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [args, setArgs] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadServicos(): Promise<void> {
      try {
        setLoading(true);
        const response = await api.get('servicos', {
          params: { titulo: args },
        });

        setServicos(response.data.servicos);
      } catch (err) {
        toast.error('Erro na lista');
      } finally {
        setLoading(false);
      }
    }

    loadServicos();
  }, [args]);

  const handleSubmit = useCallback(async (data: ServicoPesquisaData) => {
    try {
      const schema = Yup.object().shape({
        titulo: Yup.string().required('campo  obrigatório para pesquisa'),
      });

      await schema.validate(data, { abortEarly: false });
      setArgs(data.titulo);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Title>
        <h1>Serviços</h1>
        <hr />
      </Title>

      <Panel>
        <SearchTableContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="titulo" type="text" placeholder="Localizar" />
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
                <LinkButton to="/ad/cadastro/servicos/novo">
                  <FiPlus />
                </LinkButton>
              </th>
              <th style={{ width: '300px' }}>#</th>

              <th>Servico</th>
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
            {servicos.length === 0 && (
              <tr>
                <td colSpan={3}> Nenhum Cadastro efetuado </td>
              </tr>
            )}
            {servicos.map((servico) => (
              <tr key={servico.id}>
                <td style={{ textAlign: 'center' }}>
                  <EditarLinkButton
                    to={`/ad/cadastro/servicos/editar/${servico.id}`}
                  >
                    <FiRefreshCw />
                  </EditarLinkButton>
                </td>
                <td style={{ textAlign: 'center' }}>{servico.id}</td>

                <td>{servico.titulo}</td>
                <td>{servico.slug}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
      <ToastContainer />
    </Container>
  );
};

export default Servicos;
