import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyled from './styles/global';
import { AuthProvider } from './hooks/Auth';
import Routes from './routes';
import ToastConainer from './components/common/ToastContainer';

const App: React.FC = () => (
  <>
    <GlobalStyled />
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
    <ToastConainer />
  </>
);

export default App;
