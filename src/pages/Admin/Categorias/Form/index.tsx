import React, { useCallback, useRef } from 'react';
import { FiUser } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import getValidationErrors from '../../../../utils/getValidationErrors';

import Input from '../../../../components/admin/InputForm';

import { Container, Title, Panel, Button, LinkButton } from './styles';

interface CategoriaFormData {
  titulo: string;
  slug: string;
  categoria_id: string;
}

const FormCategorias: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
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
          <label htmlFor="categoria">
            Categoria
            <select
              id="categoria"
              name="categoria"
              placeholder="Selecione Categoria"
            >
              <option>Raíz</option>
              <option value="categoria1">Categoria 1</option>
              <option value="categoria1">
                &nbsp;&nbsp;&nbsp;Categoria 1.1
              </option>
              <option value="categoria1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categoria 1.1.1
              </option>
              <option value="categoria1">Categoria 2</option>
            </select>
          </label>
          <label htmlFor="titulo">
            Título
            <Input
              icon={FiUser}
              name="titulo"
              id="titulo"
              type="text"
              placeholder="Título"
            />
          </label>
          <hr />
          <div>
            <Button>Salvar </Button>
            <LinkButton to="/admin/cadastro/categorias">Cancelar</LinkButton>
          </div>
        </Form>
      </Panel>
    </Container>
  );
};

export default FormCategorias;
