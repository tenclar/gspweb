import React, { useState } from 'react';
/* import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup'; */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FiPlus, FiRefreshCw } from 'react-icons/fi';
import ButtonAlterar from '../../../../components/admin/ButtonAlterar';
import QEditor from '../../../../components/common/QEditor';
import Modal from '../../../../components/common/Modal';
import {
  Container,
  Title,
  Panel,
  Button,
  CancelButton,
  AddButton,
  AddLinkButton,
  CancelLinkButton,
  Table,
  BlockButton,
} from './styles';

const FormServicos: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }
  return (
    <>
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
                <Tab>Etapas </Tab>
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
                    placeholder="Titulo do Serviço"
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
              </TabPanel>
              <TabPanel>
                <label style={{ fontWeight: 'bold' }} htmlFor="informacao">
                  Informações detalhadas do Serviço
                </label>
                <QEditor />
              </TabPanel>

              <TabPanel>
                <label style={{ fontWeight: 'bold' }} htmlFor="Etapas">
                  Informações Etapas
                </label>
                <Table cellPadding="0" cellSpacing="0">
                  <thead>
                    <tr>
                      <th
                        style={{
                          width: '40px',
                        }}
                      >
                        <AddButton type="button" onClick={toggleModal}>
                          <FiPlus />
                        </AddButton>
                      </th>

                      <th>Título</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <ButtonAlterar type="button">
                          <FiRefreshCw />
                        </ButtonAlterar>
                      </td>

                      <td>titulo</td>
                    </tr>
                  </tbody>
                </Table>
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
                        <AddLinkButton to="/ad/cadastro/servicos/novo">
                          <FiPlus />
                        </AddLinkButton>
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
                  <select
                    id="cidade"
                    name="cidade"
                    placeholder="Selecione cidade"
                  >
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
              <CancelLinkButton to="/admin/cadastro/servicos">
                Cancelar
              </CancelLinkButton>
            </BlockButton>
          </form>
        </Panel>
      </Container>
      <Modal isOpen={modalOpen} setIsOpen={toggleModal}>
        <Panel>
          <form>
            <label>
              Titulo
              <input type="text" />
            </label>
            <label htmlFor="ed">
              Descrição
              <QEditor />
            </label>
            <hr />
            <BlockButton>
              <Button onClick={toggleModal}>Salvar </Button>
              <CancelButton onClick={toggleModal}>Cancelar</CancelButton>
            </BlockButton>
          </form>
        </Panel>
      </Modal>
    </>
  );
};

export default FormServicos;
