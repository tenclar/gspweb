import React from 'react';

import { FaListAlt, FaRegCircle } from 'react-icons/fa';
import { Container, LinkList, LinkHeader, LinkButton } from './styles';

const Sidebar: React.FC = () => (
  <Container>
    <LinkList>
      <LinkHeader>
        <FaListAlt />
        <div>Cadastros</div>
      </LinkHeader>

      <LinkButton to="/ad/cadastro/servicos">
        <FaRegCircle /> <div>Serviços</div>
      </LinkButton>
      <LinkButton to="/ad/cadastro/categorias">
        <FaRegCircle /> <div>Categorias</div>
      </LinkButton>
      <LinkButton to="/ad/cadastro/centrais">
        <FaRegCircle /> <div>Centrais</div>
      </LinkButton>
      <LinkButton to="/ad/cadastro/cidades">
        <FaRegCircle /> <div>Cidades</div>
      </LinkButton>
      <LinkButton to="/ad/cadastro/superiores">
        <FaRegCircle /> <div>Inst. Superiores</div>
      </LinkButton>
      <LinkButton to="/ad/cadastro/locais">
        <FaRegCircle /> <div>Locais</div>
      </LinkButton>
      <LinkButton to="/ad/cadastro/orgaos">
        <FaRegCircle /> <div>Ogãos</div>
      </LinkButton>
      <LinkButton to="/ad/cadastro/pracas">
        <FaRegCircle /> <div>Praças</div>
      </LinkButton>
      <LinkButton to="/ad/cadastro/tags">
        <FaRegCircle /> <div>Tags</div>
      </LinkButton>
      <LinkButton to="/ad/cadastro/temas">
        <FaRegCircle /> <div>Temas</div>
      </LinkButton>

      <LinkButton to="/ad/cadastro/publicos">
        <FaRegCircle /> <div>Públicos Alvo</div>
      </LinkButton>

      <LinkHeader>
        <FaListAlt />
        <div>Páginas</div>
      </LinkHeader>
      <LinkButton to="/ad/cadastro/avisos">
        <FaRegCircle /> <div>Avisos</div>
      </LinkButton>

      <LinkButton to="/ad/cadastro/publicos">
        <FaRegCircle /> <div>Informações</div>
      </LinkButton>

      <LinkHeader>
        <FaListAlt />
        <div>Acessos</div>
      </LinkHeader>
      <LinkButton to="/ad/cadastro/usuarios">
        <FaRegCircle /> <div>Usuários</div>
      </LinkButton>
      <LinkButton to="/ad/cadastro/permissoes">
        <FaRegCircle /> <div>Permissões</div>
      </LinkButton>
    </LinkList>
  </Container>
);

export default Sidebar;
