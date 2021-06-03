import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Switch from 'react-switch';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';
import { useToast } from '../../../../hooks/Toast';

import api from '../../../../services/api';

import getValidationErrors from '../../../../utils/getValidationErrors';

import Input from '../../../../components/admin/InputForm';
import Button from '../../../../components/admin/Button';
import { Container, Title, Panel, LinkButton } from './styles';

interface ParamTypes {
  id: string;
}

interface TagsFormData {
  nome: string;
}

const FormTags: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [checked, setChecked] = useState(false);
  const { addToast } = useToast();
  const history = useHistory();
  const [tags, setTags] = useState<TagsFormData>();

  const { id } = useParams<ParamTypes>();

  async function loadTags(idU: string): Promise<void> {
    const response = await api.get(`/tags/${idU}`);
    setTags(response.data.tags);
    setChecked(response.data.tags.status);
  }
  useEffect(() => {
    if (id) {
      loadTags(id);
    }
  }, [id]);
  const handleSubmit = useCallback(
    async (data: TagsFormData) => {
      try {
        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });
        if (id) {
          await api.put(`/tags/${id}`, { nome: data.nome, status: checked });
          addToast({
            type: 'success',
            title: 'Sucesso na Atualização',
            description: 'Alteração Realizada com Sucesso.',
          });
        } else {
          await api.post('/tags', { nome: data.nome, status: checked });
          addToast({
            type: 'success',
            title: 'Sucesso No Cadastro',
            description: 'Cadastro Realizado com Sucesso.',
          });
        }

        history.push('/ad/cadastro/tags');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na Atualização',
          description: 'Ocorreu um erro ao fazer Cadastro de Tags.',
        });
      }
    },
    [addToast, history, id, checked],
  );

  const changeStatus = useCallback((event) => {
    setChecked(event);
  }, []);
  return (
    <Container>
      <Title>
        <h1>Formulário de Tags</h1>
        <hr />
      </Title>
      <Panel>
        <Form
          ref={formRef}
          initialData={{
            nome: tags?.nome,
          }}
          onSubmit={handleSubmit}
        >
          <Input name="nome" type="text" placeholder="Nome" />
          <Switch onChange={changeStatus} checked={checked} />
          <hr />
          <div>
            <Button type="submit">Salvar </Button>
            <LinkButton to="/ad/cadastro/tags">Cancelar</LinkButton>
          </div>
        </Form>
      </Panel>
    </Container>
  );
};

export default FormTags;
