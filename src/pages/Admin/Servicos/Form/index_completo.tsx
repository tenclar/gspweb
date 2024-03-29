import React from 'react';

import { Container, Title, Panel, Button, CancelButton } from './styles';

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
            <option value="categoria1">&nbsp;&nbsp;&nbsp;Categoria 1.1</option>
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

        <label htmlFor="local">
          Localidade
          <select id="local" name="local" placeholder="Selecione Localidade">
            <option>Selecione ..</option>
            <option value="local1">local 1</option>
            <option value="local2">local 2</option>
            <option value="local3">local 3</option>
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
        <label htmlFor="prerequisito">
          Pré Requisitos
          <select
            id="prerequisito"
            name="prerequisito"
            placeholder="Selecione prerequisito"
          >
            <option>Selecione ..</option>
            <option value="prerequisito">prerequisito 1</option>
            <option value="prerequisito">prerequisito 2</option>
            <option value="prerequisito">prerequisito 3</option>
          </select>
        </label>

        <label htmlFor="documentos">
          documentos necessários
          <select
            id="documentos"
            name="documentos"
            placeholder="Selecione documentos"
          >
            <option>Selecione ..</option>
            <option value="documentos">documentos 1</option>
            <option value="documentos">documentos 2</option>
            <option value="documentos">documentos 3</option>
          </select>
        </label>

        <label htmlFor="tipocusto">
          Tipo de Custo do Serviço
          <select
            id="tipocusto"
            name="local"
            placeholder="Selecione tipo de custo"
          >
            <option>Selecione ..</option>
            <option value="local1">Taxa 1</option>
            <option value="local2">Tarifa 2</option>
            <option value="local3">gratuito 3</option>
          </select>
        </label>

        <label htmlFor="title">
          Valor do Custo
          <input id="title" type="text" />
        </label>
        <label htmlFor="title">
          Data de atualização do valor
          <input id="title" type="date" />
        </label>
        <label htmlFor="title">
          Data de previsão de proxima atualização do valor
          <input id="title" type="date" />
        </label>

        <label htmlFor="tipo de custo">
          Forma de Pagamento
          <select
            id="pagamento"
            name="pagamento"
            placeholder="Selecione tipo de custo"
          >
            <option>Selecione ..</option>
            <option value="local1">boleto 1</option>
            <option value="local2">dinheiro 2</option>
            <option value="local3">cartão 3</option>
          </select>
        </label>

        <label htmlFor="tipo de custo">
          Instituições Bancárias
          <select
            id="pagamento"
            name="pagamento"
            placeholder="Selecione tipo de custo"
          >
            <option>Selecione ..</option>
            <option value="local1">banco 1</option>
            <option value="local2">banco 2</option>
            <option value="local3">banco 3</option>
          </select>
        </label>

        <label htmlFor="Parcelamento">
          Parcelamento
          <select
            id="Parcelamento"
            name="Parcelamento"
            placeholder="Selecione Parcelamento"
          >
            <option>Selecione ..</option>
            <option value="Parcelamento">Parcelamento 1x</option>
            <option value="Parcelamento">Parcelamento 2x</option>
            <option value="Parcelamento">Parcelamento 3x</option>
          </select>
        </label>

        <label htmlFor="formularios">
          Parcelamento
          <select id="tema" name="tema" placeholder="Selecione formularios">
            <option>Selecione ..</option>
            <option value="tema">formularios 1x</option>
            <option value="tema">formularios 2x</option>
            <option value="tema">formularios 3x</option>
          </select>
        </label>

        <label htmlFor="tema">
          Parcelamento
          <select id="tema" name="tema" placeholder="Selecione tema">
            <option>Selecione ..</option>
            <option value="tema">tema 1x</option>
            <option value="tema">tema 2x</option>
            <option value="tema">tema 3x</option>
          </select>
        </label>

        <label htmlFor="tag">
          Parcelamento
          <select id="tag" name="tag" placeholder="Selecione tag">
            <option>Selecione ..</option>
            <option value="tag">tag 1x</option>
            <option value="tag">tag 2x</option>
            <option value="tag">tag 3x</option>
          </select>
        </label>
        <hr />
        <div>
          <Button>Salvar </Button>
          <CancelButton>Cancelar</CancelButton>
        </div>
      </form>
    </Panel>
  </Container>
);

export default FormServicos;
