import React, { useState } from 'react';

import { Container } from './styles';

const Detail: React.FC = () => {
  const [detalhes, setDetalhes] = useState('');
  setDetalhes('detalhes');
  return (
    <Container>
      <h1>{detalhes}</h1>
    </Container>
  );
};

export default Detail;
