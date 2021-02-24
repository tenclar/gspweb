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
import { Categoria } from '../../../Guide/Search/styles';

interface ParamTypes {
  id: string;
}

interface CategoriaFormData {
  titulo: string;
  categoria_id?: string;
}

interface Categoria {
  id?: string | null | '' | undefined;
  categoria_id?: string | null | '' | undefined;
  slug?: string;
  titulo: string;
}

const FormCategorias: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [categoria, setCategoria] = useState<Categoria>();
  const [cateselected, setCatselected] = useState<Categoria>({
    id: undefined,
    titulo: 'Raiz',
    slug: 'raiz',
    categoria_id: undefined,
  });
  const [categorias, setCategorias] = useState<Categoria[]>([
    {
      id: undefined,
      titulo: 'Raiz',
      slug: 'raiz',
      categoria_id: null,
    },
  ]);

  const { id } = useParams<ParamTypes>();

  async function loadCategoria(idU: string): Promise<void> {
    const response = await api.get(`categorias/${idU}`);
    setCategoria(response.data);

    //    const cat = await api.get(`categorias/${response.data.categoria_id}`);
    if (response.data.categoria) {
      setCatselected(response.data.categoria);
    }
  }
  useEffect(() => {
    if (id) {
      loadCategoria(id);
    }
  }, [id]);

  useEffect(() => {
    async function loadCategorias(): Promise<void> {
      try {
        const response = await api.get('/categorias');
        setCategorias([
          {
            id: undefined,
            titulo: 'Raiz',
            slug: 'raiz',
            categoria_id: null,
          },
          ...response.data.categorias,
        ]);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na Listagem',
          description: 'Ocorreu um erro ao listar Categorias.',
        });
      }
    }
    loadCategorias();
  }, [addToast, categorias]);

  const handleSubmit = useCallback(
    async (data: CategoriaFormData) => {
      try {
        const schema = Yup.object().shape({
          titulo: Yup.string().required('Título obrigatório'),
        });
        //   categoria_id: Yup.string().required('Selecionar Categoria'),
        await schema.validate(data, { abortEarly: false });
        if (id) {
          await api.put(`/categorias/${id}`, data);
          addToast({
            type: 'success',
            title: 'Sucesso no Cadastro',
            description: 'Alteração Realizada com Sucesso.',
          });
        } else {
          await api.post('/categorias', data);
          addToast({
            type: 'success',
            title: 'Sucesso No Cadastro',
            description: 'Cadastro Realizado com Sucesso.',
          });
        }

        history.push('/ad/cadastro/categorias');
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
        <h1>Formulário Categorias</h1>
        <hr />
      </Title>
      <Panel>
        <Form
          ref={formRef}
          initialData={{
            categoria_id: categoria?.categoria_id,
            titulo: categoria?.titulo,
          }}
          onSubmit={handleSubmit}
        >
          <Select
            name="categoria_id"
            options={categorias}
            getOptionValue={(option) => option.id}
            getOptionLabel={(option) => option.titulo}
            value={cateselected}
            isSearchable
            isClearable
          />

          <Input name="titulo" type="text" placeholder="Título" />
          <hr />
          <div>
            <Button type="submit">Salvar </Button>
            <LinkButton to="/ad/cadastro/categorias">Cancelar</LinkButton>
          </div>
        </Form>
      </Panel>
    </Container>
  );
};

export default FormCategorias;
