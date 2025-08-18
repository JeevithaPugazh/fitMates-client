import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Dashboard toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
};

export default App;