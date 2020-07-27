import React from 'react';

import { Wrapper, Container } from './styles';
import Header from '../../../components/admin/Header';
import Sidebar from '../../../components/admin/Sidebar';

const Dashboard: React.FC = ({ children }) => (
  <Wrapper>
    <Header />
    <Container>
      <Sidebar />
      {children}
    </Container>
  </Wrapper>
);

export default Dashboard;
