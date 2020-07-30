import React from 'react';

import { Container, Title, Panel, Button, LinkButton } from './styles';

const FormServicos: React.FC = () => (
  <Container>
    <Title>
      <h1>Formulário Locais</h1>
      <hr />
    </Title>
    <Panel>
      <form>
        <label htmlFor="nome">
          Nome
          <input id="nome" type="text" placeholder="nome" />
        </label>

        <label htmlFor="endereco">
          Nome
          <input id="endereco" type="text" placeholder="endereco" />
        </label>

        <label htmlFor="funcionamento">
          Funcionamento
          <input id="funcionamento" type="text" placeholder="funcionamento" />
        </label>

        <label htmlFor="telefone">
          Telefone de Atendimento
          <input id="telefone" type="text" placeholder="telefone" />
        </label>

        <label htmlFor="cidade">
          Orgão Responsável
          <select id="cidade" name="cidade" placeholder="Selecione cidade">
            <option>Selecione ..</option>
            <option value="cidade 1">local 1</option>
            <option value="cidade 2">local 2</option>
            <option value="cidade 3">local 3</option>
          </select>
        </label>

        <hr />
        <div>
          <Button>Salvar </Button>
          <LinkButton to="/admin/cadastro/locais">Cancelar</LinkButton>
        </div>
      </form>
    </Panel>
  </Container>
);

export default FormServicos;
