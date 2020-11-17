import React from 'react';
import { Wrapper, Container } from './styles';
import Header from '../../../components/guide/Header';

const Guide: React.FC = ({ children }) => (
  <Wrapper>
    <Header />
    <Container>{children}</Container>
  </Wrapper>
);

export default Guide;
