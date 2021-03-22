import React, { createContext, useContext, useState } from 'react';

interface ToggleContextData {
  handleToggle(): void;
  toggleOpen: boolean;
}

const ToogleContext = createContext<ToggleContextData>({} as ToggleContextData);

const ToogleProvider: React.FC = ({ children }) => {
  const [toggleOpen, setToggleOpen] = useState(false);

  function handleToggle(): void {
    setToggleOpen(!toggleOpen);
  }

  return (
    <ToogleContext.Provider value={{ handleToggle, toggleOpen }}>
      {children}
    </ToogleContext.Provider>
  );
};

function useToogle(): ToggleContextData {
  const context = useContext(ToogleContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export { ToogleProvider, useToogle };
