import React from 'react';

import { Container } from './styles';

interface ToogleProps {
  toogleOpen?: boolean;
}
const Sidebar: React.FC<ToogleProps> = ({ toogleOpen }) => (
  <Container sidebarToogleOpen={toogleOpen}>
    <h1>SideBar</h1>
  </Container>
);

export default Sidebar;
