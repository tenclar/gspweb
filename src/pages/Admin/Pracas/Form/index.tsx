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

import Input from '../../../../components/admin/InputForm';
import Button from '../../../../components/admin/Button';
import { Container, Title, Panel, LinkButton } from './styles';
// import Centrais from '../../Centrais';

interface ParamTypes {
  id: string;
}

interface ICentrais {
  id: string;
  centrais_id?: string | undefined;
  nome: string;
}
interface ICentral {
  centrais_id: string;
  nome: string;
}
interface PracaFormData {
  nome: string;
  slug: string;
  status: boolean;
  centrais?: [];
}

const FormPracas: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const [centraisop, setCentraisop] = useState<ICentrais[]>();
  const [praca, setPraca] = useState<PracaFormData>();
  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    async function loadCentrais(): Promise<void> {
      const response = await api.get('/centrais');

      const p = response.data.centrais.map((c: ICentrais) => ({
        centrais_id: c.id,
        nome: c.nome,
      }));

      setCentraisop(p);
    }
    loadCentrais();
  }, []);
  useEffect(() => {
    async function showPraca(idU: string): Promise<void> {
      const response = await api.get(`/pracas/${idU}`);
      setPraca(response.data.praca);
      setChecked(response.data.praca.status);
      const pc = response.data.praca.centrais.map((c: any) => ({
        centrais_id: c.centrais_id,
        nome: c.central.nome,
      }));
      formRef.current?.setData({
        centrais: pc,
      });
    }
    if (id) {
      showPraca(id);
    }
  }, [id]);
  const handleSubmit = useCallback(
    async (data: PracaFormData) => {
      try {
        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        if (id) {
          await api.put(`/pracas/${id}`, {
            nome: data.nome,
            status: checked,
            centrais: data.centrais,
          });

          addToast({
            type: 'success',
            title: 'Sucesso na Atualização',
            description: 'Alteração Realizada com Sucesso.',
          });
        } else {
          data.status = checked;

          await api.post('/pracas', data);
          addToast({
            type: 'success',
            title: 'Sucesso No Cadastro',
            description: 'Cadastro Realizado com Sucesso.',
          });
        }

        history.push('/ad/cadastro/pracas');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na Atualização',
          description: 'Ocorreu um erro ao fazer Cadastro de Pracas.',
        });
      }
    },
    [addToast, id, history, checked],
  );
  const changeStatus = useCallback((event) => {
    setChecked(event);
  }, []);
  return (
    <Container>
      <Title>
        <h1>Formulário de {id ? 'Cadastro' : 'Alteração'} de Pracas</h1>
        <hr />
      </Title>
      <Panel>
        <Form
          ref={formRef}
          initialData={{
            nome: praca?.nome,
            centrais: praca?.centrais,
          }}
          onSubmit={handleSubmit}
        >
          <Select
            name="centrais"
            isMulti
            options={centraisop}
            getOptionValue={(option) => option.centrais_id}
            getOptionLabel={(option) => option.nome}
            isSearchable
            isClearable
          />
          <Input name="nome" type="text" placeholder="Nome" />
          <Switch onChange={changeStatus} checked={checked} />

          <hr />
          <div>
            <Button type="submit">Salvar </Button>
            <LinkButton to="/ad/cadastro/pracas">Cancelar</LinkButton>
          </div>
        </Form>
      </Panel>
    </Container>
  );
};

export default FormPracas;
