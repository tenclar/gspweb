import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';
import { useToast } from '../../../../hooks/Toast';

import api from '../../../../services/api';
import getValidationErrors from '../../../../utils/getValidationErrors';
import Select from '../../../../components/admin/Select';
import Input from '../../../../components/admin/InputForm';
import Button from '../../../../components/admin/Button';
import { Container, Title, Panel, LinkButton } from './styles';

interface ParamTypes {
  id: string;
}

interface LocaLFormData {
  id: null;
  nome: string;
}
interface LocaisFormData {
  nome: string;
  cidade_id: string;
  orgao_id: string;
}

const FormLocais: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [local, setLocal] = useState<LocaisFormData>();

  const { id } = useParams<ParamTypes>();

  async function loadLocal(idU: string): Promise<void> {
    const response = await api.get(`/locais/${idU}`);
    setLocal(response.data.local);
  }
  useEffect(() => {
    if (id) {
      loadLocal(id);
    }
  }, [id]);
  const handleSubmit = useCallback(
    async (data: LocaisFormData) => {
      try {
        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });
        if (id) {
          await api.put(`/locais/${id}`, data);
          addToast({
            type: 'success',
            title: 'Sucesso na Atualização',
            description: 'Alteração Realizada com Sucesso.',
          });
        } else {
          await api.post('/locais', data);
          addToast({
            type: 'success',
            title: 'Sucesso No Cadastro',
            description: 'Cadastro Realizado com Sucesso.',
          });
        }

        history.push('/ad/cadastro/locais');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na Atualização',
          description: 'Ocorreu um erro ao fazer Cadastro de Locais.',
        });
      }
    },
    [addToast, history, id],
  );
  return (
    <Container>
      <Title>
        <h1>
          Formulário de {id ? 'Cadastro' : 'Alteração'} Locais de Atendimento
        </h1>
        <hr />
      </Title>
      <Panel>
        <Form
          ref={formRef}
          initialData={{
            nome: local?.nome,
            cidade_id: local?.cidade_id,
            orgao_id: local?.orgao_id,
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="Cidade">
            Cidade
            <Select
              name="cidade_id"
              getOptionValue={(option) => option.id}
              getOptionLabel={(option) => option.nome}
              isSearchable
              isClearable
            />
          </label>
          <label htmlFor="Orgao">
            Órgão
            <Select
              name="orgao_id"
              getOptionValue={(option) => option.id}
              getOptionLabel={(option) => option.nome}
              isSearchable
              isClearable
            />
          </label>
          <label htmlFor="Locais">
            <Input name="nome" type="text" placeholder="Nome" />
          </label>
          <hr />
          <div>
            <Button type="submit">Salvar </Button>
            <LinkButton to="/ad/cadastro/locais">Cancelar</LinkButton>
          </div>
        </Form>
      </Panel>
    </Container>
  );
};

export default FormLocais;
