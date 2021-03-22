import React from 'react';
import { FiChevronLeft, FiChevronDown } from 'react-icons/fi';
import { Container, Content, Line, ToggleButton } from './styles';
import { useToogle } from '../../../hooks/Toggle';

const Header: React.FC = () => {
  const { handleToggle, toggleOpen } = useToogle();
  return (
    <Container>
      <Content>
        <ToggleButton onClick={handleToggle}>
          {toggleOpen ? <FiChevronLeft /> : <FiChevronDown />}
        </ToggleButton>
        <h1>Guia de Serviços</h1>
        <h1>Header</h1>
      </Content>
      <Line />
    </Container>
  );
};
export default Header;
