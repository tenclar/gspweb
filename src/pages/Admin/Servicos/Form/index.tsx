import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiPlus, FiRefreshCw } from 'react-icons/fi';
import ButtonAlterar from '../../../../components/admin/ButtonAlterar';
import {
  Container,
  Title,
  Panel,
  Button,
  CancelButton,
  AddButton,
  Table,
  BlockButton,
} from './styles';
import 'react-tabs/style/react-tabs.css';

const FormServicos: React.FC = () => (
  <Container>
    <Title>
      <h1>Formulário Serviços</h1>
      <hr />
    </Title>
    <Panel>
      <form>
        <Tabs>
          <TabList>
            <Tab>Cadastro</Tab>
            <Tab>Serviço </Tab>
            <Tab>Locais </Tab>
            <Tab>Cidade </Tab>
            <Tab>Centrais </Tab>
          </TabList>
          <TabPanel>
            <label htmlFor="title">
              Título
              <input
                id="title"
                type="text"
                placeholder="Onde posso solicitar?"
              />
            </label>

            <label htmlFor="categoria">
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
              <select id="orgao" name="orgao" placeholder="Selecione Categoria">
                <option>Selecione ..</option>
                <option value="orgao 1">Orgão 1</option>
                <option value="orgao 2">Orgão 2</option>
                <option value="orgao 4">Orgão 3</option>
              </select>
            </label>
          </TabPanel>
          <TabPanel>
            <label htmlFor="informacao">
              Informações do Serviço
              <textarea
                rows={6}
                id="informacao"
                placeholder="Descreva as informações do Serviço"
              />
            </label>
          </TabPanel>
          <TabPanel>
            <label htmlFor="local">
              Localidade
              <select
                id="local"
                name="local"
                placeholder="Selecione Localidade"
              >
                <option>Selecione ..</option>
                <option value="local1">local 1</option>
                <option value="local2">local 2</option>
                <option value="local3">local 3</option>
              </select>
            </label>

            <Table cellPadding="0" cellSpacing="0">
              <thead>
                <tr>
                  <th
                    style={{
                      width: '35px',
                    }}
                  >
                    <AddButton to="/ad/cadastro/servicos/novo">
                      <FiPlus />
                    </AddButton>
                  </th>
                  <th style={{ width: '60px' }}>#</th>
                  <th>Local</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: 'center' }}>
                    <ButtonAlterar type="button">
                      <FiRefreshCw />
                    </ButtonAlterar>
                  </td>
                  <td style={{ textAlign: 'center' }}>1</td>
                  <td>Local 1</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'center' }}>
                    <ButtonAlterar type="button">
                      <FiRefreshCw />
                    </ButtonAlterar>
                  </td>
                  <td style={{ textAlign: 'center' }}>1</td>
                  <td>local 2</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'center' }}>
                    <ButtonAlterar type="button">
                      <FiRefreshCw />
                    </ButtonAlterar>
                  </td>
                  <td style={{ textAlign: 'center' }}>1</td>
                  <td>local 3</td>
                </tr>
              </tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <label htmlFor="Cidade">
              Cidade
              <select id="cidade" name="cidade" placeholder="Selecione cidade">
                <option>Selecione ..</option>
                <option value="cidade1">cidade 1</option>
                <option value="cidade2">cidade 2</option>
                <option value="cidade3">cidade 3</option>
              </select>
            </label>
          </TabPanel>
          <TabPanel>
            <label htmlFor="Centrais">
              Centrais
              <select
                id="centrais"
                name="centrais"
                placeholder="Selecione Centrais"
              >
                <option>Selecione ..</option>
                <option value="cidade1">centrais 1</option>
                <option value="cidade2">centrais 2</option>
                <option value="cidade3">centrais 3</option>
              </select>
            </label>
            <label htmlFor="Praças">
              Praça
              <select id="praca" name="praca" placeholder="Selecione praca">
                <option>Selecione ..</option>
                <option value="cidade1">praca 1</option>
                <option value="cidade2">praca 2</option>
                <option value="cidade3">praca 3</option>
              </select>
            </label>
          </TabPanel>
        </Tabs>

        <hr />
        <BlockButton>
          <Button>Salvar </Button>
          <CancelButton to="/admin/cadastro/servicos">Cancelar</CancelButton>
        </BlockButton>
      </form>
    </Panel>
  </Container>
);

export default FormServicos;
