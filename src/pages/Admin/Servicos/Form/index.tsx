import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Switch from 'react-switch';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useHistory, useParams } from 'react-router-dom';
import Input from '../../../../components/admin/InputForm';
import Select from '../../../../components/admin/Select';
import { useToast } from '../../../../hooks/Toast';
import getValidationErrors from '../../../../utils/getValidationErrors';
import QuillEditor from '../../../../components/common/EditorQuill';
import api from '../../../../services/api';
import EtapasForm from './Etapas';
import CentraisForm from './Centrais';
import LocaisForm from './Locais';
import CidadesForm from './Cidades';
import {
  Container,
  Title,
  Panel,
  Button,
  CancelLinkButton,
  BlockButton,
} from './styles';

interface ParamTypes {
  id: string;
}

interface Orgao {
  id: string;
  nome: string;
}

interface Categoria {
  id?: string | null | '' | undefined;
  slug?: string;
  titulo: string;
  status?: boolean;
}
interface ServicoFormData {
  titulo: string;
  orgao_id?: string;
  categoria_id?: string;
  informacao: string;
  status: boolean;
}
interface Servico {
  id?: string | null | '' | undefined;
  orgao_id?: string | null | '' | undefined;
  categoria_id?: string | null | '' | undefined;
  slug?: string;
  titulo: string;
  informacao: string;
  status?: boolean;
}
const RAIZ = {
  id: null,
  titulo: 'RAIZ',
};
const FormServicos: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [tabIndex, setTabIndex] = useState(0);
  const { addToast } = useToast();
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const [servico, setServico] = useState<Servico>();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [orgaos, setOrgaos] = useState<Orgao[]>([]);
  const { id } = useParams<ParamTypes>();
  /*
   onSelect={index => console.log(index)}
{(index) => setTabIndex(index)}
   */

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

    async function loadOrgaos(): Promise<void> {
      try {
        const response = await api.get('/orgaos');
        setOrgaos(response.data.orgaos);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na Listagem',
          description: 'Ocorreu um erro ao listar Orgãos.',
        });
      }
    }
    loadCategorias();
    loadOrgaos();
  }, [addToast]);

  useEffect(() => {
    async function showServico(idU: string): Promise<void> {
      const response = await api.get(`/servicos/${idU}`);
      setServico(response.data.servico);
      setChecked(response.data.servico.status);
      if (response.data.servico.categoria && response.data.servico.orgao) {
        const { categoria } = response.data.servico;
        const { orgao } = response.data.servico;
        formRef.current?.setData({
          cidade_id: { id: categoria.id, nome: categoria.nome },
          orgao_id: { id: orgao.id, nome: orgao.nome },
        });
      }
    }
    if (id) {
      showServico(id);
    }
  }, [id]);

  const handleSubmit = useCallback(
    async (data: ServicoFormData) => {
      try {
        const schema = Yup.object().shape({
          titulo: Yup.string().required('Título obrigatório'),
          categoria_id: Yup.string().nullable(),
          orgao_id: Yup.string().nullable(),
          informacao: Yup.string(),
        });

        await schema.validate(data, { abortEarly: false });

        if (id) {
          await api.put(`/servicos/${id}`, {
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
          await api.post('/servicos', data);
          addToast({
            type: 'success',
            title: 'Sucesso No Cadastro',
            description: 'Cadastro Realizado com Sucesso.',
          });
        }

        history.push('/ad/cadastro/servicos');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na Autenticação',
          description: 'Ocorreu um erro ao fazer o cadastro de Servicos',
        });
      }
    },
    [addToast, history, id, checked],
  );

  const changeStatus = useCallback((event) => {
    setChecked(event);
  }, []);

  return (
    <>
      <Container>
        <Title>
          <h1>Formulário Serviços</h1>
          <hr />
        </Title>
        <Panel>
          <Form
            ref={formRef}
            initialData={{
              orgao_id: servico?.orgao_id,
              categoria_id: servico?.categoria_id,
              titulo: servico?.titulo,
              informacao: servico?.informacao,
              status: servico?.status,
            }}
            onSubmit={handleSubmit}
          >
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => {
                setTabIndex(index);
              }}
            >
              <TabList>
                <Tab>Cadastro</Tab>
                <Tab>Etapas</Tab>
                <Tab>Locais</Tab>
                <Tab>Cidade</Tab>
                <Tab>Centrais</Tab>
              </TabList>
              <TabPanel>
                <label htmlFor="status">Status</label>
                <div style={{ marginLeft: '2vh', marginTop: '0.6vh' }}>
                  <Switch onChange={changeStatus} checked={checked} />
                </div>

                <label htmlFor="Orgao">Órgão</label>
                <Select
                  name="orgao_id"
                  placeholder="Selecione o Orgão"
                  options={orgaos}
                  getOptionValue={(option) => option.id}
                  getOptionLabel={(option) => option.nome}
                  isSearchable
                  isClearable
                />

                <label htmlFor="categoria">Categoria</label>
                <Select
                  id="categoria"
                  name="categoria_id"
                  options={categorias}
                  placeholder="Selecione a Categoria"
                  getOptionValue={(option) => option.id}
                  getOptionLabel={(option) => option.titulo}
                  isSearchable
                  isClearable
                />

                <label htmlFor="titulo">Título do Serviço</label>
                <Input name="titulo" type="text" placeholder="Título" />

                <label htmlFor="informacao">
                  Informações detalhadas do Serviço
                </label>
                <QuillEditor name="informacao" />
              </TabPanel>

              <TabPanel>
                <label htmlFor="Etapas">Informações Etapas</label>
                <EtapasForm />
              </TabPanel>
              <TabPanel>
                <LocaisForm />
              </TabPanel>
              <TabPanel>
                <CidadesForm />
              </TabPanel>
              <TabPanel>
                <label htmlFor="Centrais">Centrais</label>
                <CentraisForm />
              </TabPanel>
            </Tabs>

            <hr />
            <BlockButton>
              <Button>Salvar </Button>
              <CancelLinkButton to="/ad/cadastro/servicos">
                Cancelar
              </CancelLinkButton>
            </BlockButton>
          </Form>
        </Panel>
      </Container>
    </>
  );
};

export default FormServicos;
