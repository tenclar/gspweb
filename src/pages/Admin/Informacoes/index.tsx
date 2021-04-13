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

interface Informacao {
  id: string;
  titulo: string;
  conteudo: string;
  imagem: string;
}
interface InformacaoPesquisaData {
  titulo: string;
}
const Informacoes: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [informacoes, setInformacoes] = useState<Informacao[]>([]);
  const [args, setArgs] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadInformacoes(): Promise<void> {
      try {
        setLoading(true);
        const response = await api.get('informacoes', {
          params: { titulo: args },
        });

        setInformacoes(response.data.informacoes);
      } catch (err) {
        toast.error('Erro na lista');
      } finally {
        setLoading(false);
      }
    }

    loadInformacoes();
  }, [args]);

  const handleSubmit = useCallback(async (data: InformacaoPesquisaData) => {
    try {
      const schema = Yup.object().shape({
        titulo: Yup.string().required('Campo obrigatório para pesquisar'),
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
        <h1>Gerenciar Informações</h1>
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
                <LinkButton to="/ad/cadastro/informacoes/novo">
                  <FiPlus />
                </LinkButton>
              </th>
              {/* <th style={{ width: '60px' }}>#</th> */}

              <th>Título</th>
              <th>Conteúdo</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={5}>
                  Carregando todos as informações disponíveis...{' '}
                  <img src={loadingGif} alt="loading" />
                </td>
              </tr>
            )}
            {informacoes.length === 0 && (
              <tr>
                <td colSpan={3}>Nenhuma informação efetuada</td>
              </tr>
            )}
            {informacoes.map((informacao) => (
              <tr key={informacao.id}>
                <td style={{ textAlign: 'center' }}>
                  <EditarLinkButton
                    to={`/ad/cadastro/informacoes/editar/${informacao.id}`}
                  >
                    <FiRefreshCw />
                  </EditarLinkButton>
                </td>
                <td style={{ textAlign: 'center' }}>{informacao.titulo}</td>
                <td style={{ textAlign: 'left' }}>
                  {!!informacao.imagem && (
                    <img
                      src={informacao.imagem}
                      alt="img"
                      width="50px"
                      height="50px"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>

      <ToastContainer />
    </Container>
  );
};

export default Informacoes;
