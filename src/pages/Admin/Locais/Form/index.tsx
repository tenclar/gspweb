import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';
import Switch from 'react-switch';
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
interface ICidade {
  id: null;
  nome: string;
}
interface IOrgao {
  id: null;
  nome: string;
}
interface LocaisFormData {
  nome: string;
  cidade_id: string;
  cidade?: ICidade;
  orgao: IOrgao;
  orgao_id: string;
  conteudo: string;
  status: boolean;
}

const FormLocais: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [checked, setChecked] = useState(false);
  const { addToast } = useToast();
  const history = useHistory();
  const [local, setLocal] = useState<LocaisFormData>();
  const [cidades, setCidades] = useState<ICidade[]>([]);
  const [orgaos, setOrgaos] = useState<IOrgao[]>([]);

  const { id } = useParams<ParamTypes>();
  useEffect(() => {
    async function showLocal(idU: string): Promise<void> {
      const response = await api.get(`/locais/${idU}`);
      setLocal(response.data.local);
      setChecked(response.data.local.status);
      if (response.data.local.cidade && response.data.local.orgao) {
        const c = response.data.local.cidade;
        const org = response.data.local.orgao;
        formRef.current?.setData({
          cidade_id: { id: c.id, nome: c.nome },
          orgao_id: { id: org.id, nome: org.nome },
        });
      }
    }
    if (id) {
      showLocal(id);
    }
  }, [id]);

  useEffect(() => {
    async function loadCidades(): Promise<void> {
      const response = await api.get('/cidades');
      setCidades(response.data.cidades);
    }
    async function loadOrgaos(): Promise<void> {
      const response = await api.get('/orgaos');
      setOrgaos(response.data.orgaos);
    }

    loadCidades();
    loadOrgaos();
  }, []);
  const handleSubmit = useCallback(
    async (data: LocaisFormData) => {
      try {
        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });
        if (id) {
          await api.put(`/locais/${id}`, {
            nome: data.nome,
            cidade_id: data.cidade_id,
            orgao_id: data.orgao_id,
            conteudo: data.conteudo,
            status: checked,
          });
          addToast({
            type: 'success',
            title: 'Sucesso na Atualização',
            description: 'Alteração Realizada com Sucesso.',
          });
        } else {
          await api.post('/locais', {
            nome: data.nome,
            cidade_id: data.cidade_id,
            orgao_id: data.orgao_id,
            conteudo: data.conteudo,
            status: checked,
          });
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
    [addToast, history, id, checked],
  );
  const changeStatus = useCallback((event) => {
    setChecked(event);
  }, []);
  return (
    <Container>
      <Title>
        <h1>
          Formulário de {id ? 'Cadastro' : 'Alteração'} Locais de Atendimento
        </h1>
        <hr />
      </Title>
      <Panel>
        <p style={{ color: '#000' }}>{JSON.stringify(local)}</p>
        <Form
          ref={formRef}
          initialData={{
            nome: local?.nome,
            cidade_id: local?.cidade_id,
            orgao_id: local?.orgao_id,
            conteudo: local?.conteudo,
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="Cidade">
            Cidade
            <Select
              name="cidade_id"
              options={cidades}
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
              options={orgaos}
              getOptionValue={(option) => option.id}
              getOptionLabel={(option) => option.nome}
              isSearchable
              isClearable
            />
          </label>
          <label htmlFor="Locais">
            <Input name="nome" type="text" placeholder="Nome" />
            <Input
              name="conteudo"
              type="text"
              placeholder="Complemento da informação"
            />
            <Switch onChange={changeStatus} checked={checked} />
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
