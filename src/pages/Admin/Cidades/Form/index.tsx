import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
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

interface CidadeFormData {
  nome: string;
  id: string;
}

const FormCidades: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [cidade, setCidade] = useState<CidadeFormData>();

  const { id } = useParams<ParamTypes>();

  async function loadCidade(idU: string): Promise<void> {
    const response = await api.get(`cidades/${idU}`);
    setCidade(response.data.cidade);
  }
  useEffect(() => {
    if (id) {
      loadCidade(id);
    }
  }, [id]);
  const handleSubmit = useCallback(
    async (data: CidadeFormData) => {
      try {
        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });
        if (id) {
          await api.put(`/cidades/${id}`, data);
          addToast({
            type: 'success',
            title: 'Sucesso no Cadastro',
            description: 'Alteração Realizada com Sucesso.',
          });
        } else {
          await api.post('/cidades', data);
          addToast({
            type: 'success',
            title: 'Sucesso No Cadastro',
            description: 'Cadastro Realizado com Sucesso.',
          });
        }

        history.push('/ad/cadastro/cidades');
      } catch (err) {
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
      }
    },
    [addToast, history, id],
  );
  return (
    <Container>
      <Title>
        <h1>Formulário Cidades</h1>
        <hr />
      </Title>
      <Panel>
        <Form
          ref={formRef}
          initialData={{
            nome: cidade?.nome,
            id: cidade?.id,
          }}
          onSubmit={handleSubmit}
        >
          <Input name="nome" type="text" placeholder="Nome" />

          <hr />
          <div>
            <Button type="submit">Salvar </Button>
            <LinkButton to="/ad/cadastro/cidades">Cancelar</LinkButton>
          </div>
        </Form>
      </Panel>
    </Container>
  );
};

export default FormCidades;
