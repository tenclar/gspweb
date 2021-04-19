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

import QuillEditor from '../../../../components/common/EditorQuill';

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

interface AvisoFormData {
  id: string;
  titulo: string;
  conteudo?: string;
  imagem: string;
  status: boolean;
}

const FormAvisos: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [aviso, setAviso] = useState<AvisoFormData>();
  const [imagemurl, setImagemurl] = useState<String>('');
  const [checked, setChecked] = useState(false);
  const { id = null } = useParams<ParamTypes>();

  async function loadAviso(idU: string): Promise<void> {
    const response = await api.get(`avisos/${idU}`);
    setAviso(response.data.aviso);
    setChecked(response.data.aviso.status);
  }
  useEffect(() => {
    if (id) {
      loadAviso(id);
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
    async (data: AvisoFormData) => {
      try {
        const schema = Yup.object().shape({
          titulo: Yup.string().required('Título obrigatório'),
          conteudo: Yup.string().required('Título obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        if (id) {
          await api.put(`/avisos/${id}`, {
            titulo: data.titulo,
            conteudo: data.conteudo,
            imagem: imagemurl,
            status: checked,
          });

          addToast({
            type: 'success',
            title: 'Sucesso no Cadastro',
            description: 'Alteração de aviso Realizada com Sucesso.',
          });
        } else {
          await api.post('/avisos', {
            titulo: data.titulo,
            conteudo: data.conteudo,
            imagem: imagemurl,
            status: checked,
          });
          addToast({
            type: 'success',
            title: 'Sucesso No Cadastro',
            description: 'Cadastro de Aviso realizado com sucesso.',
          });
        }
        history.push('/ad/cadastro/avisos');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na Autenticação',
          description: 'Ocorreu um erro ao fazer Cadastro de Avisos.',
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
          <h1>Formulário Aviso</h1>
          <hr />
        </Title>
        <Panel>
          <Form
            ref={formRef}
            initialData={{
              titulo: aviso?.titulo,
              conteudo: aviso?.conteudo,
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

            <QuillEditor name="conteudo" />

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
              <CancelLinkButton to="/ad/cadastro/avisos">
                Cancelar
              </CancelLinkButton>
            </BlockButton>
          </Form>
        </Panel>
      </Container>
    </>
  );
};

export default FormAvisos;
