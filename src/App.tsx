import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyled from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyled />

    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
