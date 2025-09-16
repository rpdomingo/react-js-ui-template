import React, { createContext, useContext, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './App.css';

// Color mode context for best practice
type ColorMode = 'light' | 'dark';
interface ColorModeContextProps {
  mode: ColorMode;
  toggleMode: () => void;
}
const ColorModeContext = createContext<ColorModeContextProps | undefined>(undefined);

export const useColorMode = () => {
  const ctx = useContext(ColorModeContext);
  if (!ctx) throw new Error('useColorMode must be used within ColorModeProvider');
  return ctx;
};

const getInitialMode = (): ColorMode => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('color-mode');
    if (stored === 'dark' || stored === 'light') return stored;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  }
  return 'light';
};

const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>(getInitialMode());

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('color-mode', mode);
  }, [mode]);

  const toggleMode = () => setMode(m => (m === 'dark' ? 'light' : 'dark'));

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

function App() {
  return (
    <ColorModeProvider>
      <RouterProvider router={router} />
    </ColorModeProvider>
  );
}

export default App;
