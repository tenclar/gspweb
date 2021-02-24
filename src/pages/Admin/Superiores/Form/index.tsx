import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';
import { useToast } from '../../../../hooks/Toast';
import api from '../../../../services/api';

import getValidationErrors from '../../../../utils/getValidationErrors';

import Input from '../../../../components/admin/InputForm';
import Select from '../../../../components/admin/Select';
import Button from '../../../../components/admin/Button';
import { Container, Title, Panel, LinkButton } from './styles';

interface ParamTypes {
  id: string;
}

interface SuperiorFormData {
  titulo: string;
  superior_id: string;
}

interface Superior {
  id: string;
  slug: string;
  titulo: string;
}

const FormSuperiores: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [superior, setSuperior] = useState<Superior>();

  const { id } = useParams<ParamTypes>();

  async function loadSuperior(idU: string): Promise<void> {
    const response = await api.get(`superiores/${idU}`);
    setSuperior(response.data);
  }
  useEffect(() => {
    if (id) {
      loadSuperior(id);
    }
  }, [id]);
  const handleSubmit = useCallback(
    async (data: SuperiorFormData) => {
      try {
        const schema = Yup.object().shape({
          nome: Yup.string().required('Título obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });
        if (id) {
          await api.put('/superiores', data);
          addToast({
            type: 'success',
            title: 'Sucesso no Cadastro',
            description: 'Alteração Realizada com Sucesso.',
          });
        } else {
          await api.post('/superiores', data);
          addToast({
            type: 'success',
            title: 'Sucesso No Cadastro',
            description: 'Cadastro Realizado com Sucesso.',
          });
        }

        history.push('/ad/cadastro/superiores');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na Autenticação',
          description: 'Ocorreu um erro ao fazer Cadastro de Superiores.',
        });
      }
    },
    [addToast, history, id],
  );
  return (
    <Container>
      <Title>
        <h1>Formulário Superiores</h1>
        <hr />
      </Title>
      <Panel>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="titulo" type="text" placeholder="Título" />
          <hr />
          <div>
            <Button type="submit">Salvar </Button>
            <LinkButton to="/ad/cadastro/superiores">Cancelar</LinkButton>
          </div>
        </Form>
      </Panel>
    </Container>
  );
};

export default FormSuperiores;