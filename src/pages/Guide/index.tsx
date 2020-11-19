import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiSearch } from 'react-icons/fi';
import Input from '../../components/guide/InputForm';
import {
  Container,
  Search,
  SearchInput,
  TitleGuide,
  Guia,
  De,
  Servico,
  Publico,
  Frase,
  SessionCategory,
  ServiceTitle,
  SessionTitle,
  HeaderCategory,
  Category,
  CategoryList,
  Line,
  SessionFooter,
  Footer,
  Button,
} from './styles';

import iconPredio from '../../assets/predioicon.svg';
import iconCidadao from '../../assets/cidicons.svg';
import iconFunc from '../../assets/funcicon.svg';
import iconBrasaofooter from '../../assets/brasaofooter.svg';
import iconLogogovfooter from '../../assets/logogov.svg';
import iconPraca from '../../assets/pracaicon.svg';
import iconLocal from '../../assets/gps.svg';
import iconOgao from '../../assets/orgaogov.png';
import iconService from '../../assets/servicos.jpg';
import iconInternet from '../../assets/internet.jpg';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  return (
    <Container>
      <Search>
        <TitleGuide>
          <Guia>
            Guia <De>de</De>
          </Guia>

          <Servico>
            Servicos<Publico>Públicos</Publico>
          </Servico>
          <Frase>
            Serviços prestados pela Organização Central de Atendimento
          </Frase>
        </TitleGuide>
        <SearchInput>
          <Form
            ref={formRef}
            onSubmit={() => {
              console.log('ok');
            }}
          >
            <Input name="arg" placeholder="Que serviço deseja consultar?" />
            <Button to="/pesquisa">
              <FiSearch size={32} />
            </Button>
          </Form>
        </SearchInput>
      </Search>

      <SessionCategory>
        <HeaderCategory>
          <ServiceTitle>SERVIÇOS DISPONÍVEIS</ServiceTitle>
          {/* <ServiceTitle>Praças ou Locais</ServiceTitle> */}
          <SessionTitle>
            serviços públicos de acordo com praças ou determinado local
          </SessionTitle>
        </HeaderCategory>
        <CategoryList>
          <Category>
            <Link to="/pesquisa/pracas/">
              <img src={iconPraca} alt="" />
            </Link>
            <strong>PRAÇAS</strong>
            <p>Localize os serviços por praças</p>
          </Category>
          <Category>
            <Link to="/pesquisa/local/">
              <img src={iconLocal} alt="" />
            </Link>
            <strong>LOCAIS</strong>
            <p>Serviços por Unidade de Atendimento</p>
          </Category>
          <Category>
            <Link to="/pesquisa/orgaos/">
              <img src={iconOgao} alt="" />
            </Link>
            <strong>ORGÃOS</strong>
            <p>Orgãos Prestadores de Serviços</p>
          </Category>
        </CategoryList>
      </SessionCategory>
      <SessionCategory>
        <HeaderCategory>
          <SessionTitle>
            Informações e serviços públicos disponíveis eletronicamente.
          </SessionTitle>
        </HeaderCategory>
        <CategoryList>
          <Category>
            <Link to="/servicos/internet">
              <img src={iconInternet} alt="" />
            </Link>
            <strong>INTERNET</strong>

            <p>Prestação de Serviços via internet</p>
          </Category>

          <Category>
            <Link to="/multiservico">
              <img src={iconService} alt="" />
            </Link>
            <strong>BALCÃO MULTISERVIÇO</strong>

            <p>Formulário de Atendimento</p>
          </Category>
        </CategoryList>
      </SessionCategory>
      <SessionCategory>
        <HeaderCategory>
          <SessionTitle>
            Pesquise serviços prestados de acordo com público alvo
          </SessionTitle>
        </HeaderCategory>
        <CategoryList>
          <Category>
            <Link to="/pesquisa/categoria/empresas">
              <img src={iconPredio} alt="" />
            </Link>
            <strong>EMPRESAS</strong>

            <p>Serviços destianados a prestação de atendimento para empresas</p>
          </Category>

          <Category>
            <Link to="/pesquisa/categoria/cidadao">
              <img src={iconCidadao} alt="" />
            </Link>
            <strong>CIDADÃO</strong>

            <p>
              Serviços destianados a prestação de atendimento para o cidadão
            </p>
          </Category>
          <Category>
            <Link to="/pesquisa/categoria/funcionario-publico">
              <img src={iconFunc} alt="" />
            </Link>
            <strong>FUNCIONÁRIO PÚBLICO</strong>

            <p>
              Serviços destianados a prestação de atendimento para funcionários
              públicos
            </p>
          </Category>
        </CategoryList>
      </SessionCategory>

      <Line />
      <SessionFooter>
        <div>
          <img src={iconBrasaofooter} alt="Governo do Estado do Acre" />
        </div>
        <div>
          <img src={iconLogogovfooter} alt="Governo do Estado do Acre" />
        </div>
        <div>
          <strong>Governo do Estado do Acre</strong>
          <p>Secretaria de Planejamento e Gestão</p>
          <p>Diretoria de Organização em Centros de Atendimento</p>
          <p>Avenida Getúlio Vargas, 232. Centro</p>
          <p>CEP 69900-600 - Rio Branco - Acre</p>
          {/* <p> Rua Quintino Bocaiuva, 299. Centro</p> */}
          {/* <p>CEP 69909-400 - Rio Branco - Acre</p> */}
        </div>
      </SessionFooter>
      <Footer>
        <div>Todos os direitos reservados. </div>
        <div>SEPLAG - DIROC - DETI</div>
      </Footer>
    </Container>
  );
};

export default Dashboard;
