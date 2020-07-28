import React from 'react';

import { Wrapper, Container, Content } from './styles';
import Header from '../../../components/admin/Header';
import Sidebar from '../../../components/admin/Sidebar';

const Dashboard: React.FC = ({ children }) => (
  <Wrapper>
    <Header />
    <Container>
      <Sidebar />
      <Content>{children}</Content>
    </Container>
  </Wrapper>
);

export default Dashboard;
