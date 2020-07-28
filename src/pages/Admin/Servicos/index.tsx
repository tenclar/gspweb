import React from 'react';
import { FiPlus } from 'react-icons/fi';
import Button from '../../../components/admin/Button';
import { Container, Title, Table, Panel, SearchTableContainer } from './styles';

const Servicos: React.FC = () => (
  <Container>
    <Title>
      <h1>Serviços</h1>

      <hr />
    </Title>
    <Panel>
      <SearchTableContainer>
        <input name="search" type="text" placeholder="Search" />
        <button type="button">Localizar</button>
      </SearchTableContainer>
    </Panel>
    <Panel>
      <Table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th style={{ width: '60px' }}>
              <Button type="button">
                <FiPlus />
              </Button>
            </th>
            <th style={{ width: '60px' }}>#</th>
            <th>Título do Serviço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <Button color="#a2d200" type="button">
                <FiPlus />
              </Button>
            </td>
            <td style={{ textAlign: 'center' }}>1</td>
            <td>resposta</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <button type="button">alterar</button>
            </td>
            <td style={{ textAlign: 'center' }}>1</td>
            <td>resposta</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <button type="button">alterar</button>
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
