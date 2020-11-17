import React, { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from './InputSearch';
import {
  Container,
  SearchContent,
  SearchInput,
  SearchResult,
  Title,
  ResultList,
  Result,
  ResultTitle,
  Descricao,
  Categoria,
  Orgao,
  NomePopular,
} from './styles';

const Search: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <SearchContent>
        <SearchInput>
          <Form
            ref={formRef}
            onSubmit={() => {
              'ok';
            }}
          >
            <span> 10 Resultados encontrados</span>
            <Input
              name="arg"
              placeholder="Que serviço deseja consultar?"
              value="Identidade"
            />
            <button type="button">
              <FiSearch size={24} />
            </button>
          </Form>
        </SearchInput>
      </SearchContent>
      <Title>Informações Encontradas</Title>
      <SearchResult>
        <ResultList>
          <Result>
            <Orgao>
              <strong>ORGÃO:</strong> SECRETARIA DE SEGURANÇA PÚBLICA / ISTITUTO
              DE IDENTIFICAÇÃO
            </Orgao>
            <ResultTitle>Obter 1ª Via da Carteira de Identidade </ResultTitle>
            <Descricao to="/detalhe">
              A carteira de identidade é o documento que certifica que a pessoa
              se encontra identificada civilmente. Constitui eficiente
              instrumento para salvaguardar interesses individuais, desde quando
              a identificação é o meio mais seguro para assegurar direitos, já
              que ele evita a fraude .
            </Descricao>
            <Categoria>
              <strong>Categoria:</strong> Documentos
            </Categoria>
            <NomePopular>
              <strong>Nome Popular:</strong> RG
            </NomePopular>
          </Result>
          <Result>
            <Orgao>
              <strong>ORGÃO:</strong> SECRETARIA DE SEGURANÇA PÚBLICA / ISTITUTO
              DE IDENTIFICAÇÃO
            </Orgao>
            <ResultTitle>Obter 2ª Via da Carteira de Identidade </ResultTitle>
            <Descricao to="/detalhe">
              A carteira de identidade é o documento que certifica que a pessoa
              se encontra identificada civilmente. Constitui eficiente
              instrumento para salvaguardar interesses individuais, desde quando
              a identificação é o meio mais seguro para assegurar direitos, já
              que ele evita a fraude .
            </Descricao>
            <Categoria>
              <strong>Categoria:</strong> Documentos
            </Categoria>
            <NomePopular>
              <strong>Nome Popular:</strong> RG
            </NomePopular>
          </Result>
        </ResultList>
      </SearchResult>
    </Container>
  );
};

export default Search;
