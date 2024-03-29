import Switch from 'react-switch';
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

interface CategoriaFormData {
  titulo: string;
  categoria_id?: string;
  status: boolean;
}

interface Categoria {
  id?: string | null | '' | undefined;
  categoria_id?: string | null | '' | undefined;
  slug?: string;
  titulo: string;
  status?: boolean;
}

const RAIZ = {
  id: null,
  titulo: 'RAIZ',
};
const FormCategorias: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [categoria, setCategoria] = useState<Categoria>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const { id } = useParams<ParamTypes>();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function loadCategoria(idU: string): Promise<void> {
      try {
        const response = await api.get(`categorias/${idU}`);
        setCategoria(response.data);

        if (response.data.categoria) {
          formRef.current?.setFieldValue('categoria_id', {
            id: response.data.categoria.id,
            titulo: response.data.categoria.titulo,
          });
        } else {
          formRef.current?.setData({
            categoria_id: { id: null, titulo: 'RAIZ' },
          });
        }

        setChecked(response.data.status);
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro na Listagem',
          description: `Ocorreu um erro ao listar Categorias. ${error}`,
        });
      }
    }
    if (id) {
      loadCategoria(id);
    }
  }, [id, addToast]);

  useEffect(() => {
    async function loadCategorias(): Promise<void> {
      try {
        const response = await api.get('/categorias/recursive');
        setCategorias([RAIZ, ...response.data.categorias]);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na Listagem',
          description: 'Ocorreu um erro ao listar Categorias.',
        });
      }
    }
    loadCategorias();
  }, [addToast]);

  const handleSubmit = useCallback(
    async (data: CategoriaFormData) => {
      try {
        const schema = Yup.object().shape({
          titulo: Yup.string().required('Título obrigatório'),
          categoria_id: Yup.string().nullable(),
        });

        await schema.validate(data, { abortEarly: false });

        if (id) {
          await api.put(`/categorias/${id}`, {
            titulo: data.titulo,
            categoria_id: data.categoria_id,
            status: checked,
          });

          addToast({
            type: 'success',
            title: 'Sucesso no Cadastro',
            description: 'Alteração Realizada com Sucesso. ',
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
          description: 'Ocorreu um erro ao fazer o cadastro de Categorias',
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
            isSearchable
            isClearable
          />

          <Input name="titulo" type="text" placeholder="Título" />
          <br />
          <hr />
          <div>
            <Button type="submit">Salvar </Button>
            <LinkButton to="/ad/cadastro/categorias">Cancelar</LinkButton>
            <div style={{ marginLeft: '2vh', marginTop: '0.6vh' }}>
              <Switch onChange={changeStatus} checked={checked} />
            </div>
          </div>
        </Form>
      </Panel>
    </Container>
  );
};

export default FormCategorias;
