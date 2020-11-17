import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Container, Breadcrumb, Content, Title, Detalhe } from './styles';

import '../../../assets/accordeon.css';

const Detail: React.FC = () => (
  <Container>
    <Breadcrumb>
      <Link to="/">Início</Link>/<Link to="/pesquisa"> Serviços</Link>/
      <span>Detalhes</span>
    </Breadcrumb>
    <Title>Detalhes da Pesquisa</Title>
    <Content>
      <Detalhe>
        <h1>Obter 2ª Via da Carteira de Identidade </h1>

        <p>
          1. A Carteira de Identidade é o documento de identificação, emitido e
          controlado pela Secretaria de Estado da Polícia Civil do Acre;
        </p>
        <p>
          2. Se o cidadão for viajar para: Argentina, Bolívia, Chile, Colômbia,
          Equador, Paraguai, Uruguai, Venezuela e Peru, a Carteira de Identidade
          precisa ter sido emitida há menos de 10 anos e estar em bom estado de
          conservação.
        </p>
        <p>
          3. Para sua própria segurança, nos casos de perda ou roubo ou furto,
          registre ocorrência. Ligue para 190 e se informe em qual Delegacia de
          Polícia se dirigir.
        </p>
        <p>
          <strong style={{ color: 'red' }}>Atenção:</strong> alertamos que está
          sendo impresso um novo modelo de Carteira de Identidade com os dados
          variáveis protegidos com película. Conforme consta no verso do
          documento, informamos que esta
          <strong style={{ color: 'red' }}> NÃO PODE SER PLASTIFICADA</strong>.
        </p>
        <br />
        <br />
        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>ONDE POSSO SOLICITAR?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Central de Serviço Público – OCA Rio Branco Praça Verde – Térreo
                Endereço: Rua Quintino Bocaiuva, 299 – Centro Município: Rio
                Branco Dias e horário de atendimento: de segunda a quinta-feira
                das 7h30min às 15h30min; às sextas-feiras, das 7h às 13h.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>QUEM PODE SOLICITAR?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Somente o Titular.</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                QUAIS DOCUMENTOS SÃO SOLICITADOS?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Se o titular for Solteiro, apresentar: </p>

              <p>Certidão de Nascimento, original;</p>
              <p> Endereço, apenas informar.</p>
              <p>Se o titular for Casado, apresentar:</p>

              <p>Certidão de Casamento, original;</p>
              <p>Endereço, apenas informar.</p>
              <p>Se o titular for Viúvo, apresentar:</p>

              <p>Certidão de Casamento (com averbação de óbito), original;</p>
              <p>
                Observação: caso a Certidão não esteja com averbação, deve ser
                apresentada também a Certidão de Óbito, original.
              </p>

              <p>Endereço, apenas informar.</p>
              <p>Se o titular for Divorciado OU Separado, apresentar:</p>

              <p>
                Certidão de Casamento (com averbação do estado civil atual),
                original;
              </p>
              <p>Endereço, apenas informar.</p>
              <p>
                Caso o titular tenha interesse de inserir dados de outros
                documentos na carteira de identidade, deverá apresentar também:
              </p>

              <p>
                CPF, original (apresentação obrigatória somente nos casos em que
                não esteja registrado no documento de identificação);
              </p>
              <p>Documento Nacional de Identificação -DNI, original;</p>
              <p>
                Número de Identificação Social – NIS OU Programa de Integração
                Social – PIS OU Programa de Formação do Patrimônio do Servidor
                Público – PASEP, original;
              </p>
              <p>Cartão Nacional de Saúde -SUS, original;</p>
              <p>Título de Eleitor, original;</p>
              <p>
                Carteira de Identidade Profissional (CRM, OAB, CREA e etc.),
                original;
              </p>
              <p>Carteira de Trabalho, original;</p>
              <p>Carteira de Motorista, original;</p>
              <p>Certificado de Alistamento Militar, original;</p>
              <p>
                Exame Laboratorial de Tipo Sanguíneo e Fator de RH, original;
              </p>
              <p>Atestado Médico OU Documento Oficial, original;</p>
              <p>
                Requerimento de nome social original que ficará retido. Obtido
                no ato do atendimento.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </Detalhe>
    </Content>
  </Container>
);

export default Detail;
