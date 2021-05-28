import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';
import Switch from 'react-switch';
import { useToast } from '../../../../hooks/Toast';
import Select from '../../../../components/admin/Select';
import api from '../../../../services/api';

import getValidationErrors from '../../../../utils/getValidationErrors';
// import RadioInput from '../../../../components/admin/RadioInput';
import Input from '../../../../components/admin/InputForm';
import Button from '../../../../components/admin/Button';
import { Container, Title, Panel, LinkButton } from './styles';

interface ParamTypes {
  id: string;
}
interface RadioOption {
  id: string;
  value: string;
  label: string;
}

interface OrgaosFormData {
  nome: string;
  superiores_id: string;
  status: boolean;
}
interface Superiores {
  id: string;
  slug: string;
  nome: string;
  status: boolean;
}

const FormOrgaos: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  /*  const radioOptions: RadioOption[] = [
    { id: 'true', value: 'true', label: 'Ativo' },
    { id: 'false', value: 'false', label: 'Inaivo' },
  ]; */
  const [orgao, setOrgao] = useState<OrgaosFormData>();
  const [checked, setChecked] = useState(false);
  const [superiores, setSuperiores] = useState<Superiores[]>();

  const { id } = useParams<ParamTypes>();
  useEffect(() => {
    async function loadOrgao(idU: string): Promise<void> {
      const response = await api.get(`orgaos/${idU}`);
      setOrgao(response.data.orgao);
      setChecked(response.data.orgao.status);
      if (response.data.orgao.superior) {
        const c = response.data.orgao.superior;

        formRef.current?.setData({
          superiores_id: { id: c.id, nome: c.nome },
        });
      }
    }
    if (id) {
      loadOrgao(id);
    }
  }, [id]);

  useEffect(() => {
    async function loadCategorias(): Promise<void> {
      try {
        const response = await api.get('/superiores');
        setSuperiores(response.data.superiores);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na Listagem',
          description: 'Ocorreu um erro ao listar Instituições Superiores.',
        });
      }
    }
    loadCategorias();
  }, [addToast]);
  const handleSubmit = useCallback(
    async (data: OrgaosFormData) => {
      try {
        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
          superiores_id: Yup.string().required(
            'Instituição Superior Não selecionado',
          ),
        });

        await schema.validate(data, { abortEarly: false });

        if (id) {
          await api.put(`/orgaos/${id}`, {
            nome: data.nome,
            superiores_id: data.superiores_id,
            status: checked,
          });
          addToast({
            type: 'success',
            title: 'Sucesso na Atualização',
            description: 'Alteração Realizada com Sucesso.',
          });
        } else {
          await api.post('/orgaos', {
            nome: data.nome,
            superiores_id: data.superiores_id,
            status: checked,
          });
          addToast({
            type: 'success',
            title: 'Sucesso No Cadastro',
            description: 'Cadastro Realizado com Sucesso.',
          });
        }

        history.push('/ad/cadastro/orgaos');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na Atualização',
          description: 'Ocorreu um erro ao fazer Cadastro de Orgaos.',
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
        <h1>Formulário de {id ? 'Alteração' : 'Cadatro'} de Orgaos</h1>
        <hr />
      </Title>
      <Panel>
        <Form
          ref={formRef}
          initialData={{
            nome: orgao?.nome,
            superiores_id: orgao?.superiores_id,
          }}
          onSubmit={handleSubmit}
        >
          <Select
            name="superiores_id"
            options={superiores}
            getOptionValue={(option) => option.id}
            getOptionLabel={(option) => option.nome}
            isSearchable
            isClearable
          />
          <Input name="nome" type="text" placeholder="Nome" />

          <Switch onChange={changeStatus} checked={checked} />
          <hr />
          <div>
            <Button type="submit">Salvar </Button>
            <LinkButton to="/ad/cadastro/orgaos">Cancelar</LinkButton>
          </div>
        </Form>
      </Panel>
    </Container>
  );
};

export default FormOrgaos;
