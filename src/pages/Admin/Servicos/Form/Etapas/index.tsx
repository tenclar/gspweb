import React, { useState } from 'react';
import { FiPlus, FiRefreshCw } from 'react-icons/fi';
import Modal from '../../../../../components/common/Modal';

import ButtonAlterar from '../../../../../components/admin/ButtonAlterar';
import {
  Container,
  Table,
  AddButton,
  Panel,
  BlockButton,
  CancelButton,
  Button,
} from './styles';

interface Props {
  cidades: any[];
}

const EtapasServicos: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Container>
        <h1>Etapas </h1>
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
      </Container>
      <Modal isOpen={modalOpen} setIsOpen={toggleModal}>
        <Panel>
          <h1>Etapa</h1>
          <form>
            <label>
              Titulo
              <input type="text" />
            </label>
            <label htmlFor="ed">Descrição</label>
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
export default EtapasServicos;
