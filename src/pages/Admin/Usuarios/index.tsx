import React from 'react';
import { FiPlus, FiRefreshCw, FiSearch } from 'react-icons/fi';

import ButtonAlterar from '../../../components/admin/ButtonAlterar';

import {
  Container,
  Title,
  Table,
  Panel,
  SearchTableContainer,
  LinkButton,
} from './styles';

const Servicos: React.FC = () => (
  <Container>
    <Title>
      <h1>Usuários</h1>

      <hr />
    </Title>
    <Panel>
      <SearchTableContainer>
        <input name="search" type="text" placeholder="Search" />
        <button type="button">
          <FiSearch size={20} />
        </button>
      </SearchTableContainer>
    </Panel>
    <Panel>
      <Table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th
              style={{
                width: '35px',
              }}
            >
              <LinkButton to="/admin/cadastro/servicos/novo">
                <FiPlus />
              </LinkButton>
            </th>
            <th style={{ width: '60px' }}>#</th>
            <th>Título do Serviço</th>
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
            <td>resposta</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <ButtonAlterar type="button">
                <FiRefreshCw />
              </ButtonAlterar>
            </td>
            <td style={{ textAlign: 'center' }}>1</td>
            <td>resposta</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <ButtonAlterar type="button">
                <FiRefreshCw />
              </ButtonAlterar>
            </td>
            <td style={{ textAlign: 'center' }}>1</td>
            <td>resposta</td>
          </tr>
        </tbody>
      </Table>
    </Panel>
  </Container>
);

export default Servicos;
