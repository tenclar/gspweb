import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  ChangeEvent,
} from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import 'react-tabs/style/react-tabs.css';
import { useHistory, useParams } from 'react-router-dom';
import Switch from 'react-switch';
import Input from '../../../../components/admin/InputForm';

import QEditor from '../../../../components/common/QEditor';

import {
  Container,
  Title,
  Panel,
  Button,
  CancelLinkButton,
  BlockButton,
} from './styles';
import { useToast } from '../../../../hooks/Toast';

import api from '../../../../services/api';

import getValidationErrors from '../../../../utils/getValidationErrors';

interface ParamTypes {
  id: string;
}

interface InformacaoFormData {
  id: string;
  titulo: string;
  conteudo?: string;
  imagem: string;
  status: boolean;
}

const FormInformacoes: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [informacao, setInformacao] = useState<InformacaoFormData>();
  const [imagemurl, setImagemurl] = useState<String>('');
  const [checked, setChecked] = useState(false);
  const { id = null } = useParams<ParamTypes>();

  async function loadInformacao(idU: string): Promise<void> {
    const response = await api.get(`informacoes/${idU}`);
    setInformacao(response.data.informacao);
    setChecked(response.data.informacao.status);
  }

  useEffect(() => {
    if (id) {
      loadInformacao(id);
    }
  }, [id]);

  // BEGIN from:  https://stackoverflow.com/a/47245396/1063287
  function getBase64(file: Blob): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function load(): void {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });
  }

  const handleChangeFile = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const promise = await getBase64(e.target.files[0]);
        setImagemurl(promise);
      }
    },
    [],
  );

  const handleSubmit = useCallback(
    async (data: InformacaoFormData) => {
      try {
        const schema = Yup.object().shape({
          titulo: Yup.string().required('Título obrigatório'),
          conteudo: Yup.string().required('Conteúdo obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        if (id) {
          await api.put(`/informacoes/${id}`, {
            titulo: data.titulo,
            conteudo: data.conteudo,
            imagem: imagemurl,
            status: checked,
          });

          addToast({
            type: 'success',
            title: 'Sucesso no Cadastro',
            description: 'Alteração de informações Realizada com Sucesso.',
          });
        } else {
          await api.post('/informacoes', {
            titulo: data.titulo,
            conteudo: data.conteudo,
            imagem: imagemurl,
            status: checked,
          });
          addToast({
            type: 'success',
            title: 'Sucesso No Cadastro',
            description: 'Cadastro de informações realizado com sucesso.',
          });
        }
        history.push('/ad/cadastro/informacoes');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na Autenticação',
          description: 'Ocorreu um erro ao fazer Cadastro de informações.',
        });
      }
    },
    [addToast, history, id, imagemurl, checked],
  );

  const changeStatus = useCallback((event) => {
    setChecked(event);
  }, []);

  return (
    <>
      <Container>
        <Title>
          <h1>Formulário de Informações</h1>
          <hr />
        </Title>
        <Panel>
          <Form
            ref={formRef}
            initialData={{
              titulo: informacao?.titulo,
              conteudo: informacao?.conteudo,
            }}
            onSubmit={handleSubmit}
          >
            {/* JSON.stringify(aviso) */}

            <label htmlFor="titulo">
              Título
              <Input name="titulo" id="titulo" placeholder="Titulo do aviso" />
            </label>

            <label style={{ fontWeight: 'bold' }} htmlFor="informacao">
              Conteúdo do aviso
            </label>
            <Input type="text" name="conteudo" />
            <QEditor />

            <label style={{ fontWeight: 'bold' }} htmlFor="Etapas">
              Status do aviso
            </label>

            <Switch onChange={changeStatus} checked={checked} />
            <br />
            <br />
            <label style={{ fontWeight: 'bold' }} htmlFor="Etapas">
              Inserir imagem no aviso
            </label>

            <input type="file" id="imagem" onChange={handleChangeFile} />
            <br />

            <hr />
            <BlockButton>
              <Button type="submit">Salvar </Button>
              <CancelLinkButton to="/ad/cadastro/informacoes">
                Cancelar
              </CancelLinkButton>
            </BlockButton>
          </Form>
        </Panel>
      </Container>
    </>
  );
};

export default FormInformacoes;
