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
      {/*
           <LinkButton to="/admin/cadastro/avisos">
          <FaRegCircle /> <div>Avisos</div>
        </LinkButton>
         */}
      <LinkButton to="/admin/cadastro/servicos">
        <FaRegCircle /> <div>Serviços</div>
      </LinkButton>
      <LinkButton to="/admin/cadastro/categorias">
        <FaRegCircle /> <div>Categorias</div>
      </LinkButton>
      <LinkButton to="/admin/cadastro/tags">
        <FaRegCircle /> <div>Tags</div>
      </LinkButton>
      <LinkButton to="/admin/cadastro/temas">
        <FaRegCircle /> <div>Temas</div>
      </LinkButton>
      <LinkButton to="/admin/cadastro/centrais">
        <FaRegCircle /> <div>Centrais</div>
      </LinkButton>
      <LinkButton to="/admin/cadastro/pracas">
        <FaRegCircle /> <div>Praças</div>
      </LinkButton>
      <LinkButton to="/admin/cadastro/superiors">
        <FaRegCircle /> <div>Inst. Superiores</div>
      </LinkButton>
      <LinkButton to="/admin/cadastro/orgaos">
        <FaRegCircle /> <div>Ogãos</div>
      </LinkButton>
      <LinkButton to="/admin/cadastro/locais">
        <FaRegCircle /> <div>Locais</div>
      </LinkButton>

      <LinkButton to="/admin/cadastro/cidades">
        <FaRegCircle /> <div>Cidades</div>
      </LinkButton>
      <LinkButton to="/admin/cadastro/publicos">
        <FaRegCircle /> <div>Públicos Alvo</div>
      </LinkButton>

      <LinkHeader>
        <FaListAlt />
        <div>Acessos</div>
      </LinkHeader>
      <LinkButton to="/admin/cadastro/usuarios">
        <FaRegCircle /> <div>Usuários</div>
      </LinkButton>
      <LinkButton to="/admin/cadastro/permissoes">
        <FaRegCircle /> <div>Permissões</div>
      </LinkButton>
    </LinkList>
  </Container>
);

export default Sidebar;
