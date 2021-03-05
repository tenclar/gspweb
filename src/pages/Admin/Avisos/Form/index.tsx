import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FiPlus, FiRefreshCw } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import ButtonAlterar from '../../../../components/admin/ButtonAlterar';
import QEditor from '../../../../components/common/QEditor';
import Modal from '../../../../components/common/Modal';
import {
  Container,
  Title,
  Panel,
  Button,
  CancelButton,
  AddButton,
  AddLinkButton,
  CancelLinkButton,
  Table,
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
  conteudo: string;
  imagem: string;
  status: boolean;
}

const FormAvisos: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [aviso, setAviso] = useState<AvisoFormData>();

  const { id } = useParams<ParamTypes>();

  async function loadAviso(idU: string): Promise<void> {
    const response = await api.get(`avisos/${idU}`);
    setAviso(response.data.aviso);
  }
  useEffect(() => {
    if (id) {
      loadAviso(id);
    }
  }, [id]);
  const handleSubmit = useCallback(
    async (data: AvisoFormData) => {
      try {
        const schema = Yup.object().shape({
          titulo: Yup.string().required('Título obrigatório'),
          conteudo: Yup.string(),
          imagem: Yup.string(),
          status: Yup.string().required('Título obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });
        /*
        if (id) {
          await api.put(`/avisos/${id}`, data);
          addToast({
            type: 'success',
            title: 'Sucesso no Cadastro',
            description: 'Alteração Realizada com Sucesso.',
          });
        } else {
          await api.post('/avisos', {
            titulo: data.titulo,
            conteudo: data.conteudo,
            imagem: data.imagem,
            status: true,
          });
          addToast({
            type: 'success',
            title: 'Sucesso No Cadastro',
            description: 'Cadastro Realizado com Sucesso.',
          });
        }
        */
        console.log('text_');
        history.push('/ad/cadastro/avisos');
      } catch (err) {
        /*
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;

        }
        addToast({
          type: 'error',
          title: 'Erro na Autenticação',
          description: 'Ocorreu um erro ao fazer Cadastro de Cidades.',
        });
        */
      }
    },
    [addToast, history, id],
  );
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
              imagem: aviso?.imagem,
              status: aviso?.status,
            }}
            onSubmit={handleSubmit}
          >
            <Tabs>
              <TabList>
                <Tab>Título</Tab>
                <Tab>Conteúdo </Tab>
                <Tab>Imagem </Tab>
              </TabList>
              <TabPanel>
                <label htmlFor="title">
                  Título
                  <input id="title" type="text" placeholder="Titulo do aviso" />
                </label>
              </TabPanel>
              <TabPanel>
                <label style={{ fontWeight: 'bold' }} htmlFor="informacao">
                  Conteúdo do aviso
                </label>
                <QEditor />
              </TabPanel>

              <TabPanel>
                <label style={{ fontWeight: 'bold' }} htmlFor="Etapas">
                  Inserir imagem no aviso
                </label>

                <input type="text" id="my_pdf_file" />
                <br />
                <br />
                <button type="submit">click me</button>
              </TabPanel>
            </Tabs>

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
