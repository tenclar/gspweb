import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiUser } from 'react-icons/fi';
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
          <label>
            Categoria
            <Select
              name="categoria_id"
              options={categorias}
              getOptionValue={(option) => option.id}
              getOptionLabel={(option) => option.titulo}
              isSearchable
              isClearable
            />
          </label>

          <Input
            icon={FiUser}
            name="titulo"
            id="titulo"
            type="text"
            placeholder="Título"
          />

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
