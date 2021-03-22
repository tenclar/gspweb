import React from 'react';

import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';
import { ToogleProvider } from './Toggle';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <ToogleProvider>{children}</ToogleProvider>
    </ToastProvider>
  </AuthProvider>
);
export default AppProvider;
