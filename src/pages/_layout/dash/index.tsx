import React from 'react';
import { useToogle } from '../../../hooks/Toggle';
import Header from '../../../components/dash/Header';
import Sidebar from '../../../components/dash/Sidebar';
import Footer from '../../../components/dash/Footer';
import { Wrapper, Content } from './styles';

const Dash: React.FC = ({ children }) => {
  const { toggleOpen } = useToogle();
  return (
    <Wrapper sidebarToogleOpen={toggleOpen}>
      <Header />

      {!toggleOpen && <Sidebar />}
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

export default Dash;
