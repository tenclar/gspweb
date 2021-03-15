import React, { useState } from 'react';
/* import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup'; */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import QEditor from '../../../../components/common/QEditor';

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

const FormServicos: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  /*
   onSelect={index => console.log(index)}
{(index) => setTabIndex(index)}
   */

  return (
    <>
      <Container>
        <Title>
          <h1>Formulário Serviços</h1>
          <hr />
        </Title>
        <Panel>
          <form>
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
                <label style={{ fontWeight: 'bold' }} htmlFor="titulo">
                  Título do Serviço
                  <input
                    id="title"
                    type="text"
                    placeholder="Titulo do Serviço"
                  />
                </label>

                <label style={{ fontWeight: 'bold' }} htmlFor="categoria">
                  Categoria
                  <select
                    id="categoria"
                    name="categoria"
                    placeholder="Selecione Categoria"
                  >
                    <option>Selecione ..</option>
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

                <label htmlFor="orgao">
                  Orgão Responsável
                  <select
                    id="orgao"
                    name="orgao"
                    placeholder="Selecione Categoria"
                  >
                    <option>Selecione ..</option>
                    <option value="orgao 1">Orgão 1</option>
                    <option value="orgao 2">Orgão 2</option>
                    <option value="orgao 4">Orgão 3</option>
                  </select>
                </label>
                <label style={{ fontWeight: 'bold' }} htmlFor="informacao">
                  Informações detalhadas do Serviço
                </label>
                <QEditor />
              </TabPanel>

              <TabPanel>
                <label style={{ fontWeight: 'bold' }} htmlFor="Etapas">
                  Informações Etapas
                </label>
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
          </form>
        </Panel>
      </Container>
    </>
  );
};

export default FormServicos;
