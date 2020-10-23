import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../../../components/admin/InputForm';
import { Container, Title, Panel, Button, LinkButton } from './styles';

const FormUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Title>
        <h1>Formulário Locais</h1>
        <hr />
      </Title>
      <Panel>
        <Form
          ref={formRef}
          onSubmit={() => {
            console.log('send form');
          }}
        >
          <Input name="name" type="text" placeholder="Nome" />

          <Input name="email" type="text" placeholder="E-mail Institucional" />
          <Input name="email" type="text" placeholder="E-mail Institucional" />

          <hr />
          <div>
            <Button>Salvar </Button>
            <LinkButton to="/admin/cadastro/locais">Cancelar</LinkButton>
          </div>
        </Form>
      </Panel>
    </Container>
  );
};

export default FormUser;
