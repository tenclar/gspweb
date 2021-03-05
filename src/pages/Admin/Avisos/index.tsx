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

interface Aviso {
  id: string;
  titulo: string;
  conteudo: string;
  slug: string;
}
interface AvisoPesquisaData {
  titulo: string;
}
const Avisos: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [args, setArgs] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadAvisos(): Promise<void> {
      try {
        setLoading(true);
        const response = await api.get('avisos', {
          params: { titulo: args },
        });

        setAvisos(response.data.avisos);
      } catch (err) {
        toast.error('Erro na lista');
      } finally {
        setLoading(false);
      }
    }

    loadAvisos();
  }, [args]);

  const handleSubmit = useCallback(async (data: AvisoPesquisaData) => {
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
        <h1>Gerenciar avisos</h1>
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
                <LinkButton to="/ad/cadastro/avisos/novo">
                  <FiPlus />
                </LinkButton>
              </th>
              {/* <th style={{ width: '60px' }}>#</th> */}

              <th>Título</th>
              <th>Conteúdo</th>
              <th>Slug</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={5}>
                  Carregando todos os avisos disponíveis...{' '}
                  <img src={loadingGif} alt="loading" />
                </td>
              </tr>
            )}
            {avisos.length === 0 && (
              <tr>
                <td colSpan={3}> Nenhum Aviso efetuado </td>
              </tr>
            )}
            {avisos.map((aviso) => (
              <tr key={aviso.id}>
                <td style={{ textAlign: 'center' }}>
                  <EditarLinkButton
                    to={`/ad/cadastro/avisos/editar/${aviso.id}`}
                  >
                    <FiRefreshCw />
                  </EditarLinkButton>
                </td>
                <td style={{ textAlign: 'center' }}>{aviso.titulo}</td>

                <td style={{ textAlign: 'center' }}>{aviso.conteudo}</td>
                <td style={{ textAlign: 'center' }}>{aviso.slug}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
      <ToastContainer />
    </Container>
  );
};

export default Avisos;
