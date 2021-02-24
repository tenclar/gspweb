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

interface CidadesFormData {
  nome: string;
  cidade_id: string;
}

interface Cidades {
  id: string;
  slug: string;
  nome: string;
}

const FormCidades: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [cidade, setCidade] = useState<Cidades>();
  const [cidaSelected, setCidaSelected] = useState(null);
  const [categorias, setCidades] = useState<Cidades[]>([]);

  const { id } = useParams<ParamTypes>();

  async function loadCidade(idU: string): Promise<void> {
    const response = await api.get(`cidades/${idU}`);
    setCidade(response.data);
    setCidaSelected(response.data.categoriasup);
  }
  useEffect(() => {
    if (id) {
      loadCidade(id);
    }
  }, [id]);

  useEffect(() => {
    async function loadCidades(): Promise<void> {
      try {
        const response = await api.get('/cidades');
        setCidades(response.data.cidades);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na Listagem',
          description: 'Ocorreu um erro ao listar Categorias.',
        });
      }
    }
    loadCidades();
  }, [addToast]);

  const handleSubmit = useCallback(
    async (data: CidadesFormData) => {
      try {
        const schema = Yup.object().shape({
          titulo: Yup.string().required('Título obrigatório'),
          categoria_id: Yup.string().required('Selecionar Cidades'),
        });

        await schema.validate(data, { abortEarly: false });
        if (id) {
          await api.put('/cidades', data);
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

        history.push('/admin/cadastro/cidades');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na Autenticação',
          description: 'Ocorreu um erro ao fazer Cadastro de Categorias.',
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
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Select
            name="categoria_id"
            options={categorias}
            getOptionValue={(option) => option.id}
            getOptionLabel={(option) => option.titulo}
            isSearchable
            isClearable
          />

          <Input name="titulo" type="text" placeholder="Cidade" />
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
