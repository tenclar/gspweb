import React, { useState, useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { FiPlus, FiRefreshCw } from 'react-icons/fi';
import { Form } from '@unform/web';
import Modal from '../../../../../components/common/Modal';
// import QEditor from '../../../../../components/common/QEditor';
import ButtonAlterar from '../../../../../components/admin/ButtonAlterar';
import Select from '../../../../../components/admin/Select';
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

const LocaisServicos: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const formRef = useRef<FormHandles>(null);
  // eslint-disable-next-line
  const [locais, setLocais] = useState([
    {
      value: '1',
      label: 'CAC',
    },
    {
      value: '2',
      label: 'Eletroacre',
    },
  ]);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  const handleSubmit = useCallback(() => {
    console.log('ok');
  }, []);
  return (
    <>
      <Container>
        <h1>Locais </h1>
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

              <td>Nome</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Modal isOpen={modalOpen} setIsOpen={toggleModal}>
        <Panel>
          <h1>Locais</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="nome">
              Nome
              <Select options={locais} name="nome" isSearchable isClearable />
            </label>

            <hr />
            <BlockButton>
              <Button onClick={toggleModal}>Salvar </Button>
              <CancelButton onClick={toggleModal}>Cancelar</CancelButton>
            </BlockButton>
          </Form>
        </Panel>
      </Modal>
    </>
  );
};
export default LocaisServicos;
