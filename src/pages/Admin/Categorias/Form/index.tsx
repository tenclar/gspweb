import React, { useEffect, useRef, useState, useCallback } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import api from '../../../../services/api';

import getValidationErrors from '../../../../utils/getValidationErrors';

import Input from '../../../../components/admin/InputForm';
import Select from '../../../../components/admin/Select';

import { Container, Title, Panel, Button, LinkButton } from './styles';

interface CategoriaFormData {
  titulo: string;
  slug: string;
  categoria_id: string;
}

interface Categoria {
  id: string;
  slug: string;
  titulo: string;
}

const FormCategorias: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function loadCategorias(): Promise<void> {
    try {
      const response = await api.get('/categorias');
      setCategorias(response.data.categorias);
    } catch (err) {
      toast.error('Erro na lista');
    }
  }

  useEffect(() => {
    loadCategorias();
  }, []);

  const handleSubmit = useCallback(
    async (data: CategoriaFormData) => {
      try {
        const schema = Yup.object().shape({
          titulo: Yup.string().required('Título obrigatório'),
          categoria_id: Yup.string(),
          slug: Yup.string(),
        });

        await schema.validate(data, { abortEarly: false });

        toast.success('Cadastro realizado');
        history.push('/admin/cadatro/categorias');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        toast.error('Ocorreu um erro ao fazer cadastro, tente novamente');
      }
    },
    [history],
  );
  return (
    <Container>
      <Title>
        <h1>Formulário Categorias</h1>
        <hr />
      </Title>
      <Panel>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="categoria_id">
            Categoria
            <Select
              id="categoria_id"
              name="categoria_id"
              options={categorias}
              getOptionValue={(option) => option.id}
              getOptionLabel={(option) => option.titulo}
              isSearchable
              isClearable
            />
          </label>
          <label htmlFor="titulo">
            <Input name="titulo" id="titulo" type="text" placeholder="Título" />
          </label>
          <hr />
          <div>
            <Button>Salvar </Button>
            <LinkButton to="/admin/cadastro/categorias">Cancelar</LinkButton>
          </div>
        </Form>
      </Panel>
      <ToastContainer />
    </Container>
  );
};

export default FormCategorias;
