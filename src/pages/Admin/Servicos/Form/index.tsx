import React from 'react';

import { Container, Title, Panel, Button, LinkButton } from './styles';

const FormServicos: React.FC = () => (
  <Container>
    <Title>
      <h1>Formulário Serviços</h1>
      <hr />
    </Title>
    <Panel>
      <form>
        <label htmlFor="title">
          Título
          <input id="title" type="text" placeholder="Título" />
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
            <option value="categoria1">Categoria 1</option>
            <option value="categoria1">Categoria 1</option>
          </select>
        </label>
        <label htmlFor="informacao">
          Informações do Serviço
          <textarea
            rows={6}
            id="informacao"
            placeholder="Descreva as informações do Serviço"
          />
        </label>
        <hr />
        <div>
          <Button>Salvar </Button>
          <LinkButton to="/admin/cadastro/servicos">Cancelar</LinkButton>
        </div>
      </form>
    </Panel>
  </Container>
);

export default FormServicos;
